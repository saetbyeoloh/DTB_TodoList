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
  with: 100px;
  padding: 0.5rem 1rem;
`;
