"""
이카운트 ERP Open API 연동 - 판매 상품 및 재고 조회
=====================================================
사용 전 준비:
  1. 이카운트 ERP → 시스템환경설정 → Open API → API 인증키 발급
  2. 아래 CONFIG 섹션에 회사코드, API 키 입력
"""

import requests
import json

# ─────────────────────────────────────────────
#  CONFIG  ← 여기만 수정하면 됩니다
# ─────────────────────────────────────────────
COM_CODE = "YOUR_COMPANY_CODE"   # 이카운트 회사코드 (숫자 8자리)
API_KEY  = "YOUR_API_KEY"        # 이카운트 Open API 인증키
# ─────────────────────────────────────────────


def get_zone(com_code: str) -> str:
    """Step 1: Zone 값 조회"""
    url = f"https://oapi.ecount.com/OAPI/V2/Zone?COM_CODE={com_code}"
    res = requests.get(url)
    data = res.json()
    if data.get("Status") == "200":
        zone = data["Data"]["ZONE"]
        print(f"✅ Zone: {zone}")
        return zone
    raise Exception(f"Zone 조회 실패: {data}")


def get_session(com_code: str, api_key: str, zone: str) -> str:
    """Step 2: SESSION_ID 발급"""
    url = f"https://oapi{zone}.ecount.com/OAPI/V2/OAPILogin"
    payload = {
        "COM_CODE": com_code,
        "USER_ID": "",          # Open API는 사용자 ID 불필요
        "API_CERT_KEY": api_key,
        "LAN_TYPE": "ko-KR",
        "ZONE": zone,
    }
    res = requests.post(url, json=payload)
    data = res.json()
    if data.get("Status") == "200":
        session_id = data["Data"]["Datas"]["SESSION_ID"]
        print(f"✅ SESSION_ID 발급 완료")
        return session_id
    raise Exception(f"로그인 실패: {data}")


def get_products(session_id: str, zone: str) -> list:
    """Step 3-A: 판매 상품 목록 조회"""
    url = f"https://oapi{zone}.ecount.com/OAPI/V2/Inventory/GetPurchaseList"
    # 판매 상품은 재고 유형으로 조회
    url = f"https://oapi{zone}.ecount.com/OAPI/V2/Sale/GetSaleProductList"
    payload = {
        "SESSION_ID": session_id,
        "SEARCH_KEY": "",       # 빈 값 = 전체 조회
        "PAGE_SIZE": 100,
        "PAGE_NUM": 1,
    }
    res = requests.post(url, json=payload)
    data = res.json()
    if data.get("Status") == "200":
        items = data["Data"]["Datas"]
        print(f"✅ 판매 상품 {len(items)}건 조회")
        return items
    print(f"⚠️ 판매 상품 조회 실패: {data.get('Status')} - {data.get('Error')}")
    return []


def get_inventory(session_id: str, zone: str) -> list:
    """Step 3-B: 재고 현황 조회"""
    url = f"https://oapi{zone}.ecount.com/OAPI/V2/Inventory/GetInventoryList"
    payload = {
        "SESSION_ID": session_id,
        "PROD_CD": "",          # 빈 값 = 전체 품목
        "WH_CD": "",            # 빈 값 = 전체 창고
        "PAGE_SIZE": 200,
        "PAGE_NUM": 1,
    }
    res = requests.post(url, json=payload)
    data = res.json()
    if data.get("Status") == "200":
        items = data["Data"]["Datas"]
        print(f"✅ 재고 {len(items)}건 조회")
        return items
    print(f"⚠️ 재고 조회 실패: {data.get('Status')} - {data.get('Error')}")
    return []


def get_product_master(session_id: str, zone: str) -> list:
    """Step 3-C: 품목 마스터 전체 조회 (상품 코드·이름·단가 등)"""
    url = f"https://oapi{zone}.ecount.com/OAPI/V2/Inventory/GetProductList"
    payload = {
        "SESSION_ID": session_id,
        "PROD_CD": "",
        "PAGE_SIZE": 500,
        "PAGE_NUM": 1,
    }
    res = requests.post(url, json=payload)
    data = res.json()
    if data.get("Status") == "200":
        items = data["Data"]["Datas"]
        print(f"✅ 품목 마스터 {len(items)}건 조회")
        return items
    print(f"⚠️ 품목 조회 실패: {data.get('Status')} - {data.get('Error')}")
    return []


def main():
    print("=" * 50)
    print("이카운트 ERP API 연동 시작")
    print("=" * 50)

    # 1. Zone 확인
    zone = get_zone(COM_CODE)

    # 2. 세션 발급
    session_id = get_session(COM_CODE, API_KEY, zone)

    # 3. 데이터 조회
    print("\n[품목 마스터]")
    products = get_product_master(session_id, zone)
    if products:
        for p in products[:5]:  # 상위 5건만 출력
            print(f"  - {p.get('PROD_CD')} | {p.get('PROD_DES')} | 단가: {p.get('PRICE')}")
        if len(products) > 5:
            print(f"  ... 외 {len(products)-5}건")

    print("\n[재고 현황]")
    inventory = get_inventory(session_id, zone)
    if inventory:
        for i in inventory[:5]:
            print(f"  - {i.get('PROD_CD')} | {i.get('PROD_DES')} | 재고: {i.get('QTY')} {i.get('UNIT')}")
        if len(inventory) > 5:
            print(f"  ... 외 {len(inventory)-5}건")

    # 결과 JSON 저장
    result = {
        "products": products,
        "inventory": inventory,
    }
    with open("이카운트_조회결과.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print("\n✅ 결과 저장: 이카운트_조회결과.json")


if __name__ == "__main__":
    main()
