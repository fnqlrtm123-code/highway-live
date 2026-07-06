export interface Highway {
  slug: string;
  name: string;
  number: string;
  length: string; // e.g. "416.1 km"
  start: string; // e.g. "부산"
  end: string; // e.g. "서울"
  description: string;
}

export interface ServiceArea {
  slug: string;
  name: string; // e.g. "안성휴게소"
  direction: "상행" | "하행" | "양방향";
  directionName: string; // e.g. "서울방향" 또는 "부산방향"
  highwaySlug: string;
  highwayName: string;
  locationKm: number; // km mark
  signatureMenu: {
    name: string;
    price: number;
    description: string;
    isExFood: boolean;
  };
  otherMenus: { name: string; price: number }[];
  gasStation: {
    brand: "ex-oil" | "SK에너지" | "GS칼텍스" | "S-OIL" | "현대오일뱅크" | "알뜰주유소";
    gasolinePrice: number;
    dieselPrice: number;
    lpgPrice: number | null;
    hasEvCharger: boolean;
    evChargersCount: number;
    hasHydrogen: boolean;
  };
  facilities: string[]; // e.g. ["수유실", "샤워실", "약국", "전기차충전소"]
}

export interface CctvPoint {
  id: string;
  name: string;
  highwaySlug: string;
  highwayName: string;
  locationKm: number;
  direction: string; // e.g. "부산방향"
  status: "smooth" | "slow" | "congested";
  speedLimit: number; // km/h
  currentSpeed: number; // km/h
  weather: "clear" | "rainy" | "snowy" | "foggy";
  temp: number; // Celsius
  videoUrl: string; // Mock HLS/MP4 or simulation configs
  x: number; // Longitude
  y: number; // Latitude
}

export const highways: Highway[] = [
  {
    slug: "gyeongbu",
    name: "경부고속도로",
    number: "1호선",
    length: "416.1 km",
    start: "부산광역시 금정구",
    end: "서울특별시 서초구",
    description: "대한민국의 대동맥이자 국토의 중심을 관통하는 최장 종단 고속도로입니다."
  },
  {
    slug: "yeongdong",
    name: "영동고속도로",
    number: "50호선",
    length: "234.4 km",
    start: "인천광역시 남동구",
    end: "강원특별자치도 강릉시",
    description: "수도권과 강원도를 동서로 연결하여 주말 레저 및 동해안 물류의 핵심 역할을 담당합니다."
  },
  {
    slug: "seohaean",
    name: "서해안고속도로",
    number: "15호선",
    length: "336.6 km",
    start: "전라남도 무안군",
    end: "서울특별시 금천구",
    description: "서해안 산업벨트를 연결하고 전남권과 수도권을 잇는 대표적인 서부 종단 고속도로입니다."
  },
  {
    slug: "jungbu",
    name: "중부고속도로",
    number: "35호선",
    length: "117.2 km",
    start: "충청북도 청주시",
    end: "경기도 하남시",
    description: "경부고속도로의 정체를 완화하고 중부 내륙 지방의 교통 편의를 위해 건설된 노선입니다."
  }
];

