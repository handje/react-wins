import ArticleTitle from "@components/common/ArticleTitle";
import { StyledImage } from "@styles/ImageStyle.style";

const Policy = () => {
  return (
    <>
      <ArticleTitle title="일반회원 혜택" isBold={true} />
      <StyledImage
        src="https://wizzap.ktwiz.co.kr/files/resource/2024/03/15/20240315173238.120-b0bae2fb2f7b.jpg"
        alt="일반회원정책 안내"
      />
    </>
  );
};
export default Policy;
