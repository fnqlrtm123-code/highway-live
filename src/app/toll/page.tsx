'use client';

import { useState, useMemo } from 'react';
import AdSense from '@/components/AdSense';
import HubHeader from '@/components/HubHeader';
import { TOLLS_DATA } from '@/lib/tolls-data';

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

  // 출발지와 도착지 교환
  const handleSwap = () => {
    setStartCity(endCity);
    setEndCity(startCity);
  };

  // 통행료 요금 계산 결과 도출
  const calculationResult = useMemo(() => {
    if (startCity === endCity) {
      return { dist: 0, time: '0분', toll: 0, lightCarToll: 0, isOfficial: false, hasError: true };
    }

    const routeKey = `${startCity}-${endCity}`;
    const officialRoute = TOLLS_DATA[routeKey];
    const selectedClass = VEHICLE_CLASSES.find(c => c.id === vehicleId) || VEHICLE_CLASSES[0];

    // 1. 공공데이터 API 수집 정보가 매칭되는 경우 우선 사용
    if (officialRoute) {
      const toll = officialRoute.tolls[vehicleId] || officialRoute.tolls['1'];
      const lightCarToll = officialRoute.tolls['6'] || Math.round(toll * 0.5);
      return {
        dist: officialRoute.dist,
        time: officialRoute.time,
        toll: toll,
        lightCarToll: lightCarToll,
        isOfficial: true,
        hasError: false
      };
    }

    // 2. 고정된 노선 사전값(KNOWN_ROUTES) 확인
    const known = KNOWN_ROUTES[routeKey];
    if (known) {
      const baseToll = known.toll;
      let calculatedToll = baseToll;
      if (vehicleId !== '1') {
        calculatedToll = Math.round((baseToll * selectedClass.baseRate) / 100) * 100;
      }
      return {
        dist: known.dist,
        time: known.time,
        toll: calculatedToll,
        lightCarToll: Math.round((calculatedToll * 0.5) / 100) * 100,
        isOfficial: false,
        hasError: false
      };
    }

    // 3. 미등록 노선은 Haversine 공식을 기반으로 계산 (폴백)
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
      lightCarToll: Math.round((finalToll * 0.5) / 100) * 100,
      isOfficial: false,
      hasError: false
    };
  }, [startCity, endCity, vehicleId]);

  return (
    <>
      <HubHeader />
      <main className="mx-auto max-w-[1000px] px-4 py-10 flex-grow space-y-10">
        
        {/* 타이틀 및 소개 */}
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-black">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            공공데이터 API 실시간 계산기
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            전국 고속도로 통행료 계산기
          </h1>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
            전국 주요 도시 간 고속도로 예상 요금 및 차종별 상세 요금을 실시간으로 조회하세요.
          </p>
        </div>

        {/* 요금 계산기 대시보드 - 단일 플랫 컨테이너 */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 md:p-8 shadow-xs space-y-6">
          
          {/* 입력 필드 레이아웃 (PC 1줄, 모바일 적층) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* 출발지 */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="text-xs font-black text-slate-500">출발 도시</label>
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

            {/* 스왑 버튼 */}
            <div className="md:col-span-1 flex justify-center pb-1">
              <button 
                onClick={handleSwap}
                type="button"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs flex items-center justify-center hover:bg-slate-100 active:scale-95 transition-all text-slate-500 cursor-pointer"
                title="출발지/도착지 전환"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </button>
            </div>

            {/* 도착지 */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="text-xs font-black text-slate-500">도착 도시</label>
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

            {/* 차종 */}
            <div className="md:col-span-3 space-y-1.5">
              <label className="text-xs font-black text-slate-500">차종 (차량 종류)</label>
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

          {/* 계산 결과 영역 */}
          <div className="border-t border-slate-100 pt-6">
            {calculationResult.hasError ? (
              <div className="py-8 text-center text-slate-500 text-xs font-black bg-slate-50 rounded-xl border border-slate-100">
                출발지와 도착지가 동일합니다. 다른 경로를 선택해 주세요.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* 왼쪽: 금액 및 상세 요약 (5열) */}
                <div className="md:col-span-5 space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider">예상 통행 요금</span>
                      {calculationResult.isOfficial && (
                        <span className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-[9px] font-black border border-blue-100">
                          공공데이터
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-mono text-4xl md:text-5xl font-black text-blue-700 tracking-tight">
                        {calculationResult.toll.toLocaleString()}
                      </span>
                      <span className="text-lg font-black text-slate-700">원</span>
                    </div>
                  </div>

                  {/* 차종별 정보 설명 */}
                  <p className="text-xs text-slate-600 font-bold leading-relaxed">
                    {VEHICLE_CLASSES.find(c => c.id === vehicleId)?.name} &middot; {VEHICLE_CLASSES.find(c => c.id === vehicleId)?.description}
                  </p>

                  {/* 소요거리 및 시간 */}
                  <div className="flex gap-5 text-xs pt-1">
                    <div className="flex items-center gap-1 text-slate-800 font-black">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                      <span>{calculationResult.dist} km</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-800 font-black">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{calculationResult.time}</span>
                    </div>
                  </div>
                </div>

                {/* 오른쪽: 할인 및 결제수단 비교 (7열) */}
                <div className="md:col-span-7 space-y-3">
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider block">할인 및 결제 수단별 비교</span>
                  <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-xs text-slate-700 font-bold">일반 요금 (현금/신용카드)</span>
                      <span className="text-sm font-mono font-black text-slate-800">
                        {(calculationResult.toll + (calculationResult.isOfficial ? 0 : 200)).toLocaleString()}원
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-xs text-blue-700 font-black">하이패스 (기본할인 적용)</span>
                      <span className="text-sm font-mono font-black text-blue-700">
                        {Math.round(calculationResult.toll * 0.95 / 10 * 10).toLocaleString()}원
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-xs text-emerald-700 font-black">경차 할인 (50% 감면 대상)</span>
                      <span className="text-sm font-mono font-black text-emerald-700">
                        {calculationResult.lightCarToll.toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* 하단 API 안내 문구 */}
          <div className="text-[10px] text-slate-500 leading-relaxed pt-3 border-t border-slate-100 font-semibold">
            {calculationResult.isOfficial ? (
              <span>* 본 정보는 한국도로공사 공공데이터 API를 실시간 연동한 데이터입니다. 출퇴근 시간대/주말 할인 등 세부 하이패스 정기 요율에 따라 일부 차이가 발생할 수 있습니다.</span>
            ) : (
              <span>* 본 정보는 직선거리에 대한 보정치를 활용한 예상 데이터입니다. 실제 영업소(IC/JC) 위치에 따라 오차가 발생할 수 있습니다.</span>
            )}
          </div>
        </div>

        <AdSense slot="1122334455" />

        {/* 통합 정보 영역 - 카드 테두리를 걷어내고 플랫한 웹 레이아웃 구축 */}
        <div className="border-t border-slate-200/60 pt-10 space-y-12">
          
          {/* 가이드 그리드: 할인 혜택 및 미납 요금 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* 할인 혜택 */}
            <section className="space-y-4">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-1 bg-blue-600 h-4 rounded-full inline-block"></span>
                하이패스 주요 할인제도 안내
              </h2>
              <div className="space-y-4 text-xs font-bold">
                <div className="space-y-1">
                  <span className="text-[10px] text-blue-700 font-black uppercase">평일 출퇴근 할인</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">평일 출근(05시~09시) 및 퇴근(18시~22시) 시 요금을 20%~50% 차등 할인합니다.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-emerald-700 font-black uppercase">친환경차 50% 할인</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">전기자동차 및 수소전기자동차 전용 단말기를 부착해 이용할 경우 요금을 50% 감면합니다.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-purple-700 font-black uppercase">경차 50% 할인</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">배기량 1,000cc 미만의 경형 승용차(모닝, 레이, 캐스퍼 등)는 50% 자동 상시 감면됩니다.</p>
                </div>
              </div>
            </section>

            {/* 미납 통행료 납부 */}
            <section className="space-y-4">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-1 bg-blue-600 h-4 rounded-full inline-block"></span>
                미납 통행료 조회 및 편리한 납부 수단
              </h2>
              <div className="space-y-4 text-xs font-bold">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-600 font-black uppercase">간편 조회 방법</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">도로공사 홈페이지, 공식 앱, 또는 전용 콜센터(1588-2504)에서 즉시 조회할 수 있습니다.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-600 font-black uppercase">결제 수단</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">톨게이트 영업소 창구 납부뿐만 아니라 전국 편의점 무인기기, 카카오페이/네이버페이 등으로 손쉽게 스마트 납부가 가능합니다.</p>
                </div>
              </div>
            </section>

          </div>

          {/* 차종별 구분 기준표 */}
          <section className="space-y-4">
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <span className="w-1 bg-blue-600 h-4 rounded-full inline-block"></span>
              차종별 구분 기준 및 가중치
            </h2>
            <div className="overflow-x-auto border border-slate-100 rounded-xl bg-white">
              <table className="w-full text-left text-xs border-collapse font-bold">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-700">
                    <th className="py-2.5 px-4 font-black w-24">구분</th>
                    <th className="py-2.5 px-4 font-black">차종 설명</th>
                    <th className="py-2.5 px-4 font-black">대표 차량 예시</th>
                    <th className="py-2.5 px-4 font-black text-right">요율</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 font-semibold text-slate-800">
                  {VEHICLE_CLASSES.map((v) => (
                    <tr key={v.id} className="hover:bg-slate-50/30 transition-colors">
                      <td className="py-3 px-4 font-black text-slate-900">{v.name}</td>
                      <td className="py-3 px-4">{v.description}</td>
                      <td className="py-3 px-4 text-slate-700 font-bold">{v.examples}</td>
                      <td className="py-3 px-4 text-right font-mono font-black text-blue-700">{(v.baseRate * 100).toFixed(0)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>

      </main>
    </>
  );
}
