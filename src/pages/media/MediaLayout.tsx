import PageLayout from "layouts/PageLayout";
import { Outlet } from "react-router-dom";

const mediaInfo = {
  title: "wiz뉴스",
  desc: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
  tabs: [
    { name: "wiz소식", path: "wiznews" },
    { name: "wiz보도자료", path: "wizpress" },
  ],
};

const MediaLayout = () => {
  return (
    <PageLayout info={mediaInfo} hasSearch={true} hasPadding={false}>
      <Outlet />
    </PageLayout>
  );
};
export default MediaLayout;
