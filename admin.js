// ==================== SUPABASE CONFIG (shared with app.js) ====================
const SUPABASE_URL = 'https://wezywuqfzyyylpxsfdgu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlenl3dXFmenl5eWxweHNmZGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNDMxOTgsImV4cCI6MjA5NzkxOTE5OH0.NwqsxnM95LvZQ8Omyc-j9_RsayT5KIJ7QABy2Df43so';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==================== STATE ====================
let allRows = [];       // all fetched consultation records
let currentRow = null;  // currently opened detail modal record
let allProducts = [];        // all fetched product records
let productsLoaded = false;  // lazy-load guard
let currentBomRows = [];     // BOM rows for the currently opened detail modal (for excel export)
let currentBomTotal = 0;     // BOM total for the currently opened detail modal
let currentQuoteHasIot = false; // 현재 모달의 견적이 IoT 제품을 포함하는지 (컨트롤러 확인 소프트 게이트에 사용)
let currentFinalBom = []; // 담당자가 직접 수정 가능한 최종 발송용 견적 품목 (자동 계산 BOM과 별개, ConsultationRequest.final_bom에 저장)
let currentQuoteLights = []; // 현재 모달의 견적에 배치된 조명 원본 데이터 (도면 위 호버 툴팁용)
let currentQuoteZones = [];  // 현재 모달의 견적 존 데이터 (도면 위 호버 툴팁의 공간명 판별용)
let settingsLoaded = false;  // 설정 탭 lazy-load guard
let companyStampPath = null; // company-assets 버킷 내 도장 이미지 경로 (비공개 버킷이라 URL 아닌 경로로 보관, 필요 시 서명 URL 생성)

// ==================== AUTH GATE ====================
async function checkAdminAuth() {
  const authGate = document.getElementById('authGate');
  const authMsg = document.getElementById('authGateMsg');
  const adminMain = document.getElementById('adminMain');

  // 1. 로그인 세션 확인
  const { data: { user }, error: authErr } = await sb.auth.getUser();
  if (authErr || !user) {
    authMsg.textContent = '로그인이 필요합니다. 플래너 홈으로 이동합니다...';
    setTimeout(() => { window.location.href = 'index.html'; }, 1800);
    return;
  }

  // 2. profiles 테이블에서 role 확인
  const { data: profile, error: profileErr } = await sb
    .from('profiles')
    .select('contact_name, role')
    .eq('id', user.id)
    .single();

  if (profileErr || !profile || profile.role !== 'admin') {
    authMsg.textContent = '어드민 접근 권한이 없습니다. 홈으로 이동합니다...';
    setTimeout(() => { window.location.href = 'index.html'; }, 1800);
    return;
  }

  // 3. 통과 - 어드민 UI 노출
  document.getElementById('txtAdminUser').textContent = profile.contact_name + ' 담당자님';
  authGate.style.opacity = '0';
  setTimeout(() => {
    authGate.style.display = 'none';
    adminMain.style.display = 'block';
  }, 400);

  // 4. 데이터 로드 (제품 목록은 상담 상세 BOM의 품번 조회에도 필요해 함께 로드)
  await Promise.all([loadConsultations(), loadProducts()]);
  bindEvents();
}

// ==================== DATA LOADING ====================
async function loadConsultations() {
  const { data, error } = await sb
    .from('ConsultationRequest')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    showToast('데이터를 불러오는 중 오류가 발생했습니다.');
    console.error(error);
    return;
  }

  allRows = data || [];
  updateWidgets(allRows);
  renderTable(allRows);
}

// ==================== WIDGETS ====================
function updateWidgets(rows) {
  document.getElementById('wTotal').textContent = rows.length;
  const pending = rows.filter(r => r.status === '상담대기').length;
  const done = rows.filter(r => r.status !== '상담대기').length;
  document.getElementById('wPending').textContent = pending;
  document.getElementById('wDone').textContent = done;
}

// ==================== TABLE RENDERING ====================
function renderTable(rows) {
  const tbody = document.getElementById('tableBody');
  const emptyMsg = document.getElementById('emptyMsg');

  if (rows.length === 0) {
    tbody.innerHTML = '';
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';

  tbody.innerHTML = rows.map(r => {
    const dt = new Date(r.created_at);
    const dateStr = dt.toLocaleDateString('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit' }) +
      ' ' + dt.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    const phone = formatPhone(r.phone);
    const statusClass = 'status-' + (r.status || '상담대기').replace(/\s+/g, '');
    const statusLabel = r.status || '상담대기';
    return `
      <tr>
        <td style="color:var(--text-dim); font-size:12px;">${dateStr}</td>
        <td><strong>${r.name || '-'}</strong></td>
        <td style="font-size:12px;">${phone}</td>
        <td style="font-size:12px; color:var(--text-dim);">${r.address || '-'}</td>
        <td style="font-size:12px; color:var(--text-dim);">${r.hope_date || '미정'}</td>
        <td style="text-align:center;">
          <span class="status-badge ${statusClass}">${statusLabel}</span>
        </td>
        <td style="text-align:center;">
          <button class="btn-detail" onclick="openDetail('${r.id}')">상세</button>
        </td>
      </tr>`;
  }).join('');
}

// ==================== FILTER & SEARCH ====================
function applyFilter() {
  const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
  const status = document.getElementById('statusFilter').value;
  let filtered = allRows;
  if (status) filtered = filtered.filter(r => r.status === status);
  if (keyword) {
    filtered = filtered.filter(r =>
      (r.name || '').toLowerCase().includes(keyword) ||
      (r.phone || '').includes(keyword) ||
      (r.address || '').toLowerCase().includes(keyword)
    );
  }
  renderTable(filtered);
}

