import {
  DayScheduleType,
  GameScoreType,
  LineupType,
  PitcherType,
  ScheduleType,
  TeamRankType,
  WeatherType,
} from "@customTypes/watchPoint";

export type WatchPointStoreType = {
  gameScore: GameScoreType | null;
  homeLineup: LineupType[] | null;
  homePitcher: PitcherType | null;
  homeTeamRank: TeamRankType | null;
  homeTeamWinLose: TeamWinLoseType | null;
  schedule: ScheduleType | null;
  visitLineup: LineupType[] | null;
  visitPitcher: PitcherType | null;
  visitTeamRank: TeamRankType | null;
  visitTeamWinLose: TeamWinLoseType | null;
  weather: WeatherType | null | undefined;
  ktwiztodaygame: DayScheduleType | null;
  isLoading: boolean;
  fetchData: (gameDate: string, gmkey: string) => void;
  fetchDaySchedule: () => void;
};
