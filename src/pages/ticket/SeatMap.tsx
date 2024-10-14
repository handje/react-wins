import seatmap from "@assets/images/WP_seat.png";
import WP_Title from "@assets/images/WP_Title.png";
import { FullContentImage } from "@styles/common.style";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const TitleImg = styled.img`
  width: 342px;
  height: 61px;
  text-align: center;
`;

const SeatMap = () => {
  return (
    <Container>
      <TitleImg src={WP_Title} />
      <FullContentImage src={seatmap} />
    </Container>
  );
};
export default SeatMap;
