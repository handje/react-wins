import styled from "styled-components";

export const ArticleTitle = styled.h4`
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 20px;
    background-color: #d23933;
    vertical-align: middle;
    margin-right: 13px;
    margin-bottom: 2px;
  }
`;

export const FullContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentBanner = styled.img`
  width: 100%;
  margin-bottom: 65px;
`;

export const ContentTitle = styled.h3`
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

export const DescStyle = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 26px;
  letter-spacing: normal;
  text-align: justify;
  color: #5b5a5a;
  margin: 0;

  & > strong {
    &.red {
      color: #ec0a0b;
    }
  }
`;
