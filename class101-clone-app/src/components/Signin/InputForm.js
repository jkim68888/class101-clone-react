import React from "react";

import { InputFormWrapper } from "./Styles";

const InputForm = () => {
  return (
    <InputFormWrapper>
      <label for="email">이메일</label>
      <input id="email" type="text" placeholder="example@naver.com" />
      <label for="pw">비밀번호</label>
      <input id="pw" type="password" placeholder="********" />
      <a>회원가입하기</a>
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
          <div className="google"></div>
        </div>
        <div className="socialBackground">
          <div className="naver"></div>
        </div>
      </div>
    </InputFormWrapper>
  );
};

export default InputForm;
