import PageLayout from "layouts/PageLayout";
import { Outlet } from "react-router-dom";

const gameInfo = {
  title: "정규 리그",
  desc: "kt wiz의 정규리그 경기 일정을 알려 드립니다.",
  tabs: [
    { name: "경기일정", path: "schedule" },
    { name: "박스스코어", path: "boxscore" },
    { name: "순위기록", path: "ranking" },
    { name: "관전포인트", path: "watchPoint" },
  ],
};
const GameLayout = () => {
  return (
    <PageLayout info={gameInfo} hasPadding={false}>
      <Outlet />
    </PageLayout>
  );
};
export default GameLayout;
