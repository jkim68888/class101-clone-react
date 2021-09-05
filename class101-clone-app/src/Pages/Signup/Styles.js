import styled from "styled-components";

export const SignupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;

  & .formBox {
    padding: 80px 0;
    width: 365px;
    margin: 0 auto;
    @media screen and (max-width: 420px) {
      width: 280px;
    }

    h2 {
      font-size: 24px;
      font-weight: 600;
      color: #444;
    }
  }

  & .imgBox {
    width: 40%;
    height: 800px;
    background-image: url("https://cdn.pixabay.com/photo/2021/01/21/16/49/books-5937823_960_720.jpg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

    @media screen and (max-width: 1172px) {
      display: none;
    }
  }
`;
