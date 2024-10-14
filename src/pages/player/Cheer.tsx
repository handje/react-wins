import { api } from "@api/api";
import CheerProfile from "@components/Cheer/CheerProfile";
import EmptyResult from "@components/fallback/EmptyResult";
import { TCheer } from "@customTypes/cheer";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const Container = styled.div`
  height: 620px;
  width: 100%;
  max-width: 990px;
  border: 1px solid #bbb;
  box-sizing: border-box;
`;

const MainSwiper = styled(Swiper)`
  height: 75%;
  width: auto;
  margin: 0; // 사이 공간 제거
`;

const ThumbnailSwiper = styled(Swiper)`
  width: 100%;
  height: 25.8%;
  box-sizing: border-box;
  padding: 0;
  margin: 0; // 사이 공간 제거
  border-top: 1px solid #e40013;
  padding: 0;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const SwiperSlideImage = styled.img<{ $isActive: boolean }>`
  display: block;
  width: 100%;
  object-fit: contain;
  margin: 0;
  padding: 0;
  border: ${({ $isActive }) => ($isActive ? "2px solid red" : "none")}; // 선택된 이미지에만 border
`;

const StyledButton = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    top: 80%;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
  }
`;

const Cheer = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // 활성화된 슬라이드 인덱스 관리
  const [cheerData, setCheerData] = useState<TCheer[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api("player/cheerleader");
        setCheerData(data.list);
      } catch {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  if (isError) return <EmptyResult height="50vh" />;

  return (
    <>
      <Container>
        <MainSwiper
          spaceBetween={10}
          navigation={true}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Navigation, Thumbs]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // 슬라이드 변경 시 인덱스 업데이트
          as={StyledButton}>
          {cheerData.map((cheer, index) => (
            <SwiperSlideStyled key={index}>
              <CheerProfile
                leaderPosition={cheer.leaderPosition}
                leaderName={cheer.leaderName}
                leaderEngName={cheer.leaderEngName}
                leaderNickName={cheer.leaderNickName}
                leaderHeight={cheer.leaderHeight}
                leaderBloodGroups={cheer.leaderBloodGroups}
                leaderHobby={cheer.leaderHobby}
                leaderLikePlayer={cheer.leaderLikePlayer}
                leaderMotto={cheer.leaderMotto}
                titleImgPath={cheer.titleImgPath}
              />
            </SwiperSlideStyled>
          ))}
        </MainSwiper>
        <ThumbnailSwiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}>
          {cheerData.map((cheer, index) => (
            <SwiperSlideStyled key={index}>
              <SwiperSlideImage
                src={index === activeIndex ? cheer.thumbOnImgPath : cheer.thumbOffImgPath}
                alt={`${cheer.leaderName} thumbnail`}
                $isActive={index === activeIndex} // 활성화된 슬라이드와 비교
              />
            </SwiperSlideStyled>
          ))}
        </ThumbnailSwiper>
      </Container>
    </>
  );
};

export default Cheer;
