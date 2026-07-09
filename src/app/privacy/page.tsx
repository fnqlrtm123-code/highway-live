import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "로드플러스 고속도로 정보 포털의 개인정보처리방침을 안내합니다. 본 사이트는 별도의 개인정보를 직접 수집하지 않습니다.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8 bg-white text-slate-800">
      <h1 className="text-3xl font-black text-slate-900 mb-8 pb-4 border-b border-slate-200">
        개인정보처리방침
      </h1>
      
      <p className="text-xs text-slate-400 mb-8 font-medium">시행일: 2026년 7월 9일</p>

      <div className="flex flex-col gap-8 text-sm sm:text-base leading-relaxed font-sans">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. 개인정보의 수집 및 이용 목적</h2>
          <p className="text-slate-650">
            로드플러스(이하 &quot;사이트&quot;)는 다음의 목적으로 정보를 이용합니다.
          </p>
          <ul className="list-disc pl-5 mt-2 text-slate-650 flex flex-col gap-1">
            <li>서비스 이용 통계 분석 및 서비스 환경 개선</li>
            <li>구글 애드센스를 통한 맞춤형 광고 제공</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. 수집하는 개인정보 항목</h2>
          <p className="text-slate-650">
            본 사이트는 회원가입 기능이 없으며, 이름, 연락처, 이메일 등의 <strong>어떠한 개인정보도 직접 수집하거나 요구하지 않습니다.</strong> 다만, 웹사이트 서비스 제공을 위해 아래와 같은 정보가 자동으로 생성 및 수집될 수 있습니다.
          </p>
          <ul className="list-disc pl-5 mt-2 text-slate-650 flex flex-col gap-1">
            <li>방문 일시, 페이지 조회(PV) 기록 및 체류 시간</li>
            <li>기기 정보 (브라우저 종류, 운영체제 버전)</li>
            <li>Google Analytics(GA4)를 통한 비식별 이용 통계 정보</li>
            <li>Google AdSense 광고 게재를 위한 쿠키(Cookie) 정보</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. 쿠키(Cookie)의 사용 및 관리</h2>
          <p className="text-slate-650">
            본 사이트는 이용자에게 최적의 광고 및 분석 환경을 제공하기 위해 쿠키를 활용합니다.
          </p>
          <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex flex-col gap-4">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Google Analytics (GA4)</h3>
              <p className="text-sm text-slate-650">
                사이트 이용 통계를 분석하기 위해 사용합니다. 분석 데이터는 사용자를 식별할 수 없는 통계 형태로만 보관됩니다. 자세한 내용은 구글의 정책을 참고하십시오. (구글 개인정보보호정책: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">링크</a>)
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Google AdSense</h3>
              <p className="text-sm text-slate-650">
                이용자의 관심사에 기반한 맞춤형 광고를 제공하기 위해 쿠키를 사용합니다. 쿠키 거부 시에도 광고는 노출되나 맞춤형 광고가 비활성화됩니다. (구글 광고 설정: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">링크</a>)
              </p>
            </div>
          </div>
          <h3 className="font-bold text-slate-955 mt-4 mb-2">쿠키 수집 거부 방법</h3>
          <p className="text-slate-650">
            이용자는 언제든지 웹 브라우저 설정을 통해 쿠키 수집을 전면 차단하거나 삭제할 수 있습니다. 
            (Chrome 기준: 설정 &gt; 개인정보 보호 및 보안 &gt; 인터넷 사용 기록 삭제 또는 쿠키 차단 설정)
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. 개인정보의 보유 및 이용 기간</h2>
          <p className="text-slate-650">
            자동으로 수집되는 로그성 비식별 정보는 목적 달성 후 지체 없이 파기합니다. Google Analytics 및 AdSense를 통해 수집된 데이터의 보관 기간은 구글사의 관리 기준 및 데이터 보유 정책을 따릅니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. 개인정보의 제3자 제공 및 위탁</h2>
          <p className="text-slate-650">
            본 사이트는 원칙적으로 개인정보를 수집하지 않으므로 제3자에게 제공할 개인정보를 보유하고 있지 않습니다. 다만, 구글 사의 로그 수집 모듈(GA4, AdSense)을 통한 비식별 분석 정보에 한해 기술적으로 위탁 처리됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">6. 데이터 출처에 관한 안내</h2>
          <p className="text-slate-650">
            본 사이트에서 가공하여 안내해 드리는 고속도로 교통정보, CCTV 영상, 휴게소 맛집 메뉴 및 주유소 가격 정보 등은 아래의 공공기관 오픈 API 및 웹 검색 엔진 공공 데이터를 기반으로 편집되었습니다.
          </p>
          <ul className="list-disc pl-5 mt-2 text-slate-650 flex flex-col gap-1">
            <li>국토교통부, 한국도로공사 및 오픈 공공데이터포털 (<a href="https://www.data.go.kr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">data.go.kr</a>)</li>
            <li>본 정보는 공공 데이터 특성상 업데이트 시점에 따라 실제 현장 상황과 간혹 차이가 발생할 수 있으며, 관련하여 정확한 정보 및 변경 사항은 도로교통공사 공식 앱 또는 안내센터를 통해 크로스 체크하시는 것을 권장합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">7. 문의처</h2>
          <p className="text-slate-650">
            개인정보처리방침 또는 웹사이트 이용 관련 문의사항은 아래 이메일로 연락해 주시면 성실히 답변해 드리겠습니다.
          </p>
          <p className="mt-2 text-slate-900 font-semibold">
            이메일 문의: <a href="mailto:seoseungjae01@gmail.com" className="text-blue-600 underline">seoseungjae01@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
