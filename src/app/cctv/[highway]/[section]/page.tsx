import { getCctvPointById, cctvPoints, getCctvPointsByHighway, getHighwayBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import CctvPlayer from '@/components/CctvPlayer';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ highway: string; section: string }>;
}

// SEO 동적 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  const cctv = getCctvPointById(section);
  if (!cctv) return {};

  return {
    title: `${cctv.highwayName} ${cctv.name} (${cctv.direction}) 실시간 CCTV 상황판`,
    description: `${cctv.highwayName} ${cctv.name} (${cctv.direction})의 실시간 교통상황 CCTV 영상을 확인하세요. 제한 속도 ${cctv.speedLimit} km/h 구간으로, 현재 주행 평균 속도는 ${cctv.currentSpeed} km/h 이며 통행 상태는 ${cctv.status === 'smooth' ? '원활' : cctv.status === 'slow' ? '서행' : '정체'}입니다.`,
    keywords: [`${cctv.name} cctv`, `${cctv.highwayName} cctv`, `${cctv.name} 실시간 교통상황`, `${cctv.name} 교통카메라`, `고속도로 실시간 cctv`]
  };
}

// Programmatic SEO를 위한 정적 경로(Static Params) 사전 정의
export async function generateStaticParams() {
  return cctvPoints.map((cctv) => ({
    highway: cctv.highwaySlug,
    section: cctv.id,
  }));
}

