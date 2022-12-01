import React from "react";
import AuthButton from "../../components/auth/AuthButton";
import AuthInput from "../../components/auth/AuthInput";

const SignIn = () => {
  return (
    <div>
      <h2>로그인을 해주세요</h2>
      <AuthButton>버튼</AuthButton>
      <AuthInput type="" placeholder="email" />
      <AuthInput />
    </div>
  );
};

export default SignIn;
