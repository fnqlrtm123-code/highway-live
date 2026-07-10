import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  // 자동으로 '홈'을 가장 첫 아이템으로 추가합니다.
  const allItems = [
    { name: '홈', href: '/' },
    ...items
  ];

  // 구조화된 데이터 생성 (네이버/구글 검색 봇이 수집용)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': allItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.href ? `https://highway.mrbrisbaneinsouth.kr${item.href}` : undefined
    }))
  };

  return (
    <>
      {/* 검색엔진 로봇 수집용 JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 시각적 브레드크럼 UI */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-[11px] md:text-xs font-semibold text-slate-450 mb-5 select-none overflow-x-auto whitespace-nowrap scrollbar-none py-1">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <div key={index} className="flex items-center space-x-2 shrink-0">
              {index > 0 && (
                <span className="text-slate-350 font-normal text-[9px]">&gt;</span>
              )}
              {isLast ? (
                <span className="text-slate-800 font-bold" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="text-slate-450 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
