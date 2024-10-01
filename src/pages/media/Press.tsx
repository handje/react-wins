import MediaList from "@components/Media/MediaList";
import { TMedia } from "@customTypes/media";
import { api } from "api/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Press = () => {
  const [pressList, setPressList] = useState<TMedia[]>([]);
  const [searchParams] = useSearchParams();
  const pageNum = searchParams.get("search.page") || 1;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api(`article/wizpresslistpage?itemCount=5&pageNum=${pageNum}`);
      data && setPressList(data.list);
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [pageNum]);

  return (
    <>
      <MediaList mediaList={pressList} />
    </>
  );
};
export default Press;
