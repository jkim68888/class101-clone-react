import styled from "styled-components";

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

  & .btnBackground {
    width: 100%;
    height: 45px;
    background-color: #000;

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
  }

  p {
    margin-top: 15px;
    dipslay: block;
    text-align: left;
    font-size: 12px;
    color: #999;

    & .blue {
      color: blue;
      font-size: 13px;
    }
    & .black {
      color: black;
    }
  }
`;
