import { skeletonAnimation } from "@styles/Skeleton.style";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 40vh;
  gap: 10px;
  padding: 10px;
`;

const SkeletonBox = styled.div`
  flex: 1 1 calc(25% - 15px);
  height: calc(50% - 26px);
  ${skeletonAnimation};
`;

const ListSkeleton = () => {
  return (
    <SkeletonContainer>
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonBox key={index} />
      ))}
    </SkeletonContainer>
  );
};
export default ListSkeleton;
