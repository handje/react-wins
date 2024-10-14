import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useScheduleStore } from "store/actions/useScheduleStore";
import styled from "styled-components";
import Cells from "./Cells";
import Days from "./Days";
import Header from "./Header";
import Result from "./Result";
import Tab from "./Tab";

const CalendarStyle = styled.div`
  width: 100%;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 15px 0;
    border-top: 2px solid #222;
    border-bottom: 2px solid #222;
  }

  & > span {
    display: block;
    font-size: 14px;
    color: #222;
    font-weight: 300;
    text-align: right;
  }
`;

const Calendar = () => {
  const fetchMonthSchedule = useScheduleStore((state) => state.fetchMonthSchedule);
  const fetchAllGameSchedule = useScheduleStore((state) => state.fetchAllGameSchedule);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [activeTab, setActiveTab] = useState("kt wiz 경기");

  const formattedDate = format(currentMonth, "yyyyMM");

  useEffect(() => {
    fetchMonthSchedule(formattedDate);
  }, [formattedDate]);

  useEffect(() => {
    if (activeTab !== "kt wiz 경기") fetchAllGameSchedule(formattedDate);
  }, [formattedDate]);

  return (
    <CalendarStyle>
      <div>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} formattedDate={formattedDate} />
        <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} formattedDate={formattedDate} />
        <Result />
      </div>
      <div>
        <Days />
        {activeTab === "kt wiz 경기" ? (
          <Cells
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            formattedDate={formattedDate}
            isKtwizData
          />
        ) : (
          <Cells
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            formattedDate={formattedDate}
          />
        )}
      </div>
      <span>* 경기 일정은 사정에 따라 변동될 수있습니다.</span>
    </CalendarStyle>
  );
};
export default Calendar;
