import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '명절 및 연휴 고속도로 특별 교통상황 예보 - 실시간 귀성/귀경 정보',
  description: '설날, 추석 등 명절 대이동 연휴 기간 동안의 실시간 우회로 정보, 최적 출발시간 분석, 통행료 면제 일정을 수록하고 있습니다.',
};

const holidays = [
  { slug: 'chuseok', name: '추석 연휴 교통 분석', period: '추석 당일 전후 3일간', desc: '민족 대이동 추석 연휴 기간 동안의 경부선, 서해안선 등 주요 노선별 우회도로 가이드 및 실시간 CCTV 확인 포인트입니다.' },
  { slug: 'seollal', name: '설날 연휴 교통 분석', period: '설날 당일 전후 3일간', desc: '겨울철 눈길/빙판길 안전 정보와 설날 명절 무료통행 조건 및 하행선 최저가 주유소 가격표 팁을 수록했습니다.' }
];

export default function HolidayIndexPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-10">
      
      {/* 소개 타이틀 */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">📅 명절 &middot; 연휴 특별 교통상황 예보</h1>
        <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
          대규모 이동이 발생하는 한가위 및 설 명절 기간 동안의 혼잡도를 최소화하기 위해 공공 통계 기반의 예상 혼잡 예측 가이드입니다.
        </p>
      </div>

      <AdSense slot="1122334455" />

      {/* 명절 연휴 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {holidays.map((h) => (
          <div 
            key={h.slug} 
            className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs hover:border-blue-600 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h2 className="text-lg font-black text-slate-800">{h.name}</h2>
                <span className="text-[10px] font-mono text-slate-400">{h.period}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
            </div>
            
            <a 
              href={`/holiday/${h.slug}`} 
              className="bg-slate-900 hover:bg-slate-800 text-white text-center py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              {h.name.split(' ')[0]} 실시간 상황 및 예측 보기 &rarr;
            </a>
          </div>
        ))}
      </div>

    </main>
  );
}
