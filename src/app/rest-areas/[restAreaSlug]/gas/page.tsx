import { getServiceAreaBySlug, serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
}

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    restAreaSlug: area.slug,
  }));
}

export default async function RestAreaGasPage({ params }: Props) {
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

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed font-normal">
      
      {/* 타이틀 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
          ⛽ {area.name} 휴게소 실시간 주유소 및 LPG 충전소 유가 정보
        </h2>
        <p className="text-sm text-slate-500">
          한국도로공사 유가정보 피드 데이터를 기반으로 제공하는 실시간 기름값 정보입니다.
        </p>
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
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${gasolineDiff < 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : 'bg-rose-50 text-rose-700 border border-rose-200/60'}`}>
              {gasolineDiff < 0 ? `노선 평균 대비 ${Math.abs(gasolineDiff)}원 저렴` : `노선 평균 대비 ${gasolineDiff}원 비쌈`}
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
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${dieselDiff < 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : 'bg-rose-50 text-rose-700 border border-rose-200/60'}`}>
              {dieselDiff < 0 ? `노선 평균 대비 ${Math.abs(dieselDiff)}원 저렴` : `노선 평균 대비 ${dieselDiff}원 비쌈`}
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
          장거리 주행 시 다음 휴게소 주유소와의 유가 차이를 미리 확인하시어 현명하게 주유 계획을 세우시길 추천드립니다.
        </p>
      </div>

    </div>
  );
}
