'use client';

import { useState } from 'react';
import { 
  highways, 
  serviceAreas, 
  cctvPoints, 
  getServiceAreasByHighway, 
  getCctvPointsByHighway, 
  searchAll 
} from '@/lib/data';
import AdSense from '@/components/AdSense';
import CctvPlayer from '@/components/CctvPlayer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHighway, setSelectedHighway] = useState(highways[0].slug);
  const [activeTab, setActiveTab] = useState<'cctv' | 'food' | 'gas'>('cctv');
  const [activeCctv, setActiveCctv] = useState(cctvPoints[0]);

  // 실시간 검색 결과
  const searchResults = searchAll(searchQuery);
  const showResults = searchQuery.trim().length > 0;

  // 선택된 고속도로의 데이터 필터링
  const currentHighway = highways.find(h => h.slug === selectedHighway) || highways[0];
  const currentServiceAreas = getServiceAreasByHighway(selectedHighway);
  const currentCctvs = getCctvPointsByHighway(selectedHighway);

  // 상행/하행 휴게소 분류
  const upwardServiceAreas = currentServiceAreas.filter(s => s.direction === '상행');
  const downwardServiceAreas = currentServiceAreas.filter(s => s.direction === '하행');
  const bothWayServiceAreas = currentServiceAreas.filter(s => s.direction === '양방향');

  // CCTV 선택기
  const handleCctvSelect = (cctv: any) => {
    setActiveCctv(cctv);
    const element = document.getElementById('cctv-player-screen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <main className="flex-grow pb-24">
      {/* 히어로 비주얼 & 대형 검색바 */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
        {/* 그라데이션 및 그리드 배경 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-900/95 to-slate-900 z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-0" />
        
        <div className="relative mx-auto max-w-[1240px] px-4 z-20 flex flex-col items-center text-center">
          <span className="rounded-full bg-blue-500/10 px-3.5 py-1 text-[13px] font-black tracking-wider text-blue-400 uppercase mb-4 border border-blue-500/20">
            실시간 고속도로 모니터링 시스템
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mb-6">
            전국 고속도로 상황판
            <br />
            <span className="text-blue-500 font-extrabold text-2xl md:text-4xl">실시간 CCTV &middot; 휴게소 맛집 &middot; 최저가 주유소</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            가고자 하는 목적지나 휴게소 명칭, 메뉴를 검색해보세요. 노선별 실시간 주행 영상과 시그니처 메뉴 가격을 즉시 알려드립니다.
          </p>

          {/* 통합 검색바 */}
          <div className="w-full max-w-2xl relative">
            <div className="flex items-center bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden px-4">
              <svg className="h-6 w-6 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="어느 휴게소로 가시나요? (예: 안성휴게소, 소떡소떡, 영동고속도로)" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4.5 pl-3 text-slate-800 placeholder-slate-400 focus:outline-none text-[15px] md:text-[16px] font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* 검색 자동완성 결과 드롭다운 */}
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white text-slate-900 border border-slate-200 rounded-xl shadow-2xl z-50 text-left overflow-hidden max-h-[400px] overflow-y-auto">
                <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>검색 결과</span>
                  <button onClick={() => setSearchQuery('')} className="hover:text-slate-800">닫기</button>
                </div>
                
                {/* 1. 고속도로 결과 */}
                {searchResults.highways.length > 0 && (
                  <div className="p-2 border-b border-slate-100">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider px-2 block mb-1">고속도로 노선 ({searchResults.highways.length})</span>
                    {searchResults.highways.map(h => (
                      <button
                        key={h.slug}
                        onClick={() => {
                          setSelectedHighway(h.slug);
                          setSearchQuery('');
                        }}
                        className="w-full flex justify-between items-center px-2 py-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors"
                      >
                        <span className="text-[14px] font-bold text-slate-800">{h.name}</span>
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-bold">{h.number} &middot; {h.length}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* 2. 휴게소 결과 */}
                {searchResults.serviceAreas.length > 0 && (
                  <div className="p-2 border-b border-slate-100">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider px-2 block mb-1">휴게소 목록 ({searchResults.serviceAreas.length})</span>
                    {searchResults.serviceAreas.map(s => (
                      <button
                        key={s.slug}
                        onClick={() => {
                          setSelectedHighway(s.highwaySlug);
                          setActiveTab('food');
                          setSearchQuery('');
                        }}
                        className="w-full flex justify-between items-center px-2 py-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-[14px] font-bold text-slate-800">{s.name} <span className="text-xs text-slate-500 font-medium">({s.directionName})</span></span>
                          <span className="text-[11px] text-slate-400">{s.highwayName} &middot; {s.locationKm}km 지점</span>
                        </div>
                        <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">시그니처: {s.signatureMenu.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* 3. 맛집 메뉴 결과 */}
                {searchResults.menuItems.length > 0 && (
                  <div className="p-2">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider px-2 block mb-1">휴게소 맛집 메뉴 검색 ({searchResults.menuItems.length})</span>
                    {searchResults.menuItems.map(s => (
                      <button
                        key={s.slug + '-menu'}
                        onClick={() => {
                          setSelectedHighway(s.highwaySlug);
                          setActiveTab('food');
                          setSearchQuery('');
                        }}
                        className="w-full flex justify-between items-center px-2 py-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-[14px] font-bold text-slate-800">{s.signatureMenu.name} <span className="text-xs text-slate-500 font-medium">({s.name} &middot; {s.directionName})</span></span>
                          <span className="text-[11px] text-slate-400">{s.highwayName}</span>
                        </div>
                        <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-bold font-mono">{s.signatureMenu.price.toLocaleString()}원</span>
                      </button>
                    ))}
                  </div>
                )}

                {searchResults.highways.length === 0 && searchResults.serviceAreas.length === 0 && searchResults.menuItems.length === 0 && (
                  <div className="p-8 text-center text-slate-400 text-sm">
                    검색 결과가 없습니다. 다른 키워드로 검색해보세요.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 상단 애드센스 슬롯 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>

      {/* 노선 간편 선택 그리드 */}
      <section id="highways" className="max-w-[1240px] mx-auto px-4 mt-12">
        <div className="flex items-center justify-between pb-3 border-b-2 border-slate-900">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">고속도로 노선 선택</h2>
          <span className="text-xs font-bold text-slate-400">실시간 상황을 조회할 노선을 선택하세요</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {highways.map((h) => (
            <button
              key={h.slug}
              onClick={() => {
                setSelectedHighway(h.slug);
                // 해당 노선의 첫 번째 CCTV로 디폴트 교체
                const newCctvs = getCctvPointsByHighway(h.slug);
                if (newCctvs.length > 0) setActiveCctv(newCctvs[0]);
              }}
              className={`p-4 rounded-xl text-left border transition-all duration-200 hover:shadow-md ${
                selectedHighway === h.slug
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-200 bg-white text-slate-800'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[11px] font-black px-2 py-0.5 rounded ${
                  selectedHighway === h.slug ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {h.number}
                </span>
                <span className={`text-[12px] font-mono ${selectedHighway === h.slug ? 'text-blue-200' : 'text-slate-400'}`}>
                  {h.length}
                </span>
              </div>
              <h3 className="text-[16px] font-black tracking-tight">{h.name}</h3>
              <p className={`text-[11px] mt-1 line-clamp-1 ${selectedHighway === h.slug ? 'text-blue-100' : 'text-slate-400'}`}>
                {h.start} &rarr; {h.end}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* 대화형 메인 상황판 (CCTV, 휴게소 맛집, 주유소 탭) */}
      <section className="max-w-[1240px] mx-auto px-4 mt-12">
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          
          {/* 상황판 상단 정보 */}
          <div className="p-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-black bg-blue-600 text-white px-2.5 py-0.5 rounded">LIVE</span>
                <h2 className="text-xl md:text-2xl font-black tracking-tight">{currentHighway.name} 종합 상황판</h2>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">{currentHighway.description}</p>
            </div>
            
            {/* 세부 탭 메뉴 */}
            <div className="flex gap-1.5 bg-slate-800 p-1.5 rounded-lg w-full md:w-auto">
              <button
                onClick={() => setActiveTab('cctv')}
                className={`flex-grow md:flex-grow-0 px-4 py-2 text-xs font-black rounded-md transition-all duration-200 flex items-center justify-center gap-1 ${
                  activeTab === 'cctv' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                📹 실시간 CCTV
              </button>
              <button
                onClick={() => setActiveTab('food')}
                className={`flex-grow md:flex-grow-0 px-4 py-2 text-xs font-black rounded-md transition-all duration-200 flex items-center justify-center gap-1 ${
                  activeTab === 'food' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🍽️ 상·하행 맛집
              </button>
              <button
                onClick={() => setActiveTab('gas')}
                className={`flex-grow md:flex-grow-0 px-4 py-2 text-xs font-black rounded-md transition-all duration-200 flex items-center justify-center gap-1 ${
                  activeTab === 'gas' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ⛽ 최저가 주유소
              </button>
            </div>
          </div>

          {/* 탭 본문 영역 */}
          <div className="p-6">
            
            {/* ==========================================
                탭 1: 실시간 CCTV 모니터링 화면
               ========================================== */}
            {activeTab === 'cctv' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* 좌측: 실시간 CCTV 리스트 */}
                <div className="lg:col-span-4 space-y-2 max-h-[480px] overflow-y-auto pr-1">
                  <span className="text-[11px] font-black text-slate-400 tracking-wider block mb-1">CCTV 포인트 목록 ({currentCctvs.length})</span>
                  {currentCctvs.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleCctvSelect(c)}
                      className={`w-full p-3.5 rounded-lg border text-left flex justify-between items-center transition-all duration-200 ${
                        activeCctv?.id === c.id
                          ? 'border-blue-600 bg-blue-50/50'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-black text-slate-800">{c.name}</span>
                          <span className="text-[11px] text-slate-400">{c.locationKm}km 지점 &middot; {c.direction}</span>
                        </div>
                      </div>
                      <span className={`text-[11.5px] font-black px-2 py-0.5 rounded uppercase tracking-wider ${
                        c.status === 'smooth' ? 'bg-emerald-50 text-emerald-700' :
                        c.status === 'slow' ? 'bg-amber-50 text-amber-700' :
                        'bg-red-50 text-red-700'
                      }`}>
                        {c.status === 'smooth' ? '원활' : c.status === 'slow' ? '서행' : '정체'}
                      </span>
                    </button>
                  ))}
                  {currentCctvs.length === 0 && (
                    <p className="text-center py-10 text-slate-400 text-sm">등록된 CCTV 데이터가 없습니다.</p>
                  )}
                </div>

                {/* 우측: CCTV 라이브 플레이어 스크린 */}
                <div id="cctv-player-screen" className="lg:col-span-8 flex flex-col justify-between border border-slate-200 rounded-xl overflow-hidden bg-slate-950 text-white min-h-[380px]">
                  {activeCctv ? (
                    <>
                      {/* CCTV 스크린 시뮬레이션 헤더 */}
                      <div className="p-3 bg-slate-900 border-b border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          LIVE CAM: {activeCctv.name} ({activeCctv.direction})
                        </span>
                        <span>{new Date().toLocaleDateString('ko-KR')} LIVE</span>
                      </div>
                      
                      {/* 실제 비디오 및 OpenAPI 연동 플레이어 */}
                      <div className="flex-grow relative h-[300px] bg-black">
                        {/* CCTV 그래픽 오버레이 */}
                        <div className="absolute top-4 left-4 z-20 font-mono text-[11px] text-green-400 space-y-0.5 pointer-events-none drop-shadow-md">
                          <p>CAM ID: {activeCctv.id}</p>
                          <p>ROUTE: {currentHighway.name}</p>
                          <p>LOC: {activeCctv.locationKm}.0 km</p>
                          <p>SPEED LIMIT: {activeCctv.speedLimit} km/h</p>
                        </div>

                        <div className="absolute top-4 right-4 z-20 font-mono text-[11px] text-green-400 text-right pointer-events-none drop-shadow-md">
                          <p>REC STATUS: PLAYING</p>
                          <p>TEMP: {activeCctv.temp}°C</p>
                          <p>WEATHER: {
                            activeCctv.weather === 'clear' ? '맑음' :
                            activeCctv.weather === 'rainy' ? '우천' :
                            activeCctv.weather === 'snowy' ? '강설' : '안개'
                          }</p>
                        </div>

                        <CctvPlayer 
                          x={activeCctv.x}
                          y={activeCctv.y}
                          cctvId={activeCctv.id}
                          cctvName={activeCctv.name}
                        />

                        {/* 하단 투명 오버레이 (텔레메트리) */}
                        <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
                          <div className="bg-black/60 px-3 py-1.5 rounded-lg border border-slate-800 backdrop-blur-sm">
                            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">실시간 주행 속도</span>
                            <span className={`text-[16px] font-black font-mono ${
                              activeCctv.status === 'smooth' ? 'text-green-400' :
                              activeCctv.status === 'slow' ? 'text-amber-400' : 'text-red-400'
                            }`}>
                              {activeCctv.currentSpeed} km/h
                            </span>
                          </div>

                          <div className="bg-black/60 px-3 py-1.5 rounded-lg border border-slate-800 backdrop-blur-sm text-right">
                            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">통행 상태</span>
                            <span className={`text-[13px] font-black ${
                              activeCctv.status === 'smooth' ? 'text-green-400' :
                              activeCctv.status === 'slow' ? 'text-amber-400' : 'text-red-400'
                            }`}>
                              {activeCctv.status === 'smooth' ? '원활 소통' :
                               activeCctv.status === 'slow' ? '서행 운전' : '심한 정체'}
                            </span>
                          </div>
                        </div>

                        {/* 브라운관 TV 필터 주사선 효과 */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none opacity-40 z-30" />
                      </div>

                      {/* CCTV 설명 푸터 */}
                      <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs">
                        <span className="text-slate-400">교통 흐름 진단: {activeCctv.currentSpeed >= 80 ? '원활한 소통 흐름' : '전방 감속 및 안전운전 당부'}</span>
                        <a 
                          href={`/cctv/${activeCctv.highwaySlug}/${activeCctv.id}`} 
                          className="bg-blue-600 text-white font-bold px-3.5 py-1.5 rounded hover:bg-blue-700 transition-colors"
                        >
                          CCTV 단독화면 &middot; 상세정보 &rarr;
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="flex-grow flex items-center justify-center p-8 text-center text-slate-400">
                      CCTV 카메라를 선택해주세요.
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* ==========================================
                탭 2: 휴게소 상행 하행 대표 맛집
               ========================================== */}
            {activeTab === 'food' && (
              <div className="space-y-8">
                
                {/* 상행/하행 안내 헤더 */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                  <span className="text-xs text-blue-700 font-bold leading-relaxed">
                    💡 <strong>상행 (Seoul-bound / 인천/인천방향)</strong> 및 <strong>하행 (Provincial-bound / 부산/강릉/목포방향)</strong>은 주행 노선에 따라 이용 가능한 휴게소가 완전히 다릅니다. 진입 전 진행 방향을 꼭 확인하세요!
                  </span>
                  <span className="text-xs bg-blue-600 text-white font-extrabold px-3 py-1 rounded-full shrink-0">EX-FOOD: 도로공사 보증 맛집</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 좌측: 상행 휴게소 맛집 */}
                  <div className="space-y-4">
                    <h3 className="text-[17px] font-black text-slate-900 flex items-center gap-2 border-b pb-2 border-slate-200">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      상행 노선 맛집 (서울/인천 방향)
                    </h3>
                    <div className="space-y-3">
                      {upwardServiceAreas.map((s) => (
                        <div key={s.slug} className="p-4 border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex justify-between items-start gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[15px] font-black text-slate-800">{s.name}</span>
                              <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">{s.directionName}</span>
                            </div>
                            <p className="text-[12px] text-slate-400">노선 거리: {s.locationKm}km 지점</p>
                            
                            {/* 대표 시그니처 메뉴 */}
                            <div className="mt-3 bg-white p-3 border border-slate-100 shadow-2xs">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13.5px] font-extrabold text-slate-900">{s.signatureMenu.name}</span>
                                {s.signatureMenu.isExFood && (
                                  <span className="text-[9px] font-black bg-amber-500 text-white px-1.5 py-0.5 rounded">EX-FOOD</span>
                                )}
                              </div>
                              <p className="text-[11.5px] text-slate-500 mt-1">{s.signatureMenu.description}</p>
                            </div>
                          </div>

                          <div className="flex flex-col items-end shrink-0 justify-between h-full">
                            <span className="text-[15px] font-mono font-black text-blue-600">{s.signatureMenu.price.toLocaleString()}원</span>
                            <a 
                              href={`/rest-areas/${s.slug}`}
                              className="mt-6 text-[11.5px] font-bold text-slate-500 hover:text-blue-600 transition-colors"
                            >
                              전체메뉴 보기 &rarr;
                            </a>
                          </div>
                        </div>
                      ))}
                      {upwardServiceAreas.length === 0 && (
                        <p className="text-center py-10 text-slate-400 text-sm bg-slate-50 border border-dashed rounded-lg">해당 노선에 등록된 상행 휴게소가 없습니다.</p>
                      )}
                    </div>
                  </div>

                  {/* 우측: 하행 휴게소 맛집 */}
                  <div className="space-y-4">
                    <h3 className="text-[17px] font-black text-slate-900 flex items-center gap-2 border-b pb-2 border-slate-200">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                      하행 노선 맛집 (부산/지방/강릉 방향)
                    </h3>
                    <div className="space-y-3">
                      {downwardServiceAreas.map((s) => (
                        <div key={s.slug} className="p-4 border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex justify-between items-start gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[15px] font-black text-slate-800">{s.name}</span>
                              <span className="text-[10px] font-bold bg-red-100 text-red-800 px-1.5 py-0.5 rounded">{s.directionName}</span>
                            </div>
                            <p className="text-[12px] text-slate-400">노선 거리: {s.locationKm}km 지점</p>
                            
                            {/* 대표 시그니처 메뉴 */}
                            <div className="mt-3 bg-white p-3 border border-slate-100 shadow-2xs">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13.5px] font-extrabold text-slate-900">{s.signatureMenu.name}</span>
                                {s.signatureMenu.isExFood && (
                                  <span className="text-[9px] font-black bg-amber-500 text-white px-1.5 py-0.5 rounded">EX-FOOD</span>
                                )}
                              </div>
                              <p className="text-[11.5px] text-slate-500 mt-1">{s.signatureMenu.description}</p>
                            </div>
                          </div>

                          <div className="flex flex-col items-end shrink-0 justify-between h-full">
                            <span className="text-[15px] font-mono font-black text-blue-600">{s.signatureMenu.price.toLocaleString()}원</span>
                            <a 
                              href={`/rest-areas/${s.slug}`}
                              className="mt-6 text-[11.5px] font-bold text-slate-500 hover:text-blue-600 transition-colors"
                            >
                              전체메뉴 보기 &rarr;
                            </a>
                          </div>
                        </div>
                      ))}
                      {downwardServiceAreas.length === 0 && (
                        <p className="text-center py-10 text-slate-400 text-sm bg-slate-50 border border-dashed rounded-lg">해당 노선에 등록된 하행 휴게소가 없습니다.</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 양방향 통합형 휴게소 */}
                {bothWayServiceAreas.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-[17px] font-black text-slate-900 flex items-center gap-2 border-b pb-2 border-slate-200">
                      <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                      통합형 양방향 휴게소 맛집 (회차 가능/상하행 공용)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {bothWayServiceAreas.map((s) => (
                        <div key={s.slug} className="p-4 border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex justify-between items-start gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[15px] font-black text-slate-800">{s.name}</span>
                              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">양방향 통합</span>
                            </div>
                            <p className="text-[12px] text-slate-400">노선 거리: {s.locationKm}km 지점 &middot; 덕평 자연 정원 테마파크 연동</p>
                            
                            <div className="mt-3 bg-white p-3 border border-slate-100 shadow-2xs">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13.5px] font-extrabold text-slate-900">{s.signatureMenu.name}</span>
                              </div>
                              <p className="text-[11.5px] text-slate-500 mt-1">{s.signatureMenu.description}</p>
                            </div>
                          </div>

                          <div className="flex flex-col items-end shrink-0 justify-between h-full">
                            <span className="text-[15px] font-mono font-black text-blue-600">{s.signatureMenu.price.toLocaleString()}원</span>
                            <a 
                              href={`/rest-areas/${s.slug}`}
                              className="mt-6 text-[11.5px] font-bold text-slate-500 hover:text-blue-600 transition-colors"
                            >
                              전체메뉴 보기 &rarr;
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* ==========================================
                탭 3: 최저가 주유소 및 친환경차 충전소
               ========================================== */}
            {activeTab === 'gas' && (
              <div className="space-y-6">
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 text-xs text-emerald-800 font-bold">
                  ⚡ 고속도로 주유소는 도로공사 소유의 <strong>알뜰주유소(ex-oil)</strong>가 유통 구조 혁신으로 도심 시내 일반 대기업 브랜드 대비 리터당 50~100원 이상 저렴합니다. 노선별 주유 가격을 비교하고 미리 알뜰 주유하세요!
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-slate-700 text-[13.5px]">
                    <thead>
                      <tr className="border-b-2 border-slate-200 bg-slate-50 text-[11.5px] font-black text-slate-500 uppercase tracking-wider">
                        <th className="py-3 px-4">휴게소명</th>
                        <th className="py-3 px-4">주유소 브랜드</th>
                        <th className="py-3 px-4 text-right">휘발유 (L)</th>
                        <th className="py-3 px-4 text-right">경유 (L)</th>
                        <th className="py-3 px-4 text-right">LPG (L)</th>
                        <th className="py-3 px-4 text-center">전기차 급속 충전</th>
                        <th className="py-3 px-4 text-center">수소차 충전</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentServiceAreas.map((s) => (
                        <tr key={s.slug + '-gas'} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex flex-col">
                              <span className="font-bold text-slate-800">{s.name}</span>
                              <span className="text-[10px] text-slate-400">{s.directionName} &middot; {s.locationKm}km</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`inline-block px-2.5 py-1 rounded text-xs font-black ${
                              s.gasStation.brand === 'ex-oil' || s.gasStation.brand === '알뜰주유소'
                                ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                : 'bg-slate-100 text-slate-700'
                            }`}>
                              {s.gasStation.brand}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-800">
                            {s.gasStation.gasolinePrice.toLocaleString()}원
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-800">
                            {s.gasStation.dieselPrice.toLocaleString()}원
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono text-slate-500">
                            {s.gasStation.lpgPrice ? `${s.gasStation.lpgPrice.toLocaleString()}원` : '-'}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {s.gasStation.hasEvCharger ? (
                              <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs font-bold">
                                🔋 가능 ({s.gasStation.evChargersCount}기)
                              </span>
                            ) : (
                              <span className="text-slate-300">-</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {s.gasStation.hasHydrogen ? (
                              <span className="inline-block bg-sky-50 text-sky-700 px-2 py-0.5 rounded text-xs font-black">
                                🫧 가능
                              </span>
                            ) : (
                              <span className="text-slate-300">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* 중간 인피드 애드센스 슬롯 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-12">
        <AdSense slot="2233445566" />
      </div>

      {/* 휴게소 대표 음식 테마별 추천 리스트 (EX-FOOD 명예의 전당) */}
      <section className="max-w-[1240px] mx-auto px-4 mt-12">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">🏆 고속도로 명물 EX-FOOD 대표 맛집</h2>
          <span className="text-xs font-bold text-slate-400">이영자 추천 및 한국도로공사 선정 최고 평점 명물 대표음식</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {serviceAreas.filter(s => s.signatureMenu.isExFood).slice(0, 3).map((s) => (
            <div key={s.slug + '-ex'} className="bg-white border border-slate-100 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[17px] font-black text-slate-900">{s.name}</h3>
                    <p className="text-[11px] text-slate-400">{s.highwayName} &middot; {s.directionName}</p>
                  </div>
                  <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded">대표 맛집</span>
                </div>
                
                <div className="bg-slate-50 p-4 border border-slate-100">
                  <h4 className="text-[14.5px] font-extrabold text-blue-600">{s.signatureMenu.name}</h4>
                  <p className="text-[12px] text-slate-500 mt-1.5 leading-relaxed">{s.signatureMenu.description}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-100">
                <span className="text-[16px] font-mono font-black text-slate-900">{s.signatureMenu.price.toLocaleString()}원</span>
                <a 
                  href={`/rest-areas/${s.slug}`}
                  className="bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold px-3 py-1.5 transition-colors"
                >
                  맛집 상세 정보 &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 애드센스 슬롯 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-12">
        <AdSense slot="3344556677" />
      </div>

      {/* 고속도로 실시간 정보 이용 가이드 및 꿀팁 (SEO 롱테일 검색 노출용 텍스트 섹션) */}
      <section className="max-w-[1240px] mx-auto px-4 mt-16 bg-white border border-slate-200 p-8 md:p-10 rounded-xl shadow-2xs">
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 border-b pb-4 border-slate-100">
          🚗 고속도로 교통정보 실시간 이용 꿀팁 및 활용 가이드
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[14px] leading-relaxed text-slate-600">
          <div className="space-y-4">
            <h3 className="text-base font-black text-slate-800">Q1. 고속도로 실시간 CCTV 화질 및 업데이트 간격은 어떻게 되나요?</h3>
            <p>
              고속도로 실시간 CCTV 영상은 한국도로공사 및 국토교통부 국가교통정보센터(ITS)에서 공공데이터 OpenAPI로 제공하는 영상 소스입니다. 일반적으로 교통 흐름 모니터링을 위해 <strong>5초 간격으로 업데이트되는 정지 화상(JPEG)</strong> 또는 HLS 스트리밍 프로토콜을 통하여 실시간 도로 상황이 중계됩니다. 우천, 강설, 안개 등 기상 악화 시나 대형 사고 등 돌발 상황 발생 시 교통관제센터의 판단에 따라 잠시 화면이 조정되거나 고속도로 전광판 정보로 대체될 수 있습니다.
            </p>

            <h3 className="text-base font-black text-slate-800">Q2. 휴게소 '상행'과 '하행' 구분은 왜 중요한가요?</h3>
            <p>
              대한민국 고속도로는 중앙분리대로 상방향과 하방향이 차단되어 있으므로, 서울방향(상행)에 있는 휴게소 맛집을 부산방향(하행) 주행 중에 진입할 수 없습니다(일부 회차형 덕평휴게소 및 금강휴게소 제외). 따라서 본 상황판의 <strong>'상행 맛집'</strong>과 <strong>'하행 맛집'</strong>을 면밀히 구별하시고, 본인이 가고자 하는 노선의 방향과 정확히 매칭되는 휴게소의 정보를 참고하셔야 여행 일정의 착오를 줄일 수 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-black text-slate-800">Q3. 휴게소 주유소는 왜 시중 주유소보다 저렴한가요?</h3>
            <p>
              고속도로 내 주유소들은 한국도로공사의 공익적 가격 억제 정책에 의거하여 독자 브랜드인 <strong>'알뜰주유소(ex-oil)'</strong> 브랜드를 주력으로 도입하고 있습니다. ex-oil은 정유사 간의 경쟁 입찰을 통해 대량으로 유류를 공동 매입하고 유통 거품을 최소화하여 운영하기 때문에 일반 시내 대기업 폴(SK, GS, S-Oil 등) 주유소 대비 리터당 수십 원에서 많게는 백 원 이상 저렴하게 유가를 형성하고 있습니다. 장거리 운전 시 출발 전 고속도로 내 최저가 ex-oil 주유소 위치를 파악하여 주유 계획을 설계하면 기름값을 효과적으로 아끼실 수 있습니다.
            </p>

            <h3 className="text-base font-black text-slate-800">Q4. 전기차(EV) 급속 충전기 실시간 가동 현황은 어디서 확인하나요?</h3>
            <p>
              전국 고속도로 휴게소의 약 95% 이상에는 전기차 급속 및 초급속 충전소(E-pit 등)가 구축되어 있습니다. 휴게소별 충전기 대수는 본 상황판의 주유소/충전소 탭에서 확인할 수 있으며, 환경부 무공해차 통합누리집 및 민간 전기차 충전 앱들과 동기화된 API를 통해 현재 충전기가 사용 중인지 또는 고장 대기 중인지 상세 현황을 함께 보조적으로 조회하시는 것이 충전 대기 시간을 피하는 현명한 요령입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
