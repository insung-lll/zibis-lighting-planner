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
  const isConsult = tab === 'consult';
  document.getElementById('tabBtnConsult').classList.toggle('active', isConsult);
  document.getElementById('tabBtnProducts').classList.toggle('active', !isConsult);
  document.getElementById('viewConsult').style.display = isConsult ? 'block' : 'none';
  document.getElementById('viewProducts').style.display = isConsult ? 'none' : 'block';

  if (!isConsult && !productsLoaded) {
    loadProducts();
  }
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

  modal.classList.add('open');
}

function renderAdminMarkerPins(markers) {
  const pinsContainer = document.getElementById('adminMarkerPins');
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
function toBomItem(product, fallbackName, fallbackPrice, qty) {
  return {
    code: (product && product.ecount_prod_cd) || '-',
    name: product ? product.name : fallbackName,
    count: qty,
    price: product ? Number(product.price) : fallbackPrice
  };
}

const MAGNETIC_RAIL_TYPE_IDS = ['magnetic-rail', 'fe1f7195-3630-49c0-8cda-f5ea732cfe57'];

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
  if (lights.length === 0) { noBom.style.display = 'block'; return; }

  const rows = [];

  // 1) 일반 조명 기구: typeId별 집계 (마그네틱 레일은 2)에서 별도 처리)
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
    if (!agg[l.typeId]) {
      const product = allProducts.find(p => p.id === l.typeId);
      agg[l.typeId] = {
        code: (product && product.ecount_prod_cd) || '-',
        name: l.name || (product && product.name) || l.typeId,
        count: 0,
        price: typeof l.price === 'number' ? l.price : Number((product && product.price) || 0)
      };
    }
    agg[l.typeId].count++;
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

  // 3) 존별 자동 산출된 컨버터(SMPS)/컨트롤러를 프로젝트 단위로 합산
  const smpsCounts = {};
  let controllerQty = 0;
  zones.forEach(zone => {
    (zone.requiredSMPS || []).forEach(cap => { smpsCounts[cap] = (smpsCounts[cap] || 0) + 1; });
    (zone.requiredControllers || []).forEach(ctrl => {
      controllerQty += typeof ctrl === 'string' ? 1 : (ctrl.qty || 1);
    });
  });
  Object.entries(smpsCounts).forEach(([cap, qty]) => {
    rows.push(toBomItem(findAdminConverter(cap), `IoT 컨버터 ${cap}W`, 0, qty));
  });
  if (controllerQty > 0) {
    rows.push(toBomItem(findAdminController(), 'IoT 컨트롤러', 0, controllerQty));
  }

  // 4) 허브: 프로젝트 전체에 IoT 조명이 1개라도 있으면 1개 (존 단위 아님)
  currentQuoteHasIot = lights.some(l => {
    const product = allProducts.find(p => p.id === l.typeId);
    return product ? product.product_line === 'zibis_iot' : true; // 매칭 안되는 레거시 typeId는 대부분 IoT 라인이므로 기본 포함
  });
  if (currentQuoteHasIot) {
    rows.push(toBomItem(findAdminProductByName('허브'), '허브', 200000, 1));
  }

  currentBomRows = rows;
  rows.forEach(item => {
    const subtotal = item.price * item.count;
    currentBomTotal += subtotal;
    bomBody.innerHTML += `
      <tr>
        <td style="color:var(--text-dim); font-size:11px;">${item.code}</td>
        <td>${item.name}</td>
        <td style="text-align:center;">${item.count}</td>
        <td style="text-align:right;">${item.price > 0 ? '₩' + item.price.toLocaleString() : '-'}</td>
      </tr>`;
  });

  lblTotal.textContent = '₩' + currentBomTotal.toLocaleString();
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

// ==================== STATUS UPDATE ====================
async function saveStatus() {
  if (!currentRow) return;
  const newStatus = document.getElementById('selectModalStatus').value;
  const confirmed = document.getElementById('chkControllerConfirmed').checked;

  // 소프트 게이트: IoT 견적을 발주 확정으로 바꾸는데 컨트롤러 위치 확인이 안 됐으면 한 번 더 확인
  if (newStatus === '발주 확정' && currentQuoteHasIot && !confirmed) {
    const proceed = confirm('컨트롤러 위치 확인이 아직 체크되지 않았습니다. 그래도 발주 확정으로 저장하시겠습니까?');
    if (!proceed) return;
  }

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

  // Close modal on backdrop click
  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeDetail();
  });

  // Tabs
  document.getElementById('tabBtnConsult').addEventListener('click', () => switchTab('consult'));
  document.getElementById('tabBtnProducts').addEventListener('click', () => switchTab('products'));

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
