import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { TimeDealWrapper, TimeDealWrap } from "./Styles";

const TimeDeal = () => {
  SwiperCore.use([Autoplay, Navigation]);

  const [videos, setvideos] = useState([
    {
      link: "",
      thumbnail: "",
      title: "",
      youtuber: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search?", {
        params: {
          key: "AIzaSyDwRmgs_Qmt0bz1fljFsZlSspD_LOD_-_g",
          part: "snippet",
          q: "playlist",
          maxResults: 10,
          type: "video",
          videoDuration: "long",
        },
      })
      .then((response) => {
        const arrayVideos = response.data.items.map((video) => {
          return {
            link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
            thumbnail: video.snippet.thumbnails.medium.url,
            title: video.snippet.title,
            youtuber: video.snippet.channelTitle,
          };
        });
        setvideos(arrayVideos);
      });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <TimeDealWrapper>
      <TimeDealWrap>
        <h2>유튜브 playlist 관련 영상 모음</h2>
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
          {videos &&
            videos.map((video, index) => {
              return (
                <SwiperSlide key={index.toString()}>
                  <div className="thumbnailBackground">
                    <a
                      target={"_blank"}
                      href={video.link}
                      className="thumbnailWrap"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    ></a>
                    <a className="linkTag" target={"_blank"} href={video.link}>
                      go to link
                    </a>
                  </div>
                  <h1>{video.title}</h1>
                  <h2>{video.youtuber}</h2>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button ref={navigationPrevRef} className="prevBtn"></button>
        <button ref={navigationNextRef} className="nextBtn"></button>
      </TimeDealWrap>
    </TimeDealWrapper>
  );
};

export default TimeDeal;
