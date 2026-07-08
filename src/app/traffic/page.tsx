import { highways, serviceAreas } from '@/lib/data';
import { getRoadList } from '@/lib/roadData';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고속도로 실시간 교통상황 확인 방법 — CCTV·교통정보 앱·정체 예상',
  description: '전국 고속도로 실시간 교통상황 확인 방법을 안내합니다. 로드플러스·국가교통정보센터·고속도로교통정보 앱·지도 CCTV로 소통 속도와 정체 구간을 확인하고, 명절·연휴 정체 예상 시간대를 미리 파악하세요.',
};

export default function TrafficIndexPage() {
  const roadsList = getRoadList();
  
  // 고속도로 리스트만 추출하여 휴게소 개수 매핑
  const highwayTrafficLinks = highways.map((h) => {
    const road = roadsList.find((r) => r.slug === h.slug);
    const count = serviceAreas.filter((s) => s.highwaySlug === h.slug).length;
    return {
      slug: h.slug,
      name: h.name,
      restAreaCount: count,
      detail: road?.detail || `${h.start} - ${h.end}`,
    };
  });

  return (
    <main className="mx-auto max-w-[1000px] px-5 py-10 flex-grow space-y-12 text-slate-700 leading-relaxed text-sm md:text-base font-sans">
      
      {/* 1. 타이틀 영역 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
          실시간 교통 가이드
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          고속도로 실시간 교통상황 확인 방법 — CCTV · 교통정보 앱 · 정체 예상
        </h1>
        <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed">
          전국 고속도로의 실시간 소통 속도와 정체 구간, CCTV 카메라 영상을 무료로 확인할 수 있는 유용한 공식 정보망과 팁을 공유합니다. 
          출발 전 도로 정보를 꼼꼼히 체크해 보다 안전하고 쾌적하게 목적지까지 이동해 보세요.
        </p>
      </div>

      {/* 애드센스 */}
      <AdSense slot="3344551122" />

      {/* 2. 교통상황 핵심 조회 채널 소개 */}
      <section className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
          실시간 고속도로 상황 확인 채널 TOP 5
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          <div className="space-y-2 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-[15px]">
              <span className="bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-mono">1</span>
              로드플러스 (한국도로공사)
            </h3>
            <p className="text-xs md:text-sm text-slate-500">
              한국도로공사가 직접 운영하는 공식 사이트(<a href="http://www.roadplus.co.kr" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">www.roadplus.co.kr</a>)입니다. 
              전국 고속도로의 현시간 소통 상황을 반영한 종합 교통지도, 구간별 실시간 CCTV 영상, 교통 속보 및 예보 방송을 원클릭으로 제공합니다.
            </p>
          </div>

          <div className="space-y-2 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-[15px]">
              <span className="bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-mono">2</span>
              국가교통정보센터 (ITS)
            </h3>
            <p className="text-xs md:text-sm text-slate-500">
              국토교통부가 직접 구축하여 운영하는 공공 포털(<a href="http://www.its.go.kr" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">www.its.go.kr</a>)입니다. 
              고속도로뿐만 아니라 국도의 실시간 평균 주행 속도 정보와 전국 노면 상황 CCTV 영상을 무료로 광범위하게 수집할 수 있습니다.
            </p>
          </div>

          <div className="space-y-2 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-[15px]">
              <span className="bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-mono">3</span>
              고속도로교통정보 앱
            </h3>
            <p className="text-xs md:text-sm text-slate-500">
              한국도로공사 공식 모바일 어플리케이션입니다. 스마트폰 화면에서 노선별 실시간 지도, 돌발 사고 현황, 공사 통제 구간 및 졸음쉼터/임시주유소/충전소 위치 정보를 편리하게 제공합니다.
            </p>
          </div>

          <div className="space-y-2 border border-slate-100 rounded-xl p-4 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-[15px]">
              <span className="bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-mono">4</span>
              네이버 및 카카오 지도
            </h3>
            <p className="text-xs md:text-sm text-slate-500">
              국내 대표 지도 플랫폼의 레이어 필터에서 &apos;CCTV&apos; 및 &apos;교통상황&apos;을 활성화하면, 노선 위에 초록/노랑/빨강 색상으로 직관적인 주행 평속 정체 현황을 관측하고 주요 교차로 영상을 즉시 팝업해 볼 수 있습니다.
            </p>
          </div>

          <div className="space-y-2 border border-slate-100 rounded-xl p-4 bg-slate-50/50 md:col-span-2">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-[15px]">
              <span className="bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-mono">5</span>
              도로공사 콜센터 (1588-2504)
            </h3>
            <p className="text-xs md:text-sm text-slate-500">
              인터넷이나 스마트폰 조작이 어려운 주행 환경에서는 도로공사 대표 번호로 즉시 전화해 상담원을 통해 주요 체증 노선의 소통 상황과 정체 시 우회할 국도 경로를 간편하게 음성 안내를 받을 수 있습니다.
            </p>
          </div>

        </div>
      </section>

      {/* 3. 명절 연휴 정체 예상 팁 */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
          명절 · 휴가 연휴 고속도로 정체 예상 시간대
        </h2>
        <div className="bg-slate-50 border border-slate-150 rounded-xl p-5 md:p-6 text-slate-650 text-xs md:text-sm space-y-3">
          <p>
            설날이나 추석 명절 연휴 및 여름철 극성수기 휴가철에는 전국 도로 통행량이 평소 대비 2배 이상 급증하며 특정 시간대에 강한 정체 현상이 누적됩니다.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600">
            <li><span className="font-bold text-slate-700">귀성 방향(지방행):</span> 연휴 전날 오후 15시 ~ 연휴 첫째 날 오전 11시에 고질적인 정체 피크를 이룹니다.</li>
            <li><span className="font-bold text-slate-700">귀경 방향(서울행):</span> 연휴 마지막 날 오후 13시 ~ 21시 시간대에 본선 혼잡이 최고치에 달합니다.</li>
            <li><span className="font-bold text-slate-700">정체 회피 요령:</span> 정체를 피해 안전하게 통과하려면 정체가 다소 풀리는 밤 23시 ~ 새벽 5시 심야 시간대에 이동하는 것이 효과적입니다.</li>
          </ul>
          <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-200">
            * 명절 정부 특별교통대책 기간에는 전국 재정 고속도로 및 민자 고속도로의 통행요금이 면제되므로, 출발 전 면제 적용 시간 범위를 꼭 확인하세요.
          </p>
        </div>
      </section>

      {/* 4. 노선별 실시간 교통상황 (고속도로 목록) */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
          주요 노선별 실시간 교통상황 &amp; CCTV 확인
        </h2>
        <p className="text-slate-500 text-xs md:text-sm">
          아래 고속도로 노선 이름을 클릭하면, 해당 도로의 상세 구간별 실시간 주행 평속 데이터, 실시간 CCTV 재생기, 그리고 주행 중 쉬어갈 수 있는 상행선/하행선 방향 휴게소의 목록을 확인하실 수 있습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {highwayTrafficLinks.map((link) => (
            <a
              key={link.slug}
              href={`/traffic/${link.slug}`}
              className="group block bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors text-sm md:text-[15px]">
                    {link.name} 실시간 상황판
                  </h3>
                  <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                    {link.detail} &middot; 휴게소 {link.restAreaCount}곳
                  </span>
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-all whitespace-nowrap">
                  CCTV 보기 &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 5. 자주 묻는 질문 FAQ */}
      <section className="space-y-4 border-t border-slate-200 pt-8">
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
          자주 묻는 질문 FAQ
        </h2>
        
        <div className="space-y-4 divide-y divide-slate-100">
          
          <div className="pt-4 first:pt-0">
            <h4 className="font-bold text-slate-800 text-sm md:text-[15px]">Q1. 전국 고속도로 CCTV 영상은 완전 무료인가요?</h4>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              네, 한국도로공사 로드플러스나 국토교통부 국가교통정보센터(ITS), 네이버/카카오 지도에서 송출하는 고속도로 CCTV 라이브 화면은 공공 개방형 API 피드이므로 일반 이용자 누구나 별도의 회원가입이나 결제 없이 100% 무료로 스트리밍 시청할 수 있습니다.
            </p>
          </div>

          <div className="pt-4">
            <h4 className="font-bold text-slate-800 text-sm md:text-[15px]">Q2. 명절 연휴 기간 통행료가 면제되는 정확한 시간 기준은 어떻게 되나요?</h4>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              일반적으로 명절 특별교통대책 기간 중 연휴 첫날 00시부터 연휴 마지막 날 24시 사이에 고속도로 요금소(톨게이트)에 하이패스 또는 일반 통과선으로 진입하거나 진출하기만 하면 통행료 면제가 적용됩니다. 해당 기간 전후의 시간대라도 진출입이 한 번이라도 연휴 범위 내에 걸치면 혜택 대상이 됩니다.
            </p>
          </div>

          <div className="pt-4">
            <h4 className="font-bold text-slate-800 text-sm md:text-[15px]">Q3. 고속도로 정체 시 국도로 우회하는 결정적인 기준은 무엇인가요?</h4>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              고속도로 본선의 주행 평균 시속이 30km/h 미만으로 장기간 떨어지고, 모바일 지도의 우회 예측 알고리즘 상 인접한 국도를 탈 때의 예상 시간이 최소 15분 이상 빠르다고 진단될 경우에 탈출 결정을 내리는 것이 이롭습니다. 본선에 사고 발생 소보가 떴을 때도 나들목 탈출 후 일반 도로로 우회하시는 편이 유리합니다.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
