import ArticleTitle from "@components/common/ArticleTitle";
import { useState } from "react";
import styled from "styled-components";
import PlayerTableInfo from "./PlayerTableInfo";

const DetailMenuWrapper = styled.div`
  height: 60px;
  background-color: "#fdfdfd";
  position: relative;
`;

const MenuLi = styled.li`
  float: left;
  width: 165px;
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  ${({ className }) => (className === "active" ? "border-bottom: 3px solid #ec0a0b; color: #ec0a0b;" : "color: #999;")}
`;

const MenuA = styled.a`
  display: block;
  font-size: 16px;
  line-height: 60px;
`;

const PlayerDetail = ({ playerType }: { playerType: string }) => {
  const [menu, setMenu] = useState("league");
  const [title, setTitle] = useState("2024 시즌 정규리그 기록");

  return (
    <>
      <DetailMenuWrapper>
        <ul>
          <MenuLi className={menu === "league" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("league");
                setTitle("2024 시즌 정규리그 기록");
              }}>
              정규리그 기록
            </MenuA>
          </MenuLi>
          <MenuLi className={menu === "recent" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("recent");
                setTitle("최근 5경기 기록");
              }}>
              최근 5경기
            </MenuA>
          </MenuLi>
          <MenuLi className={menu === "total" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("total");
                setTitle("통산 기록 (kt)");
              }}>
              통산 기록
            </MenuA>
          </MenuLi>
        </ul>
      </DetailMenuWrapper>
      <div style={{ marginTop: "40px" }}>
        <ArticleTitle title={title} />
      </div>
      <PlayerTableInfo isPitcher={playerType === "pitcher"} menu={menu} />
    </>
  );
};
export default PlayerDetail;
