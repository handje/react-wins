import PlayerDetail from "@components/Player/PlayerDetail";
import PlayerInfo from "@components/Player/PlayerInfo";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { usePlayerDetailQuery } from "hooks/usePlayer";
import { useLocation, useParams } from "react-router-dom";

const PlayerDetailPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { playerType } = useParams();
  const pcode = searchParams.get("pcode");
  const { isError, isLoading } = usePlayerDetailQuery(playerType ?? "coach", pcode ?? "");
  if (isError && isLoading) return <></>;

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
