import { api } from "@api/api";
import { Tcrowd } from "@customTypes/game/Crowd";
import { ArticleTitle } from "@styles/common.style.ts";
import { useEffect, useState } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed; /* 열의 너비를 균등하게 설정 */
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
  th {
    padding: 10px;
    text-align: center; /* 내용 중앙 정렬 */
    border: 1px solid #cfcfcf;
    border-top: 2px solid red;
    font-size: 15px; /* 글씨 크기 설정 */
    color: #5b5a5a; /* 글씨 색상 설정 */
  }
`;

const TableBody = styled.tbody`
  td {
    padding: 10px;
    text-align: center; /* 수평 중앙 정렬 */
    vertical-align: middle; /* 수직 중앙 정렬 */
    border: 1px solid #cfcfcf;
    font-size: 12px; /* 글씨 크기 설정 */
    color: #5b5a5a; /* 글씨 색상 설정 */
  }
  tr {
    border: 1px solid #cfcfcf; /* 각 행 사이에 줄 추가 */
    font-size: 12px; /* 글씨 크기 설정 */
    color: #5b5a5a; /* 글씨 색상 설정 */
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

const AudienceRecord = () => {
  const [crowdData, setCrowdData] = useState<Tcrowd[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api("game/rank/crowd?gyear=2024");
      setCrowdData(data.list);
    };
    fetchData();
  }, []);
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
