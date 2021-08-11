<template>
  <div>
    <input type="text" v-model="newTodo" data-test="todoText" />
    <button @click="addTodo">add</button>
    <div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.getContent() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TodoService, TodoParameter, Todos } from "../core/todoService";
import { reactive, ref } from "vue";

// 组件 setup 这层可以做为 control layer 一样

const newTodo = ref("");
const todos = reactive<Todos>([]);
const todoService = new TodoService(todos as Todos);

function addTodo() {
  todoService.addTodoItem(new TodoParameter(newTodo.value));
  newTodo.value = ""
}
</script>

<style scoped></style>
