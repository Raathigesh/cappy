const recursiveReadDir = require('recursive-readdir');
import { Subject } from 'rxjs';
import { read } from '../file/read';
import * as invariant from 'invariant';

interface UpdateStreams {
  readDirectory: Subject<Map<string, any>>;
}

// holds files and their ast
export class FileCache {
  public files: Map<string, any> = new Map();
  private streams: UpdateStreams = {
    readDirectory: new Subject()
  };
  private root: string = '';
  private activeDocument: string = '';

  constructor(root: string) {
    this.root = root;
  }

  public readRoot() {
    invariant(this.root, 'Root is not set');
    return this.readDirectory(this.root, ['/node_modules']);
  }

  public readDirectory(path: string, ignores: string[]) {
    recursiveReadDir(path, ignores).then((filePaths: string[]) => {
      console.log(filePaths);
      for (const file of filePaths) {
        this.files.set(file, file);
      }
      this.streams.readDirectory.next(this.files);
    });
    return this.streams.readDirectory;
  }

  public updateContent(path: string, content: string = '') {
    if (content) {
      this.files.set(path, content);
      return Promise.resolve();
    }

    return read(path).then(fileContent => {
      this.files.set(path, fileContent);
    });
  }

  public delete(path: string) {
    this.files.delete(path);
  }

  public getContent(path: string) {
    return this.files.get(path);
  }
}
