import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BestWrapper, BestWrap } from "./Styles";

const Best = () => {
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
          q: "댕댕이",
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
        console.log(response);
      });
    console.log(videos);
  }, []);

  return (
    <BestWrapper>
      <BestWrap>
        <h2>유튜브 강아지🐶 관련 영상 모음</h2>
        <Swiper slidesPerView={"auto"} navigation>
          {videos &&
            videos.map((video, index) => {
              return (
                <SwiperSlide key={index.toString()}>
                  <a
                    href={video.link}
                    className="thumbnailWrap"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  ></a>
                  <h1>{video.title}</h1>
                  <h2>{video.youtuber}</h2>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </BestWrap>
    </BestWrapper>
  );
};

export default Best;
