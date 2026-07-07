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
      { name: "평택시흥고속도로", detail: "서평택 - 군자", baseSpeed: 89 },
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
      { name: "신천대로", detail: "대구 BK 침산 - 상동교", baseSpeed: 62 }
    ],
    "경남·부산": [
      { name: "강변대로", detail: "사상구 삼락 - 다대포", baseSpeed: 78 },
      { name: "거가대로", detail: "거제 송정 - 부산 가덕도", baseSpeed: 86 },
      { name: "관문대로", detail: "삼락IC - 백양터널 - 부산항", baseSpeed: 80 },
      { name: "광안대로", detail: "해운대 우동 - 수영구 남천", baseSpeed: 71 },
      { name: "동서고가로", detail: "사상IC - 감만동", baseSpeed: 45 },
      { name: "번영로", detail: "구서IC - 부두", baseSpeed: 74 },
      { name: "수영강변대로", detail: "반여동 - 우동", baseSpeed: 58 },
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
      { name: "올림픽대교", fill: "광진구 구의동 - 송파구 풍납동", baseSpeed: 55 },
      { name: "원효대교", detail: "용산구 원효로 - 영등포구 여의도동", baseSpeed: 42 },
      { name: "월드컵대교", detail: "마포구 상암동 - 영등포구 양평동", baseSpeed: 50 },
      { name: "잠수교", detail: "반포대교 하단 인도교", baseSpeed: 20 },
      { name: "잠실대교", detail: "광진구 자양동 - 송파구 신천동", baseSpeed: 52 },
      { name: "천호대교", detail: "광진구 광장동 - 강동구 천호동", baseSpeed: 46 },
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
      { name: "수영교", detail: "해운대구 - 수영구 망미동", baseSpeed: 46 },
      { name: "신낙동대교", detail: "사상구 감전동 - 강서구 대저동", baseSpeed: 86 },
      { name: "영도대교", detail: "부산 중구 남포동 - 영도구 대교동", baseSpeed: 38 },
      { name: "원동교", detail: "부산 동래구 안락동 - 해운대구 재송동", baseSpeed: 54 },
      { name: "좌수영교", detail: "부산 수영강 중류 교량", baseSpeed: 44 }
    ]
  }
};

export interface RoadSection {
  level: 'h2' | 'h3';
  title: string;
  content: string;
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
  sections: RoadSection[];
  faqs: { q: string; a: string }[];
}

// 시드 기반의 난수 생성기 (일관성 유지용)
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

