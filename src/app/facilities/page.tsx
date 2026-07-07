import AdSense from '@/components/AdSense';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고속도로 휴게소 편의시설 검색 - 수유실, 샤워실, 수면실, 반려견 쉼터',
  description: '장거리 주행 시 필요한 고속도로 휴게소의 편의시설(수유실, 샤워실, 졸음대피 수면실, 약국, 반려견 산책 놀이터) 정보를 노선별로 쉽게 찾을 수 있습니다.',
};

const facilityItems = [
  { slug: 'baby-room', name: '🍼 수유실', desc: '영유아 동반 가족을 위해 기저귀 교환대, 젖병 소독기, 수유 전용 쇼파가 완비된 휴게소 목록입니다.' },
  { slug: 'shower', name: '🚿 샤워실', desc: '장거리 화물차 운전자 및 밤샘 운전자를 위해 24시간 샤워실을 개방하는 휴게소입니다.' },
  { slug: 'sleep', name: '😴 수면실', desc: '졸음운전 예방 및 휴식을 위한 무료 졸음 수면실/휴게 공간이 마련된 곳입니다.' },
  { slug: 'dog', name: '🐕 반려견 쉼터', desc: '반려동물과 함께 산책하거나 뛰어놀 수 있는 반려견 전용 운동장 및 놀이터 정보입니다.' },
  { slug: 'pharmacy', name: '💊 약국', desc: '고속도로 주행 중 응급 약품 구입이 가능한 휴게소 내 오프라인 약국 정보입니다.' },
  { slug: 'atm', name: '🏧 ATM 기기', desc: '현금 인출 및 은행 업무가 가능한 휴게소 내 ATM 기기 설치 점포입니다.' }
];

export default function FacilitiesIndexPage() {
  return (
    <main className="mx-auto max-w-[1240px] px-4 py-12 flex-grow space-y-10">
      
      {/* 소개 타이틀 */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">🎒 편의시설별 휴게소 찾기</h1>
        <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
          수유실, 샤워실, 약국, 반려견 동반 등 고속도로 주행 시 이용자가 실제로 겪는 응급 상황과 편의 요구에 맞춤화된 휴게소 매핑 센터입니다.
        </p>
      </div>

      <AdSense slot="1122334455" />

      {/* 시설 카드 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilityItems.map((f) => (
          <div 
            key={f.slug} 
            className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs hover:border-blue-600 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-black text-slate-800">{f.name}</h2>
              <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
            
            <a 
              href={`/facilities/${f.slug}`} 
              className="bg-slate-900 hover:bg-slate-800 text-white text-center py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              {f.name.split(' ')[1]} 있는 휴게소 보기 &rarr;
            </a>
          </div>
        ))}
      </div>

    </main>
  );
}
