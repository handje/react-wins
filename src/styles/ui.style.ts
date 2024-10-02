import { css } from "styled-components";

export const ulStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-around;
  & > li {
    width: 100px;
    cursor: pointer;
    color: #000;
  }
`;
