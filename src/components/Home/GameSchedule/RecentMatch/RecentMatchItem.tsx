import { RecentGamesType } from "@customTypes/home";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface MatchItemProps {
  filteredData: RecentGamesType;
}

const RecentMatchItemStyle = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;

  & > div:first-child,
  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
      width: 100%;
      max-width: 100px;
    }

    & > span {
      font-size: 18px;
      color: #35383e;
      font-weight: 700;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 20px;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      & > strong {
        font-size: 64px;
        font-weight: 700;
        color: #000;
      }

      & > span {
        font-size: 50px;
        color: #000;
        opacity: 0.2;
        font-weight: 700;
      }
    }

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      background-color: rgba(35, 31, 32, 0.5);
      padding: 5px 15px;
      border-radius: 5px;
      align-self: center;

      & > span {
        color: #fff;
        font-size: 13px;
        font-weight: 400;
      }

      & > svg {
        font-size: 16px;
        color: #fff;
      }
    }
  }
`;

const RecentMatchItem = ({ filteredData }: MatchItemProps) => {
  return (
    <ul>
      <RecentMatchItemStyle>
        <div>
          <img src={filteredData?.visitLogo} alt="visitLogo" />
          <span>{filteredData?.visitKey}</span>
        </div>
        <div>
          <div>
            <strong>{filteredData?.visitScore ? filteredData?.visitScore : "0"}</strong>
            <span>:</span>
            <strong>{filteredData?.homeScore ? filteredData?.homeScore : "0"}</strong>
          </div>
          <Link to={`game/boxscore`}>
            <span>경기정보</span>
            <IoIosArrowForward />
          </Link>
        </div>
        <div>
          <img src={filteredData?.homeLogo} alt="homeLogo" />
          <span>{filteredData?.homeKey}</span>
        </div>
      </RecentMatchItemStyle>
    </ul>
  );
};
export default RecentMatchItem;
