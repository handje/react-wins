import KakaoMap from "@components/Location/KakaoMap";
import LocationGuide from "@components/Location/LocationGuide";
import LocationTitle from "@components/Location/LocationTitle";
import PageLayout from "layouts/PageLayout";
import styled from "styled-components";

export const LocationWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
`;

const locationInfo = {
  title: "찾아오기",
  desc: "오시는 길을 상세하게 알려드립니다.",
};

const Location = () => {
  return (
    <PageLayout info={locationInfo}>
      <LocationWrapper>
        <LocationTitle title="오시는 길" />
        <KakaoMap lat={37.29972304} lng={127.00975851} location={"수원 KT 위즈 파크"} />
        <LocationGuide
          address1="주소 : 경기도 수원시 장안구 경수대로 893(조원동) 수원"
          address2="케이티 위즈 파크 (구 : 경기도 수원시 장안구 조원동 775)"
          href="https://kko.to/2Xmot-8Sx5"
          busList={[
            { color: "#3aac16", busType: "일반", busNumber: "25, 25-2, 27, 36, 55, 62-1, 99, 99-2, 300-1" },
            { color: "#3aac16", busType: "일반", busNumber: "310, 777" },
            { color: "red", busType: "직행", busNumber: "2007, 3000, 7770" },
            { color: "#3864ca", busType: "좌석", busNumber: "300, 900" },
          ]}
          subway={[
            "화서역 하차 (택시로 10분)",
            "· 37, 39번 버스이용 수성중 사거리 하차 후 도보 3분",
            "· 55분 버스이용 종합운동장 하차 수원역하차 (택시로 20분)",
            "· 1번, 5번, 8번 버스이용 수성중 사거리 하차 후 도보 3분",
          ]}
        />
      </LocationWrapper>
    </PageLayout>
  );
};
export default Location;
