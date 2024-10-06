import ControllBtn from "@components/Game/Common/ControllButton";
import Logo from "@components/Game/Common/Logo";
import { FilterScoreboardType } from "@customTypes/boxScore";
import { stringDate } from "@utils/date";
import { filterScoreboardData } from "@utils/filterBoxScoreData";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useGameStore } from "store/actions/useGameStore";
import styled from "styled-components";
import BoxTable from "./BoxTable";

const BoxScoreWrapper = styled.div`
  position: relative;
  background-image: linear-gradient(#fdfdfd, #f8f8f8);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  text-align: center;
  padding: 30px;

  & > article > div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

const DateSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: #222;
  font-size: 26px;
  font-weight: 600;
  margin: 2px 20px 0;
`;

const InfoWrapper = styled.div`
  margin-top: 10px;
`;

const InfoUl = styled.ul`
  display: inline-block;

  li {
    float: left;
    color: #222;
    font-size: 14px;
  }
  li:nth-child(2):before {
    content: "|";
    display: inline-block;
    margin: 0 3px;
  }
`;

const TeamWrapper = styled.div`
  bottom: 150px;
  color: #222;
  position: relative;
  .score {
    font-size: 24px;
    font-weight: 600;
    margin: 10px 0;
    display: block;
  }
  .team_place {
    font-size: 14px;
    display: block;
  }
`;

const Team1 = styled.div`
  position: absolute;
  left: 20px;
`;
const Team2 = styled.div`
  position: absolute;
  right: 20px;
`;

const BoxScoreInfo = () => {
  const schedule = useGameStore((state) => state.schedule);
  const scoreBoard = useGameStore((state) => state.scoreBoard);
  const setDaySchedule = useGameStore((state) => state.setDaySchedule);

  const filterScoreBoard = scoreBoard?.map(filterScoreboardData);

  const fetchHandler = (gameDate: string, gmkey: string) => {
    setDaySchedule({ gameDate, gmkey });
  };

  if (!schedule) return <></>;

  const boxHeaders = ["팀", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "R", "H", "E", "B"];

  return (
    <>
      <BoxScoreWrapper>
        <article>
          <div>
            <ControllBtn
              type="button"
              icon={<GrPrevious fontSize={"1.5em"} />}
              $disabled={!schedule.prev}
              onClickHandler={() =>
                schedule.prev && fetchHandler(schedule.prev.gameDate.toString(), schedule.prev.gmkey)
              }
            />
            <DateSpan>{stringDate(schedule.current.gameDate.toString())}</DateSpan>
            <ControllBtn
              type="button"
              icon={<GrNext fontSize={"1.5em"} />}
              $disabled={!schedule.next}
              onClickHandler={() =>
                schedule.next && fetchHandler(schedule.next.gameDate.toString(), schedule.next.gmkey)
              }
            />
          </div>
          <InfoWrapper>
            <InfoUl>
              <li>{schedule.current.gtime + " " + schedule.current.stadium}</li>
              <li>{"관중 : " + schedule.current.crowdCn + "명"}</li>
            </InfoUl>
          </InfoWrapper>
          {filterScoreBoard && <BoxTable<FilterScoreboardType> headers={boxHeaders} resData={filterScoreBoard} />}
          <TeamWrapper>
            <Team1>
              <Logo
                src={schedule.current.visitLogo}
                team={schedule.current.visit + " (원정)"}
                score={schedule.current.vscore.toString()}></Logo>
            </Team1>
          </TeamWrapper>
          <TeamWrapper>
            <Team2>
              <Logo
                src={schedule.current.homeLogo}
                team={schedule.current.home + " (홈)"}
                score={schedule.current.hscore.toString()}></Logo>
            </Team2>
          </TeamWrapper>
        </article>
      </BoxScoreWrapper>
    </>
  );
};
export default BoxScoreInfo;
