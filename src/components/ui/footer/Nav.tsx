import styled from "styled-components";

const FooterNavStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 10px;

  & > li {
    & > button {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

const Nav = () => {
  const navList = ["개인정보 처리방침", "이용약관", "이메일무단수집거부", "Sitemap"];

  return (
    <FooterNavStyle>
      {navList.map((nav, index) => (
        <li key={index}>
          <button type="button">{nav}</button>
        </li>
      ))}
    </FooterNavStyle>
  );
};
export default Nav;
