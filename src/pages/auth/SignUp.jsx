import React from "react";
import * as S from "./AuthStyle.js";
import AuthButton from "../../components/auth/AuthButton";
import AuthInput from "../../components/auth/AuthInput";

const SignUp = () => {
  return (
    <S.Auth>
      <S.BoxContainer>
        <S.FormContainer>
          <S.SigninTitle>Sign Up</S.SigninTitle>
          <AuthInput type="text" placeholder="email" />
          <AuthInput />
          <AuthButton>SignUp</AuthButton>
        </S.FormContainer>
      </S.BoxContainer>
    </S.Auth>
  );
};

export default SignUp;
