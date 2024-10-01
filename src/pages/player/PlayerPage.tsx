import PlayerCard from "@components/Player/PlayerCard";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { usePlayerListQuery } from "hooks/usePlayer";
import { useParams } from "react-router-dom";
import { usePlayerStore } from "store/actions/usePlayerStore";

const PlayerPage = () => {
  const playerList = usePlayerStore((state) => state.playerList);
  const { playerType } = useParams();

  const { isError, isLoading } = usePlayerListQuery(playerType ?? "coach");

  if (isError && isLoading) return <></>;

  return (
    <>
      <PlayerContentsWrapper>
        <ul>
          {playerList &&
            playerList.map((data) => (
              <PlayerCard
                key={data.pcode}
                playerName={data.playerName}
                playerNum={data.backnum}
                imgSrc={data.playerPrvwImg}
                href={`/player/${playerType}/detail?pcode=${data.pcode}`}
              />
            ))}
        </ul>
      </PlayerContentsWrapper>
    </>
  );
};
export default PlayerPage;
