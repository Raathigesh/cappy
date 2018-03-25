import QuickImport from './quick-import';
import { FileCache } from '../core/files/cache';

export default class ExtensionManager {
  private extensionsConstructors: any[] = [QuickImport];
  private exensionInstances: any[] = [];
  private fileCache = new FileCache('D:\\projects\\cappy\\example');

  public boostrap() {
    for (const ExtensionConstructor of this.extensionsConstructors) {
      this.exensionInstances.push(new ExtensionConstructor(this.fileCache));
    }
  }
}
