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
    title: `${road.name} 교통상황 - 주요 정보 및 FAQ`,
    description: `${road.name}의 상세 교통 정보, 상/하행선 방향 정리, 상습 정체 구간, 우회도로 기준 및 자주 묻는 질문(FAQ)을 확인하세요.`,
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
            {road.name}의 통행 특성 및 방향별 정체 시간대, 상습 정체 구간 대피를 위한 우회 국도 선택 기준을 알기 쉽게 정리해 드립니다.
          </p>
        </div>
      </div>

      {/* 애드센스 */}
      <AdSense slot="2233445566" />

      {/* 노선 내 휴게소 목록 (휴게소 정보가 존재할 경우에만 렌더링) */}
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

      {/* AEO / GEO 최적화 교통상황 정보 영역 */}
      <section className="bg-white border border-slate-200 p-6 md:p-8 space-y-8 text-slate-700 text-sm md:text-base leading-relaxed font-sans">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3">
              {road.name} 교통상황 개요
            </h2>
            <p className="text-slate-650">
              {road.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              {road.name} 교통상황 확인방법
            </h3>
            <p className="text-slate-650">
              {road.verificationMethod} 한국도로공사의 로드플러스, 서울시 토시교통정보(TOPIS) 등 정밀 관제 센터와의 교차 실시간 데이터 정보망 구축 상태에 기반해 운전자에게 정확한 노선 소통 지도를 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              {road.name} CCTV 모니터링 안내
            </h3>
            <p className="text-slate-650">
              {road.cctvInfo} 터널 진출입로, 급커브 지점 등 병목이 상시 일어나는 중심 교통 요충지의 카메라 상태 및 강설, 결빙, 짙은 안개 등의 위험 기상 상황을 운전 개시 전 확인하여 돌발적인 추돌 위험 요소를 최소화해 보시기 바랍니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              {road.name} 방향별 주행 가이드 (상행선·하행선)
            </h3>
            <p className="text-slate-650">
              노선 이용 시 이동하시는 방향에 따라 차량 정체가 심화되는 통행 시간대 특성이 다음과 같이 명확히 나뉩니다:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600 pl-2">
              <li><strong>상행선 (또는 종점 방향) 주행 안내</strong>: {road.directions.up}</li>
              <li><strong>하행선 (또는 기점 방향) 주행 안내</strong>: {road.directions.down}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              {road.name} 상습 정체 지정체 구간
            </h3>
            <p className="text-slate-650">
              {road.congestedSections} 통행 시에는 급차선 변경 등으로 인한 돌발 충돌을 피하기 위해 비상등 점멸을 통해 후미 차량에 감속 신호를 주시고 정체 차로 진입 속도를 단계적으로 조절하십시오.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              {road.name} 우회도로 선택 및 우회 기준
            </h3>
            <p className="text-slate-650">
              {road.detourCriteria} 내비게이션 소요 예측을 상호 참고하고 도로변에 위치한 가변 정보판(VMS) 안내 문구 및 노면 표지판 유도 화살표를 확인하여 가장 안전하고 지체가 적은 회선으로 선회하십시오.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              자주 묻는 질문 FAQ
            </h3>
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
        </div>
      </section>

    </main>
  );
}
