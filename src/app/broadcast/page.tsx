'use client';

import { useState, useEffect } from 'react';
import AdSense from '@/components/AdSense';

export default function TrafficBroadcast() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioTranscript, setAudioTranscript] = useState(
    '교통방송 아나운서: 경부고속도로 서울방향 영동 부근 승용차 3중 추돌 사고 수습 및 잔해물 수거 작업으로 2km 정체가 지속되고 있으니 해당 구간 진입 차량은 감속하시기 바랍니다.'
  );

  // 시뮬레이션 용 아나운서 스크립트 순환 배정
  useEffect(() => {
    const scripts = [
      '교통방송 아나운서: 경부고속도로 서울방향 영동 부근 승용차 3중 추돌 사고 수습 및 잔해물 수거 작업으로 2km 정체가 지속되고 있으니 해당 구간 진입 차량은 감속하시기 바랍니다.',
      '교통방송 아나운서: 영동고속도로 강릉방향 마성터널 입구 노면 보수 공사로 3차로와 갓길이 전면 통제되어 약 3.5km 서행 및 밀림 현상이 나타나고 있습니다. 주행 시 전방 주시에 신경 쓰셔야겠습니다.',
      '교통방송 아나운서: 서해안고속도로 목포방향 서해대교 시점부터 중앙부까지 안개와 강풍의 영향으로 가시거리가 짧고 흔들림이 있으니 속도를 평소 대비 20% 이상 줄여 서행해 주시기 바랍니다.',
      '교통방송 아나운서: 중부고속도로 곤지암IC 대전방향 낙하물 처리가 모두 완료되어 양방향 소통이 급속도로 회복되고 있습니다. 다만 합류 지점 병목 구간 서행은 일부 남아 있습니다.'
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % scripts.length;
      setAudioTranscript(scripts[index]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-grow bg-slate-50 pb-20">
      {/* 타이틀 섹션 */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-[1240px] mx-auto px-4">
          <h1 className="text-2xl font-black mt-1">고속도로 실시간 exTV 교통방송 & 속보 모니터링</h1>
          <p className="text-slate-400 text-xs mt-2 max-w-xl leading-relaxed">
            한국도로공사의 공식 교통안내 방송 exTV 라이브 모니터링 및 실시간 교통 상황 팟캐스트, 돌발 안전 운전 수칙 캠페인을 통합해서 실시간 제공합니다.
          </p>
        </div>
      </section>

      {/* 방송 본문 영역 */}
      <section className="max-w-[1240px] mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* 좌측: exTV 비디오 및 아나운서 오디오 플레이어 */}
        <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-lg flex flex-col justify-between">
          <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-950">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-xs font-black text-white">exTV 실시간 중계</span>
            </div>
            <span className="text-[10px] font-bold text-slate-500">24시간 연속 방송</span>
          </div>

          {/* 비디오 프레임 */}
          <div className="flex-grow relative min-h-[300px] flex items-center justify-center bg-slate-950">
            {isPlaying ? (
              <div className="w-full h-full flex flex-col justify-between p-6 relative">
                {/* 비디오 모방 화면 */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none" />
                <div className="z-10 flex justify-between items-start text-xs font-bold text-slate-400">
                  <span className="bg-slate-800/80 px-2 py-1 rounded">경부고속도로 상황 CCTV 중계</span>
                  <span className="font-mono">REC &bull; 00:43:12</span>
                </div>
                
                {/* 중앙 재생 심볼 */}
                <div className="z-10 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center animate-pulse">
                    <svg className="w-8 h-8 text-blue-500 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-300">고속도로 실시간 종합 교통방송 송출 중</span>
                </div>

                <div className="z-10 text-[10.5px] bg-black/60 p-3 rounded-lg border border-slate-800 text-slate-300 leading-relaxed font-mono">
                  {audioTranscript}
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setIsPlaying(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all"
              >
                교통방송 실시간 재생 시작
              </button>
            )}
          </div>

          <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-between items-center">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs text-slate-400 hover:text-white font-bold"
            >
              {isPlaying ? '일시 정지' : '방송 재생'}
            </button>
            <span className="text-[10px] text-slate-600 font-mono">제공: 한국도로공사 exTV</span>
          </div>
        </div>

        {/* 우측: 실시간 뉴스 속보 & 도로 기상 피드 */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* 주요 속보 피드 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-2xs space-y-4">
            <h3 className="text-xs font-black text-slate-800">교통 상황실 브리핑 리스트</h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <span className="text-[9px] font-bold text-blue-600">오후 4시 20분 브리핑</span>
                <p className="text-xs font-bold text-slate-800 leading-relaxed">
                  중앙선 안동IC 부근 도로 차단 작업 완료, 양방향 지체 해소되었습니다.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <span className="text-[9px] font-bold text-blue-600">오후 3시 50분 브리핑</span>
                <p className="text-xs font-bold text-slate-800 leading-relaxed">
                  영동고속도로 만종분기점 강풍주의보로 인한 시속 80km 감속 주행이 필요합니다.
                </p>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
                <span className="text-[9px] font-bold text-blue-600">오후 2시 10분 브리핑</span>
                <p className="text-xs font-bold text-slate-800 leading-relaxed">
                  남해선 부산방향 사상 진출부 화물차 고장 수습으로 후방 1.5km 정체 중입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 안전 운전 필수 캠페인 */}
          <div className="bg-slate-900 text-white rounded-3xl p-5 border border-slate-850 space-y-3">
            <h4 className="text-sm font-black">2차 사고 예방 행동 요령</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              고속도로 주행 중 차량 고장이나 사고 발생 시 즉시 비상등을 켜고, 가드레일 밖 안전한 곳으로 우선 대피하신 후 112 또는 한국도로공사 1588-2504로 안전 순찰 지원을 요청하세요.
            </p>
          </div>

        </div>

      </section>

      {/* 애드센스 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>
    </main>
  );
}
