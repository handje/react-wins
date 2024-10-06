import { ArticleTitle } from "@styles/common.style";
import styled from "styled-components";
import Description from "./Description";

const WeatherStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Weather = () => {
  return (
    <WeatherStyle>
      <ArticleTitle>{"홈구장 날씨"}</ArticleTitle>
      <Description isWeather />
    </WeatherStyle>
  );
};
export default Weather;
