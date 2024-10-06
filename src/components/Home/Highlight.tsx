import { api } from "@api/api";
import video_title from "@assets/images/home_title_video.png";
import Controller from "@components/Home/Video/Controller";
import VideoList from "@components/Home/Video/VideoList";
import VideoBox from "@components/Home/Video/ViedoBox";
import { TVideo } from "@customTypes/highlight";
import { StyledSection } from "@styles/Home.style";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  position: relative;
  width: 580px;
  overflow: hidden;
  margin-bottom: -20px;
  z-index: 0;
`;
const Highlight = () => {
  const [videoList, setVideoList] = useState<TVideo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api("media/highlightlist?count=10");
      const highlight = data?.list.slice(0, 4);
      setVideoList(highlight);
    };
    fetchData();
  }, []);
  return (
    <StyledSection>
      <StyledImg src={video_title} />
      <VideoBox />
      <VideoList videoList={videoList} />
      <Controller $isFull={true} title="더 많은 영상보기" path="#" />
    </StyledSection>
  );
};
export default Highlight;
