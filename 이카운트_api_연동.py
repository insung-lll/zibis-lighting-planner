"""
이카운트 ERP Open API 연동 - 품목 조회
=====================================================
사용 전 준비:
  1. 이카운트 ERP → Self-Customizing → 정보관리 → API인증키발급 → IP등록
     (이 스크립트를 실행할 PC/서버의 공인IP를 등록해야 합니다)
  2. ecount_config.py 파일에 회사코드, 아이디, 테스트인증키 입력
     (이 파일은 .gitignore에 등록되어 있어 깃에 올라가지 않습니다)

주의:
  - 테스트인증키(IS_TEST=True)는 반드시 sboapi 도메인으로만 호출됩니다.
  - 개발검증(API인증현황 > 검증여부)은 실제 코드에서 이 3단계 호출이
    정상적으로 이루어져야 쌓입니다. 문서 사이트의 "API 직접실행" 버튼은
    검증에 반영되지 않습니다.
"""

import requests
import json

from ecount_config import COM_CODE, USER_ID, API_CERT_KEY, IS_TEST

DOMAIN_PREFIX = "sboapi" if IS_TEST else "oapi"


def get_zone(com_code: str) -> str:
    """Step 1: Zone 값 조회 (POST + JSON body)"""
    url = f"https://{DOMAIN_PREFIX}.ecount.com/OAPI/V2/Zone"
    res = requests.post(url, json={"COM_CODE": com_code})
    data = res.json()
    if str(data.get("Status")) == "200":
        zone = data["Data"]["ZONE"]
        print(f"✅ Zone: {zone}")
        return zone
    raise Exception(f"Zone 조회 실패: {data}")


def get_session(com_code: str, user_id: str, api_key: str, zone: str) -> str:
    """Step 2: SESSION_ID 발급"""
    url = f"https://{DOMAIN_PREFIX}{zone}.ecount.com/OAPI/V2/OAPILogin"
    payload = {
        "COM_CODE": com_code,
        "USER_ID": user_id,       # 필수: 테스트인증키를 발급받은 이카운트 ID
        "API_CERT_KEY": api_key,
        "LAN_TYPE": "ko-KR",
        "ZONE": zone,
    }
    res = requests.post(url, json=payload)
    data = res.json()
    if str(data.get("Status")) == "200":
        session_id = data["Data"]["Datas"]["SESSION_ID"]
        print(f"✅ SESSION_ID 발급 완료")
        return session_id
    raise Exception(f"로그인 실패: {data}")


def get_product_master(session_id: str, zone: str) -> list:
    """Step 3: 품목 마스터 전체 조회 (품번·품목명·단가 등)"""
    url = f"https://{DOMAIN_PREFIX}{zone}.ecount.com/OAPI/V2/InventoryBasic/GetBasicProductsList?SESSION_ID={session_id}"
    payload = {
        "PROD_CD": "",   # 빈 값 = 전체 품목
        "PROD_TYPE": "", # 빈 값 = 전체 타입 (0:원재료 1:제품 2:반제품 3:상품 4:부재료 7:무형상품)
    }
    res = requests.post(url, json=payload)
    data = res.json()
    if str(data.get("Status")) == "200":
        # Result는 JSON 문자열로 내려오는 경우가 있어 파싱 처리
        result = data["Data"].get("Result")
        items = json.loads(result) if isinstance(result, str) else (result or [])
        print(f"✅ 품목 마스터 {len(items)}건 조회")
        return items
    print(f"⚠️ 품목 조회 실패: {data.get('Status')} - {data.get('Error')}")
    return []


def get_purchase_orders(session_id: str, zone: str, date_from: str, date_to: str) -> list:
    """발주서조회 (읽기 전용 - 데이터 생성/수정 없음). date는 YYYYMMDD, 최대 30일 범위."""
    url = f"https://{DOMAIN_PREFIX}{zone}.ecount.com/OAPI/V2/Purchases/GetPurchasesOrderList?SESSION_ID={session_id}"
    payload = {
        "PROD_CD": "",
        "CUST_CD": "",
        "ListParam": {
            "PAGE_CURRENT": 1,
            "PAGE_SIZE": 100,
            "BASE_DATE_FROM": date_from,
            "BASE_DATE_TO": date_to,
        },
    }
    res = requests.post(url, json=payload)
    data = res.json()
    if str(data.get("Status")) == "200":
        items = data["Data"].get("Result") or []
        print(f"✅ 발주서 {len(items)}건 조회 (조회기간: {date_from}~{date_to})")
        return items
    print(f"⚠️ 발주서 조회 실패: {data.get('Status')} - {data.get('Error')}")
    return []


def main():
    print("=" * 50)
    print("이카운트 ERP API 연동 시작")
    print("=" * 50)

    # 1. Zone 확인
    zone = get_zone(COM_CODE)

    # 2. 세션 발급
    session_id = get_session(COM_CODE, USER_ID, API_CERT_KEY, zone)

    # 3. 품목 마스터 조회
    products = get_product_master(session_id, zone)
    if products:
        for p in products[:10]:
            print(f"  - PROD_CD(품번): {p.get('PROD_CD')} | 품목명: {p.get('PROD_DES')} | 출고단가: {p.get('OUT_PRICE')}")
        if len(products) > 10:
            print(f"  ... 외 {len(products)-10}건")

    with open("이카운트_조회결과.json", "w", encoding="utf-8") as f:
        json.dump(products, f, ensure_ascii=False, indent=2)
    print("\n✅ 결과 저장: 이카운트_조회결과.json")

    # 4. 발주서조회 (읽기 전용 - 최근 30일)
    from datetime import date, timedelta
    today = date.today()
    date_from = (today - timedelta(days=30)).strftime("%Y%m%d")
    date_to = today.strftime("%Y%m%d")
    orders = get_purchase_orders(session_id, zone, date_from, date_to)
    for o in orders[:5]:
        print(f"  - 발주번호: {o.get('ORD_NO')} | 거래처: {o.get('CUST_DES')} | 품목: {o.get('PROD_DES')}")


if __name__ == "__main__":
    main()
