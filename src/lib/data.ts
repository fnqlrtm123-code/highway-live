// Korea Highway and Rest Area Data (Dynamically Generated from curStateStation and 0503 OpenAPI)
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
    "description": "대한민국의 경제 동맥이자 핵심 종축 고속도로로 서울과 부산을 연결합니다."
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
    "slug": "gwangju-daegu",
    "name": "광주대구고속도로",
    "number": "12",
    "length": "176.8 km",
    "start": "광주",
    "end": "대구",
    "description": "호남과 영남을 동서로 잇는 최초의 동서 화합 고속도로입니다."
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
    "slug": "honam",
    "name": "호남고속도로",
    "number": "25",
    "length": "194.2 km",
    "start": "순천",
    "end": "논산",
    "description": "호남 지방과 수도권을 연결하는 중요한 남북 도로입니다."
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
    "slug": "tongyeong-daejeon",
    "name": "통영대전고속도로",
    "number": "35",
    "length": "215.3 km",
    "start": "통영",
    "end": "대전",
    "description": "대전에서 출발해 전북 무주, 경남 산청을 지나 남해안 통영까지 연결합니다."
  },
  {
    "slug": "jungbunaeryuk",
    "name": "중부내륙고속도로",
    "number": "45",
    "length": "266.3 km",
    "start": "내서",
    "end": "양평",
    "description": "한반도 내륙의 중심부를 종단하여 경남 창원과 경기도 양평을 연결합니다."
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
    "slug": "donghae",
    "name": "동해고속도로",
    "number": "65",
    "length": "204.0 km",
    "start": "부산",
    "end": "속초",
    "description": "동해안을 따라 해안 도시들을 남북으로 연결합니다."
  },
  {
    "slug": "namhae-branch-2",
    "name": "남해제2지선고속도로",
    "number": "104",
    "length": "20.6 km",
    "start": "냉정",
    "end": "사상",
    "description": "김해 냉정과 부산 사상을 최단으로 이어 통행량을 분산합니다."
  },
  {
    "slug": "honam-branch",
    "name": "호남고속도로지선",
    "number": "251",
    "length": "54.0 km",
    "start": "논산",
    "end": "대전",
    "description": "논산과 대전을 이어 호남고속도로의 교통을 충청권과 연결합니다."
  },
  {
    "slug": "jungbunaeryuk-branch",
    "name": "중부내륙고속도로지선",
    "number": "451",
    "length": "30.0 km",
    "start": "현풍",
    "end": "대구",
    "description": "중부내륙선 and 대구광역시를 연결하는 노선입니다."
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
    "slug": "muan-gwangju",
    "name": "무안광주고속도로",
    "number": "12",
    "length": "41.3 km",
    "start": "무안",
    "end": "광주",
    "description": "전남 무안국제공항과 광주광역시를 빠르게 잇는 노선입니다."
  },
  {
    "slug": "seosanyeongdeogseon",
    "name": "서산영덕고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "서산영덕고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
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
    "slug": "seocheon-gongju",
    "name": "서천공주고속도로",
    "number": "151",
    "length": "61.5 km",
    "start": "서천",
    "end": "공주",
    "description": "충남 서천과 공주를 직결하여 보령 및 충남 내륙 접근성을 높입니다."
  },
  {
    "slug": "capital-circular-1",
    "name": "수도권제1순환고속도로",
    "number": "100",
    "length": "128.0 km",
    "start": "성남",
    "end": "성남",
    "description": "서울특별시 외곽을 고리 모양으로 연결하는 순환형 고속도로입니다."
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
    "slug": "suncheon-wanju",
    "name": "순천완주고속도로",
    "number": "27",
    "length": "117.8 km",
    "start": "순천",
    "end": "완주",
    "description": "전남 순천과 전북 완주를 남북으로 신속하게 연결하는 고속도로입니다."
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
    "slug": "donghae-ulsan-pohang",
    "name": "동해고속도로(울산포항)",
    "number": "65",
    "length": "53.7 km",
    "start": "울산",
    "end": "포항",
    "description": "울산과 경북 포항을 직접 연결하는 동해안 고속도로입니다."
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
    "slug": "pyeongtaegpajuseon",
    "name": "평택파주고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "평택파주고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "pyeongtaegsiheungseon",
    "name": "평택시흥고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "평택시흥고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "nonsancheonanseon-honamseon",
    "name": "논산천안선,호남고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "논산천안선,호남고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "incheongugjegonghangseon",
    "name": "인천국제공항고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "인천국제공항고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "sangjuyeongcheonseon",
    "name": "상주영천고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "상주영천고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  },
  {
    "slug": "busan-outer-circular",
    "name": "부산외곽순환고속도로",
    "number": "600",
    "length": "48.8 km",
    "start": "진영",
    "end": "기장",
    "description": "부산외곽 지역을 순환하여 남해선과 동해선을 직접 잇는 우회 도로입니다."
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
    "slug": "sejongpocheonseon",
    "name": "세종포천고속도로",
    "number": "0",
    "length": "100.0 km",
    "start": "기점",
    "end": "종점",
    "description": "세종포천고속도로는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다."
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    "slug": "seoulmannam-busan",
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
      "쉼터",
      "ATM",
      "열린매장(간식)"
    ],
    "latitude": 37.5665,
    "longitude": 127.128
  },
  {
    "slug": "jugjeon-seoul",
    "name": "죽전휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
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
      "수유실",
      "세차장",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.54,
    "longitude": 127.5993
  },
  {
    "slug": "giheung-busan",
    "name": "기흥휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "기흥 명품 수제돈가스",
      "price": 9500,
      "description": "국산 돼지 등심을 바삭하게 튀겨내어 특제 과일 소스를 곁들인 수제 돈가스입니다.",
      "isExFood": true
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
      "수유실",
      "세차장",
      "ATM",
      "열린매장(간식)"
    ],
    "latitude": 37.5502,
    "longitude": 127.4559
  },
  {
    "slug": "anseong-seoul",
    "name": "안성휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 362,
    "signatureMenu": {
      "name": "안성맞춤 한우국밥",
      "price": 9500,
      "description": "안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다.",
      "isExFood": true
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
      "lpgPrice": 1236,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점",
      "휴게소의원"
    ],
    "latitude": 37.0125,
    "longitude": 127.1352
  },
  {
    "slug": "anseong-busan",
    "name": "안성휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 362,
    "signatureMenu": {
      "name": "안성맞춤 한우국밥",
      "price": 9500,
      "description": "안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다.",
      "isExFood": true
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
      "gasolinePrice": 1833,
      "dieselPrice": 1824,
      "lpgPrice": 1165,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.0142,
    "longitude": 127.1328
  },
  {
    "slug": "ibjanggeobongpodo-seoul",
    "name": "입장거봉포도휴게소",
    "direction": "상행",
    "directionName": "서울방향",
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
      "gasolinePrice": 1839,
      "dieselPrice": 1839,
      "lpgPrice": 1226,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 37.27,
    "longitude": 127.5608
  },
  {
    "slug": "manghyang-busan",
    "name": "망향휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 340,
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
      "gasolinePrice": 1836,
      "dieselPrice": 1835,
      "lpgPrice": 1118,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "경정비",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.8524,
    "longitude": 127.1728
  },
  {
    "slug": "cheonansamgeori-seoul",
    "name": "천안삼거리휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
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
      },
      {
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1839,
      "dieselPrice": 1835,
      "lpgPrice": 1123,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "약국",
      "세차장",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.4489,
    "longitude": 127.4976
  },
  {
    "slug": "cheonanhodu-busan",
    "name": "천안호두휴게소",
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
      "gasolinePrice": 1893,
      "dieselPrice": 1882,
      "lpgPrice": 1247,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.4988,
    "longitude": 127.3627
  },
  {
    "slug": "cheongju-seoul",
    "name": "청주휴게소",
    "direction": "상행",
    "directionName": "서울방향",
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
      "gasolinePrice": 1853,
      "dieselPrice": 1842,
      "lpgPrice": 1184,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.699,
    "longitude": 127.353
  },
  {
    "slug": "ogsan-busan",
    "name": "옥산휴게소",
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
      "gasolinePrice": 1854,
      "dieselPrice": 1844,
      "lpgPrice": 1175,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "수유실",
      "경정비",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.5556,
    "longitude": 127.3638
  },
  {
    "slug": "jugam-seoul",
    "name": "죽암휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
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
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1848,
      "lpgPrice": 1089,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "경정비",
      "ATM"
    ],
    "latitude": 36.4872,
    "longitude": 127.4904
  },
  {
    "slug": "jugam-busan",
    "name": "죽암휴게소",
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
      "gasolinePrice": 1859,
      "dieselPrice": 1848,
      "lpgPrice": 1089,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.5567,
    "longitude": 127.6163
  },
  {
    "slug": "sintanjin-seoul",
    "name": "신탄진휴게소",
    "direction": "상행",
    "directionName": "서울방향",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "경정비",
      "ATM",
      "편의점"
    ],
    "latitude": 36.4134,
    "longitude": 127.5206
  },
  {
    "slug": "ogcheon-busan",
    "name": "옥천휴게소",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1199,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "수유실",
      "ex-화물차라운지",
      "경정비",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.7858,
    "longitude": 127.5102
  },
  {
    "slug": "ogcheon-seoul",
    "name": "옥천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "샤워실",
      "수유실",
      "경정비",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.7347,
    "longitude": 127.3757
  },
  {
    "slug": "geumgang-busan",
    "name": "금강휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 122,
    "signatureMenu": {
      "name": "금강 인삼갈비탕",
      "price": 12000,
      "description": "금산 인삼과 부드러운 소갈비가 어우러진 휴게소 대표 보양 갈비탕입니다.",
      "isExFood": true
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
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "경정비",
      "ATM"
    ],
    "latitude": 36.594,
    "longitude": 127.3461
  },
  {
    "slug": "hwanggan-busan",
    "name": "황간휴게소",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 36.493,
    "longitude": 127.4484
  },
  {
    "slug": "hwanggan-seoul",
    "name": "황간휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
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
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.5246,
    "longitude": 127.5887
  },
  {
    "slug": "chupungryeong-busan",
    "name": "추풍령휴게소",
    "direction": "하행",
    "directionName": "부산방향",
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
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM"
    ],
    "latitude": 36.5985,
    "longitude": 128.6539
  },
  {
    "slug": "chupungryeong-seoul",
    "name": "추풍령휴게소",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1193,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "경정비",
      "내고장특산물"
    ],
    "latitude": 36.7129,
    "longitude": 128.5668
  },
  {
    "slug": "chilgog-busan",
    "name": "칠곡휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "칠곡 평사 사골우거지국밥",
      "price": 8500,
      "description": "오랜 시간 우려낸 진한 사골 육수에 국내산 우거지를 넣어 얼큰하게 끓였습니다.",
      "isExFood": true
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
      "gasolinePrice": 1844,
      "dieselPrice": 1833,
      "lpgPrice": 1160,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.7015,
    "longitude": 128.4234
  },
  {
    "slug": "chilgog-seoul",
    "name": "칠곡휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "칠곡 평사 사골우거지국밥",
      "price": 8500,
      "description": "오랜 시간 우려낸 진한 사골 육수에 국내산 우거지를 넣어 얼큰하게 끓였습니다.",
      "isExFood": true
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
      "샤워실",
      "세탁실",
      "수유실",
      "세차장",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.5747,
    "longitude": 128.3556
  },
  {
    "slug": "gyeongsan-seoul",
    "name": "경산휴게소",
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
      "lpgPrice": 1199,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "경정비",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.4491,
    "longitude": 128.4257
  },
  {
    "slug": "pyeongsa-busan",
    "name": "평사휴게소",
    "direction": "하행",
    "directionName": "부산방향",
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
      "gasolinePrice": 1899,
      "dieselPrice": 1899,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM"
    ],
    "latitude": 36.4402,
    "longitude": 128.5692
  },
  {
    "slug": "geoncheon-seoul",
    "name": "건천휴게소",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.5561,
    "longitude": 128.6543
  },
  {
    "slug": "geoncheon-busan",
    "name": "건천휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 192,
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
      "gasolinePrice": 1863,
      "dieselPrice": 1852,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점"
    ],
    "latitude": 36.6904,
    "longitude": 128.6026
  },
  {
    "slug": "gyeongju-busan",
    "name": "경주휴게소",
    "direction": "하행",
    "directionName": "부산방향",
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
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1208,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "편의점",
      "기타"
    ],
    "latitude": 36.7195,
    "longitude": 128.4618
  },
  {
    "slug": "eonyang-seoul",
    "name": "언양휴게소",
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
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": 1264,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 35.5795,
    "longitude": 129.167
  },
  {
    "slug": "yangsan-seoul",
    "name": "양산휴게소",
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
      "gasolinePrice": 1859,
      "dieselPrice": 1849,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.1388,
    "longitude": 128.5803
  },
  {
    "slug": "jinyeong-busan",
    "name": "진영휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
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
      "brand": "S-OIL",
      "gasolinePrice": 1868,
      "dieselPrice": 1838,
      "lpgPrice": 1063,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.0901,
    "longitude": 128.7156
  },
  {
    "slug": "jinyeong-busan-1",
    "name": "진영휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1228,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "경정비",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 35.1777,
    "longitude": 128.8297
  },
  {
    "slug": "munsan-busan",
    "name": "문산휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
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
      "gasolinePrice": 1889,
      "dieselPrice": 1853,
      "lpgPrice": 1149,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 35.321,
    "longitude": 128.8176
  },
  {
    "slug": "sacheon-busan",
    "name": "사천휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1099,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.3883,
    "longitude": 128.6905
  },
  {
    "slug": "sacheon-busan-1",
    "name": "사천휴게소",
    "direction": "하행",
    "directionName": "순천방향",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1099,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.3177,
    "longitude": 128.5652
  },
  {
    "slug": "seomjingang-busan",
    "name": "섬진강휴게소",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "버스환승",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 34.7519,
    "longitude": 126.3273
  },
  {
    "slug": "seomjingang-busan-1",
    "name": "섬진강휴게소",
    "direction": "하행",
    "directionName": "순천방향",
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
      "버스환승",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 34.6673,
    "longitude": 126.4437
  },
  {
    "slug": "geochang-seoul",
    "name": "거창휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
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
      "수유실",
      "ATM"
    ],
    "latitude": 35.1418,
    "longitude": 128.8073
  },
  {
    "slug": "geochang-busan",
    "name": "거창휴게소",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 35.2828,
    "longitude": 128.8358
  },
  {
    "slug": "jirisan-seoul",
    "name": "지리산휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1199,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.9688,
    "longitude": 127.188
  },
  {
    "slug": "jirisan-busan",
    "name": "지리산휴게소",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.936,
    "longitude": 127.048
  },
  {
    "slug": "hwaseong-seoul",
    "name": "화성휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "세차장",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 37.39,
    "longitude": 127.3702
  },
  {
    "slug": "hwaseong-busan",
    "name": "화성휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "세차장",
      "ATM"
    ],
    "latitude": 37.2763,
    "longitude": 127.4583
  },
  {
    "slug": "seosan-busan",
    "name": "서산휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 311,
    "signatureMenu": {
      "name": "서산 어리굴젓 백반",
      "price": 10000,
      "description": "서산 특산물인 짭조름하고 매콤한 어리굴젓과 따끈한 흰쌀밥 정식입니다.",
      "isExFood": true
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
      "lpgPrice": 1155,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점"
    ],
    "latitude": 37.289,
    "longitude": 127.6016
  },
  {
    "slug": "seosan-seoul",
    "name": "서산휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 242,
    "signatureMenu": {
      "name": "서산 어리굴젓 백반",
      "price": 10000,
      "description": "서산 특산물인 짭조름하고 매콤한 어리굴젓과 따끈한 흰쌀밥 정식입니다.",
      "isExFood": true
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "경정비",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.7125,
    "longitude": 126.5428
  },
  {
    "slug": "daecheon-seoul",
    "name": "대천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "쉼터",
      "경정비",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 36.478,
    "longitude": 127.4633
  },
  {
    "slug": "daecheon-busan",
    "name": "대천휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "brand": "SK에너지",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1245,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "경정비",
      "ATM"
    ],
    "latitude": 36.4857,
    "longitude": 127.3197
  },
  {
    "slug": "gunsan-seoul",
    "name": "군산휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "약국",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "기타"
    ],
    "latitude": 35.8427,
    "longitude": 126.9991
  },
  {
    "slug": "gunsan-busan",
    "name": "군산휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "gasolinePrice": 1837,
      "dieselPrice": 1831,
      "lpgPrice": 1239,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.2986,
    "longitude": 127.4223
  },
  {
    "slug": "gochanggoindol-busan",
    "name": "고창고인돌휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1241,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.6811,
    "longitude": 127.1931
  },
  {
    "slug": "gochanggoindol-seoul",
    "name": "고창고인돌휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 35.7848,
    "longitude": 127.2927
  },
  {
    "slug": "hampyeongcheonji-seoul",
    "name": "함평천지휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "약국",
      "내고장특산물",
      "편의점",
      "기타"
    ],
    "latitude": 37.5143,
    "longitude": 127.6296
  },
  {
    "slug": "hampyeongcheonji-busan",
    "name": "함평천지휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "gasolinePrice": 1893,
      "dieselPrice": 1831,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 34.9641,
    "longitude": 126.4385
  },
  {
    "slug": "igsanmireugsaji-both",
    "name": "익산미륵사지휴게소",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "기타"
    ],
    "latitude": 35.8836,
    "longitude": 127.0103
  },
  {
    "slug": "igsanmireugsaji-busan",
    "name": "익산미륵사지휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1125,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 35.7404,
    "longitude": 127.0236
  },
  {
    "slug": "jeongeubnogdujanggun-both",
    "name": "정읍녹두장군휴게소",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "기타"
    ],
    "latitude": 35.6742,
    "longitude": 127.1513
  },
  {
    "slug": "jeongeubnogdujanggun-busan",
    "name": "정읍녹두장군휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1845,
      "lpgPrice": 1145,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "기타"
    ],
    "latitude": 35.746,
    "longitude": 127.276
  },
  {
    "slug": "baegyangsa-both",
    "name": "백양사휴게소",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "약국",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 37.4792,
    "longitude": 127.6533
  },
  {
    "slug": "baegyangsa-busan",
    "name": "백양사휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "dieselPrice": 1845,
      "lpgPrice": 1135,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 37.5627,
    "longitude": 127.5362
  },
  {
    "slug": "gogseong-both",
    "name": "곡성휴게소",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "약국",
      "쉼터",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 34.9116,
    "longitude": 126.3472
  },
  {
    "slug": "gogseong-busan",
    "name": "곡성휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "gasolinePrice": 1869,
      "dieselPrice": 1855,
      "lpgPrice": 1200,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 34.7704,
    "longitude": 126.32
  },
  {
    "slug": "juam-busan",
    "name": "주암휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "gasolinePrice": 1869,
      "dieselPrice": 1853,
      "lpgPrice": 1200,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 34.6712,
    "longitude": 126.4242
  },
  {
    "slug": "juam-both",
    "name": "주암휴게소",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 94,
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 34.7052,
    "longitude": 126.5639
  },
  {
    "slug": "suncheon-busan",
    "name": "순천휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "편의점",
      "기타"
    ],
    "latitude": 34.8412,
    "longitude": 126.6108
  },
  {
    "slug": "hanamdeurim-both",
    "name": "하남드림휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 108,
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 37.5518,
    "longitude": 127.5771
  },
  {
    "slug": "icheonssal-both",
    "name": "이천쌀휴게소",
    "direction": "양방향",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1216,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.5378,
    "longitude": 127.4339
  },
  {
    "slug": "icheon-both",
    "name": "이천휴게소",
    "direction": "양방향",
    "directionName": "남이방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "기타"
    ],
    "latitude": 37.4098,
    "longitude": 127.3684
  },
  {
    "slug": "eumseong-both",
    "name": "음성휴게소",
    "direction": "양방향",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
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
      "lpgPrice": 1216,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.5089,
    "longitude": 127.412
  },
  {
    "slug": "eumseong-both-1",
    "name": "음성휴게소",
    "direction": "양방향",
    "directionName": "남이방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "약국",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.5025,
    "longitude": 127.5557
  },
  {
    "slug": "ochang-both",
    "name": "오창휴게소",
    "direction": "양방향",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
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
      "gasolinePrice": 1862,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.62,
    "longitude": 127.6387
  },
  {
    "slug": "ochang-both-1",
    "name": "오창휴게소",
    "direction": "양방향",
    "directionName": "남이방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.7533,
    "longitude": 127.5847
  },
  {
    "slug": "geumsaninsamraendeu-both",
    "name": "금산인삼랜드휴게소",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "버스환승",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.4931,
    "longitude": 127.3381
  },
  {
    "slug": "geumsaninsamraendeu-both-1",
    "name": "금산인삼랜드휴게소",
    "direction": "양방향",
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
      "lpgPrice": 1229,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "버스환승",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.3885,
    "longitude": 127.2394
  },
  {
    "slug": "deogyusan-both",
    "name": "덕유산휴게소",
    "direction": "양방향",
    "directionName": "대전방향",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.3123,
    "longitude": 127.4079
  },
  {
    "slug": "deogyusan-both-1",
    "name": "덕유산휴게소",
    "direction": "양방향",
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
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1212,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.2026,
    "longitude": 127.4103
  },
  {
    "slug": "sancheong-both",
    "name": "산청휴게소",
    "direction": "양방향",
    "directionName": "대전방향",
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
        "name": "버터구이 통감자",
        "price": 4500
      },
      {
        "name": "오징어 야채바",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "샤워실",
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "기타"
    ],
    "latitude": 35.1801,
    "longitude": 128.8308
  },
  {
    "slug": "sancheong-both-1",
    "name": "산청휴게소",
    "direction": "양방향",
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
      "dieselPrice": 1849,
      "lpgPrice": 1149,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "기타"
    ],
    "latitude": 35.3232,
    "longitude": 128.8161
  },
  {
    "slug": "chungju-both",
    "name": "충주휴게소",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "gasolinePrice": 1849,
      "dieselPrice": 1862,
      "lpgPrice": 1259,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.7871,
    "longitude": 127.4851
  },
  {
    "slug": "chungju-both-1",
    "name": "충주휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.7143,
    "longitude": 127.361
  },
  {
    "slug": "seonsan-both",
    "name": "선산휴게소",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1140,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "버스환승",
      "ATM",
      "편의점",
      "휴게소의원"
    ],
    "latitude": 36.5094,
    "longitude": 128.3712
  },
  {
    "slug": "seonsan-both-1",
    "name": "선산휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "버스환승",
      "ATM",
      "열린매장(간식)"
    ],
    "latitude": 36.4269,
    "longitude": 128.489
  },
  {
    "slug": "yeongsan-both",
    "name": "영산휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 35.1438,
    "longitude": 128.809
  },
  {
    "slug": "chilseo-both",
    "name": "칠서휴게소",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "경정비",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.2853,
    "longitude": 128.835
  },
  {
    "slug": "gangreung-busan",
    "name": "강릉휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1219,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 37.8971,
    "longitude": 128.9134
  },
  {
    "slug": "gangreung-seoul",
    "name": "강릉휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1848,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 37.8618,
    "longitude": 128.774
  },
  {
    "slug": "pyeongchang-seoul",
    "name": "평창휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 1858,
      "dieselPrice": 1850,
      "lpgPrice": 1219,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "버스환승",
      "ATM"
    ],
    "latitude": 37.7254,
    "longitude": 128.7283
  },
  {
    "slug": "pyeongchang-busan",
    "name": "평창휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 1858,
      "dieselPrice": 1850,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 37.6133,
    "longitude": 128.8184
  },
  {
    "slug": "hoengseong-busan",
    "name": "횡성휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 269,
    "signatureMenu": {
      "name": "횡성한우 떡더덕스테이크",
      "price": 15000,
      "description": "횡성 한우의 풍부한 육즙과 향긋한 더덕이 조화를 이루는 고품격 정식입니다.",
      "isExFood": true
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
      "gasolinePrice": 1848,
      "dieselPrice": 1838,
      "lpgPrice": 1223,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "버스환승",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.6285,
    "longitude": 128.9615
  },
  {
    "slug": "hoengseong-seoul",
    "name": "횡성휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 142,
    "signatureMenu": {
      "name": "횡성한우 떡더덕스테이크",
      "price": 15000,
      "description": "횡성 한우의 풍부한 육즙과 향긋한 더덕이 조화를 이루는 고품격 정식입니다.",
      "isExFood": true
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
      "내고장특산물",
      "버스환승",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.4628,
    "longitude": 127.9715
  },
  {
    "slug": "munmag-seoul",
    "name": "문막휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 1839,
      "dieselPrice": 1827,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 37.8808,
    "longitude": 128.9525
  },
  {
    "slug": "munmag-busan",
    "name": "문막휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "기타"
    ],
    "latitude": 37.8859,
    "longitude": 128.8088
  },
  {
    "slug": "yeoju-busan",
    "name": "여주휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 37.4297,
    "longitude": 127.3691
  },
  {
    "slug": "yeoju-seoul",
    "name": "여주휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 1848,
      "dieselPrice": 1838,
      "lpgPrice": 1223,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM"
    ],
    "latitude": 37.2969,
    "longitude": 127.4243
  },
  {
    "slug": "yongin-busan",
    "name": "용인휴게소",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 1853,
      "dieselPrice": 1846,
      "lpgPrice": 1228,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 37.2716,
    "longitude": 127.5659
  },
  {
    "slug": "yongin-seoul",
    "name": "용인휴게소",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "gasolinePrice": 1853,
      "dieselPrice": 1846,
      "lpgPrice": 1228,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "세차장",
      "ATM",
      "편의점"
    ],
    "latitude": 37.377,
    "longitude": 127.6637
  },
  {
    "slug": "chuncheon-busan",
    "name": "춘천휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터"
    ],
    "latitude": 37.8543,
    "longitude": 128.9855
  },
  {
    "slug": "hongcheongang-both",
    "name": "홍천강휴게소",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1239,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 37.8993,
    "longitude": 128.8489
  },
  {
    "slug": "chiag-busan",
    "name": "치악휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 1862,
      "dieselPrice": 1853,
      "lpgPrice": 1214,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 37.8087,
    "longitude": 128.7372
  },
  {
    "slug": "chiag-both",
    "name": "치악휴게소",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 1862,
      "dieselPrice": 1853,
      "lpgPrice": 1214,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 37.6658,
    "longitude": 128.7531
  },
  {
    "slug": "danyangpalgyeong-both",
    "name": "단양팔경휴게소",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 1849,
      "dieselPrice": 1848,
      "lpgPrice": 1172,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 37.2639,
    "longitude": 127.5243
  },
  {
    "slug": "danyangpalgyeong-busan",
    "name": "단양팔경휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 1837,
      "dieselPrice": 1832,
      "lpgPrice": 1213,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 37.3378,
    "longitude": 127.6476
  },
  {
    "slug": "andong-busan",
    "name": "안동휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "dieselPrice": 1848,
      "lpgPrice": 1172,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.6438,
    "longitude": 128.6394
  },
  {
    "slug": "andong-both",
    "name": "안동휴게소",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.7252,
    "longitude": 128.5208
  },
  {
    "slug": "gunwi-busan",
    "name": "군위휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.9645,
    "longitude": 128.4841
  },
  {
    "slug": "gunwi-both",
    "name": "군위휴게소",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.5278,
    "longitude": 128.3636
  },
  {
    "slug": "donghae-both",
    "name": "동해휴게소",
    "direction": "양방향",
    "directionName": "삼척방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "편의점"
    ],
    "latitude": 37.6062,
    "longitude": 128.8399
  },
  {
    "slug": "jangyu-both",
    "name": "장유휴게소",
    "direction": "양방향",
    "directionName": "서부산방향",
    "highwaySlug": "namhae-branch-2",
    "highwayName": "남해제2지선고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "휴게소의원"
    ],
    "latitude": 35.1292,
    "longitude": 128.7955
  },
  {
    "slug": "beolgog-both",
    "name": "벌곡휴게소",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "honam-branch",
    "highwayName": "호남고속도로지선",
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
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1189,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 36.3781,
    "longitude": 127.5319
  },
  {
    "slug": "beolgog-both-1",
    "name": "벌곡휴게소",
    "direction": "양방향",
    "directionName": "논산방향",
    "highwaySlug": "honam-branch",
    "highwayName": "호남고속도로지선",
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
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1189,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 36.4894,
    "longitude": 127.4408
  },
  {
    "slug": "hyeonpung-seoul",
    "name": "현풍휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "jungbunaeryuk-branch",
    "highwayName": "중부내륙고속도로지선",
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
      "gasolinePrice": 1858,
      "dieselPrice": 1846,
      "lpgPrice": 1258,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.9936,
    "longitude": 128.5148
  },
  {
    "slug": "hyeonpung-both",
    "name": "현풍휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk-branch",
    "highwayName": "중부내륙고속도로지선",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.8645,
    "longitude": 128.4515
  },
  {
    "slug": "dongmyeong-busan",
    "name": "동명휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.4463,
    "longitude": 128.4302
  },
  {
    "slug": "dongmyeong-both",
    "name": "동명휴게소",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 36.4425,
    "longitude": 128.574
  },
  {
    "slug": "hongseong-seoul",
    "name": "홍성휴게소",
    "direction": "상행",
    "directionName": "서울방향",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 37.3992,
    "longitude": 127.6676
  },
  {
    "slug": "hongseong-busan",
    "name": "홍성휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "gasolinePrice": 1837,
      "dieselPrice": 1833,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 36.4681,
    "longitude": 127.4774
  },
  {
    "slug": "yeongcheon-seoul",
    "name": "영천휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "수유실",
      "ex-화물차라운지",
      "내고장특산물",
      "편의점",
      "기타"
    ],
    "latitude": 36.7178,
    "longitude": 128.4567
  },
  {
    "slug": "yeongcheon-both",
    "name": "영천휴게소",
    "direction": "양방향",
    "directionName": "포항방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
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
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.6115,
    "longitude": 128.3599
  },
  {
    "slug": "seocheon-seoul",
    "name": "서천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
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
        "name": "매콤 떡볶이",
        "price": 4500
      },
      {
        "name": "바삭한 오징어 튀김",
        "price": 4000
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.2469,
    "longitude": 127.2759
  },
  {
    "slug": "seocheon-busan",
    "name": "서천휴게소",
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
      "수유실",
      "ATM",
      "편의점"
    ],
    "latitude": 36.2031,
    "longitude": 127.4129
  },
  {
    "slug": "gujeong-both",
    "name": "구정휴게소",
    "direction": "양방향",
    "directionName": "삼척방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점"
    ],
    "latitude": 37.6961,
    "longitude": 129.0153
  },
  {
    "slug": "mungyeong-both",
    "name": "문경휴게소",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "gasolinePrice": 1839,
      "dieselPrice": 1828,
      "lpgPrice": 1167,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": true
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 36.6631,
    "longitude": 128.6277
  },
  {
    "slug": "hampyeongnabi-busan",
    "name": "함평나비휴게소",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "muan-gwangju",
    "highwayName": "무안광주고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 34.9659,
    "longitude": 126.4556
  },
  {
    "slug": "hampyeongnabi-both",
    "name": "함평나비휴게소",
    "direction": "양방향",
    "directionName": "무안방향",
    "highwaySlug": "muan-gwangju",
    "highwayName": "무안광주고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1261,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 34.8909,
    "longitude": 126.3329
  },
  {
    "slug": "mungyeong-both-1",
    "name": "문경휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "기타"
    ],
    "latitude": 36.507,
    "longitude": 128.3724
  },
  {
    "slug": "gujeong-both-1",
    "name": "구정휴게소",
    "direction": "양방향",
    "directionName": "속초방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1845,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.6024,
    "longitude": 128.8621
  },
  {
    "slug": "namseongjuchamoe-both",
    "name": "남성주참외휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.4836,
    "longitude": 128.6238
  },
  {
    "slug": "namseongjuchamoe-both-1",
    "name": "남성주참외휴게소",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1853,
      "lpgPrice": 1246,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.6255,
    "longitude": 128.6472
  },
  {
    "slug": "sogrisan-both",
    "name": "속리산휴게소",
    "direction": "양방향",
    "directionName": "청주방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.7831,
    "longitude": 127.5246
  },
  {
    "slug": "hwaseo-both",
    "name": "화서휴게소",
    "direction": "양방향",
    "directionName": "영덕방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 36.6842,
    "longitude": 128.4017
  },
  {
    "slug": "jinanmaisan-both",
    "name": "진안마이산휴게소",
    "direction": "양방향",
    "directionName": "익산방향",
    "highwaySlug": "wanju-jangsu",
    "highwayName": "완주장수고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1216,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "편의점",
      "휴게소의원",
      "기타"
    ],
    "latitude": 35.7952,
    "longitude": 127.0008
  },
  {
    "slug": "jinanmaisan-both-1",
    "name": "진안마이산휴게소",
    "direction": "양방향",
    "directionName": "장수방향",
    "highwaySlug": "wanju-jangsu",
    "highwayName": "완주장수고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물"
    ],
    "latitude": 35.6847,
    "longitude": 127.0929
  },
  {
    "slug": "goseonggongryongnara-both",
    "name": "고성공룡나라휴게소",
    "direction": "양방향",
    "directionName": "통영방향",
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
      "lpgPrice": 1185,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 35.1166,
    "longitude": 128.7801
  },
  {
    "slug": "goseonggongryongnara-both-1",
    "name": "고성공룡나라휴게소",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 36.3584,
    "longitude": 127.5343
  },
  {
    "slug": "deogpyeong-both",
    "name": "덕평휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 241,
    "signatureMenu": {
      "name": "덕평 소고기국밥",
      "price": 9000,
      "description": "얼큰하고 개운한 소고기 육수에 콩나물과 시래기를 듬뿍 넣었습니다.",
      "isExFood": true
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.5441,
    "longitude": 127.5925
  },
  {
    "slug": "cheongtong-seoul",
    "name": "청통휴게소",
    "direction": "상행",
    "directionName": "대구방향",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.7089,
    "longitude": 128.436
  },
  {
    "slug": "wachon-both",
    "name": "와촌휴게소",
    "direction": "양방향",
    "directionName": "포항방향",
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
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.5893,
    "longitude": 128.3562
  },
  {
    "slug": "goesan-both",
    "name": "괴산휴게소",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.5186,
    "longitude": 127.3978
  },
  {
    "slug": "wonju-busan",
    "name": "원주휴게소",
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
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.6104,
    "longitude": 128.9261
  },
  {
    "slug": "wonju-both",
    "name": "원주휴게소",
    "direction": "양방향",
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
      "dieselPrice": 1846,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.7176,
    "longitude": 129.022
  },
  {
    "slug": "oggye-both",
    "name": "옥계휴게소",
    "direction": "양방향",
    "directionName": "속초방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
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
      "brand": "알뜰주유소",
      "gasolinePrice": 1853,
      "dieselPrice": 1846,
      "lpgPrice": 1228,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.8562,
    "longitude": 128.9837
  },
  {
    "slug": "goesan-both-1",
    "name": "괴산휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 290,
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.7842,
    "longitude": 127.46
  },
  {
    "slug": "gimcheon-seoul",
    "name": "김천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
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
      "gasolinePrice": 1865,
      "dieselPrice": 1855,
      "lpgPrice": 1195,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM"
    ],
    "latitude": 36.6305,
    "longitude": 128.3658
  },
  {
    "slug": "yesan-both",
    "name": "예산휴게소",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.2622,
    "longitude": 127.2631
  },
  {
    "slug": "yesan-both-1",
    "name": "예산휴게소",
    "direction": "양방향",
    "directionName": "당진방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 36.2006,
    "longitude": 127.3931
  },
  {
    "slug": "gongju-both",
    "name": "공주휴게소",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
    "locationKm": 318,
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.2767,
    "longitude": 127.5152
  },
  {
    "slug": "buyeobaegje-both",
    "name": "부여백제휴게소",
    "direction": "양방향",
    "directionName": "공주방향",
    "highwaySlug": "seocheon-gongju",
    "highwayName": "서천공주고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1250,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.4206,
    "longitude": 127.5171
  },
  {
    "slug": "buyeobaegje-both-1",
    "name": "부여백제휴게소",
    "direction": "양방향",
    "directionName": "서천방향",
    "highwaySlug": "seocheon-gongju",
    "highwayName": "서천공주고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1250,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.4999,
    "longitude": 127.3971
  },
  {
    "slug": "gongju-both-1",
    "name": "공주휴게소",
    "direction": "양방향",
    "directionName": "당진방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.4418,
    "longitude": 127.2655
  },
  {
    "slug": "moggam-seoul",
    "name": "목감휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점"
    ],
    "latitude": 37.363,
    "longitude": 127.3771
  },
  {
    "slug": "uiwang-seoul",
    "name": "의왕휴게소",
    "direction": "상행",
    "directionName": "일산방향",
    "highwaySlug": "capital-circular-1",
    "highwayName": "수도권제1순환고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "편의점"
    ],
    "latitude": 37.2676,
    "longitude": 127.4847
  },
  {
    "slug": "anseongmajchum-both",
    "name": "안성맞춤휴게소",
    "direction": "양방향",
    "directionName": "평택방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 10,
    "signatureMenu": {
      "name": "안성맞춤 한우국밥",
      "price": 9500,
      "description": "안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다.",
      "isExFood": true
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
      "lpgPrice": 1237,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
    },
    "facilities": [
      "샤워실",
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.3066,
    "longitude": 127.6232
  },
  {
    "slug": "anseongmajchum-both-1",
    "name": "안성맞춤휴게소",
    "direction": "양방향",
    "directionName": "제천방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "안성맞춤 한우국밥",
      "price": 9500,
      "description": "안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다.",
      "isExFood": true
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
      "dieselPrice": 1870,
      "lpgPrice": 1169,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.4441,
    "longitude": 127.6652
  },
  {
    "slug": "seohanamhaengbogdeurimswimteo-both",
    "name": "서하남행복드림쉼터휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "capital-circular-1",
    "highwayName": "수도권제1순환고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.5538,
    "longitude": 127.5722
  },
  {
    "slug": "yangyang-both",
    "name": "양양휴게소",
    "direction": "양방향",
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
        "name": "바삭바삭 소떡소떡",
        "price": 4000
      },
      {
        "name": "명품 호두과자(중)",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "편의점"
    ],
    "latitude": 37.8728,
    "longitude": 128.7873
  },
  {
    "slug": "yangyang-both-1",
    "name": "양양휴게소",
    "direction": "양방향",
    "directionName": "동해방향",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "편의점"
    ],
    "latitude": 37.7425,
    "longitude": 128.7263
  },
  {
    "slug": "haengdamdo-both",
    "name": "행담도휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "행담도 바지락칼국수",
      "price": 8000,
      "description": "서해안의 신선한 바지락으로 우려낸 시원하고 칼칼한 칼국수입니다.",
      "isExFood": true
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "약국",
      "경정비",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 36.2194,
    "longitude": 127.3114
  },
  {
    "slug": "gimcheon-busan",
    "name": "김천휴게소",
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
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM"
    ],
    "latitude": 36.4437,
    "longitude": 128.5763
  },
  {
    "slug": "haman-busan",
    "name": "함안휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
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
      "gasolinePrice": 1879,
      "dieselPrice": 1869,
      "lpgPrice": 1220,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 35.2264,
    "longitude": 128.842
  },
  {
    "slug": "jinju-busan",
    "name": "진주휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점"
    ],
    "latitude": 35.3577,
    "longitude": 128.7833
  },
  {
    "slug": "haman-busan-1",
    "name": "함안휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1276,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.3792,
    "longitude": 128.6411
  },
  {
    "slug": "seoyeoju-both",
    "name": "서여주휴게소",
    "direction": "양방향",
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
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.4467,
    "longitude": 127.372
  },
  {
    "slug": "seoyeoju-both-1",
    "name": "서여주휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.3084,
    "longitude": 127.4115
  },
  {
    "slug": "iseo-busan",
    "name": "이서휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "gasolinePrice": 1845,
      "dieselPrice": 1839,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.4197,
    "longitude": 127.009
  },
  {
    "slug": "iseo-both",
    "name": "이서휴게소",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.5133,
    "longitude": 127.1182
  },
  {
    "slug": "osu-both",
    "name": "오수휴게소",
    "direction": "양방향",
    "directionName": "완주방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "기타"
    ],
    "latitude": 35.9134,
    "longitude": 127.2686
  },
  {
    "slug": "osu-busan",
    "name": "오수휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 35.9739,
    "longitude": 127.138
  },
  {
    "slug": "hwangjeon-busan",
    "name": "황전휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "기타"
    ],
    "latitude": 34.8886,
    "longitude": 126.3316
  },
  {
    "slug": "hwangjeon-both",
    "name": "황전휴게소",
    "direction": "양방향",
    "directionName": "완주방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "기타"
    ],
    "latitude": 34.7448,
    "longitude": 126.3309
  },
  {
    "slug": "guri-seoul",
    "name": "구리휴게소",
    "direction": "상행",
    "directionName": "일산방향",
    "highwaySlug": "capital-circular-1",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 136,
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 37.2642,
    "longitude": 127.507
  },
  {
    "slug": "tongdosa-busan",
    "name": "통도사휴게소",
    "direction": "하행",
    "directionName": "부산방향",
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
      "lpgPrice": 1276,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 35.148,
    "longitude": 128.8123
  },
  {
    "slug": "sinpung-both",
    "name": "신풍휴게소",
    "direction": "양방향",
    "directionName": "당진방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "기타"
    ],
    "latitude": 36.4024,
    "longitude": 127.5252
  },
  {
    "slug": "myeoncheon-both",
    "name": "면천휴게소",
    "direction": "양방향",
    "directionName": "당진방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "기타"
    ],
    "latitude": 36.4969,
    "longitude": 127.4168
  },
  {
    "slug": "seongju-both",
    "name": "성주휴게소",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 36.6823,
    "longitude": 128.3998
  },
  {
    "slug": "seongju-both-1",
    "name": "성주휴게소",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1853,
      "lpgPrice": 1246,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 36.5444,
    "longitude": 128.359
  },
  {
    "slug": "boseongnogcha-busan",
    "name": "보성녹차휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae-yeongam-suncheon",
    "highwayName": "남해고속도로(영암순천)",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1261,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 34.6756,
    "longitude": 126.4103
  },
  {
    "slug": "boseongnogcha-both",
    "name": "보성녹차휴게소",
    "direction": "양방향",
    "directionName": "영암방향",
    "highwaySlug": "namhae-yeongam-suncheon",
    "highwayName": "남해고속도로(영암순천)",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 34.6959,
    "longitude": 126.5527
  },
  {
    "slug": "ogcheonmannam-both",
    "name": "옥천만남휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 192,
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "세차장",
      "경정비",
      "휴게소의원"
    ],
    "latitude": 36.6478,
    "longitude": 127.6393
  },
  {
    "slug": "majang-both",
    "name": "마장휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.5454,
    "longitude": 127.5902
  },
  {
    "slug": "geumwang-both",
    "name": "금왕휴게소",
    "direction": "양방향",
    "directionName": "평택방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
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
      "gasolinePrice": 1853,
      "dieselPrice": 1842,
      "lpgPrice": 1154,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.7688,
    "longitude": 127.4178
  },
  {
    "slug": "geumwang-both-1",
    "name": "금왕휴게소",
    "direction": "양방향",
    "directionName": "제천방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
    "locationKm": 213,
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
      "gasolinePrice": 1853,
      "dieselPrice": 1842,
      "lpgPrice": 1125,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.6478,
    "longitude": 127.3401
  },
  {
    "slug": "gangcheonsan-seoul",
    "name": "강천산휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
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
      "brand": "알뜰주유소",
      "gasolinePrice": 1854,
      "dieselPrice": 1847,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 37.2936,
    "longitude": 127.4285
  },
  {
    "slug": "cheondeungsan-both",
    "name": "천등산휴게소",
    "direction": "양방향",
    "directionName": "제천방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
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
      "gasolinePrice": 1879,
      "dieselPrice": 1867,
      "lpgPrice": 1199,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 36.4967,
    "longitude": 127.5423
  },
  {
    "slug": "cheondeungsan-both-1",
    "name": "천등산휴게소",
    "direction": "양방향",
    "directionName": "평택방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
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
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.6056,
    "longitude": 127.6363
  },
  {
    "slug": "gimpohaengbogdeurimswimteo-both",
    "name": "김포행복드림쉼터휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "capital-circular-1",
    "highwayName": "수도권제1순환고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "편의점"
    ],
    "latitude": 37.6728,
    "longitude": 127.0838
  },
  {
    "slug": "gangcheonsan-busan",
    "name": "강천산휴게소",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 36.0176,
    "longitude": 128.5691
  },
  {
    "slug": "oedong-both",
    "name": "외동휴게소",
    "direction": "양방향",
    "directionName": "포항방향",
    "highwaySlug": "donghae-ulsan-pohang",
    "highwayName": "동해고속도로(울산포항)",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.628,
    "longitude": 128.3649
  },
  {
    "slug": "oedong-busan",
    "name": "외동휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "donghae-ulsan-pohang",
    "highwayName": "동해고속도로(울산포항)",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점"
    ],
    "latitude": 37.3235,
    "longitude": 127.3985
  },
  {
    "slug": "nongong-seoul",
    "name": "논공휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
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
      "gasolinePrice": 1894,
      "dieselPrice": 1899,
      "lpgPrice": 1155,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 35.7215,
    "longitude": 128.6127
  },
  {
    "slug": "nongong-busan",
    "name": "논공휴게소",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 35.7998,
    "longitude": 128.7334
  },
  {
    "slug": "gapyeong-seoul",
    "name": "가평휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 37.4863,
    "longitude": 127.6496
  },
  {
    "slug": "gapyeong-both",
    "name": "가평휴게소",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "내고장특산물",
      "ATM"
    ],
    "latitude": 37.5635,
    "longitude": 127.5282
  },
  {
    "slug": "osan-both",
    "name": "오산휴게소",
    "direction": "양방향",
    "directionName": "봉담방향",
    "highwaySlug": "pyeongtaegpajuseon",
    "highwayName": "평택파주고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.503,
    "longitude": 127.3977
  },
  {
    "slug": "osan-both-1",
    "name": "오산휴게소",
    "direction": "양방향",
    "directionName": "동탄방향",
    "highwaySlug": "pyeongtaegpajuseon",
    "highwayName": "평택파주고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.3606,
    "longitude": 127.3781
  },
  {
    "slug": "songsanpodo-both",
    "name": "송산포도휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "pyeongtaegsiheungseon",
    "highwayName": "평택시흥고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ATM",
      "기타"
    ],
    "latitude": 37.267,
    "longitude": 127.4873
  },
  {
    "slug": "jeonganalbam-both",
    "name": "정안알밤휴게소",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "nonsancheonanseon-honamseon",
    "highwayName": "논산천안선,호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "경정비",
      "버스환승",
      "ATM",
      "기타"
    ],
    "latitude": 36.245,
    "longitude": 127.4913
  },
  {
    "slug": "jeonganalbam-both-1",
    "name": "정안알밤휴게소",
    "direction": "양방향",
    "directionName": "논산방향",
    "highwaySlug": "nonsancheonanseon-honamseon",
    "highwayName": "논산천안선,호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "쉼터",
      "경정비",
      "버스환승",
      "ATM",
      "기타"
    ],
    "latitude": 36.3833,
    "longitude": 127.5308
  },
  {
    "slug": "iin-both",
    "name": "이인휴게소",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "nonsancheonanseon-honamseon",
    "highwayName": "논산천안선,호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "경정비",
      "ATM",
      "기타"
    ],
    "latitude": 36.4913,
    "longitude": 127.4359
  },
  {
    "slug": "tancheon-both",
    "name": "탄천휴게소",
    "direction": "양방향",
    "directionName": "논산방향",
    "highwaySlug": "nonsancheonanseon-honamseon",
    "highwayName": "논산천안선,호남고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "경정비",
      "ATM",
      "기타"
    ],
    "latitude": 36.4698,
    "longitude": 127.2937
  },
  {
    "slug": "yangju-seoul",
    "name": "양주휴게소",
    "direction": "상행",
    "directionName": "일산방향",
    "highwaySlug": "capital-circular-1",
    "highwayName": "수도권제1순환고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "버스환승",
      "ATM",
      "기타"
    ],
    "latitude": 37.5546,
    "longitude": 126.8285
  },
  {
    "slug": "cheongdosaemaeul-seoul",
    "name": "청도새마을휴게소",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "세탁실",
      "수유실",
      "약국"
    ],
    "latitude": 36.4437,
    "longitude": 128.4349
  },
  {
    "slug": "cheongdosaemaeul-busan",
    "name": "청도새마을휴게소",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "세탁실",
      "수유실"
    ],
    "latitude": 36.445,
    "longitude": 128.5787
  },
  {
    "slug": "jangan-busan",
    "name": "장안휴게소",
    "direction": "하행",
    "directionName": "부산방향",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM"
    ],
    "latitude": 35.1703,
    "longitude": 129.2253
  },
  {
    "slug": "jangan-busan-1",
    "name": "장안휴게소",
    "direction": "하행",
    "directionName": "울산방향",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM"
    ],
    "latitude": 35.3006,
    "longitude": 129.1643
  },
  {
    "slug": "yeongjongdaegyo-both",
    "name": "영종대교휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "incheongugjegonghangseon",
    "highwayName": "인천국제공항고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "기타"
    ],
    "latitude": 37.5963,
    "longitude": 126.6513
  },
  {
    "slug": "yangpyeong-busan",
    "name": "양평휴게소",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 37.4441,
    "longitude": 127.3714
  },
  {
    "slug": "yangpyeong-both",
    "name": "양평휴게소",
    "direction": "양방향",
    "directionName": "원주방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 37.3066,
    "longitude": 127.4134
  },
  {
    "slug": "gwangju-busan",
    "name": "광주휴게소",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 37.2676,
    "longitude": 127.5519
  },
  {
    "slug": "gwangju-both",
    "name": "광주휴게소",
    "direction": "양방향",
    "directionName": "원주방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 37.3631,
    "longitude": 127.6595
  },
  {
    "slug": "uiseong-both",
    "name": "의성휴게소",
    "direction": "양방향",
    "directionName": "청주방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 36.6674,
    "longitude": 128.6246
  },
  {
    "slug": "uiseong-both-1",
    "name": "의성휴게소",
    "direction": "양방향",
    "directionName": "영덕방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM"
    ],
    "latitude": 36.7255,
    "longitude": 128.493
  },
  {
    "slug": "cheongsong-both",
    "name": "청송휴게소",
    "direction": "양방향",
    "directionName": "청주방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.6462,
    "longitude": 128.373
  },
  {
    "slug": "cheongsong-both-1",
    "name": "청송휴게소",
    "direction": "양방향",
    "directionName": "영덕방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "열린매장(간식)"
    ],
    "latitude": 36.5023,
    "longitude": 128.3749
  },
  {
    "slug": "hongcheon-seoul",
    "name": "홍천휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
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
      "gasolinePrice": 1853,
      "dieselPrice": 1848,
      "lpgPrice": 1255,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.4167,
    "longitude": 126.9694
  },
  {
    "slug": "hongcheon-both",
    "name": "홍천휴게소",
    "direction": "양방향",
    "directionName": "양양방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
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
      "brand": "알뜰주유소",
      "gasolinePrice": 1853,
      "dieselPrice": 1848,
      "lpgPrice": 1255,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.4783,
    "longitude": 127.0994
  },
  {
    "slug": "naerincheon-both",
    "name": "내린천휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "seoul-yangyang",
    "highwayName": "서울양양고속도로",
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
      "gasolinePrice": 1853,
      "dieselPrice": 1848,
      "lpgPrice": 1255,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점"
    ],
    "latitude": 37.621,
    "longitude": 127.1178
  },
  {
    "slug": "nagdongganguiseong-both",
    "name": "낙동강의성휴게소",
    "direction": "양방향",
    "directionName": "영천방향",
    "highwaySlug": "sangjuyeongcheonseon",
    "highwayName": "상주영천고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "쉼터",
      "ATM"
    ],
    "latitude": 37.5608,
    "longitude": 127.548
  },
  {
    "slug": "nagdongganggumi-both",
    "name": "낙동강구미휴게소",
    "direction": "양방향",
    "directionName": "상주방향",
    "highwaySlug": "sangjuyeongcheonseon",
    "highwayName": "상주영천고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "쉼터",
      "ATM",
      "기타"
    ],
    "latitude": 37.5182,
    "longitude": 127.4106
  },
  {
    "slug": "gunwiyeongcheon-both",
    "name": "군위영천휴게소",
    "direction": "양방향",
    "directionName": "영천방향",
    "highwaySlug": "sangjuyeongcheonseon",
    "highwayName": "상주영천고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "ATM"
    ],
    "latitude": 37.3796,
    "longitude": 127.3723
  },
  {
    "slug": "samgugyusagunwi-both",
    "name": "삼국유사군위휴게소",
    "direction": "양방향",
    "directionName": "상주방향",
    "highwaySlug": "sangjuyeongcheonseon",
    "highwayName": "상주영천고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "수유실",
      "ATM"
    ],
    "latitude": 37.2724,
    "longitude": 127.4682
  },
  {
    "slug": "siheunghaneul-both",
    "name": "시흥하늘휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "capital-circular-1",
    "highwayName": "수도권제1순환고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "약국",
      "버스환승",
      "ATM"
    ],
    "latitude": 37.4479,
    "longitude": 127.0699
  },
  {
    "slug": "teseuteu-both",
    "name": "테스트휴게소",
    "direction": "양방향",
    "directionName": "양방향",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "편의점"
    ],
    "latitude": 37.5798,
    "longitude": 127.1274
  },
  {
    "slug": "gimhaegeumgwangaya-both",
    "name": "김해금관가야휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "busan-outer-circular",
    "highwayName": "부산외곽순환고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 35.3712,
    "longitude": 128.7621
  },
  {
    "slug": "hamyang-both",
    "name": "함양휴게소",
    "direction": "양방향",
    "directionName": "대전방향",
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
        "name": "바삭한 오징어 튀김",
        "price": 4000
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.3686,
    "longitude": 128.6183
  },
  {
    "slug": "hamyang-both-1",
    "name": "함양휴게소",
    "direction": "양방향",
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
      "dieselPrice": 1848,
      "lpgPrice": 1199,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.2463,
    "longitude": 128.5427
  },
  {
    "slug": "maesong-seoul",
    "name": "매송휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "세차장",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.2921,
    "longitude": 127.4307
  },
  {
    "slug": "maesong-busan",
    "name": "매송휴게소",
    "direction": "하행",
    "directionName": "목포방향",
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
      "hasHydrogen": true
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "세차장",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.2743,
    "longitude": 127.5734
  },
  {
    "slug": "gunjahaengbogdeurimswimteo-both",
    "name": "군자행복드림쉼터휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "capital-circular-1",
    "highwayName": "수도권제1순환고속도로",
    "locationKm": 192,
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "편의점"
    ],
    "latitude": 37.3848,
    "longitude": 127.6655
  },
  {
    "slug": "gurinamyangjuhaengbogdeurimswimteo-both",
    "name": "구리남양주행복드림쉼터휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "capital-circular-1",
    "highwayName": "수도권제1순환고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "ATM",
      "편의점",
      "기타"
    ],
    "latitude": 37.6747,
    "longitude": 127.0819
  },
  {
    "slug": "pyeongtaeg-both",
    "name": "평택휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "pyeongtaek-jecheon",
    "highwayName": "평택제천고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "세차장",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 37.5597,
    "longitude": 127.4834
  },
  {
    "slug": "jangheungjeongnamjin-both",
    "name": "장흥정남진휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "namhae-yeongam-suncheon",
    "highwayName": "남해고속도로(영암순천)",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.2291,
    "longitude": 128.934
  },
  {
    "slug": "ulju-both",
    "name": "울주휴게소",
    "direction": "양방향",
    "directionName": "함양방향",
    "highwaySlug": "milyang-ulsan",
    "highwayName": "밀양울산고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 35.4465,
    "longitude": 129.1932
  },
  {
    "slug": "ulju-busan",
    "name": "울주휴게소",
    "direction": "하행",
    "directionName": "울산방향",
    "highwaySlug": "milyang-ulsan",
    "highwayName": "밀양울산고속도로",
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
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.3895,
    "longitude": 129.3253
  },
  {
    "slug": "munuicheongnamdae-both",
    "name": "문의청남대휴게소",
    "direction": "양방향",
    "directionName": "청주방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 36.5682,
    "longitude": 127.6229
  },
  {
    "slug": "munuicheongnamdae-both-1",
    "name": "문의청남대휴게소",
    "direction": "양방향",
    "directionName": "영덕방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 36.712,
    "longitude": 127.6197
  },
  {
    "slug": "buangoryeocheongja-seoul",
    "name": "부안고려청자휴게소",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 35.974,
    "longitude": 127.1553
  },
  {
    "slug": "buangoryeocheongja-busan",
    "name": "부안고려청자휴게소",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
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
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점"
    ],
    "latitude": 35.9113,
    "longitude": 127.0259
  },
  {
    "slug": "ansan-both",
    "name": "안산휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "ATM",
      "편의점"
    ],
    "latitude": 37.3581,
    "longitude": 127.379
  },
  {
    "slug": "seobusan-busan",
    "name": "서부산휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae-branch-2",
    "highwayName": "남해제2지선고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점"
    ],
    "latitude": 35.0323,
    "longitude": 129.0472
  },
  {
    "slug": "chunhyang-busan",
    "name": "춘향휴게소",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.7207,
    "longitude": 127.2566
  },
  {
    "slug": "chunhyang-both",
    "name": "춘향휴게소",
    "direction": "양방향",
    "directionName": "완주방향",
    "highwaySlug": "suncheon-wanju",
    "highwayName": "순천완주고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 35.8597,
    "longitude": 127.2937
  },
  {
    "slug": "namhangang-both",
    "name": "남한강휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 2,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.5556,
    "longitude": 127.5672
  },
  {
    "slug": "milyangyeongnamru-both",
    "name": "밀양영남루휴게소",
    "direction": "양방향",
    "directionName": "함양방향",
    "highwaySlug": "milyang-ulsan",
    "highwayName": "밀양울산고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.356,
    "longitude": 128.5996
  },
  {
    "slug": "milyangyeongnamru-busan",
    "name": "밀양영남루휴게소",
    "direction": "하행",
    "directionName": "울산방향",
    "highwaySlug": "milyang-ulsan",
    "highwayName": "밀양울산고속도로",
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
      "dieselPrice": 1851,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
    },
    "facilities": [
      "수면실",
      "샤워실",
      "세탁실",
      "수유실",
      "쉼터",
      "ex-화물차라운지",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.2237,
    "longitude": 128.5432
  },
  {
    "slug": "cheoin-both",
    "name": "처인휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "sejongpocheonseon",
    "highwayName": "세종포천고속도로",
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
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 37.2803,
    "longitude": 127.4499
  },
  {
    "slug": "gosamhosu-both",
    "name": "고삼호수휴게소",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "sejongpocheonseon",
    "highwayName": "세종포천고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1879,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 37.2841,
    "longitude": 127.5937
  },
  {
    "slug": "yeongdeog-both",
    "name": "영덕휴게소",
    "direction": "양방향",
    "directionName": "영덕방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.5694,
    "longitude": 128.6555
  },
  {
    "slug": "pohang-both",
    "name": "포항휴게소",
    "direction": "양방향",
    "directionName": "포항방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 36.6985,
    "longitude": 128.5921
  },
  {
    "slug": "gimje-both",
    "name": "김제휴게소",
    "direction": "양방향",
    "directionName": "전주방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
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
      }
    ],
    "gasStation": {
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": false,
      "evChargersCount": 0,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.9632,
    "longitude": 127.0917
  },
  {
    "slug": "gimje-both-1",
    "name": "김제휴게소",
    "direction": "양방향",
    "directionName": "새만금방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
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
      "brand": "ex-oil",
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "ex-화물차라운지",
      "ATM",
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.8519,
    "longitude": 127.0006
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
