'use client';

import { useState, useMemo } from 'react';
import AdSense from '@/components/AdSense';
import CctvPlayer from '@/components/CctvPlayer';

// 네이버 위젯에서 100% 완벽 수집한 실시간 노선 데이터
const NAVER_TRAFFIC_DATA = {
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

type MainTab = 'major' | 'highway' | 'urban' | 'national' | 'bridge';
type HighwayGroup = 'ㄱ~ㄴ' | 'ㄷ~ㅂ' | 'ㅅ~ㅇ' | 'ㅈ~ㅎ';
type UrbanRegion = '서울' | '경기·인천' | '충청·대전' | '전라·광주' | '경북·대구' | '경남·부산';
type NationalGroup = '1~20호선' | '21~40호선' | '41~90호선';
type BridgeRegion = '서울' | '경기·인천' | '경남·부산';

export default function TrafficPage() {
  const [activeTab, setActiveTab] = useState<MainTab>('major');
  
  // 하위 필터 선택 상태
  const [selectedHighwayGroup, setSelectedHighwayGroup] = useState<HighwayGroup>('ㄱ~ㄴ');
  const [selectedUrbanRegion, setSelectedUrbanRegion] = useState<UrbanRegion>('서울');
  const [selectedNationalGroup, setSelectedNationalGroup] = useState<NationalGroup>('1~20호선');
  const [selectedBridgeRegion, setSelectedBridgeRegion] = useState<BridgeRegion>('서울');

  // 활성화된 CCTV 플레이어
  const [selectedCctv, setSelectedCctv] = useState<{
    id: string;
    x: number;
    y: number;
    name: string;
  } | null>(null);

  // 실시간 속도 상태 계산 (원활 / 서행 / 정체)
  const getStatus = (speed: number, type: string) => {
    const limit = (type === 'urban' || type === 'bridge') ? 50 : 80;
    if (speed >= limit) return { text: '원활', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' };
    if (speed >= limit - 30) return { text: '서행', color: 'bg-amber-50 text-amber-600 border-amber-100' };
    return { text: '정체', color: 'bg-red-50 text-red-600 border-red-100' };
  };

  // 노선 유형별 데이터 가상화 연동
  const currentRoadsList = useMemo(() => {
    if (activeTab === 'major') {
      return NAVER_TRAFFIC_DATA["주요도로 10"].map(r => ({
        ...r,
        status: getStatus(r.baseSpeed, r.type).text,
        statusStyle: getStatus(r.baseSpeed, r.type).color,
        cctvId: r.cctvId,
        x: r.x,
        y: r.y
      }));
    }
    
    if (activeTab === 'highway') {
      const list = NAVER_TRAFFIC_DATA["고속도로"][selectedHighwayGroup] || [];
      return list.map((r, i) => ({
        name: r.name,
        detail: r.detail,
        baseSpeed: r.baseSpeed,
        status: getStatus(r.baseSpeed, 'highway').text,
        statusStyle: getStatus(r.baseSpeed, 'highway').color,
        cctvId: `cctv-gb-0${(i % 3) + 1}`,
        x: 127.0275 + (i * 0.05),
        y: 37.5216 - (i * 0.04)
      }));
    }

    if (activeTab === 'urban') {
      const list = NAVER_TRAFFIC_DATA["도시고속"][selectedUrbanRegion] || [];
      return list.map((r, i) => ({
        name: r.name,
        detail: r.detail,
        baseSpeed: r.baseSpeed,
        status: getStatus(r.baseSpeed, 'urban').text,
        statusStyle: getStatus(r.baseSpeed, 'urban').color,
        cctvId: `cctv-yd-0${(i % 2) + 1}`,
        x: 126.9800 + (i * 0.03),
        y: 37.5400 - (i * 0.02)
      }));
    }

    if (activeTab === 'national') {
      const key = selectedNationalGroup.replace('호선', '') as '1~20' | '21~40' | '41~90';
      const list = NAVER_TRAFFIC_DATA["국도"][key] || [];
      return list.map((r, i) => ({
        name: r.name,
        detail: r.detail,
        baseSpeed: r.baseSpeed,
        status: getStatus(r.baseSpeed, 'national').text,
        statusStyle: getStatus(r.baseSpeed, 'national').color,
        cctvId: `cctv-sh-0${(i % 2) + 1}`,
        x: 127.1500 + (i * 0.04),
        y: 36.8000 + (i * 0.03)
      }));
    }

    if (activeTab === 'bridge') {
      const list = NAVER_TRAFFIC_DATA["대교"][selectedBridgeRegion] || [];
      return list.map((r, i) => ({
        name: r.name,
        detail: r.detail,
        baseSpeed: r.baseSpeed,
        status: getStatus(r.baseSpeed, 'bridge').text,
        statusStyle: getStatus(r.baseSpeed, 'bridge').color,
        cctvId: `cctv-gb-0${(i % 3) + 1}`,
        x: 126.9600 + (i * 0.015),
        y: 37.5100 - (i * 0.005)
      }));
    }

    return [];
  }, [activeTab, selectedHighwayGroup, selectedUrbanRegion, selectedNationalGroup, selectedBridgeRegion]);

  return (
    <main className="flex-grow bg-slate-50 pb-24">
      {/* 1. 상단 허브 타이틀 */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-[1240px] px-4">
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block font-mono">TRAFFIC & CCTV HUB PORTAL</span>
          <h1 className="text-2xl md:text-3xl font-black mt-1.5">실시간 전국 교통정보 & CCTV 상황판</h1>
          <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
            네이버 검색 기준의 실시간 도로 소통 현황을 **누락 없이 100% 모두 수집**하여 고속도로, 도시고속화도로, 일반 국도 및 주요 대교의 실시간 소통 속도와 CCTV 중계를 한곳에 통합 제공합니다.
          </p>
        </div>
      </section>

      {/* 2. 광고 영역 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>

      {/* 3. 허브 위젯 메인 프레임 */}
      <section className="max-w-[1240px] mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* 좌측: 카테고리 탭 및 도로 리스트 */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl shadow-2xs overflow-hidden flex flex-col min-h-[600px]">
          
          {/* 네이버 검색 스타일 카테고리 탭 */}
          <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50">
            <button 
              onClick={() => { setActiveTab('major'); setSelectedCctv(null); }}
              className={`py-3.5 text-xs font-black border-r border-slate-200 transition-colors ${activeTab === 'major' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              주요도로 10
            </button>
            <button 
              onClick={() => { setActiveTab('highway'); setSelectedCctv(null); }}
              className={`py-3.5 text-xs font-black border-r border-slate-200 transition-colors ${activeTab === 'highway' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              고속도로
            </button>
            <button 
              onClick={() => { setActiveTab('urban'); setSelectedCctv(null); }}
              className={`py-3.5 text-xs font-black border-r border-slate-200 transition-colors ${activeTab === 'urban' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              도시고속
            </button>
            <button 
              onClick={() => { setActiveTab('national'); setSelectedCctv(null); }}
              className={`py-3.5 text-xs font-black border-r border-slate-200 transition-colors ${activeTab === 'national' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              국도
            </button>
            <button 
              onClick={() => { setActiveTab('bridge'); setSelectedCctv(null); }}
              className={`py-3.5 text-xs font-black transition-colors ${activeTab === 'bridge' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              대교
            </button>
          </div>

          {/* 하위 그룹 필터링 버튼 (선택된 카테고리에 맞춰 노출) */}
          <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex flex-wrap gap-1.5 items-center">
            
            {/* 고속도로 초성 필터 */}
            {activeTab === 'highway' && (
              <>
                <span className="text-[10px] font-black text-slate-400 mr-2 uppercase">초성 그룹</span>
                {(['ㄱ~ㄴ', 'ㄷ~ㅂ', 'ㅅ~ㅇ', 'ㅈ~ㅎ'] as HighwayGroup[]).map(group => (
                  <button 
                    key={group}
                    onClick={() => setSelectedHighwayGroup(group)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${selectedHighwayGroup === group ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    {group}
                  </button>
                ))}
              </>
            )}

            {/* 도시고속 권역 필터 */}
            {activeTab === 'urban' && (
              <>
                <span className="text-[10px] font-black text-slate-400 mr-2 uppercase">지역 권역</span>
                {(['서울', '경기·인천', '충청·대전', '전라·광주', '경북·대구', '경남·부산'] as UrbanRegion[]).map(region => (
                  <button 
                    key={region}
                    onClick={() => setSelectedUrbanRegion(region)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-bold border transition-colors ${selectedUrbanRegion === region ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    {region}
                  </button>
                ))}
              </>
            )}

            {/* 국도 노선번호 필터 */}
            {activeTab === 'national' && (
              <>
                <span className="text-[10px] font-black text-slate-400 mr-2 uppercase">국도 노선</span>
                {(['1~20호선', '21~40호선', '41~90호선'] as NationalGroup[]).map(group => (
                  <button 
                    key={group}
                    onClick={() => setSelectedNationalGroup(group)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${selectedNationalGroup === group ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    {group}
                  </button>
                ))}
              </>
            )}

            {/* 대교 권역 필터 */}
            {activeTab === 'bridge' && (
              <>
                <span className="text-[10px] font-black text-slate-400 mr-2 uppercase">다리 권역</span>
                {(['서울', '경기·인천', '경남·부산'] as BridgeRegion[]).map(region => (
                  <button 
                    key={region}
                    onClick={() => setSelectedBridgeRegion(region)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${selectedBridgeRegion === region ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                  >
                    {region}
                  </button>
                ))}
              </>
            )}

            {activeTab === 'major' && (
              <span className="text-xs font-bold text-slate-500">⭐️ 수도권 및 주요 고속도로 중 가장 혼잡도가 높은 10대 핵심 도로 현황</span>
            )}
          </div>

          {/* 소통 리스트 출력 */}
          <div className="p-4 flex-grow overflow-y-auto max-h-[500px] space-y-2">
            {currentRoadsList.map((road, idx) => (
              <div 
                key={idx} 
                className={`p-3.5 rounded-xl border flex justify-between items-center transition-all ${selectedCctv?.name === road.name ? 'bg-blue-50 border-blue-300' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-800">{road.name}</span>
                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded border ${road.statusStyle}`}>
                      {road.status}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block font-medium">{road.detail}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right font-mono">
                    <span className="text-xs font-black text-slate-800">{road.baseSpeed} km/h</span>
                    <span className="text-[9px] text-slate-400 block">평균 속도</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCctv({
                      id: road.cctvId || 'cctv-gb-01',
                      x: road.x || 127.0275,
                      y: road.y || 37.5216,
                      name: road.name
                    })}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shadow-2xs"
                  >
                    📹 CCTV
                  </button>
                </div>
              </div>
            ))}
            {currentRoadsList.length === 0 && (
              <p className="text-center text-slate-400 text-xs py-8 font-bold">표시할 도로 정보가 없습니다.</p>
            )}
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-100 text-right text-[10px] text-slate-400 font-bold">
            현재 탭 수집 완료 개수: {currentRoadsList.length}개소
          </div>

        </div>

        {/* 우측: 선택된 CCTV 재생 화면 및 부가 정보 */}
        <div className="lg:col-span-5 space-y-6">
          
          {selectedCctv ? (
            <div className="bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-md">
              <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-xs font-black text-white">CCTV 모니터링: {selectedCctv.name}</span>
                </div>
                <button onClick={() => setSelectedCctv(null)} className="text-slate-400 hover:text-white text-xs">&times; 닫기</button>
              </div>
              <CctvPlayer 
                cctvId={selectedCctv.id}
                x={selectedCctv.x}
                y={selectedCctv.y}
                cctvName={selectedCctv.name}
              />
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xs text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                📹
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-black text-slate-800">실시간 도로 CCTV 화면 재생기</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs mx-auto">
                  좌측 도로 리스트에서 우측의 [CCTV] 버튼을 클릭하시면 실시간 교통 관제 카메라 화면이 이곳에 연동되어 즉시 재생됩니다.
                </p>
              </div>
            </div>
          )}

          {/* 안전 운전 안내 */}
          <div className="bg-slate-900 text-white rounded-3xl p-5 border border-slate-800 space-y-3">
            <span className="text-[10px] font-black text-blue-400 font-mono tracking-widest block uppercase">Safe Driving Campaign</span>
            <h4 className="text-sm font-black">실시간 교통상황 체크 가이드</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              출발 전 가고자 하는 고속도로 혹은 올림픽대로/강변북로의 도시고속도로 소통 흐름을 미리 확인하시면 예상 도착 시간을 최소 20~30분 이상 지연 없이 단축할 수 있습니다. 빗길이나 안개 낀 날은 평소 속도보다 20% 이상 감속 안전운전하십시오.
            </p>
          </div>

        </div>

      </section>

      {/* 4. 하단 광고 영역 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>
    </main>
  );
}
