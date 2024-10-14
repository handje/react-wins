import { api } from "@api/api";
import Controller from "@components/common/Controller";
import EmptyResult from "@components/fallback/EmptyResult";
import { TPhoto } from "@customTypes/gallery";
import { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";
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
      {gallery.length > 0 ? (
        <GallerySwiper gallery={gallery} />
      ) : (
        <EmptyResult icon={FaImage} msg="사진을 불러올 수 없습니다." height="650px" />
      )}
      <Controller $isFull={false} title="더 많은 사진보기" path="/media/wizphoto" />
    </StyledSection>
  );
};
export default WizGallery;
