import Broadcast from "@components/Game/Schedule/Broadcast/Broadcast";
import Calendar from "@components/Game/Schedule/Calendar/Calendar";
import ScheduleList from "@components/Game/Schedule/RecentGame/ScheduleList";
import styled from "styled-components";

const ScheduleStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Schedule = () => {
  return (
    <ScheduleStyle>
      <ScheduleList />
      <Calendar />
      <Broadcast />
    </ScheduleStyle>
  );
};
export default Schedule;
