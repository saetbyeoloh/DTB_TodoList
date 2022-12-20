import React from "react";
import TodoInput from "../../components/todo/TodoInput";
import TodoTemplate from "../../components/todo/TodoTemplate";
import TodoList from "../../components/todo/TodoList";
import TodoItem from "../../components/todo/TodoItem";

const Todo = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoInput></TodoInput>
        <TodoList>
          <TodoItem />
        </TodoList>
      </TodoTemplate>
    </div>
  );
};

export default Todo;
