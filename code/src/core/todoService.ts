// 值类型

import TodoItem from "./TodoItem";

export type Todos = Array<TodoItem>;

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

export class TodoService {
  private _todos: Array<TodoItem>;
  constructor(todos?: Todos) {
    this._todos = todos || [];
  }

  addTodoItem(todoParameter: TodoParameter): TodoItem {
    const todoItem = new TodoItem(todoParameter.getContent());
    this._todos.push(todoItem);
    return todoItem;
  }

  markTodoItemDone(todoIndex: TodoIndexParameter): TodoItem {
    // TODO 没有处理 index 没有的情况
    const todoItem = this._todos[todoIndex.getIndex()] as TodoItem;
    todoItem.markDone();
    return todoItem;
  }
}
