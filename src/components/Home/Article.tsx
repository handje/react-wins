import homeBanner from "@assets/images/home-banner.png";
import { useEffect } from "react";
import { useHomeStore } from "store/actions/useHomeStore";
import styled from "styled-components";
import Container from "./Common/Container";
import Description from "./Common/Description";
import Shortcut from "./Common/Shortcut";
import Tag from "./Common/Tag";
import Text from "./Common/Text";

const ArticleStyle = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(${homeBanner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ArticleOuterStyle = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
`;

const ArticleInnerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Article = () => {
  const fetchHotIssue = useHomeStore((state) => state.fetchHotIssue);
  const issue = useHomeStore((state) => state.issue);

  useEffect(() => {
    fetchHotIssue("1");
  }, []);

  return (
    <ArticleStyle>
      <ArticleOuterStyle>
        <Container to="/media/wiznews" target="_self" $position="absolute" $bottom="55px" $left="0">
          {issue?.map((item, index) => (
            <ArticleInnerStyle key={index}>
              <Tag tag="위즈소식" $marginBottom="16px" />
              <Text $marginBottom="12px" $fontSize="20px" $fontWeight="300" $color="#fff" text={item.artcTitle} />
              <Description
                $marginBottom="16px"
                $fontSize="13px"
                $fontWeight="300"
                $color="#fff"
                $opacity="0.6"
                $textShadow="0 3px 6px rgba(0,0,0,.16)"
                desc={item.artcContents}
              />
              <Shortcut $fontSize="13px" $fontWeight="300" $color="#fff" shortcut="자세히보기" />
            </ArticleInnerStyle>
          ))}
        </Container>
      </ArticleOuterStyle>
    </ArticleStyle>
  );
};
export default Article;
