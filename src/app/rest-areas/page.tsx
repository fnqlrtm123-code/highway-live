'use client';

import { useState, useMemo } from 'react';
import { serviceAreas, highways } from '@/lib/data';
import AdSense from '@/components/AdSense';
import HubHeader from '@/components/HubHeader';
import Breadcrumb from '@/components/Breadcrumb';
import { getRestAreaThumbnail } from '@/lib/imageHelper';

export default function RestAreasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHighway, setSelectedHighway] = useState('all');

  // 검색어 및 선택 고속도로 노선 필터링
  const filteredServiceAreas = useMemo(() => {
    return serviceAreas.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.highwayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.signatureMenu.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesHighway = selectedHighway === 'all' || s.highwaySlug === selectedHighway;
      return matchesSearch && matchesHighway;
    });
  }, [searchQuery, selectedHighway]);

  // 고속도로 리스트 그룹화
  const groupedHighways = useMemo(() => {
    const mainSlugs = ['gyeongbu', 'seohaean', 'yeongdong', 'namhae', 'jungbu', 'honam', 'jungang', 'jungbunaeryuk', 'seoul-yangyang'];
    const branchAndCircularSlugs = [
      'capital-circular-1', 'capital-circular-2', 'busan-outer-circular', 
      'daegu-outer-circular', 'daejeon-southern-circular', 'namhae-branch-2', 
      'honam-branch', 'jungbunaeryuk-branch', 'jungang-branch'
    ];

    const mainList: { slug: string; name: string }[] = [];
    const branchList: { slug: string; name: string }[] = [];
    const generalList: { slug: string; name: string }[] = [];

    highways.forEach(h => {
      const item = { slug: h.slug, name: h.name.replace('고속도로', '') };
      if (mainSlugs.includes(h.slug)) {
        mainList.push(item);
      } else if (branchAndCircularSlugs.includes(h.slug)) {
        branchList.push(item);
      } else {
        generalList.push(item);
      }
    });

    mainList.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    branchList.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    generalList.sort((a, b) => a.name.localeCompare(b.name, 'ko'));

    return [
      { key: 'main', label: '주요 간선 노선', items: mainList },
      { key: 'branch', label: '순환선 및 지선', items: branchList },
      { key: 'general', label: '일반 노선', items: generalList }
    ];
  }, []);

  return (
    <>
      <HubHeader />
      <main className="mx-auto max-w-[1200px] px-4 py-12 flex-grow space-y-10 text-slate-800 font-sans">
        
        <Breadcrumb items={[{ name: '고속도로 휴게소', href: '/rest-areas' }]} />

        {/* 타이틀 및 헤더 */}
        <div className="space-y-3.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-650 px-3 py-1 rounded-full text-xs font-bold">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21h8.25" />
            </svg>
            전국 고속도로 편의 인프라 정보
          </div>
          <h1 className="text-2.5xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            전국 고속도로 휴게소 맛집 &amp; 편의시설 가이드
          </h1>
          <p className="text-slate-500 text-xs md:text-[13.5px] leading-relaxed max-w-3xl font-medium">
            전국 고속도로 노선별 상·하행 휴게소의 대표 음식 정보, 수유실/샤워실/수면실 등의 특수 편의시설 설치 현황 및 브랜드 주유소 정보를 직관적인 검색 필터로 빠르고 신속하게 안내합니다.
          </p>
        </div>

        {/* 애드센스 */}
        <AdSense slot="4455667788" />

        {/* 실시간 필터 & 검색 대시보드 */}
        <section className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 border-slate-100">
            <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block"></span>
              조건별 휴게소 간편 검색
            </h2>
            
            {/* 검색창 */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="휴게소 이름, 대표 메뉴 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-bold text-slate-800 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* 노선 빠른 선택 칩 그룹 (가독성 좋게 분류) */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider min-w-[70px]">전체 선택</span>
              <button
                onClick={() => setSelectedHighway('all')}
                className={`px-3.5 py-1.5 rounded-xl text-[10.5px] font-bold transition-all cursor-pointer ${
                  selectedHighway === 'all'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs shadow-blue-500/10'
                    : 'bg-slate-50 hover:bg-slate-100 border border-slate-200/50 text-slate-500'
                }`}
              >
                전체 노선
              </button>
            </div>

            {groupedHighways.map((group) => (
              <div key={group.key} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 border-t border-slate-100/70 pt-3">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider min-w-[70px] pt-1.5">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((h) => {
                    const isSelected = selectedHighway === h.slug;
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
              </div>
            ))}
          </div>
        </section>

        {/* 필터링된 휴게소 리스트 */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs md:text-[13px] font-bold text-slate-500">
              조회 결과 <span className="font-mono text-blue-605 font-bold">{filteredServiceAreas.length}</span>곳
            </h3>
            {searchQuery || selectedHighway !== 'all' ? (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedHighway('all'); }}
                className="text-[11px] font-bold text-slate-450 hover:text-blue-600 transition-colors cursor-pointer"
              >
                필터 초기화
              </button>
            ) : null}
          </div>

          {filteredServiceAreas.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl py-20 text-center text-slate-400 font-semibold text-sm">
              조건에 맞는 휴게소 정보가 없습니다. 검색어를 변경해보세요.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServiceAreas.map((s) => {
                const hasGas = s.gasStation && s.gasStation.brand && s.gasStation.brand !== '없음';
                const gasInfo = hasGas ? `${s.gasStation.brand} 주유소` : '';
                const chargers = [];
                if (s.gasStation?.hasEvCharger) chargers.push('전기차 충전소');
                if (s.gasStation?.hasHydrogen) chargers.push('수소차 충전소');
                const chargerInfo = chargers.length > 0 ? chargers.join(' 및 ') : '';

                const mainFacilities = s.facilities.slice(0, 2).join(', ');
                const facilitiesInfo = mainFacilities ? `${mainFacilities} 등의 편의시설` : '';

                const parts = [gasInfo, chargerInfo, facilitiesInfo].filter(Boolean);
                const restAreaSummary = `${s.highwayName} ${s.directionName}에 위치하며, ${parts.join(', ')}을 편리하게 이용하실 수 있습니다.`;

                return (
                  <div 
                    key={s.slug} 
                    className="overflow-hidden border border-slate-200/60 bg-white hover:border-blue-500 hover:shadow-md transition-all duration-300 rounded-2xl flex flex-col justify-between"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={getRestAreaThumbnail(s.highwaySlug)} 
                        alt={`${s.name} 전경`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className={`absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-md border shadow-xs ${
                        s.direction === '상행' ? 'bg-blue-600 text-white border-blue-500' :
                        s.direction === '하행' ? 'bg-rose-600 text-white border-rose-500' : 'bg-slate-600 text-white border-slate-500'
                      }`}>
                        {s.directionName}
                      </span>
                    </div>

                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        {/* Header */}
                        <div>
                          <h4 className="text-sm md:text-[15px] font-extrabold text-slate-900 tracking-tight">{s.name}</h4>
                          <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                            {s.highwayName} &middot; {s.locationKm}km 지점
                          </p>
                        </div>

                        {/* 휴게소 자체 요약 정보 */}
                        <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal line-clamp-2">
                          {restAreaSummary}
                        </p>

                        {/* 추천 메뉴 정보 (과도한 강조를 줄이고 정돈된 형태) */}
                        <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex justify-between items-center gap-3">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-[8.5px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-150/40 shrink-0">추천 메뉴</span>
                            <span className="text-[11.5px] font-bold text-slate-800 truncate">{s.signatureMenu.name}</span>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-slate-700 shrink-0">{s.signatureMenu.price.toLocaleString()}원</span>
                        </div>
                      </div>

                      {/* 하단 편의시설 칩 및 상세정보 링크 */}
                      <div className="flex justify-between items-center pt-3 border-t border-slate-100/80">
                        <div className="flex flex-wrap gap-1 max-w-[220px]">
                          {s.facilities.slice(0, 3).map((f) => (
                            <span key={f} className="text-[9.5px] font-bold bg-slate-100/80 text-slate-500 px-2 py-0.5 rounded-md border border-slate-200/40">
                              {f}
                            </span>
                          ))}
                          {s.facilities.length > 3 && (
                            <span className="text-[9.5px] font-bold text-slate-400 bg-slate-100/40 px-1.5 py-0.5 rounded-md border border-slate-100/80">
                              +{s.facilities.length - 3}
                            </span>
                          )}
                        </div>
                        <a 
                          href={`/rest-areas/${s.slug}`}
                          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-[10.5px] px-3 py-2 rounded-lg transition-all shadow-2xs shrink-0 cursor-pointer"
                        >
                          상세 정보 &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* FAQ 가이드 세션 */}
        <section className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
          <h2 className="text-[15px] font-bold text-slate-900 border-b pb-4 border-slate-100 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-650" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            고속도로 휴게소 이용 자주 묻는 질문(FAQ)
          </h2>
          
          <div className="space-y-5 text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
            <div className="space-y-1">
              <h4 className="font-bold text-slate-800 text-xs md:text-[13px]">Q. 한국도로공사가 지정한 휴게소 대표 음식은 무엇인가요?</h4>
              <p className="text-[12.5px] font-semibold text-slate-500 leading-relaxed">
                대표 음식은 한국도로공사가 전국 휴게소 음식의 품질과 가격 조화를 평가하여 엄선한 공식 대표 메뉴입니다. 외부 요리 전문가와 고객들의 실시간 블라인드 평가를 종합하여 공인 평가단의 엄밀한 위생 및 맛 검증을 통과한 맛있는 요리입니다.
              </p>
            </div>

            <div className="space-y-1 border-t border-slate-100 pt-4">
              <h4 className="font-bold text-slate-800 text-xs md:text-[13px]">Q. 휴게소 수유실, 화장실, 수면실 및 샤워시설 등 편의시설 유무는 어떻게 파악하나요?</h4>
              <p className="text-[12.5px] font-semibold text-slate-500 leading-relaxed">
                휴게소 이름 아래 나열된 편의시설 배지들을 참고하시거나 상단 상세 링크를 통하시면 영업 시간, 비상 약품 보유 여부, 장애인 편의시설 등 상세한 정밀 인프라를 조회하실 수 있습니다. 특히 화물차 운전자를 위한 수면실과 샤워시설은 주요 거점 휴게소에 상시 설치되어 운영 중입니다.
              </p>
            </div>

            <div className="space-y-1 border-t border-slate-100 pt-4">
              <h4 className="font-bold text-slate-800 text-xs md:text-[13px]">Q. 상행선 휴게소와 하행선 휴게소 음식이 다른가요?</h4>
              <p className="text-[12.5px] font-semibold text-slate-500 leading-relaxed">
                대부분의 고속도로 휴게소는 상행선과 하행선이 마주보고 있거나 분리된 독자 법인으로 운영되므로 제공되는 맛집 메뉴와 실시간 유가가 다를 수 있습니다. 따라서 주행하시는 방향(예: 부산방향, 서울방향)을 반드시 확인하신 후 대표 먹거리 정보를 검토하시는 것이 권장됩니다.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
