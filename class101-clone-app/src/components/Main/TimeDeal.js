import React from "react";
import "swiper/swiper.scss";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper } from "swiper/react";

import { TimeDealWrapper } from "./Styles";

const TimeDeal = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);
  return (
    <TimeDealWrapper>
      <h2>오늘의 특가! TIME DEAL</h2>
      <Swiper slidesPerView={4} navigation></Swiper>
    </TimeDealWrapper>
  );
};

export default TimeDeal;
