import EmptyResult from "@components/fallback/EmptyResult";
import MediaDetail from "@components/Media/MediaDetail";
import SkeletonDetail from "@components/Media/SkeletonDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaStore } from "store/actions/useMediaStore";

const MediaDetailPage = () => {
  const { mediaType, artcSeq } = useParams();
  const media = useMediaStore((state) => state.media);
  const setMedia = useMediaStore((state) => state.setMedia);
  const setArtcSeq = useMediaStore((state) => state.setArtcSeq);
  const isLoading = useMediaStore((state) => state.isDetailLoading);
  const isError = useMediaStore((state) => state.isError);

  let url;
  if (mediaType === "wiznews") {
    url = `article/newsdetail?artcSeq=${artcSeq}`;
  } else {
    url = `article/wizpressdetail?artcSeq=${artcSeq}`;
  }

  useEffect(() => {
    setMedia(url);
    window.scrollTo(0, 0);
  }, [mediaType, url]);

  useEffect(() => {
    if (media) {
      setArtcSeq(media.artcPrevSeq, media.artcNextSeq);
    }
  }, [media]);

  if (isLoading) return <SkeletonDetail />;
  if (isError) return <EmptyResult height="50vh" />;

  return <MediaDetail media={media} />;
};
export default MediaDetailPage;
