import { api } from "@api/api";
import Table from "@components/common/Table";
import { TPicheringRank } from "@customTypes/teamRank";
import { ArticleTitle } from "@styles/common.style";
import { filterData } from "@utils/filterData";
import { useEffect, useState } from "react";

export const teamRankingHeaders: [string, string][] = [
  ["teamName", "팀명"],
  ["sh", "희타"],
  ["sf", "희비"],
  ["bb", "볼넷"],
  ["ib", "고의4구"],
  ["bbhp", "사구"],
  ["kk", "탈삼진"],
  ["wp", "폭투"],
  ["sho", "보크"],
  ["r", "실점"],
  ["er", "자책점"],
  ["bs", "블론세이브"],
  ["whip", "WHIP"],
  ["oavg", "피안타율"],
  ["qs", "QS"],
];
const RecordPicher = () => {
  const [pitchers, setPitchers] = useState<TPicheringRank[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api("game/rank/pitching");
      const ranking = data?.list?.map((team: TPicheringRank) => filterData(team, teamRankingHeaders));
      setPitchers(ranking);
    };
    fetchData();
  }, []);

  return (
    <article>
      <ArticleTitle>{"2024 시즌 팀 투수 기록"}</ArticleTitle>
      {pitchers.length > 0 && (
        <Table<TPicheringRank> resData={pitchers} headers={teamRankingHeaders.map((item) => item[1])} />
      )}
    </article>
  );
};
export default RecordPicher;
