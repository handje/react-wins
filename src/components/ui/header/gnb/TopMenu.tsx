import { NavEventType } from "@customTypes/layout";
import { topMenuList } from "@data/layout/nav";
import { ulStyle } from "@styles/ui.style";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TopMenuStyle = styled.ul<{ $isShowNav: boolean }>`
  ${ulStyle}
  & > li {
    ${({ $isShowNav }) => !$isShowNav && "color:#fff;"}
    font-size: 15px;
    font-weight: 600;
    & > a {
      display: inline-block;
      padding: 30px 0;
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.1s;
    }
    &:hover > a {
      border-bottom: 3px solid #ea0101;
      transition: border-bottom 0.1s;
    }
  }
  .redText {
    color: #d60c0c;
    font-weight: 700;
  }
`;

const TopMenu = ({ $isShowNav }: NavEventType) => {
  return (
    <TopMenuStyle $isShowNav={$isShowNav}>
      {topMenuList.map((menu, index) => (
        <li key={index}>
          <NavLink to={menu.path} target={menu.target} className={menu.style ?? ""}>
            {menu.label}
          </NavLink>
        </li>
      ))}
    </TopMenuStyle>
  );
};
export default React.memo(TopMenu);
