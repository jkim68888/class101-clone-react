import React from "react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Styles";
import { MainSlideBannerWrapper } from "./Styles";

const MainSlideBanner = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);
  return (
    <MainSlideBannerWrapper>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </MainSlideBannerWrapper>
  );
};

export default MainSlideBanner;
