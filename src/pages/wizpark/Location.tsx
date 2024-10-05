import GuideContent from "@components/WizPark/Location/GuideContent";
import { parkInfo } from "@data/wiz/location";
import PageLayout from "layouts/PageLayout";

const locationInfo = {
  title: "찾아오기",
  desc: "오시는 길을 상세하게 알려드립니다.",
};

const Location = () => {
  return (
    <PageLayout info={locationInfo}>
      <GuideContent guideInfo={parkInfo} />
    </PageLayout>
  );
};
export default Location;
