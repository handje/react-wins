import styled from "styled-components";
import Information from "./Information";
import Logo from "./Logo";
import Nav from "./Nav";
import Select from "./Select";
import Social from "./Social";

const FooterStyle = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  & > div {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`;

const FooterCenterBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  .green {
    width: 70px;
    color: #0098af;
  }
  & > p {
    font-size: 12px;
    font-weight: 300;
    color: #272222;
  }
`;

const FooterRightBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <Logo />
        <FooterCenterBoxStyle>
          <Nav />
          <Information />
          <p>Copyright©️2024 project-wins. All rights reserved.</p>
        </FooterCenterBoxStyle>
        <FooterRightBoxStyle>
          <Select />
          <Social />
        </FooterRightBoxStyle>
      </div>
    </FooterStyle>
  );
};
export default Footer;
