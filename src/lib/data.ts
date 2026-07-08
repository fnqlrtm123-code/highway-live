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
  brandStores: {
    name: string;
    description: string;
    hours: string;
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "매장 외부에 위치하고 있으며 신선하고 풍부한 맛의 고품격 커피를 제공하고 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "SKT할인, CU포인트 적립 및 사용 가능",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "[21년 9월 14일 오픈]운전 중에 즐기는 커피한잔의 여유~",
        "hours": "07:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "[25년 8월 27일 오픈] 고속도로 휴게소에서만 판매하는 '드라이브샷'",
        "hours": "08:30 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "던킨도너츠 기흥휴게소점 입니다",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파리바게뜨",
        "description": "기흥휴게소 내부매장에서 판매합니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "파스쿠찌",
        "description": "기흥휴게소 내부 매장과 외부매장 2개를 운영 하고있습니다",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:30 ~ 20:30"
      },
      {
        "name": "파스쿠찌",
        "description": "설 당일 10시까지 영업",
        "hours": "08:30 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "설 당일 11시까지 영업",
        "hours": "07:00 ~ 20:30"
      },
      {
        "name": "이마트24",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:00"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:00"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "06:00 ~ 21:00"
      },
      {
        "name": "JDX",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:00"
      },
      {
        "name": "기타",
        "description": "공차",
        "hours": "08:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도너츠와 커피가 함께하는 공간",
        "hours": "06:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "커피전문점",
        "hours": "07:30 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "커피&도너츠 각종 음료 및 간식류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "BBQ",
        "description": "BBQ&올떡(간식류 판매)",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "아메리카노 등 다양한 음료 판매중",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "LYNX",
        "description": "골프의류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "아메리카노 등 다양한 음료 판매중",
        "hours": "06:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "갓 구워낸 커피향이 은은한 번 판매 매장",
        "hours": "08:30 ~ 20:30"
      },
      {
        "name": "앤티앤스프레즐",
        "description": "갓 구워낸 빵과 버터의 고소함이 일품인 프레즐 매장",
        "hours": "08:30 ~ 20:30"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "좋은 원두로 진한 커피향이 일품인 커피명소",
        "hours": "08:30 ~ 20:30"
      },
      {
        "name": "달콤커피",
        "description": "브랜드 커피전문점으로 갓 뽑아낸 원두의 향이 일품인 커피매장",
        "hours": "08:30 ~ 20:30"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "열린매장 : 오전8시 ~ 오후5시30분",
        "hours": "08:00 ~ 17:30"
      },
      {
        "name": "엔제리너스",
        "description": "휴게소 우측 호두과자 방면 / 오전8시 ~ 오후7시20분",
        "hours": "08:00 ~ 19:20"
      },
      {
        "name": "BBQ올리브돈까스",
        "description": "1층 매장 내부 BBQ올리브 돈까스",
        "hours": "08:00 ~ 19:20"
      },
      {
        "name": "탐앤탐스",
        "description": "영업시간 : 오전8시 ~ 오후7시20분",
        "hours": "08:00 ~ 19:20"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "용우동(우동코너)",
        "hours": "08:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "던킨도너츠 옥산휴게소점입니다",
        "hours": "07:00 ~ 18:00"
      },
      {
        "name": "할리스커피",
        "description": "옥산휴게소 할리스커피입니다",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "단독매장 구성, 휴게소출구부 위치, 비즈니스공간으로 탁월",
        "hours": "08:30 ~ 20:30"
      },
      {
        "name": "로띠번",
        "description": "간식매장에 위치한 빵집 로띠번",
        "hours": "08:30 ~ 20:30"
      },
      {
        "name": "탐앤탐스",
        "description": "휴게소 중앙 내부 위치, 24시간 운영",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "시중보다 저렴한 가격에 유명브랜드 드롭탑의 퀄리티를 결합",
        "hours": "08:30 ~ 20:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "철저한 위생관리와 맛있는 도넛, 커피류 음료를 제공하고 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "롯데리아",
        "description": "고속도로 유일한 '롯데리아 DT매장'으로 차에서 내리지 않고 이용하실 수 있습니다. K버거의 원조 롯데리아!",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "철저한 원두 품질관리로 신선하고 고소한 커피와 음료를 제공하고 있습니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "매장내부 좌측에 위치하고 있습니다.",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "투썸플레이스",
        "description": "매장 내부 우측에 위치하고 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "건물 내부 중앙에 위치하고 있습니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도넛, 커피, 음료",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "음료, 커피",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "아웃도어,골프웨어,신발,가방 등",
        "hours": "09:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "담배, 음료, 커피, 간식",
        "hours": "06:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "남녀노소 좋아하는 깊고 진한향의 고급원두 커피를 제공합니다.",
        "hours": "06:00 ~ 22:00"
      },
      {
        "name": "용우동",
        "description": "유명 프랜차이즈 체인점 용우동을 옥천휴게소에서 연중무휴 드실수 있습니다.",
        "hours": "06:00 ~ 22:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "장소 : 상행매장",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "장소 : 본관동 내부, 하행 화장실 옆",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "커피전문점 할리스입니다",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "용우동",
        "description": "우동매장입니다",
        "hours": "07:00 ~ 21:00"
      },
      {
        "name": "CU",
        "description": "CU 24시 편의점 입니다. 21:00~ 익일 07:00 무인편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "커피전문점 할리스입니다.",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "용우동",
        "description": "용우동 매장입니다.",
        "hours": "07:00 ~ 21:00"
      },
      {
        "name": "CU",
        "description": "CU 24시 편의점 입니다. 21시~ 익일 07시 무인편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "추풍령휴게소 유명브랜드매장 할리스커피입니다. 할인 및 멤버쉽 적립이 가능합니다",
        "hours": "07:00 ~ 07:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "할리스 커피전문점이 입점하여 있으며 평상시 00시 부터 24시까지 이용합니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "장소 : 자율식당 옆 / 여자화장실 앞",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "투썸플레이스",
        "description": "장소 : 종합안내소 측면 / 판매품목 : 커피류, 음료류",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "기타",
        "description": "k-outlet 골프웨어 판매점, 장소 : 매점동 왼쪽 측면",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "아메리카노 외 커피류",
        "hours": "07:00 ~ 20:30"
      },
      {
        "name": "투썸플레이스",
        "description": "아메리카노 외 커피류",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "06:00~21:00 유인운영, 21:00~06:00 무인운영",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "기타",
        "description": "놀부부대찌개",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "주문마감시각 19시 20분",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "커피전문점",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "바쁜 시간속 사람들과 함께 어울려 일상의 휴식이 되는 곳 건천(부산)휴게소 투썸플레이스",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "클라이머홀릭",
        "description": "등산 의류 등 제품 판매",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피음료",
        "hours": "08:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "파스쿠찌 운영",
        "hours": "07:00 ~ 18:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "커피전문점",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "CU",
        "description": "편의점(22시~익일06시 무인운영)",
        "hours": "06:00 ~ 22:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "롯데리아",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "뚜레쥬르",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "나뚜루",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "※24시간 운영 : 2곳 운영중(부산방향, 기장방향)",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "크리스피크림",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "공차",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "로띠번(커피번,바닐라번)",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "코바코",
        "description": "본관 식당가 (다양한 돈가스 종류가 있습니다)",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "탐앤탐스",
        "description": "해썹인증 (커피류만 판매) ,텀블러 할인 (그린캠페인) 300원, 텀블러 세척해드림",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "본관 입구",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "CU",
        "description": "24시간 운영",
        "hours": "00:00 ~ 24:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "매일 신선한 재료와 알맞게 발효된 도우에 그윽한 모카향크림 토핑을 해서 오븐에 갓구워낸 부드럽고 모카향이 가득한 번입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피매장",
        "hours": "08:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "할리스커피, 착즙 외 음료 판매",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "로띠번",
        "description": "앨리어스커피와 로띠번 판매",
        "hours": "08:00 ~ 18:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "의류판매",
        "hours": "09:00 ~ 18:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "커피전문점",
        "hours": "07:00 ~ 19:30"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "로띠번",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "평일 08:00~19:00, 주말 09:00~19:00",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "기타",
        "description": "서녹씨_여수딸기모찌 판매점",
        "hours": "10:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "고운동 커피",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "로띠번",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "평일 08:00~19:00, 주말 09:00~19:00",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "기타",
        "description": "고운동 커피",
        "hours": "07:30 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "주말 08:00~20:00 운영",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "주말 07:30~19:30",
        "hours": "07:30 ~ 19:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "할리스 고유의 로스팅 기법으로 원두 고유의 풍부한 향미를 살리고 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "우동 전문 외식브랜드 용우동의 검증된 맛과 감동!",
        "hours": "06:00 ~ 20:30"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "할리스 고유의 로스팅 기법으로 원두 고유의 풍부한 향미를 살리고 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "우동 전문 외식브랜드 용우동의 맛과 감동!",
        "hours": "06:00 ~ 20:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "커피전문점 엔제리너스 EX-CAFE 운영",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "할리스커피",
        "description": "커피전문점 할리스카페 운영",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피전문점 드롭탑매장 운영",
        "hours": "09:00 ~ 22:00"
      },
      {
        "name": "기타",
        "description": "놀부부대찌개 운영, 대지식당 운영",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "할리스 커피",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "JDX",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "기타",
        "description": "놀부부대찌개, 교동짬뽕, 의류(상설매장) 팜스프링, 디아스토리",
        "hours": "07:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "롯데리아",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "카페베네",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "저희 던킨도너츠 매장에서는 시중과 동일한 할인제도를 시행하고 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "저희 매장에서는 시중과 동일한 할인제도를 시행하고 있습니다. 속살은 부드럽고 겉은 바삭한 오리지널 번",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "저희 매장에서는 시중과 동일한 할인제도를 시행하고 있습니다. 이탈리아 감각을 담은 파스쿠찌",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "CU멤버쉽 적립 · 사용과 SKT 멤버쉽 할인, 포인트 적립 · 사용이 가능합니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "커피전문점",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "탐앤탐스",
        "description": "커피전문점",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "투썸플레이스",
        "description": "커피전문점",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "GS25",
        "description": "GS25 편의점 24시간 운영(연중무휴)",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "기타",
        "description": "팬텀(FANTOM) : 골프웨어, 스포츠 캐쥬얼, 멀티 스포츠 웨어, 행사의류 등",
        "hours": "08:00 ~ 19:30"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "탐앤탐스",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "투썸플레이스",
        "description": "1월 24일 신규오픈",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "GS25",
        "description": "GS25편의점",
        "hours": "06:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "GS25",
        "description": "편의점_ 21시부터 다음날 07시 까지 무인 운영 / 할인, 적립 가능",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "GS25",
        "description": "(유인)07:00 - 21:00 (야간무인운영) 21:00 - 07:00",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "로띠번,바닐라번 및 로띠번커피 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "탐앤탐스 커피 및 청주오믈렛 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "CU 편의점 24시간 운영중",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "06:30 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "06:30 ~ 20:00"
      },
      {
        "name": "GS25",
        "description": "입점 브랜드 매장입니다.",
        "hours": "06:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "달콤하고 따듯한 번과 여러가지 음료를 즐기실 수 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "우동전문점",
        "hours": "07:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "CU편의점(24시간)",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "공차",
        "description": "커피, 버블티 등 음료 전문점입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "주말 운영시간 연장",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "명동칼국수",
        "description": "칼국수, 만두 등 칼국수전문점의 맛을 느끼실 수 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "고급 우동면을 즐기실 수 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "시중 드롭탑과 동일한 가격으로 다양한 커피음료를 즐기실수 있습니다.",
        "hours": "08:00 ~ 22:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "바닐라번, 모카번",
        "hours": "07:40 ~ 19:40"
      },
      {
        "name": "투썸플레이스",
        "description": "텀플러할인, 모바일쿠폰, 키프트카드할인, 투썸하트할인, SKT우주패스30%할인, SKT청년음료50%할인",
        "hours": "07:40 ~ 19:40"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "로띠번판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "코바코",
        "description": "돈가스전문점",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "커피류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "우동전문점",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "GS25 유인편의점[ GS25무인편의점 24시간운영중]",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "로띠번, 바닐라번",
        "hours": "08:00 ~ 19:40"
      },
      {
        "name": "탐앤탐스",
        "description": "아메리카노 외",
        "hours": "08:00 ~ 19:40"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "아메리카노 외",
        "hours": "08:00 ~ 19:40"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "맛있는커피 여러종류의 커피를 맛볼수있는 엔제리너스",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "로띠번",
        "description": "신메뉴 땅콩빵, 바닐라번, 모카번, 공주알밤빵, 커피와 함께 즐길 수 있음",
        "hours": "07:00 ~ 19:50"
      },
      {
        "name": "임실치즈피자",
        "description": "임실요구르트, 치즈류, 구워먹는치즈, 임실치즈조각피자 등 선물류 포장 가능",
        "hours": "07:30 ~ 07:30"
      },
      {
        "name": "기타",
        "description": "CU편의점(무인운영시간 1:30~4:30) 냉동만두, 컵밥, 핫바류, 햄버거, 김밥, 빵류, 라면 등 간편식 판매로 야간에도 먹거리를 찾을 수 있음",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "호도과자/명품땅콩빵/커피콩빵/다양한 핫바류 판매중.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "09:00 ~ 17:00"
      },
      {
        "name": "코바코",
        "description": "돈가스, 우동 판매",
        "hours": "08:00 ~ 18:30"
      },
      {
        "name": "탐앤탐스",
        "description": "아메리카노외 커피음료 판매 시중매장과 동일한 할인 혜택 및 가격(음료외 제외)",
        "hours": "07:30 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "제품 소진시까지",
        "hours": "00:00 ~ 21:00"
      },
      {
        "name": "코바코",
        "description": "우동 라면 돈가스 판매",
        "hours": "07:30 ~ 18:30"
      },
      {
        "name": "탐앤탐스",
        "description": "아메리카노외 커피음료 판매 시중매장과 동일한 할인 혜택 및 가격(음료외 제외)",
        "hours": "07:30 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "아메리카노외 커피류 판매",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "커피 전문점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "로띠번 프랜차이즈 매장 운영중",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "휴게소내 탐앤탐스 프랜차이즈 커피매장 운영중",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "드롭탑 커피전문점",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "코바코",
        "description": "돈가스와 우동 판매 운영",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "커피딜라이트(커피전문점)",
        "description": "옐로펀트 무인 로봇커피 매장",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "달콤커피",
        "description": "7080 테마공원 바로 옆에 위치하여 옛 추억을 생각하며 커피 한잔의 여유",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "이마트24 편의점, 이마트24 Self 무인 편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "이탈리아 정통 커피 브랜드 정체성을 그대로 살려 특별한 경험을 제공",
        "hours": "07:00 ~ 20:30"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "천여 가지 다양한 생두 조합과 구백 번 이상의 로스팅 실험 끝에 찾아낸 925번째 가장 완벽한 원두, 커피 본연의 맛과 향에 집중하여 쓴맛은 줄이고 단맛과 다채로운 향을 끌어올린 세상에서 가장 맛있는 드롭탑만의 925 커피",
        "hours": "07:30 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "탐앤탐스는 신선하고 풍부한 커피의 맛과 향으로 국내 및 세계 커피전문점 시장을 선도하고 있습니다.",
        "hours": "06:00 ~ 19:00"
      },
      {
        "name": "용우동",
        "description": "20년 전통의 우동하면 생각나는 브랜드 용우동만의 고유한 우동맛을 맛보실수 있습니다.",
        "hours": "06:00 ~ 20:40"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "퀄리티 높은 원두로 깊은 맛과 향의 수준 높은 커피를 즐길수 있습니다.",
        "hours": "06:00 ~ 18:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "Take Your Time Angel-in-us 당신을 미소 짓게 하는 천사의 커피",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "로띠번 , 크림치즈번 , 호두카야번",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "생두 고유의 맛과 향미를 살리는 - 슬로우 로스팅",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "아시아 최초 큐그레이더를 포함한 글로벌 패널의 찬사를 받은 925블랜드 드롭탑의 시그니처 원두 925 블랜드",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "CU편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "커피 및 도너츠 판매",
        "hours": "07:30 ~ 19:00"
      },
      {
        "name": "할리스커피",
        "description": "할리스 커피 판매 중",
        "hours": "07:30 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "빵류 및 커피류 판매",
        "hours": "07:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "커피류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "커피류 판매",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "커피전문점",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피전문점",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "외부매장 '투썸플레이스 신규 오픈'",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "공차",
        "description": "외부매장 '공차 신규 오픈'",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "GS25",
        "description": "내부 매장 'GS25 편의점' / 야간 무인 매장 운영(21:00~07:00)",
        "hours": "07:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "공차",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "GS25",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "중앙계산대 옆 위치",
        "hours": "07:30 ~ 21:30"
      },
      {
        "name": "로띠번",
        "description": "휴게소 내부 엔제리너스 옆 위치",
        "hours": "07:30 ~ 21:30"
      },
      {
        "name": "탐앤탐스",
        "description": "휴게소 전면부 위치",
        "hours": "07:30 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "중앙계산대 옆 위치",
        "hours": "07:30 ~ 20:30"
      },
      {
        "name": "로띠번",
        "description": "휴게소 내부 엔제리너스 옆 위치",
        "hours": "07:30 ~ 20:30"
      },
      {
        "name": "탐앤탐스",
        "description": "휴게소 전면부 위치",
        "hours": "07:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "파스쿠찌 커피전문점",
        "hours": "08:10 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "탐앤탐스 커피전문점",
        "hours": "08:10 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "매주 금,토,일요일 20시 마감",
        "hours": "06:00 ~ 19:00"
      },
      {
        "name": "로띠번",
        "description": "라스트 오더 17시 40분",
        "hours": "06:00 ~ 18:00"
      },
      {
        "name": "파스쿠찌",
        "description": "라스트 오더 19시 30분",
        "hours": "06:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "매주 금,토요일 21시 마감",
        "hours": "07:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 22:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 21:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "영산휴개소 내 로띠번에서 연중무휴 따뜻한 번 제공",
        "hours": "09:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "고급 커피 브랜드로 휴게소에서 즐길 수 있는 여유 한잔",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "24시간 연중무휴 편의점",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "공차",
        "description": "고급 차 브랜드로 휴게소에서 즐길수 있는 차 한잔의 여유",
        "hours": "06:30 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "101번지 남산돈까스",
        "hours": "07:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "영산휴게소 내 토스트매장, 삼삼떡볶이&BHC치킨 매장에서 연중무휴 즉석에서 만들어드리는 삼삼떡볶이 및 BHC콜팝치킨 제공",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "세븐일레븐",
        "description": "24시간 편의매장",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "공차",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "스위트- 청주오믈렛, 젤리 및 캔디류 판매",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "시중과 동일한 할인/적립 제도 운영",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "탐앤탐스",
        "description": "시중과 동일한 할인.적립 제도 운영",
        "hours": "07:30 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "커피전문점",
        "hours": "07:20 ~ 19:20"
      },
      {
        "name": "탐앤탐스",
        "description": "커피전문점",
        "hours": "07:20 ~ 19:20"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "커피류 및 차류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피류 및 차류 판매",
        "hours": "08:00 ~ 21:30"
      },
      {
        "name": "CU",
        "description": "24시간운영 편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "09:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "CU",
        "description": "CU 편의점(24시)",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "휴게소로 진입하면 본관 우측 브랜드 매장에 위치하고 있으며, 해피포인트가 가능하며 각종 음료와 도너츠를 판매하고 있다.",
        "hours": "07:40 ~ 19:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "고객 화장실 진입로(열린매장 반대편)에 위치하고 있으며 커피류(8종류) 및 각종 음료를(16종류) 판매하고 있다.",
        "hours": "07:40 ~ 19:30"
      },
      {
        "name": "투썸플레이스",
        "description": "휴게소 푸드코트(우동 맞은편) 내에 위치하고 있으며, 커피 및 각종 음료를 판매하고 있다.",
        "hours": "07:40 ~ 19:30"
      },
      {
        "name": "GS25",
        "description": "본관 1층 GS25오픈! 통신사(KT,LG) 멤버십 포인트 할인, GS포인트 적립가능 24시간 다양한 간편식과 음료, 간편결제 서비스를 제공하고 있습니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "06:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "탐앤탐스 커피 전문점 1,2호점 (1호점 07:00~19:00 마감, 2호점 08:00~22:00마감)",
        "hours": "08:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "일반매장과 동일함",
        "hours": "09:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "탐앤탐스 1.2호점 (신관,구관) 2군데 운영 일반 로드샵과 동일하게 적용",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "CU",
        "description": "24시 운영 브랜드편의점",
        "hours": "12:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "커피,도넛",
        "hours": "06:00 ~ 21:00"
      },
      {
        "name": "파스쿠찌",
        "description": "커피, 차류",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "토스타토스트",
        "description": "토스트 외",
        "hours": "06:00 ~ 18:00"
      },
      {
        "name": "기타",
        "description": "잠바주스 (커피,차류,주스.스무디)",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "맘스터치",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도넛 & 커피",
        "hours": "07:00 ~ 21:00"
      },
      {
        "name": "파스쿠찌",
        "description": "커피, 차류",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "24시간 운영 (야간 셀프계산대)",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "CU",
        "description": "유인, 무인 운영",
        "hours": "00:00 ~ 24:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "신선하고 엄선된 최상의 재료만을 사용하여 국내산 수제 버터필링 기법으로 만든 도우를 발효시켜 그윽한 모카향 크림토핑을 해서 오븐에서 갓 구워낸 부드럽고 후레쉬한 모카향이 가득한 번",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "파스쿠찌",
        "description": "**파스쿠찌(Pascucci)**는 이탈리아 전통 커피 문화를 바탕으로 한 프리미엄 커피 브랜드입니다. 고급 원두와 정통 에스프레소 추출 방식으로 깊고 진한 커피 맛을 선사합니다. 유럽 감성의 세련된 인테리어와 다양한 음료·디저트 메뉴로 고객에게 편안한 휴식 공간을 제공합니다.",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "투썸플레이스",
        "description": "섬세한 디테일이 만드는 커피 맛의 차이. 이것이 바로 투썸 커피만의 Small Indulgence(작은 사치) 입니다. 거기에, 다양한 커피마다 최적으로 어울리는 색다른 디저트까지 나만의 즐거움을 만날 수 있는 프리미엄 디저트 카페 투썸플레이스입니다",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "CU",
        "description": "순수 국내 브랜드 CU는 21세기 한국형 편의점을 지향하며 고객의 니즈에 능동적으로 대응하기 위해 BGF 리테일에서 지난 30여 년간 쌓아온 노하우를 바탕으로 만든 새로운 편의점 모델입니다. ‘Fresh & Refresh’라는 모토를 내걸고 새롭고 신선한 상품과 이용자 중심의 서비스를 제공하여 하루를 충전하고 일상의 활력을 얻는 생활 속 쉼터를 지향하고 있습니다",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "기타",
        "description": "로봇 바리스타가 운영하는 24시간 무인커피 판매시설.다양한 커피 및 음료를 편리하게 이용 할수 있습니다",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "로스팅 후 숙성과정을 거쳐 7~30일 사이에 가장깊고 풍부한 커피 본연의 맛으로 제공합니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "로띠번, 크림치즈번, 커피, 차",
        "hours": "08:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "이마트24",
        "description": "06:00~22:00(유인운영), 22:00~06:00(무인운영)",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "아메리카노, 라떼, 카푸치노, 시그니처 라떼(바닐라 딜라이트)",
        "hours": "07:30 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "이마트24",
        "description": "PM 22:00~ AM 07:00 까지 무인운영시간입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "이마트24",
        "description": "PM 22:00~ AM 08:00 까지 무인운영시간입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "커피전문브랜드 매장",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피 본연의 맛을 잘살릴수 있는 기후인 브라질 다스 알마스에서 재배된 스페셜 티 원두를 모든 커피에 사용하여 풍미와 향이 독특한 최상의 커피를 맛 보실 수 있습니다. / 열린매장 내 드롭탑1매장, 휴게소 매장내 드롭탑2매장 위치되어 있습니다.",
        "hours": "07:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 17:00"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 17:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "유명브랜드 커피 매장인 엔제리너스를 아침8시 부터 저녁 8시까지 운영하고 있으며 커피 향이 뛰어나 마니아 단골 고객층을 확보하고 있으며 시중과 동일하게 할인제도를 운영하여 판매하고 있습니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "카라멜라떼,카페아메리카노 등 고품격 커피맛과 편안한 분위기가 있는 커피전문매장입니다.",
        "hours": "07:00 ~ 19:40"
      },
      {
        "name": "클라이머홀릭",
        "description": "아웃도어 의류 전문 매장으로 상설매장과 정상매장을 함께 운영하고 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "투썸플레이스",
        "description": "내 취향이 담긴 커피,내 취향을 담아 섬세하게 만든 나만의 커피가 있습니다",
        "hours": "07:00 ~ 19:40"
      },
      {
        "name": "한신우동",
        "description": "얼큰우동,삼진어묵우동,유부우동,유부우동곱빼기,비빔우동 등 한국우동의 맛!",
        "hours": "07:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "커피매장",
        "hours": "07:00 ~ 20:30"
      },
      {
        "name": "기타",
        "description": "CU편의점 - 스낵/음료수 및 즉석식품 판매 24시 운영중",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "커피와 어울리는 모카, 바닐라 로띠번",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "투썸플레이스",
        "description": "행복한 공간을 추구하는 커피전문점",
        "hours": "07:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "CU편의점 - 스낵/음료수 및 즉석식품 판매 24시 운영중",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "09:00 ~ 21:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 00:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "팬텀",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "커피 / 음료",
        "hours": "09:00 ~ 20:00"
      },
      {
        "name": "토스타토스트",
        "description": "토스트/십원빵/델리만쥬/땅콩빵/커피/음료",
        "hours": "09:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "커피 / 음료",
        "hours": "08:00 ~ 18:50"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "용우동",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "용우동",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "이마트24",
        "description": "무인 운영 24시",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "기타",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "매장내 위치",
        "hours": "07:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "빵류(번 판매)",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "커피, 음료 판매",
        "hours": "07:30 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "명품맛집(통만두집)",
        "hours": "11:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "2023.11.27일 오픈",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도너츠, 커피류, 음료류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "할리스커피",
        "description": "커피전문 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "번(빵류) 판매",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피전문 판매",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피",
        "hours": "08:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "이 즐거움을 위해 할리스커피는 1998년 국내 최초 에스프레소 커피 전문점의 문을 연 이래 지속적으로 커피 시장을 이끄는 새로운 시도를 해왔습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "27년 전통의 용우동은 ‘고객 없이는 우리도 없다’ 를 실천하고 있습니다.",
        "hours": "06:00 ~ 21:00"
      },
      {
        "name": "기타",
        "description": "[클라이머홀릭] 의류(등산,골프웨어), 애견 용품",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "조선대반점",
        "hours": "10:30 ~ 20:40"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "용우동",
        "hours": "10:00 ~ 18:30"
      },
      {
        "name": "클라이머홀릭",
        "description": "의류 (등산,골프웨어), 애견 용품",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "평양아바이순대국밥,소미미단팥빵",
        "hours": "09:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "이마트24",
        "description": "24시간 운영하며, 야간(22~익일06시)에는 무인 판매 운영 중.",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "기타",
        "description": "\"화서다방\"운영, HOT아메리카노 3,900원",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "당일 갓 구운 맛있는 모카커피로띠번과 바닐라번을 맛 볼 수 있습니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피류 판매",
        "hours": "07:30 ~ 19:20"
      },
      {
        "name": "CU",
        "description": "21시~07시 무인운영",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "제빵 프랜차이즈",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "파스쿠찌",
        "description": "파스쿠찌 커피매장",
        "hours": "08:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "세븐일레븐",
        "description": "(상행/인천방면) 음료,과자,여행용품,편의용품 등",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "토스타토스트",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "빵류",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "용우동",
        "description": "우동류",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "달콤커피",
        "description": "커피",
        "hours": "08:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "커피류",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "우동류/짜장면",
        "hours": "06:00 ~ 19:20"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "커피류, 음료류, 차류등",
        "hours": "07:50 ~ 19:50"
      },
      {
        "name": "로띠번",
        "description": "로띠번, 커피류, 음료류, 차류등",
        "hours": "07:50 ~ 19:50"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "달콤커피",
        "description": "따뜻하게 커피를 마실수 있는 바다가 보이는 해맞이옥계휴게소 달콤커피(멤버십할인,앱쿠폰적립,기프티콘(메뉴교환권,금액권)사용",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "이마트24 브랜드 편의점 운영(무인편의점은 24시간 운영)멤버십할인,적립,모바일쿠폰,1+1판매",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "달콤한 도넛과 향긋한 커피, 차별화된 음료 등 다양한 제품들로 달콤한 휴식을 즐기실 수 있습니다.",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "할리스커피",
        "description": "할리스 고유의 로스팅 기법으로 원두 고유의 풍부한 향미를 살리고 있습니다.",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "CU",
        "description": "CU편의점은 고속도로를 이용하는 고객들에게 다양한 상품과 서비스를 제공합니다. 24시간 운영되며, 즉석식품, 음료, 스낵, 생활용품 등 다양한 제품을 갖추고 있습니다. 고객편의를 위해 셀프계산대와 전자레인지 등을 제공하며 멤버십 적립, 할인혜택도 지원합니다. 또한, 신속한 서비스와 청결한 매장 환경을 유지하고 있어 장거리 여행 중 필요한 물품을 손쉽게 구매할 수 있는 편리한 공간을 제공합니다",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "CU편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:20 ~ 19:30"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:30"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "편의점 24시간 운영",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "공차",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피,음료",
        "hours": "07:30 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피,음료",
        "hours": "07:30 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "운영시간 : 07시~21시 운영",
        "hours": "07:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "맛과 향이 좋은 할리스 커피를 휴게소에서 즐길수 있습니다",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "베이커리 전문점을 휴게소에서 만날수 있습니다. 운전중 간식 타임은 역시 로띠번이 최고~~~",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "프리미엄 커피전문점 ‘CAFE DROPTOP’",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "롯데리아",
        "description": "햄버거의 중심 패스트푸드 전문점인 롯데리아 운영 중",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "로띠번",
        "description": "베이커리 전문점을 휴게소에서 만날수 있습니다. 운전 중 간식타임은 역시 로띠번이 최고 ~ 마성떡볶이 매장도 함께 운영하고 있습니다.",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "맛과 향이 좋은 드롭탑 커피를 휴게소에서 즐길 수 있습니다. 통신사 할인 및 텀블러 할인도 가능합니다.",
        "hours": "08:00 ~ 19:30"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "코바코",
        "description": "고메브릿지 식당 내부",
        "hours": "06:00 ~ 19:40"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "앤티앤스프레즐",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "세븐일레븐",
        "description": "상행점 : 24시간 운영 / 하행점 : 6시~20시 (주말 22시)",
        "hours": "08:00 ~ 24:00"
      },
      {
        "name": "투썸플레이스",
        "description": "투썸(상행) : 8시~24시 / 투썸(하행) : 8시~22시",
        "hours": "08:00 ~ 22:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "커피, 음료류 판매",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "모카번, 바닐라번",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "투썸플레이스",
        "description": "커피류, 음료류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "CU 편의점",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "공차",
        "description": "밀크티, 음료류, 커피류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "스테프 핫도그",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도넛 및 커피 음료류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "커피, 음료류 판매",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "번(바닐라,모카)",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "커피",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "무인 로봇커피 매장 운영(24시간)",
        "hours": "00:00 ~ 00:00"
      },
      {
        "name": "투썸플레이스",
        "description": "커피",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "공차",
        "description": "커피, 밀크티",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "오후 20:00 - 오전 07:30 무인운영",
        "hours": "00:00 ~ 00:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "오후 20:00 - 오전 07:30 무인운영시간",
        "hours": "00:00 ~ 00:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "따뜻한 커피번의 구수한 향이 일품인 로띠번",
        "hours": "09:00 ~ 17:00"
      },
      {
        "name": "탐앤탐스",
        "description": "기본2샷으로 진한 품미의 아메리카노가 특징인 탐앤탐스 브랜드 커피매장",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "NEPA",
        "description": "한국토종 대표 아웃도어 브랜드",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "신선함으로 일상을 충전하고 활력을 얻는 공간. 언제 어디서나 만나면 반가운 브랜드, CU가 고객의 하루를 함께합니다",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "기타",
        "description": "코바코는 음식이 너무 맛있어서 코를 박고 먹는다 라는 말에서 탄생한 브래드명으로 쫄깃하고 오동통한 면발, 깔끔한 국물의 우동전문 브랜드 입니다.",
        "hours": "07:00 ~ 21:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "차가운 날씨에 따뜻한 커피 한잔",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "기타",
        "description": "[코바코우동] 차가운 겨울에 더욱생각나는 통통한 면발 뜨듯한 국물이 일품",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "매일 굽는 모카번과 바닐라번",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "코바코",
        "description": "오동통 우동면에 따끈한 국물 우동전문점",
        "hours": "07:00 ~ 21:00"
      },
      {
        "name": "탐앤탐스",
        "description": "진한 커피향의 브랜드 커피매장 탐앤탐스",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "CU 편의점 매장(24시간 운영)",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "제빵프랜차이즈",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "코바코",
        "description": "우동전문점",
        "hours": "07:00 ~ 21:00"
      },
      {
        "name": "탐앤탐스",
        "description": "커피전문점",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "커피",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "커피",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "코바코",
        "description": "코바코 우동만 해당 , 코바코 돈가스매장은 08:00 부터 오픈",
        "hours": "06:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "금요일,토요일은 오후 21:00 까지 영업",
        "hours": "07:00 ~ 19:00"
      },
      {
        "name": "이마트24",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "오리지널 스페셜티 커피 전문 브랜드",
        "hours": "07:00 ~ 18:00"
      },
      {
        "name": "달콤커피",
        "description": "MZ의 Flex 라이프스타일",
        "hours": "09:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "23번지 남산돈까스",
        "hours": "10:00 ~ 20:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "직접 발효시켜 갓 구워내 더 맛있는 바닐라번 / 모카번이 있습니다.",
        "hours": "09:00 ~ 17:00"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "달콤커피",
        "description": "달콤커피 고품질 원두의 바탕으로 맛있는 커피",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "기타",
        "description": "뉴욕버거 : 휴게소에서도 맛있는 패스트푸드를 즐기실 수 있습니다",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "스낵코너에 위치하고 있으며 바로 구워낸 빵으로 커피와 함께 먹으면 맛있습니다.",
        "hours": "09:00 ~ 17:00"
      },
      {
        "name": "파스쿠찌",
        "description": "언제나 센스있게, 이탈리아스럽게 141년 이탈리아의 전통을 이어가며 새로운 감각을 만들어가는 파스쿠찌. 누구나 꿈꿔온 이탈리아를 쉽게 만날 수 있도록 당신 가장 가까운 곳에 이탈리아의 감각 파스쿠찌가 있습니다. 오늘도 자신만의 감각으로 살아가는 당신에게 파스쿠찌는 이탈리아의 정수를 담아 당신의 삶에 세련된 감각을 더합니다. 이탈리아의 신선한 감각으로 레시피한 에스프레소 커피와 젤라또, 티라미수, 그리고 이탈리안 시그니처 메뉴를 통해 이탈리아의 풍미가 담긴 맛과 센스를 전합니다. 일상에서 만나는 이탈리아의 감각 언제나 센스있게, 이탈리아스럽게 SENSE OF ITALY, 파스쿠찌",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "우동(용우동)코너로 브랜드이며 쫄깃한 면발과 깊은 육수맛이 일품입니다.",
        "hours": "08:00 ~ 24:00"
      },
      {
        "name": "달콤커피",
        "description": "달콤커피 고픔질 원두와 오랜 운영노하우를 바탕으로 품질은 유지하면서도 합리적이 가격체계를 갖춘 달콤커피의 신규브랜드",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "\"뉴욕버거가 곧 대한민국 대표 수제버거입니다.\" 뉴욕버거는 2012년 인천롯데백화점 1호점을 시작으로 11년간 고기패티, 치킨패티, 새우패티 등 자체 생산 제조하여 가맹점에 공급하는 시스템을 바탕으로 고품질의 메뉴와 합리적인 가격을 제공하기 위해 노력하고 있습니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "아메리카노 등 커피류와 녹차, 스파클링, 스무디, 아이스티, 홍차, 허브티 등을 판매중입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "(실속상품)우동, 짜장면",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "실용성과 가성비가 높고 좋은 원단을 사용하여 보온성과 통풍성이 뛰어난 정통 아웃도어 브랜드 입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "아메리카노 등 커피류와 녹차, 아이스티, 홍차, 허브티, 스무디, 스파클링류 등을 판매중입니다.",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "용우동",
        "description": "(실속상품)우동, 짜장면",
        "hours": "08:00 ~ 20:30"
      },
      {
        "name": "클라이머홀릭",
        "description": "실용성과 가성비가 높고 좋은 원단을 사용하여 보온성과 통풍성이 뛰어난 정통 아웃도어 브랜드 입니다.",
        "hours": "08:00 ~ 19:30"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "하행 1개소",
        "hours": "06:00 ~ 20:00"
      },
      {
        "name": "롯데리아",
        "description": "하행 1개소",
        "hours": "06:00 ~ 24:00"
      },
      {
        "name": "할리스커피",
        "description": "상/하행 각 1개소",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "꽈배기, 십원빵, 마성김밥",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "ELLEGOLF",
        "description": "본관 패션매장 2층",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "JDX",
        "description": "본관 패션매장 2층",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "상/하행 각 1개소",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "옥외매장에 있습니다.",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "커피 외 아이스티 등 음료 판매",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "할리스커피",
        "description": "커피 외 아이스티 등 음료 판매",
        "hours": "08:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "커피, TEA, 번 판매",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "영업시간 안내 [07시~19시]",
        "hours": "07:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "커피, 차류(시중과 동일한 서비스 제공)",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "코바코",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:30 ~ 18:00"
      },
      {
        "name": "파스쿠찌",
        "description": "23.12.13일부터 영업을 할리스에서 파스쿠찌로 리모델링 공사 완료 후 영업을 시작하였습니다.",
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "기타",
        "description": "파스쿠찌커피매장 /주말,공휴일 07시부터~07시30분까지 영업",
        "hours": "07:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "아메리카노, 카페라떼, 바닐라라떼, 스무디, 아이스티, 등",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "디즈니 골프, 불스원",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "뉴욕핫도그",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "훼미리마트",
        "description": "CU",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "JDX",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "NEPA",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "오가다, 임실치즈",
        "hours": "08:00 ~ 22:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "스태프핫도그",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "훼미리마트",
        "description": "CU",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "JDX",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "NEPA",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "오가다, 임실치즈",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "06:00 ~ 20:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "기타",
        "description": "돈까스회관",
        "hours": "05:00 ~ 24:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "평일 6시 ~ 21시, 주말 6시 ~ 22시",
        "hours": "06:00 ~ 21:00"
      },
      {
        "name": "롯데리아",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "평일 8시 ~ 20시, 주말 7시 ~ 22시",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "돈까스회관",
        "hours": "05:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 22:00"
      },
      {
        "name": "롯데리아",
        "description": "입점 브랜드 매장입니다.",
        "hours": "06:00 ~ 02:00"
      },
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 22:00"
      },
      {
        "name": "나뚜루",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "JDX",
        "description": "입점 브랜드 매장입니다.",
        "hours": "09:00 ~ 21:00"
      },
      {
        "name": "기타",
        "description": "나주곰탕, 백암순대국, 소미미단팥빵(08:00~20:00)",
        "hours": "07:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "스태프핫도그",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "크라제맥스, 정안알밤빵, 아리랑고로케",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "카페베네",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "로티보이",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 22:00"
      },
      {
        "name": "기타",
        "description": "우동타임, 공주밤빵, 롤리폴리캔디",
        "hours": "08:00 ~ 22:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도넛, 커피, 음료",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "롯데리아",
        "description": "햄버거, 치킨, 음료, 아이스크림",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "커피, 음료",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "할리스커피",
        "description": "커피, 음료",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "세븐일레븐",
        "description": "스낵, 음료, 잡화, 아이스크림, 비상상비약등",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "임실치즈피자",
        "description": "치즈, 피자등",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "발렌키 의류, 잡화매장",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도넛, 커피, 음료",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "롯데리아",
        "description": "햄버거, 치킨, 음료, 아이스크림",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "커피, 음료등",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "할리스커피",
        "description": "커피, 음료",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "세븐일레븐",
        "description": "스낵, 음료, 잡화, 비상상비약, 아이스크림등",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "의류, 잡화",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "설빙",
        "description": "설빙, 음료등",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도너츠",
        "hours": "07:00 ~ 22:00"
      },
      {
        "name": "맥도날드",
        "description": "맥도날드(드라이브스루포함)",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "미니스탑",
        "description": "편의점",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피&음료&푸드",
        "hours": "07:00 ~ 21:00"
      },
      {
        "name": "기타",
        "description": "비어드파파 - 슈, 커피,음료",
        "hours": "07:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "뚜레쥬르",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "JDX",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "CU편의점 / 경주빵 / 고구마명가 / 고선생고로케 / 네이쳐팜 / 퀸쥬얼리 / 에어워크&다정다감 / 아띠(생활한복) / 환공어가 / 풍년제과 / 디즈니",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "뚜레쥬르",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "CU편의점 / 네이쳐팜 / 고선생고로케 / 고구마명가 / 경주빵 / 퀸쥬얼리 / 에어워크&다정다감 / 아띠(생활한복) / 커터앤벅 / 풍년제과",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "휴게소특수매장(쿠폰/할인 사이즈변경안됨), 할리스포인트적립",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "육해밥",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "난카츠난우동",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "스무티킹",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "카페 에델리아",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "서울분식",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "롤리폴리(젤리캔디샵)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "위드미편의점",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 21:00"
      },
      {
        "name": "기타",
        "description": "평창올림픽 기념품",
        "hours": "08:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "배스킨라빈스",
        "description": "아이스크림과 커피류를 판매하는 24시간 매장입니다.",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "탐앤탐스",
        "description": "다양한 커피를 즐길 수 있는 커피전문 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "훼미리마트",
        "description": "CU로 이름이 바뀌었고 다양한 상품을 갖춘 24시간 편의점입니다.",
        "hours": "00:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "배스킨라빈스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "임실치즈피자",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "편의점 CU",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "엔제리너스 단독매장 운영",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "외부 매장내 탐앤탐스 운영",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "용우동 브랜드 향미암 운영",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "임실치즈피자",
        "description": "임실군에서 직접 운영하는 임실치즈피자",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "이마트24",
        "description": "21시~ 익일 07시 무인운영",
        "hours": "07:00 ~ 21:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "이마트24",
        "description": "24시 운영(21시~익일 07시까지 무인운영)",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "CU",
        "description": "7월1일 오픈",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 19:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "브랜드 커피 전문매장(본관 화장실 앞)",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "일프레소, 스트릿츄러스",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "기타",
        "description": "켈리토스트",
        "hours": "07:30 ~ 19:30"
      },
      {
        "name": "기타",
        "description": "일프레소커피",
        "hours": "07:00 ~ 19:30"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "1층",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "할리스커피",
        "description": "1,4층",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "1층",
        "hours": "07:00 ~ 20:00"
      },
      {
        "name": "스트릿츄러스",
        "description": "4층",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "4층 일프레소 커피, 사과당 베이커리, 설악산단풍빵(소상공인)",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "매장위치 : 건물좌측, 화장실우측",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "매장위치 : 건물내부 우측",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "매장위치 : 건물우측",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "매장위치 : 건물전면 좌측",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "로띠번",
        "description": "매장위치 : 건물내부 우측(24시간 운영)",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "매장위치 : 건물전면 우측, 화장실 앞",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "편의점 좌측 위치",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "라면 우동 퇴식구 맞은편 위치",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "도너츠, 커피",
        "hours": "07:00 ~ 22:00"
      },
      {
        "name": "롯데리아",
        "description": "콜라음료류, 햄버거류",
        "hours": "07:00 ~ 22:00"
      },
      {
        "name": "할리스커피",
        "description": "아메리카노, 카푸치노외",
        "hours": "09:30 ~ 21:30"
      },
      {
        "name": "ELLEGOLF",
        "description": "골프의류",
        "hours": "09:30 ~ 21:30"
      },
      {
        "name": "탐앤탐스",
        "description": "아메리카노, 카푸치노등",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "세븐일레븐",
        "description": "음료, 과자",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "달콤한 로띠번",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "유명브랜드 커피점",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "달콤커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "무인운영시간: 22:30 ~ (익일)06:00",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "무인운영시간: 22:00 ~ (익일)06:00",
        "hours": "00:00 ~ 22:00"
      },
      {
        "name": "크리스피크림",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [],
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파리바게뜨",
        "description": "입점 브랜드 매장입니다.",
        "hours": "07:00 ~ 22:00"
      },
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "06:00 ~ 22:00"
      },
      {
        "name": "CU",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "클라이머홀릭",
        "description": "의류매장",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "하이샵(잡화)매장",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "휴게소 內 매장 1개소 정상 영업. (드라이브 스루 1개소 영업 중단.)",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "로띠번/바닐라번",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "세계 3대 커피 브랜드와 비교하여 최고의 평가를 받은 드롭탑",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "오븐에서 갓 구워낸 따끈따끈한 로띠번/ 모카의 향을 잃지 않고 모카향 토핑의 크리스피한 빵",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "세계 3대 커피 브랜드와 비교하여 최고의 평가를 받은 드롭탑",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "용우동",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "할리스커피",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "용우동",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "1F, 2F 2개소 운영",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "파스쿠찌",
        "description": "1F, 2F 2개소 운영",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "1F, 2F 2개소 운영",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "용우동",
        "description": "1F 푸드코트",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "기타",
        "description": "(푸드코트) 풍경마루/연안식당/유천냉면, 용우동/천서리막국수, 북창동순두부/혜화동돈까스, 인더비엣, 신의주찹쌀순대, 이루다제면소, (열린매장) 호두잣과자, 핫츄, 간식탐구, 슈퍼스닭, 신서방떡볶이, 신서방왕만두, 트윗젤, 연돈볼카츠/소미미단팥빵, 만쥬리아/BHC, 노브랜드버거, 엣조잇/마성떡볶이/마성마리김밥, 만쥬리아/인생닭강정, 호두붐붐/행운의동전빵",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "기타",
        "description": "cu편의점",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "훼미리마트",
        "description": "CU편의점",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피류 및 음료판매",
        "hours": "07:30 ~ 19:00"
      },
      {
        "name": "기타",
        "description": "소미미 단팥빵",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "훼미리마트",
        "description": "CU편의점",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "커피류 및 음료 판매",
        "hours": "08:00 ~ 20:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "던킨도너츠",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 19:00"
      },
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "유인편의점(창원) 무인편의점(양평 24시간운영)",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "20:00 ~ 08:00 (야간시간 무인운영)",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "로띠번",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "GS25",
        "description": "20:00 ~ 08:00 (야간시간 무인운영)",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "엔제리너스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "이마트24",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "스타벅스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "성북당",
        "description": "십원빵",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "토스타토스트",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "붕어유랑단",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "롯데리아",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "탐앤탐스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "유인판매 - 07:00~21:00 / 무인판매 - 21:00~07:00",
        "hours": "00:00 ~ 24:00"
      },
      {
        "name": "성북당",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "토스타토스트",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "07:00~20:00 CU편의점 유인운영, 20:00~07:00 무인운영",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "투썸플레이스",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "CU",
        "description": "07:00~20:00 유인매장 운영, 20:00~07:00 무인 편의점 운영",
        "hours": "00:00 ~ 24:00"
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
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "GS25",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
        "name": "추억의 옛날우동",
        "price": 6000
      },
      {
        "name": "EX-우동",
        "price": 6000
      },
      {
        "name": "농심가락우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "ex-라면",
        "price": 4500
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "유부김밥",
        "price": 4000
      },
      {
        "name": "수제 등심돈가스",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "철판 제육덮밥",
        "price": 8500
      },
      {
        "name": "낙지덮밥",
        "price": 9500
      },
      {
        "name": "전주비빔밥",
        "price": 8500
      },
      {
        "name": "장터 국밥",
        "price": 9000
      },
      {
        "name": "사골 육개장",
        "price": 9000
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
      },
      {
        "name": "시원한 식혜",
        "price": 3000
      },
      {
        "name": "바삭한 핫도그",
        "price": 4000
      },
      {
        "name": "아메리카노(HOT)",
        "price": 4100
      },
      {
        "name": "아메리카노(ICE)",
        "price": 4500
      }
    ],
    "brandStores": [
      {
        "name": "파스쿠찌",
        "description": "입점 브랜드 매장입니다.",
        "hours": "08:00 ~ 20:00"
      },
      {
        "name": "GS25",
        "description": "입점 브랜드 매장입니다.",
        "hours": "00:00 ~ 24:00"
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
