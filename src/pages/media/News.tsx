import { api } from "@api/api";
import MediaList from "@components/Media/MediaList";
import { TMedia } from "@customTypes/media";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const News = () => {
  const [newsList, setNewsList] = useState<TMedia[]>([]);
  const [searchParams] = useSearchParams();
  const pageNum = searchParams.get("search.page") || 1;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api(`article/newslistpage?itemCount=5&pageNum=${pageNum}`);
      data && setNewsList(data.list);
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [pageNum]);

  return (
    <>
      <MediaList mediaList={newsList} />
    </>
  );
};
export default News;
