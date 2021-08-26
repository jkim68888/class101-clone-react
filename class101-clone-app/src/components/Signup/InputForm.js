import React from "react";

import { InputFormWrapper } from "./Styles";

const InputForm = () => {
  return (
    <InputFormWrapper>
      <label for="name">이름</label>
      <input id="name" type="text" placeholder="홍길동" />
      <label for="email">이메일</label>
      <input id="email" type="text" placeholder="example@naver.com" />
      <label for="pw">비밀번호</label>
      <input id="pw" type="password" placeholder="********" />
      <label for="pwchk">비밀번호 확인</label>
      <input id="pwchk" type="password" placeholder="********" />
      <div className="btnBackground">
        <button>동의하고 회원가입</button>
      </div>
      <p>
        <span className="blue">
          이용약관, 개인정보 수집 및 이용, 개인정보 제공
        </span>
        내용을 확인하였고 동의합니다.
        <span className="black">
          (개인 포트폴리오입니다. 따로 약관이 있지 않습니다.)
        </span>
      </p>
    </InputFormWrapper>
  );
};

export default InputForm;
