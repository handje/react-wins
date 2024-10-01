import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BottomMenuStyle = styled.ul`
  display: contents;
  & > li {
    color: #000;
    cursor: pointer;
    line-height: 1.2;
    font-size: 14px;
    font-weight: 400;
    transition: font-weight 0.1s;
    padding-top: 20px;
    & > ul {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
  & > li {
    & > ul {
      & > li:hover {
        font-weight: 500;
        transition: font-weight 0.1s;
      }
    }
  }
`;

const BottomMenu = () => {
  return (
    <BottomMenuStyle>
      <li>
        <ul>
          <li>
            <Link to="/ktwiz/about">kt wiz는?</Link>
          </li>
          <li>구단 BI</li>
          <li>
            <Link to="/ktwiz/policy/regular">회원 정책</Link>
          </li>
          <li>월페이퍼</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/wizpark/intro">수원 kt wiz park</Link>
          </li>
          <li>주차 예약</li>
          <li>
            <Link to="/wizpark/location">찾아오기</Link>
          </li>
          <li>
            <Link to="/wizpark/iksan">익산야구장</Link>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/game/schedule">정규리그</Link>
          </li>
          <li>퓨처스리그</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/player/coach">코칭스텝</Link>
          </li>
          <li>
            <Link to="/player/pitcher">투수</Link>
          </li>
          <li>
            <Link to="/player/catcher">타자</Link>
          </li>
          <li>
            <Link to="/player/cheer">응원단</Link>
          </li>
          <li>응원가</li>
          <li>응원가 저작권</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/media/wiznews">wiz 뉴스</Link>
          </li>
          <li>wiz 스토리</li>
          <li>시구자 정보</li>
          <li>wiz 포토</li>
          <li>하이라이트</li>
          <li>Live 영상모음</li>
        </ul>
      </li>
      <li></li>
      <li></li>
      <li>
        <ul>
          <li>티켓예매</li>
          <li>단체관람</li>
          <li>
            <Link to="/ticket/seatmap">입장 및 좌석 정보</Link>
          </li>
        </ul>
      </li>
    </BottomMenuStyle>
  );
};
export default React.memo(BottomMenu);
