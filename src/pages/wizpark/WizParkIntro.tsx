import WPIntro from "@components/WizPark/WPIntro";
import PageLayout from "layouts/PageLayout";

const wizParkInfo = {
  title: "Suwon kt wiz park",
  desc: "suwon kt wiz park를 소개합니다.",
};

const WizParkIntro = () => {
  return (
    <PageLayout info={wizParkInfo}>
      <WPIntro />
    </PageLayout>
  );
};
export default WizParkIntro;
