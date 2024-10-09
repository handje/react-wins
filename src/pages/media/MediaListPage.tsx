import MediaList from "@components/Media/MediaList";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useMediaStore } from "store/actions/useMediaStore";

const MediaListPage = () => {
  const { mediaType } = useParams();
  const [_, setSearchParams] = useSearchParams();
  const pageNum = useMediaStore((state) => state.pageNum);
  const resetPageNum = useMediaStore((state) => state.resetPageNum);
  const mediaList = useMediaStore((state) => state.mediaList);
  const setMediaList = useMediaStore((state) => state.setMediaList);

  let url;
  if (mediaType === "wiznews") {
    url = `article/newslistpage?itemCount=5&pageNum=${pageNum}`;
  } else {
    url = `article/wizpresslistpage?itemCount=5&pageNum=${pageNum}`;
  }

  useEffect(() => {
    setMediaList(url);
    window.scrollTo(0, 0);
    setSearchParams({ "search.page": `${pageNum}` });
  }, [pageNum, url]);

  useEffect(() => {
    resetPageNum();
  }, [mediaType]);

  return (
    <>
      <MediaList mediaList={mediaList} />
    </>
  );
};
export default MediaListPage;
