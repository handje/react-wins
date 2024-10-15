import playerSkeleton from "@assets/images/playerSkeleton.png";
import { formatCareer } from "@utils/career";
import { stringToDate } from "@utils/date";
import { FaChevronRight } from "react-icons/fa6";
import { usePlayerStore } from "store/actions/usePlayerStore";
import styled from "styled-components";
const InfoArti = styled.article`
  width: 100%;
  position: relative;
`;

const InfoImg = styled.img`
  width: 100%;
`;

const InfoDt = styled.dt`
  position: absolute;
  top: 30%;
  left: 35%;
  color: #fff;
  font-size: 54px;
  font-weight: 700;
`;

const InfoNumber = styled.span`
  color: #c00000;
  font-size: 44px;
  margin-bottom: 12px;
  display: block;
`;

const InfoEng = styled.span`
  font-size: 18px;
  margin-top: 12px;
  display: block;
`;

const InfoListWrapper = styled.dd`
  position: absolute;
  top: 30%;
  left: auto;
  right: 0;
  width: 440px;
  box-sizing: border-box;
  padding-right: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 100;
  line-height: 26.5px;
`;

const InfoListDt = styled.dt`
  display: inline-block;
  width: 70px;
  vertical-align: top;
`;

const InfoListDd = styled.dd`
  display: inline-block;
  width: 325px;
`;

const PictureButton = styled.a`
  background-color: red;
  display: inline-block;
  margin-top: 15px;
  width: 146px;
  text-decoration: none;
  text-align: center;
  border-radius: 25px;
  height: 32px;
  color: #fff;
`;

const PlayerRecord = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 2%;
`;

const PlayerRecordDt = styled.dt`
  display: inline-block;
  color: #fff;
  font-size: 20px;
  font-weight: 100;
  line-height: 53px;
`;

const PlayerRecordDd = styled.dd`
  display: inline-block;
  color: #fff;
  font-size: 20px;
  font-weight: 100;
  line-height: 53px;
`;

const PlayerInfo = ({ playerType }: { playerType: string }) => {
  const player = usePlayerStore((state) => state.player);
  const pitcherSeasonSummary = usePlayerStore((state) => state.pitcherSeasonSummary);
  const hitterSeasonSummary = usePlayerStore((state) => state.hitterSeasonSummary);

  const infoList = [
    { title: "포지션", text: player?.position },
    { title: "생년월일", text: player?.heightWeight ? player.birth : player && stringToDate(player?.birth) },
    { title: "체격", text: player?.heightWeight ? player.heightWeight : `${player?.height} cm, ${player?.weight} kg` },
    { title: "출신교", text: formatCareer(player?.career) },
  ];
  return (
    <>
      <InfoArti>
        <>
          <InfoImg src={player?.playerPrvwImg2 || playerSkeleton} />
          <dl>
            <InfoDt>
              <InfoNumber>No. {player?.backnum}</InfoNumber>
              {player?.playerName}
              <InfoEng>{player?.engName}</InfoEng>
            </InfoDt>
            <InfoListWrapper>
              <ul>
                {infoList.map((info, index) => (
                  <li key={index}>
                    <dl>
                      <InfoListDt>{info.title}</InfoListDt>
                      <InfoListDd>{info.text}</InfoListDd>
                    </dl>
                  </li>
                ))}
              </ul>
              <PictureButton href={`/media/photos/1?searchWord=${player?.playerName}&search.sort=400`}>
                {playerType !== "coach" && "선수 "}사진 보기 <FaChevronRight fontSize={"0.8em"} />
              </PictureButton>
            </InfoListWrapper>
          </dl>
          {playerType === "pitcher" && (
            <PlayerRecord>
              <dl>
                <PlayerRecordDt>{player?.gyear} 정규리그 성적 : </PlayerRecordDt>
                <PlayerRecordDd>
                  평균자책점 {pitcherSeasonSummary ? pitcherSeasonSummary.era : "-"} /{" "}
                  {pitcherSeasonSummary ? pitcherSeasonSummary.w : "-"} 승 /{" "}
                  {pitcherSeasonSummary ? pitcherSeasonSummary.l : "-"} 패 /{" "}
                  {pitcherSeasonSummary ? pitcherSeasonSummary.sv : "-"} 세이브
                </PlayerRecordDd>
              </dl>
            </PlayerRecord>
          )}
          {(playerType === "catcher" || playerType === "infielder" || playerType === "outfielder") && (
            <PlayerRecord>
              <dl>
                <PlayerRecordDt>{player?.gyear} 정규리그 성적 : </PlayerRecordDt>
                <PlayerRecordDd>
                  타율 {hitterSeasonSummary ? hitterSeasonSummary.hra : "-"} / 안타{" "}
                  {hitterSeasonSummary ? hitterSeasonSummary.hit : "-"} / 타점{" "}
                  {hitterSeasonSummary ? hitterSeasonSummary.rbi : "-"} / 홈런{" "}
                  {hitterSeasonSummary ? hitterSeasonSummary.hr : "-"}
                </PlayerRecordDd>
              </dl>
            </PlayerRecord>
          )}
        </>
      </InfoArti>
    </>
  );
};
export default PlayerInfo;
