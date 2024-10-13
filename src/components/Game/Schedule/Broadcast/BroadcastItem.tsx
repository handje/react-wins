import { TBroadcastTag } from "@customTypes/game/schedule";
import { broadcastItemList } from "@data/game/broadcast";
import styled from "styled-components";
import Tag from "./Tag";

const BroadcastListStyle = styled.li`
  display: flex;
  align-items: baseline;

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

const BroadcastItemStyle = styled.p`
  font-size: 13px;
  color: #222;
  font-weight: 300;
  line-height: 1.3;

  & > span {
    color: #666;

    &::after {
      display: inline;
      content: ", ";
    }
  }

  &:last-child {
    & > span {
      &::after {
        display: none;
      }
    }
  }
`;

const BroadcastItem = ({ tag }: { tag: TBroadcastTag }) => {
  return (
    <>
      <BroadcastListStyle>
        <Tag tag={tag} />
        <div>
          {broadcastItemList[tag]?.map((item, index) => (
            <BroadcastItemStyle key={index}>
              {item.abb}
              <span>{`(${item.name})`}</span>
            </BroadcastItemStyle>
          ))}
        </div>
      </BroadcastListStyle>
    </>
  );
};
export default BroadcastItem;
