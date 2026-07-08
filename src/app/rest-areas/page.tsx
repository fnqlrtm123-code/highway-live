'use client';

import { useState, useMemo } from 'react';
import { serviceAreas, highways } from '@/lib/data';
import AdSense from '@/components/AdSense';
import HubHeader from '@/components/HubHeader';

export default function RestAreasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHighway, setSelectedHighway] = useState('all');

  // 검색어 및 선택 고속도로 노선 필터링
  const filteredServiceAreas = useMemo(() => {
    return serviceAreas.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.highwayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.signatureMenu.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesHighway = selectedHighway === 'all' || s.highwayName.includes(selectedHighway);
      return matchesSearch && matchesHighway;
    });
  }, [searchQuery, selectedHighway]);

  // 고속도로 리스트 정렬 및 전체 추가
  const highwayFilterList = useMemo(() => {
    const list = highways.map(h => ({ slug: h.slug, name: h.name.replace('고속도로', '') }));
    return [{ slug: 'all', name: '전체 노선' }, ...list];
  }, []);

  return (
    <>
      <HubHeader />
      <main className="mx-auto max-w-[1200px] px-5 py-10 flex-grow space-y-10">
        
        {/* 타이틀 및 헤더 */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21h8.25" />
            </svg>
            전국 고속도로 편의 인프라 정보
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            전국 고속도로 휴게소 맛집 &amp; 편의시설 가이드
          </h1>
          <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed">
            전국 고속도로 노선별 상·하행 휴게소의 시그니처 대표 음식(EX-FOOD) 정보, 수유실/샤워실/수면실 등의 특수 편의시설 설치 현황 및 브랜드 주유소 정보를 직관적인 검색 필터로 빠르고 신속하게 안내합니다.
          </p>
        </div>

        {/* 애드센스 */}
        <AdSense slot="4455667788" />

        {/* 실시간 필터 & 검색 대시보드 */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-[17px] font-semibold text-slate-800 flex items-center gap-2">
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* 노선 빠른 선택 칩 그룹 */}
          <div className="flex flex-wrap gap-2 py-1 max-h-36 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
            {highwayFilterList.map((h) => {
              const isSelected = selectedHighway === h.slug || (h.slug !== 'all' && selectedHighway.includes(h.slug));
              return (
                <button
                  key={h.slug}
                  onClick={() => setSelectedHighway(h.slug === 'all' ? 'all' : h.slug)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-650'
                  }`}
                >
                  {h.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* 필터링된 휴게소 리스트 */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px] font-semibold text-slate-800">
              조회 결과 <span className="font-mono text-blue-600 font-bold">{filteredServiceAreas.length}</span>곳
            </h3>
            {searchQuery || selectedHighway !== 'all' ? (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedHighway('all'); }}
                className="text-xs font-semibold text-slate-450 hover:text-blue-600 transition-colors"
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
              {filteredServiceAreas.map((s) => (
                <div 
                  key={s.slug} 
                  className="p-6 border border-slate-200/80 bg-white hover:border-blue-500 hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition-all duration-300 rounded-2xl flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[18px] font-bold text-slate-900 tracking-tight">{s.name}</h4>
                        <p className="text-xs text-slate-500 mt-1 font-medium">
                          {s.highwayName} &middot; {s.directionName}
                        </p>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${
                        s.direction === '상행' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                        s.direction === '하행' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}>
                        {s.directionName}
                      </span>
                    </div>

                    {/* 대표 메뉴 정보 */}
                    <div className="bg-slate-50 p-4 border border-slate-100 rounded-xl space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">시그니처 메뉴</span>
                        <span className="text-sm font-mono font-bold text-slate-800">{s.signatureMenu.price.toLocaleString()}원</span>
                      </div>
                      <p className="text-[14px] font-bold text-slate-850 mt-1">{s.signatureMenu.name}</p>
                      <p className="text-xs text-slate-500 leading-normal line-clamp-1 font-normal">{s.signatureMenu.description}</p>
                    </div>
                  </div>

                  {/* 하단 편의시설 칩 및 상세정보 링크 */}
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1 max-w-[220px]">
                      {s.facilities.slice(0, 3).map((f) => (
                        <span key={f} className="text-[10px] font-medium bg-slate-100 text-slate-650 px-2 py-0.5 rounded-md border border-slate-200/50">
                          {f}
                        </span>
                      ))}
                      {s.facilities.length > 3 && (
                        <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100">
                          +{s.facilities.length - 3}
                        </span>
                      )}
                    </div>
                    <a 
                      href={`/rest-areas/${s.slug}`}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm shrink-0"
                    >
                      종합 정보 &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* FAQ 가이드 세션 */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-6">
          <h2 className="text-[18px] font-bold text-slate-900 border-b pb-4 border-slate-100 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            고속도로 휴게소 이용 자주 묻는 질문(FAQ)
          </h2>
          
          <div className="space-y-6 text-[13.5px] text-slate-650 leading-relaxed">
            <div className="space-y-1.5">
              <h4 className="font-semibold text-slate-900 text-sm">Q. 한국도로공사의 EX-FOOD 인증 메뉴는 무엇인가요?</h4>
              <p className="text-slate-500 font-normal">
                EX-FOOD는 매년 한국도로공사가 전국 휴게소 음식의 품질과 가격 조화를 평가하여 엄선한 대표 음식 브랜드입니다. 외부 요리 전문가와 고객들의 실시간 블라인드 평가를 종합하여 공인 평가단의 엄밀한 위생 및 맛 검증을 통과한 고품질 요리입니다.
              </p>
            </div>

            <div className="space-y-1.5 border-t border-slate-100 pt-4">
              <h4 className="font-semibold text-slate-900 text-sm">Q. 휴게소 수유실, 화장실, 수면실 및 샤워시설 등 편의시설 유무는 어떻게 파악하나요?</h4>
              <p className="text-slate-500 font-normal">
                휴게소 이름 아래 나열된 편의시설 배지들을 참고하시거나 상단 상세 링크를 통하시면 영업 시간, 비상 약품 보유 여부, 장애인 편의시설 등 상세한 정밀 인프라를 조회하실 수 있습니다. 특히 화물차 운전자를 위한 수면실과 샤워시설은 주요 거점 휴게소에 상시 설치되어 운영 중입니다.
              </p>
            </div>

            <div className="space-y-1.5 border-t border-slate-100 pt-4">
              <h4 className="font-semibold text-slate-900 text-sm">Q. 상행선 휴게소와 하행선 휴게소 음식이 다른가요?</h4>
              <p className="text-slate-500 font-normal">
                대부분의 고속도로 휴게소는 상행선과 하행선이 마주보고 있거나 분리된 독자 법인으로 운영되므로 제공되는 맛집 메뉴와 실시간 유가가 다를 수 있습니다. 따라서 주행하시는 방향(예: 부산방향, 서울방향)을 반드시 확인하신 후 대표 먹거리 정보를 검토하시는 것이 권장됩니다.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
