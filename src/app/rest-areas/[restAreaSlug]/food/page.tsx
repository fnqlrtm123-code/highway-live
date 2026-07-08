import { getServiceAreaBySlug, serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
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

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed font-normal">
      
      {/* 타이틀 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
          🍴 {area.name} 휴게소 대표 음식 및 식당가 메뉴판
        </h2>
        <p className="text-sm text-slate-500">
          한국도로공사에서 공식 인증한 시그니처 대표 음식 정보와 전체 식당가 메뉴 리스트입니다.
        </p>
      </div>

      {/* 대표 메뉴 상세 (블로그 본문 인용구 스타일) */}
      <div className="p-6 bg-slate-50 border-l-3 border-slate-400 my-4 space-y-3 rounded-r-xl">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-slate-900">{area.signatureMenu.name}</span>
          {area.signatureMenu.isExFood && (
            <span className="text-[9px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded">EX-FOOD 인증</span>
          )}
        </div>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
          {area.signatureMenu.description}
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

    </div>
  );
}
