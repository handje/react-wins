import PageLayout from "layouts/PageLayout";
import { Outlet } from "react-router-dom";

const ticketInfo = {
  title: "입장 및 좌석 정보",
  desc: "입장 및 좌석 정보를 알려드립니다.",
  tabs: [
    { name: "좌석배치도", path: "seatmap" },
    { name: "입장시간 및 방법", path: "entrance" },
    { name: "구장 내 매장정보", path: "store" },
  ],
};

const TicketLayout = () => {
  return (
    <PageLayout info={ticketInfo}>
      <Outlet />
    </PageLayout>
  );
};
export default TicketLayout;
