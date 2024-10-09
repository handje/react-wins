import MediaDetail from "@components/Media/MediaDetail";
import SkeletonDetail from "@components/Media/SkeletonDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaStore } from "store/actions/useMediaStore";

const MediaDetailPage = () => {
  const { mediaType, artcSeq } = useParams();
  const media = useMediaStore((state) => state.media);
  const setMedia = useMediaStore((state) => state.setMedia);
  const isLoading = useMediaStore((state) => state.isDetailLoading);
  let url;
  if (mediaType === "wiznews") {
    url = `article/newsdetail?artcSeq=${artcSeq}`;
  } else {
    url = `article/wizpressdetail?artcSeq=${artcSeq}`;
  }

  useEffect(() => {
    setMedia(url);
    window.scrollTo(0, 0);
  }, [url]);

  return <>{isLoading ? <SkeletonDetail /> : <MediaDetail media={media} />}</>;
};
export default MediaDetailPage;
