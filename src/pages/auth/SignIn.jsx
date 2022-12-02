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
          <AuthInput type="email" placeholder="email" />
          <AuthInput type="password" placeholder="password" />
          <AuthButton>Login</AuthButton>
          <S.Singinletter>회원가입 하러가기</S.Singinletter>
        </S.FormContainer>
      </S.BoxContainer>
    </S.Auth>
  );
};

export default SignIn;
