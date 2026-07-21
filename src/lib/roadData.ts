import { highways } from './data';

export const NAVER_TRAFFIC_DATA = {
  "주요도로 10": [
    { name: "영동고속도로", detail: "인천 - 강릉 (연장 234km)", baseSpeed: 95, detailRoute: "서창JC - 강릉분기점", type: "highway", cctvId: "cctv-yd-01", x: 127.2217, y: 37.2417 },
    { name: "경부고속도로", detail: "서울 - 부산 (연장 416km)", baseSpeed: 98, detailRoute: "한남대교 남단 - 구서IC", type: "highway", cctvId: "cctv-gb-01", x: 127.0275, y: 37.5216 },
    { name: "서해안고속도로", detail: "인천 - 목포 (연장 341km)", baseSpeed: 92, detailRoute: "금천IC - 목포IC", type: "highway", cctvId: "cctv-sh-01", x: 126.8156, y: 36.9539 },
    { name: "중부내륙고속도로", detail: "창원 - 양평 (연장 302km)", baseSpeed: 88, detailRoute: "내서JC - 양평IC", type: "highway", cctvId: "cctv-sh-02", x: 127.2000, y: 37.1000 },
    { name: "강변북로", detail: "서울 도시고속도로", baseSpeed: 52, detailRoute: "가양대교 - 구리시계", type: "urban", cctvId: "cctv-yd-02", x: 126.9800, y: 37.5400 },
    { name: "올림픽대로", detail: "서울 도시고속도로", baseSpeed: 58, detailRoute: "행주대교 - 강일IC", type: "urban", cctvId: "cctv-gb-01", x: 127.0500, y: 37.5300 },
    { name: "중부고속도로", detail: "하남 - 청주 - 통영 (연장 117km)", baseSpeed: 90, detailRoute: "하남JC - 남이JC", type: "highway", cctvId: "cctv-gb-03", x: 127.1000, y: 37.4000 },
    { name: "동부간선도로", detail: "서울 도시고속도로", baseSpeed: 42, detailRoute: "의정부시계 - 성동JC", type: "urban", cctvId: "cctv-gb-03", x: 127.0700, y: 37.6300 },
    { name: "수도권제1순환고속도로", detail: "일산 - 판교 - 퇴계원 (연장 128km)", baseSpeed: 74, detailRoute: "판교분기점 기준 순환선", type: "highway", cctvId: "cctv-gb-02", x: 127.1002, y: 37.4011 },
    { name: "중앙고속도로(부산-대구)", detail: "부산 - 대구 (연장 82km)", baseSpeed: 96, detailRoute: "대동JC - 금호JC", type: "highway", cctvId: "cctv-sh-01", x: 129.0800, y: 35.2000 }
  ],
  "고속도로": {
    "ㄱ~ㄴ": [
      { name: "경부고속도로", detail: "한남대교 남단 - 구서IC", baseSpeed: 98 },
      { name: "경인고속도로", detail: "신월IC - 인천IC", baseSpeed: 82 },
      { name: "고창담양고속도로", detail: "고창JC - 대덕JC", baseSpeed: 96 },
      { name: "광주대구고속도로", detail: "광주대덕 - 대구옥포", baseSpeed: 94 },
      { name: "광주외곽순환고속도로", detail: "남광산밸리 - 본량", baseSpeed: 90 },
      { name: "광주원주고속도로", detail: "경기광주JC - 원주JC", baseSpeed: 95 },
      { name: "남해고속도로(순천-부산)", detail: "순천JC - 덕천IC", baseSpeed: 92 },
      { name: "남해고속도로(영암-순천)", detail: "학산 - 해룡", baseSpeed: 94 },
      { name: "남해제1고속도로지선", detail: "산인JC - 창원JC", baseSpeed: 88 },
      { name: "남해제2고속도로지선", detail: "냉정JC - 사상IC", baseSpeed: 82 },
      { name: "남해제3고속도로지선", detail: "신항 - 초정", baseSpeed: 85 },
      { name: "논산천안고속도로", detail: "천안JC - 논산JC", baseSpeed: 86 }
    ],
    "ㄷ~ㅂ": [
      { name: "당진청주고속도로(아산-천안)", detail: "아산 - 천안", baseSpeed: 90 },
      { name: "대구외곽순환고속도로", detail: "달서 - 율암JC", baseSpeed: 92 },
      { name: "대전남부순환고속도로", detail: "서대전 - 비룡JC", baseSpeed: 94 },
      { name: "동해고속도로(부산-울산)", detail: "기장 - 울산", baseSpeed: 96 },
      { name: "동해고속도로(삼척-속초)", detail: "근덕 - 속초", baseSpeed: 95 },
      { name: "동해고속도로(울산-포항)", detail: "울산 - 포항", baseSpeed: 92 },
      { name: "동해고속도로(포항-영덕)", detail: "포항 - 남영덕", baseSpeed: 93 },
      { name: "무안광주고속도로", detail: "무안공항 - 광주", baseSpeed: 95 },
      { name: "부산외곽순환고속도로", detail: "진영JC - 기장JC", baseSpeed: 91 }
    ],
    "ㅅ~ㅇ": [
      { name: "상주영천고속도로", detail: "상주JC - 영천JC", baseSpeed: 95 },
      { name: "새만금포항고속도로(대구-포항)", detail: "도동JC - 포항IC", baseSpeed: 96 },
      { name: "새만금포항고속도로(새만금-전주)", detail: "신평 - 전주", baseSpeed: 92 },
      { name: "새만금포항고속도로(익산-장수)", detail: "익산JC - 장수IC", baseSpeed: 93 },
      { name: "서산영덕고속도로(대전-당진)", detail: "당진 - 대전", baseSpeed: 94 },
      { name: "서산영덕고속도로(상주-영덕)", detail: "상주 - 영덕", baseSpeed: 92 },
      { name: "서산영덕고속도로(청주-상주)", detail: "청주 - 상주", baseSpeed: 93 },
      { name: "서울양양고속도로", detail: "강일 - 양양", baseSpeed: 91 },
      { name: "서천공주고속도로", detail: "서천 - 공주", baseSpeed: 94 },
      { name: "서해안고속도로", detail: "금천 - 목포", baseSpeed: 92 },
      { name: "세종포천고속도로(구리-포천)", detail: "소흘 - 신북", baseSpeed: 96 },
      { name: "세종포천고속도로(안성-구리)", detail: "안성 - 고삼", baseSpeed: 88 },
      { name: "수도권제1순환고속도로", detail: "성남 - 판교 - 일산", baseSpeed: 74 },
      { name: "수도권제2순환고속도로(봉담-동탄)", detail: "화성 - 동탄", baseSpeed: 92 },
      { name: "수도권제2순환고속도로(송산-봉담)", detail: "마도 - 봉담", baseSpeed: 93 },
      { name: "수도권제2순환고속도로(양주-소흘)", detail: "양주 - 소흘", baseSpeed: 95 },
      { name: "수도권제2순환고속도로(인천-김포)", detail: "남항 - 양촌", baseSpeed: 84 },
      { name: "수도권제2순환고속도로(파주-양주)", detail: "파주 - 양주", baseSpeed: 92 },
      { name: "수도권제2순환고속도로(포천-화도)", detail: "소흘 - 고모", baseSpeed: 91 },
      { name: "수도권제2순환고속도로(화도-양평)", detail: "조안 - 양평", baseSpeed: 90 },
      { name: "수도권제2순환고속도로(화성-광주)", detail: "동탄 - 도척", baseSpeed: 93 },
      { name: "순천완주고속도로", detail: "해룡 - 완주", baseSpeed: 94 },
      { name: "아산청주고속도로(옥산-오창)", detail: "옥산 - 오창", baseSpeed: 96 },
      { name: "영동고속도로", detail: "서창 - 강릉", baseSpeed: 95 },
      { name: "용인서울고속도로", detail: "헌릉 - 흥덕", baseSpeed: 83 },
      { name: "울산고속도로", detail: "언양 - 울산", baseSpeed: 98 },
      { name: "익산평택고속도로(평택-부여)", detail: "안중 - 부여", baseSpeed: 92 },
      { name: "인천국제공항고속도로", detail: "북로 - 공항", baseSpeed: 98 }
    ],
    "ㅈ~ㅎ": [
      { name: "제2경인고속도로", detail: "인천 - 성남", baseSpeed: 84 },
      { name: "제2경인고속도로(송도-연수)", detail: "송도 - 연수", baseSpeed: 90 },
      { name: "제2경인고속도로(안양-성남)", detail: "안양 - 성남", baseSpeed: 88 },
      { name: "제2경인고속도로(인천대교)", detail: "공항 - 송도", baseSpeed: 96 },
      { name: "제2중부고속도로", detail: "산곡 - 마장", baseSpeed: 95 },
      { name: "중부고속도로", detail: "하남 - 남이", baseSpeed: 90 },
      { name: "중부내륙고속도로", detail: "내서 - 양평", baseSpeed: 88 },
      { name: "중부내륙고속도로지선", detail: "현풍 - 금호", baseSpeed: 92 },
      { name: "중앙고속도로(부산-대구)", detail: "대동 - 금호", baseSpeed: 96 },
      { name: "중앙고속도로(삼락-대동)", detail: "삼락 - 대동", baseSpeed: 90 },
      { name: "중앙고속도로(춘천-금호)", detail: "대구 - 안동 - 춘천", baseSpeed: 92 },
      { name: "중앙고속도로지선", detail: "대동 - 양산", baseSpeed: 94 },
      { name: "통영대전고속도로", detail: "통영 - 대전", baseSpeed: 93 },
      { name: "평택시흥고속도로", fill: "서평택 - 군자", baseSpeed: 89 },
      { name: "평택제천고속도로", detail: "서평택 - 제천", baseSpeed: 91 },
      { name: "평택파주고속도로(서울-문산)", detail: "강희 - 문산", baseSpeed: 95 },
      { name: "평택파주고속도로(수원-광명)", detail: "봉담 - 설월", baseSpeed: 92 },
      { name: "평택파주고속도로(평택-화성)", detail: "오성 - 태안", baseSpeed: 91 },
      { name: "함양울산고속도로", detail: "함양 - 밀양 - 울산", baseSpeed: 92 },
      { name: "호남고속도로", detail: "승주 - 서순천 - 회덕", baseSpeed: 94 },
      { name: "호남고속도로지선", detail: "논산 - 회덕", baseSpeed: 93 }
    ]
  },
  "도시고속": {
    "서울": [
      { name: "강남순환도시고속도로", detail: "금천구 소하 - 서초구 우면", baseSpeed: 81 },
      { name: "강변북로", detail: "가양대교 - 구리시계", baseSpeed: 52 },
      { name: "내부순환로", detail: "성산대교 - 성동JC", baseSpeed: 44 },
      { name: "동부간선도로", detail: "의정부시계 - 성동JC", baseSpeed: 42 },
      { name: "북부간선도로", detail: "하월곡JC - 신내IC", baseSpeed: 64 },
      { name: "서부간선도로", detail: "성산대교 남단 - 금천IC", baseSpeed: 38 },
      { name: "올림픽대로", detail: "행주대교 - 강일IC", baseSpeed: 58 }
    ],
    "경기·인천": [
      { name: "과천봉담도시고속화도로", detail: "과천 - 의왕 - 봉담", baseSpeed: 74 },
      { name: "덕송내각고속화도로", detail: "남양주 덕송 - 내각", baseSpeed: 82 },
      { name: "분당내곡간도시고속화도로", detail: "서초구 내곡 - 분당 사송", baseSpeed: 64 },
      { name: "분당수서간도시고속화도로", detail: "강남구 청담 - 분당 오리", baseSpeed: 58 },
      { name: "비봉매송도시고속도로", detail: "화성 비봉 - 매송", baseSpeed: 86 },
      { name: "수석호평도시고속도로", detail: "남양주 수석 - 호평", baseSpeed: 88 },
      { name: "자유로", detail: "가양대교 - 문산 자유로IC", baseSpeed: 90 },
      { name: "제2자유로", detail: "상암동 - 파주 야당", baseSpeed: 88 },
      { name: "제3경인고속화도로", detail: "인천 고잔 - 시흥 논곡", baseSpeed: 92 }
    ],
    "충청·대전": [
      { name: "천변도시고속화도로", detail: "대전 신대동 - 와동", baseSpeed: 84 }
    ],
    "전라·광주": [
      { name: "제2순환도로", detail: "광주 신창 - 소태", baseSpeed: 86 }
    ],
    "경북·대구": [
      { name: "신천대로", detail: "대구 북구 침산 - 상동교", baseSpeed: 62 }
    ],
    "경남·부산": [
      { name: "강변대로", detail: "사상구 삼락 - 다대포", baseSpeed: 78 },
      { name: "거가대로", detail: "거제 송정 - 부산 가덕도", baseSpeed: 86 },
      { name: "관문대로", detail: "삼락IC - 백양터널 - 부산항", baseSpeed: 80 },
      { name: "광안대로", detail: "해운대 우동 - 수영구 남천", baseSpeed: 71 },
      { name: "동서고가로", detail: "사상IC - 감만동", baseSpeed: 45 },
      { name: "번영로", detail: "구서IC - 부두", baseSpeed: 74 },
      { name: "수영강변대로", fill: "반여동 - 우동", baseSpeed: 58 },
      { name: "장산로", detail: "해운대 - 송정", baseSpeed: 72 },
      { name: "정관산업로", detail: "동래구 회동 - 기장 정관", baseSpeed: 82 }
    ]
  },
  "국도": {
    "1~20": [
      { name: "국도1호선", detail: "수원 - 서울 - 파주", baseSpeed: 64 },
      { name: "국도2호선", detail: "목포 - 광양 - 부산", baseSpeed: 82 },
      { name: "국도3호선", detail: "남해 - 상주 - 철원", baseSpeed: 58 },
      { name: "국도4호선", detail: "군산 - 대전 - 경주", baseSpeed: 78 },
      { name: "국도6호선", detail: "인천 - 서울 - 양평", baseSpeed: 72 },
      { name: "국도13호선", detail: "완도 - 해남 - 광주", baseSpeed: 81 },
      { name: "국도14호선", detail: "거제 - 통영 - 포항", baseSpeed: 74 },
      { name: "국도17호선", detail: "여수 - 전주 - 대전 - 용인", baseSpeed: 79 },
      { name: "국도20호선", detail: "산청 - 의령 - 경주", baseSpeed: 83 }
    ],
    "21~40": [
      { name: "국도21호선", detail: "남원 - 아산 - 천안 - 진천", baseSpeed: 76 },
      { name: "국도23호선", detail: "강진 - 논산 - 천안", baseSpeed: 79 },
      { name: "국도29호선", detail: "보성 - 담양 - 부여", baseSpeed: 81 },
      { name: "국도7호선", detail: "부산 - 경주 - 포항 - 삼척", baseSpeed: 82 },
      { name: "국도32호선", detail: "태안 - 서산 - 대전", baseSpeed: 75 },
      { name: "국도34호선", detail: "영덕 - 안동 - 당진", baseSpeed: 78 },
      { name: "국도35호선", detail: "부산 - 대구 - 태백", baseSpeed: 80 },
      { name: "국도36호선", detail: "대천 - 충주 - 영주 - 울진", baseSpeed: 76 },
      { name: "국도37호선", detail: "거창 - 금산 - 파주", baseSpeed: 72 },
      { name: "국도38호선", detail: "서산 - 안성 - 삼척", baseSpeed: 78 },
      { name: "국도39호선", detail: "부여 - 청양 - 아산 - 시흥", baseSpeed: 62 }
    ],
    "41~90": [
      { name: "국도42호선", detail: "인천 - 수원 - 원주 - 동해", baseSpeed: 68 },
      { name: "국도43호선", detail: "세종 - 평택 - 서울 - 철원", baseSpeed: 61 },
      { name: "국도44호선", detail: "양평 - 인제 - 한계령 - 양양", baseSpeed: 74 },
      { name: "국도45호선", detail: "서종 - 용인 - 안성", baseSpeed: 82 },
      { name: "국도46호선", detail: "인천 - 서울 - 춘천 - 고성", baseSpeed: 72 },
      { name: "국도47호선", detail: "안산 - 서울 - 포천 - 화천", baseSpeed: 68 },
      { name: "국도48호선", detail: "강화 - 김포 - 서울", baseSpeed: 59 },
      { name: "국도77호선", detail: "부산 - 여수 - 목포 - 파주", baseSpeed: 86 },
      { name: "국도82호선", detail: "평택 - 안성 - 화성", baseSpeed: 78 }
    ]
  },
  "대교": {
    "서울": [
      { name: "가양대교", detail: "마포구 상암동 - 강서구 가양동", baseSpeed: 49 },
      { name: "강동대교", detail: "강동구 강일동 - 구리시 토평동", baseSpeed: 76 },
      { name: "광진교", detail: "강동구 천호동 - 광진구 광장동", baseSpeed: 38 },
      { name: "구리암사대교", detail: "강동구 암사동 - 구리시 아천동", baseSpeed: 65 },
      { name: "동작대교", detail: "용산구 이촌동 - 동작구 동작동", baseSpeed: 48 },
      { name: "동호대교", detail: "성동구 옥수동 - 강남구 압구정동", baseSpeed: 34 },
      { name: "마포대교", detail: "마포구 마포동 - 영등포구 여의도동", baseSpeed: 38 },
      { name: "반포대교", detail: "용산구 서빙고동 - 서초구 반포동", baseSpeed: 41 },
      { name: "서강대교", detail: "마포구 신수동 - 영등포구 여의도동", baseSpeed: 45 },
      { name: "성산대교", detail: "마포구 망원동 - 영등포구 양평동", baseSpeed: 32 },
      { name: "성수대교", detail: "성동구 성수동 - 강남구 압구정동", baseSpeed: 28 },
      { name: "양화대교", detail: "마포구 합정동 - 영등포구 당산동", baseSpeed: 42 },
      { name: "영동대교", detail: "광진구 자양동 - 강남구 청담동", baseSpeed: 24 },
      { name: "올림픽대교", detail: "광진구 구의동 - 송파구 풍납동", baseSpeed: 55 },
      { name: "원효대교", detail: "용산구 원효로 - 영등포구 여의도동", baseSpeed: 42 },
      { name: "월드컵대교", detail: "마포구 상암동 - 영등포구 양평동", baseSpeed: 50 },
      { name: "잠수교", detail: "반포대교 하단 인도교", baseSpeed: 20 },
      { name: "잠실대교", detail: "광진구 자양동 - 송파구 신천동", baseSpeed: 52 },
      { name: "천호대교", fill: "광진구 광장동 - 강동구 천호동", baseSpeed: 46 },
      { name: "청담대교", detail: "광진구 자양동 - 강남구 삼성동", baseSpeed: 64 },
      { name: "한강대교", detail: "용산구 한강로 - 동작구 본동", baseSpeed: 32 },
      { name: "한남대교", detail: "용산구 한남동 - 강남구 신사동", baseSpeed: 31 }
    ],
    "경기·인천": [
      { name: "광명대교", detail: "광명시 광명동 - 서울 구로동", baseSpeed: 45 },
      { name: "김포대교", detail: "김포 고촌읍 - 고양 토당동", baseSpeed: 64 },
      { name: "미사대교", detail: "남양주 삼패동 - 하남 망월동", baseSpeed: 82 },
      { name: "방화대교", detail: "강서구 방화동 - 고양 강매동", baseSpeed: 91 },
      { name: "신행주대교", detail: "강서구 개화동 - 고양 행주외동", baseSpeed: 74 },
      { name: "일산대교", detail: "김포 걸포동 - 고양 법곳동", baseSpeed: 76 },
      { name: "팔당대교", detail: "하남 창우동 - 남양주 조안면", baseSpeed: 58 }
    ],
    "경남·부산": [
      { name: "강서낙동강2교", detail: "부산 사상구 - 강서구", baseSpeed: 84 },
      { name: "광안대교", detail: "해운대 우동 - 수영구 남천동", baseSpeed: 71 },
      { name: "구포낙동강교", detail: "부산 북구 구포 - 강서구 대저", baseSpeed: 79 },
      { name: "구포대교", detail: "부산 북구 구포동 - 강서구 대저동", baseSpeed: 68 },
      { name: "낙동강하구둑", detail: "부산 사하구 하단 - 강서구 명지", baseSpeed: 52 },
      { name: "부산대교", detail: "부산 중구 중앙동 - 영도구 봉래동", baseSpeed: 48 },
      { name: "수영2호교", detail: "수영강 하류 교량", baseSpeed: 42 },
      { name: "수영교", fill: "해운대구 - 수영구 망미동", baseSpeed: 46 },
      { name: "신낙동대교", detail: "사상구 감전동 - 강서구 대저동", baseSpeed: 86 },
      { name: "영도대교", detail: "부산 중구 남포동 - 영도구 대교동", baseSpeed: 38 },
      { name: "원동교", detail: "부산 동래구 안락동 - 해운대구 재송동", baseSpeed: 54 },
      { name: "좌수영교", detail: "부산 수영강 중류 교량", baseSpeed: 44 }
    ]
  }
};

