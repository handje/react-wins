import styled from "styled-components";
import Button from "../Common/Button";
import Date from "../Common/Date";
import Score from "../Common/Score";
import Text from "../Common/Text";
import Team from "./Team";

interface ScheduleItemProps {
  date: string;
  visitScore: number | undefined;
  homeScore: number | undefined;
  home: string | undefined;
  visit: string | undefined;
  result: string | undefined;
  homePlayer: string | undefined;
  visitPlayer: string | undefined;
  link: string;
  homeLogo: string | undefined;
  visitLogo: string | undefined;
  $isCurrent: boolean;
}

const ScheduleItemStyle = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #d2d2d2;
  gap: 10px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }

  &:nth-child(2) {
    z-index: 1;
    width: 100%;
    min-width: 400px;
    min-height: 226px;
    height: 100%;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.24);
  }
`;

const ScheduleItem = ({
  date,
  visitScore,
  homeScore,
  home,
  visit,
  result,
  homePlayer,
  visitPlayer,
  link,
  visitLogo,
  homeLogo,
  $isCurrent,
}: ScheduleItemProps) => {
  return (
    <ScheduleItemStyle>
      <Date date={date} $isCurrent={$isCurrent} />
      <div>
        <Team visitLogo={visitLogo} visit={visit} visitPlayer={visitPlayer} />
        <div>
          <Score visitScore={visitScore} homeScore={homeScore} />
          <Text result={result} $color={result?.length === 1 ? "#ec0a0b" : "#222"} />
          <Button to={link} />
        </div>
        <Team homeLogo={homeLogo} home={home} homePlayer={homePlayer} />
      </div>
    </ScheduleItemStyle>
  );
};
export default ScheduleItem;
