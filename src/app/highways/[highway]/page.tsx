import { 
  getHighwayBySlug, 
  highways, 
  getServiceAreasByHighway 
} from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';
import { getRestAreaImage } from '@/lib/imageHelper';

interface Props {
  params: Promise<{ highway: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { highway: highwaySlug } = await params;
  const highway = getHighwayBySlug(highwaySlug);
  if (!highway) return {};

  return {
    title: `${highway.name} 노선 종합 상세 정보 - 휴게소, 주유소, 교통상황`,
    description: `${highway.name}의 기종점, 총연장, 전체 휴게소 편의시설, 맛집 메뉴, 알뜰주유소 실시간 가격 및 전기차 충전기 현황을 확인하세요.`,
  };
}

export async function generateStaticParams() {
  return highways.map((h) => ({
    highway: h.slug,
  }));
}

export default async function HighwayDetailPage({ params }: Props) {
  const { highway: highwaySlug } = await params;
  const highway = getHighwayBySlug(highwaySlug);

  if (!highway) {
    notFound();
  }

  const serviceAreas = getServiceAreasByHighway(highwaySlug);

  // 노선 내 최저가 유가 찾기
  const gasolinePrices = serviceAreas.map(s => s.gasStation.gasolinePrice).filter(p => p > 0);
  const dieselPrices = serviceAreas.map(s => s.gasStation.dieselPrice).filter(p => p > 0);
  
  const minGasoline = gasolinePrices.length > 0 ? Math.min(...gasolinePrices) : null;
  const minDiesel = dieselPrices.length > 0 ? Math.min(...dieselPrices) : null;

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 브레드크럼 & 뒤로가기 */}
      <div className="flex justify-between items-center text-xs text-slate-400">
        <div className="flex gap-1.5 items-center">
          <a href="/" className="hover:text-blue-600">홈</a>
          <span>&gt;</span>
          <a href="/highways" className="hover:text-blue-600">고속도로 노선</a>
          <span>&gt;</span>
          <span className="text-slate-600 font-bold">{highway.name}</span>
        </div>
        <a href="/highways" className="font-bold hover:text-blue-600">&larr; 전체 노선 목록</a>
      </div>

      {/* 헤더 대시보드 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 border border-slate-800 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black bg-blue-600 text-white px-2.5 py-0.5">{highway.number}</span>
            <span className="text-xs text-blue-300 font-mono">총연장: {highway.length}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">{highway.name} 정보</h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-3xl leading-relaxed">
            {highway.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400">
            <div>
              <span className="block text-[10px] text-slate-500 font-bold">시작지점 (기점)</span>
              <span className="text-white font-bold text-sm block mt-0.5">{highway.start}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 font-bold">종료지점 (종점)</span>
              <span className="text-white font-bold text-sm block mt-0.5">{highway.end}</span>
            </div>
            {minGasoline && (
              <div>
                <span className="block text-[10px] text-slate-500 font-bold">노선 내 휘발유 최저가</span>
                <span className="text-emerald-400 font-mono font-black text-sm block mt-0.5">{minGasoline}원</span>
              </div>
            )}
            {minDiesel && (
              <div>
                <span className="block text-[10px] text-slate-500 font-bold">노선 내 경유 최저가</span>
                <span className="text-emerald-400 font-mono font-black text-sm block mt-0.5">{minDiesel}원</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 내부 링크 퀵 버튼 */}
      <div className="bg-white border border-slate-200 p-4 flex flex-wrap gap-2 justify-center shadow-2xs">
        <a href={`/traffic/${highway.name.replace(/[^a-zA-Z0-9가-힣]+/g, '-').replace(/^-|-$/g, '')}`} className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2 text-xs transition-all">
          실시간 교통상황 &rarr;
        </a>
        <a href={`#rest-areas-section`} className="bg-slate-150 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 text-xs transition-all">
          휴게소 목록
        </a>
        <a href={`#gas-stations-section`} className="bg-slate-150 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 text-xs transition-all">
          알뜰 주유가격
        </a>
      </div>

      <AdSense slot="5566778899" />

      {/* 휴게소 목록 섹션 */}
      <section id="rest-areas-section" className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          {highway.name} 휴게소 목록 ({serviceAreas.length}개소)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceAreas.map((area) => (
            <div key={area.slug} className="overflow-hidden bg-white border border-slate-200 flex flex-col justify-between shadow-2xs hover:border-slate-350 transition-all rounded-2xl">
              {/* Thumbnail Image */}
              <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                <img 
                  src={getRestAreaImage(area.slug, area.highwaySlug)} 
                  alt={`${area.name} 전경`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className={`absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-md border shadow-xs ${
                  area.direction === '상행' ? 'bg-blue-600 text-white border-blue-500' :
                  area.direction === '하행' ? 'bg-rose-600 text-white border-rose-500' : 'bg-slate-600 text-white border-slate-500'
                }`}>
                  {area.directionName}
                </span>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-black text-slate-800">{area.name}</h3>
                      <span className="text-[10px] font-bold text-slate-500">{area.locationKm}km 지점 &middot; {area.directionName}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {area.facilities.map((f, idx) => (
                      <span key={idx} className="text-[10.5px] bg-slate-100 text-slate-650 px-2 py-0.5 font-bold rounded-md border border-slate-200/40">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-slate-100 pt-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 block font-semibold">대표 메뉴</span>
                    <span className="font-bold text-slate-700">{area.signatureMenu.name} ({area.signatureMenu.price.toLocaleString()}원)</span>
                  </div>
                  <a 
                    href={`/rest-areas/${area.slug}`} 
                    className="bg-slate-900 text-white hover:bg-slate-800 font-bold px-3 py-2 rounded-lg transition-colors shrink-0 cursor-pointer"
                  >
                    상세정보 &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 주유소 & EV 충전소 목록 */}
      <section id="gas-stations-section" className="bg-white border border-slate-200 p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900">{highway.name} 주유소 및 전기차 충전기 가격표</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs md:text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-bold">
                <th className="py-3 px-4">휴게소</th>
                <th className="py-3 px-4">주유소 브랜드</th>
                <th className="py-3 px-4 text-right">휘발유 가격</th>
                <th className="py-3 px-4 text-right">경유 가격</th>
                <th className="py-3 px-4 text-right">LPG 여부</th>
                <th className="py-3 px-4 text-center">전기차 충전</th>
              </tr>
            </thead>
            <tbody>
              {serviceAreas.map((area) => (
                <tr key={area.slug} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-800">{area.name}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-500">{area.gasStation.brand}</td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-800">{area.gasStation.gasolinePrice}원</td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-800">{area.gasStation.dieselPrice}원</td>
                  <td className="py-3.5 px-4 text-right">
                    {area.gasStation.lpgPrice ? (
                      <span className="font-mono text-slate-700">{area.gasStation.lpgPrice}원</span>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {area.gasStation.hasEvCharger ? (
                      <span className="inline-block bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[11px] font-black">
                        급속 {area.gasStation.evChargersCount}기
                      </span>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}
