import { api } from "@api/api";
import { ScheduleStoreType } from "store/types/scheduleStore";
import { create } from "zustand";

export const useScheduleStore = create<ScheduleStoreType>((set) => ({
  list: [],
  wholeList: [],
  fetchMonthSchedule: async (date: string) => {
    const data = await api(`game/monthschedule?yearMonth=${date}`);
    data.data && set({ list: data.data.list });
  },
  fetchAllGameSchedule: async (date: string) => {
    const data = await api(`game/allgameschedule?yearMonth=${date}`);
    data.data && set({ wholeList: data.data.list });
  },
}));