export default async function CctvSectionDetailPage({ params }: Props) {
  const { highway: highwaySlug, section } = await params;
  const cctv = getCctvPointById(section);

  if (!cctv || cctv.highwaySlug !== highwaySlug) {
    notFound();
  }

  const highway = getHighwayBySlug(cctv.highwaySlug);
  const siblingCctvs = getCctvPointsByHighway(cctv.highwaySlug).filter(c => c.id !== cctv.id);

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow">
      
      {/* 뒤로가기 링크 */}
      <a href={`/cctv/${highwaySlug}`} className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors mb-6">
        &larr; {highway?.name || '노선'} CCTV 목록으로 돌아가기
      </a>

      {/* 상단 애드센스 광고 */}
      <AdSense slot="6677889900" />

      {/* CCTV 상세 헤더 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-black bg-red-600 text-white px-2.5 py-0.5 rounded">실시간 캠</span>
            <span className="text-xs text-blue-300 font-mono tracking-tight">{cctv.highwayName} &middot; {cctv.locationKm}km 지점</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            {cctv.name} <span className="text-blue-500 font-extrabold text-2xl md:text-3xl">({cctv.direction})</span> 실시간 CCTV
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            {cctv.highwayName} {cctv.name} 지점의 실시간 도로주행 상태 및 흐름을 보여드리는 CCTV 단독 채널 모니터링 화면입니다. 우천 및 사고 등의 돌발 정보를 24시간 실시간 관제 연동하고 있습니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 좌측: 실시간 CCTV 라이브 플레이어 스크린 (8열) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-950 text-white shadow-lg">
            {/* 스크린 헤더 */}
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                고속도로 CCTV 송출 &middot; {cctv.name} ({cctv.direction})
              </span>
              <span>실시간 방송중</span>
            </div>

            {/* 실제 비디오 및 OpenAPI 연동 플레이어 */}
            <div className="relative flex items-center justify-center bg-black overflow-hidden h-[380px] md:h-[450px]">
              {/* CCTV 오버레이 글씨 */}
              <div className="absolute top-6 left-6 z-20 font-mono text-xs text-green-400 space-y-1 pointer-events-none drop-shadow-md">
                <p>카메라 ID: {cctv.id}</p>
                <p>노선명: {cctv.highwayName}</p>
                <p>위치: {cctv.locationKm}.0 km 지점</p>
                <p>제한속도: {cctv.speedLimit} km/h</p>
              </div>

              <div className="absolute top-6 right-6 z-20 font-mono text-xs text-green-400 text-right pointer-events-none drop-shadow-md">
                <p>시스템 상태: 연결됨</p>
                <p>기온: {cctv.temp}°C</p>
                <p>날씨: {
                  cctv.weather === 'clear' ? '맑음' :
                  cctv.weather === 'rainy' ? '우천' :
                  cctv.weather === 'snowy' ? '강설' : '안개'
                }</p>
              </div>

              <CctvPlayer 
                x={cctv.x}
                y={cctv.y}
                cctvId={cctv.id}
                cctvName={cctv.name}
              />

              {/* 하단 투명 오버레이 (주행 분석 텔레메트리) */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center pointer-events-none">
                <div className="bg-black/70 px-4 py-2.5 rounded-xl border border-slate-800 backdrop-blur-sm">
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block mb-0.5">평균 주행 속도</span>
                  <span className={`text-[20px] font-black font-mono ${
                    cctv.status === 'smooth' ? 'text-green-400' :
                    cctv.status === 'slow' ? 'text-amber-400' : 'text-red-400'
                  }`}>
                    {cctv.currentSpeed} km/h
                  </span>
                </div>

                <div className="bg-black/70 px-4 py-2.5 rounded-xl border border-slate-800 backdrop-blur-sm text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block mb-0.5">소통 진단 결과</span>
                  <span className={`text-[15px] font-black ${
                    cctv.status === 'smooth' ? 'text-green-400' :
                    cctv.status === 'slow' ? 'text-amber-400' : 'text-red-400'
                  }`}>
                    {cctv.status === 'smooth' ? '통행 원활' :
                     cctv.status === 'slow' ? '일부 구간 서행' : '정체 발달'}
                  </span>
                </div>
              </div>

              {/* 주사선 필터 */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none opacity-40 z-30" />
            </div>

            {/* 스크린 푸터 */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>관제 주체: 한국도로공사 교통정보센터</span>
              <span>갱신 주기: 실시간 스트리밍</span>
            </div>
          </div>

          {/* 본문 보강 설명 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-4 text-[14px] leading-relaxed text-slate-600">
            <h3 className="text-base font-black text-slate-900">{cctv.name} 지점 교통 흐름 분석 가이드</h3>
            <p>
              {cctv.name} 지점은 {cctv.highwayName} 노선 중에서도 출퇴근 시간대와 주말 연휴에 병목 현상이 발생하기 쉬운 중추 구간입니다. 현재 해당 CCTV 단독 실시간 중계를 통해 도로 소통 지수와 구간 제한 속도 준수 현황을 신속하게 점검하실 수 있습니다.
            </p>
            <p>
              안개나 호우 등 나쁜 날씨에는 노면 마찰력이 떨어지므로 제한속도 대비 20%에서 50%까지 감속 주행하셔야 안전거리 확보가 가능합니다. 만일 해당 구간에서 정체가 발생하는 경우, 국도 우회 정보 전광판이나 TBN 교통방송 라디오 정보를 병행 조회하시는 것을 추천합니다.
            </p>
          </div>
        </div>

        {/* 우측: 노선 정보 및 기타 CCTV 링크 추천 (4열) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 노선 기본 제원 카드 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4">
            <h3 className="text-base font-black text-slate-900 border-b pb-3 border-slate-100 font-sans">
              노선 기본 제원
            </h3>
            {highway ? (
              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="font-bold text-slate-400 font-sans">노선명</span>
                  <span className="font-black text-slate-800">{highway.name} ({highway.number})</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-400 font-sans">노선 총길이</span>
                  <span className="font-black text-slate-800 font-mono">{highway.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-400 font-sans">기점 (출발지)</span>
                  <span className="font-black text-slate-800">{highway.start}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-400 font-sans">종점 (도착지)</span>
                  <span className="font-black text-slate-800">{highway.end}</span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400">노선 정보가 없습니다.</p>
            )}
          </div>

          {/* 동일 노선의 기타 CCTV 카메라 목록 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4">
            <h3 className="text-base font-black text-slate-900 border-b pb-3 border-slate-100 font-sans">
              이 노선의 다른 CCTV
            </h3>
            
            <div className="space-y-3">
              {siblingCctvs.map((c) => (
                <a 
                  key={c.id}
                  href={`/cctv/${c.highwaySlug}/${c.id}`}
                  className="block p-3 border border-slate-100 rounded-xl hover:border-blue-600 hover:bg-slate-50 transition-all text-left"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[13.5px] font-black text-slate-800">{c.name}</span>
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                      c.status === 'smooth' ? 'bg-emerald-50 text-emerald-700' :
                      c.status === 'slow' ? 'bg-amber-50 text-amber-700' :
                      'bg-red-50 text-red-700'
                    }`}>
                      {c.status === 'smooth' ? '원활' : c.status === 'slow' ? '서행' : '정체'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-400">
                    <span>{c.locationKm}km 지점</span>
                    <span className="font-mono">{c.currentSpeed} km/h</span>
                  </div>
                </a>
              ))}
              {siblingCctvs.length === 0 && (
                <p className="text-xs text-slate-400 py-4 text-center">동일 노선에 다른 CCTV가 없습니다.</p>
              )}
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}
