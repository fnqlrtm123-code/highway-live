import { getServiceAreaBySlug, serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

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
  return serviceAreas.map((area) => ({
    restAreaSlug: area.slug,
  }));
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
    { name: '주유소 가격', href: `/rest-areas/${restAreaSlug}/gas` },
    { name: '전기차 충전', href: `/rest-areas/${restAreaSlug}/ev` },
    { name: '편의시설', href: `/rest-areas/${restAreaSlug}/facilities` },
  ];

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow">
      
      {/* 뒤로가기 링크 */}
      <a href="/" className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors mb-6">
        &larr; 고속도로 상황판 홈으로 돌아가기
      </a>

      {/* 상단 애드센스 광고 */}
      <AdSense slot="4455667788" />

      {/* 휴게소 상세 헤더 카드 */}
      <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-black bg-blue-600 text-white px-2.5 py-0.5 rounded">휴게소 상세</span>
              <span className="text-xs text-blue-300 font-mono tracking-tight">{area.highwayName} &middot; {area.locationKm}km 지점</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">{area.name} <span className="text-blue-500 font-extrabold text-2xl md:text-3xl">({area.directionName})</span></h1>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              {area.highwayName}에 위치한 {area.name}({area.directionName})의 실시간 모니터링 정보를 전해드립니다. 맛집 대표 음식(EX-FOOD), 알뜰주유소 실시간 기름값 및 충전 시설 현황을 확인해보세요.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">기본 편의시설</span>
            <div className="flex flex-wrap gap-1.5 max-w-[280px] md:justify-end">
              {area.facilities.map(f => (
                <span key={f} className="text-[11px] font-extrabold bg-slate-800 text-slate-300 px-2.5 py-1 border border-slate-700/50 rounded-lg">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto gap-2 scrollbar-none">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className="px-5 py-3 text-[14px] font-bold text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap transition-all"
          >
            {tab.name}
          </a>
        ))}
      </div>

      {children}
    </main>
  );
}
