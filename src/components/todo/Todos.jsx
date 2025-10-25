import React, { useState } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const todoItems = ["Sample Todo 1", "Sample Todo 2"];
  const [todolist, setTodolist] = useState(todoItems);
  const addTodoItem = (data) => {
    setTodolist([...todolist, data]);
    console.log("todo ", data);
  };
  return (
    <>
      <div className="container bg-light p-4 mt-4 rounded text-center">
        <h2 className="mt-5 text">Assignment -2 Todo</h2>
        <InputTodo addTodo={addTodoItem} />
      </div>
      <div className="container">
        <TodoList todos={todolist} />
      </div>
    </>
  );
};

export default Todos;
