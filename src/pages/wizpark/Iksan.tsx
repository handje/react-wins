import iksanImg from "@assets/images/iksan_img.png";
import GuideContent from "@components/WizPark/Location/GuideContent";
import { IksanInfo } from "@data/wiz/location";
import { ArticleTitle } from "@styles/common.style";
import PageLayout from "layouts/PageLayout";
import styled from "styled-components";

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
        <ArticleTitle>{"퓨처스리그가 펼쳐지는 익산 야구장"}</ArticleTitle>
        <img style={{ width: "100%" }} src={iksanImg} alt="익산 야구장 이미지" />
        <StateBox>
          <p>
            <strong>규격</strong> : 좌우 98m, 중앙 121m /<strong>관람석</strong> : 740석 / <strong>본부석</strong> :
            덕아웃 /<strong>전광판</strong> : 전자식 / <strong>펜스</strong> : 고정식 /<strong>건립</strong> : 2011년
            6월 / <strong>그라운드</strong> : 인조잔디
          </p>
        </StateBox>
      </div>
      <section>
        <ArticleTitle>{"오시는 길"}</ArticleTitle>
        <GuideContent guideInfo={IksanInfo} />
      </section>
    </PageLayout>
  );
};
export default Iksan;
