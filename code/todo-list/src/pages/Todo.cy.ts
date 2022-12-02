import Todo from "./Todo.vue";
import { createTestingPinia } from "@pinia/testing";
import { useTodoStore } from "../store";
describe("Todo.vue", () => {
  /* it("render", async () => { */
  /*   let resCallCount = 0; */
  /*   cy.intercept( */
  /*     { */
  /*       method: "GET", */
  /*       url: "http://localhost:5173/api/todoList", */
  /*     }, */
  /*     (req) => { */
  /*       req.on("response", (res) => { */
  /*         resCallCount++; */
  /*         res.send({ */
  /*           data: todoList, */
  /*         }); */
  /*       }); */
  /*     } */
  /*   ).as("todoList"); */
  /*   cy.mount(Todo, { */
  /*     global:{ */
  /*       plugins:[createTestingPinia()] */
  /*     } */
  /*   }); */
  /*   cy.contains(todoList[0].title); */
  /*   cy.contains(todoList[1].title); */
  /*   cy.contains(todoList[2].title); */
  /*   // 验证有 3 个 todoItem */
  /*   cy.getByCy("todoItem").should("have.length", todoList.length); */
  /*   // add todo item */
  /*   cy.intercept({ */
  /*     method: "POST", */
  /*     url: "http://localhost:5173/api/addTodo", */
  /*   }).as("addTodo"); */
  /*   const newTodo = "看比赛"; */
  /*   cy.getByCy("addTodo").type(newTodo); */
  /*   cy.get("button").click(); */
  /*   cy.wait("@addTodo") */
  /*     .its("request.body") */
  /*     .should("deep.equal", { title: newTodo }); */
  /*   cy.wait("@todoList").then(() => { */
  /*     expect(resCallCount).to.be.eq(2); */
  /*   }); */
  /* }); */
});

/* it("for pinia stub way", async () => { */
/*   const todoList = [ */
/*     { */
/*       id: 1, */
/*       title: "吃饭", */
/*     }, */
/*     { */
/*       id: 2, */
/*       title: "睡觉", */
/*     }, */
/*     { */
/*       id: 3, */
/*       title: "写代码", */
/*     }, */
/*   ]; */

/*   /1* let resCallCount = 0; *1/ */
/*   /1* cy.intercept( *1/ */
/*   /1*   { *1/ */
/*   /1*     method: "GET", *1/ */
/*   /1*     url: "http://localhost:5173/api/todoList", *1/ */
/*   /1*   }, *1/ */
/*   /1*   (req) => { *1/ */
/*   /1*     req.on("response", (res) => { *1/ */
/*   /1*       resCallCount++; *1/ */
/*   /1*       res.send({ *1/ */
/*   /1*         data: todoList, *1/ */
/*   /1*       }); *1/ */
/*   /1*     }); *1/ */
/*   /1*   } *1/ */
/*   /1* ).as("todoList"); *1/ */

/*   cy.mount(Todo, { */
/*     global: { */
/*       plugins: [ */
/*         createTestingPinia({ */
/*           createSpy: cy.stub, */
/*         }), */
/*       ], */
/*     }, */
/*   }); */

/*   const todoStore = useTodoStore(); */
/*   todoStore.todoList = todoList; */

/*   // 点击 add 按钮 */
/*   const newTodo = "看比赛"; */
/*   cy.getByCy("addTodo").type(newTodo); */
/*   cy.get("button") */
/*     .click() */
/*     .then(() => { */
/*       expect(todoStore.addTodo).to.have.been.calledWith(newTodo); */
/*     }); */

/*   /1* cy.contains(todoList[0].title); *1/ */
/*   /1* cy.contains(todoList[1].title); *1/ */
/*   /1* cy.contains(todoList[2].title); *1/ */

/*   /1* // 验证有 3 个 todoItem *1/ */
/*   /1* cy.getByCy("todoItem").should("have.length", todoList.length); *1/ */

/*   /1* // add todo item *1/ */
/*   /1* cy.intercept({ *1/ */
/*   /1*   method: "POST", *1/ */
/*   /1*   url: "http://localhost:5173/api/addTodo", *1/ */
/*   /1* }).as("addTodo"); *1/ */

/*   /1* const newTodo = "看比赛"; *1/ */
/*   /1* cy.getByCy("addTodo").type(newTodo); *1/ */
/*   /1* cy.get("button").click(); *1/ */

/*   /1* cy.wait("@addTodo") *1/ */
/*   /1*   .its("request.body") *1/ */
/*   /1*   .should("deep.equal", { title: newTodo }); *1/ */

/*   /1* cy.wait("@todoList").then(() => { *1/ */
/*   /1*   expect(resCallCount).to.be.eq(2); *1/ */
/*   /1* }); *1/ */
/* }); */

it("for pinia not stub way", async () => {
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

  let resCallCount = 0;
  cy.intercept(
    {
      method: "GET",
      url: "http://localhost:5173/api/todoList",
    },
    (req) => {
      req.on("response", (res) => {
        resCallCount++;
        res.send({
          data: todoList,
        });
      });
    }
  ).as("todoList");

  cy.mount(Todo, {
    global: {
      plugins: [
        createTestingPinia({
          stubActions:false,
          createSpy: cy.stub
        }),
      ],
    },
  });

    cy.contains(todoList[0].title);
    cy.contains(todoList[1].title);
    cy.contains(todoList[2].title);
    // 验证有 3 个 todoItem
    cy.getByCy("todoItem").should("have.length", todoList.length);
    // add todo item
    cy.intercept({
      method: "POST",
      url: "http://localhost:5173/api/addTodo",
    }).as("addTodo");
    const newTodo = "看比赛";
    cy.getByCy("addTodo").type(newTodo);
    cy.get("button").click();
    cy.wait("@addTodo")
      .its("request.body")
      .should("deep.equal", { title: newTodo });
    cy.wait("@todoList").then(() => {
      expect(resCallCount).to.be.eq(2);
    });
  
});