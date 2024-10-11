import { MoonLoader } from "react-spinners";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <LoadingContainer>
      <MoonLoader color="#ec0a0b" />
    </LoadingContainer>
  );
};
export default Loading;
