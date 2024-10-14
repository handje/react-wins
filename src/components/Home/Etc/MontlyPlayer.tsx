import whiteLogo from "@assets/images/whiteLogo.svg";
import Container from "@components/Home/Common/Container";
import Image from "@components/Home/Common/Image";
import Text from "@components/Home/Common/Text";
import montlyPlayer from "@data/home/montlyPlayer.json";
import styled from "styled-components";

const MontlyPlayerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 63px 50px;

  & > div {
    margin-bottom: 34px;
  }
`;

const MontlyPlayer = () => {
  const playerData = montlyPlayer[0];

  return (
    <Container to="player/infielder/detail?pcode=50054" target="_self" $bgImage={playerData?.imgFilePath}>
      <MontlyPlayerStyle>
        <div>
          <Image src={whiteLogo} alt="logo" $maxWidth="81px" $marginBottom="5px" />
          <Text text="이달의 선수" $fontSize="15px" $fontWeight="200" $color="#fff" $opacity="0.8" />
        </div>
        <Text text={`${playerData?.num ?? ""}`} $fontSize="53px" $fontWeight="300" $color="#f53232" />
        <Text text={playerData?.name} $fontSize="53px" $fontWeight="300" $color="#fff" />
      </MontlyPlayerStyle>
    </Container>
  );
};
export default MontlyPlayer;
