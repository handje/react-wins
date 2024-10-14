import { api } from "@api/api";
import dummyRecent from "@data/home/recentGames.json";
import { HomeStoreType } from "store/types/homeStore";
import { create } from "zustand";

export const useHomeStore = create<HomeStoreType>((set) => ({
  data: null,
  issue: null,
  ktWizTeamRank: null,
  isLoading: false,
  fetchRecentGames: async () => {
    set({ isLoading: true });
    try {
      const data = await api("game/recentGames");
      if (data) {
        set({ data: data.data });
      } else {
        set({ data: dummyRecent.data });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  fetchTeamRanking: async () => {
    const data = await api("game/ktwizteamrank");
    data &&
      set({
        ktWizTeamRank: data.data.ktWizTeamRank,
      });
  },
  fetchHotIssue: async (count: string) => {
    const data = await api(`media/hotissue?count=${count}`);
    data && set({ issue: data });
  },
}));
