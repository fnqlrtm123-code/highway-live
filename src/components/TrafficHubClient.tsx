'use client';

import { useState, useMemo } from 'react';
import type { RoadProfile, RouteSegment } from '@/lib/roadData';

interface TrafficHubClientProps {
  roads: RoadProfile[];
}

export default function TrafficHubClient({ roads }: TrafficHubClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'highway' | 'urban' | 'national' | 'bridge'>('all');

  // helper to calculate status
  const getRoadStatus = (segments: RouteSegment[]) => {
    if (!segments || segments.length === 0) {
      return { label: '정보 없음', color: 'bg-slate-100 text-slate-500 border-slate-200' };
    }
    const hasCongested = segments.some(s => s.status === '정체');
    const hasSlow = segments.some(s => s.status === '서행');
    if (hasCongested) {
      return { label: '일부 정체', color: 'bg-red-50 text-red-750 border-red-100' };
    }
    if (hasSlow) {
      return { label: '지체/서행', color: 'bg-amber-50 text-amber-700 border-amber-100' };
    }
    return { label: '원활', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' };
  };

  // Get categories and counts
  const counts = useMemo(() => {
    const res = {
      all: roads.length,
      highway: 0,
      urban: 0,
      national: 0,
      bridge: 0,
    };
    roads.forEach((r) => {
      if (r.type in res) {
        res[r.type as keyof typeof res]++;
      }
    });
    return res;
  }, [roads]);

  // Filter roads
  const filteredRoads = useMemo(() => {
    return roads.filter((r) => {
      const matchesTab = activeTab === 'all' || r.type === activeTab;
      const matchesSearch =
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.start && r.start.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (r.end && r.end.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  }, [roads, activeTab, searchQuery]);

  return (
    <div className="space-y-8">
      {/* 검색 및 필터 컨트롤 */}
      <section className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block"></span>
              도로 및 노선 탐색
            </h2>
            <p className="text-slate-450 text-[11px]">카테고리를 선택하거나 찾으시는 도로명을 검색해보세요.</p>
          </div>

          {/* 검색 입력창 */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="도로명, 노선 번호, 구간 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-bold text-slate-800 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-400"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* 카테고리 탭 분류 */}
        <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
          {(['all', 'highway', 'urban', 'national', 'bridge'] as const).map((tab) => {
            const labelMap = {
              all: '전체 보기',
              highway: '고속도로',
              urban: '도시고속도로',
              national: '일반국도',
              bridge: '대교/교량',
            };
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs shadow-blue-500/10'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200/60 text-slate-550'
                }`}
              >
                <span>{labelMap[tab]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                }`}>
                  {counts[tab]}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 리스트 건수 요약 및 초기화 */}
      <div className="flex justify-between items-center px-1">
        <h3 className="text-xs md:text-[13px] font-bold text-slate-500">
          검색 결과 <span className="font-mono text-blue-600 font-bold">{filteredRoads.length}</span>개 노선
        </h3>
        {searchQuery || activeTab !== 'all' ? (
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTab('all');
            }}
            className="text-[11px] font-bold text-slate-450 hover:text-blue-600 transition-colors cursor-pointer"
          >
            필터 초기화
          </button>
        ) : null}
      </div>

      {/* 필터링된 도로 카드 그리드 */}
      {filteredRoads.length === 0 ? (
        <div className="bg-white border border-slate-200/60 rounded-2xl py-20 text-center text-slate-400 font-semibold text-sm">
          조건에 부합하는 도로 정보가 없습니다. 검색어를 다시 입력해 보세요.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRoads.map((road) => {
            const status = getRoadStatus(road.segments);
            const typeBadgeStyle = 
              road.type === 'highway' ? 'bg-blue-50 text-blue-750 border-blue-100' :
              road.type === 'urban' ? 'bg-emerald-50 text-emerald-750 border-emerald-100' :
              road.type === 'national' ? 'bg-indigo-50 text-indigo-750 border-indigo-100' :
              'bg-slate-50 text-slate-700 border-slate-200';
            
            const typeLabel = 
              road.type === 'highway' ? '고속도로' :
              road.type === 'urban' ? '도시고속' :
              road.type === 'national' ? '일반국도' :
              '대교';

            return (
              <a
                key={road.slug}
                href={`/traffic/${road.slug}`}
                className="group block bg-white border border-slate-200/60 rounded-2xl p-5 hover:border-blue-600 hover:shadow-sm hover:shadow-blue-500/5 transition-all cursor-pointer space-y-4"
              >
                {/* 상단 구분 및 상태 */}
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${typeBadgeStyle}`}>
                    {typeLabel}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${status.color}`}>
                    {status.label}
                  </span>
                </div>

                {/* 이름 및 노선 정보 */}
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-[14.5px] group-hover:text-blue-600 transition-colors leading-tight">
                    {road.name}
                  </h4>
                  <p className="text-[11.5px] text-slate-450 font-medium truncate">
                    {road.detail}
                  </p>
                </div>

                {/* 하단 액션바 */}
                <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-[10.5px]">
                  <span className="text-slate-400 font-mono">
                    구간 {road.segments.length}개 연동
                  </span>
                  <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    실시간 소통 &amp; CCTV &rarr;
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
