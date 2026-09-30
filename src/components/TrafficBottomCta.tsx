export default function TrafficBottomCta({ roadName }: { roadName: string }) {
  return (
    <div className="traffic-bottom-cta fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 pt-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur-md" style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}>
      <a
        href="https://mrbrisbaneinsouth.kr/%ea%b3%a0%ec%86%8d%eb%8f%84%eb%a1%9c-cctv-%ea%b5%90%ed%86%b5%ec%83%81%ed%99%a9-%ec%8b%a4%ec%8b%9c%ea%b0%84-%ed%99%95%ec%9d%b8%ed%95%98%ea%b8%b0/"
        className="mx-auto flex min-h-14 max-w-[960px] items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-bold leading-snug text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 md:text-base"
      >
        {roadName} 교통상황 CCTV 실시간 확인하기
      </a>
    </div>
  );
}
