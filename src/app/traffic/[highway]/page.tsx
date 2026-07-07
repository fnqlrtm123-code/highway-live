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
    title: `${highway.name} 교통상황 - 정체구간 및 CCTV 확인`,
    description: `${highway.name}의 소통 흐름, 정체 정보, 구간별 CCTV 주행 영상, 노선 내 휴게소 및 알뜰주유소 정보를 모니터링하세요.`,
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
        &larr; 교통상황 메인으로 돌아가기
      </a>

      {/* 헤더 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-black bg-blue-600 text-white px-2.5 py-0.5">{highway.number}</span>
            <span className="text-xs text-blue-300 font-mono tracking-tight">{highway.length} &middot; 기종점: {highway.start} &rarr; {highway.end}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">{highway.name} 교통상황</h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            {highway.description} 구간별 CCTV 카메라 피드와 전방 주행 속도 상태를 종합하여 제공합니다.
          </p>
        </div>
      </div>

      {/* 애드센스 */}
      <AdSense slot="2233445566" />

      {/* 요약 현황판 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 shadow-2xs space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">노선 전체 소통상태</span>
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-black px-3.5 py-1 ${statusColor}`}>
              {statusText}
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 shadow-2xs space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">노선 전체 평균속도</span>
          <span className="text-3xl font-mono font-black text-slate-800 block">
            {avgSpeed} km/h
          </span>
        </div>

        <div className="bg-white border border-slate-200 p-6 shadow-2xs space-y-2">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">돌발 상황 건수</span>
          <span className="text-3xl font-mono font-black text-slate-800 block">
            {slowOrCongestedCount > 0 ? `${slowOrCongestedCount}건 감지` : '사고없음'}
          </span>
        </div>
      </section>

      {/* 지점별 CCTV 및 소통 상황 테이블 */}
      <section className="bg-white border border-slate-200 p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100">
          지점별 CCTV 목록
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
                    <span className={`inline-block px-2 py-0.5 text-[11px] font-black ${
                      c.status === 'smooth' ? 'bg-emerald-50 text-emerald-700' :
                      c.status === 'slow' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {c.status === 'smooth' ? '원활' : c.status === 'slow' ? '서행' : '정체'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <a 
                      href={`/cctv/${c.highwaySlug}/${c.id}`}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold px-3.5 py-1 text-xs transition-colors"
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
            <div key={s.slug} className="p-5 bg-white border border-slate-200 flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-black text-slate-800">{s.name}</h3>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5">{s.directionName}</span>
                </div>
                <p className="text-xs text-slate-400">{s.locationKm}km 지점 &middot; 시그니처: {s.signatureMenu.name}</p>
              </div>
              <a 
                href={`/rest-areas/${s.slug}`}
                className="bg-slate-950 text-white hover:bg-slate-800 font-bold text-xs px-3.5 py-2 transition-colors shrink-0"
              >
                상세정보 &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* AEO / GEO 최적화 교통상황 정보 영역 */}
      <section className="bg-white border border-slate-200 p-6 md:p-8 space-y-8 text-slate-700 text-sm md:text-base leading-relaxed">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 font-sans">
              # {highway.name} 교통상황
            </h2>
            <p className="text-slate-650">
              {highway.name}은(는) <strong>{highway.start}</strong>과(와) <strong>{highway.end}</strong>을(를) 연결하는 주요 고속도로로, 대한민국 도로 네트워크의 중추 역할을 수행하고 있습니다. 상시 이동 차량이 많아 통행 시간대에 따라 소통 흐름 편차가 크므로 주행 전 확인이 필수적입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              ## {highway.name} 교통상황 확인방법
            </h3>
            <p className="text-slate-650">
              {highway.name}의 통행 상황을 파악하려면 국토교통부 국가교통정보센터(ITS)나 한국도로공사 로드플러스를 통해 실시간 소통 데이터를 교차 조회하는 것이 가장 정확합니다. 본 사이트의 노선 데이터 검색 필터를 통해 주행 구간 내 속도 편차와 나들목 진출입 병목 구간을 쉽고 직관적으로 파악할 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              ## {highway.name} CCTV 실시간 확인
            </h3>
            <p className="text-slate-650">
              {highway.name} 내 정체 구간의 전방 도로 상태와 기상 조건(폭우, 결빙, 안개 등)을 파악하는 데는 실시간 CCTV 모니터링이 매우 유용합니다. 주요 나들목(IC) 및 분기점(JC)별 교통 상황판 조회를 클릭하시면 도로공사 관제 시스템이 제공하는 교통 카메라 연결망으로 신속하게 연계됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              ## {highway.name} 상행선·하행선 방향 정리
            </h3>
            <p className="text-slate-650">
              {highway.name}은(는) <strong>{highway.start}</strong>(기점)과 <strong>{highway.end}</strong>(종점) 사이를 오가는 노선으로 두 가지 방향으로 정리가 가능합니다:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600 pl-2">
              <li><strong>상행선 방향</strong>: {highway.end} 방면으로 진행하는 차선으로, 주로 출퇴근 시간대와 연휴 마지막 날에 정체가 극심해집니다.</li>
              <li><strong>하행선 방향</strong>: {highway.start} 방면으로 진행하는 차선으로, 주말 오전 시간대 및 연휴 시작 시점에 차량 혼잡도가 높습니다.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              ## {highway.name} 정체가 자주 발생하는 구간
            </h3>
            <p className="text-slate-650">
              {highway.name}에서 흐름 지연이 자주 일어나는 장소는 나들목(IC)에서 차량 진출입 엇갈림이 일어나는 지점 및 주요 고속도로와 합류하는 분기점(JC) 부근입니다. 또한 일부 고지대나 긴 터널 등 오르막 감속을 일으키는 가속 둔화 구간에서 병목 현상이 누적되므로 해당 도로 진입 시 미리 서행에 대비해야 합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              ## {highway.name} 우회도로 선택 기준
            </h3>
            <p className="text-slate-650">
              {highway.name}의 특정 정체 통과 구간 소요 시간이 우회 국도로 주행할 때보다 15분~20분 이상 초과 지체되는 경우 우회 경로를 타는 것이 합리적입니다. 통행 요금, 총 주행 거리, 신호 대기 편차 등을 내비게이션 및 교통 정보 VMS 전광판 정보와 실시간 비교하여 경로를 유연하게 변경하십시오.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              ## 자주 묻는 질문 FAQ
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-800 text-[15px]">Q1. CCTV 영상 조회 시 지연이 발생하는 이유는 무엇인가요?</h4>
                <p className="text-slate-600 mt-1">
                  CCTV 데이터는 한국도로공사 등 관제 기관의 데이터 스트리밍 상태에 따라 수 초에서 수 분의 정보 업데이트 지연이 일어날 수 있습니다.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-[15px]">Q2. 노선 통행 중 사고나 긴급 고장 발생 시 어디로 연락하나요?</h4>
                <p className="text-slate-600 mt-1">
                  고속도로 긴급 상황 시에는 한국도로공사 콜센터(1588-2504)로 즉시 연락하시면 긴급 견인 서비스(가장 가까운 안전지대까지의 무료 대피 지원)를 제공받을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
