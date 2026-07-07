import { getServiceAreaBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
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
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          ⛽ 실시간 주유소 가격표
        </h2>
        <span className="text-xs font-bold text-slate-400">도로공사 유가정보 실시간 수집 피드</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 휘발유 */}
        <div className="p-5 border border-slate-100 bg-slate-50/50 rounded-xl space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">휘발유 (Gasoline)</span>
          <div className="flex justify-between items-baseline">
            <span className="text-2xl font-mono font-black text-slate-800">
              {area.gasStation.gasolinePrice.toLocaleString()}원
            </span>
            <span className={`text-xs font-bold ${gasolineDiff < 0 ? 'text-emerald-600' : 'text-red-500'}`}>
              {gasolineDiff < 0 ? `평균대비 ${Math.abs(gasolineDiff)}원 저렴` : `평균대비 ${gasolineDiff}원 비쌈`}
            </span>
          </div>
        </div>

        {/* 경유 */}
        <div className="p-5 border border-slate-100 bg-slate-50/50 rounded-xl space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">경유 (Diesel)</span>
          <div className="flex justify-between items-baseline">
            <span className="text-2xl font-mono font-black text-slate-800">
              {area.gasStation.dieselPrice.toLocaleString()}원
            </span>
            <span className={`text-xs font-bold ${dieselDiff < 0 ? 'text-emerald-600' : 'text-red-500'}`}>
              {dieselDiff < 0 ? `평균대비 ${Math.abs(dieselDiff)}원 저렴` : `평균대비 ${dieselDiff}원 비쌈`}
            </span>
          </div>
        </div>

        {/* LPG */}
        <div className="p-5 border border-slate-100 bg-slate-50/50 rounded-xl space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">LPG 충전</span>
          <div className="flex justify-between items-baseline">
            <span className="text-2xl font-mono font-black text-slate-800">
              {area.gasStation.lpgPrice ? `${area.gasStation.lpgPrice.toLocaleString()}원` : '판매안함'}
            </span>
            <span className="text-xs text-slate-400 font-bold">LPG 전용차량 가능</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl space-y-2">
        <h4 className="text-xs font-black text-blue-800">💡 주유소 이용 정보</h4>
        <p className="text-xs text-blue-700 leading-relaxed">
          해당 주유소의 브랜드는 <strong>{area.gasStation.brand}</strong>입니다. 고속도로 전용 알뜰주유소(ex-oil)는 도로공사의 정품 유류 대량 공동구매 정책으로 시중 정유사 폴 주유소보다 리터당 저렴합니다. 세차장 가용 여부는 현장 기상 상태에 따라 달라질 수 있습니다.
        </p>
      </div>
    </div>
  );
}
