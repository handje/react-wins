import { NavEventType } from "@customTypes/layout";
import React from "react";
import styled from "styled-components";
import BottomMenu from "./BottomMenu";
import TopMenu from "./TopMenu";

const MainNavStyle = styled.nav<{ $isShowNav: boolean }>`
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const Nav = ({ $isShowNav }: NavEventType) => {
  return (
    <MainNavStyle $isShowNav={$isShowNav}>
      <TopMenu $isShowNav={$isShowNav} />
      {$isShowNav && <BottomMenu />}
    </MainNavStyle>
  );
};
export default React.memo(Nav);
