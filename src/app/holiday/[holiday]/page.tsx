import { highways } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

const holidayMap: Record<string, { name: string; title: string; desc: string; tips: string[] }> = {
  'chuseok': { 
    name: '추석', 
    title: '추석 연휴 고속도로 교통상황 예보', 
    desc: '한가위 명절 연휴 기간 동안 발생하는 대규모 통행량을 피해 정체를 우회할 수 있는 요령과 분석 자료입니다.',
    tips: [
      '귀성길 추천 출발시간: 연휴 전날 오전 7시 이전 또는 연휴 둘째날 오후 8시 이후',
      '귀경길 추천 출발시간: 추석 당일 다음날 새벽 6시 이전 또는 밤 10시 이후',
      '통행료 무료: 연휴 시작일 00:00부터 종료일 24:00까지 전 차량 통행료 100% 면제',
      '휴게소 팁: 식당 대기줄을 줄이려면 간편식 스낵코너(호두과자, 소떡소떡 등) 전용 키오스크를 이용하세요.'
    ]
  },
  'seollal': { 
    name: '설날', 
    title: '설날 연휴 고속도로 교통상황 예보', 
    desc: '겨울철 안전 주행 수칙과 설날 연휴 대이동 정체구간 피하기 꿀팁을 확인해보세요.',
    tips: [
      '귀성길 추천 출발시간: 연휴 첫날 새벽 5시 이전 또는 전날 밤 9시 이후',
      '귀경길 추천 출발시간: 설날 당일 당일 저녁 9시 이후 또는 다음날 새벽 시간대',
      '통행료 무료: 연휴 첫날 00:00부터 마지막날 24:00까지 면제 적용',
      '결빙 주의: 터널 입구 및 다리 위 블랙아이스 결빙에 각별히 유의하고 감속 운전하세요.'
    ]
  }
};

interface Props {
  params: Promise<{ holiday: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { holiday } = await params;
  const info = holidayMap[holiday];
  if (!info) return {};

  return {
    title: `${info.name} 고속도로 교통상황 - 귀성길/귀경길 정체 분석 및 우회로`,
    description: `${info.title}. 추천 출발 시간대, 통행 요금 무료 일정 및 노선별 혼잡 예상 정보 안내.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(holidayMap).map((key) => ({
    holiday: key,
  }));
}

export default async function HolidayDetailPage({ params }: Props) {
  const { holiday } = await params;
  const info = holidayMap[holiday];

  if (!info) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 브레드크럼 */}
      <div className="flex gap-1.5 items-center text-xs text-slate-400">
        <a href="/" className="hover:text-blue-600">홈</a>
        <span>&gt;</span>
        <a href="/holiday" className="hover:text-blue-600">명절 연휴 특집</a>
        <span>&gt;</span>
        <span className="text-slate-600 font-bold">{info.name}</span>
      </div>

      {/* 헤더 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <h1 className="text-3xl font-black tracking-tight">{info.title}</h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-3xl leading-relaxed">
            {info.desc}
          </p>
        </div>
      </div>

      <AdSense slot="2233445566" />

      {/* 추천 행동 가이드 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900">{info.name} 연휴 스트레스 줄이는 핵심 요령</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {info.tips.map((tip, idx) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl text-xs md:text-sm font-semibold text-slate-700 leading-relaxed">
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* 노선별 명절 상세 상황판 퀵 바로가기 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-slate-900">노선별 명절 정체구간 실시간 조회</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {highways.map(h => (
            <a 
              key={h.slug}
              href={`/traffic/${h.slug}`}
              className="p-5 border border-slate-100 rounded-xl bg-slate-50 hover:bg-slate-50/50 hover:border-blue-600 transition-all text-left flex justify-between items-center text-xs"
            >
              <div>
                <h4 className="font-black text-slate-800">{h.name}</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">{info.name} 소통상태 열람</p>
              </div>
              <span className="font-bold text-blue-600">상황판 &rarr;</span>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
