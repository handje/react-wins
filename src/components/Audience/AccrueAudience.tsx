import { Tcrowd } from "@customTypes/game/Crowd";
import { ArticleTitle } from "@styles/common.style.ts";
import ReactECharts from "echarts-for-react";
import styled from "styled-components";

const StyledArticle = styled.article`
  width: 100%;
  height: 435px;
  margin-top: 45px;
`;

const AccrueAudience = ({ crowdData }: { crowdData: Tcrowd[] }) => {
  const teamOrder = ["KT", "LG", "삼성", "두산", "KIA", "롯데", "SSG", "키움", "한화", "NC"];

  const sortedData = teamOrder.map((team) => crowdData?.find((item: Tcrowd) => item.teamName === team));

  const teams = sortedData.map((item) => item?.teamName);
  const values = sortedData.map((item) => item?.crowd || 0);

  const options = {
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `${params.name}: ${params.value.toLocaleString()}`;
      },
    },
    grid: {
      left: "7%",
      top: "25%",
      right: "15px",
      bottom: "6%",
    },
    xAxis: {
      type: "category",
      data: teams,
      axisLabel: {
        interval: 0,
        rotate: 0,
        margin: 5,
        verticalAlign: "top",
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: number) => value.toLocaleString(),
      },
      min: 0,
      max: 1600000,
      interval: 200000,
    },
    series: [
      {
        data: values,
        type: "bar",
        itemStyle: {
          color: (params: any) => (params.dataIndex === 0 ? "#d73027" : "#4a4a4a"),
        },
        barWidth: "15%",
      },
    ],
  };

  return (
    <StyledArticle>
      <ArticleTitle>{"2024 시즌 누적관중"}</ArticleTitle>
      <div style={{ border: "1px solid black", width: "100%", height: "350px" }}>
        <ReactECharts option={options} style={{ width: "100%", height: "300px" }} opts={{ renderer: "svg" }} />
      </div>
    </StyledArticle>
  );
};

export default AccrueAudience;
