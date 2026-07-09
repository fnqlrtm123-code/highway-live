import { serviceAreas } from '@/lib/data';
import AdSense from '@/components/AdSense';
import HubHeader from '@/components/HubHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고속도로 전기차 충전소 현황 - 초급속 충전기 보유 휴게소 목록',
  description: '전국 고속도로 노선별 전기차(EV) 급속/초급속 충전기 보유 수량, 사용 팁 및 대기 최소화 가이드를 제공합니다.',
};

export default function EvIndexPage() {
  const evServiceAreas = serviceAreas.filter(s => s.gasStation.hasEvCharger);

  return (
    <>
      <HubHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-10 text-slate-800 font-sans">
      
      {/* 타이틀 헤더 */}
      <div className="space-y-3.5 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-750 px-3 py-1 rounded-full text-xs font-bold">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
          </span>
          전국 고속도로 친환경 인프라
        </div>
        <h1 className="text-2.5xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight">고속도로 전기차(EV) 충전소 현황</h1>
        <p className="text-slate-500 text-xs md:text-[13.5px] max-w-2xl leading-relaxed font-medium">
          고속도로 주행 중 방전을 예방하기 위해 초급속 충전 시설을 보유한 휴게소 충전기 수량 목록을 제공합니다.
        </p>
      </div>

      <AdSense slot="9988776655" />

      {/* 충전기 다수 보유 순위 */}
      <section className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
        <h2 className="text-[15px] font-bold text-slate-900 border-b pb-4 border-slate-100 flex items-center gap-2">
          <span className="w-1 h-3.5 bg-emerald-600 rounded-full inline-block"></span>
          초급속 &middot; 급속 충전기 보유 휴게소 리스트
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evServiceAreas.map((area) => (
            <div 
              key={area.slug} 
              className="p-5 border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-xs transition-all rounded-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs md:text-[13.5px] font-bold text-slate-800">{area.name}</h3>
                    <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{area.highwayName} &middot; {area.directionName}</p>
                  </div>
                  <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">
                    설치 완료
                  </span>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-slate-100/80 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold">충전 가능 대수</span>
                  <span className="font-mono font-extrabold text-slate-900 text-xs md:text-[13px]">{area.gasStation.evChargersCount}대 동시 충전</span>
                </div>
              </div>

              <a 
                href={`/ev/${area.slug}`}
                className="bg-slate-900 hover:bg-slate-800 text-white text-center py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                충전소 실시간 상태 &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
    </>
  );
}