// ==================== PRODUCT PRICE MANAGEMENT ====================
async function loadProducts() {
  const { data, error } = await sb
    .from('products')
    .select('id, name, category, product_line, price, ecount_prod_cd')
    .order('name', { ascending: true });

  if (error) {
    showToast('제품 목록을 불러오는 중 오류가 발생했습니다.');
    console.error(error);
    return;
  }

  allProducts = data || [];
  productsLoaded = true;
  applyProductFilter();
}

function renderProductTable(rows) {
  const tbody = document.getElementById('productTableBody');
  const emptyMsg = document.getElementById('productEmptyMsg');

  if (rows.length === 0) {
    tbody.innerHTML = '';
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';

  tbody.innerHTML = rows.map(p => {
    const lineLabel = p.product_line === 'zibis_general' ? '일반 조명' : 'IoT 조명';
    return `
      <tr>
        <td><strong>${p.name}</strong></td>
        <td style="color:var(--text-dim); font-size:12px;">${p.category || '-'}</td>
        <td><span class="line-badge line-${p.product_line || 'zibis_iot'}">${lineLabel}</span></td>
        <td style="text-align:right;">
          <input type="text" inputmode="numeric" pattern="[0-9]*" class="price-input" data-id="${p.id}" data-original="${p.price}" value="${p.price}">
          <button class="btn-price-save" data-id="${p.id}">저장</button>
        </td>
      </tr>`;
  }).join('');
}

function applyProductFilter() {
  const keyword = document.getElementById('productSearchInput').value.trim().toLowerCase();
  const line = document.getElementById('productLineFilter').value;
  let filtered = allProducts;
  if (line) filtered = filtered.filter(p => (p.product_line || 'zibis_iot') === line);
  if (keyword) filtered = filtered.filter(p => (p.name || '').toLowerCase().includes(keyword));
  renderProductTable(filtered);
}

async function saveProductPrice(id, input, btn) {
  const newPrice = Number(input.value);
  if (!Number.isFinite(newPrice) || newPrice < 0) {
    showToast('올바른 가격을 입력해주세요.');
    return;
  }

  const { error } = await sb
    .from('products')
    .update({ price: newPrice })
    .eq('id', id);

  if (error) {
    showToast('가격 저장 중 오류가 발생했습니다.');
    console.error(error);
    return;
  }

  input.dataset.original = newPrice;
  input.classList.remove('dirty');
  btn.classList.remove('enabled');
  const p = allProducts.find(p => p.id === id);
  if (p) p.price = newPrice;

  showToast('가격이 저장되었습니다.');
}

// ==================== TAB SWITCHING ====================
function switchTab(tab) {
  document.getElementById('tabBtnConsult').classList.toggle('active', tab === 'consult');
  document.getElementById('tabBtnProducts').classList.toggle('active', tab === 'products');
  document.getElementById('tabBtnSettings').classList.toggle('active', tab === 'settings');
  document.getElementById('viewConsult').style.display = tab === 'consult' ? 'block' : 'none';
  document.getElementById('viewProducts').style.display = tab === 'products' ? 'block' : 'none';
  document.getElementById('viewSettings').style.display = tab === 'settings' ? 'block' : 'none';

  if (tab === 'products' && !productsLoaded) {
    loadProducts();
  }
  if (tab === 'settings' && !settingsLoaded) {
    loadCompanySettings();
  }
}

// ==================== SETTINGS (회사 도장) ====================
async function loadCompanySettings() {
  const { data, error } = await sb.from('company_settings').select('stamp_url').eq('id', 1).single();
  settingsLoaded = true;
  if (error || !data || !data.stamp_url) {
    companyStampPath = null;
    renderStampPreview(null);
    return;
  }

  companyStampPath = data.stamp_url;
  const { data: signed, error: signErr } = await sb.storage.from('company-assets').createSignedUrl(data.stamp_url, 3600);
  renderStampPreview(signErr ? null : signed.signedUrl);
}

function renderStampPreview(url) {
  const img = document.getElementById('stampPreview');
  const noStamp = document.getElementById('lblNoStamp');
  if (url) {
    img.src = url;
    img.style.display = 'block';
    noStamp.style.display = 'none';
  } else {
    img.style.display = 'none';
    noStamp.style.display = 'block';
  }
}

async function uploadStamp(file) {
  if (!file) return;
  if (file.type !== 'image/png') {
    showToast('PNG 파일만 업로드할 수 있습니다.');
    return;
  }

  const path = `stamp_${Date.now()}.png`;
  const { error: uploadErr } = await sb.storage.from('company-assets').upload(path, file, { contentType: 'image/png' });
  if (uploadErr) {
    showToast('업로드 실패: ' + uploadErr.message);
    return;
  }

  const { error: updateErr } = await sb.from('company_settings').update({ stamp_url: path }).eq('id', 1);
  if (updateErr) {
    showToast('설정 저장 실패: ' + updateErr.message);
    return;
  }

  showToast('도장 이미지가 저장되었습니다.');
  loadCompanySettings();
}

// ==================== DETAIL MODAL ====================
async function openDetail(id) {
  currentRow = allRows.find(r => r.id === id);
  if (!currentRow) return;

  const modal = document.getElementById('detailModal');

  // Fill customer info
  document.getElementById('modalTitle').textContent = `[상담신청] ${currentRow.name} 고객님`;
  document.getElementById('mName').textContent = currentRow.name || '-';
  document.getElementById('mPhone').textContent = formatPhone(currentRow.phone) || '-';
  document.getElementById('mAddress').textContent = currentRow.address || '-';
  document.getElementById('mHopeDate').textContent = currentRow.hope_date || '미정';
  document.getElementById('mQuoteId').textContent = currentRow.quote_id || '없음';
  document.getElementById('mRemarks').textContent = currentRow.remarks || '작성된 요청사항이 없습니다.';

  // Status select
  const sel = document.getElementById('selectModalStatus');
  sel.value = currentRow.status || '상담대기';

  // Blueprint image + controller markers (고객이 상담내역에서 표시한 위치, 읽기 전용)
  const wrap = document.getElementById('adminBlueprintWrap');
  const img = document.getElementById('imgBlueprint');
  const noImg = document.getElementById('lblNoImg');
  if (currentRow.image_url) {
    img.src = currentRow.image_url;
    wrap.style.display = 'inline-block';
    noImg.style.display = 'none';
  } else {
    wrap.style.display = 'none';
    noImg.style.display = 'block';
  }
  renderAdminMarkerPins(currentRow.controller_markers || []);
  document.getElementById('lblMarkerCount').textContent = (currentRow.controller_markers || []).length;
  document.getElementById('chkControllerConfirmed').checked = !!currentRow.controller_confirmed;

  // BOM from linked quote
  await loadBom(currentRow.quote_id);
  renderAdminLightHoverTargets('adminLightHoverTargets', img);

  // 최종 견적 품목: 이미 편집/저장된 값이 있으면 그걸, 없으면 자동 계산값을 초기값으로 사용
  currentFinalBom = (currentRow.final_bom && currentRow.final_bom.length > 0)
    ? JSON.parse(JSON.stringify(currentRow.final_bom))
    : JSON.parse(JSON.stringify(currentBomRows));
  // 공간 컬럼 추가 이전에 저장된 최종 견적은 zone이 비어있을 수 있어, 자동계산 BOM에서 매칭해 보완
  currentFinalBom.forEach(item => {
    if (!item.zone) {
      const match = currentBomRows.find(r => r.code === item.code && r.name === item.name);
      item.zone = match ? match.zone : '-';
    }
  });
  renderFinalBomTable();
  renderSendStatusNote();

  modal.classList.add('open');
}

function renderAdminMarkerPins(markers, containerId) {
  const pinsContainer = document.getElementById(containerId || 'adminMarkerPins');
  pinsContainer.innerHTML = '';
  markers.forEach((m, idx) => {
    const pin = document.createElement('div');
    pin.className = 'admin-marker-pin';
    pin.style.left = (m.x * 100) + '%';
    pin.style.top = (m.y * 100) + '%';
    pin.textContent = idx + 1;
    pinsContainer.appendChild(pin);
  });
}

// ==================== 도면 확대 보기 (라이트박스) ====================
function openBlueprintLightbox() {
  if (!currentRow || !currentRow.image_url) return;
  const lightboxImg = document.getElementById('lightboxImg');
  lightboxImg.src = currentRow.image_url;
  renderAdminMarkerPins(currentRow.controller_markers || [], 'lightboxPins');
  renderAdminLightHoverTargets('lightboxLightHoverTargets', lightboxImg);
  document.getElementById('blueprintLightbox').classList.add('open');
}

function closeBlueprintLightbox() {
  document.getElementById('blueprintLightbox').classList.remove('open');
}

// 도면 위 조명 위치에 마우스를 올리면 어떤 제품인지 툴팁으로 표시
function renderAdminLightHoverTargets(containerId, imgEl) {
  const container = document.getElementById(containerId);
  if (!container || !imgEl) return;

  const render = () => {
    container.innerHTML = '';
    const w = imgEl.naturalWidth || 0;
    const h = imgEl.naturalHeight || 0;
    if (!w || !h) return;
    currentQuoteLights.forEach(l => {
      if (MAGNETIC_RAIL_TYPE_IDS.includes(l.typeId)) return; // 레일(선분)은 점 호버로 표현하기 애매해 제외
      const px = l.x2 !== undefined ? (l.x + l.x2) / 2 : l.x;
      const py = l.y2 !== undefined ? (l.y + l.y2) / 2 : l.y;
      const product = allProducts.find(p => p.id === l.typeId);
      const productLabel = l.name || (product && product.name) || l.typeId;
      const zoneName = findZoneNameForLight(l, currentQuoteZones);
      const dot = document.createElement('div');
      dot.className = 'admin-light-hover-dot';
      dot.style.left = (px / w * 100) + '%';
      dot.style.top = (py / h * 100) + '%';
      dot.title = zoneName !== '-' ? `${zoneName}\n${productLabel}` : productLabel;
      container.appendChild(dot);
    });
  };

  if (imgEl.complete && imgEl.naturalWidth > 0) {
    render();
  } else {
    imgEl.onload = render;
  }
}

// ==================== BOM ACCESSORY LOOKUPS (mirrors app.js auto-added 컨버터/컨트롤러/허브 pricing) ====================
function findAdminProductByName(namePattern) {
  return allProducts.find(p => (p.name || '').includes(namePattern));
}
function findAdminConverter(watt) {
  return allProducts.find(p => (p.category || '').trim() === '컨버터' && (p.name || '').includes(`${watt}W`));
}
function findAdminController() {
  return allProducts.find(p => (p.category || '').trim() === '컨트롤러' || (p.name || '').includes('컨트롤러'));
}
function toBomItem(product, fallbackName, fallbackPrice, qty, zone) {
  return {
    zone: zone || '-',
    code: (product && product.ecount_prod_cd) || '-',
    name: product ? product.name : fallbackName,
    count: qty,
    price: product ? Number(product.price) : fallbackPrice
  };
}

const MAGNETIC_RAIL_TYPE_IDS = ['magnetic-rail', 'fe1f7195-3630-49c0-8cda-f5ea732cfe57'];

// app.js의 isPointInPolygon/isLightInPolygon과 동일한 판별 로직 (조명이 속한 공간명 파악용)
function isPointInPolygon(pt, poly) {
  let isInside = false;
  const n = poly.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    if (((poly[i].y > pt.y) !== (poly[j].y > pt.y)) &&
        (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)) {
      isInside = !isInside;
    }
  }
  return isInside;
}

