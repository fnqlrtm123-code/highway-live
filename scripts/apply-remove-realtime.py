import os

replacements = {
    "src/app/layout.tsx": [
        ("전국 고속도로 실시간 CCTV 휴게소 맛집 주유소 가격", "전국 고속도로 CCTV 및 휴게소 맛집 주유소 가격"),
        ("실시간 고속도로 CCTV & 휴게소 맛집 정보", "고속도로 CCTV & 휴게소 맛집 정보"),
        ("실시간으로 가공하여", "가공하여"),
        ("실시간 주유소 유가", "주유소 유가"),
        ("실시간으로 가공된", "가공된"),
    ],
    "src/app/page.tsx": [
        ("실시간 CCTV 교통상황", "실시간 교통상황 및 CCTV"),
    ],
    "src/app/gas/layout.tsx": [
        ("실시간 기름값 및 전기차 충전소 조회", "기름값 및 전기차 충전소 조회"),
        ("실시간 휘발유", "휘발유"),
        ("실시간 유가 정보", "유가 정보"),
    ],
    "src/app/gas/page.tsx": [
        ("실시간 전국 유가 비교 포털", "전국 유가 비교 포털"),
        ("실시간 고속도로 주유소 가격 비교", "고속도로 주유소 가격 비교"),
        ("실시간으로 분석합니다", "분석합니다"),
        ("실시간 비교표", "비교표"),
        ("실시간 충전기", "충전기"),
        ("실시간 기기 대수", "기기 대수"),
        ("실시간 휘발유", "휘발유"),
        ("실시간 비교 테이블", "비교 테이블"),
    ],
    "src/app/rest-areas/[restAreaSlug]/layout.tsx": [
        ("실시간 알뜰주유소", "알뜰주유소"),
        ("실시간으로 확인해보세요", "확인해보세요"),
        ("실시간 편의 정보 포털", "편의 정보 포털"),
    ],
    "src/app/rest-areas/[restAreaSlug]/page.tsx": [
        ("실시간 주유소 가격", "주유소 가격"),
        ("실시간 이용 팁", "이용 팁"),
        ("실시간 이용 꿀팁", "이용 꿀팁"),
        ("실시간 주유소", "주유소"),
    ],
    "src/app/rest-areas/[restAreaSlug]/food/page.tsx": [
        ("실시간으로 확인해보세요", "확인해보세요"),
    ],
    "src/app/rest-areas/[restAreaSlug]/facilities/page.tsx": [
        ("실시간 사용 현황", "사용 현황"),
    ],
    "src/app/rest-areas/page.tsx": [
        ("실시간 유가가", "유가가"),
        ("실시간 블라인드 평가", "블라인드 평가"),
        ("실시간 필터", "필터"),
    ],
    "src/app/region/[regionSlug]/page.tsx": [
        ("실시간 기름값", "기름값"),
        ("실시간 편의 인프라", "편의 인프라"),
    ],
    "src/app/ranking/page.tsx": [
        ("실시간 고속도로 공공데이터", "고속도로 공공데이터"),
    ],
    "src/app/notice/page.tsx": [
        ("실시간 가격 비교", "가격 비교"),
        ("실시간 CCTV 상황판", "CCTV 상황판"),
        ("실시간 유가 및", "유가 및"),
        ("실시간 API", "API"),
        ("실시간 급속 충전기", "급속 충전기"),
        ("실시간 고속도로 정보", "고속도로 정보"),
    ],
    "src/app/terms/page.tsx": [
        ("실시간 최저가", "최저가"),
        ("실시간 유가 정보", "유가 정보"),
        ("실시간 충전기", "충전기"),
    ],
    "src/app/toll/layout.tsx": [
        ("실시간 고속도로 통행료", "고속도로 통행료"),
        ("실시간으로 자동 연산", "자동 연산"),
    ],
    "src/app/toll/page.tsx": [
        ("실시간 계산기", "계산기"),
        ("실시간으로 조회하세요", "조회하세요"),
        ("실시간 연동한", "연동한"),
    ],
    "src/app/traffic/page.tsx": [
        ("실시간으로 안내합니다", "안내합니다"),
        ("실시간 고속도로 상황", "고속도로 상황"),
        ("실시간 평균 주행 속도", "평균 주행 속도"),
        ("실시간 지도", "지도"),
        ("실시간 노선 리스트", "노선 리스트"),
    ],
    "src/app/traffic/[highway]/page.tsx": [
        ("실시간 상황 조회", "상황 조회"),
        ("실시간 조회할", "조회할"),
    ],
    "src/app/work/page.tsx": [
        ("실시간으로 확인하시기", "확인하시기"),
    ],
    "src/components/TrafficHubClient.tsx": [
        ("실시간 도로 및 노선 탐색", "도로 및 노선 탐색"),
        ("실시간 소통 & CCTV", "소통 상황 & CCTV"),
    ],
    "src/components/HubHeader.tsx": [
        ("실시간 유가", "유가 비교"),
        ("실시간 에너지 충전소 비교", "에너지 충전소 비교"),
    ],
    "src/components/HomeClient.tsx": [
        ("실시간 고속도로 종합 정보 안내", "고속도로 종합 정보 안내"),
        ("고속도로 실시간 편의정보 포털", "고속도로 편의정보 포털"),
        ("실시간 소요 시간", "소요 시간"),
        ("실시간 주요 CCTV 포인트", "주요 CCTV 포인트"),
        ("실시간 유가 최저가", "유가 최저가"),
        ("실시간 CCTV 화면", "CCTV 화면"),
        ("실시간 CCTV 라이브", "CCTV 라이브"),
        ("유가 정보는 실시간인가요?", "유가 정보는 최신인가요?"),
        ("실시간 유가 API", "유가 API"),
        ("실시간 가동 상태 정보", "가동 상태 정보"),
        ("실시간 수준으로", "최신 정보 수준으로"),
    ],
    "src/lib/roadData.ts": [
        ("실시간 진행 속도", "진행 속도"),
        ("실시간 주행 센서", "주행 센서"),
        ("실시간 정보망", "정보망"),
        ("실시간 정체 상황", "정체 상황"),
        ("실시간 수집 및 집계", "수집 및 집계"),
        ("실시간 측정값", "측정값"),
        ("실시간 사고, 공사, 통제 정보", "사고, 공사, 통제 정보"),
        ("실시간 혼잡 예측", "혼잡 예측"),
        ("실시간 도로 전광판", "도로 전광판"),
    ],
    "src/lib/tolls-data.ts": [
        ("실시간 통행료", "통행료"),
    ],
    "src/app/rss.xml/route.ts": [
        ("실시간 CCTV 영상", "CCTV 영상"),
    ],
    "src/app/food/page.tsx": [
        ("실시간 대표 음식 가이드", "대표 음식 가이드"),
        ("소문난 실시간 시그니처", "소문난 시그니처"),
    ],
    "src/app/forecast/page.tsx": [
        ("실시간 시뮬레이션 및", "시뮬레이션 및"),
        ("실시간 데이터 갱신 적용", "데이터 갱신 적용"),
    ],
    "src/app/gas/[restAreaSlug]/layout.tsx": [
        ("주유소 실시간 기름값", "주유소 기름값"),
        ("실시간 휘발유", "휘발유"),
        ("실시간으로 확인해보세요", "확인해보세요"),
        ("실시간 유가 정보", "유가 정보"),
    ],
    "src/app/gas/[restAreaSlug]/page.tsx": [
        ("휘발유 실시간 가격 비교", "휘발유 가격 비교"),
        ("실시간 휘발유", "휘발유"),
        ("실시간 주유소 및", "주유소 및"),
        ("실시간 기름값 정보", "기름값 정보"),
    ],
    "src/app/highways/[highway]/page.tsx": [
        ("실시간 가격", "가격"),
    ],
    "src/app/holiday/page.tsx": [
        ("실시간 귀성/귀경 정보", "귀성/귀경 정보"),
        ("실시간 우회로 정보", "우회로 정보"),
        ("실시간 상황 및 예측 보기", "상황 및 예측 보기"),
    ],
    "src/app/holiday/[holiday]/page.tsx": [
        ("정체구간 실시간 조회", "정체구간 조회"),
    ],
    "src/app/cctv/page.tsx": [
        ("실시간 CCTV 보기", "CCTV 보기"),
        ("실시간 CCTV 주행 화면", "CCTV 주행 화면"),
        ("실시간 CCTV", "CCTV"),
        ("실시간 영상 스트리밍", "영상 스트리밍"),
        ("CCTV 실시간 보기", "CCTV 보기"),
        ("실시간 주행영상", "주행영상"),
    ],
    "src/app/cctv/[highway]/page.tsx": [
        ("실시간 CCTV 보기", "CCTV 보기"),
        ("실시간으로 중계합니다", "중계합니다"),
        ("CCTV 실시간 채널", "CCTV 채널"),
        ("실시간 영상으로", "영상으로"),
        ("실시간 주행 영상", "주행 영상"),
    ],
    "src/app/cctv/[highway]/[section]/page.tsx": [
        ("실시간 CCTV 상황판", "CCTV 상황판"),
        ("실시간 CCTV", "CCTV"),
        ("실시간 도로주행", "도로주행"),
        ("실시간 관제 연동", "관제 연동"),
        ("실시간 CCTV 라이브", "CCTV 라이브"),
        ("실시간 방송중", "방송중"),
        ("실시간 스트리밍", "스트리밍"),
        ("단독 실시간 중계", "단독 중계"),
        ("실시간 캠", "캠"),
    ],
    # NEWEST DISCOVERED
    "src/app/broadcast/page.tsx": [
        ("고속도로 실시간 exTV", "고속도로 exTV"),
        ("실시간 교통 상황 팟캐스트", "실시간 교통 상황 팟캐스트"), # Keep (교통상황)
        ("통합해서 실시간 제공합니다", "통합해서 제공합니다"),
        ("exTV 실시간 중계", "exTV 중계"),
        ("실시간 종합 교통방송", "종합 교통방송"),
        ("실시간 재생 시작", "재생 시작"),
        ("실시간 뉴스 속보", "뉴스 속보"),
    ],
    "src/app/ev/page.tsx": [
        ("실시간 상태", "상태"),
    ],
    "src/app/ev/[restAreaSlug]/layout.tsx": [
        ("실시간으로 확인해보세요", "확인해보세요"),
        ("실시간으로 안내해 드립니다", "안내해 드립니다"),
    ],
    "src/app/ev/[restAreaSlug]/page.tsx": [
        ("실시간으로 확인해보세요", "확인해보세요"),
    ],
    "src/app/facilities/[facility]/page.tsx": [
        ("실시간 편의정보", "편의정보"),
    ]
}

base_dir = r"c:\Users\서승재\OneDrive\Desktop\네이버 자동화\6월22일\고속도로"

for rel_path, pairs in replacements.items():
    file_path = os.path.join(base_dir, rel_path.replace("/", os.sep))
    if not os.path.exists(file_path):
        print(f"Warning: File not found {file_path}")
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    original = content
    for old_str, new_str in pairs:
        content = content.replace(old_str, new_str)
        
    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Successfully updated {rel_path}")
    else:
        print(f"No changes made to {rel_path} (already replaced or text missing)")
