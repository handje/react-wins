import styled from "styled-components";

export const StyledHeader = styled.h4`
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

const ArticleTitle = ({ title }: { title: string }) => {
  return <StyledHeader>{title}</StyledHeader>;
};
export default ArticleTitle;