function findZoneNameForLight(l, zones) {
  const pt = (l.x2 !== undefined && l.y2 !== undefined)
    ? { x: (l.x + l.x2) / 2, y: (l.y + l.y2) / 2 }
    : { x: l.x, y: l.y };
  const zone = zones.find(z => isPointInPolygon(pt, z.points));
  return zone ? zone.name : '-';
}

async function loadBom(quoteId) {
  const bomBody = document.getElementById('bomBody');
  const noBom = document.getElementById('noBom');
  const lblTotal = document.getElementById('lblTotalCost');

  bomBody.innerHTML = '';
  noBom.style.display = 'none';
  lblTotal.textContent = '₩0';
  currentBomRows = [];
  currentBomTotal = 0;
  currentQuoteHasIot = false;
  currentQuoteLights = [];
  currentQuoteZones = [];

  if (!quoteId) { noBom.style.display = 'block'; return; }

  const { data: quote, error } = await sb
    .from('quotes')
    .select('project_data')
    .eq('id', quoteId)
    .single();

  if (error || !quote || !quote.project_data) { noBom.style.display = 'block'; return; }

  const pd = quote.project_data;
  const lights = pd.lights || [];
  const zones = pd.zones || [];
  currentQuoteLights = lights;
  currentQuoteZones = zones;
  if (lights.length === 0) { noBom.style.display = 'block'; return; }

  const rows = [];

  // 1) 일반 조명 기구: (공간, typeId)별 집계 (마그네틱 레일은 2)에서 별도 처리)
  const agg = {};
  let magneticTotalLenM = 0;
  const ppm = pd.pixelsPerMeter || 50;
  lights.forEach(l => {
    if (MAGNETIC_RAIL_TYPE_IDS.includes(l.typeId)) {
      const dx = (l.x2 ?? l.x) - l.x;
      const dy = (l.y2 ?? l.y) - l.y;
      const lenPx = Math.sqrt(dx * dx + dy * dy);
      magneticTotalLenM += ppm > 0 ? lenPx / ppm : 0;
      return;
    }
    const zoneName = findZoneNameForLight(l, zones);
    const key = zoneName + '||' + l.typeId;
    if (!agg[key]) {
      const product = allProducts.find(p => p.id === l.typeId);
      agg[key] = {
        zone: zoneName,
        code: (product && product.ecount_prod_cd) || '-',
        name: l.name || (product && product.name) || l.typeId,
        count: 0,
        price: typeof l.price === 'number' ? l.price : Number((product && product.price) || 0)
      };
    }
    agg[key].count++;
  });
  rows.push(...Object.values(agg));

  // 2) 마그네틱 레일 시스템 (레일 + 전용 컨버터/컨트롤러/부자재, 2M 단위 올림 계산)
  if (magneticTotalLenM > 0) {
    const n2 = Math.ceil(Math.ceil(magneticTotalLenM) / 2);
    const nConn = Math.max(0, n2 - 1);
    if (n2 > 0) rows.push(toBomItem(findAdminProductByName('마그네틱 레일 2M'), '마그네틱 레일 2M', 46560, n2));
    rows.push(toBomItem(findAdminConverter(150), '마그네틱 컨버터 150W (유니온)', 44100, 1));
    rows.push(toBomItem(findAdminController(), '마그네틱 컨트롤러', 35000, 1));
    if (nConn > 0) rows.push(toBomItem(findAdminProductByName('마그네틱 연결선'), '마그네틱 연결선', 18720, nConn));
    rows.push(toBomItem(findAdminProductByName('마그네틱 전원선'), '마그네틱 전원선', 16320, 1));
    rows.push(toBomItem(findAdminProductByName('마그네틱 마감캡'), '마그네틱 마감캡', 360, 1));
  }

  // 3) 존별 자동 산출된 컨버터(SMPS)/컨트롤러 — 공간별로 행을 나눠서 표시
  zones.forEach(zone => {
    const smpsCounts = {};
    (zone.requiredSMPS || []).forEach(cap => { smpsCounts[cap] = (smpsCounts[cap] || 0) + 1; });
    Object.entries(smpsCounts).forEach(([cap, qty]) => {
      rows.push(toBomItem(findAdminConverter(cap), `IoT 컨버터 ${cap}W`, 0, qty, zone.name));
    });

    let controllerQty = 0;
    (zone.requiredControllers || []).forEach(ctrl => {
      controllerQty += typeof ctrl === 'string' ? 1 : (ctrl.qty || 1);
    });
    if (controllerQty > 0) {
      rows.push(toBomItem(findAdminController(), 'IoT 컨트롤러', 0, controllerQty, zone.name));
    }
  });

  // 4) 허브: 프로젝트 전체에 IoT 조명이 1개라도 있으면 1개 (존 단위 아님)
  currentQuoteHasIot = lights.some(l => {
    const product = allProducts.find(p => p.id === l.typeId);
    return product ? product.product_line === 'zibis_iot' : true; // 매칭 안되는 레거시 typeId는 대부분 IoT 라인이므로 기본 포함
  });
  if (currentQuoteHasIot) {
    rows.push(toBomItem(findAdminProductByName('허브'), '허브', 200000, 1));
  }

  // 공간(존)별로 묶어서 정렬 — 도면에 등록된 순서 기준, 특정 공간이 없는 품목(허브 등)은 맨 뒤로
  const zoneOrder = {};
  zones.forEach((z, i) => { zoneOrder[z.name] = i; });
  rows.sort((a, b) => {
    const oa = a.zone && a.zone !== '-' ? (zoneOrder[a.zone] ?? 999) : 999;
    const ob = b.zone && b.zone !== '-' ? (zoneOrder[b.zone] ?? 999) : 999;
    return oa - ob;
  });

  currentBomRows = rows;
  rows.forEach(item => {
    const subtotal = item.price * item.count;
    currentBomTotal += subtotal;
    bomBody.innerHTML += `
      <tr>
        <td style="color:var(--text-dim); font-size:11px;">${item.zone || '-'}</td>
        <td style="color:var(--text-dim); font-size:11px;">${item.code}</td>
        <td>${item.name}</td>
        <td style="text-align:center;">${item.count}</td>
        <td style="text-align:right;">${item.price > 0 ? '₩' + item.price.toLocaleString() : '-'}</td>
      </tr>`;
  });

  lblTotal.textContent = '₩' + currentBomTotal.toLocaleString();
}

