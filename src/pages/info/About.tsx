import aboutImg1 from "@assets/images/aboutImg1.png";
import { contentList } from "@data/wiz/about";
import { ContentBanner, ContentTitle, DescStyle } from "@styles/wiz.style";

import styled from "styled-components";

const ContentStyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 100px;

  &:nth-child(4) {
    flex-direction: row-reverse;
    gap: 50px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const About = () => {
  return (
    <>
      <ContentBanner src={aboutImg1} alt="about image" />
      {contentList?.map((content, index) => (
        <ContentStyle key={index}>
          <div>
            <ContentTitle>{content.title}</ContentTitle>
            <DescStyle>
              {content.desc}
              <strong className={content.colorDesc ? "red" : ""}>{content.colorDesc}</strong>
            </DescStyle>
          </div>
          {content.img && <img src={content.img} alt="about image" />}
        </ContentStyle>
      ))}
    </>
  );
};
export default About;
