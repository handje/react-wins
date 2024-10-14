import PageLayout from "layouts/PageLayout";
import { Outlet } from "react-router-dom";

const playerInfo = {
  title: "Wiz Player",
  desc: "kt wiz의 자랑스런 선수단을 소개합니다.",
  tabs: [
    { name: "코칭스텝", path: "coach" },
    { name: "투수", path: "pitcher" },
    { name: "포수", path: "catcher" },
    { name: "내야수", path: "infielder" },
    { name: "외야수", path: "outfielder" },
    { name: "응원단", path: "cheer" },
  ],
};
const PlayerLayout = () => {
  return (
    <PageLayout info={playerInfo} hasSearch={true}>
      <Outlet />
    </PageLayout>
  );
};
export default PlayerLayout;
