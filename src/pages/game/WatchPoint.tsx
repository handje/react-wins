import Channel from "@components/Game/WatchPoint/Channel";
import Lineup from "@components/Game/WatchPoint/Lineup";
import Pitcher from "@components/Game/WatchPoint/Pitcher";
import Record from "@components/Game/WatchPoint/Record";
import Weather from "@components/Game/WatchPoint/Weather";
import Loading from "@components/fallback/Loading";

import { useEffect } from "react";
import { useHomeStore } from "store/actions/useHomeStore";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";

const WatchPointStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const WatchPoint = () => {
  const fetchData = useWatchPointStore((state) => state.fetchData);
  const fetchDaySchedule = useWatchPointStore((state) => state.fetchDaySchedule);
  const fetchRecentGames = useHomeStore((state) => state.fetchRecentGames);
  const ktwiztodaygame = useWatchPointStore((state) => state.ktwiztodaygame);
  const gameScore = useWatchPointStore((state) => state.gameScore);
  const schedule = useWatchPointStore((state) => state.schedule);
  const data = useHomeStore((state) => state.data);
  const isLoading = useWatchPointStore((state) => state.isLoading);
  useEffect(() => {
    fetchDaySchedule();
  }, []);

  useEffect(() => {
    ktwiztodaygame && fetchData(ktwiztodaygame?.gameDate.toString(), ktwiztodaygame?.gmkey);
  }, [ktwiztodaygame]);

  useEffect(() => {
    !ktwiztodaygame && fetchRecentGames();
  }, []);

  useEffect(() => {
    if (!ktwiztodaygame && data?.current) {
      fetchData(data.current?.gameDate.toString(), data.current?.gmkey);
    }
  }, [data?.current]);

  if (isLoading) return <Loading />;
  if (!schedule && !gameScore) return <></>;
  if (!data) return <></>;

  return (
    <WatchPointStyle>
      <Record />
      <Pitcher />
      <Lineup />
      <div>
        <Channel />
        <Weather />
      </div>
    </WatchPointStyle>
  );
};
export default WatchPoint;
