import { getServiceAreaBySlug, serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

interface Props {
  children: React.ReactNode;
  params: Promise<{ restAreaSlug: string }>;
}

// SEO 동적 메타데이터 생성
export async function generateMetadata({ params }: { params: Promise<{ restAreaSlug: string }> }): Promise<Metadata> {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);
  if (!area) return {};

  return {
    title: `${area.name} (${area.directionName}) 전기차 충전소 위치 & 수소차 충전기 현황`,
    description: `${area.highwayName} ${area.name} (${area.directionName}) 휴게소의 전기차(EV) 급속/초급속 충전기 수량 및 수소차 충전소 규격 정보를 실시간으로 확인해보세요.`,
  };
}

// Programmatic SEO를 위한 정적 경로(Static Params) 사전 정의
export async function generateStaticParams() {
  const params: { restAreaSlug: string }[] = [];
  serviceAreas.forEach((area) => {
    params.push({ restAreaSlug: area.slug });
    const encoded = encodeURIComponent(area.slug);
    if (encoded !== area.slug) {
      params.push({ restAreaSlug: encoded });
    }
  });
  return params;
}

export default async function EvAreaLayout({ children, params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  // 탭 목록 정의
  const tabs = [
    { name: '주유소 가격', href: `/gas/${restAreaSlug}` },
    { name: '전기차 충전', href: `/ev/${restAreaSlug}` },
  ];

  return (
    <main className="mx-auto max-w-[1200px] px-5 py-10 flex-grow">
      
      {/* 브레드크럼 */}
      <Breadcrumb items={[
        { name: '주유소 · 충전소', href: '/gas' },
        { name: `${area.name} 전기차 충전소`, href: `/ev/${restAreaSlug}` }
      ]} />

      {/* 상단 애드센스 광고 */}
      <AdSense slot="4455667788" />

      {/* 충전소 상세 헤더 - 깔끔하고 읽기 편한 아티클 스타일 */}
      <div className="border-b border-slate-200 pb-6 mb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md border border-emerald-100">충전소 안내</span>
          <span>&middot;</span>
          <span>{area.highwayName}</span>
          <span>&middot;</span>
          <span>{area.locationKm}km 지점</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          {area.name} 전기차 충전소 <span className="text-slate-400 font-semibold text-xl md:text-2xl">({area.directionName})</span>
        </h1>
        
        <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-4xl font-normal">
          {area.highwayName} 노선에 있는 {area.name}({area.directionName}) 휴게소 전기차(EV) 및 수소차 충전 인프라 안내 가이드입니다. 
          설치된 충전기 수량, 가용 여부, 충전 규격(속도) 및 충전 시 유용한 팁을 실시간으로 안내해 드립니다.
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto gap-1 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = tab.name === '전기차 충전';
          return (
            <a
              key={tab.name}
              href={tab.href}
              className={`px-5 py-3 text-[13.5px] font-semibold whitespace-nowrap transition-all border-b-2 ${
                isActive
                  ? 'text-slate-900 border-slate-800 font-bold'
                  : 'text-slate-500 border-transparent hover:text-slate-900 hover:border-slate-800'
              }`}
            >
              {tab.name}
            </a>
          );
        })}
      </div>

      {children}
    </main>
  );
}
