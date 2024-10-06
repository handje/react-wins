import { api } from "@api/api";
import Controller from "@components/common/Controller";
import { TPhoto } from "@customTypes/gallery";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GallerySwiper from "./WizGallery/GallerySwiper";
import GalleryTitle from "./WizGallery/GalleryTitle";

const StyledSection = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const WizGallery = () => {
  const [gallery, setGallery] = useState<TPhoto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api("media/photolist?count=10");
      setGallery(data.list);
    };
    fetchData();
  }, []);

  return (
    <StyledSection>
      <GalleryTitle />
      <GallerySwiper gallery={gallery} />
      <Controller $isFull={false} title="더 많은 사진보기" path="/media/wizphoto" />
    </StyledSection>
  );
};
export default WizGallery;
