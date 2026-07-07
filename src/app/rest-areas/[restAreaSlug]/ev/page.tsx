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

export default async function RestAreaEvPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-800 leading-relaxed">
      
      {/* 타이틀 */}
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-slate-900 pl-4">
          ⚡ {area.name} 휴게소 전기차 충전소 및 수소차 충전 현황
        </h2>
        <p className="text-sm text-slate-500">
          친환경 차량 운전자를 위한 급속 전기차 충전기와 수소 충전소 사양 정보입니다.
        </p>
      </div>

      {/* 세로 목록형 충전소 사양 */}
      <div className="space-y-6">
        
        {/* 전기차(EV) */}
        <div className="py-4 border-b border-slate-200 space-y-3">
          <h3 className="text-lg font-black text-slate-900">전기차 (EV) 충전 인프라</h3>
          <ul className="divide-y divide-slate-100 text-sm">
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-bold">충전 가용 여부</span>
              <span className={`font-black ${area.gasStation.hasEvCharger ? 'text-emerald-700' : 'text-slate-400'}`}>
                {area.gasStation.hasEvCharger ? '이용 가능' : '미운영'}
              </span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-bold">설치된 충전기 대수</span>
              <span className="font-mono font-black text-slate-900">{area.gasStation.evChargersCount}대 운영 중</span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-bold">충전 속도 규격</span>
              <span className="font-bold text-slate-700">급속 (100kW) ~ 초급속 (300kW 이상) 지원</span>
            </li>
          </ul>
        </div>

        {/* 수소차(FCEV) */}
        <div className="py-4 border-b border-slate-200 space-y-3">
          <h3 className="text-lg font-black text-slate-900">수소차 (FCEV) 충전 인프라</h3>
          <ul className="divide-y divide-slate-100 text-sm">
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-bold">수소 충전소 운영 여부</span>
              <span className={`font-black ${area.gasStation.hasHydrogen ? 'text-slate-900' : 'text-slate-400'}`}>
                {area.gasStation.hasHydrogen ? '이용 가능 (정상 운영)' : '미운영'}
              </span>
            </li>
            <li className="py-3 flex justify-between">
              <span className="text-slate-500 font-bold">충전 압력 규격</span>
              <span className="font-bold text-slate-700">700 bar (승용 수소 차량 전용 표준)</span>
            </li>
          </ul>
        </div>

      </div>

      {/* 충전 가이드 설명글 */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
        <h3 className="text-sm font-black text-slate-800">💡 친환경차 고속도로 충전 가이드</h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          고속도로 휴게소에 설치된 전기차 충전소는 주로 환경부나 대기업 제휴를 통한 고출력 초급속 충전 인프라가 구축되어 있어 단시간 내 충전이 가능합니다. 
          다만 명절이나 주말 등 통행량이 많을 때는 대기 줄이 길어질 수 있으므로, 목적지 도달 전에 네비게이션이나 무공해차 통합누리집 등을 활용해 가용 충전기 대수를 사전에 파악하여 이용하는 것을 추천드립니다.
        </p>
      </div>

    </div>
  );
}
