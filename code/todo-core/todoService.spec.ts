// TODO service 需要变成一个class 或者 需要一个 clean 的逻辑 把所有的  todoItem 清空
// 现在是测试和测试之间有耦合关系了
// 这里的纠结点是我不想用 class 来表示 service ，只是想用一个 js 文件
// 这样是更符合前端的风格的
// 注意这个教程不要有太多的 java 味道
// 如果是一个 class 的话，那么会是什么样子的
// 有 class 的话也还可以

// 对于前端来讲的话，需不需要 repository 层呢？（而前端的这一层的作用就是和后端通信）
// 后端对于这一层的职责就是 save 和 取数据

import { TodoParameter, TodoService, TodoIndexParameter } from "./todoService";

describe("todoService", () => {
  it("should add todo item", () => {
    const todoService = new TodoService();
    const item = todoService.addTodoItem(new TodoParameter("吃饭"));
    expect(item.getContent()).toBe("吃饭");
  });

  it("should mark todo item when item as done", () => {
    const todoService = new TodoService();
    todoService.addTodoItem(new TodoParameter("吃饭"));
    const item = todoService.markTodoItemDone(new TodoIndexParameter(0));
    expect(item.isDone()).toBe(true);
  });
});