export const serviceAreas: ServiceArea[] = [
  // 경부고속도로 휴게소 (상행/하행)
  {
    slug: "anseong-seoul",
    name: "안성휴게소",
    direction: "상행",
    directionName: "서울방향",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 362,
    signatureMenu: {
      name: "안성맞춤 한우국밥",
      price: 10500,
      description: "안성 한우를 듬뿍 넣어 푹 끓여낸 깊고 구수한 맛의 대표 장터 국밥입니다.",
      isExFood: true
    },
    otherMenus: [
      { name: "소떡소떡", price: 4000 },
      { name: "수제돈가스", price: 9500 },
      { name: "라면정식", price: 5500 }
    ],
    gasStation: {
      brand: "ex-oil",
      gasolinePrice: 1598,
      dieselPrice: 1428,
      lpgPrice: 985,
      hasEvCharger: true,
      evChargersCount: 6,
      hasHydrogen: true
    },
    facilities: ["수유실", "샤워실", "약국", "임시정비소", "비즈니스센터"]
  },
  {
    slug: "anseong-busan",
    name: "안성휴게소",
    direction: "하행",
    directionName: "부산방향",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 362,
    signatureMenu: {
      name: "소떡소떡",
      price: 4000,
      description: "방송인 이영자 추천으로 폭발적인 인기를 얻은 쫄깃한 떡과 소시지의 명물 간식입니다.",
      isExFood: false
    },
    otherMenus: [
      { name: "안성한우국밥", price: 10000 },
      { name: "짜장면", price: 6500 },
      { name: "회오리감자", price: 3500 }
    ],
    gasStation: {
      brand: "ex-oil",
      gasolinePrice: 1592,
      dieselPrice: 1418,
      lpgPrice: 978,
      hasEvCharger: true,
      evChargersCount: 8,
      hasHydrogen: false
    },
    facilities: ["수유실", "세탁실", "전기차충전소", "의료안내소"]
  },
  {
    slug: "seoul-manman-busan",
    name: "서울만남의광장휴게소",
    direction: "하행",
    directionName: "부산방향",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 414,
    signatureMenu: {
      name: "말죽거리 소고기국밥",
      price: 8500,
      description: "가마솥에서 24시간 우려낸 한우 사골 육수로 끓여내어 깊고 칼칼한 전통 국밥입니다.",
      isExFood: true
    },
    otherMenus: [
      { name: "돈가스정식", price: 10000 },
      { name: "라면", price: 4500 },
      { name: "호두과자", price: 3000 }
    ],
    gasStation: {
      brand: "알뜰주유소",
      gasolinePrice: 1585,
      dieselPrice: 1405,
      lpgPrice: null,
      hasEvCharger: true,
      evChargersCount: 4,
      hasHydrogen: false
    },
    facilities: ["수유실", "샤워실", "비즈니스코너"]
  },
  {
    slug: "manghyang-busan",
    name: "망향휴게소",
    direction: "하행",
    directionName: "부산방향",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 343,
    signatureMenu: {
      name: "명품 닭개장",
      price: 9500,
      description: "신선한 닭고기를 잘게 찢어 넣고 고사리와 대파를 더해 시원하고 얼큰하게 맛을 냈습니다.",
      isExFood: true
    },
    otherMenus: [
      { name: "호두과자", price: 3000 },
      { name: "우동", price: 5500 },
      { name: "해물순두부찌개", price: 8500 }
    ],
    gasStation: {
      brand: "ex-oil",
      gasolinePrice: 1599,
      dieselPrice: 1425,
      lpgPrice: 989,
      hasEvCharger: true,
      evChargersCount: 6,
      hasHydrogen: false
    },
    facilities: ["수유실", "야외쉼터", "애견공원"]
  },
  {
    slug: "jukjeon-seoul",
    name: "죽전휴게소",
    direction: "상행",
    directionName: "서울방향",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 400,
    signatureMenu: {
      name: "죽전임금님갈비탕",
      price: 12000,
      description: "엄선한 소갈비를 푹 고아 부드러운 고기 결에 맑고 시원한 육수가 일품인 영양 갈비탕입니다.",
      isExFood: true
    },
    otherMenus: [
      { name: "충무김밥", price: 6000 },
      { name: "순두부찌개", price: 8000 },
      { name: "떡볶이", price: 4000 }
    ],
    gasStation: {
      brand: "SK에너지",
      gasolinePrice: 1615,
      dieselPrice: 1445,
      lpgPrice: 998,
      hasEvCharger: true,
      evChargersCount: 4,
      hasHydrogen: false
    },
    facilities: ["수유실", "비즈니스센터", "세차장"]
  },

  // 영동고속도로 휴게소 (상행/하행)
  {
    slug: "hoengseong-seoul",
    name: "횡성휴게소",
    direction: "상행",
    directionName: "인천방향",
    highwaySlug: "yeongdong",
    highwayName: "영동고속도로",
    locationKm: 143,
    signatureMenu: {
      name: "횡성한우 떡더덕스테이크",
      price: 15000,
      description: "횡성 특산물 한우와 은은한 향의 더덕을 다져 구워낸 최고급 영양 스테이크입니다.",
      isExFood: true
    },
    otherMenus: [
      { name: "한우국밥", price: 10000 },
      { name: "곤드레밥", price: 9000 },
      { name: "감자만두", price: 5000 }
    ],
    gasStation: {
      brand: "ex-oil",
      gasolinePrice: 1602,
      dieselPrice: 1432,
      lpgPrice: 992,
      hasEvCharger: true,
      evChargersCount: 8,
      hasHydrogen: false
    },
    facilities: ["수유실", "샤워실", "전기차충전소", "특산물판매장"]
  },
  {
    slug: "hoengseong-gangneung",
    name: "횡성휴게소",
    direction: "하행",
    directionName: "강릉방향",
    highwaySlug: "yeongdong",
    highwayName: "영동고속도로",
    locationKm: 143,
    signatureMenu: {
      name: "한우탕",
      price: 11000,
      description: "횡성 한우 양지와 사골로 우려낸 맑고 담백한 국물로 여행객들의 피로를 씻어줍니다.",
      isExFood: false
    },
    otherMenus: [
      { name: "더덕무침비빔밥", price: 9500 },
      { name: "우동", price: 5500 },
      { name: "수제어묵", price: 4000 }
    ],
    gasStation: {
      brand: "ex-oil",
      gasolinePrice: 1598,
      dieselPrice: 1422,
      lpgPrice: 988,
      hasEvCharger: true,
      evChargersCount: 6,
      hasHydrogen: true
    },
    facilities: ["수유실", "샤워실", "쉼터", "기저귀교환대"]
  },
  {
    slug: "deokpyeong-both",
    name: "덕평자연휴게소",
    direction: "양방향",
    directionName: "양방향",
    highwaySlug: "yeongdong",
    highwayName: "영동고속도로",
    locationKm: 81,
    signatureMenu: {
      name: "덕평 소고기국밥",
      price: 9000,
      description: "전국 고속도로 휴게소 판매 1위에 빛나는 진하고 매콤하며 든든한 소고기 국밥입니다.",
      isExFood: false
    },
    otherMenus: [
      { name: "수제 등심돈가스", price: 10500 },
      { name: "해물짬뽕", price: 8500 },
      { name: "비어드파파 슈크림", price: 3500 }
    ],
    gasStation: {
      brand: "GS칼텍스",
      gasolinePrice: 1618,
      dieselPrice: 1442,
      lpgPrice: 1005,
      hasEvCharger: true,
      evChargersCount: 12,
      hasHydrogen: false
    },
    facilities: ["테마정원", "애견테마파크(달려라코코)", "쇼핑몰", "약국", "유아휴게실"]
  },

  // 서해안고속도로 휴게소 (상행/하행)
  {
    slug: "seosan-seoul",
    name: "서산휴게소",
    direction: "상행",
    directionName: "서울방향",
    highwaySlug: "seohaean",
    highwayName: "서해안고속도로",
    locationKm: 242,
    signatureMenu: {
      name: "서산 어리굴젓 백반",
      price: 10000,
      description: "서산 갯벌에서 채취한 자연산 굴로 담근 매콤새콤 명품 어리굴젓을 따끈한 밥과 함께 제공합니다.",
      isExFood: true
    },
    otherMenus: [
      { name: "바지락된장찌개", price: 8500 },
      { name: "우동정식", price: 7000 },
      { name: "가래떡구이", price: 3000 }
    ],
    gasStation: {
      brand: "ex-oil",
      gasolinePrice: 1589,
      dieselPrice: 1419,
      lpgPrice: 979,
      hasEvCharger: true,
      evChargersCount: 6,
      hasHydrogen: false
    },
    facilities: ["수유실", "특산물판매장", "산책로"]
  },
  {
    slug: "seosan-mokpo",
    name: "서산휴게소",
    direction: "하행",
    directionName: "목포방향",
    highwaySlug: "seohaean",
    highwayName: "서해안고속도로",
    locationKm: 242,
    signatureMenu: {
      name: "밀국낙지탕",
      price: 13000,
      description: "서산 갯벌 낙지를 아낌없이 넣고 맑고 담백하게 끓여내어 속을 시원하게 해주는 로컬 웰빙 메뉴입니다.",
      isExFood: true
    },
    otherMenus: [
      { name: "서산어리굴젓백반", price: 10000 },
      { name: "등심돈가스", price: 9000 },
      { name: "소시지꼬치", price: 3500 }
    ],
    gasStation: {
      brand: "ex-oil",
      gasolinePrice: 1585,
      dieselPrice: 1409,
      lpgPrice: 975,
      hasEvCharger: true,
      evChargersCount: 6,
      hasHydrogen: false
    },
    facilities: ["수유실", "야외전망대", "샤워장"]
  }
];

