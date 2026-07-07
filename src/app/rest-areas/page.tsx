import { serviceAreas, highways } from '@/lib/data';
import AdSense from '@/components/AdSense';

export const metadata = {
  title: '전국 고속도로 휴게소 맛집 & 편의시설 목록',
  description: '전국 고속도로 휴게소의 대표 음식(EX-FOOD), 실시간 주유소 기름값, 전기차 충전소 설치 대수 및 수유실/샤워실 등 편의시설 유무를 한눈에 비교 검색하세요.',
};

export default function RestAreasPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 타이틀 및 헤더 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          전국 고속도로 휴게소 안내
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          전국 고속도로 휴게소의 먹거리 맛집 정보, 실시간 휘발유/경유/LPG 최저가 비교 및 전기차 급속 충전 현황을 한눈에 제공합니다.
        </p>
      </div>

      {/* 애드센스 */}
      <AdSense slot="4455667788" />

      {/* 노선별 휴게소 찾기 빠른 링크 */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 border-b pb-3 border-slate-200">노선별 휴게소 목록</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highways.map((h) => (
            <a 
              key={h.slug}
              href={`/traffic/${h.slug}`}
              className="p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-600 hover:shadow-xs transition-all block text-left"
            >
              <h3 className="text-base font-black text-slate-800">{h.name}</h3>
              <p className="text-xs text-slate-400 mt-1">휴게소 맛집 및 편의시설 조회</p>
            </a>
          ))}
        </div>
      </section>

      {/* 전체 휴게소 리스트 */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100">
          전국 휴게소 맛집 &middot; 편의시설 통합 목록
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceAreas.map((s) => (
            <div key={s.slug} className="p-5 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[17px] font-black text-slate-900">{s.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{s.highwayName} &middot; {s.directionName}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    s.direction === '상행' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                    s.direction === '하행' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {s.directionName}
                  </span>
                </div>

                {/* 대표 메뉴 정보 */}
                <div className="bg-white p-3.5 border border-slate-100 rounded-lg">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-400">대표 시그니처 메뉴</span>
                    <span className="text-[13.5px] font-mono font-black text-blue-600">{s.signatureMenu.price.toLocaleString()}원</span>
                  </div>
                  <p className="text-[13.5px] font-extrabold text-slate-800 mt-1">{s.signatureMenu.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{s.signatureMenu.description}</p>
                </div>
              </div>

              {/* 하단 편의시설 칩 및 상세정보 링크 */}
              <div className="flex justify-between items-center pt-2 border-t border-slate-100/50">
                <div className="flex flex-wrap gap-1 max-w-[200px]">
                  {s.facilities.slice(0, 3).map((f) => (
                    <span key={f} className="text-[9.5px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                      {f}
                    </span>
                  ))}
                  {s.facilities.length > 3 && (
                    <span className="text-[9.5px] font-bold text-slate-400">+ {s.facilities.length - 3}</span>
                  )}
                </div>
                <a 
                  href={`/rest-areas/${s.slug}`}
                  className="bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shrink-0"
                >
                  종합 상세 &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
