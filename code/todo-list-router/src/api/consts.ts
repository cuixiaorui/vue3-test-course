const API = {
  getTodoListUrl: "/todoList",
} 

type ApiType = typeof API

const HOST = "http://localhost:8081";

function transferApiForTestEnv(){
  const api = {} ;

  for (const key in API) {
    const value = API[key];
    api[key] = HOST + value;
  }

  return (api) as ApiType;
}

export const TODO_API =
  process.env.NODE_ENV === "test" ? transferApiForTestEnv(): API;