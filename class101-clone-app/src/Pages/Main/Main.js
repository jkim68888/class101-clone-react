import React from "react";
import SlideBanner from "../../components/Main/SlideBanner";
import EventBanner from "../../components/Main/EventBanner";
import TimeDeal from "../../components/Main/TimeDeal";

import { MainWrapper, MainWrap } from "./Styles";

const Main = () => {
  return (
    <MainWrapper>
      <SlideBanner />
      <MainWrap>
        <EventBanner />
        <TimeDeal />
      </MainWrap>
    </MainWrapper>
  );
};

export default Main;
