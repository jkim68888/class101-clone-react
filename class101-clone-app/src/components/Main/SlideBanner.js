import React from "react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SlideBannerWrapper, SlideBannerWrap } from "./Styles";

const SlideBanner = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <SlideBannerWrapper>
      <SlideBannerWrap>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </SlideBannerWrap>
    </SlideBannerWrapper>
  );
};

export default SlideBanner;
