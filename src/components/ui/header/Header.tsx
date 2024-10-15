import useDetectScroll from "hooks/useDetectScroll";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Nav from "./gnb/Nav";
import Logo from "./Logo";
import Utils from "./Utils";

const HeaderStyle = styled.header<{ $isShowNav: boolean; $path: string; $scrollHeight: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.$isShowNav ? "360px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: baseline;
  z-index: 2;
  overflow: hidden;
  background-color: ${(props) =>
    props.$isShowNav ? "#fff" : props.$path !== "/" ? "#000" : props.$scrollHeight ? "#000" : "transparent"};
  transition:
    height 0.25s ease-in,
    background-color 0.25s ease-out;
`;

const HeaderInnerStyle = styled.div<{ $isShowNav: boolean }>`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  &::after {
    content: "";
    position: absolute;
    top: 76px;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Header = () => {
  const $path = useLocation().pathname;
  const [$isShowNav, setIsShowNav] = useState(false);
  const $scrollHeight = useDetectScroll();

  const onMouseEnterHandler = useCallback(() => {
    setIsShowNav(true);
  }, []);

  const onMouseLeaveHandler = useCallback(() => {
    setIsShowNav(false);
  }, []);

  return (
    <HeaderStyle
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      $isShowNav={$isShowNav}
      $path={$path}
      $scrollHeight={$scrollHeight}>
      <HeaderInnerStyle $isShowNav={$isShowNav}>
        <Logo $isShowNav={$isShowNav} />
        <Nav $isShowNav={$isShowNav} />
        <Utils $isShowNav={$isShowNav} />
      </HeaderInnerStyle>
    </HeaderStyle>
  );
};

export default Header;

//
