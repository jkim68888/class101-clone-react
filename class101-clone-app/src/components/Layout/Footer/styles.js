import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  border-top: 1.2px solid #e9e9e9;
  padding: 60px 0;
`;
export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1172px;
  margin: 0 auto;

  @media screen and (max-width: 1172px) {
    padding: 0 30px;
  }

  & .leftFooter {
    flex: 1;

    img {
      width: 120px;
      margin-bottom: 20px;
    }
    p {
      font-size: 15px;
      color: #444;
    }
  }

  & .rightFooter {
    flex: 2;

    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 15px;

      a {
        position: relative;
        margin: 0 20px;
        font-size: 14px;
        color: #444;

        &:first-of-type {
          margin-left: 0;
        }

        &::after {
          position: absolute;
          top: 2px;
          right: -15px;
          content: "●";
          font-size: 1px;
          color: #999;
        }
      }

      & .noCircle::after {
        content: "";
      }
    }

    p {
      font-size: 15px;
      color: #444;
    }
  }
`;
