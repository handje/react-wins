import { api } from "@api/api";
import AccrueAudience from "@components/Audience/AccrueAudience.tsx";
import AudieunceRecord from "@components/Audience/AudienceRecord";
import RankingTab from "@components/common/RankingTab.tsx";
import EmptyResult from "@components/fallback/EmptyResult";
import { Tcrowd } from "@customTypes/game/Crowd";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AudienceWrapper = styled.div`
  width: 100%;
`;

const Audience = () => {
  const [crowdData, setCrowdData] = useState<Tcrowd[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api("game/rank/crowd?gyear=2024");
        data && setCrowdData(data.list);
      } catch {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <AudienceWrapper>
      <RankingTab />
      {isError ? (
        <EmptyResult height="50vh" />
      ) : (
        <>
          <AccrueAudience crowdData={crowdData} />
          <AudieunceRecord crowdData={crowdData} />
        </>
      )}
    </AudienceWrapper>
  );
};

export default Audience;
