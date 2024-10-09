import { api } from "@api/api";
import { MediaStoreType } from "store/types/mediaStore";
import { create } from "zustand";

export const useMediaStore = create<MediaStoreType>((set) => ({
  mediaList: [],
  media: undefined,
  pageNum: 1,

  setPageNum: (num) => set({ pageNum: num }),
  resetPageNum: () => set({ pageNum: 1 }),
  setMediaList: async (url) => {
    const { data } = await api(url);
    data && set({ mediaList: data.list });
  },
  setMedia: async (url) => {
    const { data } = await api(url);
    data && set({ media: data.article });
  },
}));
