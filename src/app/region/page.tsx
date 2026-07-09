import { serviceAreas } from '@/lib/data';
import { REGIONS, getRegionOfRestArea } from '@/lib/regionHelper';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '지역별 고속도로 휴게소 찾기 경기 강원 충청 전라 경상 전국 안내',
  description: '전국 13개 시도(경기도, 강원도, 충청도, 전라도, 경상도 등) 지역별 고속도로 휴게소 위치, 대표 음식, 브랜드 주유소 및 편의시설 정보를 한눈에 조회하세요.',
};

export default function RegionIndexPage() {
  // 각 지역별 휴게소 개수 계산 및 대표 휴게소 추출
  const regionStats = REGIONS.map((r) => {
    const areas = serviceAreas.filter((s) => getRegionOfRestArea(s) === r.slug);
    
    // 대표 휴게소 3개 선정 (signature menu 가격이 높은 순 또는 대표적인 이름순)
    const featured = areas
      .slice(0, 3)
      .map((a) => a.name.replace('휴게소', ''))
      .join(', ');

    return {
      ...r,
      count: areas.length,
      featured: featured ? `${featured}` : '정보 준비 중',
    };
  });

  // 전체 휴게소 총합
  const totalCount = serviceAreas.length;

  return (
    <main className="mx-auto max-w-[1200px] px-5 py-10 flex-grow space-y-10">
      
      {/* 타이틀 및 소개 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          지역별 고속도로 인프라
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          전국 지역별 고속도로 휴게소 안내
        </h1>
        <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed">
          대한민국 13개 주요 시·도 행정구역을 기준으로 분포되어 있는 총 {totalCount}개 고속도로 휴게소의 현황을 제공합니다. 
          자주 방문하는 목적지나 출발지 지역을 선택하여 인근 휴게소의 먹거리와 유가 정보를 빠르게 비교해보세요.
        </p>
      </div>

      {/* 애드센스 */}
      <AdSense slot="1122334499" />

      {/* 지역 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {regionStats.map((reg) => (
          <a
            key={reg.slug}
            href={`/region/${reg.slug}`}
            className="group block bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-blue-600/80 hover:shadow-[0_4px_20px_rgba(37,99,235,0.05)] transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider">{reg.fullName}</span>
                <h2 className="text-lg font-semibold text-slate-800 mt-0.5 group-hover:text-blue-600 transition-colors">
                  {reg.name} 지역 휴게소
                </h2>
              </div>
              <span className="bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-550 transition-colors">
                {reg.count}개소
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-normal border-t border-slate-50 pt-3 group-hover:border-blue-50 transition-colors">
              <span className="font-semibold text-slate-500 block mb-1">대표 휴게소</span>
              {reg.featured} {reg.count > 3 && '등'}
            </p>
            
            <div className="flex items-center gap-1 text-[11px] font-bold text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all">
              <span>자세히 보기</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>

    </main>
  );
}
