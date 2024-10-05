import aboutImg1 from "@assets/images/aboutImg1.png";
import { contentList } from "@data/wiz/about";

import styled from "styled-components";

const ContentBanner = styled.img`
  width: 100%;
  margin-bottom: 65px;
`;

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

const MainTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  color: #ea0a0b;

  &::after {
    display: block;
    content: "";
    width: 40px;
    height: 3px;
    margin: 25px 0;
    background-color: #ea0a0b;
  }
`;

const Desc = styled.p`
  font-weight: 300;
  line-height: 1.7;
  word-break: keep-all;

  & > strong {
    &.red {
      color: #ec0a0b;
    }
  }
`;

const About = () => {
  return (
    <>
      <ContentBanner src={aboutImg1} alt="about image" />
      {contentList?.map((content, index) => (
        <ContentStyle key={index}>
          <div>
            <MainTitle>{content.title}</MainTitle>
            <Desc>
              {content.desc}
              <strong className={content.colorDesc ? "red" : ""}>{content.colorDesc}</strong>
            </Desc>
          </div>
          {content.img && <img src={content.img} alt="about image" />}
        </ContentStyle>
      ))}
    </>
  );
};
export default About;
