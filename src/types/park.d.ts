export type TKakaoMap = {
  position: {
    lat: number;
    lng: number;
  };
  name: string;
};

export type TBus = {
  color: string;
  busType: string;
  busNumber: string;
};

export type TLocationGuide = {
  newAddress: string;
  address: string;
  url: string;
  busList: TBus[];
  subway?: string[];
};

export type TGuideInfo = TKakaoMap & TLocationGuide;
