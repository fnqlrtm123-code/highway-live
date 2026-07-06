'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  slot: string;
  style?: React.CSSProperties;
  format?: string;
  responsive?: string;
  type?: 'banner' | 'in-feed' | 'sticky-bottom';
}

export default function AdSense({
  slot,
  style,
  format = 'auto',
  responsive = 'true',
  type = 'banner'
}: AdSenseProps) {
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    setIsDev(process.env.NODE_ENV === 'development');
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Quiet fail in dev or if blocked
    }
  }, []);

  // Sticky bottom anchor ads styling
  if (type === 'sticky-bottom') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t border-gray-200 shadow-lg py-2 flex items-center justify-center">
        <div className="relative w-full max-w-[728px] h-[90px] mx-auto bg-gray-50 flex items-center justify-center">
          {isDev ? (
            <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-blue-400 bg-blue-50/80 text-blue-700 text-xs font-semibold px-4 text-center">
              <span className="font-bold text-sm">💡 Google AdSense - Sticky Anchor Ad (하단 고정형 광고)</span>
              <span>Slot ID: {slot} | 가로형 스마트 앵커 배너 영역 (배포 시 활성화)</span>
            </div>
          ) : (
            <ins
              className="adsbygoogle"
              style={{ display: 'inline-block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-7184288079549320" // Replace with real publisher ID if needed
              data-ad-slot={slot}
            />
          )}
          <button 
            onClick={(e) => {
              const parent = e.currentTarget.parentElement?.parentElement;
              if (parent) parent.style.display = 'none';
            }}
            className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gray-950 text-white text-xs font-black shadow flex items-center justify-center hover:bg-gray-800 transition-colors"
            title="광고 닫기"
          >
            ×
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full my-8 flex justify-center overflow-hidden">
      {isDev ? (
        <div 
          className="w-full max-w-4xl p-6 border-2 border-dashed border-blue-300 bg-blue-50/50 rounded-xl flex flex-col items-center justify-center text-center text-blue-700 min-h-[120px]"
          style={style}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-bold text-sm tracking-tight">Google AdSense Area (구글 애드센스 광고 영역)</span>
          </div>
          <p className="text-xs text-blue-500 max-w-md leading-relaxed">
            슬롯 ID: <code className="bg-blue-100 px-1.5 py-0.5 rounded font-mono font-bold">{slot}</code> | 포맷: {format}
            <br />
            실배포 환경에서 실제 광고 배너로 안전하게 로드됩니다.
          </p>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={style || { display: 'block', minWidth: '250px' }}
          data-ad-client="ca-pub-7184288079549320"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      )}
    </div>
  );
}
