import { api } from "@api/api";
import Table from "@components/common/Table";
import EmptyResult from "@components/fallback/EmptyResult";
import { TBattingRank } from "@customTypes/game/teamRank";
import { ArticleTitle } from "@styles/common.style";
import { filterData } from "@utils/filterData";
import { useEffect, useState } from "react";

export const teamRankingHeaders: [string, string][] = [
  ["teamName", "팀명"],
  ["hit", "안타"],
  ["h2", "2루타"],
  ["h3", "3루타"],
  ["hr", "홈런"],
  ["rbi", "타점"],
  ["sb", "도루"],
  ["bb", "볼넷"],
  ["ib", "고의4구"],
  ["hp", "사구"],
  ["kk", "삼진"],
  ["gd", "병살"],
  ["slg", "장타율"],
  ["bra", "출루율"],
  ["err", "실책"],
  ["ops", "OPS"],
  ["hra", "타율"],
];
const RecordBatter = () => {
  const [batters, setBatters] = useState<TBattingRank[]>([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api("game/rank/batting");
        const ranking = data?.list?.map((team: TBattingRank) => filterData(team, teamRankingHeaders));
        setBatters(ranking);
      } catch {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <article>
      <ArticleTitle>{"2024 시즌 팀 타자 기록"}</ArticleTitle>
      {isError ? (
        <EmptyResult />
      ) : (
        batters.length > 0 && (
          <Table<TBattingRank> resData={batters} headers={teamRankingHeaders.map((item) => item[1])} />
        )
      )}
    </article>
  );
};
export default RecordBatter;
