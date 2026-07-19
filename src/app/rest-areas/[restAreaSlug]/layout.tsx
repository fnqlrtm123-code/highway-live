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
    title: `${area.name} (${area.directionName}) 종합 편의정보 포털`,
    description: `${area.highwayName} ${area.name} (${area.directionName})의 맛집 메뉴, 실시간 알뜰주유소 가격, 전기차 충전 현황, 수유실/샤워실 등 다양한 편의시설 정보를 실시간으로 확인해보세요.`,
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

export default async function RestAreaLayout({ children, params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  // 탭 목록 정의
  const tabs = [
    { name: '종합 정보', href: `/rest-areas/${restAreaSlug}` },
    { name: '음식·맛집', href: `/rest-areas/${restAreaSlug}/food` },
    { name: '편의시설', href: `/rest-areas/${restAreaSlug}/facilities` },
  ];

  return (
    <main className="mx-auto max-w-[1200px] px-5 py-10 flex-grow">
      
      {/* 브레드크럼 */}
      <Breadcrumb items={[
        { name: '고속도로 휴게소', href: '/rest-areas' },
        { name: `${area.name} (${area.directionName})`, href: `/rest-areas/${restAreaSlug}` }
      ]} />

      {/* 상단 애드센스 광고 */}
      <AdSense slot="4455667788" />

      {/* 휴게소 상세 헤더 - 깔끔하고 읽기 편한 아티클 스타일 */}
      <div className="border-b border-slate-200 pb-6 mb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="bg-slate-100 text-slate-650 px-2.5 py-1 rounded-md border border-slate-200">휴게소 안내</span>
          <span>&middot;</span>
          <span>{area.highwayName}</span>
          <span>&middot;</span>
          <span>{area.locationKm}km 지점</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          {area.name} <span className="text-slate-400 font-semibold text-xl md:text-2xl">({area.directionName})</span>
        </h1>
        
        <p className="text-slate-650 text-sm md:text-[15px] leading-relaxed max-w-4xl font-normal">
          {area.highwayName} 노선에 있는 {area.name}({area.directionName}) 휴게소의 실시간 편의 정보 포털 가이드입니다. 
          도로공사 지정 대표 음식(맛집) 정보부터 수유실, 샤워실, 수면실 등 운전자와 동승자를 위한 다양한 고객 편의시설 정보를 상세하게 안내해 드립니다.
        </p>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto gap-1 scrollbar-none">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className="px-5 py-3 text-[13.5px] font-semibold text-slate-500 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800 whitespace-nowrap transition-all"
          >
            {tab.name}
          </a>
        ))}
      </div>

      {children}
    </main>
  );
}
