'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubCategory {
  id: string;
  parentId: string;
  name: string;
  href: string;
  badge?: string;
  badgeColor?: string;
}

export default function HubHeader() {
  const pathname = usePathname();

  const subCategories: SubCategory[] = [
    {
      id: 'rest-list',
      parentId: 'rest-areas',
      name: '전체 휴게소 목록',
      href: '/rest-areas',
      badge: '편의시설'
    },
    {
      id: 'rest-food',
      parentId: 'rest-areas',
      name: '휴게소 맛집 (EX-FOOD)',
      href: '/food',
      badge: '시그니처'
    },
    {
      id: 'gas-price',
      parentId: 'gas-ev',
      name: '주유소 가격 비교',
      href: '/gas',
      badge: '실시간 유가',
      badgeColor: 'bg-red-50 text-red-600 border-red-100'
    },
    {
      id: 'ev-station',
      parentId: 'gas-ev',
      name: '전기차 충전소 현황',
      href: '/ev',
      badge: '초급속',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    }
  ];

  const getActiveParentId = () => {
    if (pathname.startsWith('/rest-areas') || pathname.startsWith('/food')) return 'rest-areas';
    if (pathname.startsWith('/gas') || pathname.startsWith('/ev')) return 'gas-ev';
    return '';
  };

  const activeParentId = getActiveParentId();

  // 통행료 등 서브 메뉴가 불필요한 독립 카테고리는 서브 헤더를 렌더링하지 않음
  if (!activeParentId) return null;

  return (
    <div className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200/50 sticky top-16 z-30 shadow-xs">
      <div className="mx-auto max-w-[1240px] px-4 py-2 flex items-center justify-between">
        
        {/* 현재 허브 정보 라벨 */}
        <div className="hidden md:flex items-center gap-2 text-[10.5px] text-slate-450 font-bold uppercase tracking-wider">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
          <span>
            {activeParentId === 'rest-areas' ? '고속도로 휴게소 정보 허브' : '실시간 에너지 충전소 비교'}
          </span>
        </div>

        {/* 중분류 서브 카테고리 탭만 깔끔하게 노출 */}
        <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
          {subCategories
            .filter((sub) => sub.parentId === activeParentId)
            .map((sub) => {
              const isActive = pathname === sub.href;
              return (
                <Link
                  key={sub.id}
                  href={sub.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs transition-all relative shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-extrabold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 font-bold'
                  }`}
                >
                  <span>{sub.name}</span>
                  {sub.badge && (
                    <span
                      className={`text-[8.5px] font-black px-1.5 py-0.5 rounded-md border ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-500/30'
                          : sub.badgeColor || 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {sub.badge}
                    </span>
                  )}
                </Link>
              );
            })}
        </div>

      </div>
    </div>
  );
}