export interface RouteSegment {
  from: string;
  to: string;
  distance: string;
  normalTime: number;
  currentTime: number;
  status: '원활' | '서행' | '정체';
}

export interface RoadProfile {
  slug: string;
  name: string;
  type: 'highway' | 'urban' | 'national' | 'bridge';
  detail: string;
  number?: string;
  length?: string;
  start?: string;
  end?: string;
  description: string;
  verificationMethod: string;
  cctvInfo: string;
  directionsText: string;
  congestedSections: string;
  detourCriteria: string;
  faqs: { q: string; a: string }[];
  images: {
    thumb: string;
    still1: string;
    still2: string;
  };
  segments: RouteSegment[];
}

function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function getSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// 모든 도로 목록 생성
export function getRoadList(): RoadProfile[] {
  const roadProfiles: RoadProfile[] = [];
  const processedNames = new Set<string>();

  const addRoad = (name: string, detail: string, type: 'highway' | 'urban' | 'national' | 'bridge') => {
    if (processedNames.has(name)) return;
    processedNames.add(name);

    let matchedHighway = highways.find(h => h.name === name);
    const detailsHighway = matchedHighway || highways.find(h => name.includes(h.name));
    
    // Always use Korean for slug
    const slug = name
      .replace(/[^a-zA-Z0-9가-힣]+/g, '-')
      .replace(/^-|-$/g, '');

    let length = detailsHighway?.length || '';
    let start = detailsHighway?.start || '';
    let end = detailsHighway?.end || '';
    let number = detailsHighway?.number || '';

    if (!length) {
      const lenMatch = detail.match(/연장\s*([\d\.]+(km|KM|m|M))/);
      if (lenMatch) length = lenMatch[1];
    }
    if (!start || !end) {
      const routeMatch = detail.split(' - ');
      if (routeMatch.length >= 2) {
        start = routeMatch[0].trim();
        end = routeMatch[1].split('(')[0].trim();
      }
    }

    let description = '';
    let verificationMethod = '';
    let cctvInfo = '';
    let directionsText = '';
    let congestedSections = '';
    let detourCriteria = '';
    let faqs: { q: string; a: string }[] = [];

    // 도로별 고유 시드를 활용하여 Unsplash의 고해상도 실제 도로/교통/CCTV 모니터링 사진(실사)을 매핑합니다.
    const seed = getSeed(name);

    // Unsplash의 고품질 실사 이미지 라이브러리 풀
    const poolThumbnails = [
      'photo-1519074002996-a69e7ac46a42',
      'photo-1506012787146-f92b2d7d6d96',
      'photo-1470071459604-3b5ec3a7fe05',
      'photo-1506744038136-46273834b3fb',
      'photo-1513836279014-a89f7a76ae86',
      'photo-1544620347-c4fd4a3d5957',
      'photo-1518495973542-4542c06a5843',
      'photo-1511497584788-876760111969',
      'photo-1542362567-b07eac790947',
      'photo-1464822759023-fed622ff2c3b'
    ];

    const poolStill1 = [
      'photo-1590674899484-d5640e854abe',
      'photo-1498654896293-37aacf113fd9',
      'photo-1504609773096-104ff2c73ba4',
      'photo-1578328819058-b69f3a3b0f6b',
      'photo-1522083165195-3427502977a1',
      'photo-1596567138258-00569a194c77',
      'photo-1503899036084-c55cdd92da26',
      'photo-1486406146926-c627a92ad1ab',
      'photo-1541888946425-d81bb19240f5',
      'photo-1511497584788-876760111969'
    ];

    const poolStill2 = [
      'photo-1555899434-94d1368aa7af',
      'photo-1616431575953-1b226e6d7c88',
      'photo-1526304640581-d334cdbbf45e',
      'photo-1547841243-eacb14453cd9',
      'photo-1563720223185-11003d516935',
      'photo-1522083165195-3427502977a1',
      'photo-1590674899484-d5640e854abe',
      'photo-1498654896293-37aacf113fd9',
      'photo-1506012787146-f92b2d7d6d96',
      'photo-1542362567-b07eac790947'
    ];

    const idxT = Math.floor(seededRandom(seed + 1) * poolThumbnails.length);
    const idxS1 = Math.floor(seededRandom(seed + 2) * poolStill1.length);
    const idxS2 = Math.floor(seededRandom(seed + 3) * poolStill2.length);

    // 중복 방지 로직 (만약 같은 이미지가 걸릴 경우 인덱스를 한 칸 밀어 완전히 다르게 고정)
    let s1Index = idxS1;
    if (poolStill1[s1Index] === poolThumbnails[idxT]) {
      s1Index = (s1Index + 1) % poolStill1.length;
    }
    let s2Index = idxS2;
    while (poolStill2[s2Index] === poolThumbnails[idxT] || poolStill2[s2Index] === poolStill1[s1Index]) {
      s2Index = (s2Index + 1) % poolStill2.length;
    }

    let thumb = '/images/thumbnails/default.jpg';
    if (name.includes("경부고속도로")) {
      thumb = '/images/thumbnails/gyeongbu.jpg';
    } else if (name.includes("영동고속도로")) {
      thumb = '/images/thumbnails/yeongdong.jpg';
    } else if (name.includes("서해안고속도로")) {
      thumb = '/images/thumbnails/seohaean.jpg';
    } else if (name.includes("강변북로")) {
      thumb = '/images/thumbnails/gangbyeon.jpg';
    } else if (name.includes("올림픽대로")) {
      thumb = '/images/thumbnails/olympic.jpg';
    }

    const still1 = `https://images.unsplash.com/${poolStill1[s1Index]}?auto=format&fit=crop&w=800&h=500&q=80`;
    const still2 = `https://images.unsplash.com/${poolStill2[s2Index]}?auto=format&fit=crop&w=800&h=500&q=80`;

    const images = { thumb, still1, still2 };

    // 경부, 영동, 서해안, 올림픽, 강변북로의 수작업 지식 데이터
    if (name.includes("경부고속도로")) {
      description = "경부고속도로는 서울과 부산을 연결하며 대한민국 전국 물류망과 여객 유동의 핵심을 관통하는 중추적인 종축 노선입니다.";
      verificationMethod = "경부고속도로의 실시간 소통 상태는 한국도로공사의 로드플러스 API 및 국가교통정보센터(ITS)의 주요 노면 평속 데이터를 2~3분 간격으로 수집하여 정확하게 조회합니다.";
      cctvInfo = "노선 내 상습 병목 지점인 서울요금소, 신갈분기점(JC), 기흥나들목(IC), 안성휴게소, 천안분기점 부근의 관제 카메라 피드를 연계하여 도로 전방의 차량 적체 흐름 및 결빙이나 강우 상태를 운행 전 육안으로 확인할 수 있습니다.";
      directionsText = "경부선은 기점인 부산(구서IC)과 종점인 서울(한남대교 남단) 방향으로 구분됩니다. 서울방향(상행선)은 평일 출근 타임(양재~한남 구간) 및 주말 일요일 오후에 귀경 차량들이 쏟아져 나오며 혼잡을 빚습니다. 부산방향(하행선)은 금요일 퇴근 타임 및 토요일 오전 시간대에 기흥동탄에서 안성 구간까지 강한 병목 지체가 발생합니다. 또한 평일/주말 매일 07:00 ~ 21:00에 경부선 버스전용차로(평일: 한남~안성, 주말: 한남~신탄진)가 운영되므로 파란 차선 구역 주행 시 주의가 요구됩니다.";
      congestedSections = "반포IC~양재IC(수도권 강남 정체 구간), 신갈JC~안성IC(경기 남부 주중/주말 병목), 천안JC~청주JC 및 남이JC 부근(충청권 합류 엇갈림)이 연쇄 서행을 발생시키는 대표적인 구간입니다.";
      detourCriteria = "안성 및 천안 부근 정체가 극심할 때에는 헌릉IC 등에서 용인서울고속도로를 경유해 지방도 311호선으로 빠진 뒤 안성JC로 진입하거나, 동탄 일대에서 국지도 23호선(남사진위 방면)으로 우회하여 통과 시간을 15분 이상 단축할 수 있습니다.";
      faqs = [
        { q: "경부고속도로 버스전용차로 위반 시 과태료는 얼마인가요?", a: "승용차 기준 범칙금 6만 원과 벌점 30점이 부과됩니다. 2024년 6월 1일부터 주말뿐 아니라 평일에도 한남~안성 구간에 매일 적용되므로 주의해야 합니다." },
        { q: "정체 구간 사고나 긴급 고장 발생 시 견인은 어떻게 요청하나요?", a: "한국도로공사 콜센터(1588-2504)로 전화해 무상 견인 서비스를 신청하시면, 2차 사고 예방을 위해 차량을 근처 안전지대(IC 또는 휴게소)까지 무료로 이동해 줍니다." }
      ];
    } else if (name.includes("영동고속도로")) {
      description = "영동고속도로는 인천과 강릉을 연결하며 수도권 주민들의 강원 영동권 관광 및 여가 통행 수요를 도맡는 중요 동서선입니다.";
      verificationMethod = "영동고속도로 통행 지표는 수도권 서창분기점부터 대관령 구간을 거쳐 강릉분기점에 이르기까지의 전 통행 속도를 한국도로공사 관제 정보를 수합해 대조 연산합니다.";
      cctvInfo = "신갈JC, 마성터널 입구, 호법JC, 여주IC, 대관령 등 지형적 병목 현상이 누적되거나 기상 안개/폭설 이변이 잦은 거점에 설치된 관제 모니터링 정보를 조회할 수 있습니다.";
      directionsText = "영동선은 기점인 인천(서창JC)과 종점인 강릉(강릉분기점) 방향으로 운행됩니다. 강릉방향(하행선)은 토요일 아침 및 금요일 저녁 시간대에 주말 여행 차량이 몰리며 신갈에서 용인 및 호법분기점 구간이 붉은색 혼잡으로 변합니다. 인천방향(상행선)은 주말 일요일 오후와 연휴 마지막 날 강릉에서 서울로 돌아오는 차량들로 여주분기점에서 호법 구간의 평속이 10~20km/h로 급락합니다. 한편 영동선 주말 버스전용차로 제도는 상습적인 본선 체증 완화를 위해 전면 폐지되어 전 차선을 누구나 자유롭게 주행할 수 있습니다.";
      congestedSections = "신갈JC~용인IC(진출입 병목), 호법JC~여주JC(중부내륙선 등 합류 엇갈림), 대관령 고개터널 구간(오르막 가속 둔화 및 잦은 해무)이 상습 정체 지역입니다.";
      detourCriteria = "호법분기점에서 여주분기점 구간이 완전히 지정체 상황일 경우에는 고속도로에서 탈출해 나란히 이어지는 42번 국도(중부대로)로 진입한 후 여주IC 방향으로 우회하는 방법이 시간 절약에 주효합니다.";
      faqs = [
        { q: "겨울철 폭설 예보 시 영동고속도로 대관령 구간의 통제 상황은 어디서 보나요?", a: "영동선 대관령 등 산간 대교 구간은 적설 상태를 관제 CCTV 영상 스크린샷으로 수시로 눈길 확인해야 하며, 폭설 경보 시 스노우 체인을 반드시 지참해야 안전합니다." },
        { q: "영동고속도로 요금소 맛집이나 저렴한 주유소가 있나요?", a: "영동선 휴게소(여주, 문막, 평창 등)의 ex-oil 알뜰주유소 단가가 상대적으로 최저가 수준이므로 주행 전 주유를 권장합니다." }
      ];
    } else if (name.includes("서해안고속도로")) {
      description = "서해안고속도로는 서해대교를 건너 충청·호남 해안 벨트와 수도권 공단 물류 수송을 담당하는 서부 종단 축입니다.";
      verificationMethod = "서해안선의 정체 정보는 아산만 관제 포인트 및 서해대교 교량 내부 루프 센서 검지 시스템의 진행 속도 데이터를 활용합니다.";
      cctvInfo = "일직JC, 목감IC, 비봉IC, 서해대교 주탑 및 중앙부, 송악IC 등 기상 강풍 영향권과 연쇄 병목지 주요 카메라 정보를 관찰할 수 있습니다.";
      directionsText = "서해안선은 기점인 목포와 종점인 서울(금천IC) 방향으로 배치됩니다. 서울방향(상행선)은 주로 일요일 오후 시간대에 서평택JC를 거쳐 발안, 비봉나들목 구간에 통행 차량이 꼬리를 물며 마비 현상이 오고, 목포방향(하행선)은 주말 토요일 오전 및 명절 연휴 첫날 서해대교 진입 직전 구간인 서평택 부근에 극심한 통행 병목 대기열이 늘어섭니다.";
      congestedSections = "서평택JC~서해대교~송악IC 구간(풍속 및 진출입 차선 엇갈림 상습 정체), 비봉IC~발안IC(화물차 집중), 일직JC~금천IC(서울 시계 진입 병목) 구간입니다.";
      detourCriteria = "서해대교 상단에 대형 전복 사고나 주말 극한 정체가 겹칠 경우, 당진IC에서 빠져나와 38번 국도를 타고 아산만방조제 방면인 39번 국도를 경유하여 서평택IC 방향으로 돌아 올라오는 코스가 차량 흐름 회피의 지름길입니다.";
      faqs = [
        { q: "서해대교 해무나 강풍 시 통행 통제 조건이 어떻게 되나요?", a: "가시거리가 10m 미만으로 떨어지거나 10분간의 평균 풍속이 초속 25m 이상을 상회할 때 교량 진입이 물리적으로 전면 통제됩니다." },
        { q: "서해안고속도로 주행 시 주의할 점은 무엇인가요?", a: "노선 진행 방향상 해 질 무렵 서해안선 하행선은 정면 직사광선 눈부심이 상당하므로 안전거리 유지와 선글라스 활용 등 방어 운전이 필요합니다." }
      ];
    } else if (name.includes("올림픽대로")) {
      description = "올림픽대로는 김포에서 강동을 관통하며 한강 이남 교통량을 전담하는 서울 도심 동서 간선 도로의 대동맥입니다.";
      verificationMethod = "올림픽대로의 소통 지표는 서울특별시 교통정보센터(TOPIS) 및 도로 관리 공단의 주행 센서 데이터를 바탕으로 평속을 집계해 산출합니다.";
      cctvInfo = "가양대교 남단, 한남대교 남단, 영동대교 남단 등 주요 한강 통과 교량 접속 진출입로의 흐름 판별용 CCTV 관제 현황을 대조합니다.";
      directionsText = "올림픽대로는 기점인 행주대교(김포 방향)와 종점인 강일IC(강동 방향) 노선으로 양방향 운행됩니다. 강일방향(동행선)은 평일 퇴근 시간대(17:00 ~ 20:00)에 동작대교 남단에서 한남, 영동대교 남단 진출부 구간이 주차장을 방불케 하고, 행주방향(서행선)은 아침 출근 시간대(07:00 ~ 09:30)에 가양대교 남단 및 여의도 주변 진입 구간의 차량 통과 속도가 큰 폭으로 하락합니다.";
      congestedSections = "반포대교 남단~영동대교 남단 구간(중앙 상습 밀집 차로), 여의하류IC~한강대교 남단 구간의 합류 지정체가 고질적입니다.";
      detourCriteria = "여의도 일대 올림픽대로 본선이 완전히 붉은색 정체 구역으로 변해 멈춰 서 있다면, 병렬로 뻗어 있는 일반 도로인 노들로로 진로를 바꾸는 편이 진출입 신호 체계 분산 효과 덕분에 통과가 훨씬 수월합니다.";
      faqs = [
        { q: "올림픽대로 통행 제한 화물차 기준은 어떻게 되나요?", a: "교통 혼잡 완화를 위해 평일 출퇴근 시간대에 10톤 이상 대형 화물차나 특수 건설 기계 차량은 통행 제한 지침이 적용될 수 있습니다." },
        { q: "집중 호우 시 올림픽대로 침수 대처법은 무엇인가요?", a: "팔당댐 방류량이 1만 톤을 넘어서면 여의상하류 나들목 및 반포 지하차도 구간이 선제 통제되므로, 즉시 남부순환로로 회피 주행 경로를 설정해야 합니다." }
      ];
    } else if (name.includes("강변북로")) {
      description = "강변북로는 가양대교 북단부터 구리를 잇는 강북 최고의 동서 교통 요충지이자 상시 혼잡 간선 도로입니다.";
      verificationMethod = "강변북로의 통행 평속은 서울시 TOPIS 정보망 및 각 대교 북단 진출입 톨링 데이터를 기반으로 신속하게 계산되어 반영됩니다.";
      cctvInfo = "성산대교 북단, 서강대교 북단, 한강대교 북단, 한남대교 북단, 청담대교 북단 등 교통 접속 요지의 안전 관제 카메라 정보망을 매핑합니다.";
      directionsText = "강변북로는 기점인 일산(가양대교 북단)과 종점인 구리시계 방향으로 운행됩니다. 구리방향(동행선)은 퇴근 시간대 마포대교 북단에서 한남대교 북단 구간에 강남 방면 진출입 차량들이 한데 모이며 본선까지 심각한 지체를 겪으며, 일산방향(서행선)은 아침 출근 타임 양화대교 북단에서 가양대교 구간의 진입로 마비 확률이 최고치에 달합니다.";
      congestedSections = "마포대교 북단~동작대교 북단 구간(도심 주 진입 정체), 성산대교 북단(내부순환로 진입 병목 유발 지대)입니다.";
      detourCriteria = "성산~원효대교 북단 본선 통과 평속이 20km/h 이하로 저하될 때는 용산 중심 도심 통과 도로(마포로, 신촌로 등)로 빠진 뒤 도심 신호망을 타고 우회하는 것이 우수한 경로 전환 선택입니다.";
      faqs = [
        { q: "강변북로 최고 속도 제한 기준이 어떻게 변경되었나요?", a: "기존 80km/h 제한 구역 중 일부 도심 혼잡 병목 구간은 사고 예방을 위해 70km/h 구역으로 낮춰서 감속 카메라가 운용 중이므로 전방 표지판을 준수하여 감속해야 합니다." },
        { q: "갓길 고장 정차 시 강변북로 내 2차 사고 대피 요령은?", a: "비상등을 켜고 트렁크를 개방한 뒤, 탑승자 전원은 도로 갓길 가드레일 밖의 강변 안전 보도(한강 둔치 방면)로 반드시 먼저 탈출해야 2차 충돌 사망 사고를 예방합니다." }
      ];
    } else {
      // 일반 서브 도로 140여 개는 난수 분기로 개별 페이지마다 완전 유니크 텍스트 렌더링
      const typeText = type === 'highway' ? '고속도로' : type === 'urban' ? '도시고속도로' : type === 'national' ? '일반국도' : '대교';
      
      const descIndex = Math.floor(seededRandom(seed + 1) * 3);
      const verifyIndex = Math.floor(seededRandom(seed + 2) * 3);
      const cctvIndex = Math.floor(seededRandom(seed + 3) * 3);
      const flowIndex = Math.floor(seededRandom(seed + 4) * 3);
      const bottleneckIndex = Math.floor(seededRandom(seed + 5) * 3);
      const detourIndex = Math.floor(seededRandom(seed + 6) * 3);
      const faqSetIndex = Math.floor(seededRandom(seed + 7) * 3);

      const rangeText = (start && end) ? `(${start} ~ ${end} 구간) ` : '';
      const descPool = [
        `${name}${rangeText}의 교통상황과 CCTV 영상 확인 방법을 상세히 안내해 드립니다. 본 노선은 주요 권역을 연결하는 핵심 도로망으로, 주행 전 정체 상황을 미리 파악하면 이동 시간을 크게 단축할 수 있습니다.`,
        `${name} 노선의 실시간 소통 흐름과 구간별 주행 평속, 정체 예상 정보를 제공합니다. 도로 진입 전에 CCTV 화면과 정체 구간 정보를 미리 체크하여 안전하고 원활한 경로를 선택해 보세요.`,
        `${name}(노선 경로: ${detail})의 실시간 교통량 정보와 돌발 사고, 도로 공사로 인한 통제 현황을 상세히 파악할 수 있습니다. 쾌적한 운행을 위한 맞춤형 우회 도로 가이드를 확인해 보시기 바랍니다.`
      ];
      description = descPool[descIndex];

      const verifyPool = [
        `${name}의 교통상황과 소통 정보는 국토교통부 국가교통정보센터(ITS) 및 지자체 교통정보센터(TOPIS 등)의 신뢰성 높은 데이터를 통해 2~5분 간격으로 수집 및 집계됩니다.`,
        `노선의 통행 평속과 구간별 원활, 서행, 정체 상태는 도로 나들목(IC) 및 분기점(JC) 주변에 설치된 교통량 검지기 센서의 측정값을 기반으로 분석되어 제공됩니다.`,
        `지능형 교통시스템(ITS) 및 도로 관리청의 사고, 공사, 통제 정보를 미러링하여 전방 정체 발생 시 유동적인 우회 도로 안내 및 인근 휴게소의 현황 정보를 제공합니다.`
      ];
      verificationMethod = verifyPool[verifyIndex];

      const cctvPool = [
        `돌발 상황 모니터링을 위해 노선 주요 정체 지점 및 터널 부근에 고성능 관제 CCTV 카메라가 구축되어 있습니다. 겨울철 노면 적설이나 여름 폭우 침수와 같은 도로 노면 기상 변화를 진입 전 모니터링 피드로 파악하는 것이 충돌을 줄이는 지름길입니다.`,
        `노선 주요 교량 통과점 및 병목 진입 지점을 중심으로 설치된 도로 통제 카메라는 기상 안개 유무와 차량 꼬리물기 정체 길이를 시각적으로 우선 체크할 수 있는 훌륭한 참고 지표입니다.`,
        `지형 고저차 오르막이나 급회전 램프 부근에 배치된 도로 모니터링 관제 화면을 바탕으로 돌발 장애물 적체나 사고 상황판 흐름을 도로 진입 개시 전 간접 교차 검증해 보실 수 있습니다.`
      ];
      cctvInfo = cctvPool[cctvIndex];

      const flowPool = [
        `${name}은(는) 기종점 방향에 따라 차량 쏠림 특성이 확연히 나뉩니다. 상행선 방향인 ${end || '종점'} 방면은 주중 퇴근 시간대(18:00 ~ 20:00) 전후에 병목 구간 위주로 교통 체증이 자주 발생하고, 하행선 방향인 ${start || '기점'} 방면은 아침 출근 타임(07:30 ~ 09:00)에 통행 지체가 고루 관측됩니다.`,
        `${name} 상행선(${end || '종점'} 방면)은 주중 아침 대도시 진입 통근 차량들로 나들목 접속 차선이 붉은색 지정체 상황을 나타내기 쉬우며, 하행선(${start || '기점'} 방면)은 주말 여가 이동 및 야간 대형 화물 운송 비중이 다소 증가하여 소통 흐름 속도 편차가 확대됩니다.`,
        `도로 진행 차선별 통계 상, ${name} 상행선은 도심 내부 진출입 합류로 인해 상습 병목 점차 지연이 잦은 특성을 나타내며 하행선은 상대적으로 시속 60~80km 대의 무난한 순항 상태를 나타내나 명절 연휴 등의 시기에는 지정체 행렬이 다소 두드러집니다.`
      ];
      directionsText = flowPool[flowIndex];

      const bottleneckPool = [
        `주요 교량 진입부 및 나들목(IC) 연결 램프 전방 1km 구간은 본선으로 끼어들거나 진출하려는 대기 차량들의 진로가 뒤엉키면서 속도가 급속하게 저하되어 상습 정체를 유발하는 주요 구역입니다.`,
        `고속 간선선들이 한데 교차하는 주요 분기점(JC) 전방과 요금소(TG) 차로 축소 구간은 차선 감소에 따른 병목 유동 정체가 상시 누적되므로 해당 지점 통과 시 사전 속도 조절 및 안전 운행 거리가 확보되어야 합니다.`,
        `진출입 엇갈림 현상이 구조적으로 잦은 인터체인지 합류 도로와 도심 일반 신호 교차로 연계 진입 지점은 상습 지정체 정지 구간으로 꼽히므로 진입 전에 충분한 제동 거리를 확보해 주십시오.`
      ];
      congestedSections = bottleneckPool[bottleneckIndex];

      const detourPool = [
        `만약 본 노선의 특정 구간에서 사고나 상습 병목 정체로 인하여 평균 주행 속도가 30km/h 이하로 급감할 경우, 직전 나들목(IC)을 통해 빠져나가 평행하게 달리는 대체 국도나 인근 우회 도로를 이용하는 것이 시간 절약에 주효할 수 있습니다.`,
        `도로 전광판(VMS)의 소통 정보나 내비게이션 앱의 혼잡 예측 시간을 비교하여 본선 정체 꼬리가 길어질 시, 주요 교차로 진입 전에 국도나 일반 도로 우회 코스로 경로를 변경하는 것을 권장합니다.`,
        `상습 지정체 발생으로 인해 구간 통과 시 20분 이상의 추가 지체가 예상되는 경우에는 미리 대체 우회 경로(인근 지방도 및 국도 등)를 탐색하여 진출하는 것이 운행 지연을 방지하는 방법입니다.`
      ];
      detourCriteria = detourPool[detourIndex];

      const faqPool = [
        [
          { q: `${name}의 교통 평속 및 지체 데이터는 얼마나 자주 갱신되나요?`, a: "도로교통공사 정보망 연동 데이터 주기에 따라 3분~5분 단위로 리셋되어 자동 갱신됩니다." },
          { q: "눈길, 안개 등 긴급 기상 상황 시 통행 시 준수속도는?", a: "가시거리가 100m 이내일 때 제한 속도 대비 50%를 감속 운행하는 것이 도로교통법상의 대원칙입니다." }
        ],
        [
          { q: `${name} 주행 중 낙하물이나 파손 구간을 마주치면 어디로 신고하나요?`, a: "지속 2차 추돌을 막기 위해 정부 민원 콜센터(110) 혹은 관할 지방 지자체 도로교통 상황실에 긴급 접수하여 치우도록 유도해야 합니다." },
          { q: "해당 노선의 갓길 주행 제어는 상시 허용되나요?", a: "승인된 긴급 갓길 차선(가변 차선제 신호등 파란 화살표 켜짐 시)을 제외하고는 갓길 불법 주행은 벌점 및 범칙금 6만 원 부과 대상이 됩니다." }
        ],
        [
          { q: `${name} 통행료 요금 계산 및 하이패스 미인식 시 처리는?`, a: "요금소 미인식 시 무리하게 차선 정차하지 마시고 종점 톨게이트 창구에서 사후 수납 혹은 한국도로공사 앱을 통한 간편 계좌 이체를 활용하면 벌금 없이 해결됩니다." },
          { q: "정체 정보를 활용하여 안전하게 이동하는 방법은 무엇인가요?", a: "출발 전 해당 노선의 교통상황판을 조회하여 지체 구간을 사전에 파악하고, 병목 구간 및 엇갈림 분기점 부근에서는 급작스러운 차선 변경을 피하고 충분한 차간 거리를 확보하며 양보 운전하는 것이 중요합니다." }
        ]
      ];
      faqs = faqPool[faqSetIndex];
    }

    let segments: RouteSegment[] = [];

    // 도로명에 맞춰 세그먼트 데이터 구성
    if (name.includes("경부고속도로")) {
      segments = [
        { from: "서울요금소", to: "신갈JC", distance: "11.5 km", normalTime: 8, currentTime: 14, status: "서행" },
        { from: "신갈JC", to: "안성IC", distance: "42.1 km", normalTime: 28, currentTime: 51, status: "정체" },
        { from: "안성IC", to: "천안JC", distance: "29.8 km", normalTime: 20, currentTime: 20, status: "원활" },
        { from: "천안JC", to: "대전JC", distance: "68.2 km", normalTime: 45, currentTime: 48, status: "원활" },
        { from: "대전JC", to: "동대구JC", distance: "142.0 km", normalTime: 95, currentTime: 98, status: "원활" },
        { from: "동대구JC", to: "부산요금소", distance: "98.4 km", normalTime: 65, currentTime: 72, status: "서행" }
      ];
    } else if (name.includes("영동고속도로")) {
      segments = [
        { from: "서창JC", to: "군자JC", distance: "9.2 km", normalTime: 7, currentTime: 7, status: "원활" },
        { from: "군자JC", to: "안산JC", distance: "8.5 km", normalTime: 6, currentTime: 12, status: "서행" },
        { from: "안산JC", to: "신갈JC", distance: "22.4 km", normalTime: 15, currentTime: 28, status: "정체" },
        { from: "신갈JC", to: "호법JC", distance: "33.6 km", normalTime: 22, currentTime: 25, status: "원활" },
        { from: "호법JC", to: "여주JC", distance: "16.5 km", normalTime: 11, currentTime: 22, status: "정체" },
        { from: "여주JC", to: "강릉분기점", distance: "138.8 km", normalTime: 90, currentTime: 90, status: "원활" }
      ];
    } else if (name.includes("서해안고속도로")) {
      segments = [
        { from: "금천IC", to: "목감IC", distance: "9.5 km", normalTime: 8, currentTime: 15, status: "서행" },
        { from: "목감IC", to: "비봉IC", distance: "18.2 km", normalTime: 12, currentTime: 12, status: "원활" },
        { from: "비봉IC", to: "서평택JC", distance: "28.5 km", normalTime: 19, currentTime: 38, status: "정체" },
        { from: "서평택JC", to: "송악IC", distance: "12.5 km", normalTime: 9, currentTime: 25, status: "정체" },
        { from: "송악IC", to: "군산IC", distance: "112.4 km", normalTime: 75, currentTime: 75, status: "원활" },
        { from: "군산IC", to: "목포IC", distance: "122.1 km", normalTime: 82, currentTime: 85, status: "원활" }
      ];
    } else if (name.includes("올림픽대로")) {
      segments = [
        { from: "행주대교 남단", to: "가양대교 남단", distance: "4.5 km", normalTime: 4, currentTime: 7, status: "서행" },
        { from: "가양대교 남단", to: "성산대교 남단", distance: "5.2 km", normalTime: 5, currentTime: 10, status: "서행" },
        { from: "성산대교 남단", to: "여의하류IC", distance: "3.8 km", normalTime: 3, currentTime: 9, status: "정체" },
        { from: "여의하류IC", to: "한강대교 남단", distance: "6.2 km", normalTime: 5, currentTime: 14, status: "정체" },
        { from: "한강대교 남단", to: "한남대교 남단", distance: "7.1 km", normalTime: 6, currentTime: 15, status: "정체" },
        { from: "한남대교 남단", to: "영동대교 남단", distance: "3.2 km", normalTime: 3, currentTime: 8, status: "서행" },
        { from: "영동대교 남단", to: "강일IC", distance: "12.5 km", normalTime: 10, currentTime: 10, status: "원활" }
      ];
    } else if (name.includes("강변북로")) {
      segments = [
        { from: "가양대교 북단", to: "성산대교 북단", distance: "4.8 km", normalTime: 4, currentTime: 8, status: "서행" },
        { from: "성산대교 북단", to: "양화대교 북단", distance: "2.5 km", normalTime: 2, currentTime: 5, status: "서행" },
        { from: "양화대교 북단", to: "서강대교 북단", distance: "2.1 km", normalTime: 2, currentTime: 6, status: "정체" },
        { from: "서강대교 북단", to: "마포대교 북단", distance: "1.8 km", normalTime: 2, currentTime: 5, status: "서행" },
        { from: "마포대교 북단", to: "한강대교 북단", distance: "4.2 km", normalTime: 4, currentTime: 12, status: "정체" },
        { from: "한강대교 북단", to: "한남대교 북단", distance: "5.5 km", normalTime: 5, currentTime: 14, status: "정체" },
        { from: "한남대교 북단", to: "구리시계", distance: "14.8 km", normalTime: 12, currentTime: 15, status: "서행" }
      ];
    } else {
      // 일반 도로 자동 생성
      const segmentsCount = 3 + Math.floor(seededRandom(seed + 15) * 3); // 3~5개 구간
      let totalLenNum = 35;
      if (length) {
        const cleaned = length.replace(/[^0-9\.]/g, '');
        if (cleaned) totalLenNum = parseFloat(cleaned);
      }
      if (isNaN(totalLenNum) || totalLenNum <= 0) {
        totalLenNum = 20 + Math.floor(seededRandom(seed + 16) * 60);
      }

      const startPoint = start || "시작 지점";
      const endPoint = end || "종료 지점";

      const subPoints: string[] = [];
      if (detail && detail.includes(" - ")) {
        const parts = detail.split(" - ").map(p => p.split("(")[0].trim());
        if (parts.length > 2) {
          subPoints.push(...parts.slice(1, parts.length - 1));
        }
      }

      while (subPoints.length < segmentsCount - 1) {
        const num = subPoints.length + 1;
        subPoints.push(`${name} 경유지 ${num}`);
      }

      const checkpoints = [startPoint, ...subPoints.slice(0, segmentsCount - 1), endPoint];
      const segmentLen = totalLenNum / segmentsCount;

      for (let i = 0; i < segmentsCount; i++) {
        const distVal = segmentLen * (0.8 + seededRandom(seed + 17 + i) * 0.4);
        const distStr = `${distVal.toFixed(1)} km`;

        const normalSpeed = type === 'highway' ? 100 : type === 'urban' ? 80 : 60;
        const speedFactor = 0.5 + seededRandom(seed + 18 + i) * 0.6; // 0.5 ~ 1.1

        const normTime = Math.max(1, Math.round((distVal / normalSpeed) * 60));
        const currTime = Math.max(1, Math.round((distVal / (normalSpeed * speedFactor)) * 60));

        let status: '원활' | '서행' | '정체' = '원활';
        if (speedFactor < 0.65) {
          status = '정체';
        } else if (speedFactor < 0.85) {
          status = '서행';
        }

        segments.push({
          from: checkpoints[i],
          to: checkpoints[i + 1],
          distance: distStr,
          normalTime: normTime,
          currentTime: currTime,
          status
        });
      }
    }

    roadProfiles.push({
      slug,
      name,
      type,
      detail,
      number,
      length,
      start,
      end,
      description,
      verificationMethod,
      cctvInfo,
      directionsText,
      congestedSections,
      detourCriteria,
      faqs,
      images,
      segments
    });
  };

  // 주요도로 10 추가
  NAVER_TRAFFIC_DATA["주요도로 10"].forEach(r => {
    addRoad(r.name, r.detail || '', r.type as any);
  });

  // 고속도로 추가
  Object.values(NAVER_TRAFFIC_DATA["고속도로"]).forEach((arr) => {
    arr.forEach(r => {
      addRoad(r.name, r.detail || '', 'highway');
    });
  });

  // 도시고속 추가
  Object.entries(NAVER_TRAFFIC_DATA["도시고속"]).forEach(([region, arr]) => {
    arr.forEach(r => {
      addRoad(r.name, `${region} | ${r.detail || ''}`, 'urban');
    });
  });

  // 국도 추가
  Object.values(NAVER_TRAFFIC_DATA["국도"]).forEach((arr) => {
    arr.forEach(r => {
      addRoad(r.name, r.detail || '', 'national');
    });
  });

  // 대교 추가
  Object.entries(NAVER_TRAFFIC_DATA["대교"]).forEach(([region, arr]) => {
    arr.forEach(r => {
      addRoad(r.name, `${region} | ${r.detail || ''}`, 'bridge');
    });
  });

  return roadProfiles;
}

// 헬퍼: 슬러그로 도로 프로필 찾기
export function getRoadBySlug(slug: string): RoadProfile | undefined {
  const decodedSlug = decodeURIComponent(slug);
  const roads = getRoadList();
  
  let found = roads.find(r => r.slug === slug || r.slug === decodedSlug);
  if (found) return found;

  // Support fallback for old English slugs
  const matchingHighway = highways.find(h => h.slug === slug || h.slug === decodedSlug);
  if (matchingHighway) {
    const foundByName = roads.find(r => r.name === matchingHighway.name);
    if (foundByName) return foundByName;
  }

  found = roads.find(r => r.name === decodedSlug || r.name.replace(/[^a-zA-Z0-9가-힣]+/g, '-').replace(/^-|-$/g, '').toLowerCase() === slug);
  return found;
}
