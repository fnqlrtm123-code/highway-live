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

  const pageUrl = `https://highway.mrbrisbaneinsouth.kr/ev/${encodeURIComponent(area.slug)}`;
  const title = `${area.name} (${area.directionName}) 전기차 충전소 가격 운영 시간`;
  const hydrogenText = area.gasStation.hasHydrogen ? ' 및 수소 충전소 가능 여부' : '';
  const chargerCountText = area.gasStation.hasEvCharger ? `, 충전기 대수: ${area.gasStation.evChargersCount}대` : '';
  const description = `${area.name} (${area.directionName}) 휴게소의 전기차(EV) 급속/완속 충전소 상세 위치${chargerCountText}${hydrogenText} 정보와 충전 표준 규격을 실시간으로 확인해보세요.`;

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

export default async function EvDetailPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  // 실사 데이터 기반 현황 문장 동적 구성
  const hasEv = area.gasStation.hasEvCharger;
  const hasHydrogen = area.gasStation.hasHydrogen;
  const evCount = area.gasStation.evChargersCount;

  const evText = hasEv
    ? `현재 ${area.name} 휴게소는 친환경 전기차 운전자를 위해 총 ${evCount}대의 전기차 급속/초급속 충전기를 안정적으로 운영하고 있습니다. 주로 환경부 및 주요 충전 서비스사와 제휴하여 100kW급 급속 충전기와 300kW 이상의 초급속 충전 시설을 배치하여 단시간 내 효율적인 배터리 보충을 지원합니다.`
    : `현재 ${area.name} 휴게소에는 공식 전기차 충전 인프라가 배정되어 있지 않습니다. 전기차 소유주께서는 인근의 다른 거점 휴게소 전기차 충전소를 사전에 확인해 주시기 바랍니다.`;

  const hydrogenText = hasHydrogen
    ? `또한, 승용 수소 전기차(FCEV) 전용 700bar 표준 규격을 지원하는 수소 충전소도 정상적으로 연동 및 가동 중입니다. 충전 대기 시간을 단축하고 편리하게 충전을 진행하실 수 있습니다.`
    : `수소차(FCEV) 충전소의 경우 현재 이 휴게소에서는 지원되지 않습니다. 수소 차량 운행 시 참고하시기 바랍니다.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${area.name} (${area.directionName}) 전기차 충전소`,
    "description": `${area.name} (${area.directionName}) 휴게소의 전기차(EV) 급속/완속 충전소 상세 위치 및 수소 충전소 가용 여부 정보입니다.`,
    "url": `https://highway.mrbrisbaneinsouth.kr/ev/${encodeURIComponent(area.slug)}`,
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
            ⚡ {area.name} 휴게소 전기차 충전소 및 수소차 충전 현황
          </h2>
          <a
            href={`/rest-areas/${encodeURIComponent(area.slug)}`}
            className="text-xs font-bold text-blue-650 hover:text-blue-800 transition-colors whitespace-nowrap shrink-0 hover:underline cursor-pointer"
          >
            휴게소 상세 정보 &rarr;
          </a>
        </div>
        <p className="text-sm text-slate-500">
          친환경 차량 운전자를 위한 급속 전기차 충전기와 수소 충전소 사양 정보입니다.
        </p>
      </div>

      {/* 실사 데이터 기반 분석 */}
      <div className="p-5 bg-blue-50/40 rounded-2xl border border-blue-100/50 text-xs md:text-sm text-slate-650 leading-relaxed space-y-3">
        <p className="font-normal">{evText}</p>
        <p className="font-normal">{hydrogenText}</p>
      </div>

      {/* 세로 목록형 충전소 사양 */}
      <div className="space-y-6">
        
        {/* 전기차(EV) */}
        <div className="py-4 border-b border-slate-200/80 space-y-3">
          <h3 className="text-base font-semibold text-slate-800">전기차 (EV) 충전 인프라</h3>
          <ul className="divide-y divide-slate-100 text-sm">
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">충전 가용 여부</span>
              <span className={`font-semibold ${hasEv ? 'text-emerald-700' : 'text-slate-400'}`}>
                {hasEv ? '이용 가능' : '미운영'}
              </span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">설치된 충전기 대수</span>
              <span className="font-mono font-semibold text-slate-850">{evCount}대 운영 중</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">충전 요금 (회원 기준)</span>
              <span className="font-semibold text-slate-850">급속 324.4원 / 초급속 347.2원 (1kWh당)</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">충전 요금 (비회원 기준)</span>
              <span className="font-semibold text-slate-850">최대 430원 / kWh (로밍 요금 포함)</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">운영 시간</span>
              <span className="font-semibold text-emerald-700">24시간 연중무휴 (정기 점검 제외)</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">충전 속도 규격</span>
              <span className="font-medium text-slate-650">급속 (100kW) ~ 초급속 (300kW 이상) 지원</span>
            </li>
          </ul>
        </div>

        {/* 수소차(FCEV) */}
        <div className="py-4 border-b border-slate-200/80 space-y-3">
          <h3 className="text-base font-semibold text-slate-800">수소차 (FCEV) 충전 인프라</h3>
          <ul className="divide-y divide-slate-100 text-sm">
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">수소 충전소 운영 여부</span>
              <span className={`font-semibold ${hasHydrogen ? 'text-emerald-700' : 'text-slate-400'}`}>
                {hasHydrogen ? '이용 가능 (정상 운영)' : '미운영'}
              </span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">수소 연료 가격</span>
              <span className="font-semibold text-slate-850">{hasHydrogen ? '9,900원 / kg' : '미운영'}</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">수소 충전소 운영 시간</span>
              <span className="font-semibold text-slate-850">{hasHydrogen ? '08:00 ~ 22:00 (연중무휴)' : '미운영'}</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-semibold">충전 압력 규격</span>
              <span className="font-medium text-slate-650">700 bar (승용 수소 차량 전용 표준)</span>
            </li>
          </ul>
        </div>

      </div>

      {/* 충전 가이드 설명글 */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2.5">
        <h3 className="text-sm font-semibold text-slate-800">💡 친환경차 고속도로 충전 가이드</h3>
        <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-normal">
          고속도로 휴게소에 설치된 전기차 충전소는 주로 환경부나 대기업 제휴를 통한 고출력 초급속 충전 인프라가 구축되어 있어 단시간 내 충전이 가능합니다. 
          다만 명절이나 주말 등 통행량이 많을 때는 대기 줄이 길어질 수 있으므로, 목적지 도달 전에 네비게이션이나 무공해차 통합누리집 등을 활용해 가용 충전기 대수를 사전에 파악하여 이용하는 것을 추천드립니다.
        </p>
      </div>

      {/* 인근 충전소 목록 */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          ⚡ 동일 노선 인근 충전소 안내
        </h2>
        <p className="text-xs md:text-sm text-slate-500">
          현재 주행 노선 상에서 가깝거나 이어서 방문할 수 있는 인근의 다른 전기차 충전소 목록입니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          {serviceAreas
            .filter((s) => s.highwaySlug === area.highwaySlug && s.slug !== area.slug && s.gasStation.hasEvCharger)
            .slice(0, 3)
            .map((s) => (
              <a 
                key={s.slug}
                href={`/ev/${s.slug}`}
                className="block p-4 border border-slate-200 bg-white rounded-2xl hover:border-slate-800 hover:bg-slate-50 transition-all text-left shadow-2xs"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-800">{s.name}</span>
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">{s.directionName}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-2 flex justify-between">
                  <span>충전기 대수: {s.gasStation.evChargersCount}대</span>
                </div>
              </a>
            ))}
        </div>
      </section>

    </div>
  );
}
