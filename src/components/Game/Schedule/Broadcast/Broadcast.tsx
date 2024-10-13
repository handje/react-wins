import { TBroadcastTag } from "@customTypes/game/schedule";
import styled from "styled-components";
import BroadcastItem from "./BroadcastItem";

const BroadcastStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Broadcast = () => {
  const tagList = ["TV", "CMB", "IPTV", "RADIO"];
  return (
    <BroadcastStyle>
      {tagList.map((tag, index) => (
        <BroadcastItem key={index} tag={tag.toLowerCase() as TBroadcastTag} />
      ))}
    </BroadcastStyle>
  );
};
export default Broadcast;
