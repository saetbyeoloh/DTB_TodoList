import { React, useState } from "react";
import * as S from "./AuthStyle.js";
import AuthButton from "../../components/auth/AuthButton";
import AuthInput from "../../components/auth/AuthInput";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { client } from "../../apis/AuthApi.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, SetUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {}, [user]);
  const ClickSingUp = () => {
    navigate("/");
    client
      .post("auth/signup", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.access_token) {
          localStorage.setItem("token", res.data.access_token);
        }
        alert("회원가입 완료");
      })
      .catch((err) => {
        console.log(user);
        alert(err.response.data.message);
      });
  };

  return (
    <S.Auth>
      <S.BoxContainer>
        <S.FormContainer>
          <S.SigninTitle>Sign Up</S.SigninTitle>
          <AuthInput type="text" placeholder="email" onChange={onChange} />
          <AuthInput
            type="password"
            placeholder="password"
            onChange={onChange}
          />
          <AuthButton onClick={ClickSingUp}>SignUp</AuthButton>
        </S.FormContainer>
      </S.BoxContainer>
    </S.Auth>
  );
};

export default SignUp;
