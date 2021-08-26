import styled from "styled-components";
import kakao from "../../imgs/kakao_login.PNG";
import google from "../../imgs/google_login.png";
import naver from "../../imgs/naver_login.png";

export const InputFormWrapper = styled.div`
  width: 100%;
  padding-top: 30px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 15px;
    color: #555;
  }
  input {
    display: block;
    margin-bottom: 15px;
    width: 100%;
    height: 45px;
    padding: 5px;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
  }
  input::placeholder {
    font-size: 12px;
    color: #ccc;
  }
  a {
    margin-bottom: 15px;
    text-align: right;
    font-size: 14px;
    color: #999;

    &:hover {
      font-style: italic;
      color: #666;
    }
  }
  & .btnBackground {
    width: 100%;
    height: 45px;
    background-color: #000;
  }
  button {
    width: 100%;
    height: 45px;
    background-color: blue;
    border-radius: 4px;
    color: #fff;

    &:hover {
      opacity: 0.8;
    }
  }

  p {
    margin-top: 45px;
    dipslay: block;
    text-align: center;
    font-size: 15px;
    color: #999;
  }
  & .borderBox {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  p::before {
    position: absolute;
    top: 11px;
    left: 0;
    content: "";
    width: 135px;
    height: 1px;
    background-color: #ccc;
  }
  p::after {
    position: absolute;
    top: 11px;
    right: 0;
    content: "";
    width: 135px;
    height: 1px;
    background-color: #ccc;
  }
  & .socialLoginBox {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;

    & .socialBackground {
      position: relative;
      width: 60px;
      height: 60px;
      margin: 0 10px;
      cursor: pointer;
      border-radius: 60px;
      background-color: #000;

      & > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 61px;
        height: 61px;
        border-radius: 61px;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    & .kakao {
      background: url(${kakao}) no-repeat center;
      background-size: cover;
    }
    & .google {
      background: url(${google}) no-repeat center;
      background-size: 150% 150%;
      border: 1px solid #ccc;
    }
    & .naver {
      background: url(${naver}) no-repeat center;
      background-size: cover;
    }
  }
`;