export const cctvPoints: CctvPoint[] = [
  // 경부고속도로 CCTV
  {
    id: "cctv-gb-01",
    name: "서울요금소",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 410,
    direction: "부산방향",
    status: "smooth",
    speedLimit: 110,
    currentSpeed: 102,
    weather: "clear",
    temp: 24.5,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.10222,
    y: 37.37194
  },
  {
    id: "cctv-gb-02",
    name: "안성분기점",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 365,
    direction: "양방향",
    status: "slow",
    speedLimit: 110,
    currentSpeed: 78,
    weather: "clear",
    temp: 25.1,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.13527,
    y: 37.03472
  },
  {
    id: "cctv-gb-03",
    name: "천안분기점",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 330,
    direction: "서울방향",
    status: "congested",
    speedLimit: 110,
    currentSpeed: 32,
    weather: "rainy",
    temp: 21.0,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.18556,
    y: 36.78250
  },
  {
    id: "cctv-gb-04",
    name: "신탄진분기점",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 280,
    direction: "부산방향",
    status: "smooth",
    speedLimit: 110,
    currentSpeed: 108,
    weather: "foggy",
    temp: 22.4,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.42639,
    y: 36.43806
  },

  // 영동고속도로 CCTV
  {
    id: "cctv-yd-01",
    name: "용인IC",
    highwaySlug: "yeongdong",
    highwayName: "영동고속도로",
    locationKm: 54,
    direction: "강릉방향",
    status: "slow",
    speedLimit: 100,
    currentSpeed: 64,
    weather: "clear",
    temp: 23.8,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.22167,
    y: 37.24167
  },
  {
    id: "cctv-yd-02",
    name: "여주분기점",
    highwaySlug: "yeongdong",
    highwayName: "영동고속도로",
    locationKm: 76,
    direction: "인천방향",
    status: "smooth",
    speedLimit: 100,
    currentSpeed: 98,
    weather: "clear",
    temp: 24.0,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.60833,
    y: 37.24333
  },
  {
    id: "cctv-yd-03",
    name: "새말IC",
    highwaySlug: "yeongdong",
    highwayName: "영동고속도로",
    locationKm: 130,
    direction: "강릉방향",
    status: "smooth",
    speedLimit: 100,
    currentSpeed: 101,
    weather: "snowy",
    temp: -2.5,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 128.06528,
    y: 37.45806
  },

  // 서해안고속도로 CCTV
  {
    id: "cctv-sh-01",
    name: "서해대교",
    highwaySlug: "seohaean",
    highwayName: "서해안고속도로",
    locationKm: 275,
    direction: "양방향",
    status: "slow",
    speedLimit: 110,
    currentSpeed: 70,
    weather: "foggy",
    temp: 19.8,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 126.81556,
    y: 36.95389
  },
  {
    id: "cctv-sh-02",
    name: "당진IC",
    highwaySlug: "seohaean",
    highwayName: "서해안고속도로",
    locationKm: 265,
    direction: "서울방향",
    status: "smooth",
    speedLimit: 110,
    currentSpeed: 105,
    weather: "clear",
    temp: 22.0,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 126.68750,
    y: 36.91806
  }
];

