import { api } from "@api/api";
import MediaDetail from "@components/Media/MediaDetail";
import { TMedia } from "@customTypes/media";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { artcSeq } = useParams();
  const [news, setNews] = useState<TMedia>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api(`article/newsdetail?artcSeq=${artcSeq}`);
      data && setNews(data.article);
    };
    fetchData();
  }, []);

  return (
    <>
      <MediaDetail media={news} />
    </>
  );
};
export default NewsDetail;
