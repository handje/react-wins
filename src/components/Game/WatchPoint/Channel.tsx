import { ArticleTitle } from "@styles/common.style";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";
import Description from "./Description";

const ChannelStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Channel = () => {
  const schedule = useWatchPointStore((state) => state.schedule);
  return (
    <ChannelStyle>
      <ArticleTitle>{"중계 채널"}</ArticleTitle>
      <Description desc={`${schedule?.current.broadcast}`} isChannel />
    </ChannelStyle>
  );
};
export default Channel;
