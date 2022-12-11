import { coroutine } from "cypress/types/bluebird";
import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "../router";
import User from "./User.vue";

describe("User Component", () => {
  //   it("render ", () => {
  //     let router = createRouter({
  //       routes,
  //       history: createMemoryHistory(),
  //     });

  //     router.currentRoute.value.params.username = "cxr"

  //     cy.mount(User, {
  //       global: {
  //         plugins: [router],
  //       },
  //     }).then(() => {
  //       router.push({ name: "User", params: { username: "cxr" } });
  //     });
  //   });

  it("render ", () => {
    let router = createRouter({
      routes,
      history: createMemoryHistory(),
    });

    cy.mount(User, {
      global: {
        plugins: [router],
      },
      props:{
        username:"cxr"
      }
    });
  });
});
