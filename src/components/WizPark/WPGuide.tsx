import WP_Title from "@assets/images/WP_Title.png";
import WP_seat from "@assets/images/WP_seat.png";
import styled from "styled-components";

const TitleImg = styled.img`
  width: 342px;
  height: 61px;
`;

const TitleDiv = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const DescImg = styled.img`
  width: 100%;
`;

const WizParkGuide = () => {
  return (
    <>
      <TitleDiv>
        <TitleImg src={WP_Title} />
      </TitleDiv>
      <DescImg src={WP_seat} />
    </>
  );
};
export default WizParkGuide;
