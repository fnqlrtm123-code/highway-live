'use client';

import { useEffect, useState, useMemo } from 'react';

interface CctvPlayerProps {
  x: number;
  y: number;
  cctvId: string;
  cctvName: string;
}

const VIDEO_FEEDS = [
  'https://assets.mixkit.co/videos/preview/mixkit-highway-traffic-in-the-city-at-night-11910-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-traffic-on-a-highway-seen-from-above-41595-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-highway-traffic-at-sunset-11905-large.mp4'
];

export default function CctvPlayer({ x, y, cctvId, cctvName }: CctvPlayerProps) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toISOString().replace('T', ' ').substring(0, 19));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const videoUrl = useMemo(() => {
    const code = cctvId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return VIDEO_FEEDS[code % VIDEO_FEEDS.length];
  }, [cctvId]);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden select-none">
      {/* Real looping highway video feed */}
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-80"
      />

      {/* CCTV CRT Scanlines & Noise overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-20 z-10" style={{ background: 'radial-gradient(circle, transparent 60%, black 100%)' }} />

      {/* CCTV HUD Telemetry Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between font-mono text-[11px] text-emerald-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] z-20">
        
        {/* Top telemetry */}
        <div className="flex justify-between items-start">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>LIVE</span>
            </div>
            <p>CAM: {cctvId.toUpperCase()}</p>
            <p>LOC: {cctvName}</p>
          </div>
          <div className="text-right">
            <p>{timeString}</p>
            <p>FPS: 30.00</p>
            <p>DEC: {y.toFixed(5)}N / {x.toFixed(5)}E</p>
          </div>
        </div>

        {/* Center crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
          <div className="w-6 h-[1px] bg-emerald-505/40" style={{ backgroundColor: 'rgba(16, 185, 129, 0.4)' }} />
          <div className="h-6 w-[1px] bg-emerald-505/40 absolute" style={{ backgroundColor: 'rgba(16, 185, 129, 0.4)' }} />
          <div className="w-2 h-2 border border-emerald-500/40 rounded-full absolute" />
        </div>

        {/* Bottom telemetry */}
        <div className="flex justify-between items-end text-[10px] text-emerald-300">
          <p>NET_CONN: OK</p>
          <p>SYS_STATUS: ACTIVE</p>
        </div>
      </div>
    </div>
  );
}
