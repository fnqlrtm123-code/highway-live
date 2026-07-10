import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AdSense from "@/components/AdSense";
import Script from "next/script";

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
    default: "로드플러스 | 전국 고속도로 실시간 CCTV 휴게소 맛집 주유소 가격",
    template: "%s | 로드플러스"
  },
  description: "전국 고속도로 실시간 교통상황 CCTV 영상, 노선별 상하행 휴게소 대표 음식, 알뜰주유소 실시간 유가 정보 및 전기차 충전기 현황을 한눈에 제공하는 필수 교통 가이드입니다.",
  keywords: ["고속도로 cctv", "실시간 교통상황", "휴게소 맛집", "휴게소 주유소 기름값", "전국 고속도로 지도", "상행 하행 맛집", "전기차 충전소", "알뜰주유소 최저가"],
  metadataBase: new URL("https://highway.mrbrisbaneinsouth.kr"), // Placeholder production domain
  alternates: {
    canonical: "https://highway.mrbrisbaneinsouth.kr",
  },
  verification: {
    google: "JyJRp5nIpMXkqus5LHoa1TpiwkTWxkeWn3g_D7j739E",
    other: {
      "naver-site-verification": "e4c50a32ba69bfcc00ab539fc0d7c71f096197df",
      "msvalidate.01": "72FE2EED9E2A787ABAD7AC2E77CB6992",
    },
  },
  openGraph: {
    title: "로드플러스 - 실시간 고속도로 CCTV & 휴게소 맛집 정보",
    description: "전국 고속도로의 실시간 교통상황 CCTV 영상, 노선별 상·하행 휴게소 대표 음식, 알뜰주유소 실시간 유가 정보 및 전기차 충전기 현황을 제공합니다.",
    url: "https://highway.mrbrisbaneinsouth.kr",
    siteName: "로드플러스",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "로드플러스 - 실시간 고속도로 CCTV & 휴게소 맛집 정보",
    description: "전국 고속도로의 실시간 교통상황 CCTV 영상, 노선별 상·하행 휴게소 대표 음식, 알뜰주유소 실시간 유가 정보 및 전기차 충전기 현황을 제공합니다.",
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
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans antialiased">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1647402852124552"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          id="adsense-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (window.adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-1647402852124552",
                enable_page_level_ads: true,
                overlays: { bottom: true }
              });
            `,
          }}
        />


        {/* 2. 글로벌 헤더 (모던 화이트 글래스 테마) */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md text-slate-950">
          <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4">
            {/* 로고 */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-500/10 group-hover:scale-105 transition-all duration-300">
                <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-900 leading-none">로드플러스</span>
            </a>

            {/* 네비게이션 링크 */}
            <nav className="hidden lg:flex items-center gap-1">
              <a href="/traffic" className="px-3.5 py-2 text-[13px] font-semibold rounded-lg text-slate-650 hover:text-slate-950 hover:bg-slate-100/50 transition-all">교통상황 · CCTV</a>
              <a href="/rest-areas" className="px-3.5 py-2 text-[13px] font-semibold rounded-lg text-slate-650 hover:text-slate-950 hover:bg-slate-100/50 transition-all">고속도로 휴게소</a>

              <a href="/gas" className="px-3.5 py-2 text-[13px] font-semibold rounded-lg text-slate-650 hover:text-slate-950 hover:bg-slate-100/50 transition-all">주유소 · 충전소</a>
              <a href="/toll" className="px-3.5 py-2 text-[13px] font-semibold rounded-lg text-slate-650 hover:text-slate-950 hover:bg-slate-100/50 transition-all">고속도로 통행료</a>
            </nav>


          </div>
        </header>

        {/* Global Header Ad */}
        <div className="w-full bg-white border-b border-slate-100">
          <div className="mx-auto max-w-[1000px] px-4 py-1">
            <AdSense slot="3342272844" />
          </div>
        </div>

        {/* 메인 콘텐트 */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* 글로벌 푸터 (깔끔하고 정돈된 라이트 회색 테마) */}
        <footer className="w-full border-t border-slate-200/60 bg-slate-50 text-slate-500 py-16">
          <div className="mx-auto max-w-[1240px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white font-extrabold text-xs">R</div>
                  <span className="text-[15px] font-bold text-slate-800 tracking-tight">로드플러스</span>
                </div>
                <p className="text-[12.5px] leading-relaxed text-slate-500 max-w-md font-medium font-sans">
                  로드플러스는 국토교통부 및 한국도로공사의 공공데이터 API를 실시간으로 가공하여 전국 고속도로 소통상황, 실시간 CCTV 영상, 방향별 휴게소 정보 및 실시간 주유소 유가 비교 정보를 직관적으로 시각화하여 제공합니다.
                </p>
                <div className="text-[11.5px] text-slate-400 space-y-1 font-sans">
                  <p>제공기관: 국토교통부, 한국도로공사 &middot; 운영: 로드플러스</p>
                  <p>이메일: seoseungjae01@gmail.com</p>
                </div>
              </div>

              <div className="md:col-span-3 space-y-3.5">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">주요 서비스</h4>
                <ul className="space-y-2 text-[12.5px] font-medium text-slate-500">
                  <li><a href="/traffic" className="hover:text-slate-900 transition-colors">실시간 교통지도 &amp; CCTV</a></li>
                  <li><a href="/rest-areas" className="hover:text-slate-900 transition-colors">전체 휴게소 목록</a></li>
                  <li><a href="/region" className="hover:text-slate-900 transition-colors">지역별 휴게소 찾기</a></li>
                  <li><a href="/ranking" className="hover:text-slate-900 transition-colors">휴게소 추천 랭킹</a></li>
                </ul>
              </div>

              <div className="md:col-span-3 space-y-3.5">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-sans">고객 정책</h4>
                <ul className="space-y-2 text-[12.5px] font-medium text-slate-500">
                  <li><a href="/privacy" className="hover:text-slate-900 transition-colors">개인정보처리방침</a></li>
                  <li><a href="/terms" className="hover:text-slate-900 transition-colors">이용약관</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11.5px] text-slate-400">
              <p>&copy; {new Date().getFullYear()} 로드플러스. All rights reserved.</p>
              <p className="max-w-md text-center md:text-right text-[10.5px] text-slate-455 leading-relaxed font-sans">
                본 서비스에 등록된 교통 및 유가 정보는 공공 API 데이터를 바탕으로 실시간으로 가공된 정보이며 현장 상황과 일부 다를 수 있으므로 안전 운행의 참고용으로 활용하시기 바랍니다.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
