import { api } from "@api/api";
import EmptyResult from "@components/fallback/EmptyResult";
import { ArticleTitle } from "@styles/common.style";
import { chartDate } from "@utils/date";
import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
import styled from "styled-components";

type TRankChart = {
  date: string;
  rank: number;
};

const StyledChart = styled(ReactEcharts)`
  width: 100%;
  height: 400px;
  border: 1px solid #909090;
`;

const RankingChart = () => {
  const [teamRank, setTeamRank] = useState<TRankChart[]>([]);
  const groupY = ["1위", "2위", "3위", "4위", "5위", "6위", "7위", "8위", "9위", "10위"]; //y축
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api("game/rank/periodteamrank");
        data.list.sort((a: TRankChart, b: TRankChart) => Number(a.date) - Number(b.date));
        setTeamRank(data.list);
      } catch {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  const options = {
    tooltip: {
      trigger: "item",
      formatter: (params: { name: string; data: number }) => {
        return `${params.name}<br/>${params.data + 1}위`;
      },
    },
    grid: {
      left: "5%",
      top: "10%",
      right: "15px",
      bottom: "15%",
    },
    xAxis: {
      //x축 설정
      type: "category", //값일때는 value , 범위나 이름일때는 category
      data: teamRank?.map((item) => chartDate(item.date)),
      axisLabel: {
        interval: 0, //data에 넣은 값을 하나도 빠짐없이 축에 보여주는 옵션
        rotate: 45, //기울어진 글자
        margin: 5,
        verticalAlign: "top",
      },
    },
    yAxis: {
      type: "category",
      data: groupY,
      boundaryGap: false,
      inverse: true, //넣은 데이터를 거꾸로 출력
      axisTick: { show: false },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        data: teamRank?.map((item) => item.rank - 1),
        type: "line", //차트 타입
        lineStyle: {
          color: "#ec0a0b",
        },
        itemStyle: {
          color: "#ec0a0b",
        },
        symbol: "circle", //점 모양
        symbolSize: 7,
      },
    ],
  };
  return (
    <article>
      <ArticleTitle>{"2024 시즌 팀 순위"}</ArticleTitle>
      {isError ? (
        <EmptyResult height="400px" />
      ) : (
        <StyledChart option={options} style={{ width: "100%", height: "400px" }} opts={{ renderer: "svg" }} />
      )}
    </article>
  );
};
export default RankingChart;
