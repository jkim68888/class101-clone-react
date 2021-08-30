import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { InputFormWrapper } from "./Styles";

const InputForm = () => {
  const onGoogleClick = (provider) => {
    firebase
      .auth()
      .GoogleAuthProvider(provider)
      .signInWithPopup()
      .then()
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <InputFormWrapper>
      <label for="email">이메일</label>
      <input id="email" type="text" placeholder="example@naver.com" />
      <label for="pw">비밀번호</label>
      <input id="pw" type="password" placeholder="********" />
      <Link to="/signup">
        <a>회원가입하기</a>
      </Link>
      <div className="btnBackground">
        <button>로그인</button>
      </div>
      <div className="borderBox">
        <p>소셜 로그인</p>
      </div>
      <div className="socialLoginBox">
        <div className="socialBackground">
          <div className="kakao"></div>
        </div>
        <div className="socialBackground">
          <div onClick={onGoogleClick} className="google"></div>
        </div>
        <div className="socialBackground">
          <div className="naver"></div>
        </div>
      </div>
    </InputFormWrapper>
  );
};

export default InputForm;
