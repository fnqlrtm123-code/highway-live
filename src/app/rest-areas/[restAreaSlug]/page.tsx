import { getServiceAreaBySlug, getServiceAreasByHighway, serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);
  if (!area) return {};

  const pageUrl = `https://highway.mrbrisbaneinsouth.kr/rest-areas/${encodeURIComponent(area.slug)}`;
  const title = `${area.name} 휴게소 (${area.directionName}) 맛집 메뉴 주유소 가격 편의시설`;
  const description = `${area.name} 휴게소 (${area.directionName})의 시그니처 대표 메뉴인 ${area.signatureMenu.name} 정보를 비롯해 실시간 주유소 가격, 전기차 수소차 충전 현황 및 입점 브랜드 정보를 한눈에 제공합니다.`;

  return {
    title,
    description,
    keywords: [
      `${area.name} 휴게소`,
      `${area.name} 맛집`,
      `${area.name} 주유소`,
      `${area.name} 전기차`,
      `${area.name} 메뉴`,
      `${area.name} 편의시설`
    ],
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
  return serviceAreas.map((area) => ({
    restAreaSlug: area.slug,
  }));
}

export default async function RestAreaDashboardPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  const siblingAreas = getServiceAreasByHighway(area.highwaySlug).filter(s => s.slug !== area.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${area.name} (${area.directionName})`,
    "description": `${area.name} 휴게소 (${area.directionName})의 시그니처 대표 메뉴인 ${area.signatureMenu.name} 정보를 비롯해 실시간 주유소 가격, 전기차 수소차 충전 현황 및 입점 브랜드 정보를 제공합니다.`,
    "url": `https://highway.mrbrisbaneinsouth.kr/rest-areas/${encodeURIComponent(area.slug)}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area.highwayName,
      "streetAddress": `${area.locationKm}km 지점`
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10 text-slate-700 leading-relaxed font-normal">
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
      
      {/* 1. 인트로/소개 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
          1. {area.name} 휴게소 개요 및 특징
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
          {area.name} 휴게소({area.directionName})는 {area.highwayName} {area.locationKm}km 지점에 위치하고 있습니다. 
          장거리 운전에 지친 분들을 위해 정비된 주차장과 함께 다양한 식사 메뉴, 브랜드 주유소 및 전기차/수소차 친환경 충전 시설이 마련되어 있어 많은 운전자들이 선호하는 휴식처입니다.
        </p>
      </section>

      {/* 2. 먹거리 맛집 정보 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
          2. 대표 먹거리 및 추천 맛집 메뉴
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600">
          휴게소 여행의 가장 큰 즐거움은 맛있는 음식입니다. {area.name} 휴게소의 대표 시그니처 메뉴 정보를 확인하세요.
        </p>
        
        <div className="border-t border-b border-slate-200 py-5 my-4 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">대표 추천 메뉴</span>
              <span className="text-lg font-bold text-slate-900">{area.signatureMenu.name}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 block">가격</span>
              <span className="text-xl font-mono font-bold text-slate-900">{area.signatureMenu.price.toLocaleString()}원</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 font-normal">
            {area.signatureMenu.description}
          </p>
        </div>

        <h3 className="text-base font-semibold text-slate-800 mt-6 flex items-center gap-1.5">
          🍴 일반 식당가 및 스낵 코너 메뉴 목록
        </h3>
        <ul className="divide-y divide-slate-100 text-sm">
          {area.otherMenus.slice(0, 5).map((menu) => (
            <li key={menu.name} className="py-3 flex justify-between">
              <span className="font-medium text-slate-700">{menu.name}</span>
              <span className="font-mono font-semibold text-slate-600">{menu.price.toLocaleString()}원</span>
            </li>
          ))}
        </ul>

        <div className="pt-3">
          <a
            href={`/rest-areas/${encodeURIComponent(area.slug)}/food`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors py-1.5 hover:underline cursor-pointer"
          >
            🍴 전체 식당가 메뉴판 및 브랜드 매장 정보 전체보기 &rarr;
          </a>
        </div>

        {/* 입점 브랜드 매장 */}
        {area.brandStores && area.brandStores.length > 0 && (
          <div className="mt-8 space-y-3">
            <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
              ☕ 입점 브랜드 매장 안내
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {area.brandStores.map((brand, i) => (
                <div key={i} className="p-3.5 bg-slate-50/50 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-900">{brand.name}</span>
                    <span className="text-[9px] text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-100">{brand.hours}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-normal">
                    {brand.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <AdSense slot="5566778899" />

      {/* 3. 주유 정보 */}
      <section className="space-y-4">
        <div className="flex justify-between items-end border-b border-slate-100 pb-2">
          <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
            3. 알뜰주유소 및 전기차 충전소 가격 정보
          </h2>
          <div className="flex gap-3 text-xs font-bold">
            <a
              href={`/gas/${encodeURIComponent(area.slug)}`}
              className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
            >
              ⛽ 상세 주유소 정보 &rarr;
            </a>
            <a
              href={`/ev/${encodeURIComponent(area.slug)}`}
              className="text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
            >
              ⚡ 상세 충전소 정보 &rarr;
            </a>
          </div>
        </div>
        <p className="text-sm md:text-[15px] text-slate-600">
          고속도로 운행 중 연료 충전은 필수입니다. {area.name} 휴게소는 정량/정품을 판매하는 알뜰 주유소를 운영하고 있어 일반 시중보다 저렴하게 주유가 가능합니다.
        </p>

        <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-5 space-y-4">
          <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
            <span className="text-xs font-semibold text-slate-550">주유소 브랜드</span>
            <span className="text-xs font-semibold bg-slate-200 text-slate-700 px-3 py-1 rounded-lg border border-slate-300/30">{area.gasStation.brand}</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-200/80">
            <div>
              <span className="text-xs text-slate-500 block mb-1">휘발유 (1L)</span>
              <span className="text-base font-mono font-bold text-slate-900">{area.gasStation.gasolinePrice.toLocaleString()}원</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">경유 (1L)</span>
              <span className="text-base font-mono font-bold text-slate-900">{area.gasStation.dieselPrice.toLocaleString()}원</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">LPG (1L)</span>
              <span className="text-base font-mono font-bold text-slate-900">
                {area.gasStation.lpgPrice ? `${area.gasStation.lpgPrice.toLocaleString()}원` : '미운영'}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100 p-5 space-y-2">
          <h3 className="text-sm font-semibold text-emerald-800 flex items-center gap-1.5">
            ⚡ 친환경차 충전소 인프라 현황
          </h3>
          <p className="text-xs md:text-[13px] text-emerald-700 leading-relaxed font-normal">
            {area.gasStation.hasEvCharger ? (
              `전기차 급속 충전기가 완비되어 있으며, 현재 총 ${area.gasStation.evChargersCount}대의 차량이 동시에 충전할 수 있습니다.`
            ) : (
              '현재 이 휴게소에는 전기차 충전 설비가 운영되지 않고 있습니다.'
            )}
            {area.gasStation.hasHydrogen && ' 또한 수소차 충전소도 함께 운영 중입니다.'}
          </p>
        </div>
      </section>

      {/* 4. 편의시설 */}
      <section className="space-y-4">
        <div className="flex justify-between items-end border-b border-slate-100 pb-2">
          <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
            4. 주요 편의시설 및 고객 지원 서비스
          </h2>
          <a
            href={`/rest-areas/${encodeURIComponent(area.slug)}/facilities`}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
          >
            ⛺ 상세 편의시설 정보 &rarr;
          </a>
        </div>
        <p className="text-sm md:text-[15px] text-slate-600">
          운전자 및 동승객의 편의를 위해 {area.name} 휴게소에서 제공하는 맞춤 서비스 시설 목록입니다.
        </p>
        <div className="flex flex-wrap gap-2 py-2">
          {area.facilities.map((facility) => (
            <span key={facility} className="text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/85 px-3 py-1.5 rounded-lg">
              {facility}
            </span>
          ))}
        </div>
      </section>

      {/* 5. 실시간 이용 꿀팁 */}
      <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 space-y-3">
        <h2 className="text-base font-semibold text-slate-900 flex items-center gap-1.5">
          💡 {area.name} 휴게소 실시간 이용 팁
        </h2>
        <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
          {area.name} 휴게소는 노선 Km 지점에 최적화된 위치에 설계되어 있어 주말 및 연휴에는 진입 정체가 잦은 구간에 속합니다. 
          따라서 가급적 혼잡 시간대를 피하시고, 급한 급유가 아닌 경우 인근 알뜰주유소 가격을 미리 비교하신 후 이용하는 것이 합리적입니다. 
          차량 내 쓰레기는 분리배출 수거함에 올바르게 버려주시고 다음 장거리 운전을 위해 15분 이상 충분한 휴식을 취하시길 권장합니다.
        </p>
      </section>

      {/* 6. 인근 휴게소 목록 */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          🛣️ 동일 노선 인근 휴게소 안내
        </h2>
        <p className="text-xs md:text-sm text-slate-500">
          현재 주행 노선 상에서 가깝거나 이어서 방문할 수 있는 인근의 다른 휴게소들입니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          {siblingAreas.slice(0, 3).map((s) => (
            <a 
              key={s.slug}
              href={`/rest-areas/${s.slug}`}
              className="block p-4 border border-slate-200/80 bg-white rounded-2xl hover:border-slate-800 hover:bg-slate-50 transition-all text-left shadow-2xs"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-slate-800">{s.name}</span>
                <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">{s.directionName}</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-2">
                <span>{s.locationKm}km 지점</span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
