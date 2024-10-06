import Logo from "@components/Game/Common/Logo";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";
import Table from "./Table";

const BodyStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding-top: 20px;
`;

const Body = () => {
  const gameScore = useWatchPointStore((state) => state.gameScore);

  return (
    <BodyStyle>
      <Logo src={gameScore?.visitLogo} team={`${gameScore?.visit} (원정)`} />
      <Table />
      <Logo src={gameScore?.homeLogo} team={`${gameScore?.home} (홈)`} />
    </BodyStyle>
  );
};
export default Body;
