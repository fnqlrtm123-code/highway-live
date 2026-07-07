import { getHighwayBySlug, highways, getCctvPointsByHighway, getServiceAreasByHighway } from '@/lib/data';
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
    title: `${highway.name} 실시간 교통상황 - 정체구간 및 실시간 CCTV`,
    description: `${highway.name}의 실시간 소통 흐름, 정체 정보, 구간별 CCTV 주행 영상, 노선 내 휴게소 및 알뜰주유소 실시간 정보를 모니터링하세요.`,
  };
}

export async function generateStaticParams() {
  return highways.map((h) => ({
    highway: h.slug,
  }));
}

export default async function HighwayTrafficPage({ params }: Props) {
  const { highway: highwaySlug } = await params;
  const highway = getHighwayBySlug(highwaySlug);

  if (!highway) {
    notFound();
  }

  const cctvs = getCctvPointsByHighway(highwaySlug);
  const serviceAreas = getServiceAreasByHighway(highwaySlug);

  // 대략적인 평균속도 계산
  const avgSpeed = cctvs.length > 0
    ? Math.round(cctvs.reduce((sum, c) => sum + c.currentSpeed, 0) / cctvs.length)
    : 100;

  // 전체 상태 진단
  const slowOrCongestedCount = cctvs.filter(c => c.status === 'slow' || c.status === 'congested').length;
  let statusText = '원활 소통';
  let statusColor = 'text-emerald-600 bg-emerald-50';
  if (slowOrCongestedCount > 0) {
    statusText = slowOrCongestedCount >= 2 ? '정체 혼잡' : '일부 서행';
    statusColor = slowOrCongestedCount >= 2 ? 'text-red-600 bg-red-50' : 'text-amber-600 bg-amber-50';
  }

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 뒤로가기 링크 */}
      <a href="/traffic" className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
        &larr; 실시간 교통상황 메인으로 돌아가기
      </a>

      {/* 헤더 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-black bg-blue-600 text-white px-2.5 py-0.5 rounded">{highway.number}</span>
            <span className="text-xs text-blue-300 font-mono tracking-tight">{highway.length} &middot; 기종점: {highway.start} &rarr; {highway.end}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">{highway.name} 실시간 교통상황</h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            {highway.description} 구간별 실시간 CCTV 카메라 피드와 전방 주행 속도 상태를 실시간 매핑하여 제공합니다.
          </p>
        </div>
      </div>

      {/* 애드센스 */}
      <AdSense slot="2233445566" />

      {/* 요약 현황판 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">노선 전체 소통상태</span>
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-black px-3.5 py-1 rounded-xl ${statusColor}`}>
              {statusText}
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">노선 전체 평균속도</span>
          <span className="text-3xl font-mono font-black text-slate-800 block">
            {avgSpeed} km/h
          </span>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">돌발 상황 건수</span>
          <span className="text-3xl font-mono font-black text-slate-800 block">
            {slowOrCongestedCount > 0 ? `${slowOrCongestedCount}건 감지` : '사고없음'}
          </span>
        </div>
      </section>

      {/* 지점별 CCTV 및 소통 상황 테이블 */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100">
          지점별 실시간 주행 CCTV 목록
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-slate-700 text-xs md:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3 px-4">지점명</th>
                <th className="py-3 px-4">지점 위치 (km)</th>
                <th className="py-3 px-4">방향</th>
                <th className="py-3 px-4 text-right">제한속도</th>
                <th className="py-3 px-4 text-right">현재 속도</th>
                <th className="py-3 px-4 text-center">소통 상태</th>
                <th className="py-3 px-4 text-center">교통 상황판</th>
              </tr>
            </thead>
            <tbody>
              {cctvs.map((c) => (
                <tr key={c.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-800">{c.name}</td>
                  <td className="py-3.5 px-4 font-mono">{c.locationKm} km</td>
                  <td className="py-3.5 px-4 text-slate-500">{c.direction}</td>
                  <td className="py-3.5 px-4 text-right font-mono">{c.speedLimit} km/h</td>
                  <td className="py-3.5 px-4 text-right font-mono font-black">{c.currentSpeed} km/h</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-black ${
                      c.status === 'smooth' ? 'bg-emerald-50 text-emerald-700' :
                      c.status === 'slow' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {c.status === 'smooth' ? '원활' : c.status === 'slow' ? '서행' : '정체'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <a 
                      href={`/cctv/${c.highwaySlug}/${c.id}`}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold px-3.5 py-1 rounded text-xs transition-colors"
                    >
                      상황 조회
                    </a>
                  </td>
                </tr>
              ))}
              {cctvs.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">등록된 지점 정보가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* 노선 내 휴게소 바로가기 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 border-b pb-3 border-slate-200">
          이 노선의 휴게소 목록
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceAreas.map((s) => (
            <div key={s.slug} className="p-5 bg-white border border-slate-200 rounded-xl flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-black text-slate-800">{s.name}</h3>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{s.directionName}</span>
                </div>
                <p className="text-xs text-slate-400">{s.locationKm}km 지점 &middot; 시그니처: {s.signatureMenu.name}</p>
              </div>
              <a 
                href={`/rest-areas/${s.slug}`}
                className="bg-slate-950 text-white hover:bg-slate-800 font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shrink-0"
              >
                상세정보 &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
