export default class TodoItem {
  private _content: string;
  constructor(content) {
    this._content = content;
  }

  getContent() {
    return this._content;
  }
}
