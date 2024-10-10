import { TMedia } from "@customTypes/media";

export type MediaStoreType = {
  mediaList: TMedia[];
  media: TMedia | undefined;
  pageNum: number;
  artcPrevSeq: number | undefined;
  artcNextSeq: number | undefined;
  resetPageNum: () => void;
  setPageNum: (num: number) => void;
  setMediaList: (url: string) => void;
  setMedia: (url: string) => void;
  setArtcSeq: (prev: number, next: number) => void;
};
