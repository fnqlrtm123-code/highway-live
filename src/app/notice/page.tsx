'use client';

import { useState } from 'react';
import AdSense from '@/components/AdSense';

interface FAQItem {
  question: string;
  answer: string;
}

export default function NoticePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const notices = [
    { id: 1, title: '추석 명절 고속도로 통행료 면제 시행 안내', date: '2026-09-10', category: '공지' },
    { id: 2, title: '알뜰주유소 및 ex-oil 실시간 가격 비교 데이터 연동 점검 완료', date: '2026-07-05', category: '점검' },
    { id: 3, title: '고속도로 휴게소 전기차 충전기 현황 및 수유실 보유 데이터 최신화 안내', date: '2026-06-25', category: '업데이트' },
    { id: 4, title: '스마트폰 고속도로 실시간 CCTV 상황판 모바일 뷰 최적화', date: '2026-06-12', category: '기능개선' }
  ];

  const faqs: FAQItem[] = [
    {
      question: '실시간 유가 및 주유소 최저가 정보는 매번 최신화되나요?',
      answer: '네, 한국석유공사 오피넷(Opinet) 및 한국도로공사 주유소 유가 실시간 API를 연동하여 전국 고속도로 주유소(알뜰주유소 및 브랜드 주유소 포함)의 휘발유, 경유, LPG 판매 가격을 수집 후 자동으로 데이터베이스를 재빌드하고 있습니다.'
    },
    {
      question: 'CCTV 영상이 재생이 되지 않거나 멈추는 현상이 있습니다. 어떻게 해야 하나요?',
      answer: '고속도로 CCTV 화면은 국토교통부 표준 ITS API 규격에 맞춰 영상 스트림을 직접 연동하고 있습니다. 기상 상황 및 현장 통신 점검 상태에 따라 일시적으로 연결 오류가 발생할 수 있으며, 이 경우 약 1~2분 뒤 다시 시도해 주시기 바랍니다.'
    },
    {
      question: '휴게소의 맛집 메뉴 중 EX-FOOD란 무엇인가요?',
      answer: 'EX-FOOD는 한국도로공사에서 전국 휴게소의 대표 메뉴 중 전문가의 맛 평가와 고객 품평을 거쳐 공식 공인한 최고 수준의 시그니처 메뉴입니다. 각 휴게소 상세 페이지에서 인증 마크와 가격을 함께 확인하실 수 있습니다.'
    },
    {
      question: '전기차(EV) 충전소의 사용 현황 및 충전 기수가 실제와 같은가요?',
      answer: '전국 휴게소의 전기차 급속/완속 충전기 대수는 공공데이터 포털의 충전기 데이터 정보를 반영해 수집되었습니다. 향후 실시간 급속 충전기 사용 가능 여부를 보여주는 기능도 업데이트할 예정입니다.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-grow bg-slate-50 pb-20">
      {/* 타이틀 섹션 */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-[1240px] mx-auto px-4">
          <span className="text-[10px] font-black text-blue-400 font-mono tracking-widest block uppercase">Customer Center</span>
          <h1 className="text-2xl font-black mt-1">공지사항 및 자주 묻는 질문(FAQ)</h1>
          <p className="text-slate-400 text-xs mt-2 max-w-xl leading-relaxed">
            로드플러스 라이브 서비스의 신규 기능 업데이트 소식과 공지사항, 그리고 실시간 고속도로 정보 조회 시 자주 문의하시는 질문들을 빠르게 답변해 드립니다.
          </p>
        </div>
      </section>

      {/* 본문 영역 */}
      <section className="max-w-[1240px] mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 좌측: 공지사항 리스트 */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-5 shadow-2xs space-y-4">
          <div className="flex justify-between items-center border-b pb-3 border-slate-100">
            <h3 className="text-sm font-black text-slate-800">📢 최근 서비스 공지사항</h3>
            <span className="text-[10px] text-slate-400 font-bold">최근 업데이트 순</span>
          </div>

          <div className="divide-y divide-slate-100">
            {notices.map((n) => (
              <div key={n.id} className="py-3 flex justify-between items-center text-xs gap-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black ${
                    n.category === '공지' ? 'bg-red-50 text-red-600' :
                    n.category === '점검' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {n.category}
                  </span>
                  <a href="#" className="font-bold text-slate-800 hover:text-blue-600 hover:underline truncate max-w-[280px]">
                    {n.title}
                  </a>
                </div>
                <span className="text-slate-400 font-mono shrink-0">{n.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 우측: FAQ 아코디언 */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-5 shadow-2xs space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-black text-slate-800">❓ 자주 묻는 질문 (FAQ)</h3>
            <input 
              type="text" 
              placeholder="궁금한 단어나 질문을 검색해 보세요."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:border-blue-600 font-medium"
            />
          </div>

          <div className="space-y-2">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                    className="w-full p-4 text-left text-xs font-black text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-400">{openFaqIdx === idx ? '▲' : '▼'}</span>
                  </button>
                  {openFaqIdx === idx && (
                    <div className="p-4 bg-slate-50 border-t border-slate-100 text-[11px] leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center py-6 text-xs text-slate-400 font-bold">일치하는 자주 묻는 질문이 없습니다.</p>
            )}
          </div>
        </div>

      </section>

      {/* 애드센스 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>
    </main>
  );
}
