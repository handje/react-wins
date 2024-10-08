import { calculateRatio } from "@utils/calculateRatio";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border: 1px solid #dcdcdc;
  border-spacing: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  background-color: #fff;
  color: #222;
`;

const StyledRow = styled.tr`
  border-bottom: 1px solid #dcdcdc;

  & > th {
    padding: 6px 8px;
    background-color: #ed323d;
    color: #fff;
    border-right: 1px solid #dcdcdc;
  }

  & > td {
    padding: 6px 8px;
    border-right: 1px solid #dcdcdc;
  }

  & > td.bold {
    font-weight: 400;
  }

  & > th.rowTitle,
  & > td.rowTitle {
    width: 16%;
  }
`;

const Table = () => {
  const visitTeamRank = useWatchPointStore((state) => state.visitTeamRank);
  const visitTeamWinLose = useWatchPointStore((state) => state.visitTeamWinLose);
  const homeTeamRank = useWatchPointStore((state) => state.homeTeamRank);
  const homeTeamWinLose = useWatchPointStore((state) => state.homeTeamWinLose);

  const teamRank = (team: any) => [team?.win, team?.lose, team?.drawn, team?.wra];

  const teamWinLose = (team: any) => [
    team?.win,
    team?.lose,
    team?.drawn,
    calculateRatio(team?.win, team?.lose, team?.drawn),
  ];

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <StyledRow>
            <th>승</th>
            <th>패</th>
            <th>무</th>
            <th>승률</th>
            <th className="bold rowTitle">VS</th>
            <th>승</th>
            <th>패</th>
            <th>무</th>
            <th>승률</th>
          </StyledRow>
        </thead>
        <tbody>
          <StyledRow>
            {teamRank(visitTeamRank).map((team, index) => (
              <td key={index}>{team}</td>
            ))}
            <td className="bold rowTitle">시즌 성적</td>
            {teamRank(homeTeamRank).map((team, index) => (
              <td key={index}>{team}</td>
            ))}
          </StyledRow>
          <StyledRow>
            {teamWinLose(visitTeamWinLose).map((team, index) => (
              <td key={index}>{team}</td>
            ))}
            <td className="bold rowTitle">시즌 상대 전적</td>
            {teamWinLose(homeTeamWinLose).map((team, index) => (
              <td key={index}>{team}</td>
            ))}
          </StyledRow>
          <StyledRow>
            <td colSpan={4}>{`${visitTeamRank?.rank}위`}</td>
            <td className="bold rowTitle">시즌 순위</td>
            <td colSpan={4}>{`${homeTeamRank?.rank}위`}</td>
          </StyledRow>
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
export default Table;
