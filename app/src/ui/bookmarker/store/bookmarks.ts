import { connect } from '../../lib';
import { observable, IObservableArray } from 'mobx';
import Bookmark from './bookmark';

export default class Bookmarks {
  @observable
  public bookmarks: IObservableArray<Bookmark>;
  @observable
  public activeFile: string;

  private connection: Promise<any>;

  constructor() {
    this.bookmarks = observable([]);

    this.connection = connect();

    this.connection.then(connection => {
      connection.subscribe((message: any) => {
        this.activeFile = message.filePath;
      });
    });
  }

  openInEditor = (path: string) => {
    this.connection.then(connection => {
      connection.send({
        type: 'open-editor',
        path
      });
    });
  };

  setBookmark = (path: string) => {
    const doesBookmarkExist = this.bookmarks.find(b => b.path === path);

    if (doesBookmarkExist) {
      return;
    }

    this.bookmarks.push(new Bookmark('Title', path, ''));
  };
}
