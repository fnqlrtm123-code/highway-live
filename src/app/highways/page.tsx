import { highways } from '@/lib/data';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '전국 고속도로 노선 정보 - 기종점, 총연장 및 주요 편의정보',
  description: '대한민국 주요 고속도로 노선별 기종점, 총연장, 대표 휴게소, 유가 정보 및 교통 상황판을 조회해보세요.',
};

export default function HighwaysIndexPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-10">
      
      {/* 타이틀 및 소개 */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">🛣️ 전국 고속도로 노선 정보</h1>
        <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
          국토 교통망의 뼈대를 이루는 주요 노선별 기본 정보와 실시간 교통상황, 휴게소 리스트를 제공합니다.
        </p>
      </div>

      <AdSense slot="9988776655" />

      {/* 노선 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highways.map((h) => (
          <div 
            key={h.slug} 
            className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs hover:border-blue-600 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black bg-blue-600 text-white px-2 py-0.5 rounded">{h.number}</span>
                <span className="text-[11px] font-bold text-slate-400 font-mono">{h.length}</span>
              </div>
              <h2 className="text-lg font-black text-slate-800">{h.name}</h2>
              <p className="text-xs text-slate-500 leading-normal">{h.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-xs font-mono border-t border-slate-100 pt-3 text-slate-500">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">기점 (시작)</span>
                  <span className="font-sans font-bold text-slate-700">{h.start}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">종점 (끝)</span>
                  <span className="font-sans font-bold text-slate-700">{h.end}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-t border-slate-100 pt-4 text-xs">
              <a 
                href={`/highways/${h.slug}`} 
                className="flex-grow bg-slate-900 hover:bg-slate-800 text-white text-center py-2 rounded-lg font-bold transition-colors"
              >
                노선 상세정보
              </a>
              <a 
                href={`/traffic/${h.slug}`} 
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-center py-2 px-4 rounded-lg font-bold transition-colors"
              >
                교통상황
              </a>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
