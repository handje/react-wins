import { ArticleTitle } from "@styles/common.style";
import styled from "styled-components";
import Table from "./Pitcher/Table";

const PitcherStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Pitcher = () => {
  return (
    <PitcherStyle>
      <ArticleTitle>{"선발투수 비교"}</ArticleTitle>
      <Table />
    </PitcherStyle>
  );
};
export default Pitcher;
