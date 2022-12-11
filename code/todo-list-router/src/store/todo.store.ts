import { defineStore } from "pinia";
import { ref } from "vue";
import { apiGetTodoList, apiAddTodo } from "../api";

interface Todo {
  title: string;
  id: number;
}

type Todos = Todo[];

export const useTodoStore = defineStore("todo", () => {
  const todoList = ref<Todos>([]);

  async function updateTodoList() {
    const { data } = await apiGetTodoList();
    todoList.value = data.data;
  }

  async function init() {
    updateTodoList();
  }

  function addTodo(newTodoTitle: string) {
    apiAddTodo(newTodoTitle).then(() => {
      updateTodoList();
    });
  }

  return {
    todoList,
    addTodo,
    init,
  };
});
