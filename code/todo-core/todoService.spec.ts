import TodoParameter, { addTodoItem } from "./todoService";
describe("todoService", () => {
  it("should add todo item", () => {
    const item = addTodoItem(new TodoParameter("吃饭"));
    expect(item.getContent()).toBe("吃饭");
  });
});
