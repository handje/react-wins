import { api } from "@api/api";
import Table from "@components/common/Table";
import { TTemaRank } from "@customTypes/teamRank";
import { ArticleTitle } from "@styles/common.style";
import { filterData } from "@utils/filterData";
import { useEffect, useState } from "react";

export const teamRankingHeaders: [string, string][] = [
  ["rank", "순위"],
  ["teamName", "팀명"],
  ["game", "경기 수"],
  ["win", "승"],
  ["lose", "패"],
  ["drawn", "무"],
  ["wra", "승률"],
  ["ab", "타수"],
  ["continue1", "연속"],
  ["bra", "출루율"],
  ["lra", "장타율"],
  ["hra", "타율"],
  ["er", "자책점"],
  ["run", "득점"],
  ["r", "실점"],
  ["hr", "홈런"],
];
export const teamRankHeaders = [
  "순위",
  "팀명",
  "경기 수",
  "승",
  "패",
  "무",
  "승률",
  "타수",
  "연속",
  "출루율",
  "장타율",
  "타율",
  "자책점",
  "득점",
  "실점",
  "홈런",
];

const RecordTeam = () => {
  const [teams, setTeams] = useState<TTemaRank[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api("game/teamrankbyyear");
      const ranking = data?.list?.map((team: TTemaRank) => filterData(team, teamRankingHeaders));
      setTeams(ranking);
    };
    fetchData();
  }, []);
  return (
    <article>
      <ArticleTitle>{"2024 시즌 팀 기록"}</ArticleTitle>
      {teams.length > 0 && <Table<TTemaRank> resData={teams} headers={teamRankingHeaders.map((item) => item[1])} />}
    </article>
  );
};
export default RecordTeam;
