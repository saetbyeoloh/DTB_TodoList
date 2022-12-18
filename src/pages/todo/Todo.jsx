import React from "react";
import TodoInput from "../../components/todo/TodoInput";
import TodoTemplate from "../../components/todo/TodoTemplate";

const Todo = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoInput></TodoInput>
      </TodoTemplate>
    </div>
  );
};

export default Todo;
