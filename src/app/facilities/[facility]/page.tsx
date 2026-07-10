import { serviceAreas } from '@/lib/data';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

const facilityMap: Record<string, { name: string; desc: string }> = {
  'baby-room': { name: '수유실', desc: '기저귀 교환대, 젖병 소독기 및 수유용 쇼파가 안전하게 구비된 고속도로 휴게소입니다.' },
  'shower': { name: '샤워실', desc: '장거리 기사님들과 여행객들의 피로 회복을 위해 샤워 시설을 제공하는 휴게소입니다.' },
  'sleep': { name: '수면실', desc: '졸음운전을 사전에 예방하고 휴식을 취할 수 있는 무료 졸음 수면쉼터 보유 휴게소입니다.' },
  'dog': { name: '반려견 쉼터', desc: '반려견이 목줄을 풀고 신나게 뛰놀 수 있는 애견 놀이터 보유 휴게소입니다.' },
  'pharmacy': { name: '약국', desc: '구급 약품 및 비상약을 언제든지 안전하게 구매할 수 있는 휴게소 내부 약국입니다.' },
  'atm': { name: 'ATM 기기', desc: '현금 출금 및 통장 정리가 가능한 365 자동화기기 보유 휴게소 목록입니다.' }
};

interface Props {
  params: Promise<{ facility: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { facility } = await params;
  const info = facilityMap[facility];
  if (!info) return {};

  const pageUrl = `https://highway.mrbrisbaneinsouth.kr/facilities/${facility}`;
  const title = `${info.name} 있는 고속도로 휴게소 목록 - 실시간 편의정보`;
  const description = `${info.desc} 노선별 상행/하행 위치 정보를 한눈에 간편하게 확인해보세요.`;

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
  return Object.keys(facilityMap).map((key) => ({
    facility: key,
  }));
}

export default async function FacilityDetailPage({ params }: Props) {
  const { facility } = await params;
  const info = facilityMap[facility];

  if (!info) {
    notFound();
  }

  // 데이터의 facilities 배열에 포함된 휴게소만 필터링
  const matchedAreas = serviceAreas.filter((s) => s.facilities.includes(info.name));

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-10">
      
      {/* 상단 브레드크럼 */}
      <div className="flex gap-1.5 items-center text-xs text-slate-400">
        <a href="/" className="hover:text-blue-600">홈</a>
        <span>&gt;</span>
        <a href="/facilities" className="hover:text-blue-600">편의시설</a>
        <span>&gt;</span>
        <span className="text-slate-600 font-bold">{info.name}</span>
      </div>

      {/* 헤더 안내 */}
      <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-black text-slate-900">{info.name} 있는 고속도로 휴게소</h1>
        </div>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
          {info.desc} 아래 리스트에서 노선명과 방향을 확인하고 주행 중 방문 계획을 세워보세요.
        </p>
      </div>

      <AdSense slot="2233445566" />

      {/* 매핑된 휴게소 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matchedAreas.map((area) => (
          <div key={area.slug} className="p-5 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-2xs hover:border-slate-300 transition-all">
            <div className="space-y-1">
              <span className="text-[10px] font-black bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{area.highwayName}</span>
              <h3 className="text-base font-black text-slate-800 pt-1">{area.name}</h3>
              <p className="text-xs text-slate-400 font-medium">{area.directionName} &middot; {area.locationKm}km 지점</p>
            </div>
            <a 
              href={`/rest-areas/${area.slug}`} 
              className="bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs px-4 py-2 rounded-xl transition-colors shrink-0"
            >
              상세정보 &rarr;
            </a>
          </div>
        ))}
        {matchedAreas.length === 0 && (
          <div className="col-span-2 text-center py-12 text-slate-400 bg-white border border-slate-200 rounded-2xl">
            등록된 휴게소 정보가 아직 없습니다.
          </div>
        )}
      </div>

    </main>
  );
}
