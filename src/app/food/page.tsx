import { serviceAreas } from '@/lib/data';
import AdSense from '@/components/AdSense';
import HubHeader from '@/components/HubHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고속도로 휴게소 맛집 및 인기메뉴 랭킹 - 대표 음식 가이드',
  description: '전국 고속도로 휴게소별 대표 음식, 맛집 가격표, 아이와 먹기 좋은 영양 간식 목록을 모아 최적의 휴식 식사 계획을 지원합니다.',
};

export default function FoodIndexPage() {
  // 대표 음식이나 평점이 좋은 메뉴들만 따로 요약 필터링
  const popularMenus = serviceAreas.map(s => ({
    restAreaName: s.name,
    restAreaSlug: s.slug,
    menu: s.signatureMenu,
  }));

  return (
    <>
      <HubHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-10 text-slate-800 font-sans">
      
      {/* 소개 타이틀 */}
      <div className="space-y-3.5 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-850 px-3 py-1 rounded-full text-xs font-bold">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
          </span>
          전국 고속도로 미식 가이드
        </div>
        <h1 className="text-2.5xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight">고속도로 휴게소 대표 맛집 메뉴</h1>
        <p className="text-slate-500 text-xs md:text-[13.5px] max-w-2xl leading-relaxed font-medium">
          한국도로공사에서 공식 인증한 대표 음식부터 휴게소마다 소문난 시그니처 밥상 가격표를 확인하세요.
        </p>
      </div>

      <AdSense slot="2233445566" />

      {/* 전국 휴게소 맛집 리스트 */}
      <section className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
        <h2 className="text-[15px] font-bold text-slate-900 border-b pb-4 border-slate-100 flex items-center gap-2">
          <span className="w-1 h-3.5 bg-amber-500 rounded-full inline-block"></span>
          휴게소별 시그니처 대표 메뉴판
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularMenus.map((item, idx) => (
            <div key={idx} className="p-5 border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-xs transition-all rounded-xl flex justify-between items-start gap-4">
              <div className="space-y-2">
                <div className="space-y-1">
                  <a href={`/rest-areas/${item.restAreaSlug}`} className="inline-block text-[11px] font-bold text-blue-650 hover:underline cursor-pointer">
                    {item.restAreaName} &rarr;
                  </a>
                  <h3 className="text-xs md:text-[14.5px] font-bold text-slate-800">{item.menu.name}</h3>
                </div>
                <p className="text-[11.5px] text-slate-450 leading-relaxed font-semibold">
                  {item.menu.description}
                </p>
              </div>
              <div className="text-right shrink-0 space-y-2">
                <span className="font-mono font-extrabold text-slate-900 block text-xs md:text-[13px]">{item.menu.price.toLocaleString()}원</span>
                {item.menu.isExFood && (
                  <span className="inline-block bg-amber-50 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded-md">
                    대표 음식
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      </main>
    </>
  );
}
