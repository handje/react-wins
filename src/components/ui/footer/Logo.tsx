import footerLogo from "@assets/images/footerLogo.svg";
import styled from "styled-components";

const FooterLogoStyle = styled.h2`
  & > img {
    width: 125px;
  }
`;

const Logo = () => {
  return (
    <FooterLogoStyle>
      <img src={footerLogo} alt="footerLogo" />
    </FooterLogoStyle>
  );
};
export default Logo;
