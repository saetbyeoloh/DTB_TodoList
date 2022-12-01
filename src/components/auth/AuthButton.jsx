import React, { Children } from "react";
import styled from "styled-components";

const AuthButton = ({ Children, onClick, ...rest }) => {
  return (
    <div>
      <StyledWrapper onClick={onClick} {...rest}>
        {Children}
      </StyledWrapper>
    </div>
  );
};

export default AuthButton;

const StyledWrapper = styled.button`
    margin-top : 1rem;
    padding-top : 0.6rem;
    padding - bottom : 0.5rem;
    border: none;
    background : ${(props) => props.theme.textColor};
    color : white;
    text-align: center;
    font-size: 1.25rem;
    font-weight : 500;
    cursor: pointer;

`;
