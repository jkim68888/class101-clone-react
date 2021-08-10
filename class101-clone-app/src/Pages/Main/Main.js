import React from 'react';
import SlideBanner from '../../components/Main/SlideBanner';
import EventBanner from '../../components/Main/EventBanner';

import { MainWrapper, MainWrap } from './Styles';

const Main = () => {
  return (
    <MainWrapper>
      <SlideBanner />
      <EventBanner />
      <MainWrap>
      </MainWrap>
    </MainWrapper>
  );
};

export default Main;