import React from 'react';
import logo from '../../../imgs/logo.png';

import { HeaderWrapper, HeaderWrap, TopHeader, LeftHeader, RightHeader, BottomHeader } from './Styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderWrap>
        <TopHeader>
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
        </TopHeader>
        <BottomHeader>전체 카테고리</BottomHeader>
      </HeaderWrap>
    </HeaderWrapper>
  );
};

export default Header;