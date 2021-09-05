import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "@firebase/auth";
import { auth, provider } from "../../firebaseConfig";

import { InputFormWrapper } from "./Styles";

const InputForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePwChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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

    console.log(email);
    console.log(password);
  };

  const signInWithGoogle = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
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
        <label for="email">이메일</label>
        <input
          onChange={handleEmailChange}
          required
          id="email"
          type="text"
          placeholder="example@naver.com"
        />
        <label for="pw">비밀번호</label>
        <input
          onChange={handlePwChange}
          required
          id="pw"
          type="password"
          placeholder="********"
        />
        <Link to="/signup">
          <a>회원가입하기</a>
        </Link>
        <div className="btnBackground">
          <button type="submit">로그인</button>
        </div>
      </form>
      <div className="borderBox">
        <p>소셜 로그인</p>
      </div>
      <div className="socialLoginBox">
        <div className="socialBackground">
          <div className="kakao"></div>
        </div>
        <div className="socialBackground">
          <div onClick={signInWithGoogle} className="google"></div>
        </div>
        <div className="socialBackground">
          <div className="naver"></div>
        </div>
      </div>
    </InputFormWrapper>
  );
};

export default InputForm;