// 헬퍼: 모든 고속도로 및 도로 목록 생성
export function getRoadList(): RoadProfile[] {
  const roadProfiles: RoadProfile[] = [];
  const processedNames = new Set<string>();

  const addRoad = (name: string, detail: string, type: 'highway' | 'urban' | 'national' | 'bridge') => {
    if (processedNames.has(name)) return;
    processedNames.add(name);

    const matchedHighway = highways.find(h => h.name === name || name.includes(h.name));
    const slug = matchedHighway ? matchedHighway.slug : name.replace(/[^a-zA-Z0-9가-힣]/g, '-').toLowerCase();

    let length = matchedHighway?.length || '';
    let start = matchedHighway?.start || '';
    let end = matchedHighway?.end || '';
    let number = matchedHighway?.number || '';

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
    let sections: RoadSection[] = [];
    let faqs: { q: string; a: string }[] = [];

    // 수작업 고품질 문서 (경부, 영동, 서해안, 올림픽, 강변북로)
    if (name.includes("경부고속도로")) {
      description = "대한민국 경제 성장의 상징이자 수도권과 영남 지방을 잇는 대동맥인 경부고속도로의 실시간 교통상황 분석과 전용차로제 변경 팩트, 그리고 정체 시 최적의 국도 우회 비결을 총정리해 드립니다.";
      sections = [
        {
          level: 'h2',
          title: '경부고속도로 실시간 소통 흐름 파악법',
          content: '경부고속도로의 소통 흐름은 서울 한남대교 남단부터 부산 구서IC까지의 416km 전 구간을 타깃으로 합니다. 도로공사 로드플러스 교통 제어 센터와 국토교통부 지능형교통체계(ITS)의 데이터 피드를 기반으로 구간별 실시간 평균 주행 속도를 실시간으로 산출해 노출하고 있습니다. 상시 보수 작업 및 낙하물 유고 소식이 있을 경우 주행 안내 대시보드에 즉시 반영됩니다.'
        },
        {
          level: 'h2',
          title: '개정된 경부선 버스전용차로 운영 시간 및 벌점',
          content: '2024년 6월 1일부터 전격 시행된 전용차로 개정안에 따르면 평일과 주말, 공휴일 관계없이 매일 오전 7시부터 오후 9시까지 경부선 전용차로가 적용됩니다. 평일 전용차로 운영 구간은 한남대교 남단부터 안성IC(58.1km)까지이며, 토요일과 일요일 및 공휴일에는 신탄진IC까지 확대 운영됩니다. 설날과 추석 명절 연휴에는 시작 전날부터 마지막 날까지 오전 7시부터 다음 날 새벽 1시까지 장시간 적용되므로 진입에 주의하셔야 합니다.'
        },
        {
          level: 'h2',
          title: '출퇴근 상습 정체 유발구간 분석',
          content: '서울 시계 진입부인 양재IC부터 달래내고개를 거쳐 기흥IC에 이르는 구간은 출퇴근 시간대에 차량이 폭주하며 늘 붉은색 지정체 상황을 보입니다. 또한 천안JC에서 남이JC 구간, 그리고 대구권 금호JC 부근은 중부내륙선 및 중앙선 합류 차량들이 뒤엉키며 병목 지정체가 상습 발생하여 평속이 20~30km/h대로 급락합니다.'
        },
        {
          level: 'h2',
          title: '정체 회피를 위한 용인서울선 및 23번 국도 우회 요령',
          content: '수도권 남부 정체 유발구간 통과 시, 내비게이션 경로 대안으로 용인서울고속도로(헌릉IC 진입)를 경유해 지방도 311호선으로 빠진 뒤 봉담동탄고속도로나 평택화성선으로 우회하는 루트가 고장 정체 상황에서 20~30분 이상을 절약할 수 있는 우수 대안입니다. 동탄 인근에서는 남사진위IC로 이어지는 국지도 23호선 대체 회선도 큰 힘을 발휘합니다.'
        }
      ];
      faqs = [
        {
          q: '경부고속도로 버스전용차로 위반 시 벌점과 과태료는 얼마인가요?',
          a: '일반 승용차 기준 범칙금 6만 원(승합차 7만 원)과 벌점 30점이 부과됩니다. 블랙박스 공익 제보나 도로 감시 카메라에 의해 빈번하게 단속되므로 파란 실선 구간 진입 시 주의를 기울여야 합니다.'
        },
        {
          q: '기상 특보 발생 시 경부선 속도 제한 기준은 어떻게 되나요?',
          a: '폭우, 폭설 등으로 가시거리가 100m 이내이거나 노면 적설량이 2cm 이상일 때는 제한 속도의 50%를 감속해 운행해야 하며, 도로 전광판(VMS)의 가변 제한속도를 확인 준수해야 합니다.'
        }
      ];
    } else if (name.includes("영동고속도로")) {
      description = "수도권과 강원도 동해안 관광 벨트를 일선에서 잇는 핵심 노선이자 주말 행락 차량의 이동 비중이 압도적인 영동고속도로의 소통 흐름과 최근 폐지된 전용차로 소식 및 우회 비결을 소개합니다.";
      sections = [
        {
          level: 'h2',
          title: '영동선 강원도행 통행 지체 양상과 원인',
          content: '영동고속도로는 영동 산간 지방의 관광 벨트 특성이 고스란히 통행량에 투영되는 도로입니다. 금요일 오후와 토요일 오전 강릉 방향으로 향하는 차량들이 신갈분기점 부근과 용인IC 일대에서 큰 흐름 저하를 보이며, 반대로 일요일 오후나 연휴 마지막 날에는 귀경 차량이 대거 몰리며 여주JC에서 호법JC 구간 상행선이 긴 꼬리 정체를 발생시킵니다.'
        },
        {
          level: 'h2',
          title: '영동고속도로 주말 버스전용차로제 폐지 정리',
          content: '기존 신갈분기점부터 여주분기점 구간 주말 및 공휴일에 시범 운용되던 영동고속도로 버스전용차로 제도는 영동선 상습 교통 체증 가중을 해소하려는 정책 결정에 따라 공식적으로 전면 폐지되었습니다. 따라서 영동선은 연휴나 공휴일, 주말 관계없이 모든 차선을 일반 차량이 정상 이용할 수 있어 차선 혼동에 의한 벌점 부과 우려가 사라졌습니다.'
        },
        {
          level: 'h2',
          title: '여주·신갈JC 병목 현상 대처법',
          content: '중부내륙고속도로에서 차량이 대거 쏟아져 나오는 여주분기점 부근과 경부선이 갈라지는 신갈분기점 부근은 속도 편차가 가장 극적으로 발생하는 구역입니다. 급격한 감속 구간에 진입하기 전에 비상등을 켜서 후미 추돌을 막고 미리 진행 차로 방향으로 진입 차선을 잡아 엇갈림 합류 사고를 예방하는 자세가 필요합니다.'
        },
        {
          level: 'h2',
          title: '42번 국도를 활용한 영동선 우회 팁',
          content: '영동선 경기 구간(호법~이천~여주)이 완전히 붉은색 정체 구간으로 표기될 경우, 평행으로 달리는 42번 국도(중부대로)로 진출하여 주행하는 것이 정체 통과 속도를 극복할 수 있는 실질적인 요령입니다. 정체 교차로 대기가 있더라도 시속 10km 미만으로 거북이 운행을 하는 영동선 본선보다 신호등 우회 국도가 이동 효율성 면에서 이득을 주는 경향이 큽니다.'
        }
      ];
      faqs = [
        {
          q: '겨울철 대관령 및 산간 구간 통행 시 눈길 안전 팁은 무엇인가요?',
          a: '대관령터널부터 강릉 방면 내리막 구간은 기온 강하 시 노면 블랙아이스가 급속도로 형성됩니다. 윈터 타이어를 미장착했다면 감속 운행과 안전거리 유지는 물론, 터널 진입 전 사전 감속이 생명선입니다.'
        },
        {
          q: '영동고속도로의 주유소 브랜드 현황은 어떤가요?',
          a: '여주, 문막, 평창 등 주요 휴게소마다 한국도로공사의 알뜰주유소(ex-oil)가 넓게 운영되고 있어 일반 브랜드 정유소에 비해 휘발유 및 경유 단가가 상대적으로 저렴합니다.'
        }
      ];
    } else if (name.includes("서해안고속도로")) {
      description = "서해대교의 경이로운 위용과 충청·호남권 해안 물류를 책임지는 서해안고속도로의 주요 병목 현상 및 서해대교 특유의 기상 통제 한계점, 우회로 선정 가이드를 분석합니다.";
      sections = [
        {
          level: 'h2',
          title: '서해안선 수도권 진입 및 서평택JC 정체 분석',
          content: '서해안고속도로는 아산만, 안면도 등 대규모 서해안 관광 단지 유입 수요에 더해 안산, 시흥, 아산 테크노밸리 등 공단 화물 수송량이 혼합되어 하위 차선의 속도 편차가 유독 큰 도로입니다. 일요일 오후 대중교통 차선이 따로 없는 서해안선 상행은 당진JC에서 서평택JC까지 극심한 정체 터널을 지나게 되며, 평일 출근 타임에는 조남JC 인근부터 일직JC까지 진입 속도가 마비됩니다.'
        },
        {
          level: 'h2',
          title: '서해대교 인근 해무·강풍 통제 기준',
          content: '아산만에 우뚝 솟은 서해대교 구간은 특수 해상 대교로서 해무(바다 안개)와 바닷바람의 강풍 타격을 그대로 수용합니다. 도로공사 안전 매뉴얼 기준 10분 평균 풍속이 25m/s를 초과하거나 가시거리가 안개로 인해 10m 미만으로 수축할 때는 다리 진입로가 차단되며 즉시 통행 제한이 걸립니다. 평속 주행 시에도 돌발 강풍에 대비해 운전대를 움켜쥐어야 합니다.'
        },
        {
          level: 'h2',
          title: '39번 국도(아산만) 우회 도로 설정 가이드',
          content: '서해대교 남단 송악IC 부근에서 정체나 유고 사고 경보가 전광판에 표출될 때는 주저 없이 당진IC로 내려가 38번 국도를 탄 후 아산만방조제 방면 39번 국도로 갈아타 평택항 배후 도로를 경유, 서평택IC 방향으로 돌아 올라가는 코스가 서해대교 주차장 대기를 피할 수 있는 지름길입니다.'
        }
      ];
      faqs = [
        {
          q: '서해안선 주행 중 강풍을 만나면 차량 제어는 어떻게 하나요?',
          a: '차고가 높은 SUV나 RV, 화물차는 측면 횡풍에 취약해 차선 이탈 위험이 큽니다. 풍속 경보 시에는 속도를 20% 이상 내리고 두 손으로 운전대를 차선 중심 방향으로 지탱해야 안전합니다.'
        },
        {
          q: '서해대교 구간 사고 다발 구역은 어디인가요?',
          a: '안개가 잦은 시기의 주탑 부근과 당진 방향 내리막 종단 곡선 지점으로, 시야 미확보에 의한 연쇄 추돌 위험이 높으므로 비상등 점멸 대응이 생활화되어야 합니다.'
        }
      ];
    } else if (name.includes("올림픽대로")) {
      description = "서울 도심 동서를 관통하는 최다 교통량의 젖줄, 올림픽대로의 정체 흐름 양상과 장마철 상습 침수 통제 대책, 여의도 정체 극복 우회 루트를 공유합니다.";
      sections = [
        {
          level: 'h2',
          title: '서울 동서 축의 중추 올림픽대로 흐름 진단',
          content: '김포공항에서 출발해 잠실을 거쳐 강동구 강일IC까지 관통하는 올림픽대로는 24시간 중 한밤중을 제외하고는 언제나 차량 통행 밀집도가 매우 높은 서울 도심 동맥입니다. 강남권 주요 한강 다리 남단 진입로(한남대교 남단, 영동대교 남단) 부근은 다리로 진입하려는 우회 차선과 올림픽대로 본선 직진 차량 간의 극렬한 차선 변경 충돌 엇갈림이 정체의 최대 요인입니다.'
        },
        {
          level: 'h2',
          title: '노들로 입체 교차로를 활용한 여의도 정체 우회 비결',
          content: '가양대교부터 노량진, 여의도 일대의 올림픽대로 본선 흐름이 가다 서다를 반복할 때, 올림픽대로 바로 남단에서 보조하는 왕복 6차선 일반 도로인 노들로를 활용하는 방법은 고수 운전자들의 우회 노선입니다. 신호 대기가 정비되어 있고 흐름이 분산되므로 노들로로 진입해 특정 구간 정체를 패싱한 뒤 재합류하는 것이 유용합니다.'
        },
        {
          level: 'h2',
          title: '장마철 올림픽대로 침수 통제 대처법',
          content: '매년 집중호우가 쏟아지는 여름철, 여의상·하류IC 진출입 램프와 반포대교 남단 지하차도 구간은 한강 수위 상승과 팔당댐 초당 방류량 조절에 민감하게 반응하여 서울에서 가장 먼저 도로 전면 통제가 이루어지는 저지대 취약부입니다. 폭우 경보 시에는 올림픽대로를 버리고 남부순환로로 회피해야 통제에 갇히지 않습니다.'
        }
      ];
      faqs = [
        {
          q: '올림픽대로에도 버스전용차로가 적용되나요?',
          a: '아니요, 올림픽대로는 도시고속화도로로 분류되지만 경부선처럼 버스전용차로가 설치되어 있지 않아 모든 차선에서 모든 일반 차량의 통행이 자유롭습니다.'
        },
        {
          q: '올림픽대로 긴급 상황 대비용 대피소는 어디인가요?',
          a: '일부 구간 갓길 폭이 매우 좁으므로 부득이한 차량 고장 시에는 승객을 데리고 가드레일을 넘어 한강공원 인근의 안전한 보도 구역으로 우선 피해야 대형 2차 사고를 막을 수 있습니다.'
        }
      ];
    } else if (name.includes("강변북로")) {
      description = "성산대교에서 한남대교를 거쳐 구리 아천JC로 연결되는 한강 북쪽의 대표 동서 연결 축 강변북로의 차로 지정체 원인과 분기점 병목 탈출법을 종합 안내해 드립니다.";
      sections = [
        {
          level: 'h2',
          title: '강북 주요 동맥 강변북로의 차로 지체 분석',
          content: '강변북로는 강북 지역의 경제 활동을 책임지는 축입니다. 출근 시간대인 오전 7시부터 9시 반까지는 서쪽인 일산 방향 성산대교~가양대교 구간의 정체가 두드러지며, 퇴근 시간대인 오후 6시부터 8시 사이에는 동쪽 구리 방향 마포대교 북단부터 영동대교 북단까지 차선이 주차장 수준으로 혼잡해져 정체 터널을 형성하게 됩니다.'
        },
        {
          level: 'h2',
          title: '성산대교 북단 및 한남대교 북단 병목지점 극복법',
          content: '성산대교 북단은 내부순환로 하부 합류부 진입과 마포구 진출 차량의 차로 뒤엉킴이 극심하고, 한남대교 북단은 남산터널 진입 방향으로 우회전하려는 차량들이 본선을 침범하며 병목 현상이 누적됩니다. 해당 상습 병목에 도달할 때는 정체가 덜한 1, 2차로를 이용해 통과하거나, 애초에 진로를 정하여 합류 흐름에 방해 없이 차분하게 끼어드는 방어 운전이 속도를 살리는 비결입니다.'
        },
        {
          level: 'h2',
          title: '내부순환로 교차 구간 우회 전략',
          content: '강변북로 용산 구간이 완전히 마비되었을 경우 마포구나 서대문구 진입 시 도심을 관통하는 율곡로나 서소문로 같은 일반 도로망으로 분산 주행하거나 내부순환로 정릉 방면으로 진입 경로를 돌려 성북/노원 지역으로 진입하는 코스 선회가 효과적일 수 있습니다.'
        }
      ];
      faqs = [
        {
          q: '강변북로 구간 속도 제한 단속 카메라는 주로 어디에 있나요?',
          a: '마포대교 북단, 한남대교 북단, 뚝섬 인근 등 정체가 해소되어 속도가 나기 쉬운 직선 터널 구간 위주로 무인 과속 단속 카메라(시속 70~80km 제한)가 운용 중이므로 계기판 속도 체크가 필요합니다.'
        },
        {
          q: '강변북로 주행 중 사고 예방을 위해 조심할 차선은?',
          a: '오른쪽 진출 차로 대기 행렬이 본선까지 길게 꼬리를 무는 마포대교, 영동대교 진출로 부근입니다. 갑작스러운 전방 급정거 차량이 속출하므로 앞차 브레이크등 점멸 여부를 유심히 모니터링해야 합니다.'
        }
      ];
    } else {
      // 그 외 140여 개의 일반 도로는 '공장에서 찍어내듯 기계적으로 빌드된 느낌'을 없애기 위해
      // 도로명(name)을 활용한 시드 기반의 완벽한 텍스트 변동성 생성기 작동 (Deterministic Randomization)
      const seed = getSeed(name);
      
      const typeText = type === 'highway' ? '고속도로' : type === 'urban' ? '도시고속도로' : type === 'national' ? '일반국도' : '대교';
      
      // 3가지 고유한 문체 템플릿 풀 제공
      const descIndex = Math.floor(seededRandom(seed + 1) * 3);
      const verifyIndex = Math.floor(seededRandom(seed + 2) * 3);
      const cctvIndex = Math.floor(seededRandom(seed + 3) * 3);
      const flowIndex = Math.floor(seededRandom(seed + 4) * 3);
      const bottleneckIndex = Math.floor(seededRandom(seed + 5) * 3);
      const detourIndex = Math.floor(seededRandom(seed + 6) * 3);
      const faqSetIndex = Math.floor(seededRandom(seed + 7) * 3);

      const descPool = [
        `${name}은(는) 기점인 ${start || '기존 시점'}에서 종점인 ${end || '해당 종점'} 구간을 연계하여 지역 경제 발전과 주민 소통을 돕는 필수 교통망입니다. 특히 ${detail} 구간의 혼잡 및 기상 변화 정보를 정확히 파악하여 안전사고 예방에 유의해야 합니다.`,
        `대한민국의 중심 교통망 중 하나인 ${name}은(는) ${typeText}로 분류되며, 물류 운송 차량과 지역 간 통근 차량의 통행 비중이 높은 핵심 이동 통로입니다. 본 도로의 주행 특성과 최신 교통 꿀팁을 전해드립니다.`,
        `${name}(노선 경로: ${detail})은(는) 상시 통행량이 일정한 구역과 합류 병목으로 일시 지체가 잦은 구역이 혼재되어 있습니다. 주행을 개시하기 전에 노선 상태를 종합 분석하시는 것이 유용합니다.`
      ];

      description = descPool[descIndex];

      const verifyPool = [
        `본 노선의 소통 데이터 측정은 국토교통부 표준 교통정보시스템(ITS) 및 한국도로공사의 도로별 지능형 측정 검지 데이터를 기반으로 실시간 소집 및 가공됩니다. 노면 평속 편차를 통계 내어 안전 정보를 즉각 수록하고 있습니다.`,
        `${name}의 실제 정체 수준은 각 구간에 매설된 루프 검지기와 톨게이트 진행 평속 데이터를 교차 연계하여 산출합니다. 예측 정확도를 높이기 위해 기상청 돌발 날씨 특보 데이터도 상호 필터링하고 있습니다.`,
        `본 포털의 정보망은 ${name}을(를) 통과하는 차량들의 실시간 교통 정보 피드백 및 표준 도로 센서 모니터링 정보를 바탕으로 완성됩니다. 돌발 정체 구간 발생 시 즉각 속도 저하 분석 레이더에 추적됩니다.`
      ];

      const cctvPool = [
        `사고 예방을 위해 노선 전 구간의 상습 사고 다발점과 터널 초입 등에 고해상도 교통 관제용 모니터링 카메라가 운용되고 있습니다. 급작스러운 기상 이변(집중 폭우, 돌발 적설, 도로 해무) 발생 시 모니터링 화면으로 미리 파악하시는 것이 안전합니다.`,
        `주요 교량 및 교차부, 나들목 분기 구역에 설치된 도로 안전 CCTV를 실시간 연동하여 도로 소통 제어에 활용하고 있습니다. 야간 운행 전 안개 유무와 노면 파손 징후 등을 간접 검토해 추돌 위험을 선제적으로 예방하십시오.`,
        `터널 통과점이나 지대 변화가 심한 오르막 감속 구간을 중심으로 노면 상태 확인용 CCTV 카메라가 촘촘히 운용 중입니다. 노선 진입을 시작하기 전에 모니터링 관제 지도 데이터 정보를 필히 확인하시기를 권장합니다.`
      ];

      const flowPool = [
        `본 노선은 방향에 따라 정체 특성이 갈립니다. 상행선(${end || '종점'} 방면)의 경우 주로 퇴근 및 귀경 타임에 차량 정체가 도드라지며, 하행선(${start || '기점'} 방면)은 아침 출근 타임과 주말 전반부에 혼잡도가 몰리는 성향이 뚜렷합니다.`,
        `도로 방향별 소통 주기는 일정한 대칭성을 보입니다. 주중 평일에는 도시 중심부로 진입하는 상행 차선에 통근 트래픽이 완전히 몰려 시속 30km 이하로 서행할 가능성이 크고, 주말에는 교외로 빠지는 하행 방향 진입 속도가 다소 더뎌집니다.`,
        `노선의 주행 방향에 따라 합류 요령이 달라집니다. 기종점인 ${start || '기점'} 및 ${end || '종점'} 주변에서는 특히 출입 램프 대기열이 본선 4차선까지 늘어져 급감속 추돌 사고가 발생하기 쉬우므로 서행 주행 차선 파악이 필수입니다.`
      ];

      const bottleneckPool = [
        `특히 인근 다른 노선들과 연계되는 교차로(IC) 및 고속 간선망 분기점(JC) 전방 약 1~2km 반경은 차선 변경 엇갈림으로 인해 극심한 속도 저하 현상이 빚어지므로 사전 100m 전방에서 무리한 끼어들기를 피하고 유도선을 따라 안전 주행해야 합니다.`,
        `주요 요금소(TG) 및 차로 축소 구간(병목 지대) 진입 시에는 차량들의 감속 통행이 동시다발적으로 누적되어 정체가 자연스럽게 전파되므로 비상 점멸등을 조기에 작동해 후행 차량에 상황을 예고하는 것이 좋습니다.`,
        `도시 진출입 허브 역할을 수행하는 램프 구간과 신호 대기 구간 초입은 차량들의 교차 혼잡도가 상시 임계점에 달하므로 주행 시 갑작스러운 차선 급변경 차량에 대비하여 전방 방어 시야를 충분히 확보해야 합니다.`
      ];

      const detourPool = [
        `만약 본선의 평균 주행 속도가 현저히 정체되어 통상 제한 속도 대비 30% 이하로 흐름이 단절되는 경우에는 인근 교차로를 통해 대체 일반 국도나 지방 도로망으로 진로를 신속히 전환하여 이동 거리를 우회하시는 편이 현명한 대안입니다.`,
        `교통 체증 경보가 도로 가변정보 전광판(VMS)에 붉은 문구로 상시 표출될 때는 주저하지 말고 모바일 내비게이션의 대체 국도 경로 소요 시간을 본선 소요 시간과 비교 분석하여 경로 변경 지점을 조기에 확정하십시오.`,
        `정체가 누적되어 대기 시간이 20분 이상 지체될 것으로 연산되는 특수한 상황에서는 통행료 감면 혜택이나 지름길 우려와는 무관하게 우회 도로 안내 유도판을 따라 우회 경로로 이탈 주행하시는 것을 적극 조언해 드립니다.`
      ];

      const h2SetsPool = [
        [
          `1. ${name} 교통 체증 및 소통 흐름 모니터링 노하우`,
          `2. ${name} 상행선·하행선 차선별 혼잡 시간대 가이드`,
          `3. ${name} 상습 정체 구간과 나들목(IC) 진입 병목 해결 요령`,
          `4. 지정체 해소를 위한 우회도로 탐색 및 내비게이션 팁`
        ],
        [
          `1. ${name} 실시간 정체 요인 및 현장 모니터링 분석`,
          `2. ${name} 기점과 종점 기준 방향별 이동 팁`,
          `3. 합류점 분기점(JC) 부근 정체와 사고 위험 구역 정리`,
          `4. 통행 속도 저하 시 국도 대체 경로 우회 가이드`
        ],
        [
          `1. ${name} 노선별 통행량 변화 추이 및 속도 점검 요령`,
          `2. 상행선 및 하행선 주요 정체 지점 비교 분석`,
          `3. 나들목 진출입 차량 엇갈림 현상 방지 안전 팁`,
          `4. 가변 정보 전광판(VMS) 안내를 활용한 우회 경로 선택`
        ]
      ];

      const selectedH2s = h2SetsPool[faqSetIndex];

      sections = [
        { level: 'h2', title: selectedH2s[0], content: verifyPool[verifyIndex] },
        { level: 'h2', title: selectedH2s[1], content: flowPool[flowIndex] },
        { level: 'h2', title: selectedH2s[2], content: bottleneckPool[bottleneckIndex] },
        { level: 'h2', title: selectedH2s[3], content: detourPool[detourIndex] }
      ];

      const faqPool = [
        [
          { q: `${name} 교통 정보는 얼마나 자주 갱신되나요?`, a: "지자체 관제 정보 센터 피드 업데이트 주기에 맞춰 약 3분 단위로 실시간 교통 상황 데이터가 재연산되어 갱신 처리됩니다." },
          { q: "폭우나 눈길 등 기상 재해 통행 기준은 어떻게 확인합니까?", a: "기상청 특보 발효 시 도로 관리 주체에서 VMS 및 긴급 문자 메시지를 통해 도로 통제 여부를 즉각 알리며, 안전 운행을 위해 규정 감속 주행을 필히 수행해야 합니다." }
        ],
        [
          { q: `${name} 주행 중 차량 낙하물이나 사고를 발견하면 어떻게 대처합니까?`, a: "즉시 비상등을 켜 주위 차량에 알린 뒤 비상 갓길로 정차하여 도로교통 민원 콜센터(110) 혹은 도로관리청 긴급 상황 접수실에 지점 위치를 신고해야 2차 추돌을 막을 수 있습니다." },
          { q: "야간 및 새벽 운전 시의 위험 요인은 무엇인가요?", a: "가로등 배치가 부족한 도로 외곽 구간이나 터널 접속 부근은 블랙아이스와 짙은 밤안개의 위험이 크므로 전조등 외에 안개등을 키고 평속 대비 20% 감속 주행이 필요합니다." }
        ],
        [
          { q: `${name}에서 사고가 나면 무료 견인이 가능한가요?`, a: "도로공사 관리 구간인 고속도로는 1588-2504를 통해 무상으로 긴급 대피 무료 견인을 제공받을 수 있으며, 일반 지자체 도로의 경우 보험사 긴급 견인 특약을 신속히 호출해야 합니다." },
          { q: "정체 분석 데이터를 보다 정밀하게 볼 수 있는 팁은?", a: "주변 도로 상황판 분석용 전광 표지판의 구간 예상 소요 시간 표기를 상호 관찰하고 앞서가는 차량의 진행 방향 쏠림도를 파악해 주행 흐름을 예측하는 것이 좋습니다." }
        ]
      ];

      faqs = faqPool[faqSetIndex];
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
      sections,
      faqs
    });
  };

  // 주요도로 10 추가
  NAVER_TRAFFIC_DATA["주요도로 10"].forEach(r => {
    addRoad(r.name, r.detail, r.type as any);
  });

  // 고속도로 추가
  Object.values(NAVER_TRAFFIC_DATA["고속도로"]).forEach((arr) => {
    arr.forEach(r => {
      addRoad(r.name, r.detail, 'highway');
    });
  });

  // 도시고속 추가
  Object.entries(NAVER_TRAFFIC_DATA["도시고속"]).forEach(([region, arr]) => {
    arr.forEach(r => {
      addRoad(r.name, `${region} | ${r.detail}`, 'urban');
    });
  });

  // 국도 추가
  Object.values(NAVER_TRAFFIC_DATA["국도"]).forEach((arr) => {
    arr.forEach(r => {
      addRoad(r.name, r.detail, 'national');
    });
  });

  // 대교 추가
  Object.entries(NAVER_TRAFFIC_DATA["대교"]).forEach(([region, arr]) => {
    arr.forEach(r => {
      addRoad(r.name, `${region} | ${r.detail}`, 'bridge');
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

  found = roads.find(r => r.name === decodedSlug || r.name.replace(/[^a-zA-Z0-9가-힣]/g, '-').toLowerCase() === slug);
  return found;
}
