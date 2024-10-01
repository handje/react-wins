import ArticleTitle from "@components/common/ArticleTitle";
import { StyledImage } from "@styles/ImageStyle.style";

const Donation = () => {
  return (
    <>
      <ArticleTitle title="기부 프로그램" isBold={true} />
      <StyledImage
        src="https://wizzap.ktwiz.co.kr/files/resource/2024/03/15/20240315173057.8c6-dd00966cb974.jpg"
        alt="기부프로그램 안내"
      />
    </>
  );
};
export default Donation;
