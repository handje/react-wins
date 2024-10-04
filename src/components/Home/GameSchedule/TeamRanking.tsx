import mascot from "@assets/images/mascot.png";
import { useEffect } from "react";
import { useHomeStore } from "store/actions/useHomeStore";
import styled from "styled-components";
import Container from "../Common/Container";
import Text from "../Common/Text";
const TeamRankingStyle = styled.div`
  height: 100%;
  flex-grow: 1;
  position: relative;
  display: flex;
  padding: 40px 50px;
  align-items: flex-end;
  gap: 20px;
`;

const TeamRankingInnerStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  & > div {
    padding-right: 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  &:last-child {
  }
`;

const StyledImg = styled.img`
  width: 161px;
  position: absolute;
  right: 0;
  bottom: 20px;
`;
const TeamRanking = () => {
  const fetchTeamRanking = useHomeStore((state) => state.fetchTeamRanking);
  const ktWizTeamRank = useHomeStore((state) => state.ktWizTeamRank);

  useEffect(() => {
    fetchTeamRanking();
  }, []);

  return (
    <Container
      to="game/ranking/team"
      target="_self"
      $bgColor="to right, #ec3e57, #c767dd, #4aa9c8"
      $position="relative">
      <TeamRankingStyle>
        <TeamRankingInnerStyle>
          <Text
            text="팀 순위"
            $fontSize="13px"
            $fontWeight="400"
            $color="rgba(255, 255, 255, 0.6)"
            $marginBottom="10px"
          />
          <div>
            <Text
              text={`${ktWizTeamRank?.rank ?? "0"}`}
              $fontSize="72px"
              $fontWeight="500"
              $textShadow="0 3px 6px rgba(0, 0, 0, 0.16)"
              $color="#fff"
            />
            <Text text="위" $fontSize="18px" $fontWeight="700" $color="#fff" />
          </div>
        </TeamRankingInnerStyle>
        <TeamRankingInnerStyle>
          {ktWizTeamRank?.wldName && (
            <Text
              text={`${ktWizTeamRank?.wldName}`}
              $fontSize="24px"
              $fontWeight="300"
              $color="#fff"
              $marginBottom="10px"
            />
          )}
          {ktWizTeamRank?.game && ktWizTeamRank?.wra && (
            <Text
              text={`총 ${ktWizTeamRank?.game}경기, 승률 ${ktWizTeamRank?.wra}`}
              $fontSize="14px"
              $fontWeight="300"
              $color="#fff"
            />
          )}
        </TeamRankingInnerStyle>
      </TeamRankingStyle>
      <StyledImg src={mascot} alt="mascot" />
    </Container>
  );
};
export default TeamRanking;
