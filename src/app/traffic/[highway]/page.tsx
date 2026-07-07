import { getServiceAreasByHighway } from '@/lib/data';
import { getRoadList, getRoadBySlug } from '@/lib/roadData';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ highway: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { highway: highwaySlug } = await params;
  const road = getRoadBySlug(highwaySlug);
  if (!road) return {};

  return {
    title: `${road.name} 교통상황 - 실시간 확인방법 및 우회노선 안내`,
    description: `${road.name}의 교통상황 확인방법, 실시간 CCTV 영상 안내, 상행선·하행선 방향 정리, 상습 정체 구간 분석, 우회도로 선택 기준 및 FAQ 정보를 제공합니다.`,
  };
}

export async function generateStaticParams() {
  const roads = getRoadList();
  return roads.map((r) => ({
    highway: r.slug,
  }));
}

export default async function HighwayTrafficPage({ params }: Props) {
  const { highway: highwaySlug } = await params;
  const road = getRoadBySlug(highwaySlug);

  if (!road) {
    notFound();
  }

  const serviceAreas = getServiceAreasByHighway(road.slug);

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-8 flex-grow space-y-10">

      {/* CGV 스타일 히어로 레이아웃 (배경 파란색 완전 제거, 화이트/연한그레이 깔끔한 테두리) */}
      <div className="bg-white border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        {/* 좌측: 1:1 비율 정사각형 썸네일 이미지 규격 (도로별 고유 SVG 썸네일 데이터 매핑) */}
        <div className="w-[180px] h-[180px] shrink-0 bg-slate-100 border border-slate-200 overflow-hidden shadow-sm">
          <img 
            src={road.images.thumb} 
            alt={`${road.name} 썸네일`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 우측: 상세 메타데이터 정보 영역 */}
        <div className="flex-grow space-y-5 w-full">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 text-center md:text-left">
              {road.name} 교통상황
            </h1>
            <p className="text-slate-550 text-xs md:text-sm text-center md:text-left font-medium">
              {road.detail}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-400 w-16 shrink-0">구간 연장</span>
              <span className="font-mono text-slate-800">{road.length || '정보 확인중'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-400 w-16 shrink-0">도로 유형</span>
              <span className="text-slate-800">
                {road.type === 'highway' ? '고속도로' : road.type === 'urban' ? '도시고속도로' : road.type === 'national' ? '일반국도' : '대교'}
              </span>
            </div>
            {road.start && (
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400 w-16 shrink-0">기점 (시작)</span>
                <span className="text-slate-800">{road.start}</span>
              </div>
            )}
            {road.end && (
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400 w-16 shrink-0">종점 (도착)</span>
                <span className="text-slate-800">{road.end}</span>
              </div>
            )}
          </div>

          {/* CGV 예매하기/상세 버튼 스타일의 액션 버튼 그룹 */}
          <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
            <a 
              href="#cctv-section" 
              className="bg-red-600 text-white font-bold text-xs md:text-sm px-6 py-3 hover:bg-red-700 transition-colors shadow-sm"
            >
              CCTV 실시간 확인
            </a>
            <a 
              href="#detour-section" 
              className="bg-slate-900 text-white font-bold text-xs md:text-sm px-6 py-3 hover:bg-slate-800 transition-colors shadow-sm"
            >
              우회도로 선택 기준
            </a>
          </div>
        </div>
      </div>

      {/* 애드센스 */}
      <AdSense slot="2233445566" />

      {/* CGV 스틸컷 스타일 현장 실사 이미지 갤러리 섹션 (도로 고유 이미지 3장 매핑 완료) */}
      <section className="space-y-4">
        <h3 className="text-lg font-black text-slate-900 border-b pb-2 border-slate-200">
          현장 스틸컷 (실시간 도로 전경)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[16/10] bg-slate-100 border border-slate-200 overflow-hidden relative group">
            <img 
              src={road.images.still1} 
              alt="현장 스틸컷 01" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/60 p-2 text-center">
              <span className="text-xs text-white font-medium">현장 스틸컷 01 (도로 흐름)</span>
            </div>
          </div>
          <div className="aspect-[16/10] bg-slate-100 border border-slate-200 overflow-hidden relative group">
            <img 
              src={road.images.still2} 
              alt="현장 스틸컷 02" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/60 p-2 text-center">
              <span className="text-xs text-white font-medium">현장 스틸컷 02 (CCTV 관제)</span>
            </div>
          </div>
        </div>
      </section>

      {/* AEO / GEO 최적화 교통상황 정보 영역 (지정된 소제목 포맷을 엄격히 준수) */}
      <section className="bg-white border border-slate-200 p-6 md:p-8 space-y-8 text-slate-700 text-sm md:text-base leading-relaxed font-sans">
        
        {/* 개요 소개 */}
        <p className="text-slate-650">
          {road.description}
        </p>

        {/* 1. 교통상황 확인방법 */}
        <div className="space-y-3 border-t border-slate-100 pt-6">
          <h2 className="text-lg md:text-xl font-black text-slate-900">
            {road.name} 교통상황 확인방법
          </h2>
          <p className="text-slate-650">
            {road.verificationMethod}
          </p>
        </div>

        {/* 2. CCTV 실시간 확인 */}
        <div id="cctv-section" className="space-y-3 border-t border-slate-100 pt-6 scroll-mt-6">
          <h2 className="text-lg md:text-xl font-black text-slate-900">
            {road.name} CCTV 실시간 확인
          </h2>
          <p className="text-slate-650">
            {road.cctvInfo}
          </p>
        </div>

        {/* 3. 상행선·하행선 방향 정리 */}
        <div className="space-y-3 border-t border-slate-100 pt-6">
          <h2 className="text-lg md:text-xl font-black text-slate-900">
            {road.name} 상행선·하행선 방향 정리
          </h2>
          <p className="text-slate-650">
            {road.directionsText}
          </p>
        </div>

        {/* 4. 정체가 자주 발생하는 구간 */}
        <div className="space-y-3 border-t border-slate-100 pt-6">
          <h2 className="text-lg md:text-xl font-black text-slate-900">
            {road.name} 정체가 자주 발생하는 구간
          </h2>
          <p className="text-slate-650">
            {road.congestedSections}
          </p>
        </div>

        {/* 5. 우회도로 선택 기준 */}
        <div id="detour-section" className="space-y-3 border-t border-slate-100 pt-6 scroll-mt-6">
          <h2 className="text-lg md:text-xl font-black text-slate-900">
            {road.name} 우회도로 선택 기준
          </h2>
          <p className="text-slate-650">
            {road.detourCriteria}
          </p>
        </div>

        {/* 6. 자주 묻는 질문 FAQ */}
        <div className="space-y-4 border-t border-slate-100 pt-6">
          <h2 className="text-lg md:text-xl font-black text-slate-900">
            자주 묻는 질문 FAQ
          </h2>
          <div className="space-y-4">
            {road.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-50 pb-4 last:border-b-0 last:pb-0">
                <h4 className="font-bold text-slate-800 text-[15px]">Q{idx + 1}. {faq.q}</h4>
                <p className="text-slate-600 mt-1">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 노선 내 휴게소 목록 */}
      {serviceAreas.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-black text-slate-900 border-b pb-3 border-slate-200">
            이 노선의 휴게소 목록
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceAreas.map((s) => (
              <div key={s.slug} className="p-5 bg-white border border-slate-200 flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-black text-slate-800">{s.name}</h3>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5">{s.directionName}</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {s.locationKm}km 지점 &middot; 주유소 브랜드: {s.gasStation.brand} (휘발유: {s.gasStation.gasolinePrice}원)
                  </p>
                </div>
                <a 
                  href={`/rest-areas/${s.slug}`}
                  className="bg-slate-950 text-white hover:bg-slate-800 font-bold text-xs px-3.5 py-2 transition-colors shrink-0"
                >
                  상세정보 &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}
