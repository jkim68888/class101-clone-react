import styled from 'styled-components';
import find from '../../../imgs/find_ico.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 86px;
`;
export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1176px;
  height: 100%;
  margin: 0 auto;
`;
export const LeftHeader = styled.div`
  display: flex;

  h1{
    line-height: 75px;
    margin-right: 40px;

    img{
      width: 120px;
    }
  }

  & .findBox{
    width: 250px;
    line-height: 76px;

    input{
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
  
  button{
    border: none;
    background: transparent;
    font-size: 17px;
    color: #343434;
    font-weight: normal;
    cursor: pointer;
  }
`;