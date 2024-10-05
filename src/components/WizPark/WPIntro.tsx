import WP_STA from "@assets/images/WP_STA.jpg";
import { contentList } from "@data/wiz/intro";
import { ContentBanner, ContentTitle, DescStyle } from "@styles/wiz.style";
import styled from "styled-components";

const SubTitle = styled.h6`
  font-size: 20px;
  font-weight: 700;
  font-stretch: normal;
  line-height: normal;
  color: #222;
  margin: 0;
`;

const Desc = styled(DescStyle)`
  padding-top: 17px;
  padding-bottom: 27px;
`;

const WizParkIntro = () => {
  return (
    <>
      <ContentBanner src={WP_STA} />
      <ContentTitle>복합 문화공간의 첨단 야구장! 수원구장</ContentTitle>
      {contentList?.map((content, idx) => (
        <section key={idx}>
          <SubTitle>{content.title}</SubTitle>
          <Desc>{content.desc}</Desc>
        </section>
      ))}
    </>
  );
};
export default WizParkIntro;
