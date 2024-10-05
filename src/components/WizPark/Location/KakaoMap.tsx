import img from "@assets/icons/historyIcon.png";
import iksanMap from "@assets/images/iksan_map.png";
import locationMap from "@assets/images/map_img.png";
import { TKakaoMap } from "@customTypes/park";

import React from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 147px;
  height: 28px;
  color: #333;
  text-align: center;
  font-size: 18px;
`;

declare const __KAKAOMAP_APP_KEY__: string;
const KakaoMap = ({ position, name }: TKakaoMap) => {
  const { lat, lng } = position;
  const [loading, error] = useKakaoLoader({
    appkey: __KAKAOMAP_APP_KEY__, // 발급 받은 APPKEY, .env에서 가져옴
  });
  const { pathname } = useLocation();

  if (loading || error) {
    if (pathname.includes("iksan")) return <img src={iksanMap} alt="야구장 지도" />;
    else return <img src={locationMap} alt="야구장 지도" />;
  }
  return (
    <>
      <Map center={{ lat: lat, lng: lng }} style={{ width: "100%", height: "662px" }} level={2}>
        <MapMarker
          position={{ lat: lat, lng: lng }}
          image={{
            src: img,
            size: {
              width: 45,
              height: 45,
            },
          }}>
          <Overlay>{name}</Overlay>
        </MapMarker>
      </Map>
    </>
  );
};
export default React.memo(KakaoMap);
