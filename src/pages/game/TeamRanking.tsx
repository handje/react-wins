import RankingChart from "@components/Game/TeamRanking/RankingChart";
import RecordBatter from "@components/Game/TeamRanking/RecordBatter";
import RecordPicher from "@components/Game/TeamRanking/RecordPicher";
import RecordTeam from "@components/Game/TeamRanking/RecordTeam";
import WinLose from "@components/Game/TeamRanking/WinLose";
import RankingTab from "@components/common/RankingTab";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > article {
    width: 100%;
    height: fit-content;
    margin-top: 45px;
  }
`;
const TeamRanking = () => {
  return (
    <>
      <RankingTab />
      <StyledSection>
        <RankingChart />
        <RecordTeam />
        <RecordPicher />
        <RecordBatter />
        <WinLose />
      </StyledSection>
    </>
  );
};
export default TeamRanking;
