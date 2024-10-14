import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabListStyle = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TabItemStyle = styled(NavLink)`
  display: block;
  width: 150px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;

  &.active {
    color: #000;
    font-weight: 500;
    border-bottom: 4px solid #000;
  }
`;

const Tab = ({ tabList }: { tabList: { name: string; path: string }[] | undefined }) => {
  return (
    <nav>
      <TabListStyle>
        {tabList?.map((tab, idx) => (
          <li key={idx}>
            <TabItemStyle to={tab.path}>{tab.name}</TabItemStyle>
          </li>
        ))}
      </TabListStyle>
    </nav>
  );
};
export default Tab;
