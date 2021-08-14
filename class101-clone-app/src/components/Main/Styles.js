import styled from "styled-components";
import arrowLeft from "../../imgs/arrow_left.svg";
import arrowRight from "../../imgs/arrow_right.svg";

export const MainSlideBannerWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: lightgray;
  color: #fff;
  font-size: 26px;
  text-align: center;
  line-height: 400px;

  & .swiper-pagination-bullets {
    height: 20px;
    line-height: 20px;
  }
`;
export const EventBannerWrapper = styled.div`
  max-width: 1172px;
  margin: 60px auto;
  height: 100px;
  line-height: 100px;
  padding: 0 20px;
  background: #121212;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }
`;
export const TimeDealWrapper = styled.div`
  width: 100%;
`;
export const TimeDealWrap = styled.div`
  max-width: 1172px;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  h2 {
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
  }

  & .swiper-slide {
    width: 320px;
    margin: 0 25px 180px 0;
    height: 240px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.08);

    & .thumbnailWrap {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-size: 100% 100%;
      background-color: #000000;

      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
        height: 33px;
        padding: 0 8px;
        border-bottom: 2px solid #ffffff;
        font-size: 18px;
        color: #fff;
      }

      &:hover {
        opacity: 0.5;
      }
    }

    h1 {
      margin: 5px 0;
      font-size: 18px;
      color: #333;
    }

    h2 {
      margin: 5px 0;
      font-size: 15px;
      color: #555;
    }
  }
  & .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
  }
  & .swiper-button-prev {
    top: 120px;
    background: url(${arrowLeft}) no-repeat center;
  }
  & .swiper-button-next {
    top: 120px;
    background: url(${arrowRight}) no-repeat center;
  }
  & .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }
`;
export const MdWrapper = styled.div`
  width: 100%;
`;
export const MdDealWrap = styled.div`
  max-width: 1172px;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  h2 {
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
  }

  & .swiper-slide {
    width: 320px;
    margin: 0 25px 120px 0;
    height: 400px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.08);

    & .backgroundWrap {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-size: cover;
    }
  }
  & .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
  }
  & .swiper-button-prev {
    top: 200px;
    background: url(${arrowLeft}) no-repeat center;
  }
  & .swiper-button-next {
    top: 200px;
    background: url(${arrowRight}) no-repeat center;
  }
  & .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }
`;
export const SlideBannerWrapper = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 120px;
  background: lightgray;
`;
export const SlideBannerWrap = styled.div`
  max-width: 1172px;
  margin: 0 auto;
  line-height: 180px;
  text-align: center;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  & .swiper-pagination-bullets {
    height: 20px;
    line-height: 20px;
  }
`;
export const BestWrapper = styled.div`
  width: 100%;
`;
export const BestWrap = styled.div`
  max-width: 1172px;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  h2 {
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
  }

  & .swiper-slide {
    width: 320px;
    margin: 0 25px 180px 0;
    height: 240px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.08);

    & .thumbnailWrap {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-size: 100% 100%;
    }

    h1 {
      margin: 5px 0;
      font-size: 18px;
      color: #333;
    }

    h2 {
      margin: 5px 0;
      font-size: 15px;
      color: #555;
    }
  }
  & .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
  }
  & .swiper-button-prev {
    top: 120px;
    background: url(${arrowLeft}) no-repeat center;
  }
  & .swiper-button-next {
    top: 120px;
    background: url(${arrowRight}) no-repeat center;
  }
  & .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }
`;
