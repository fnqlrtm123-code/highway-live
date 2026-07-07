'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ParentCategory {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
}

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

  const parents: ParentCategory[] = [
    {
      id: 'rest-areas',
      name: '고속도로 휴게소',
      href: '/rest-areas',
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      id: 'gas-ev',
      name: '주유소 · 전기차 충전소',
      href: '/gas',
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096m.813 5.096V10.5m-6.75 3.5l1.623-6.492A1.125 1.125 0 014.16 6.75H13.84a1.125 1.125 0 011.087.858L16.55 14M10.5 3h3" />
        </svg>
      )
    },
    {
      id: 'toll',
      name: '고속도로 통행료',
      href: '/toll',
      icon: (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-1.957-.659-1.171-.879-1.171-2.303 0-3.182 1.172-.879 3.07-.879 4.242 0L15 8.818M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

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
    },
    {
      id: 'toll-calc',
      parentId: 'toll',
      name: '통행료 요금 계산기',
      href: '/toll',
      badge: '실시간 조회'
    }
  ];

  const getActiveParentId = () => {
    if (pathname.startsWith('/rest-areas') || pathname.startsWith('/food')) return 'rest-areas';
    if (pathname.startsWith('/gas') || pathname.startsWith('/ev')) return 'gas-ev';
    if (pathname.startsWith('/toll')) return 'toll';
    return '';
  };

  const activeParentId = getActiveParentId();

  return (
    <div className="w-full bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
      <div className="mx-auto max-w-[1240px] px-4">
        
        {/* 대분류 부모 카테고리 탭 (허브 상태 식별) */}
        <div className="flex items-center justify-start border-b border-slate-100 py-3 overflow-x-auto whitespace-nowrap scrollbar-none gap-2">
          {parents.map((p) => {
            const isActive = p.id === activeParentId;
            return (
              <Link
                key={p.id}
                href={p.href}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[14px] font-black transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {p.icon}
                <span>{p.name}</span>
                {isActive && (
                  <span className="text-[9.5px] font-black bg-white/20 text-white px-2 py-0.5 rounded-md uppercase">
                    Hub
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* 중분류 서브 카테고리 탭 */}
        <div className="flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap py-3 scrollbar-none">
          {subCategories
            .filter((sub) => sub.parentId === activeParentId)
            .map((sub) => {
              const isActive = pathname === sub.href;
              return (
                <Link
                  key={sub.id}
                  href={sub.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all relative shrink-0 ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/75'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>{sub.name}</span>
                  {sub.badge && (
                    <span
                      className={`text-[8.5px] font-extrabold px-1.5 py-0.5 rounded-md border ${
                        isActive
                          ? 'bg-white/20 text-white border-white/10'
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
