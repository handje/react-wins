import playerSkeleton from "@assets/images/playerSkeleton.png";
import PlayerDetail from "@components/Player/PlayerDetail";
import PlayerInfo from "@components/Player/PlayerInfo";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { usePlayerDetailQuery } from "hooks/usePlayer";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const SkeletonImg = styled.img`
  width: 100%;
  padding-bottom: 25px;
`;
const PlayerDetailPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { playerType } = useParams();
  const pcode = searchParams.get("pcode");
  const { isLoading, isError } = usePlayerDetailQuery(playerType ?? "coach", pcode ?? "");

  if (isLoading || isError) return <SkeletonImg src={playerSkeleton} />;
  return (
    <>
      <PlayerContentsWrapper>
        {playerType && <PlayerInfo playerType={playerType} />}
        {playerType && playerType !== "coach" && <PlayerDetail playerType={playerType} />}
      </PlayerContentsWrapper>
    </>
  );
};
export default PlayerDetailPage;
