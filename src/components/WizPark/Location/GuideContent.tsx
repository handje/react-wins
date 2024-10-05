import { TGuideInfo } from "@customTypes/park";
import KakaoMap from "./KakaoMap";
import LocationGuide from "./LocationGuide";

const GuideContent = ({ guideInfo }: { guideInfo: TGuideInfo }) => {
  return (
    <>
      <KakaoMap position={guideInfo?.position} name={guideInfo?.name} />
      <LocationGuide
        newAddress={guideInfo?.newAddress}
        address={guideInfo?.address}
        url={guideInfo?.url}
        busList={guideInfo?.busList}
        subway={guideInfo?.subway}
      />
    </>
  );
};
export default GuideContent;
