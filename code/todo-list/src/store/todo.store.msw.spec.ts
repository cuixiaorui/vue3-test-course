import { test, expect, describe, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "./todo.store";
import flushPromises from "flush-promises";
import { TODO_API } from "../api";

import { rest } from "msw";

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

    globalThis.server.use(
      rest.get(TODO_API.getTodoListUrl, (req, res, ctx) => {
        return res(ctx.json({ data: todoList }));
      })
    );

    const todoStore = useTodoStore();
    await todoStore.init();
    await flushPromises();
    expect(todoStore.todoList).toEqual(todoList);
  });
});
