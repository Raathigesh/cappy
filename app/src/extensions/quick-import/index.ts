import { register } from '../../portal/server';
import { FileCache } from '../../core/files/cache';
import { getContentOfFiles } from '../../core/files/helpers';
import getReactComponents from '../../core/ast/getReactComponent';

export default class QuickImports {
  private cache: FileCache;
  private components: any;
  constructor(cache: FileCache) {
    this.cache = cache;
    const readDirectory$ = cache.readRoot();

    register('QuockImports', {}, (client: any) => {
      this.getComponentList().then(items => {
        this.components = items;
        client.addComponents(
          this.components.map((item: any) => ({
            name: item.displayName,
            path: item.path
          }))
        );
      });

      readDirectory$.subscribe(() => {
        client.addComponents(['Sample Component from server subscribe']);
      });
    });
  }

  public getComponentList() {
    return getContentOfFiles(Array.from(this.cache.files.keys())).then(
      pathAndContents => {
        const results: any = [];
        for (const pathAndContent of pathAndContents) {
          results.push(
            ...this.getExportedComponents(
              pathAndContent.content,
              pathAndContent.path
            )
          );
        }
        return results;
      }
    );
  }

  private getExportedComponents(source: string, path: string) {
    return getReactComponents(source).map((component: any) => ({
      displayName: component.displayName,
      path
    }));
  }
}
