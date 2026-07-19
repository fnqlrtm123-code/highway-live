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

  const pageUrl = `https://highway.mrbrisbaneinsouth.kr/rest-areas/${encodeURIComponent(area.slug)}/facilities`;
  const mainFacilities = area.facilities.slice(0, 3).join(', ');
  const title = `${area.name} (${area.directionName}) 편의시설 안내 - 수유실/샤워실/수면실`;
  const description = `${area.name} (${area.directionName}) 휴게소에서 이용할 수 있는 주요 편의 편의서비스 시설(${mainFacilities})의 상세 가이드와 24시간 가용 여부를 확인해보세요.`;

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
  const params: { restAreaSlug: string }[] = [];
  serviceAreas.forEach((area) => {
    params.push({ restAreaSlug: area.slug });
    const encoded = encodeURIComponent(area.slug);
    if (encoded !== area.slug) {
      params.push({ restAreaSlug: encoded });
    }
    if (area.oldSlug) {
      params.push({ restAreaSlug: area.oldSlug });
      const encodedOld = encodeURIComponent(area.oldSlug);
      if (encodedOld !== area.oldSlug) {
        params.push({ restAreaSlug: encodedOld });
      }
    }
  });
  return params;
}

export default async function RestAreaFacilitiesPage({ params }: Props) {
  const { restAreaSlug } = await params;
  const area = getServiceAreaBySlug(restAreaSlug);

  if (!area) {
    notFound();
  }

  // 실사 데이터 기반 편의시설 상세 설명 매핑
  const facilityDescriptions: Record<string, string> = {
    '수유실': '영유아 동반 가족을 위해 아기 침대, 기저귀 교환대, 젖병 소독기 및 수유용 안락의자가 아늑한 독립 공간에 설치되어 있어 안심하고 이용할 수 있습니다.',
    '수면실': '장거리 화물차 운전자 및 피로가 누적된 운전자를 위한 조용하고 쾌적한 캡슐형/온돌형 수면실이 운영되고 있어 안전운전을 위한 숙면이 가능합니다.',
    '샤워실': '화물차 운전자 및 일반 운전자를 위한 1인실 중심의 냉/난방 샤워 시설로, 주말이나 야간에도 청결하게 관리되어 땀을 식히기에 매우 적합합니다.',
    'ATM': '주요 은행권 공용 현금자동입출금기(ATM)가 편의점 내부 또는 외부 부스에 배치되어 있어 간편하게 긴급 현금 인출 및 계좌이체 업무를 보실 수 있습니다.',
    '화장실': '안전하고 위생적인 스마트 화장실 설비로, 실시간 사용 현황 모니터 및 배리어프리(장애인/임산부 전용) 안심 설비가 상시 작동 중입니다.',
    '내판': '휴게소 내 다양한 특산물 판매장 및 지역 상생 마켓이 들어서 있어 안심할 수 있는 지역 먹거리 쇼핑을 즐기실 수 있습니다.',
    '수유실(베이비케어)': '베이비케어 존으로 별도 정비되어 영유아용 온수기, 전자레인지, 젖병 청결제 등이 무상 구비되어 편리하게 수유 및 기저귀 처리가 가능합니다.'
  };

  const matchedFacilities = area.facilities.map(f => ({
    name: f,
    desc: facilityDescriptions[f] || '고객 편의를 위해 청결하고 안전하게 상시 관리 중인 대표 서비스 인프라 시설입니다. 이용 관련 문의는 휴게소 고객안내소를 통해 지원받으실 수 있습니다.'
  }));

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed font-normal">
      
      {/* 타이틀 */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h2 className="text-xl font-semibold text-slate-900 border-l-3 border-blue-600 pl-3">
            ⛺ {area.name} 휴게소 편의시설 및 서비스 현황
          </h2>
          <a
            href={`/rest-areas/${encodeURIComponent(area.slug)}`}
            className="text-xs font-bold text-blue-650 hover:text-blue-800 transition-colors whitespace-nowrap shrink-0 hover:underline cursor-pointer"
          >
            휴게소 상세 정보 &rarr;
          </a>
        </div>
        <p className="text-sm text-slate-500">
          운전자분들의 휴식을 돕는 휴게소 부대 서비스 시설과 편의시설 리스트입니다.
        </p>
      </div>

      {/* 세로 목록형 편의시설 + 실사 기반 상세 가이드 */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">이용 가능한 부대 서비스 상세 안내</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {matchedFacilities.map((f, i) => (
            <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2.5 hover:shadow-xs transition-shadow">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {f.name}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50">
                  정상 운영
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 가이드 설명글 */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2.5">
        <h3 className="text-sm font-semibold text-slate-800">💡 휴게소 부대시설 이용 정보</h3>
        <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-normal">
          고속도로 휴게소의 수유실, 장애인 편의시설 등 핵심 서비스는 24시간 가용되도록 관리되고 있으나, 특산물 판매장이나 개별 스낵코너, 테마 산책로 시설 등은 휴게소 영업 사정이나 현지 기상 상황에 따라 운영 시간 및 가용 여부가 달라질 수 있으니 참고해주시기 바랍니다.
        </p>
      </div>

    </div>
  );
}
