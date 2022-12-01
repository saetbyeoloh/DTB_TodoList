import React from "react";
import styled from "styled-components";

const AuthInput = () => {
  return (
    <div>
      <label>
        <Inputbox />
      </label>
    </div>
  );
};

export default AuthInput;

const Inputbox = styled.input`
  width: 200px;
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  border-radius: 5px;
  // border: none;
  background: #34a65f;
  color: white;
`;
