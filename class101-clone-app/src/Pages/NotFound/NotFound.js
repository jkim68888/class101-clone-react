import React from "react";
import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  max-width: 1172px;
  height: 400px;
  margin: 0 auto;
  padding: 60px 0 0;
  text-align: center;
  line-height: 340px;
`;

const NotFound = () => {
  return <NotFoundWrapper>페이지를 찾을 수 없습니다.</NotFoundWrapper>;
};

export default NotFound;
