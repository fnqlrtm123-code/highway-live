import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AdSense from "@/components/AdSense";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "하이웨이 라이브 - 전국 고속도로 실시간 CCTV · 휴게소 맛집 · 주유소 가격",
    template: "%s | 하이웨이 라이브"
  },
  description: "전국 고속도로의 실시간 교통상황 CCTV 영상, 노선별 상·하행 휴게소 대표 맛집(EX-FOOD), 알뜰주유소 실시간 유가 정보 및 전기차 충전기 현황을 한눈에 제공하는 필수 교통 가이드입니다.",
  keywords: ["고속도로 cctv", "실시간 교통상황", "휴게소 맛집", "휴게소 주유소 기름값", "전국 고속도로 지도", "상행 하행 맛집", "전기차 충전소", "알뜰주유소 최저가"],
  metadataBase: new URL("https://highway.mrbrisbaneinsouth.kr"), // Placeholder production domain
  openGraph: {
    title: "하이웨이 라이브 - 실시간 고속도로 CCTV & 휴게소 맛집 정보",
    description: "전국 고속도로의 실시간 교통상황 CCTV 영상, 노선별 상·하행 휴게소 대표 맛집(EX-FOOD), 알뜰주유소 실시간 유가 정보 및 전기차 충전기 현황을 제공합니다.",
    url: "https://highway.mrbrisbaneinsouth.kr",
    siteName: "하이웨이 라이브",
    locale: "ko_KR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7184288079549320"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        {/* 글로벌 헤더 */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4">
            {/* 로고 */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
                <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-black tracking-tight text-slate-900 leading-none">하이웨이 라이브</span>
                <span className="text-[10.5px] font-bold tracking-wider text-blue-600 uppercase mt-0.5">HIGHWAY LIVE</span>
              </div>
            </a>

            {/* 네비게이션 링크 */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="/traffic" className="text-[14px] font-bold text-slate-700 hover:text-blue-600 transition-colors">실시간 교통상황</a>
              <a href="/highways" className="text-[14px] font-bold text-slate-700 hover:text-blue-600 transition-colors">고속도로 노선별</a>
              <a href="/rest-areas" className="text-[14px] font-bold text-slate-700 hover:text-blue-600 transition-colors">전국 휴게소</a>
              <a href="/food" className="text-[14px] font-bold text-slate-700 hover:text-blue-600 transition-colors">휴게소 맛집</a>
              <a href="/gas" className="text-[14px] font-bold text-slate-700 hover:text-blue-600 transition-colors">최저가 주유소</a>
            </nav>

            {/* 모바일 퀵버튼 */}
            <div className="flex items-center gap-3">
              <a 
                href="/cctv" 
                className="flex items-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-2 text-[13.5px] font-extrabold text-blue-600 hover:bg-blue-100 transition-all duration-200"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                교통 상황판 보기
              </a>
            </div>
          </div>
        </header>

        {/* 메인 콘텐트 */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* 글로벌 푸터 (애드센스 정책 필수 승인 요건용 상세 푸터) */}
        <footer className="w-full border-t border-slate-200 bg-slate-900 text-slate-400 py-12">
          <div className="mx-auto max-w-[1240px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-sm">H</div>
                  <span className="text-base font-black text-white tracking-tight">하이웨이 라이브</span>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-400 max-w-md">
                  하이웨이 라이브는 전국 고속도로의 실시간 소통 현황, 실시간 상황판 모니터링, 그리고 노선별 상·하행 휴게소 대표 맛집(EX-FOOD) 및 실시간 최저가 알뜰주유소 가격을 매핑하여 신속하고 정확하게 제공하고 있습니다.
                </p>
                <div className="text-[12px] text-slate-500 space-y-1 font-mono">
                  <p>상호명: 하이웨이 라이브 &middot; 대표자: 서승재</p>
                  <p>이메일 문의: info@highwaylive.co.kr &middot; 주소: 서울특별시 서초구 반포대로 1</p>
                </div>
              </div>

              <div className="md:col-span-3 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">주요 서비스</h4>
                <ul className="space-y-2 text-[13px]">
                  <li><a href="/highways" className="hover:text-white transition-colors">고속도로 노선 안내</a></li>
                  <li><a href="/cctv" className="hover:text-white transition-colors">실시간 교통 상황판 조회</a></li>
                  <li><a href="/rest-areas" className="hover:text-white transition-colors">전국 휴게소 찾기</a></li>
                  <li><a href="/food" className="hover:text-white transition-colors">휴게소 맛집 리스트</a></li>
                  <li><a href="/gas" className="hover:text-white transition-colors">알뜰주유소 유가 및 EV 충전</a></li>
                </ul>
              </div>

              <div className="md:col-span-3 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">고객 정책</h4>
                <ul className="space-y-2 text-[13px]">
                  <li><a href="#" className="hover:text-white transition-colors">매체소개</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">광고 및 제휴문의</a></li>
                  <li><a href="#" className="hover:text-white transition-colors font-bold text-slate-300">개인정보처리방침</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12.5px] text-slate-500">
              <p>&copy; {new Date().getFullYear()} 하이웨이 라이브. All rights reserved.</p>
              <p className="max-w-md text-[11px] text-right md:text-right text-slate-600 leading-tight">
                본 웹사이트에 등록된 CCTV 영상 정보 및 유가 정보는 국토교통부, 한국도로공사의 공공데이터 및 실시간 API 피드를 참고/가공한 정보이며, 실제 현장 상황 및 측정 시점의 오차에 따라 일부 다를 수 있습니다.
              </p>
            </div>
          </div>
        </footer>

        {/* 애드센스 하단 고정형 스마트 앵커 배너 */}
        <AdSense slot="9876543210" type="sticky-bottom" />
      </body>
    </html>
  );
}
