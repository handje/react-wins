import { api } from "@api/api";
import { MediaStoreType } from "store/types/mediaStore";
import { create } from "zustand";

export const useMediaStore = create<MediaStoreType>((set) => ({
  mediaList: [],
  media: undefined,
  pageNum: 1,
  isListLoading: false,
  isDetailLoading: false,
  setPageNum: (num) => set({ pageNum: num }),
  resetPageNum: () => set({ pageNum: 1 }),
  setMediaList: async (url) => {
    try {
      set({ isListLoading: true });
      const { data } = await api(url);
      data && set({ mediaList: data.list });
    } finally {
      set({ isListLoading: false });
    }
  },
  setMedia: async (url) => {
    try {
      set({ isDetailLoading: true });
      const { data } = await api(url);
      data && set({ media: data.list });
    } finally {
      set({ isDetailLoading: false });
    }
  },
}));
