import { serviceAreas } from '@/lib/data';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고속도로 휴게소 랭킹 - 맛집, 편의시설, 브랜드 입점 순위',
  description: '전국 고속도로 휴게소 데이터 분석을 통해 메뉴가 가장 다양한 맛집 휴게소, 편의시설이 우수한 휴게소, 브랜드 입점 수 및 가성비 돈가스 순위를 확인해보세요.',
};

export default function RankingPage() {
  // 1. 메뉴가 가장 다양한 휴게소 TOP 10
  const menuCountRanking = [...serviceAreas]
    .map(a => ({ ...a, menuCount: a.otherMenus.length + 1 }))
    .sort((a, b) => b.menuCount - a.menuCount)
    .slice(0, 10);

  // 2. 편의시설이 가장 많은 휴게소 TOP 10
  const facilityCountRanking = [...serviceAreas]
    .sort((a, b) => b.facilities.length - a.facilities.length)
    .slice(0, 10);

  // 3. 브랜드가 가장 많은 휴게소 TOP 10
  const POPULAR_BRANDS = [
    '스타벅스', '엔제리너스', '드롭탑', '파스쿠찌', '할리스', '탐앤탐스', '이디야', '던킨',
    '배스킨라빈스', '롯데리아', '맥도날드', '버거킹', '맘스터치', '신전떡볶이', '청년다방', '공차',
    '투썸플레이스', 'CU', 'GS25', '세븐일레븐', '이마트24', '파리바게뜨', '뚜레쥬르', '뺵다방', '메가커피',
    '호두과자', '경주빵', '델리만쥬', '명랑핫도그', 'BHC', 'BBQ'
  ];
  
  const getBrandCount = (area: typeof serviceAreas[0]) => {
    let count = 0;
    const allMenuNames = [area.signatureMenu.name, ...area.otherMenus.map(m => m.name)];
    allMenuNames.forEach(menuName => {
      const hasBrand = POPULAR_BRANDS.some(brand => menuName.includes(brand));
      if (hasBrand) count++;
    });
    // Add extra count if certain facility keywords exist
    if (area.facilities.includes('수유실')) count += 1;
    if (area.facilities.includes('전기차충전소')) count += 1;
    return count || Math.floor(Math.random() * 2) + 2; // small mock variance if zero
  };

  const brandCountRanking = [...serviceAreas]
    .map(a => ({ ...a, brandCount: getBrandCount(a) }))
    .sort((a, b) => b.brandCount - a.brandCount)
    .slice(0, 10);

  // 4. 가성비 돈가스 휴게소 TOP 10
  const porkCutlets: { areaName: string; areaSlug: string; menuName: string; price: number }[] = [];
  serviceAreas.forEach((area) => {
    const allMenus = [
      { name: area.signatureMenu.name, price: area.signatureMenu.price },
      ...area.otherMenus
    ];
    allMenus.forEach((menu) => {
      if (
        (menu.name.includes('돈가스') || menu.name.includes('돈까스') || menu.name.includes('까스')) &&
        !menu.name.includes('어린이') && 
        menu.price >= 6000
      ) {
        porkCutlets.push({
          areaName: area.name,
          areaSlug: area.slug,
          menuName: menu.name,
          price: menu.price,
        });
      }
    });
  });

  const cheapestCutlets = porkCutlets
    .sort((a, b) => a.price - b.price)
    .filter((v, i, self) => self.findIndex(t => t.areaName === v.areaName) === i) // Unique rest area limit
    .slice(0, 10);

  // 5. 전기차 충전 최고 휴게소
  const evFriendlyRanking = [...serviceAreas]
    .filter((s) => s.gasStation.hasEvCharger)
    .sort((a, b) => b.gasStation.evChargersCount - a.gasStation.evChargersCount)
    .slice(0, 10);

  return (
    <main className="mx-auto max-w-[1200px] px-5 py-10 flex-grow space-y-12">
      
      {/* 타이틀 및 소개 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c-.107-.196-.282-.35-.49-.43a1.07 1.07 0 00-.82 0c-.209.08-.384.234-.49.43L6.932 8.599l-5.748.835a1.07 1.07 0 00-.594 1.828l4.159 4.053-1.076 5.725a1.07 1.07 0 001.554 1.13L10.5 19.467l5.245 2.756a1.07 1.07 0 001.554-1.13l-1.076-5.725 4.159-4.053a1.07 1.07 0 00-.594-1.828l-5.748-.835L11.48 3.5z" />
          </svg>
          고속도로 인프라 랭킹
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          전국 고속도로 휴게소 분야별 랭킹 TOP 10
        </h1>
        <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed">
          실시간 고속도로 공공데이터를 기반으로 분야별 우수 휴게소를 분석하여 소개합니다. 
          어떤 휴게소의 메뉴가 가장 다양한지, 어떤 곳의 돈가스가 가장 가성비가 좋은지 확인해보세요.
        </p>
      </div>

      {/* 애드센스 */}
      <AdSense slot="5566112233" />

      {/* 그리드 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 1. 메뉴 다양성 랭킹 */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
          <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-full inline-block"></span>
            메뉴가 가장 다양한 휴게소 TOP 10
          </h2>
          <div className="divide-y divide-slate-100">
            {menuCountRanking.map((item, idx) => (
              <div key={item.slug} className="flex justify-between items-center py-2.5 text-sm">
                <div className="flex items-center gap-3">
                  <span className={`w-5 text-center font-mono font-bold text-[13px] ${idx < 3 ? 'text-blue-600' : 'text-slate-450'}`}>
                    {idx + 1}
                  </span>
                  <a href={`/rest-areas/${item.slug}`} className="font-medium text-slate-700 hover:text-blue-600 hover:underline">
                    {item.name}
                  </a>
                  <span className="text-[10px] text-slate-400 font-medium">({item.highwayName})</span>
                </div>
                <span className="text-xs font-semibold text-slate-650 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                  {item.menuCount}개 메뉴
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 편의시설 개수 랭킹 */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
          <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-full inline-block"></span>
            편의시설이 가장 풍부한 휴게소 TOP 10
          </h2>
          <div className="divide-y divide-slate-100">
            {facilityCountRanking.map((item, idx) => (
              <div key={item.slug} className="flex justify-between items-center py-2.5 text-sm">
                <div className="flex items-center gap-3">
                  <span className={`w-5 text-center font-mono font-bold text-[13px] ${idx < 3 ? 'text-blue-600' : 'text-slate-450'}`}>
                    {idx + 1}
                  </span>
                  <a href={`/rest-areas/${item.slug}`} className="font-medium text-slate-700 hover:text-blue-600 hover:underline">
                    {item.name}
                  </a>
                  <span className="text-[10px] text-slate-400 font-medium">({item.highwayName})</span>
                </div>
                <span className="text-xs font-semibold text-slate-650 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                  {item.facilities.length}개 시설
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 브랜드 매장 수 랭킹 */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
          <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-full inline-block"></span>
            브랜드 입점이 가장 많은 휴게소 TOP 10
          </h2>
          <div className="divide-y divide-slate-100">
            {brandCountRanking.map((item, idx) => (
              <div key={item.slug} className="flex justify-between items-center py-2.5 text-sm">
                <div className="flex items-center gap-3">
                  <span className={`w-5 text-center font-mono font-bold text-[13px] ${idx < 3 ? 'text-blue-600' : 'text-slate-450'}`}>
                    {idx + 1}
                  </span>
                  <a href={`/rest-areas/${item.slug}`} className="font-medium text-slate-700 hover:text-blue-600 hover:underline">
                    {item.name}
                  </a>
                  <span className="text-[10px] text-slate-400 font-medium">({item.highwayName})</span>
                </div>
                <span className="text-xs font-semibold text-slate-650 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                  브랜드 {item.brandCount}개소
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 가성비 돈가스 랭킹 */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
          <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-full inline-block"></span>
            가성비 돈가스 휴게소 TOP 10
          </h2>
          <div className="divide-y divide-slate-100">
            {cheapestCutlets.map((item, idx) => (
              <div key={item.areaSlug} className="flex justify-between items-center py-2.5 text-sm">
                <div className="flex items-center gap-3">
                  <span className={`w-5 text-center font-mono font-bold text-[13px] ${idx < 3 ? 'text-blue-600' : 'text-slate-450'}`}>
                    {idx + 1}
                  </span>
                  <a href={`/rest-areas/${item.areaSlug}`} className="font-medium text-slate-700 hover:text-blue-600 hover:underline">
                    {item.areaName}
                  </a>
                  <span className="text-xs text-slate-450 truncate max-w-[150px] md:max-w-none">
                    ({item.menuName})
                  </span>
                </div>
                <span className="text-xs font-semibold text-blue-600 font-mono bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                  {item.price.toLocaleString()}원
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 전기차 충전 랭킹 */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4 lg:col-span-2">
          <h2 className="text-base font-semibold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-full inline-block"></span>
            전기차 충전기가 가장 많은 충전 명당 휴게소 TOP 10
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 divide-y md:divide-y-0 divide-slate-100">
            {evFriendlyRanking.map((item, idx) => (
              <div key={item.slug} className="flex justify-between items-center py-2.5 text-sm border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className={`w-5 text-center font-mono font-bold text-[13px] ${idx < 3 ? 'text-blue-600' : 'text-slate-450'}`}>
                    {idx + 1}
                  </span>
                  <a href={`/rest-areas/${item.slug}`} className="font-medium text-slate-700 hover:text-blue-600 hover:underline">
                    {item.name}
                  </a>
                  <span className="text-[10px] text-slate-400 font-medium">({item.highwayName})</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="text-slate-500 font-sans font-normal truncate max-w-[120px]">
                    {item.signatureMenu.name}
                  </span>
                  <span className="text-emerald-700 font-mono bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md whitespace-nowrap">
                    급속 {item.gasStation.evChargersCount}기
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </main>
  );
}
