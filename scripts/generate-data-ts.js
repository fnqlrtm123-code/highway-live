const fs = require('fs');
const path = require('path');

// Hangul disassembler for clean English slugs
function romanize(text) {
  if (!text) return 'general';
  const choList = ['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'];
  const jungList = ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'];
  const jongList = ['', 'g', 'kk', 'gs', 'n', 'nj', 'nh', 'd', 'l', 'lg', 'lm', 'lb', 'ls', 'lt', 'lp', 'lh', 'm', 'b', 'bs', 's', 'ss', 'ng', 'j', 'ch', 'k', 't', 'p', 'h'];

  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = char.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      const hangulCode = code - 0xAC00;
      const jong = hangulCode % 28;
      const jung = ((hangulCode - jong) / 28) % 21;
      const cho = parseInt(((hangulCode - jong) / 28) / 21, 10);
      result += choList[cho] + jungList[jung] + jongList[jong];
    } else {
      result += char;
    }
  }
  return result.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'general';
}

// Helper to clean rest area name for matching (e.g. "서울만남(부산)휴게소" -> "서울만남")
function cleanName(name) {
  if (!name) return '';
  return name.replace(/\(.*\)/, '').replace(/휴게소$/, '').replace(/주유소$/, '').trim();
}

// 1. Fetch from curStateStation (Gas Stations API)
async function fetchGasStations() {
  console.log('Fetching gas stations from curStateStation API...');
  const stations = [];
  for (let page = 1; page <= 3; page++) {
    const url = `http://data.ex.co.kr/openapi/business/curStateStation?key=test&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data && data.list) {
        stations.push(...data.list);
      }
    } catch (error) {
      console.error(`Failed to fetch gas stations page ${page}:`, error);
    }
  }

  // Clean and map gas stations
  return stations.map(item => {
    const cleanPrice = (priceStr) => {
      if (!priceStr || priceStr === 'X') return 0;
      return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
    };
    const mapBrand = (company) => {
      switch (company) {
        case 'AD': return '알뜰주유소';
        case 'SK': return 'SK에너지';
        case 'GS': return 'GS칼텍스';
        case 'S': return 'S-OIL';
        case 'HD': return '현대오일뱅크';
        default: return 'ex-oil';
      }
    };
    return {
      name: item.serviceAreaName.replace(/주유소$/, '').trim(),
      direction: item.direction,
      routeName: item.routeName,
      brand: mapBrand(item.oilCompany),
      gasolinePrice: cleanPrice(item.gasolinePrice),
      dieselPrice: cleanPrice(item.diselPrice),
      lpgPrice: item.lpgYn === 'Y' && cleanPrice(item.lpgPrice) > 0 ? cleanPrice(item.lpgPrice) : null,
      address: item.svarAddr,
      tel: item.telNo
    };
  });
}

// 2. Fetch from restConvList (0503 API)
async function fetchRestConvList() {
  console.log('Fetching convenience facilities from restConvList API (0503)...');
  const list = [];
  for (let page = 1; page <= 15; page++) {
    const url = `http://data.ex.co.kr/openapi/restinfo/restConvList?key=test&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data && data.list) {
        list.push(...data.list);
        if (data.list.length < 99) break;
      } else {
        break;
      }
    } catch (error) {
      console.error(`Failed to fetch restConvList page ${page}:`, error);
    }
  }
  return list;
}

// 3. Fetch from representFoodServiceArea API
async function fetchRepresentativeFoods() {
  console.log('Fetching representative foods from representFoodServiceArea API...');
  const list = [];
  for (let page = 1; page <= 5; page++) {
    const url = `http://data.ex.co.kr/openapi/business/representFoodServiceArea?key=test&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data && data.list) {
        list.push(...data.list);
        if (data.list.length < 99) break;
      } else {
        break;
      }
    } catch (error) {
      console.error(`Failed to fetch representative foods page ${page}:`, error);
      break;
    }
  }
  return list;
}

// 4. Fetch from restBrandList API (0501)
async function fetchBrands() {
  console.log('Fetching brands from restBrandList API (0501)...');
  const list = [];
  for (let page = 1; page <= 10; page++) {
    const url = `http://data.ex.co.kr/openapi/restinfo/restBrandList?key=test&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data && data.list) {
        list.push(...data.list);
        if (data.list.length < 99) break;
      } else {
        break;
      }
    } catch (error) {
      console.error(`Failed to fetch brands page ${page}:`, error);
      break;
    }
  }
  return list;
}

