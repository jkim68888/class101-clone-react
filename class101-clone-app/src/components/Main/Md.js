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
        console.log(response);
      });
    console.log(imgs);
  }, []);

  return (
    <MdWrapper>
      <MdDealWrap>
        <h2>MD 추천 클래스</h2>
        <Swiper slidesPerView={"auto"} navigation>
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
      </MdDealWrap>
    </MdWrapper>
  );
};

export default Md;
