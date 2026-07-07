'use client';

import { useState, useEffect } from 'react';
import { 
  highways, 
  serviceAreas, 
  cctvPoints, 
  travelTimes, 
  incidents,
  ServiceArea
} from '@/lib/data';
import AdSense from '@/components/AdSense';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoute, setSelectedRoute] = useState({ from: '서울', to: '부산' });
  const [closestAreas, setClosestAreas] = useState<Array<ServiceArea & { distance: number }>>([]);
  const [locationStatus, setLocationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [activeFacilityTab, setActiveFacilityTab] = useState<'baby' | 'shower' | 'sleep' | 'dog'>('baby');

  // 1. 전국 정체 구간 TOP 5 추출 (현재 속도가 가장 낮은 순서)
  const congestedSections = [...cctvPoints]
    .sort((a, b) => a.currentSpeed - b.currentSpeed)
    .slice(0, 5);

  // 2. 주유소 최저가 휴게소 추출
  const cheapestGasoline = [...serviceAreas]
    .sort((a, b) => a.gasStation.gasolinePrice - b.gasStation.gasolinePrice)
    .slice(0, 3);

  const cheapestDiesel = [...serviceAreas]
    .sort((a, b) => a.gasStation.dieselPrice - b.gasStation.dieselPrice)
    .slice(0, 3);

  // 3. 전기차 충전 기수 가장 많은 휴게소 추출
  const bestEvAreas = [...serviceAreas]
    .filter(s => s.gasStation.hasEvCharger)
    .sort((a, b) => b.gasStation.evChargersCount - a.gasStation.evChargersCount)
    .slice(0, 3);

  // 4. 기기 위치 기반 주변 휴게소 찾기 (WOW 기능)
  const findClosestServiceAreas = () => {
    if (!navigator.geolocation) {
      setLocationStatus('error');
      alert('이 브라우저는 위치 정보 조회를 지원하지 않습니다.');
      return;
    }

    setLocationStatus('loading');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // 각 휴게소와의 도(degree) 기반 단순 거리 계산
        const listWithDistance = serviceAreas.map(area => {
          const dy = area.latitude - latitude;
          const dx = area.longitude - longitude;
          const dist = Math.sqrt(dx * dx + dy * dy) * 111; // 대략적인 km 환산
          return { ...area, distance: parseFloat(dist.toFixed(1)) };
        });

        // 가장 가까운 순서로 정렬하여 상위 3개 설정
        const sorted = listWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 3);
        setClosestAreas(sorted);
        setLocationStatus('success');
      },
      (error) => {
        console.error(error);
        setLocationStatus('error');
        alert('위치 정보를 가져올 수 없습니다. 권한 설정을 확인하세요.');
      }
    );
  };

  // 5. 편의시설 필터링 리스트
  const getRestAreasByFacility = (facilityName: string) => {
    return serviceAreas.filter(s => s.facilities.includes(facilityName)).slice(0, 4);
  };

  // 6. 전체 통합검색 자동완성 필터
  const filteredHighways = searchQuery.trim() 
    ? highways.filter(h => h.name.includes(searchQuery) || h.number.includes(searchQuery))
    : [];

  const filteredRestAreas = searchQuery.trim()
    ? serviceAreas.filter(s => s.name.includes(searchQuery) || s.signatureMenu.name.includes(searchQuery))
    : [];

  return (
    <main className="flex-grow bg-slate-50 pb-24">
      
      {/* ==========================================
          상단 대시보드형 상단 섹션 (히어로 섹션 배제)
         ========================================== */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="mx-auto max-w-[1240px] px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 좌측: 실시간 국도/고속도로 교통 요약 대시보드 */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 교통 타이틀 */}
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
              <h2 className="text-[17px] font-black text-slate-800 tracking-tight uppercase font-mono">
                Highway Real-time Status Center
              </h2>
              <span className="text-[11px] font-bold text-slate-400 font-mono">업데이트: 실시간 중계중</span>
            </div>

            {/* 주요 도시 간 실시간 소요 시간 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {travelTimes.slice(0, 3).map((t, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-[14px] font-black">{t.from} &rarr; {t.to}</span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      t.status === 'smooth' ? 'bg-emerald-500/20 text-emerald-400' :
                      t.status === 'slow' ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {t.status === 'smooth' ? '원활' : t.status === 'slow' ? '서행' : '정체'}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <span className="text-3xl font-black font-mono tracking-tight">{Math.floor(t.currentTimeMin / 60)}시간 {t.currentTimeMin % 60}분</span>
                    <p className="text-[10.5px] text-slate-500 font-mono mt-1">평소 대비 {t.currentTimeMin - t.normalTimeMin}분 지연 &middot; {t.distanceKm}km</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 주요 노선 빠른 바로가기 버튼 */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-black text-slate-500 mr-2 shrink-0">📊 주요 노선 상황판:</span>
              {highways.map(h => (
                <a 
                  key={h.slug}
                  href={`/traffic/${h.slug}`}
                  className="bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shadow-2xs"
                >
                  {h.name}
                </a>
              ))}
            </div>

            {/* 이동 계획 도구 (출발지/도착지 입력) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3 border-slate-100">
                <h3 className="text-[14.5px] font-black text-slate-900 flex items-center gap-1.5">
                  🛣️ 실시간 경로 소요시간 & 통행료 예측
                </h3>
                <span className="text-[11px] font-bold text-slate-400">전국 기종점 정보</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">출발 도시</label>
                  <select 
                    value={selectedRoute.from} 
                    onChange={(e) => setSelectedRoute({ ...selectedRoute, from: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50 font-bold text-slate-800"
                  >
                    <option value="서울">서울 (Seoul)</option>
                    <option value="부산">부산 (Busan)</option>
                    <option value="광주">광주 (Gwangju)</option>
                    <option value="대전">대전 (Daejeon)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">도착 도시</label>
                  <select 
                    value={selectedRoute.to} 
                    onChange={(e) => setSelectedRoute({ ...selectedRoute, to: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50 font-bold text-slate-800"
                  >
                    <option value="부산">부산 (Busan)</option>
                    <option value="서울">서울 (Seoul)</option>
                    <option value="강릉">강릉 (Gangneung)</option>
                    <option value="대전">대전 (Daejeon)</option>
                  </select>
                </div>
                <a 
                  href={`/toll/${selectedRoute.from === '서울' && selectedRoute.to === '부산' ? 'seoul-to-busan' : 'seoul-to-busan'}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs text-center transition-colors"
                >
                  최적 경로 및 요금 예측 조회 &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* 우측: 내 주변 휴게소 찾기 및 검색바 */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 통합 검색바 */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-800 block">🔍 휴게소 맛집 & 도로명 통합 검색</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="예: 안성휴게소, 소떡소떡, 경부고속도로" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 text-slate-800 font-medium"
                />
                
                {/* 검색 드롭다운 */}
                {searchQuery.trim().length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden max-h-[300px] overflow-y-auto">
                    {filteredHighways.length > 0 && (
                      <div className="p-2 border-b border-slate-100">
                        <span className="text-[10px] font-black text-slate-400 block px-2 mb-1">고속도로 노선</span>
                        {filteredHighways.map(h => (
                          <a key={h.slug} href={`/traffic/${h.slug}`} className="block px-2 py-1.5 rounded hover:bg-slate-50 text-xs font-bold text-slate-800">
                            {h.name}
                          </a>
                        ))}
                      </div>
                    )}
                    {filteredRestAreas.length > 0 && (
                      <div className="p-2">
                        <span className="text-[10px] font-black text-slate-400 block px-2 mb-1">휴게소 / 맛집</span>
                        {filteredRestAreas.map(s => (
                          <a key={s.slug} href={`/rest-areas/${s.slug}`} className="block px-2 py-1.5 rounded hover:bg-slate-50 text-xs font-bold text-slate-800 flex justify-between">
                            <span>{s.name}</span>
                            <span className="text-slate-400 text-[10px] font-normal">{s.signatureMenu.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {filteredHighways.length === 0 && filteredRestAreas.length === 0 && (
                      <p className="p-4 text-center text-xs text-slate-400">일치하는 검색 결과가 없습니다.</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* GPS 내 위치 기반 가장 가까운 휴게소 실시간 찾기 */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-emerald-400 font-mono tracking-wider block">LBS SENSOR</span>
                <h3 className="text-[15px] font-black">내 위치 주변 고속도로 휴게소</h3>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  스마트폰/PC의 GPS 위치 정보를 조회하여 주행 경로 상의 가장 가까운 휴게소 정보를 보여드립니다.
                </p>
              </div>

              {locationStatus !== 'success' ? (
                <button 
                  onClick={findClosestServiceAreas}
                  disabled={locationStatus === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 text-white font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  {locationStatus === 'loading' ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      GPS 위치 탐색중...
                    </>
                  ) : '📍 내 주변 휴게소 즉시 찾기'}
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400">가까운 순서로 정렬됨</span>
                    <button onClick={findClosestServiceAreas} className="text-[10px] text-blue-400 hover:underline">재측정</button>
                  </div>
                  <div className="space-y-1.5">
                    {closestAreas.map((area, idx) => (
                      <a 
                        key={idx}
                        href={`/rest-areas/${area.slug}`}
                        className="p-3 bg-slate-800 hover:bg-slate-700/80 rounded-xl flex justify-between items-center transition-colors text-left"
                      >
                        <div>
                          <span className="text-xs font-black block">{area.name}</span>
                          <span className="text-[10.5px] text-slate-500">{area.highwayName} &middot; {area.directionName}</span>
                        </div>
                        <span className="text-xs font-mono font-black text-emerald-400 shrink-0">{area.distance} km</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 상단 애드센스 광고 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>

      {/* ==========================================
          실시간 카드 섹션 (정체, 사고, 시간 정보)
         ========================================== */}
      <section className="max-w-[1240px] mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* 좌측: 전국 정체 구간 TOP 5 */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b pb-3 border-slate-100">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              🛑 전국 고속도로 정체 구간 TOP 5
            </h3>
            <div className="space-y-3">
              {congestedSections.map((c, idx) => (
                <div key={c.id} className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-100/50 flex justify-between items-center transition-colors">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-400">#{idx + 1}</span>
                      <span className="text-xs font-black text-slate-800">{c.highwayName}</span>
                    </div>
                    <span className="text-[13.5px] font-black text-slate-800">{c.name} ({c.direction})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono font-black text-red-600">{c.currentSpeed} km/h</span>
                    <span className="text-[10px] text-red-400 block font-bold bg-red-50 px-1 py-0.5 rounded mt-0.5 text-center">정체발달</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a href="/traffic" className="mt-4 text-xs font-bold text-blue-600 hover:underline block text-center">전체 정체구간 목록 보기 &rarr;</a>
        </div>

        {/* 우측: 사고 및 공사 발생 구간 */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b pb-3 border-slate-100">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              ⚠️ 실시간 돌발 상황 (사고 &middot; 공사)
            </h3>
            <div className="space-y-3">
              {incidents.map((inc) => (
                <div key={inc.id} className="p-3 bg-amber-50/30 border border-amber-100/80 rounded-xl flex items-start gap-3">
                  <span className={`px-2 py-0.5 rounded text-[9.5px] font-black mt-0.5 shrink-0 uppercase ${
                    inc.type === 'accident' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {inc.type === 'accident' ? '사고' : inc.type === 'construction' ? '공사' : '고장차'}
                  </span>
                  <div className="space-y-0.5">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-[13.5px] font-black text-slate-900">{inc.highwayName} {inc.location}</span>
                      <span className="text-[10.5px] text-slate-400 font-mono">{inc.startedAt}</span>
                    </div>
                    <p className="text-[11.5px] text-slate-500 leading-normal">{inc.description} ({inc.laneBlocked})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a href="/traffic" className="mt-4 text-xs font-bold text-blue-600 hover:underline block text-center">전국 돌발상황 상세 피드 보기 &rarr;</a>
        </div>

      </section>

      {/* ==========================================
          명절/연휴 특집 예측 배너
         ========================================== */}
      <section className="max-w-[1240px] mx-auto px-4 mt-12">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 border border-blue-950 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <span className="text-[10px] font-black bg-blue-500 text-white px-2.5 py-0.5 rounded uppercase tracking-wider">시즌 교통 분석</span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight">명절 고속도로 추천 출발시간 및 무료통행 일정</h3>
            <p className="text-slate-400 text-xs md:text-sm max-w-2xl leading-relaxed">
              설날, 추석 명절 귀성길/귀경길의 예상 혼잡 시간대를 빅데이터로 정밀 진단했습니다. 정체를 피하는 요령과 휴게소 주차팁을 제공합니다.
            </p>
          </div>
          <a 
            href="/holiday" 
            className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors relative z-10 shrink-0 shadow-sm"
          >
            명절 특집 페이지 바로가기 &rarr;
          </a>
        </div>
      </section>

      {/* ==========================================
          휴게소 필터/추천 섹션 (아이 동반, 수유실, 수면실 등)
         ========================================== */}
      <section className="max-w-[1240px] mx-auto px-4 mt-12 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-8">
        
        {/* 섹션 헤더 */}
        <div className="space-y-1">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">🎯 사용자 요구별 휴게소 신속 검색</h2>
          <p className="text-slate-500 text-xs">수유실, 샤워실, 반려견 동반 등 이용자가 실제로 겪는 불편을 해결하는 편의시설별 매핑 목록입니다.</p>
        </div>

        {/* 탭 헤더 */}
        <div className="flex gap-1.5 border-b border-slate-100 pb-3 overflow-x-auto">
          <button 
            onClick={() => setActiveFacilityTab('baby')}
            className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${
              activeFacilityTab === 'baby' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            🍼 아이와 함께 (수유실/기저귀교환)
          </button>
          <button 
            onClick={() => setActiveFacilityTab('shower')}
            className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${
              activeFacilityTab === 'shower' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            🚿 샤워실 보유 (화물차/피로 회복)
          </button>
          <button 
            onClick={() => setActiveFacilityTab('sleep')}
            className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${
              activeFacilityTab === 'sleep' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            😴 수면실 보유 (졸음 방지)
          </button>
          <button 
            onClick={() => setActiveFacilityTab('dog')}
            className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${
              activeFacilityTab === 'dog' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            🐕 반려견 놀이터 (펫 프렌들리)
          </button>
        </div>

        {/* 탭 본문 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getRestAreasByFacility(
            activeFacilityTab === 'baby' ? '수유실' :
            activeFacilityTab === 'shower' ? '샤워실' :
            activeFacilityTab === 'sleep' ? '수면실' : '반려견 쉼터'
          ).map((area) => (
            <div key={area.slug} className="p-4 border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all rounded-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[14.5px] font-black text-slate-800">{area.name}</h4>
                    <p className="text-[10.5px] text-slate-400 mt-0.5">{area.highwayName} &middot; {area.directionName}</p>
                  </div>
                  <span className="text-[9.5px] font-black bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">구비됨</span>
                </div>
                <div className="bg-white p-2.5 border border-slate-100 rounded-lg">
                  <span className="text-[10px] font-bold text-slate-400 block">인기 메뉴</span>
                  <span className="text-xs font-extrabold text-slate-700 mt-0.5 block">{area.signatureMenu.name}</span>
                </div>
              </div>
              <a 
                href={`/rest-areas/${area.slug}`} 
                className="bg-slate-900 text-white hover:bg-slate-800 text-center py-2 rounded-lg text-xs font-bold transition-colors"
              >
                휴게소 종합상세 &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* 롱테일 pSEO 조합 내부 링크 연결 */}
        <div className="pt-4 border-t border-slate-100/80 flex flex-wrap gap-2 text-xs">
          <a href="/facilities/baby-room" className="text-blue-600 hover:underline">🍼 전국 수유실 있는 휴게소 찾기</a>
          <span className="text-slate-300">|</span>
          <a href="/facilities/shower" className="text-blue-600 hover:underline">🚿 전국 샤워실 있는 휴게소 찾기</a>
          <span className="text-slate-300">|</span>
          <a href="/facilities/dog" className="text-blue-600 hover:underline">🐕 전국 반려견 쉼터 있는 휴게소 찾기</a>
        </div>

      </section>

      {/* 중간 인피드 애드센스 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-12">
        <AdSense slot="2233445566" />
      </div>

      {/* ==========================================
          주유소 섹션 (최저가 주유 랭킹)
         ========================================== */}
      <section className="max-w-[1240px] mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* 휘발유 최저가 */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-[15px] font-black text-slate-800 border-b pb-3 border-slate-100">
              ⛽ 휘발유 최저가 주유소
            </h3>
            <div className="space-y-3">
              {cheapestGasoline.map((area, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">{area.name}</span>
                    <span className="text-[10px] text-slate-400">{area.highwayName} &middot; {area.gasStation.brand}</span>
                  </div>
                  <span className="font-mono font-black text-blue-600 text-sm">{area.gasStation.gasolinePrice}원</span>
                </div>
              ))}
            </div>
          </div>
          <a href="/gas" className="text-xs font-bold text-blue-600 hover:underline block text-center pt-2">휘발유 최저가 랭킹 보기 &rarr;</a>
        </div>

        {/* 경유 최저가 */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-[15px] font-black text-slate-800 border-b pb-3 border-slate-100">
              ⛽ 경유 최저가 주유소
            </h3>
            <div className="space-y-3">
              {cheapestDiesel.map((area, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">{area.name}</span>
                    <span className="text-[10px] text-slate-400">{area.highwayName} &middot; {area.gasStation.brand}</span>
                  </div>
                  <span className="font-mono font-black text-blue-600 text-sm">{area.gasStation.dieselPrice}원</span>
                </div>
              ))}
            </div>
          </div>
          <a href="/gas" className="text-xs font-bold text-blue-600 hover:underline block text-center pt-2">경유 최저가 랭킹 보기 &rarr;</a>
        </div>

        {/* 전기차 충전기 최다 보유 */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-[15px] font-black text-slate-800 border-b pb-3 border-slate-100">
              🔌 전기차 초급속 충전소 명당
            </h3>
            <div className="space-y-3">
              {bestEvAreas.map((area, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">{area.name}</span>
                    <span className="text-[10px] text-slate-400">{area.highwayName}</span>
                  </div>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    급속 {area.gasStation.evChargersCount}기
                  </span>
                </div>
              ))}
            </div>
          </div>
          <a href="/ev" className="text-xs font-bold text-blue-600 hover:underline block text-center pt-2">전국 전기차 충전소 찾기 &rarr;</a>
        </div>

      </section>

      {/* ==========================================
          CCTV 노선 모니터링 섹션
         ========================================== */}
      <section className="max-w-[1240px] mx-auto px-4 mt-12 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">📹 노선별 실시간 교통 관제 상황판</h2>
          <p className="text-slate-500 text-xs">주요 정체구간 및 기상정보 모니터링 분석 상황판을 신속하게 열람할 수 있습니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {highways.map(h => (
            <a 
              key={h.slug}
              href={`/cctv/${h.slug}`}
              className="p-5 border border-slate-100 rounded-xl bg-slate-50 hover:bg-slate-50/50 hover:border-blue-600 transition-all text-left flex justify-between items-center"
            >
              <div>
                <span className="text-[10px] font-black bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">{h.number}</span>
                <h4 className="text-[14px] font-black text-slate-800 mt-1">{h.name}</h4>
              </div>
              <span className="text-[11px] font-bold text-blue-600">상황판 보기 &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      {/* 하단 애드센스 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-12">
        <AdSense slot="3344556677" />
      </div>

      {/* ==========================================
          하단 내부링크 트리 (구글 롱테일 인덱싱용 트리)
         ========================================== */}
      <section className="max-w-[1240px] mx-auto px-4 mt-12 bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-lg space-y-8">
        
        <div>
          <h3 className="text-lg font-black text-white">🔗 전국 고속도로 편리정보 사이트맵 트리</h3>
          <p className="text-slate-400 text-xs mt-1">원하는 정보를 빠르게 찾아가기 위한 최적의 카테고리 조합 링크입니다.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-400">
          
          <div className="space-y-2">
            <span className="font-black text-white block">🚦 실시간 교통 & CCTV</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="/traffic/gyeongbu" className="hover:text-blue-400">경부고속도로 교통상황</a></li>
              <li><a href="/traffic/yeongdong" className="hover:text-blue-400">영동고속도로 교통상황</a></li>
              <li><a href="/cctv/gyeongbu" className="hover:text-blue-400">경부고속도로 CCTV 보기</a></li>
              <li><a href="/cctv/yeongdong" className="hover:text-blue-400">영동고속도로 CCTV 보기</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-black text-white block">🍽️ 휴게소 맛집 메뉴</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="/food/best" className="hover:text-blue-400">전국 휴게소 대표 음식</a></li>
              <li><a href="/food/udon" className="hover:text-blue-400">휴게소 우동 판매처 목록</a></li>
              <li><a href="/food/ramen" className="hover:text-blue-400">휴게소 라면 맛집 리스트</a></li>
              <li><a href="/food/ranking" className="hover:text-blue-400">인기 휴게소 간식 랭킹</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-black text-white block">⛽ 최저가 유가 & EV</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="/gas/gasoline" className="hover:text-blue-400">오늘 최저가 휘발유소</a></li>
              <li><a href="/gas/diesel" className="hover:text-blue-400">오늘 최저가 경유 주유소</a></li>
              <li><a href="/ev/fast" className="hover:text-blue-400">초급속 전기차 충전기</a></li>
              <li><a href="/gas/lpg" className="hover:text-blue-400">LPG 가스 충전소 목록</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-black text-white block">📅 시즌 연휴 특집</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="/holiday/chuseok" className="hover:text-blue-400">추석 연휴 교통 예보</a></li>
              <li><a href="/holiday/seollal" className="hover:text-blue-400">설날 연휴 통행료 면제</a></li>
              <li><a href="/toll/calculator" className="hover:text-blue-400">고속도로 통행료 계산기</a></li>
              <li><a href="/guides/emergency-guide" className="hover:text-blue-400">고속도로 응급 대처 가이드</a></li>
            </ul>
          </div>

        </div>

      </section>

    </main>
  );
}
