'use client';

import { useState, useMemo } from 'react';
import AdSense from '@/components/AdSense';
import HubHeader from '@/components/HubHeader';

// 한국 주요 도시 정보 및 좌표 (Haversine 공식 적용용)
interface City {
  name: string;
  lat: number;
  lng: number;
}

const CITIES: City[] = [
  { name: '서울', lat: 37.5665, lng: 126.9780 },
  { name: '인천', lat: 37.4563, lng: 126.7052 },
  { name: '수원', lat: 37.2636, lng: 127.0097 },
  { name: '춘천', lat: 37.8813, lng: 127.7300 },
  { name: '강릉', lat: 37.7519, lng: 128.8761 },
  { name: '대전', lat: 36.3504, lng: 127.3845 },
  { name: '청주', lat: 36.6372, lng: 127.4890 },
  { name: '전주', lat: 35.8242, lng: 127.1480 },
  { name: '광주', lat: 35.1595, lng: 126.8526 },
  { name: '목포', lat: 34.8118, lng: 126.3922 },
  { name: '대구', lat: 35.8714, lng: 128.6014 },
  { name: '울산', lat: 35.5389, lng: 129.3114 },
  { name: '부산', lat: 35.1796, lng: 129.0756 },
];

// 차종별 요금 정보 및 구분 기준
interface VehicleClass {
  id: string;
  name: string;
  description: string;
  examples: string;
  baseRate: number; // km당 가중 비율
}

const VEHICLE_CLASSES: VehicleClass[] = [
  { id: '1', name: '1종 (승용차)', description: '승용차, 16인승 이하 승합차, 2.5톤 미만 화물차', examples: '아반떼, 그랜저, 카니발, 포터', baseRate: 1.0 },
  { id: '2', name: '2종 (중형차)', description: '17~25인승 승합차, 2.5~5.5톤 화물차', examples: '마이티, 25인승 버스', baseRate: 1.02 },
  { id: '3', name: '3종 (대형차)', description: '26~35인승 승합차, 2축 5.5~10톤 화물차', examples: '대형 화물트럭, 35인승 버스', baseRate: 1.05 },
  { id: '4', name: '4종 (대형화물)', description: '3축 이상 10~20톤 화물차', examples: '덤프트럭, 25톤 화물차', baseRate: 1.15 },
  { id: '5', name: '5종 (특수화물)', description: '4축 이상 20톤 초과 화물차, 트레일러', examples: '컨테이너 차량, 트레일러', baseRate: 1.35 },
];

