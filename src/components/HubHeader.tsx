'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TabItem {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  badgeColor?: string;
}

export default function HubHeader() {
  const pathname = usePathname();

  const tabs: TabItem[] = [
    {
      id: 'rest-areas',
      name: '고속도로 휴게소',
      href: '/rest-areas',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      badge: '대표 안내'
    },
    {
      id: 'food',
      name: '휴게소 맛집 (EX-FOOD)',
      href: '/food',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.01 6 8.919 6 10.024V13.5m6-5.25c1.355 0 2.697.056 4.024.166C17.155 8.01 18 8.919 18 10.024V13.5M6 13.5c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3M6 13.5v5.25a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18.75V13.5M12 2.25v1.5M12 16.5v4.5" />
        </svg>
      ),
      badge: '추천 맛집'
    },
    {
      id: 'gas',
      name: '주유소 가격 비교',
      href: '/gas',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.375-6.007a9.75 9.75 0 00-6.968-8.736L10.5 1.5V6m0 0v12.75" />
        </svg>
      ),
      badge: '실시간 유가',
      badgeColor: 'bg-red-50 text-red-600 border-red-100'
    },
    {
      id: 'ev',
      name: '전기차 충전소',
      href: '/ev',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      badge: '초급속',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      id: 'toll',
      name: '고속도로 통행료',
      href: '/toll',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5M5.25 7.5h13.5m-12 3h10.5M7.5 13.5h9" />
        </svg>
      ),
      badge: '요금 계산'
    }
  ];

  const getActiveTabId = () => {
    if (pathname.startsWith('/rest-areas')) return 'rest-areas';
    if (pathname.startsWith('/food')) return 'food';
    if (pathname.startsWith('/gas')) return 'gas';
    if (pathname.startsWith('/ev')) return 'ev';
    if (pathname.startsWith('/toll')) return 'toll';
    return '';
  };

  const activeTabId = getActiveTabId();

  return (
    <div className="w-full bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
      <div className="mx-auto max-w-[1240px] px-4">
        {/* 허브 표식 라벨 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-1.5 border-b border-slate-100 text-[11px] text-slate-400 gap-1">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-extrabold text-slate-500">통합 교통 인프라 허브</span>
            <span className="text-slate-300">|</span>
            <span>실시간 교통 인프라 정보 포털</span>
          </div>
          <div className="hidden md:block font-mono">
            업데이트: 실시간 도로공사 데이터 연동 중
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap py-3.5 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black transition-all relative shrink-0 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm shadow-slate-900/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
                {tab.badge && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${
                      isActive
                        ? 'bg-white/20 text-white border-white/10'
                        : tab.badgeColor || 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}
                  >
                    {tab.badge}
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
