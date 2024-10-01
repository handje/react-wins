import Broadcast from "@components/Game/Schedule/Broadcast";
import Calendar from "@components/Game/Schedule/Calendar";
import ScheduleList from "@components/Game/Schedule/ScheduleList";
import { useEffect } from "react";
import { useHomeStore } from "store/actions/useHomeStore";
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
  const fetchRecentGames = useHomeStore((state) => state.fetchRecentGames);

  useEffect(() => {
    fetchRecentGames();
  }, []);

  return (
    <ScheduleStyle>
      <ScheduleList />
      <Calendar />
      <Broadcast />
    </ScheduleStyle>
  );
};
export default Schedule;
