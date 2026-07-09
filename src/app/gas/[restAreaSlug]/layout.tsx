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
    title: `${area.name} (${area.directionName}) 주유소 실시간 기름값 & LPG 가격표`,
    description: `${area.highwayName} ${area.name} (${area.directionName}) 휴게소 주유소의 실시간 휘발유, 경유, LPG 가격 및 전기차/수소차 충전소 위치 정보를 실시간으로 확인해보세요.`,
  };
}

// Programmatic SEO를 위한 정적 경로(Static Params) 사전 정의
export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    restAreaSlug: area.slug,
  }));
}

export default async function GasAreaLayout({ children, params }: Props) {
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
        { name: `${area.name} 주유소`, href: `/gas/${restAreaSlug}` }
      ]} />

      {/* 상단 애드센스 광고 */}
      <AdSense slot="4455667788" />

      {/* 주유소 상세 헤더 - 깔끔하고 읽기 편한 아티클 스타일 */}
      <div className="border-b border-slate-200 pb-6 mb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="bg-slate-100 text-slate-650 px-2.5 py-1 rounded-md border border-slate-200">주유소 안내</span>
          <span>&middot;</span>
          <span>{area.highwayName}</span>
          <span>&middot;</span>
          <span>{area.locationKm}km 지점</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          {area.name} 주유소 <span className="text-slate-400 font-semibold text-xl md:text-2xl">({area.directionName})</span>
        </h1>
        
        <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-4xl font-normal">
          {area.highwayName} 노선에 있는 {area.name}({area.directionName}) 휴게소 주유소의 실시간 유가 정보 안내 가이드입니다. 
          정량/정품을 판매하는 알뜰주유소(ex-OIL) 및 브랜드별 주유소의 실시간 휘발유, 경유, LPG 판매 가격표와 함께 유류비 절약을 위한 팁을 안내해 드립니다.
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto gap-1 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = tab.name === '주유소 가격';
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
