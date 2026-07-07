'use client';

import { useState, useEffect } from 'react';
import { 
  highways, 
  serviceAreas, 
  cctvPoints, 
  travelTimes, 
  incidents,
  ServiceArea,
  getServiceAreasByHighway,
  getCctvPointsByHighway
} from '@/lib/data';
import AdSense from '@/components/AdSense';
import CctvPlayer from '@/components/CctvPlayer';

type TabType = 'incidents' | 'route' | 'highwayStatus' | 'cctv' | 'restAreas';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('incidents');
  const [searchQuery, setSearchQuery] = useState('');
  
  // 경로검색 States
  const [routeFrom, setRouteFrom] = useState('서울');
  const [routeTo, setRouteTo] = useState('부산');
  const [routeResult, setRouteResult] = useState<{
    distanceKm: number;
    currentTimeMin: number;
    toll: number;
    status: string;
  } | null>(null);

  // 노선별교통상황 States
  const [selectedHighwaySlug, setSelectedHighwaySlug] = useState('gyeongbu');
  
  // CCTV검색 States
  const [activeCctvId, setActiveCctvId] = useState<string | null>(null);

  // 휴게시설 필터 States
  const [selectedRegion, setSelectedRegion] = useState<string>('전체');
  const [selectedFacilityFilter, setSelectedFacilityFilter] = useState<string>('전체');
  const [activeRestArea, setActiveRestArea] = useState<ServiceArea | null>(null);

  // GPS 위치기반 근처 휴게소 State
  const [closestAreas, setClosestAreas] = useState<Array<ServiceArea & { distance: number }>>([]);
  const [gpsLoading, setGpsLoading] = useState(false);

  // 1. 경로검색 결과 실시간 계산 시뮬레이션
  const handleRouteSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = travelTimes.find(
      t => (t.from === routeFrom && t.to === routeTo) || (t.from === routeTo && t.to === routeFrom)
    );
    if (found) {
      setRouteResult({
        distanceKm: found.distanceKm,
        currentTimeMin: found.currentTimeMin,
        toll: Math.floor(found.distanceKm * 41.3 + 1200), // 대략적인 요금 공식
        status: found.status
      });
    } else {
      // 매칭값 없을 때 임의 자동 계산
      const dist = 150 + Math.floor(Math.random() * 200);
      setRouteResult({
        distanceKm: dist,
        currentTimeMin: Math.floor(dist * 0.9),
        toll: Math.floor(dist * 41.3 + 1100),
        status: 'smooth'
      });
    }
  };

  // 2. GPS 주변 휴게소 찾기
  const handleGpsSearch = () => {
    if (!navigator.geolocation) {
      alert('이 브라우저는 위치 조회 기능을 제공하지 않습니다.');
      return;
    }
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const mapped = serviceAreas.map(area => {
          const dy = area.latitude - latitude;
          const dx = area.longitude - longitude;
          const dist = Math.sqrt(dx * dx + dy * dy) * 111;
          return { ...area, distance: parseFloat(dist.toFixed(1)) };
        });
        const sorted = mapped.sort((a, b) => a.distance - b.distance).slice(0, 3);
        setClosestAreas(sorted);
        setGpsLoading(false);
        setActiveTab('restAreas'); // 휴게시설 탭으로 강제 이동
      },
      (err) => {
        console.error(err);
        setGpsLoading(false);
        alert('위치 권한 획득에 실패했습니다.');
      }
    );
  };

  // 3. 노선별교통상황 데이터 추출
  const selectedHighway = highways.find(h => h.slug === selectedHighwaySlug) || highways[0];
  const highwayRestAreas = getServiceAreasByHighway(selectedHighway.name);
  const highwayCctvs = getCctvPointsByHighway(selectedHighway.slug);

  // 4. 휴게시설 필터링
  const filteredRestAreas = serviceAreas.filter(area => {
    const matchesRegion = selectedRegion === '전체' || area.name.startsWith(selectedRegion) || area.highwayName.includes(selectedRegion);
    const matchesFacility = selectedFacilityFilter === '전체' || area.facilities.includes(selectedFacilityFilter);
    const matchesQuery = !searchQuery.trim() || 
      area.name.includes(searchQuery) || 
      area.highwayName.includes(searchQuery) ||
      area.signatureMenu.name.includes(searchQuery);
    return matchesRegion && matchesFacility && matchesQuery;
  });

  return (
    <main className="flex-grow bg-slate-100 flex flex-col">
      {/* 최상단 서브 헤더 정보 대시보드 */}
      <div className="bg-white border-b border-slate-200 py-3 shadow-2xs">
        <div className="max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-black text-slate-700">전국 고속도로 실시간 실소통 소요시간 중계 중</span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleGpsSearch} 
              disabled={gpsLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-black px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-2xs"
            >
              {gpsLoading ? '위치 측정중...' : '📍 내 주변 휴게소 즉시찾기'}
            </button>
          </div>
        </div>
      </div>

      {/* 로드플러스 스타일 메인 구조: 좌측 제어판 + 우측 실시간 정보 보드 */}
      <div className="flex-grow max-w-[1240px] w-full mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ==========================================
            좌측 패널 (Roadplus 컨트롤러 사이드바)
           ========================================== */}
        <section className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[600px]">
          {/* 사이드바 메뉴 탭 */}
          <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50">
            <button 
              onClick={() => setActiveTab('incidents')}
              className={`py-3 text-[11px] font-black border-r border-slate-200 transition-colors ${activeTab === 'incidents' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              교통속보
            </button>
            <button 
              onClick={() => setActiveTab('route')}
              className={`py-3 text-[11px] font-black border-r border-slate-200 transition-colors ${activeTab === 'route' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              경로검색
            </button>
            <button 
              onClick={() => setActiveTab('highwayStatus')}
              className={`py-3 text-[11px] font-black border-r border-slate-200 transition-colors ${activeTab === 'highwayStatus' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              노선상황
            </button>
            <button 
              onClick={() => setActiveTab('cctv')}
              className={`py-3 text-[11px] font-black border-r border-slate-200 transition-colors ${activeTab === 'cctv' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              CCTV검색
            </button>
            <button 
              onClick={() => setActiveTab('restAreas')}
              className={`py-3 text-[11px] font-black transition-colors ${activeTab === 'restAreas' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              휴게시설
            </button>
          </div>

          {/* 사이드바 본문 영역 */}
          <div className="p-4 flex-grow overflow-y-auto max-h-[500px]">
            
            {/* 1. 교통속보 탭 */}
            {activeTab === 'incidents' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-black text-slate-800 flex items-center gap-1">
                    🚨 실시간 고속도로 돌발 속보
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400">실시간 자동갱신</span>
                </div>
                <div className="space-y-2.5">
                  {incidents.map((inc) => (
                    <div key={inc.id} className="p-3.5 bg-red-50 border border-red-100 rounded-xl space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-red-600 px-2 py-0.5 rounded-full bg-red-100/50">
                          {inc.type === 'accident' ? '사고' : inc.type === 'construction' ? '작업' : '고장차'}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{inc.startedAt}</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">{inc.highwayName} - {inc.location}</h4>
                      <p className="text-[11px] text-slate-600">{inc.description} ({inc.laneBlocked})</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. 경로검색 탭 */}
            {activeTab === 'route' && (
              <div className="space-y-4">
                <h3 className="text-xs font-black text-slate-800">🛣️ 출발지-목적지 빠른 소요시간 & 요금 예측</h3>
                <form onSubmit={handleRouteSearch} className="space-y-3 bg-slate-50 p-4 border border-slate-200 rounded-xl">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 block mb-1">출발지 (기점)</label>
                      <select 
                        value={routeFrom} 
                        onChange={(e) => setRouteFrom(e.target.value)}
                        className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white font-bold"
                      >
                        <option value="서울">서울</option>
                        <option value="부산">부산</option>
                        <option value="대구">대구</option>
                        <option value="광주">광주</option>
                        <option value="대전">대전</option>
                        <option value="강릉">강릉</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 block mb-1">도착지 (종점)</label>
                      <select 
                        value={routeTo} 
                        onChange={(e) => setRouteTo(e.target.value)}
                        className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 bg-white font-bold"
                      >
                        <option value="부산">부산</option>
                        <option value="서울">서울</option>
                        <option value="대구">대구</option>
                        <option value="광주">광주</option>
                        <option value="대전">대전</option>
                        <option value="강릉">강릉</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs py-2 rounded-lg transition-colors"
                  >
                    경로 검색 및 예측하기
                  </button>
                </form>

                {routeResult && (
                  <div className="bg-slate-900 text-white p-4 rounded-xl space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 rounded-full blur-xl" />
                    <div className="flex justify-between items-center relative z-10">
                      <span className="text-xs font-black">{routeFrom} &rarr; {routeTo}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        routeResult.status === 'smooth' ? 'bg-emerald-500/20 text-emerald-400' :
                        routeResult.status === 'slow' ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {routeResult.status === 'smooth' ? '원활' : routeResult.status === 'slow' ? '서행' : '정체'}
                      </span>
                    </div>
                    <div className="relative z-10 flex justify-between items-end">
                      <div>
                        <span className="text-2xl font-black font-mono">{Math.floor(routeResult.currentTimeMin / 60)}시간 {routeResult.currentTimeMin % 60}분</span>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">총 {routeResult.distanceKm} km</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-black text-blue-400 font-mono">{routeResult.toll.toLocaleString()}원</span>
                        <p className="text-[9px] text-slate-500 mt-0.5">승용차 통행료 기준</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3. 노선상황 탭 */}
            {activeTab === 'highwayStatus' && (
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black text-slate-400 block mb-1">고속도로 노선 선택</label>
                  <select 
                    value={selectedHighwaySlug} 
                    onChange={(e) => setSelectedHighwaySlug(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 font-bold"
                  >
                    {highways.map(h => (
                      <option key={h.slug} value={h.slug}>{h.name} (노선 {h.number}호)</option>
                    ))}
                  </select>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                  <h4 className="text-xs font-black">{selectedHighway.name}</h4>
                  <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono text-slate-400">
                    <p>연장: {selectedHighway.length}</p>
                    <p>구간: {selectedHighway.start} &harr; {selectedHighway.end}</p>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300 border-t border-slate-800 pt-2">{selectedHighway.description}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-slate-700">📍 노선 내 실시간 정보 요약</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-center">
                      <span className="text-[9.5px] font-bold text-slate-400 block">관할 휴게소</span>
                      <span className="text-sm font-black text-slate-800">{highwayRestAreas.length} 개소</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-center">
                      <span className="text-[9.5px] font-bold text-slate-400 block">설치 CCTV</span>
                      <span className="text-sm font-black text-slate-800">{highwayCctvs.length} 대</span>
                    </div>
                  </div>
                  <a 
                    href={`/traffic/${selectedHighway.slug}`}
                    className="block w-full bg-blue-50 hover:bg-blue-100 border border-blue-100 text-blue-700 text-center font-bold text-[11px] py-2 rounded-lg transition-colors"
                  >
                    {selectedHighway.name} 실시간 정체 상황판 열기 &rarr;
                  </a>
                </div>
              </div>
            )}

            {/* 4. CCTV검색 탭 */}
            {activeTab === 'cctv' && (
              <div className="space-y-4">
                <h3 className="text-xs font-black text-slate-800">📹 전국 주요구간 실시간 CCTV 검색</h3>
                <div className="space-y-2">
                  {cctvPoints.map(c => (
                    <button 
                      key={c.id}
                      onClick={() => setActiveCctvId(c.id)}
                      className={`w-full p-3 rounded-xl border text-left transition-colors flex justify-between items-center ${activeCctvId === c.id ? 'bg-blue-50 border-blue-400' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                    >
                      <div>
                        <span className="text-xs font-black block text-slate-800">{c.name} ({c.direction})</span>
                        <span className="text-[10px] text-slate-400 font-mono">{c.highwayName} &middot; Km {c.locationKm}</span>
                      </div>
                      <span className={`text-[10.5px] font-mono font-black ${
                        c.status === 'smooth' ? 'text-emerald-500' : c.status === 'slow' ? 'text-amber-500' : 'text-red-500'
                      }`}>
                        {c.currentSpeed} km/h
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 5. 휴게시설 탭 */}
            {activeTab === 'restAreas' && (
              <div className="space-y-4">
                <div className="space-y-2.5">
                  {/* 검색창 */}
                  <input 
                    type="text" 
                    placeholder="휴게소명 또는 맛집 메뉴 입력"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:border-blue-600 font-medium"
                  />

                  {/* 필터 세트 */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[9.5px] font-bold text-slate-400 block mb-0.5">지역 구분</label>
                      <select 
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="w-full px-2 py-1 text-[11px] rounded border border-slate-200 bg-white font-bold"
                      >
                        <option value="전체">전체 지역</option>
                        <option value="경기">경기권</option>
                        <option value="충북">충북권</option>
                        <option value="충남">충남권</option>
                        <option value="경북">경북권</option>
                        <option value="경남">경남권</option>
                        <option value="전북">전북권</option>
                        <option value="전남">전남권</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9.5px] font-bold text-slate-400 block mb-0.5">핵심 시설</label>
                      <select 
                        value={selectedFacilityFilter}
                        onChange={(e) => setSelectedFacilityFilter(e.target.value)}
                        className="w-full px-2 py-1 text-[11px] rounded border border-slate-200 bg-white font-bold"
                      >
                        <option value="전체">전체 시설</option>
                        <option value="수유실">수유실</option>
                        <option value="샤워실">샤워실</option>
                        <option value="수면실">수면실</option>
                        <option value="전기차충전소">전기차충전소</option>
                        <option value="반려견놀이터">반려견놀이터</option>
                      </select>
                    </div>
                  </div>
                </div>

                {closestAreas.length > 0 && (
                  <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl space-y-1.5">
                    <span className="text-[10px] font-black text-emerald-700 flex items-center gap-1">📍 내 주변 탐색 결과</span>
                    <div className="space-y-1">
                      {closestAreas.map((area, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setActiveRestArea(area)}
                          className="w-full text-left flex justify-between items-center text-xs font-bold text-slate-800 hover:text-blue-600"
                        >
                          <span>{area.name} ({area.directionName})</span>
                          <span className="text-[10px] font-mono text-emerald-600 font-black">{area.distance} km</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10.5px] font-bold text-slate-400">조회 결과 {filteredRestAreas.length}개소</span>
                  </div>
                  <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
                    {filteredRestAreas.slice(0, 30).map((area) => (
                      <button 
                        key={area.slug}
                        onClick={() => setActiveRestArea(area)}
                        className={`w-full p-2.5 rounded-lg border text-left text-xs font-bold transition-all flex justify-between items-center ${activeRestArea?.slug === area.slug ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-white border-slate-100 hover:bg-slate-50 text-slate-800'}`}
                      >
                        <div>
                          <span>{area.name} ({area.directionName})</span>
                          <span className="block text-[9.5px] text-slate-400 font-normal mt-0.5">{area.highwayName}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">휘발유 {area.gasStation.gasolinePrice.toLocaleString()}원</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ==========================================
            우측 패널 (실시간 상황 대시보드 & 모달 디테일)
           ========================================== */}
        <section className="lg:col-span-7 space-y-6">
          
          {/* CCTV 플레이어 활성화시 상황판 상단 자동 팝업 */}
          {activeCctvId ? (
            <div className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-xs font-black">실시간 CCTV 중계 중: {cctvPoints.find(c => c.id === activeCctvId)?.name}</span>
                </div>
                <button onClick={() => setActiveCctvId(null)} className="text-slate-400 hover:text-white text-xs">상황판 닫기 &times;</button>
              </div>
              <CctvPlayer 
                cctvId={activeCctvId} 
                x={cctvPoints.find(c => c.id === activeCctvId)?.x || 127.0}
                y={cctvPoints.find(c => c.id === activeCctvId)?.y || 37.0}
                cctvName={cctvPoints.find(c => c.id === activeCctvId)?.name || ''}
              />
            </div>
          ) : activeRestArea ? (
            /* 휴게소 상세 정보 카드 (Roadplus 휴게소 팝업 완벽 모방) */
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden space-y-4">
              <div className="bg-slate-900 text-white p-5 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold text-blue-400 font-mono tracking-widest block">REST AREA DETAILS</span>
                  <h3 className="text-lg font-black">{activeRestArea.name} ({activeRestArea.directionName})</h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">{activeRestArea.highwayName} &middot; 노선 번호 {highways.find(h => h.name === activeRestArea.highwayName)?.number || '0'}호</p>
                </div>
                <button onClick={() => setActiveRestArea(null)} className="text-slate-400 hover:text-white text-xl font-bold">&times;</button>
              </div>
              
              <div className="p-5 space-y-5">
                {/* 1단계: 유가 및 인프라 상태 */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-center">
                    <span className="text-[10px] font-bold text-slate-400 block">휘발유 최저가</span>
                    <span className="text-sm font-black text-slate-800 font-mono">{activeRestArea.gasStation.gasolinePrice.toLocaleString()}원</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-center">
                    <span className="text-[10px] font-bold text-slate-400 block">경유 최저가</span>
                    <span className="text-sm font-black text-slate-800 font-mono">{activeRestArea.gasStation.dieselPrice.toLocaleString()}원</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-center">
                    <span className="text-[10px] font-bold text-slate-400 block">LPG 충전 여부</span>
                    <span className="text-sm font-black text-slate-800">{activeRestArea.gasStation.lpgPrice ? `${activeRestArea.gasStation.lpgPrice}원` : '없음'}</span>
                  </div>
                </div>

                {/* 2단계: 핵심 편의시설 아이콘 팩 */}
                <div className="space-y-2">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">제공중인 핵심 편의시설</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRestArea.facilities.map((fac, idx) => (
                      <span key={idx} className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
                        {fac}
                      </span>
                    ))}
                    {activeRestArea.gasStation.hasEvCharger && (
                      <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-xs font-bold">
                        ⚡ 전기차 충전소 ({activeRestArea.gasStation.evChargersCount}기)
                      </span>
                    )}
                  </div>
                </div>

                {/* 3단계: 맛집 및 일반 메뉴판 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2 border-slate-100">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">휴게소 식당가 추천 맛집</span>
                    {activeRestArea.signatureMenu.isExFood && (
                      <span className="text-[9.5px] font-black bg-red-100 text-red-600 px-2 py-0.5 rounded">EX-FOOD 공인인증</span>
                    )}
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-slate-800">⭐️ {activeRestArea.signatureMenu.name}</span>
                      <span className="text-xs font-black text-blue-600 font-mono">{activeRestArea.signatureMenu.price.toLocaleString()}원</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">{activeRestArea.signatureMenu.description}</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black text-slate-400 block">기타 메뉴 리스트</span>
                    {activeRestArea.otherMenus.map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs text-slate-600 px-2">
                        <span>{m.name}</span>
                        <span className="font-mono text-slate-400">{m.price.toLocaleString()}원</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 상세 페이지 연결 */}
                <a 
                  href={`/rest-areas/${activeRestArea.slug}`}
                  className="block w-full bg-slate-900 hover:bg-slate-800 text-white text-center font-black text-xs py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  {activeRestArea.name} 종합 실시간 정보 페이지 자세히보기 &rarr;
                </a>
              </div>
            </div>
          ) : (
            /* 디폴트 교통 정보 요약 대시보드 */
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-blue-600 font-mono tracking-wider block">HIGHWAY DASHBOARD</span>
                <h3 className="text-lg font-black text-slate-800">전국 고속도로 실시간 종합 교통상황판</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  좌측 컨트롤러에서 탭을 변경하여 정체구간, 돌발 상황, 맛집, 그리고 CCTV 실시간 연동 화면을 즉시 확인할 수 있습니다.
                </p>
              </div>

              {/* 주요 정적 도시 연동 현황 */}
              <div className="grid grid-cols-2 gap-4">
                {travelTimes.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-slate-700">{t.from} &rarr; {t.to}</span>
                      <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full ${
                        t.status === 'smooth' ? 'bg-emerald-100 text-emerald-700' :
                        t.status === 'slow' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {t.status === 'smooth' ? '원활' : t.status === 'slow' ? '서행' : '정체'}
                      </span>
                    </div>
                    <div>
                      <span className="text-xl font-black font-mono text-slate-900">{Math.floor(t.currentTimeMin / 60)}시간 {t.currentTimeMin % 60}분</span>
                      <p className="text-[10px] text-slate-400 mt-1">지연 소요시간 대비 {t.currentTimeMin - t.normalTimeMin}분 추가</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 주유소 유가 트렌드 요약 */}
              <div className="border-t border-slate-100 pt-5 space-y-3">
                <h4 className="text-xs font-black text-slate-700">⛽️ 알뜰/EX-OIL 전국 주유소 최저가</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">휘발유 최저가 TOP 3</span>
                    <div className="space-y-1">
                      {serviceAreas.slice(0, 3).map((a, idx) => (
                        <div key={idx} className="flex justify-between text-xs font-bold text-slate-700">
                          <span>{idx+1}. {a.name}</span>
                          <span className="font-mono text-blue-600">{a.gasStation.gasolinePrice}원</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">경유 최저가 TOP 3</span>
                    <div className="space-y-1">
                      {serviceAreas.slice(3, 6).map((a, idx) => (
                        <div key={idx} className="flex justify-between text-xs font-bold text-slate-700">
                          <span>{idx+1}. {a.name}</span>
                          <span className="font-mono text-blue-600">{a.gasStation.dieselPrice}원</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 하단 공지형 팁 */}
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-xs text-blue-800 leading-relaxed">
                ℹ️ <strong>교통정보 활용 팁</strong>: 로드플러스 라이브 서비스는 한국도로공사의 표준 데이터 피드와 연동되어 휴게소 맛집(EX-FOOD) 가격과 최신 실시간 유가를 매번 반영하여 재빌드하고 있습니다.
              </div>
            </div>
          )}

          {/* CCTV 맵 플레이스 홀더 또는 추가 정보 카드 */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <span className="text-[9.5px] font-black text-blue-400 font-mono tracking-widest block">EX-TV LIVE BROADCAST</span>
              <h3 className="text-base font-black">24시간 고속도로 실시간 종합 방송 서비스</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                로드플러스 자체 교통방송(exTV)과 연계하여 노선별 실시간 정체 방송, 기상 상황에 따른 특별 속보 방송을 상단 메뉴에서 시청하실 수 있습니다.
              </p>
            </div>
            <a 
              href="/broadcast"
              className="bg-blue-600 hover:bg-blue-500 text-white text-center font-black text-xs py-2 rounded-lg transition-colors inline-block mt-4 relative z-10 w-fit px-4"
            >
              교통방송 채널 입장하기 &rarr;
            </a>
          </div>

        </section>

      </div>

      {/* 하단 광고 영역 */}
      <div className="max-w-[1240px] mx-auto px-4 w-full mb-8">
        <AdSense slot="1122334455" />
      </div>
    </main>
  );
}
