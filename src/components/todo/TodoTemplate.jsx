import React from "react";
import * as S from "./TodoStyle";

const TodoTemplate = () => {
  return (
    <div>
      <S.Todo>
        <S.BoxContainer>
          <S.FormContainer>
            <S.TodoTitle>Todo List</S.TodoTitle>
          </S.FormContainer>
        </S.BoxContainer>
      </S.Todo>
    </div>
  );
};

export default TodoTemplate;
