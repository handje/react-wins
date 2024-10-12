import { ErrorStoreType } from "store/types/errorStore";
import { create } from "zustand";

export const useErrorStore = create<ErrorStoreType>((set) => ({
  isError: false,
  setError: () => set({ isError: true }),
  clearError: () => set({ isError: false }),
}));
