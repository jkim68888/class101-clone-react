import React from "react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { TimeDealWrapper, TimeDealWrap } from "./Styles";

const TimeDeal = () => {
  SwiperCore.use([Autoplay, Navigation]);
  return (
    <TimeDealWrapper>
      <TimeDealWrap>
        <h2>오늘의 특가! TIME DEAL</h2>
        <Swiper slidesPerView={"auto"} navigation>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </TimeDealWrap>
    </TimeDealWrapper>
  );
};

export default TimeDeal;
