import { TMedia } from "@customTypes/media";

export type MediaStoreType = {
  mediaList: TMedia[];
  media: TMedia | undefined;
  pageNum: number;
  resetPageNum: () => void;
  setPageNum: (num: number) => void;
  setMediaList: (url: string) => void;
  setMedia: (url: string) => void;
};
