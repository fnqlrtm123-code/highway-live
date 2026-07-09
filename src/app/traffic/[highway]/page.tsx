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

  const rangeText = road.start && road.end ? `${road.start}~${road.end}` : '주요';

  const getLineName = (name: string) => {
    if (name.includes("고속도로")) {
      const match = name.match(/^(.+?)고속도로(\(.+?\))?$/);
      if (match) {
        return `${match[1]}선${match[2] || ""}`;
      }
      return name.replace("고속도로", "선");
    }
    if (name.startsWith("국도") && name.endsWith("호선")) {
      return name.replace("국도", "");
    }
    return name;
  };

  const lineName = getLineName(road.name);

  return {
    title: `${road.name} [${lineName}] 교통상황 확인 실시간 CCTV 정체구간 우회도로`,
    description: `${road.name} [${lineName}] ${rangeText} 구간의 실시간 교통상황 확인 방법을 안내합니다. 도로공사 로드플러스, ITS CCTV 평속 분석, 실시간 CCTV 영상, 정체 구간 및 우회도로 정보를 모아놓았습니다.`,
  };
}

export async function generateStaticParams() {
  const roads = getRoadList();
  return roads.map((r) => ({
    highway: r.slug,
  }));
}

export default async function HighwayTrafficDetailPage({ params }: Props) {
  const { highway: highwaySlug } = await params;
  const road = getRoadBySlug(highwaySlug);

  if (!road) {
    notFound();
  }

  // Get service areas for this highway
  const highwayServiceAreas = getServiceAreasByHighway(road.slug);

  // Group rest areas by direction
  const upDirectionAreas = highwayServiceAreas.filter(s => s.direction === '상행');
  const downDirectionAreas = highwayServiceAreas.filter(s => s.direction === '하행');
  const otherDirectionAreas = highwayServiceAreas.filter(s => s.direction === '양방향');

  // Dynamically obtain direction labels
  const upLabel = upDirectionAreas[0]?.directionName || '상행선 방향';
  const downLabel = downDirectionAreas[0]?.directionName || '하행선 방향';
  const otherLabel = otherDirectionAreas[0]?.directionName || '양방향/기타';

  const getLineName = (name: string) => {
    if (name.includes("고속도로")) {
      const match = name.match(/^(.+?)고속도로(\(.+?\))?$/);
      if (match) {
        return `${match[1]}선${match[2] || ""}`;
      }
      return name.replace("고속도로", "선");
    }
    if (name.startsWith("국도") && name.endsWith("호선")) {
      return name.replace("국도", "");
    }
    return name;
  };
  const lineName = getLineName(road.name);

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...road.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
      {
        "@type": "Question",
        "name": `${road.name} 노면에서 긴급 차량 무상 견인 서비스를 받으려면?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "한국도로공사가 운영하는 구간 내에서 차량 사고나 갑작스러운 기계 고장으로 본선 차도에 고립되었을 경우, 도로공사 콜센터(1588-2504)에 접수하여 2차 사고의 고위험 영역인 가까운 나들목(IC) 또는 안심 쉼터 영역까지 견인료 지불 없이 100% 무상으로 우선 이동을 지원받을 수 있습니다.",
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-[1000px] px-5 py-10 flex-grow space-y-12 text-slate-700 leading-relaxed text-sm md:text-base font-sans">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 브레드크럼 */}
      <div className="flex justify-between items-center text-xs text-slate-400">
        <div className="flex gap-1.5 items-center">
          <a href="/" className="hover:text-blue-600">홈</a>
          <span>&gt;</span>
          <a href="/traffic" className="hover:text-blue-600">교통상황·CCTV</a>
          <span>&gt;</span>
          <span className="text-slate-650 font-semibold">{road.name}</span>
        </div>
        <a href="/traffic" className="font-semibold text-slate-500 hover:text-blue-600">&larr; 전체 노선 목록</a>
      </div>

      {/* 1. 노선 타이틀 & 소개 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
          {road.type === 'highway' ? '고속도로 노선' : road.type === 'urban' ? '도시고속도로' : road.type === 'national' ? '일반국도' : '대교'}
        </div>
        <h1 className="text-2.5xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {road.name} 교통상황
        </h1>
        <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed">
          {road.description} 실시간 교통정보 확인 채널을 통해 노선의 구간별 주행 속도와 CCTV 모니터링 화면을 직접 조회할 수 있으며, 정체나 돌발 상황 발생 시 이용 가능한 노선 내 방향별 휴게소 정보를 함께 파악할 수 있습니다.
        </p>
      </div>

      {/* 애드센스 */}
      <AdSense slot="4455662211" />

      {/* 2. 실시간 상황 조회 방법 */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
          {road.name} 교통상황 CCTV 확인 방법
        </h2>
        
        <p className="text-slate-500 text-xs md:text-sm">
          {road.verificationMethod} 주행 중 교통량이 급증하거나 정체가 길어질 시에는 아래에 정리된 노선 내 휴게소를 방문하여 충분한 휴식을 취하시기 바랍니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
          <a
            href="https://www.roadplus.co.kr"
            target="_self"
            className="block bg-white border border-slate-200 rounded-xl p-4 pr-10 hover:border-blue-600 hover:shadow-sm transition-all relative group text-left cursor-pointer"
          >
            <span className="font-bold text-slate-800 block mb-1 group-hover:text-blue-600 transition-colors">로드플러스 (도로공사)</span>
            <span className="text-slate-550 text-xs leading-normal block">
              공식 웹사이트에서 경부선, 영동선 등 고속도로 전 구간의 교통지도 및 2분 간격의 CCTV 상황을 실시간 조회할 수 있습니다.
            </span>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors absolute right-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="https://www.its.go.kr"
            target="_self"
            className="block bg-white border border-slate-200 rounded-xl p-4 pr-10 hover:border-blue-600 hover:shadow-sm transition-all relative group text-left cursor-pointer"
          >
            <span className="font-bold text-slate-800 block mb-1 group-hover:text-blue-600 transition-colors">국가교통정보센터 (ITS)</span>
            <span className="text-slate-550 text-xs leading-normal block">
              국토교통부가 수집하는 전국 주요 국도 및 우회 도로의 관제 CCTV 카메라를 통해 강우, 안개, 노면 미끄러짐을 확인 가능합니다.
            </span>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors absolute right-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="https://map.naver.com"
            target="_self"
            className="block bg-white border border-slate-200 rounded-xl p-4 pr-10 hover:border-blue-600 hover:shadow-sm transition-all relative group text-left cursor-pointer"
          >
            <span className="font-bold text-slate-800 block mb-1 group-hover:text-blue-600 transition-colors">지도 앱 CCTV 레이어</span>
            <span className="text-slate-550 text-xs leading-normal block">
              스마트폰 네이버 지도 또는 카카오 맵의 우측 레이어 탭에서 CCTV 기능을 활성화하면, 노선 내에 있는 가상 감시 카메라를 터치해 직접 확인하실 수 있습니다.
            </span>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors absolute right-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.ex.roadinfo"
            target="_self"
            className="block bg-white border border-slate-200 rounded-xl p-4 pr-10 hover:border-blue-600 hover:shadow-sm transition-all relative group text-left cursor-pointer"
          >
            <span className="font-bold text-slate-800 block mb-1 group-hover:text-blue-600 transition-colors">고속도로 교통앱 연동</span>
            <span className="text-slate-550 text-xs leading-normal block">
              전방 돌발적인 연쇄 추돌 사고, 도로 공사 통제 구간 및 갓길 가변 차로 사용 상황을 푸시 알림으로 신속하게 접수할 수 있습니다.
            </span>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors absolute right-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* 3. 방향별 휴게소 목록 */}
      {highwayServiceAreas.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
            {road.name} 노선 내 쉬어갈 휴게소 목록
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            {road.name}에 위치한 총 {highwayServiceAreas.length}개소의 휴게소 목록입니다. 상행선(서울 방면 등)과 하행선(지방 방면 등) 방향에 따라 구분되어 있으므로, 이동하는 방향에 맞춰 목적 휴게소를 미리 확인해보세요.
          </p>

          <div className="space-y-8 pt-2">
            
            {/* 하행선 목록 */}
            {downDirectionAreas.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2.5 flex justify-between items-center text-sm md:text-[15px]">
                  <span>{downLabel} ({downDirectionAreas.length}곳)</span>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm">하행선</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                  {downDirectionAreas.map((area) => (
                    <a
                      key={area.slug}
                      href={`/rest-areas/${area.slug}`}
                      className="bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 px-3 py-2 rounded-xl text-slate-650 transition-all font-medium text-center truncate cursor-pointer"
                    >
                      {area.name.replace('휴게소', '')} 휴게소
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 상행선 목록 */}
            {upDirectionAreas.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2.5 flex justify-between items-center text-sm md:text-[15px]">
                  <span>{upLabel} ({upDirectionAreas.length}곳)</span>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-sm">상행선</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                  {upDirectionAreas.map((area) => (
                    <a
                      key={area.slug}
                      href={`/rest-areas/${area.slug}`}
                      className="bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 px-3 py-2 rounded-xl text-slate-650 transition-all font-medium text-center truncate cursor-pointer"
                    >
                      {area.name.replace('휴게소', '')} 휴게소
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 양방향 및 기타 */}
            {otherDirectionAreas.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-2.5 flex justify-between items-center text-sm md:text-[15px]">
                  <span>{otherLabel} ({otherDirectionAreas.length}곳)</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">양방향/기타</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                  {otherDirectionAreas.map((area) => (
                    <a
                      key={area.slug}
                      href={`/rest-areas/${area.slug}`}
                      className="bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 px-3 py-2 rounded-xl text-slate-650 transition-all font-medium text-center truncate cursor-pointer"
                    >
                      {area.name.replace('휴게소', '')} 휴게소
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* 4. 명절 및 주말 정체 예상 */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
          명절 · 주말 정체 예상 분석
        </h2>
        <div className="text-slate-650 text-xs md:text-sm space-y-3">
          <p>
            {road.name} 노선은 귀성/귀경철 유동량 쏠림 현상이 가장 빠르게 유발되는 대표적인 간선 구간입니다.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600">
            <li><span className="font-bold text-slate-700">지정체 발생 구간:</span> {road.congestedSections}</li>
            <li><span className="font-bold text-slate-700">우회도로 가이드:</span> {road.detourCriteria}</li>
          </ul>
        </div>
      </section>

      {/* 5. 자주 묻는 질문 FAQ */}
      <section className="space-y-4 border-t border-slate-200 pt-8">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
          자주 묻는 질문 FAQ
        </h2>
        
        <div className="space-y-4 divide-y divide-slate-100">
          {road.faqs.map((faq, idx) => (
            <div key={idx} className="pt-4 first:pt-0">
              <h4 className="font-bold text-slate-800 text-sm md:text-[15px]">Q{idx + 1}. {faq.q}</h4>
              <p className="text-slate-500 text-xs md:text-sm mt-1">
                {faq.a}
              </p>
            </div>
          ))}
          
          <div className="pt-4">
            <h4 className="font-bold text-slate-800 text-sm md:text-[15px]">Q{road.faqs.length + 1}. {road.name} 노면에서 긴급 차량 무상 견인 서비스를 받으려면?</h4>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              한국도로공사가 운영하는 구간 내에서 차량 사고나 갑작스러운 기계 고장으로 본선 차도에 고립되었을 경우, 도로공사 콜센터(1588-2504)에 접수하여 2차 사고의 고위험 영역인 가까운 나들목(IC) 또는 안심 쉼터 영역까지 견인료 지불 없이 100% 무상으로 우선 이동을 지원받을 수 있습니다.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
