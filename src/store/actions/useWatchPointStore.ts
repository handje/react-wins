import { api } from "@api/api";
import { WatchPointStoreType } from "store/types/watchPointStore";
import { create } from "zustand";

export const useWatchPointStore = create<WatchPointStoreType>((set) => ({
  ktwiztodaygame: null,
  gameScore: null,
  homeLineup: null,
  homePitcher: null,
  homeTeamRank: null,
  homeTeamWinLose: null,
  schedule: null,
  visitLineup: null,
  visitPitcher: null,
  visitTeamRank: null,
  visitTeamWinLose: null,
  weather: null,
  isLoading: false,
  fetchDaySchedule: async () => {
    const data = await api("game/dayschedule");
    data.data && set({ ktwiztodaygame: data.data.ktwiztodaygame[0] });
  },
  fetchData: async (gameDate: string, gmkey: string) => {
    try {
      set({ isLoading: true });
      const data = await api(`game/watchpoint?gameDate=${gameDate}&gmkey=${gmkey}`);
      data.data &&
        set({
          gameScore: data.data.gameScore,
          homeLineup: data.data.homeLineup,
          homePitcher: data.data.homePitcher,
          homeTeamRank: data.data.homeTeamRank,
          homeTeamWinLose: data.data.homeTeamWinLose,
          schedule: {
            current: data.data.schedule.current,
            next: data.data.schedule.next,
            prev: data.data.schedule.prev,
          },
          visitLineup: data.data.visitLineup,
          visitPitcher: data.data.visitPitcher,
          visitTeamRank: data.data.visitTeamRank,
          visitTeamWinLose: data.data.visitTeamWinLose,
          weather: data.data.weather,
        });
    } finally {
      set({ isLoading: false });
    }
  },
}));
