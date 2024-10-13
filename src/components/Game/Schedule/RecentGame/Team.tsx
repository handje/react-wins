import styled from "styled-components";
import Logo from "../Common/Logo";
import Text from "../Common/Text";

interface TeamProps {
  home?: string | undefined;
  visit?: string | undefined;
  homePlayer?: string | undefined;
  visitPlayer?: string | undefined;
  visitLogo?: string | undefined;
  homeLogo?: string | undefined;
}

const TeamStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Team = ({ home, visit, homePlayer, visitPlayer, visitLogo, homeLogo }: TeamProps) => {
  return (
    <TeamStyle>
      <Logo visitLogo={visitLogo} homeLogo={homeLogo} />
      <div>
        <Text home={home} visit={visit} />
        <Text homePlayer={homePlayer} visitPlayer={visitPlayer} $color="#666" />
      </div>
    </TeamStyle>
  );
};
export default Team;
