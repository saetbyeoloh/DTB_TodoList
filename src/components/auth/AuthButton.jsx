import React, { Children } from "react";
import styled from "styled-components";

const AuthButton = ({ Children, onClick, ...rest }) => {
  return (
    <div>
      <AuthBtn>Login</AuthBtn>
    </div>
  );
};

export default AuthButton;

const AuthBtn = styled.button`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;
  border: none;
  text-align: center;
  cursor: pointer;
  width: 240px;
  border-radius: 5px;
  &:hover {
    background-color: #cc231e;
  }
`;