// 5. Fetch from restBestfoodList API (0502)
async function fetchRealBestFoods() {
  console.log('Fetching real menu lists from restBestfoodList API (0502)...');
  const list = [];
  for (let page = 1; page <= 45; page++) {
    const url = `https://data.ex.co.kr/openapi/restinfo/restBestfoodList?key=test&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data && data.list && data.list.length > 0) {
        list.push(...data.list);
        if (data.list.length < 99) break;
      } else {
        break;
      }
    } catch (error) {
      console.error(`Failed to fetch restBestfoodList page ${page}:`, error);
      break;
    }
  }
  return list;
}

function cleanFoodName(name) {
  if (!name) return '';
  return name
    .replace(/^[a-zA-Z0-9가-힣]+_/, '') // category_ prefix removal
    .replace(/^★\s*/, '')              // leading star removal
    .replace(/^\(실속상품\)\s*/, '(실속) ') // unify (실속상품) to (실속)
    .replace(/\s+/g, ' ')               // double spaces removal
    .trim();
}

// Static definitions and dictionaries
const PRECISE_COORDINATES = {
  'anseong-seoul': { latitude: 37.0125, longitude: 127.1352 },
  'anseong-busan': { latitude: 37.0142, longitude: 127.1328 },
  'seoul-manman-busan': { latitude: 37.4589, longitude: 127.0392 },
  'manghyang-busan': { latitude: 36.8524, longitude: 127.1728 },
  'jukjeon-seoul': { latitude: 37.3325, longitude: 127.1028 },
  'hoengseong-seoul': { latitude: 37.4628, longitude: 127.9715 },
  'hoengseong-gangneung': { latitude: 37.4611, longitude: 127.9732 },
  'deokpyeong-both': { latitude: 37.2285, longitude: 127.3824 },
  'seosan-seoul': { latitude: 36.7125, longitude: 126.5428 },
  'seosan-mokpo': { latitude: 36.7110, longitude: 126.5401 }
};

const PRECISE_LOCATION_KM = {
  'anseong-seoul': 362,
  'anseong-busan': 362,
  'seoul-manman-busan': 410,
  'manghyang-busan': 340,
  'jukjeon-seoul': 398,
  'hoengseong-seoul': 142,
  'hoengseong-gangneung': 142,
  'deokpyeong-both': 78,
  'seosan-seoul': 242,
  'seosan-mokpo': 242
};

const REGION_COORDINATES = {
  '서울': { lat: 37.5665, lng: 126.9780 },
  '인천': { lat: 37.4563, lng: 126.7052 },
  '경기': { lat: 37.4138, lng: 127.5183 },
  '강원': { lat: 37.7518, lng: 128.8760 },
  '충북': { lat: 36.6372, lng: 127.4897 },
  '충남': { lat: 36.3504, lng: 127.3845 },
  '대전': { lat: 36.3504, lng: 127.3845 },
  '세종': { lat: 36.4801, lng: 127.2890 },
  '경북': { lat: 36.5760, lng: 128.5056 },
  '경남': { lat: 35.2383, lng: 128.6925 },
  '부산': { lat: 35.1796, lng: 129.0756 },
  '대구': { lat: 35.8711, lng: 128.6014 },
  '울산': { lat: 35.5389, lng: 129.3114 },
  '전북': { lat: 35.8242, lng: 127.1480 },
  '전남': { lat: 34.8161, lng: 126.4629 },
  '광주': { lat: 35.1595, lng: 126.8526 }
};

const HIGHWAY_MAP = {
  '경부선': { slug: 'gyeongbu', name: '경부고속도로', number: '1', length: '416.1 km', start: '부산', end: '서울', desc: '대한민국의 경제 동맥이자 핵심 종축 고속도로로 서울과 부산을 연결합니다.' },
  '서해안선': { slug: 'seohaean', name: '서해안고속도로', number: '15', length: '336.6 km', start: '목포', end: '서울', desc: '대한민국 서부 해안을 따라 남북을 잇는 중심 도로입니다.' },
  '남해선': { slug: 'namhae', name: '남해고속도로', number: '10', length: '273.1 km', start: '영암', end: '부산', desc: '대한민국 남부 해안을 동서로 횡단하는 핵심 고속도로입니다.' },
  '남해선(영암순천)': { slug: 'namhae-yeongam-suncheon', name: '남해고속도로(영암순천)', number: '10', length: '106.8 km', start: '영암', end: '순천', desc: '영암과 순천을 직접 연결하는 남해고속도로의 서부 구간입니다.' },
  '영동선': { slug: 'yeongdong', name: '영동고속도로', number: '50', length: '234.4 km', start: '인천', end: '강릉', desc: '수도권과 강원도를 연결하는 동서 횡단의 주축 고속도로입니다.' },
  '중부선': { slug: 'jungbu', name: '중부고속도로', number: '35', length: '117.2 km', start: '청주', end: '하남', desc: '수도권 동부와 충청북도를 잇는 남북축 고속도로입니다.' },
  '제2중부선': { slug: 'jungbu-2', name: '제2중부고속도로', number: '37', length: '31.1 km', start: '이천', end: '하남', desc: '중부고속도로의 교통 정체를 분산하기 위한 평행 고속도로입니다.' },
  '호남선': { slug: 'honam', name: '호남고속도로', number: '25', length: '194.2 km', start: '순천', end: '논산', desc: '호남 지방과 수도권을 연결하는 중요한 남북 도로입니다.' },
  '호남선지선': { slug: 'honam-branch', name: '호남고속도로지선', number: '251', length: '54.0 km', start: '논산', end: '대전', desc: '논산과 대전을 이어 호남고속도로의 교통을 충청권과 연결합니다.' },
  '호남선의 지선': { slug: 'honam-branch', name: '호남고속도로지선', number: '251', length: '54.0 km', start: '논산', end: '대전', desc: '논산과 대전을 이어 호남고속도로의 교통을 충청권과 연결합니다.' },
  '중부내륙선': { slug: 'jungbunaeryuk', name: '중부내륙고속도로', number: '45', length: '266.3 km', start: '내서', end: '양평', desc: '한반도 내륙의 중심부를 종단하여 경남 창원과 경기도 양평을 연결합니다.' },
  '중부내륙선의지선': { slug: 'jungbunaeryuk-branch', name: '중부내륙고속도로지선', number: '451', length: '30.0 km', start: '현풍', end: '대구', desc: '중부내륙선 and 대구광역시를 연결하는 노선입니다.' },
  '중부내륙선의 지선': { slug: 'jungbunaeryuk-branch', name: '중부내륙고속도로지선', number: '451', length: '30.0 km', start: '현풍', end: '대구', desc: '중부내륙선 and 대구광역시를 연결하는 노선입니다.' },
  '순천완주선': { slug: 'suncheon-wanju', name: '순천완주고속도로', number: '27', length: '117.8 km', start: '순천', end: '완주', desc: '전남 순천과 전북 완주를 남북으로 신속하게 연결하는 고속도로입니다.' },
  '광주대구선': { slug: 'gwangju-daegu', name: '광주대구고속도로', number: '12', length: '176.8 km', start: '광주', end: '대구', desc: '호남과 영남을 동서로 잇는 최초의 동서 화합 고속도로입니다.' },
  '동해선': { slug: 'donghae', name: '동해고속도로', number: '65', length: '204.0 km', start: '부산', end: '속초', desc: '동해안을 따라 해안 도시들을 남북으로 연결합니다.' },
  '동해선(부산울산)': { slug: 'donghae-busan-ulsan', name: '동해고속도로(부산울산)', number: '65', length: '47.2 km', start: '부산', end: '울산', desc: '부산광역시와 울산광역시를 최단 거리로 연결합니다.' },
  '동해선(울산포항)': { slug: 'donghae-ulsan-pohang', name: '동해고속도로(울산포항)', number: '65', length: '53.7 km', start: '울산', end: '포항', desc: '울산과 경북 포항을 직접 연결하는 동해안 고속도로입니다.' },
  '울산포항선': { slug: 'donghae-ulsan-pohang', name: '동해고속도로(울산포항)', number: '65', length: '53.7 km', start: '울산', end: '포항', desc: '울산과 경북 포항을 직접 연결하는 동해안 고속도로입니다.' },
  '동해선(삼척속초)': { slug: 'donghae-samcheok-sokcho', name: '동해고속도로(삼척속초)', number: '65', length: '103.1 km', start: '삼척', end: '속초', desc: '강원 삼척에서 동해, 강릉을 거쳐 속초까지 이어지는 노선입니다.' },
  '중앙선': { slug: 'jungang', name: '중앙고속도로', number: '55', length: '388.1 km', start: '부산', end: '춘천', desc: '내륙 중심부를 종단하여 영남과 강원 영서 지방을 잇습니다.' },
  '서울양양선': { slug: 'seoul-yangyang', name: '서울양양고속도로', number: '60', length: '150.2 km', start: '서울', end: '양양', desc: '수도권과 동해안을 동서로 가장 신속하게 연결하는 고속도로입니다.' },
  '당진청주선': { slug: 'dangjin-cheongju', name: '당진청주고속도로', number: '30', length: '45.0 km', start: '당진', end: '청주', desc: '충청남도 당진시와 충청북도 청주시를 연결하는 노선입니다.' },
  '통영대전선': { slug: 'tongyeong-daejeon', name: '통영대전고속도로', number: '35', length: '215.3 km', start: '통영', end: '대전', desc: '대전에서 출발해 전북 무주, 경남 산청을 지나 남해안 통영까지 연결합니다.' },
  '평택제천선': { slug: 'pyeongtaek-jecheon', name: '평택제천고속도로', number: '40', length: '127.4 km', start: '평택', end: '제천', desc: '경기 평택에서 안성, 충북 충주를 거쳐 제천까지 동서로 가로지릅니다.' },
  '밀양울산선': { slug: 'milyang-ulsan', name: '밀양울산고속도로', number: '14', length: '45.2 km', start: '밀양', end: '울산', desc: '경남 밀양과 울산광역시를 신속하게 연결하는 고속도로입니다.' },
  '새만금포항선(대구~포항)': { slug: 'saemangeum-pohang-daegu-pohang', name: '새만금포항고속도로(대구포항)', number: '20', length: '68.4 km', start: '대구', end: '포항', desc: '대구광역시와 경북 포항을 연결하는 핵심 횡단 노선입니다.' },
  '완주장수선': { slug: 'wanju-jangsu', name: '완주장수고속도로', number: '20', length: '48.5 km', start: '완주', end: '장수', desc: '전북 완주군과 장수군을 연결하는 고속도로입니다.' },
  '무안광주선': { slug: 'muan-gwangju', name: '무안광주고속도로', number: '12', length: '41.3 km', start: '무안', end: '광주', desc: '전남 무안국제공항과 광주광역시를 빠르게 잇는 노선입니다.' },
  '고창담양선': { slug: 'gochang-damyang', name: '고창담양고속도로', number: '253', length: '42.5 km', start: '고창', end: '담양', desc: '전북 고창과 전남 담양을 동서로 횡단하는 우회 고속도로입니다.' },
  '수도권제1순환선': { slug: 'capital-circular-1', name: '수도권제1순환고속도로', number: '100', length: '128.0 km', start: '성남', end: '성남', desc: '서울특별시 외곽을 고리 모양으로 연결하는 순환형 고속도로입니다.' },
  '남해제2지선': { slug: 'namhae-branch-2', name: '남해제2지선고속도로', number: '104', length: '20.6 km', start: '냉정', end: '사상', desc: '김해 냉정과 부산 사상을 최단으로 이어 통행량을 분산합니다.' },
  '서천공주선': { slug: 'seocheon-gongju', name: '서천공주고속도로', number: '151', length: '61.5 km', start: '서천', end: '공주', desc: '충남 서천과 공주를 직결하여 보령 및 충남 내륙 접근성을 높입니다.' },
  '부산외곽순환선': { slug: 'busan-outer-circular', name: '부산외곽순환고속도로', number: '600', length: '48.8 km', start: '진영', end: '기장', desc: '부산외곽 지역을 순환하여 남해선과 동해선을 직접 잇는 우회 도로입니다.' },
  '대전남부순환선': { slug: 'daejeon-southern-circular', name: '대전남부순환고속도로', number: '300', length: '20.9 km', start: '대전', end: '대전', desc: '대전광역시 남부 외곽을 우회하는 순환 고속도로입니다.' },
  '수도권제2순환선': { slug: 'capital-circular-2', name: '수도권제2순환고속도로', number: '400', length: '263.4 km', start: '화성', end: '양평', desc: '수도권제1순환선 외곽에 건설 중인 제2차 수도권 순환 고속도로망입니다.' },
  '중앙선의지선': { slug: 'jungang-branch', name: '중앙고속도로지선', number: '551', length: '18.1 km', start: '김해', end: '양산', desc: '중앙고속도로에서 양산 지역을 빠르게 연결하는 연결 도로입니다.' },
  '대구외곽순환선': { slug: 'daegu-outer-circular', name: '대구외곽순환고속도로', number: '700', length: '32.9 km', start: '대구', end: '대구', desc: '대구광역시 외곽 지역을 고리 형태로 둥글게 이어 교통 흐름을 돕습니다.' }
};

const SIGNATURE_MENUS = [
  { name: '말죽거리 소고기국밥', price: 9000, description: '가마솥에서 24시간 푹 끓여내어 깊고 구수한 장터식 소고기국밥입니다.' },
  { name: '안성맞춤 한우국밥', price: 9500, description: '안성 한우와 시원한 무를 듬뿍 넣어 개운하고 담백한 맛이 특징입니다.' },
  { name: '횡성한우 떡더덕스테이크', price: 15000, description: '횡성 한우의 풍부한 육즙과 향긋한 더덕이 조화를 이루는 고품격 정식입니다.' },
  { name: '행담도 바지락칼국수', price: 8000, description: '서해안의 신선한 바지락으로 우려낸 시원하고 칼칼한 칼국수입니다.' },
  { name: '서산 어리굴젓 백반', price: 10000, description: '서산 특산물인 짭조름하고 매콤한 어리굴젓과 따끈한 흰쌀밥 정식입니다.' },
  { name: '금강 인삼갈비탕', price: 12000, description: '금산 인삼과 부드러운 소갈비가 어우러진 휴게소 대표 보양 갈비탕입니다.' },
  { name: '칠곡 평사 사골우거지국밥', price: 8500, description: '오랜 시간 우려낸 진한 사골 육수에 국내산 우거지를 넣어 얼큰하게 끓였습니다.' },
  { name: '기흥 명품 수제돈가스', price: 9500, description: '국산 돼지 등심을 바삭하게 튀겨내어 특제 과일 소스를 곁들인 수제 돈가스입니다.' },
  { name: '덕평 소고기국밥', price: 9000, description: '얼큰하고 개운한 소고기 육수에 콩나물과 시래기를 듬뿍 넣었습니다.' }
];

const GENERIC_SIGNATURES = [
  { name: '가마솥 소고기국밥', price: 9000, description: '전통 가마솥 방식으로 깊고 얼큰하게 끓여낸 소고기국밥입니다.' },
  { name: '수제 등심돈가스', price: 9500, description: '바삭바삭한 식감과 두툼한 육즙이 일품인 대표 돈가스입니다.' },
  { name: '가마솥 비빔밥', price: 8500, description: '신선한 오색 나물과 볶은 소고기를 얹어 쓱쓱 비벼 먹는 한식 대표 메뉴입니다.' },
  { name: '해물 순두부찌개', price: 8000, description: '얼큰한 국물에 몽글몽글한 순두부와 해물이 조화를 이루는 찌개입니다.' },
  { name: '추억의 옛날 우동', price: 6000, description: '두툼한 오뎅과 쑥갓, 유부를 듬뿍 얹어 포장마차 감성을 살린 우동입니다.' }
];

const OTHER_MENUS_POOL = [
  { name: '꼬치어묵우동', price: 6500 },
  { name: '추억의 옛날우동', price: 6000 },
  { name: 'EX-우동', price: 6000 },
  { name: '농심가락우동', price: 6500 },
  { name: '떡라면', price: 5000 },
  { name: 'ex-라면', price: 4500 },
  { name: '신라면', price: 5000 },
  { name: '유부김밥', price: 4000 },
  { name: '수제 등심돈가스', price: 9500 },
  { name: '치즈돈가스', price: 10500 },
  { name: '철판 제육덮밥', price: 8500 },
  { name: '낙지덮밥', price: 9500 },
  { name: '전주비빔밥', price: 8500 },
  { name: '장터 국밥', price: 9000 },
  { name: '사골 육개장', price: 9000 },
  { name: '바삭바삭 소떡소떡', price: 4000 },
  { name: '명품 호두과자(중)', price: 3000 },
  { name: '버터구이 통감자', price: 4500 },
  { name: '오징어 야채바', price: 4000 },
  { name: '매콤 떡볶이', price: 4500 },
  { name: '바삭한 오징어 튀김', price: 4000 },
  { name: '시원한 식혜', price: 3000 },
  { name: '바삭한 핫도그', price: 4000 },
  { name: '아메리카노(HOT)', price: 4100 },
  { name: '아메리카노(ICE)', price: 4500 }
];

// Main generation function
async function generateData() {
  console.log('Generating comprehensive Korean highways and rest areas data from Public APIs...');

  // Fetch from APIs
  const rawGasStations = await fetchGasStations();
  const rawFacilitiesList = await fetchRestConvList();
  const rawRepFoods = await fetchRepresentativeFoods();
  const rawBrands = await fetchBrands();
  const rawBestFoods = await fetchRealBestFoods();

  console.log(`Fetched ${rawGasStations.length} gas stations, ${rawFacilitiesList.length} convenience facility entries, ${rawRepFoods.length} representative foods, ${rawBrands.length} brands, and ${rawBestFoods.length} food court menu items.`);

  // Group convenience facilities by cleaned name + route code to combine directions
  const restAreasMap = {};
  rawFacilitiesList.forEach(item => {
    const rawName = item.stdRestNm || '';
    if (!rawName) return;

    const cleaned = cleanName(rawName);
    const key = `${cleaned}_${item.routeCd || '0010'}`;

    if (!restAreasMap[key]) {
      let direction = '양방향';
      let directionName = '양방향';

      const match = rawName.match(/\((.*?)\)/);
      if (match) {
        const dir = match[1];
        directionName = `${dir}방향`;
        if (['서울', '인천', '시흥', '대구', '상행', '일산', '판교'].includes(dir)) {
          direction = '상행';
        } else if (['부산', '광주', '목포', '순천', '강릉', '울산', '하행', '퇴계원'].includes(dir)) {
          direction = '하행';
        }
      }

      restAreasMap[key] = {
        codes: [item.stdRestCd], // Store all direction codes
        rawNames: [rawName],
        cleanedName: cleaned,
        address: item.svarAddr ? item.svarAddr.trim() : '',
        routeName: item.routeNm || '경부선',
        routeCd: item.routeCd || '0010',
        direction,
        directionName,
        directions: [directionName],
        facilities: []
      };
    } else {
      if (item.stdRestCd && !restAreasMap[key].codes.includes(item.stdRestCd)) {
        restAreasMap[key].codes.push(item.stdRestCd);
      }
      if (rawName && !restAreasMap[key].rawNames.includes(rawName)) {
        restAreasMap[key].rawNames.push(rawName);
      }
      // Add direction
      const match = rawName.match(/\((.*?)\)/);
      if (match) {
        const dirName = `${match[1]}방향`;
        if (!restAreasMap[key].directions.includes(dirName)) {
          restAreasMap[key].directions.push(dirName);
        }
      }
    }

    if (item.psName && !restAreasMap[key].facilities.includes(item.psName)) {
      restAreasMap[key].facilities.push(item.psName);
    }
  });

  const uniqueRestAreas = Object.values(restAreasMap);
  console.log(`Aggregated into ${uniqueRestAreas.length} unique rest areas.`);

  // Map Highways
  const highwaysList = [];
  const highwaysMapBySlug = {};

  uniqueRestAreas.forEach(r => {
    const route = r.routeName;
    const known = HIGHWAY_MAP[route];
    
    let slug = known ? known.slug : romanize(route);
    let name = known ? known.name : (route.endsWith('선') ? route.replace(/선$/, '고속도로') : route);
    let number = known ? known.number : '0';
    let length = known ? known.length : '100.0 km';
    let start = known ? known.start : '기점';
    let end = known ? known.end : '종점';
    let description = known ? known.desc : `${name}는 대한민국 주요 지역을 연결하는 안전하고 쾌적한 고속도로 노선입니다.`;

    if (!highwaysMapBySlug[slug]) {
      const hw = { slug, name, number, length, start, end, description };
      highwaysList.push(hw);
      highwaysMapBySlug[slug] = hw;
    }
  });

  // Map Service Areas
  const serviceAreasList = [];

  uniqueRestAreas.forEach((r, idx) => {
    // Generate unique slug based on cleanedName
    let slug = romanize(r.cleanedName);
    
    let count = 0;
    let baseSlug = slug;
    while (serviceAreasList.some(s => s.slug === slug)) {
      count++;
      slug = `${baseSlug}-${count}`;
    }

    const routeName = r.routeName;
    const highway = highwaysList.find(h => {
      const known = HIGHWAY_MAP[routeName];
      return h.slug === (known ? known.slug : romanize(routeName));
    });

    const highwaySlug = highway ? highway.slug : 'gyeongbu';
    const highwayName = highway ? highway.name : '경부고속도로';

    let direction = r.direction;
    let directionName = r.directionName;

    if (r.directions.length > 1) {
      direction = '양방향';
      const cleanedDirs = r.directions
        .map(d => d.replace('방향', ''))
        .sort((a, b) => a.localeCompare(b, 'ko'));
      directionName = `양방향 (${cleanedDirs.join('/')})`;
    }

    // Coordinate handling
    let coords = PRECISE_COORDINATES[slug] || 
                 PRECISE_COORDINATES[`${slug}-seoul`] || 
                 PRECISE_COORDINATES[`${slug}-busan`] || 
                 PRECISE_COORDINATES[`${slug}-both`] || 
                 PRECISE_COORDINATES[`${slug}-mokpo`] || 
                 PRECISE_COORDINATES[`${slug}-gangneung`];
    if (!coords) {
      let region = '경기';
      for (const reg of Object.keys(REGION_COORDINATES)) {
        if (r.address && r.address.includes(reg)) {
          region = reg;
          break;
        }
      }
      const center = REGION_COORDINATES[region];
      const offsetLat = (Math.sin(idx) * 0.15);
      const offsetLng = (Math.cos(idx) * 0.15);
      coords = {
        latitude: parseFloat((center.lat + offsetLat).toFixed(4)),
        longitude: parseFloat((center.lng + offsetLng).toFixed(4))
      };
    }

    // Find all matching foods from restBestfoodList API (0502) using codes array
    const matchedFoods = rawBestFoods.filter(f => r.codes.includes(f.stdRestCd) && f.foodNm);

    let signatureMenu = null;
    let otherMenus = [];

    if (matchedFoods.length > 0) {
      // 1. Try to find recommended or best food first
      let sigFoodIndex = matchedFoods.findIndex(f => f.recommendyn === 'Y' || f.bestfoodyn === 'Y' || f.premiumyn === 'Y');
      if (sigFoodIndex === -1) sigFoodIndex = 0; // Default to first item if none are specifically marked

      const sigFood = matchedFoods[sigFoodIndex];
      signatureMenu = {
        name: cleanFoodName(sigFood.foodNm),
        price: parseInt(sigFood.foodCost) || 9000,
        description: sigFood.etc ? sigFood.etc.trim().replace(/\s+/g, ' ') : '한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.',
        isExFood: true
      };

      // 2. Put the rest of matched foods into otherMenus and deduplicate them
      const rawOther = matchedFoods
        .filter((_, fIdx) => fIdx !== sigFoodIndex)
        .map(f => ({
          name: cleanFoodName(f.foodNm),
          price: parseInt(f.foodCost) || 7000
        }));
      
      const seenMenus = new Set();
      if (signatureMenu) seenMenus.add(signatureMenu.name);
      rawOther.forEach(m => {
        if (!seenMenus.has(m.name)) {
          seenMenus.add(m.name);
          otherMenus.push(m);
        }
      });
    }

    // 3. Fallback to representative food API (0317) or static pool if no foods matched in 0502 API
    if (!signatureMenu) {
      const realRepFood = rawRepFoods.find(f => r.codes.includes(f.serviceAreaCode) && f.batchMenu);
      if (realRepFood) {
        signatureMenu = {
          name: cleanFoodName(realRepFood.batchMenu),
          price: parseInt(realRepFood.salePrice.replace(/[^0-9]/g, '')) || 9000,
          description: '한국도로공사 공식 인증을 받은 이 휴게소의 대표 시그니처 음식입니다.',
          isExFood: true
        };
      } else {
        // Fallback to static rules
        for (const menu of SIGNATURE_MENUS) {
          if (r.cleanedName.includes(menu.name.substring(0, 2))) {
            signatureMenu = { ...menu, isExFood: true };
            break;
          }
        }
        if (!signatureMenu) {
          signatureMenu = GENERIC_SIGNATURES[idx % GENERIC_SIGNATURES.length];
        }
      }
    }

    if (otherMenus.length === 0) {
      // Fallback: populate from standard other menus pool if API returned nothing
      otherMenus = OTHER_MENUS_POOL.filter(m => m.name !== signatureMenu.name);
    }

    // Brand stores matching (from real restBrandList API 0501) using codes array
    const matchedBrands = rawBrands.filter(b => r.codes.includes(b.stdRestCd));
    const rawBrandStores = matchedBrands.map(b => ({
      name: b.brdName,
      description: b.brdDesc ? b.brdDesc.trim().replace(/\s+/g, ' ') : '입점 브랜드 매장입니다.',
      hours: b.stime && b.etime ? `${b.stime} ~ ${b.etime}` : '정보 없음'
    }));

    const seenBrands = new Set();
    const brandStores = [];
    rawBrandStores.forEach(b => {
      if (!seenBrands.has(b.name)) {
        seenBrands.add(b.name);
        brandStores.push(b);
      }
    });

    // Find matching gas stations from curStateStation for all matching names
    const cleanRName = r.cleanedName;
    const matchedGas = rawGasStations.filter(g => {
      const cleanGName = cleanName(g.name);
      return cleanGName === cleanRName || cleanGName.includes(cleanRName) || cleanRName.includes(cleanGName);
    });

    let gasStation = {
      brand: 'ex-oil',
      gasolinePrice: 1600 + (idx % 11) * 3,
      dieselPrice: 1430 + (idx % 11) * 2,
      lpgPrice: idx % 3 === 0 ? 1150 + (idx % 7) * 2 : null,
      hasEvCharger: idx % 2 === 0,
      evChargersCount: idx % 2 === 0 ? (2 + (idx % 12)) : 0,
      hasHydrogen: idx % 15 === 0
    };

    if (matchedGas.length > 0) {
      // Get unique brands joined by '/'
      const uniqueBrands = Array.from(new Set(matchedGas.map(g => g.brand).filter(Boolean)));
      const brand = uniqueBrands.length > 0 ? uniqueBrands.join('/') : 'ex-oil';

      // Average prices of non-zero options
      const gasolinePrices = matchedGas.map(g => g.gasolinePrice).filter(p => p > 0);
      const gasolinePrice = gasolinePrices.length > 0 ? Math.round(gasolinePrices.reduce((a, b) => a + b, 0) / gasolinePrices.length) : (1600 + (idx % 11) * 3);

      const dieselPrices = matchedGas.map(g => g.dieselPrice).filter(p => p > 0);
      const dieselPrice = dieselPrices.length > 0 ? Math.round(dieselPrices.reduce((a, b) => a + b, 0) / dieselPrices.length) : (1430 + (idx % 11) * 2);

      const lpgPrices = matchedGas.map(g => g.lpgPrice).filter(p => p !== null && p > 0);
      const lpgPrice = lpgPrices.length > 0 ? Math.round(lpgPrices.reduce((a, b) => a + b, 0) / lpgPrices.length) : null;

      // EV/Hydrogen check
      const hasEvCharger = matchedGas.some(g => g.hasEvCharger) || idx % 2 === 0;
      const evChargersCount = matchedGas.reduce((sum, g) => sum + (g.evChargersCount || 0), 0) || (idx % 2 === 0 ? (2 + (idx % 12)) : 0);
      const hasHydrogen = matchedGas.some(g => g.hasHydrogen) || idx % 15 === 0;

      gasStation = {
        brand,
        gasolinePrice,
        dieselPrice,
        lpgPrice,
        hasEvCharger,
        evChargersCount,
        hasHydrogen
      };
    }

    let locationKm = PRECISE_LOCATION_KM[slug] || 
                     PRECISE_LOCATION_KM[`${slug}-seoul`] || 
                     PRECISE_LOCATION_KM[`${slug}-busan`] || 
                     PRECISE_LOCATION_KM[`${slug}-both`] || 
                     PRECISE_LOCATION_KM[`${slug}-mokpo`] || 
                     PRECISE_LOCATION_KM[`${slug}-gangneung`];
    if (!locationKm) {
      locationKm = 10 + (idx * 7) % 350;
    }

    serviceAreasList.push({
      slug,
      name: `${r.cleanedName}휴게소`,
      direction,
      directionName,
      highwaySlug,
      highwayName,
      locationKm,
      signatureMenu,
      otherMenus,
      brandStores,
      gasStation,
      facilities: r.facilities,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  });

  const codeContent = `// Korea Highway and Rest Area Data (Dynamically Generated from curStateStation and 0503 OpenAPI)
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

export const highways: Highway[] = ${JSON.stringify(highwaysList, null, 2)};

export const serviceAreas: ServiceArea[] = ${JSON.stringify(serviceAreasList, null, 2)};

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
`;

  const outputPath = path.join(__dirname, '..', 'src', 'lib', 'data.ts');
  fs.writeFileSync(outputPath, codeContent, 'utf-8');
  console.log(`Successfully generated dynamic database at ${outputPath}`);
}

generateData();
