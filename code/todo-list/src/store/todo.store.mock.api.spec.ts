import { test, expect, describe, vi, beforeEach } from "vitest";
import { useTodoStore } from "./todo.store";
import flushPromises from "flush-promises";
import { http } from "../api";
import { setActivePinia, createPinia } from "pinia";

describe("todoStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("get todolist", async () => {
    const todoList = [
      {
        id: 1,
        title: "吃饭",
      },
      {
        id: 2,
        title: "睡觉",
      },
      {
        id: 3,
        title: "写代码",
      },
    ];

    vi.spyOn(http, "get").mockImplementation(() => {
      return Promise.resolve({ data: { data: todoList } });
    });

    const todoStore = useTodoStore();
    await todoStore.init();
    await flushPromises();
    expect(todoStore.todoList).toEqual(todoList);
  });
});
