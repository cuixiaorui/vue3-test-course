export { http } from "./http";
export { TODO_API } from "./consts";
import { http } from "./http";
import { TODO_API } from "./consts";

export function apiGetTodoList() {
  return http.get(TODO_API.getTodoListUrl);
}

export function apiAddTodo(title: string) {
  return http.post("/addTodo", {
    title,
  });
}
