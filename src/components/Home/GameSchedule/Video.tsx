import styled from "styled-components";

const VideoStyle = styled.div`
  width: 100%;
  max-width: 400px;

  & > iframe {
    width: 100%;
  }
`;

const Video = () => {
  return (
    <VideoStyle>
      <iframe src="https://tv.naver.com/embed/42663688?" loading="eager" width="400" height="250" allowFullScreen />
    </VideoStyle>
  );
};
export default Video;
