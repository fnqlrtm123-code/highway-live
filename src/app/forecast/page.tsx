'use client';

import { useState } from 'react';
import { travelTimes } from '@/lib/data';
import AdSense from '@/components/AdSense';

export default function TrafficForecast() {
  const [selectedDay, setSelectedDay] = useState<'friday' | 'saturday' | 'sunday'>('saturday');
  const [selectedTime, setSelectedTime] = useState<number>(10);

  // 시간대별 정체도 가상 예측 로직 (원활, 서행, 정체)
  const getCongestionStatus = (hour: number, day: 'friday' | 'saturday' | 'sunday') => {
    if (day === 'saturday') {
      if (hour >= 8 && hour <= 12) return { text: '최대 혼잡 (정체)', color: 'bg-red-500', textColor: 'text-red-500' };
      if (hour >= 13 && hour <= 16) return { text: '다소 정체 (서행)', color: 'bg-amber-500', textColor: 'text-amber-500' };
      return { text: '원활', color: 'bg-emerald-500', textColor: 'text-emerald-500' };
    } else if (day === 'sunday') {
      if (hour >= 14 && hour <= 19) return { text: '귀경길 최대 정체', color: 'bg-red-500', textColor: 'text-red-500' };
      if (hour >= 11 && hour <= 13) return { text: '다소 서행', color: 'bg-amber-500', textColor: 'text-amber-500' };
      return { text: '원활', color: 'bg-emerald-500', textColor: 'text-emerald-500' };
    } else {
      // 금요일
      if (hour >= 17 && hour <= 20) return { text: '퇴근 및 귀성 정체', color: 'bg-red-500', textColor: 'text-red-500' };
      return { text: '대체로 원활', color: 'bg-emerald-500', textColor: 'text-emerald-500' };
    }
  };

  const currentStatus = getCongestionStatus(selectedTime, selectedDay);

  return (
    <main className="flex-grow bg-slate-50 pb-20">
      {/* 타이틀 섹션 */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-[1240px] mx-auto px-4">
          <h1 className="text-2xl font-black mt-1">고속도로 실시간 교통예보 및 소요시간 예측</h1>
          <p className="text-slate-400 text-xs mt-2 max-w-xl leading-relaxed">
            주말 및 공휴일, 연휴 기간 동안의 주요 도시 간 교통 정체 예상 시간과 소요 시간을 미리 확인하고, 최적의 출발 시간대를 시뮬레이션해 보세요.
          </p>
        </div>
      </section>

      {/* 실시간 시뮬레이션 및 속보 예보 */}
      <section className="max-w-[1240px] mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* 좌측: 혼잡 시뮬레이션 컨트롤러 */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-6">
          <div>
            <h3 className="text-sm font-black text-slate-800">요일 및 출발시간 대별 정체 예측</h3>
          </div>

          {/* 요일 토글 */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
            <button 
              onClick={() => setSelectedDay('friday')}
              className={`py-2 rounded-lg text-xs font-black transition-all ${selectedDay === 'friday' ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
            >
              금요일 (귀성시작)
            </button>
            <button 
              onClick={() => setSelectedDay('saturday')}
              className={`py-2 rounded-lg text-xs font-black transition-all ${selectedDay === 'saturday' ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
            >
              토요일 (주말혼잡)
            </button>
            <button 
              onClick={() => setSelectedDay('sunday')}
              className={`py-2 rounded-lg text-xs font-black transition-all ${selectedDay === 'sunday' ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-500 hover:text-slate-800'}`}
            >
              일요일 (귀경지체)
            </button>
          </div>

          {/* 시간대 슬라이더 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>출발 예정 시각</span>
              <span className="font-mono text-blue-600 font-black">{selectedTime}시</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="23" 
              value={selectedTime} 
              onChange={(e) => setSelectedTime(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[9px] font-bold text-slate-400 font-mono">
              <span>오전 00:00</span>
              <span>오전 12:00</span>
              <span>오후 23:00</span>
            </div>
          </div>

          {/* 가상 정체 피드백 카드 */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-center">
            <span className="text-[10px] font-bold text-slate-400">정체 예측 리포트</span>
            <div className="flex justify-center items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${currentStatus.color}`}></span>
              <span className={`text-base font-black ${currentStatus.textColor}`}>{currentStatus.text}</span>
            </div>
            <p className="text-[10.5px] text-slate-500 leading-relaxed pt-1 border-t border-slate-100 mt-2">
              {selectedDay === 'saturday' ? '토요일 오전 시간대(08시~12시)는 나들이 및 여행 차량 집중으로 인해 하행선 방향 모든 구간의 서행과 교통 체증이 매우 빈번하게 발생합니다.' : 
               selectedDay === 'sunday' ? '일요일 오후 시간대(14시~19시)는 주요 관광지에서 서울 방향(상행선)으로 복귀하는 차량 집중으로 극심한 정체가 예상되오니 야간 출발을 권장합니다.' : 
               '금요일 오후 퇴근 시간과 겹치는 17시~20시 사이는 경기/인천권 우회 구간 및 고속도로 진출입 램프 구간에서 병목 현상이 발생합니다.'}
            </p>
          </div>
        </div>

        {/* 우측: 주요 도시 소요시간 정보 표 */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-4">
          <div className="flex justify-between items-center border-b pb-3 border-slate-100">
            <div>
              <h3 className="text-sm font-black text-slate-800">주요 도시 간 기준 소요시간 대시보드</h3>
            </div>
            <span className="text-[10px] font-bold text-slate-400">실시간 데이터 갱신 적용</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {travelTimes.map((t, idx) => {
              // 출발 시간 시뮬레이션 적용된 시간 계산
              let speedFactor = 1.0;
              if (selectedDay === 'saturday' && selectedTime >= 8 && selectedTime <= 12) speedFactor = 1.45;
              if (selectedDay === 'sunday' && selectedTime >= 14 && selectedTime <= 19) speedFactor = 1.55;
              const calculatedTime = Math.floor(t.currentTimeMin * speedFactor);

              return (
                <div key={idx} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="text-xs font-black text-slate-800">{t.from} &rarr; {t.to}</span>
                    <span className="block text-[10px] text-slate-400 font-mono mt-0.5">{t.highwayName} &middot; {t.distanceKm}km</span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-black text-slate-800 font-mono">{Math.floor(calculatedTime / 60)}시간 {calculatedTime % 60}분</span>
                    <span className="block text-[9px] text-slate-400 font-mono mt-0.5">평소 대비 {calculatedTime - t.normalTimeMin}분 추가 지연</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 명절 귀성길 특별 팁 */}
          <div className="bg-red-50 border border-red-100 p-4 rounded-xl space-y-2 mt-4">
            <span className="text-[10px] font-black text-red-700 block">명절/연휴 귀성 최적 시간대 팁</span>
            <p className="text-[11px] text-red-800 leading-relaxed">
              추석 및 설 명절 기간 동안의 최대 정체 시점은 명절 전날 오전과 당일 오후입니다. 혼잡 시간대를 피해 명절 전날 오후 8시 이후 또는 당일 새벽 5시 이전에 출발하시면 정체 시간을 평균 1.5시간 이상 줄일 수 있습니다.
            </p>
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
