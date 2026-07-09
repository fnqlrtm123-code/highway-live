'use client';

import { useState } from 'react';
import { 
  highways, 
  serviceAreas, 
  cctvPoints, 
  travelTimes, 
  ServiceArea
} from '@/lib/data';
import AdSense from '@/components/AdSense';
import CctvPlayer from '@/components/CctvPlayer';

export default function HomeClient() {
  // 통합 검색
  const [searchQuery, setSearchQuery] = useState('');
  
  // 1. 교통상황·CCTV States
  const [activeCctv, setActiveCctv] = useState<typeof cctvPoints[0] | null>(null);

  // 2. 고속도로 휴게소 상하행선 States
  const [selectedRestHighway, setSelectedRestHighway] = useState('경부고속도로');
  const [selectedRestFacility, setSelectedRestFacility] = useState('전체');
  const [selectedRestArea, setSelectedRestArea] = useState<ServiceArea | null>(null);

  // 3. 통행료 예측 계산기 States
  const [tollFrom, setTollFrom] = useState('서울');
  const [tollTo, setTollTo] = useState('부산');
  const [tollResult, setTollResult] = useState<{
    distanceKm: number;
    timeText: string;
    price: number;
  } | null>({
    distanceKm: 396,
    timeText: '4시간 35분',
    price: 18600
  });

  // 통합 검색 필터링
  const filteredHighways = searchQuery.trim()
    ? highways.filter(h => h.name.includes(searchQuery) || h.number.includes(searchQuery))
    : [];
  const filteredRestAreas = searchQuery.trim()
    ? serviceAreas.filter(s => s.name.includes(searchQuery) || s.signatureMenu.name.includes(searchQuery))
    : [];

  // 통행료 계산 실행
  const calculateToll = (from: string, to: string) => {
    const found = travelTimes.find(
      t => (t.from === from && t.to === to) || (t.from === to && t.to === from)
    );
    if (found) {
      setTollResult({
        distanceKm: found.distanceKm,
        timeText: `${Math.floor(found.currentTimeMin / 60)}시간 ${found.currentTimeMin % 60}분`,
        price: Math.floor(found.distanceKm * 42.5 + 1100)
      });
    } else {
      const distance = 160 + Math.floor(Math.random() * 200);
      setTollResult({
        distanceKm: distance,
        timeText: `${Math.floor(distance / 85)}시간 ${Math.floor((distance % 85) * 0.7)}분`,
        price: Math.floor(distance * 42.5 + 1100)
      });
    }
  };

  // 노선별 휴게소 목록 추출 및 상행/하행 분리
  const currentHighwayRestAreas = serviceAreas.filter(s => s.highwayName === selectedRestHighway);
  const upBoundRestAreas = currentHighwayRestAreas.filter(s => s.direction === '상행');
  const downBoundRestAreas = currentHighwayRestAreas.filter(s => s.direction === '하행');

  // 주유소 최저가 목록 추출 (0원 제외 필터 추가)
  const cheapestGasoline = [...serviceAreas]
    .filter(s => s.gasStation.gasolinePrice > 0)
    .sort((a, b) => a.gasStation.gasolinePrice - b.gasStation.gasolinePrice)
    .slice(0, 3);

  const cheapestDiesel = [...serviceAreas]
    .filter(s => s.gasStation.dieselPrice > 0)
    .sort((a, b) => a.gasStation.dieselPrice - b.gasStation.dieselPrice)
    .slice(0, 3);

  const topEvAreas = [...serviceAreas]
    .filter(s => s.gasStation.hasEvCharger)
    .sort((a, b) => b.gasStation.evChargersCount - a.gasStation.evChargersCount)
    .slice(0, 3);

  return (
    <main className="flex-grow bg-white pb-24 font-sans text-slate-800">
      {/* 1. 상단 문제 해결형 통합 검색창 */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50/20 to-white py-16 border-b border-slate-200/50">
        <div className="mx-auto max-w-[1000px] px-4 text-center space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10.5px] font-bold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
              실시간 고속도로 종합 정보 안내
            </div>
            <h1 className="text-3xl md:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              고속도로 실시간 편의정보 포털
            </h1>
            <p className="text-xs md:text-[13.5px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
              지금 막히는 노선 상황, 방향별 휴게소 맛집(대표 음식), 알뜰주유소 가격 및 전기차 충전기 수량을 한눈에 쉽게 확인해 드립니다.
            </p>
          </div>

          {/* 실전용 통합 검색 입력창 */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative flex items-center bg-white rounded-2xl border border-slate-200/80 shadow-md shadow-slate-100/30 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
              <svg className="h-5 w-5 text-slate-400 ml-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="어느 고속도로 노선이나 휴게소 명칭을 입력해 보세요." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-4 text-xs md:text-sm text-slate-800 font-bold focus:outline-none placeholder-slate-400"
              />
            </div>

            {/* 통합 검색 결과 표시 */}
            {searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200/80 rounded-2xl shadow-xl z-50 text-left text-slate-800 overflow-hidden max-h-[320px] overflow-y-auto">
                {filteredHighways.length > 0 && (
                  <div className="p-3 border-b border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 px-2 block mb-1">고속도로 노선 바로가기</span>
                    {filteredHighways.map(h => (
                      <a key={h.slug} href={`/traffic/${h.name.replace(/[^a-zA-Z0-9가-힣]+/g, '-').replace(/^-|-$/g, '')}`} className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-800">
                        {h.name} (소통상황 & CCTV)
                      </a>
                    ))}
                  </div>
                )}
                {filteredRestAreas.length > 0 && (
                  <div className="p-3">
                    <span className="text-[10px] font-bold text-slate-400 px-2 block mb-1">휴게소 & 맛집 바로가기</span>
                    {filteredRestAreas.map(s => (
                      <a key={s.slug} href={`/rest-areas/${s.slug}`} className="block px-2 py-1.5 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-800 flex justify-between">
                        <span>{s.name} ({s.directionName})</span>
                        <span className="text-blue-600 text-[10px]">{s.signatureMenu.name}</span>
                      </a>
                    ))}
                  </div>
                )}
                {filteredHighways.length === 0 && filteredRestAreas.length === 0 && (
                  <p className="p-4 text-center text-xs text-slate-400 font-bold">일치하는 고속도로나 휴게소가 없습니다.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 애드센스 */}
      <div className="max-w-[1000px] mx-auto px-4 mt-8">
        <AdSense slot="3342272844" />
      </div>

      {/* 2. 메인 4대 섹션 영역 (세로열로 배치하여 컨테이너 없이 직관적으로 구성) */}
      <div className="max-w-[1000px] mx-auto px-4 mt-10 space-y-12 md:space-y-16">
        
        {/* [섹션 1] 교통상황 & CCTV 조회 */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b pb-3.5 border-slate-100">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-red-500 rounded-full inline-block animate-pulse"></span>
                실시간 고속도로 교통상황 &middot; CCTV
              </h2>
              <p className="text-xs md:text-[13px] text-slate-500 font-medium mt-1">
                주요 노선별 실시간 소요 시간 및 구간별 현재 차량 속도 정보를 신속하게 모니터링합니다.
              </p>
            </div>
            <a href="/traffic" className="text-xs font-bold text-blue-600 hover:text-blue-700 shrink-0">노선 전체보기 &rarr;</a>
          </div>

          {/* 주요 도시 간 소요 시간 현황 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {travelTimes.slice(0, 4).map((t, idx) => (
              <div key={idx} className="p-4 bg-slate-50/50 border border-slate-100 rounded-xl flex flex-col justify-between space-y-2.5 transition-all hover:border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-[11.5px] font-bold text-slate-700">{t.from} &rarr; {t.to}</span>
                  <span className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded ${
                    t.status === 'smooth' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100/50' :
                    t.status === 'slow' ? 'bg-amber-50 text-amber-700 border border-amber-100/50' : 
                    'bg-red-50 text-red-700 border border-red-100/50'
                  }`}>
                    {t.status === 'smooth' ? '원활' : t.status === 'slow' ? '서행' : '정체'}
                  </span>
                </div>
                <div>
                  <span className="text-base md:text-lg font-extrabold text-slate-900 font-mono">{Math.floor(t.currentTimeMin / 60)}시간 {t.currentTimeMin % 60}분</span>
                  <p className="text-[9.5px] text-slate-400 font-mono mt-0.5">정체 {t.currentTimeMin - t.normalTimeMin}분 추가 지연</p>
                </div>
              </div>
            ))}
          </div>

          {/* 실시간 주요 CCTV 포인트 */}
          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">주요 정체 발생지역 CCTV</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {cctvPoints.slice(0, 4).map(c => (
                <button 
                  key={c.id}
                  onClick={() => setActiveCctv(c)}
                  className="p-3 bg-slate-50 hover:bg-slate-100/75 border border-slate-200/50 text-slate-800 rounded-xl text-left flex justify-between items-center transition-all cursor-pointer hover:border-slate-300"
                >
                  <div className="min-w-0 pr-1">
                    <span className="text-xs font-bold block text-slate-850 truncate">{c.name}</span>
                    <span className="text-[9.5px] text-slate-400 font-semibold font-mono truncate block">{c.highwayName}</span>
                  </div>
                  <span className="text-[10.5px] font-extrabold font-mono text-red-550 shrink-0">{c.currentSpeed}k</span>
                </button>
              ))}
            </div>
          </div>

          {/* CCTV 모달 플레이어 연계 */}
          {activeCctv && (
            <div className="bg-slate-950 text-white rounded-xl overflow-hidden border border-slate-800 mt-4 shadow-lg">
              <div className="p-3 bg-slate-900 flex justify-between items-center text-xs">
                <span className="font-bold">CCTV 모니터링: {activeCctv.name} ({activeCctv.direction})</span>
                <button onClick={() => setActiveCctv(null)} className="text-slate-400 hover:text-white font-bold cursor-pointer">&times; 닫기</button>
              </div>
              <CctvPlayer 
                cctvId={activeCctv.id}
                x={activeCctv.x}
                y={activeCctv.y}
                cctvName={activeCctv.name}
              />
            </div>
          )}
        </section>

        <hr className="border-slate-100" />

        {/* [섹션 2] 고속도로 휴게소 (방향별 조회) */}
        <section className="space-y-6">
          <div className="border-b pb-3.5 border-slate-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block"></span>
              고속도로 휴게소 대표메뉴 및 편의시설
            </h2>
            <p className="text-xs md:text-[13px] text-slate-500 font-medium mt-1">
              고속도로 노선별 상행선(서울방향) 및 하행선(부산방향) 휴게소 대표 음식과 부대 편의시설 현황을 방향별로 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* 고속도로 노선 셀렉트 */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 block">고속도로 노선 선택</label>
              <select 
                value={selectedRestHighway}
                onChange={(e) => setSelectedRestHighway(e.target.value)}
                className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 font-bold text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="경부고속도로">경부고속도로</option>
                <option value="서해안고속도로">서해안고속도로</option>
                <option value="영동고속도로">영동고속도로</option>
                <option value="남해고속도로">남해고속도로</option>
                <option value="중부고속도로">중부고속도로</option>
                <option value="중앙고속도로">중앙고속도로</option>
              </select>
            </div>

            {/* 편의시설 검색 필터 */}
            <div className="md:col-span-8 space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 block">핵심 편의시설 빠른 필터</span>
              <div className="flex flex-wrap gap-1.5">
                {['전체', '수유실', '샤워실', '수면실', '반려견놀이터'].map(fac => (
                  <button 
                    key={fac}
                    onClick={() => setSelectedRestFacility(fac)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      selectedRestFacility === fac 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/10' 
                        : 'bg-slate-50 border-slate-200/70 text-slate-650 hover:bg-slate-100'
                    }`}
                  >
                    {fac}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 상행선 / 하행선 리스트 (구분 중요!) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* 상행선 방향 */}
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-slate-800 border-b pb-1.5 block border-slate-100 flex items-center gap-1.5">
                상행선 ({selectedRestHighway === '경부고속도로' ? '서울방향' : '상행선'})
              </span>
              <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                {upBoundRestAreas
                  .filter(s => selectedRestFacility === '전체' || s.facilities.includes(selectedRestFacility))
                  .map(s => (
                    <button 
                      key={s.slug} 
                      onClick={() => setSelectedRestArea(s)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs font-bold transition-all flex justify-between cursor-pointer ${
                        selectedRestArea?.slug === s.slug 
                          ? 'bg-blue-50 border-blue-300 text-blue-750' 
                          : 'bg-slate-50/50 border-slate-100 hover:bg-slate-100/50 text-slate-850'
                      }`}
                    >
                      <span>{s.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">맛집: {s.signatureMenu.name}</span>
                    </button>
                  ))}
                {upBoundRestAreas.filter(s => selectedRestFacility === '전체' || s.facilities.includes(selectedRestFacility)).length === 0 && (
                  <p className="text-[11px] text-slate-400 py-3 text-center">조건에 만족하는 휴게소가 없습니다.</p>
                )}
              </div>
            </div>

            {/* 하행선 방향 */}
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-slate-800 border-b pb-1.5 block border-slate-100 flex items-center gap-1.5">
                하행선 ({selectedRestHighway === '경부고속도로' ? '부산방향' : '하행선'})
              </span>
              <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                {downBoundRestAreas
                  .filter(s => selectedRestFacility === '전체' || s.facilities.includes(selectedRestFacility))
                  .map(s => (
                    <button 
                      key={s.slug} 
                      onClick={() => setSelectedRestArea(s)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs font-bold transition-all flex justify-between cursor-pointer ${
                        selectedRestArea?.slug === s.slug 
                          ? 'bg-blue-50 border-blue-300 text-blue-750' 
                          : 'bg-slate-50/50 border-slate-100 hover:bg-slate-100/50 text-slate-855'
                      }`}
                    >
                      <span>{s.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">맛집: {s.signatureMenu.name}</span>
                    </button>
                  ))}
                {downBoundRestAreas.filter(s => selectedRestFacility === '전체' || s.facilities.includes(selectedRestFacility)).length === 0 && (
                  <p className="text-[11px] text-slate-400 py-3 text-center">조건에 만족하는 휴게소가 없습니다.</p>
                )}
              </div>
            </div>

          </div>

          {/* 휴게소 디테일 팝업 노출 */}
          {selectedRestArea && (
            <div className="bg-slate-900 text-white p-4.5 rounded-xl space-y-3.5 mt-4 border border-slate-800 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-bold">{selectedRestArea.name} ({selectedRestArea.directionName})</h4>
                  <span className="text-[10px] text-slate-400 block font-mono mt-0.5">{selectedRestArea.highwayName} &bull; Km {selectedRestArea.locationKm}</span>
                </div>
                <button onClick={() => setSelectedRestArea(null)} className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer">&times; 닫기</button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] border-t border-b border-slate-800 py-2.5 my-2">
                <p>휘발유: <strong className="text-blue-450">{selectedRestArea.gasStation.gasolinePrice.toLocaleString()}원</strong></p>
                <p>경유: <strong className="text-blue-455">{selectedRestArea.gasStation.dieselPrice.toLocaleString()}원</strong></p>
                <p className="col-span-2">전기차 충전기: <strong className="text-emerald-400">{selectedRestArea.gasStation.hasEvCharger ? `${selectedRestArea.gasStation.evChargersCount}기 설치` : '없음'}</strong></p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 block">식당가 대표 추천메뉴</span>
                <div className="flex justify-between items-center bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                  <span className="text-xs font-bold text-slate-350">{selectedRestArea.signatureMenu.name}</span>
                  <span className="text-xs font-bold text-blue-450">{selectedRestArea.signatureMenu.price.toLocaleString()}원</span>
                </div>
                <p className="text-[10px] text-slate-500">{selectedRestArea.signatureMenu.description}</p>
              </div>

              <a 
                href={`/rest-areas/${selectedRestArea.slug}`}
                className="block w-full bg-blue-650 hover:bg-blue-600 text-white text-center font-bold text-xs py-2.5 rounded-lg transition-colors"
              >
                휴게소 전체 맛집 및 편의시설 자세히보기 &rarr;
              </a>
            </div>
          )}
        </section>

        <hr className="border-slate-100" />

        <AdSense slot="3342272844" />

        {/* [섹션 3] 주유소 유가 비교 & 전기차 충전소 */}
        <section className="space-y-6">
          <div className="border-b pb-3.5 border-slate-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-600 rounded-full inline-block"></span>
              실시간 유가 최저가 &middot; 전기차 충전 현황
            </h2>
            <p className="text-xs md:text-[13px] text-slate-500 font-medium mt-1">
              전국 고속도로 노선의 알뜰주유소 유가 비교(휘발유/경유 최저가 TOP 3) 및 대용량 전기차(EV) 충전 시설을 갖춘 휴게소를 한눈에 비교합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 휘발유 최저가 랭킹 */}
            <div className="space-y-2.5 bg-slate-50/50 p-4 border border-slate-100 rounded-xl">
              <span className="text-[10.5px] font-bold text-slate-400 block uppercase tracking-wider border-b pb-1.5">휘발유 최저가 TOP 3</span>
              <div className="space-y-2.5 pt-1.5">
                {cheapestGasoline.map((g, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>{idx+1}. {g.name}</span>
                    <span className="font-mono text-blue-650">{g.gasStation.gasolinePrice.toLocaleString()}원</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 경유 최저가 랭킹 */}
            <div className="space-y-2.5 bg-slate-50/50 p-4 border border-slate-100 rounded-xl">
              <span className="text-[10.5px] font-bold text-slate-400 block uppercase tracking-wider border-b pb-1.5">경유 최저가 TOP 3</span>
              <div className="space-y-2.5 pt-1.5">
                {cheapestDiesel.map((d, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>{idx+1}. {d.name}</span>
                    <span className="font-mono text-blue-650">{d.gasStation.dieselPrice.toLocaleString()}원</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 전기차 충전소 순위 */}
            <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2.5 flex flex-col justify-between">
              <div>
                <span className="text-[10.5px] font-bold text-slate-400 block uppercase tracking-wider border-b border-slate-800 pb-1.5">전기차(EV) 최다 충전소 보유</span>
                <div className="space-y-2.5 pt-2">
                  {topEvAreas.map((e, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs font-bold">
                      <span>{idx+1}. {e.name} ({e.directionName})</span>
                      <span className="text-emerald-400 font-mono">{e.gasStation.evChargersCount}기</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* [섹션 4] 고속도로 통행료 계산기 */}
        <section className="space-y-6">
          <div className="border-b pb-3.5 border-slate-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block"></span>
              고속도로 통행료 예측 계산기
            </h2>
            <p className="text-xs md:text-[13px] text-slate-500 font-medium mt-1">
              출발지와 도착지 간의 예상 주행 거리, 정체 상황을 고려한 소요 시간 및 1종 승용차 기준 예상 요금을 계산합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50/50 border border-slate-100 rounded-2xl p-5 md:p-6">
            <div className="md:col-span-8 grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1.5">출발 도시</label>
                <select 
                  value={tollFrom}
                  onChange={(e) => { setTollFrom(e.target.value); calculateToll(e.target.value, tollTo); }}
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-bold focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="서울">서울</option>
                  <option value="부산">부산</option>
                  <option value="광주">광주</option>
                  <option value="대전">대전</option>
                  <option value="강릉">강릉</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1.5">도착 도시</label>
                <select 
                  value={tollTo}
                  onChange={(e) => { setTollTo(e.target.value); calculateToll(tollFrom, e.target.value); }}
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 bg-white font-bold focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="부산">부산</option>
                  <option value="서울">서울</option>
                  <option value="광주">광주</option>
                  <option value="대전">대전</option>
                  <option value="강릉">강릉</option>
                </select>
              </div>
            </div>

            {tollResult && (
              <div className="md:col-span-4 p-4 bg-slate-900 text-white rounded-xl flex justify-between items-center font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 block">예상 통행 요금 (승용차)</span>
                  <span className="text-xl font-black text-blue-400">{tollResult.price.toLocaleString()}원</span>
                </div>
                <div className="text-right text-[11px] text-slate-300">
                  <p>거리: {tollResult.distanceKm} km</p>
                  <p>시간: {tollResult.timeText}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <hr className="border-slate-100" />

        <AdSense slot="3342272844" />

        {/* [섹션 5] 자주 묻는 질문 FAQ */}
        <section className="space-y-6 pb-8">
          <div className="border-b pb-4 border-slate-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block"></span>
              자주 묻는 질문 FAQ
            </h2>
            <p className="text-slate-500 text-xs md:text-[13px] mt-1 font-medium">
              로드플러스 이용자들이 가장 많이 묻는 유가, CCTV, 전기차 충전소 관련 질문들을 모았습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 divide-y md:divide-y-0 divide-slate-100">
            <div className="space-y-5">
              <div className="pt-4 first:pt-0 space-y-1.5">
                <h3 className="font-bold text-slate-850 text-xs md:text-sm flex items-start gap-1.5 leading-snug">
                  <span className="text-blue-600 font-extrabold shrink-0">Q.</span>
                  고속도로 실시간 CCTV 화면은 어디서 확인하나요?
                </h3>
                <p className="text-slate-500 text-[11.5px] md:text-xs leading-relaxed pl-4 font-medium">
                  전국 고속도로 및 국도의 구체적인 실시간 CCTV 라이브 화면은 국토교통부 국가교통정보센터(ITS) 홈페이지, 한국도로공사 로드플러스 공식 사이트, 혹은 네이버 지도 및 카카오맵 어플리케이션의 교통 레이어를 활성화하여 간편하게 시청하실 수 있습니다.
                </p>
              </div>

              <div className="pt-4 space-y-1.5">
                <h3 className="font-bold text-slate-855 text-xs md:text-sm flex items-start gap-1.5 leading-snug">
                  <span className="text-blue-600 font-extrabold shrink-0">Q.</span>
                  알뜰주유소와 일반 휴게소 주유소의 유가 정보는 실시간인가요?
                </h3>
                <p className="text-slate-500 text-[11.5px] md:text-xs leading-relaxed pl-4 font-medium">
                  네, 한국석유공사 오피넷(Opinet) 및 도로공사 주유소 실시간 유가 API를 기반으로 휘발유, 경유 가격을 매 시각 갱신하여 비교합니다. 단, 주유소별 가격 신고 시점에 따라 실제 현장 고시 가격과 몇 원 단위의 소폭의 차이가 있을 수 있습니다.
                </p>
              </div>

              <div className="pt-4 space-y-1.5">
                <h3 className="font-bold text-slate-855 text-xs md:text-sm flex items-start gap-1.5 leading-snug">
                  <span className="text-blue-600 font-extrabold shrink-0">Q.</span>
                  휴게소 전기차(EV) 충전소의 사용 현황도 조회가 가능한가요?
                </h3>
                <p className="text-slate-500 text-[11.5px] md:text-xs leading-relaxed pl-4 font-medium">
                  각 휴게소별 전기차 급속 및 초급속 충전기 개수가 등록되어 제공됩니다. 충전소의 현재 대기 대수나 점검 상태 등 실시간 가동 상태 정보는 공공 API 응답 기준에 따라 차례대로 업데이트 중입니다.
                </p>
              </div>
            </div>

            <div className="space-y-5 md:border-l md:border-slate-100 md:pl-6 pt-4 md:pt-0">
              <div className="pt-4 first:pt-0 space-y-1.5">
                <h3 className="font-bold text-slate-855 text-xs md:text-sm flex items-start gap-1.5 leading-snug">
                  <span className="text-blue-600 font-extrabold shrink-0">Q.</span>
                  고속도로 통행료 계산 요금과 실제 통행료가 다를 수 있나요?
                </h3>
                <p className="text-slate-500 text-[11.5px] md:text-xs leading-relaxed pl-4 font-medium">
                  요금 계산기는 1종 승용차 기준 거리비례식(기본요금 + 주행거리 요금)으로 연산됩니다. 하이패스 할인(출퇴근 할인 등), 주말 할증, 혹은 민자 고속도로 터널·교량 별도 요금이 부과되는 특수 구간에서는 실제 고지되는 통행료와 소폭 편차가 있을 수 있습니다.
                </p>
              </div>

              <div className="pt-4 space-y-1.5">
                <h3 className="font-bold text-slate-855 text-xs md:text-sm flex items-start gap-1.5 leading-snug">
                  <span className="text-blue-600 font-extrabold shrink-0">Q.</span>
                  휴게소 맛집 메뉴와 수유실/샤워실 등의 편의시설은 최신인가요?
                </h3>
                <p className="text-slate-550 text-[11.5px] md:text-xs leading-relaxed pl-4 font-medium">
                  네, 도로공사에서 제공하는 전국 고속도로 휴게소의 대표 음식 및 편의시설 표준 마스터 데이터를 연산하여 실시간 수준으로 가공 제공하고 있습니다. 휴게소 내부 인테리어 공사나 식당 교체 등으로 일시적으로 변경되는 부분도 점진적으로 업데이트하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
