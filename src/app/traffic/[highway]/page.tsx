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
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 뒤로가기 링크 */}
      <a href="/traffic" className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
        &larr; 교통상황 메인으로 돌아가기
      </a>

      {/* 헤더 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            {road.number ? (
              <span className="text-[12px] font-black bg-blue-600 text-white px-2.5 py-0.5">{road.number}</span>
            ) : (
              <span className="text-[12px] font-black bg-slate-700 text-white px-2.5 py-0.5">일반</span>
            )}
            <span className="text-xs text-blue-300 font-mono tracking-tight">
              {road.length ? `${road.length} \u00B7 ` : ''} 경로: {road.detail}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">{road.name} 교통상황</h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            {road.name}의 교통 흐름 파악을 위한 실시간 정보 조회 방법, CCTV 감시 가이드, 방향별 정체 원인, 우회 국도 설계 정보를 제공합니다.
          </p>
        </div>
      </div>

      {/* 애드센스 */}
      <AdSense slot="2233445566" />

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
        <div className="space-y-3 border-t border-slate-100 pt-6">
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
        <div className="space-y-3 border-t border-slate-100 pt-6">
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
