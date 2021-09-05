import React, { useState } from "react";
import { useHistory } from "react-router";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebaseConfig";

import { InputFormWrapper } from "./Styles";

const InputForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailChange = (event) => {
    const message = document.getElementById("emailValidation");

    message.style.display = "inline";

    if (event.target.value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      message.textContent = "올바른 이메일 형식입니다.";
      message.style.color = "#6cd15a";
    } else {
      message.textContent = "올바른 이메일 형식이 아닙니다.";
      message.style.color = "#e64841";
    }

    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    const message = document.getElementById("pwValidation");

    message.style.display = "inline";

    if (event.target.value.length >= 8) {
      message.textContent = "올바른 비밀번호 형식입니다.";
      message.style.color = "#6cd15a";
    } else {
      message.textContent = "비밀번호는 8자리 이상 입력하세요.";
      message.style.color = "#e64841";
    }

    setPassword(event.target.value);
  };

  const passwordConfirm = (event) => {
    const message = document.getElementById("pwChkValidation");
    const pw = document.getElementById("pw");
    const pwchk = document.getElementById("pwchk");

    message.style.display = "inline";

    if (pw.value === pwchk.value) {
      message.textContent = "비밀번호가 일치합니다.";
      message.style.color = "#6cd15a";
    } else {
      message.textContent = "비밀번호가 일치하지 않습니다.";
      message.style.color = "#e64841";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        history.push({
          pathname: "/",
          state: { user: user.uid },
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <InputFormWrapper>
      <form onSubmit={handleSubmit}>
        <label for="name">이름</label>
        <input required id="name" type="text" placeholder="홍길동" />
        <label for="email">이메일</label>
        <input
          required
          onChange={emailChange}
          id="email"
          type="text"
          placeholder="example@naver.com"
        />
        <p id="emailValidation"></p>
        <label for="pw">비밀번호</label>
        <input
          required
          onChange={passwordChange}
          id="pw"
          type="password"
          placeholder="********"
        />
        <p id="pwValidation"></p>
        <label for="pwchk">비밀번호 확인</label>
        <input
          required
          onChange={passwordConfirm}
          id="pwchk"
          type="password"
          placeholder="********"
        />
        <p id="pwChkValidation"></p>
        <div className="btnBackground">
          <button type="submit">동의하고 회원가입</button>
        </div>
      </form>
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
