// 值类型

import TodoItem from "./TodoItem";

export class TodoParameter {
  private content: string;
  constructor(content) {
    this.content = content;
  }
  getContent(): any {
    return this.content;
  }
}

export class TodoIndexParameter {
  private _index: string;
  constructor(index) {
    this._index = index;
  }
  getIndex() {
    return this._index;
  }
}

let items: Array<TodoItem> = [];
export function addTodoItem(todoParameter: TodoParameter): TodoItem {
  const todoItem = new TodoItem(todoParameter.getContent());
  items.push(todoItem);
  return todoItem;
}

export function markTodoItemDone(todoIndex: TodoIndexParameter): TodoItem {
  // TODO 没有处理 index 没有的情况
  const todoItem = items[todoIndex.getIndex()] as TodoItem;
  todoItem.markDone();
  console.log(todoItem);
  console.log(items.length);
  return todoItem;
}
export function list() {
  return items;
}
