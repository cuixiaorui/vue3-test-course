// 值类型

import TodoItem from "./TodoItem";

export default class TodoParameter {
  private content: string;
  constructor(content) {
    this.content = content;
  }
  getContent(): any {
    return this.content;
  }
}

export function addTodoItem(todoParameter: TodoParameter): TodoItem {
  return new TodoItem(todoParameter.getContent());
}

export function markTodoItemDone() {}
export function list() {
  return [];
}
