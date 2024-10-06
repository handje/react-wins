import { api } from "@api/api";
import MediaDetail from "@components/Media/MediaDetail";
import { TMedia } from "@customTypes/media";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PressDetail = () => {
  const { artcSeq } = useParams();
  const [press, setPress] = useState<TMedia>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api(`article/wizpressdetail?artcSeq=${artcSeq}`);
      data && setPress(data.article);
    };
    fetchData();
  }, []);

  return (
    <>
      <MediaDetail media={press} />
    </>
  );
};
export default PressDetail;
