import { TTeamVS } from "@customTypes/game/teamRank";

export const filterData = <T extends Record<string, string | number>>(rawData: T, headers: [string, string][]) => {
  const filteredData = headers.reduce((acc: Record<string, string | number>, curr) => {
    acc[curr[0]] = rawData[curr[0]];
    return acc;
  }, {});

  return filteredData;
};

export const getVSinfo = (data: TTeamVS[], from: string, to: string) => {
  const result = data.find((item) => item.teamName === from && item.vsTeamCode === to);
  return [result?.win, result?.lose, result?.drawn];
};
