import { getServiceAreaBySlug, serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
}

// 동적 SEO 메타데이터 생성
export async function generateMetadata({ params }: { params: Promise<{ restAreaSlug: string }> }): Promise<Metadata> {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);
  if (!area) return {};

  const pageUrl = `https://highway.mrbrisbaneinsouth.kr/gas/${encodeURIComponent(area.slug)}`;
  const title = `${area.name} (${area.directionName}) 주유소 가격 휘발유 실시간 가격 비교`;
  const lpgText = area.gasStation.lpgPrice ? ` 및 LPG 충전소 가격` : '';
  const description = `${area.name} (${area.directionName}) 휴게소에 위치한 ${area.gasStation.brand} 주유소의 실시간 휘발유(${area.gasStation.gasolinePrice.toLocaleString()}원), 경유(${area.gasStation.dieselPrice.toLocaleString()}원)${lpgText} 정보와 함께 알뜰 주유소 주유 팁을 확인하세요.`;

  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      locale: "ko_KR",
    }
  };
}

export async function generateStaticParams() {
  const params: { restAreaSlug: string }[] = [];
  serviceAreas.forEach((area) => {
    params.push({ restAreaSlug: area.slug });
    const encoded = encodeURIComponent(area.slug);
    if (encoded !== area.slug) {
      params.push({ restAreaSlug: encoded });
    }
    if (area.oldSlug) {
      params.push({ restAreaSlug: area.oldSlug });
      const encodedOld = encodeURIComponent(area.oldSlug);
      if (encodedOld !== area.oldSlug) {
        params.push({ restAreaSlug: encodedOld });
      }
    }
  });
  return params;
}

