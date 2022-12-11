const formData = [
  {
    id: 1,
    username: "小红",
    email: "xiaohong@qq.com",
    gender: "女",
    hobby: ["弹琴", "读书"]
  },
  {
    id: 2,
    username: "小黑",
    email: "xiaohei@qq.com",
    gender: "男",
    hobby: ["篮球", "读书", "编程"]
  },
  {
    id: 3,
    username: "小亮",
    email: "xiaoliang@qq.com",
    gender: "男",
    hobby: ["篮球", "读书", "编程"]
  },
  {
    id: 4,
    username: "小五",
    email: "xiaowu@qq.com",
    gender: "男",
    hobby: ["篮球", "读书", "编程"]
  },
  {
    id: 5,
    username: "小海",
    email: "aaa@qq.com",
    gender: "男",
    hobby: ["篮球", "读书", "编程"]
  },
  {
    id: 6,
    username: "小紫",
    email: "aaa@qq.com",
    gender: "男",
    hobby: ["篮球", "读书", "编程"]
  }
];

module.exports = {
  getData() {
    return formData;
  },

  modifyData({ id, hobby, username, email, gender }) {
    const rawData = formData.find(d => d.id == id);
    if (!rawData) {
      console.log("无效的id");
      return;
    }
    if (hobby) rawData.hobby = hobby;
    if (username) rawData.username = username;
    if (email) rawData.email = email;
    if (gender) rawData.gender = gender;
  },

  deleteData(id) {
    const index = formData.findIndex(d => d.id == id);
    formData.splice(index, 1);
  }
};
