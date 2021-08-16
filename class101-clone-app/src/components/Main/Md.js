import React, { useState, useEffect } from "react";
import axios from "axios";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdWrapper, MdDealWrap } from "./Styles";

const Md = () => {
  SwiperCore.use([Autoplay, Navigation]);

  const [imgs, setImgs] = useState();

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: "zMBnFrSr8ZwEW7SEpFQ_C2c1S5LawBAzVagwXvGDIuw",
          count: 10,
        },
      })
      .then((response) => {
        setImgs(response.data.map((img) => img.urls.small));
      });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <MdWrapper>
      <MdDealWrap>
        <h2>랜덤 이미지</h2>
        <Swiper
          slidesPerView={"auto"}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {imgs &&
            imgs.map((randomImg, index) => {
              return (
                <SwiperSlide key={index.toString()}>
                  <div
                    className="backgroundWrap"
                    style={{ backgroundImage: `url(${randomImg})` }}
                  ></div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button ref={navigationPrevRef} className="prevBtn"></button>
        <button ref={navigationNextRef} className="nextBtn"></button>
      </MdDealWrap>
    </MdWrapper>
  );
};

export default Md;
