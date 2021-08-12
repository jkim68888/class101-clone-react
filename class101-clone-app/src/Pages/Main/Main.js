import React from "react";
import MainSlideBanner from "../../components/Main/MainSlideBanner";
import EventBanner from "../../components/Main/EventBanner";
import TimeDeal from "../../components/Main/TimeDeal";
import Md from "../../components/Main/Md";
import SlideBanner from "../../components/Main/SlideBanner";
import Best from "../../components/Main/Best";

import { MainWrapper } from "./Styles";

const Main = () => {
  return (
    <MainWrapper>
      <MainSlideBanner />
      <EventBanner />
      <TimeDeal />
      <Md />
      <SlideBanner />
      <Best />
    </MainWrapper>
  );
};

export default Main;
