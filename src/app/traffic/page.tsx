import { getRoadList } from '@/lib/roadData';
import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';
import TrafficHubClient from '@/components/TrafficHubClient';

export const metadata: Metadata = {
  title: '전국 실시간 교통상황 확인 — 고속도로·도시고속·국도·대교 CCTV 정체구간',
  description: '경부고속도로, 영동고속도로, 서해안선 등 전국 주요 고속도로와 서울/경기 도시고속화도로, 전국 국도 및 주요 대교의 실시간 교통상황과 CCTV 모니터링, 우회도로 가이드를 실시간으로 안내합니다.',
};

export default function TrafficIndexPage() {
  const roadsList = getRoadList();

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-12 flex-grow space-y-12 text-slate-700 leading-relaxed text-xs md:text-sm font-sans">
      
      {/* 1. 타이틀 영역 */}
      <div className="space-y-3.5 max-w-4xl text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-650 px-3.5 py-1.5 rounded-full text-[11px] font-bold">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
          </span>
          전국 실시간 도로 상황 모니터링
        </div>
        <h1 className="text-2.5xl md:text-3.5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          전국 실시간 교통상황 확인 방법 (CCTV·정체구간·우회도로)
        </h1>
        <p className="text-slate-500 text-xs md:text-[13.5px] leading-relaxed max-w-3xl font-medium">
          대한민국 전국 주요 고속도로, 도시고속도로(간선도로), 국도 및 주요 한강/지방 대교의 실시간 교통 흐름을 분류별로 확인해 보세요. 
          각 노선을 선택하시면 실시간 CCTV 화면 스트리밍, 병목 정체 예상 구간 및 지체 시 빠른 국도 우회 경로 가이드를 제공합니다.
        </p>
      </div>

      {/* 애드센스 */}
      <AdSense slot="3344551122" />

      {/* 2. 교통상황 핵심 조회 채널 소개 */}
      <section className="space-y-6">
        <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block"></span>
          실시간 고속도로 상황 확인 채널 TOP 5
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-xs md:text-[13.5px]">
              <span className="bg-blue-650 text-white text-[10px] w-5 h-5 rounded-lg flex items-center justify-center font-bold">1</span>
              로드플러스 (한국도로공사)
            </h3>
            <p className="text-[12px] text-slate-550 leading-relaxed">
              한국도로공사가 직접 운영하는 공식 사이트(<a href="http://www.roadplus.co.kr" target="_blank" rel="noopener noreferrer" className="text-blue-650 font-semibold hover:underline">www.roadplus.co.kr</a>)입니다. 
              전국 고속도로의 현시간 소통 상황을 반영한 종합 교통지도, 구간별 실시간 CCTV 영상, 교통 속보 및 예보 방송을 제공합니다.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-xs md:text-[13.5px]">
              <span className="bg-blue-650 text-white text-[10px] w-5 h-5 rounded-lg flex items-center justify-center font-bold">2</span>
              국가교통정보센터 (ITS)
            </h3>
            <p className="text-[12px] text-slate-550 leading-relaxed">
              국토교통부가 직접 구축하여 운영하는 공공 포털(<a href="http://www.its.go.kr" target="_blank" rel="noopener noreferrer" className="text-blue-650 font-semibold hover:underline">www.its.go.kr</a>)입니다. 
              고속도로뿐만 아니라 국도의 실시간 평균 주행 속도 정보와 전국 노면 상황 CCTV 영상을 무료로 광범위하게 수집할 수 있습니다.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-xs md:text-[13.5px]">
              <span className="bg-blue-650 text-white text-[10px] w-5 h-5 rounded-lg flex items-center justify-center font-bold">3</span>
              고속도로교통정보 앱
            </h3>
            <p className="text-[12px] text-slate-550 leading-relaxed">
              한국도로공사 공식 모바일 어플리케이션입니다. 스마트폰 화면에서 노선별 실시간 지도, 돌발 사고 현황, 공사 통제 구간 및 졸음쉼터/임시주유소/충전소 위치 정보를 편리하게 제공합니다.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-xs md:text-[13.5px]">
              <span className="bg-blue-650 text-white text-[10px] w-5 h-5 rounded-lg flex items-center justify-center font-bold">4</span>
              네이버 및 카카오 지도
            </h3>
            <p className="text-[12px] text-slate-550 leading-relaxed">
              국내 대표 지도 플랫폼의 레이어 필터에서 &apos;CCTV&apos; 및 &apos;교통상황&apos;을 활성화하면, 노선 위에 초록/노랑/빨강 색상으로 직관적인 주행 평속 정체 현황을 관측하고 주요 교차로 영상을 즉시 팝업해 볼 수 있습니다.
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-xs md:text-[13.5px]">
              <span className="bg-blue-650 text-white text-[10px] w-5 h-5 rounded-lg flex items-center justify-center font-bold">5</span>
              도로공사 콜센터 (1588-2504)
            </h3>
            <p className="text-[12px] text-slate-550 leading-relaxed">
              인터넷이나 스마트폰 조작이 어려운 주행 환경에서는 도로공사 대표 번호로 즉시 전화해 상담원을 통해 주요 체증 노선의 소통 상황과 정체 시 우회할 국도 경로를 간편하게 음성 안내를 받을 수 있습니다.
            </p>
          </div>

        </div>
      </section>

      {/* 3. 명절 연휴 정체 예상 팁 */}
      <section className="space-y-4">
        <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block"></span>
          명절 &middot; 휴가 연휴 고속도로 정체 예상 시간대
        </h2>
        <div className="text-slate-650 space-y-3.5">
          <p className="text-[12.5px] leading-relaxed">
            설날이나 추석 명절 연휴 및 여름철 극성수기 휴가철에는 전국 도로 통행량이 평소 대비 2배 이상 급증하며 특정 시간대에 강한 정체 현상이 누적됩니다.
          </p>
          <ul className="space-y-2 text-[12px] text-slate-600">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
              <span><span className="font-bold text-slate-800">귀성 방향(지방행):</span> 연휴 전날 오후 15시 ~ 연휴 첫째 날 오전 11시에 고질적인 정체 피크를 이룹니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
              <span><span className="font-bold text-slate-800">귀경 방향(서울행):</span> 연휴 마지막 날 오후 13시 ~ 21시 시간대에 본선 혼잡이 최고치에 달합니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
              <span><span className="font-bold text-slate-800">정체 회피 요령:</span> 정체를 피해 안전하게 통과하려면 정체가 다소 풀리는 밤 23시 ~ 새벽 5시 심야 시간대에 이동하는 것이 효과적입니다.</span>
            </li>
          </ul>
          <p className="text-[10.5px] text-slate-400 pt-3.5 border-t border-slate-200/50">
            * 명절 정부 특별교통대책 기간에는 전국 재정 고속도로 및 민자 고속도로의 통행요금이 면제되므로, 출발 전 면제 적용 시간 범위를 꼭 확인하세요.
          </p>
        </div>
      </section>

      {/* 4. 실시간 노선 리스트 (카테고리 탭 분류 컴포넌트) */}
      <section className="space-y-4">
        <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block"></span>
          노선별 실시간 교통상황 &amp; CCTV 확인
        </h2>
        <p className="text-slate-550 text-xs md:text-[12.5px]">
          아래 리스트에서 원하시는 도로를 선택하시면, 해당 노선 전체 구간별 주행 평속 현황, 연동 CCTV 영상, 그리고 정체 발생 시 활용할 우회도로 가이드를 조회하실 수 있습니다.
        </p>

        {/* Client-side Tabs & Grid Component */}
        <TrafficHubClient roads={roadsList} />
      </section>

      {/* 5. 자주 묻는 질문 FAQ */}
      <section className="space-y-4 border-t border-slate-200/60 pt-8">
        <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1 h-3.5 bg-blue-600 rounded-full inline-block"></span>
          자주 묻는 질문 FAQ
        </h2>
        
        <div className="space-y-4 divide-y divide-slate-100">
          
          <div className="pt-4 first:pt-0">
            <h4 className="font-bold text-slate-850 text-xs md:text-[13.5px]">Q1. 전국 고속도로 CCTV 영상은 완전 무료인가요?</h4>
            <p className="text-slate-500 text-[12px] mt-1 leading-relaxed">
              네, 한국도로공사 로드플러스나 국토교통부 국가교통정보센터(ITS), 네이버/카카오 지도에서 송출하는 고속도로 CCTV 라이브 화면은 공공 개방형 API 피드이므로 일반 이용자 누구나 별도의 회원가입이나 결제 없이 100% 무료로 스트리밍 시청할 수 있습니다.
            </p>
          </div>

          <div className="pt-4">
            <h4 className="font-bold text-slate-855 text-xs md:text-[13.5px]">Q2. 명절 연휴 기간 통행료가 면제되는 정확한 시간 기준은 어떻게 되나요?</h4>
            <p className="text-slate-500 text-[12px] mt-1 leading-relaxed">
              일반적으로 명절 특별교통대책 기간 중 연휴 첫날 00시부터 연휴 마지막 날 24시 사이에 고속도로 요금소(톨게이트)에 하이패스 또는 일반 통과선으로 진입하거나 진출하기만 하면 통행료 면제가 적용됩니다. 해당 기간 전후의 시간대라도 진출입이 한 번이라도 연휴 범위 내에 걸치면 혜택 대상이 됩니다.
            </p>
          </div>

          <div className="pt-4">
            <h4 className="font-bold text-slate-855 text-xs md:text-[13.5px]">Q3. 고속도로 정체 시 국도로 우회하는 결정적인 기준은 무엇인가요?</h4>
            <p className="text-slate-500 text-[12px] mt-1 leading-relaxed">
              고속도로 본선의 주행 평균 시속이 30km/h 미만으로 장기간 떨어지고, 모바일 지도의 우회 예측 알고리즘 상 인접한 국도를 탈 때의 예상 시간이 최소 15분 이상 빠르다고 진단될 경우에 탈출 결정을 내리는 것이 이롭습니다. 본선에 사고 발생 속보가 떴을 때도 나들목 탈출 후 일반 도로로 우회하시는 편이 유리합니다.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
