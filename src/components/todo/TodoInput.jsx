import React from "react";
import styled from "styled-components";

const TodoInput = () => {
  return (
    <div>
      <Inputbox placeholder="wirte your todo" />
    </div>
  );
};

export default TodoInput;

const Inputbox = styled.input`
  width: 200px;
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  border-radius: 5px;
  // border: none;
  background: #34a65f;
  color: white;
`;
