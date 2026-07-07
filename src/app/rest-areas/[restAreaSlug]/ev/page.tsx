import { getServiceAreaBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
}

export default async function RestAreaEvPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          🔋 친환경차 충전소 및 세부 사양
        </h2>
        <span className="text-xs font-bold text-slate-400">전기차 급속 충전 &middot; 수소차 충전 현황</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 전기차 충전소 카드 */}
        <div className="p-6 border border-slate-100 bg-slate-50/50 rounded-xl space-y-3">
          <h3 className="font-extrabold text-slate-800 flex items-center gap-1.5">
            ⚡ 전기차(EV) 급속 충전
          </h3>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>충전 가능 여부</span>
              <span className={`font-black ${area.gasStation.hasEvCharger ? 'text-emerald-600' : 'text-red-500'}`}>
                {area.gasStation.hasEvCharger ? '이용 가능' : '이용 불가능'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>충전기 대수</span>
              <span className="font-black text-slate-800 font-mono">{area.gasStation.evChargersCount}기</span>
            </div>
            <div className="flex justify-between">
              <span>충전 속도</span>
              <span className="font-black text-slate-800">급속 (100kW ~ 350kW 초급속 지원)</span>
            </div>
          </div>
        </div>

        {/* 수소차 충전소 카드 */}
        <div className="p-6 border border-slate-100 bg-slate-50/50 rounded-xl space-y-3">
          <h3 className="font-extrabold text-slate-800 flex items-center gap-1.5">
            🫧 수소차(FCEV) 충전
          </h3>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>수소 충전소 가용 여부</span>
              <span className={`font-black ${area.gasStation.hasHydrogen ? 'text-sky-600' : 'text-slate-400'}`}>
                {area.gasStation.hasHydrogen ? '이용 가능' : '미운영'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>충전 압력</span>
              <span className="font-black text-slate-800 font-mono">700 bar (지원 대상 차량 전용)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-800 leading-relaxed">
        <strong>💡 전기차 충전 꿀팁</strong>: 고속도로 휴게소 전기차 충전기는 환경부 및 대기업 제휴(E-pit 등)를 통한 초급속 충전이 주를 이룹니다. 충전 대기 차량이 많은 명절이나 주말에는 다음 휴게소의 가용 여부를 네비게이션이나 무공해차 통합누리집 앱으로 미리 크로스체킹하시는 것이 좋습니다.
      </div>
    </div>
  );
}
