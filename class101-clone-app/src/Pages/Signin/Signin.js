import React from "react";
import InputForm from "../../components/Signin/InputForm";

import { SigninWrapper } from "./Styles";

const Signin = () => {
  return (
    <SigninWrapper>
      <div className="formBox">
        <h2>로그인</h2>
        <InputForm />
      </div>
      <div className="imgBox"></div>
    </SigninWrapper>
  );
};

export default Signin;
