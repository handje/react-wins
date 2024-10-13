import { useEffect } from "react";
import { useHomeStore } from "store/actions/useHomeStore";
import styled from "styled-components";
import ScheduleItem from "./ScheduleItem";

const ScheduleListStyle = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 38px 0;
`;

const ScheduleList = () => {
  const fetchRecentGames = useHomeStore((state) => state.fetchRecentGames);
  const data = useHomeStore((state) => state.data);
  const current = data?.current;
  const prev = data?.prev;
  const next = data?.next;

  useEffect(() => {
    fetchRecentGames();
  }, []);

  return (
    <ScheduleListStyle>
      <ScheduleItem
        date={`${prev?.gyear}.${prev?.gmonth}.${prev?.gday}`}
        visitScore={prev?.visitScore}
        homeScore={prev?.homeScore}
        home={prev?.homeFullname}
        visit={prev?.visitFullname}
        result={prev?.outcome ? prev?.outcome : `${prev?.gtime} ${prev?.stadium}`}
        homePlayer={`${prev?.homeDecision ? prev.homeDecision : "선발"} : ${prev?.homeDecisionPitcher ? prev?.homeDecisionPitcher : "미정"}`}
        visitPlayer={`${prev?.visitDecision ? prev?.visitDecision : "선발"} : ${prev?.visitDecisionPitcher ? prev?.visitDecisionPitcher : "미정"}`}
        homeLogo={prev?.homeLogo}
        visitLogo={prev?.visitLogo}
        link="/game/boxscore"
        $isCurrent={false}
      />
      <ScheduleItem
        date={`${current?.gyear}.${current?.gmonth}.${current?.gday}`}
        visitScore={current?.visitScore}
        homeScore={current?.homeScore}
        home={current?.homeFullname}
        visit={current?.visitFullname}
        result={current?.outcome ? current?.outcome : `${current?.gtime} ${current?.stadium}`}
        homePlayer={`${current?.homeDecision ? current.homeDecision : "선발"} : ${current?.homeDecisionPitcher ? current?.homeDecisionPitcher : "미정"}`}
        visitPlayer={`${current?.visitDecision ? current?.visitDecision : "선발"} : ${current?.visitDecisionPitcher ? current?.visitDecisionPitcher : "미정"}`}
        homeLogo={current?.homeLogo}
        visitLogo={current?.visitLogo}
        link="/game/boxscore"
        $isCurrent={true}
      />
      <ScheduleItem
        date={`${next?.gyear}.${next?.gmonth}.${next?.gday}`}
        visitScore={next?.visitScore}
        homeScore={next?.homeScore}
        home={next?.homeFullname}
        visit={next?.visitFullname}
        result={next?.outcome ? next?.outcome : `${next?.gtime} ${next?.stadium}`}
        homePlayer={`${next?.homeDecision ? next.homeDecision : "선발"} : ${next?.homeDecisionPitcher ? next?.homeDecisionPitcher : "미정"}`}
        visitPlayer={`${next?.visitDecision ? next?.visitDecision : "선발"} : ${next?.visitDecisionPitcher ? next?.visitDecisionPitcher : "미정"}`}
        homeLogo={next?.homeLogo}
        visitLogo={next?.visitLogo}
        link="/game/boxscore"
        $isCurrent={false}
      />
    </ScheduleListStyle>
  );
};
export default ScheduleList;
