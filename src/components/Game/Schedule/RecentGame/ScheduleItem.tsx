import { RecentGamesType } from "@customTypes/home";
import styled from "styled-components";
import Button from "../Common/Button";
import Date from "../Common/Date";
import Score from "../Common/Score";
import Text from "../Common/Text";
import Team from "./Team";

interface ScheduleItemProps {
  data: RecentGamesType | null;
  $isCurrent: boolean;
}

const ScheduleItemStyle = styled.li`
  position: relative;
  width: 100%;
  height: 226px;
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
    min-height: 240px;
    height: 100%;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.24);
  }
`;

const ScheduleItem = ({ data, $isCurrent }: ScheduleItemProps) => {
  const date = data ? `${data?.gyear}.${data?.gmonth}.${data?.gday}` : "";
  const result = data?.outcome ? data?.outcome : `${data?.gtime} ${data?.stadium}`;
  const homePlayer = `${data?.homeDecision ? data.homeDecision : "선발"} : ${data?.homeDecisionPitcher ? data?.homeDecisionPitcher : "미정"}`;
  const visitPlayer = `${data?.visitDecision ? data?.visitDecision : "선발"} : ${data?.visitDecisionPitcher ? data?.visitDecisionPitcher : "미정"}`;

  return (
    <ScheduleItemStyle>
      <Date date={date} $isCurrent={$isCurrent} />
      <div>
        {data ? (
          <>
            <Team visitLogo={data.visitLogo} visit={data.visit} visitPlayer={visitPlayer} />
            <div>
              <Score visitScore={data.visitScore} homeScore={data.homeScore} />
              <Text result={result} $color={result?.length === 1 ? "#ec0a0b" : "#222"} />
              <Button to={"/game/boxscore"} />
            </div>
            <Team homeLogo={data.homeLogo} home={data.home} homePlayer={homePlayer} />
          </>
        ) : (
          "예정된 경기가 없습니다."
        )}
      </div>
    </ScheduleItemStyle>
  );
};
export default ScheduleItem;
