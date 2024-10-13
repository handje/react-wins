import {
  EtcGames,
  GameBattersType,
  GamePitchersType,
  ScheduleListType,
  ScoreboardType,
} from "@customTypes/game/boxScore";

export type GameStoreType = {
  daySchedule: { gameDate: string; gmkey: string } | null;
  schedule: ScheduleListType | null;
  scoreBoard: ScoreboardType[] | null;
  etcGames: EtcGames[] | null;
  hBatters: GameBattersType[] | null;
  hPitchers: GamePitchersType[] | null;
  vBatters: GameBattersType[] | null;
  vPitchers: GamePitchersType[] | null;
  setDaySchedule: (data) => void;
  setBoxScore: (data) => void;
};
