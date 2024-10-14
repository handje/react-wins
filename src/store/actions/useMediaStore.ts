import { api } from "@api/api";
import { MediaStoreType } from "store/types/mediaStore";
import { create } from "zustand";

export const useMediaStore = create<MediaStoreType>((set) => ({
  mediaList: [],
  media: undefined,
  pageNum: 1,
  artcSeq: undefined,
  artcNextSeq: undefined,
  artcPrevSeq: undefined,
  isListLoading: false,
  isDetailLoading: false,
  isError: false,
  setPageNum: (num) => set({ pageNum: num }),
  resetPageNum: () => set({ pageNum: 1 }),
  setMediaList: async (url) => {
    try {
      set({ isListLoading: true });
      const { data } = await api(url);
      data && set({ mediaList: data.list });
    } catch {
      set({ isError: true });
    } finally {
      set({ isListLoading: false });
    }
  },
  setMedia: async (url) => {
    try {
      set({ isDetailLoading: true });
      const { data } = await api(url);
      data && set({ media: data.article });
    } catch {
      set({ isError: true });
    } finally {
      set({ isDetailLoading: false });
    }
  },
  setArtcSeq: (prev, next) => set({ artcPrevSeq: prev, artcNextSeq: next }),
}));
