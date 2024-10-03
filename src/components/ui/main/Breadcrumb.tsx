import { ILayoutInfo } from "@customTypes/layout";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadcumbStyle = styled.ul`
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  & > li {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    & > span {
      font-size: 14px;
      color: #b7b7b7;
    }
    & > svg {
      font-size: 14px;
      color: #b7b7b7;
    }
  }
  & > li:last-child {
    & > span {
      font-weight: 500;
      color: #ec0a0b;
    }
  }
`;

const Breadcrumb = ({ info }: { info: ILayoutInfo }) => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const category = path[1].charAt(0).toUpperCase() + path[1].slice(1);
  const pageName = info?.tabs?.find((el) => el.path === path[2]);
  return (
    <BreadcumbStyle>
      <li>
        <TiHome />
      </li>
      <li>
        <IoIosArrowForward />
        <span>{category}</span>
      </li>
      <li>
        <IoIosArrowForward />
        <span>{info?.title}</span>
      </li>
      <li>
        <IoIosArrowForward />
        <span>{pageName?.name}</span>
      </li>
    </BreadcumbStyle>
  );
};
export default React.memo(Breadcrumb);
