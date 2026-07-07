'use client';

import { useState } from 'react';
import { highways, cctvPoints } from '@/lib/data';
import AdSense from '@/components/AdSense';
import CctvPlayer from '@/components/CctvPlayer';

// 1. 주요도로 10 데이터 정의
const MAJOR_10_ROADS = [
  { name: '경부고속도로', type: 'highway', speed: 92, status: 'smooth', detail: '한남대교-부산', cctvId: 'cctv-gb-01', x: 127.0275, y: 37.5216 },
  { name: '서해안고속도로', type: 'highway', speed: 88, status: 'smooth', detail: '금천-목포', cctvId: 'cctv-sh-01', x: 126.8156, y: 36.9539 },
  { name: '영동고속도로', type: 'highway', speed: 72, status: 'slow', detail: '서창-강릉', cctvId: 'cctv-yd-01', x: 127.2217, y: 37.2417 },
  { name: '수도권제1순환고속도로', type: 'highway', speed: 65, status: 'slow', detail: '일산-판교-퇴계원', cctvId: 'cctv-gb-02', x: 127.1002, y: 37.4011 },
  { name: '올림픽대로', type: 'urban', speed: 48, status: 'slow', detail: '강일-개화', cctvId: 'cctv-gb-01', x: 127.0500, y: 37.5300 },
  { name: '강변북로', type: 'urban', speed: 42, status: 'slow', detail: '구리-가양대교', cctvId: 'cctv-yd-02', x: 126.9800, y: 37.5400 },
  { name: '내부순환로', type: 'urban', speed: 38, status: 'congested', detail: '성산-성동', cctvId: 'cctv-jb-02', x: 127.0000, y: 37.6000 },
  { name: '동부간선도로', type: 'urban', speed: 31, status: 'congested', detail: '의정부-성동', cctvId: 'cctv-gb-03', x: 127.0700, y: 37.6300 },
  { name: '분당수서도시고속화도로', type: 'urban', speed: 52, status: 'slow', detail: '청담-오리', cctvId: 'cctv-gb-02', x: 127.1200, y: 37.4500 },
  { name: '서부간선도로', type: 'urban', speed: 28, status: 'congested', detail: '성산대교-소하', cctvId: 'cctv-sh-02', x: 126.8800, y: 37.4800 }
];

