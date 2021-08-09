import React from 'react';
import logo from '../../../imgs/logo.png';

import { HeaderWrapper, HeaderWrap, LeftHeader, RightHeader } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderWrap>
        <LeftHeader>
          <h1 className="logoBox">
            <img src={logo} alt="클래스101 로고" />
          </h1>
          <div className="findBox">
            <label />
            <input placeholder="찾으시는 취미가 있으신가요?" />
          </div>
        </LeftHeader>
        <RightHeader>
          <button className="loginBtn">로그인</button>
        </RightHeader>
      </HeaderWrap>
    </HeaderWrapper>
  );
};

export default Header;