'use client';

import { useState, useMemo } from 'react';
import { serviceAreas, highways } from '@/lib/data';
import AdSense from '@/components/AdSense';
import HubHeader from '@/components/HubHeader';

type FuelSortType = 'gasoline' | 'diesel' | 'lpg';

export default function GasIndexPage() {
  const [selectedHighway, setSelectedHighway] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [fuelType, setFuelType] = useState<FuelSortType>('gasoline');

  // 고속도로 리스트 정렬 및 전체 추가
  const highwayFilterList = useMemo(() => {
    const list = highways.map(h => ({ slug: h.slug, name: h.name.replace('고속도로', '') }));
    return [{ slug: 'all', name: '전체 노선' }, ...list];
  }, []);

  // 전체 주유소 데이터 가공 및 필터링
  const processedStations = useMemo(() => {
    let list = serviceAreas.map(s => ({
      name: s.name,
      slug: s.slug,
      highwayName: s.highwayName,
      directionName: s.directionName,
      brand: s.gasStation.brand,
      gasoline: s.gasStation.gasolinePrice,
      diesel: s.gasStation.dieselPrice,
      lpg: s.gasStation.lpgPrice,
      hasEv: s.gasStation.hasEvCharger,
      evCount: s.gasStation.evChargersCount,
    }));

    // 1. 노선 필터링
    if (selectedHighway !== 'all') {
      list = list.filter(item => item.highwayName.includes(selectedHighway));
    }

    // 2. 검색어 필터링
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      list = list.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.highwayName.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query)
      );
    }

    // 3. 선택 유종별 가격 정렬 (LPG는 가격 정보 있는 곳만)
    if (fuelType === 'lpg') {
      list = list.filter(item => item.lpg !== null && item.lpg > 0);
      list.sort((a, b) => (a.lpg || 0) - (b.lpg || 0));
    } else if (fuelType === 'diesel') {
      list = list.filter(item => item.diesel > 0);
      list.sort((a, b) => a.diesel - b.diesel);
    } else {
      list = list.filter(item => item.gasoline > 0);
      list.sort((a, b) => a.gasoline - b.gasoline);
    }

    return list;
  }, [selectedHighway, searchQuery, fuelType]);

  // TOP 3 알뜰 정보 도출 (0원 가격 제외 필터 적용)
  const cheapestGasoline = useMemo(() => {
    return [...serviceAreas]
      .filter(s => s.gasStation.gasolinePrice > 0)
      .sort((a, b) => a.gasStation.gasolinePrice - b.gasStation.gasolinePrice)
      .slice(0, 3);
  }, []);

  const cheapestDiesel = useMemo(() => {
    return [...serviceAreas]
      .filter(s => s.gasStation.dieselPrice > 0)
      .sort((a, b) => a.gasStation.dieselPrice - b.gasStation.dieselPrice)
      .slice(0, 3);
  }, []);

  return (
    <>
      <HubHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-10 text-slate-800 font-sans">
        
        {/* 타이틀 및 헤더 */}
        <div className="space-y-3.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-650 px-3 py-1 rounded-full text-xs font-bold">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            실시간 전국 유가 비교 포털
          </div>
          <h1 className="text-2.5xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight">
            실시간 고속도로 주유소 가격 비교
          </h1>
          <p className="text-slate-500 text-xs md:text-[13.5px] max-w-3xl leading-relaxed font-medium">
            오늘 전국의 고속도로 노선별 알뜰주유소(ex-OIL) 및 브랜드별 주유소의 실시간 휘발유, 경유, LPG 가격을 실시간으로 분석합니다. 출발 전 최적의 주유 계획을 세워 유류비를 효과적으로 아껴보세요.
          </p>
        </div>

        <AdSense slot="5566778899" />

        {/* 최저가 요약 전광판 (TOP 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 휘발유 최저가 랭킹 */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="text-[14px] font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full inline-block"></span>
                오늘의 휘발유 최저가 TOP 3
              </span>
              <span className="text-[10px] text-slate-400 font-bold">전국 기준</span>
            </h2>
            <div className="space-y-3.5">
              {cheapestGasoline.map((area, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-800">{idx + 1}위. {area.name} ({area.directionName})</span>
                    <span className="text-[10px] text-slate-400 block font-semibold">{area.highwayName} &middot; {area.gasStation.brand}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-extrabold text-blue-650 text-[13.5px]">{area.gasStation.gasolinePrice}원</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 경유 최저가 랭킹 */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="text-[14px] font-bold text-slate-900 border-b pb-3 border-slate-100 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-orange-500 rounded-full inline-block"></span>
                오늘의 경유 최저가 TOP 3
              </span>
              <span className="text-[10px] text-slate-400 font-bold">전국 기준</span>
            </h2>
            <div className="space-y-3.5">
              {cheapestDiesel.map((area, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-800">{idx + 1}위. {area.name} ({area.directionName})</span>
                    <span className="text-[10px] text-slate-400 block font-semibold">{area.highwayName} &middot; {area.gasStation.brand}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-extrabold text-orange-600 text-[13.5px]">{area.gasStation.dieselPrice}원</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 인터랙티브 실시간 비교 테이블 */}
        <section className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-4.5 border-slate-100">
            <div>
              <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
                노선별 주유소 &amp; 충전소 실시간 비교표
              </h2>
              <p className="text-slate-450 text-[11px] font-bold mt-1">유종을 선택하고 검색어를 입력하여 맞춤형 가격표를 확인하세요.</p>
            </div>

            {/* 유종 토글 스위치 */}
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600 shrink-0 self-start lg:self-center">
              <button 
                onClick={() => setFuelType('gasoline')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${fuelType === 'gasoline' ? 'bg-white text-slate-900 shadow-xs' : ''}`}
              >
                휘발유
              </button>
              <button 
                onClick={() => setFuelType('diesel')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${fuelType === 'diesel' ? 'bg-white text-slate-900 shadow-xs' : ''}`}
              >
                경유
              </button>
              <button 
                onClick={() => setFuelType('lpg')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${fuelType === 'lpg' ? 'bg-white text-slate-900 shadow-xs' : ''}`}
              >
                LPG
              </button>
            </div>
          </div>

          {/* 검색 및 필터 컨트롤러 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
              {highwayFilterList.map((h) => {
                const isSelected = selectedHighway === h.slug || (h.slug !== 'all' && selectedHighway.includes(h.slug));
                return (
                  <button
                    key={h.slug}
                    onClick={() => setSelectedHighway(h.slug)}
                    className={`px-3 py-1.5 rounded-xl text-[10.5px] font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs shadow-blue-500/10'
                        : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/50 text-slate-500'
                    }`}
                  >
                    {h.name}
                  </button>
                );
              })}
            </div>
            
            <div className="md:col-span-4 relative self-center">
              <input
                type="text"
                placeholder="주유소 이름, 브랜드 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-bold text-slate-800 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* 결과 리스트 */}
          <div className="space-y-4">
            <div className="flex justify-between text-[11px] text-slate-450 font-bold px-1.5">
              <span>주유소 (노선 &middot; 방향)</span>
              <span>판매 가격 ({fuelType === 'gasoline' ? '휘발유' : fuelType === 'diesel' ? '경유' : 'LPG'} 기준)</span>
            </div>

            {processedStations.length === 0 ? (
              <div className="py-12 border border-dashed border-slate-200 rounded-2xl text-center text-slate-400 text-xs font-bold">
                검색 조건에 일치하는 주유소 정보가 존재하지 않습니다.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {processedStations.map((station, idx) => {
                  const price = fuelType === 'gasoline' ? station.gasoline : fuelType === 'diesel' ? station.diesel : station.lpg;
                  return (
                    <div 
                      key={station.slug} 
                      className="p-4 border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-xs transition-all rounded-xl flex justify-between items-center text-xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-800">{station.name}</span>
                          <span className="bg-blue-50 text-blue-700 text-[9px] font-black px-1.5 py-0.5 rounded-sm">
                            {station.brand}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 block font-semibold">
                          {station.highwayName} &middot; {station.directionName}
                        </span>
                      </div>
                      
                      <div className="text-right flex items-center gap-3">
                        <span className={`font-mono font-extrabold text-[13.5px] ${
                          fuelType === 'gasoline' ? 'text-blue-650' : fuelType === 'diesel' ? 'text-orange-600' : 'text-emerald-650'
                        }`}>
                          {price ? `${price.toLocaleString()}원` : '정보 없음'}
                        </span>
                        <a 
                          href={`/rest-areas/${station.slug}/gas`}
                          className="bg-slate-900 hover:bg-slate-800 text-white text-[10.5px] font-bold px-2.5 py-1.5 rounded-lg transition-colors"
                        >
                          가격 추이 &rarr;
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* SEO 용 유가 정보 FAQ 가이드 */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-6">
          <h2 className="text-[15px] font-bold flex items-center gap-2 text-white">
            <span className="w-1.5 h-3.5 bg-blue-500 rounded-full inline-block"></span>
            고속도로 유가 절약 및 주유 팁 자주 묻는 질문(FAQ)
          </h2>
          
          <div className="space-y-5 text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
            <div className="space-y-1">
              <h4 className="font-bold text-white text-[14px]">Q. 알뜰주유소(ex-OIL)와 브랜드 주유소의 요금 차이가 왜 발생하나요?</h4>
              <p className="text-[12.5px]">
                고속도로 알뜰주유소인 ex-OIL은 한국도로공사가 유류를 공동 구매하여 공급 단가를 낮추고, 주유기 셀프 서비스 도입 및 편의 마진을 대폭 축소하여 일반 정유사 브랜드 대리점 대비 약 50원~100원 저렴한 유가 정책을 연중 일정하게 유지합니다. 기름 품질은 한국석유관리원에서 매월 품질 검사를 거친 동일 정품 유류이므로 안심하고 주유하셔도 좋습니다.
              </p>
            </div>
 
            <div className="space-y-1 border-t border-slate-800 pt-4">
              <h4 className="font-bold text-white text-[14px]">Q. 전기차(EV) 급속/초급속 충전소의 요금 및 결제는 어떻게 되나요?</h4>
              <p className="text-[12.5px]">
                고속도로에 구축된 전기차 초급속 충전 시설(대표적으로 환경부 또는 현대 E-pit 등)은 충전기 종류에 따라 요금이 다르게 부과될 수 있습니다. 대부분 회원 카드 및 간편 카드를 태그하여 충전 결제가 진행되며, 실시간 충전기 가동 상황 및 고장 여부는 상단 '전기차 충전소' 전용 허브에서 실시간 기기 대수 목록으로 확인 가능합니다.
              </p>
            </div>
          </div>
        </section>
 
      </main>
    </>
  );
}
