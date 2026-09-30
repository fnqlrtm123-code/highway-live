export default function EvBottomCta({ areaName, directionName }: { areaName: string; directionName: string }) {
  return (
    <div className="ev-bottom-cta fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 pt-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur-md" style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}>
      <a
        href="https://mrbrisbaneinsouth.kr/%ec%a0%84%ea%b8%b0%ec%b0%a8-%ec%b6%a9%ec%a0%84%ec%86%8c-%ec%b0%be%ea%b8%b0-%eb%b0%8f-%ec%95%b1-%ec%b6%94%ec%b2%9c-%ec%96%b4%ed%94%8c-%eb%8b%a4%ec%9a%b4%eb%a1%9c%eb%93%9c/"
        className="mx-auto flex min-h-14 max-w-[960px] items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-bold leading-snug text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 md:text-base"
      >
        {areaName} ({directionName}) 전기차 충전소 찾기
      </a>
    </div>
  );
}
