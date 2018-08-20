import { observable } from 'mobx';

export default class Bookmark {
  @observable
  public title: string;
  @observable
  public path: string;
  @observable
  public comment: string;

  constructor(title: string, path: string, comment: string) {
    this.title = title;
    this.path = path;
    this.comment = comment;
  }

  setComment(comment: string) {
    this.comment = comment;
  }
}
