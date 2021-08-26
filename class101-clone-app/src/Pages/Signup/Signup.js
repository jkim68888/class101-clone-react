import React from "react";
import InputForm from "../../components/Signup/InputForm";

import { SignupWrapper } from "./Styles";

const Signup = () => {
  return (
    <SignupWrapper>
      <div className="formBox">
        <h2>회원가입</h2>
        <InputForm />
      </div>
      <div className="imgBox"></div>
    </SignupWrapper>
  );
};

export default Signup;
