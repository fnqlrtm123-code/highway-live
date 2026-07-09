'use client';

import { useEffect, useRef } from 'react';

interface AdSenseProps {
  slot?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: string;
}

export default function AdSense({ slot = '3342272844', className = '', style = {}, type }: AdSenseProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      if (!initialized.current) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        initialized.current = true;
      }
    } catch (err) {
      console.warn('AdSense push failed: ', err);
    }
  }, [slot]);

  if (type === 'sticky-bottom') {
    return (
      <div className="fixed bottom-0 left-0 z-50 w-full bg-white/95 border-t border-slate-200 py-1.5 flex justify-center shadow-md">
        <div className="w-full max-w-[970px] px-4">
          <ins
            className="adsbygoogle"
            style={{ display: 'block', minHeight: '90px', ...style }}
            data-ad-client="ca-pub-1647402852124552"
            data-ad-slot={slot}
            data-ad-format="horizontal"
            data-full-width-responsive="false"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full flex justify-center py-2 overflow-hidden min-h-[90px] ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', ...style }}
        data-ad-client="ca-pub-1647402852124552"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
