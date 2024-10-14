import { Tcrowd } from "@customTypes/game/Crowd";
import { ArticleTitle } from "@styles/common.style.ts";
import styled from "styled-components";

const TableWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
  th {
    padding: 10px;
    text-align: center;
    border: 1px solid #cfcfcf;
    border-top: 2px solid red;
    font-size: 15px;
    color: #5b5a5a;
  }
`;

const TableBody = styled.tbody`
  td {
    padding: 10px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #cfcfcf;
    font-size: 12px;
    color: #5b5a5a;
  }
  tr {
    border: 1px solid #cfcfcf;
    font-size: 12px;
    color: #5b5a5a;
  }
`;

const HighlightRow = styled.tr`
  background-color: #fff5f7;
  td {
    color: #ec0a0b;
  }
`;

const StyledArticle = styled.article`
  width: 100%;
  height: 435px;
`;

const AudienceRecord = ({ crowdData }: { crowdData: Tcrowd[] }) => {
  return (
    <>
      <StyledArticle>
        <ArticleTitle>{"2024 시즌 관중기록"}</ArticleTitle>
        <TableWrapper>
          <Table>
            <TableHeader>
              <tr>
                <th>순위</th>
                <th>팀명</th>
                <th>경기 수</th>
                <th>누적관중</th>
                <th>평균관중</th>
              </tr>
            </TableHeader>
            <TableBody>
              {crowdData.map((team, index) =>
                team.teamName === "KT" ? (
                  <HighlightRow key={index}>
                    <td>{index + 1}</td>
                    <td>{team.teamName}</td>
                    <td>{team.game}</td>
                    <td>{team.crowd.toLocaleString()}</td>
                    <td>{Math.floor(team.crowd / team.game).toLocaleString()}</td>
                  </HighlightRow>
                ) : (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{team.teamName}</td>
                    <td>{team.game}</td>
                    <td>{team.crowd.toLocaleString()}</td>
                    <td>{Math.floor(team.crowd / team.game).toLocaleString()}</td>
                  </tr>
                )
              )}
            </TableBody>
          </Table>
        </TableWrapper>
      </StyledArticle>
    </>
  );
};
export default AudienceRecord;
