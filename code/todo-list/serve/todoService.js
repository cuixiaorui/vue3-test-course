let id = 4;
const todoList = [];

class TodoItem {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }
  
  toString(){
    return {
      title: this.title,
      id: this.id,
    }
  }
}

todoList.push(new TodoItem("吃饭", 1));
todoList.push(new TodoItem("睡觉", 2));
todoList.push(new TodoItem("写代码", 3));


module.exports = {
  getTodoList() {
    return todoList.map((todo) => { return todo.toString() })
  },

  addTodo(title) {
    todoList.push(new TodoItem(title, ++id));
  },

  deleteData(id) {
    // const index = formData.findIndex(d => d.id == id);
    // formData.splice(index, 1);
  },
};
