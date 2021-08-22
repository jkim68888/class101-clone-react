import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import logo from "../../../imgs/logo.png";
import find from "../../../imgs/find_ico.png";

import Main from "../../../Pages/Main/Main";
import Signin from "../../../Pages/Signin/Signin";
import Earlybird from "../../../Pages/Sub/Earlybird";
import Event from "../../../Pages/Sub/Event";
import NotFound from "../../../Pages/NotFound/NotFound";

import {
  HeaderWrapper,
  HeaderWrap,
  TopHeader,
  LeftHeader,
  RightHeader,
  BottomHeader,
} from "./Styles";

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
                <button type="submit">
                  <img src={find} alt="돋보기 아이콘" />
                </button>
              </div>
            </LeftHeader>
            <RightHeader>
              <Link to="/signin">
                <button className="loginBtn">로그인</button>
              </Link>
            </RightHeader>
          </TopHeader>
          <BottomHeader>
            <ul>
              <li>
                <NavLink activeClassName="selected" exact to="/">
                  홈
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/earlybird">
                  얼리버드
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/event">
                  이벤트
                </NavLink>
              </li>
            </ul>
          </BottomHeader>
        </HeaderWrap>
      </HeaderWrapper>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={Signin} />
        <Route path="/sub/earlybird" component={Earlybird} />
        <Route path="/sub/event" component={Event} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Header;
