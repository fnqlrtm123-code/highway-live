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
      { name: "신천대로", detail: "대구 북구 침산 - 상동교", baseSpeed: 62 }
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
      { name: "올림픽대교", detail: "광진구 구의동 - 송파구 풍납동", baseSpeed: 55 },
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
  // AEO / GEO 용 맞춤 실제 정보
  verificationMethod: string;
  cctvInfo: string;
  directions: {
    up: string;
    down: string;
  };
  congestedSections: string;
  detourCriteria: string;
  faqs: { q: string; a: string }[];
}

// 헬퍼: 모든 고속도로 및 도로 목록 생성
export function getRoadList(): RoadProfile[] {
  const roadProfiles: RoadProfile[] = [];
  const processedNames = new Set<string>();

  const addRoad = (name: string, detail: string, type: 'highway' | 'urban' | 'national' | 'bridge') => {
    if (processedNames.has(name)) return;
    processedNames.add(name);

    // 1. 고속도로인 경우 기본 highways 데이터와 조인
    const matchedHighway = highways.find(h => h.name === name || name.includes(h.name));
    const slug = matchedHighway ? matchedHighway.slug : name.replace(/[^a-zA-Z0-9가-힣]/g, '-').toLowerCase();

    // 2. 도로 타입별 번호/길이/시종점 파싱
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

    // 3. 실제 교통 상식 및 지리에 맞는 맞춤형 상세 정보 구축
    let description = '';
    let verificationMethod = '';
    let cctvInfo = '';
    let upDir = '';
    let downDir = '';
    let congestedSections = '';
    let detourCriteria = '';
    let faqs: { q: string; a: string }[] = [];

    if (name.includes("경부고속도로")) {
      description = "대한민국 경제 발전을 이끈 상징적인 종축 고속도로로, 서울과 부산을 연결하여 전국 물류와 인적 교류의 핵심 대동맥 역할을 수행합니다.";
      verificationMethod = "경부고속도로의 소통 흐름은 한남대교 남단부터 구서IC에 이르는 전 구간을 대상으로 한국도로공사 로드플러스 API 및 국가교통정보센터(ITS) 교통량 데이터를 대조하여 모니터링합니다.";
      cctvInfo = "주요 관제 카메라는 차량 통행량이 밀집되는 서울요금소, 신갈분기점(JC), 안성나들목(IC), 천안분기점 인근에 촘촘하게 배치되어 실시간 차선 흐름 및 돌발 상황을 송출합니다.";
      upDir = "서울방향 (한남대교 남단 방면)으로 평일 출퇴근 시간 양재~한남 구간 및 일요일 오후 천안~신갈 구간의 정체가 심화됩니다.";
      downDir = "부산방향 (구서IC 방면)으로 토요일 오전 기흥동탄~안성 구간 및 연휴 첫날의 통행량이 압도적으로 집중됩니다.";
      congestedSections = "반포IC~양재IC(강남 구간), 신갈JC~안성IC(경기 남부), 천안JC~청주JC(충청권 병목) 구간이 상습 지정체 구간으로 꼽힙니다.";
      detourCriteria = "기흥~천안 구간 정체 시에는 고속도로를 탈출하여 1번 국도(경기대로) 및 23번 지방도를 이용하는 우회 노선이 시간 단축에 유리합니다.";
      faqs = [
        { q: "경부고속도로 버스전용차로제 운영 시간은 어떻게 되나요?", a: "평일과 주말 오전 7시부터 오후 9시까지 운영되며, 명절 연휴에는 오전 7시부터 다음 날 새벽 1시까지 확대 시행됩니다. 구간은 한남대교 남단부터 신탄진JC(주말은 오산IC)까지입니다." },
        { q: "경부선 주요 정체 시간 피하는 팁이 있나요?", a: "주말의 경우 하행선은 토요일 오전 7시 이전이나 오후 2시 이후, 상행선은 일요일 오전 10시 이전 혹은 오후 9시 이후에 진입하는 것이 정체를 피하는 데 좋습니다." }
      ];
    } else if (name.includes("영동고속도로")) {
      description = "인천 서창분기점과 강릉분기점을 연결하며 수도권 주민들의 영동 지방(강원도) 접근을 책임지는 동서축 핵심 도로입니다. 주말 관광 수요가 매우 높은 노선입니다.";
      verificationMethod = "영동고속도로의 교통 데이터는 수도권 구간인 인천~여주 구간과 강원권 터널 구간의 소요 시간을 한국도로공사 표준 속도 정보 및 통행량 데이터를 기반으로 종합 산출합니다.";
      cctvInfo = "마성터널 진입구, 용인IC 인근, 호법분기점, 여주분기점 등 상습 병목 지점에 설치된 고화질 CCTV를 통해 기상 상황 및 도로 잔해물 여부를 실시간 파악할 수 있습니다.";
      upDir = "인천방향 (서창JC 방면)으로 주말 및 공휴일 일요일 오후 시간대에 강원권에서 서울로 진입하려는 귀경 차량들로 전 구간이 마비되는 경향을 보입니다.";
      downDir = "강릉방향 (강릉JC 방면)으로 금요일 오후 퇴근 시간 및 토요일 오전 시간대에 수도권을 탈출하려는 행락 차량이 대거 몰려 지체가 심해집니다.";
      congestedSections = "신갈JC~용인IC, 호법JC~여주JC 구간이 대표적인 상습 정체 병목 구간이며, 대관령 고개 구간은 안개나 적설로 인한 기상 변수가 잦습니다.";
      detourCriteria = "호법분기점 부근이 완전히 정체될 때는 이천~여주 구간을 42번 국도로 우회하거나 중부고속도로 대신 광주원주고속도로로 우회 진입하는 방법이 가장 효과적입니다.";
      faqs = [
        { q: "강원도 눈길 주행 시 영동고속도로 상황은 어디서 보나요?", a: "대관령 등 고지대 적설 상태는 도로공사 CCTV 화면으로 직접 노면 적설을 확인하는 것이 가장 안전하며, 겨울철에는 스노우타이어나 체인을 반드시 구비해야 합니다." },
        { q: "영동선 버스전용차로제는 운영되나요?", a: "과거 일부 구간에 도입되었으나 현재는 일반 차량의 원활한 소통을 위해 전면 폐지되어 상시 모든 차선을 일반 차량이 이용 가능합니다." }
      ];
    } else if (name.includes("서해안고속도로")) {
      description = "인천 금천구와 전남 목포를 잇는 충청·호남 해안선 연결 벨트로, 서해대교를 포함해 공업 단지 물류 수송 및 주말 서해안 관광 통행을 전담합니다.";
      verificationMethod = "금천IC부터 목포IC에 이르는 341km 노선의 소통 데이터는 특히 서해대교 풍속 정보와 주요 진출입로 통행 속도를 실시간 추적하여 반영합니다.";
      cctvInfo = "서해대교 시점 및 중앙부, 당진IC, 군산휴게소 등 강풍과 해무의 영향이 크고 병목이 심한 구역에 설치된 관제 카메라 피드를 연계합니다.";
      upDir = "서울방향 (금천IC 방면)으로 일요일 오후 당진JC~서평택JC 구간 및 평일 아침 일직JC~금천IC 구간 통입 차선 정체가 심합니다.";
      downDir = "목포방향 (목포IC 방면)으로 금요일 저녁 및 명절 연휴 초입에 서평택IC 부근에서 긴 대기 행렬이 형성됩니다.";
      congestedSections = "서평택JC~서해대교~송악IC(상습 병목), 비봉IC~발안IC, 일직JC~금천IC 구간의 속도 저하 현상이 잦습니다.";
      detourCriteria = "서해대교 구간 정체 시에는 당진IC에서 탈출하여 39번 국도(아산만방조제 방면) 혹은 77번 국도를 이용해 서평택 방향으로 우회 주행할 수 있습니다.";
      faqs = [
        { q: "서해대교는 안개나 강풍 시 통제가 되나요?", a: "네, 가시거리가 10m 미만이거나 평균 풍속이 초속 25m 이상일 경우 차량 통행이 일시적으로 통제되며, 재난 경보는 도로 전광판 및 재난방송을 통해 송출됩니다." }
      ];
    } else if (name.includes("올림픽대로")) {
      description = "김포공항 및 인천국제공항 방향에서 서울 동부 및 강동 지역을 동서로 가르는 서울 교통량 1위의 도시 고속화도로입니다.";
      verificationMethod = "올림픽대로 통행 정보는 서울특별시 교통정보시스템(TOPIS) 및 구간별 지능형 루프 검지기를 통해 수집되는 평속 데이터를 기반으로 합니다.";
      cctvInfo = "가양대교 남단, 한강대교 남단, 한남대교 남단, 청담대교 남단 등 주요 한강 교량 접속부의 진출입 관제 캠을 연동합니다.";
      upDir = "강일IC방향 (동행 방향)으로 퇴근 시간대인 평일 오후 5시~8시 사이에 한남대교 남단에서 영동대교 구간의 정체가 심각합니다.";
      downDir = "행주대교방향 (서행 방향)으로 아침 출근 시간대인 오전 7시~9시 사이에 여의도 주변 및 가양대교 구간의 흐름이 급격히 저하됩니다.";
      congestedSections = "반포대교 남단~영동대교 남단(중앙 정체), 여의하류~동작대교 남단 구간이 대표적입니다.";
      detourCriteria = "출퇴근 집중 정체 시 노들로(일반도로)를 이용하거나 올림픽대로 지하화 우회 차로를 이용해 통과하는 편이 나을 수 있습니다.";
      faqs = [
        { q: "올림픽대로는 24시간 통행 제한이 없나요?", a: "승용차 및 일반 화물차는 제한이 없으나, 10톤 이상의 대형 화물차나 건설 기계는 교통 혼잡 예방을 위해 혼잡 시간 통행 제한 규정이 적용될 수 있으니 미리 확인해야 합니다." }
      ];
    } else if (name.includes("강변북로")) {
      description = "마포구 상암동 가양대교 북단에서 구리시계를 연결하여 강북 지역을 동서로 횡단하는 수도권 주요 간선도로입니다.";
      verificationMethod = "서울시 TOPIS의 실시간 구간 차량 진행 데이터 및 한강 다리 교차점 통계 데이터를 바탕으로 정밀 속도를 제공합니다.";
      cctvInfo = "난지JC, 성산대교 북단, 한강대교 북단, 영동대교 북단 등 강북 주요 진입 교두보의 교통 흐름 관제용 CCTV를 기준으로 합니다.";
      upDir = "구리방향 (동행 방향)으로 평일 오후 성산대교 북단부터 동작대교 북단 부근까지 차선 진입 병목으로 극심한 정체가 빚어집니다.";
      downDir = "일산방향 (서행 방향)으로 오전 출근 시간대 양화대교 북단~가양대교 북단 진입 구간의 차량 속도가 크게 떨어집니다.";
      congestedSections = "마포대교 북단~한남대교 북단 구간이 상시 정체 구간으로 분류됩니다.";
      detourCriteria = "정체 차선 누적 시 올림픽대로나 내부순환로로 경로를 선회하거나 신촌/용산 도심 일반 도로망을 종단 우회하는 것이 효과적입니다.";
      faqs = [
        { q: "강변북로 정체 수준은 다른 도시고속도로와 비교하면 어떤가요?", a: "수도권 도시고속도로 중 평균 주행 속도가 가장 낮은 편에 속하므로, 오전 7시~9시 및 오후 6시~8시에는 가급적 지하철 등 대중교통 이용을 적극 권장합니다." }
      ];
    } else {
      // 일반적인 자동 생성 정보 구축 (AEO / GEO 최적화 규격 부합)
      const typeText = type === 'highway' ? '고속도로' : type === 'urban' ? '도시고속도로' : type === 'national' ? '일반국도' : '대교';
      description = `${name}은(는) ${detail} 구간을 연결하여 지역 물류 및 여객 수송의 중요한 허브 역할을 수행하는 대한민국의 주요 ${typeText} 노선입니다.`;
      verificationMethod = `${name}의 실시간 교통 상태는 국토교통부 국가교통정보센터(ITS) 및 각 관할 지방자치단체의 지능형교통체계(ITS) 데이터를 실시간으로 연동 및 취합하여 소통 속도를 점검합니다.`;
      cctvInfo = `노선 내 설치되어 있는 도로 관리 주체별 고화질 관제용 CCTV 카메라를 통하여 눈길, 빗길 등 도로 표면 기상 상황 및 실시간 노선 장해 요소를 즉각 확인할 수 있습니다.`;
      upDir = `${end || '종점'} 방향으로 이동하는 차선으로, 주로 통근 시간대 및 주말이나 명절 연휴 기간에 진출입 병목 구간 위주로 정체가 심화되는 현상을 보입니다.`;
      downDir = `${start || '기점'} 방향으로 진행하는 차선으로, 주말 및 휴일 오전이나 명절 전반부에 하행 정체 구간이 지속 누적되는 특성이 있습니다.`;
      congestedSections = `인근 대도시 접속 나들목(IC) 부근과 타 간선 도로가 합류하는 주요 분기점(JC) 전방 2~3km 지점에서 속도 저하 현상이 빈번하게 일어납니다.`;
      detourCriteria = `사고나 돌발 장애로 인하여 제한 속도 대비 평속이 30km/h 이하로 유지되는 정체가 15분 이상 이어지는 경우, 인근 우회 국도나 우회 지방도를 이용해 피해 가시는 것을 권장합니다.`;
      faqs = [
        { q: `${name} 교통상황 정보의 갱신 주기는 어떻게 되나요?`, a: "지자체 및 국토교통부 제공 주기인 약 2~5분 간격에 맞추어 실시간으로 교통 속도 및 사고 정보 상황판이 연동되어 업데이트됩니다." },
        { q: "악천후 및 야간 시간 운전 시 주의할 점은 무엇인가요?", a: "기상청 특보(폭우, 폭설, 안개) 발령 시에는 제한 속도보다 20~50% 이상 감속하시고, 앞차와의 안전거리를 충분히(평소의 2배 이상) 유지하여 운행하여야 합니다." }
      ];
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
      directions: {
        up: upDir,
        down: downDir
      },
      congestedSections,
      detourCriteria,
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
  
  // 1. 슬러그가 영문인 경우 직접 매칭
  let found = roads.find(r => r.slug === slug || r.slug === decodedSlug);
  if (found) return found;

  // 2. 슬러그가 한국어 파일명 그대로 들어온 경우 보정 매칭
  found = roads.find(r => r.name === decodedSlug || r.name.replace(/[^a-zA-Z0-9가-힣]/g, '-').toLowerCase() === slug);
  return found;
}
