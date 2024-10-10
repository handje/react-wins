import { TMedia } from "@customTypes/media";
import { MediaContainer } from "@styles/Media.style";
import parse from "html-react-parser";
import styled from "styled-components";
import NavigationControls from "./NavigationControls";
import SnsButtons from "./SnsButtons";
import TitleInfo from "./TitleInfo";

const ContentHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f5f5f5;
  & > h4 {
    font-size: 22px;
    line-height: 28px;
    margin: 0;
  }
`;

const MainContent = styled.section`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MediaDetail = ({ media }: { media: TMedia | undefined }) => {
  return (
    <>
      <MediaContainer>
        <ContentHeader>
          <h4>{media?.artcTitle}</h4>
          <TitleInfo date={media && media?.regDttm} view={media?.viewCnt} />
        </ContentHeader>
        <MainContent>{media && parse(media?.artcContents)}</MainContent>
        <SnsButtons />
      </MediaContainer>
      <NavigationControls />
    </>
  );
};
export default MediaDetail;
