import { getHighwayBySlug, highways, getCctvPointsByHighway } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ highway: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { highway: highwaySlug } = await params;
  const highway = getHighwayBySlug(highwaySlug);
  if (!highway) return {};

  return {
    title: `${highway.name} 실시간 CCTV 보기 - 구간별 카메라 채널`,
    description: `${highway.name}에 설치된 실시간 교통상황 관제 CCTV 카메라 목록을 확인하세요. 지점별 실시간 주행 영상 및 평균속도 정보를 실시간으로 중계합니다.`,
  };
}

export async function generateStaticParams() {
  return highways.map((h) => ({
    highway: h.slug,
  }));
}

export default async function HighwayCctvPage({ params }: Props) {
  const { highway: highwaySlug } = await params;
  const highway = getHighwayBySlug(highwaySlug);

  if (!highway) {
    notFound();
  }

  const cctvs = getCctvPointsByHighway(highwaySlug);

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 뒤로가기 링크 */}
      <a href="/cctv" className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
        &larr; CCTV 메인 허브로 돌아가기
      </a>

      {/* 헤더 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-black bg-blue-600 text-white px-2.5 py-0.5 rounded">{highway.number}</span>
            <span className="text-xs text-blue-300 font-mono tracking-tight">{highway.length} &middot; 기종점: {highway.start} &rarr; {highway.end}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">{highway.name} CCTV 실시간 채널</h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            {highway.name}의 모든 주요 지점 CCTV 영상을 제공합니다. 구간별 혼잡도 및 소통 흐름 상태를 실시간 영상으로 간편하게 확인해보세요.
          </p>
        </div>
      </div>

      {/* 애드센스 */}
      <AdSense slot="2233445566" />

      {/* CCTV 리스트 */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100">
          {highway.name} CCTV 포인트 목록 ({cctvs.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cctvs.map((c) => (
            <div key={c.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors flex justify-between items-center">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[14px] font-black text-slate-800">{c.name}</span>
                </div>
                <p className="text-[11px] text-slate-400">{c.direction} &middot; {c.locationKm}km 지점</p>
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs transition-colors shrink-0"
              >
                CCTV 재생
              </a>
            </div>
          ))}
          {cctvs.length === 0 && (
            <p className="col-span-full text-center py-8 text-slate-400">이 노선에 등록된 CCTV 포인트가 없습니다.</p>
          )}
        </div>
      </section>

    </main>
  );
}
