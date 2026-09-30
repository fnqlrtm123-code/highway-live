export default function GasBottomCta({ areaName, directionName }: { areaName: string; directionName: string }) {
  return (
    <div className="gas-bottom-cta fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 pt-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur-md" style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}>
      <a
        href="https://mrbrisbaneinsouth.kr/%ec%a3%bc%ec%9c%a0%ec%86%8c-%ea%b0%80%ea%b2%a9%eb%b9%84%ea%b5%90-%eb%82%b4-%ea%b7%bc%ec%b2%98-%ec%8b%bc-%ea%b3%b3-%ec%b0%be%ea%b8%b0/"
        className="mx-auto flex min-h-14 max-w-[960px] items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-bold leading-snug text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 md:text-base"
      >
        {areaName} ({directionName}) 주유소 가격 비교하기
      </a>
    </div>
  );
}
