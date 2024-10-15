import { PlayerType } from "@customTypes/player";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PlayerLi = styled.li`
  display: flex;
  float: left;
  width: 23.273%;
  max-width: 23.273%;
  margin-right: 1.72%;
`;

const CardArti = styled.article`
  display: block;
  border-bottom: none;
  padding: 13px 0;
  width: 100%;
`;

const CardDiv = styled(Link)`
  display: block;
  width: 100%;
  padding-bottom: 101.56%;
  position: relative;
  overflow: hidden;
`;

const CardImg = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

const CardDetail = styled.p`
  position: absolute;
  top: 3%;
  right: 3%;
  color: #222;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: right;
`;

const CardNum = styled.span`
  color: red;
  font-size: 16px;
`;

const PlayerCard = ({ playerName, playerNum, imgSrc, href }: PlayerType) => {
  return (
    <PlayerLi>
      <CardArti>
        <CardDiv to={href}>
          <CardImg src={imgSrc} alt="player img" />
          <CardDetail>
            <CardNum>{`No.${playerNum}`}</CardNum>
            <br />
            <span>{playerName}</span>
          </CardDetail>
        </CardDiv>
      </CardArti>
    </PlayerLi>
  );
};
export default PlayerCard;
