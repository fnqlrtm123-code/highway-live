// Korea Highway and Rest Area Data (Dynamically Generated from realGasStations.json)
import realGasStations from './realGasStations.json';

export interface Highway {
  slug: string;
  name: string;
  number: string;
  length: string;
  start: string;
  end: string;
  description: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  direction: "상행" | "하행" | "양방향";
  directionName: string;
  highwaySlug: string;
  highwayName: string;
  locationKm: number;
  signatureMenu: {
    name: string;
    price: number;
    description: string;
    isExFood?: boolean;
  };
  otherMenus: {
    name: string;
    price: number;
  }[];
  gasStation: {
    brand: "알뜰주유소" | "SK에너지" | "GS칼텍스" | "S-OIL" | "현대오일뱅크" | "ex-oil";
    gasolinePrice: number;
    dieselPrice: number;
    lpgPrice: number | null;
    hasEvCharger: boolean;
    evChargersCount: number;
    hasHydrogen: boolean;
  };
  facilities: string[];
  latitude: number;
  longitude: number;
}

export const highways: Highway[] = [
  {
    "slug": "gyeongbu",
    "name": "경부고속도로",
    "number": "1",
    "length": "416.1 km",
    "start": "부산",
    "end": "서울",
    "description": "대한민국 핵심 종축 고속도로로, 서울과 부산을 연결합니다."
  },
  {
    "slug": "namhae",
    "name": "남해고속도로",
    "number": "10",
    "length": "273.1 km",
    "start": "영암",
    "end": "부산",
    "description": "대한민국 남부 해안을 동서로 횡단하는 핵심 고속도로입니다."
  },
  {
    "slug": "namhae-yeongam-suncheon",
    "name": "남해고속도로(영암순천)",
    "number": "10",
    "length": "106.8 km",
    "start": "영암",
    "end": "순천",
    "description": "영암과 순천을 직접 연결하는 남해고속도로의 서부 구간입니다."
  },
  {
    "slug": "muan-gwangju",
    "name": "무안광주고속도로",
    "number": "12",
    "length": "41.3 km",
    "start": "무안",
    "end": "광주",
    "description": "전남 무안국제공항과 광주광역시를 빠르게 잇는 노선입니다."
  },
  {
    "slug": "gwangju-daegu",
    "name": "광주대구고속도로",
    "number": "12",
    "length": "176.8 km",
    "start": "광주",
    "end": "대구",
    "description": "호남과 영남을 동서로 잇는 최초의 동서 화합 고속도로입니다."
  },
  {
    "slug": "milyang-ulsan",
    "name": "밀양울산고속도로",
    "number": "14",
    "length": "45.2 km",
    "start": "밀양",
    "end": "울산",
    "description": "경남 밀양과 울산광역시를 신속하게 연결하는 고속도로입니다."
  },
  {
    "slug": "seohaean",
    "name": "서해안고속도로",
    "number": "15",
    "length": "336.6 km",
    "start": "목포",
    "end": "서울",
    "description": "대한민국 서부 해안을 따라 남북을 잇는 중심 도로입니다."
  },
  {
    "slug": "wanju-jangsu",
    "name": "완주장수고속도로",
    "number": "20",
    "length": "48.5 km",
    "start": "완주",
    "end": "장수",
    "description": "전북 완주군과 장수군을 연결하는 고속도로입니다."
  },
  {
    "slug": "saemangeum-pohang-daegu-pohang",
    "name": "새만금포항고속도로(대구포항)",
    "number": "20",
    "length": "68.4 km",
    "start": "대구",
    "end": "포항",
    "description": "대구광역시와 경북 포항을 연결하는 핵심 횡단 노선입니다."
  },
  {
    "slug": "honam",
    "name": "호남고속도로",
    "number": "25",
    "length": "194.2 km",
    "start": "순천",
    "end": "논산",
    "description": "호남 지방과 수도권을 연결하는 중요한 남북 도로입니다."
  },
  {
    "slug": "suncheon-wanju",
    "name": "순천완주고속도로",
    "number": "27",
    "length": "117.8 km",
    "start": "순천",
    "end": "완주",
    "description": "전남 순천과 전북 완주를 남북으로 신속하게 연결하는 고속도로입니다."
  },
  {
    "slug": "세종포천선",
    "name": "세종포천고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "세종포천고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "서산영덕선",
    "name": "서산영덕고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "서산영덕고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "tongyeong-daejeon",
    "name": "통영대전고속도로",
    "number": "35",
    "length": "215.3 km",
    "start": "통영",
    "end": "대전",
    "description": "대전에서 출발해 전북 무주, 경남 산청을 지나 남해안 통영까지 연결합니다."
  },
  {
    "slug": "jungbu",
    "name": "중부고속도로",
    "number": "35",
    "length": "117.2 km",
    "start": "청주",
    "end": "하남",
    "description": "수도권 동부와 충청북도를 잇는 남북축 고속도로입니다."
  },
  {
    "slug": "pyeongtaek-jecheon",
    "name": "평택제천고속도로",
    "number": "40",
    "length": "127.4 km",
    "start": "평택",
    "end": "제천",
    "description": "경기 평택에서 안성, 충북 충주를 거쳐 제천까지 동서로 가로지릅니다."
  },
  {
    "slug": "jungbunaeryuk",
    "name": "중부내륙고속도로",
    "number": "45",
    "length": "266.3 km",
    "start": "내서",
    "end": "양평",
    "description": "한반도 내륙의 중심부를 종단하는 노선입니다."
  },
  {
    "slug": "yeongdong",
    "name": "영동고속도로",
    "number": "50",
    "length": "234.4 km",
    "start": "인천",
    "end": "강릉",
    "description": "수도권과 강원도를 연결하는 동서 횡단의 주축 고속도로입니다."
  },
  {
    "slug": "jungang",
    "name": "중앙고속도로",
    "number": "55",
    "length": "388.1 km",
    "start": "부산",
    "end": "춘천",
    "description": "내륙 중심부를 종단하여 영남과 강원 영서 지방을 잇습니다."
  },
  {
    "slug": "seoul-yangyang",
    "name": "서울양양고속도로",
    "number": "60",
    "length": "150.2 km",
    "start": "서울",
    "end": "양양",
    "description": "수도권과 동해안을 동서로 가장 신속하게 연결하는 고속도로입니다."
  },
  {
    "slug": "donghae",
    "name": "동해고속도로",
    "number": "65",
    "length": "204.0 km",
    "start": "부산",
    "end": "속초",
    "description": "동해안을 따라 해안 도시들을 남북으로 연결합니다."
  },
  {
    "slug": "울산포항선",
    "name": "울산포항고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "울산포항고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "수도권제1순환선",
    "name": "수도권제1순환고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "수도권제1순환고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "서천공주선",
    "name": "서천공주고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "서천공주고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "부산외곽순환선",
    "name": "부산외곽순환고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "부산외곽순환고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    "slug": "서울만남-busan",
    "name": "서울만남휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 10,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1186,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.5665,
    "longitude": 127.128
  },
  {
    "slug": "기흥-busan",
    "name": "기흥휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "기흥 명품 수제돈가스",
      "price": 9500,
      "description": "국산 돼지 등심을 바삭하게 튀겨내어 특제 과일 소스를 곁들인 수제 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.54,
    "longitude": 127.5993
  },
  {
    "slug": "안성-busan",
    "name": "안성휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "안성맞춤 한우국밥",
      "price": 9500,
      "description": "안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1833,
      "dieselPrice": 1833,
      "lpgPrice": 1165,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.5502,
    "longitude": 127.4559
  },
  {
    "slug": "망향-busan",
    "name": "망향휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 31,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1836,
      "dieselPrice": 1835,
      "lpgPrice": 1118,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.3716,
    "longitude": 127.236
  },
  {
    "slug": "옥산-busan",
    "name": "옥산휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 38,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1854,
      "dieselPrice": 1844,
      "lpgPrice": 1175,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.3003,
    "longitude": 127.4203
  },
  {
    "slug": "천안호두-busan",
    "name": "천안호두휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1863,
      "dieselPrice": 1852,
      "lpgPrice": 1217,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.2066,
    "longitude": 127.427
  },
  {
    "slug": "죽암-busan",
    "name": "죽암휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 52,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1089,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.5953,
    "longitude": 127.6337
  },
  {
    "slug": "금강-busan",
    "name": "금강휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 59,
    "signatureMenu": {
      "name": "금강 인삼갈비탕",
      "price": 12000,
      "description": "금산 인삼과 부드러운 소갈비가 어우러진 휴게소 대표 보양 갈비탕입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.7357,
    "longitude": 127.6028
  },
  {
    "slug": "황간-busan",
    "name": "황간휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 66,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.7856,
    "longitude": 127.4679
  },
  {
    "slug": "추풍령-busan",
    "name": "추풍령휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 73,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.6378,
    "longitude": 128.3689
  },
  {
    "slug": "평사-busan",
    "name": "평사휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 80,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1899,
      "dieselPrice": 1899,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.4944,
    "longitude": 128.3797
  },
  {
    "slug": "칠곡-busan",
    "name": "칠곡휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 87,
    "signatureMenu": {
      "name": "칠곡 평사 사골우거지국밥",
      "price": 8500,
      "description": "오랜 시간 우려낸 진한 사골 육수에 국내산 우거지를 넣어 얼큰하게 끓였습니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1844,
      "dieselPrice": 1833,
      "lpgPrice": 1160,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.426,
    "longitude": 128.5063
  },
  {
    "slug": "옥천-busan",
    "name": "옥천휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 94,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1199,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.5567,
    "longitude": 127.6163
  },
  {
    "slug": "경주-busan",
    "name": "경주휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 101,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1208,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.639,
    "longitude": 128.6417
  },
  {
    "slug": "김천-busan",
    "name": "김천휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 108,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.7246,
    "longitude": 128.5261
  },
  {
    "slug": "통도사-busan",
    "name": "통도사휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 115,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1276,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.3358,
    "longitude": 128.5785
  },
  {
    "slug": "옥천만남의광장-busan",
    "name": "옥천만남의광장휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 122,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 1837,
      "dieselPrice": 1899,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.594,
    "longitude": 127.3461
  },
  {
    "slug": "건천-busan",
    "name": "건천휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 129,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1863,
      "dieselPrice": 1852,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.4318,
    "longitude": 128.4643
  },
  {
    "slug": "안성-seoul",
    "name": "안성휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 136,
    "signatureMenu": {
      "name": "안성맞춤 한우국밥",
      "price": 9500,
      "description": "안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1236,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.3012,
    "longitude": 127.6173
  },
  {
    "slug": "죽전-seoul",
    "name": "죽전휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 143,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.4363,
    "longitude": 127.6666
  },
  {
    "slug": "천안삼거리-seoul",
    "name": "천안삼거리휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 150,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1839,
      "dieselPrice": 1835,
      "lpgPrice": 1123,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.4873,
    "longitude": 127.4457
  },
  {
    "slug": "죽암-seoul",
    "name": "죽암휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1089,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.7627,
    "longitude": 127.4075
  },
  {
    "slug": "옥천-seoul",
    "name": "옥천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.6359,
    "longitude": 127.3397
  },
  {
    "slug": "황간-seoul",
    "name": "황간휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 171,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.5103,
    "longitude": 127.4098
  },
  {
    "slug": "입장거봉포도-seoul",
    "name": "입장거봉포도휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 178,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1839,
      "dieselPrice": 1839,
      "lpgPrice": 1226,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.2146,
    "longitude": 127.4481
  },
  {
    "slug": "추풍령-seoul",
    "name": "추풍령휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 185,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1809,
      "dieselPrice": 1799,
      "lpgPrice": 1193,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.5561,
    "longitude": 128.6543
  },
  {
    "slug": "칠곡-seoul",
    "name": "칠곡휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 192,
    "signatureMenu": {
      "name": "칠곡 평사 사골우거지국밥",
      "price": 8500,
      "description": "오랜 시간 우려낸 진한 사골 육수에 국내산 우거지를 넣어 얼큰하게 끓였습니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.6904,
    "longitude": 128.6026
  },
  {
    "slug": "경산-seoul",
    "name": "경산휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 199,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1199,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.7195,
    "longitude": 128.4618
  },
  {
    "slug": "건천-seoul",
    "name": "건천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 206,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.6166,
    "longitude": 128.3612
  },
  {
    "slug": "언양-seoul",
    "name": "언양휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 213,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1294,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.4394,
    "longitude": 129.1992
  },
  {
    "slug": "양산-seoul",
    "name": "양산휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 220,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.0901,
    "longitude": 128.7156
  },
  {
    "slug": "신탄진-seoul",
    "name": "신탄진휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 227,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.2898,
    "longitude": 127.5217
  },
  {
    "slug": "청주-seoul",
    "name": "청주휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 234,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1184,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.7199,
    "longitude": 127.6148
  },
  {
    "slug": "김천-seoul",
    "name": "김천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 241,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1865,
      "dieselPrice": 1855,
      "lpgPrice": 1195,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.726,
    "longitude": 128.5036
  },
  {
    "slug": "섬진강-busan",
    "name": "섬진강휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 248,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 34.8955,
    "longitude": 126.3356
  },
  {
    "slug": "사천-busan",
    "name": "사천휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 255,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1099,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.1741,
    "longitude": 128.5569
  },
  {
    "slug": "진영-busan",
    "name": "진영휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 262,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "S-OIL",
      "gasolinePrice": 1868,
      "dieselPrice": 1848,
      "lpgPrice": 1063,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.0895,
    "longitude": 128.6733
  },
  {
    "slug": "진주-busan",
    "name": "진주휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 269,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.1418,
    "longitude": 128.8073
  },
  {
    "slug": "함안-busan",
    "name": "함안휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 276,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1879,
      "dieselPrice": 1869,
      "lpgPrice": 1220,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.2828,
    "longitude": 128.8358
  },
  {
    "slug": "섬진강-busan-1",
    "name": "섬진강휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 283,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 34.9607,
    "longitude": 126.5029
  },
  {
    "slug": "사천-busan-1",
    "name": "사천휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 290,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1099,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.3501,
    "longitude": 128.5925
  },
  {
    "slug": "진영-busan-1",
    "name": "진영휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 297,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1228,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.2145,
    "longitude": 128.5444
  },
  {
    "slug": "문산-busan",
    "name": "문산휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 304,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1889,
      "dieselPrice": 1853,
      "lpgPrice": 1149,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.2763,
    "longitude": 127.4583
  },
  {
    "slug": "함안-busan-1",
    "name": "함안휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 311,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1276,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.1135,
    "longitude": 128.7758
  },
  {
    "slug": "보성녹차-busan",
    "name": "보성녹차휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae-yeongam-suncheon",
    "highwayName": "남해고속도로(영암순천)",
    "locationKm": 318,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1261,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 34.8188,
    "longitude": 126.6129
  },
  {
    "slug": "보성녹차-busan-1",
    "name": "보성녹차휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae-yeongam-suncheon",
    "highwayName": "남해고속도로(영암순천)",
    "locationKm": 325,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1261,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 34.9437,
    "longitude": 126.5417
  },
  {
    "slug": "장흥정남진-busan",
    "name": "장흥정남진휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae-yeongam-suncheon",
    "highwayName": "남해고속도로(영암순천)",
    "locationKm": 332,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1849,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.3149,
    "longitude": 129.0108
  },
  {
    "slug": "함평나비-seoul",
    "name": "함평나비휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "muan-gwangju",
    "highwayName": "무안광주고속도로",
    "locationKm": 339,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1261,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 34.8346,
    "longitude": 126.314
  },
  {
    "slug": "함평나비-both",
    "name": "함평나비휴게소",
    "direction": "하행",
    "directionName": "무안방향",
    "highwaySlug": "muan-gwangju",
    "highwayName": "무안광주고속도로",
    "locationKm": 346,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1261,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 34.7009,
    "longitude": 126.3669
  },
  {
    "slug": "지리산-seoul",
    "name": "지리산휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 353,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1199,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.6811,
    "longitude": 127.1931
  },
  {
    "slug": "거창-seoul",
    "name": "거창휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 10,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.1989,
    "longitude": 128.8372
  },
  {
    "slug": "강천산-seoul",
    "name": "강천산휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.9247,
    "longitude": 127.2593
  },
  {
    "slug": "논공-seoul",
    "name": "논공휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1894,
      "dieselPrice": 1899,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.0191,
    "longitude": 128.577
  },
  {
    "slug": "지리산-both",
    "name": "지리산휴게소",
    "direction": "하행",
    "directionName": "무안방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 31,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1845,
      "dieselPrice": 1848,
      "lpgPrice": 1199,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.8836,
    "longitude": 127.0103
  },
  {
    "slug": "거창-both",
    "name": "거창휴게소",
    "direction": "하행",
    "directionName": "무안방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 38,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.1545,
    "longitude": 128.5681
  },
  {
    "slug": "강천산-both",
    "name": "강천산휴게소",
    "direction": "하행",
    "directionName": "무안방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.6742,
    "longitude": 127.1513
  },
  {
    "slug": "논공-both",
    "name": "논공휴게소",
    "direction": "하행",
    "directionName": "무안방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 52,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1894,
      "dieselPrice": 1892,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.7929,
    "longitude": 128.7294
  },
  {
    "slug": "밀양영남루-both",
    "name": "밀양영남루휴게소",
    "direction": "하행",
    "directionName": "밀양방향",
    "highwaySlug": "milyang-ulsan",
    "highwayName": "밀양울산고속도로",
    "locationKm": 59,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1854,
      "dieselPrice": 1851,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.3037,
    "longitude": 128.8275
  },
  {
    "slug": "울주-both",
    "name": "울주휴게소",
    "direction": "하행",
    "directionName": "밀양방향",
    "highwaySlug": "milyang-ulsan",
    "highwayName": "밀양울산고속도로",
    "locationKm": 66,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.6878,
    "longitude": 129.3293
  },
  {
    "slug": "밀양영남루-busan",
    "name": "밀양영남루휴게소",
    "direction": "하행",
    "directionName": "울산방향",
    "highwaySlug": "milyang-ulsan",
    "highwayName": "밀양울산고속도로",
    "locationKm": 73,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1854,
      "dieselPrice": 1851,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.3338,
    "longitude": 128.5768
  },
  {
    "slug": "울주-busan",
    "name": "울주휴게소",
    "direction": "하행",
    "directionName": "울산방향",
    "highwaySlug": "milyang-ulsan",
    "highwayName": "밀양울산고속도로",
    "locationKm": 80,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": true
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.4932,
    "longitude": 129.1685
  },
  {
    "slug": "화성-busan",
    "name": "화성휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 87,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.2689,
    "longitude": 127.4796
  },
  {
    "slug": "행담도-busan",
    "name": "행담도휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 94,
    "signatureMenu": {
      "name": "행담도 바지락칼국수",
      "price": 8000,
      "description": "서해안의 신선한 바지락으로 우려낸 시원하고 칼칼한 칼국수입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "현대오일뱅크",
      "gasolinePrice": 1959,
      "dieselPrice": 1949,
      "lpgPrice": 1218,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.2395,
    "longitude": 127.4855
  },
  {
    "slug": "대천-busan",
    "name": "대천휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 101,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1245,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.3755,
    "longitude": 127.5324
  },
  {
    "slug": "서산-busan",
    "name": "서산휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 108,
    "signatureMenu": {
      "name": "서산 어리굴젓 백반",
      "price": 10000,
      "description": "서산 특산물인 짭조름하고 매콤한 어리굴젓과 따끈한 흰쌀밥 정식입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.4884,
    "longitude": 127.4433
  },
  {
    "slug": "군산-busan",
    "name": "군산휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 115,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1863,
      "dieselPrice": 1852,
      "lpgPrice": 1239,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.5378,
    "longitude": 127.4339
  },
  {
    "slug": "함평천지-busan",
    "name": "함평천지휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 122,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1838,
      "dieselPrice": 1836,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.4098,
    "longitude": 127.3684
  },
  {
    "slug": "고창고인돌-busan",
    "name": "고창고인돌휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 129,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1241,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.6959,
    "longitude": 127.0703
  },
  {
    "slug": "홍성-busan",
    "name": "홍성휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 136,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1837,
      "dieselPrice": 1833,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.2157,
    "longitude": 127.4505
  },
  {
    "slug": "서천-busan",
    "name": "서천휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 143,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1216,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.3332,
    "longitude": 127.5335
  },
  {
    "slug": "매송-busan",
    "name": "매송휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 150,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.5299,
    "longitude": 127.6133
  },
  {
    "slug": "부안고려청자-busan",
    "name": "부안고려청자휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.9669,
    "longitude": 127.1016
  },
  {
    "slug": "화성-seoul",
    "name": "화성휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.4519,
    "longitude": 127.3732
  },
  {
    "slug": "대천-seoul",
    "name": "대천휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 171,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1245,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.2489,
    "longitude": 127.2741
  },
  {
    "slug": "서산-seoul",
    "name": "서산휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 178,
    "signatureMenu": {
      "name": "서산 어리굴젓 백반",
      "price": 10000,
      "description": "서산 특산물인 짭조름하고 매콤한 어리굴젓과 따끈한 흰쌀밥 정식입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.266,
    "longitude": 127.5441
  },
  {
    "slug": "군산-seoul",
    "name": "군산휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 185,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1863,
      "dieselPrice": 1852,
      "lpgPrice": 1239,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.3556,
    "longitude": 127.6566
  },
  {
    "slug": "함평천지-seoul",
    "name": "함평천지휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 192,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.4987,
    "longitude": 127.6419
  },
  {
    "slug": "고창고인돌-seoul",
    "name": "고창고인돌휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 199,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1241,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.9741,
    "longitude": 127.1434
  },
  {
    "slug": "홍성-seoul",
    "name": "홍성휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 206,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1848,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.4275,
    "longitude": 127.2558
  },
  {
    "slug": "서천-seoul",
    "name": "서천휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 213,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1228,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.2838,
    "longitude": 127.2501
  },
  {
    "slug": "매송-seoul",
    "name": "매송휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 220,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.2647,
    "longitude": 127.5017
  },
  {
    "slug": "부안고려청자-seoul",
    "name": "부안고려청자휴게소",
    "direction": "상행",
    "directionName": "시흥방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 227,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.7297,
    "longitude": 127.2645
  },
  {
    "slug": "진안마이산-both",
    "name": "진안마이산휴게소",
    "direction": "하행",
    "directionName": "익산방향",
    "highwaySlug": "wanju-jangsu",
    "highwayName": "완주장수고속도로",
    "locationKm": 234,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1870,
      "dieselPrice": 1865,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.8712,
    "longitude": 127.2905
  },
  {
    "slug": "진안마이산-both-1",
    "name": "진안마이산휴게소",
    "direction": "하행",
    "directionName": "포항방향",
    "highwaySlug": "wanju-jangsu",
    "highwayName": "완주장수고속도로",
    "locationKm": 241,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1870,
      "dieselPrice": 1865,
      "lpgPrice": 1245,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.9695,
    "longitude": 127.1854
  },
  {
    "slug": "영천-both",
    "name": "영천휴게소",
    "direction": "하행",
    "directionName": "익산방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
    "locationKm": 248,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1226,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.686,
    "longitude": 128.4036
  },
  {
    "slug": "청통-both",
    "name": "청통휴게소",
    "direction": "하행",
    "directionName": "익산방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
    "locationKm": 255,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.5496,
    "longitude": 128.3579
  },
  {
    "slug": "와촌-both",
    "name": "와촌휴게소",
    "direction": "하행",
    "directionName": "포항방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
    "locationKm": 262,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.4375,
    "longitude": 128.448
  },
  {
    "slug": "영천-both-1",
    "name": "영천휴게소",
    "direction": "하행",
    "directionName": "포항방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
    "locationKm": 269,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.2905,
    "longitude": 127.6038
  },
  {
    "slug": "익산미륵사지-both",
    "name": "익산미륵사지휴게소",
    "direction": "하행",
    "directionName": "논산방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 276,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.8295,
    "longitude": 127.2979
  },
  {
    "slug": "정읍녹두장군-both",
    "name": "정읍녹두장군휴게소",
    "direction": "하행",
    "directionName": "논산방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 283,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1841,
      "dieselPrice": 1832,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.9532,
    "longitude": 127.2245
  },
  {
    "slug": "곡성-both",
    "name": "곡성휴게소",
    "direction": "하행",
    "directionName": "논산방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 290,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1894,
      "dieselPrice": 1870,
      "lpgPrice": 1195,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 34.9502,
    "longitude": 126.3957
  },
  {
    "slug": "백양사-both",
    "name": "백양사휴게소",
    "direction": "하행",
    "directionName": "논산방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 297,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1860,
      "dieselPrice": 1840,
      "lpgPrice": 1100,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.4297,
    "longitude": 127.3691
  },
  {
    "slug": "주암-both",
    "name": "주암휴게소",
    "direction": "하행",
    "directionName": "논산방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 304,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1880,
      "dieselPrice": 1870,
      "lpgPrice": 1200,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 34.6992,
    "longitude": 126.3689
  },
  {
    "slug": "이서-both",
    "name": "이서휴게소",
    "direction": "하행",
    "directionName": "논산방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 311,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.682,
    "longitude": 127.1956
  },
  {
    "slug": "익산미륵사지-busan",
    "name": "익산미륵사지휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 318,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1125,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.7874,
    "longitude": 127.2934
  },
  {
    "slug": "정읍녹두장군-busan",
    "name": "정읍녹두장군휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 325,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1874,
      "dieselPrice": 1845,
      "lpgPrice": 1135,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.9267,
    "longitude": 127.2575
  },
  {
    "slug": "곡성-busan",
    "name": "곡성휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 332,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1869,
      "dieselPrice": 1863,
      "lpgPrice": 1200,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 34.9636,
    "longitude": 126.4358
  },
  {
    "slug": "주암-busan",
    "name": "주암휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 339,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1869,
      "dieselPrice": 1863,
      "lpgPrice": 1200,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 34.873,
    "longitude": 126.3241
  },
  {
    "slug": "백양사-busan",
    "name": "백양사휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 346,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1135,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.3278,
    "longitude": 127.3954
  },
  {
    "slug": "이서-busan",
    "name": "이서휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 353,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1845,
      "dieselPrice": 1839,
      "lpgPrice": 1160,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.4166,
    "longitude": 126.984
  },
  {
    "slug": "오수-both",
    "name": "오수휴게소",
    "direction": "하행",
    "directionName": "광양방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
    "locationKm": 10,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1847,
      "dieselPrice": 1843,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.7482,
    "longitude": 127.2773
  },
  {
    "slug": "황전-both",
    "name": "황전휴게소",
    "direction": "하행",
    "directionName": "광양방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1832,
      "lpgPrice": 1238,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 34.8839,
    "longitude": 126.5967
  },
  {
    "slug": "춘향-both",
    "name": "춘향휴게소",
    "direction": "하행",
    "directionName": "광양방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1833,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.9734,
    "longitude": 127.1632
  },
  {
    "slug": "오수-both-1",
    "name": "오수휴게소",
    "direction": "하행",
    "directionName": "전주방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
    "locationKm": 31,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1847,
      "dieselPrice": 1843,
      "lpgPrice": 1219,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.9176,
    "longitude": 127.0307
  },
  {
    "slug": "황전-both-1",
    "name": "황전휴게소",
    "direction": "하행",
    "directionName": "전주방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
    "locationKm": 38,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 34.7679,
    "longitude": 126.3209
  },
  {
    "slug": "춘향-both-1",
    "name": "춘향휴게소",
    "direction": "하행",
    "directionName": "전주방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1843,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.6786,
    "longitude": 127.1119
  },
  {
    "slug": "처인-both",
    "name": "처인휴게소",
    "direction": "하행",
    "directionName": "null방향",
    "highwaySlug": "세종포천선",
    "highwayName": "세종포천고속도로",
    "locationKm": 52,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1859,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.3047,
    "longitude": 127.6213
  },
  {
    "slug": "처인-both-1",
    "name": "처인휴게소",
    "direction": "하행",
    "directionName": "null방향",
    "highwaySlug": "세종포천선",
    "highwayName": "세종포천고속도로",
    "locationKm": 59,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1859,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.4415,
    "longitude": 127.6657
  },
  {
    "slug": "고삼호수-both",
    "name": "고삼호수휴게소",
    "direction": "하행",
    "directionName": "null방향",
    "highwaySlug": "세종포천선",
    "highwayName": "세종포천고속도로",
    "locationKm": 66,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1879,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.5528,
    "longitude": 127.5746
  },
  {
    "slug": "고삼호수-both-1",
    "name": "고삼호수휴게소",
    "direction": "하행",
    "directionName": "null방향",
    "highwaySlug": "세종포천선",
    "highwayName": "세종포천고속도로",
    "locationKm": 73,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1879,
      "lpgPrice": 1219,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.5363,
    "longitude": 127.4317
  },
  {
    "slug": "화서-both",
    "name": "화서휴게소",
    "direction": "하행",
    "directionName": "상주방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 80,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1879,
      "dieselPrice": 1869,
      "lpgPrice": 1249,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.5694,
    "longitude": 128.3557
  },
  {
    "slug": "예산-both",
    "name": "예산휴게소",
    "direction": "하행",
    "directionName": "상주방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 87,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1843,
      "dieselPrice": 1841,
      "lpgPrice": 1270,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.2207,
    "longitude": 127.3091
  },
  {
    "slug": "공주-both",
    "name": "공주휴게소",
    "direction": "하행",
    "directionName": "상주방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 94,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1843,
      "dieselPrice": 1841,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.2169,
    "longitude": 127.4529
  },
  {
    "slug": "의성-both",
    "name": "의성휴게소",
    "direction": "하행",
    "directionName": "상주방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 101,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.5614,
    "longitude": 128.6549
  },
  {
    "slug": "청송-both",
    "name": "청송휴게소",
    "direction": "하행",
    "directionName": "상주방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 108,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1838,
      "dieselPrice": 1836,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.6937,
    "longitude": 128.5985
  },
  {
    "slug": "문의청남대-both",
    "name": "문의청남대휴게소",
    "direction": "하행",
    "directionName": "상주방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 115,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1854,
      "dieselPrice": 1838,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.779,
    "longitude": 127.4408
  },
  {
    "slug": "속리산-both",
    "name": "속리산휴게소",
    "direction": "하행",
    "directionName": "청원방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 122,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1829,
      "dieselPrice": 1819,
      "lpgPrice": 1214,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.6727,
    "longitude": 127.344
  },
  {
    "slug": "예산-both-1",
    "name": "예산휴게소",
    "direction": "하행",
    "directionName": "청원방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 129,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1843,
      "dieselPrice": 1841,
      "lpgPrice": 1220,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.2469,
    "longitude": 127.2759
  },
  {
    "slug": "공주-both-1",
    "name": "공주휴게소",
    "direction": "하행",
    "directionName": "청원방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 136,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1843,
      "dieselPrice": 1841,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.2031,
    "longitude": 127.4129
  },
  {
    "slug": "의성-both-1",
    "name": "의성휴게소",
    "direction": "하행",
    "directionName": "청원방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 143,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.5203,
    "longitude": 128.6449
  },
  {
    "slug": "청송-both-1",
    "name": "청송휴게소",
    "direction": "하행",
    "directionName": "청원방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 150,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1838,
      "dieselPrice": 1836,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.6631,
    "longitude": 128.6277
  },
  {
    "slug": "문의청남대-both-1",
    "name": "문의청남대휴게소",
    "direction": "하행",
    "directionName": "청원방향",
    "highwaySlug": "서산영덕선",
    "highwayName": "서산영덕고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1831,
      "dieselPrice": 1827,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.787,
    "longitude": 127.4824
  },
  {
    "slug": "산청-both",
    "name": "산청휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": 1149,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.3131,
    "longitude": 128.5625
  },
  {
    "slug": "금산인삼랜드-both",
    "name": "금산인삼랜드휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 171,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.2814,
    "longitude": 127.2513
  },
  {
    "slug": "덕유산-both",
    "name": "덕유산휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 178,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1212,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.2644,
    "longitude": 127.5044
  },
  {
    "slug": "함양-both",
    "name": "함양휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 185,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1868,
      "dieselPrice": 1868,
      "lpgPrice": 1199,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.1459,
    "longitude": 128.8107
  },
  {
    "slug": "고성공룡나라-both",
    "name": "고성공룡나라휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 192,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1884,
      "dieselPrice": 1870,
      "lpgPrice": 1185,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.2878,
    "longitude": 128.8341
  },
  {
    "slug": "산청-both-1",
    "name": "산청휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 199,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": 1149,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.3842,
    "longitude": 128.7274
  },
  {
    "slug": "금산인삼랜드-both-1",
    "name": "금산인삼랜드휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 206,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1859,
      "lpgPrice": 1149,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.4586,
    "longitude": 127.2806
  },
  {
    "slug": "덕유산-both-1",
    "name": "덕유산휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 213,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1874,
      "dieselPrice": 1869,
      "lpgPrice": 1212,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.3214,
    "longitude": 127.2373
  },
  {
    "slug": "함양-both-1",
    "name": "함양휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 220,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1868,
      "dieselPrice": 1868,
      "lpgPrice": 1199,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.0988,
    "longitude": 128.6374
  },
  {
    "slug": "고성공룡나라-both-1",
    "name": "고성공룡나라휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 227,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1884,
      "dieselPrice": 1870,
      "lpgPrice": 1240,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.1166,
    "longitude": 128.7801
  },
  {
    "slug": "하남드림-both",
    "name": "하남드림휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 234,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.4218,
    "longitude": 127.6681
  },
  {
    "slug": "오창-both",
    "name": "오창휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 241,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.5441,
    "longitude": 127.5925
  },
  {
    "slug": "음성-both",
    "name": "음성휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 248,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1853,
      "dieselPrice": 1842,
      "lpgPrice": 1130,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.5467,
    "longitude": 127.4487
  },
  {
    "slug": "이천-both",
    "name": "이천휴게소",
    "direction": "하행",
    "directionName": "통영방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 255,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1841,
      "dieselPrice": 1819,
      "lpgPrice": 1148,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.4271,
    "longitude": 127.3689
  },
  {
    "slug": "이천쌀-both",
    "name": "이천쌀휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 262,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1216,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.2952,
    "longitude": 127.4264
  },
  {
    "slug": "오창-both-1",
    "name": "오창휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 269,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1865,
      "dieselPrice": 1859,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.4958,
    "longitude": 127.5398
  },
  {
    "slug": "음성-both-1",
    "name": "음성휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 276,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1216,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.603,
    "longitude": 127.6357
  },
  {
    "slug": "마장복합-both",
    "name": "마장복합휴게소",
    "direction": "하행",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 283,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 2079,
      "dieselPrice": 2069,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.5182,
    "longitude": 127.626
  },
  {
    "slug": "안성맞춤-both",
    "name": "안성맞춤휴게소",
    "direction": "하행",
    "directionName": "제천방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 290,
    "signatureMenu": {
      "name": "안성맞춤 한우국밥",
      "price": 9500,
      "description": "안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1875,
      "lpgPrice": 1129,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.5608,
    "longitude": 127.4886
  },
  {
    "slug": "금왕-both",
    "name": "금왕휴게소",
    "direction": "하행",
    "directionName": "제천방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 297,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1125,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.6917,
    "longitude": 127.3499
  },
  {
    "slug": "천등산-both",
    "name": "천등산휴게소",
    "direction": "하행",
    "directionName": "제천방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 304,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1889,
      "dieselPrice": 1877,
      "lpgPrice": 1199,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.549,
    "longitude": 127.3683
  },
  {
    "slug": "평택-both",
    "name": "평택휴게소",
    "direction": "하행",
    "directionName": "제천방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 311,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 1858,
      "dieselPrice": 1837,
      "lpgPrice": 1210,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.264,
    "longitude": 127.5269
  },
  {
    "slug": "안성맞춤-both-1",
    "name": "안성맞춤휴게소",
    "direction": "하행",
    "directionName": "평택방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 318,
    "signatureMenu": {
      "name": "안성맞춤 한우국밥",
      "price": 9500,
      "description": "안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": 1237,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.3401,
    "longitude": 127.649
  },
  {
    "slug": "금왕-both-1",
    "name": "금왕휴게소",
    "direction": "하행",
    "directionName": "평택방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 325,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1154,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.7074,
    "longitude": 127.6223
  },
  {
    "slug": "천등산-both-1",
    "name": "천등산휴게소",
    "direction": "하행",
    "directionName": "평택방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 332,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.7867,
    "longitude": 127.5023
  },
  {
    "slug": "평택-both-1",
    "name": "평택휴게소",
    "direction": "하행",
    "directionName": "평택방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 339,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 1858,
      "dieselPrice": 1837,
      "lpgPrice": 1210,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.5052,
    "longitude": 127.3993
  },
  {
    "slug": "영산-both",
    "name": "영산휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 346,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1869,
      "dieselPrice": 1859,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.1875,
    "longitude": 128.5513
  },
  {
    "slug": "선산-both",
    "name": "선산휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 353,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1140,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.4298,
    "longitude": 128.472
  },
  {
    "slug": "충주-both",
    "name": "충주휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 10,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1869,
      "dieselPrice": 1865,
      "lpgPrice": 1240,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.53,
    "longitude": 127.5946
  },
  {
    "slug": "괴산-both",
    "name": "괴산휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1271,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.6675,
    "longitude": 127.6366
  },
  {
    "slug": "문경-both",
    "name": "문경휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1854,
      "dieselPrice": 1843,
      "lpgPrice": 1240,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.716,
    "longitude": 128.5595
  },
  {
    "slug": "남성주참외-both",
    "name": "남성주참외휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 31,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1853,
      "lpgPrice": 1246,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.697,
    "longitude": 128.4169
  },
  {
    "slug": "서여주-both",
    "name": "서여주휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 38,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.4045,
    "longitude": 127.3686
  },
  {
    "slug": "성주-both",
    "name": "성주휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1856,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.2828,
    "longitude": 127.4452
  },
  {
    "slug": "남한강-both",
    "name": "남한강휴게소",
    "direction": "하행",
    "directionName": "마산방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 52,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1874,
      "dieselPrice": 1863,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.2815,
    "longitude": 127.589
  },
  {
    "slug": "칠서-both",
    "name": "칠서휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 59,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.2264,
    "longitude": 128.842
  },
  {
    "slug": "선산-both-1",
    "name": "선산휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 66,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1140,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.6954,
    "longitude": 128.5964
  },
  {
    "slug": "충주-both-1",
    "name": "충주휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 73,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1862,
      "lpgPrice": 1259,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.7781,
    "longitude": 127.4383
  },
  {
    "slug": "괴산-both-1",
    "name": "괴산휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 80,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.6701,
    "longitude": 127.3434
  },
  {
    "slug": "문경-both-1",
    "name": "문경휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 87,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1839,
      "dieselPrice": 1828,
      "lpgPrice": 1167,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.4706,
    "longitude": 128.3988
  },
  {
    "slug": "남성주참외-both-1",
    "name": "남성주참외휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 94,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1853,
      "lpgPrice": 1246,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.4292,
    "longitude": 128.5366
  },
  {
    "slug": "서여주-both-1",
    "name": "서여주휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 101,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.3606,
    "longitude": 127.6585
  },
  {
    "slug": "성주-both-1",
    "name": "성주휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 108,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1856,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.503,
    "longitude": 127.6389
  },
  {
    "slug": "남한강-both-1",
    "name": "남한강휴게소",
    "direction": "하행",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 115,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1874,
      "dieselPrice": 1863,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.5635,
    "longitude": 127.5083
  },
  {
    "slug": "용인-busan",
    "name": "용인휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 122,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1898,
      "dieselPrice": 1896,
      "lpgPrice": 1228,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.4863,
    "longitude": 127.387
  },
  {
    "slug": "여주-busan",
    "name": "여주휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 129,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.3425,
    "longitude": 127.3863
  },
  {
    "slug": "횡성-busan",
    "name": "횡성휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 136,
    "signatureMenu": {
      "name": "횡성한우 떡더덕스테이크",
      "price": 15000,
      "description": "횡성 한우의 풍부한 육즙과 향긋한 더덕이 조화를 이루는 고품격 정식입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1848,
      "dieselPrice": 1838,
      "lpgPrice": 1223,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.6022,
    "longitude": 128.8647
  },
  {
    "slug": "문막-busan",
    "name": "문막휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 143,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.6615,
    "longitude": 128.9958
  },
  {
    "slug": "평창-busan",
    "name": "평창휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 150,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1850,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.8038,
    "longitude": 129.0167
  },
  {
    "slug": "강릉-busan",
    "name": "강릉휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1219,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.8983,
    "longitude": 128.9083
  },
  {
    "slug": "안산-busan",
    "name": "안산휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 1869,
      "dieselPrice": 1859,
      "lpgPrice": 1241,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.5201,
    "longitude": 127.4125
  },
  {
    "slug": "용인-seoul",
    "name": "용인휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 171,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1898,
      "dieselPrice": 1896,
      "lpgPrice": 1228,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.3822,
    "longitude": 127.3717
  },
  {
    "slug": "문막-seoul",
    "name": "문막휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 178,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1839,
      "dieselPrice": 1827,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.6113,
    "longitude": 128.8234
  },
  {
    "slug": "여주-seoul",
    "name": "여주휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 185,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1848,
      "dieselPrice": 1838,
      "lpgPrice": 1223,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.2936,
    "longitude": 127.6081
  },
  {
    "slug": "횡성-seoul",
    "name": "횡성휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 192,
    "signatureMenu": {
      "name": "횡성한우 떡더덕스테이크",
      "price": 15000,
      "description": "횡성 한우의 풍부한 육즙과 향긋한 더덕이 조화를 이루는 고품격 정식입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.7624,
    "longitude": 129.0256
  },
  {
    "slug": "평창-seoul",
    "name": "평창휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 199,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1850,
      "lpgPrice": 1219,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.8834,
    "longitude": 128.9479
  },
  {
    "slug": "강릉-seoul",
    "name": "강릉휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 206,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.8834,
    "longitude": 128.8041
  },
  {
    "slug": "덕평-seoul",
    "name": "덕평휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 213,
    "signatureMenu": {
      "name": "덕평 소고기국밥",
      "price": 9000,
      "description": "얼큰하고 개운한 소고기 육수에 콩나물과 시래기를 듬뿍 넣었습니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 2078,
      "dieselPrice": 2069,
      "lpgPrice": 1217,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.4244,
    "longitude": 127.3687
  },
  {
    "slug": "안산-seoul",
    "name": "안산휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 220,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 1874,
      "dieselPrice": 1864,
      "lpgPrice": 1241,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": true
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.2936,
    "longitude": 127.4285
  },
  {
    "slug": "안동-busan",
    "name": "안동휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 227,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1172,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.4355,
    "longitude": 128.5582
  },
  {
    "slug": "군위-busan",
    "name": "군위휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 234,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.8395,
    "longitude": 128.748
  },
  {
    "slug": "치악-busan",
    "name": "치악휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 241,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1862,
      "dieselPrice": 1853,
      "lpgPrice": 1214,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.8581,
    "longitude": 128.9818
  },
  {
    "slug": "단양팔경-busan",
    "name": "단양팔경휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 248,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1837,
      "dieselPrice": 1832,
      "lpgPrice": 1213,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.5603,
    "longitude": 127.486
  },
  {
    "slug": "원주-busan",
    "name": "원주휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 255,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1266,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.8038,
    "longitude": 128.7353
  },
  {
    "slug": "춘천-busan",
    "name": "춘천휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 262,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.6615,
    "longitude": 128.7562
  },
  {
    "slug": "동명-busan",
    "name": "동명휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 269,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1128,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.4264,
    "longitude": 128.5169
  },
  {
    "slug": "안동-both",
    "name": "안동휴게소",
    "direction": "하행",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 276,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.5047,
    "longitude": 128.6376
  },
  {
    "slug": "군위-both",
    "name": "군위휴게소",
    "direction": "하행",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 283,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 35.9436,
    "longitude": 128.7327
  },
  {
    "slug": "치악-both",
    "name": "치악휴게소",
    "direction": "하행",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 290,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1862,
      "dieselPrice": 1853,
      "lpgPrice": 1214,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.9015,
    "longitude": 128.8859
  },
  {
    "slug": "단양팔경-both",
    "name": "단양팔경휴게소",
    "direction": "하행",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 297,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1848,
      "lpgPrice": 1172,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.503,
    "longitude": 127.3977
  },
  {
    "slug": "홍천강-both",
    "name": "홍천강휴게소",
    "direction": "하행",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 304,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.6986,
    "longitude": 128.7358
  },
  {
    "slug": "원주-both",
    "name": "원주휴게소",
    "direction": "하행",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 311,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1862,
      "dieselPrice": 1849,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.605,
    "longitude": 128.845
  },
  {
    "slug": "동명-both",
    "name": "동명휴게소",
    "direction": "하행",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 318,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.4706,
    "longitude": 128.6124
  },
  {
    "slug": "홍천-seoul",
    "name": "홍천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
    "locationKm": 325,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1255,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.5994,
    "longitude": 127.1243
  },
  {
    "slug": "내린천-seoul",
    "name": "내린천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
    "locationKm": 332,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1255,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.7074,
    "longitude": 127.0294
  },
  {
    "slug": "홍천-both",
    "name": "홍천휴게소",
    "direction": "하행",
    "directionName": "양양방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
    "locationKm": 339,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1255,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.6859,
    "longitude": 126.8872
  },
  {
    "slug": "내린천-both",
    "name": "내린천휴게소",
    "direction": "하행",
    "directionName": "양양방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
    "locationKm": 346,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1255,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.5546,
    "longitude": 126.8285
  },
  {
    "slug": "donghae-both",
    "name": "동해휴게소",
    "direction": "하행",
    "directionName": "동해방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 353,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1854,
      "lpgPrice": 1229,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.6195,
    "longitude": 128.8053
  },
  {
    "slug": "구정-both",
    "name": "구정휴게소",
    "direction": "하행",
    "directionName": "동해방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 10,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1857,
      "dieselPrice": 1855,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.6208,
    "longitude": 128.9491
  },
  {
    "slug": "포항-both",
    "name": "포항휴게소",
    "direction": "하행",
    "directionName": "동해방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1859,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.5667,
    "longitude": 128.6553
  },
  {
    "slug": "옥계-both",
    "name": "옥계휴게소",
    "direction": "하행",
    "directionName": "속초방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1898,
      "dieselPrice": 1896,
      "lpgPrice": 1228,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.8728,
    "longitude": 128.9647
  },
  {
    "slug": "구정-both-1",
    "name": "구정휴게소",
    "direction": "하행",
    "directionName": "속초방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 31,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1855,
      "dieselPrice": 1845,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.8918,
    "longitude": 128.8221
  },
  {
    "slug": "영덕-both",
    "name": "영덕휴게소",
    "direction": "하행",
    "directionName": "속초방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 38,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1859,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.6063,
    "longitude": 128.3587
  },
  {
    "slug": "외동-both",
    "name": "외동휴게소",
    "direction": "하행",
    "directionName": "동해방향",
    "highwaySlug": "울산포항선",
    "highwayName": "울산포항고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.4688,
    "longitude": 128.4007
  },
  {
    "slug": "외동-both-1",
    "name": "외동휴게소",
    "direction": "하행",
    "directionName": "속초방향",
    "highwaySlug": "울산포항선",
    "highwayName": "울산포항고속도로",
    "locationKm": 52,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.4298,
    "longitude": 128.5392
  },
  {
    "slug": "성남-both",
    "name": "성남휴게소",
    "direction": "하행",
    "directionName": "퇴계원방향",
    "highwaySlug": "수도권제1순환선",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 59,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.3631,
    "longitude": 127.6595
  },
  {
    "slug": "시흥하늘-both",
    "name": "시흥하늘휴게소",
    "direction": "하행",
    "directionName": "퇴계원방향",
    "highwaySlug": "수도권제1순환선",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 66,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 1919,
      "dieselPrice": 1894,
      "lpgPrice": 1189,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 37.6579,
    "longitude": 127.097
  },
  {
    "slug": "구리-both",
    "name": "구리휴게소",
    "direction": "하행",
    "directionName": "퇴계원방향",
    "highwaySlug": "수도권제1순환선",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 73,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.716,
    "longitude": 126.9654
  },
  {
    "slug": "의왕청계-both",
    "name": "의왕청계휴게소",
    "direction": "하행",
    "directionName": "판교방향",
    "highwaySlug": "수도권제1순환선",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 80,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "현대오일뱅크",
      "gasolinePrice": 1865,
      "dieselPrice": 1855,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.484,
    "longitude": 127.3857
  },
  {
    "slug": "서하남-both",
    "name": "서하남휴게소",
    "direction": "하행",
    "directionName": "판교방향",
    "highwaySlug": "수도권제1순환선",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 87,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "S-OIL",
      "gasolinePrice": 1869,
      "dieselPrice": 1859,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.3401,
    "longitude": 127.3876
  },
  {
    "slug": "구리남양주-both",
    "name": "구리남양주휴게소",
    "direction": "하행",
    "directionName": "판교방향",
    "highwaySlug": "수도권제1순환선",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 94,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 37.4167,
    "longitude": 126.9694
  },
  {
    "slug": "시흥하늘-both-1",
    "name": "시흥하늘휴게소",
    "direction": "하행",
    "directionName": "판교방향",
    "highwaySlug": "수도권제1순환선",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 101,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 1919,
      "dieselPrice": 1894,
      "lpgPrice": 1189,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 37.4783,
    "longitude": 127.0994
  },
  {
    "slug": "장유-both",
    "name": "장유휴게소",
    "direction": "하행",
    "directionName": "냉정방향",
    "highwaySlug": "namhae",
    "highwayName": "남해제2지고속도로",
    "locationKm": 108,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.2928,
    "longitude": 128.8323
  },
  {
    "slug": "서부산-busan",
    "name": "서부산휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해제2지고속도로",
    "locationKm": 115,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "SK에너지",
      "gasolinePrice": 1896,
      "dieselPrice": 1854,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.3266,
    "longitude": 129.1053
  },
  {
    "slug": "부여백제-both",
    "name": "부여백제휴게소",
    "direction": "하행",
    "directionName": "공주방향",
    "highwaySlug": "서천공주선",
    "highwayName": "서천공주고속도로",
    "locationKm": 122,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1856,
      "lpgPrice": 1250,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 36.4548,
    "longitude": 127.2768
  },
  {
    "slug": "부여백제-both-1",
    "name": "부여백제휴게소",
    "direction": "하행",
    "directionName": "서천방향",
    "highwaySlug": "서천공주선",
    "highwayName": "서천공주고속도로",
    "locationKm": 129,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1856,
      "lpgPrice": 1250,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 36.3162,
    "longitude": 127.2385
  },
  {
    "slug": "벌곡-both",
    "name": "벌곡휴게소",
    "direction": "하행",
    "directionName": "논산방향",
    "highwaySlug": "honam",
    "highwayName": "호남선의 지고속도로",
    "locationKm": 136,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1189,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "샤워실",
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 36.209,
    "longitude": 127.3344
  },
  {
    "slug": "벌곡-both-1",
    "name": "벌곡휴게소",
    "direction": "하행",
    "directionName": "대전방향",
    "highwaySlug": "honam",
    "highwayName": "호남선의 지고속도로",
    "locationKm": 143,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1189,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "야외전망대",
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.2318,
    "longitude": 127.4764
  },
  {
    "slug": "현풍-seoul",
    "name": "현풍휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부내륙선의 지고속도로",
    "locationKm": 150,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "오징어 야채바",
        "price": 4000
      },
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1849,
      "lpgPrice": 1228,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "야외전망대",
      "반려견놀이터"
    ],
    "latitude": 35.8844,
    "longitude": 128.7508
  },
  {
    "slug": "현풍-both",
    "name": "현풍휴게소",
    "direction": "하행",
    "directionName": "현풍방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부내륙선의 지고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "수제 등심돈가스",
      "price": 9500,
      "description": "바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다."
    },
    "otherMenus": [
      {
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1217,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "반려견놀이터",
      "수면실",
      "약국"
    ],
    "latitude": 36.004,
    "longitude": 128.671
  },
  {
    "slug": "김해금관가야-both",
    "name": "김해금관가야휴게소",
    "direction": "하행",
    "directionName": "기장방향",
    "highwaySlug": "부산외곽순환선",
    "highwayName": "부산외곽순환고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "가마솥 비빔밥",
      "price": 8500,
      "description": "신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다."
    },
    "otherMenus": [
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "약국",
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.3686,
    "longitude": 128.6183
  },
  {
    "slug": "김해금관가야-both-1",
    "name": "김해금관가야휴게소",
    "direction": "하행",
    "directionName": "진영방향",
    "highwaySlug": "부산외곽순환선",
    "highwayName": "부산외곽순환고속도로",
    "locationKm": 171,
    "signatureMenu": {
      "name": "해물 순두부찌개",
      "price": 8000,
      "description": "얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다."
    },
    "otherMenus": [
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "약국",
      "수유실",
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 37.4218,
    "longitude": 127.3685
  },
  {
    "slug": "김제-both",
    "name": "김제휴게소",
    "direction": "하행",
    "directionName": "익산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 178,
    "signatureMenu": {
      "name": "추억의 옛날 우동",
      "price": 6000,
      "description": "두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다."
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      },
      {
        "name": "버터구이 통감자",
        "price": 4500
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "전기차충전소"
    ],
    "latitude": 35.7025,
    "longitude": 127.0604
  },
  {
    "slug": "김제-both-1",
    "name": "김제휴게소",
    "direction": "하행",
    "directionName": "포항방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 185,
    "signatureMenu": {
      "name": "가마솥 소고기국밥",
      "price": 9000,
      "description": "전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다."
    },
    "otherMenus": [
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "전기차충전소",
      "ATM",
      "샤워실"
    ],
    "latitude": 35.6847,
    "longitude": 127.2031
  }
];

export interface CctvPoint {
  id: string;
  name: string;
  highwaySlug: string;
  highwayName: string;
  locationKm: number;
  direction: string;
  status: "smooth" | "slow" | "congested";
  speedLimit: number;
  currentSpeed: number;
  weather: "clear" | "rainy" | "snowy" | "foggy";
  temp: number;
  videoUrl: string;
  x: number;
  y: number;
}

export const cctvPoints: CctvPoint[] = [
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
    name: "기흥IC 부근",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 382,
    direction: "부산방향",
    status: "slow",
    speedLimit: 110,
    currentSpeed: 75,
    weather: "clear",
    temp: 25.1,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.13527,
    y: 37.03472
  },
  {
    id: "cctv-gb-03",
    name: "안성IC 부근",
    highwaySlug: "gyeongbu",
    highwayName: "경부고속도로",
    locationKm: 361,
    direction: "부산방향",
    status: "congested",
    speedLimit: 110,
    currentSpeed: 38,
    weather: "rainy",
    temp: 21.0,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.18556,
    y: 36.78250
  },
  {
    id: "cctv-yd-01",
    name: "마성터널 진입구",
    highwaySlug: "yeongdong",
    highwayName: "영동고속도로",
    locationKm: 42,
    direction: "강릉방향",
    status: "smooth",
    speedLimit: 100,
    currentSpeed: 96,
    weather: "clear",
    temp: 23.8,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.22167,
    y: 37.24167
  },
  {
    id: "cctv-yd-02",
    name: "용인IC 부근",
    highwaySlug: "yeongdong",
    highwayName: "영동고속도로",
    locationKm: 47,
    direction: "강릉방향",
    status: "slow",
    speedLimit: 100,
    currentSpeed: 68,
    weather: "clear",
    temp: 24.0,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.60833,
    y: 37.24333
  },
  {
    id: "cctv-sh-01",
    name: "서해대교 시점",
    highwaySlug: "seohaean",
    highwayName: "서해안고속도로",
    locationKm: 271,
    direction: "목포방향",
    status: "smooth",
    speedLimit: 110,
    currentSpeed: 105,
    weather: "foggy",
    temp: 19.8,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 126.81556,
    y: 36.95389
  },
  {
    id: "cctv-sh-02",
    name: "서해대교 중앙",
    highwaySlug: "seohaean",
    highwayName: "서해안고속도로",
    locationKm: 275,
    direction: "목포방향",
    status: "smooth",
    speedLimit: 110,
    currentSpeed: 108,
    weather: "clear",
    temp: 22.0,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 126.68750,
    y: 36.91806
  },
  {
    id: "cctv-jb-01",
    name: "서이천IC 부근",
    highwaySlug: "jungbu",
    highwayName: "중부고속도로",
    locationKm: 320,
    direction: "대전방향",
    status: "smooth",
    speedLimit: 110,
    currentSpeed: 101,
    weather: "clear",
    temp: 23.0,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.42639,
    y: 36.43806
  },
  {
    id: "cctv-jb-02",
    name: "곤지암IC 부근",
    highwaySlug: "jungbu",
    highwayName: "중부고속도로",
    locationKm: 334,
    direction: "대전방향",
    status: "slow",
    speedLimit: 110,
    currentSpeed: 72,
    weather: "clear",
    temp: 22.5,
    videoUrl: "/videos/cctv_sample.mp4",
    x: 127.60833,
    y: 37.24333
  }
];

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

export interface TravelTime {
  from: string;
  to: string;
  highwayName: string;
  distanceKm: number;
  normalTimeMin: number;
  currentTimeMin: number;
  status: "smooth" | "slow" | "congested";
}

export interface Incident {
  id: string;
  highwayName: string;
  highwaySlug: string;
  location: string;
  direction: string;
  type: "accident" | "construction" | "faulty-car";
  description: string;
  laneBlocked: string;
  startedAt: string;
}

export const travelTimes: TravelTime[] = [
  { from: "서울", to: "부산", highwayName: "경부선", distanceKm: 396, normalTimeMin: 260, currentTimeMin: 275, status: "smooth" },
  { from: "서울", to: "대전", highwayName: "경부선", distanceKm: 142, normalTimeMin: 95, currentTimeMin: 115, status: "slow" },
  { from: "서울", to: "광주", highwayName: "경부/호남선", distanceKm: 292, normalTimeMin: 200, currentTimeMin: 215, status: "smooth" },
  { from: "서울", to: "강릉", highwayName: "영동선", distanceKm: 220, normalTimeMin: 150, currentTimeMin: 195, status: "congested" },
  { from: "부산", to: "서울", highwayName: "경부선", distanceKm: 396, normalTimeMin: 260, currentTimeMin: 270, status: "smooth" },
  { from: "광주", to: "서울", highwayName: "호남/경부선", distanceKm: 292, normalTimeMin: 200, currentTimeMin: 205, status: "smooth" },
];

export const incidents: Incident[] = [
  { id: "inc-01", highwayName: "경부고속도로", highwaySlug: "gyeongbu", location: "천안IC 부근", direction: "부산방향", type: "accident", description: "승용차 간 3중 추돌 사고 처리 중", laneBlocked: "1차로 점유", startedAt: "10분 전" },
  { id: "inc-02", highwayName: "영동고속도로", highwaySlug: "yeongdong", location: "양지터널 부근", direction: "강릉방향", type: "construction", description: "노면 보수 공사 진행 중", laneBlocked: "갓길 및 3차로 통제", startedAt: "30분 전" },
  { id: "inc-03", highwayName: "서해안고속도로", highwaySlug: "seohaean", location: "서해대교 중앙", direction: "서울방향", type: "faulty-car", description: "고장 화물차량 정차", laneBlocked: "갓길 점유", startedAt: "5분 전" }
];
