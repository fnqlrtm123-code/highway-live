import { serviceAreas } from '@/lib/data';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고속도로 전기차 충전소 현황 - 초급속 충전기 보유 휴게소 목록',
  description: '전국 고속도로 노선별 전기차(EV) 급속/초급속 충전기 보유 수량, 사용 팁 및 대기 최소화 가이드를 제공합니다.',
};

export default function EvIndexPage() {
  const evServiceAreas = serviceAreas.filter(s => s.gasStation.hasEvCharger);

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 타이틀 헤더 */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">🔌 고속도로 전기차(EV) 충전소 현황</h1>
        <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
          고속도로 주행 중 방전을 예방하기 위해 초급속 충전 시설을 보유한 휴게소 충전기 수량 목록을 제공합니다.
        </p>
      </div>

      <AdSense slot="9988776655" />

      {/* 충전기 다수 보유 순위 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100">
          ⚡ 초급속 &middot; 급속 충전기 보유 휴게소 리스트
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evServiceAreas.map((area) => (
            <div 
              key={area.slug} 
              className="p-5 border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all rounded-2xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-black text-slate-800">{area.name}</h3>
                    <p className="text-[10.5px] text-slate-400 mt-0.5">{area.highwayName} &middot; {area.directionName}</p>
                  </div>
                  <span className="text-[10px] font-black bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                    설치 완료
                  </span>
                </div>
                
                <div className="bg-white p-3 rounded-xl border border-slate-100/80 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold">충전 가능 대수</span>
                  <span className="font-mono font-black text-slate-900 text-sm">{area.gasStation.evChargersCount}대 동시 충전</span>
                </div>
              </div>

              <a 
                href={`/rest-areas/${area.slug}/ev`}
                className="bg-slate-900 hover:bg-slate-800 text-white text-center py-2 rounded-lg text-xs font-bold transition-colors"
              >
                충전소 실시간 상태 &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
