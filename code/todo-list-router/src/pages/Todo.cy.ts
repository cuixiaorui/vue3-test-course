import Todo from "./Todo.vue";
import { createTestingPinia } from "@pinia/testing";
import { createRouter, createMemoryHistory } from "vue-router";
import { routes } from "../router";

describe("Todo.vue", () => {
  it("should to go home page when click go to home button", () => {
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:5173/api/todoList",
      },
      { fixture: "todoList" }
    ).as("todoList");

    let router = createRouter({
      routes,
      history: createMemoryHistory(),
    });

    // 这里有趣  不需要把 createTestingPinia 放到 cy.mount 的 plugins 也是生效的
    createTestingPinia({
      createSpy: cy.stub
    })

    cy.mount(Todo, {
      global:{
        plugins:[router]
      }
    })

    cy.contains("go to Home")
      .click()
      .then(() => {
        expect(router.currentRoute.value.name).to.be.eq("Home");
      });
  });

});
