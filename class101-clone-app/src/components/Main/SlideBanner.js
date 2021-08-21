import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SlideBannerWrapper, SlideBannerWrap } from "./Styles";

const SlideBanner = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: "zMBnFrSr8ZwEW7SEpFQ_C2c1S5LawBAzVagwXvGDIuw",
          count: 6,
        },
      })
      .then((response) => {
        const images = response.data.map((img) => img.urls.small);
        setImgs(images);
      });
  }, []);

  const jsonData = [
    {
      bgColor: "rgba(0,0,0,0.7)",
      title: "클래스101 모델을 맞춰라!",
      descript: "지금 퀴즈 참여하면 무조건 선물 증정",
      image: `${imgs[0]}`,
    },
    {
      bgColor: "rgba(0,0,0,0.6)",
      title: "사이 좋게 3만원 할인",
      descript: "원하는 클래스, 친구와 함께 시작해요",
      image: `${imgs[1]}`,
    },
    {
      bgColor: "rgba(0,0,0,0.5)",
      title: "600만원이 입금되었습니다",
      descript: "크리에이터 되어 경제적 자유 이루기",
      image: `${imgs[2]}`,
    },
    {
      bgColor: "rgba(0,0,0,0.4)",
      title: "68% 할인받고 브이로그 만들기",
      descript: "101모임에서 30일 동안 완성해요",
      image: `${imgs[3]}`,
    },
    {
      bgColor: "rgba(0,0,0,0.3)",
      title: "8월 한정 혜택",
      descript: "101 컬리지 최대 60% 할인!",
      image: `${imgs[4]}`,
    },
    {
      bgColor: "rgba(0,0,0,0.2)",
      title: "오늘 주문하면 바로 출발!",
      descript: "오늘 마음 먹은 취미, 바로 시작하자",
      image: `${imgs[5]}`,
    },
  ];

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
          {jsonData &&
            jsonData.map((data, index) => {
              return (
                <SwiperSlide key={index.toString()}>
                  <div
                    style={{ backgroundColor: data.bgColor }}
                    className="backgroundWrap"
                  >
                    <div className="contentWrap">
                      <div className="txtBox">
                        <h1>{data.title}</h1>
                        <h2>{data.descript}</h2>
                        <button>더 알아보기</button>
                      </div>
                    </div>
                    <div className="imgBox">
                      <img src={data.image} alt="랜덤이미지" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </SlideBannerWrap>
    </SlideBannerWrapper>
  );
};

export default SlideBanner;
