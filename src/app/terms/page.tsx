import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 로드플러스",
  description: "로드플러스 고속도로 정보 포털의 이용약관 및 서비스 제공 범위를 안내합니다. 본 사이트는 참고용 교통 가이드 포털입니다.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8 bg-white text-slate-800">
      <h1 className="text-3xl font-black text-slate-900 mb-8 pb-4 border-b border-slate-200">
        이용약관
      </h1>
      
      <p className="text-xs text-slate-400 mb-8 font-medium">시행일: 2026년 7월 9일</p>

      <div className="flex flex-col gap-8 text-sm sm:text-base leading-relaxed font-sans">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">제1조 (목적)</h2>
          <p className="text-slate-650">
            본 약관은 로드플러스 고속도로 정보 포털(이하 &quot;사이트&quot;)이 제공하는 정보 제공 서비스의 이용 조건 및 면책 사항 등에 관한 기본 내용을 규정하는 것을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">제2조 (서비스의 내용)</h2>
          <p className="text-slate-650">
            사이트는 이용자에게 어떠한 유료 가입 절차나 요금 청구 없이 다음의 고속도로 교통 및 휴게소 관련 편의 정보를 완전히 무료로 제공합니다.
          </p>
          <ul className="list-disc pl-5 mt-2 text-slate-650 flex flex-col gap-1">
            <li>전국 고속도로 실시간 CCTV 조회 및 구간별 소통 정보</li>
            <li>노선별 휴게소 위치, 맛집 대표 음식 메뉴 가격</li>
            <li>알뜰주유소 실시간 최저가 정보 및 전기차/수소차 충전 현황</li>
            <li>도시 간 예상 통행요금 조회</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">제3조 (정보의 한계 및 면책 사항)</h2>
          <ol className="list-decimal pl-5 mt-2 text-slate-650 flex flex-col gap-3">
            <li>
              <strong>데이터의 정확성:</strong> 사이트가 제공하는 CCTV 영상, 실시간 유가 정보, 휴게소 편의시설 현황 및 통행 요금 등은 공공 API 데이터 갱신 시점에 따라 실제 도로 현장의 현황과 일치하지 않을 수 있습니다. 본 사이트는 데이터의 즉각적인 정확성, 신뢰성, 완전성을 보증하지 않습니다.
            </li>
            <li>
              <strong>책임의 제한:</strong> 이용자가 본 사이트에 수록된 정보 또는 가격 기재 내용을 신뢰하고 최종 의사결정을 수행함으로써 발생할 수 있는 직·간접적 손해(경유지 오판, 가격 오차, 실시간 충전기 미인식 등)에 대해 사이트 운영자는 일체의 책임을 부담하지 않습니다. 실제 도로 이용 시에는 내비게이션 및 현장 안내 표지판을 적극 참고하시기 바랍니다.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">제4조 (지적재산권 및 저작권)</h2>
          <ol className="list-decimal pl-5 mt-2 text-slate-650 flex flex-col gap-2">
            <li>
              본 사이트의 고유 레이아웃, 디자인 구성, 안내 본문 텍스트에 대한 저작권은 사이트 운영자에게 귀속됩니다. 사이트에서 제공되는 이미지 및 도로공사 관련 공식 로고, 일부 브랜드의 고유 정보는 각 권리 보유 회사에 소유권이 있습니다.
            </li>
            <li>
              운영자의 사전 승인 없이 사이트 내의 텍스트나 고유 레이아웃을 무단 크롤링, 상업적 배포 및 변형 가공하는 것을 금지합니다.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">제5조 (광고 서비스 이용)</h2>
          <p className="text-slate-650">
            사이트는 이용자에게 무료 서비스를 영속적으로 제공하기 위해 Google AdSense를 이용한 스폰서 광고를 지면 곳곳에 배치할 수 있습니다. 노출되는 광고 상품 및 링크 연결에 대한 선택의 주체는 이용자 본인이며, 광고 링크를 통해 외부 사이트로 이동 시 해당 사이트의 서비스 정책을 적용받습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">제6조 (약관의 변경)</h2>
          <p className="text-slate-650">
            본 약관은 서비스 제공 정책이나 법률의 개정에 맞춰 수시로 개정될 수 있습니다. 변경 사항은 본 페이지의 시행일 업데이트 및 게재를 통해 공지하며, 공지와 동시에 효력이 발생합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">제7조 (문의 사항)</h2>
          <p className="text-slate-650">
            약관이나 정보 출처 오류에 대한 신고는 아래 이메일 주소를 활용해 접수해 주시기 바랍니다.
          </p>
          <p className="mt-2 text-slate-900 font-semibold">
            이메일 문의: <a href="mailto:seoseungjae01@gmail.com" className="text-blue-600 underline">seoseungjae01@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
