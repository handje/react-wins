import { api } from "@api/api";
import { TTeamVS } from "@customTypes/teamRank";
import { ArticleTitle } from "@styles/common.style";
import { getVSinfo } from "@utils/filterData";
import { useEffect, useState } from "react";
import styled from "styled-components";
export const teamRankingHeaders = [
  ["KT", "KT"],
  ["SS", "삼성"],
  ["OB", "두산"],
  ["LG", "LG"],
  ["WO", "키움"],
  ["LT", "롯데"],
  ["SK", "SSG"],
  ["NC", "NC"],
  ["HT", "KIA"],
  ["HH", "한화"],
];

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border: 1px solid #cfcfcf;
  border-top: 2px solid #ec0a0b;
`;
const StyledTr = styled.tr<{ $isActive?: boolean }>`
  & > th,
  td {
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    border-right: 1px solid #cfcfcf;
  }
  & > th {
    padding: 8px 0;
    background-color: #f6f6f6;
    font-size: 14px;
    color: #222;
  }
  & > td {
    font-size: 12px;
    border-top: 1px solid #cfcfcf;
    color: ${({ $isActive }) => ($isActive ? "#ec0a0b" : "#5b5a5a")};
    background-color: ${({ $isActive }) => ($isActive ? "#fff5f7" : "#fff")};
    padding: 8px 0;
  }
  & > th:nth-child(2),
  td:nth-child(2) {
    background-color: #fff5f7;
    color: #ec0a0b;
  }
`;

const WinLose = () => {
  const [teamVs, setTeamVs] = useState<TTeamVS[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api("game/rank/teamvs");
      setTeamVs(data?.list);
    };
    fetchData();
  }, []);

  return (
    <article>
      <ArticleTitle>{"2024 시즌 팀 간 승패표"}</ArticleTitle>
      <StyledTable>
        <thead>
          <StyledTr>
            <th>
              팀명
              <br />
              (승-패-무)
            </th>
            {teamRankingHeaders.map((team, colIndex) => (
              <th key={colIndex}>{team[1]}</th>
            ))}
          </StyledTr>
        </thead>
        <tbody>
          {teamRankingHeaders.map((row, rowIndex) => (
            <StyledTr key={rowIndex} $isActive={rowIndex === 0}>
              <td>{row[1]}</td>
              {teamVs &&
                teamRankingHeaders.map((col, colIndex) => {
                  let result;
                  if (rowIndex === colIndex) {
                    result = "■";
                  } else {
                    const record = getVSinfo(teamVs, row[1], col[0]);
                    result = `${record[0]}-${record[1]}-${record[2]}`;
                  }
                  return <td key={colIndex}>{result}</td>;
                })}
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </article>
  );
};
export default WinLose;