// ==================== FINAL BOM (발송용, 담당자 직접 수정) ====================
function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function renderFinalBomTable() {
  const tbody = document.getElementById('finalBomBody');
  tbody.innerHTML = currentFinalBom.map((item, idx) => `
    <tr>
      <td><input type="text" class="bom-edit-input" data-idx="${idx}" data-field="zone" value="${escapeAttr(item.zone || '')}"></td>
      <td><input type="text" class="bom-edit-input" data-idx="${idx}" data-field="code" value="${escapeAttr(item.code || '')}"></td>
      <td><input type="text" class="bom-edit-input" data-idx="${idx}" data-field="name" value="${escapeAttr(item.name || '')}"></td>
      <td><input type="text" inputmode="numeric" pattern="[0-9]*" class="bom-edit-input num" data-idx="${idx}" data-field="count" value="${item.count}"></td>
      <td><input type="text" inputmode="numeric" pattern="[0-9]*" class="bom-edit-input num" data-idx="${idx}" data-field="price" value="${item.price}"></td>
      <td><button class="btn-final-bom-del" data-idx="${idx}" title="삭제">×</button></td>
    </tr>`).join('');
  renderFinalBomTotal();
}

function renderFinalBomTotal() {
  const total = currentFinalBom.reduce((sum, item) => sum + (Number(item.count) || 0) * (Number(item.price) || 0), 0);
  document.getElementById('lblFinalBomTotal').textContent = '₩' + total.toLocaleString();
}

