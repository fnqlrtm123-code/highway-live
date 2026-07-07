import { getServiceAreaBySlug, getServiceAreasByHighway, serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* 좌측 메인 8열 */}
      <div className="lg:col-span-8 space-y-8">
        
        {/* 요약 대시보드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 음식 요약 카드 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
              <h3 className="font-black text-slate-800 flex items-center gap-2">
                대표 먹거리 맛집
              </h3>
              <a href={`/rest-areas/${restAreaSlug}/food`} className="text-xs font-bold text-blue-600 hover:underline">
                메뉴 전체보기 &rarr;
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-[15px] text-slate-900">{area.signatureMenu.name}</span>
                {area.signatureMenu.isExFood && (
                  <span className="text-[9px] font-black bg-amber-500 text-white px-1.5 py-0.5 rounded">EX-FOOD</span>
                )}
              </div>
              <p className="text-[12.5px] text-slate-500 line-clamp-2 leading-relaxed">
                {area.signatureMenu.description}
              </p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-slate-400">판매 가격</span>
                <span className="text-base font-mono font-black text-blue-600">{area.signatureMenu.price.toLocaleString()}원</span>
              </div>
            </div>
          </div>

          {/* 주유소/충전소 요약 카드 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
              <h3 className="font-black text-slate-800 flex items-center gap-2">
                주유 및 충전소 가격
              </h3>
              <a href={`/rest-areas/${restAreaSlug}/gas`} className="text-xs font-bold text-blue-600 hover:underline">
                가격 상세비교 &rarr;
              </a>
            </div>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="text-slate-400">브랜드</span>
                <span className="font-bold text-slate-800">{area.gasStation.brand}</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-500">휘발유 (L)</span>
                <span className="font-black text-slate-800">{area.gasStation.gasolinePrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-500">경유 (L)</span>
                <span className="font-black text-slate-800">{area.gasStation.dieselPrice.toLocaleString()}원</span>
              </div>
            </div>
          </div>
        </div>

        {/* 광고 */}
        <AdSense slot="5566778899" />

        {/* 실시간 이용 팁 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-4 text-[14px] leading-relaxed text-slate-600">
          <h3 className="text-base font-black text-slate-900 flex items-center gap-1.5">
            {area.name} ({area.directionName}) 실시간 이용 꿀팁
          </h3>
          <p>
            {area.name} 휴게소는 {area.highwayName} {area.locationKm}km 구간에 있으며, 장거리 이동 운전자들의 피로를 덜어줄 다양한 편의시설과 식음료 매장이 입점해 있습니다. 
          </p>
          <p>
            특히, 고속도로 휴게소 전용 알뜰주유소(ex-oil)는 시중 일반 주유소 대비 합리적인 가격에 유류를 판매하고 있으니, 주행 목적지에 가시기 전에 저렴하게 주유를 마치는 편이 경제적입니다. 
            또한 전기차 운전자의 경우 급속 충전기가 완비되어 있어 편리하게 차량 배터리를 충전할 수 있습니다.
          </p>
        </div>

      </div>

      {/* 우측 사이드바 4열 */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* 편의시설 현황 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs">
          <h3 className="text-base font-black text-slate-900 border-b pb-3 border-slate-100 mb-4">
            주요 편의 서비스
          </h3>
          <div className="space-y-3">
            {area.facilities.map((facility) => (
              <div key={facility} className="flex justify-between items-center text-xs py-1">
                <span className="font-extrabold text-slate-700">{facility}</span>
                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">제공중</span>
              </div>
            ))}
          </div>
        </div>

        {/* 인근 휴게소 추천 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs">
          <h3 className="text-base font-black text-slate-900 border-b pb-3 border-slate-100 mb-4">
            동일 노선 인근 휴게소
          </h3>
          <div className="space-y-3">
            {siblingAreas.slice(0, 3).map((s) => (
              <a 
                key={s.slug}
                href={`/rest-areas/${s.slug}`}
                className="block p-3 border border-slate-100 rounded-xl hover:border-blue-600 hover:bg-slate-50 transition-all text-left"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[13.5px] font-black text-slate-800">{s.name}</span>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{s.directionName}</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-400">
                  <span>{s.locationKm}km 지점</span>
                  <span>시그니처: {s.signatureMenu.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
