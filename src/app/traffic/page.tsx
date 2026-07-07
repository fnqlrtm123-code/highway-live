'use client';

import { useState, useMemo } from 'react';
import AdSense from '@/components/AdSense';
import CctvPlayer from '@/components/CctvPlayer';
import { getRoadList } from '@/lib/roadData';

type MainTab = 'major' | 'highway' | 'urban' | 'national' | 'bridge';

export default function TrafficPage() {
  const [activeTab, setActiveTab] = useState<MainTab>('major');
  const [searchTerm, setSearchTerm] = useState('');

  // 모든 도로 목록 불러오기
  const roadsList = useMemo(() => {
    return getRoadList();
  }, []);

  const allMajor = useMemo(() => {
    const majorRoadNames = [
      "영동고속도로", "경부고속도로", "서해안고속도로", "중부내륙고속도로", "강변북로",
      "올림픽대로", "중부고속도로", "동부간선도로", "수도권제1순환고속도로", "중앙고속도로(부산-대구)"
    ];
    return majorRoadNames.map(name => roadsList.find(r => r.name === name)).filter(Boolean);
  }, [roadsList]);

  const allHighways = useMemo(() => roadsList.filter(r => r.type === 'highway'), [roadsList]);
  const allUrban = useMemo(() => roadsList.filter(r => r.type === 'urban'), [roadsList]);
  const allNational = useMemo(() => roadsList.filter(r => r.type === 'national'), [roadsList]);
  const allBridge = useMemo(() => roadsList.filter(r => r.type === 'bridge'), [roadsList]);

  // 노선 유형별 데이터 가상화 연동
  const currentRoadsList = useMemo(() => {
    let list: any[] = [];
    if (activeTab === 'major') {
      list = allMajor;
    } else if (activeTab === 'highway') {
      list = allHighways;
    } else if (activeTab === 'urban') {
      list = allUrban;
    } else if (activeTab === 'national') {
      list = allNational;
    } else if (activeTab === 'bridge') {
      list = allBridge;
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      list = list.filter(r => 
        r.name.toLowerCase().includes(term) || 
        r.detail.toLowerCase().includes(term)
      );
    }

    return list;
  }, [activeTab, allMajor, allHighways, allUrban, allNational, allBridge, searchTerm]);

  return (
    <main className="flex-grow bg-slate-50 pb-24">
      {/* 1. 상단 허브 타이틀 */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-[1240px] px-4">
          <h1 className="text-2xl md:text-3xl font-black mt-1.5">실시간 전국 교통정보 상황판</h1>
          <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
            전국 고속도로, 도시고속화도로, 일반 국도 및 주요 대교의 실시간 소통 속도와 세부 상황을 한곳에 통합 제공합니다.
          </p>
        </div>
      </section>

      {/* 2. 광고 영역 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>

      {/* 3. 허브 위젯 메인 프레임 */}
      <section className="max-w-[1240px] mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 gap-8 items-start">
          
          {/* 카테고리 탭 및 도로 리스트 */}
          <div className="w-full bg-white border border-slate-200 overflow-hidden flex flex-col min-h-[650px]">
            
            {/* 카테고리 탭 */}
            <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50">
              <button 
                onClick={() => { setActiveTab('major'); setSearchTerm(''); }}
                className={`py-3.5 text-xs font-black border-r border-slate-200 transition-colors ${activeTab === 'major' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                주요도로 10
              </button>
              <button 
                onClick={() => { setActiveTab('highway'); setSearchTerm(''); }}
                className={`py-3.5 text-xs font-black border-r border-slate-200 transition-colors ${activeTab === 'highway' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                고속도로
              </button>
              <button 
                onClick={() => { setActiveTab('urban'); setSearchTerm(''); }}
                className={`py-3.5 text-xs font-black border-r border-slate-200 transition-colors ${activeTab === 'urban' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                도시고속
              </button>
              <button 
                onClick={() => { setActiveTab('national'); setSearchTerm(''); }}
                className={`py-3.5 text-xs font-black border-r border-slate-200 transition-colors ${activeTab === 'national' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                국도
              </button>
              <button 
                onClick={() => { setActiveTab('bridge'); setSearchTerm(''); }}
                className={`py-3.5 text-xs font-black transition-colors ${activeTab === 'bridge' ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                대교
              </button>
            </div>

            {/* 검색 바 */}
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="노선명 또는 지역명으로 검색 (예: 경부, 올림픽, 서울)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 bg-white focus:outline-none focus:border-blue-600 font-bold"
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="text-[11px] font-bold text-slate-400 hover:text-slate-650 bg-slate-150 px-2.5 py-1.5"
                >
                  초기화
                </button>
              )}
            </div>

            {/* 소통 리스트 */}
            <div className="p-4 flex-grow overflow-y-auto max-h-[550px]">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentRoadsList.map((road, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 border flex flex-col justify-between gap-4 bg-white border-slate-100 hover:border-slate-350 hover:shadow-xs transition-all"
                  >
                    <div className="space-y-1 min-w-0">
                      <a 
                        href={`/traffic/${road.slug}`}
                        className="text-[13.5px] font-black text-slate-800 truncate block hover:text-blue-600 hover:underline"
                      >
                        {road.name}
                      </a>
                      <span className="text-[11.5px] text-slate-400 block font-medium leading-tight truncate">{road.detail}</span>
                    </div>

                    <div className="pt-2 border-t border-slate-100/60">
                      <a 
                        href={`/traffic/${road.slug}`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] py-2 transition-colors shadow-2xs block text-center"
                      >
                        상세 상황 조회
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {currentRoadsList.length === 0 && (
                <p className="text-center text-slate-400 text-xs py-12 font-bold">검색 결과에 맞는 도로 정보가 없습니다.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 하단 광고 영역 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>
    </main>
  );
}
