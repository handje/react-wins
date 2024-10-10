import vitddory from "@assets/images/vitddory.png";
import RootLayout from "layouts/RootLayout";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & > img {
    width: 40%;
  }
  & > h1 {
    font-size: 90px;
    font-weight: 600;
    color: red;
  }
  & > p {
    font-size: 20px;
  }
`;

const MoveBtn = styled(Link)`
  display: inline-block;
  width: 73px;
  height: 37px;
  color: #fff;
  font-size: 14px;
  line-height: 37px;
  text-align: center;
  background-color: red;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 30px;
`;

const ErrorPage = () => {
  return (
    <RootLayout>
      <ErrorPageContainer>
        <img src={vitddory} />
        <h1>ERROR</h1>
        <p>PAGE NOT FOUND</p>
        <MoveBtn to="/">홈으로</MoveBtn>
      </ErrorPageContainer>
    </RootLayout>
  );
};

export default ErrorPage;
