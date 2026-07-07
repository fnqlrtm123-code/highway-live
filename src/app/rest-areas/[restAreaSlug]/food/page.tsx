import { getServiceAreaBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ restAreaSlug: string }>;
}

export default async function RestAreaFoodPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          🍽️ 대표 먹거리 맛집 메뉴
        </h2>
        <span className="text-xs font-bold text-slate-400">도로공사 인증 및 식당가 대표 음식</span>
      </div>

      {/* 시그니처 대표 메뉴 상세 */}
      <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black tracking-wider px-3.5 py-1.5 uppercase rounded-bl-lg">
          대표 시그니처
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
        <h3 className="text-sm font-black text-slate-400 tracking-wider uppercase">일반 식당가 및 코너 메뉴</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {area.otherMenus.map((menu) => (
            <div key={menu.name} className="flex justify-between items-center p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
              <span className="text-[13.5px] font-extrabold text-slate-800">{menu.name}</span>
              <span className="text-[14.5px] font-mono font-black text-slate-600">{menu.price.toLocaleString()}원</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
