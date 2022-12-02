import { http } from "./http";

export function apiGetTodoList() {
  return http.get("/todoList");
}

export function apiAddTodo(title:string) {
  return http.post("/addTodo", {
    title,
  });
}
