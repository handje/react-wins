import { useEffect } from "react";
import { useHomeStore } from "store/actions/useHomeStore";
import styled from "styled-components";
import ScheduleItem from "./ScheduleItem";

type TScheduleOrder = "prev" | "current" | "next";

const ScheduleListStyle = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 38px 0;
`;

const ScheduleList = () => {
  const fetchRecentGames = useHomeStore((state) => state.fetchRecentGames);
  const data = useHomeStore((state) => state.data);
  const scheduleOrder: TScheduleOrder[] = ["prev", "current", "next"];

  useEffect(() => {
    fetchRecentGames();
  }, []);

  return (
    <ScheduleListStyle>
      {scheduleOrder.map((order, idx) => (
        <ScheduleItem key={idx} data={data ? data[order] : null} $isCurrent={order === "current"} />
      ))}
    </ScheduleListStyle>
  );
};
export default ScheduleList;