// 2. 도시고속도로 데이터 정의
const URBAN_ROADS = {
  '서울': [
    { name: '올림픽대로', speed: 55, status: 'slow', detail: '행주대교 - 강일IC', cctvId: 'cctv-gb-01', x: 127.0500, y: 37.5300 },
    { name: '강변북로', speed: 48, status: 'slow', detail: '가양대교 - 구리시계', cctvId: 'cctv-yd-02', x: 126.9800, y: 37.5400 },
    { name: '내부순환로', speed: 36, status: 'congested', detail: '성산대교 - 성동JC', cctvId: 'cctv-jb-02', x: 127.0000, y: 37.6000 },
    { name: '동부간선도로', speed: 32, status: 'congested', detail: '수락분기점 - 성동JC', cctvId: 'cctv-gb-03', x: 127.0700, y: 37.6300 },
    { name: '서부간선도로', speed: 29, status: 'congested', detail: '성산대교 남단 - 금천IC', cctvId: 'cctv-sh-02', x: 126.8800, y: 37.4800 },
    { name: '북부간선도로', speed: 64, status: 'slow', detail: '하월곡JC - 신내IC', cctvId: 'cctv-yd-01', x: 127.0500, y: 37.6000 },
    { name: '우면산터널', speed: 78, status: 'smooth', detail: '서초동 - 우면동', cctvId: 'cctv-gb-02', x: 127.0100, y: 37.4700 },
    { name: '신월여의지하도로', speed: 82, status: 'smooth', detail: '신월동 - 여의도', cctvId: 'cctv-sh-01', x: 126.8500, y: 37.5300 }
  ],
  '경기·인천': [
    { name: '분당수서도시고속화도로', speed: 52, status: 'slow', detail: '청담대교 - 성남 오리', cctvId: 'cctv-gb-02', x: 127.1200, y: 37.4500 },
    { name: '분당내곡도시고속화도로', speed: 61, status: 'slow', detail: '내곡동 - 성남 사송', cctvId: 'cctv-yd-02', x: 127.0800, y: 37.4300 },
    { name: '봉담과천로', speed: 78, status: 'smooth', detail: '과천 - 화성 봉담', cctvId: 'cctv-gb-03', x: 126.9700, y: 37.3500 },
    { name: '제2경인연결도로', speed: 88, status: 'smooth', detail: '안양 - 성남 삼동', cctvId: 'cctv-sh-01', x: 126.9500, y: 37.4100 },
    { name: '수석호평로', speed: 90, status: 'smooth', detail: '남양주 수석 - 호평', cctvId: 'cctv-yd-01', x: 127.2200, y: 37.6300 }
  ],
  '충청·대전': [
    { name: '천변도시고속화도로', speed: 84, status: 'smooth', detail: '대전 신대동 - 와동', cctvId: 'cctv-jb-01', x: 127.4100, y: 36.4100 }
  ],
  '전라·광주': [
    { name: '광주제2순환도로', speed: 86, status: 'smooth', detail: '산월JC - 소태IC', cctvId: 'cctv-jb-02', x: 126.8800, y: 35.1500 }
  ],
  '경북·대구': [
    { name: '대구신천대로', speed: 62, status: 'slow', detail: '침산동 - 상동교', cctvId: 'cctv-yd-02', x: 128.6000, y: 35.8800 },
    { name: '앞산터널로', speed: 92, status: 'smooth', detail: '달서구 - 수성구 파동', cctvId: 'cctv-sh-02', x: 128.5800, y: 35.8100 }
  ],
  '경남·부산': [
    { name: '부산번영로', speed: 74, status: 'slow', detail: '구서IC - 부두', cctvId: 'cctv-sh-01', x: 129.0800, y: 35.2000 },
    { name: '동서고가도로', speed: 45, status: 'slow', detail: '사상IC - 감만동', cctvId: 'cctv-gb-01', x: 129.0200, y: 35.1400 },
    { name: '부산관문대로', speed: 81, status: 'smooth', detail: '삼락IC - 부산항', cctvId: 'cctv-yd-01', x: 129.0100, y: 35.1700 },
    { name: '수영강변대로', speed: 58, status: 'slow', detail: '반여동 - 우동', cctvId: 'cctv-jb-01', x: 129.1200, y: 35.2000 }
  ]
};

// 3. 국도 데이터 정의
const NATIONAL_ROADS = {
  '1~20호선': [
    { name: '1호선 국도', speed: 64, status: 'slow', detail: '수원 - 서울 - 파주', cctvId: 'cctv-gb-02', x: 127.0000, y: 37.3000 },
    { name: '3호선 국도', speed: 58, status: 'slow', detail: '성남 - 이천 - 장호원', cctvId: 'cctv-yd-01', x: 127.2000, y: 37.4000 },
    { name: '6호선 국도', speed: 72, status: 'slow', detail: '남양주 - 양평 - 횡성', cctvId: 'cctv-jb-02', x: 127.5000, y: 37.5000 },
    { name: '17호선 국도', speed: 79, status: 'smooth', detail: '용인 - 진천 - 청주', cctvId: 'cctv-jb-01', x: 127.3000, y: 37.1000 },
    { name: '19호선 국도', speed: 83, status: 'smooth', detail: '충주 - 원주 - 홍천', cctvId: 'cctv-yd-02', x: 127.9000, y: 37.2000 }
  ],
  '21~40호선': [
    { name: '21호선 국도', speed: 76, status: 'smooth', detail: '아산 - 천안 - 진천', cctvId: 'cctv-gb-03', x: 127.1500, y: 36.8000 },
    { name: '39호선 국도', speed: 55, status: 'slow', detail: '부천 - 시흥 - 안산', cctvId: 'cctv-sh-01', x: 126.8000, y: 37.4000 },
    { name: '42호선 국도', speed: 68, status: 'slow', detail: '인천 - 시흥 - 안산', cctvId: 'cctv-sh-02', x: 126.7500, y: 37.3000 },
    { name: '43호선 국도', speed: 61, status: 'slow', detail: '화성 - 평택 - 세종', cctvId: 'cctv-gb-01', x: 127.0500, y: 37.0500 }
  ],
  '41~90호선': [
    { name: '45호선 국도', speed: 82, status: 'smooth', detail: '용인 - 안성 - 평택', cctvId: 'cctv-jb-01', x: 127.2000, y: 37.0000 },
    { name: '46호선 국도', speed: 74, status: 'slow', detail: '남양주 - 가평 - 춘천', cctvId: 'cctv-yd-02', x: 127.5000, y: 37.8000 },
    { name: '48호선 국도', speed: 59, status: 'slow', detail: '서울 - 김포 - 강화', cctvId: 'cctv-sh-01', x: 126.5000, y: 37.7000 },
    { name: '77호선 국도', speed: 86, status: 'smooth', detail: '파주 - 자유로 - 김포', cctvId: 'cctv-sh-02', x: 126.7000, y: 37.8000 }
  ]
};

