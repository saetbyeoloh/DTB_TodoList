import React from "react";
import AuthButton from "../../components/auth/AuthButton";
import AuthInput from "../../components/auth/AuthInput";
import * as S from "./AuthStyle.js";

const SignIn = () => {
  return (
    <S.Auth>
      <S.BoxContainer>
        <S.FormContainer>
          <S.SigninTitle>Login</S.SigninTitle>
          <AuthInput type={"email"} />
          <AuthInput type={"password"} />
          <AuthButton>Login</AuthButton>
        </S.FormContainer>
      </S.BoxContainer>
    </S.Auth>
  );
};

export default SignIn;