async function saveFinalBom() {
  if (!currentRow) return;
  const { error } = await sb.from('ConsultationRequest').update({ final_bom: currentFinalBom }).eq('id', currentRow.id);
  if (error) {
    showToast('최종 견적 저장 실패: ' + error.message);
    return;
  }
  currentRow.final_bom = currentFinalBom;
  const idx = allRows.findIndex(r => r.id === currentRow.id);
  if (idx !== -1) allRows[idx].final_bom = currentFinalBom;
}

function closeDetail() {
  document.getElementById('detailModal').classList.remove('open');
  currentRow = null;
}

// ==================== EXCEL EXPORT ====================
async function exportQuoteToExcel() {
  if (!currentRow) return;
  if (currentBomRows.length === 0) {
    showToast('다운로드할 자재 정보가 없습니다.');
    return;
  }

  const workbook = new ExcelJS.Workbook();
  const ws = workbook.addWorksheet('견적서');
  ws.getColumn(1).width = 20;
  ws.getColumn(2).width = 42;
  ws.getColumn(3).width = 10;
  ws.getColumn(4).width = 14;
  ws.getColumn(5).width = 16;

  const titleRow = ws.addRow(['ZIBIS 견적서']);
  titleRow.getCell(1).font = { name: 'Malgun Gothic', bold: true, size: 16 };
  ws.addRow([]);

  const addInfoRow = (label, value) => {
    const row = ws.addRow([label, value]);
    row.getCell(1).font = { name: 'Malgun Gothic', bold: true, color: { argb: 'FF999999' } };
    row.getCell(2).font = { name: 'Malgun Gothic' };
  };
  addInfoRow('성함', currentRow.name || '-');
  addInfoRow('연락처', formatPhone(currentRow.phone) || '-');
  addInfoRow('시공지 주소', currentRow.address || '-');
  addInfoRow('희망 시공일', currentRow.hope_date || '미정');
  ws.addRow([]);

  const headerRow = ws.addRow(['품번', '자재명', '수량', '단가', '합계']);
  headerRow.eachCell(cell => {
    cell.font = { name: 'Malgun Gothic', bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F2937' } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });

  currentBomRows.forEach(item => {
    const subtotal = item.price * item.count;
    const row = ws.addRow([item.code, item.name, item.count, item.price, subtotal]);
    row.getCell(3).alignment = { horizontal: 'center' };
    row.getCell(4).numFmt = '#,##0';
    row.getCell(5).numFmt = '#,##0';
  });

  const totalRow = ws.addRow(['', '', '', '총 금액', currentBomTotal]);
  totalRow.getCell(4).font = { name: 'Malgun Gothic', bold: true };
  totalRow.getCell(5).font = { name: 'Malgun Gothic', bold: true };
  totalRow.getCell(5).numFmt = '#,##0';

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentRow.name || '견적'}_지비스_견적서_${Date.now()}.xlsx`;
  a.click();
  URL.revokeObjectURL(url);
}

// ==================== FINAL QUOTE SEND (정식 양식 견적서 발송) ====================
const ZIBIS_SUPPLIER = {
  regNo: '361-86-01586',
  name: '주식회사 지비스',
  ceo: '박효실,윤재동',
  address: '경기도 성남시 판교역로240 삼환하이펙스 a동 601호',
  bizType: '제조업',
  bizItem: 'LED등기구. 도어락, 온도조절기'
};

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function loadImageEl(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function generateFloorplanWithPins() {
  if (!currentRow.image_url) return null;
  try {
    const img = await loadImageEl(currentRow.image_url);
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const markers = currentRow.controller_markers || [];
    markers.forEach((m, idx) => {
      const x = m.x * canvas.width;
      const y = m.y * canvas.height;
      const r = Math.max(canvas.width, canvas.height) * 0.014;
      ctx.beginPath();
      ctx.arc(x, y, r * 1.35, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = '#10b981';
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.round(r)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(idx + 1), x, y + r * 0.05);
    });

    return await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  } catch (e) {
    console.warn('도면 합성 실패, 도면 없이 진행합니다:', e);
    return null;
  }
}

async function generateFormalQuoteExcel() {
  const workbook = new ExcelJS.Workbook();
  const ws = workbook.addWorksheet('견적서');
  const GREEN = 'FF2E7D32';
  ws.columns = [
    { width: 7 }, { width: 7 }, { width: 30 }, { width: 8 },
    { width: 12 }, { width: 14 }, { width: 12 }, { width: 18 }
  ];

  const thinBorder = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
  const applyBorder = (r1, r2, c1, c2) => {
    for (let r = r1; r <= r2; r++) for (let c = c1; c <= c2; c++) ws.getCell(r, c).border = thinBorder;
  };

  // 상단 타이틀 + 프로젝트명
  ws.mergeCells('A1:B4');
  const titleCell = ws.getCell('A1');
  titleCell.value = '견적서';
  titleCell.font = { name: 'Malgun Gothic', size: 20, bold: true };
  titleCell.alignment = { vertical: 'middle', horizontal: 'center' };

  ws.mergeCells('A5:B6');
  const projectCell = ws.getCell('A5');
  projectCell.value = currentRow.address || '';
  projectCell.font = { name: 'Malgun Gothic', size: 11, bold: true };
  projectCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  ws.mergeCells('C1:C6');
  const gongGeupJaCell = ws.getCell('C1');
  gongGeupJaCell.value = '공급자';
  gongGeupJaCell.font = { name: 'Malgun Gothic', bold: true };
  gongGeupJaCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };

  const supplierRows = [
    ['등록번호', ZIBIS_SUPPLIER.regNo],
    ['상   호', ZIBIS_SUPPLIER.name],
    ['대 표 자', ZIBIS_SUPPLIER.ceo],
    ['주   소', ZIBIS_SUPPLIER.address],
    ['업   태', ZIBIS_SUPPLIER.bizType],
    ['종   목', ZIBIS_SUPPLIER.bizItem]
  ];
  supplierRows.forEach((row, i) => {
    const r = i + 1;
    const labelCell = ws.getCell(r, 4);
    labelCell.value = row[0];
    labelCell.font = { name: 'Malgun Gothic', bold: true, size: 10 };
    labelCell.alignment = { vertical: 'middle', horizontal: 'center' };
    ws.mergeCells(r, 5, r, 8);
    const valCell = ws.getCell(r, 5);
    valCell.value = row[1];
    valCell.font = { name: 'Malgun Gothic', size: 10 };
    valCell.alignment = { vertical: 'middle', horizontal: 'center' };
  });
  applyBorder(1, 6, 1, 8);

  // 회사 도장 (설정 탭에서 업로드한 이미지, 고정 위치)
  if (companyStampPath) {
    try {
      const { data: stampBlob } = await sb.storage.from('company-assets').download(companyStampPath);
      if (stampBlob) {
        const stampBase64 = await blobToBase64(stampBlob);
        const imgId = workbook.addImage({ base64: stampBase64, extension: 'png' });
        ws.addImage(imgId, { tl: { col: 6.4, row: 0.6 }, ext: { width: 85, height: 85 } });
      }
    } catch (e) {
      console.warn('도장 이미지 삽입 실패:', e);
    }
  }

  // 품목 테이블 헤더
  const headerRow = 8;
  ['월', '일', '품목', '수량', '단가', '공급가액', '세액', '비고'].forEach((h, i) => {
    const cell = ws.getCell(headerRow, i + 1);
    cell.value = h;
    cell.font = { name: 'Malgun Gothic', bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREEN } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });
  applyBorder(headerRow, headerRow, 1, 8);

  const now = new Date();
  let rowNum = headerRow + 1;
  let totalSupply = 0, totalTax = 0;
  currentFinalBom.forEach((item, idx) => {
    const qty = Number(item.count) || 0;
    const price = Number(item.price) || 0;
    const supply = qty * price;
    const tax = Math.round(supply * 0.1);
    totalSupply += supply;
    totalTax += tax;

    if (idx === 0) {
      ws.getCell(rowNum, 1).value = now.getMonth() + 1;
      ws.getCell(rowNum, 2).value = now.getDate();
    }
    ws.getCell(rowNum, 3).value = item.name || '';
    ws.getCell(rowNum, 4).value = qty;
    ws.getCell(rowNum, 5).value = price;
    ws.getCell(rowNum, 5).numFmt = '#,##0';
    ws.getCell(rowNum, 6).value = supply;
    ws.getCell(rowNum, 6).numFmt = '#,##0';
    ws.getCell(rowNum, 7).value = tax;
    ws.getCell(rowNum, 7).numFmt = '#,##0';

    for (let c = 1; c <= 8; c++) {
      ws.getCell(rowNum, c).font = { name: 'Malgun Gothic', size: 10 };
      ws.getCell(rowNum, c).alignment = { vertical: 'middle', horizontal: c === 3 ? 'left' : (c >= 4 && c <= 7 ? 'right' : 'center') };
    }
    applyBorder(rowNum, rowNum, 1, 8);
    rowNum++;
  });

  // 합계
  ws.mergeCells(rowNum, 1, rowNum, 2);
  ws.getCell(rowNum, 1).value = '공급가액';
  ws.mergeCells(rowNum, 3, rowNum, 4);
  ws.getCell(rowNum, 3).value = totalSupply;
  ws.getCell(rowNum, 3).numFmt = '#,##0';
  ws.getCell(rowNum, 5).value = '부가세';
  ws.getCell(rowNum, 6).value = totalTax;
  ws.getCell(rowNum, 6).numFmt = '#,##0';
  ws.getCell(rowNum, 7).value = '합계';
  ws.getCell(rowNum, 8).value = totalSupply + totalTax;
  ws.getCell(rowNum, 8).numFmt = '#,##0';
  for (let c = 1; c <= 8; c++) {
    ws.getCell(rowNum, c).font = { name: 'Malgun Gothic', bold: true };
    ws.getCell(rowNum, c).alignment = { vertical: 'middle', horizontal: 'center' };
  }
  applyBorder(rowNum, rowNum, 1, 8);

  const buffer = await workbook.xlsx.writeBuffer();
  return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}

async function sendFinalQuote() {
  if (!currentRow) return;
  if (currentFinalBom.length === 0) {
    showToast('발송할 견적 품목이 없습니다.');
    return;
  }
  if (!currentRow.user_id) {
    showToast('회원가입 없이 접수된 상담 건은 발송할 수 없습니다.');
    return;
  }
  if (currentQuoteHasIot && !document.getElementById('chkControllerConfirmed').checked) {
    const proceed = confirm('컨트롤러 위치 확인이 아직 체크되지 않았습니다. 그래도 견적서를 발송하시겠습니까?');
    if (!proceed) return;
  }

  const btn = document.getElementById('btnSendFinalQuote');
  btn.disabled = true;
  btn.textContent = '발송 중...';

  try {
    const excelBlob = await generateFormalQuoteExcel();
    const floorplanBlob = await generateFloorplanWithPins();

    const basePath = `${currentRow.user_id}/${currentRow.id}`;
    const stamp = Date.now();
    const excelPath = `${basePath}/견적서_${stamp}.xlsx`;

    const { error: excelErr } = await sb.storage.from('consultation-quotes')
      .upload(excelPath, excelBlob, { contentType: excelBlob.type, upsert: true });
    if (excelErr) throw new Error('견적서 업로드 실패: ' + excelErr.message);

    let floorplanPath = null;
    if (floorplanBlob) {
      floorplanPath = `${basePath}/도면_${stamp}.png`;
      const { error: fpErr } = await sb.storage.from('consultation-quotes')
        .upload(floorplanPath, floorplanBlob, { contentType: 'image/png', upsert: true });
      if (fpErr) {
        console.warn('도면 업로드 실패, 견적서만 발송합니다:', fpErr.message);
        floorplanPath = null;
      }
    }

    const { error: updateErr } = await sb.from('ConsultationRequest').update({
      final_bom: currentFinalBom,
      final_quote_excel_url: excelPath,
      final_floorplan_url: floorplanPath,
      status: '견적 발송'
    }).eq('id', currentRow.id);
    if (updateErr) throw new Error('상태 저장 실패: ' + updateErr.message);

    Object.assign(currentRow, { final_bom: currentFinalBom, final_quote_excel_url: excelPath, final_floorplan_url: floorplanPath, status: '견적 발송' });
    const idx = allRows.findIndex(r => r.id === currentRow.id);
    if (idx !== -1) Object.assign(allRows[idx], currentRow);

    document.getElementById('selectModalStatus').value = '견적 발송';
    renderSendStatusNote();
    showToast('최종 견적서가 발송되었습니다.');
    applyFilter();
    updateWidgets(allRows);
  } catch (err) {
    console.error(err);
    showToast(err.message || '발송 중 오류가 발생했습니다.');
  } finally {
    btn.disabled = false;
    btn.textContent = '최종 견적서 발송하기';
  }
}

async function renderSendStatusNote() {
  const note = document.getElementById('sendStatusNote');
  if (!currentRow.final_quote_excel_url) {
    note.style.display = 'none';
    note.innerHTML = '';
    return;
  }
  note.style.display = 'block';
  note.innerHTML = '최근 발송된 견적서가 있습니다 (다시 발송하면 이전 파일을 덮어씁니다) — <span id="sendStatusLinks">링크 불러오는 중...</span>';

  const links = [];
  const { data: excelSigned } = await sb.storage.from('consultation-quotes').createSignedUrl(currentRow.final_quote_excel_url, 300);
  if (excelSigned) links.push(`<a href="${excelSigned.signedUrl}" target="_blank" rel="noopener">엑셀 확인</a>`);
  if (currentRow.final_floorplan_url) {
    const { data: fpSigned } = await sb.storage.from('consultation-quotes').createSignedUrl(currentRow.final_floorplan_url, 300);
    if (fpSigned) links.push(`<a href="${fpSigned.signedUrl}" target="_blank" rel="noopener">도면 확인</a>`);
  }
  const linksEl = document.getElementById('sendStatusLinks');
  if (linksEl) linksEl.innerHTML = links.length > 0 ? links.join(' · ') : '(링크 생성 실패)';
}

// ==================== STATUS UPDATE ====================
async function saveStatus() {
  if (!currentRow) return;
  const newStatus = document.getElementById('selectModalStatus').value;
  const confirmed = document.getElementById('chkControllerConfirmed').checked;

  const { error } = await sb
    .from('ConsultationRequest')
    .update({ status: newStatus, controller_confirmed: confirmed })
    .eq('id', currentRow.id);

  if (error) {
    showToast('상태 저장 중 오류가 발생했습니다.');
    return;
  }

  // Reflect locally
  currentRow.status = newStatus;
  currentRow.controller_confirmed = confirmed;
  const idx = allRows.findIndex(r => r.id === currentRow.id);
  if (idx !== -1) {
    allRows[idx].status = newStatus;
    allRows[idx].controller_confirmed = confirmed;
  }

  showToast(`상태가 '${newStatus}'(으)로 저장되었습니다.`);
  applyFilter();
  updateWidgets(allRows);
}

// ==================== HELPERS ====================
function formatPhone(val) {
  if (!val) return '-';
  const d = val.replace(/[^0-9]/g, '');
  if (d.length === 10) return d.slice(0,3) + '-' + d.slice(3,6) + '-' + d.slice(6);
  if (d.length === 11) return d.slice(0,3) + '-' + d.slice(3,7) + '-' + d.slice(7);
  return val;
}

let _toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ==================== BIND EVENTS ====================
function bindEvents() {
  document.getElementById('searchInput').addEventListener('input', applyFilter);
  document.getElementById('statusFilter').addEventListener('change', applyFilter);
  document.getElementById('btnRefresh').addEventListener('click', loadConsultations);
  document.getElementById('btnModalClose').addEventListener('click', closeDetail);
  document.getElementById('btnSaveStatus').addEventListener('click', saveStatus);
  document.getElementById('btnExportExcel').addEventListener('click', exportQuoteToExcel);
  document.getElementById('btnSendFinalQuote').addEventListener('click', sendFinalQuote);

  // 도면 확대 보기 (라이트박스)
  document.getElementById('imgBlueprint').addEventListener('click', openBlueprintLightbox);
  document.getElementById('btnCloseLightbox').addEventListener('click', closeBlueprintLightbox);
  document.getElementById('blueprintLightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeBlueprintLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('blueprintLightbox').classList.contains('open')) {
      closeBlueprintLightbox();
    }
  });

  // 최종 견적 품목 편집 (인라인 input, 이벤트 위임)
  const finalBomBody = document.getElementById('finalBomBody');
  finalBomBody.addEventListener('input', (e) => {
    const input = e.target;
    if (!input.classList.contains('bom-edit-input')) return;
    const idx = Number(input.dataset.idx);
    const field = input.dataset.field;
    if (field === 'count' || field === 'price') {
      const digitsOnly = input.value.replace(/[^0-9]/g, '');
      if (input.value !== digitsOnly) input.value = digitsOnly;
      currentFinalBom[idx][field] = Number(digitsOnly) || 0;
    } else {
      currentFinalBom[idx][field] = input.value;
    }
    renderFinalBomTotal();
  });
  finalBomBody.addEventListener('change', (e) => {
    if (!e.target.classList.contains('bom-edit-input')) return;
    saveFinalBom();
  });
  finalBomBody.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-final-bom-del');
    if (!btn) return;
    currentFinalBom.splice(Number(btn.dataset.idx), 1);
    renderFinalBomTable();
    saveFinalBom();
  });
  document.getElementById('btnFinalBomAddRow').addEventListener('click', () => {
    currentFinalBom.push({ zone: '-', code: '-', name: '', count: 1, price: 0 });
    renderFinalBomTable();
  });
  document.getElementById('btnFinalBomReset').addEventListener('click', () => {
    if (!confirm('직접 수정한 내용을 버리고 자동 계산값으로 되돌리시겠습니까?')) return;
    currentFinalBom = JSON.parse(JSON.stringify(currentBomRows));
    renderFinalBomTable();
    saveFinalBom();
  });

  // Close modal on backdrop click
  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeDetail();
  });

  // Tabs
  document.getElementById('tabBtnConsult').addEventListener('click', () => switchTab('consult'));
  document.getElementById('tabBtnProducts').addEventListener('click', () => switchTab('products'));
  document.getElementById('tabBtnSettings').addEventListener('click', () => switchTab('settings'));

  const stampFileInput = document.getElementById('stampFileInput');
  document.getElementById('btnUploadStamp').addEventListener('click', () => stampFileInput.click());
  stampFileInput.addEventListener('change', (e) => {
    uploadStamp(e.target.files[0]);
    stampFileInput.value = '';
  });

  // Product filter/search
  document.getElementById('productSearchInput').addEventListener('input', applyProductFilter);
  document.getElementById('productLineFilter').addEventListener('change', applyProductFilter);
  document.getElementById('btnRefreshProducts').addEventListener('click', loadProducts);

  // Product price inline edit (event delegation on tbody)
  const productTbody = document.getElementById('productTableBody');
  productTbody.addEventListener('input', (e) => {
    if (!e.target.classList.contains('price-input')) return;
    const input = e.target;
    const digitsOnly = input.value.replace(/[^0-9]/g, '');
    if (input.value !== digitsOnly) input.value = digitsOnly;
    const btn = input.nextElementSibling;
    const isDirty = Number(input.value) !== Number(input.dataset.original);
    input.classList.toggle('dirty', isDirty);
    btn.classList.toggle('enabled', isDirty);
  });
  productTbody.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn-price-save')) return;
    const btn = e.target;
    const input = btn.previousElementSibling;
    saveProductPrice(btn.dataset.id, input, btn);
  });
}

// ==================== INIT ====================
checkAdminAuth();
