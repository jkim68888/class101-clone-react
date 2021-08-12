import React from "react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BestWrapper, BestWrap } from "./Styles";

const Best = () => {
  SwiperCore.use([Autoplay, Navigation]);
  return (
    <BestWrapper>
      <BestWrap>
        <h2>실시간 선물하기 BEST 클래스</h2>
        <Swiper slidesPerView={"auto"} navigation>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </BestWrap>
    </BestWrapper>
  );
};

export default Best;
