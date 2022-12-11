<template>
  <div data-cy="Todo">
    <div class="bg-purple-600 flex justify-center text-center">
      <h1 class="">todo-list</h1>
    </div>
    <div>
      <input type="text" data-cy="addTodo" v-model="newTodo" @keypress.enter="addTodo" />
      <button @click="addTodo">add</button>
    </div>
    <main>
      <div>
        <ul>
          <li v-for="todoItem in todoStore.todoList" :key="todoItem.id">
            <div data-cy="todoItem">
              <h1>{{ todoItem.title }}</h1>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <div>
      <button @click="handleGoToAbout">go to about</button>
      <div>
        <RouterLink :to="{name:'Home'}">go to Home</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTodoStore } from "../store";
import { useRouter } from 'vue-router'

const router = useRouter()
const todoStore = useTodoStore();

const newTodo = ref("");

onMounted(() => {
  todoStore.init()
});

function addTodo() {
  todoStore.addTodo(newTodo.value)
}

function handleGoToAbout() {
  router.push({ name: "About" })
  console.log("??????????/")
}

</script>

<style scoped>

</style>
