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
    <div className="max-w-3xl mx-auto space-y-8 text-slate-800 leading-relaxed">
      
      {/* 타이틀 */}
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-slate-900 pl-4">
          ⛺ {area.name} 휴게소 편의시설 및 서비스 현황
        </h2>
        <p className="text-sm text-slate-500">
          운전자분들의 휴식을 돕는 휴게소 부대 서비스 시설과 편의시설 리스트입니다.
        </p>
      </div>

      {/* 세로 목록형 편의시설 */}
      <div className="space-y-4">
        <h3 className="text-sm font-black text-slate-400 tracking-wider uppercase">이용 가능한 부대 서비스</h3>
        <ul className="divide-y divide-slate-100 text-sm">
          {area.facilities.map((f) => (
            <li key={f} className="py-3.5 flex justify-between items-center">
              <span className="font-semibold text-slate-800">{f}</span>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                이용 가능
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 가이드 설명글 */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
        <h3 className="text-sm font-black text-slate-800">💡 휴게소 부대시설 이용 정보</h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          고속도로 휴게소의 수유실, 장애인 편의시설 등 핵심 서비스는 24시간 가용되도록 관리되고 있으나, 특산물 판매장이나 개별 스낵코너, 테마 산책로 시설 등은 휴게소 영업 사정이나 현지 기상 상황에 따라 운영 시간 및 가용 여부가 달라질 수 있으니 참고해주시기 바랍니다.
        </p>
      </div>

    </div>
  );
}
