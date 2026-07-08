import { serviceAreas } from '@/lib/data';
import { REGIONS, getRegionOfRestArea } from '@/lib/regionHelper';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ regionSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { regionSlug } = await params;
  const region = REGIONS.find((r) => r.slug === regionSlug);
  if (!region) return {};

  return {
    title: `${region.fullName} 고속도로 휴게소 목록 - 대표 먹거리 및 주유소 유가`,
    description: `${region.fullName} 지역을 지나는 고속도로 상하행 휴게소 목록을 제공합니다. 대표 음식(EX-FOOD), 알뜰주유소 실시간 기름값 및 전기차 충전 현황을 비교해보세요.`,
  };
}

export async function generateStaticParams() {
  return REGIONS.map((r) => ({
    regionSlug: r.slug,
  }));
}

export default async function RegionDetailPage({ params }: Props) {
  const { regionSlug } = await params;
  const region = REGIONS.find((r) => r.slug === regionSlug);

  if (!region) {
    notFound();
  }

  // Filter rest areas in this region
  const regionRestAreas = serviceAreas.filter((s) => getRegionOfRestArea(s) === regionSlug);

  // Group by highway for better organization (like MustardData does!)
  const groupedByHighway: Record<string, typeof regionRestAreas> = {};
  regionRestAreas.forEach((area) => {
    if (!groupedByHighway[area.highwayName]) {
      groupedByHighway[area.highwayName] = [];
    }
    groupedByHighway[area.highwayName].push(area);
  });

  return (
    <main className="mx-auto max-w-[1200px] px-5 py-10 flex-grow space-y-10">
      
      {/* 브레드크럼 */}
      <div className="flex justify-between items-center text-xs text-slate-400">
        <div className="flex gap-1.5 items-center">
          <a href="/" className="hover:text-blue-600">홈</a>
          <span>&gt;</span>
          <a href="/region" className="hover:text-blue-600">지역별 휴게소</a>
          <span>&gt;</span>
          <span className="text-slate-650 font-semibold">{region.name}</span>
        </div>
        <a href="/region" className="font-semibold text-slate-500 hover:text-blue-600">&larr; 전체 지역 목록</a>
      </div>

      {/* 헤더 정보 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
          {region.fullName}
        </div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
          {region.name} 지역 고속도로 휴게소 ({regionRestAreas.length}개소)
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          {region.fullName} 행정구역 경계 내에 위치한 고속도로 휴게소의 목록입니다. 노선별로 정렬되어 있어 경로에 따라 확인하기 유용합니다.
        </p>
      </div>

      {/* 애드센스 광고 */}
      <AdSense slot="9988112233" />

      {/* 노선별로 묶어 리스트업 */}
      {regionRestAreas.length === 0 ? (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center text-slate-400 text-sm font-medium">
          이 지역에 등록된 휴게소 정보가 없습니다.
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(groupedByHighway).map(([highwayName, areas]) => (
            <div key={highwayName} className="space-y-5">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-slate-900 rounded-xs"></span>
                {highwayName} ({areas.length}개소)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {areas.map((area) => (
                  <div
                    key={area.slug}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-5 hover:border-slate-350 transition-all"
                  >
                    {/* 상단 정보 */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-[16px] font-semibold text-slate-800">{area.name}</h3>
                          <span className="text-[11px] font-semibold text-slate-400 font-mono">
                            {area.locationKm}km 지점 &middot; {area.directionName}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-sm">
                          {area.direction}
                        </span>
                      </div>

                      {/* 편의시설 태그 */}
                      <div className="flex flex-wrap gap-1">
                        {area.facilities.slice(0, 5).map((fac, idx) => (
                          <span key={idx} className="text-[10px] bg-slate-50 border border-slate-100 text-slate-550 px-2 py-0.5 rounded-md">
                            {fac}
                          </span>
                        ))}
                        {area.facilities.length > 5 && (
                          <span className="text-[10px] text-slate-400 px-1 py-0.5">
                            +{area.facilities.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 대표 먹거리 & 주유소 간략 정보 */}
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold mb-0.5">대표 메뉴</span>
                        <span className="font-semibold text-slate-700 block truncate">
                          {area.signatureMenu.name}
                        </span>
                        <span className="font-mono text-slate-400 font-bold">
                          {area.signatureMenu.price.toLocaleString()}원
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold mb-0.5">
                          {area.gasStation.brand || '주유소'}
                        </span>
                        {area.gasStation.gasolinePrice > 0 ? (
                          <span className="font-semibold text-slate-750 block font-mono">
                            휘: {area.gasStation.gasolinePrice.toLocaleString()}원
                          </span>
                        ) : (
                          <span className="text-slate-400 block font-semibold">가격 정보 없음</span>
                        )}
                        {area.gasStation.hasEvCharger && (
                          <span className="text-[9.5px] font-bold text-emerald-600 block mt-0.5">
                            EV 충전기 {area.gasStation.evChargersCount}기
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 이동 링크 버튼 */}
                    <div className="border-t border-slate-100 pt-4 flex">
                      <a
                        href={`/rest-areas/${area.slug}`}
                        className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors cursor-pointer"
                      >
                        상세 정보 &amp; 맛집 전체 보기
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

    </main>
  );
}
