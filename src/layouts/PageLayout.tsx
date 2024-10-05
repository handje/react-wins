import Search from "@components/common/Search";
import BannerText from "@components/ui/main/BannerText";
import Breadcrumb from "@components/ui/main/Breadcrumb";
import Tab from "@components/ui/main/Tab";
import { ILayoutInfo } from "@customTypes/layout";
import { ReactNode } from "react";
import styled from "styled-components";

const MainStyle = styled.main`
  width: 100%;
  max-width: 1100px;
  padding-top: 80px;
  padding-bottom: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainUtilsStyle = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #ec0a0b;
`;

const MainInnerStyle = styled.article<{ $hasPadding: boolean }>`
  padding-top: ${({ $hasPadding }) => ($hasPadding ? "40px" : "0px")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BannerStyle = styled.section`
  position: relative;
  width: 100%;
  height: 280px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  background: url("https://www.ktwiz.co.kr/v2/imgs/sub_bg_2024_pc.png") 60% 0 no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    & > h3 {
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      font-size: 48px;
      color: #fff;
    }
    & > p {
      font-size: 14px;
      color: #fff;
      font-weight: 300;
    }
  }
`;

const PageLayout = ({
  info,
  hasSearch = false,
  hasPadding = true,
  children,
}: {
  info: ILayoutInfo;
  hasSearch?: boolean;
  hasPadding?: boolean;
  children: ReactNode;
}) => {
  return (
    <>
      <BannerStyle>
        <BannerText title={info.title} desc={info.desc} />
        <Tab tabList={info.tabs} />
      </BannerStyle>
      <MainStyle>
        <MainUtilsStyle>
          {hasSearch && <Search />}
          <Breadcrumb info={info} />
        </MainUtilsStyle>
        <MainInnerStyle $hasPadding={hasPadding}>{children}</MainInnerStyle>
      </MainStyle>
    </>
  );
};
export default PageLayout;
