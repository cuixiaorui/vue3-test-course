import { createRouter, createWebHashHistory } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Todo from "../pages/Todo.vue";
import User from "../pages/User.vue";

export const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/user/:username", component: User, name: "User" , props: true},
  { path: "/todo", component: Todo, name: "Todo" },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
