import { getServiceAreaBySlug, serviceAreas, getServiceAreasByHighway } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

// SEO 동적 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return {};

  return {
    title: `${area.name} (${area.directionName}) 맛집 & 주유소 유가 정보`,
    description: `${area.highwayName} ${area.name} (${area.directionName})의 시그니처 대표 메뉴인 ${area.signatureMenu.name} 가격과 맛 정보, 알뜰주유소 실시간 기름값(휘발유, 경유, LPG), EV 충전기 보유 대수 및 수유실/샤워실 등 편의시설 현황을 안내합니다.`,
    keywords: [`${area.name} 맛집`, `${area.name} ${area.directionName}`, `${area.name} 대표음식`, `${area.name} 주유소`, `${area.name} 기름값`, `${area.name} 전기차 충전소`]
  };
}

// Programmatic SEO를 위한 정적 경로(Static Params) 사전 정의
export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default async function ServiceAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  // 동일한 노선의 다른 휴게소 추천 (내부 링크 연결로 크롤링 경로 활성화)
  const siblingAreas = getServiceAreasByHighway(area.highwaySlug).filter(s => s.slug !== area.slug);

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow">
      
      {/* 뒤로가기 링크 */}
      <a href="/" className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors mb-6">
        &larr; 고속도로 상황판 홈으로 돌아가기
      </a>

      {/* 상단 애드센스 광고 */}
      <AdSense slot="4455667788" />

      {/* 휴게소 상세 헤더 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-black bg-blue-600 text-white px-2.5 py-0.5 rounded">휴게소 안내</span>
              <span className="text-xs text-blue-300 font-mono tracking-tight">{area.highwayName} &middot; {area.locationKm}km 지점</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">{area.name} <span className="text-blue-500 font-extrabold text-2xl md:text-3xl">({area.directionName})</span></h1>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              본 휴게소는 {area.highwayName} 노선에 위치한 대표적인 쉼터로, 지역 고유의 맛을 담은 시그니처 웰빙 음식과 도로공사에서 엄격하게 엄선한 알뜰 주유 혜택을 함께 제공하고 있습니다.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">주요 편의시설</span>
            <div className="flex flex-wrap gap-1.5 max-w-[280px] md:justify-end">
              {area.facilities.map(f => (
                <span key={f} className="text-[11px] font-extrabold bg-slate-800 text-slate-300 px-2 py-0.5 border border-slate-700/50 rounded">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        
        {/* 좌측: 휴게소 맛집 메뉴 목록 (8열) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-xl font-black text-slate-900">🍽️ 먹거리 맛집 메뉴 상세</h2>
              <span className="text-xs font-bold text-slate-400">도로공사 인증 및 인기 메뉴</span>
            </div>

            {/* 시그니처 대표 메뉴 상세 */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black tracking-wider px-3.5 py-1 uppercase rounded-bl-lg">
                SIGNATURE MENU
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-slate-800">{area.signatureMenu.name}</span>
                  {area.signatureMenu.isExFood && (
                    <span className="text-[9px] font-black bg-amber-500 text-white px-2 py-0.5 rounded">EX-FOOD</span>
                  )}
                </div>
                <p className="text-[13.5px] text-slate-500 leading-relaxed max-w-xl">
                  {area.signatureMenu.description}
                </p>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-bold">판매 가격</span>
                  <span className="text-xl font-mono font-black text-blue-600">{area.signatureMenu.price.toLocaleString()}원</span>
                </div>
              </div>
            </div>

            {/* 기타 메뉴 목록 */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-black text-slate-400 tracking-wider uppercase">기타 식당가 및 분식 매장 메뉴</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {area.otherMenus.map((menu) => (
                  <div key={menu.name} className="flex justify-between items-center p-3.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                    <span className="text-[13.5px] font-extrabold text-slate-800">{menu.name}</span>
                    <span className="text-[14.5px] font-mono font-black text-slate-600">{menu.price.toLocaleString()}원</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 본문 중간 인피드 광고 */}
          <AdSense slot="5566778899" />

          {/* 고속도로 휴게소 꿀팁 및 주차 정보 (SEO 본문 보강) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-4 text-[14px] leading-relaxed text-slate-600">
            <h3 className="text-base font-black text-slate-900">💡 {area.name} ({area.directionName}) 이용 꿀팁</h3>
            <p>
              {area.name}은(는) {area.highwayName}의 {area.locationKm}km 구간에 입지하여 주말 휴가철이나 명절 귀성길에 많은 이용객들이 찾는 전략적 대형 휴게소입니다. 휴게소 대표 음식인 <strong>{area.signatureMenu.name}</strong>은 엄격한 품질 평가와 도로공사의 위생 관리를 통과한 프리미엄 영양 건강식입니다.
            </p>
            <p>
              동 주차 구역은 넓은 대형 화물차 주차장과 장애인 편의 주차 공간을 완전 분리 설계하여 쾌적한 주차가 가능하며, 충전 속도가 빠른 최신 전기차(EV) 충전기가 다량 포진하여 주행 도중 20분 내외의 고속 배터리 충전 작업을 안전하게 완료하실 수 있습니다.
            </p>
          </div>
        </div>

        {/* 우측: 주유소 가격 비교 및 편의시설 카드 (4열) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 주유소 정보 카드 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4">
            <h3 className="text-base font-black text-slate-900 border-b pb-3 border-slate-100">
              ⛽ 실시간 주유소 가격 비교
            </h3>
            
            <div className="space-y-3.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold">주유소 브랜드</span>
                <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded text-xs font-black border border-blue-100">{area.gasStation.brand}</span>
              </div>
              
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-extrabold">휘발유 (L)</span>
                  <span className="text-lg font-mono font-black text-slate-800">{area.gasStation.gasolinePrice.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-extrabold">경유 (L)</span>
                  <span className="text-lg font-mono font-black text-slate-800">{area.gasStation.dieselPrice.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-extrabold">LPG (L)</span>
                  <span className="text-lg font-mono font-black text-slate-800">
                    {area.gasStation.lpgPrice ? `${area.gasStation.lpgPrice.toLocaleString()}원` : '판매안함'}
                  </span>
                </div>
              </div>

              {/* 친환경차 현황 */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-extrabold">전기차 급속 충전</span>
                  {area.gasStation.hasEvCharger ? (
                    <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-black">
                      가능 ({area.gasStation.evChargersCount}기)
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">없음</span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-extrabold">수소차 충전</span>
                  {area.gasStation.hasHydrogen ? (
                    <span className="text-xs text-sky-600 bg-sky-50 px-2 py-0.5 rounded font-black">
                      가능
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">없음</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 인근 휴게소 링크 추천 (크롤러 인덱싱 유도용) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4">
            <h3 className="text-base font-black text-slate-900 border-b pb-3 border-slate-100">
              🛣️ 동일 노선 인근 휴게소
            </h3>
            
            <div className="space-y-3">
              {siblingAreas.map((s) => (
                <a 
                  key={s.slug}
                  href={`/service-area/${s.slug}`}
                  className="block p-3 border border-slate-100 rounded-xl hover:border-blue-600 hover:bg-slate-50 transition-all text-left"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[13.5px] font-black text-slate-800">{s.name}</span>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{s.directionName}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-400">
                    <span>{s.locationKm}km 지점</span>
                    <span>시그니처: {s.signatureMenu.name}</span>
                  </div>
                </a>
              ))}
              {siblingAreas.length === 0 && (
                <p className="text-xs text-slate-400 py-4 text-center">동일한 고속도로 노선에 다른 휴게소가 존재하지 않습니다.</p>
              )}
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}
