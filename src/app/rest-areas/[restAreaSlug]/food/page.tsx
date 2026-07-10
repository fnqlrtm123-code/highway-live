import { getServiceAreaBySlug, serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
}

// 동적 SEO 메타데이터 생성
export async function generateMetadata({ params }: { params: Promise<{ restAreaSlug: string }> }): Promise<Metadata> {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);
  if (!area) return {};

  const pageUrl = `https://highway.mrbrisbaneinsouth.kr/rest-areas/${restAreaSlug}/food`;
  const title = `${area.name} (${area.directionName}) 맛집 메뉴판 & 추천 대표음식 가격표`;
  const description = `${area.name} (${area.directionName}) 휴게소의 대표 인기 음식인 ${area.signatureMenu.name}(${area.signatureMenu.price.toLocaleString()}원) 정보와 함께 식당가 푸드코트, 우동·라면 분식류 및 간식 코너 전체 메뉴 가격표를 실시간으로 확인해보세요.`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      locale: "ko_KR",
    }
  };
}

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    restAreaSlug: area.slug,
  }));
}

export default async function RestAreaFoodPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  // 가격 기준 팁 문장 동적 구성
  const isBudgetFriendly = area.signatureMenu.price <= 9000;
  const signatureText = `${area.name} 휴게소 식당가의 자랑인 대표 음식 '${area.signatureMenu.name}'은(는) ${area.signatureMenu.price.toLocaleString()}원의 가격으로 제공되고 있습니다. ${area.signatureMenu.description} ${isBudgetFriendly ? '비교적 합리적인 가격에 든든하게 식사를 마칠 수 있어 많은 운전자분들의 추천을 받고 있는 인기 메뉴입니다.' : '정성스럽게 준비한 프리미엄 시그니처 밥상으로 든든한 고속도로 미식 여행의 묘미를 느끼실 수 있습니다.'}`;

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed font-normal">
      
      {/* 타이틀 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
          🍴 {area.name} 휴게소 대표 음식 및 식당가 메뉴판
        </h2>
        <p className="text-sm text-slate-500">
          한국도로공사에서 공식 인증한 대표 음식 정보와 함께 스낵 코너, 푸드코트 전체 식당가 메뉴 리스트입니다.
        </p>
      </div>

      {/* 대표 메뉴 상세 (블로그 본문 인용구 스타일) */}
      <div className="p-6 bg-slate-50 border-l-3 border-blue-600 my-4 space-y-3 rounded-r-xl">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-slate-900">{area.signatureMenu.name}</span>
          {area.signatureMenu.isExFood && (
            <span className="text-[9px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded">대표 음식</span>
          )}
        </div>
        <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-normal">
          {signatureText}
        </p>
        <div className="pt-2 flex justify-between items-center text-xs md:text-sm border-t border-slate-200/50">
          <span className="text-slate-400 font-semibold">대표메뉴 가격</span>
          <span className="text-base font-mono font-bold text-slate-900">{area.signatureMenu.price.toLocaleString()}원</span>
        </div>
      </div>

      {/* 기타 메뉴 목록 */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">일반 식당가 및 코너별 메뉴 안내</h3>
        <ul className="divide-y divide-slate-100 text-sm">
          {area.otherMenus.map((menu) => (
            <li key={menu.name} className="py-3.5 flex justify-between items-center">
              <span className="font-medium text-slate-700">{menu.name}</span>
              <span className="font-mono font-semibold text-slate-600">{menu.price.toLocaleString()}원</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 입점 브랜드 매장 안내 */}
      {area.brandStores && area.brandStores.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">입점 브랜드 매장 안내</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {area.brandStores.map((brand, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-900 text-sm">{brand.name}</span>
                  <span className="text-[10px] text-slate-400 font-medium bg-white px-2 py-0.5 rounded border border-slate-100">{brand.hours}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 실사 데이터 기반 추가 설명글 */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2.5">
        <h3 className="text-sm font-semibold text-slate-800">💡 {area.name} 휴게소 식사 가이드</h3>
        <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-normal">
          {area.name} 휴게소는 {area.brandStores && area.brandStores.length > 0 ? `${area.brandStores.map(b => b.name).join(', ')} 등의 대중적인 프랜차이즈 브랜드가 입점하여 운영 중으로,` : ''} 기호에 맞는 다양한 후식을 곁들일 수 있어 식사 후 커피 타임까지 한곳에서 원스톱으로 해결할 수 있습니다. 
          주말이나 주요 공휴일 피크 시간대에는 무인 키오스크 대기열이 길어질 수 있으므로, 입구에 배치된 무인 주문기를 분산 활용하시거나 사전 스마트 주문을 이용하시면 시간을 단축하실 수 있습니다.
        </p>
      </div>

    </div>
  );
}
