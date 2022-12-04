import { React, useState } from "react";
import AuthButton from "../../components/auth/AuthButton";
import AuthInput from "../../components/auth/AuthInput";
import * as S from "./AuthStyle.js";
import { Link, Navigate } from "react-router-dom";
import { client } from "../../apis/AuthApi";
import { useEffect } from "react";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

const SignIn = () => {
  const [user, SetUser] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value, // 계산된 프로퍼티 : 중복되면 덮어쓰기
    });
  };

  const handelClick = () => {
    //Navigate("/todo");
    client
      .post("auth/signin", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.access_token) {
          localStorage.setItem("token", res.data.access_token);
        }
        alert("환영합니다.");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <S.Auth>
      <S.BoxContainer>
        <S.FormContainer>
          <S.SigninTitle>Login</S.SigninTitle>
          <AuthInput type="email" placeholder="email" onChange={handleChange} />
          {!isValid && (
            <S.SignInWarning>이메일 형식을 확인해주세요</S.SignInWarning>
          )}
          <AuthInput
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          <S.SignInWarning>비밀번호를 확인해 주세요</S.SignInWarning>
          <AuthButton onClick={handelClick}>Login</AuthButton>
          <S.Singinletter>
            <Link to="/join">회원가입하러 가기</Link>
          </S.Singinletter>
        </S.FormContainer>
      </S.BoxContainer>
    </S.Auth>
  );
};

export default SignIn;