// 4. 대교 데이터 정의
const BRIDGES = {
  '서울': [
    { name: '한강대교', speed: 32, status: 'congested', detail: '용산구 한강로 - 동작구 본동', cctvId: 'cctv-gb-01', x: 126.9600, y: 37.5100 },
    { name: '성수대교', speed: 28, status: 'congested', detail: '성동구 성수동 - 강남구 압구정', cctvId: 'cctv-gb-03', x: 127.0300, y: 37.5300 },
    { name: '마포대교', speed: 38, status: 'congested', detail: '마포구 마포동 - 영등포구 여의도', cctvId: 'cctv-yd-02', x: 126.9300, y: 37.5300 },
    { name: '서강대교', speed: 45, status: 'slow', detail: '마포구 신수동 - 영등포구 여의도', cctvId: 'cctv-sh-02', x: 126.9200, y: 37.5400 },
    { name: '원효대교', speed: 42, status: 'slow', detail: '용산구 원효로 - 영등포구 여의도', cctvId: 'cctv-sh-01', x: 126.9400, y: 37.5200 },
    { name: '한남대교', speed: 31, status: 'congested', detail: '용산구 한남동 - 강남구 신사동', cctvId: 'cctv-gb-01', x: 127.0100, y: 37.5200 },
    { name: '잠실대교', speed: 52, status: 'slow', detail: '광진구 자양동 - 송파구 신천동', cctvId: 'cctv-gb-02', x: 127.0800, y: 37.5300 },
    { name: '영동대교', speed: 24, status: 'congested', detail: '광진구 자양동 - 강남구 청담동', cctvId: 'cctv-gb-03', x: 127.0500, y: 37.5300 },
    { name: '가양대교', speed: 49, status: 'slow', detail: '마포구 상암동 - 강서구 가양동', cctvId: 'cctv-yd-01', x: 126.8600, y: 37.5700 }
  ],
  '경기·인천': [
    { name: '인천대교', speed: 92, status: 'smooth', detail: '인천 중구 운서동 - 연수구 송도동', cctvId: 'cctv-sh-01', x: 126.5000, y: 37.4000 },
    { name: '영종대교', speed: 88, status: 'smooth', detail: '인천 서구 경서동 - 중구 운북동', cctvId: 'cctv-sh-02', x: 126.6000, y: 37.5500 },
    { name: '김포대교', speed: 64, status: 'slow', detail: '김포 고촌 - 고양 토당동', cctvId: 'cctv-gb-02', x: 126.7800, y: 37.6000 },
    { name: '일산대교', speed: 76, status: 'smooth', detail: '김포 걸포동 - 고양 법곳동', cctvId: 'cctv-yd-01', x: 126.6800, y: 37.6700 },
    { name: '서해대교', speed: 82, status: 'smooth', detail: '평택 포승 - 당진 송악', cctvId: 'cctv-sh-01', x: 126.8156, y: 36.9539 }
  ],
  '경남·부산': [
    { name: '광안대교', speed: 71, status: 'slow', detail: '해운대구 우동 - 수영구 남천동', cctvId: 'cctv-sh-01', x: 129.1200, y: 35.1400 },
    { name: '부산항대교', speed: 84, status: 'smooth', detail: '영도구 청학동 - 남구 감만동', cctvId: 'cctv-yd-01', x: 129.0600, y: 35.1000 },
    { name: '거가대교', speed: 88, status: 'smooth', detail: '부산 강서구 천성동 - 거제 장목면', cctvId: 'cctv-jb-01', x: 128.7500, y: 35.0000 },
    { name: '을숙도대교', speed: 86, status: 'smooth', detail: '강서구 명지동 - 사하구 신평동', cctvId: 'cctv-jb-02', x: 128.9200, y: 35.0900 },
    { name: '남항대교', speed: 79, status: 'smooth', detail: '사하구 암남동 - 영도구 영선동', cctvId: 'cctv-sh-02', x: 129.0200, y: 35.0700 }
  ]
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

  // 초성 그룹 매핑 헬퍼 함수
  const getConsonantGroup = (name: string): HighwayGroup => {
    const charCode = name.charCodeAt(0);
    if (charCode >= 44032 && charCode <= 55203) {
      const initialIdx = Math.floor((charCode - 44032) / 588);
      // 초성: 0:ㄱ, 1:ㄲ, 2:ㄴ, 3:ㄷ, 4:ㄸ, 5:ㄹ, 6:ㅁ, 7:ㅂ, 8:ㅃ, 9:ㅅ, 10:ㅆ, 11:ㅇ, 12:ㅈ, 13:ㅉ, 14:ㅊ, 15:ㅋ, 16:ㅌ, 17:ㅍ, 18:ㅎ
      if (initialIdx <= 2) return 'ㄱ~ㄴ';
      if (initialIdx <= 8) return 'ㄷ~ㅂ';
      if (initialIdx <= 11) return 'ㅅ~ㅇ';
      return 'ㅈ~ㅎ';
    }
    return 'ㄱ~ㄴ';
  };

  // 고속도로 데이터 필터링
  const getFilteredHighways = () => {
    return highways
      .map(h => {
        // 기존 CCTV 목록 중 매칭 
        const matchedCctv = cctvPoints.find(c => c.highwaySlug === h.slug) || cctvPoints[0];
        const status = matchedCctv.status;
        const speed = matchedCctv.currentSpeed;
        return {
          name: h.name,
          speed,
          status,
          detail: `${h.start} - ${h.end} (${h.length})`,
          cctvId: matchedCctv.id,
          x: matchedCctv.x,
          y: matchedCctv.y
        };
      })
      .filter(h => getConsonantGroup(h.name) === selectedHighwayGroup);
  };

  return (
    <main className="flex-grow bg-slate-50 pb-24">
      {/* 1. 상단 허브 타이틀 */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-[1240px] px-4">
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block font-mono">TRAFFIC & CCTV HUB PORTAL</span>
          <h1 className="text-2xl md:text-3xl font-black mt-1.5">실시간 전국 교통정보 & CCTV 상황판</h1>
          <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
            네이버 검색 기준의 실시간 도로 소통 현황을 수집하여 고속도로, 도시고속화도로, 일반 국도 및 주요 한강/해상 대교의 평균 소통 속도와 실시간 CCTV 중계를 한곳에 통합 제공합니다.
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
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl shadow-2xs overflow-hidden flex flex-col min-h-[550px]">
          
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
              <span className="text-xs font-bold text-slate-500">⭐️ 서울권 및 주요 고속도로 중 가장 번잡한 10대 동맥 도로</span>
            )}
          </div>

          {/* 소통 리스트 출력 */}
          <div className="p-4 flex-grow overflow-y-auto max-h-[500px] space-y-2">
            {(activeTab === 'major' ? MAJOR_10_ROADS :
              activeTab === 'highway' ? getFilteredHighways() :
              activeTab === 'urban' ? URBAN_ROADS[selectedUrbanRegion] :
              activeTab === 'national' ? NATIONAL_ROADS[selectedNationalGroup] :
              BRIDGES[selectedBridgeRegion]
            ).map((road, idx) => (
              <div 
                key={idx} 
                className={`p-3.5 rounded-xl border flex justify-between items-center transition-all ${selectedCctv?.name === road.name ? 'bg-blue-50 border-blue-300' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-800">{road.name}</span>
                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
                      road.status === 'smooth' ? 'bg-emerald-50 text-emerald-600' :
                      road.status === 'slow' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-500'
                    }`}>
                      {road.status === 'smooth' ? '원활' : road.status === 'slow' ? '서행' : '정체'}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block font-medium">{road.detail}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right font-mono">
                    <span className="text-xs font-black text-slate-800">{road.speed} km/h</span>
                    <span className="text-[9px] text-slate-400 block">평균 속도</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCctv({
                      id: road.cctvId,
                      x: road.x,
                      y: road.y,
                      name: road.name
                    })}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shadow-2xs"
                  >
                    📹 CCTV
                  </button>
                </div>
              </div>
            ))}
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
