'use client';

import { useEffect } from 'react';

interface AdSenseProps {
  slot?: string;
  className?: string;
  type?: string;
}

export default function AdSense({ slot = '3342272844', className = '', type }: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense push error:', err);
    }
  }, [slot]);

  if (type === 'sticky-bottom') {
    return (
      <div className="fixed bottom-0 left-0 z-50 w-full bg-white/95 border-t border-slate-200 py-1.5 flex justify-center shadow-md">
        <div className="w-full max-w-[970px] px-4">
          <ins
            className="adsbygoogle"
            style={{ display: 'block', minHeight: '90px' }}
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
    <div className={`my-8 flex justify-center w-full overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: '90px' }}
        data-ad-client="ca-pub-1647402852124552"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
