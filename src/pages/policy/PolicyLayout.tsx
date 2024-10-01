import PageLayout from "layouts/PageLayout";
import { Outlet } from "react-router-dom";

const policyInfo = {
  title: "회원 정책",
  desc: "kt wiz회원만의 특별한 할인 혜택을 만나 보세요.",
  tabs: [
    { name: "일반회원", path: "regular" },
    { name: "기부프로그램", path: "donation" },
  ],
};
const PolicyLayout = () => {
  return (
    <PageLayout info={policyInfo}>
      <Outlet />
    </PageLayout>
  );
};
export default PolicyLayout;
