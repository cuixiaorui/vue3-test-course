// TODO service 需要变成一个class 或者 需要一个 clean 的逻辑 把所有的  todoItem 清空
// 现在是测试和测试之间有耦合关系了
import {
  TodoParameter,
  addTodoItem,
  markTodoItemDone,
  TodoIndexParameter,
} from "./todoService";
describe("todoService", () => {
  it("should add todo item", () => {
    const item = addTodoItem(new TodoParameter("吃饭"));
    expect(item.getContent()).toBe("吃饭");
  });

  it("should mark todo item when item as done", () => {
    addTodoItem(new TodoParameter("吃饭"));
    const item = markTodoItemDone(new TodoIndexParameter(1));
    expect(item.isDone()).toBe(true);
  });
});
