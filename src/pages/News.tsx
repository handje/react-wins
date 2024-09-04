import { useEffect, useState } from "react";
import MediaList from "@components/media/MediaList";
import { TNews } from "@types/news";
import dummy from "../../data.json";

const News = () => {
  const [newsList, setNewsList] = useState<TNews[]>([]);

  useEffect(() => {
    setNewsList(dummy.data.list);
  }, []);

  return (
    <section>
      <MediaList newsList={newsList} />
    </section>
  );
};
export default News;
