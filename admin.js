// ==================== SUPABASE CONFIG (shared with app.js) ====================
const SUPABASE_URL = 'https://wezywuqfzyyylpxsfdgu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlenl3dXFmenl5eWxweHNmZGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNDMxOTgsImV4cCI6MjA5NzkxOTE5OH0.NwqsxnM95LvZQ8Omyc-j9_RsayT5KIJ7QABy2Df43so';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==================== STATE ====================
let allRows = [];       // all fetched consultation records
let currentRow = null;  // currently opened detail modal record
let allProducts = [];        // all fetched product records
let productsLoaded = false;  // lazy-load guard

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

  // 4. 데이터 로드
  await loadConsultations();
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
    const statusClass = 'status-' + (r.status || '상담대기');
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
    .select('id, name, category, product_line, price')
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
          <input type="number" class="price-input" data-id="${p.id}" data-original="${p.price}" value="${p.price}">
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

  // Blueprint image
  const img = document.getElementById('imgBlueprint');
  const noImg = document.getElementById('lblNoImg');
  if (currentRow.image_url) {
    img.src = currentRow.image_url;
    img.style.display = 'block';
    noImg.style.display = 'none';
  } else {
    img.style.display = 'none';
    noImg.style.display = 'block';
  }

  // BOM from linked quote
  await loadBom(currentRow.quote_id);

  modal.classList.add('open');
}

async function loadBom(quoteId) {
  const bomBody = document.getElementById('bomBody');
  const noBom = document.getElementById('noBom');
  const lblTotal = document.getElementById('lblTotalCost');

  bomBody.innerHTML = '';
  noBom.style.display = 'none';
  lblTotal.textContent = '₩0';

  if (!quoteId) { noBom.style.display = 'block'; return; }

  const { data: quote, error } = await sb
    .from('quotes')
    .select('project_data')
    .eq('id', quoteId)
    .single();

  if (error || !quote || !quote.project_data) { noBom.style.display = 'block'; return; }

  const lights = quote.project_data.lights || [];
  if (lights.length === 0) { noBom.style.display = 'block'; return; }

  // Aggregate by typeId
  const agg = {};
  lights.forEach(l => {
    if (!agg[l.typeId]) {
      agg[l.typeId] = {
        name: l.label || l.typeId,
        category: l.category || '-',
        count: 0,
        price: l.consumerPrice || 0
      };
    }
    agg[l.typeId].count++;
  });

  let total = 0;
  Object.values(agg).forEach(item => {
    const subtotal = item.price * item.count;
    total += subtotal;
    bomBody.innerHTML += `
      <tr>
        <td style="color:var(--text-dim);">${item.category}</td>
        <td>${item.name}</td>
        <td style="text-align:center;">${item.count}</td>
        <td style="text-align:right;">${item.price > 0 ? '₩' + item.price.toLocaleString() : '-'}</td>
      </tr>`;
  });

  lblTotal.textContent = total > 0 ? '₩' + total.toLocaleString() : '정보 없음';
}

function closeDetail() {
  document.getElementById('detailModal').classList.remove('open');
  currentRow = null;
}

// ==================== STATUS UPDATE ====================
async function saveStatus() {
  if (!currentRow) return;
  const newStatus = document.getElementById('selectModalStatus').value;
  const { error } = await sb
    .from('ConsultationRequest')
    .update({ status: newStatus })
    .eq('id', currentRow.id);

  if (error) {
    showToast('상태 저장 중 오류가 발생했습니다.');
    return;
  }

  // Reflect locally
  currentRow.status = newStatus;
  const idx = allRows.findIndex(r => r.id === currentRow.id);
  if (idx !== -1) allRows[idx].status = newStatus;

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
