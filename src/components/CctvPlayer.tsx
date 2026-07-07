'use client';

import { useEffect, useState } from 'react';

interface CctvPlayerProps {
  x: number;
  y: number;
  cctvId: string;
  cctvName: string;
}

export default function CctvPlayer({ x, y, cctvId, cctvName }: CctvPlayerProps) {
  const [dots, setDots] = useState<Array<{ id: number; top: number; left: number; delay: number }>>([]);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  // 레이더 상의 모킹 노드 생성
  useEffect(() => {
    const list = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      delay: Math.random() * 2,
    }));
    setDots(list);

    // 시스템 시뮬레이션 로그 생성
    const logs = [
      `[SYS] Initializing Traffic Monitor Node #${cctvId}...`,
      `[GPS] Latitude: ${y.toFixed(6)}, Longitude: ${x.toFixed(6)}`,
      `[NET] Connecting to Highway Traffic Database...`,
      `[SYS] Channel Status: ACTIVE (Data Only)`,
      `[INFO] Video streaming is offline by administrative policy.`,
    ];
    setTerminalLogs(logs);

    const interval = setInterval(() => {
      setTerminalLogs((prev) => {
        const next = [...prev];
        if (next.length > 8) next.shift();
        const eventType = Math.random() > 0.5 ? 'FLOW' : 'WEATHER';
        const value = eventType === 'FLOW' 
          ? `Speed update: ${Math.floor(Math.random() * 30 + 75)}km/h` 
          : `Sensor check: status OK`;
        next.push(`[${new Date().toLocaleTimeString('ko-KR', { hour12: false })}] [${eventType}] ${value}`);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [cctvId, x, y]);

  return (
    <div className="relative w-full h-full bg-slate-950 flex flex-col md:flex-row items-center justify-between overflow-hidden p-6 md:p-10 gap-6">
      
      {/* 좌측: 레이더 스캔 그래픽 모니터 (원형 레이더 그리드) */}
      <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border border-emerald-500/20 relative flex items-center justify-center bg-emerald-950/5 shrink-0 shadow-[inset_0_0_30px_rgba(16,185,129,0.05)]">
        {/* 레이더 동심원 그리드 */}
        <div className="absolute w-4/5 h-4/5 rounded-full border border-emerald-500/10 border-dashed" />
        <div className="absolute w-3/5 h-3/5 rounded-full border border-emerald-500/10" />
        <div className="absolute w-2/5 h-2/5 rounded-full border border-emerald-500/10 border-dashed" />
        <div className="absolute w-1/5 h-1/5 rounded-full border border-emerald-500/20" />
        
        {/* 십자 크로스헤어 */}
        <div className="absolute w-full h-[1px] bg-emerald-500/10" />
        <div className="absolute h-full w-[1px] bg-emerald-500/10" />

        {/* 레이더 회전 스캐너 라인 */}
        <div className="absolute inset-0 rounded-full animate-[spin_5s_linear_infinite] origin-center pointer-events-none">
          <div className="absolute top-0 left-1/2 w-1/2 h-[1px] bg-gradient-to-r from-emerald-500/60 to-transparent origin-left rotate-90" />
          <div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent origin-bottom-left rotate-90 rounded-tr-full" />
        </div>

        {/* 레이더 타겟 점들 */}
        {dots.map((dot) => (
          <span 
            key={dot.id}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            style={{ 
              top: `${dot.top}%`, 
              left: `${dot.left}%`,
              animationDelay: `${dot.delay}s` 
            }}
          />
        ))}

        {/* 센터 지점 고정 마커 */}
        <div className="absolute w-3 h-3 bg-red-500 rounded-full border border-white animate-ping" />
        <div className="absolute w-2 h-2 bg-red-500 rounded-full border border-white z-10" />

        {/* 레이더 라벨 */}
        <div className="absolute bottom-2 text-[9px] font-mono text-emerald-500/40 uppercase tracking-widest">
          Radar Active
        </div>
      </div>

      {/* 우측: 텔레메트리 텍스트 & 안내 콘솔 */}
      <div className="flex-grow flex flex-col justify-between h-full w-full min-h-[180px] space-y-4">
        {/* 시스템 스테이터스 */}
        <div className="space-y-1">
          <span className="text-[10px] font-black font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 inline-block">
            SYSTEM ONLINE
          </span>
          <h4 className="text-[17px] font-black text-white font-sans tracking-tight">
            {cctvName} 지점 교통 모니터링
          </h4>
          <p className="text-[11.5px] text-slate-400 font-medium">
            교통 정보 및 소통 속도 모니터링 시스템이 정상 작동 중입니다.
          </p>
        </div>

        {/* 터미널 로그 콘솔 */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 font-mono text-[10.5px] text-green-400 space-y-1 h-[90px] overflow-hidden leading-tight">
          {terminalLogs.map((log, idx) => (
            <p key={idx} className="truncate select-none">{log}</p>
          ))}
        </div>

        {/* 실시간 영상 미제공 공지 */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5 flex items-start gap-2.5">
          <svg className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-slate-300">CCTV 스트리밍 제한 안내</span>
            <p className="text-[11px] text-slate-400 leading-normal">
              본 사이트는 실시간 사고 예방 및 빠른 소통 데이터 제공 목적의 포털이며, 서버 트래픽 비용 및 데이터 정책으로 인하여 **CCTV 실시간 비디오 재생은 지원하지 않습니다.** 대신 평균 주행 속도 및 기상 분석 자료를 제공합니다.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
