import React from 'react';
import {Link, Route} from 'react-router-dom';
import logo from '../../../imgs/logo.png';

import Main from '../../../Pages/Main/Main';
import Earlybird from '../../../Pages/Sub/Earlybird/Earlybird';
import Event from '../../../Pages/Sub/Event/Event';
// import NotFound from '../../../Pages/NotFound/NotFound';

import { HeaderWrapper, HeaderWrap, TopHeader, LeftHeader, RightHeader, BottomHeader } from './Styles';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderWrap>
          <TopHeader>
            <LeftHeader>
              <h1 className="logoBox">
                <Link to="/">
                  <img src={logo} alt="클래스101 로고" />
                </Link>
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
          <BottomHeader>
            <ul>
              <li>
                <Link to="/">전체 카테고리</Link>
                <Link to="/earlybird">얼리버드</Link>
                <Link to="/event">이벤트</Link>
              </li>
            </ul>
          </BottomHeader>
        </HeaderWrap>
      </HeaderWrapper>
      <Route exact path="/" component={Main} />
      <Route path="/sub/earlybird" component={Earlybird} />
      <Route path="/sub/event" component={Event} />
      {/* <Route path="/" component={NotFound} /> */}
    </>
  );
};

export default Header;