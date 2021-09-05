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

  & .slide01 {
    background: url(https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg)
      no-repeat center;
    background-size: cover;
  }
  & .slide02 {
    background: url(https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg)
      no-repeat center;
    background-size: cover;
  }
  & .slide03 {
    background: url(https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg)
      no-repeat center;
    background-size: cover;
  }
  & .slide04 {
    background: url(https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg)
      no-repeat center;
    background-size: cover;
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
    margin: 60px 30px;
  }

  @media screen and (max-width: 580px) {
    margin: 60px 15px;
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
  position: relative;
  max-width: 1262px;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 580px) {
    padding: 0 15px;
  }

  h2 {
    max-width: 1172px;
    margin: 0 auto 40px;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
  }
  & .swiper-container {
    max-width: 1172px;
    margin: 0 auto;

    & .swiper-slide {
      width: 320px;
      margin: 0 25px 180px 0;
      height: 240px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.08);

      & .thumbnailBackground {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: #000000;
        cursor: pointer;

        &:hover .linkTag {
          opacity: 1;
        }

        &:hover .thumbnailWrap {
          opacity: 0.6;
        }

        & .thumbnailWrap {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          background-size: 100% 100%;
          transition: all ease 0.3s;
        }

        .linkTag {
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
          opacity: 0;
          transition: all ease 0.3s;
        }
      }

      h1 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
        margin: 5px 0 10px;
        font-size: 18px;
        color: #333;
      }

      h2 {
        margin: 5px 0;
        font-size: 15px;
        color: #555;
      }
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    display: none;
  }

  & .prevBtn {
    position: absolute;
    left: 0;
    top: 180px;
    width: 30px;
    height: 30px;
    background: url(${arrowLeft}) no-repeat center;
    z-index: 999999;
  }
  & .nextBtn {
    position: absolute;
    right: 0;
    top: 180px;
    width: 30px;
    height: 30px;
    background: url(${arrowRight}) no-repeat center;
    z-index: 999999;
  }

  button {
    transition: all ease 0.25s;

    &:hover {
      transform: scale(1.3, 1.3);
    }
  }

  & button.prevBtn.swiper-button-disabled,
  & button.nextBtn.swiper-button-disabled {
    background: transparent;
  }
`;
export const MdWrapper = styled.div`
  width: 100%;
`;
export const MdDealWrap = styled.div`
  position: relative;
  max-width: 1262px;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 580px) {
    padding: 0 15px;
  }

  h2 {
    max-width: 1172px;
    margin: 0 auto 40px;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
  }

  & .swiper-container {
    max-width: 1172px;
    margin: 0 auto;

    & .swiper-slide {
      width: 320px;
      margin: 0 25px 120px 0;
      height: 400px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.08);
      overflow: hidden;

      &:last-of-type {
        margin-right: 0;
      }

      & .backgroundWrap {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-size: cover;
        transition: all ease 0.5s;

        &:hover {
          transform: scale(1.2, 1.2);
        }
      }
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    display: none;
  }

  & .prevBtn {
    position: absolute;
    left: 0;
    top: 250px;
    width: 30px;
    height: 30px;
    background: url(${arrowLeft}) no-repeat center;
    z-index: 999999;
  }
  & .nextBtn {
    position: absolute;
    right: 0;
    top: 250px;
    width: 30px;
    height: 30px;
    background: url(${arrowRight}) no-repeat center;
    z-index: 999999;
  }

  button {
    transition: all ease 0.25s;

    &:hover {
      transform: scale(1.3, 1.3);
    }
  }

  & button.prevBtn.swiper-button-disabled,
  & button.nextBtn.swiper-button-disabled {
    background: transparent;
  }
`;
export const SlideBannerWrapper = styled.div`
  width: 100%;
  height: 260px;
  margin-bottom: 120px;
`;
export const SlideBannerWrap = styled.div`
  width: 100%;
  height: 260px;
  margin: 0 auto;

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-slide {
    position: relative;
    height: 260px;

    & .backgroundWrap {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 180px;

      & .contentWrap {
        display: table;
        max-width: 1172px;
        height: 100%;
        margin: 0 auto;
        @media screen and (max-width: 580px) {
          padding: 0 20px;
        }

        & .txtBox {
          display: table-cell;
          vertical-align: middle;

          h1 {
            font-size: 28px;
            font-weight: 600;
            color: #fff;
            @media screen and (max-width: 580px) {
              font-size: 18px;
            }
          }
          h2 {
            font-size: 18px;
            font-weight: 500;
            color: #fff;
            @media screen and (max-width: 580px) {
              font-size: 14px;
            }
          }
          button {
            width: 100px;
            height: 30px;
            margin-top: 15px;
            background: #fff;
            border-radius: 4px;
            color: #343434;
          }
        }
      }
      & .imgBox {
        position: relative;
        top: -70px;
        width: 250px;
        height: 250px;
        margin: 0 auto;
        border-radius: 100%;
        @media screen and (max-width: 580px) {
          top: -30px;
          width: 200px;
          height: 200px;
        }

        & img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
`;
export const BestWrapper = styled.div`
  width: 100%;
`;
export const BestWrap = styled.div`
  position: relative;
  max-width: 1262px;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 580px) {
    padding: 0 15px;
  }

  h2 {
    max-width: 1172px;
    margin: 0 auto 40px;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
  }

  & .swiper-container {
    max-width: 1172px;
    margin: 0 auto;

    & .swiper-slide {
      width: 320px;
      margin: 0 25px 180px 0;
      height: 240px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.08);

      &:last-of-type {
        margin-right: 0;
      }

      & .thumbnailBackground {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: #000000;
        cursor: pointer;

        &:hover .linkTag {
          opacity: 1;
        }

        &:hover .thumbnailWrap {
          opacity: 0.6;
        }

        & .thumbnailWrap {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          background-size: 100% 100%;
          transition: all ease 0.3s;
        }

        .linkTag {
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
          opacity: 0;
          transition: all ease 0.3s;
        }
      }

      h1 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
        margin: 5px 0 10px;
        font-size: 18px;
        color: #333;
      }

      h2 {
        margin: 5px 0;
        font-size: 15px;
        color: #555;
      }
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    display: none;
  }

  & .prevBtn {
    position: absolute;
    left: 0;
    top: 180px;
    width: 30px;
    height: 30px;
    background: url(${arrowLeft}) no-repeat center;
    z-index: 999999;
  }
  & .nextBtn {
    position: absolute;
    right: 0;
    top: 180px;
    width: 30px;
    height: 30px;
    background: url(${arrowRight}) no-repeat center;
    z-index: 999999;
  }

  button {
    transition: all ease 0.25s;

    &:hover {
      transform: scale(1.3, 1.3);
    }
  }

  & button.prevBtn.swiper-button-disabled,
  & button.nextBtn.swiper-button-disabled {
    background: transparent;
  }
`;
