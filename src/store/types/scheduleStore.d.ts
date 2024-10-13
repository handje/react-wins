import { ScheduleType, WholeScheduleType } from "@customTypes/game/schedule";

export type ScheduleStoreType = {
  list: ScheduleType[] | [];
  wholeList: WholeScheduleType[] | [];
  fetchMonthSchedule: (date: string) => void;
  fetchAllGameSchedule: (date: string) => void;
};
