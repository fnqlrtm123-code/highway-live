import { pageMetadata } from "../../lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "고속도로 통행료 요금 예측 계산기",
  description: "출발지와 목적지를 선택하여 차종별(1종 승용차부터 대형 화물차까지) 고속도로 예상 통행료 요금 및 대략적인 이동 거리를 자동 연산해 주는 요금 계산기 서비스입니다.",
  keywords: [
    "고속도로 통행료 계산",
    "고속도로 요금표",
    "하이패스 카드 요금",
    "통행료 할인 대상",
    "차종별 통행료",
  ],
}, "/toll");

export default function TollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="toll-bottom-cta fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 pt-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur-md" style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}>
        <a
          href="https://mrbrisbaneinsouth.kr/%ea%b3%a0%ec%86%8d%eb%8f%84%eb%a1%9c-%ed%86%b5%ed%96%89%eb%a3%8c-%ec%a1%b0%ed%9a%8c-%eb%b0%8f-%eb%82%a9%eb%b6%80%eb%b0%a9%eb%b2%95-%ed%95%a0%ec%9d%b8-%ec%a0%95%eb%a6%ac/"
          className="mx-auto flex min-h-14 max-w-[960px] items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-bold leading-snug text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 md:text-base"
        >
          <span>고속도로 통행료 미납조회 및 납부</span>
          <svg aria-hidden="true" focusable="false" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </>
  );
}
