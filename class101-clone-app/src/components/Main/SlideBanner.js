import React from 'react';
import 'swiper/swiper.scss';
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import blue from '../../imgs/slidebanner_blue.jpg';
// import red from '../../imgs/slidebanner_red.jpg';
// import orange from '../../imgs/slidebanner_orange.jpg';
// import pink from '../../imgs/slidebanner_pink.png';

import './Styles';
import { SlideBannerWrapper } from './Styles';

const SlideBanner = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);
  return (
    <SlideBannerWrapper>
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
    </SlideBannerWrapper>
  );
};

export default SlideBanner;