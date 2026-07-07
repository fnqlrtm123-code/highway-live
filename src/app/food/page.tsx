import { serviceAreas } from '@/lib/data';
import AdSense from '@/components/AdSense';
import HubHeader from '@/components/HubHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고속도로 휴게소 맛집 및 인기메뉴 랭킹 - 실시간 대표 음식 가이드',
  description: '전국 고속도로 휴게소별 대표 메뉴(ex-food), 맛집 가격표, 아이와 먹기 좋은 영양 간식 목록을 모아 최적의 휴식 식사 계획을 지원합니다.',
};

export default function FoodIndexPage() {
  // EX-FOOD 인증이나 평점이 좋은 메뉴들만 따로 요약 필터링
  const popularMenus = serviceAreas.map(s => ({
    restAreaName: s.name,
    restAreaSlug: s.slug,
    menu: s.signatureMenu,
  }));

  return (
    <>
      <HubHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-10">
      
      {/* 소개 타이틀 */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">고속도로 휴게소 대표 맛집 메뉴</h1>
        <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
          한국도로공사에서 공식 인증한 ex-food 대표 메뉴부터 휴게소마다 소문난 실시간 시그니처 밥상 가격표를 확인하세요.
        </p>
      </div>

      <AdSense slot="2233445566" />

      {/* 전국 휴게소 맛집 리스트 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100">
          휴게소별 시그니처 대표 메뉴판
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularMenus.map((item, idx) => (
            <div key={idx} className="p-5 border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all rounded-2xl flex justify-between items-start gap-4">
              <div className="space-y-2">
                <div className="space-y-0.5">
                  <a href={`/rest-areas/${item.restAreaSlug}`} className="text-xs font-bold text-blue-600 hover:underline">
                    {item.restAreaName} &rarr;
                  </a>
                  <h3 className="text-[16px] font-black text-slate-800">{item.menu.name}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.menu.description}
                </p>
              </div>
              <div className="text-right shrink-0 space-y-2">
                <span className="font-mono font-black text-slate-900 block text-[15px]">{item.menu.price.toLocaleString()}원</span>
                {item.menu.isExFood && (
                  <span className="inline-block bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded">
                    ex-food 인증
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
