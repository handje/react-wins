import footerImg from "@assets/images/aboutImg4.png";
import PageLayout from "layouts/PageLayout";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const FooterImage = styled.img`
  width: 100vw;
`;

const aboutInfo = {
  title: "kt wiz는?",
  desc: "한국 프로야구의 '10번째 심장' kt wiz를 소개합니다!",
  tabs: [
    { name: "구단소개", path: "about" },
    { name: "구단연혁", path: "history" },
  ],
};

const InfoLayout = () => {
  const { pathname } = useLocation();
  const hasFooterImg = pathname === "/ktwiz/about";
  return (
    <>
      <PageLayout info={aboutInfo}>
        <Outlet />
      </PageLayout>
      {hasFooterImg && <FooterImage src={footerImg} />}
    </>
  );
};
export default InfoLayout;