// 헬퍼 함수들
export function getAllHighways() {
  return highways;
}

export function getHighwayBySlug(slug: string) {
  return highways.find((h) => h.slug === slug);
}

export function getServiceAreasByHighway(highwaySlug: string) {
  return serviceAreas.filter((s) => s.highwaySlug === highwaySlug);
}

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((s) => s.slug === slug);
}

export function getCctvPointsByHighway(highwaySlug: string) {
  return cctvPoints.filter((c) => c.highwaySlug === highwaySlug);
}

export function getCctvPointById(id: string) {
  return cctvPoints.find((c) => c.id === id);
}

// 통합 검색 헬퍼 (휴게소 이름, 도로 이름, 맛집 메뉴명 등 통합 검색)
export function searchAll(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return { highways: [], serviceAreas: [], menuItems: [] };

  const matchedHighways = highways.filter(
    (h) => h.name.toLowerCase().includes(q) || h.number.toLowerCase().includes(q)
  );

  const matchedServiceAreas = serviceAreas.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.highwayName.toLowerCase().includes(q) ||
      s.directionName.toLowerCase().includes(q)
  );

  const matchedMenuItems = serviceAreas.filter((s) => {
    const sigMatch = s.signatureMenu.name.toLowerCase().includes(q);
    const otherMatch = s.otherMenus.some((m) => m.name.toLowerCase().includes(q));
    return sigMatch || otherMatch;
  });

  return {
    highways: matchedHighways,
    serviceAreas: matchedServiceAreas,
    menuItems: matchedMenuItems
  };
}
