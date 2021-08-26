import styled from "styled-components";

export const SigninWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;

  & .formBox {
    padding: 80px 0;
    width: 50%;

    h2 {
      width: 40%;
      margin: 0 auto;
      font-size: 32px;
      font-weight: 500;
      color: #444;
    }
  }

  & .imgBox {
    width: 50%;
    height: 800px;
    background-image: url("https://cdn.pixabay.com/photo/2021/01/21/16/49/books-5937823_960_720.jpg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
  }
`;