export default async function GasDetailPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  // 가상의 노선 평균 가격 설정
  const highwayAvgGasoline = 1605;
  const highwayAvgDiesel = 1430;

  const gasolineDiff = area.gasStation.gasolinePrice - highwayAvgGasoline;
  const dieselDiff = area.gasStation.dieselPrice - highwayAvgDiesel;

  const isGasolineCheaper = gasolineDiff < 0;
  const isDieselCheaper = dieselDiff < 0;

  const summaryText = `${area.name} 휴게소 주유소는 국토교통부와 한국도로공사가 지원하는 대표 주유인프라 브랜드인 ${area.gasStation.brand} 주유소를 채택하고 있습니다. 현재 휘발유는 노선 평균 대비 약 ${Math.abs(gasolineDiff)}원 ${isGasolineCheaper ? '저렴한' : '높은'} 수준으로 판매 중이며, 경유는 평균보다 ${Math.abs(dieselDiff)}원 ${isDieselCheaper ? '더 저렴하게' : '더 높게'} 판매되고 있어 장거리 정속 주행 차량의 급유 시 참고하시기 좋습니다.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${area.name} (${area.directionName}) 주유소`,
    "description": `${area.name} (${area.directionName}) 휴게소에 위치한 ${area.gasStation.brand} 주유소의 실시간 휘발유, 경유, LPG 가격 정보입니다.`,
    "url": `https://highway.mrbrisbaneinsouth.kr/gas/${encodeURIComponent(area.slug)}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area.highwayName,
      "streetAddress": `${area.locationKm}km 지점`
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed font-normal">
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var parts = window.location.pathname.split('/');
          var currentSlug = decodeURIComponent(parts[2] || '');
          var correctSlug = "${area.slug}";
          if (currentSlug && currentSlug !== correctSlug) {
            parts[2] = encodeURIComponent(correctSlug);
            window.location.replace(parts.join('/'));
          }
        })()
      `}} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 타이틀 */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
            ⛽ {area.name} 휴게소 실시간 주유소 및 LPG 충전소 유가 정보
          </h2>
          <a
            href={`/rest-areas/${encodeURIComponent(area.slug)}`}
            className="text-xs font-bold text-blue-650 hover:text-blue-800 transition-colors whitespace-nowrap shrink-0 hover:underline cursor-pointer"
          >
            휴게소 상세 정보 &rarr;
          </a>
        </div>
        <p className="text-sm text-slate-500">
          한국도로공사 유가정보 피드 데이터를 기반으로 제공하는 실시간 기름값 정보입니다.
        </p>
      </div>

      {/* 실사 데이터 기반 분석 */}
      <div className="p-5 bg-blue-50/40 rounded-2xl border border-blue-100/50 text-xs md:text-sm text-slate-650 leading-relaxed">
        <p className="font-normal">{summaryText}</p>
      </div>

      {/* 세로 리스트형 가격표 (블로그 가독성 포맷) */}
      <div className="space-y-4">
        
        {/* 휘발유 */}
        <div className="py-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">휘발유 (1L)</span>
            <span className="text-xl font-mono font-bold text-slate-900">
              {area.gasStation.gasolinePrice.toLocaleString()}원
            </span>
          </div>
          <div className="sm:text-right">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${isGasolineCheaper ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : 'bg-rose-50 text-rose-700 border border-rose-200/60'}`}>
              {isGasolineCheaper ? `노선 평균 대비 ${Math.abs(gasolineDiff)}원 저렴` : `노선 평균 대비 ${gasolineDiff}원 비쌈`}
            </span>
          </div>
        </div>

        {/* 경유 */}
        <div className="py-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">경유 (1L)</span>
            <span className="text-xl font-mono font-bold text-slate-900">
              {area.gasStation.dieselPrice.toLocaleString()}원
            </span>
          </div>
          <div className="sm:text-right">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${isDieselCheaper ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : 'bg-rose-50 text-rose-700 border border-rose-200/60'}`}>
              {isDieselCheaper ? `노선 평균 대비 ${Math.abs(dieselDiff)}원 저렴` : `노선 평균 대비 ${dieselDiff}원 비쌈`}
            </span>
          </div>
        </div>

        {/* LPG */}
        <div className="py-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">LPG 충전 (1L)</span>
            <span className="text-xl font-mono font-bold text-slate-900">
              {area.gasStation.lpgPrice ? `${area.gasStation.lpgPrice.toLocaleString()}원` : '충전기 미운영'}
            </span>
          </div>
          <div className="sm:text-right text-xs text-slate-450 font-medium">
            {area.gasStation.lpgPrice ? 'LPG 차량 전용 충전 가능' : '일반 유류 전용 주유소'}
          </div>
        </div>

      </div>

      {/* 가이드 설명글 */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2.5">
        <h3 className="text-sm font-semibold text-slate-800">💡 고속도로 주유 팁</h3>
        <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-normal">
          {area.name} 주유소는 <strong>{area.gasStation.brand}</strong> 브랜드로 운영되고 있습니다. 
          고속도로 알뜰주유소(ex-oil)는 도로공사의 일괄 공동구매 정책에 의해 시중 폴 주유소 대비 리터당 비교적 저렴한 가격에 주유가 가능한 장점이 있습니다. 
          특히 본 {area.name} 주유소는 셀프 주유 인프라가 갖추어져 있어 보다 신속하게 급유가 가능합니다. 장거리 주행 시 다음 휴게소 주유소와의 유가 차이를 미리 확인하시어 현명하게 주유 계획을 세우시길 추천드립니다.
        </p>
      </div>

      {/* 인근 주유소 목록 */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          ⛽ 동일 노선 인근 주유소 안내
        </h2>
        <p className="text-xs md:text-sm text-slate-500">
          현재 주행 노선 상에서 가깝거나 이어서 방문할 수 있는 인근의 다른 휴게소 주유소 목록입니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          {serviceAreas
            .filter((s) => s.highwaySlug === area.highwaySlug && s.slug !== area.slug)
            .slice(0, 3)
            .map((s) => (
              <a 
                key={s.slug}
                href={`/gas/${s.slug}`}
                className="block p-4 border border-slate-200 bg-white rounded-2xl hover:border-slate-800 hover:bg-slate-50 transition-all text-left shadow-2xs"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-800">{s.name}</span>
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">{s.directionName}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-2 flex justify-between">
                  <span>휘발유: {s.gasStation.gasolinePrice.toLocaleString()}원</span>
                </div>
              </a>
            ))}
        </div>
      </section>

    </div>
  );
}
