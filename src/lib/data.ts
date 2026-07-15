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
  image: string;
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
    brand: string;
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 410,
    "signatureMenu": {
      "name": "옛날돈까스",
      "price": 11500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "농심어묵우동",
        "price": 7000
      },
      {
        "name": "농심유부우동",
        "price": 6500
      },
      {
        "name": "순두부찌개",
        "price": 9500
      },
      {
        "name": "옛날자장면",
        "price": 8000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "교동짬뽕",
        "price": 10000
      },
      {
        "name": "새우볶음밥",
        "price": 10000
      },
      {
        "name": "말죽거리소고기국밥",
        "price": 9500
      },
      {
        "name": "(실속)바지락미역국",
        "price": 7000
      },
      {
        "name": "매운돈까스",
        "price": 12000
      },
      {
        "name": "잔치국수",
        "price": 7000
      },
      {
        "name": "돈비국수",
        "price": 10500
      },
      {
        "name": "국물비빔국수",
        "price": 8000
      },
      {
        "name": "돈잔국수",
        "price": 9500
      },
      {
        "name": "돈모밀국수",
        "price": 10500
      },
      {
        "name": "냉모밀",
        "price": 8000
      },
      {
        "name": "소고기짬뽕",
        "price": 12000
      },
      {
        "name": "명인돼지고기김치찌개",
        "price": 9500
      },
      {
        "name": "돌솥비빔밥",
        "price": 9500
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "치즈돈가스",
        "price": 13500
      },
      {
        "name": "라면정식(떡라면,공기밥)",
        "price": 5900
      },
      {
        "name": "옛날짜장정식",
        "price": 9000
      },
      {
        "name": "짬뽕밥",
        "price": 10000
      },
      {
        "name": "짬뽕정식",
        "price": 11000
      },
      {
        "name": "짜장면곱배기",
        "price": 10000
      },
      {
        "name": "짬뽕곱배기",
        "price": 12000
      },
      {
        "name": "소고기짬뽕곱배기",
        "price": 14000
      },
      {
        "name": "뚝배기불고기",
        "price": 10000
      },
      {
        "name": "(실속)소식좌제육덮밥",
        "price": 7000
      },
      {
        "name": "소고기짬뽕밥",
        "price": 12000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "(실속)생우동",
        "price": 5500
      },
      {
        "name": "말죽거리 떡갈비 세트",
        "price": 12000
      },
      {
        "name": "순두부찌개 떡갈비 세트",
        "price": 12000
      },
      {
        "name": "제육 된장찌개 세트",
        "price": 12000
      },
      {
        "name": "돌솥비빔밥 된장세트",
        "price": 11500
      },
      {
        "name": "비빔밥 된장찌개 세트",
        "price": 11500
      },
      {
        "name": "마성 떡볶이",
        "price": 5000
      },
      {
        "name": "마성 꼬마김밥(4줄)",
        "price": 6000
      },
      {
        "name": "마성 계란꼬마김밥(4줄)",
        "price": 6000
      },
      {
        "name": "마성 부산어묵",
        "price": 4000
      },
      {
        "name": "마성 튀김범벅",
        "price": 7500
      },
      {
        "name": "마성 닭강정",
        "price": 7500
      },
      {
        "name": "서리태콩국수",
        "price": 10000
      },
      {
        "name": "한돈 동파육 덮밥",
        "price": 10000
      },
      {
        "name": "(실속)김치볶음밥",
        "price": 7000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "김치볶음밥우동세트",
        "price": 8500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "야채튀김우동",
        "price": 7500
      },
      {
        "name": "김치볶음밥라면세트",
        "price": 7000
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
      "evChargersCount": 6,
      "hasHydrogen": false
    },
    "facilities": [
      "수유실",
      "쉼터",
      "ATM",
      "열린매장(간식)"
    ],
    "latitude": 37.4589,
    "longitude": 127.0392
  },
  {
    "slug": "jugjeon-seoul",
    "name": "죽전휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "부산어묵우동",
      "price": 7500,
      "description": "판매량 1위에 베스트셀러 가락우동, 우동과 꼬치어묵의 만남으로 남녀노소 누구나 부담없이 드실 수 있는 맛",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "가락속풀이생라면",
        "price": 6500
      },
      {
        "name": "대구식소고기국",
        "price": 7000
      },
      {
        "name": "가락자장면",
        "price": 7000
      },
      {
        "name": "새집추어탕(백년가게)",
        "price": 12000
      },
      {
        "name": "신포순대국(백년가게)",
        "price": 10000
      },
      {
        "name": "The 쫀득한 도가니탕정식",
        "price": 10000
      },
      {
        "name": "용인성산한돈뼈해장국",
        "price": 11000
      },
      {
        "name": "카레라이스정식",
        "price": 7000
      },
      {
        "name": "김치볶음밥정식",
        "price": 7000
      },
      {
        "name": "가락짬뽕",
        "price": 8500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "야채튀김우동",
        "price": 7500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "가락우동",
        "price": 5500
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "돈가스정식",
        "price": 10000
      },
      {
        "name": "짜장덮밥",
        "price": 7000
      },
      {
        "name": "용인청경채라면",
        "price": 6500
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
      "gasolinePrice": 1836,
      "dieselPrice": 1837,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "수제등심돈가스",
      "price": 12000,
      "description": "코바코 수제등심돈가스 입니다",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "유부우동",
        "price": 7500
      },
      {
        "name": "치즈돈가스",
        "price": 12000
      },
      {
        "name": "생선가스",
        "price": 12000
      },
      {
        "name": "왕새우튀김우동",
        "price": 8500
      },
      {
        "name": "돈가스우동정식",
        "price": 13000
      },
      {
        "name": "실속흑돼지돈가스",
        "price": 10000
      },
      {
        "name": "김치냄비우동",
        "price": 9000
      },
      {
        "name": "새우볶음밥",
        "price": 9000
      },
      {
        "name": "돌솥알밥",
        "price": 9000
      },
      {
        "name": "표고버섯덮밥",
        "price": 10000
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "알밥우동정식",
        "price": 12000
      },
      {
        "name": "꼬치어묵우동",
        "price": 8000
      },
      {
        "name": "풍전육개장",
        "price": 13000
      },
      {
        "name": "풍전해장국",
        "price": 13000
      },
      {
        "name": "추억의라면",
        "price": 3500
      },
      {
        "name": "ex-라면",
        "price": 4000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "사골우거지국밥",
        "price": 7000
      },
      {
        "name": "소고기미역국",
        "price": 7000
      },
      {
        "name": "북창동순두부",
        "price": 11000
      },
      {
        "name": "햄치즈순두부",
        "price": 11000
      },
      {
        "name": "해물순두부",
        "price": 12000
      },
      {
        "name": "고추장불고기순두부정식",
        "price": 18000
      },
      {
        "name": "갈비맛양념구이순두부정식",
        "price": 19500
      },
      {
        "name": "고추장불고기(단품)",
        "price": 8900
      },
      {
        "name": "갈비맛양념구이",
        "price": 9900
      },
      {
        "name": "명품한우국밥",
        "price": 12000
      },
      {
        "name": "돼지김치찌개",
        "price": 9000
      },
      {
        "name": "뚝배기비빔밥",
        "price": 11000
      },
      {
        "name": "새싹비빔밥",
        "price": 10000
      },
      {
        "name": "열무비빔밥",
        "price": 9500
      },
      {
        "name": "불고기비빔밥",
        "price": 12000
      },
      {
        "name": "어묵김치냄비우동",
        "price": 10000
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
      "lpgPrice": 1157,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 362,
    "signatureMenu": {
      "name": "한우국밥",
      "price": 11000,
      "description": "사골국물에 소고기, 무, 우거지, 고추가루,넣어 끓인 후 콩나물을 넣어 토렴하여 내는 음식",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "어묵우동",
        "price": 6500
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "라면",
        "price": 4500
      },
      {
        "name": "라면 + 퓨전충무김밥",
        "price": 10000
      },
      {
        "name": "퓨전충무김밥",
        "price": 6000
      },
      {
        "name": "라면정식",
        "price": 5500
      },
      {
        "name": "의정부식부대찌개",
        "price": 10000
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "초당순두부찌개",
        "price": 10000
      },
      {
        "name": "옛날돼지고기김치찌개",
        "price": 10000
      },
      {
        "name": "황태해장국",
        "price": 10000
      },
      {
        "name": "뚝배기 불고기(소고기)",
        "price": 10000
      },
      {
        "name": "제육비빔밥",
        "price": 10000
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "등심돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "야채튀김우동",
        "price": 6500
      },
      {
        "name": "콩나물해장라면",
        "price": 6000
      },
      {
        "name": "잔치국수",
        "price": 6000
      },
      {
        "name": "칼국수",
        "price": 8000
      },
      {
        "name": "떡만두국",
        "price": 8500
      },
      {
        "name": "맑은나주곰탕",
        "price": 11000
      },
      {
        "name": "한우소머리곰탕",
        "price": 13000
      },
      {
        "name": "장터국밥",
        "price": 11000
      },
      {
        "name": "특곰탕",
        "price": 13000
      },
      {
        "name": "부대곰탕",
        "price": 11000
      },
      {
        "name": "짜장면",
        "price": 8000
      },
      {
        "name": "우삼겹짬뽕",
        "price": 12000
      },
      {
        "name": "해물짬뽕",
        "price": 10000
      },
      {
        "name": "미니탕수육",
        "price": 14000
      },
      {
        "name": "우삼겹짬뽕세트",
        "price": 18000
      },
      {
        "name": "해물짬뽕세트",
        "price": 16000
      },
      {
        "name": "짜장면1인세트",
        "price": 14000
      },
      {
        "name": "짬뽕밥",
        "price": 10000
      },
      {
        "name": "새우볶음밥",
        "price": 10000
      },
      {
        "name": "돌솥비빔밥",
        "price": 10000
      },
      {
        "name": "육계장",
        "price": 10000
      },
      {
        "name": "(실속)어린이돈가스",
        "price": 7000
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 362,
    "signatureMenu": {
      "name": "안성국밥",
      "price": 10000,
      "description": "24시간 우려낸 사골국물에 다양한 야채와 갖은 양념으로 끊여내어 옛 장터의 맛을 재현한 안성휴게소 대표메뉴",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "한우소머리국밥",
        "price": 13000
      },
      {
        "name": "안성곰탕",
        "price": 9500
      },
      {
        "name": "한우육개장",
        "price": 11000
      },
      {
        "name": "차돌된장찌개",
        "price": 9000
      },
      {
        "name": "묵은지김치찌개",
        "price": 9000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "(실속) 소고기무국",
        "price": 7000
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 12500
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "어묵우동",
        "price": 7000
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "(실속) ex라면",
        "price": 4000
      },
      {
        "name": "병천순대국밥",
        "price": 10000
      },
      {
        "name": "소불고기덮밥",
        "price": 11000
      },
      {
        "name": "매콤제육덮밥",
        "price": 10000
      },
      {
        "name": "꼬시래기등심돈가스",
        "price": 11000
      },
      {
        "name": "먹물치즈돈가스",
        "price": 13000
      },
      {
        "name": "비파고구마치즈돈가스",
        "price": 13000
      },
      {
        "name": "매생이생선가스",
        "price": 12000
      },
      {
        "name": "(실속) 콩나물황태국",
        "price": 7000
      },
      {
        "name": "한우불고기덮밥",
        "price": 13000
      },
      {
        "name": "꼬치어묵우동(신관)",
        "price": 7000
      },
      {
        "name": "새우튀김우동(신관)",
        "price": 7500
      },
      {
        "name": "(실속) 된장찌개",
        "price": 7000
      },
      {
        "name": "속풀이생라면",
        "price": 6000
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
      "dieselPrice": 1804,
      "lpgPrice": 1165,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "흑돼지김치찌개",
      "price": 10000,
      "description": "김치와 흑돼지의 진한 향기가 어우러져 얼큰하고 깊은 맛을 자랑하는 흑돼지 김치찌개",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "계란라면정식",
        "price": 6000
      },
      {
        "name": "순두부찌개",
        "price": 9500
      },
      {
        "name": "한신김치우동",
        "price": 7000
      },
      {
        "name": "도시락유부우동세트",
        "price": 11000
      },
      {
        "name": "야채튀김우동",
        "price": 6500
      },
      {
        "name": "한신삼진어묵우동",
        "price": 7500
      },
      {
        "name": "계란김치라면",
        "price": 5500
      },
      {
        "name": "계란떡라면",
        "price": 5500
      },
      {
        "name": "입장거봉포도 돈가스",
        "price": 11000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "거봉포도치즈 돈가스",
        "price": 12000
      },
      {
        "name": "두부된장찌개(실속상품/ex푸드)",
        "price": 7000
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "육개장(호텔컬렉션)",
        "price": 9500
      },
      {
        "name": "사골우거지국(실속상품)",
        "price": 7000
      },
      {
        "name": "동물복지 고추장돼지불고기 덮",
        "price": 10500
      },
      {
        "name": "동물복지 간장돼지불고기 덮밥",
        "price": 10500
      },
      {
        "name": "옛날도시락",
        "price": 6000
      },
      {
        "name": "충무김밥 포장용",
        "price": 5500
      },
      {
        "name": "박순자 아우내순대 순대국밥",
        "price": 10000
      },
      {
        "name": "박순자아우내순대 순대만국밥",
        "price": 10000
      },
      {
        "name": "박순자아우내순대 모듬순대",
        "price": 16000
      },
      {
        "name": "삼겹살구이김밥",
        "price": 6900
      },
      {
        "name": "잔치국수",
        "price": 7000
      },
      {
        "name": "김치삼겹덮밥",
        "price": 8000
      },
      {
        "name": "삼겹살김밥(포장용)",
        "price": 6900
      },
      {
        "name": "(실속) 한신즉석우동",
        "price": 5500
      },
      {
        "name": "냉모밀소바",
        "price": 7500
      },
      {
        "name": "김치비빔국수",
        "price": 8000
      },
      {
        "name": "청주식흑돼지짜글이",
        "price": 10000
      },
      {
        "name": "(실속) 소고기미역국",
        "price": 7000
      },
      {
        "name": "입장거봉포도돈가스+레몬이드",
        "price": 12400
      },
      {
        "name": "입장거봉포도치즈돈가스+레몬에이드",
        "price": 13400
      },
      {
        "name": "입장거봉포도돈가스+제로콜라캔",
        "price": 12100
      },
      {
        "name": "입장거봉포도치즈돈가스+제로콜라캔",
        "price": 13100
      },
      {
        "name": "동물복지간장덮밥+제로콜라캔",
        "price": 11600
      },
      {
        "name": "동물복지고추장덮밥+제로콜라캔",
        "price": 11600
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "흑돼지김치찌개+비락식혜",
        "price": 11700
      },
      {
        "name": "서울양평해장국",
        "price": 14000
      },
      {
        "name": "치즈돈가스",
        "price": 12000
      },
      {
        "name": "치즈돈가스+레몬에이드",
        "price": 13400
      },
      {
        "name": "치즈돈가스+제로콜라캔",
        "price": 13100
      },
      {
        "name": "한신비빔우동",
        "price": 7500
      },
      {
        "name": "한신해장냉우동",
        "price": 7500
      },
      {
        "name": "한신얼큰우동",
        "price": 6000
      },
      {
        "name": "열무국수",
        "price": 8500
      },
      {
        "name": "꼬막비빔밥",
        "price": 10000
      },
      {
        "name": "고추장대패덮밥",
        "price": 10000
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
      "dieselPrice": 1834,
      "lpgPrice": 1226,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 340,
    "signatureMenu": {
      "name": "명품한우국밥",
      "price": 12000,
      "description": "한우고기를 푹 고아낸 육수에 우거지 콩나물 대파 무 등의 각종 야채를 넣고 된장과 고춧가루, 소금, 후추, 국간장 등의 양념을 넣어 푹 끊여낸 음식으로 휴게소에서 대표메뉴로 지정한만큼 푸짐하고 든든한 음식",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "뚝배기비빔밥",
        "price": 11000
      },
      {
        "name": "새싹비빔밥",
        "price": 10000
      },
      {
        "name": "콩나물국밥",
        "price": 8000
      },
      {
        "name": "해물 순두부",
        "price": 9000
      },
      {
        "name": "돼지김치찌개",
        "price": 9000
      },
      {
        "name": "순두부",
        "price": 8000
      },
      {
        "name": "곤지암 한우소머리국밥",
        "price": 12000
      },
      {
        "name": "얼큰돼지국밥",
        "price": 10000
      },
      {
        "name": "한우곰탕",
        "price": 12000
      },
      {
        "name": "제육덮밥",
        "price": 10000
      },
      {
        "name": "소고기 무국",
        "price": 9000
      },
      {
        "name": "한우떡만두국",
        "price": 10000
      },
      {
        "name": "명품닭개장",
        "price": 10000
      },
      {
        "name": "우렁된장찌개",
        "price": 9000
      },
      {
        "name": "한우 미역국",
        "price": 7000
      },
      {
        "name": "실속육개장",
        "price": 7000
      },
      {
        "name": "망향등심돈가스",
        "price": 10000
      },
      {
        "name": "눈꽃치즈돈가스",
        "price": 12000
      },
      {
        "name": "뚝배기 불고기",
        "price": 11000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "일반라면`",
        "price": 5000
      },
      {
        "name": "떡라면",
        "price": 6000
      },
      {
        "name": "얼큰 어묵해장라면",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "사과돈가스",
        "price": 12000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동정식",
        "price": 9500
      },
      {
        "name": "유부우동정식",
        "price": 8500
      },
      {
        "name": "김치우동",
        "price": 6500
      },
      {
        "name": "자장면",
        "price": 7000
      },
      {
        "name": "잔치국수",
        "price": 6500
      },
      {
        "name": "햄가득 부대찌개",
        "price": 11000
      },
      {
        "name": "우삼겹 부대찌개",
        "price": 15000
      },
      {
        "name": "김치 부대찌개",
        "price": 12000
      },
      {
        "name": "버섯 부대찌개",
        "price": 13000
      },
      {
        "name": "(매운맛)갈릭라이스치킨덮밥",
        "price": 11000
      },
      {
        "name": "(순한맛)갈릭라이스 치킨덮밥",
        "price": 11000
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
      "evChargersCount": 12,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 59,
    "signatureMenu": {
      "name": "선물용명품호두과자(42개입)",
      "price": 13000,
      "description": "천안의 명물인 천안호두과자~위생적인 HACCP 시스템에서 생산된 안전하고 맛있는 천안호두과자!!",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(앤티앤스)아몬드크림치즈스틱",
        "price": 6400
      },
      {
        "name": "해주비빔밥",
        "price": 11000
      },
      {
        "name": "옛날우동",
        "price": 5500
      },
      {
        "name": "황태해장국",
        "price": 7000
      },
      {
        "name": "병천순대국밥",
        "price": 11000
      },
      {
        "name": "(특)병천순대국밥",
        "price": 12000
      },
      {
        "name": "강된장호두비빔밥",
        "price": 10500
      },
      {
        "name": "강된장보리비빔밥",
        "price": 10000
      },
      {
        "name": "돼지김치찌개",
        "price": 10500
      },
      {
        "name": "순두부찌개",
        "price": 9500
      },
      {
        "name": "어묵우동",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "김치우동",
        "price": 6000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "라면세트",
        "price": 5500
      },
      {
        "name": "ex-라면",
        "price": 4000
      },
      {
        "name": "소고기쌀국수",
        "price": 9000
      },
      {
        "name": "호두파슈(단팥/슈크림반)",
        "price": 14000
      },
      {
        "name": "명품호두과자(10개입)",
        "price": 3200
      },
      {
        "name": "선물용슈크림호두과자(42개입)",
        "price": 16000
      },
      {
        "name": "명품호두과자(21개입)",
        "price": 6500
      },
      {
        "name": "간식용슈크림호두과자(10개입)",
        "price": 4500
      },
      {
        "name": "간식용슈크림호두과자(15개입)",
        "price": 6000
      },
      {
        "name": "(앤티앤스)크림치즈스틱",
        "price": 6200
      },
      {
        "name": "햄치즈토스트세트",
        "price": 8900
      },
      {
        "name": "햄치즈토스트",
        "price": 5500
      },
      {
        "name": "스페셜토스트",
        "price": 6000
      },
      {
        "name": "스페셜토스트세트",
        "price": 9400
      },
      {
        "name": "소불고기토스트",
        "price": 6500
      },
      {
        "name": "소불고기토스트세트",
        "price": 9900
      },
      {
        "name": "미니팝콘치킨",
        "price": 5000
      },
      {
        "name": "왕콜팝치킨",
        "price": 6500
      },
      {
        "name": "콜팝치킨",
        "price": 5000
      },
      {
        "name": "로띠번",
        "price": 3800
      },
      {
        "name": "크림치즈번",
        "price": 4100
      },
      {
        "name": "호두카야번",
        "price": 4100
      },
      {
        "name": "다코야끼",
        "price": 5000
      },
      {
        "name": "쵸코크림와플",
        "price": 4500
      },
      {
        "name": "애플크림와플",
        "price": 4500
      },
      {
        "name": "순살소금꼬치",
        "price": 5500
      },
      {
        "name": "순살데리야끼꼬치",
        "price": 5500
      },
      {
        "name": "순살양념꼬치",
        "price": 5500
      },
      {
        "name": "소금파닭꼬치",
        "price": 5500
      },
      {
        "name": "데리야끼파닭꼬치",
        "price": 5500
      },
      {
        "name": "양념파닭꼬치",
        "price": 5500
      },
      {
        "name": "(알뜰간식)옛날핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)해물바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)떡꼬치",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통감자(소)",
        "price": 3200
      },
      {
        "name": "조미쥐포구이",
        "price": 4000
      },
      {
        "name": "(알뜰간식)떡햄바",
        "price": 3700
      },
      {
        "name": "떡햄바",
        "price": 4000
      },
      {
        "name": "(알뜰간식)수제어묵바",
        "price": 3700
      },
      {
        "name": "고구마스틱",
        "price": 4400
      },
      {
        "name": "(알뜰간식)감자핫도그",
        "price": 3700
      },
      {
        "name": "통감자(대)",
        "price": 5000
      },
      {
        "name": "맥반석구이오징어",
        "price": 11000
      },
      {
        "name": "순살치킨꼬치",
        "price": 5500
      },
      {
        "name": "(알뜰간식)떡볶이",
        "price": 3700
      },
      {
        "name": "(알뜰간식)찐옥수수1개",
        "price": 2700
      },
      {
        "name": "(알뜰간식)치킨팝콘",
        "price": 3700
      },
      {
        "name": "회오리감자",
        "price": 4000
      },
      {
        "name": "매직핫도그",
        "price": 5500
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰간식)매운수제어묵바",
        "price": 3700
      },
      {
        "name": "꼬치어묵",
        "price": 4500
      },
      {
        "name": "HOT흑임자라떼(R)",
        "price": 5500
      },
      {
        "name": "HOT오곡라떼(R)",
        "price": 5500
      },
      {
        "name": "(알뜰간식)롱츄러스",
        "price": 3700
      },
      {
        "name": "복숭아아이스티(R)",
        "price": 5500
      },
      {
        "name": "망고스무디(L)",
        "price": 7000
      },
      {
        "name": "요거트딸기스무디(L)",
        "price": 7000
      },
      {
        "name": "HOT유자차(R)",
        "price": 5500
      },
      {
        "name": "HOT생강차(R)",
        "price": 5500
      },
      {
        "name": "ICE녹차라떼(R)",
        "price": 5500
      },
      {
        "name": "HOT카라멜마끼야또(R)",
        "price": 6000
      },
      {
        "name": "ICE카페라떼(R)",
        "price": 5500
      },
      {
        "name": "HOT쵸코라떼(R)",
        "price": 5500
      },
      {
        "name": "딸기쥬스(L)",
        "price": 7000
      },
      {
        "name": "키위쥬스(L)",
        "price": 7000
      },
      {
        "name": "딸바쥬스(L)",
        "price": 7000
      },
      {
        "name": "레몬에이드(R)",
        "price": 5500
      },
      {
        "name": "ICE대추차(R)",
        "price": 5500
      },
      {
        "name": "HOT쌍화차(R)",
        "price": 7000
      },
      {
        "name": "ICE쵸코라떼(R)",
        "price": 5500
      },
      {
        "name": "ice바닐라라떼(R)",
        "price": 6000
      },
      {
        "name": "ICE연유라떼(R)",
        "price": 6000
      },
      {
        "name": "ICE자몽차(R)",
        "price": 5500
      },
      {
        "name": "츄러스롱스틱",
        "price": 4500
      },
      {
        "name": "츄러스아이스크림쵸코",
        "price": 7000
      },
      {
        "name": "ICE아메리카노(L)",
        "price": 5000
      },
      {
        "name": "망고쥬스(L)",
        "price": 7000
      },
      {
        "name": "자몽에이드(R)",
        "price": 5500
      },
      {
        "name": "ICE생강차(R)",
        "price": 5500
      },
      {
        "name": "HOT대추차(R)",
        "price": 5500
      },
      {
        "name": "ICE레몬차(R)",
        "price": 5500
      },
      {
        "name": "HOT레몬차(R)",
        "price": 5500
      },
      {
        "name": "ICE고구마라떼(R)",
        "price": 5500
      },
      {
        "name": "ICE아메리카노1리터",
        "price": 7000
      },
      {
        "name": "HOT바닐라라떼(R)",
        "price": 6000
      },
      {
        "name": "HOT연유라떼(R)",
        "price": 6000
      },
      {
        "name": "HOT자몽차(R)",
        "price": 5500
      },
      {
        "name": "츄러스컵스틱",
        "price": 5500
      },
      {
        "name": "HOT아메리카노(L)",
        "price": 5000
      },
      {
        "name": "요거트망고스무디(R)",
        "price": 7000
      },
      {
        "name": "플레인스무디(R)",
        "price": 7000
      },
      {
        "name": "딸기스무디(L)",
        "price": 7000
      },
      {
        "name": "ICE유자차(R)",
        "price": 5500
      },
      {
        "name": "ICE오곡라떼(R)",
        "price": 5500
      },
      {
        "name": "ICE흑임자라떼(R)",
        "price": 5500
      },
      {
        "name": "ICE딸기라떼(L)",
        "price": 7000
      },
      {
        "name": "HOT카페라떼(R)",
        "price": 5500
      },
      {
        "name": "HOT녹차라떼(R)",
        "price": 5500
      },
      {
        "name": "ICE카라멜마끼야또(R)",
        "price": 6000
      },
      {
        "name": "청포도에이드(R)",
        "price": 5500
      },
      {
        "name": "토마토쥬스(L)",
        "price": 7000
      },
      {
        "name": "(알뜰간식)콜팝츄러스",
        "price": 3200
      },
      {
        "name": "대패삼겹덮밥",
        "price": 11500
      },
      {
        "name": "간장대패덮밥",
        "price": 11500
      },
      {
        "name": "매콤대패덮밥",
        "price": 11500
      },
      {
        "name": "가지덮밥",
        "price": 9500
      },
      {
        "name": "쭈꾸미덮밥",
        "price": 10000
      },
      {
        "name": "고기듬뿍짜장덮밥",
        "price": 9000
      },
      {
        "name": "카레덮밥",
        "price": 10000
      },
      {
        "name": "목살스테이크샐러드",
        "price": 13000
      },
      {
        "name": "알리오올리오파스타샐러드",
        "price": 14000
      },
      {
        "name": "수비드닭가슴살샐러드",
        "price": 13000
      },
      {
        "name": "리코타치즈샐러드",
        "price": 13000
      },
      {
        "name": "왕새우샐러드",
        "price": 13000
      },
      {
        "name": "닭가슴살랩샐러드",
        "price": 9400
      },
      {
        "name": "쉬림프로제파스타",
        "price": 13000
      },
      {
        "name": "베이컨 크림파스타",
        "price": 13000
      },
      {
        "name": "목살랩샐러드",
        "price": 9400
      },
      {
        "name": "(앤티앤스)할라피뇨치즈핫도그",
        "price": 6200
      },
      {
        "name": "(앤티앤스)핫도그",
        "price": 6000
      },
      {
        "name": "(앤티앤스)오리지날스틱",
        "price": 5700
      },
      {
        "name": "(앤티앤스)시나몬스틱",
        "price": 5700
      },
      {
        "name": "(앤티앤스)아몬드스틱",
        "price": 5700
      },
      {
        "name": "(실속) 된장찌개",
        "price": 7000
      },
      {
        "name": "남산왕돈가스",
        "price": 13500
      },
      {
        "name": "남산매운왕돈가스",
        "price": 13500
      },
      {
        "name": "남산치즈돈가스",
        "price": 14000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "숯불갈비맛소세지",
        "price": 5000
      },
      {
        "name": "육개장",
        "price": 10500
      },
      {
        "name": "소고기뭇국",
        "price": 9500
      },
      {
        "name": "리얼핫바",
        "price": 4500
      },
      {
        "name": "리얼고추맛바",
        "price": 4500
      },
      {
        "name": "명동칼국수",
        "price": 10000
      },
      {
        "name": "얼큰칼국수",
        "price": 11000
      },
      {
        "name": "명동떡만둣국",
        "price": 11000
      },
      {
        "name": "비빔국수",
        "price": 9000
      },
      {
        "name": "비돈국수",
        "price": 12000
      },
      {
        "name": "명동왕만두(6개)",
        "price": 10000
      },
      {
        "name": "칼제비",
        "price": 11000
      },
      {
        "name": "잔치국수",
        "price": 7500
      },
      {
        "name": "잔돈국수",
        "price": 11000
      },
      {
        "name": "냉모밀",
        "price": 9000
      },
      {
        "name": "모밀돈가스",
        "price": 12000
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
      "lpgPrice": 1118,
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 66,
    "signatureMenu": {
      "name": "전주콩나물국밥(2층)",
      "price": 8000,
      "description": "전주 남부식 콩나물 국밥 그대로 판매 2층 완산골 매장",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "떡갈비비밤밥(2층)",
        "price": 8000
      },
      {
        "name": "옛날 돈까스",
        "price": 10000
      },
      {
        "name": "박순자순대국밥(2층으로 올라오세요)",
        "price": 10000
      },
      {
        "name": "호두과자(3,000 ~ 24,000원)",
        "price": 3000
      },
      {
        "name": "사골우거지국밥",
        "price": 9000
      },
      {
        "name": "김치철판볶음밥",
        "price": 7000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "순두부찌개",
        "price": 8500
      },
      {
        "name": "황태국밥",
        "price": 8000
      },
      {
        "name": "차돌박이된장찌개",
        "price": 9000
      },
      {
        "name": "박순자 모둠순대(2층으로 올라오세요)",
        "price": 16000
      },
      {
        "name": "셀프라면",
        "price": 4000
      },
      {
        "name": "명동칼국수(얼큰한맛,일반맛)",
        "price": 8500
      },
      {
        "name": "떡만두국",
        "price": 8500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "잔치국수",
        "price": 6000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "만두라면",
        "price": 5000
      },
      {
        "name": "해장라면",
        "price": 5000
      },
      {
        "name": "짜장면",
        "price": 7000
      },
      {
        "name": "볶음밥",
        "price": 7000
      },
      {
        "name": "순두부짬뽕밥",
        "price": 9000
      },
      {
        "name": "오징어짬뽕",
        "price": 8000
      },
      {
        "name": "불고기덮밥",
        "price": 11000
      },
      {
        "name": "제육덮밥",
        "price": 10000
      },
      {
        "name": "등심돈까스",
        "price": 12000
      },
      {
        "name": "안심돈까스",
        "price": 13000
      },
      {
        "name": "치즈돈까스",
        "price": 11000
      },
      {
        "name": "떡꼬치(델리만쥬 매장)",
        "price": 3000
      },
      {
        "name": "야채바(델리만쥬 매장)",
        "price": 3700
      },
      {
        "name": "수제어묵바(델리만쥬 매장)",
        "price": 3700
      },
      {
        "name": "델리만쥬(델리만쥬 매장)",
        "price": 3700
      },
      {
        "name": "옛날핫도그(소떡매장)",
        "price": 3700
      },
      {
        "name": "해물바(소떡매장)",
        "price": 3700
      },
      {
        "name": "소떡소떡(소떡매장)",
        "price": 3700
      },
      {
        "name": "츄러스(소떡매장)",
        "price": 3700
      },
      {
        "name": "떡볶이(토스트 매장)",
        "price": 3700
      },
      {
        "name": "삶은옥수수(토스트 매장)",
        "price": 2500
      },
      {
        "name": "쥐포(오징어감자 매장)",
        "price": 3000
      },
      {
        "name": "통감자구이(오징어감자 매장)",
        "price": 3700
      },
      {
        "name": "치킨팝콘(핫도그 매장)",
        "price": 3700
      },
      {
        "name": "감자핫도그(핫도그 매장)",
        "price": 3700
      },
      {
        "name": "추억의옛날핫도그(핫도그 매장)",
        "price": 3700
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
      "gasolinePrice": 1835,
      "dieselPrice": 1834,
      "lpgPrice": 1247,
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
    "latitude": 36.4988,
    "longitude": 127.3627
  },
  {
    "slug": "cheongju-seoul",
    "name": "청주휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 73,
    "signatureMenu": {
      "name": "청주소고기국밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "흑돼지 김치찌개",
        "price": 9500
      },
      {
        "name": "등심 돈가스",
        "price": 11000
      },
      {
        "name": "짜장면",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "만두라면",
        "price": 5500
      },
      {
        "name": "잔치국수",
        "price": 6500
      },
      {
        "name": "바우네나주곰탕",
        "price": 11000
      },
      {
        "name": "참치새싹비빔밥",
        "price": 9000
      },
      {
        "name": "(실속) 된장찌개",
        "price": 7000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "(실속) 바지락표고미역국",
        "price": 7000
      },
      {
        "name": "(청주본가)소문난왕갈비탕",
        "price": 13000
      },
      {
        "name": "치즈돈까스",
        "price": 12000
      },
      {
        "name": "어묵우동",
        "price": 7000
      },
      {
        "name": "튀김우동",
        "price": 7000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "(실속) EX-라면",
        "price": 4000
      },
      {
        "name": "맑은나주곰탕",
        "price": 11000
      },
      {
        "name": "육개장국수정식",
        "price": 10500
      },
      {
        "name": "어묵국수",
        "price": 7000
      },
      {
        "name": "스팸야채볶음밥",
        "price": 9000
      },
      {
        "name": "오삼불고기덮밥",
        "price": 10000
      },
      {
        "name": "냉모밀",
        "price": 8000
      },
      {
        "name": "(실속) 실속우동",
        "price": 5500
      },
      {
        "name": "부대찌개",
        "price": 11000
      },
      {
        "name": "버섯 뚝배기불고기",
        "price": 11000
      },
      {
        "name": "얼큰 어묵우동",
        "price": 7000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 80,
    "signatureMenu": {
      "name": "치즈돈까스",
      "price": 11000,
      "description": "맛있는 돈까스 안에 치즈가 쭈욱~",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "옛날청국장",
        "price": 8500
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "(실속)통등심돈가스",
        "price": 10000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "(실속)EX라면",
        "price": 4000
      },
      {
        "name": "돼지고기김치지개",
        "price": 9000
      },
      {
        "name": "돼지뚝불고기",
        "price": 9000
      },
      {
        "name": "치즈돼지불고기",
        "price": 9500
      },
      {
        "name": "짜장면",
        "price": 8000
      },
      {
        "name": "낙지전복짬뽕",
        "price": 12000
      },
      {
        "name": "짜장면 곱빼기",
        "price": 9500
      },
      {
        "name": "짜장면1인세트",
        "price": 16000
      },
      {
        "name": "소고기 짬뽕",
        "price": 13000
      },
      {
        "name": "소고기짬뽕 곱빼기",
        "price": 14000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "낙지전복짬뽕1인세트",
        "price": 19000
      },
      {
        "name": "낙지전복짬뽕밥",
        "price": 12000
      },
      {
        "name": "새우볶음밥",
        "price": 11000
      },
      {
        "name": "(실속)소고기국밥",
        "price": 7000
      },
      {
        "name": "낙지전복짬뽕곱빼기",
        "price": 13000
      },
      {
        "name": "탕수육 (소)",
        "price": 15000
      },
      {
        "name": "(실속)황태콩나물해장국",
        "price": 7000
      },
      {
        "name": "돼지김치찌개",
        "price": 10000
      },
      {
        "name": "제육덮밥",
        "price": 11000
      },
      {
        "name": "차돌된장찌개",
        "price": 9500
      },
      {
        "name": "삼겹살정식",
        "price": 13000
      },
      {
        "name": "(기사식당)육개장",
        "price": 12000
      },
      {
        "name": "(유가네)육개장",
        "price": 11000
      },
      {
        "name": "얼큰순대국",
        "price": 11000
      },
      {
        "name": "만두국정식",
        "price": 11000
      },
      {
        "name": "한우소머리곰탕",
        "price": 13000
      },
      {
        "name": "순대국",
        "price": 10000
      },
      {
        "name": "나주곰탕",
        "price": 11000
      },
      {
        "name": "도가니탕",
        "price": 16000
      },
      {
        "name": "안흥찐빵",
        "price": 5500
      },
      {
        "name": "고기만두",
        "price": 6000
      },
      {
        "name": "금강설렁탕",
        "price": 11000
      },
      {
        "name": "금강살코기설렁탕",
        "price": 11000
      },
      {
        "name": "소고기짬뽕1인세트",
        "price": 20000
      },
      {
        "name": "소고기짬뽕밥",
        "price": 13000
      },
      {
        "name": "(실속)야채튀김우동",
        "price": 5500
      },
      {
        "name": "표고차돌영양비빔밥",
        "price": 11000
      },
      {
        "name": "얼큰곰탕",
        "price": 11000
      },
      {
        "name": "얼큰칼국수정식",
        "price": 10000
      },
      {
        "name": "얼큰소내장탕",
        "price": 13000
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "콩나물해장라면",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "돈가스제로콜라세트",
        "price": 11000
      },
      {
        "name": "(실속)어린이돈가스",
        "price": 7000
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
      "gasolinePrice": 1845,
      "dieselPrice": 1835,
      "lpgPrice": 1185,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 87,
    "signatureMenu": {
      "name": "수제돈가스",
      "price": 12000,
      "description": "얼리지 않은 생고기를 직접 가공해 만드는 수제돈가스",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "치킨마요덮밥",
        "price": 8000
      },
      {
        "name": "실속황태해장국",
        "price": 7000
      },
      {
        "name": "돼지김치찌개",
        "price": 11000
      },
      {
        "name": "순두부찌개",
        "price": 9500
      },
      {
        "name": "뚝배기불고기",
        "price": 12000
      },
      {
        "name": "청원생명쌀돌솥비빔밥",
        "price": 10000
      },
      {
        "name": "우거지해장국",
        "price": 9000
      },
      {
        "name": "어묵우동",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "만두라면",
        "price": 5000
      },
      {
        "name": "쇠고기쌀국수",
        "price": 8000
      },
      {
        "name": "얼큰쇠고기쌀국수",
        "price": 8000
      },
      {
        "name": "마늘수제돈가스",
        "price": 13000
      },
      {
        "name": "고기듬뿍짜글",
        "price": 13000
      },
      {
        "name": "실속김치된장짜글이",
        "price": 7000
      },
      {
        "name": "대패삼겹덮밥",
        "price": 11500
      },
      {
        "name": "간장대패덮밥",
        "price": 11500
      },
      {
        "name": "매콤대패덮밥",
        "price": 11500
      },
      {
        "name": "가지덮밥",
        "price": 9500
      },
      {
        "name": "주꾸미덮밥",
        "price": 10000
      },
      {
        "name": "카레덮밥",
        "price": 10000
      },
      {
        "name": "계란매콤대패덮밥",
        "price": 12500
      },
      {
        "name": "계란주꾸미덮밥",
        "price": 11000
      },
      {
        "name": "고기듬뿍짜장덮밥",
        "price": 10000
      },
      {
        "name": "계란카레덮밥",
        "price": 11500
      },
      {
        "name": "오이냉국수",
        "price": 9000
      },
      {
        "name": "대패비빔국수",
        "price": 10000
      },
      {
        "name": "들기름호박국수",
        "price": 10000
      },
      {
        "name": "만두국",
        "price": 10000
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
      "lpgPrice": 1119,
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 94,
    "signatureMenu": {
      "name": "보은대추왕갈비탕",
      "price": 15000,
      "description": "갈비에서 우러나오는 육즙과 보은 대추를 통하여 우려낸 시원하고 담백한 국물 맛과 오랜시간 정성들여 끓인 갈비의 부드러움이 일품으로 고객들의 피로와 스트레스를 한방에 없애줄 수 있는 건강식품입니다 보은대추왕갈비탕은 죽암휴게소의 대표프리미엄 상품입니다",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "장터능이국밥",
        "price": 10000
      },
      {
        "name": "된장찌개",
        "price": 7000
      },
      {
        "name": "죽암수제묵밥",
        "price": 8500
      },
      {
        "name": "촌돼지찌개",
        "price": 9000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "남도시래기국밥",
        "price": 8500
      },
      {
        "name": "고등어구이",
        "price": 12000
      },
      {
        "name": "등심왕돈까스",
        "price": 12000
      },
      {
        "name": "산채비빔밥",
        "price": 9000
      },
      {
        "name": "辛계란 라면정식",
        "price": 6000
      },
      {
        "name": "辛계란 치즈라면",
        "price": 5500
      },
      {
        "name": "해물짬뽕라면",
        "price": 6500
      },
      {
        "name": "辛계란 만두라면",
        "price": 5500
      },
      {
        "name": "辛계란 떡라면",
        "price": 5500
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "辛계란라면+충무김밥",
        "price": 7500
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "치즈돈까스",
        "price": 12000
      },
      {
        "name": "辛계란김치라면",
        "price": 5500
      },
      {
        "name": "우동",
        "price": 5500
      },
      {
        "name": "김치국수",
        "price": 6000
      },
      {
        "name": "잔치국수",
        "price": 5500
      },
      {
        "name": "한우양선지해장국",
        "price": 10000
      },
      {
        "name": "황태미역국",
        "price": 7000
      },
      {
        "name": "고사리뼈해장국",
        "price": 11000
      },
      {
        "name": "우거지뼈해장국",
        "price": 11000
      },
      {
        "name": "한우내장탕",
        "price": 13000
      },
      {
        "name": "담백수육국밥",
        "price": 11000
      },
      {
        "name": "얼큰수육국밥",
        "price": 11000
      },
      {
        "name": "실속돈까스",
        "price": 10000
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
      "lpgPrice": 1119,
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 101,
    "signatureMenu": {
      "name": "도가니 설렁탕",
      "price": 12000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "남도시래기",
        "price": 8500
      },
      {
        "name": "(실속) 콩나물해장국",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "(동물복지)고추장불고기",
        "price": 10500
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "산채비빔밥",
        "price": 9000
      },
      {
        "name": "(실속) 우렁된장찌개",
        "price": 7000
      },
      {
        "name": "왕돈가스",
        "price": 11500
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "순두부찌개",
        "price": 9000
      },
      {
        "name": "가마솥설렁탕",
        "price": 10000
      },
      {
        "name": "황태해장국",
        "price": 9000
      },
      {
        "name": "가마솥장터국밥",
        "price": 9000
      },
      {
        "name": "냄비우동",
        "price": 8000
      },
      {
        "name": "도시락우동정식",
        "price": 8500
      },
      {
        "name": "냉메밀국수",
        "price": 8500
      },
      {
        "name": "(실속) ex라면",
        "price": 4000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "튀김우동",
        "price": 7000
      },
      {
        "name": "멸치잔치국수",
        "price": 6500
      },
      {
        "name": "돈육김치찌개",
        "price": 9500
      },
      {
        "name": "차돌된장찌개",
        "price": 9500
      },
      {
        "name": "소불고기",
        "price": 11000
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "냉도토리묵밥",
        "price": 9000
      },
      {
        "name": "온도토리묵밥",
        "price": 9000
      },
      {
        "name": "매콤제육볶음",
        "price": 10500
      },
      {
        "name": "콩으로만든불고기",
        "price": 9000
      },
      {
        "name": "열무국수",
        "price": 8500
      },
      {
        "name": "비빔국수",
        "price": 8000
      },
      {
        "name": "(실속) 옛날우동",
        "price": 5500
      },
      {
        "name": "라면1개",
        "price": 4000
      },
      {
        "name": "라면2개",
        "price": 8000
      },
      {
        "name": "라면3개",
        "price": 12000
      },
      {
        "name": "짬뽕",
        "price": 8000
      },
      {
        "name": "순두부짬뽕밥",
        "price": 9000
      },
      {
        "name": "장어탕",
        "price": 12000
      },
      {
        "name": "흑돼지김치찌개",
        "price": 10000
      },
      {
        "name": "타향골따귀탕",
        "price": 12000
      },
      {
        "name": "타향골갈비탕",
        "price": 15000
      },
      {
        "name": "떡라면+물만두 세트",
        "price": 6500
      },
      {
        "name": "치즈라면+물만두 세트",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동+메밀전병 세트",
        "price": 9000
      },
      {
        "name": "튀김우동+메밀전병 세트",
        "price": 9000
      },
      {
        "name": "유부우동+메밀전병 세트",
        "price": 8000
      },
      {
        "name": "매운짬뽕",
        "price": 8500
      },
      {
        "name": "오뎅짬뽕",
        "price": 9000
      },
      {
        "name": "당면짬뽕밥",
        "price": 9000
      },
      {
        "name": "황태짬뽕",
        "price": 9000
      },
      {
        "name": "(동물복지)간장불고기",
        "price": 10500
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
      "gasolinePrice": 1859,
      "dieselPrice": 1848,
      "lpgPrice": 1234,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 108,
    "signatureMenu": {
      "name": "놀부부대찌개",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "송고버섯비빔밥",
        "price": 9500
      },
      {
        "name": "뚝배기불고기",
        "price": 11000
      },
      {
        "name": "101번지 치즈돈까스",
        "price": 14000
      },
      {
        "name": "표고강된장열무보리비빔밥",
        "price": 8500
      },
      {
        "name": "대파 육개장",
        "price": 10000
      },
      {
        "name": "표고버섯된장찌개",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "콩나물밥",
        "price": 6500
      },
      {
        "name": "메콤제육덮밥",
        "price": 9900
      },
      {
        "name": "돼지불고기제육덮밥",
        "price": 9900
      },
      {
        "name": "홍순두부정식",
        "price": 9000
      },
      {
        "name": "부대순두부정식",
        "price": 9500
      },
      {
        "name": "인생설렁탕",
        "price": 9500
      },
      {
        "name": "민물생선국수",
        "price": 8000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "흥부부대찌개",
        "price": 10000
      },
      {
        "name": "101번지 왕돈까스",
        "price": 13500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "(알뜰간식)소떡소떡",
        "price": 3700
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "(알뜰간식)고추맛바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰간식)옥수수",
        "price": 3700
      },
      {
        "name": "(알뜰간식)핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)케네디소시지",
        "price": 3700
      },
      {
        "name": "(알뜰간식)떡볶이",
        "price": 3700
      },
      {
        "name": "(알뜰간식)쌀떡꼬치",
        "price": 3000
      },
      {
        "name": "(알뜰간식)통감자",
        "price": 3700
      },
      {
        "name": "(알뜰간식)치킨팝콘",
        "price": 3700
      },
      {
        "name": "(알뜰간식)델리만쥬",
        "price": 3700
      },
      {
        "name": "(알뜰간식)미니츄러스",
        "price": 3700
      },
      {
        "name": "(알뜰간식)오징어문어바",
        "price": 3700
      },
      {
        "name": "(실속) 듬심돈가스",
        "price": 10000
      },
      {
        "name": "돈가스세트",
        "price": 11000
      },
      {
        "name": "닭가슴쌈채비빔밥",
        "price": 8500
      },
      {
        "name": "남도시래기",
        "price": 8500
      },
      {
        "name": "101번지 매운돈까스",
        "price": 13500
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 115,
    "signatureMenu": {
      "name": "한방닭곰탕",
      "price": 9000,
      "description": "1.고속도로 휴게소 유일의 착한음식점 선정된 음식으로 여름철 쇠약해진 몸과 마음을 치료해줄 웰빙음식 입니다. 2.각종 한약제가 들어있어 식욕증진, 노화방지, 장운동원활 및 암세포 성장을 억제하는 효과가 탁월 합니다",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "돌솥비빔밥",
        "price": 9500
      },
      {
        "name": "(실속) 콩나물국밥",
        "price": 7000
      },
      {
        "name": "우(牛)된장찌개",
        "price": 9000
      },
      {
        "name": "화덕고등어구이",
        "price": 10000
      },
      {
        "name": "옥천부추 제육덮밥",
        "price": 9500
      },
      {
        "name": "어묵라면",
        "price": 5000
      },
      {
        "name": "(실속) ex라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "케이크소세지",
        "price": 4000
      },
      {
        "name": "고구마스틱",
        "price": 4000
      },
      {
        "name": "피자스틱",
        "price": 5000
      },
      {
        "name": "호두과자(10개입)",
        "price": 3200
      },
      {
        "name": "호두과자(20개입)",
        "price": 6000
      },
      {
        "name": "호두과자 (40개입)",
        "price": 12000
      },
      {
        "name": "오징어",
        "price": 7000
      },
      {
        "name": "쥐포구이",
        "price": 4000
      },
      {
        "name": "(알뜰간식)두리어묵바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)소떡소떡",
        "price": 3700
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통감자",
        "price": 3700
      },
      {
        "name": "(알뜰간식)떡볶이",
        "price": 3700
      },
      {
        "name": "(알뜰간식)옥수수1EA",
        "price": 3700
      },
      {
        "name": "(알뜰간식)옛날핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰)케이크소세지",
        "price": 3700
      },
      {
        "name": "불고기야채비빔밥",
        "price": 9000
      },
      {
        "name": "어린이돈가스",
        "price": 7000
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
      "gasolinePrice": 1839,
      "dieselPrice": 1835,
      "lpgPrice": 1099,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": false
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 122,
    "signatureMenu": {
      "name": "금강도리뱅뱅정식",
      "price": 12000,
      "description": "금강휴게소 대표음식 빙어(피라미)를 후라이팬에 동그랗게 튀겨낸 향토음식",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "흑돼지볶음덮밥",
        "price": 9500
      },
      {
        "name": "불고기덮밥",
        "price": 11000
      },
      {
        "name": "우거지사골국밥",
        "price": 8500
      },
      {
        "name": "등심돈까스",
        "price": 9000
      },
      {
        "name": "치즈돈까스",
        "price": 9500
      },
      {
        "name": "매운탕(빠가사리, 민물잡어)",
        "price": 45000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "가스오우동",
        "price": 5500
      },
      {
        "name": "새우튀김우동",
        "price": 7000
      },
      {
        "name": "차돌된장찌개",
        "price": 9500
      },
      {
        "name": "흑돼지 김치찌개",
        "price": 9500
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
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 129,
    "signatureMenu": {
      "name": "(실속)돈가스",
      "price": 10000,
      "description": "통등심을 두들겨 펴서 만든 담백한 돼지고기 돈까스한상 차림",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "영표국밥",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "(실속)EX-라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "알뜰호두과자",
        "price": 2000
      },
      {
        "name": "알뜰소떡",
        "price": 3500
      },
      {
        "name": "알뜰 핫도그",
        "price": 3500
      },
      {
        "name": "알뜰 두리어묵바",
        "price": 3500
      },
      {
        "name": "알뜰 케이크소세지",
        "price": 3500
      },
      {
        "name": "알뜰 치킨팝콘",
        "price": 3500
      },
      {
        "name": "알뜰 어포튀김",
        "price": 3500
      },
      {
        "name": "알뜰 통감자",
        "price": 3500
      },
      {
        "name": "알뜰 떡볶이",
        "price": 3500
      },
      {
        "name": "치즈돈까스",
        "price": 11000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "어묵라면",
        "price": 5500
      },
      {
        "name": "영동표고버섯소고기덮밥",
        "price": 10000
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
      "gasolinePrice": 1832,
      "dieselPrice": 1803,
      "lpgPrice": 1206,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 136,
    "signatureMenu": {
      "name": "영표국밥",
      "price": 7000,
      "description": "영동의 표고버섯으로 만든 열큰한 영동표고 국밥",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "(실속)돈가스",
        "price": 10000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "알뜰)케이크소세지",
        "price": 3500
      },
      {
        "name": "알뜰)두리어묵바",
        "price": 3500
      },
      {
        "name": "알뜰)팝콘치킨",
        "price": 3500
      },
      {
        "name": "알뜰)바삭어포",
        "price": 3500
      },
      {
        "name": "알뜰)소떡소떡",
        "price": 3500
      },
      {
        "name": "알뜰)옛날핫도그",
        "price": 3500
      },
      {
        "name": "알뜰)떡볶이",
        "price": 3500
      },
      {
        "name": "알뜰)통감자",
        "price": 3500
      },
      {
        "name": "알뜰)호두과자",
        "price": 2000
      },
      {
        "name": "어묵라면",
        "price": 5500
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "치즈돈까스",
        "price": 11000
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
      "gasolinePrice": 1832,
      "dieselPrice": 1803,
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
      "편의점"
    ],
    "latitude": 36.5246,
    "longitude": 127.5887
  },
  {
    "slug": "chupungryeong-busan",
    "name": "추풍령휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 143,
    "signatureMenu": {
      "name": "돌솥흑돼지불고기정식",
      "price": 10500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속)통등심돈가스",
        "price": 10000
      },
      {
        "name": "얼큰칼제비",
        "price": 9000
      },
      {
        "name": "화덕고등어구이+솥밥",
        "price": 12000
      },
      {
        "name": "흑돼지김치전골",
        "price": 10000
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "평양아바이순대국밥",
        "price": 10000
      },
      {
        "name": "사골칼국수",
        "price": 8000
      },
      {
        "name": "사골떡만두국",
        "price": 8500
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "(실속)EX-라면",
        "price": 4000
      },
      {
        "name": "(실속)로봇라면",
        "price": 4500
      },
      {
        "name": "부대찌개",
        "price": 11000
      },
      {
        "name": "옹알옹알맘마",
        "price": 1500
      },
      {
        "name": "(실속)어린이돈가스",
        "price": 7000
      },
      {
        "name": "(얌샘)김밥",
        "price": 5000
      },
      {
        "name": "(얌샘)더블치즈김밥",
        "price": 5500
      },
      {
        "name": "(얌샘)쫄깃진미채김밥",
        "price": 5800
      },
      {
        "name": "(얌샘)통계란말이김밥",
        "price": 6000
      },
      {
        "name": "감자고기만두",
        "price": 7000
      },
      {
        "name": "감자김치만두",
        "price": 7000
      },
      {
        "name": "짜장",
        "price": 6000
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
      "gasolinePrice": 1829,
      "dieselPrice": 1799,
      "lpgPrice": 1183,
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
      "ATM"
    ],
    "latitude": 36.5985,
    "longitude": 128.6539
  },
  {
    "slug": "chupungryeong-seoul",
    "name": "추풍령휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 150,
    "signatureMenu": {
      "name": "(실속)통등심돈가스",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "얼큰칼제비",
        "price": 9000
      },
      {
        "name": "고등어양념구이",
        "price": 11000
      },
      {
        "name": "솥밥흑돼지불고기정식",
        "price": 11000
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "흑돼지김치전골",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "(실속)EX-라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "사골떡만두국",
        "price": 8500
      },
      {
        "name": "사골칼국수",
        "price": 8000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "새우튀김우동",
        "price": 7000
      },
      {
        "name": "평양아바이순대국밥",
        "price": 10000
      },
      {
        "name": "솥밥버섯순두부",
        "price": 9000
      },
      {
        "name": "솥밥비빔밥",
        "price": 10500
      },
      {
        "name": "옹알옹알맘마",
        "price": 1500
      },
      {
        "name": "(실속)어린이돈가스",
        "price": 7000
      },
      {
        "name": "감자고기만두",
        "price": 7000
      },
      {
        "name": "감자김치만두",
        "price": 7000
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
      "gasolinePrice": 1829,
      "dieselPrice": 1799,
      "lpgPrice": 1193,
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
      "경정비",
      "내고장특산물"
    ],
    "latitude": 36.7129,
    "longitude": 128.5668
  },
  {
    "slug": "chilgog-busan",
    "name": "칠곡휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "자율식당",
      "price": 9000,
      "description": "30여가지의 메뉴 중 내가 원하는 메뉴를 골라먹을 수 있는 자율식당",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "가락 자장면",
        "price": 7000
      },
      {
        "name": "가락 짬뽕",
        "price": 8500
      },
      {
        "name": "부산어묵우동",
        "price": 7500
      },
      {
        "name": "속풀이 생라면",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "한미식당 옛날 왕 돈가스",
        "price": 13000
      },
      {
        "name": "1995육개장 단품",
        "price": 7000
      },
      {
        "name": "한미식당 치즈시내소",
        "price": 10000
      },
      {
        "name": "한미식당 한미버거",
        "price": 6000
      },
      {
        "name": "신바람 만두",
        "price": 6000
      },
      {
        "name": "즉석호두과자",
        "price": 3500
      },
      {
        "name": "왜관수제소시지부대찌개",
        "price": 11900
      },
      {
        "name": "반건조오징어",
        "price": 8500
      },
      {
        "name": "수제오징어어묵바",
        "price": 4500
      },
      {
        "name": "수제햄어묵바",
        "price": 4500
      },
      {
        "name": "조미쥐치포구이",
        "price": 4500
      },
      {
        "name": "롱소시지",
        "price": 4500
      },
      {
        "name": "매직핫도그",
        "price": 5000
      },
      {
        "name": "한미식당 치즈돈까스",
        "price": 15000
      },
      {
        "name": "모짜치즈시내소",
        "price": 12000
      },
      {
        "name": "치즈버거",
        "price": 6500
      },
      {
        "name": "가락우동",
        "price": 5500
      },
      {
        "name": "돈가스정식",
        "price": 10000
      },
      {
        "name": "단배추 된장국 정식",
        "price": 7000
      },
      {
        "name": "카레라이스",
        "price": 7000
      },
      {
        "name": "수제치즈어묵바",
        "price": 4500
      },
      {
        "name": "십원빵(단팥, 카스타드, 치즈)",
        "price": 4000
      },
      {
        "name": "행운의십원빵 세트(5개)",
        "price": 20000
      },
      {
        "name": "만쥬리아",
        "price": 3700
      },
      {
        "name": "소떡소떡",
        "price": 3700
      },
      {
        "name": "포크소시지",
        "price": 3700
      },
      {
        "name": "우리밀핫도그",
        "price": 3700
      },
      {
        "name": "웨스턴핫바(매운맛)",
        "price": 3700
      },
      {
        "name": "웨스턴핫바",
        "price": 3700
      },
      {
        "name": "통감자",
        "price": 3700
      },
      {
        "name": "옥수수",
        "price": 3700
      },
      {
        "name": "츄로비츄러스",
        "price": 3700
      },
      {
        "name": "신신떡볶이",
        "price": 3700
      },
      {
        "name": "꼬치어묵",
        "price": 3700
      },
      {
        "name": "치킨팝콘",
        "price": 3700
      },
      {
        "name": "바삭어포",
        "price": 3700
      },
      {
        "name": "땅콩빵",
        "price": 5000
      },
      {
        "name": "호두과자(6000)",
        "price": 6000
      },
      {
        "name": "호두과자세트(12000)",
        "price": 12000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "따로국밥정식",
      "price": 11000,
      "description": "칠곡(서울)휴게소 자율시당 내 최고의 인기메뉴~ 남녀노소 누구나 즐겨찾는 메뉴로 국물의 진한 맛이 일품입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "등심돈가스정식",
        "price": 11900
      },
      {
        "name": "돈가스돈부리정식",
        "price": 10900
      },
      {
        "name": "가락속풀이생라면",
        "price": 6500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "가락자장면",
        "price": 7000
      },
      {
        "name": "카레라이스정식",
        "price": 7000
      },
      {
        "name": "가락우동",
        "price": 5500
      },
      {
        "name": "동인동찜갈비",
        "price": 25000
      },
      {
        "name": "용천칼국수",
        "price": 8000
      },
      {
        "name": "용천오색비빔밥",
        "price": 9000
      },
      {
        "name": "용천수과방냉수육",
        "price": 17000
      },
      {
        "name": "용천칼국수+과방냉수육",
        "price": 14000
      },
      {
        "name": "용천오색비빔밥+과방냉수육",
        "price": 15000
      },
      {
        "name": "부산어묵우동",
        "price": 7500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "가락짬뽕",
        "price": 8500
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
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1126,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 171,
    "signatureMenu": {
      "name": "돼지김치찌게",
      "price": 9000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "남산왕돈가스",
        "price": 13500
      },
      {
        "name": "남산치즈돈가스",
        "price": 14000
      },
      {
        "name": "어묵우동",
        "price": 7500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "속풀이생라면",
        "price": 6000
      },
      {
        "name": "낙지비빔밥",
        "price": 8500
      },
      {
        "name": "소고기비빔밥",
        "price": 8500
      },
      {
        "name": "마라부대찌개",
        "price": 12000
      },
      {
        "name": "놀부부대찌개",
        "price": 11000
      },
      {
        "name": "ex-라면",
        "price": 4000
      },
      {
        "name": "차돌된장찌개",
        "price": 7000
      },
      {
        "name": "어린이돈가스",
        "price": 5000
      },
      {
        "name": "옛집육개장",
        "price": 10000
      },
      {
        "name": "맑은순두부정식",
        "price": 9500
      },
      {
        "name": "얼큰순두부정식",
        "price": 9500
      },
      {
        "name": "김치순두부정식",
        "price": 9500
      },
      {
        "name": "부대순두부정식",
        "price": 9500
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "매콤제육덮밥",
        "price": 9900
      },
      {
        "name": "경산대추돈가스",
        "price": 11000
      },
      {
        "name": "옹알옹알맘마",
        "price": 1500
      },
      {
        "name": "실속돈가스",
        "price": 10000
      },
      {
        "name": "남산매운돈가스",
        "price": 13500
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
      "편의점"
    ],
    "latitude": 36.4491,
    "longitude": 128.4257
  },
  {
    "slug": "pyeongsa-busan",
    "name": "평사휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 178,
    "signatureMenu": {
      "name": "수제등심돈가스정식",
      "price": 11900,
      "description": "이미지 사진은 실물과 다소 차이가 있을수 있습니다",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "뽀글이돼지찌개정식",
        "price": 9900
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "해물순두부찌개정식",
        "price": 9900
      },
      {
        "name": "대구따로국밥정식",
        "price": 11000
      },
      {
        "name": "추억의간장꼬마김밥",
        "price": 5000
      },
      {
        "name": "소고기된장찌개정식",
        "price": 9900
      },
      {
        "name": "ex-라면",
        "price": 4000
      },
      {
        "name": "부산어묵우동",
        "price": 7500
      },
      {
        "name": "소풍길충무김밥",
        "price": 5000
      },
      {
        "name": "가락자장면",
        "price": 7000
      },
      {
        "name": "제육덮밥정식",
        "price": 11000
      },
      {
        "name": "카레라이스정식",
        "price": 7000
      },
      {
        "name": "바닷속해물라면",
        "price": 8900
      },
      {
        "name": "짜장덮밥",
        "price": 7000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "경산대추비빔밥정식",
        "price": 11000
      },
      {
        "name": "묵은지김치찌개정식",
        "price": 9900
      },
      {
        "name": "가락짬뽕",
        "price": 8500
      },
      {
        "name": "황태해장국정식",
        "price": 9900
      },
      {
        "name": "분식집케첩돈가스",
        "price": 10000
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
      "gasolinePrice": 1870,
      "dieselPrice": 1857,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 185,
    "signatureMenu": {
      "name": "돼지고기김치찌개",
      "price": 9500,
      "description": "국내산 돼지고기와 국내산 100%김치로 조리하여 깊은맛이 일품",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "왕돈가스",
        "price": 12500
      },
      {
        "name": "매콤순두부찌개",
        "price": 9500
      },
      {
        "name": "소불고기비빔밥",
        "price": 10000
      },
      {
        "name": "(실속) 차돌된장찌개",
        "price": 7000
      },
      {
        "name": "(실속) 로봇우동",
        "price": 5500
      },
      {
        "name": "로봇꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "로봇계란라면(매운맛)",
        "price": 5000
      },
      {
        "name": "로봇라면(매운맛)",
        "price": 4000
      },
      {
        "name": "치즈돈가스",
        "price": 12500
      },
      {
        "name": "하이포크동물복지 간장돼지불고기덮밥",
        "price": 10000
      },
      {
        "name": "하이포크동물복지 고추장돼지불고기덮밥",
        "price": 10000
      },
      {
        "name": "능이소고기국밥",
        "price": 9500
      },
      {
        "name": "(실속) 황태미역국",
        "price": 7000
      },
      {
        "name": "(알뜰간식)호두과자(10개입)",
        "price": 3200
      },
      {
        "name": "호두과자 선물용(40개입)",
        "price": 12000
      },
      {
        "name": "(알뜰간식)소떡소떡",
        "price": 3700
      },
      {
        "name": "(알뜰간식)소세지",
        "price": 3700
      },
      {
        "name": "(알뜰간식)핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)해물바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)쌀떡꼬치",
        "price": 3700
      },
      {
        "name": "(알뜰간식)수제어묵바",
        "price": 3700
      },
      {
        "name": "소떡소떡",
        "price": 4500
      },
      {
        "name": "옛날핫도그",
        "price": 4500
      },
      {
        "name": "매직핫도그",
        "price": 5500
      },
      {
        "name": "후라이드닭꼬치",
        "price": 5500
      },
      {
        "name": "통통오징어야채바",
        "price": 4500
      },
      {
        "name": "통통해물핫바",
        "price": 4500
      },
      {
        "name": "회오리감자",
        "price": 4500
      },
      {
        "name": "반건조오징어",
        "price": 7500
      },
      {
        "name": "쥐치포구이",
        "price": 4000
      },
      {
        "name": "(알뜰간식)옥수수",
        "price": 3700
      },
      {
        "name": "고구마스틱",
        "price": 4000
      },
      {
        "name": "(알뜰간식)신신떡볶이",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통감자",
        "price": 3700
      },
      {
        "name": "통감자",
        "price": 4500
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰간식)치킨팝콘",
        "price": 3700
      },
      {
        "name": "(영유아전용)옹알옹알맘마",
        "price": 1500
      },
      {
        "name": "수제어묵(매운맛)",
        "price": 4500
      },
      {
        "name": "수미네순대국밥",
        "price": 10000
      },
      {
        "name": "라면+충무김밥(냉장)SET",
        "price": 9500
      },
      {
        "name": "호두과자(20개입)",
        "price": 6000
      },
      {
        "name": "로봇계란떡라면",
        "price": 6000
      },
      {
        "name": "로봇계란라면정식",
        "price": 6000
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
    "latitude": 36.5561,
    "longitude": 128.6543
  },
  {
    "slug": "geoncheon-busan",
    "name": "건천휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 192,
    "signatureMenu": {
      "name": "누구나돌솥비빔밥",
      "price": 11000,
      "description": "2015년 한국도로공사 휴게소 대표메뉴 평가에서 전국1위를 수상한 EX푸드\"누구나돌솥비빔밥\"입니다. 재료각각의 신선한 맛을 살리고 풍부한 양과 일품인 건천휴게소 대표 메뉴 입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "뽀글이돼지찌개정식",
        "price": 9900
      },
      {
        "name": "소고기된장찌개정식",
        "price": 9900
      },
      {
        "name": "해물순두부찌개정식",
        "price": 9900
      },
      {
        "name": "수제치즈돈가스정식",
        "price": 11900
      },
      {
        "name": "수제등심돈가스정식",
        "price": 11900
      },
      {
        "name": "부산어묵우동",
        "price": 7500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "황태해장국정식",
        "price": 9900
      },
      {
        "name": "버섯제육덮밥정식",
        "price": 11000
      },
      {
        "name": "얼큰해물라면",
        "price": 6500
      },
      {
        "name": "치즈듬뿍라면",
        "price": 6500
      },
      {
        "name": "묵은지김치찌개정식",
        "price": 9900
      },
      {
        "name": "단배추된장국정식",
        "price": 7000
      },
      {
        "name": "가락자장면",
        "price": 7000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "국민분식B(얼큰해물라면+추억의간장꼬마김밥)",
        "price": 11000
      },
      {
        "name": "국민분식A(얼큰해물라면+소풍길충무김밥)",
        "price": 11000
      },
      {
        "name": "가락우동",
        "price": 5500
      },
      {
        "name": "돈가스제육덮밥정식",
        "price": 13900
      },
      {
        "name": "가락짬뽕",
        "price": 8500
      },
      {
        "name": "분식집케첩돈가스",
        "price": 10000
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
      "gasolinePrice": 1855,
      "dieselPrice": 1845,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 199,
    "signatureMenu": {
      "name": "경주천년한우국밥",
      "price": 11000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "바우네나주곰탕",
        "price": 10000
      },
      {
        "name": "속시원한동태탕",
        "price": 9500
      },
      {
        "name": "돼지고기김치찌개",
        "price": 9500
      },
      {
        "name": "만두순두부찌개",
        "price": 7000
      },
      {
        "name": "버섯된장찌개",
        "price": 7000
      },
      {
        "name": "선덕여왕돈가스",
        "price": 14000
      },
      {
        "name": "실속돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 12000
      },
      {
        "name": "왕새우튀김우동",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "자장면",
        "price": 5500
      },
      {
        "name": "어린이세트",
        "price": 5500
      },
      {
        "name": "경주辛火해장라면정식",
        "price": 7500
      },
      {
        "name": "계란라면정식",
        "price": 6000
      },
      {
        "name": "떡만두라면",
        "price": 6000
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "경주빵(20개입)",
        "price": 22000
      },
      {
        "name": "찰보리빵(20개입)",
        "price": 20000
      },
      {
        "name": "혼합형(각10개입)",
        "price": 21000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "경주한우육회물회",
        "price": 14000
      },
      {
        "name": "경주한우육회비빔밥",
        "price": 14000
      },
      {
        "name": "경주한우육회컵물회",
        "price": 8000
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
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 206,
    "signatureMenu": {
      "name": "묵은지김치찌개",
      "price": 7000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돼지고기두루치기",
        "price": 4000
      },
      {
        "name": "아욱단배추된장국",
        "price": 3100
      },
      {
        "name": "코바코등심돈가스",
        "price": 11900
      },
      {
        "name": "코바코치즈돈가스",
        "price": 11900
      },
      {
        "name": "돼지고기김치볶음",
        "price": 3800
      },
      {
        "name": "대구따로국밥",
        "price": 7000
      },
      {
        "name": "두부양념조림",
        "price": 3300
      },
      {
        "name": "킹크랩맛살샐러드",
        "price": 3100
      },
      {
        "name": "생선까스",
        "price": 2300
      },
      {
        "name": "계란찜",
        "price": 2800
      },
      {
        "name": "비엔나소세지볶음",
        "price": 3300
      },
      {
        "name": "알타리김치",
        "price": 2100
      },
      {
        "name": "탕수강정",
        "price": 3800
      },
      {
        "name": "염미역줄기볶음",
        "price": 1700
      },
      {
        "name": "닭다리튀김",
        "price": 3000
      },
      {
        "name": "왕새우튀김",
        "price": 2800
      },
      {
        "name": "커리포트안심카레",
        "price": 3200
      },
      {
        "name": "어묵볶음",
        "price": 1700
      },
      {
        "name": "맛있는김",
        "price": 1000
      },
      {
        "name": "포기김치",
        "price": 1500
      },
      {
        "name": "콩나물무침",
        "price": 1700
      },
      {
        "name": "가락자장면",
        "price": 7000
      },
      {
        "name": "치킨가라야게",
        "price": 5000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "가락속풀이생라면",
        "price": 6500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "부산어묵우동",
        "price": 7500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "바닷속해물라면",
        "price": 8900
      },
      {
        "name": "소풍길충무김밥",
        "price": 5000
      },
      {
        "name": "추억의간장꼬마김밥",
        "price": 5000
      },
      {
        "name": "배말칼국수",
        "price": 9500
      },
      {
        "name": "톳김밥",
        "price": 5500
      },
      {
        "name": "대구따로국밥정식",
        "price": 11000
      },
      {
        "name": "꼬막비빔국수",
        "price": 9500
      },
      {
        "name": "미나리꼬막비빔우동",
        "price": 9500
      },
      {
        "name": "오징어까스",
        "price": 1800
      },
      {
        "name": "어묵잡채",
        "price": 3200
      },
      {
        "name": "모듬버섯해물볶음",
        "price": 3900
      },
      {
        "name": "도라지과일생채",
        "price": 2800
      },
      {
        "name": "카레라이스정식",
        "price": 7000
      },
      {
        "name": "김치볶음밥정식",
        "price": 7000
      },
      {
        "name": "푸실리파스타샐러드",
        "price": 3100
      },
      {
        "name": "실속가락우동",
        "price": 5500
      },
      {
        "name": "땡초김밥",
        "price": 4500
      },
      {
        "name": "돈까스정식",
        "price": 10000
      },
      {
        "name": "미나리비빔밥정식",
        "price": 9500
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
      "gasolinePrice": 1928,
      "dieselPrice": 1849,
      "lpgPrice": 1294,
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "gyeongbu",
    "highwayName": "경부고속도로",
    "locationKm": 213,
    "signatureMenu": {
      "name": "돌솥비빔밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "순두부찌개",
        "price": 9500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "꼬지어묵우동",
        "price": 7000
      },
      {
        "name": "냄비우동",
        "price": 7500
      },
      {
        "name": "김치찌개",
        "price": 9500
      },
      {
        "name": "해양산 얼큰우동돼지국밥",
        "price": 10500
      },
      {
        "name": "된장찌개",
        "price": 7000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "콩나물해장라면",
        "price": 5500
      },
      {
        "name": "떡만두라면정식",
        "price": 6500
      },
      {
        "name": "충무김밥",
        "price": 7000
      },
      {
        "name": "치즈돈가스",
        "price": 12000
      },
      {
        "name": "냉모밀국수",
        "price": 7500
      },
      {
        "name": "육개장",
        "price": 9500
      },
      {
        "name": "(실속)실속우동",
        "price": 5500
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "(실속)등심돈가스",
        "price": 10000
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
      "gasolinePrice": 1839,
      "dieselPrice": 1835,
      "lpgPrice": 1214,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/gangbyeon.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 220,
    "signatureMenu": {
      "name": "진영소국밥",
      "price": 9500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "소고기미역국정식",
        "price": 8500
      },
      {
        "name": "돼지김치찌개",
        "price": 9500
      },
      {
        "name": "차돌된장찌개",
        "price": 9500
      },
      {
        "name": "해물순두부",
        "price": 9500
      },
      {
        "name": "콩나물국밥",
        "price": 7000
      },
      {
        "name": "얼큰콩나물국밥",
        "price": 7500
      },
      {
        "name": "소불고기철판비빔밥",
        "price": 10000
      },
      {
        "name": "오색나물비빔밥",
        "price": 9500
      },
      {
        "name": "비빔밥세트(+된장)",
        "price": 11000
      },
      {
        "name": "제육덮밥",
        "price": 10000
      },
      {
        "name": "왕돈까스",
        "price": 13500
      },
      {
        "name": "매운왕돈까스",
        "price": 13500
      },
      {
        "name": "치즈돈까스",
        "price": 14000
      },
      {
        "name": "함박스테이크",
        "price": 13500
      },
      {
        "name": "어묵우동",
        "price": 7900
      },
      {
        "name": "냉모밀",
        "price": 9900
      },
      {
        "name": "쫄면",
        "price": 9900
      },
      {
        "name": "라면",
        "price": 5000
      },
      {
        "name": "떡라면",
        "price": 5500
      },
      {
        "name": "떡만두라면",
        "price": 6000
      },
      {
        "name": "떡만두국",
        "price": 8500
      },
      {
        "name": "신라면건면",
        "price": 6000
      },
      {
        "name": "짜파게티",
        "price": 5500
      },
      {
        "name": "비비고군만두",
        "price": 4500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "돈까스우동",
        "price": 11000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "새우튀김우동",
        "price": 7000
      },
      {
        "name": "고등어구이",
        "price": 10500
      },
      {
        "name": "삼치구이",
        "price": 11500
      },
      {
        "name": "참조기구이",
        "price": 12000
      },
      {
        "name": "김치고등어조림",
        "price": 10500
      },
      {
        "name": "우도성게미역국",
        "price": 13000
      },
      {
        "name": "두루치기반상",
        "price": 12900
      },
      {
        "name": "삼겹반상",
        "price": 12900
      },
      {
        "name": "양념토시살반상",
        "price": 15900
      },
      {
        "name": "갈비탕반상",
        "price": 13800
      },
      {
        "name": "우삼겹시래기된장",
        "price": 10500
      },
      {
        "name": "소금구이반상",
        "price": 11900
      },
      {
        "name": "김치찌개반상",
        "price": 9500
      },
      {
        "name": "순두부찌개반상",
        "price": 9500
      },
      {
        "name": "소불고기반상",
        "price": 14900
      },
      {
        "name": "항정살반상",
        "price": 13900
      },
      {
        "name": "짜장탕수육세트",
        "price": 18500
      },
      {
        "name": "짬뽕탕수육세트",
        "price": 21000
      },
      {
        "name": "볶음밥탕수육세트",
        "price": 20500
      },
      {
        "name": "명품짬뽕",
        "price": 10000
      },
      {
        "name": "차슈짬뽕",
        "price": 12000
      },
      {
        "name": "차돌짬뽕",
        "price": 13000
      },
      {
        "name": "순두부짬뽕",
        "price": 11000
      },
      {
        "name": "짜장면",
        "price": 7500
      },
      {
        "name": "짜장면(곱)",
        "price": 9000
      },
      {
        "name": "짬짜면",
        "price": 11000
      },
      {
        "name": "게살볶음밥",
        "price": 9500
      },
      {
        "name": "볶음밥(곱)",
        "price": 11000
      },
      {
        "name": "짬뽕밥",
        "price": 10000
      },
      {
        "name": "차슈짬뽕밥",
        "price": 12000
      },
      {
        "name": "순두부짬뽕밥",
        "price": 11000
      },
      {
        "name": "탕수육(미니)",
        "price": 13000
      },
      {
        "name": "탕수육(소)",
        "price": 18000
      },
      {
        "name": "탕수육(중)",
        "price": 25000
      },
      {
        "name": "교자만두(5)",
        "price": 4000
      },
      {
        "name": "연유꽃빵(3)",
        "price": 4000
      },
      {
        "name": "육개탕면정식",
        "price": 8500
      },
      {
        "name": "물밀면+김치김밥",
        "price": 12500
      },
      {
        "name": "비빔밀면+김치김밥",
        "price": 13000
      },
      {
        "name": "물밀면",
        "price": 8500
      },
      {
        "name": "비빔밀면",
        "price": 9000
      },
      {
        "name": "순두부칼국수",
        "price": 10500
      },
      {
        "name": "고탑덮밥",
        "price": 9500
      },
      {
        "name": "육개탕면+덮밥",
        "price": 17000
      },
      {
        "name": "김치말이김밥",
        "price": 4500
      },
      {
        "name": "수제비세트",
        "price": 11000
      },
      {
        "name": "신칼제비세트",
        "price": 10500
      },
      {
        "name": "칼국수세트",
        "price": 10000
      },
      {
        "name": "짬뽕수제비세트",
        "price": 12500
      },
      {
        "name": "들깨수제비세트",
        "price": 11500
      },
      {
        "name": "백짬뽕수제비세트",
        "price": 12500
      },
      {
        "name": "들깨짬뽕수제비",
        "price": 10000
      },
      {
        "name": "태양신칼제비",
        "price": 8000
      },
      {
        "name": "수제비",
        "price": 7500
      },
      {
        "name": "칼국수",
        "price": 7500
      },
      {
        "name": "태양짬뽕수제비",
        "price": 9500
      },
      {
        "name": "백짬뽕수제비",
        "price": 9500
      },
      {
        "name": "들깨수제비",
        "price": 9000
      },
      {
        "name": "불고기주먹밥",
        "price": 7000
      },
      {
        "name": "충무김밥",
        "price": 8000
      },
      {
        "name": "스페셜카츠",
        "price": 12500
      },
      {
        "name": "돈코츠라멘세트",
        "price": 14500
      },
      {
        "name": "미소라멘세트",
        "price": 14500
      },
      {
        "name": "마제소바세트",
        "price": 15500
      },
      {
        "name": "붓카케우동세트",
        "price": 14500
      },
      {
        "name": "매운돈코츠세트",
        "price": 15500
      },
      {
        "name": "어묵우동세트",
        "price": 14500
      },
      {
        "name": "탄탄멘(순)세트",
        "price": 14500
      },
      {
        "name": "탄탄멘(매)세트",
        "price": 15000
      },
      {
        "name": "카레우동세트",
        "price": 14500
      },
      {
        "name": "돈까스정식",
        "price": 11500
      },
      {
        "name": "카레돈까스",
        "price": 11000
      },
      {
        "name": "마제소바",
        "price": 11000
      },
      {
        "name": "카레우동",
        "price": 10000
      },
      {
        "name": "돈코츠라멘",
        "price": 10000
      },
      {
        "name": "미소라멘",
        "price": 10000
      },
      {
        "name": "매운돈코츠라멘",
        "price": 11000
      },
      {
        "name": "가츠동",
        "price": 10000
      },
      {
        "name": "탄탄멘(순)",
        "price": 10000
      },
      {
        "name": "탄탄멘(매)",
        "price": 10500
      },
      {
        "name": "붓카케우동",
        "price": 10000
      },
      {
        "name": "치킨가라아게(6)",
        "price": 5000
      },
      {
        "name": "김치가츠나베",
        "price": 11500
      },
      {
        "name": "미소나베",
        "price": 11500
      },
      {
        "name": "빅불버거",
        "price": 7600
      },
      {
        "name": "핫크리스피버거",
        "price": 6200
      },
      {
        "name": "치킨버거",
        "price": 4000
      },
      {
        "name": "데리버거",
        "price": 3300
      },
      {
        "name": "한우불고기버거",
        "price": 9000
      },
      {
        "name": "새우버거",
        "price": 5000
      },
      {
        "name": "불고기버거",
        "price": 5000
      },
      {
        "name": "돼지국밥",
        "price": 10000
      },
      {
        "name": "내장국밥",
        "price": 10000
      },
      {
        "name": "순대국밥",
        "price": 10000
      },
      {
        "name": "항정국밥",
        "price": 12000
      },
      {
        "name": "모듬국밥",
        "price": 12000
      },
      {
        "name": "수육백반정식",
        "price": 14000
      },
      {
        "name": "물막국수",
        "price": 9000
      },
      {
        "name": "물막국수세트",
        "price": 13000
      },
      {
        "name": "비빔막국수",
        "price": 9000
      },
      {
        "name": "비빔막국수세트",
        "price": 13000
      },
      {
        "name": "쌀국수",
        "price": 12000
      },
      {
        "name": "스파이시포",
        "price": 13000
      },
      {
        "name": "프리미엄쌀국수",
        "price": 15500
      },
      {
        "name": "해산물볶음쌀국수",
        "price": 15500
      },
      {
        "name": "해산물팟타이",
        "price": 15000
      },
      {
        "name": "칠리볶음밥",
        "price": 15500
      },
      {
        "name": "소고기볶음밥",
        "price": 15500
      },
      {
        "name": "돼지고기덮밥",
        "price": 15000
      },
      {
        "name": "닭고기덮밥",
        "price": 15000
      },
      {
        "name": "분짜",
        "price": 16500
      },
      {
        "name": "짜조",
        "price": 6500
      },
      {
        "name": "에그롤",
        "price": 6500
      },
      {
        "name": "치킨윙(4)",
        "price": 7500
      },
      {
        "name": "치킨윙(10)",
        "price": 17000
      },
      {
        "name": "스프링롤",
        "price": 7500
      },
      {
        "name": "갈치조림",
        "price": 13000
      },
      {
        "name": "물냉면",
        "price": 9000
      },
      {
        "name": "차돌짬뽕밥",
        "price": 13000
      },
      {
        "name": "쌀국수+치킨",
        "price": 15000
      },
      {
        "name": "스파이시포+치킨",
        "price": 16000
      },
      {
        "name": "돼지고기덮밥세트",
        "price": 19800
      },
      {
        "name": "닭고기덮밥세트",
        "price": 19800
      },
      {
        "name": "칠리볶음밥세트",
        "price": 20500
      },
      {
        "name": "소고기볶음밥세트",
        "price": 20500
      },
      {
        "name": "김치말이냉국수",
        "price": 8500
      },
      {
        "name": "냉국수+주먹밥",
        "price": 12500
      },
      {
        "name": "냉국수+김밥",
        "price": 12500
      },
      {
        "name": "냉국수+덮밥",
        "price": 17000
      },
      {
        "name": "매콤쭈꾸미덮밥",
        "price": 10000
      },
      {
        "name": "라면공기밥세트",
        "price": 6000
      },
      {
        "name": "비빔만두",
        "price": 5500
      },
      {
        "name": "판모밀세트(1판)",
        "price": 13000
      },
      {
        "name": "판모밀세트(2판)",
        "price": 15000
      },
      {
        "name": "판모밀",
        "price": 8500
      },
      {
        "name": "판모밀 2판",
        "price": 10500
      },
      {
        "name": "냉모밀세트",
        "price": 14500
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
      "evChargersCount": 6,
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
    "latitude": 35.0901,
    "longitude": 128.7156
  },
  {
    "slug": "jinyeong-busan-1",
    "name": "진영휴게소",
    "image": "/images/thumbnails/gangbyeon.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 227,
    "signatureMenu": {
      "name": "흑돼지 김치찌개",
      "price": 9500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "바지락순두부",
        "price": 9500
      },
      {
        "name": "웰빙비빔밥",
        "price": 9500
      },
      {
        "name": "전통사골육개장",
        "price": 9500
      },
      {
        "name": "해물된장찌개",
        "price": 9000
      },
      {
        "name": "(실속) 옛날돈가스",
        "price": 10000
      },
      {
        "name": "코바코치즈돈가스",
        "price": 12000
      },
      {
        "name": "생선살어묵우동",
        "price": 7000
      },
      {
        "name": "옛날자장면",
        "price": 6000
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "(실속) EX라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "놀부부대찌개",
        "price": 9500
      },
      {
        "name": "흥부부대찌개",
        "price": 9500
      },
      {
        "name": "뼈없는순살우거지해장국",
        "price": 11000
      },
      {
        "name": "돈가스우동정식",
        "price": 11000
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "떡만두라면정식",
        "price": 6400
      },
      {
        "name": "(실속) 김치볶음밥",
        "price": 7000
      },
      {
        "name": "중화볶음밥",
        "price": 8500
      },
      {
        "name": "제육덮밥",
        "price": 9500
      },
      {
        "name": "스윗소이소스삼겹살덮밥",
        "price": 9500
      },
      {
        "name": "할매잔치국수",
        "price": 6500
      },
      {
        "name": "할매비빔국수",
        "price": 7000
      },
      {
        "name": "손주잔치국수",
        "price": 5000
      },
      {
        "name": "손주비빔국수",
        "price": 5000
      },
      {
        "name": "제육쌈밥정식",
        "price": 13000
      },
      {
        "name": "조기구이정식",
        "price": 13000
      },
      {
        "name": "고등어구이정식",
        "price": 13000
      },
      {
        "name": "돈가스정식",
        "price": 12000
      },
      {
        "name": "불고기쌈밥정식",
        "price": 13000
      },
      {
        "name": "(알뜰간식)케이크소세지",
        "price": 3700
      },
      {
        "name": "(알뜰간식)미니옛날핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통통매운바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)감자핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)쌀떡꼬치",
        "price": 3700
      },
      {
        "name": "(알뜰간식)해물바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통감자",
        "price": 3700
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰간식)치킨팝콘",
        "price": 3700
      },
      {
        "name": "(알뜰간식)미니츄러스",
        "price": 3700
      },
      {
        "name": "(알뜰간식)꼬치어묵",
        "price": 3700
      },
      {
        "name": "할매반반국수",
        "price": 7000
      },
      {
        "name": "(알뜰간식)소떡소떡",
        "price": 3700
      },
      {
        "name": "허브통살닭꼬치",
        "price": 5000
      },
      {
        "name": "해물통통야채바",
        "price": 4500
      },
      {
        "name": "어묵야채바",
        "price": 4500
      },
      {
        "name": "전기구이쥐포",
        "price": 3700
      },
      {
        "name": "전기구이오징어",
        "price": 8500
      },
      {
        "name": "도깨비핫도그",
        "price": 4500
      },
      {
        "name": "매직핫도그",
        "price": 5000
      },
      {
        "name": "케이크소세지",
        "price": 4500
      },
      {
        "name": "닭갈비치즈스틱",
        "price": 4500
      },
      {
        "name": "(알뜰간식)우리밀호두과자(7개입)",
        "price": 3700
      },
      {
        "name": "우리밀호두과자(14개입)",
        "price": 7000
      },
      {
        "name": "우리밀호두과자선물용(24개입)",
        "price": 10000
      },
      {
        "name": "우리밀호두과자선물용(50개입)",
        "price": 20000
      },
      {
        "name": "소세지미도바",
        "price": 4500
      },
      {
        "name": "통새우미도바",
        "price": 4500
      },
      {
        "name": "신이내린오징어바",
        "price": 4000
      },
      {
        "name": "어니언모짜렐라치즈바",
        "price": 4000
      },
      {
        "name": "오징어야채바",
        "price": 4000
      },
      {
        "name": "점보야채바",
        "price": 4500
      },
      {
        "name": "치즈버거세트",
        "price": 10500
      },
      {
        "name": "새우버거",
        "price": 6000
      },
      {
        "name": "핫치킨버거",
        "price": 6500
      },
      {
        "name": "치즈불버거세트",
        "price": 10500
      },
      {
        "name": "치즈불버거",
        "price": 6500
      },
      {
        "name": "핫치킨버거세트",
        "price": 10500
      },
      {
        "name": "임실치즈아이스크림(초코,바닐라)",
        "price": 5000
      },
      {
        "name": "초이스치즈버거",
        "price": 6500
      },
      {
        "name": "치킨버거",
        "price": 6000
      },
      {
        "name": "치킨버거세트",
        "price": 10000
      },
      {
        "name": "초이스버거세트",
        "price": 10000
      },
      {
        "name": "초이스버거",
        "price": 6000
      },
      {
        "name": "치즈스틱",
        "price": 3000
      },
      {
        "name": "코카콜라(355ml)",
        "price": 2000
      },
      {
        "name": "사이다(355ml)",
        "price": 2000
      },
      {
        "name": "펩시제로(355ml)",
        "price": 2000
      },
      {
        "name": "치킨너겟",
        "price": 3500
      },
      {
        "name": "감자튀김",
        "price": 3000
      },
      {
        "name": "새우버거세트",
        "price": 10000
      },
      {
        "name": "토스타버거세트",
        "price": 10500
      },
      {
        "name": "토스타버거",
        "price": 8000
      },
      {
        "name": "치즈앤치즈토스트",
        "price": 6000
      },
      {
        "name": "ICE시그니처셋트",
        "price": 10000
      },
      {
        "name": "ICE스페셜햄치즈토스트",
        "price": 9500
      },
      {
        "name": "ICE베이컨세트",
        "price": 9000
      },
      {
        "name": "ICE치즈앤치즈세트",
        "price": 8500
      },
      {
        "name": "ICE햄앤치즈세트",
        "price": 8500
      },
      {
        "name": "ICE토스타세트",
        "price": 8000
      },
      {
        "name": "HOT시그니처세트",
        "price": 10000
      },
      {
        "name": "HOT스페셜햄치즈세트",
        "price": 9500
      },
      {
        "name": "HOT베이컨세트",
        "price": 9000
      },
      {
        "name": "HOT치즈앤치즈세트",
        "price": 8500
      },
      {
        "name": "HOT토스타세트",
        "price": 8000
      },
      {
        "name": "HOT햄앤치즈세트",
        "price": 8500
      },
      {
        "name": "베이컨토스트",
        "price": 6500
      },
      {
        "name": "에그마니베이컨세트",
        "price": 11500
      },
      {
        "name": "바나나쥬스",
        "price": 6000
      },
      {
        "name": "망고스무디",
        "price": 5800
      },
      {
        "name": "키위스무디",
        "price": 5800
      },
      {
        "name": "딸기스무디",
        "price": 5800
      },
      {
        "name": "HOT아메리카노(S)",
        "price": 2100
      },
      {
        "name": "컵차콤부차",
        "price": 4000
      },
      {
        "name": "컵차페퍼민트",
        "price": 4000
      },
      {
        "name": "컵차캐모마일",
        "price": 4000
      },
      {
        "name": "자몽에이드",
        "price": 5500
      },
      {
        "name": "레몬에이드",
        "price": 5500
      },
      {
        "name": "청포도에이드",
        "price": 5500
      },
      {
        "name": "딸기쥬스",
        "price": 6000
      },
      {
        "name": "레몬차",
        "price": 5300
      },
      {
        "name": "딸바쥬스",
        "price": 6000
      },
      {
        "name": "키위쥬스",
        "price": 6000
      },
      {
        "name": "HOT아메리카노(R)",
        "price": 4300
      },
      {
        "name": "ICE아메리카노(R)",
        "price": 4300
      },
      {
        "name": "핫도그",
        "price": 5500
      },
      {
        "name": "HOT핫도그세트",
        "price": 8000
      },
      {
        "name": "HOT카페라떼(R)",
        "price": 5500
      },
      {
        "name": "ICE카페라떼(R)",
        "price": 5500
      },
      {
        "name": "시그니처토스트",
        "price": 7500
      },
      {
        "name": "스페셜햄치즈토스트",
        "price": 7000
      },
      {
        "name": "햄앤치즈토스트",
        "price": 6000
      },
      {
        "name": "토스타토스트",
        "price": 5500
      },
      {
        "name": "에그마니베이컨버거",
        "price": 9000
      },
      {
        "name": "ICE핫도그세트",
        "price": 8000
      },
      {
        "name": "HOT갈릭핫도그세트",
        "price": 8000
      },
      {
        "name": "ICE갈릭핫도그세트",
        "price": 8000
      },
      {
        "name": "HOT에그핫도그세트",
        "price": 8500
      },
      {
        "name": "ICE에그핫도그세트",
        "price": 8500
      },
      {
        "name": "갈릭핫도그",
        "price": 5500
      },
      {
        "name": "에그핫도그",
        "price": 6000
      },
      {
        "name": "HOT자몽차",
        "price": 5300
      },
      {
        "name": "복숭아아이스티",
        "price": 5000
      },
      {
        "name": "착즙오렌지쥬스",
        "price": 5000
      },
      {
        "name": "로띠번(모카)",
        "price": 3800
      },
      {
        "name": "로띠번(바닐라)",
        "price": 3800
      },
      {
        "name": "수제데리순살닭꼬치",
        "price": 5500
      },
      {
        "name": "수제매콤순살닭꼬치",
        "price": 5500
      },
      {
        "name": "수제소금순살닭꼬치",
        "price": 5500
      },
      {
        "name": "소떡소떡",
        "price": 4500
      },
      {
        "name": "HOT카페모카(T)",
        "price": 5600
      },
      {
        "name": "HOT카라멜마끼아또(T)",
        "price": 5600
      },
      {
        "name": "HOT바닐라라떼(T)",
        "price": 5600
      },
      {
        "name": "ICE아메리카노(T)",
        "price": 4600
      },
      {
        "name": "ICE카푸치노(T)",
        "price": 5200
      },
      {
        "name": "ICE카페라떼(T)",
        "price": 5200
      },
      {
        "name": "ICE카페모카(T)",
        "price": 5600
      },
      {
        "name": "ICE카라멜마끼아또(T)",
        "price": 5600
      },
      {
        "name": "ICE바닐라라떼(T)",
        "price": 5600
      },
      {
        "name": "HOT카페라떼(T)",
        "price": 5200
      },
      {
        "name": "HOT아메리카노(T)",
        "price": 4600
      },
      {
        "name": "HOT카푸치노(T)",
        "price": 5200
      },
      {
        "name": "ICE아메리카노(G)",
        "price": 5100
      },
      {
        "name": "HOT아메리카노(G)",
        "price": 5100
      },
      {
        "name": "ICE아메리카노(V)",
        "price": 5800
      },
      {
        "name": "HOT아메리카노(V)",
        "price": 5800
      },
      {
        "name": "ICE콜드브루(R)",
        "price": 5200
      },
      {
        "name": "ICE콜드브루 라떼(R)",
        "price": 5700
      },
      {
        "name": "ICE아메리카노(L)",
        "price": 5200
      },
      {
        "name": "HOT아메리카노(L)",
        "price": 5200
      },
      {
        "name": "ICE카푸치노(R)",
        "price": 5200
      },
      {
        "name": "HOT카푸치노(R)",
        "price": 5200
      },
      {
        "name": "ICE카페모카(R)",
        "price": 6000
      },
      {
        "name": "HOT카페모카(R)",
        "price": 6000
      },
      {
        "name": "ICE바닐라라떼(R)",
        "price": 5700
      },
      {
        "name": "HOT바닐라라떼(R)",
        "price": 5700
      },
      {
        "name": "ICE카라멜마끼아또(R)",
        "price": 6000
      },
      {
        "name": "HOT카라멜마끼아또(R)",
        "price": 6000
      },
      {
        "name": "ICE플레인요거트스무디(R)",
        "price": 6000
      },
      {
        "name": "ICE블루베리요거트스무디(R)",
        "price": 6200
      },
      {
        "name": "ICE초콜릿라떼(R)",
        "price": 5700
      },
      {
        "name": "얼그레이",
        "price": 5700
      },
      {
        "name": "페퍼민트",
        "price": 5700
      },
      {
        "name": "ICE캐모마일",
        "price": 5700
      },
      {
        "name": "HOT캐모마일",
        "price": 5700
      },
      {
        "name": "자몽차",
        "price": 5200
      },
      {
        "name": "유자차",
        "price": 5200
      },
      {
        "name": "납작복숭아아이스티(R)",
        "price": 4700
      },
      {
        "name": "납작복숭아아이스티(L)",
        "price": 5200
      },
      {
        "name": "ICE레몬에이드",
        "price": 5700
      },
      {
        "name": "ICE자몽에이드",
        "price": 5700
      },
      {
        "name": "귀리미숫가루라떼",
        "price": 5700
      },
      {
        "name": "귀리 미숫가루 라떼_H",
        "price": 5700
      },
      {
        "name": "초콜릿라떼",
        "price": 5700
      },
      {
        "name": "밤고구마라떼",
        "price": 5700
      },
      {
        "name": "ICE제주말차라떼",
        "price": 5700
      },
      {
        "name": "HOT제주말차라떼",
        "price": 5700
      },
      {
        "name": "딸기달콤라떼",
        "price": 5700
      },
      {
        "name": "ICE청포도에이드",
        "price": 5700
      },
      {
        "name": "수제소금파닭꼬치",
        "price": 5500
      },
      {
        "name": "수제데리파닭꼬치",
        "price": 5500
      },
      {
        "name": "수제매콤파닭꼬치",
        "price": 5500
      },
      {
        "name": "냄비우동",
        "price": 7000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "군만두(5개)",
        "price": 4000
      },
      {
        "name": "회오리감자",
        "price": 4500
      },
      {
        "name": "세트박스(할인판매)",
        "price": 12000
      },
      {
        "name": "뻥튀기",
        "price": 3500
      },
      {
        "name": "눈꽃치즈떡볶이",
        "price": 7000
      },
      {
        "name": "한입쌀떡세트",
        "price": 7500
      },
      {
        "name": "어묵튀김",
        "price": 3000
      },
      {
        "name": "만두튀김",
        "price": 3000
      },
      {
        "name": "김말이튀김",
        "price": 3000
      },
      {
        "name": "쌀떡볶이",
        "price": 5000
      },
      {
        "name": "튀김세트",
        "price": 6000
      },
      {
        "name": "(알뜰간식)떡볶이",
        "price": 3700
      },
      {
        "name": "뿌링감자",
        "price": 5500
      },
      {
        "name": "매운소떡",
        "price": 4500
      },
      {
        "name": "미니콜팝",
        "price": 5000
      },
      {
        "name": "왕콜팝치킨",
        "price": 6500
      },
      {
        "name": "콜팝치킨",
        "price": 5000
      },
      {
        "name": "뿌링소떡",
        "price": 4500
      },
      {
        "name": "탄산음료",
        "price": 2000
      },
      {
        "name": "감자모짜치즈스틱",
        "price": 5500
      },
      {
        "name": "바삭순살치킨꼬치(순한맛)",
        "price": 4500
      },
      {
        "name": "스프링감자",
        "price": 4500
      },
      {
        "name": "부산오뎅(순한맛)",
        "price": 4000
      },
      {
        "name": "부산오뎅(매운맛)",
        "price": 4000
      },
      {
        "name": "궁중전통식혜",
        "price": 3500
      },
      {
        "name": "(알뜰간식)옥수수",
        "price": 3700
      },
      {
        "name": "물떡꼬치",
        "price": 4000
      },
      {
        "name": "ICE레몬차",
        "price": 5200
      },
      {
        "name": "HOT레몬차",
        "price": 5200
      },
      {
        "name": "빅복숭아 아이스티",
        "price": 6500
      },
      {
        "name": "빅허니자몽 아이스티",
        "price": 6500
      },
      {
        "name": "HOT 로얄 밀크티",
        "price": 5700
      },
      {
        "name": "ICE 로얄밀크티",
        "price": 5700
      },
      {
        "name": "콩국수",
        "price": 8000
      },
      {
        "name": "바나나스틱",
        "price": 2500
      },
      {
        "name": "도깨비맛바",
        "price": 4500
      },
      {
        "name": "이천쌀핫도그",
        "price": 4500
      },
      {
        "name": "매직팡팡핫도그",
        "price": 5500
      },
      {
        "name": "링컨소세지",
        "price": 4500
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "생선가스정식",
        "price": 12000
      },
      {
        "name": "문어와오징어바",
        "price": 4500
      },
      {
        "name": "매콤새우맛바",
        "price": 4500
      },
      {
        "name": "꼬마김밥",
        "price": 3000
      },
      {
        "name": "(실속) 시락국",
        "price": 7000
      },
      {
        "name": "청양돈가스",
        "price": 12000
      },
      {
        "name": "양파돈가스",
        "price": 12000
      },
      {
        "name": "어린이돈가스",
        "price": 7000
      },
      {
        "name": "건새우탕면",
        "price": 6000
      },
      {
        "name": "북어해장라면",
        "price": 6000
      },
      {
        "name": "우리밀앙버터호두과자",
        "price": 10000
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/gangbyeon.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 234,
    "signatureMenu": {
      "name": "차돌된장찌개",
      "price": 9500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "가마솥불고기비빔밥",
        "price": 9500
      },
      {
        "name": "흑돼지제육볶음",
        "price": 9500
      },
      {
        "name": "동태탕",
        "price": 9000
      },
      {
        "name": "(실속) 돈가스",
        "price": 9900
      },
      {
        "name": "새우철판볶음밥",
        "price": 8000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "꼬지어묵우동",
        "price": 6500
      },
      {
        "name": "김치냄비우동",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "로띠번",
        "price": 3800
      },
      {
        "name": "착한시락국밥",
        "price": 7000
      },
      {
        "name": "시골김치국밥",
        "price": 7000
      },
      {
        "name": "왕돈가스",
        "price": 11000
      },
      {
        "name": "삼천포멸치육수라면",
        "price": 6000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "얼큰순두부찌개",
        "price": 9000
      },
      {
        "name": "매운꼬치어묵라면",
        "price": 6000
      },
      {
        "name": "추억의도시락라면세트",
        "price": 8900
      },
      {
        "name": "떡라면미니돈가스세트",
        "price": 9900
      },
      {
        "name": "해운대원조할매국",
        "price": 10000
      },
      {
        "name": "매콤숙주볶음우동",
        "price": 8000
      },
      {
        "name": "논개애호박짜글이",
        "price": 8900
      },
      {
        "name": "햄토스트",
        "price": 5000
      },
      {
        "name": "(알뜰)해물바",
        "price": 3700
      },
      {
        "name": "(알뜰)케이크소세지",
        "price": 3700
      },
      {
        "name": "(알뜰)미니소떡",
        "price": 3700
      },
      {
        "name": "(알뜰)떡도그",
        "price": 3700
      },
      {
        "name": "(알뜰)미니핫도그",
        "price": 3700
      },
      {
        "name": "호두카야번",
        "price": 4100
      },
      {
        "name": "(알뜰)꼬치어묵",
        "price": 3700
      },
      {
        "name": "(알뜰)찐옥수수",
        "price": 3200
      },
      {
        "name": "(알뜰)치킨팝콘",
        "price": 3700
      },
      {
        "name": "(알뜰)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰)통감자",
        "price": 3200
      },
      {
        "name": "간장찜닭덮밥",
        "price": 11000
      },
      {
        "name": "치즈돈가스",
        "price": 11500
      },
      {
        "name": "닭다리닭곰탕",
        "price": 12000
      },
      {
        "name": "흑마늘영양닭죽",
        "price": 13000
      },
      {
        "name": "사골떡만둣국",
        "price": 9000
      },
      {
        "name": "얼큰사골떡만둣국",
        "price": 10000
      },
      {
        "name": "소고기미역국",
        "price": 7000
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
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1149,
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/gangbyeon.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 241,
    "signatureMenu": {
      "name": "산채나물비빔밥",
      "price": 9500,
      "description": "누구나 좋아하는 비빔밥을 재료로 한 저염식 식단 \" 새싹삼 힐링비빔밥\" 풍성한 힐링채소와 함께 곁들인 새싹삼에 향기, 이와 어울러 지는 강된장에 묘한 매력을 가진 웰빙식단에 맞는 적합한 메뉴",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "건강버섯두부덮밥",
        "price": 7000
      },
      {
        "name": "옛날제육덮밥",
        "price": 10500
      },
      {
        "name": "옛날시래기추어탕",
        "price": 11000
      },
      {
        "name": "장터육개장",
        "price": 9500
      },
      {
        "name": "강된장고기비빔밥",
        "price": 10000
      },
      {
        "name": "매콤쭈꾸미덮밥",
        "price": 11000
      },
      {
        "name": "옛날등심돈가스",
        "price": 11000
      },
      {
        "name": "등심치즈돈가스",
        "price": 12000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "시골김치찌개",
        "price": 9500
      },
      {
        "name": "실속옛날된장찌개",
        "price": 7000
      },
      {
        "name": "매콤제육구이솥밥",
        "price": 11900
      },
      {
        "name": "돼지불고기솥밥",
        "price": 12900
      },
      {
        "name": "나주식뼈없는갈비탕",
        "price": 12900
      },
      {
        "name": "해운대소고기따로국밥",
        "price": 10000
      },
      {
        "name": "차돌된장찌개",
        "price": 10000
      },
      {
        "name": "마제소바우동&밥",
        "price": 9000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "실속유부우동",
        "price": 5500
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "얼큰진라면정식",
        "price": 5500
      },
      {
        "name": "얼큰진라면",
        "price": 4500
      },
      {
        "name": "실속EX라면",
        "price": 4000
      },
      {
        "name": "만두라면",
        "price": 5500
      },
      {
        "name": "매생이굴국밥",
        "price": 10000
      },
      {
        "name": "뼈없는순살해장국",
        "price": 10000
      },
      {
        "name": "봄달래장비빔밥+된장찌개",
        "price": 10500
      },
      {
        "name": "바다향꼬막비빔밥",
        "price": 10000
      },
      {
        "name": "기본유부초밥3P",
        "price": 3500
      },
      {
        "name": "대왕유부초밥4P",
        "price": 9500
      },
      {
        "name": "새우모둠초밥10P",
        "price": 12900
      },
      {
        "name": "연어초밥6P",
        "price": 7900
      },
      {
        "name": "불고기유부초밥2P",
        "price": 5000
      },
      {
        "name": "연어토핑유부초밥2P",
        "price": 5500
      },
      {
        "name": "돌솥비빔밥",
        "price": 10500
      },
      {
        "name": "어니언타르타르생연어",
        "price": 7900
      },
      {
        "name": "시그니처초밥(6P)",
        "price": 7900
      },
      {
        "name": "스페셜모듬(12P)",
        "price": 14900
      },
      {
        "name": "오마카세모듬(10P)",
        "price": 12900
      },
      {
        "name": "어린이돈가스",
        "price": 6000
      },
      {
        "name": "실속옛날돈가스",
        "price": 10000
      },
      {
        "name": "들깨시래기국밥",
        "price": 9500
      },
      {
        "name": "민물장어탕솥밥",
        "price": 13000
      },
      {
        "name": "뚝배기불고기솥밥",
        "price": 13000
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1149,
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
      "열린매장(간식)"
    ],
    "latitude": 35.3883,
    "longitude": 128.6905
  },
  {
    "slug": "sacheon-busan-1",
    "name": "사천휴게소",
    "image": "/images/thumbnails/gangbyeon.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 248,
    "signatureMenu": {
      "name": "실속건강버섯두부덮밥",
      "price": 7000,
      "description": "사천휴게소에서 만든 적당히 매콤한 소스와 건강한 두부의 콜라보로 맛있고 가성비가 좋은 식사를 하실수 있습니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "옛날등심돈까스",
        "price": 11000
      },
      {
        "name": "옛날제육덮밥",
        "price": 10500
      },
      {
        "name": "장터육개장",
        "price": 9500
      },
      {
        "name": "옛날시래기추어탕",
        "price": 11000
      },
      {
        "name": "치즈돈까스",
        "price": 12000
      },
      {
        "name": "시골김치찌개",
        "price": 9500
      },
      {
        "name": "산채나물비빔밥",
        "price": 9500
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "실속옛날된장찌개",
        "price": 7000
      },
      {
        "name": "매콤제육구이솥밥",
        "price": 11900
      },
      {
        "name": "돼지불고기솥밥",
        "price": 12900
      },
      {
        "name": "(해운대원조)소고기따로국밥",
        "price": 10000
      },
      {
        "name": "마제소바우동,밥",
        "price": 9000
      },
      {
        "name": "실속유부우동",
        "price": 5500
      },
      {
        "name": "실속EX라면",
        "price": 4000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "얼큰진라면",
        "price": 4500
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "얼큰진라면정식",
        "price": 5500
      },
      {
        "name": "뼈없는순살해장국",
        "price": 10000
      },
      {
        "name": "차돌된장찌개",
        "price": 10000
      },
      {
        "name": "실속어린이돈가스",
        "price": 6000
      },
      {
        "name": "기본유부초밥3P",
        "price": 3500
      },
      {
        "name": "대왕유부초밥4P",
        "price": 9500
      },
      {
        "name": "불고기유부초밥2P",
        "price": 5000
      },
      {
        "name": "새우모둠초밥10P",
        "price": 12900
      },
      {
        "name": "연어토핑유부초밥",
        "price": 5500
      },
      {
        "name": "나주식뼈없는갈비탕솥밥",
        "price": 12900
      },
      {
        "name": "실속옛날돈가스",
        "price": 10000
      },
      {
        "name": "오마카세모듬10P",
        "price": 12900
      },
      {
        "name": "연어초밥6P",
        "price": 7900
      },
      {
        "name": "어니언타르타르생언어",
        "price": 7900
      },
      {
        "name": "시그니처6P",
        "price": 7900
      },
      {
        "name": "들깨시래기국밥",
        "price": 9500
      },
      {
        "name": "뚝배기불고기솥밥",
        "price": 13000
      },
      {
        "name": "민물장어탕솥밥",
        "price": 13000
      },
      {
        "name": "강된장고기비빔밥",
        "price": 10500
      },
      {
        "name": "냉메밀소바",
        "price": 8000
      },
      {
        "name": "매콤쭈꾸미덮밥",
        "price": 11000
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
      "lpgPrice": 1129,
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
    "image": "/images/thumbnails/gangbyeon.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 255,
    "signatureMenu": {
      "name": "웰빙청매실재첩비빔밥",
      "price": 11000,
      "description": "섬진강에서만 맛 볼 수 있는 있는 재첩으로 구성된 '청매실재첩비빔밥'",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "제육덮밥",
        "price": 9500
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "재첩국",
        "price": 10000
      },
      {
        "name": "생고기김치찌개",
        "price": 9500
      },
      {
        "name": "차돌박이된장찌개",
        "price": 9500
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "(실속) 소고기미역국",
        "price": 7000
      },
      {
        "name": "육개장",
        "price": 9500
      },
      {
        "name": "왕돈가스",
        "price": 11500
      },
      {
        "name": "참치김치찌개",
        "price": 9500
      },
      {
        "name": "남도시래기국",
        "price": 9500
      },
      {
        "name": "흑돈돈가스",
        "price": 10000
      },
      {
        "name": "제육돈가스",
        "price": 12900
      },
      {
        "name": "얼큰어묵라면",
        "price": 6000
      },
      {
        "name": "왕돈가스세트",
        "price": 12500
      },
      {
        "name": "제육돈가스세트",
        "price": 13900
      },
      {
        "name": "(실속) 옛날우동",
        "price": 5500
      },
      {
        "name": "(백년가게) 건봉국밥",
        "price": 10000
      },
      {
        "name": "(백년가게) 새집추어탕",
        "price": 12000
      },
      {
        "name": "흑돈치즈돈가스",
        "price": 11500
      },
      {
        "name": "(실속) 흑돈돈가스",
        "price": 10000
      },
      {
        "name": "흑돈치즈돈가스세트",
        "price": 12500
      },
      {
        "name": "흑마늘영양닭죽",
        "price": 13000
      },
      {
        "name": "닭다리곰탕",
        "price": 12000
      },
      {
        "name": "튀김고기만두(4ea)",
        "price": 5000
      },
      {
        "name": "튀김김치만두(4ea)",
        "price": 5000
      },
      {
        "name": "(실속) 참치김치덮밥",
        "price": 7000
      },
      {
        "name": "(실속) 청매실 담은 제육옛날도시락",
        "price": 7000
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
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/gangbyeon.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "namhae",
    "highwayName": "남해고속도로",
    "locationKm": 262,
    "signatureMenu": {
      "name": "재첩국",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "웰빙청매실재첩비빔밥",
        "price": 11000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "차돌박이된장찌개",
        "price": 9500
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "왕돈가스",
        "price": 11500
      },
      {
        "name": "육개장",
        "price": 9500
      },
      {
        "name": "흑돈치즈돈가스",
        "price": 11500
      },
      {
        "name": "얼큰어묵라면",
        "price": 6000
      },
      {
        "name": "(실속) 소고기미역국",
        "price": 7000
      },
      {
        "name": "남도시래기국",
        "price": 9500
      },
      {
        "name": "제육돈가스",
        "price": 12900
      },
      {
        "name": "제육덮밥",
        "price": 9500
      },
      {
        "name": "제육돈가스세트",
        "price": 13900
      },
      {
        "name": "왕돈가스세트",
        "price": 12500
      },
      {
        "name": "(실속) 옛날우동",
        "price": 5500
      },
      {
        "name": "(백년가게) 건봉국밥",
        "price": 10000
      },
      {
        "name": "(백년가게) 새집추어탕",
        "price": 12000
      },
      {
        "name": "(실속) 흑돈돈가스",
        "price": 10000
      },
      {
        "name": "닭다리곰탕",
        "price": 12000
      },
      {
        "name": "흑마늘영양닭죽",
        "price": 13000
      },
      {
        "name": "흑돈치즈돈가스세트",
        "price": 12500
      },
      {
        "name": "튀김고기만두(4ea)",
        "price": 5000
      },
      {
        "name": "튀김김치만두(4ea)",
        "price": 5000
      },
      {
        "name": "(실속) 참치김치덮밥",
        "price": 7000
      },
      {
        "name": "(실속) 청매실 담은 제육옛날도시락",
        "price": 7000
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 269,
    "signatureMenu": {
      "name": "돼지김치찌개",
      "price": 9500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "공기밥(추가)",
        "price": 1000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "왕새우튀김우동",
        "price": 7000
      },
      {
        "name": "(실속) EX라면",
        "price": 4000
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "쇠고기육개장",
        "price": 10000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "양파뚝배기불고기",
        "price": 11000
      },
      {
        "name": "(실속) 얼갈이된장국",
        "price": 7000
      },
      {
        "name": "(실속) 실속우동",
        "price": 5500
      },
      {
        "name": "간장찜닭덮밥",
        "price": 11000
      },
      {
        "name": "흑마늘 독계죽",
        "price": 11000
      },
      {
        "name": "흑마늘 설렁탕",
        "price": 12000
      },
      {
        "name": "표고버섯청국장",
        "price": 9000
      },
      {
        "name": "영유아전용(옹알옹알맘마)",
        "price": 1500
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 276,
    "signatureMenu": {
      "name": "돼지김치찌개",
      "price": 9500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "공기밥(추가)",
        "price": 1000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "왕새우튀김우동",
        "price": 7000
      },
      {
        "name": "(실속) EX라면",
        "price": 4000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "쇠고기육개장",
        "price": 10000
      },
      {
        "name": "양파뚝배기불고기",
        "price": 11000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "(실속) 얼갈이된장국",
        "price": 7000
      },
      {
        "name": "(실속) 실속우동",
        "price": 5500
      },
      {
        "name": "간장찜닭덮밥",
        "price": 11000
      },
      {
        "name": "흑마늘 독계죽",
        "price": 11000
      },
      {
        "name": "흑마늘 설렁탕",
        "price": 12000
      },
      {
        "name": "표고버섯청국장",
        "price": 9000
      },
      {
        "name": "영유아전용(옹알옹알맘마)",
        "price": 1500
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 283,
    "signatureMenu": {
      "name": "흥부골남원추어탕",
      "price": 12000,
      "description": "“지친 심신을 달랜다” 춘향남원추어탕 남원을 대표하는 음식 “추어탕”은 단백질, 칼슘, 무기질이 풍부하여 예로부터 원기를 회복시켜주는 건강식으로 전라도식으로 조리하여 담백하며 남녀노소가 즐기기에 부담이 없어 호응도가 좋은 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "흑돼지불고기,비빔밥세트",
        "price": 12000
      },
      {
        "name": "흑돼지김치찌개",
        "price": 10000
      },
      {
        "name": "산채비빔밥",
        "price": 9000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "(실속) 남원시래기국밥",
        "price": 7000
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "육개장",
        "price": 10500
      },
      {
        "name": "산채비빔밥+열무김치세트",
        "price": 9500
      },
      {
        "name": "(반찬)열무김치",
        "price": 1000
      },
      {
        "name": "(명품)추어군만두",
        "price": 8000
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "순살우거지해장국",
        "price": 11000
      },
      {
        "name": "(실속) 어린이돈가스",
        "price": 7000
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
      "gasolinePrice": 1849,
      "dieselPrice": 1843,
      "lpgPrice": 1199,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "gwangju-daegu",
    "highwayName": "광주대구고속도로",
    "locationKm": 290,
    "signatureMenu": {
      "name": "흥부골남원추어탕",
      "price": 12000,
      "description": "“지친 심신을 달랜다” 흥부골남원추어탕 남원을 대표하는 음식 “추어탕”은 단백질, 칼슘, 무기질이 풍부하여 예로부터 원기를 회복시켜주는 건강식입니다. 매일아침 국내산 미꾸라지를 삶아 무청, 우거지, 된장을 풀어 조리하여 남도 특유의 깊은맛이 일품이며, 담백하여 남녀노소가 즐기기에 부담이 없어 호응도가 좋은 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "흑돼지불고기,비빔밥세트",
        "price": 12000
      },
      {
        "name": "산채비빔밥",
        "price": 9000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "흑돼지김치찌개",
        "price": 10000
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "(실속) 남원시래기국밥",
        "price": 7000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "육개장",
        "price": 10500
      },
      {
        "name": "(명품)추어군만두",
        "price": 8000
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "산채비빔밥+열무김치세트",
        "price": 9500
      },
      {
        "name": "(반찬)열무김치",
        "price": 1000
      },
      {
        "name": "순살우거지해장국",
        "price": 11000
      },
      {
        "name": "(실속) 어린이돈가스",
        "price": 7000
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
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 297,
    "signatureMenu": {
      "name": "(실속)순두부청국장",
      "price": 7000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "소고기국밥,솥밥",
        "price": 9500
      },
      {
        "name": "궁중가마솥비빔밥",
        "price": 8900
      },
      {
        "name": "(실속)화성웰빙비빔밥",
        "price": 7000
      },
      {
        "name": "돼지고기김치 찌개",
        "price": 8900
      },
      {
        "name": "포도수제돈가스",
        "price": 10900
      },
      {
        "name": "2. 짬뽕순두부찌개",
        "price": 9500
      },
      {
        "name": "돈가스제육덮밥",
        "price": 11000
      },
      {
        "name": "(실속)수제등심돈가스",
        "price": 9900
      },
      {
        "name": "(실속)등심돈가스",
        "price": 10000
      },
      {
        "name": "(실속)EX-라면",
        "price": 4000
      },
      {
        "name": "떡라면",
        "price": 4500
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "김치우동",
        "price": 6000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "냉모밀",
        "price": 7500
      },
      {
        "name": "짜장면",
        "price": 6000
      },
      {
        "name": "놀부부대찌개",
        "price": 11000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "소고기된장찌개",
        "price": 8500
      },
      {
        "name": "추억의도시락",
        "price": 6500
      },
      {
        "name": "비빔국수",
        "price": 7000
      },
      {
        "name": "잔치국수",
        "price": 6000
      },
      {
        "name": "열무국수",
        "price": 8000
      },
      {
        "name": "고기잔치국수",
        "price": 8500
      },
      {
        "name": "차돌잔치국수",
        "price": 9000
      },
      {
        "name": "대지식당순대국밥",
        "price": 9000
      },
      {
        "name": "대지식당순대국밥(특)",
        "price": 12000
      },
      {
        "name": "(알뜰)공주밤빵",
        "price": 3700
      },
      {
        "name": "(알뜰)호두과자",
        "price": 3200
      },
      {
        "name": "(알뜰)어떡어떡",
        "price": 3700
      },
      {
        "name": "(알뜰)소떡소떡",
        "price": 3700
      },
      {
        "name": "(알뜰)옛날핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰)도깨비핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰)케이크소시지",
        "price": 3700
      },
      {
        "name": "(알뜰)두리어묵바",
        "price": 3700
      },
      {
        "name": "(알뜰)수제야채바",
        "price": 3700
      },
      {
        "name": "(알뜰)꼬치어묵",
        "price": 3700
      },
      {
        "name": "(알뜰)닭강정",
        "price": 3700
      },
      {
        "name": "(알뜰)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰)통감자",
        "price": 3700
      },
      {
        "name": "(알뜰)옥수수",
        "price": 3700
      },
      {
        "name": "(알뜰)떡볶이",
        "price": 3700
      },
      {
        "name": "소고기국밥",
        "price": 8900
      },
      {
        "name": "소고기된장찌개+솥밥",
        "price": 8900
      },
      {
        "name": "(알뜰)미니츄러스",
        "price": 3700
      },
      {
        "name": "(화성김밥)더블치즈 김밥",
        "price": 5500
      },
      {
        "name": "(화성김밥)땡초멸치김밥",
        "price": 6000
      },
      {
        "name": "(화성김밥)떡볶이",
        "price": 5500
      },
      {
        "name": "(화성김밥)쫄깃진미채김밥",
        "price": 5500
      },
      {
        "name": "(화성김밥)참치샐러드김밥",
        "price": 5500
      },
      {
        "name": "(화성김밥)치즈떡볶이",
        "price": 6500
      },
      {
        "name": "(화성김밥)화성김밥",
        "price": 5000
      },
      {
        "name": "콩국수",
        "price": 8000
      },
      {
        "name": "手비건들깨순두부",
        "price": 9500
      },
      {
        "name": "(화성김밥)스팸김치볶음밥",
        "price": 10000
      },
      {
        "name": "(화성김밥)매콤제육볶음밥",
        "price": 10000
      },
      {
        "name": "(화성김밥)소불고기볶음밥",
        "price": 11000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "(실속) 어린이돈가스",
        "price": 7000
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "부대찌개",
        "price": 10000
      },
      {
        "name": "감자김치만두",
        "price": 7000
      },
      {
        "name": "감자고기만두",
        "price": 7000
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
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 304,
    "signatureMenu": {
      "name": "(실속) 수제등심돈가스",
      "price": 9900,
      "description": "등심을 직접 두들겨 육질을 연하게 하여 빵가루를 입혀 바삭하게 튀겨낸 돈까스",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "소고기국밥+솥밥",
        "price": 9500
      },
      {
        "name": "짬뽕순두부",
        "price": 9500
      },
      {
        "name": "돈가스제육덮밥",
        "price": 11000
      },
      {
        "name": "궁중가마솥비빔밥",
        "price": 8900
      },
      {
        "name": "(실속)순두부청국장",
        "price": 7000
      },
      {
        "name": "모둠돈가스",
        "price": 13000
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "놀부부대찌개",
        "price": 11000
      },
      {
        "name": "4. (실속상품)우동",
        "price": 5500
      },
      {
        "name": "4. 김치우동",
        "price": 6000
      },
      {
        "name": "4. 꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "4. 야채튀김우동",
        "price": 7000
      },
      {
        "name": "5. (실속)EX-라면",
        "price": 4000
      },
      {
        "name": "5. 떡라면",
        "price": 4500
      },
      {
        "name": "5. 떡만두라면",
        "price": 5000
      },
      {
        "name": "(6.유가네)곰탕",
        "price": 10000
      },
      {
        "name": "(6.유가네)육개장",
        "price": 11000
      },
      {
        "name": "(6.유가네)설렁탕",
        "price": 10000
      },
      {
        "name": "(6.유가네)얼큰우거지곰탕",
        "price": 11000
      },
      {
        "name": "소고기국밥",
        "price": 8900
      },
      {
        "name": "돼지고기김치지개+솥밥",
        "price": 9500
      },
      {
        "name": "돼지고기김치찌개",
        "price": 8900
      },
      {
        "name": "(6.유가네)한우소머리곰탕",
        "price": 13000
      },
      {
        "name": "(명품)대지순대국밥(특)",
        "price": 12000
      },
      {
        "name": "(명품)대지순대국밥",
        "price": 9000
      },
      {
        "name": "엄지 김치만두(4개)",
        "price": 4000
      },
      {
        "name": "엄지 고기만두(4개)",
        "price": 4000
      },
      {
        "name": "(알뜰)소떡소떡",
        "price": 3700
      },
      {
        "name": "(알뜰)어떡어떡",
        "price": 3700
      },
      {
        "name": "(알뜰)도깨비핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰)옛날핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰)수제야채바",
        "price": 3700
      },
      {
        "name": "(알뜰)두리어묵바",
        "price": 3700
      },
      {
        "name": "(알뜰)케이크소세지",
        "price": 3700
      },
      {
        "name": "(알뜰)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰)떡볶이",
        "price": 3700
      },
      {
        "name": "(알뜰)꼬치어묵",
        "price": 3700
      },
      {
        "name": "(알뜰)통감자",
        "price": 3700
      },
      {
        "name": "(알뜰)치킨팝콘",
        "price": 3700
      },
      {
        "name": "(알뜰)찐옥수수",
        "price": 3700
      },
      {
        "name": "(실속)호두과자",
        "price": 3200
      },
      {
        "name": "(알뜰)공주밤빵",
        "price": 3700
      },
      {
        "name": "(알뜰)수제도넛츠",
        "price": 3700
      },
      {
        "name": "치즈돈까스",
        "price": 11000
      },
      {
        "name": "퓨전충무김밥",
        "price": 6000
      },
      {
        "name": "이비가 짬뽕",
        "price": 11000
      },
      {
        "name": "이비가 국민짬뽕",
        "price": 10000
      },
      {
        "name": "이비가 국민짜장",
        "price": 8000
      },
      {
        "name": "콩국수",
        "price": 8000
      },
      {
        "name": "(실속) 화성웰빙비빔밥",
        "price": 7000
      },
      {
        "name": "웰빙불난버섯찌개",
        "price": 9500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "(실속) 어린이돈가스",
        "price": 7000
      },
      {
        "name": "부대찌개",
        "price": 10000
      },
      {
        "name": "왕돈가스",
        "price": 13000
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1216,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 311,
    "signatureMenu": {
      "name": "어리굴젓 백반",
      "price": 11000,
      "description": "서해안의 특산품 어리굴젓을 메인으로 하여 정갈하게 꾸민 백반.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돌솥비빔밥",
        "price": 9000
      },
      {
        "name": "남도시래기국",
        "price": 7000
      },
      {
        "name": "우거지국밥",
        "price": 8500
      },
      {
        "name": "순두부찌개",
        "price": 9000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "왕새우튀김우동",
        "price": 7500
      },
      {
        "name": "잔치국수",
        "price": 6000
      },
      {
        "name": "부산어묵우동",
        "price": 7000
      },
      {
        "name": "냄비우동",
        "price": 8000
      },
      {
        "name": "알밥우동정식",
        "price": 8500
      },
      {
        "name": "고등어구이정식",
        "price": 12000
      },
      {
        "name": "나주곰탕",
        "price": 9500
      },
      {
        "name": "등심돈까스",
        "price": 10000
      },
      {
        "name": "어리굴젓수육정식",
        "price": 13000
      },
      {
        "name": "치즈돈가스사이다세트",
        "price": 12000
      },
      {
        "name": "돈가스사이다세트",
        "price": 11000
      },
      {
        "name": "열무비빔밥",
        "price": 9000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 242,
    "signatureMenu": {
      "name": "어리굴젓백반",
      "price": 11000,
      "description": "대표적인 지역특산물로 어리굴젓에 청양고추, 마늘, 양파로 양념한 감칠맛이 일품인 메뉴",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "어리굴젓수육정식",
        "price": 13000
      },
      {
        "name": "왕돈까스",
        "price": 12000
      },
      {
        "name": "매콤치즈돈가스",
        "price": 12000
      },
      {
        "name": "소고기비빔밥",
        "price": 11000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "왕새우튀김우동",
        "price": 7000
      },
      {
        "name": "등심돈가스",
        "price": 11000
      },
      {
        "name": "몽글순두부찌개",
        "price": 9000
      },
      {
        "name": "콩나물해장라면",
        "price": 6000
      },
      {
        "name": "해물볶음밥",
        "price": 7500
      },
      {
        "name": "카레덮밥",
        "price": 6900
      },
      {
        "name": "치즈라면",
        "price": 6000
      },
      {
        "name": "(실속)ex-라면",
        "price": 4000
      },
      {
        "name": "자장덮밥",
        "price": 6500
      },
      {
        "name": "자장햄볶음밥",
        "price": 7900
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "김치어묵우동",
        "price": 6500
      },
      {
        "name": "잔치국수",
        "price": 7500
      },
      {
        "name": "전주비빔밥",
        "price": 9000
      },
      {
        "name": "매운어묵라면",
        "price": 6500
      },
      {
        "name": "돼지고기김치찌개",
        "price": 10000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "이해윤 추어탕",
        "price": 11000
      },
      {
        "name": "이해윤 얼큰추어탕",
        "price": 13000
      },
      {
        "name": "이해윤 우렁추어탕",
        "price": 14000
      },
      {
        "name": "김치가츠나베",
        "price": 12000
      },
      {
        "name": "소고기장터국밥",
        "price": 10000
      },
      {
        "name": "열무국수",
        "price": 7500
      },
      {
        "name": "반반돈가스",
        "price": 11000
      },
      {
        "name": "토마토제육덮밥",
        "price": 11000
      },
      {
        "name": "민대구낙지순두부찌개",
        "price": 12500
      },
      {
        "name": "(실속)돈가스",
        "price": 10000
      },
      {
        "name": "유린기돈가스",
        "price": 12000
      },
      {
        "name": "김치유부우동",
        "price": 6000
      },
      {
        "name": "얼큰대구지리탕",
        "price": 12500
      },
      {
        "name": "바삭대파 함박스테이크",
        "price": 12000
      },
      {
        "name": "살얼음냉우동",
        "price": 8000
      },
      {
        "name": "해물짬뽕밥정식",
        "price": 11000
      },
      {
        "name": "초계국수",
        "price": 8500
      },
      {
        "name": "강화맷돌콩국수",
        "price": 10000
      },
      {
        "name": "(실속)올갱이해장국",
        "price": 7000
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 325,
    "signatureMenu": {
      "name": "돌솥비빔밥",
      "price": 11000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돈가스",
        "price": 10000
      },
      {
        "name": "바우네나주곰탕",
        "price": 10000
      },
      {
        "name": "뚝배기불고기",
        "price": 10000
      },
      {
        "name": "전주식비빔밥",
        "price": 10000
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "떡라면",
        "price": 5500
      },
      {
        "name": "치즈돈가스",
        "price": 10000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "유부우동",
        "price": 7000
      },
      {
        "name": "짬뽕순두부",
        "price": 9000
      },
      {
        "name": "이해윤추어탕",
        "price": 11000
      },
      {
        "name": "떡라면(곱배기)",
        "price": 6500
      },
      {
        "name": "유부우동(곱배기)",
        "price": 8000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 332,
    "signatureMenu": {
      "name": "돌솥비빔밥",
      "price": 11000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돈가스",
        "price": 10000
      },
      {
        "name": "뚝배기불고기",
        "price": 10000
      },
      {
        "name": "바우네나주곰탕",
        "price": 10000
      },
      {
        "name": "전주식비빔밥",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 10000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "유부우동",
        "price": 7000
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "떡라면",
        "price": 5500
      },
      {
        "name": "짬뽕순두부",
        "price": 9000
      },
      {
        "name": "이해윤추어탕",
        "price": 11000
      },
      {
        "name": "떡라면(곱배기)",
        "price": 6500
      },
      {
        "name": "유부우동(곱배기)",
        "price": 8000
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 339,
    "signatureMenu": {
      "name": "울외불고기비빔밥",
      "price": 12000,
      "description": "군산 특산물 울외장아찌를 곁들인 울외불고기비빔밥",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "장터국밥",
        "price": 10000
      },
      {
        "name": "돌솥비빔밥",
        "price": 10000
      },
      {
        "name": "묵은지등갈비찜",
        "price": 12000
      },
      {
        "name": "고추장불고기",
        "price": 10000
      },
      {
        "name": "두메골 보리비빔밥",
        "price": 11000
      },
      {
        "name": "뽀빠이통등심돈가스",
        "price": 10000
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
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 346,
    "signatureMenu": {
      "name": "옥구우거지국밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "차돌박이된장찌개",
        "price": 9000
      },
      {
        "name": "김치찌개",
        "price": 9000
      },
      {
        "name": "옛날돈가스(실속상품)",
        "price": 10000
      },
      {
        "name": "라면매장-EX라면(실속상품)",
        "price": 4000
      },
      {
        "name": "라면매장-떡라면",
        "price": 5500
      },
      {
        "name": "라면매장-라면정식",
        "price": 5500
      },
      {
        "name": "라면매장-추억의도시락라면정식",
        "price": 9500
      },
      {
        "name": "라면매장-콩나물해장라면",
        "price": 5500
      },
      {
        "name": "해장아욱국밥(실속상품)",
        "price": 7000
      },
      {
        "name": "순두부찌개",
        "price": 9500
      },
      {
        "name": "뚝배기불고기",
        "price": 12000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "덮밥매장-새우볶음밥",
        "price": 9500
      },
      {
        "name": "덮밥매장-잔치국수",
        "price": 7000
      },
      {
        "name": "덮밥매장-김치볶음밥",
        "price": 9500
      },
      {
        "name": "콩나물 국밥(실속상품)",
        "price": 7000
      },
      {
        "name": "라면매장-공기밥",
        "price": 1000
      },
      {
        "name": "냄비우동",
        "price": 9000
      },
      {
        "name": "덮밥매장-만두",
        "price": 6000
      },
      {
        "name": "덮밥매장-충무김밥(계절상품)",
        "price": 6000
      },
      {
        "name": "덮밥매장-공기밥",
        "price": 1000
      },
      {
        "name": "명품 먹거리 \"대야식당\" 소머리 국밥",
        "price": 12000
      },
      {
        "name": "명품 먹거리 \"대야식당\" 대야고기국수(계절메뉴)",
        "price": 11000
      },
      {
        "name": "명품 먹거리 \"대야식당\" 소고기무국",
        "price": 10000
      },
      {
        "name": "덮밥매장-떡국",
        "price": 9000
      },
      {
        "name": "한신 즉석우동(순한맛)",
        "price": 5500
      },
      {
        "name": "한신 즉석우동(매운맛)",
        "price": 6000
      },
      {
        "name": "한신 어묵우동(순한맛)",
        "price": 7500
      },
      {
        "name": "한신 어묵우동(매운맛)",
        "price": 8000
      },
      {
        "name": "한신 비빔우동",
        "price": 7500
      },
      {
        "name": "한신 짜장우동",
        "price": 6500
      },
      {
        "name": "묵밥(계절메뉴)",
        "price": 9000
      },
      {
        "name": "남산왕동까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "덮밥매장-계룡갈비탕",
        "price": 15000
      },
      {
        "name": "덮밥매장-계룡육개장",
        "price": 12000
      },
      {
        "name": "덮밥매장-계룡육개장칼국수",
        "price": 11000
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
      "gasolinePrice": 1852,
      "dieselPrice": 1845,
      "lpgPrice": 1239,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 353,
    "signatureMenu": {
      "name": "고창장어탕",
      "price": 12000,
      "description": "기력이 약해지신다면 풍천장어탕 한 그릇 어떠신지요? 힘이 불끈불끈 솟아난답니다. 허약 체질에 좋은 정력보강제 풍천장어탕를 소개합니다. 1.장어뼈를 물에 담궈 핏물을 뺀후 무우,양파,대파,다시마 청양고추를 넣고 5시간 정도 끓여 육수를 준비한다. 2.뼈를 제거한 장어를 소금으로 비벼 깨끗이 씻어놓는다. 3.육수를 낸 건더기를 건져낸 후 2를 넣고 끓인후 식힌다. 4.식혀둔 3을 믹서기에 갈아낸 후 얼갈이,대파,된장,고추가루 를 넣고 끓인다. 5.주문시 그릇에 담아 4를 넣고 팽이버섯,깻잎,홍고추로 고명해서 제공한다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "북어해장라면",
        "price": 7000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "부대라면",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "냉메밀",
        "price": 7000
      },
      {
        "name": "돼지고기두부김치찌개",
        "price": 9000
      },
      {
        "name": "소고기우거지해장국",
        "price": 10000
      },
      {
        "name": "뚝배기불고기",
        "price": 12000
      },
      {
        "name": "옛날돈까스",
        "price": 12000
      },
      {
        "name": "치즈돈까스",
        "price": 13000
      },
      {
        "name": "등심돈까스[탄산세트]",
        "price": 13000
      },
      {
        "name": "치즈돈까스[탄산세트]",
        "price": 14000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "얼큰우동",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동[탄산세트]",
        "price": 8000
      },
      {
        "name": "유부우동[탄산세트]",
        "price": 7000
      },
      {
        "name": "얼큰우동[탄산세트]",
        "price": 7500
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "EX-라면[탄산세트]",
        "price": 5000
      },
      {
        "name": "EX-라면[생수세트]",
        "price": 4500
      },
      {
        "name": "떡라면[생수세트]",
        "price": 6000
      },
      {
        "name": "떡라면[탄산세트]",
        "price": 6500
      },
      {
        "name": "부대라면[생수세트]",
        "price": 7000
      },
      {
        "name": "부대라면[탄산세트]",
        "price": 7500
      },
      {
        "name": "북어해장라면[생수세트]",
        "price": 6500
      },
      {
        "name": "북어해장라면[탄산세트]",
        "price": 7000
      },
      {
        "name": "김치제육범벅",
        "price": 11000
      },
      {
        "name": "(실속)들깨미역국",
        "price": 7000
      },
      {
        "name": "(실속)등심돈가스",
        "price": 10000
      },
      {
        "name": "계절비빔밥",
        "price": 10000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "떡라면곱배기",
        "price": 6500
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 10,
    "signatureMenu": {
      "name": "옛날돈까스",
      "price": 12000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "치즈돈까스",
        "price": 13000
      },
      {
        "name": "떡라면",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "얼큰우동",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "북어해장라면",
        "price": 6000
      },
      {
        "name": "부대라면",
        "price": 6500
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "소고기우거지해장국",
        "price": 10000
      },
      {
        "name": "고창복분자돼지구이덮밥",
        "price": 12000
      },
      {
        "name": "뚝배기불고기",
        "price": 12000
      },
      {
        "name": "추어탕",
        "price": 11000
      },
      {
        "name": "떡라면곱빼기",
        "price": 6500
      },
      {
        "name": "(실속) 실속우동",
        "price": 5500
      },
      {
        "name": "짜장면",
        "price": 7500
      },
      {
        "name": "(실속) 실속돈까스",
        "price": 10000
      },
      {
        "name": "(실속) 들깨미역국",
        "price": 7000
      },
      {
        "name": "(실속) 순두부찌개",
        "price": 7000
      },
      {
        "name": "고창청보리비빔밥",
        "price": 11000
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
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "투뿔한우장터국밥",
      "price": 11000,
      "description": "오랜 시간 푹 끓여 깊은맛의 함평천지휴게소 대표 음식을 맛보세요!",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "옛날돼지고기김치찌개",
        "price": 10000
      },
      {
        "name": "완도전복순두부찌개",
        "price": 14000
      },
      {
        "name": "(실속) 왕우렁된장국",
        "price": 7000
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "돈가스우동정식",
        "price": 10500
      },
      {
        "name": "함평한우다짐육비빔밥",
        "price": 12000
      },
      {
        "name": "장터국수&돈가스정식",
        "price": 11000
      },
      {
        "name": "만두국",
        "price": 9000
      },
      {
        "name": "군만두(8EA)",
        "price": 8500
      },
      {
        "name": "고기듬뿍수육곰탕",
        "price": 12000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "남산매운돈까스",
        "price": 13500
      },
      {
        "name": "남산매운치즈돈까스",
        "price": 14000
      },
      {
        "name": "얼큰 파김치해장국",
        "price": 12000
      },
      {
        "name": "제육볶음&돈까스 정식",
        "price": 13000
      },
      {
        "name": "밥도둑 제육볶음",
        "price": 10000
      },
      {
        "name": "라면+파김치 세트",
        "price": 6000
      },
      {
        "name": "매운완도전복함유어묵우동",
        "price": 8000
      },
      {
        "name": "완도전복함유어묵우동",
        "price": 7500
      },
      {
        "name": "김치찌개+계란말이",
        "price": 13000
      },
      {
        "name": "장터국밥+계란말이",
        "price": 13000
      },
      {
        "name": "(실속) 남산바삭돈",
        "price": 10000
      },
      {
        "name": "반반(일반/매콤)등심돈가스",
        "price": 11000
      },
      {
        "name": "온기가득 장터국수",
        "price": 7000
      },
      {
        "name": "파김치",
        "price": 2500
      },
      {
        "name": "(실속) 우렁콩나물해장국",
        "price": 7000
      },
      {
        "name": "봄나물들기름메밀면샐러드",
        "price": 8000
      },
      {
        "name": "매콤고추장찌개",
        "price": 10000
      },
      {
        "name": "투뿔한우장터국밥+계란말이",
        "price": 14000
      },
      {
        "name": "함평한우다짐육도시락",
        "price": 7000
      },
      {
        "name": "완도전복함유어묵라면",
        "price": 7500
      },
      {
        "name": "아삭열무냉메밀면(물)",
        "price": 9500
      },
      {
        "name": "아삭열무냉메밀면(비)",
        "price": 9500
      },
      {
        "name": "(실속) 콩나물냉국",
        "price": 6500
      },
      {
        "name": "라면과옛날도시락정식",
        "price": 11000
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "바우네맑은 나주곰탕",
      "price": 12000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "콩나물해장라면",
        "price": 5500
      },
      {
        "name": "(실속) 순두부찌개",
        "price": 7000
      },
      {
        "name": "한우사골곰탕",
        "price": 12000
      },
      {
        "name": "(실속) 라면",
        "price": 3500
      },
      {
        "name": "순두부라면",
        "price": 6000
      },
      {
        "name": "공깃밥",
        "price": 1000
      },
      {
        "name": "돌솥비빔밥",
        "price": 10000
      },
      {
        "name": "참치김치찌개",
        "price": 10000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "남산매운왕돈까스",
        "price": 13500
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "(실속) 한신즉석우동",
        "price": 5500
      },
      {
        "name": "한신삼진어묵우동",
        "price": 7500
      },
      {
        "name": "한신얼큰삼진어묵우동",
        "price": 8000
      },
      {
        "name": "한신얼큰우동",
        "price": 6500
      },
      {
        "name": "[단품]약고추장도시락",
        "price": 7000
      },
      {
        "name": "한신비빔우동",
        "price": 7500
      },
      {
        "name": "[정식]약고추장도시락",
        "price": 10000
      },
      {
        "name": "열무비빔밥",
        "price": 9000
      },
      {
        "name": "냉메밀",
        "price": 8500
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
      "gasolinePrice": 1863,
      "dieselPrice": 1852,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 31,
    "signatureMenu": {
      "name": "실속콩나물황태해장국",
      "price": 7000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "전주식비빔밥",
        "price": 10000
      },
      {
        "name": "통큰김치찌개",
        "price": 10000
      },
      {
        "name": "실속)우렁된장찌개",
        "price": 7000
      },
      {
        "name": "양파제육불고기",
        "price": 10000
      },
      {
        "name": "새우볶음밥",
        "price": 9000
      },
      {
        "name": "함박스테이크",
        "price": 12000
      },
      {
        "name": "실속)등심돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 12000
      },
      {
        "name": "육개장라면",
        "price": 4000
      },
      {
        "name": "부산어묵우동",
        "price": 7000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "명동칼국수",
        "price": 9000
      },
      {
        "name": "명동얼큰칼국수",
        "price": 9000
      },
      {
        "name": "명동칼만두",
        "price": 12000
      },
      {
        "name": "떡만두국",
        "price": 9000
      },
      {
        "name": "명동왕만두",
        "price": 6000
      },
      {
        "name": "잔치국수",
        "price": 7000
      },
      {
        "name": "짜장면",
        "price": 6000
      },
      {
        "name": "부산어묵(곱)우동",
        "price": 7500
      },
      {
        "name": "부산어묵우동(곱배기)",
        "price": 8000
      },
      {
        "name": "마마텐동",
        "price": 10000
      },
      {
        "name": "통큰돈가스",
        "price": 15000
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 38,
    "signatureMenu": {
      "name": "실속우렁된장찌개",
      "price": 7000,
      "description": "그 어느 메뉴보다 저렴하고 알차며 실속적인 메뉴!",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "양파제육불고기",
        "price": 10000
      },
      {
        "name": "통큰김치찌개",
        "price": 10000
      },
      {
        "name": "실속)콩나물황태해장국",
        "price": 7000
      },
      {
        "name": "등심돈가스",
        "price": 11000
      },
      {
        "name": "치즈돈가스",
        "price": 12000
      },
      {
        "name": "고등어구이정식",
        "price": 12000
      },
      {
        "name": "김치볶음밥",
        "price": 9000
      },
      {
        "name": "새우볶음밥",
        "price": 9000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "어묵우동",
        "price": 7000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "배홍동비빔면",
        "price": 5500
      },
      {
        "name": "명동칼국수",
        "price": 9000
      },
      {
        "name": "명동얼큰칼국수",
        "price": 9000
      },
      {
        "name": "명동칼만두",
        "price": 12000
      },
      {
        "name": "명동왕만두",
        "price": 6000
      },
      {
        "name": "떡만두국",
        "price": 9000
      },
      {
        "name": "잔치국수",
        "price": 7000
      },
      {
        "name": "짜장면",
        "price": 6000
      },
      {
        "name": "전주식비빔밥",
        "price": 10000
      },
      {
        "name": "맛동순두부",
        "price": 10000
      },
      {
        "name": "한방순두부",
        "price": 11000
      },
      {
        "name": "하얀순두부찌개",
        "price": 10000
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "제육덮밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "비빔밥",
        "price": 9500
      },
      {
        "name": "추어탕",
        "price": 9000
      },
      {
        "name": "돈육김치찌개",
        "price": 9000
      },
      {
        "name": "된장찌개",
        "price": 7000
      },
      {
        "name": "순두부찌개",
        "price": 9000
      },
      {
        "name": "신가네신국밥",
        "price": 10500
      },
      {
        "name": "신가네돼지국밥",
        "price": 10500
      },
      {
        "name": "신가네정읍국밥",
        "price": 10500
      },
      {
        "name": "신가네귀리떡갈비정식",
        "price": 13000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "(실속) 로스등심돈가스",
        "price": 10000
      },
      {
        "name": "왕돈가스",
        "price": 15000
      },
      {
        "name": "옛날김밥",
        "price": 3500
      },
      {
        "name": "참치김밥",
        "price": 4000
      },
      {
        "name": "샐러드야채김밥",
        "price": 4000
      },
      {
        "name": "전주한옥떡갈비김밥",
        "price": 4000
      },
      {
        "name": "떡볶이",
        "price": 3500
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "(용우동)잔치국수",
        "price": 7000
      },
      {
        "name": "(용우동)스페샬어묵우동",
        "price": 7000
      },
      {
        "name": "(용우동)냄비우동",
        "price": 7500
      },
      {
        "name": "치즈라면",
        "price": 5000
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "갈비탕",
        "price": 10000
      },
      {
        "name": "귀리쌀누룽지탕면",
        "price": 6500
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 52,
    "signatureMenu": {
      "name": "정읍신가네귀리떡갈비정식",
      "price": 13000,
      "description": "정읍시 특산품 귀리를 활용한 귀리떡갈비를 쌈에 싸먹는 정읍시 대표 메뉴정식! 단풍미락귀리떡갈비정식",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돼지김치찌개",
        "price": 8500
      },
      {
        "name": "해물순두부찌개",
        "price": 8500
      },
      {
        "name": "정읍신가네귀리떡갈비비빔밥",
        "price": 10000
      },
      {
        "name": "소고기국밥",
        "price": 9000
      },
      {
        "name": "통등심왕돈가스",
        "price": 15000
      },
      {
        "name": "통등심돈가스",
        "price": 11000
      },
      {
        "name": "통등심치즈돈가스",
        "price": 11500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "해물된장찌개",
        "price": 8500
      },
      {
        "name": "건새우시래기된장국",
        "price": 7000
      },
      {
        "name": "불타는눈꽃등심돈가스",
        "price": 11500
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "치킨가라아게",
        "price": 4500
      },
      {
        "name": "치즈스틱",
        "price": 3500
      },
      {
        "name": "왕새우튀김",
        "price": 3500
      },
      {
        "name": "[신가네]정읍국밥",
        "price": 10500
      },
      {
        "name": "[신가네]신(辛)국밥",
        "price": 10500
      },
      {
        "name": "[신가네]돼지국밥",
        "price": 10500
      },
      {
        "name": "콩불고기야채비빔밥",
        "price": 8000
      },
      {
        "name": "얼큰콩나물해물라면",
        "price": 5500
      },
      {
        "name": "등심돈가스",
        "price": 10000
      },
      {
        "name": "귀리쌀누룽지탕면",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동(곱배기)",
        "price": 8000
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
      "gasolinePrice": 1845,
      "dieselPrice": 1839,
      "lpgPrice": 1145,
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 59,
    "signatureMenu": {
      "name": "삼채애호박찌개",
      "price": 10000,
      "description": "삼채는 인삼, 마늘, 부추, 파 등을 합친 것 같은 달콤, 매콤, 쌉쌀한 세가지 맛이 난다하여 삼채라하는 고품격 채소입니다.박을 뭉뚱약간의 삼채를 활용하여 뭉뚱하게 썰은 싱싱한 애호박과 신선한 돼지고기로 얼큰하고 깔금한 맛이 나게 조리했습니다. 어머니 손맛으로 한끼 식사 준비했습니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "코바코 옛날등심돈가스",
        "price": 11000
      },
      {
        "name": "코바코 통치즈모둠가스",
        "price": 11500
      },
      {
        "name": "나비골추어탕",
        "price": 10000
      },
      {
        "name": "코바코치즈돈가스",
        "price": 11500
      },
      {
        "name": "육개장",
        "price": 10000
      },
      {
        "name": "녹차굴비백반",
        "price": 13000
      },
      {
        "name": "(실속) 작은돈가스",
        "price": 7000
      },
      {
        "name": "어묵우동",
        "price": 6500
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "콩나물해장라면",
        "price": 4500
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "한우사골곰탕",
        "price": 12000
      },
      {
        "name": "한우사골순대국",
        "price": 11000
      },
      {
        "name": "옛날등심돈가스음료세트",
        "price": 12000
      },
      {
        "name": "치즈돈가스 음료세트",
        "price": 12500
      },
      {
        "name": "(실속) 콩나물국밥",
        "price": 7000
      },
      {
        "name": "우렁이된장찌개",
        "price": 10000
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "셀프라면",
        "price": 4000
      },
      {
        "name": "추억의도시락",
        "price": 7000
      },
      {
        "name": "일품김치",
        "price": 2000
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
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 66,
    "signatureMenu": {
      "name": "불고기비빔밥",
      "price": 9500,
      "description": "불고기비빔밥",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속) 삼채된장찌개",
        "price": 7000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "(놀부)새우볶음밥",
        "price": 9000
      },
      {
        "name": "(놀부)부대찌개",
        "price": 11000
      },
      {
        "name": "(실속) EX-라면",
        "price": 4000
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "소고기국밥",
        "price": 9000
      },
      {
        "name": "(놀부)참치김치볶음밥",
        "price": 9000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "고우고한우사골곰탕",
        "price": 12000
      },
      {
        "name": "치즈돈까스",
        "price": 11000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "뚝배기불고기",
        "price": 10000
      },
      {
        "name": "돈가스우동세트",
        "price": 14500
      },
      {
        "name": "열무김치",
        "price": 2000
      },
      {
        "name": "잔치국수",
        "price": 7000
      },
      {
        "name": "새송이옛날도시락",
        "price": 6000
      },
      {
        "name": "왕등심돈가스",
        "price": 13000
      },
      {
        "name": "(실속) 어린이돈가스",
        "price": 7000
      },
      {
        "name": "순살우거지해장국",
        "price": 11000
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
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 73,
    "signatureMenu": {
      "name": "양푼이제육비빔밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "[실속상품]라면",
        "price": 3500
      },
      {
        "name": "[실속상품]등심돈까스",
        "price": 10000
      },
      {
        "name": "어묵우동",
        "price": 7000
      },
      {
        "name": "애호박찌개",
        "price": 9500
      },
      {
        "name": "제육덮밥",
        "price": 10000
      },
      {
        "name": "[실속상품] 들깨미역국",
        "price": 7000
      },
      {
        "name": "고기순두부",
        "price": 8500
      },
      {
        "name": "[실속상품]유부우동",
        "price": 5500
      },
      {
        "name": "깨비정식(1인분)",
        "price": 15000
      },
      {
        "name": "갑쭈새(1인분)",
        "price": 15000
      },
      {
        "name": "해물된장찌개",
        "price": 9000
      },
      {
        "name": "눈꽃치즈돈가스",
        "price": 12000
      },
      {
        "name": "[실속상품] 닭개장",
        "price": 7000
      },
      {
        "name": "황태해장국",
        "price": 8500
      },
      {
        "name": "돈가스제육반반세트",
        "price": 10500
      },
      {
        "name": "떡만두국",
        "price": 7000
      },
      {
        "name": "고등어구이(1인분)",
        "price": 11000
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "땅스오리지날부대찌개",
        "price": 10000
      },
      {
        "name": "땅스치즈부대찌개",
        "price": 10500
      },
      {
        "name": "뚝배기돼지갈비찜백반",
        "price": 13500
      },
      {
        "name": "흑돼지장조림도시락",
        "price": 8000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 80,
    "signatureMenu": {
      "name": "입맛없을땐 짜글이",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "흑돼지 김치찌개",
        "price": 9000
      },
      {
        "name": "(일품김치)곡성알토란된장찌개",
        "price": 10000
      },
      {
        "name": "(실속) 치즈돈까스",
        "price": 10000
      },
      {
        "name": "(실속) 등심순살돈가스",
        "price": 10000
      },
      {
        "name": "(매운)해물 순두부찌개",
        "price": 8500
      },
      {
        "name": "(실속) 콩나물김치국밥",
        "price": 7000
      },
      {
        "name": "(실속) ex라면",
        "price": 4000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "짜장면",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "왕새우튀김우동",
        "price": 7000
      },
      {
        "name": "(순한)해물 순두부찌개",
        "price": 8500
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "흑돼지애호박국밥",
        "price": 9500
      },
      {
        "name": "곡성들깨토란탕",
        "price": 9500
      },
      {
        "name": "(할인묶음)떡라면+공기밥",
        "price": 5500
      },
      {
        "name": "쩜오세트(돈가스+유부우동)",
        "price": 8500
      },
      {
        "name": "(실속) 어린이돈가스",
        "price": 7000
      },
      {
        "name": "한우사골곰탕",
        "price": 12000
      },
      {
        "name": "명인만두라면세트",
        "price": 7000
      },
      {
        "name": "명인만두우동세트",
        "price": 8500
      },
      {
        "name": "명인만두",
        "price": 6000
      },
      {
        "name": "(실속) 해물된장찌개",
        "price": 7000
      },
      {
        "name": "스팸계란후라이",
        "price": 3000
      },
      {
        "name": "곡성통상추꼬막비빔밥",
        "price": 9500
      },
      {
        "name": "곡성통상추옛날도시락",
        "price": 8000
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
      "gasolinePrice": 1862,
      "dieselPrice": 1852,
      "lpgPrice": 1230,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 87,
    "signatureMenu": {
      "name": "(코바코)치즈돈가스",
      "price": 12000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "우거지사골곰국",
        "price": 10000
      },
      {
        "name": "(실속) 옛날돈가스",
        "price": 10000
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "코바코 오뎅꼬지어묵 우동",
        "price": 7000
      },
      {
        "name": "(실속) EX라면",
        "price": 4000
      },
      {
        "name": "햄치즈찌개",
        "price": 10500
      },
      {
        "name": "참치김치찌개",
        "price": 10000
      },
      {
        "name": "뚝 불고기",
        "price": 9000
      },
      {
        "name": "건봉국밥",
        "price": 10000
      },
      {
        "name": "치즈돈가스+우동 세트",
        "price": 16000
      },
      {
        "name": "순두부찌개",
        "price": 10000
      },
      {
        "name": "치즈돈가스+사이다 세트",
        "price": 13000
      },
      {
        "name": "옛날돈가스+사이다 세트",
        "price": 11000
      },
      {
        "name": "돼지짜글이",
        "price": 11000
      },
      {
        "name": "콩나물국밥",
        "price": 7000
      },
      {
        "name": "녹차밥도시락",
        "price": 7000
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
      "gasolinePrice": 1862,
      "dieselPrice": 1852,
      "lpgPrice": 1230,
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
    "latitude": 34.6712,
    "longitude": 126.4242
  },
  {
    "slug": "juam-both",
    "name": "주암휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "천안방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 94,
    "signatureMenu": {
      "name": "돼지짜글이",
      "price": 11000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "차돌박이된장찌개",
        "price": 9500
      },
      {
        "name": "순두부찌개",
        "price": 10000
      },
      {
        "name": "(실속) 콩나물국밥",
        "price": 7000
      },
      {
        "name": "코바코 치즈 돈가스",
        "price": 12000
      },
      {
        "name": "(실속) 옛날 돈가스",
        "price": 10000
      },
      {
        "name": "(실속) 유부 우동",
        "price": 5500
      },
      {
        "name": "코바코 어묵꼬치우동",
        "price": 7000
      },
      {
        "name": "(실속) EX라면",
        "price": 4000
      },
      {
        "name": "제육볶음",
        "price": 13000
      },
      {
        "name": "우거지사골곰국",
        "price": 10000
      },
      {
        "name": "제육볶음+치즈돈가스 반반",
        "price": 13000
      },
      {
        "name": "치즈돈가스+우동 세트",
        "price": 16000
      },
      {
        "name": "건봉국밥",
        "price": 10000
      },
      {
        "name": "옛날돈가스+사이다",
        "price": 11000
      },
      {
        "name": "치즈돈가스+사이다",
        "price": 13000
      },
      {
        "name": "김치찌개",
        "price": 10000
      },
      {
        "name": "뚝불고기",
        "price": 13000
      },
      {
        "name": "녹차밥도시락",
        "price": 7000
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
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "순천방향",
    "highwaySlug": "honam",
    "highwayName": "호남고속도로",
    "locationKm": 101,
    "signatureMenu": {
      "name": "육개장",
      "price": 9000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(탐앤탐스)아메리카노 커피",
        "price": 4600
      },
      {
        "name": "라면 자판기",
        "price": 3800
      },
      {
        "name": "갈비탕",
        "price": 9000
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/olympic.jpg",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 108,
    "signatureMenu": {
      "name": "마방장터국밥",
      "price": 9500,
      "description": "과거 지역적 특성(馬房)을 이용해 개발한 대표음식",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "설렁탕",
        "price": 9500
      },
      {
        "name": "시래기육개장",
        "price": 9500
      },
      {
        "name": "동물복지제육덮밥",
        "price": 10000
      },
      {
        "name": "실속상품",
        "price": 10000
      },
      {
        "name": "치즈 돈가스",
        "price": 11000
      },
      {
        "name": "떡라면",
        "price": 4500
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "라면 + 공기밥 세트",
        "price": 5500
      },
      {
        "name": "라면 + 충무김밥 세트",
        "price": 7000
      },
      {
        "name": "충무김밥",
        "price": 4500
      },
      {
        "name": "충무김밥(포장)",
        "price": 4500
      },
      {
        "name": "고기만두",
        "price": 5000
      },
      {
        "name": "김치만두",
        "price": 5000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "도시락우동정식",
        "price": 8000
      },
      {
        "name": "메밀소바",
        "price": 7000
      },
      {
        "name": "모듬만두",
        "price": 5000
      },
      {
        "name": "소불고기주먹밥정식",
        "price": 7500
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "잔치국수",
        "price": 6500
      },
      {
        "name": "해물얼큰우동",
        "price": 7500
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "호두과자(10개입)",
        "price": 3200
      },
      {
        "name": "호두과자(20개입)",
        "price": 6000
      },
      {
        "name": "호두과자(40개입,선물용)",
        "price": 12000
      },
      {
        "name": "오징어야채핫바",
        "price": 3700
      },
      {
        "name": "수제어묵 매운맛",
        "price": 3700
      },
      {
        "name": "수제어묵 순한맛",
        "price": 3700
      },
      {
        "name": "후라이드 닭꼬치",
        "price": 3500
      },
      {
        "name": "옛날핫도그",
        "price": 3700
      },
      {
        "name": "소떡소떡",
        "price": 3700
      },
      {
        "name": "포크소시지",
        "price": 3700
      },
      {
        "name": "우리밀핫도그",
        "price": 3700
      },
      {
        "name": "군밤",
        "price": 5500
      },
      {
        "name": "군고구마",
        "price": 5000
      },
      {
        "name": "반건조 오징어",
        "price": 8000
      },
      {
        "name": "옥수수1p",
        "price": 3700
      },
      {
        "name": "옥수수2p",
        "price": 6000
      },
      {
        "name": "김치유부우동",
        "price": 6500
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
      "evChargersCount": 10,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/olympic.jpg",
    "direction": "양방향",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 115,
    "signatureMenu": {
      "name": "한상돌솥비빔밥(이천한상)",
      "price": 11000,
      "description": "2021년 EX푸드 선정",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "한상해물순두부(이천한상)",
        "price": 10000
      },
      {
        "name": "한상돼지김치찌개(이천한상)",
        "price": 10000
      },
      {
        "name": "(실속) 자장밥(향미암)",
        "price": 7000
      },
      {
        "name": "짜장면(향미암)",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동(향미암)",
        "price": 7000
      },
      {
        "name": "(실속) 된장찌개(이천한상)",
        "price": 7000
      },
      {
        "name": "설렁탕(유가네)",
        "price": 11000
      },
      {
        "name": "곰탕(유가네)",
        "price": 11000
      },
      {
        "name": "한우소머리곰탕(유가네)",
        "price": 14000
      },
      {
        "name": "한우소머리설렁탕(유가네)",
        "price": 14000
      },
      {
        "name": "육개장(유가네)",
        "price": 11000
      },
      {
        "name": "김치우동(향미암)",
        "price": 7000
      },
      {
        "name": "(실속) EX-라면(라면)",
        "price": 4000
      },
      {
        "name": "떡만두라면(라면)",
        "price": 5000
      },
      {
        "name": "잔치국수(향미암)",
        "price": 7000
      },
      {
        "name": "소고기우거지국밥(이천국밥)",
        "price": 10000
      },
      {
        "name": "한우소머리국밥(이천국밥)",
        "price": 13000
      },
      {
        "name": "남산왕돈까스(101번지)",
        "price": 13000
      },
      {
        "name": "모듬튀김우동(향미암)",
        "price": 9000
      },
      {
        "name": "야채튀김우동(향미암)",
        "price": 7000
      },
      {
        "name": "남산치즈돈까스(101번지)",
        "price": 14000
      },
      {
        "name": "남산매운돈까스(101번지)",
        "price": 13500
      },
      {
        "name": "순대국밥(그때그집)",
        "price": 11000
      },
      {
        "name": "수육국밥(그때그집)",
        "price": 11000
      },
      {
        "name": "떡라면(라면)",
        "price": 4500
      },
      {
        "name": "만두라면(라면)",
        "price": 4500
      },
      {
        "name": "치즈라면(라면)",
        "price": 4500
      },
      {
        "name": "(실속) 유부우동(향미암)",
        "price": 5500
      },
      {
        "name": "(실속) 콩나물황태해장국(유가네)",
        "price": 7000
      },
      {
        "name": "제육비빔반상(이천국밥)",
        "price": 11000
      },
      {
        "name": "교동짬뽕",
        "price": 11000
      },
      {
        "name": "교동짬뽕(곱빼기)",
        "price": 12000
      },
      {
        "name": "교동소고기짬뽕",
        "price": 13000
      },
      {
        "name": "교동소고기짬뽕(곱빼기)",
        "price": 14000
      },
      {
        "name": "교동옛날짜장면",
        "price": 8000
      },
      {
        "name": "교동옛날짜장면(곱빼기)",
        "price": 9000
      },
      {
        "name": "교동짬뽕밥",
        "price": 11000
      },
      {
        "name": "군만두",
        "price": 6000
      },
      {
        "name": "무공돈까스",
        "price": 13500
      },
      {
        "name": "무공매운돈까스",
        "price": 14000
      },
      {
        "name": "치즈돈까스",
        "price": 14000
      },
      {
        "name": "옛날돈까스",
        "price": 12000
      },
      {
        "name": "옛날매운돈까스",
        "price": 12500
      },
      {
        "name": "짜장세트(짜장+군만두)",
        "price": 13000
      },
      {
        "name": "짬뽕세트(짬뽕+군만두)",
        "price": 16000
      },
      {
        "name": "햇사레복숭아한돈뚝불(이천한상)",
        "price": 11000
      },
      {
        "name": "(실속) 돈까스",
        "price": 10000
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
      "기타"
    ],
    "latitude": 37.5378,
    "longitude": 127.4339
  },
  {
    "slug": "icheon-both",
    "name": "이천휴게소",
    "image": "/images/thumbnails/olympic.jpg",
    "direction": "양방향",
    "directionName": "남이방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 122,
    "signatureMenu": {
      "name": "오모리 흑돼지김치찌개",
      "price": 10000,
      "description": "- 생김치를 저온에서 5일동안 숙성하여, 양념을 한 번 털고 센 불에서 설탕과 마늘을 넣어 볶아 낸 볶음 김치를 하루 정도 저온 숙성을 합니다. 이 작업을 통해 김치 특유의 텁텁한 맛과 신맛은 줄이고, 배추의 부드러운 질감과 감칠맛을 살릴 수 있습니다. - 사골육수를 베이스로 하여 깊고 진한 맛이 나고, 흑돼지를 사용하여 느끼하지 않고 담백한 맛을 내며 볶음 김치의 부드러운 질감과 흑돼지의 쫄깃한 질감이 잘 어우러지며, 신맛을 싫어하는 사람들도 거부감이 없이 드실 수 있습니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "흑돼지고추장불고기",
        "price": 10000
      },
      {
        "name": "들바람곤드레비빔밥",
        "price": 8000
      },
      {
        "name": "(실속) 장터국밥",
        "price": 7000
      },
      {
        "name": "연희옥)순대국밥",
        "price": 11000
      },
      {
        "name": "전주비빔밥",
        "price": 9500
      },
      {
        "name": "(실속) 옛날돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "(실속) EX-라면",
        "price": 4000
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "코바코어묵꼬지우동",
        "price": 7500
      },
      {
        "name": "코바코김치우동",
        "price": 7500
      },
      {
        "name": "수제(안심)돈가스",
        "price": 11500
      },
      {
        "name": "해물순두부",
        "price": 10000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "김치가츠우동(간장맛)",
        "price": 12000
      },
      {
        "name": "소내장탕",
        "price": 10500
      },
      {
        "name": "[미타우동]텐푸라우동",
        "price": 12000
      },
      {
        "name": "[미타우동]텐푸라붓카케우동",
        "price": 12000
      },
      {
        "name": "[미타우동]토리텐붓카케우동",
        "price": 12000
      },
      {
        "name": "[미타우동]명란앙가케우동",
        "price": 12000
      },
      {
        "name": "차슈덮밥",
        "price": 12500
      },
      {
        "name": "김치찜덮밥",
        "price": 12500
      },
      {
        "name": "더다믄소고기스지국밥",
        "price": 12000
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
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/olympic.jpg",
    "direction": "양방향",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 129,
    "signatureMenu": {
      "name": "해물순두부찌개",
      "price": 8500,
      "description": "바지락, 꽃게, 새우 등으로 맛을 낸 시원한 국물맛과 부드러운 순두부가 어우러진 일품 음식.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돈가스제육덮밥",
        "price": 11000
      },
      {
        "name": "치즈등심돈가스",
        "price": 11000
      },
      {
        "name": "한돈김치찌개",
        "price": 9000
      },
      {
        "name": "얼큰콩나물해장국밥",
        "price": 7000
      },
      {
        "name": "등심돈가스",
        "price": 10000
      },
      {
        "name": "음성인삼 한우설렁탕",
        "price": 11000
      },
      {
        "name": "음성표고버섯비빔밥",
        "price": 9000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "어묵꼬치우동",
        "price": 7000
      },
      {
        "name": "로제등심돈가스",
        "price": 11000
      },
      {
        "name": "이정동 전통묵밥",
        "price": 10000
      },
      {
        "name": "음성표고된장찌개",
        "price": 7000
      },
      {
        "name": "김치우동",
        "price": 6500
      },
      {
        "name": "대파육개장",
        "price": 10000
      },
      {
        "name": "치즈라면",
        "price": 6000
      },
      {
        "name": "야채김밥",
        "price": 5000
      },
      {
        "name": "참치김밥",
        "price": 5500
      },
      {
        "name": "매콤어묵김밥",
        "price": 5500
      },
      {
        "name": "진미채김밥",
        "price": 5500
      },
      {
        "name": "치즈김밥",
        "price": 5500
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "옛날자장면",
        "price": 6500
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "얼큰우거지국밥",
        "price": 9500
      },
      {
        "name": "추어탕",
        "price": 11000
      },
      {
        "name": "제육덮밥",
        "price": 9000
      },
      {
        "name": "이정동냉채묵밥",
        "price": 10000
      },
      {
        "name": "서리태콩국수(점심특선)",
        "price": 9000
      },
      {
        "name": "키즈정식",
        "price": 4000
      },
      {
        "name": "우엉김밥",
        "price": 5500
      },
      {
        "name": "로제떡볶이",
        "price": 5000
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
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/olympic.jpg",
    "direction": "양방향",
    "directionName": "남이방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 136,
    "signatureMenu": {
      "name": "한우우거지국밥",
      "price": 9500,
      "description": "한우사태고기와 사골을 혼합하여 진하게 육수를 우러내며 우거지를 두번 볶아낸 구수하고 담백한 보양 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "용대리황태해장국",
        "price": 10000
      },
      {
        "name": "음성표고된장찌개",
        "price": 7000
      },
      {
        "name": "음성청결고추장비빔밥",
        "price": 7000
      },
      {
        "name": "돈가스제육덮밥",
        "price": 11000
      },
      {
        "name": "등심돈가스",
        "price": 10000
      },
      {
        "name": "부산어묵우동",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "해장라면정식",
        "price": 6000
      },
      {
        "name": "치즈돈가스",
        "price": 12000
      },
      {
        "name": "해장라면",
        "price": 5000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "이정동전통묵밥",
        "price": 10000
      },
      {
        "name": "이정동냉채묵밥",
        "price": 10000
      },
      {
        "name": "한돈김치찌개",
        "price": 9000
      },
      {
        "name": "야채김밥",
        "price": 5000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "참치마요주먹밥",
        "price": 5000
      },
      {
        "name": "치즈김밥",
        "price": 5500
      },
      {
        "name": "참치김밥",
        "price": 5500
      },
      {
        "name": "임자탕",
        "price": 11000
      },
      {
        "name": "냉모밀",
        "price": 7500
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
      "evChargersCount": 8,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/olympic.jpg",
    "direction": "양방향",
    "directionName": "하남방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 143,
    "signatureMenu": {
      "name": "설렁탕",
      "price": 11000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "등심돈가스",
        "price": 10000
      },
      {
        "name": "고구마치즈돈가스",
        "price": 12000
      },
      {
        "name": "놀부부대찌개",
        "price": 11000
      },
      {
        "name": "치즈부대찌개",
        "price": 11000
      },
      {
        "name": "살코기설렁탕",
        "price": 11000
      },
      {
        "name": "대파육개장",
        "price": 10000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "꼬치어묵라면",
        "price": 5500
      },
      {
        "name": "소고기무우국",
        "price": 7000
      },
      {
        "name": "갈비탕",
        "price": 12000
      },
      {
        "name": "돼지고기 김치찌개",
        "price": 10000
      },
      {
        "name": "양평해장국",
        "price": 11000
      },
      {
        "name": "살코기설렁탕(특)",
        "price": 14000
      },
      {
        "name": "머릿고기설렁탕(특)",
        "price": 14000
      },
      {
        "name": "왕돈까스",
        "price": 12000
      },
      {
        "name": "인삼눈꽃돈가스",
        "price": 14000
      },
      {
        "name": "고기만두",
        "price": 7000
      },
      {
        "name": "김치만두",
        "price": 7000
      },
      {
        "name": "고기김치반반",
        "price": 7000
      },
      {
        "name": "덜매운김치만두",
        "price": 7000
      },
      {
        "name": "고추김치만두",
        "price": 7500
      },
      {
        "name": "튀김고기만두",
        "price": 6000
      },
      {
        "name": "튀김김치만두",
        "price": 6000
      },
      {
        "name": "사골떡만둣국",
        "price": 9000
      },
      {
        "name": "얼큰소고기떡만둣국",
        "price": 10000
      },
      {
        "name": "얼큰고추사골떡만둣국",
        "price": 10000
      },
      {
        "name": "시골칼국수",
        "price": 8000
      },
      {
        "name": "얼큰시골칼국수",
        "price": 8500
      },
      {
        "name": "감태칼국수",
        "price": 9000
      },
      {
        "name": "얼큰감태칼국수",
        "price": 9500
      },
      {
        "name": "얼큰소고기감태칼국수",
        "price": 10500
      },
      {
        "name": "물냉면",
        "price": 9000
      },
      {
        "name": "비빔냉면",
        "price": 9500
      },
      {
        "name": "제육덮밥",
        "price": 10000
      },
      {
        "name": "황태해장국",
        "price": 7000
      },
      {
        "name": "추어탕",
        "price": 11000
      },
      {
        "name": "고등어구이",
        "price": 12000
      },
      {
        "name": "교동짬뽕",
        "price": 11000
      },
      {
        "name": "옛날짜장",
        "price": 8000
      },
      {
        "name": "짬뽕밥",
        "price": 10000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "콩나물해장라면",
        "price": 5500
      },
      {
        "name": "전주비빔밥",
        "price": 10000
      },
      {
        "name": "고등어제육정식",
        "price": 14000
      },
      {
        "name": "물막국수",
        "price": 9000
      },
      {
        "name": "비빔막국수",
        "price": 9000
      },
      {
        "name": "들기름막국수",
        "price": 9500
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
      "gasolinePrice": 1859,
      "dieselPrice": 1848,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/olympic.jpg",
    "direction": "양방향",
    "directionName": "남이방향",
    "highwaySlug": "jungbu",
    "highwayName": "중부고속도로",
    "locationKm": 150,
    "signatureMenu": {
      "name": "해물순두부",
      "price": 9500,
      "description": "비법소스로 맛을 낸 해물순두부",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "(실속) 고추장찌개",
        "price": 7000
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "콩나물해장라면",
        "price": 5500
      },
      {
        "name": "계절비빔밥",
        "price": 9500
      },
      {
        "name": "맑은나주곰탕",
        "price": 10000
      },
      {
        "name": "진한사골곰탕",
        "price": 10000
      },
      {
        "name": "얼큰곰탕",
        "price": 10000
      },
      {
        "name": "(실속) 엄나무닭개장",
        "price": 7000
      },
      {
        "name": "(실속) ex라면",
        "price": 4000
      },
      {
        "name": "꼬치어묵라면",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "(금강설렁탕)머릿고기설렁탕",
        "price": 11000
      },
      {
        "name": "(금강설렁탕)살코기설렁탕",
        "price": 11000
      },
      {
        "name": "차돌된장찌개",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "얌샘김밥",
        "price": 5000
      },
      {
        "name": "더블치즈김밥",
        "price": 5500
      },
      {
        "name": "참치샐러드김밥",
        "price": 5500
      },
      {
        "name": "떡볶이",
        "price": 5500
      },
      {
        "name": "치즈떡볶이",
        "price": 6000
      },
      {
        "name": "모다기",
        "price": 10000
      },
      {
        "name": "얼큰순대국",
        "price": 10000
      },
      {
        "name": "사골만두국",
        "price": 10000
      },
      {
        "name": "사골순대국",
        "price": 10000
      },
      {
        "name": "(실속) 어린이돈가스",
        "price": 7000
      },
      {
        "name": "얌샘김밥+떡볶이",
        "price": 10000
      },
      {
        "name": "해장라면에 김밥추가",
        "price": 10000
      },
      {
        "name": "콩국수",
        "price": 8000
      },
      {
        "name": "왕돈가스",
        "price": 13000
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "(실속) ex-라면",
      "price": 4000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "소불고기비빔밥",
        "price": 10000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "계란떡라면",
        "price": 5500
      },
      {
        "name": "치즈돈까스",
        "price": 11000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "왕돈까스",
        "price": 11500
      },
      {
        "name": "(실속) 들깨시래기국",
        "price": 7000
      },
      {
        "name": "차돌된장찌개",
        "price": 9500
      },
      {
        "name": "(실속) 전복내장미역국",
        "price": 7000
      },
      {
        "name": "HighPork동물복지고추장돼지불고기덮밥",
        "price": 10500
      },
      {
        "name": "HighPork동물복지간장돼지불고기덮밥",
        "price": 10500
      },
      {
        "name": "마전장터국밥",
        "price": 9000
      },
      {
        "name": "햄치즈라면",
        "price": 6500
      },
      {
        "name": "인삼추어탕",
        "price": 10000
      },
      {
        "name": "부대찌개",
        "price": 9500
      },
      {
        "name": "황태해장국",
        "price": 8000
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
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "인삼가마솥비빔밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "인삼흑돼지돈까스",
        "price": 10000
      },
      {
        "name": "알밥우동정식",
        "price": 8000
      },
      {
        "name": "냄비우동",
        "price": 8000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "어묵유부우동",
        "price": 7500
      },
      {
        "name": "명동칼국수",
        "price": 8000
      },
      {
        "name": "명동왕만두",
        "price": 6000
      },
      {
        "name": "명동떡왕만두국",
        "price": 8000
      },
      {
        "name": "남도시래기국",
        "price": 7000
      },
      {
        "name": "흑돼지김치찌개",
        "price": 10000
      },
      {
        "name": "능이버섯라면",
        "price": 6500
      },
      {
        "name": "인삼깻잎돈까스",
        "price": 10000
      },
      {
        "name": "둥구나무추어탕",
        "price": 10000
      },
      {
        "name": "된장찌개",
        "price": 7000
      },
      {
        "name": "설렁탕",
        "price": 7000
      },
      {
        "name": "장터국밥",
        "price": 10000
      },
      {
        "name": "제육덮밥",
        "price": 10500
      },
      {
        "name": "어린이돈까스",
        "price": 7000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "얼큰이라면",
        "price": 4500
      },
      {
        "name": "인삼라면",
        "price": 6500
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "잔치국수",
        "price": 6500
      },
      {
        "name": "냉김치말이국수",
        "price": 7000
      },
      {
        "name": "생김치우동",
        "price": 5000
      },
      {
        "name": "인삼치즈돈까스",
        "price": 11000
      },
      {
        "name": "얼큰이라면충무김밥세트",
        "price": 6500
      },
      {
        "name": "떡만두라면충무김밥세트",
        "price": 7500
      },
      {
        "name": "유부우동물만두세트",
        "price": 7500
      },
      {
        "name": "어묵유부우동물만두세트",
        "price": 9000
      },
      {
        "name": "더덕비빔밥",
        "price": 9500
      },
      {
        "name": "풍천장어탕",
        "price": 12000
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
      "gasolinePrice": 1854,
      "dieselPrice": 1834,
      "lpgPrice": 1229,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 171,
    "signatureMenu": {
      "name": "무진장제육&돈까스",
      "price": 14000,
      "description": "무진장 지역 특산물 돼지 고기 사용한 제육 & 돈까스 세트 입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "차돌된장찌개",
        "price": 9500
      },
      {
        "name": "들깨미역국",
        "price": 7000
      },
      {
        "name": "등심돈까스",
        "price": 10000
      },
      {
        "name": "무진장 제육덮밥",
        "price": 12000
      },
      {
        "name": "무진장짜글이",
        "price": 10000
      },
      {
        "name": "부대라면",
        "price": 6500
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "떡라면",
        "price": 5500
      },
      {
        "name": "실속라면",
        "price": 3500
      },
      {
        "name": "사골우거지해장국",
        "price": 10000
      },
      {
        "name": "얼큰우동",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "추어탕",
        "price": 11000
      },
      {
        "name": "치즈돈까스",
        "price": 13000
      },
      {
        "name": "자장면",
        "price": 8000
      },
      {
        "name": "자장밥",
        "price": 9000
      },
      {
        "name": "계절비빔밥",
        "price": 10000
      },
      {
        "name": "무진장한우소고기대라파면세트",
        "price": 9000
      },
      {
        "name": "공깃밥",
        "price": 1000
      },
      {
        "name": "순두부찌개",
        "price": 7000
      },
      {
        "name": "떡라면(곱빼기)",
        "price": 6500
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
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": true
    },
    "facilities": [
      "수유실",
      "내고장특산물",
      "ATM",
      "편의점",
      "열린매장(간식)",
      "기타"
    ],
    "latitude": 37.3123,
    "longitude": 127.4079
  },
  {
    "slug": "deogyusan-both-1",
    "name": "덕유산휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 178,
    "signatureMenu": {
      "name": "사과돈가스",
      "price": 13500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "부대라면",
        "price": 6500
      },
      {
        "name": "소고기우거지해장국",
        "price": 10000
      },
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "옛날돈가스",
        "price": 12000
      },
      {
        "name": "얼큰우동",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "나주식국밥",
        "price": 7000
      },
      {
        "name": "추어탕",
        "price": 11000
      },
      {
        "name": "차돌된장찌개",
        "price": 9500
      },
      {
        "name": "실속라면",
        "price": 3500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "짜장면",
        "price": 8000
      },
      {
        "name": "짜장밥",
        "price": 9000
      },
      {
        "name": "마늘라면",
        "price": 7000
      },
      {
        "name": "들깨미역국",
        "price": 7000
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
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 185,
    "signatureMenu": {
      "name": "흑돼지소라찜",
      "price": 14000,
      "description": "지리산 흑돼지와 쫄깃한 식감의 소라가 자체개발한 양념과 어우러져 환상적인 맛을 선보이는 이색 메뉴",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "한방 우불고기",
        "price": 13000
      },
      {
        "name": "우리돼지김치찌개",
        "price": 10000
      },
      {
        "name": "등심돈가스",
        "price": 11000
      },
      {
        "name": "농심가락우동",
        "price": 7000
      },
      {
        "name": "농심유부우동",
        "price": 6000
      },
      {
        "name": "농심새우튀김우동",
        "price": 7500
      },
      {
        "name": "해물짬뽕라면",
        "price": 6000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "더덕산채비빔밥",
        "price": 11000
      },
      {
        "name": "애호박 돼지찌개",
        "price": 11000
      },
      {
        "name": "버섯들깨탕",
        "price": 9500
      },
      {
        "name": "(실속) EX-라면",
        "price": 4000
      },
      {
        "name": "(실속) 들깨미역국밥",
        "price": 7000
      },
      {
        "name": "(실속) 시래기국밥",
        "price": 7000
      },
      {
        "name": "감자수제비",
        "price": 7500
      },
      {
        "name": "등심돈가스+사이다세트",
        "price": 12000
      },
      {
        "name": "치즈돈가스+사이다세트",
        "price": 12000
      },
      {
        "name": "(실속) 실속우동",
        "price": 5500
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
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
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "latitude": 35.1801,
    "longitude": 128.8308
  },
  {
    "slug": "sancheong-both-1",
    "name": "산청휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 192,
    "signatureMenu": {
      "name": "한방우불고기",
      "price": 13000,
      "description": "한방 우(牛) 불고기는 한방재료와 소불고기로 만들어 맛과 영양가가 최고이며 누구나 맛있게 먹을 수 있는 한방음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "등심돈가스",
        "price": 11000
      },
      {
        "name": "우리돼지 김치찌개",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "해물짬뽕라면",
        "price": 6000
      },
      {
        "name": "농심새우튀김우동",
        "price": 7500
      },
      {
        "name": "농심가락우동",
        "price": 7000
      },
      {
        "name": "농심유부우동",
        "price": 6000
      },
      {
        "name": "EX-라면(실속상품)",
        "price": 4000
      },
      {
        "name": "들깨미역국밥(실속상품)",
        "price": 7000
      },
      {
        "name": "애호박돼지찌개",
        "price": 11000
      },
      {
        "name": "돌솥더덕비빔밥",
        "price": 12000
      },
      {
        "name": "흑돼지소라찜",
        "price": 14000
      },
      {
        "name": "더덕산채비빔밥",
        "price": 11000
      },
      {
        "name": "치즈돈가스+사이다세트",
        "price": 12000
      },
      {
        "name": "등심돈가스+사이다세트",
        "price": 12000
      },
      {
        "name": "버섯들깨탕",
        "price": 9500
      },
      {
        "name": "우거지국밥(실속상품)",
        "price": 7000
      },
      {
        "name": "감자수제비",
        "price": 7500
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "(실속) 실속우동",
        "price": 5500
      },
      {
        "name": "계란 장조림",
        "price": 2000
      },
      {
        "name": "계란말이",
        "price": 3000
      },
      {
        "name": "산청흑돼지불고기",
        "price": 3500
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
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1149,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 199,
    "signatureMenu": {
      "name": "새뱅이해물순두부",
      "price": 9500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "소고기국밥",
        "price": 9000
      },
      {
        "name": "산들비빔밥",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "사과돈가스",
        "price": 10000
      },
      {
        "name": "새우튀김우동",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "잔치국수",
        "price": 6500
      },
      {
        "name": "떡만두라면정식",
        "price": 6500
      },
      {
        "name": "어묵라면",
        "price": 5500
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "배추우거지국",
        "price": 7000
      },
      {
        "name": "뚝배기불고기",
        "price": 11000
      },
      {
        "name": "나주곰탕",
        "price": 10000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "김치찌개",
        "price": 9000
      },
      {
        "name": "얼큰콩나물김치국",
        "price": 7000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "사과닭볶음탕",
        "price": 12000
      },
      {
        "name": "사과한돈제육덮밥",
        "price": 12000
      },
      {
        "name": "돌솥비빔밥",
        "price": 10000
      },
      {
        "name": "사과왕돈가스",
        "price": 13000
      },
      {
        "name": "사과함박스테이크",
        "price": 11000
      },
      {
        "name": "사과치즈돈가스",
        "price": 14000
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
      "gasolinePrice": 1859,
      "dieselPrice": 1862,
      "lpgPrice": 1259,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 206,
    "signatureMenu": {
      "name": "충주(실속)사과돈가스",
      "price": 10000,
      "description": "충주사과돈가스 \\10,000원",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "버섯장터국밥",
        "price": 12000
      },
      {
        "name": "충주사과치즈돈가스",
        "price": 11000
      },
      {
        "name": "(실속)하이라이스",
        "price": 6500
      },
      {
        "name": "짬뽕",
        "price": 9000
      },
      {
        "name": "짜장면",
        "price": 7000
      },
      {
        "name": "어묵우동",
        "price": 7000
      },
      {
        "name": "유부우동정식",
        "price": 9000
      },
      {
        "name": "어묵우동정식",
        "price": 10000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "잔치국수",
        "price": 6000
      },
      {
        "name": "떡만두라면정식",
        "price": 8000
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "(실속) ex라면",
        "price": 4000
      },
      {
        "name": "충주사과수제돈가스",
        "price": 13000
      },
      {
        "name": "제육볶음",
        "price": 10000
      },
      {
        "name": "전통묵밥",
        "price": 10000
      },
      {
        "name": "냉채묵밥",
        "price": 10000
      },
      {
        "name": "임자탕(도토리들깨수제비)",
        "price": 11000
      },
      {
        "name": "얼큰순두부라면",
        "price": 6000
      },
      {
        "name": "김치우동",
        "price": 6500
      },
      {
        "name": "만두국",
        "price": 8500
      },
      {
        "name": "떡만두국",
        "price": 8500
      },
      {
        "name": "짬뽕밥",
        "price": 9000
      },
      {
        "name": "짜장밥",
        "price": 7000
      },
      {
        "name": "(실속) 우렁된장찌개",
        "price": 7000
      },
      {
        "name": "짬짜면세트(짬뽕/짜장면)",
        "price": 15000
      },
      {
        "name": "얼큰순두부라면정식",
        "price": 9000
      },
      {
        "name": "오리지널부대찌개",
        "price": 11000
      },
      {
        "name": "조미김",
        "price": 1000
      },
      {
        "name": "공기밥(추가)",
        "price": 1000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "새우볶음밥",
        "price": 9000
      },
      {
        "name": "바지락 칼국수",
        "price": 9000
      },
      {
        "name": "더덕비빔밥",
        "price": 10000
      },
      {
        "name": "사골김치찌개",
        "price": 10000
      },
      {
        "name": "제육된장찌개정식",
        "price": 12000
      },
      {
        "name": "김치찌개제육정식",
        "price": 13000
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
      "evChargersCount": 6,
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
      "ATM",
      "편의점"
    ],
    "latitude": 36.7143,
    "longitude": 127.361
  },
  {
    "slug": "seonsan-both",
    "name": "선산휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 213,
    "signatureMenu": {
      "name": "묵은지 김치찌개",
      "price": 9000,
      "description": "돼지고기와 함께 푹 끓여 집에서 먹는 찌개맛을 제공",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "우거지사골곰탕",
        "price": 9000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "후레쉬등심돈가스",
        "price": 10000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "부산어묵우동",
        "price": 6500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "얼큰육개장",
        "price": 9000
      },
      {
        "name": "우삼겹된장찌개",
        "price": 9000
      },
      {
        "name": "불고기나물비빔밥",
        "price": 10000
      },
      {
        "name": "임실치즈돈까스",
        "price": 11000
      },
      {
        "name": "사골돼지국밥",
        "price": 8500
      },
      {
        "name": "얼큰이국밥",
        "price": 10000
      },
      {
        "name": "사골순대국밥",
        "price": 9000
      },
      {
        "name": "가마솥 갈비탕",
        "price": 13000
      },
      {
        "name": "돼지찌개",
        "price": 10000
      },
      {
        "name": "후레쉬매운등심돈가스",
        "price": 10500
      },
      {
        "name": "임실치즈등심매운돈가스",
        "price": 11500
      },
      {
        "name": "곱창순두부찌개",
        "price": 9500
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
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 227,
    "signatureMenu": {
      "name": "투뿔한우장터국밥",
      "price": 11000,
      "description": "투뿔한우 장터 국밥",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "남도식돼지김치찌개",
        "price": 9500
      },
      {
        "name": "(실속) 바지락미역국",
        "price": 7000
      },
      {
        "name": "돈가스우동정식",
        "price": 9500
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "삼진어묵꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "(실속) 영산시락국밥",
        "price": 7000
      },
      {
        "name": "완도전복순두부찌개",
        "price": 14000
      },
      {
        "name": "도천순대뚝배기",
        "price": 10000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "창녕양파제육덮밥",
        "price": 10000
      },
      {
        "name": "새우튀김우동",
        "price": 7000
      },
      {
        "name": "떡만두라면정식",
        "price": 6500
      },
      {
        "name": "라면주먹밥정식",
        "price": 7000
      },
      {
        "name": "창녕양파라면",
        "price": 5000
      },
      {
        "name": "(알뜰간식)소떡소떡",
        "price": 3700
      },
      {
        "name": "(알뜰간식)닭강정",
        "price": 3700
      },
      {
        "name": "(알뜰간식)물떡꼬지",
        "price": 3700
      },
      {
        "name": "(알뜰간식) 델리만주",
        "price": 3700
      },
      {
        "name": "(알뜰간식)소시지",
        "price": 3700
      },
      {
        "name": "(알뜰간식)꼬지어묵",
        "price": 3700
      },
      {
        "name": "(알뜰간식)어묵바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰간식)옥수수",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통감자",
        "price": 3700
      },
      {
        "name": "(알뜰간식)핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)우리밀호두과자",
        "price": 3500
      },
      {
        "name": "(추가반찬)제육볶음",
        "price": 3000
      },
      {
        "name": "(추가반찬)비엔나소세지볶음",
        "price": 3000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산매운돈까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "영산휴게소정식",
        "price": 13500
      },
      {
        "name": "김치찌개계란말이세트",
        "price": 12000
      },
      {
        "name": "(추가반찬) 계란말이",
        "price": 3000
      },
      {
        "name": "차돌된장찌개",
        "price": 10000
      },
      {
        "name": "순두부찌개떡갈비세트",
        "price": 11500
      },
      {
        "name": "순살우거지해장국",
        "price": 12000
      },
      {
        "name": "돼지짜글이비빔밥",
        "price": 11000
      },
      {
        "name": "(실속) 남산돈까스",
        "price": 10000
      },
      {
        "name": "떡만두국",
        "price": 10000
      },
      {
        "name": "유채나물비빔밥",
        "price": 11000
      },
      {
        "name": "봄나물들기름메밀면샐러드",
        "price": 8000
      },
      {
        "name": "살얼음도토리묵사발",
        "price": 8000
      },
      {
        "name": "완도전복갈아넣은어묵라면",
        "price": 7500
      },
      {
        "name": "막국수돈가스세트",
        "price": 11000
      },
      {
        "name": "완도전복갈아넣은어묵우동",
        "price": 7500
      },
      {
        "name": "완도전복갈아넣은매운우동",
        "price": 8000
      },
      {
        "name": "춘천비빔막국수",
        "price": 8000
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
    "latitude": 35.1438,
    "longitude": 128.809
  },
  {
    "slug": "chilseo-both",
    "name": "칠서휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 234,
    "signatureMenu": {
      "name": "(실속) 콩나물국밥",
      "price": 7000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속) 옛날된장찌개",
        "price": 7000
      },
      {
        "name": "흑돼지김치찌개",
        "price": 10000
      },
      {
        "name": "육개장",
        "price": 9500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산매운돈까스",
        "price": 13500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "김치떡라면",
        "price": 5500
      },
      {
        "name": "해장라면",
        "price": 5500
      },
      {
        "name": "(실속) EX-라면",
        "price": 4000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "순대뚝배기",
        "price": 10000
      },
      {
        "name": "바우네 나주곰탕",
        "price": 12000
      },
      {
        "name": "땅스부대찌개",
        "price": 10000
      },
      {
        "name": "핫열라면",
        "price": 5500
      },
      {
        "name": "잔치국수",
        "price": 7000
      },
      {
        "name": "비빔국수",
        "price": 8000
      },
      {
        "name": "꼬마김밥",
        "price": 3500
      },
      {
        "name": "소고기비빔밥",
        "price": 10000
      },
      {
        "name": "어린이돈까스",
        "price": 7000
      },
      {
        "name": "(실속) 남산돈까스",
        "price": 10000
      },
      {
        "name": "남도시래기국",
        "price": 10000
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1225,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 241,
    "signatureMenu": {
      "name": "매콤제육덮밥[제순]",
      "price": 9900,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "한신삼진어묵우동",
        "price": 7500
      },
      {
        "name": "한신얼큰삼진어묵우동",
        "price": 8000
      },
      {
        "name": "한신얼큰우동",
        "price": 6500
      },
      {
        "name": "뚝배기불고기",
        "price": 11000
      },
      {
        "name": "따로국밥",
        "price": 10000
      },
      {
        "name": "대파육개장",
        "price": 10000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "강원나물밥",
        "price": 9000
      },
      {
        "name": "얼큰순두부[제순]",
        "price": 9500
      },
      {
        "name": "부대순두부정식[제순]",
        "price": 9500
      },
      {
        "name": "샘밭막국수",
        "price": 9000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "(실속) 한신우동",
        "price": 5500
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "순대국",
        "price": 10000
      },
      {
        "name": "얼큰순대국",
        "price": 11000
      },
      {
        "name": "초당두부황태해장국",
        "price": 10000
      },
      {
        "name": "실속상품(초당몽글 순두부)",
        "price": 7000
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "남산 치즈돈까스",
        "price": 14000
      },
      {
        "name": "맑은순두부[제순]",
        "price": 9500
      },
      {
        "name": "두부김치찌개",
        "price": 9500
      },
      {
        "name": "한신짜장면",
        "price": 6500
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
      "gasolinePrice": 1845,
      "dieselPrice": 1838,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 248,
    "signatureMenu": {
      "name": "매콤제육덮밥",
      "price": 9900,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "초당몽글순두부",
        "price": 7000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "떡라면",
        "price": 4500
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "[실속]등심돈가스",
        "price": 10000
      },
      {
        "name": "(실속) 한신우동",
        "price": 5500
      },
      {
        "name": "한신얼큰우동",
        "price": 6500
      },
      {
        "name": "한신삼진어묵우동",
        "price": 7500
      },
      {
        "name": "한신짜장면",
        "price": 6500
      },
      {
        "name": "대파육개장",
        "price": 10000
      },
      {
        "name": "맑은순두부",
        "price": 9500
      },
      {
        "name": "얼큰순두부",
        "price": 9500
      },
      {
        "name": "부대순두부정식",
        "price": 9500
      },
      {
        "name": "인생설렁탕정식",
        "price": 9500
      },
      {
        "name": "인생설렁탕곱빼기",
        "price": 11500
      },
      {
        "name": "샘밭막국수",
        "price": 9000
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "한신얼큰삼진어묵우동",
        "price": 8000
      },
      {
        "name": "강원나물밥",
        "price": 9000
      },
      {
        "name": "순대국",
        "price": 10000
      },
      {
        "name": "얼큰순대국",
        "price": 11000
      },
      {
        "name": "두부김치찌개",
        "price": 9500
      },
      {
        "name": "뼈해장국",
        "price": 11000
      },
      {
        "name": "다슬기해장국",
        "price": 10000
      },
      {
        "name": "남산 왕돈까스",
        "price": 13500
      },
      {
        "name": "남산 치즈돈까스",
        "price": 14000
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
      "gasolinePrice": 1845,
      "dieselPrice": 1838,
      "lpgPrice": 1219,
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
    "latitude": 37.8618,
    "longitude": 128.774
  },
  {
    "slug": "pyeongchang-seoul",
    "name": "평창휴게소",
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 255,
    "signatureMenu": {
      "name": "평창食소고기국밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "대관령 산골밥상",
        "price": 16000
      },
      {
        "name": "평창食소고기국밥(특)",
        "price": 13000
      },
      {
        "name": "강원도食해물짬뽕순두부찌개",
        "price": 9500
      },
      {
        "name": "양지설렁탕",
        "price": 11000
      },
      {
        "name": "돼지고기김치찌개",
        "price": 9500
      },
      {
        "name": "돌솥 불고기 비빔밥",
        "price": 11000
      },
      {
        "name": "대관령황태 해장국",
        "price": 9500
      },
      {
        "name": "평창왕돈까스",
        "price": 11000
      },
      {
        "name": "치즈돈까스",
        "price": 12000
      },
      {
        "name": "매콤왕돈까스",
        "price": 12000
      },
      {
        "name": "고구마치즈돈까스",
        "price": 13000
      },
      {
        "name": "냉쫄면",
        "price": 8500
      },
      {
        "name": "비빔쫄면",
        "price": 8500
      },
      {
        "name": "장칼국수",
        "price": 8500
      },
      {
        "name": "토마토 커리 소고기비빔우동",
        "price": 8500
      },
      {
        "name": "잔치국수",
        "price": 7000
      },
      {
        "name": "어황라면",
        "price": 8000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "치즈라면",
        "price": 5500
      },
      {
        "name": "만두라면",
        "price": 5500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "어묵우동",
        "price": 7500
      },
      {
        "name": "김치우동",
        "price": 7000
      },
      {
        "name": "즉석국물매콤떡볶이",
        "price": 7000
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
      "gasolinePrice": 1853,
      "dieselPrice": 1845,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 262,
    "signatureMenu": {
      "name": "불고기비빔밥",
      "price": 10500,
      "description": "호주산 불고기비빔밥입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속) 된장찌개",
        "price": 7000
      },
      {
        "name": "돼지고기김치찌개",
        "price": 10000
      },
      {
        "name": "소고기국밥",
        "price": 10000
      },
      {
        "name": "황태해장국",
        "price": 8500
      },
      {
        "name": "(실속) 순두부찌개",
        "price": 7000
      },
      {
        "name": "옛날돈가스",
        "price": 10500
      },
      {
        "name": "모짜렐라 치즈돈가스",
        "price": 12000
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "왕새우튀김우동",
        "price": 8000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "해물라면(진)",
        "price": 7000
      },
      {
        "name": "계란라면정식(진)",
        "price": 6000
      },
      {
        "name": "계란떡라면(진)",
        "price": 5500
      },
      {
        "name": "김치라면(진)",
        "price": 5500
      },
      {
        "name": "치즈라면(진)",
        "price": 5500
      },
      {
        "name": "辛라면&고기만두",
        "price": 6500
      },
      {
        "name": "辛라면&김치만두",
        "price": 6500
      },
      {
        "name": "충무김밥",
        "price": 5000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "치즈돈가스+우동 Set",
        "price": 13500
      },
      {
        "name": "모듬가스정식",
        "price": 13500
      },
      {
        "name": "김치볶음밥",
        "price": 7500
      },
      {
        "name": "낙지볶음밥",
        "price": 7500
      },
      {
        "name": "새우볶음밥",
        "price": 7500
      },
      {
        "name": "참치마요정식",
        "price": 7500
      },
      {
        "name": "메밀소바",
        "price": 6000
      },
      {
        "name": "실속우동",
        "price": 3000
      },
      {
        "name": "(실속) 휴봇라면",
        "price": 4000
      },
      {
        "name": "고기만두",
        "price": 4500
      },
      {
        "name": "갈비만두",
        "price": 4500
      },
      {
        "name": "김치만두",
        "price": 4500
      },
      {
        "name": "실속라면+충무김밥",
        "price": 7000
      },
      {
        "name": "강원나물밥",
        "price": 10000
      },
      {
        "name": "야채튀김 냉모밀",
        "price": 8900
      },
      {
        "name": "동물복지 간장돼지불고기 덮밥",
        "price": 10500
      },
      {
        "name": "동물복지 고추장돼지불고기 덮밥",
        "price": 10500
      },
      {
        "name": "아바이순대국밥",
        "price": 12000
      },
      {
        "name": "찰순대국밥",
        "price": 10000
      },
      {
        "name": "왕돈가스",
        "price": 13000
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "참치마요 라면 정식",
        "price": 9500
      },
      {
        "name": "라면+만두 세트",
        "price": 8500
      },
      {
        "name": "콩나물김치 해장라면",
        "price": 6500
      },
      {
        "name": "황태튀김우동",
        "price": 7500
      },
      {
        "name": "해물맛라면",
        "price": 5500
      },
      {
        "name": "(실속) 돈까스",
        "price": 10000
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
      "gasolinePrice": 1853,
      "dieselPrice": 1845,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 269,
    "signatureMenu": {
      "name": "횡성한우국밥",
      "price": 10000,
      "description": "질 좋은 명품 횡성 한우를 사용, 깊고 시원한 맛이 일품인 한우국밥",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "횡성한우떡더덕스테이크",
        "price": 16000
      },
      {
        "name": "돼지고기김치찌개",
        "price": 10000
      },
      {
        "name": "실속상품)횡성한우소고기미역국",
        "price": 7000
      },
      {
        "name": "순두부찌개",
        "price": 9500
      },
      {
        "name": "강원나물밥",
        "price": 10000
      },
      {
        "name": "실속상품)황태해장국",
        "price": 7000
      },
      {
        "name": "소불고기비빔밥",
        "price": 10500
      },
      {
        "name": "얼큰우동",
        "price": 6500
      },
      {
        "name": "삼진어묵우동",
        "price": 7500
      },
      {
        "name": "왕 돈가스",
        "price": 13000
      },
      {
        "name": "치즈돈가스",
        "price": 12500
      },
      {
        "name": "ex(실속)라면",
        "price": 4000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "제육돈가스",
        "price": 13000
      },
      {
        "name": "봉화산설렁탕",
        "price": 12000
      },
      {
        "name": "33떡볶이",
        "price": 5000
      },
      {
        "name": "스팸김밥",
        "price": 6000
      },
      {
        "name": "매운어묵",
        "price": 5000
      },
      {
        "name": "매운김밥",
        "price": 5000
      },
      {
        "name": "꼬치어묵",
        "price": 5000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "하이포크동물복지고추장돼지불고기덮밥",
        "price": 10500
      },
      {
        "name": "하이포크동물복지간장돼지불고기덮밥",
        "price": 10500
      },
      {
        "name": "수미네 순대국",
        "price": 10000
      },
      {
        "name": "매운왕돈가스",
        "price": 13000
      },
      {
        "name": "실속 돈가스",
        "price": 10000
      },
      {
        "name": "콩나물 라면 정식",
        "price": 7000
      },
      {
        "name": "계란떡라면",
        "price": 6000
      },
      {
        "name": "추억의 도시락 라면세트",
        "price": 10000
      },
      {
        "name": "오리지널부대찌개",
        "price": 10000
      },
      {
        "name": "치즈부대찌개",
        "price": 11000
      },
      {
        "name": "깡통햄부대찌개",
        "price": 12000
      },
      {
        "name": "알뜰간식 호두과자",
        "price": 3200
      },
      {
        "name": "호두과자 선물용",
        "price": 12800
      },
      {
        "name": "꼬마계란김밥",
        "price": 5000
      },
      {
        "name": "충무김밥",
        "price": 6000
      },
      {
        "name": "김말이튀김 떡볶이",
        "price": 7000
      },
      {
        "name": "눈꽃치즈떡볶이",
        "price": 7000
      },
      {
        "name": "문어야채어묵바",
        "price": 4500
      },
      {
        "name": "고추오징어 어묵바",
        "price": 4500
      },
      {
        "name": "알뜰간식 고추맛바",
        "price": 3700
      },
      {
        "name": "도깨비핫도그",
        "price": 4500
      },
      {
        "name": "수제어묵바",
        "price": 4500
      },
      {
        "name": "알뜰간식 소떡소떡",
        "price": 3700
      },
      {
        "name": "알뜰간식 쌀떡꼬치",
        "price": 3700
      },
      {
        "name": "소떡소떡",
        "price": 4500
      },
      {
        "name": "알뜰간식 불갈비맛 소세지",
        "price": 3700
      },
      {
        "name": "케네디소세지",
        "price": 5000
      },
      {
        "name": "치즈팡팡소세지",
        "price": 4500
      },
      {
        "name": "옛날 핫도그",
        "price": 4500
      },
      {
        "name": "매직핫도그",
        "price": 5500
      },
      {
        "name": "알뜰간식 핫도그",
        "price": 3700
      },
      {
        "name": "알뜰간식 감자핫도그",
        "price": 3700
      },
      {
        "name": "알뜰간식 해물바",
        "price": 3700
      },
      {
        "name": "통감자",
        "price": 5000
      },
      {
        "name": "알뜰간식 통감자",
        "price": 3700
      },
      {
        "name": "떡볶이",
        "price": 5000
      },
      {
        "name": "알뜰간식 떡볶이",
        "price": 3700
      },
      {
        "name": "핫칠리덕",
        "price": 5000
      },
      {
        "name": "어니언덕",
        "price": 5000
      },
      {
        "name": "알뜰간식 델리만쥬",
        "price": 3700
      },
      {
        "name": "알뜰간식 치킨팝콘",
        "price": 3700
      },
      {
        "name": "후라이드 닭꼬치",
        "price": 5500
      },
      {
        "name": "알뜰간식 바삭어포",
        "price": 3700
      },
      {
        "name": "알뜰간식 다꼬야끼",
        "price": 3700
      },
      {
        "name": "알뜰간식 오징어 야채바",
        "price": 3700
      },
      {
        "name": "멸치칼국수",
        "price": 9000
      },
      {
        "name": "얼큰 칼국수",
        "price": 9500
      },
      {
        "name": "얼큰 수제비",
        "price": 10500
      },
      {
        "name": "멸치수제비",
        "price": 10000
      },
      {
        "name": "삼진얼큰어묵우동",
        "price": 8000
      },
      {
        "name": "냉모밀",
        "price": 8500
      },
      {
        "name": "짜장면",
        "price": 6500
      },
      {
        "name": "얼큰우거지설렁탕",
        "price": 14000
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 142,
    "signatureMenu": {
      "name": "한우국밥",
      "price": 10000,
      "description": "한우국밥은 예전 시골장터에서 맛볼 수 있는 한우뼈와 한우로 우려낸 진한 육수와 파, 무우 들의 시원함을 동시에 느낄수 있는 횡성휴게소의 대표적 메뉴입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "왕등심돈가스",
        "price": 13000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "김치라면",
        "price": 4500
      },
      {
        "name": "라면",
        "price": 4000
      },
      {
        "name": "백순두부찌개",
        "price": 7000
      },
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "강원나물밥",
        "price": 10000
      },
      {
        "name": "제육돈가스",
        "price": 12000
      },
      {
        "name": "제육덮밥",
        "price": 10000
      },
      {
        "name": "김밥",
        "price": 5000
      },
      {
        "name": "더블치즈김밥",
        "price": 5500
      },
      {
        "name": "두툼돈까스김밥",
        "price": 6000
      },
      {
        "name": "떡볶이",
        "price": 5500
      },
      {
        "name": "치즈떡볶이",
        "price": 6000
      },
      {
        "name": "모다기",
        "price": 10000
      },
      {
        "name": "맑은나주곰탕",
        "price": 11000
      },
      {
        "name": "장터국밥",
        "price": 11000
      },
      {
        "name": "특곰탕",
        "price": 13000
      },
      {
        "name": "한우소머리곰탕",
        "price": 13000
      },
      {
        "name": "부대곰탕",
        "price": 11000
      },
      {
        "name": "짜장면",
        "price": 7000
      },
      {
        "name": "떡만두라면정식",
        "price": 6000
      },
      {
        "name": "황태콩나물라면",
        "price": 5500
      },
      {
        "name": "치즈라면",
        "price": 5000
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 283,
    "signatureMenu": {
      "name": "치악산큰송이갈비탕",
      "price": 11000,
      "description": "로봇 쉐프 만에 특별한 조리 법으로 조리하여 부드러운 갈비와 시원하고 담백한 국물 맛이 일품인 갈비탕",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "김치찌개",
        "price": 8500
      },
      {
        "name": "된장찌개",
        "price": 8500
      },
      {
        "name": "(실속)유부우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "(실속)라면",
        "price": 4000
      },
      {
        "name": "(로봇라면)떡라면",
        "price": 5500
      },
      {
        "name": "해물맛라면",
        "price": 5500
      },
      {
        "name": "(로봇라면)떡라면정식",
        "price": 6000
      },
      {
        "name": "치악산큰송이불고기",
        "price": 12000
      },
      {
        "name": "치악산큰송이도가니탕",
        "price": 11000
      },
      {
        "name": "꼬마김밥5줄",
        "price": 8000
      },
      {
        "name": "꼬마김밥3줄",
        "price": 4800
      },
      {
        "name": "짜파게티",
        "price": 5000
      },
      {
        "name": "사천짜파게티",
        "price": 5500
      },
      {
        "name": "김치볶음밥",
        "price": 9500
      },
      {
        "name": "햄야채볶음밥",
        "price": 9000
      },
      {
        "name": "(실속)돈까스",
        "price": 10000
      },
      {
        "name": "왕돈까스",
        "price": 13000
      },
      {
        "name": "고구마치즈돈까스",
        "price": 12000
      },
      {
        "name": "등심돈까스",
        "price": 12000
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
      "gasolinePrice": 1835,
      "dieselPrice": 1824,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 290,
    "signatureMenu": {
      "name": "문막장터국밥",
      "price": 10000,
      "description": "문막(강릉방향)휴게소의 베스트메뉴이자, 한국인의 입맛에 딱 맞는 얼큰하고 매콤한 장터국밥 입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속) 들깨미역국",
        "price": 7000
      },
      {
        "name": "옛날식순두부찌개",
        "price": 10000
      },
      {
        "name": "(실속) 등심돈까스",
        "price": 10000
      },
      {
        "name": "치악산복숭아불고기백반",
        "price": 15000
      },
      {
        "name": "도가니탕",
        "price": 16000
      },
      {
        "name": "김치치즈라면",
        "price": 5500
      },
      {
        "name": "얼큰삼진어묵우동",
        "price": 8000
      },
      {
        "name": "떡만두라면",
        "price": 6000
      },
      {
        "name": "설렁탕",
        "price": 12000
      },
      {
        "name": "얼큰우거지설렁탕",
        "price": 14000
      },
      {
        "name": "(실속) EX라면",
        "price": 4000
      },
      {
        "name": "얼큰우동",
        "price": 6500
      },
      {
        "name": "(실속) 즉석우동",
        "price": 5500
      },
      {
        "name": "김치우동",
        "price": 7000
      },
      {
        "name": "갈비탕",
        "price": 16000
      },
      {
        "name": "콩나물해장라면",
        "price": 6000
      },
      {
        "name": "남산치즈돈까스",
        "price": 13500
      },
      {
        "name": "매운갈비찜",
        "price": 16000
      },
      {
        "name": "(특)설렁탕",
        "price": 14000
      },
      {
        "name": "(실속) 된장찌개",
        "price": 7000
      },
      {
        "name": "강원나물밥",
        "price": 10000
      },
      {
        "name": "돼지불백정식",
        "price": 12000
      },
      {
        "name": "남산매운왕돈까스",
        "price": 13500
      },
      {
        "name": "돼지고기김치찌개",
        "price": 10000
      },
      {
        "name": "어수리강된장비빔밥",
        "price": 11000
      },
      {
        "name": "새우만두",
        "price": 7000
      },
      {
        "name": "고기만두",
        "price": 7000
      },
      {
        "name": "김치만두",
        "price": 7000
      },
      {
        "name": "메밀막국수",
        "price": 10000
      },
      {
        "name": "사골만두국",
        "price": 11000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "삼진어묵우동",
        "price": 7500
      },
      {
        "name": "메밀비빔막국수",
        "price": 11000
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
      "gasolinePrice": 1845,
      "dieselPrice": 1828,
      "lpgPrice": 1149,
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 297,
    "signatureMenu": {
      "name": "실속돈가스",
      "price": 10000,
      "description": "생등심을 두둘겨 각종양념 및 빵가루를 입혀 고온의 기름에 튀겨 돈가스 소스를 뿌린 음식",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "용대리황태해장국",
        "price": 10000
      },
      {
        "name": "실속참치김치찌개",
        "price": 7000
      },
      {
        "name": "가마솥우거지국밥",
        "price": 10000
      },
      {
        "name": "여흥옥 설렁탕",
        "price": 11000
      },
      {
        "name": "여주표고품은 얼큰설렁탕",
        "price": 11000
      },
      {
        "name": "돈가스제육덮밥",
        "price": 10000
      },
      {
        "name": "메밀만두",
        "price": 8000
      },
      {
        "name": "천서리 동치미막국수",
        "price": 10000
      },
      {
        "name": "천서리 비빔막국수",
        "price": 10000
      },
      {
        "name": "실속똑순이된장찌개",
        "price": 7000
      },
      {
        "name": "육개장",
        "price": 11000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "돈가스카레덮밥",
        "price": 10000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "해장라면정식",
        "price": 6000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "어묵꼬치우동",
        "price": 7000
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "김치우동",
        "price": 7000
      },
      {
        "name": "실속돈가스(남산돈까스)",
        "price": 10000
      },
      {
        "name": "얼큰우동",
        "price": 7000
      },
      {
        "name": "실속우동(수유리)",
        "price": 5500
      },
      {
        "name": "어묵꼬치우동(수유리)",
        "price": 7000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
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
      "gasolinePrice": 1844,
      "dieselPrice": 1827,
      "lpgPrice": 1194,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 304,
    "signatureMenu": {
      "name": "한식)매운돼지갈비찜",
      "price": 12000,
      "description": "2019년 ex-food 선정 메뉴입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "왕등심돈가스",
        "price": 12000
      },
      {
        "name": "한식)소고기국밥",
        "price": 11000
      },
      {
        "name": "한식)뚝배기불고기",
        "price": 11000
      },
      {
        "name": "한식)김치찌개",
        "price": 10000
      },
      {
        "name": "양식)실속등심돈가스",
        "price": 10000
      },
      {
        "name": "양식)치즈돈가스",
        "price": 11000
      },
      {
        "name": "우동)오뎅꼬치우동",
        "price": 7500
      },
      {
        "name": "우동)새우튀김우동",
        "price": 8000
      },
      {
        "name": "짬뽕왕)미스터짬뽕",
        "price": 8000
      },
      {
        "name": "짬뽕왕)오뎅짬뽕",
        "price": 9000
      },
      {
        "name": "짬뽕왕)매운짬뽕",
        "price": 9000
      },
      {
        "name": "놀부)대파육개장",
        "price": 10000
      },
      {
        "name": "한식)제육덮밥",
        "price": 9000
      },
      {
        "name": "한식)불고기비빔밥",
        "price": 10000
      },
      {
        "name": "실속)시래기된장국",
        "price": 7000
      },
      {
        "name": "한식)황태해장국",
        "price": 9000
      },
      {
        "name": "놀부)돈가스",
        "price": 11000
      },
      {
        "name": "놀부)황태콩나물해장국",
        "price": 7000
      },
      {
        "name": "놀부)새우볶음밥",
        "price": 9000
      },
      {
        "name": "놀부)참치김치볶음밥",
        "price": 9000
      },
      {
        "name": "놀부)강원나물밥",
        "price": 10000
      },
      {
        "name": "놀부)마라부대찌개",
        "price": 12000
      },
      {
        "name": "놀부)놀부부대찌개",
        "price": 11000
      },
      {
        "name": "놀부)치즈부대찌개",
        "price": 11000
      },
      {
        "name": "곰작골)장터국밥",
        "price": 12000
      },
      {
        "name": "곰작골)특곰탕",
        "price": 13000
      },
      {
        "name": "곰작골)소머리곰탕",
        "price": 13000
      },
      {
        "name": "곰작골)부대곰탕",
        "price": 11000
      },
      {
        "name": "곰작골)맑은나주곰탕",
        "price": 11000
      },
      {
        "name": "우동)옛날자장면",
        "price": 7000
      },
      {
        "name": "놀부)오뎅꼬치우동",
        "price": 7500
      },
      {
        "name": "놀부)유부우동",
        "price": 6500
      },
      {
        "name": "놀부)옛날자장면",
        "price": 7000
      },
      {
        "name": "실속상품)우동",
        "price": 5500
      },
      {
        "name": "라면)EX라면",
        "price": 4000
      },
      {
        "name": "라면)떡만두라면",
        "price": 5500
      },
      {
        "name": "라면)해장라면",
        "price": 5500
      },
      {
        "name": "우동)EX라면",
        "price": 4000
      },
      {
        "name": "짬뽕왕)잔치국수",
        "price": 7000
      },
      {
        "name": "우동)얼큰김치우동",
        "price": 7000
      },
      {
        "name": "놀부)콩나물해장라면",
        "price": 5500
      },
      {
        "name": "놀부)얼큰해장라면",
        "price": 5500
      },
      {
        "name": "놀부)치즈라면",
        "price": 5500
      },
      {
        "name": "곰작골)정식세트(나주곰탕+떡갈비)",
        "price": 16000
      },
      {
        "name": "놀부)일반라면",
        "price": 4000
      },
      {
        "name": "놀부)야채튀김우동",
        "price": 7500
      },
      {
        "name": "놀부)물막국수",
        "price": 8000
      },
      {
        "name": "놀부)비빔막국수",
        "price": 8000
      },
      {
        "name": "짬뽕왕)냉모밀",
        "price": 8000
      },
      {
        "name": "짬뽕왕)콩국수",
        "price": 9000
      },
      {
        "name": "라면)차돌숙주라면",
        "price": 7500
      },
      {
        "name": "양푼이비빔밥+청국장",
        "price": 10900
      },
      {
        "name": "꼬막비빔밥+청국장",
        "price": 12500
      },
      {
        "name": "청국장",
        "price": 9000
      },
      {
        "name": "떡만두국+공기밥",
        "price": 9500
      },
      {
        "name": "물냉면+숯불고기",
        "price": 12900
      },
      {
        "name": "비빔냉면+숯불고기",
        "price": 12900
      },
      {
        "name": "고기만두",
        "price": 5000
      },
      {
        "name": "숯불구이정식+청국장",
        "price": 12900
      },
      {
        "name": "쭈꾸미볶음반상+청국장",
        "price": 12900
      },
      {
        "name": "양평해장국",
        "price": 11000
      },
      {
        "name": "갈비탕",
        "price": 12000
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
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "하행",
    "directionName": "강릉방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 311,
    "signatureMenu": {
      "name": "돌솥비빔밥",
      "price": 10500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속) 콩나물해장국",
        "price": 7000
      },
      {
        "name": "ex-라면",
        "price": 4000
      },
      {
        "name": "설렁탕",
        "price": 10000
      },
      {
        "name": "얼큰설렁탕",
        "price": 11000
      },
      {
        "name": "수만두설렁탕",
        "price": 11000
      },
      {
        "name": "뚝배기불고기",
        "price": 10000
      },
      {
        "name": "떡국설렁탕",
        "price": 10000
      },
      {
        "name": "매운돈까스",
        "price": 12000
      },
      {
        "name": "옛날돈까스",
        "price": 11500
      },
      {
        "name": "돈잔국수",
        "price": 9500
      },
      {
        "name": "냉모밀",
        "price": 8000
      },
      {
        "name": "잔치국수",
        "price": 7000
      },
      {
        "name": "돈모밀국수",
        "price": 10500
      },
      {
        "name": "돈비국수",
        "price": 10500
      },
      {
        "name": "국물비빔국수",
        "price": 8000
      },
      {
        "name": "산들비빔밥",
        "price": 10000
      },
      {
        "name": "순두부찌개",
        "price": 8500
      },
      {
        "name": "(실속) 소고기국밥",
        "price": 7000
      },
      {
        "name": "돌솥제육볶음",
        "price": 11000
      },
      {
        "name": "신라면",
        "price": 5000
      },
      {
        "name": "진라면매운맛",
        "price": 4500
      },
      {
        "name": "진라면순한맛",
        "price": 4500
      },
      {
        "name": "오모가리참치김치찌개",
        "price": 10000
      },
      {
        "name": "김치찌개",
        "price": 9000
      },
      {
        "name": "(냉장/매운맛)한돈쌈김밥",
        "price": 6500
      },
      {
        "name": "냉장/매운맛)한돈쌈전주비빔김밥",
        "price": 6500
      },
      {
        "name": "만두(3개)",
        "price": 5000
      },
      {
        "name": "만두(5개)",
        "price": 8000
      },
      {
        "name": "(실속) 돈까스",
        "price": 10000
      },
      {
        "name": "(실속) 즉석우동",
        "price": 5500
      },
      {
        "name": "한신)얼큰우동",
        "price": 6000
      },
      {
        "name": "한신)얼큰삼진어묵우동",
        "price": 7500
      },
      {
        "name": "한신)비빔우동",
        "price": 7500
      },
      {
        "name": "한신)삼진어묵우동",
        "price": 7500
      },
      {
        "name": "한신)자장면",
        "price": 5000
      },
      {
        "name": "한신)해장냉우동",
        "price": 7500
      },
      {
        "name": "한신)얼큰해장냉우동",
        "price": 8000
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
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1853,
      "dieselPrice": 1846,
      "lpgPrice": 1228,
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "상행",
    "directionName": "인천방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 318,
    "signatureMenu": {
      "name": "소고기등심국밥",
      "price": 9500,
      "description": "얼큰한 국물과 푸짐한 양에 마음까지 따뜻해지는 소고기 국밥. 고객님들께 추천드립니다. ^^",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "콩고기더덕돌솥비빔밥",
        "price": 10500
      },
      {
        "name": "삼진어묵우동",
        "price": 7500
      },
      {
        "name": "얼큰삼진어묵우동",
        "price": 8000
      },
      {
        "name": "(실속) 즉석우동",
        "price": 5500
      },
      {
        "name": "자장면",
        "price": 5000
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "돼지김치찌개",
        "price": 9500
      },
      {
        "name": "(실속) 버섯된장찌개",
        "price": 7000
      },
      {
        "name": "백암토종순대국밥",
        "price": 10000
      },
      {
        "name": "(돈까스잔치)옛날돈까스",
        "price": 11500
      },
      {
        "name": "(돈까스잔치)매운돈가스",
        "price": 12000
      },
      {
        "name": "(돈까스잔치)잔치국수",
        "price": 7000
      },
      {
        "name": "(돈까스잔치)국물비빔국수",
        "price": 8000
      },
      {
        "name": "(돈까스잔치)돈잔국수",
        "price": 9500
      },
      {
        "name": "(돈까스잔치)돈비국수",
        "price": 10500
      },
      {
        "name": "(실속) 콩나물해장국",
        "price": 7000
      },
      {
        "name": "불낙뚝배기정식",
        "price": 11000
      },
      {
        "name": "미나리제육두루치기",
        "price": 10500
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "얼큰우동",
        "price": 6000
      },
      {
        "name": "시원한)비빔우동",
        "price": 7500
      },
      {
        "name": "냉동김밥",
        "price": 5500
      },
      {
        "name": "해물순두부",
        "price": 9000
      },
      {
        "name": "해장냉우동",
        "price": 7500
      },
      {
        "name": "얼큰해장냉우동",
        "price": 8000
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
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 325,
    "signatureMenu": {
      "name": "계란라면정식(공기밥포함)",
      "price": 6000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "치즈돈가스",
        "price": 12500
      },
      {
        "name": "등심돈가스",
        "price": 12000
      },
      {
        "name": "(실속) 휴봇우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "(실속) 휴봇라면",
        "price": 4000
      },
      {
        "name": "(실속) 소고기미역국",
        "price": 7000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "계란떡라면",
        "price": 5500
      },
      {
        "name": "해물맛라면",
        "price": 5500
      },
      {
        "name": "명품한우소머리국밥",
        "price": 12500
      },
      {
        "name": "나주식 맑은 곰탕",
        "price": 12000
      },
      {
        "name": "얼큰한 소고기 우거지 국밥",
        "price": 12000
      },
      {
        "name": "토종 순대국",
        "price": 11000
      },
      {
        "name": "꽃게 두부 된장찌개",
        "price": 9000
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
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1258,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 332,
    "signatureMenu": {
      "name": "주물솥밥",
      "price": 12000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "김치제육덮밥",
        "price": 10000
      },
      {
        "name": "김치 냄비우동",
        "price": 8000
      },
      {
        "name": "왕새우 튀김우동",
        "price": 8000
      },
      {
        "name": "오뎅꼬치우동",
        "price": 7500
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "김치 신라면",
        "price": 6000
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "육갈탕 주물솥밥",
        "price": 12000
      },
      {
        "name": "황태해장국 주물솥밥",
        "price": 12000
      },
      {
        "name": "옛날순두부 주물솥밥",
        "price": 10000
      },
      {
        "name": "소한마리탕 주물솥밥",
        "price": 12000
      },
      {
        "name": "강원나물밥",
        "price": 10000
      },
      {
        "name": "매운순두부 해장라면",
        "price": 8500
      },
      {
        "name": "고기 손만두국",
        "price": 9000
      },
      {
        "name": "김치 손만두국",
        "price": 9000
      },
      {
        "name": "반반 손만두국",
        "price": 9000
      },
      {
        "name": "반반 찐손만두",
        "price": 7000
      },
      {
        "name": "김치 찐손만두",
        "price": 7000
      },
      {
        "name": "고기 찐손만두",
        "price": 7000
      },
      {
        "name": "샘밭막국수",
        "price": 9000
      },
      {
        "name": "자장면",
        "price": 7000
      },
      {
        "name": "(실속) 콩비지찌개",
        "price": 7000
      },
      {
        "name": "돈까스 우동정식",
        "price": 12500
      },
      {
        "name": "(실속) 옛날돈까스",
        "price": 10000
      },
      {
        "name": "치즈돈까스",
        "price": 11500
      },
      {
        "name": "열무비빔밥",
        "price": 10000
      },
      {
        "name": "베트남 쌀국수",
        "price": 8500
      },
      {
        "name": "고기떡만두국(곰탕육수)",
        "price": 10000
      },
      {
        "name": "손순두부 치즈 그라탕",
        "price": 11000
      },
      {
        "name": "추억의 김치밥",
        "price": 9000
      },
      {
        "name": "김치수제비 신라면",
        "price": 8000
      },
      {
        "name": "손순두부계란찜",
        "price": 5000
      },
      {
        "name": "계란프라이1개",
        "price": 1000
      },
      {
        "name": "계란프라이3개",
        "price": 2000
      },
      {
        "name": "더블 함박스테이크",
        "price": 13000
      },
      {
        "name": "(실속) 실속우동",
        "price": 5500
      },
      {
        "name": "차돌 숙주라면",
        "price": 7500
      },
      {
        "name": "쌀호두과자(아띠몽)",
        "price": 6500
      },
      {
        "name": "옥수수빵(아띠몽)",
        "price": 2500
      },
      {
        "name": "공기밥",
        "price": 9000
      },
      {
        "name": "뚝배기 불고기_공기밥",
        "price": 11000
      },
      {
        "name": "홍천콩 순두부쫄면",
        "price": 8000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산매운돈까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
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
      "gasolinePrice": 1836,
      "dieselPrice": 1834,
      "lpgPrice": 1239,
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 339,
    "signatureMenu": {
      "name": "등심돈가스",
      "price": 12000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "치악산 곤드레 된장찌개",
        "price": 7000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "봉화산설렁탕",
        "price": 11000
      },
      {
        "name": "치즈라면",
        "price": 6000
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "수제비",
        "price": 8500
      },
      {
        "name": "만두라면",
        "price": 5500
      },
      {
        "name": "매운어묵라면",
        "price": 7000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "사골우거지해장국",
        "price": 12000
      },
      {
        "name": "치악뽕잎큰송이버섯밥",
        "price": 9900
      },
      {
        "name": "옛날돼지김치찌개",
        "price": 10000
      },
      {
        "name": "실속)돈가스",
        "price": 10000
      },
      {
        "name": "제육볶음",
        "price": 11000
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
        "description": "파스쿠찌(Pascucci)는 이탈리아 전통 커피 문화를 바탕으로 한 프리미엄 커피 브랜드입니다. 고급 원두와 정통 에스프레소 추출 방식으로 깊고 진한 커피 맛을 선사합니다. 유럽 감성의 세련된 인테리어와 다양한 음료·디저트 메뉴로 고객에게 편안한 휴식 공간을 제공합니다.",
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
      "gasolinePrice": 1855,
      "dieselPrice": 1847,
      "lpgPrice": 1214,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 346,
    "signatureMenu": {
      "name": "우동따로 알밥따로",
      "price": 9000,
      "description": "얼큰한 우동국물과 씹을 때 톡톡 터지는 식감이 매우 좋음",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "치악산큰송이뽕잎밥",
        "price": 9500
      },
      {
        "name": "메밀비빔막국수",
        "price": 9000
      },
      {
        "name": "치즈돈가스",
        "price": 11500
      },
      {
        "name": "메밀물막국수",
        "price": 8500
      },
      {
        "name": "놀부부대찌개",
        "price": 9500
      },
      {
        "name": "등심돈가스",
        "price": 10000
      },
      {
        "name": "치악산큰송이 제육덮밥",
        "price": 7000
      },
      {
        "name": "봉화산설렁탕",
        "price": 11000
      },
      {
        "name": "봉화산우거지설렁탕",
        "price": 14000
      },
      {
        "name": "짜장면",
        "price": 6000
      },
      {
        "name": "돈가스 우동정식",
        "price": 13000
      },
      {
        "name": "냉모밀",
        "price": 7000
      },
      {
        "name": "우거지국밥",
        "price": 7000
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "김치찌개",
        "price": 7000
      },
      {
        "name": "가쓰오우동",
        "price": 5500
      },
      {
        "name": "짜장면 탕수육 세트",
        "price": 12500
      },
      {
        "name": "육개장",
        "price": 9000
      },
      {
        "name": "감자옹심이",
        "price": 11000
      },
      {
        "name": "김치콩나물국밥",
        "price": 7000
      },
      {
        "name": "메밀막국수 왕만두 세트",
        "price": 11500
      },
      {
        "name": "메밀비빔막국수 왕만두 세트",
        "price": 12000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "냉모밀돈가스정식",
        "price": 13000
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
      "gasolinePrice": 1855,
      "dieselPrice": 1847,
      "lpgPrice": null,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 353,
    "signatureMenu": {
      "name": "마늘 왕 돈가스",
      "price": 11000,
      "description": "엄선한 돼지고기를 푸짐한 크기의 패티로 만들어, 혼자보단 여럿이 먹기에 좋은 돈가스 입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "경양식돈가스",
        "price": 9000
      },
      {
        "name": "육개장",
        "price": 7500
      },
      {
        "name": "실속라면",
        "price": 3500
      },
      {
        "name": "실속유부우동",
        "price": 5500
      },
      {
        "name": "땡초라면",
        "price": 4000
      },
      {
        "name": "어묵우동",
        "price": 6000
      },
      {
        "name": "사골우거지국",
        "price": 7000
      },
      {
        "name": "금강설렁탕",
        "price": 11000
      },
      {
        "name": "버섯들깨탕",
        "price": 7000
      },
      {
        "name": "금강설렁탕(살코기)",
        "price": 11000
      },
      {
        "name": "황태해장국",
        "price": 8000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 10,
    "signatureMenu": {
      "name": "새뱅이해물순두부찌개",
      "price": 9000,
      "description": "충청도 특유의 민물새우인 새뱅이와 액젓과 각종 조미료를 사용하여 만든 특제 양념을 곁들인 순두부찌개",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "소고기국밥",
        "price": 9000
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "돌솥비빔밥",
        "price": 9500
      },
      {
        "name": "(실속)돈가스",
        "price": 10000
      },
      {
        "name": "왕새우튀김우동",
        "price": 7500
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "떡라면",
        "price": 4500
      },
      {
        "name": "돼지고기 김치찌개",
        "price": 9000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "금강설렁탕",
        "price": 11000
      },
      {
        "name": "금강살코기설렁탕",
        "price": 11000
      },
      {
        "name": "(실속)우동",
        "price": 5500
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 17,
    "signatureMenu": {
      "name": "이동삼안동간고등어정식",
      "price": 12000,
      "description": "뱃길이 닿지 않았던 안동 좀처럼 생선맛을 보기 힘들었던 내륙지방에선 고등어에 왕소금을 뿌려 절여서 밥상에 올렸습니다. 안동간고등어는 바다생선을 내륙화 한것으로, 오랫동안 변함없이 우리 식탁의 입맛을 지켜온 짠고집의 맛입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "대왕돈가스",
        "price": 11000
      },
      {
        "name": "등심돈가스",
        "price": 9500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "대파육개장",
        "price": 7000
      },
      {
        "name": "나드리 쫄면",
        "price": 8000
      },
      {
        "name": "나드리 간쫄면",
        "price": 8000
      },
      {
        "name": "그냥라면",
        "price": 3500
      },
      {
        "name": "나드리쫄면,비조리(밀키트)",
        "price": 7000
      },
      {
        "name": "(3세~7세)옹알옹알맘마(KIDS ONLY)",
        "price": 1500
      },
      {
        "name": "(조식한정)황태해장국",
        "price": 8000
      },
      {
        "name": "부대찌개",
        "price": 9000
      },
      {
        "name": "(실속) 쇠고기미역국",
        "price": 7000
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
      "gasolinePrice": 0,
      "dieselPrice": 0,
      "lpgPrice": 1172,
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
      "기타"
    ],
    "latitude": 36.6438,
    "longitude": 128.6394
  },
  {
    "slug": "andong-both",
    "name": "안동휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 24,
    "signatureMenu": {
      "name": "이동삼안동간고등어정식",
      "price": 12000,
      "description": "예로 부터 안동간고등어가 유명해진 이유가있다. 안동은 바다가 먼 산간지방이다 보니 생선을 구해 먹기가 어려웠다고 한다. 그러면서 소금간을 해서 저장을 할 수 밖에 없었는데 자연스럽게 고등어 간을 잘하게 되었고 간잽이라는 명칭까지 생기면서 전문 간잽이로 이동삼씨가 유명해진걸로 알려져 있다. 지금은 고인이 되셨지만 그 명맥을 이어 이동삼안동간고등어라는 브랜드로 자리잡고 유통이 되고 있다. 예전 자반고등어처럼 간이 쎄지 않으며 적절한 간조절과 초벌없이 화덕에 고온으로 갓 구워낸 고등어와 따뜻한 흰쌀밥과 먹었을때 그 풍미가 더한다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "대왕돈가스",
        "price": 11000
      },
      {
        "name": "등심 돈가스",
        "price": 9500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "어묵우동",
        "price": 6000
      },
      {
        "name": "부대찌개",
        "price": 9000
      },
      {
        "name": "나드리 쫄면",
        "price": 8000
      },
      {
        "name": "나드리 간쫄면",
        "price": 8000
      },
      {
        "name": "그냥라면",
        "price": 3500
      },
      {
        "name": "차돌된장찌개",
        "price": 9000
      },
      {
        "name": "안동간고등어정식 2인분 + 안동간고등어정식 1인분",
        "price": 26000
      },
      {
        "name": "안동간고등어정식 2인분 + 오모가리참치김치찌개 1인분",
        "price": 26000
      },
      {
        "name": "안동간고등어정식 2인분 + 흑돼지돈가스 1인분",
        "price": 26000
      },
      {
        "name": "영유아전용 옹알옹알맘마(KIDS ONLY)",
        "price": 1500
      },
      {
        "name": "소고기 미역국",
        "price": 9000
      },
      {
        "name": "황태해장국",
        "price": 8000
      },
      {
        "name": "대파 육개장",
        "price": 7000
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
      "gasolinePrice": 1848,
      "dieselPrice": 1843,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 31,
    "signatureMenu": {
      "name": "대구 파육개장",
      "price": 10000,
      "description": "대구 10미 육개장",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "간고등어구이 정식",
        "price": 12000
      },
      {
        "name": "의성마늘 돈가스",
        "price": 10000
      },
      {
        "name": "시골비빔밥",
        "price": 9000
      },
      {
        "name": "제비원 된장찌개",
        "price": 8000
      },
      {
        "name": "맑은 순두부",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "짜장면",
        "price": 6500
      },
      {
        "name": "의성마늘라면",
        "price": 5000
      },
      {
        "name": "돌솥비빔밥",
        "price": 8500
      },
      {
        "name": "의성마늘 왕돈가스",
        "price": 11000
      },
      {
        "name": "치즈돈가스",
        "price": 9000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "짬뽕",
        "price": 7500
      },
      {
        "name": "매운짬뽕",
        "price": 8000
      },
      {
        "name": "당면짬뽕밥",
        "price": 8500
      },
      {
        "name": "오모가리 김치찌개",
        "price": 9500
      },
      {
        "name": "의성마늘라면 콤보세트",
        "price": 7500
      },
      {
        "name": "제육덮밥정식",
        "price": 10000
      },
      {
        "name": "냉모밀",
        "price": 7500
      },
      {
        "name": "의성마늘 하프돈가스",
        "price": 7000
      },
      {
        "name": "매콤숙주라면",
        "price": 6000
      },
      {
        "name": "제비원 된장국",
        "price": 7000
      },
      {
        "name": "삼양추어탕",
        "price": 10000
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
      "gasolinePrice": 1838,
      "dieselPrice": 1835,
      "lpgPrice": 1119,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 38,
    "signatureMenu": {
      "name": "간고등어구이정식",
      "price": 12000,
      "description": "그릴에 노릇하게 구운 간고등어구이 정식",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "대구 파육개장",
        "price": 10000
      },
      {
        "name": "의성마늘 돈가스",
        "price": 10000
      },
      {
        "name": "시골 비빔밥",
        "price": 9000
      },
      {
        "name": "표고버섯 된장찌개",
        "price": 9500
      },
      {
        "name": "맑은 순두부",
        "price": 7000
      },
      {
        "name": "의성마늘라면",
        "price": 5000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "짜장면",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "돌솥비빔밥",
        "price": 10000
      },
      {
        "name": "오모가리 김치찌개",
        "price": 9500
      },
      {
        "name": "의성마늘 왕돈가스",
        "price": 11000
      },
      {
        "name": "치즈돈가스",
        "price": 9000
      },
      {
        "name": "EX 라면",
        "price": 4000
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "짬뽕",
        "price": 7500
      },
      {
        "name": "매운짬뽕",
        "price": 8000
      },
      {
        "name": "당면짬뽕밥",
        "price": 8500
      },
      {
        "name": "제비원 된장국",
        "price": 7000
      },
      {
        "name": "의성마늘라면 콤보세트",
        "price": 7500
      },
      {
        "name": "냉모밀",
        "price": 7500
      },
      {
        "name": "의성마늘 하프돈가스",
        "price": 7000
      },
      {
        "name": "매콤숙주라면",
        "price": 6000
      },
      {
        "name": "삼양추어탕",
        "price": 10000
      },
      {
        "name": "점보 유부우동",
        "price": 7500
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
      "gasolinePrice": 1838,
      "dieselPrice": 1835,
      "lpgPrice": 1119,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "삼척방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 45,
    "signatureMenu": {
      "name": "가배만쥬,강릉 단오빵",
      "price": 12000,
      "description": "동해 특산물인 솔향 강릉에서 생산한 영양간식으로 커피 원두가 썩여 은은하게 향기 풍기며ㄴ 달지 않은 앙금이 듬뿍 들어있고 커피한잔하고 같이 들길수 있는 커피빵은 동해휴게소에서만 맞볼수 있는 특별 간식이다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(알뜰간식)커피콩빵",
        "price": 3700
      },
      {
        "name": "자장면",
        "price": 7000
      },
      {
        "name": "오늘은제육볶음",
        "price": 11000
      },
      {
        "name": "초당순두부",
        "price": 8000
      },
      {
        "name": "육개장",
        "price": 10000
      },
      {
        "name": "(실속) 된장찌개",
        "price": 7000
      },
      {
        "name": "(실속) 돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11500
      },
      {
        "name": "수제등심돈가스",
        "price": 11000
      },
      {
        "name": "치킨가라아게카레",
        "price": 11500
      },
      {
        "name": "소고기무국",
        "price": 10000
      },
      {
        "name": "강원나물밥",
        "price": 9000
      },
      {
        "name": "산채비빔밥",
        "price": 10000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "새우튀김우동",
        "price": 8000
      },
      {
        "name": "오뎅꼬치우동",
        "price": 7500
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "찰순대국밥",
        "price": 11000
      },
      {
        "name": "아바이순대국밥",
        "price": 13000
      },
      {
        "name": "(알뜰간식)호두과자",
        "price": 3200
      },
      {
        "name": "케네디소시지",
        "price": 4500
      },
      {
        "name": "(알뜰간식)옛날핫도그",
        "price": 3700
      },
      {
        "name": "소떡소떡",
        "price": 4500
      },
      {
        "name": "해물통통야채핫바",
        "price": 4500
      },
      {
        "name": "토네이도핫도그",
        "price": 6000
      },
      {
        "name": "(알뜰간식)소떡소떡",
        "price": 3700
      },
      {
        "name": "문어핫바",
        "price": 4500
      },
      {
        "name": "후라이드닭꼬치",
        "price": 5500
      },
      {
        "name": "오동통핫바",
        "price": 4500
      },
      {
        "name": "바삭어포",
        "price": 4500
      },
      {
        "name": "매콤청양소시지",
        "price": 4500
      },
      {
        "name": "회오리감자",
        "price": 4500
      },
      {
        "name": "미니츄러스",
        "price": 4500
      },
      {
        "name": "치즈핫도그",
        "price": 4500
      },
      {
        "name": "(알뜰간식)치킨팝콘",
        "price": 3700
      },
      {
        "name": "(알뜰간식)오징어야채바",
        "price": 3700
      },
      {
        "name": "닭껍질튀김",
        "price": 4500
      },
      {
        "name": "(알뜰간식)옥수수",
        "price": 3200
      },
      {
        "name": "(알뜰간식)떡볶이",
        "price": 3700
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "십원빵",
        "price": 4000
      },
      {
        "name": "십원빵선물용(5개입)",
        "price": 20000
      },
      {
        "name": "반건조오징어",
        "price": 10000
      },
      {
        "name": "꼬치어묵",
        "price": 4000
      },
      {
        "name": "즉석라면",
        "price": 4000
      },
      {
        "name": "김밥 3종(1개당)",
        "price": 5500
      },
      {
        "name": "(알뜰간식)케네디소시지",
        "price": 3700
      },
      {
        "name": "해물통통매운맛",
        "price": 4500
      },
      {
        "name": "(알뜰간식)까르보소세지",
        "price": 3700
      },
      {
        "name": "(알뜰간식)고추맛바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통감자",
        "price": 3700
      },
      {
        "name": "옛날핫도그",
        "price": 4500
      },
      {
        "name": "호두과자(20개입)",
        "price": 6400
      },
      {
        "name": "호두과자 선물용(40개입)",
        "price": 13000
      },
      {
        "name": "황태미역국",
        "price": 10000
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
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "서부산방향",
    "highwaySlug": "namhae-branch-2",
    "highwayName": "남해제2지선고속도로",
    "locationKm": 52,
    "signatureMenu": {
      "name": "통영해물순두부찌개",
      "price": 8500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "코바코등심돈까스",
        "price": 9500
      },
      {
        "name": "뚝배기불고기",
        "price": 9500
      },
      {
        "name": "콩나물국밥",
        "price": 7000
      },
      {
        "name": "웰빙비빔밥",
        "price": 8000
      },
      {
        "name": "소고기된장찌개",
        "price": 8000
      },
      {
        "name": "묵은지김치찌개",
        "price": 8500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "오뎅꼬치우동",
        "price": 6000
      },
      {
        "name": "새우튀김우동",
        "price": 7000
      },
      {
        "name": "떡라면정식",
        "price": 6000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "매직핫도그",
        "price": 4500
      },
      {
        "name": "웨스턴핫바",
        "price": 4000
      },
      {
        "name": "수제(불고기맛)소세지롤바",
        "price": 4000
      },
      {
        "name": "케이크소세지",
        "price": 4000
      },
      {
        "name": "소떡소떡",
        "price": 4000
      },
      {
        "name": "수제핫도그",
        "price": 4000
      },
      {
        "name": "오징어문어바",
        "price": 4000
      },
      {
        "name": "후라이드꼬치",
        "price": 4500
      },
      {
        "name": "프리미엄수제어묵매운맛",
        "price": 4000
      },
      {
        "name": "프리미엄수제어묵순한맛",
        "price": 4000
      },
      {
        "name": "알뜰호두과자",
        "price": 3000
      },
      {
        "name": "알뜰소떡소떡",
        "price": 3000
      },
      {
        "name": "알뜰후라이드꼬치",
        "price": 3500
      },
      {
        "name": "알뜰핫도그",
        "price": 3000
      },
      {
        "name": "알뜰해물바",
        "price": 3000
      },
      {
        "name": "고구마스틱",
        "price": 3500
      },
      {
        "name": "호두과자",
        "price": 5000
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
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "honam-branch",
    "highwayName": "호남고속도로지선",
    "locationKm": 59,
    "signatureMenu": {
      "name": "떡라면",
      "price": 6000,
      "description": "꼬들꼬들한 면에 쫀득한 떡이 어우러진 떡라면",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "해물순두부찌개",
        "price": 10000
      },
      {
        "name": "스페셜어묵우동",
        "price": 7000
      },
      {
        "name": "고구마제육정식",
        "price": 11000
      },
      {
        "name": "불고기비빔밥",
        "price": 10000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "돼지김치찌개",
        "price": 9500
      },
      {
        "name": "해물된장찌개",
        "price": 9000
      },
      {
        "name": "콩나물황태해장국",
        "price": 7000
      },
      {
        "name": "라면정식",
        "price": 6500
      },
      {
        "name": "콩나물해장라면",
        "price": 5500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "짜장면",
        "price": 7000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "냉메밀",
        "price": 8000
      },
      {
        "name": "콩나물라면세트(꼬마김밥튀김)",
        "price": 9000
      },
      {
        "name": "들깨소고기미역국",
        "price": 7000
      },
      {
        "name": "해물순두부솥밥",
        "price": 11000
      },
      {
        "name": "제육솥밥",
        "price": 12000
      },
      {
        "name": "등심돈까스",
        "price": 10000
      },
      {
        "name": "유부우동(곱배기)",
        "price": 7000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "김치우동",
        "price": 6000
      },
      {
        "name": "콩나물라면세트(유부초밥)",
        "price": 8500
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
      "gasolinePrice": 1853,
      "dieselPrice": 1842,
      "lpgPrice": 1189,
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
    "latitude": 36.3781,
    "longitude": 127.5319
  },
  {
    "slug": "beolgog-both-1",
    "name": "벌곡휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "논산방향",
    "highwaySlug": "honam-branch",
    "highwayName": "호남고속도로지선",
    "locationKm": 66,
    "signatureMenu": {
      "name": "남도시래기국밥",
      "price": 9000,
      "description": "자극적이지 않고 심심한듯 ... 속이 든든해지는 구수한 웰빙식품",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "벌곡닭갈비",
        "price": 13000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "떡라면",
        "price": 6000
      },
      {
        "name": "라면정식",
        "price": 6500
      },
      {
        "name": "추억의도시락라면세트",
        "price": 10000
      },
      {
        "name": "추억의도시락우동세트",
        "price": 11000
      },
      {
        "name": "우렁된장찌개",
        "price": 7000
      },
      {
        "name": "소고기미역국",
        "price": 7000
      },
      {
        "name": "이해윤 추어명가 추어탕",
        "price": 11000
      },
      {
        "name": "(실속) 즉석우동",
        "price": 5500
      },
      {
        "name": "불닭어묵라면",
        "price": 6500
      },
      {
        "name": "메밀국수",
        "price": 8000
      },
      {
        "name": "꼬마김밥(3개)",
        "price": 5400
      },
      {
        "name": "꼬마김밥(5개)",
        "price": 9000
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산매운돈까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈가스",
        "price": 14000
      },
      {
        "name": "곱빼기유부우동",
        "price": 7000
      },
      {
        "name": "김치우동",
        "price": 7000
      },
      {
        "name": "비빔우동",
        "price": 7500
      },
      {
        "name": "삼진어묵우동",
        "price": 7500
      },
      {
        "name": "얼큰삼진어묵우동",
        "price": 8000
      },
      {
        "name": "얼큰우동",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "떡라면반반만두세트",
        "price": 9000
      },
      {
        "name": "유부우동반반만두세트",
        "price": 9000
      },
      {
        "name": "해장냉우동",
        "price": 7500
      },
      {
        "name": "해장얼큰냉우동",
        "price": 8000
      },
      {
        "name": "(명인)고기만두(8개)",
        "price": 6000
      },
      {
        "name": "(명인)김치만두(8개)",
        "price": 6000
      },
      {
        "name": "(명인)반반만두(8개)",
        "price": 6000
      },
      {
        "name": "소불고기비빔밥",
        "price": 10000
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
      "gasolinePrice": 1853,
      "dieselPrice": 1842,
      "lpgPrice": 1189,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "jungbunaeryuk-branch",
    "highwayName": "중부내륙고속도로지선",
    "locationKm": 73,
    "signatureMenu": {
      "name": "창녕양파제육&된장찌개",
      "price": 10000,
      "description": "달큰한 양파를 올린 고추장불고기덮밥과 구수한 된장찌개의 조합",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돈가스 우동정식",
        "price": 10000
      },
      {
        "name": "옛날돼지고기김치찌개",
        "price": 9500
      },
      {
        "name": "(실속) 가정식된장찌개",
        "price": 7000
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "꼬꼬치밥마요＆라면세트",
        "price": 9500
      },
      {
        "name": "꼬꼬치밥마요＆우동세트",
        "price": 10500
      },
      {
        "name": "도천순대",
        "price": 10000
      },
      {
        "name": "창녕양파라면",
        "price": 5000
      },
      {
        "name": "(알뜰간식)소떡소떡",
        "price": 3700
      },
      {
        "name": "(알뜰간식)핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)꼬치어묵",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통감자",
        "price": 3700
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰간식)찐옥수수2P",
        "price": 3700
      },
      {
        "name": "(알뜰간식)치킨팝콘",
        "price": 3700
      },
      {
        "name": "(알뜰간식)현풍도깨비빵",
        "price": 3700
      },
      {
        "name": "(알뜰간식)호두과자",
        "price": 3500
      },
      {
        "name": "들기름꼬막비빔밥&된장찌개",
        "price": 13000
      },
      {
        "name": "(추가반찬)창녕양파제육",
        "price": 3500
      },
      {
        "name": "(추가반찬)표고버섯교자만두",
        "price": 3500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "김치찌개＆떡갈비set",
        "price": 12000
      },
      {
        "name": "(추가반찬)떡갈비2EA",
        "price": 3500
      },
      {
        "name": "꼬꼬치밥마요(추가반찬)",
        "price": 5500
      },
      {
        "name": "(실속) 남산등심돈까스",
        "price": 10000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산매운돈까스",
        "price": 13500
      },
      {
        "name": "반반돈가스",
        "price": 12000
      },
      {
        "name": "유부우동＆떡갈비set",
        "price": 8500
      },
      {
        "name": "풀무원돌김(추가메뉴)",
        "price": 500
      },
      {
        "name": "(실속) 달성누룽지미역국",
        "price": 7000
      },
      {
        "name": "투뿔한우장터국밥",
        "price": 11000
      },
      {
        "name": "고소한콩순두부찌개",
        "price": 9000
      },
      {
        "name": "창녕양파제육＆순두부찌개",
        "price": 12000
      },
      {
        "name": "살얼음동동메밀국수＆돈가스",
        "price": 11000
      },
      {
        "name": "살얼음동동메밀국수＆떡갈비",
        "price": 10000
      },
      {
        "name": "완도전복슬라이스순두부찌개",
        "price": 14000
      },
      {
        "name": "완도전복갈아넣은어묵우동",
        "price": 7500
      },
      {
        "name": "완도전복갈아넣은어묵맵우동",
        "price": 8000
      },
      {
        "name": "완도전복갈아넣은어묵라면",
        "price": 7500
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
      "gasolinePrice": 1842,
      "dieselPrice": 1836,
      "lpgPrice": 1258,
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
    "latitude": 35.9936,
    "longitude": 128.5148
  },
  {
    "slug": "hyeonpung-both",
    "name": "현풍휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk-branch",
    "highwayName": "중부내륙고속도로지선",
    "locationKm": 80,
    "signatureMenu": {
      "name": "옛날식돼지고기김치찌개",
      "price": 9500,
      "description": "옛날 시골할머니집 놀러가서 먹었던 돼지고기를 듬뿍넣어 만든 얼큰한 김치찌개",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "(실속) EX - 라면",
        "price": 4000
      },
      {
        "name": "(실속) 가정식된장찌개",
        "price": 7000
      },
      {
        "name": "떡교자만두라면",
        "price": 6000
      },
      {
        "name": "(도천순대)순대뚝배기",
        "price": 10000
      },
      {
        "name": "(알뜰간식)찐옥수수2P",
        "price": 3700
      },
      {
        "name": "(알뜰간식)해물바",
        "price": 3700
      },
      {
        "name": "(알뜰간식)바삭어포",
        "price": 3700
      },
      {
        "name": "(알뜰간식)통감자",
        "price": 3700
      },
      {
        "name": "(알뜰간식)소떡소떡",
        "price": 3700
      },
      {
        "name": "(알뜰간식)꼬치어묵",
        "price": 3700
      },
      {
        "name": "(알뜰간식)떡볶이",
        "price": 3700
      },
      {
        "name": "(알뜰간식)핫도그",
        "price": 3700
      },
      {
        "name": "(알뜰간식)케네디소세지",
        "price": 3700
      },
      {
        "name": "(알뜰간식)물떡꼬치",
        "price": 3700
      },
      {
        "name": "(알뜰간식)호두과자",
        "price": 3500
      },
      {
        "name": "꼬꼬 치밥마요&우동세트",
        "price": 10500
      },
      {
        "name": "꼬꼬 치밥마요&라면세",
        "price": 9500
      },
      {
        "name": "창녕양파직화제육＆순두부찌개",
        "price": 12000
      },
      {
        "name": "떡교자만두라면&공기밥세트",
        "price": 7000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "창녕양파직화제육＆된장찌개",
        "price": 10000
      },
      {
        "name": "남산왕돈가스",
        "price": 13500
      },
      {
        "name": "남산매운돈가스",
        "price": 13500
      },
      {
        "name": "남산치즈돈가스",
        "price": 14000
      },
      {
        "name": "돈까스우동정식",
        "price": 10000
      },
      {
        "name": "(실속) 남산등심돈까스",
        "price": 10000
      },
      {
        "name": "반반돈가스",
        "price": 12000
      },
      {
        "name": "현풍모듬돈가스정식",
        "price": 15000
      },
      {
        "name": "돼지김치찌개＆더블떡갈비",
        "price": 12000
      },
      {
        "name": "창녕양파제육(추가반찬)",
        "price": 3500
      },
      {
        "name": "더블떡갈비(추가반찬)",
        "price": 3500
      },
      {
        "name": "꼬꼬치밥마요(추가반찬)",
        "price": 5500
      },
      {
        "name": "(알뜰간식)후라이드닭고치",
        "price": 3700
      },
      {
        "name": "(알뜰간식)단팥소보로빵",
        "price": 3700
      },
      {
        "name": "(알뜰간식)델리만쥬",
        "price": 3700
      },
      {
        "name": "고소한콩순두부찌개",
        "price": 9000
      },
      {
        "name": "(실속) 달성누룽지미역국",
        "price": 7000
      },
      {
        "name": "투뿔한우장터국밥",
        "price": 11000
      },
      {
        "name": "창녕양파등심돈가스",
        "price": 11000
      },
      {
        "name": "현풍패밀리라면세트",
        "price": 22500
      },
      {
        "name": "현풍패밀리우동세트",
        "price": 23500
      },
      {
        "name": "채소듬뿍비빔밥＆된장찌개",
        "price": 10000
      },
      {
        "name": "살얼음동동메밀국수＆돈가스",
        "price": 11000
      },
      {
        "name": "살얼음동동메밀국수＆떡갈비",
        "price": 10000
      },
      {
        "name": "완도전복슬라이스순두부찌개",
        "price": 7000
      },
      {
        "name": "완도전복갈아넣은어묵맵우동",
        "price": 8000
      },
      {
        "name": "완도전복갈아넣은어묵우동",
        "price": 7500
      },
      {
        "name": "완도전복갈아넣은어묵라면",
        "price": 7500
      },
      {
        "name": "돈까스라면정식",
        "price": 10000
      },
      {
        "name": "현풍방앗간참기름더덕비빔밥",
        "price": 12000
      },
      {
        "name": "현풍방앗간참기름비빔밥",
        "price": 12000
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
    "latitude": 35.8645,
    "longitude": 128.4515
  },
  {
    "slug": "dongmyeong-busan",
    "name": "동명휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "부산방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 87,
    "signatureMenu": {
      "name": "해물순두부찌개",
      "price": 9000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "[실속상품]등심돈가스",
        "price": 10000
      },
      {
        "name": "팔공비빔밥정식",
        "price": 10500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "꼬지어묵우동",
        "price": 7500
      },
      {
        "name": "라면정식",
        "price": 5900
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "유부우동세트",
        "price": 8500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "충무라면세트",
        "price": 8000
      },
      {
        "name": "(종료)더블등심돈가스",
        "price": 10500
      },
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "[명품]평양아바이순대국밥",
        "price": 10000
      },
      {
        "name": "대구소고기국밥(따로)",
        "price": 9000
      },
      {
        "name": "제육볶음SIDE",
        "price": 5000
      },
      {
        "name": "(종료)숯불된장찌개정식",
        "price": 11000
      },
      {
        "name": "(종료)아바이순대만국밥",
        "price": 10000
      },
      {
        "name": "돈가스제육세트",
        "price": 13500
      },
      {
        "name": "돈가스우동세트",
        "price": 9500
      },
      {
        "name": "(종료)사골만두국",
        "price": 9000
      },
      {
        "name": "[실속상품]EX-라면",
        "price": 4000
      },
      {
        "name": "(종료)숯불우동세트",
        "price": 9000
      },
      {
        "name": "자연향기 가득한 상",
        "price": 9500
      },
      {
        "name": "(종료)순두부열라면",
        "price": 6000
      },
      {
        "name": "(종료)등심돈가스2+1(다자녀)",
        "price": 19000
      },
      {
        "name": "(종료)등심돈가스2+만두국1(다자녀)",
        "price": 19000
      },
      {
        "name": "(종료)등심돈가스2+어묵우동1(다자녀)",
        "price": 19000
      },
      {
        "name": "(종료)아바이고기만국밥",
        "price": 10000
      },
      {
        "name": "[실속상품]실속우동",
        "price": 5500
      },
      {
        "name": "옛날우동",
        "price": 6500
      },
      {
        "name": "(종료)야채튀김우동",
        "price": 6500
      },
      {
        "name": "제육된장세트",
        "price": 12000
      },
      {
        "name": "(종료)순살우거지해장국",
        "price": 11000
      },
      {
        "name": "제육덮밥",
        "price": 9000
      },
      {
        "name": "(종료)실속짜장밥",
        "price": 7000
      },
      {
        "name": "[실속상품]소고기미역국",
        "price": 7000
      },
      {
        "name": "대왕돈가스",
        "price": 12000
      },
      {
        "name": "소고기된장찌개",
        "price": 9000
      },
      {
        "name": "옹알옹알맘마",
        "price": 1500
      },
      {
        "name": "서문칼제비",
        "price": 7500
      },
      {
        "name": "불끈추어탕",
        "price": 10000
      },
      {
        "name": "(종료)김치말이냉국수",
        "price": 7500
      },
      {
        "name": "팔공육회비빔반상",
        "price": 14500
      },
      {
        "name": "생기가득한우육회물회(밥)",
        "price": 14000
      },
      {
        "name": "생기가득한우육회물회(면)",
        "price": 14500
      },
      {
        "name": "강철부대라면",
        "price": 7500
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
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1128,
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
    "latitude": 36.4463,
    "longitude": 128.4302
  },
  {
    "slug": "dongmyeong-both",
    "name": "동명휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "춘천방향",
    "highwaySlug": "jungang",
    "highwayName": "중앙고속도로",
    "locationKm": 94,
    "signatureMenu": {
      "name": "돌솥비빔밥 된장찌개",
      "price": 11000,
      "description": "따끈한 돌솥비빔밥과 얼큰하고 짭조름한 된장찌개가 한상차림으로 구성된 메뉴 입니다. 드신 고개님들의 반응이 매우 좋은 메뉴 입니다. 강추 합니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "치즈돈가스",
        "price": 10500
      },
      {
        "name": "뚝배기불고기",
        "price": 10000
      },
      {
        "name": "순대국밥",
        "price": 9500
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "등심돈가스",
        "price": 10000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "어묵우동",
        "price": 7500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "(실속) ex-라면(4000)",
        "price": 4000
      },
      {
        "name": "(실속)돈가스",
        "price": 7000
      },
      {
        "name": "더블등심돈가스",
        "price": 11000
      },
      {
        "name": "잔치국수(따뜻한)",
        "price": 6500
      },
      {
        "name": "라면/충무세트",
        "price": 8000
      },
      {
        "name": "우동/충무세트",
        "price": 8500
      },
      {
        "name": "돈가스우동세트",
        "price": 11000
      },
      {
        "name": "콩불고기된장정식(비건푸드한상)",
        "price": 9000
      },
      {
        "name": "석쇠불고기 된장찌개정식",
        "price": 11000
      },
      {
        "name": "순두부떡갈비정식",
        "price": 11000
      },
      {
        "name": "쫄면(매운맛)",
        "price": 8000
      },
      {
        "name": "간쫄면(순한맛)",
        "price": 8000
      },
      {
        "name": "쫄면돈가스세트(매운맛)",
        "price": 12500
      },
      {
        "name": "간쫄면돈가스세트(순한맛)",
        "price": 12500
      },
      {
        "name": "매운우동",
        "price": 7000
      },
      {
        "name": "매운우동돈가스세트",
        "price": 11500
      },
      {
        "name": "알밥우동정식세트",
        "price": 9000
      },
      {
        "name": "김치찌개",
        "price": 9000
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "충무김밥 포장",
        "price": 5500
      },
      {
        "name": "추어탕",
        "price": 10000
      },
      {
        "name": "대왕돈가스",
        "price": 12000
      },
      {
        "name": "쫄면군만두세트(매운맛)",
        "price": 11000
      },
      {
        "name": "간쫄면군만두세트(순한맛)",
        "price": 11000
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
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1128,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 101,
    "signatureMenu": {
      "name": "소고기국밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "제육덮밥",
        "price": 9000
      },
      {
        "name": "통등심돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "(실속)유부우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "어묵라면",
        "price": 5000
      },
      {
        "name": "돌솥비빔밥",
        "price": 9000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "불고기비빔밥",
        "price": 10000
      },
      {
        "name": "설렁탕",
        "price": 10000
      },
      {
        "name": "곰탕",
        "price": 10000
      },
      {
        "name": "얼큰곰탕",
        "price": 10000
      },
      {
        "name": "(실속)북어미역국",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동 곱배기",
        "price": 8000
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
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 108,
    "signatureMenu": {
      "name": "소고기국밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "돼지고김치찌개",
        "price": 9000
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "제육덮밥",
        "price": 9000
      },
      {
        "name": "통등심돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "(실속)유부우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "짜장면",
        "price": 6000
      },
      {
        "name": "어묵라면",
        "price": 5000
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "돌솥비빔밥",
        "price": 9000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "불고기비빔밥",
        "price": 10000
      },
      {
        "name": "햄부대찌개",
        "price": 10000
      },
      {
        "name": "햄치즈부대찌개",
        "price": 10500
      },
      {
        "name": "(실속)북어미역국",
        "price": 7000
      },
      {
        "name": "꼬치어묵우동 곱배기",
        "price": 8000
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
      "dieselPrice": 1829,
      "lpgPrice": 1205,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
    "locationKm": 115,
    "signatureMenu": {
      "name": "영천돼지고기 짜글이",
      "price": 9000,
      "description": "방송에도 나갔던 영천돼지고로 만든 유명한 음식~짜글이~",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "[대구10미] 육개장",
        "price": 9500
      },
      {
        "name": "치즈돈가스",
        "price": 11500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "야채튀김우동",
        "price": 6500
      },
      {
        "name": "김치콩나물해장라면",
        "price": 5500
      },
      {
        "name": "떡만두라면",
        "price": 6000
      },
      {
        "name": "만두순두부",
        "price": 9000
      },
      {
        "name": "왕돈가스",
        "price": 13500
      },
      {
        "name": "(실속) 버섯된장찌개",
        "price": 7000
      },
      {
        "name": "충무김밥",
        "price": 6000
      },
      {
        "name": "(실속) ex라면",
        "price": 4000
      },
      {
        "name": "(실속) 돈까스",
        "price": 10000
      },
      {
        "name": "소불고기비빔밥",
        "price": 8500
      },
      {
        "name": "남원애추어탕",
        "price": 11000
      },
      {
        "name": "삼송꾼만두",
        "price": 8000
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "(실속) 돼지김치찌개",
        "price": 7000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "포항방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
    "locationKm": 122,
    "signatureMenu": {
      "name": "돼지김치찌개",
      "price": 9000,
      "description": "묵은지와 돼지고기가 어울리는 얼큰한 김치찌개",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "차돌박이된장찌개",
        "price": 9000
      },
      {
        "name": "실속돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11500
      },
      {
        "name": "김치콩나물라면",
        "price": 5500
      },
      {
        "name": "떡만두라면",
        "price": 6000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "야채튀김우동",
        "price": 6500
      },
      {
        "name": "삼송꾼만두",
        "price": 8000
      },
      {
        "name": "바우네나주곰탕",
        "price": 9500
      },
      {
        "name": "남원애추어탕",
        "price": 11000
      },
      {
        "name": "(실속) 미역국",
        "price": 6500
      },
      {
        "name": "얼갈이해장국",
        "price": 9000
      },
      {
        "name": "만두순두부찌개",
        "price": 9000
      },
      {
        "name": "영천돼지고기짜글이",
        "price": 9000
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "(실속) 우동",
        "price": 5500
      },
      {
        "name": "옹알옹알맘마(식당메뉴주문시 적용가)",
        "price": 1500
      },
      {
        "name": "왕돈가스",
        "price": 13500
      },
      {
        "name": "마늘떡갈비",
        "price": 10000
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
      "기타"
    ],
    "latitude": 36.6115,
    "longitude": 128.3599
  },
  {
    "slug": "seocheon-seoul",
    "name": "서천휴게소",
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "상행",
    "directionName": "서울방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 129,
    "signatureMenu": {
      "name": "(실속)돈가스",
      "price": 10000,
      "description": "등심돈가스는 씹을수록 고기의 감칠맛을 느낄수 있는 두툼한 순살등심과 소스가 어우러져 중독성 있는 풍미를 느낄수 있으며 한 끼 식사로도 손색이 없는 등심돈가스 추천해 드리고 싶습니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "야채비빔밥",
        "price": 9500
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "오모가리 김치찌개",
        "price": 10000
      },
      {
        "name": "얼큰순두부",
        "price": 9000
      },
      {
        "name": "(실속)시래기국밥",
        "price": 7000
      },
      {
        "name": "돼지김치찜덮밥",
        "price": 12500
      },
      {
        "name": "함박스테이크",
        "price": 11000
      },
      {
        "name": "부산꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "라면정식",
        "price": 5500
      },
      {
        "name": "김치떡라면",
        "price": 5000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "(실속)유부우동",
        "price": 5500
      },
      {
        "name": "김치가츠우동(간장맛)",
        "price": 12000
      },
      {
        "name": "차슈덮밥",
        "price": 12500
      },
      {
        "name": "텐푸라우동",
        "price": 12000
      },
      {
        "name": "명란앙가케우동",
        "price": 12000
      },
      {
        "name": "텐푸라붓카케우동(냉)",
        "price": 12000
      },
      {
        "name": "토리텐붓카케우동(냉)",
        "price": 12000
      },
      {
        "name": "왕돈까스",
        "price": 12500
      },
      {
        "name": "소고기스지국밥",
        "price": 12000
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
    "latitude": 36.2469,
    "longitude": 127.2759
  },
  {
    "slug": "seocheon-busan",
    "name": "서천휴게소",
    "image": "/images/thumbnails/seohaean.jpg",
    "direction": "하행",
    "directionName": "목포방향",
    "highwaySlug": "seohaean",
    "highwayName": "서해안고속도로",
    "locationKm": 136,
    "signatureMenu": {
      "name": "된장찌개",
      "price": 7000,
      "description": "실속메뉴로 저렴한 가격으로 드실수있는 식사메뉴 입니다",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "등심돈가스",
        "price": 10000
      },
      {
        "name": "소고기국밥",
        "price": 9000
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "해물순두부",
        "price": 9000
      },
      {
        "name": "불고기정식",
        "price": 13000
      },
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "양푼이비빔밥",
        "price": 9000
      },
      {
        "name": "돌솥비빔밥",
        "price": 9000
      },
      {
        "name": "치즈돈가스",
        "price": 11000
      },
      {
        "name": "치즈돈가스+사이다 세트",
        "price": 12000
      },
      {
        "name": "등심돈가스+사이다 세트",
        "price": 11000
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "(실속)우동",
        "price": 5500
      },
      {
        "name": "짜장면",
        "price": 6000
      },
      {
        "name": "떡라면정식",
        "price": 6000
      },
      {
        "name": "콩나물해장라면",
        "price": 5000
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
      "lpgPrice": 1216,
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "삼척방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 143,
    "signatureMenu": {
      "name": "육개장",
      "price": 11000,
      "description": "온 국민이 좋아하는 얼큰하고 시원한 육개장",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "통등심돈까스",
        "price": 11000
      },
      {
        "name": "갈비탕",
        "price": 12000
      },
      {
        "name": "유부우동",
        "price": 6500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7500
      },
      {
        "name": "계란떡라면",
        "price": 6500
      },
      {
        "name": "사골우거지",
        "price": 10000
      },
      {
        "name": "돼지국밥",
        "price": 10000
      },
      {
        "name": "왕돈까스",
        "price": 12000
      },
      {
        "name": "치즈돈까스",
        "price": 12000
      },
      {
        "name": "김치찌개",
        "price": 11000
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 150,
    "signatureMenu": {
      "name": "오미자제육볶음",
      "price": 11000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "소고기국밥",
        "price": 9500
      },
      {
        "name": "순두부찌개",
        "price": 9500
      },
      {
        "name": "실속 된장찌개",
        "price": 7000
      },
      {
        "name": "모듬가스",
        "price": 13000
      },
      {
        "name": "짜장면",
        "price": 6500
      },
      {
        "name": "김치우동나베",
        "price": 7500
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "떡만두라면",
        "price": 6000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "얼큰돼지김치찌개",
        "price": 9000
      },
      {
        "name": "흑돼지치즈돈가스",
        "price": 11000
      },
      {
        "name": "흑돼지돈가스",
        "price": 10000
      },
      {
        "name": "더덕비빔밥",
        "price": 9500
      },
      {
        "name": "꼬치어묵라면",
        "price": 6000
      },
      {
        "name": "떡라면",
        "price": 5000
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
      "gasolinePrice": 1834,
      "dieselPrice": 1823,
      "lpgPrice": 1167,
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "하행",
    "directionName": "광주방향",
    "highwaySlug": "muan-gwangju",
    "highwayName": "무안광주고속도로",
    "locationKm": 157,
    "signatureMenu": {
      "name": "양짜덮밥(실속상품)",
      "price": 7000,
      "description": "저렴한 가격과 쉽게 구할수 있는 식재료로서 원기회복에도 매우 좋고 혈당치를 낮춰주는 우리나라 음식의 대표적인 양념채소중 하나로 지방을 녹여주고 지방합성효소를 억제하는 성분을 가지고 있는 함평군의 특산물인 양파를 활용하여 개발한 음식으로 양파의 효능인 다이어트효과, 생리통완화 및 혈관질환예방, 불면증완화, 콜레스테롤완화, 체력보강등에 도움이 되는 식재료이다. 또한 자장소스의 느끼한 맛을 양파의 매운맛과 단맛으로 배가 되는 누구나 즐길수 있는 음식이다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "등심돈가스(실속상품)",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 11500
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "ex라면(실속상품)",
        "price": 4000
      },
      {
        "name": "만두라면",
        "price": 4500
      },
      {
        "name": "콩나물김치라면",
        "price": 5000
      },
      {
        "name": "만두국",
        "price": 9000
      },
      {
        "name": "군만두",
        "price": 8500
      },
      {
        "name": "우동(실속상품)",
        "price": 5500
      },
      {
        "name": "등심돈가스+사이다",
        "price": 11000
      },
      {
        "name": "치즈돈가스+사이다",
        "price": 12500
      },
      {
        "name": "뚝배기불고기",
        "price": 11000
      },
      {
        "name": "한솥김치찌개",
        "price": 10000
      },
      {
        "name": "냄비김치우동",
        "price": 8000
      },
      {
        "name": "대파육개장",
        "price": 11000
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "나비스도시락",
        "price": 7000
      },
      {
        "name": "왕돈가스",
        "price": 12000
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
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "무안방향",
    "highwaySlug": "muan-gwangju",
    "highwayName": "무안광주고속도로",
    "locationKm": 164,
    "signatureMenu": {
      "name": "가마솥김치찌개",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "(실속) EX라면",
        "price": 4000
      },
      {
        "name": "(실속) 등심돈가스",
        "price": 10000
      },
      {
        "name": "콩나물김치라면",
        "price": 5000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "계란떡라면",
        "price": 5000
      },
      {
        "name": "(실속) 양짜덮밥",
        "price": 7000
      },
      {
        "name": "치즈돈가스",
        "price": 11500
      },
      {
        "name": "냄비김치우동",
        "price": 8000
      },
      {
        "name": "군만두",
        "price": 8500
      },
      {
        "name": "만두국",
        "price": 9000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "육개장",
        "price": 11000
      },
      {
        "name": "낙돼불패",
        "price": 13000
      },
      {
        "name": "왕돈가스",
        "price": 12000
      },
      {
        "name": "청국장찌개+비빔밥",
        "price": 12000
      },
      {
        "name": "낙돼도시락",
        "price": 7000
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 171,
    "signatureMenu": {
      "name": "문경약돌돼지김치찌개",
      "price": 9500,
      "description": "국내산 '문경약돌돼지'와 국내산 김치를 사용해서 만든 문경휴게소 대표 메뉴입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "신)자장면",
        "price": 7000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "(나드리)쫄면",
        "price": 8000
      },
      {
        "name": "얼큰해장순두부라면",
        "price": 6500
      },
      {
        "name": "순우동",
        "price": 5500
      },
      {
        "name": "실속)된장찌개",
        "price": 7000
      },
      {
        "name": "실속)들깨미역국",
        "price": 7000
      },
      {
        "name": "매콤고추장돼지불고기",
        "price": 10000
      },
      {
        "name": "곤드레새싹비빔밥",
        "price": 9000
      },
      {
        "name": "소고기우거지국밥",
        "price": 9500
      },
      {
        "name": "문경오미자등심돈가스",
        "price": 10000
      },
      {
        "name": "(신)자장면+볶음밥 소형",
        "price": 10500
      },
      {
        "name": "(신)귀신짬뽕+볶음밥소형",
        "price": 12500
      },
      {
        "name": "당면짬뽕밥",
        "price": 9000
      },
      {
        "name": "(신)귀신짬뽕",
        "price": 9000
      },
      {
        "name": "야채볶음밥",
        "price": 7500
      },
      {
        "name": "공기밥추가",
        "price": 1000
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "유부우동충무김밥세트",
        "price": 11000
      },
      {
        "name": "충무김밥(우동)",
        "price": 5500
      },
      {
        "name": "농심잔치국수",
        "price": 6000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "어묵라면",
        "price": 5500
      },
      {
        "name": "충무김밥",
        "price": 5500
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "명인/고기만두 8ea",
        "price": 6000
      },
      {
        "name": "(나드리)간쫄면",
        "price": 8000
      },
      {
        "name": "(나드리)쫄면미니돈가스SET",
        "price": 13500
      },
      {
        "name": "(나드리)간쫄면미니돈가스SET",
        "price": 13500
      },
      {
        "name": "문경오미자치즈돈가스",
        "price": 11000
      },
      {
        "name": "떡라면충무김밥세트",
        "price": 10000
      },
      {
        "name": "문경오미자왕돈가스",
        "price": 12000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "속초방향",
    "highwaySlug": "donghae",
    "highwayName": "동해고속도로",
    "locationKm": 178,
    "signatureMenu": {
      "name": "황태해장국",
      "price": 12000,
      "description": "강릉 지역에서 황태를 찢어서 육수에 조개, 버섯,콩나물,두부,무 등을 넣어 끊인 해장국",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "육개장",
        "price": 11000
      },
      {
        "name": "소내장탕",
        "price": 12000
      },
      {
        "name": "뚝배기불고기",
        "price": 11000
      },
      {
        "name": "(실속) 옛날돈가스",
        "price": 10000
      },
      {
        "name": "치즈돈가스",
        "price": 12000
      },
      {
        "name": "치즈돈가스+우동(소)",
        "price": 14000
      },
      {
        "name": "옛날돈가스+우동(소)",
        "price": 12000
      },
      {
        "name": "자장면",
        "price": 6500
      },
      {
        "name": "자장면+볶음밥(소)",
        "price": 10000
      },
      {
        "name": "볶음밥",
        "price": 7500
      },
      {
        "name": "자장덮밥",
        "price": 6500
      },
      {
        "name": "(실속) 일반라면",
        "price": 4000
      },
      {
        "name": "어묵라면",
        "price": 6000
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "어묵우동",
        "price": 6500
      },
      {
        "name": "볶음밥+우동(소)",
        "price": 9500
      },
      {
        "name": "라면+볶음밥(소)",
        "price": 8500
      },
      {
        "name": "아메리카노(핫,아이스)",
        "price": 4700
      },
      {
        "name": "카페라떼(핫,아이스)",
        "price": 5200
      },
      {
        "name": "바닐라라떼(핫,아이스)",
        "price": 5700
      },
      {
        "name": "카페모카,카라멜마끼아또(핫,아이스)",
        "price": 6000
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
      "gasolinePrice": 1848,
      "dieselPrice": 1838,
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
    "latitude": 37.6024,
    "longitude": 128.8621
  },
  {
    "slug": "namseongjuchamoe-both",
    "name": "남성주참외휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "창원방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 185,
    "signatureMenu": {
      "name": "돼지고기김치찌개",
      "price": 9500,
      "description": "잘익은 김치와 돼지고기를 넣고 끓인 얼큰한 김치찌개",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "흑돼지제육덮밥",
        "price": 9500
      },
      {
        "name": "(실속)용우동",
        "price": 5500
      },
      {
        "name": "떡라면",
        "price": 4500
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "통등심돈까스",
        "price": 10000
      },
      {
        "name": "성주장터국밥",
        "price": 9000
      },
      {
        "name": "1인세트(짜장+탕수육)",
        "price": 12500
      },
      {
        "name": "1인세트(짬뽕+탕수육)",
        "price": 13500
      },
      {
        "name": "조선탕수육小",
        "price": 18000
      },
      {
        "name": "조선차돌짬뽕",
        "price": 12000
      },
      {
        "name": "조선게살볶음밥",
        "price": 11000
      },
      {
        "name": "조선짬뽕",
        "price": 8500
      },
      {
        "name": "조선짜장면",
        "price": 7000
      },
      {
        "name": "조선군만두",
        "price": 5000
      },
      {
        "name": "명품조선볶음밥",
        "price": 8500
      },
      {
        "name": "조선짜장밥",
        "price": 7000
      },
      {
        "name": "조선짬뽕밥",
        "price": 8500
      },
      {
        "name": "(실속)황태들깨미역국",
        "price": 7000
      },
      {
        "name": "돌솥비빔밥",
        "price": 9500
      },
      {
        "name": "조선깐꼬막짬뽕",
        "price": 11000
      },
      {
        "name": "조선깐꼬막짬뽕밥",
        "price": 11000
      },
      {
        "name": "굴짬뽕(계절메뉴)",
        "price": 11000
      },
      {
        "name": "화덕고등어구이정식",
        "price": 11000
      },
      {
        "name": "고추장화덕삼겹구이",
        "price": 12000
      },
      {
        "name": "(실속)어린이돈가스",
        "price": 7000
      },
      {
        "name": "우거지꽁치찌개",
        "price": 9000
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "양평방향",
    "highwaySlug": "jungbunaeryuk",
    "highwayName": "중부내륙고속도로",
    "locationKm": 192,
    "signatureMenu": {
      "name": "돼지고기김치찌개",
      "price": 9500,
      "description": "얼큰하고 매콤한 대한민국 대표메뉴 김치전골",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "해물순두부찌개",
        "price": 9000
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
      },
      {
        "name": "(실속)등심돈까스",
        "price": 10000
      },
      {
        "name": "(실속)용우동",
        "price": 5500
      },
      {
        "name": "EX-라면",
        "price": 4000
      },
      {
        "name": "떡라면",
        "price": 4500
      },
      {
        "name": "곰탕)(백)진한사골곰탕",
        "price": 10000
      },
      {
        "name": "곰탕)(청)맑은나주곰탕",
        "price": 10000
      },
      {
        "name": "곰탕)(홍)얼큰곰탕",
        "price": 10000
      },
      {
        "name": "곰탕)내장탕",
        "price": 12000
      },
      {
        "name": "곰탕)만두국",
        "price": 9000
      },
      {
        "name": "성주장터국밥",
        "price": 9000
      },
      {
        "name": "흑돼지제육덮밥",
        "price": 9500
      },
      {
        "name": "평양아바이순대국밥",
        "price": 10000
      },
      {
        "name": "화덕고등어구이정식",
        "price": 11000
      },
      {
        "name": "(실속)황태들깨미역국",
        "price": 7000
      },
      {
        "name": "(실속)양푼이비빔밥",
        "price": 7000
      },
      {
        "name": "멸치칼국수",
        "price": 9000
      },
      {
        "name": "얼큰칼국수",
        "price": 10000
      },
      {
        "name": "얼큰수제비",
        "price": 10000
      },
      {
        "name": "멸치수제비",
        "price": 10000
      },
      {
        "name": "(실속)어린이돈가스",
        "price": 7000
      },
      {
        "name": "고추장화덕삼겹구이",
        "price": 12000
      },
      {
        "name": "우거지꽁치찌개",
        "price": 9000
      },
      {
        "name": "황태해장라면",
        "price": 6500
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "청주방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
    "locationKm": 199,
    "signatureMenu": {
      "name": "(실속)흑돼지돈가스",
      "price": 10000,
      "description": "청정지역 진안고원 오지에서 자란 신선하고 깨끗한 국산 흑돼지를 사용한 돈까스로 일교차가 크고 연평균 기온이 낮은 지리적 여건으로 살코기내 지방성분이 골고루 분포하여 육질이 단단하고 고소하며 담백합니다. 또한 열량이 낮고 단백질 함량은 높고 어린이 두뇌발달에 좋은 DHA, EPA함량이 높으며 지방과 나트륨이 적고 철분함량은 많습니다. 겉은 생(습식)빵가루를 사용하여 바삭하고 속은 냉장육으로만 만들어 더욱 신선한 ‘웰빙돈까스’입니다",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "짜글짜글김치찌개",
        "price": 9000
      },
      {
        "name": "산나물비빔밥",
        "price": 9000
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "콩나물해장라면정식",
        "price": 6000
      },
      {
        "name": "유부우동",
        "price": 6000
      },
      {
        "name": "(실속)우거지국밥",
        "price": 7000
      },
      {
        "name": "돌솥버섯불고기비빔밥",
        "price": 9500
      },
      {
        "name": "왕새우튀김우동",
        "price": 7500
      },
      {
        "name": "잔치국수",
        "price": 6000
      },
      {
        "name": "떡만두라면",
        "price": 5000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "모짜렐라치즈돈가스",
        "price": 11000
      },
      {
        "name": "입맛도는짜글이",
        "price": 9500
      },
      {
        "name": "보통맛 순두부찌개",
        "price": 9000
      },
      {
        "name": "매운맛 순두부찌개",
        "price": 9000
      },
      {
        "name": "보은사과왕돈가스",
        "price": 12000
      },
      {
        "name": "소문난왕갈비탕",
        "price": 14000
      },
      {
        "name": "(실속)들깨미역국",
        "price": 7000
      },
      {
        "name": "구수한콩비지찌개",
        "price": 9000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "흑돼지돈가스+사이다세트",
        "price": 11000
      },
      {
        "name": "치즈돈가스+사이다세트",
        "price": 12000
      },
      {
        "name": "보은사과왕돈가스+사이다세트",
        "price": 13000
      },
      {
        "name": "황태해장국",
        "price": 8500
      },
      {
        "name": "보은대추영양솥밥",
        "price": 11000
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
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "영덕방향",
    "highwaySlug": "seosanyeongdeogseon",
    "highwayName": "서산영덕고속도로",
    "locationKm": 206,
    "signatureMenu": {
      "name": "등심돈가스",
      "price": 9500,
      "description": "돈가스 패티가 등심을 갈아만든 돈가스로 맛이 부드러우며 소스 또한 신맛이 적당하며 느끼함을 덜해주며 인기메뉴중 하나인 등심돈까스 입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "그냥라면",
        "price": 3500
      },
      {
        "name": "육개장",
        "price": 9000
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "어묵우동",
        "price": 6000
      },
      {
        "name": "사골우거지국",
        "price": 7000
      },
      {
        "name": "치즈돈가스",
        "price": 10000
      },
      {
        "name": "땡초라면",
        "price": 4000
      },
      {
        "name": "제육덮밥",
        "price": 9500
      },
      {
        "name": "고등어조림",
        "price": 9000
      },
      {
        "name": "사골미역국",
        "price": 7000
      },
      {
        "name": "햄김치찌개",
        "price": 9000
      },
      {
        "name": "왕돈가스",
        "price": 11000
      },
      {
        "name": "황태해장국",
        "price": 8000
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "익산방향",
    "highwaySlug": "wanju-jangsu",
    "highwayName": "완주장수고속도로",
    "locationKm": 213,
    "signatureMenu": {
      "name": "흑돼지제육덮밥",
      "price": 10000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "더덕비빔밥",
        "price": 11000
      },
      {
        "name": "흑돼지애호박고추장찌개",
        "price": 11000
      },
      {
        "name": "흑돼지등심돈가스",
        "price": 10000
      },
      {
        "name": "흑돼지치즈돈까스",
        "price": 11000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "해장라면정식",
        "price": 6000
      },
      {
        "name": "맑은맛 나주곰탕",
        "price": 11000
      },
      {
        "name": "순한맛 나주곰탕",
        "price": 11000
      },
      {
        "name": "특나주영양곰탕",
        "price": 13000
      },
      {
        "name": "차돌된장찌개",
        "price": 10000
      },
      {
        "name": "돈가스제육덮밥",
        "price": 12000
      },
      {
        "name": "표고버섯 시래기국밥",
        "price": 7000
      },
      {
        "name": "새집추어탕",
        "price": 12000
      },
      {
        "name": "황태콩나물국밥",
        "price": 7000
      },
      {
        "name": "ex라면",
        "price": 4000
      },
      {
        "name": "운장산엄나무닭계장",
        "price": 10000
      },
      {
        "name": "표고버섯라면",
        "price": 5500
      },
      {
        "name": "실속 곱빼기우동",
        "price": 6500
      },
      {
        "name": "실속 한신즉석우동",
        "price": 5500
      },
      {
        "name": "한신얼큰우동",
        "price": 6000
      },
      {
        "name": "한신삼진어묵우동(순한맛)",
        "price": 7500
      },
      {
        "name": "한신얼큰삼진어묵우동",
        "price": 7500
      },
      {
        "name": "한신김치우동",
        "price": 7000
      },
      {
        "name": "한신 냉우동",
        "price": 7000
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
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "장수방향",
    "highwaySlug": "wanju-jangsu",
    "highwayName": "완주장수고속도로",
    "locationKm": 220,
    "signatureMenu": {
      "name": "진안콩순두부짬뽕",
      "price": 8500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "흑돼지 제육덮밥",
        "price": 9500
      },
      {
        "name": "흑돼지김치찌개",
        "price": 9500
      },
      {
        "name": "공기밥",
        "price": 1000
      },
      {
        "name": "비빔밥",
        "price": 9500
      },
      {
        "name": "흑돼지 치즈돈가스",
        "price": 11000
      },
      {
        "name": "시래기국밥",
        "price": 8500
      },
      {
        "name": "실속)흑돼지 순살돈가스",
        "price": 10000
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "실속우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "떡라면",
        "price": 5000
      },
      {
        "name": "해장라면정식",
        "price": 6000
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "돌솥비빔밥",
        "price": 10000
      },
      {
        "name": "불타는표고들깨라면",
        "price": 5500
      },
      {
        "name": "우동돈가스셋트",
        "price": 12000
      },
      {
        "name": "돌솥제육세트",
        "price": 12500
      },
      {
        "name": "순살감자탕",
        "price": 10000
      },
      {
        "name": "흑돼지왕돈가스",
        "price": 12000
      },
      {
        "name": "흑돼지등심돈가스",
        "price": 12000
      },
      {
        "name": "꼬치어묵우동(곱빼기)",
        "price": 8000
      },
      {
        "name": "모듬튀김",
        "price": 3500
      },
      {
        "name": "(실속)된장찌개",
        "price": 7000
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
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "통영방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 227,
    "signatureMenu": {
      "name": "흑돼지김치찌개",
      "price": 9500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "육개장",
        "price": 10000
      },
      {
        "name": "바우네나주곰탕",
        "price": 12000
      },
      {
        "name": "우렁된장찌개",
        "price": 9000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "자장면",
        "price": 5500
      },
      {
        "name": "(실속) 유부우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "냄비우동",
        "price": 6500
      },
      {
        "name": "어묵라면",
        "price": 5000
      },
      {
        "name": "(실속) ex-라면",
        "price": 4000
      },
      {
        "name": "(실속) 김치해장국밥",
        "price": 7000
      },
      {
        "name": "제육덮밥",
        "price": 9500
      },
      {
        "name": "흑돼지소라찜(순두부)NEW",
        "price": 14000
      },
      {
        "name": "(실속) 돈까스",
        "price": 10000
      },
      {
        "name": "남도시래기국밥",
        "price": 10000
      },
      {
        "name": "해장라면",
        "price": 5500
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
      "gasolinePrice": 1865,
      "dieselPrice": 1852,
      "lpgPrice": 1210,
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
      "ATM",
      "편의점"
    ],
    "latitude": 35.1166,
    "longitude": 128.7801
  },
  {
    "slug": "goseonggongryongnara-both-1",
    "name": "고성공룡나라휴게소",
    "image": "/images/thumbnails/default.jpg",
    "direction": "양방향",
    "directionName": "대전방향",
    "highwaySlug": "tongyeong-daejeon",
    "highwayName": "통영대전고속도로",
    "locationKm": 234,
    "signatureMenu": {
      "name": "흑돼지김치찌개",
      "price": 9500,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "남산치즈돈까스",
        "price": 14000
      },
      {
        "name": "우렁된장찌개",
        "price": 9000
      },
      {
        "name": "해장라면",
        "price": 5000
      },
      {
        "name": "소세지라면",
        "price": 5500
      },
      {
        "name": "육개장",
        "price": 10000
      },
      {
        "name": "남산왕돈까스",
        "price": 13500
      },
      {
        "name": "EX라면",
        "price": 4000
      },
      {
        "name": "갈비만두",
        "price": 5500
      },
      {
        "name": "매콤제육덮밥",
        "price": 9500
      },
      {
        "name": "유부우동",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 6500
      },
      {
        "name": "만두품은자장면",
        "price": 5500
      },
      {
        "name": "콩나물해장국밥",
        "price": 7000
      },
      {
        "name": "흑돼지소라찜",
        "price": 14000
      },
      {
        "name": "해물순두부찌개",
        "price": 9500
      },
      {
        "name": "바우네나주곰탕",
        "price": 12000
      },
      {
        "name": "실속남산돈까스",
        "price": 10000
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/yeongdong.jpg",
    "direction": "양방향",
    "directionName": "양방향",
    "highwaySlug": "yeongdong",
    "highwayName": "영동고속도로",
    "locationKm": 241,
    "signatureMenu": {
      "name": "특)덕평소고기국밥",
      "price": 13000,
      "description": "한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "덕평소고기국밥",
        "price": 10000
      },
      {
        "name": "양지설렁탕",
        "price": 11000
      },
      {
        "name": "추가)떡갈비1P",
        "price": 4000
      },
      {
        "name": "매콤낙지비빔밥",
        "price": 12500
      },
      {
        "name": "버섯뚝배기불고기",
        "price": 11000
      },
      {
        "name": "해물짬뽕순두부찌개",
        "price": 10000
      },
      {
        "name": "돼지고기김치찌개",
        "price": 9000
      },
      {
        "name": "새우튀김우동",
        "price": 11500
      },
      {
        "name": "얼큰김치어묵우동",
        "price": 10500
      },
      {
        "name": "꼬치어묵우동",
        "price": 9500
      },
      {
        "name": "유부우동",
        "price": 7000
      },
      {
        "name": "추가)유부초밥2P",
        "price": 3500
      },
      {
        "name": "소고기쌀국수",
        "price": 11000
      },
      {
        "name": "햄치즈라면",
        "price": 7500
      },
      {
        "name": "떡만두라면",
        "price": 5500
      },
      {
        "name": "덕평왕돈까스",
        "price": 11000
      },
      {
        "name": "고구마치즈돈까스",
        "price": 13000
      },
      {
        "name": "매콤왕돈까스",
        "price": 12000
      },
      {
        "name": "치즈돈까스",
        "price": 12000
      },
      {
        "name": "야간)덕평소고기국밥",
        "price": 10000
      },
      {
        "name": "야간)양지설렁탕",
        "price": 11000
      },
      {
        "name": "야간)햄치즈라면",
        "price": 7500
      },
      {
        "name": "야간)떡만두라면",
        "price": 5500
      },
      {
        "name": "칼칼해장라면",
        "price": 7500
      },
      {
        "name": "맑은나주곰탕",
        "price": 12000
      },
      {
        "name": "중화볶음밥",
        "price": 10000
      },
      {
        "name": "덕평비빔밥",
        "price": 10000
      },
      {
        "name": "칡냉면",
        "price": 12000
      },
      {
        "name": "비빔칡냉면",
        "price": 12000
      },
      {
        "name": "칡회냉면",
        "price": 13000
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
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
    "direction": "상행",
    "directionName": "대구방향",
    "highwaySlug": "saemangeum-pohang-daegu-pohang",
    "highwayName": "새만금포항고속도로(대구포항)",
    "locationKm": 248,
    "signatureMenu": {
      "name": "유부우동",
      "price": 6000,
      "description": "우동에 유부를 양껏 넣었는데다 게맛살까지 있습니다.",
      "isExFood": true
    },
    "otherMenus": [
      {
        "name": "된장찌개",
        "price": 8500
      },
      {
        "name": "[실속]등심돈가스",
        "price": 10000
      },
      {
        "name": "남산치즈돈가스",
        "price": 13500
      },
      {
        "name": "콩나물라면",
        "price": 5500
      },
      {
        "name": "꼬치어묵우동",
        "price": 7000
      },
      {
        "name": "새우튀김우동",
        "price": 7500
      },
      {
        "name": "대구따로국밥",
        "price": 9500
      },
      {
        "name": "오색나물비빔밥",
        "price": 9000
      },
      {
        "name": "순두부찌개",
        "price": 12000
      },
      {
        "name": "송이순두부",
        "price": 18000
      },
      {
        "name": "야채튀김우동",
        "price": 7000
      },
      {
        "name": "자장면",
        "price": 6000
      },
      {
        "name": "실속)EX라면",
        "price": 4000
      },
      {
        "name": "냉메밀",
        "price": 7000
      },
      {
        "name": "제육볶음",
        "price": 10500
      },
      {
        "name": "김치찌개",
        "price": 9500
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
    "latitude": 36.7089,
    "longitude": 128.436
  },
  {
    "slug": "wachon-both",
    "name": "와촌휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1864,
      "dieselPrice": 1853,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 12,
      "hasHydrogen": false
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
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1838,
      "dieselPrice": 1827,
      "lpgPrice": 1239,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 37.6104,
    "longitude": 128.9261
  },
  {
    "slug": "wonju-both",
    "name": "원주휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1842,
      "dieselPrice": 1837,
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
    "latitude": 37.7176,
    "longitude": 129.022
  },
  {
    "slug": "oggye-both",
    "name": "옥계휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/gyeongbu.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 10,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/default.jpg",
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
      "편의점"
    ],
    "latitude": 36.2006,
    "longitude": 127.3931
  },
  {
    "slug": "gongju-both",
    "name": "공주휴게소",
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 36.2767,
    "longitude": 127.5152
  },
  {
    "slug": "buyeobaegje-both",
    "name": "부여백제휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1859,
      "dieselPrice": 1848,
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
    "latitude": 36.4206,
    "longitude": 127.5171
  },
  {
    "slug": "buyeobaegje-both-1",
    "name": "부여백제휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1859,
      "dieselPrice": 1848,
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 36.4418,
    "longitude": 127.2655
  },
  {
    "slug": "moggam-seoul",
    "name": "목감휴게소",
    "image": "/images/thumbnails/seohaean.jpg",
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
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1852,
      "dieselPrice": 1842,
      "lpgPrice": 1237,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
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
    "image": "/images/thumbnails/default.jpg",
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
      "dieselPrice": 1853,
      "lpgPrice": 1169,
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
    "latitude": 37.4441,
    "longitude": 127.6652
  },
  {
    "slug": "seohanamhaengbogdeurimswimteo-both",
    "name": "서하남행복드림쉼터휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/seohaean.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gyeongbu.jpg",
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
      "gasolinePrice": 1869,
      "dieselPrice": 1855,
      "lpgPrice": 1224,
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
      "ATM"
    ],
    "latitude": 36.4437,
    "longitude": 128.5763
  },
  {
    "slug": "haman-busan",
    "name": "함안휴게소",
    "image": "/images/thumbnails/gangbyeon.jpg",
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
      "gasolinePrice": 1869,
      "dieselPrice": 1859,
      "lpgPrice": 1240,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/gangbyeon.jpg",
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
      "gasolinePrice": 1858,
      "dieselPrice": 1848,
      "lpgPrice": 1218,
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/gangbyeon.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 37.3084,
    "longitude": 127.4115
  },
  {
    "slug": "iseo-busan",
    "name": "이서휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "lpgPrice": 1160,
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 37.5133,
    "longitude": 127.1182
  },
  {
    "slug": "osu-both",
    "name": "오수휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 8,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": false
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 34.7448,
    "longitude": 126.3309
  },
  {
    "slug": "guri-seoul",
    "name": "구리휴게소",
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 37.2642,
    "longitude": 127.507
  },
  {
    "slug": "tongdosa-busan",
    "name": "통도사휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
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
    "image": "/images/thumbnails/olympic.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 36.7688,
    "longitude": 127.4178
  },
  {
    "slug": "geumwang-both-1",
    "name": "금왕휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "lpgPrice": 1154,
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
    "latitude": 36.6478,
    "longitude": 127.3401
  },
  {
    "slug": "gangcheonsan-seoul",
    "name": "강천산휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 6,
      "hasHydrogen": false
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1838,
      "dieselPrice": 1835,
      "lpgPrice": null,
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
    "latitude": 36.6056,
    "longitude": 127.6363
  },
  {
    "slug": "gimpohaengbogdeurimswimteo-both",
    "name": "김포행복드림쉼터휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1870,
      "dieselPrice": 1857,
      "lpgPrice": 1155,
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 37.503,
    "longitude": 127.3977
  },
  {
    "slug": "osan-both-1",
    "name": "오산휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "latitude": 36.3833,
    "longitude": 127.5308
  },
  {
    "slug": "iin-both",
    "name": "이인휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 6,
      "hasHydrogen": false
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1255,
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1255,
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      "gasolinePrice": 1849,
      "dieselPrice": 1839,
      "lpgPrice": 1255,
      "hasEvCharger": true,
      "evChargersCount": 8,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
        "hours": "08:00 ~ 19:30"
      },
      {
        "name": "드롭탑(커피전문점)",
        "description": "유명브랜드 커피점",
        "hours": "09:00 ~ 19:00"
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
      "기타"
    ],
    "latitude": 35.3712,
    "longitude": 128.7621
  },
  {
    "slug": "hamyang-both",
    "name": "함양휴게소",
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 35.3686,
    "longitude": 128.6183
  },
  {
    "slug": "hamyang-both-1",
    "name": "함양휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "dieselPrice": 1838,
      "lpgPrice": null,
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
    "latitude": 35.2463,
    "longitude": 128.5427
  },
  {
    "slug": "maesong-seoul",
    "name": "매송휴게소",
    "image": "/images/thumbnails/seohaean.jpg",
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/seohaean.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 8,
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
    "latitude": 37.2743,
    "longitude": 127.5734
  },
  {
    "slug": "gunjahaengbogdeurimswimteo-both",
    "name": "군자행복드림쉼터휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 10,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 6,
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
      "편의점"
    ],
    "latitude": 37.5597,
    "longitude": 127.4834
  },
  {
    "slug": "jangheungjeongnamjin-both",
    "name": "장흥정남진휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 4,
      "hasHydrogen": true
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
    "image": "/images/thumbnails/default.jpg",
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
      "편의점"
    ],
    "latitude": 35.4465,
    "longitude": 129.1932
  },
  {
    "slug": "ulju-busan",
    "name": "울주휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "열린매장(간식)"
    ],
    "latitude": 35.3895,
    "longitude": 129.3253
  },
  {
    "slug": "munuicheongnamdae-both",
    "name": "문의청남대휴게소",
    "image": "/images/thumbnails/default.jpg",
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 36.712,
    "longitude": 127.6197
  },
  {
    "slug": "buangoryeocheongja-seoul",
    "name": "부안고려청자휴게소",
    "image": "/images/thumbnails/seohaean.jpg",
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
      "편의점"
    ],
    "latitude": 35.974,
    "longitude": 127.1553
  },
  {
    "slug": "buangoryeocheongja-busan",
    "name": "부안고려청자휴게소",
    "image": "/images/thumbnails/seohaean.jpg",
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
      "편의점"
    ],
    "latitude": 35.9113,
    "longitude": 127.0259
  },
  {
    "slug": "ansan-both",
    "name": "안산휴게소",
    "image": "/images/thumbnails/yeongdong.jpg",
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
      "evChargersCount": 8,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 6,
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
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
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
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
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
      "열린매장(간식)"
    ],
    "latitude": 37.5556,
    "longitude": 127.5672
  },
  {
    "slug": "milyangyeongnamru-both",
    "name": "밀양영남루휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.356,
    "longitude": 128.5996
  },
  {
    "slug": "milyangyeongnamru-busan",
    "name": "밀양영남루휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "dieselPrice": 1846,
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
      "편의점",
      "열린매장(간식)"
    ],
    "latitude": 35.2237,
    "longitude": 128.5432
  },
  {
    "slug": "cheoin-both",
    "name": "처인휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      }
    ],
    "gasStation": {
      "brand": "알뜰주유소",
      "gasolinePrice": 1859,
      "dieselPrice": 1864,
      "lpgPrice": null,
      "hasEvCharger": true,
      "evChargersCount": 4,
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
    "image": "/images/thumbnails/default.jpg",
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
      "dieselPrice": 1869,
      "lpgPrice": 1219,
      "hasEvCharger": true,
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/default.jpg",
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
    "latitude": 36.5694,
    "longitude": 128.6555
  },
  {
    "slug": "pohang-both",
    "name": "포항휴게소",
    "image": "/images/thumbnails/default.jpg",
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
      "evChargersCount": 12,
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
    "image": "/images/thumbnails/gyeongbu.jpg",
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
    "latitude": 35.9632,
    "longitude": 127.0917
  },
  {
    "slug": "gimje-both-1",
    "name": "김제휴게소",
    "image": "/images/thumbnails/gyeongbu.jpg",
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
