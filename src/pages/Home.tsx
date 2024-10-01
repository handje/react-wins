import TopButton from "@components/common/TopButton";
import Article from "@components/Home/Article";
import Etc from "@components/Home/Etc";
import GameSchedule from "@components/Home/GameSchedule";
import Highlight from "@components/Home/Highlight";
import WizGallery from "@components/Home/WizGallery";

import styled from "styled-components";

const MainStyle = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 0 50px;
  margin: 145px 0;
`;

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 145px;
`;

const Home = () => {
  return (
    <>
      <Article />
      <MainStyle>
        <HomeStyle>
          <GameSchedule />
          <Highlight />
          <WizGallery />
          <Etc />
        </HomeStyle>
        <TopButton />
      </MainStyle>
    </>
  );
};
export default Home;
