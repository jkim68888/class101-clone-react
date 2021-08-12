import React from "react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdWrapper, MdDealWrap } from "./Styles";

const Md = () => {
  SwiperCore.use([Autoplay, Navigation]);
  return (
    <MdWrapper>
      <MdDealWrap>
        <h2>MD 추천 클래스</h2>
        <Swiper slidesPerView={"auto"} navigation>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </MdDealWrap>
    </MdWrapper>
  );
};

export default Md;
