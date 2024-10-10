import { MediaContainer } from "@styles/Media.style";
import { skeletonAnimation } from "@styles/Skeleton.style";
import styled from "styled-components";

const SkeletonHeader = styled.div`
  width: 100%;
  height: 60px;
  ${skeletonAnimation}
`;
const SkeletonContent = styled.div`
  width: 100%;
  height: 50vh;
  margin: 40px 0;
  ${skeletonAnimation}
`;
const SkeletonDetail = () => {
  return (
    <>
      <MediaContainer>
        <SkeletonHeader />
        <SkeletonContent />
      </MediaContainer>
    </>
  );
};
export default SkeletonDetail;
