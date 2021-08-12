import styled from "styled-components";
import find from "../../../imgs/find_ico.png";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
`;
export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1172px;
  margin: 0 auto;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }
`;
export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 86px;
`;
export const LeftHeader = styled.div`
  display: flex;

  h1 {
    line-height: 75px;
    margin-right: 40px;

    img {
      width: 120px;
    }
  }

  & .findBox {
    width: 250px;
    line-height: 76px;

    input {
      width: 100%;
      height: 30px;
      border-radius: 30px;
      border: 1px solid #e4e4e4;
      background: url(${find}) no-repeat calc(100% - 10px);
      background-size: 20px;
      padding: 1px 10px;
    }
  }
`;
export const RightHeader = styled.div`
  line-height: 76px;

  button {
    border: none;
    padding: 5px 18px;
    border-radius: 70px;
    background: #ebebeb;
    font-size: 18px;
    color: #343434;
    font-weight: normal;
    cursor: pointer;

    &:hover {
      background: blue;
      color: #fff;
    }
  }
`;
export const BottomHeader = styled.div`
  display: flex;
  height: 52px;

  ul {
    display: flex;
    line-height: 52px;

    li {
      margin-right: 40px;

      & .selected {
        font-weight: bold;
        color: blue;
        border-bottom: 2px solid blue;
      }

      &:hover {
        font-weight: bold;
      }

      a {
        font-size: 20px;
      }
    }
  }
`;
