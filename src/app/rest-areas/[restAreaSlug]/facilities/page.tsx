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

export default async function RestAreaFacilitiesPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          편의시설 및 부대 서비스 현황
        </h2>
        <span className="text-xs font-bold text-slate-400">휴게소 부대시설 및 테마 안내</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {area.facilities.map((f) => (
          <div key={f} className="flex justify-between items-center p-4 border border-slate-100 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-black text-slate-800">{f}</span>
            </div>
            <span className="text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded font-black">
              24시간 운영/가용
            </span>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500 leading-relaxed">
        <strong>테마 시설 안내</strong>: 각 휴게소는 특산물 판매장, 전망대, 산책로 등을 별도로 구성하고 있습니다. 덕평휴게소와 같은 특정 복합 휴게소의 경우 애견동반 테마파크(달려라코코)나 쇼핑 가든 테마 공원이 조성되어 회차형 쉼터로 높은 인기를 자랑합니다.
      </div>
    </div>
  );
}
