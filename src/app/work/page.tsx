'use client';

import { useState } from 'react';
import { incidents, highways } from '@/lib/data';
import AdSense from '@/components/AdSense';

export default function WorkGuide() {
  const [selectedRoute, setSelectedRoute] = useState<string>('전체');
  const [selectedType, setSelectedType] = useState<string>('전체');

  // 필터링된 작업구간 리스트
  const filteredIncidents = incidents.filter(inc => {
    const matchesRoute = selectedRoute === '전체' || inc.highwaySlug === selectedRoute;
    const matchesType = selectedType === '전체' || 
      (selectedType === '공사' && inc.type === 'construction') ||
      (selectedType === '사고' && inc.type === 'accident');
    return matchesRoute && matchesType;
  });

  return (
    <main className="flex-grow bg-slate-50 pb-20">
      {/* 서브 타이틀 섹션 */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-[1240px] mx-auto px-4">
          <h1 className="text-2xl font-black mt-1">고속도로 작업 및 통제구간 안내</h1>
          <p className="text-slate-400 text-xs mt-2 max-w-xl leading-relaxed">
            안전한 운전을 위해 현재 고속도로 노선별로 수행 중인 유지보수 공사, 차선 통제 정보 및 사고 돌발 발생 상황을 확인하시기 바랍니다.
          </p>
        </div>
      </section>

      {/* 필터링 영역 */}
      <section className="max-w-[1240px] mx-auto px-4 mt-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="text-[10px] font-black text-slate-400 block mb-1.5 uppercase">노선별 필터</label>
            <select 
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 font-bold text-slate-700"
            >
              <option value="전체">전체 고속도로</option>
              {highways.map(h => (
                <option key={h.slug} value={h.slug}>{h.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[10px] font-black text-slate-400 block mb-1.5 uppercase">구분 필터</label>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 font-bold text-slate-700"
            >
              <option value="전체">전체 현황</option>
              <option value="공사">도로 공사/작업</option>
              <option value="사고">돌발 사고 상황</option>
            </select>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-slate-400">검색 결과: <strong className="text-blue-600">{filteredIncidents.length}</strong>건</span>
          </div>
        </div>
      </section>

      {/* 작업 리스트 테이블 */}
      <section className="max-w-[1240px] mx-auto px-4 mt-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-black">
                  <th className="p-4">구분</th>
                  <th className="p-4">노선명</th>
                  <th className="p-4">방향</th>
                  <th className="p-4">위치 및 지점</th>
                  <th className="p-4">세부 내용</th>
                  <th className="p-4">통제 상태</th>
                  <th className="p-4 text-right">등록시간</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredIncidents.length > 0 ? (
                  filteredIncidents.map((inc) => (
                    <tr key={inc.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[9.5px] font-black ${
                          inc.type === 'construction' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {inc.type === 'construction' ? '작업' : '사고'}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-slate-800">{inc.highwayName}</td>
                      <td className="p-4 text-slate-500">{inc.direction}</td>
                      <td className="p-4 font-bold text-slate-800">{inc.location}</td>
                      <td className="p-4 text-slate-600">{inc.description}</td>
                      <td className="p-4 font-black text-red-600">{inc.laneBlocked}</td>
                      <td className="p-4 text-right text-slate-400 font-mono">{inc.startedAt}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-slate-400 font-bold">
                      현재 노선 내에 진행 중인 정체 작업 또는 돌발 상황이 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 안내사항 */}
      <section className="max-w-[1240px] mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl space-y-2">
          <h4 className="text-xs font-black text-blue-900">안전 주행 안내</h4>
          <p className="text-[11px] text-blue-800 leading-relaxed">
            고속도로 작업 구간을 통과할 때는 반드시 주행 속도를 60km/h 이하로 줄이고 비상등을 켜 뒤따르는 차량에 경고해 주시기 바랍니다. 노면 보수 및 가드레일 설치 구간은 차선 폭이 좁아 사고 위험이 매우 높습니다.
          </p>
        </div>
        <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-2">
          <h4 className="text-xs font-black text-blue-400">도로 상황 제보 채널</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            주행 중 미등록된 고장 차량이나 보행자, 도로 위 낙하물을 발견하시면 즉시 한국도로공사 콜센터 <strong>1588-2504</strong>로 신고해 인명 사고 예방에 동참해 주세요.
          </p>
        </div>
      </section>

      {/* 애드센스 */}
      <div className="max-w-[1240px] mx-auto px-4 mt-8">
        <AdSense slot="1122334455" />
      </div>
    </main>
  );
}
