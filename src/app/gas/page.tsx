import { serviceAreas } from '@/lib/data';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고속도로 주유소 가격 비교 - 오늘 가장 싼 주유소 순위',
  description: '전국 고속도로 노선별 알뜰주유소 및 브랜드 주유소의 실시간 휘발유, 경유, LPG 판매 가격 랭킹을 제공합니다.',
};

export default function GasIndexPage() {
  // 휘발유, 경유 최저가 정렬
  const gasolineRanking = [...serviceAreas]
    .sort((a, b) => a.gasStation.gasolinePrice - b.gasStation.gasolinePrice);

  const dieselRanking = [...serviceAreas]
    .sort((a, b) => a.gasStation.dieselPrice - b.gasStation.dieselPrice);

  const lpgStations = serviceAreas.filter(s => s.gasStation.lpgPrice !== null);

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 타이틀 헤더 */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">실시간 고속도로 주유소 가격 비교</h1>
        <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
          오늘 전국 고속도로 유가 동향 및 가장 가격이 저렴한 알뜰주유소 실시간 최저가 순위를 확인하고 지능적인 주유 설계를 완료해보세요.
        </p>
      </div>

      <AdSense slot="5566778899" />

      {/* 휘발유 및 경유 투 트랙 최저가 카드 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 휘발유 최저가 순위 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xs space-y-4">
          <h2 className="text-lg font-black text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
            휘발유 최저가 TOP 5
          </h2>
          <div className="space-y-3.5">
            {gasolineRanking.slice(0, 5).map((area, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-800">{area.name} ({area.directionName})</span>
                  <span className="text-[10px] text-slate-400 block">{area.highwayName} &middot; {area.gasStation.brand}</span>
                </div>
                <span className="font-mono font-black text-blue-600 text-sm">{area.gasStation.gasolinePrice}원</span>
              </div>
            ))}
          </div>
        </div>

        {/* 경유 최저가 순위 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xs space-y-4">
          <h2 className="text-lg font-black text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
            경유 최저가 TOP 5
          </h2>
          <div className="space-y-3.5">
            {dieselRanking.slice(0, 5).map((area, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-800">{area.name} ({area.directionName})</span>
                  <span className="text-[10px] text-slate-400 block">{area.highwayName} &middot; {area.gasStation.brand}</span>
                </div>
                <span className="font-mono font-black text-orange-600 text-sm">{area.gasStation.dieselPrice}원</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* LPG 충전소 가능 휴게소 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900">LPG 충전 가능 고속도로 휴게소</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {lpgStations.map((area) => (
            <div key={area.slug} className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl flex justify-between items-center text-xs">
              <div>
                <span className="font-bold text-slate-800 block">{area.name}</span>
                <span className="text-[10px] text-slate-400">{area.highwayName} &middot; {area.directionName}</span>
              </div>
              <span className="font-mono font-bold text-slate-700 bg-white px-2 py-1 border border-slate-100 rounded">
                LPG: {area.gasStation.lpgPrice}원
              </span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
