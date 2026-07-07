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
      <head />
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        {/* 1. 최상단 실시간 돌발 상황 속보 배너 (Roadplus 스타일) */}
        <div className="w-full bg-red-600 text-white py-2 px-4 text-xs font-black overflow-hidden relative z-50 shadow-sm">
          <div className="mx-auto max-w-[1240px] flex items-center gap-3">
            <span className="bg-white text-red-600 px-2 py-0.5 rounded-md text-[10px] uppercase font-mono tracking-wider shrink-0 animate-pulse">BREAKING</span>
            <div className="flex-1 overflow-hidden relative h-5">
              <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap absolute flex gap-12 hover:[animation-play-state:paused] cursor-pointer">
                <span>⚠️ [경부고속도로] 천안IC 부근 승용차 3중 추돌 사고 처리 중 (1차로 점유)</span>
                <span>⚠️ [영동고속도로] 양지터널 부근 노면 보수 공사 진행 중 (갓길 통제)</span>
                <span>⚠️ [서해안고속도로] 서해대교 구간 강풍으로 인한 감속 운행 권고</span>
                <span>⚠️ [중부고속도로] 곤지암IC 인근 낙하물 수거 완료, 서행 해소 중</span>
              </div>
            </div>
            <span className="text-[10px] text-red-200 hidden md:inline">24시간 교통콜센터: 1588-2504</span>
          </div>
        </div>

        {/* 2. 글로벌 헤더 (Roadplus 다크 네이비 테마) */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950 text-white">
          <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4">
            {/* 로고 */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
                <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-black tracking-tight text-white leading-none">고속도로 교통정보</span>
                <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mt-1">ROADPLUS LIVE</span>
              </div>
            </a>

            {/* 네비게이션 링크 */}
            <nav className="hidden lg:flex items-center gap-1.5">
              <a href="/traffic" className="px-4 py-2 text-[14px] font-bold rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all">교통상황·CCTV</a>
              
              {/* 고속도로 휴게소 hover dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-[14px] font-bold rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer">
                  고속도로 휴게소
                  <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <a href="/rest-areas" className="block px-4 py-2.5 text-[13px] font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                    ↔ 고속도로 상행·하행선 방향
                  </a>
                  <a href="/food" className="block px-4 py-2.5 text-[13px] font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                    🍲 휴게소 상행·하행 맛집
                  </a>
                </div>
              </div>

              <a href="/gas" className="px-4 py-2 text-[14px] font-bold rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all">주유소·전기차 충전소</a>
              <a href="/toll" className="px-4 py-2 text-[14px] font-bold rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all">고속도로 통행료</a>
            </nav>

            {/* 우측 유틸리티 액션 */}
            <div className="flex items-center gap-3">
              <a 
                href="/traffic" 
                className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-black text-white hover:bg-blue-500 transition-all duration-200 shadow-sm"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                </span>
                실시간 상황판
              </a>
            </div>
          </div>
        </header>

        {/* 메인 콘텐트 */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* 글로벌 푸터 */}
        <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-400 py-12">
          <div className="mx-auto max-w-[1240px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-sm">R</div>
                  <span className="text-base font-black text-white tracking-tight">고속도로 교통정보 (로드플러스 라이브)</span>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-400 max-w-md">
                  로드플러스 라이브는 한국도로공사의 공공데이터 및 실시간 API 피드를 바탕으로 전국 고속도로 소통상황, 실시간 CCTV 영상, 작업구간, 교통예보, 교통방송을 가장 정확하고 아름답게 시각화하여 제공합니다.
                </p>
                <div className="text-[12px] text-slate-500 space-y-1 font-mono">
                  <p>제공기관: 국토교통부, 한국도로공사 &middot; 운영관리: 로드플러스 라이브</p>
                  <p>이메일 문의: support@roadplus-live.kr &middot; 주소: 서울특별시 서초구 반포대로 1</p>
                </div>
              </div>

              <div className="md:col-span-3 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">주요 서비스</h4>
                <ul className="space-y-2 text-[13px]">
                  <li><a href="/" className="hover:text-white transition-colors">실시간 교통지도</a></li>
                  <li><a href="/work" className="hover:text-white transition-colors">도로 작업/통제 정보</a></li>
                  <li><a href="/forecast" className="hover:text-white transition-colors">주말/명절 교통예보</a></li>
                  <li><a href="/broadcast" className="hover:text-white transition-colors">교통방송 (exTV)</a></li>
                  <li><a href="/highways" className="hover:text-white transition-colors">고속도로 노선안내</a></li>
                </ul>
              </div>

              <div className="md:col-span-3 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">고객 정책</h4>
                <ul className="space-y-2 text-[13px]">
                  <li><a href="/notice" className="hover:text-white transition-colors font-bold text-slate-300">공지사항 및 FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">사이트맵</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12.5px] text-slate-500">
              <p>&copy; {new Date().getFullYear()} 로드플러스 라이브. All rights reserved.</p>
              <p className="max-w-md text-[11px] text-right md:text-right text-slate-600 leading-tight">
                본 서비스에 등록된 교통정보 및 CCTV 영상 정보는 공공 API 데이터를 실시간으로 수집·가공한 것이며, 실제 도로 현장 상황 및 도로공사 통제 상황에 따라 오차가 있을 수 있으므로 안전 운전에 참고하시기 바랍니다.
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
