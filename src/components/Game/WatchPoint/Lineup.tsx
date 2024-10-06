import versus from "@assets/images/watchPointImg2.png";

import { ArticleTitle } from "@styles/common.style";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";
import Team from "./Lineup/Team";

const LineupStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
  }
`;

const Lineup = () => {
  const gameScore = useWatchPointStore((state) => state.gameScore);

  return (
    <LineupStyle>
      <ArticleTitle>{"라인업"}</ArticleTitle>
      <div>
        <Team src={gameScore?.visitLogo} visit={gameScore?.visit} />
        <img src={versus} alt="versus" />
        <Team src={gameScore?.homeLogo} home={gameScore?.home} />
      </div>
    </LineupStyle>
  );
};
export default Lineup;
