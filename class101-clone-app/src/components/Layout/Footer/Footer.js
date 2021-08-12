import React from "react";
import logo from "../../../imgs/logo.png";

import { FooterWrapper, FooterWrap } from "./Styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterWrap>
        <div className="leftFooter">
          <img src={logo} alt="클래스101 로고" />
          <p>
            클래스101은 모든 사람이 사랑하는 일을 하며
            <br /> 살 수 있도록 세상을 바꾸고자 합니다.
          </p>
        </div>
        <div className="rightFooter">
          <div>
            <ul>
              <li>
                <a>이용약관</a>
              </li>
              <li>
                <a>개인정보처리방침</a>
              </li>
              <li>
                <a>정기구독서비스이용약관</a>
              </li>
              <li>
                <a>환불정책</a>
              </li>
              <li>
                <a>사업자정보확인</a>
              </li>
              <li>
                <a>단체/기업교육문의</a>
              </li>
              <li>
                <a>제휴/협력문의</a>
              </li>
              <li>
                <a className="noCircle">PR관련문의</a>
              </li>
            </ul>
          </div>
          <div>
            <p>
              (주)클래스101 | 대표 고지연 | 서울특별시 중구 통일로 10
              세브란스빌딩 18층 | ask@101.inc | 사업자등록번호 : 457-81-00277 |
              통신판매업신고 : 2019-서울중구-0087 | 주식회사 클래스101은
              전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매업과
              통신판매중개업을 영위하고 있습니다. 주식회사 클래스101은
              통신판매중개자로서 중개하는 통신판매에 관하여서는 통신판매의
              당사자가 아니므로 어떠한 책임도 부담하지 아니합니다.
            </p>
          </div>
        </div>
      </FooterWrap>
    </FooterWrapper>
  );
};

export default Footer;
