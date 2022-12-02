describe("Task", () => {
  it("create item and edit content", () => {
    // 在加一个功能点
    // 用户可以看到之前创建的 items
    // 这一点就可以驱动出来 api 的请求了
    // 那么在 cypress 中需要先 mock server data
    // 怎么做？
    // cy.intercept("GET", "/items", [
    //   { id: 1, title: "吃饭" },
    //   { id: 2, title: "睡觉" },
    // ]).as("get-items");

    cy.visit("http://localhost:5174/");
    // cy.get("#newItem").type("1234{enter}");
    // cy.contains("1234")

    // 1. 屏幕里面应该有 1234 这个 item 了
    // 点击 item
    // 检测在编辑区里面有  1234 这个内容
    // 如何检测一个 element 内的内容呢？
  });
});
