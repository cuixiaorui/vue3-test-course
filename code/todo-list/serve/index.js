const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const koaBody = require("koa-body");
const formData = require("./data.js");
const todoService = require("./todoService");

const app = new Koa();

app.use(serve(__dirname + "/static"));

app.use(
  koaBody({
    multipart: true,
  })
);

const router = new Router();

router.get("/todoList", (ctx) => {
  ctx.body = {
    state: 1,
    data: todoService.getTodoList(),
  };
});

// 添加一个 todo
router.post("/addTodo", (ctx) => {
  const { title } = ctx.request.body;
  todoService.addTodo(title);
  ctx.body = {
    state: 1,
    data: {},
  };
});

// 数据编辑
// router.post("/modify", (ctx) => {
//   const { id, hobby, username, email, gender } = ctx.request.body;
//   formData.modifyData({ id, hobby, username, email, gender });
//   ctx.body = { state: 1, data: formData.getData() };
// });

// 数据删除
// router.get("/delete", (ctx) => {
//   const { id } = ctx.query;
//   console.log(id);
//   formData.deleteData(id);
//   ctx.body = { state: 1, data: formData.getData() };
// });

app.use(router.routes());

app.listen(8081, () => {
  console.log("open server localhost:8081");
});