// 특정 주요 노선 사전 고정값 (계산 정밀도 보완용)
const KNOWN_ROUTES: Record<string, { dist: number; time: string; toll: number }> = {
  '서울-부산': { dist: 396, time: '4시간 15분', toll: 18600 },
  '부산-서울': { dist: 396, time: '4시간 15분', toll: 18600 },
  '서울-대전': { dist: 142, time: '1시간 50분', toll: 8200 },
  '대전-서울': { dist: 142, time: '1시간 50분', toll: 8200 },
  '서울-광주': { dist: 292, time: '3시간 20분', toll: 14400 },
  '광주-서울': { dist: 292, time: '3시간 20분', toll: 14400 },
  '서울-강릉': { dist: 220, time: '2시간 45분', toll: 10100 },
  '강릉-서울': { dist: 220, time: '2시간 45분', toll: 10100 },
  '서울-대구': { dist: 282, time: '3시간 10분', toll: 13500 },
  '대구-서울': { dist: 282, time: '3시간 10분', toll: 13500 },
  '서울-목포': { dist: 343, time: '3시간 50분', toll: 16700 },
  '목포-서울': { dist: 343, time: '3시간 50분', toll: 16700 },
  '서울-울산': { dist: 370, time: '4시간', toll: 17800 },
  '울산-서울': { dist: 370, time: '4시간', toll: 17800 },
};

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export default function TollIndexPage() {
  const [startCity, setStartCity] = useState('서울');
  const [endCity, setEndCity] = useState('부산');
  const [vehicleId, setVehicleId] = useState('1');

  // 통행료 요금 계산 결과 도출
  const calculationResult = useMemo(() => {
    if (startCity === endCity) {
      return { dist: 0, time: '0분', toll: 0, hasError: true };
    }

    const routeKey = `${startCity}-${endCity}`;
    const known = KNOWN_ROUTES[routeKey];
    const selectedClass = VEHICLE_CLASSES.find(c => c.id === vehicleId) || VEHICLE_CLASSES[0];

    if (known) {
      // 1종 기본 요금에서 차종 가중치 계산
      const baseToll = known.toll;
      let calculatedToll = baseToll;
      if (vehicleId !== '1') {
        calculatedToll = Math.round((baseToll * selectedClass.baseRate) / 100) * 100;
      }
      return {
        dist: known.dist,
        time: known.time,
        toll: calculatedToll,
        hasError: false
      };
    }

    // 미등록 노선은 Haversine 공식을 기반으로 계산
    const cityA = CITIES.find(c => c.name === startCity)!;
    const cityB = CITIES.find(c => c.name === endCity)!;

    const R = 6371; // Earth radius in km
    const dLat = deg2rad(cityB.lat - cityA.lat);
    const dLng = deg2rad(cityB.lng - cityA.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(cityA.lat)) * Math.cos(deg2rad(cityB.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const haversineDist = R * c;

    // 도로 실제 이동거리 추정 보정치 (직선 거리의 약 1.28배)
    const estimatedDist = Math.round(haversineDist * 1.28);

    // 제한속도 95km/h 기준 소요시간 계산
    const hours = estimatedDist / 95;
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    const timeText = wholeHours > 0 ? `${wholeHours}시간 ${minutes}분` : `${minutes}분`;

    // 1종 기본 기본 통행료 산정 (기본요금 900원 + km당 44.7원)
    const baseToll = 900 + estimatedDist * 44.7;
    // 차종 비율 적용 및 100원 단위 절사
    const finalToll = Math.round((baseToll * selectedClass.baseRate) / 100) * 100;

    return {
      dist: estimatedDist,
      time: timeText,
      toll: finalToll,
      hasError: false
    };
  }, [startCity, endCity, vehicleId]);

  return (
    <>
      <HubHeader />
      <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-12">
        
        {/* 타이틀 및 소개 */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-black">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            실시간 고속도로 요금 정보
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            전국 고속도로 통행료 실시간 계산기
          </h1>
          <p className="text-slate-500 text-sm max-w-3xl leading-relaxed">
            전국 주요 도시 간 고속도로 예상 요금 및 차종별(1종 승용차부터 5종 특수화물차까지) 상세 요금을 실시간으로 조회하고 스마트한 여정을 준비하세요. 하이패스 할인제도 및 통행료 미납 조회 가이드도 하단에서 바로 확인할 수 있습니다.
          </p>
        </div>

        <AdSense slot="1122334455" />

        {/* 실시간 요금 계산기 대시보드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 입력 폼 필드 (왼쪽 5열) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h2 className="text-lg font-black text-slate-900 border-b pb-3 border-slate-100 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
                출발지 &middot; 도착지 설정
              </h2>
              
              {/* 출발지 선택 */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-500">출발 도시 선택</label>
                <select 
                  value={startCity} 
                  onChange={(e) => setStartCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-extrabold text-slate-800 focus:outline-hidden focus:border-blue-500 transition-all cursor-pointer"
                >
                  {CITIES.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* 도착지 선택 */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-500">도착 도시 선택</label>
                <select 
                  value={endCity} 
                  onChange={(e) => setEndCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-extrabold text-slate-800 focus:outline-hidden focus:border-blue-500 transition-all cursor-pointer"
                >
                  {CITIES.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* 차종 선택 */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-500">운행 차량 종류 (차종)</label>
                <select 
                  value={vehicleId} 
                  onChange={(e) => setVehicleId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-extrabold text-slate-800 focus:outline-hidden focus:border-blue-500 transition-all cursor-pointer"
                >
                  {VEHICLE_CLASSES.map(v => (
                    <option key={v.id} value={v.id}>{v.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 선택 차량 요약 */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs space-y-1">
              <span className="font-black text-slate-700 block">
                {VEHICLE_CLASSES.find(c => c.id === vehicleId)?.name} 기준 상세 정보
              </span>
              <p className="text-slate-400 font-medium leading-relaxed">
                {VEHICLE_CLASSES.find(c => c.id === vehicleId)?.description}
              </p>
            </div>
          </div>

          {/* 계산 결과 화면 (오른쪽 7열) */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            {/* 데코 그리드 패턴 */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black tracking-wider text-slate-400 uppercase">Highway Cost Estimation</span>
                <span className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full text-[10px] font-black border border-emerald-500/10">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  계산 완료
                </span>
              </div>

              {calculationResult.hasError ? (
                <div className="py-12 text-center text-slate-400 text-sm font-bold">
                  출발지와 도착지가 같습니다. 다른 경로를 설정해주세요.
                </div>
              ) : (
                <div className="space-y-6">
                  {/* 대형 금액 */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-slate-400 font-bold block">통행 요금</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-4xl md:text-5xl font-black text-blue-400 tracking-tight">
                        {calculationResult.toll.toLocaleString()}
                      </span>
                      <span className="text-lg font-black text-slate-300">원</span>
                    </div>
                  </div>

                  {/* 세부 수치 그리드 */}
                  <div className="grid grid-cols-2 gap-6 border-t border-b border-slate-800 py-5">
                    <div>
                      <span className="text-[11px] text-slate-500 font-bold block">예상 주행 거리</span>
                      <span className="text-lg font-mono font-black text-white">{calculationResult.dist} km</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-bold block">예상 소요 시간</span>
                      <span className="text-lg font-black text-white">{calculationResult.time}</span>
                    </div>
                  </div>

                  {/* 할인 비교 가격 */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 font-bold block">일반 요금 (현금)</span>
                      <span className="font-mono font-black text-slate-200 mt-1 block">{(calculationResult.toll + 200).toLocaleString()}원</span>
                    </div>
                    <div className="bg-blue-600/10 p-3 rounded-xl border border-blue-500/10">
                      <span className="text-[10px] text-blue-400 font-bold block">하이패스 (5% 기본할인)</span>
                      <span className="font-mono font-black text-blue-400 mt-1 block">{Math.round(calculationResult.toll * 0.95 / 10) * 10}원</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-[10.5px] text-slate-500 leading-relaxed pt-4 border-t border-slate-800 relative z-10">
              * 표시된 거리는 대략적인 고속도로 선형 보정 거리를 반영한 예상 수치입니다. 실제 이용 진출입 영업소(IC/JC) 위치 및 하이패스 정기 할인(주말/출퇴근) 적용 여부에 따라 실제 수수 요금과 소폭의 차이가 발생할 수 있습니다.
            </div>
          </div>

        </div>

        {/* 차종별 고속도로 요금 및 구분 기준 */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-6">
          <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
            차종별 고속도로 구분 기준표
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            대한민국의 모든 유료 도로는 자동차관리법 및 한국도로공사의 영업 규정에 의거하여 아래 표와 같이 총 5가지의 차종 및 면제 차종으로 분류되어 요금이 부과됩니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-500">
                  <th className="py-3.5 px-4 font-black w-24">구분</th>
                  <th className="py-3.5 px-4 font-black">차종 설명</th>
                  <th className="py-3.5 px-4 font-black">대표 차량 종류</th>
                  <th className="py-3.5 px-4 font-black text-right">요금 가중치</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {VEHICLE_CLASSES.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-black text-slate-950">{v.name}</td>
                    <td className="py-4 px-4">{v.description}</td>
                    <td className="py-4 px-4 text-slate-400 font-bold">{v.examples}</td>
                    <td className="py-4 px-4 text-right font-mono font-black text-blue-600">{(v.baseRate * 100).toFixed(0)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 하이패스 할인제도 및 면제 가이드 */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xs space-y-6">
          <h2 className="text-xl font-black text-slate-900 border-b pb-4 border-slate-100 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            하이패스 요금 할인제도 핵심 요약
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5 rounded-full inline-block">
                출퇴근 할인
              </span>
              <h3 className="text-sm font-black text-slate-800">평일 출퇴근 시간대 20%~50% 할인</h3>
              <p className="text-[11.5px] text-slate-400 leading-relaxed">
                주말/공휴일을 제외한 평일 출근(05시~09시), 퇴근(18시~22시) 시 하이패스 차로 진입/출차 차량에 대해 차종 구분 없이 요금을 할인합니다.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full inline-block">
                친환경차 할인
              </span>
              <h3 className="text-sm font-black text-slate-800">전기 &middot; 수소차 통행료 50% 할인</h3>
              <p className="text-[11.5px] text-slate-400 leading-relaxed">
                전기자동차 및 수소전기자동차 전용 하이패스 단말기를 부착하여 운행할 경우, 전국의 모든 민자 및 재정 고속도로 통행료의 50%를 상시 감면받을 수 있습니다.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
              <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2 py-0.5 rounded-full inline-block">
                경차 할인
              </span>
              <h3 className="text-sm font-black text-slate-800">배기량 1000cc 미만 경차 50% 할인</h3>
              <p className="text-[11.5px] text-slate-400 leading-relaxed">
                레이, 모닝, 캐스퍼 등의 경형 승용차는 일반 1종 요금 대비 50%를 감면받는 특례 요율(6종) 혜택을 자동으로 24시간 상시 적용받습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 미납 통행료 조회 및 납부 방법 */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-black flex items-center gap-2 text-white">
              <span className="w-1.5 h-4 bg-blue-500 rounded-full inline-block"></span>
              고속도로 미납 통행료 간편 조회 및 납부 방법
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              하이패스 카드 잔액 부족이나 단말기 미인식 등으로 통행료를 납부하지 못한 채 톨게이트를 통과한 경우, 당황하여 톨게이트 부근에서 급정거할 경우 대형 사고 위험이 매우 큽니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
            <div className="space-y-2.5">
              <h4 className="font-bold text-white text-[13.5px]">1. 미납금 조회 방법</h4>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-400 leading-relaxed">
                <li>한국도로공사 하이패스 서비스 홈페이지 및 모바일 앱</li>
                <li>전용 콜센터 (1588-2504 / 24시간 연중무휴)</li>
                <li>전국의 고속도로 모든 영업소 사무실 또는 휴게소 종합 안내소</li>
              </ul>
            </div>
            
            <div className="space-y-2.5">
              <h4 className="font-bold text-white text-[13.5px]">2. 편리한 납부 수단</h4>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-400 leading-relaxed">
                <li>영업소 차로에서 직접 정산 또는 수납원에게 신용카드 납부</li>
                <li>GS25, CU, 이마트24 등 전국 제휴 편의점 무인 단말기 수납</li>
                <li>네이버페이, 카카오페이 등 간편결제를 이용한 간편 스마트 납부</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
