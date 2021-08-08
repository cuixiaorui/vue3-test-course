export default class TodoItem {
  private _content: string;
  private _isDone: boolean;
  constructor(content) {
    this._content = content;
    this._isDone = false;
  }

  markDone() {
    this._isDone = true;
  }

  isDone() {
    return this._isDone;
  }

  getContent() {
    return this._content;
  }
}
