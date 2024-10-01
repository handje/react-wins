import PageLayout from "layouts/PageLayout";
import { Outlet } from "react-router-dom";

const aboutInfo = {
  title: "kt wiz는?",
  desc: "한국 프로야구의 '10번째 심장' kt wiz를 소개합니다!",
  tabs: [
    { name: "구단소개", path: "about" },
    { name: "구단연혁", path: "history" },
  ],
};

const InfoLayout = () => {
  return (
    <PageLayout info={aboutInfo}>
      <Outlet />
    </PageLayout>
  );
};
export default InfoLayout;
