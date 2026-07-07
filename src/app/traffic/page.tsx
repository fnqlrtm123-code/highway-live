import { highways, cctvPoints } from '@/lib/data';
import AdSense from '@/components/AdSense';

export const metadata = {
  title: '실시간 고속도로 교통상황 - 정체구간, CCTV, 예상 소요시간',
  description: '전국 고속도로의 실시간 소통 현황을 한눈에 조회하세요. 노선별 원활/서행/정체 비율, 정체 구간 TOP 목록 및 주요 도시 간 예상 소요시간 정보를 실시간으로 중계합니다.',
};

export default function TrafficPage() {
  // 간단한 통계 계산
  const totalCctvs = cctvPoints.length;
  const smoothCount = cctvPoints.filter(c => c.status === 'smooth').length;
  const slowCount = cctvPoints.filter(c => c.status === 'slow').length;
  const congestedCount = cctvPoints.filter(c => c.status === 'congested').length;

  const smoothRatio = Math.round((smoothCount / totalCctvs) * 100);
  const slowRatio = Math.round((slowCount / totalCctvs) * 100);
  const congestedRatio = Math.round((congestedCount / totalCctvs) * 100);

  // 정체/서행 구간 추출
  const congestedSections = [...cctvPoints]
    .filter(c => c.status === 'congested' || c.status === 'slow')
    .sort((a, b) => a.currentSpeed - b.currentSpeed);

  // 예상 소요시간 (가상 데이터)
  const travelTimes = [
    { route: '서울 → 부산', time: '4시간 15분', status: 'normal' },
    { route: '서울 → 강릉', time: '2시간 40분', status: 'smooth' },
    { route: '서울 → 광주', time: '3시간 20분', status: 'slow' },
    { route: '부산 → 서울', time: '4.5시간', status: 'congested' },
  ];

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 타이틀 및 헤더 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          실시간 고속도로 교통상황
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          전국 고속도로의 실시간 소통 흐름을 관제 데이터 기반으로 실시간 제공합니다. 정체구간 및 예상 소요시간을 분석하여 최적의 경로를 설계해보세요.
        </p>
      </div>

      {/* 애드센스 */}
      <AdSense slot="1122334455" />

      {/* 전국 소통현황 요약 대시보드 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider">전국 고속도로 소통 비율</h3>
          <div className="flex items-center gap-1 h-3 rounded-full overflow-hidden bg-slate-100">
            <div className="bg-emerald-500 h-full" style={{ width: `${smoothRatio}%` }} />
            <div className="bg-amber-500 h-full" style={{ width: `${slowRatio}%` }} />
            <div className="bg-red-500 h-full" style={{ width: `${congestedRatio}%` }} />
          </div>
          <div className="grid grid-cols-3 text-center text-xs pt-2">
            <div>
              <span className="block font-black text-emerald-600">{smoothRatio}%</span>
              <span className="text-slate-400">원활 ({smoothCount}곳)</span>
            </div>
            <div>
              <span className="block font-black text-amber-600">{slowRatio}%</span>
              <span className="text-slate-400">서행 ({slowCount}곳)</span>
            </div>
            <div>
              <span className="block font-black text-red-500">{congestedRatio}%</span>
              <span className="text-slate-400">정체 ({congestedCount}곳)</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-3">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider">돌발 정보 (사고 &middot; 공사)</h3>
          <div className="space-y-2 pt-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700">실시간 통제/공사 건수</span>
              <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded font-mono">1건</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700">대형 사고 정보</span>
              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">발생없음</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-3">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider">주요 도시 간 예상 소요시간</h3>
          <div className="space-y-2">
            {travelTimes.map((t) => (
              <div key={t.route} className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold text-slate-700">{t.route}</span>
                <div className="flex items-center gap-2">
                  <span className="font-black text-slate-800">{t.time}</span>
                  <span className={`w-2 h-2 rounded-full ${
                    t.status === 'smooth' ? 'bg-emerald-500' :
                    t.status === 'slow' ? 'bg-amber-500' :
                    t.status === 'congested' ? 'bg-red-500' : 'bg-slate-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 정체 구간 TOP 리스트 */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900">🚨 실시간 정체/서행 감지 구간</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-slate-700 text-xs md:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3 px-4">노선명</th>
                <th className="py-3 px-4">구간/지점명</th>
                <th className="py-3 px-4">주행방향</th>
                <th className="py-3 px-4 text-right">제한 속도</th>
                <th className="py-3 px-4 text-right">현재 속도</th>
                <th className="py-3 px-4 text-center">CCTV 보기</th>
              </tr>
            </thead>
            <tbody>
              {congestedSections.map((c) => (
                <tr key={c.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-800">{c.highwayName}</td>
                  <td className="py-3.5 px-4">{c.name}</td>
                  <td className="py-3.5 px-4 text-slate-500">{c.direction}</td>
                  <td className="py-3.5 px-4 text-right font-mono">{c.speedLimit} km/h</td>
                  <td className="py-3.5 px-4 text-right font-mono font-black text-red-500">{c.currentSpeed} km/h</td>
                  <td className="py-3.5 px-4 text-center">
                    <a 
                      href={`/cctv/${c.id}`}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold px-3 py-1 rounded text-xs transition-colors"
                    >
                      📹 보기
                    </a>
                  </td>
                </tr>
              ))}
              {congestedSections.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-slate-400">현재 감지된 정체 및 서행 구간이 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* 노선별 상황 바로가기 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 border-b pb-3 border-slate-200">🛣️ 고속도로 노선별 교통상황</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highways.map((h) => (
            <a 
              key={h.slug}
              href={`/traffic/${h.slug}`}
              className="p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-600 hover:shadow-xs transition-all block text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{h.number}</span>
                <span className="text-xs text-slate-400 font-mono">{h.length}</span>
              </div>
              <h3 className="text-base font-black text-slate-800">{h.name}</h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">{h.start} &rarr; {h.end}</p>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
