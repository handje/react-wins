import iksanImg from "@assets/images/iksan_img.png";
import KakaoMap from "@components/Location/KakaoMap";
import LocationGuide from "@components/Location/LocationGuide";
import LocationTitle from "@components/Location/LocationTitle";
import PageLayout from "layouts/PageLayout";
import styled from "styled-components";
import { LocationWrapper } from "./Location";

const StateBox = styled.div`
  border: 1px solid #e4e4e4;
  margin: 10px 0 30px 0;
  padding: 16px 18px;
  background-color: #f8f8f8;
`;

const iksanInfo = {
  title: "익산야구장",
  desc: "kt wiz의 둥지 '익산야구장'을 소개합니다.",
};

const Iksan = () => {
  return (
    <PageLayout info={iksanInfo}>
      <div>
        <LocationTitle title="퓨처스리그가 펼쳐지는 익산 야구장" />
        <img style={{ width: "100%" }} src={iksanImg} alt="익산 야구장 이미지" />

        <StateBox>
          <p>
            <strong>규격</strong> : 좌우 98m, 중앙 121m /<strong>관람석</strong> : 740석 / <strong>본부석</strong> :
            덕아웃 /<strong>전광판</strong> : 전자식 / <strong>펜스</strong> : 고정식 /<strong>건립</strong> : 2011년
            6월 / <strong>그라운드</strong> : 인조잔디
          </p>
        </StateBox>
      </div>
      <LocationWrapper>
        <LocationTitle title="오시는 길" />
        <KakaoMap lat={35.96745213} lng={127.00624385} location={"익산 야구장"} />
        <LocationGuide
          address1="주소 : 전라북도 익산시 무왕로 1397 익산야구장"
          address2="(구 : 전라북도 익산시 부송동 180번지)"
          href="https://kko.to/PRUms-dkQh"
          busList={[
            { color: "#3aac16", busType: "일반", busNumber: "102-1, 102-2, 103, 103-1" },
            {
              color: "#3aac16",
              busType: "일반",
              busNumber:
                "1, 40, 58, 59, 59-1, 60, 60-1, 60-2, 60-3, 61, 62, 63, 63-1, 64, 65, 65-1, 102-1, 102-2, 103, 105",
            },
            { color: "#3864ca", busType: "좌석", busNumber: "222, 222-1 , 222-2, 222-3, 555" },
            { color: "#3aac16", busType: "일반", busNumber: "40, 55, 56, 58, 102-2, 103" },
            {
              color: "#3aac16",
              busType: "일반",
              busNumber: "55, 56, 58, 59, 60, 60-1, 60-2, 60-3, 61, 62, 63, 63-1, 64, 65, 65-1, 103",
            },
            { color: "#3864ca", busType: "좌석", busNumber: "222, 222-1 , 222-2, 222-3, 555" },
          ]}
        />
      </LocationWrapper>
    </PageLayout>
  );
};
export default Iksan;
