import { highways, cctvPoints } from '@/lib/data';
import AdSense from '@/components/AdSense';

export const metadata = {
  title: '전국 고속도로 실시간 CCTV 보기 - 구간별 교통상황 영상',
  description: '경부고속도로, 영동고속도로, 서해안고속도로 등 전국 주요 고속도로 노선의 실시간 CCTV 주행 화면을 확인하세요. 정체 및 사고 구역을 영상으로 즉시 점검할 수 있습니다.',
};

export default function CctvHubPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 타이틀 및 헤더 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          전국 고속도로 실시간 CCTV
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          전국 고속도로에 설치된 CCTV 관제 실시간 영상 스트리밍 서비스입니다. 이동 전 정체 지점 및 기상 상태를 눈으로 확인해보세요.
        </p>
      </div>

      {/* 애드센스 */}
      <AdSense slot="6677889900" />

      {/* 노선별 CCTV 카테고리 빠른 탐색 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 border-b pb-3 border-slate-200">노선별 CCTV 실시간 보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highways.map((h) => (
            <a 
              key={h.slug}
              href={`/cctv/${h.slug}`}
              className="p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-600 hover:shadow-xs transition-all block text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{h.number}</span>
                <span className="text-xs text-slate-400 font-mono">CCTV 연동중</span>
              </div>
              <h3 className="text-base font-black text-slate-800">{h.name}</h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">실시간 주행영상 확인</p>
            </a>
          ))}
        </div>
      </section>

      {/* 전체 CCTV 카메라 목록 */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100">
          전체 고속도로 CCTV 지점 목록
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cctvPoints.map((c) => (
            <div key={c.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors flex justify-between items-center">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[14px] font-black text-slate-800">{c.name}</span>
                </div>
                <p className="text-[11px] text-slate-400">{c.highwayName} &middot; {c.direction}</p>
                <div className="flex gap-2 text-[10px]">
                  <span className={`px-1.5 py-0.5 rounded font-black ${
                    c.status === 'smooth' ? 'bg-emerald-50 text-emerald-700' :
                    c.status === 'slow' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {c.status === 'smooth' ? '원활' : c.status === 'slow' ? '서행' : '정체'}
                  </span>
                  <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-mono">{c.currentSpeed} km/h</span>
                </div>
              </div>
              <a 
                href={`/cctv/${c.highwaySlug}/${c.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shrink-0"
              >
                CCTV 재생
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
