'use client';

import { useState } from 'react';
import AdSense from '@/components/AdSense';

const precomputedTolls = [
  { from: '서울', to: '부산', dist: '396km', time: '4시간 15분', toll: '18,600원', path: '경부선 주행' },
  { from: '서울', to: '대전', dist: '142km', time: '1시간 50분', toll: '8,200원', path: '경부선 주행' },
  { from: '서울', to: '광주', dist: '292km', time: '3시간 20분', toll: '14,400원', path: '경부/호남선 주행' },
  { from: '서울', to: '강릉', dist: '220km', time: '2시간 45분', toll: '10,100원', path: '영동선 주행' }
];

export default function TollIndexPage() {
  const [vehicleType, setVehicleType] = useState('1'); // 1종: 승용차

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
      
      {/* 타이틀 헤더 */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">💵 전국 고속도로 통행료 요금 정보</h1>
        <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
          주요 대도시 간 통행 요금 계산 정보와 차종별(1종 승용차 ~ 5종 대형 화물차) 하이패스 할인 팁을 안내합니다.
        </p>
      </div>

      <AdSense slot="1122334455" />

      {/* 요금 계산 시뮬레이터 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-6">
        <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100">
          🚗 차종별 대표 통행 요금표
        </h2>
        
        {/* 차종 선택 라디오 버튼 */}
        <div className="flex gap-2 border-b border-slate-100 pb-4 overflow-x-auto text-xs font-bold text-slate-500">
          <button 
            onClick={() => setVehicleType('1')}
            className={`px-3 py-1.5 rounded-lg ${vehicleType === '1' ? 'bg-slate-900 text-white' : 'bg-slate-50 hover:bg-slate-100'}`}
          >
            1종 (승용차/소형승합)
          </button>
          <button 
            onClick={() => setVehicleType('2')}
            className={`px-3 py-1.5 rounded-lg ${vehicleType === '2' ? 'bg-slate-900 text-white' : 'bg-slate-50 hover:bg-slate-100'}`}
          >
            2종 (중형승합/중형화물)
          </button>
          <button 
            onClick={() => setVehicleType('3')}
            className={`px-3 py-1.5 rounded-lg ${vehicleType === '3' ? 'bg-slate-900 text-white' : 'bg-slate-50 hover:bg-slate-100'}`}
          >
            3종 (대형승합/2축 대형화물)
          </button>
        </div>

        {/* 사전 계산 데이터 출력 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {precomputedTolls.map((route, idx) => {
            // 차종에 따른 가상 요금 증감 계산
            const baseToll = parseInt(route.toll.replace(/[^0-9]/g, ''));
            let multipliedToll = baseToll;
            if (vehicleType === '2') multipliedToll = Math.round(baseToll * 1.02 / 100) * 100;
            if (vehicleType === '3') multipliedToll = Math.round(baseToll * 1.05 / 100) * 100;

            return (
              <div key={idx} className="p-5 border border-slate-100 bg-slate-50/50 rounded-2xl flex justify-between items-center text-xs">
                <div className="space-y-1">
                  <h3 className="text-sm font-black text-slate-800">{route.from} &rarr; {route.to}</h3>
                  <span className="text-[10px] text-slate-400 block font-mono">{route.dist} &middot; {route.time} 소요 &middot; {route.path}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-black text-blue-600 text-base">{multipliedToll.toLocaleString()}원</span>
                  <span className="text-[9px] text-slate-400 block font-bold mt-0.5">하이패스 기본</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 할인정보 및 명절 무료통행 안내 */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-lg font-black">📅 명절 및 연휴 고속도로 통행료 면제</h3>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
          설날 및 추석 명절 전후 3일간은 정부 특별 교통안전 대책에 따라 전국 모든 재정/민자 고속도로의 통행료가 100% 면제됩니다. 
          면제 적용 기간 내에 고속도로에 진입하거나 진출하는 모든 차량에 혜택이 자동 적용됩니다.
        </p>
      </section>

    </main>
  );
}
