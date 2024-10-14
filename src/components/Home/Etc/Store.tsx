import whiteLogo from "@assets/images/whiteLogo.svg";
import Container from "@components/Home/Common/Container";
import Description from "@components/Home/Common/Description";
import Image from "@components/Home/Common/Image";
import Shortcut from "@components/Home/Common/Shortcut";
import Text from "@components/Home/Common/Text";
import styled from "styled-components";

const StoreStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 50px;
  border-radius: 20px;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8), transparent 140%, transparent);
`;

const Store = () => {
  return (
    <Container
      to="https://www.ktwizstore.co.kr/"
      target="_blank"
      $bgImage="https://www.ktwiz.co.kr/v2/imgs/dummy/main/img-banner-store@2x.png">
      <StoreStyle>
        <Image src={whiteLogo} alt="logo" $maxWidth="124px" $marginBottom="5px" />
        <Text $marginBottom="20px" $fontSize="20px" $fontWeight="300" $color="#fff" text="공식 온라인 스토어" />
        <Description
          $marginBottom="35px"
          $fontSize="13px"
          $fontWeight="300"
          $color="#fff"
          $opacity="0.6"
          $textShadow="0 3px 6px rgba(0,0,0,.16)"
          desc="kt wiz의 익스클루시브한 아이템을 만나보세요!"
        />
        <Shortcut $fontSize="13px" $fontWeight="300" $color="#fff" shortcut="바로가기" />
      </StoreStyle>
    </Container>
  );
};
export default Store;
