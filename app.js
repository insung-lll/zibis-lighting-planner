// ==================== SUPABASE CONFIG ====================
const SUPABASE_URL = 'https://wezywuqfzyyylpxsfdgu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlenl3dXFmenl5eWxweHNmZGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNDMxOTgsImV4cCI6MjA5NzkxOTE5OH0.NwqsxnM95LvZQ8Omyc-j9_RsayT5KIJ7QABy2Df43so';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==================== FIXTURE DATABASE ====================
let fixtureDatabase = [
  {
    id: 'siren-ch2-spot',
    category: 'downlight',
    subCategory: 'spot',
    name: 'IoT 사이렌 스마트 원형 다운라이트 집중형 (2인치)',
    model: 'DH-Siren2-Spot',
    watt: 8,
    lumen: 800,
    beam: 24,
    color: '#FF9500',
    icon: 'spot',
    size: 24,
    cutoutMM: 55,
    inch: '2인치',
    price: 17900,
    image: 'products/siren_cob.png',
    link: 'https://zibismart.co.kr/product/iot-사이렌-스마트-원형-다운라이트-2인치/317/'
  },
  {
    id: 'siren-ch2-diff',
    category: 'downlight',
    subCategory: 'diffused',
    name: 'IoT 사이렌 스마트 원형 다운라이트 확산형 (2인치)',
    model: 'DH-Siren2-Diff',
    watt: 8,
    lumen: 560,
    beam: 60,
    color: '#FFCC00',
    icon: 'diffused',
    size: 24,
    cutoutMM: 55,
    inch: '2인치',
    price: 17900,
    image: 'products/siren_diff.png',
    link: 'https://zibismart.co.kr/product/iot-사이렌-스마트-원형-다운라이트-2인치/317/'
  },
  {
    id: 'cutoff-smart-3in',
    category: 'downlight',
    subCategory: 'deep',
    name: 'IoT 컷오프 스마트 원형 다운라이트 (3인치)',
    model: 'DH-Cutoff3',
    watt: 12,
    lumen: 960,
    beam: 36,
    color: '#FF9500',
    icon: 'spot',
    size: 30,
    cutoutMM: 75,
    inch: '3인치',
    price: 9700,
    image: 'products/cutoff.png',
    link: 'https://zibismart.co.kr/product/iot-컷오프-스마트-원형-다운라이트-2인치3인치/316/'
  },
  {
    id: 'cutoff-downlight-deep',
    category: 'downlight',
    subCategory: 'deep',
    name: 'IoT 컷오프 스마트 원형 다운라이트 2인치',
    model: 'DH-Cutoff-Deep',
    watt: 8,
    lumen: 640,
    beam: 30,
    color: '#FF9500',
    icon: 'spot',
    size: 24,
    cutoutMM: 55,
    inch: '2인치',
    price: 9000,
    image: 'products/cutoff.png',
    link: 'https://zibismart.co.kr/product/iot-컷오프-스마트-원형-다운라이트-2인치3인치/316/'
  },
  {
    id: 'mini-spot-1-5inch',
    category: 'downlight',
    subCategory: 'spot',
    name: '1.5인치 원형 초소형 매립등 (집중형)',
    model: 'DH-Mini15-Spot',
    watt: 3,
    lumen: 640,
    beam: 20,
    color: '#FF6F00',
    icon: 'spot',
    size: 18,
    cutoutMM: 38,
    inch: '1.5인치',
    price: 18000,
    image: 'products/Layer11.png',
    link: 'https://zibismart.co.kr/product/iot-스마트-초소형-원형-매립등-15인치/324/'
  },
  {
    id: 'pinpoint-spot',
    category: 'downlight',
    subCategory: 'spot',
    name: 'IoT 핀포인트 매립형 스팟조명 (2.5인치)',
    model: 'DH-Pinpoint8',
    watt: 8,
    lumen: 640,
    beam: 24,
    color: '#FF6F00',
    icon: 'spot',
    size: 26,
    cutoutMM: 60,
    inch: '2.5인치',
    price: 38000,
    image: 'products/mini_4 1.png',
    link: 'https://zibismart.co.kr/product/iot-핀포인트-매립형-스팟조명/320/'
  },
  {
    id: 'downlight-spot-12w',
    category: 'downlight',
    subCategory: 'spot',
    name: 'IoT 매립 다운라이트 스팟 조명 (3.5인치)',
    model: 'DH-Spot12',
    watt: 12,
    lumen: 960,
    beam: 36,
    color: '#FF5E00',
    icon: 'spot',
    size: 34,
    cutoutMM: 90,
    inch: '3.5인치',
    price: 75000,
    image: 'products/no20_8 1.png',
    link: 'https://zibismart.co.kr/product/iot-매립-다운라이트-스팟-조명/322/'
  },
  {
    id: 'linebar-flexible-5m',
    category: 'linebar',
    name: 'IoT 플렉시블 라인 투명 실리콘 조명 10폭 5m',
    model: 'LB-Flex-Trans5M',
    watt: 10,
    lumen: 950,
    beam: 120,
    color: '#22CC22',
    icon: 'line',
    size: 40,
    length: 5000,
    widthMM: 10,
    price: 42000,
    image: 'products/line10_2.png',
    link: 'https://zibismart.co.kr/product/iot-플렉시블-라인-투명-실리콘-조명-10폭-5m/318/'
  },
  {
    id: 'linebar-stylecut-5m',
    category: 'linebar',
    name: 'IoT 스타일컷 라인 실리콘 조명 10폭 5m',
    model: 'LB-Stylecut-Sil5M',
    watt: 10,
    lumen: 950,
    beam: 120,
    color: '#34C759',
    icon: 'line',
    size: 40,
    length: 5000,
    widthMM: 10,
    price: 48500,
    image: 'products/line10_1.png',
    link: 'https://zibismart.co.kr/product/iot-스타일컷-라인-실리콘-조명-10폭-5m/319/'
  },
  {
    id: 'gridslot-6',
    category: 'multi',
    name: 'IoT 그리드슬롯 6구',
    model: 'ML-Grid6',
    watt: 12,
    lumen: 960,
    beam: 30,
    color: '#9933FF',
    icon: 'multi',
    size: 24,
    heads: 6,
    lengthMM: 120,
    widthMM: 30,
    price: 30100,
    image: 'products/gridslot6 thumbnail.png',
    link: 'https://zibismart.co.kr/product/iot-그리드슬롯6구/323/'
  },
  {
    id: 'gridslot-12',
    category: 'multi',
    name: 'IoT 그리드슬롯 12구',
    model: 'ML-Grid12',
    watt: 24,
    lumen: 1920,
    beam: 30,
    color: '#7F00FF',
    icon: 'multi',
    size: 24,
    heads: 12,
    lengthMM: 228,
    widthMM: 30,
    price: 46300,
    image: 'products/gridslot thumbnail.png',
    link: 'https://zibismart.co.kr/product/iot-그리드슬롯12구/315/'
  },
  {
    id: 'rail-spot-s',
    category: 'etc',
    name: '레일스포트 소형',
    model: 'Rail-Spot-S',
    watt: 15,
    lumen: 1125,
    beam: 36,
    color: '#FF9500',
    icon: 'spot',
    size: 24,
    price: 34500,
    image: 'products/pa.png'
  },
  {
    id: 'rail-spot-m',
    category: 'etc',
    name: '레일스포트 중형',
    model: 'Rail-Spot-M',
    watt: 20,
    lumen: 1500,
    beam: 36,
    color: '#FF9500',
    icon: 'spot',
    size: 26,
    price: 35000,
    image: 'products/pa.png'
  },
  {
    id: 'rail-spot-fww',
    category: 'etc',
    name: '레일스포트 FWW',
    model: 'Rail-Spot-FWW',
    watt: 20,
    lumen: 1500,
    beam: 36,
    color: '#FF9500',
    icon: 'spot',
    size: 26,
    price: 35000,
    image: 'products/pa.png'
  },
  {
    id: 'rotate-downlight-3in',
    category: 'etc',
    name: '3" 회전 매립등',
    model: 'Rotate-3In',
    watt: 12,
    lumen: 900,
    beam: 36,
    color: '#FFCC00',
    icon: 'spot',
    size: 30,
    cutoutMM: 75,
    inch: '3인치',
    price: 18000,
    image: 'products/pa1.png'
  },
  {
    id: 'gr-downlight-3in',
    category: 'etc',
    name: 'GR 3" 매립등',
    model: 'GR-3In',
    watt: 20,
    lumen: 1500,
    beam: 36,
    color: '#FF5E00',
    icon: 'spot',
    size: 30,
    cutoutMM: 75,
    inch: '3인치',
    price: 19000,
    image: 'products/pa1.png'
  }
];


// ==================== APP STATE ====================
const state = {
  // Upload & Calibration
  uploadedImage: null,
  pixelsPerMeter: 50, // default fallback
  ceilingHeight: 2.4,
  onboardingDismissed: false,
  calibrationMode: 'ai', // 'ai' or 'manual'
  detectedBoundaryPoints: [],
  scanningPoints: [], // 64 points for scan animation
  detectedOuterAreaSqPixels: 0,
  isScanningCalibration: false,
  scanStartTime: 0,
  
  // Calibration zoom, pan & interactive hover
  calibrateZoom: 1.0,
  calibratePanX: 0,
  calibratePanY: 0,
  hoverSegment: null,
  isCalibratePanning: false,
  calibratePanStartX: 0,
  calibratePanStartY: 0,
  
  // Calibration steps
  calibrationPoints: [],
  
  // Canvas Transform
  zoom: 1.0,
  panX: 0,
  panY: 0,
  isPanning: false,
  panStartX: 0,
  panStartY: 0,
  
  // Active Tools & selections
  activeTool: 'select', // 'select', 'place', 'draw-zone', 'measure', 'calibrate'
  selectedFixtureId: null,
  activeCategory: 'downlight',
  activeSubCategory: 'all',
  selectedZoneId: null,
  selectedDimensionId: null,

  
  // Items Arrays
  lights: [],
  zones: [],
  dimensions: [],
  
  tempZoneData: null,
  pendingZoneData: null,
  
  // Placed lights count ID
  nextLightId: 1,
  nextZoneId: 1,
  nextDimId: 1,
  bomFilterZoneId: null,
  editingZoneId: null,
  
  // Dragging states
  selectedLightIds: [],
  draggingLightId: null,
  draggingZoneId: null,
  draggingDimensionId: null,
  dragOffsetX: 0,
  dragOffsetY: 0,
  
  // Snap & hover
  snapEnabled: true,
  hoveredZoneId: null,

  // Interaction previews
  ghostCursor: null,
  snapGuides: [],
  placementRotation: 0,
  isDrawingLinebar: false,
  linebarStart: null,
  linebarEnd: null,
  
  // Drawing zone temp points
  zonePolygonPoints: [],
  zoneDrawMouse: null,
  
  // Drawing zone rect temp points
  isDrawingZoneRect: false,
  zoneRectStart: null,
  zoneRectEnd: null,
  
  // Measurement tool temp points
  measureStart: null,
  measureEnd: null,
  measurePhase: 0, // 0 = idle, 1 = first point, 2 = label offset
  
  // Display settings
  showGrid: false,
  heatmapMode: 'zone', // 'none', 'zone', 'heatmap'
  showZones: true,
  showDimensions: true
};

// ==================== DOM ELEMENTS ====================
const els = {
  appWrapper: document.getElementById('appWrapper'),
  uploadOverlay: document.getElementById('uploadOverlay'),
  fileInput: document.getElementById('fileInput'),
  mainDropZone: document.getElementById('mainDropZone'),
  
  // Canvas Elements
  canvasArea: document.getElementById('canvasArea'),
  canvasContainer: document.getElementById('canvasContainer'),
  floorplanCanvas: document.getElementById('floorplanCanvas'),
  gridCanvas: document.getElementById('gridCanvas'),
  zoneCanvas: document.getElementById('zoneCanvas'),
  lightOverlay: document.getElementById('lightOverlay'),
  interactionLayer: document.getElementById('interactionLayer'),
  
  // Calibration Modal
  calibrateOverlay: document.getElementById('calibrateOverlay'),
  calibrateCanvas: document.getElementById('calibrateCanvas'),
  calibrateCanvasWrap: document.getElementById('calibrateCanvasWrap'),
  referenceDistance: document.getElementById('referenceDistance'),
  calibrateStatus: document.getElementById('calibrateStatus'),
  btnApplyCalibrate: document.getElementById('btnApplyCalibrate'),
  btnCancelCalibrate: document.getElementById('btnCancelCalibrate'),
  btnCalibrateBack: document.getElementById('btnCalibrateBack'),
  btnCalibrateZoomIn: document.getElementById('btnCalibrateZoomIn'),
  btnCalibrateZoomOut: document.getElementById('btnCalibrateZoomOut'),
  btnCalibrateZoomReset: document.getElementById('btnCalibrateZoomReset'),
  btnCanvasZoomIn: document.getElementById('btnCanvasZoomIn'),
  btnCanvasZoomOut: document.getElementById('btnCanvasZoomOut'),
  btnCanvasZoomReset: document.getElementById('btnCanvasZoomReset'),
  zoomDisplay: document.getElementById('zoomDisplay'),
  txtCalibrateZoom: document.getElementById('txtCalibrateZoom'),
  
  // Left Panel
  categoryPills: document.getElementById('categoryPills'),
  fixtureList: document.getElementById('fixtureList'),
  
  // Toolbar overlay & floating actions
  canvasToolbar: document.getElementById('canvasToolbar'),
  scaleDisplay: document.getElementById('scaleDisplay'),
  pyeongDisplay: document.getElementById('pyeongDisplay'),
  tabAddZone: document.getElementById('tabAddZone'),
  lblAddZone: document.getElementById('lblAddZone'),
  zonePopup: document.getElementById('zonePopup'),
  btnDrawZonePolygon: document.getElementById('btnDrawZonePolygon'),
  btnDrawZoneRect: document.getElementById('btnDrawZoneRect'),
  eyeZone: document.getElementById('eyeZone'),
  tabMeasure: document.getElementById('tabMeasure'),
  eyeDimension: document.getElementById('eyeDimension'),
  tabHeight: document.getElementById('tabHeight'),
  lblCeilingHeight: document.getElementById('lblCeilingHeight'),
  ceilingHeightInput: document.getElementById('ceilingHeightInput'),
  heightPopup: document.getElementById('heightPopup'),
  btnBackToCalibrate: document.getElementById('btnBackToCalibrate'),
  switchInputOverlay: document.getElementById('switchInputOverlay'),
  switchCountSelect: document.getElementById('switchCountSelect'),
  btnCancelSwitchInput: document.getElementById('btnCancelSwitchInput'),
  btnConfirmSwitchInput: document.getElementById('btnConfirmSwitchInput'),
  
  // Top stats
  statArea: document.getElementById('statArea'),
  statCount: document.getElementById('statCount'),
  statWatt: document.getElementById('statWatt'),
  
  // Right panel
  rightPanel: document.getElementById('rightPanel'),
  leftPanel: document.getElementById('leftPanel'),
  btnIllumToggle: document.getElementById('btnIllumToggle'),
  chkShowGrid: document.getElementById('chkShowGrid'),
  zoneList: document.getElementById('zoneList'),
  
  // Bottom Panel (BOM)
  bomTableBody: document.getElementById('bomTableBody'),
  bomSummaryText: document.getElementById('bomSummaryText'),
  btnMaximizeBOM: document.getElementById('btnMaximizeBOM'),
  bomFilterTags: document.getElementById('bomFilterTags'),
  
  // Save & Load
  btnNewProject: document.getElementById('btnNewProject'),
  btnLoadProject: document.getElementById('btnLoadProject'),
  btnLoadProjectFirst: document.getElementById('btnLoadProjectFirst'),
  loadProjectInput: document.getElementById('loadProjectInput'),
  btnSaveProject: document.getElementById('btnSaveProject'),
  btnExport: document.getElementById('btnExport'),
  
  // Custom additions
  btnSelectMode: document.getElementById('btnSelectMode'),
  subCategoryPillsWrap: document.getElementById('subCategoryPillsWrap'),
  subCategoryPills: document.getElementById('subCategoryPills'),
  lightTooltip: document.getElementById('lightTooltip'),
  
  // Confirm modal
  confirmOverlay: document.getElementById('confirmOverlay'),
  confirmTitle: document.getElementById('confirmTitle'),
  confirmMsg: document.getElementById('confirmMsg'),
  confirmCancel: document.getElementById('confirmCancel'),
  confirmOk: document.getElementById('confirmOk'),
  
  // Zone Select Modal
  zoneSelectOverlay: document.getElementById('zoneSelectOverlay'),
  zoneNameInput: document.getElementById('zoneNameInput'),
  btnCancelZoneSelect: document.getElementById('btnCancelZoneSelect'),
  btnConfirmZoneSelect: document.getElementById('btnConfirmZoneSelect')
};

// Canvas context refs
const ctxs = {
  floor: els.floorplanCanvas.getContext('2d'),
  grid: els.gridCanvas.getContext('2d'),
  zone: els.zoneCanvas.getContext('2d'),
  light: els.lightOverlay.getContext('2d'),
  interaction: els.interactionLayer.getContext('2d')
};

// Color definitions
const zoneColors = ['#007aff', '#34c759', '#ff9500', '#ff3b30', '#af52de', '#5ac8fa', '#ff2d55', '#ffcc00'];

// ==================== SUPABASE PRODUCT LOADER ====================
function mapSupabaseProduct(p) {
  const CAT_MAP = {
    '다운라이트': 'downlight', '라인바': 'linebar', '멀티': 'multi',
    '컨버터': 'converter', '컨트롤러': 'controller', '레일스포트': 'etc'
  };
  let cat = CAT_MAP[p.category] || 'etc';
  if (p.name && (p.name.replace(/\s+/g, '').includes('3"회전매립등') || p.name.replace(/\s+/g, '').includes('GR3"매립등'))) {
    cat = 'etc';
  }
  const spec = p.spec_json || {};
  const beam = spec.beam_angle || null;
  const holeStr = spec.hole_size;
  const cutoutMM = holeStr ? parseInt(holeStr.replace('ø', '')) : null;

  let subCategory = null, icon = 'spot', color = '#FF9500';
  if (cat === 'downlight') {
    if (beam !== null && beam <= 24) { subCategory = 'spot'; icon = 'spot'; color = '#FF9500'; }
    else if (beam !== null && beam >= 60) { subCategory = 'diffused'; icon = 'diffused'; color = '#FFCC00'; }
    else { subCategory = 'deep'; icon = 'spot'; color = '#FF9500'; }
  } else if (cat === 'linebar') { icon = 'line'; color = '#4CD964'; }
  else if (cat === 'multi') { icon = 'multi'; color = '#7F00FF'; }
  else if (cat === 'converter' || cat === 'controller') { icon = 'converter'; color = '#8E8E93'; }
  else if (cat === 'etc') { icon = 'spot'; color = '#FF9500'; }

  // gridslot 전용 필드
  let heads = null, lengthMM = null, widthMM = null, length = null;
  if (p.name && p.name.includes('그리드슬롯')) {
    const match = p.name.match(/(\d+)구/);
    heads = match ? parseInt(match[1]) : 6;
    lengthMM = heads === 6 ? 114 : 228;
    widthMM = 30;
    length = lengthMM;
  }
  // 라인바 전용 필드
  if (cat === 'linebar') {
    length = 5000;
    lengthMM = 5000;
    widthMM = 10;
  }

  return {
    id: p.id,
    category: cat,
    subCategory,
    name: p.name,
    model: null,
    watt: p.watt,
    lumen: p.lumen,
    beam,
    color,
    icon,
    size: cutoutMM || (cat === 'downlight' ? 24 : 30),
    cutoutMM,
    inch: cutoutMM === 55 ? '2인치' : cutoutMM === 75 ? '3인치' : null,
    price: p.price,
    image: p.image_url,
    link: null,
    sizeMM: p.size_mm || null,
    heads,
    lengthMM,
    widthMM,
    length
  };
}

// ==================== APP INITIALIZATION ====================
async function init() {
  setupEventListeners();
  try {
    const { data, error } = await supabaseClient
      .from('products')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) {
      console.error('Supabase 쿼리 에러:', error.message, error.details);
    } else if (data && data.length > 0) {
      fixtureDatabase = data.map(mapSupabaseProduct);
      console.log(`Supabase에서 ${data.length}개 제품 로드됨`);
    }
  } catch (e) {
    console.warn('Supabase 로드 실패, 로컬 데이터 사용:', e);
  }
  // 다운라이트 배치 순서 조정 (사이렌 집중 2인치 -> 사이렌 확산 2인치 -> 컷오프 2인치 -> 컷오프 3인치)
  fixtureDatabase.sort((a, b) => {
    const getOrder = (item) => {
      if (!item.name) return 999;
      const name = item.name;
      if (name.includes('사이렌') && name.includes('집중') && name.includes('2인치')) return 1;
      if (name.includes('사이렌') && name.includes('확산') && name.includes('2인치')) return 2;
      if (name.includes('컷오프') && name.includes('2인치')) return 3;
      if (name.includes('컷오프') && name.includes('3인치')) return 4;
      return 100;
    };
    return getOrder(a) - getOrder(b);
  });
  renderFixtureLibrary();
}

// Render the side library items
function renderFixtureLibrary() {
  els.fixtureList.innerHTML = '';
  let filtered = state.activeCategory === 'all'
    ? fixtureDatabase
    : fixtureDatabase.filter(f => f.category === state.activeCategory);
    
  if (state.activeCategory === 'downlight' && state.activeSubCategory !== 'all') {
    filtered = filtered.filter(f => f.subCategory === state.activeSubCategory);
  }
    
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'fixture-card';
    if (state.selectedFixtureId === item.id) {
      card.style.borderColor = 'var(--accent)';
      card.style.backgroundColor = 'var(--accent-light)';
    }
    
    // Thumbnail display: check if product image exists
    const thumbHTML = item.image
      ? `<img src="${item.image}" alt="${item.name}">`
      : `<div style="width: 20px; height: 20px; border-radius: 50%; background-color: ${item.color}; border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.5)"></div>`;
    
    card.innerHTML = `
      <div class="fixture-thumb">
        ${thumbHTML}
      </div>
      <div class="fixture-details">
        <div class="fixture-name">${item.name}</div>
        <div class="fixture-specs">
          <span class="spec-color-dot" style="background-color: ${item.color};"></span>
          <span>${item.watt}W</span>
          ${item.lumen ? `<span>${item.lumen} lm</span>` : ''}
          ${item.beam ? `<span>${item.beam}°</span>` : ''}
          ${item.inch ? `<span>${item.inch}</span>` : ''}
          ${item.category === 'linebar' ? '<span>1m 기준</span>' : (item.length ? `<span>${item.length/1000}m</span>` : '')}
        </div>
        ${item.link ? `
        <div class="fixture-link-wrapper" style="margin-top: 6px;">
          <a href="${item.link}" target="_blank" onclick="event.stopPropagation();" style="color: #0070f3; text-decoration: underline; font-size: 11px; font-weight: 500; cursor: pointer;">자세히보기</a>
        </div>
        ` : ''}
      </div>
    `;
    
    card.addEventListener('click', () => selectFixture(item.id));
    els.fixtureList.appendChild(card);
  });
}

function selectFixture(id) {
  resetTools();
  state.selectedFixtureId = id;
  state.activeTool = 'place';
  renderFixtureLibrary();
  if (els.tabAddZone) els.tabAddZone.classList.remove('active');
  els.tabMeasure.classList.remove('active');
  if (els.btnSelectMode) els.btnSelectMode.classList.remove('active');
  // Crosshair cursor for light placement mode
  if (els.canvasContainer) els.canvasContainer.classList.add('crosshair-cursor');
}

// Clean UI and reset selected tools
function resetTools() {
  state.activeTool = 'select';
  state.selectedFixtureId = null;
  state.isDrawingZone = false;
  state.zonePolygonPoints = [];
  state.isDrawingZoneRect = false;
  state.zoneRectStart = null;
  state.zoneRectEnd = null;
  state.measurePhase = 0;
  state.measureStart = null;
  state.measureEnd = null;
  state.isDrawingLinebar = false;
  state.linebarStart = null;
  state.linebarEnd = null;
  state.snapGuides = [];

  state.selectedLightIds = [];
  state.selectedZoneId = null;
  state.selectedDimensionId = null;
  state.editingZoneId = null;
  state.draggingLightId = null;
  state.draggingZoneId = null;
  state.draggingDimensionId = null;
  
  if (els.canvasContainer) {
    els.canvasContainer.classList.remove('crosshair-cursor');
  }
  
  if (els.btnSelectMode) els.btnSelectMode.classList.add('active');
  if (els.tabAddZone) els.tabAddZone.classList.remove('active');
  els.tabMeasure.classList.remove('active');
  
  if (els.btnDrawZonePolygon) els.btnDrawZonePolygon.classList.remove('active');
  if (els.btnDrawZoneRect) els.btnDrawZoneRect.classList.remove('active');
  if (els.zonePopup) els.zonePopup.classList.remove('visible');
  if (els.lblAddZone) els.lblAddZone.textContent = "공간 추가";
  
  checkOnboardingTooltip();
  renderFixtureLibrary();
}

function checkOnboardingTooltip() {
  const tooltip = document.getElementById('onboardingTooltip');
  if (!tooltip) return;
  
  if (!state.onboardingDismissed && state.zones.length === 0 && els.canvasContainer && els.canvasContainer.style.display === 'block') {
    tooltip.classList.add('visible');
  } else {
    tooltip.classList.remove('visible');
  }
}

function clearProjectState() {
  state.lights = [];
  state.zones = [];
  state.dimensions = [];
  state.zoom = 1.0;
  state.panX = 0;
  state.panY = 0;
  state.bomFilterZoneId = null;
  state.selectedZoneId = null;
  state.selectedFixtureId = null;
  state.selectedDimensionId = null;
  state.selectedLightIds = [];
  state.tempZoneData = null;
  state.pendingZoneData = null;
  state.nextLightId = 1;
  state.nextZoneId = 1;
  state.nextDimId = 1;

  // Clear file inputs so change events fire even for the same file
  if (els.fileInput) els.fileInput.value = '';
  if (els.loadProjectInput) els.loadProjectInput.value = '';
  
  resetTools();
}



// Show standard confirmation modal
function showConfirm(title, msg, onOk) {
  els.confirmTitle.textContent = title;
  els.confirmMsg.textContent = msg;
  els.confirmOverlay.classList.add('visible');
  
  els.confirmOk.onclick = () => {
    els.confirmOverlay.classList.remove('visible');
    if (onOk) onOk();
  };
  
  els.confirmCancel.onclick = () => {
    els.confirmOverlay.classList.remove('visible');
  };
}

function setupEventListeners() {
  setupHistoryEventListeners();
  // Prevent canvas zoom when scrolling over panels
  if (els.rightPanel) {
    els.rightPanel.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });
  }
  if (els.leftPanel) {
    els.leftPanel.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });
  }

  // Category selection pills
  els.categoryPills.addEventListener('click', (e) => {
    if (e.target.classList.contains('pill')) {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      state.activeCategory = e.target.getAttribute('data-category');
      
      // Handle sub-category display
      if (state.activeCategory === 'downlight') {
        els.subCategoryPillsWrap.style.display = 'block';
      } else {
        els.subCategoryPillsWrap.style.display = 'none';
      }
      state.activeSubCategory = 'all';
      document.querySelectorAll('.sub-pill').forEach(sp => sp.classList.remove('active'));
      const defaultSubPill = els.subCategoryPillsWrap.querySelector('.sub-pill[data-subcategory="all"]');
      if (defaultSubPill) defaultSubPill.classList.add('active');
      
      renderFixtureLibrary();
    }
  });

  // Sub-category selection pills
  els.subCategoryPills.addEventListener('click', (e) => {
    if (e.target.classList.contains('sub-pill')) {
      document.querySelectorAll('.sub-pill').forEach(sp => sp.classList.remove('active'));
      e.target.classList.add('active');
      state.activeSubCategory = e.target.getAttribute('data-subcategory');
      renderFixtureLibrary();
    }
  });

  // Select Mode Toolbar Button
  els.btnSelectMode.addEventListener('click', () => {
    resetTools();
    renderAll();
  });

  // File Upload Handlers
  els.mainDropZone.addEventListener('click', () => els.fileInput.click());
  
  els.fileInput.addEventListener('change', (e) => handleUpload(e.target.files[0]));

  // Drag and drop event handlers for main zone
  els.mainDropZone.addEventListener('dragover', (e) => { e.preventDefault(); });
  els.mainDropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    handleUpload(e.dataTransfer.files[0]);
  });

  // Floating Actions
  if (els.tabAddZone) {
    els.tabAddZone.addEventListener('click', (e) => {
      if (els.heightPopup) els.heightPopup.classList.remove('visible');
      e.stopPropagation();
      if (els.zonePopup) els.zonePopup.classList.toggle('visible');
    });
  }

  if (els.btnDrawZonePolygon) {
    els.btnDrawZonePolygon.addEventListener('click', (e) => {
      e.stopPropagation();
      resetTools();
      state.activeTool = 'draw-zone-polygon';
      state.onboardingDismissed = true;
      checkOnboardingTooltip();
      if (els.tabAddZone) els.tabAddZone.classList.add('active');
      els.btnDrawZonePolygon.classList.add('active');
      if (els.zonePopup) els.zonePopup.classList.remove('visible');
      if (els.lblAddZone) els.lblAddZone.textContent = "공간: 다각형";
      if (els.btnSelectMode) els.btnSelectMode.classList.remove('active');
      if (els.canvasContainer) els.canvasContainer.classList.add('crosshair-cursor');
    });
  }

  if (els.btnDrawZoneRect) {
    els.btnDrawZoneRect.addEventListener('click', (e) => {
      e.stopPropagation();
      resetTools();
      state.activeTool = 'draw-zone-rect';
      state.onboardingDismissed = true;
      checkOnboardingTooltip();
      if (els.tabAddZone) els.tabAddZone.classList.add('active');
      els.btnDrawZoneRect.classList.add('active');
      if (els.zonePopup) els.zonePopup.classList.remove('visible');
      if (els.lblAddZone) els.lblAddZone.textContent = "공간: 사각형";
      if (els.btnSelectMode) els.btnSelectMode.classList.remove('active');
      if (els.canvasContainer) els.canvasContainer.classList.add('crosshair-cursor');
    });
  }

  const btnDismissOnboarding = document.getElementById('btnDismissOnboarding');
  if (btnDismissOnboarding) {
    btnDismissOnboarding.addEventListener('click', (e) => {
      e.stopPropagation();
      state.onboardingDismissed = true;
      checkOnboardingTooltip();
    });
  }

  els.tabMeasure.addEventListener('click', () => {
    resetTools();
    state.activeTool = 'measure';
    els.tabMeasure.classList.add('active');
    if (els.btnSelectMode) els.btnSelectMode.classList.remove('active');
    if (els.canvasContainer) els.canvasContainer.classList.add('crosshair-cursor');
  });

  if (els.eyeDimension) {
    els.eyeDimension.addEventListener('click', () => {
      state.showDimensions = !state.showDimensions;
      els.eyeDimension.classList.toggle('active', state.showDimensions);
      renderAll();
    });
  }

  // Ceiling Height Popup (guarded)
  if (els.tabHeight) {
    els.tabHeight.addEventListener('click', (e) => {
      e.stopPropagation();
      if (els.zonePopup) els.zonePopup.classList.remove('visible');
      if (els.heightPopup) els.heightPopup.classList.toggle('visible');
    });
  }
  
  if (els.heightPopup) els.heightPopup.addEventListener('click', (e) => e.stopPropagation());
  if (els.zonePopup) els.zonePopup.addEventListener('click', (e) => e.stopPropagation());
  
  document.addEventListener('click', () => {
    if (els.heightPopup) els.heightPopup.classList.remove('visible');
    if (els.zonePopup) els.zonePopup.classList.remove('visible');
  });

  if (els.ceilingHeightInput) {
    els.ceilingHeightInput.addEventListener('input', (e) => {
      state.ceilingHeight = parseFloat(e.target.value) || 2.4;
      if (els.lblCeilingHeight) els.lblCeilingHeight.textContent = state.ceilingHeight.toFixed(1);
      recalculateAllZones();
      renderAll();
    });
  }

  if (els.btnBackToCalibrate) {
    els.btnBackToCalibrate.addEventListener('click', () => {
      startCalibrationFlow();
    });
  }
  
  if (els.btnCancelSwitchInput) {
    els.btnCancelSwitchInput.addEventListener('click', () => {
      finishZoneCreation(1);
    });
  }
  
  if (els.btnConfirmSwitchInput) {
    els.btnConfirmSwitchInput.addEventListener('click', () => {
      const swCount = parseInt(els.switchCountSelect.value) || 1;
      finishZoneCreation(swCount);
    });
  }

  // Display toggles
  if (els.btnIllumToggle) {
    els.btnIllumToggle.addEventListener('click', () => {
      state.heatmapMode = state.heatmapMode === 'zone' ? 'none' : 'zone';
      renderAll();
    });
  }

  // Snap toggle
  const snapBtn = document.getElementById('snapToggleBtn');
  if (snapBtn) {
    snapBtn.addEventListener('click', () => {
      state.snapEnabled = !state.snapEnabled;
      snapBtn.classList.toggle('active', state.snapEnabled);
    });
  }

  // Grid checkbox removed - grid always hidden
  if (els.chkShowGrid) {
    els.chkShowGrid.addEventListener('change', (e) => {
      state.showGrid = false; // Grid disabled
      renderAll();
    });
  }
  state.showGrid = false;

  // BOM Maximization Click Toggle
  els.btnMaximizeBOM.addEventListener('click', () => {
    els.appWrapper.classList.toggle('bom-expanded');
    const isExpanded = els.appWrapper.classList.contains('bom-expanded');
    
    // Update icon and title
    if (isExpanded) {
      els.btnMaximizeBOM.setAttribute('title', 'BOM 축소');
      els.btnMaximizeBOM.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="4 14 10 14 10 20"/>
          <polyline points="20 10 14 10 14 4"/>
          <line x1="14" y1="10" x2="21" y2="3"/>
          <line x1="10" y1="14" x2="3" y2="21"/>
        </svg>
      `;
    } else {
      els.btnMaximizeBOM.setAttribute('title', 'BOM 확대');
      els.btnMaximizeBOM.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 3 21 3 21 9"/>
          <polyline points="9 21 3 21 3 15"/>
          <line x1="21" y1="3" x2="14" y2="10"/>
          <line x1="3" y1="21" x2="10" y2="14"/>
        </svg>
      `;
    }
  });

  // Project Saves & Loads
  els.btnNewProject.addEventListener('click', () => {
    showConfirm("홈으로 이동", "현재 작성 중인 모든 데이터가 삭제됩니다. 계속하시겠습니까?", () => {
      clearProjectState();
      resetHistory();
      els.uploadOverlay.style.display = 'flex';
      els.canvasContainer.style.display = 'none';
      els.canvasToolbar.style.display = 'none';
      updateStats();
      renderAll();
    });
  });

  els.btnSaveProject.addEventListener('click', saveProjectFile);
  els.btnLoadProject.addEventListener('click', () => els.loadProjectInput.click());
  if (els.btnLoadProjectFirst) {
    els.btnLoadProjectFirst.addEventListener('click', () => els.loadProjectInput.click());
  }
  els.loadProjectInput.addEventListener('change', loadProjectFile);
  
  // Template Click Listeners
  document.querySelectorAll('.template-card-row').forEach(card => {
    card.addEventListener('click', () => {
      const fileUrl = card.getAttribute('data-template-file');
      if (fileUrl) {
        loadTemplateProject(fileUrl);
      }
    });
  });
  
  // Excel Export
  els.btnExport.addEventListener('click', exportToExcel);

  // Keyboard controls for layout canvas (Backspace/Delete to clear selected, arrow keys to nudge)
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  // Setup main canvas interactions (Zoom, Pan, click events)
  setupCanvasInteractions();
  setupZoneSelectEvents();

  // Canvas zoom nav buttons
  if (els.btnCanvasZoomIn) {
    els.btnCanvasZoomIn.addEventListener('click', () => {
      const newZoom = Math.min(state.zoom * 1.2, 4.0);
      const cx = els.canvasArea.clientWidth / 2;
      const cy = els.canvasArea.clientHeight / 2;
      state.panX = cx - (cx - state.panX) * (newZoom / state.zoom);
      state.panY = cy - (cy - state.panY) * (newZoom / state.zoom);
      state.zoom = newZoom;
      updateZoomAndPan();
    });
  }
  if (els.btnCanvasZoomOut) {
    els.btnCanvasZoomOut.addEventListener('click', () => {
      const newZoom = Math.max(state.zoom / 1.2, 0.2);
      const cx = els.canvasArea.clientWidth / 2;
      const cy = els.canvasArea.clientHeight / 2;
      state.panX = cx - (cx - state.panX) * (newZoom / state.zoom);
      state.panY = cy - (cy - state.panY) * (newZoom / state.zoom);
      state.zoom = newZoom;
      updateZoomAndPan();
    });
  }
  if (els.btnCanvasZoomReset) {
    els.btnCanvasZoomReset.addEventListener('click', () => {
      const areaW = els.canvasArea.clientWidth;
      const areaH = els.canvasArea.clientHeight;
      const imgW = els.floorplanCanvas.width;
      const imgH = els.floorplanCanvas.height;
      if (!imgW || !imgH) return;
      const fitZoom = Math.min(areaW / imgW, areaH / imgH, 1.0);
      state.zoom = fitZoom;
      state.panX = (areaW - imgW * fitZoom) / 2;
      state.panY = (areaH - imgH * fitZoom) / 2;
      updateZoomAndPan();
    });
  }

  // Calibration zoom nav & back button listeners
  if (els.btnCalibrateZoomIn) {
    els.btnCalibrateZoomIn.addEventListener('click', () => zoomCalibrateAtCenter(1.2));
  }
  if (els.btnCalibrateZoomOut) {
    els.btnCalibrateZoomOut.addEventListener('click', () => zoomCalibrateAtCenter(1 / 1.2));
  }
  if (els.btnCalibrateZoomReset) {
    els.btnCalibrateZoomReset.addEventListener('click', () => {
      if (!state.uploadedImage) return;
      const c = els.calibrateCanvas;
      const fw = c.width, fh = c.height;
      const fz = Math.min(fw / state.uploadedImage.width, fh / state.uploadedImage.height, 1.0);
      state.calibrateZoom = fz;
      state.calibratePanX = (fw - state.uploadedImage.width * fz) / 2;
      state.calibratePanY = (fh - state.uploadedImage.height * fz) / 2;
      updateCalibrateZoomText();
      renderCalibrationCanvas();
    });
  }
  if (els.btnCalibrateBack) {
    els.btnCalibrateBack.addEventListener('click', () => {
      els.calibrateOverlay.style.display = 'none';
      state.uploadedImage = null;
      els.fileInput.value = '';
      
      els.calibrateCanvas.onmousedown = null;
      els.calibrateCanvas.onmousemove = null;
      els.calibrateCanvas.onmouseup = null;
      els.calibrateCanvas.onmouseleave = null;
      els.calibrateCanvas.onwheel = null;
      state.isScanningCalibration = false;
      
      els.uploadOverlay.style.display = 'flex';
    });
  }
}

// ==================== IMAGE FILE UPLOADING FLOW ====================
function handleUpload(file) {
  if (!file) return;

  // Reject non-image files on the start screen drop zone / selector
  if (!file.type.startsWith('image/')) {
    alert("올바른 도면 이미지 파일(PNG, JPG)을 업로드해주세요.");
    return;
  }

  // Clear previous project state when uploading a new layout image
  clearProjectState();

  // Handle image files
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      state.uploadedImage = img;
      els.uploadOverlay.style.display = 'none';
      
      // Init canvas size
      initCanvasDimensions(img.width, img.height);
      
      // Open Calibration flow directly
      startCalibrationFlow();
    };
    img.onerror = function() {
      alert("도면 이미지를 불러오는 데 실패했습니다.");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function initCanvasDimensions(w, h) {
  els.floorplanCanvas.width = w;
  els.floorplanCanvas.height = h;
  els.gridCanvas.width = w;
  els.gridCanvas.height = h;
  els.zoneCanvas.width = w;
  els.zoneCanvas.height = h;
  els.lightOverlay.width = w;
  els.lightOverlay.height = h;
  els.interactionLayer.width = w;
  els.interactionLayer.height = h;

  els.canvasContainer.style.display = 'block';
  els.canvasToolbar.style.display = 'flex';
  updateBackButtonVisibility();
  checkOnboardingTooltip();

  // FIT on first load — use rAF to get correct canvasArea dimensions after layout
  requestAnimationFrame(() => {
    const areaW = els.canvasArea.clientWidth;
    const areaH = els.canvasArea.clientHeight;
    const imgW = els.floorplanCanvas.width;
    const imgH = els.floorplanCanvas.height;
    if (areaW && areaH && imgW && imgH) {
      const fitZoom = Math.min(areaW / imgW, areaH / imgH, 1.0);
      state.zoom = fitZoom;
      state.panX = (areaW - imgW * fitZoom) / 2;
      state.panY = (areaH - imgH * fitZoom) / 2;
    } else {
      state.zoom = 1.0;
      state.panX = 0;
      state.panY = 0;
    }
    updateZoomAndPan();
  });
}

function updateBackButtonVisibility() {
  if (els.btnBackToCalibrate) {
    if (state.uploadedImage && els.canvasContainer.style.display === 'block' && els.calibrateOverlay.style.display === 'none') {
      els.btnBackToCalibrate.style.display = 'flex';
    } else {
      els.btnBackToCalibrate.style.display = 'none';
    }
  }
}


function updateZoomAndPan() {
  els.canvasContainer.style.width = els.floorplanCanvas.width + 'px';
  els.canvasContainer.style.height = els.floorplanCanvas.height + 'px';
  els.canvasContainer.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
  els.zoomDisplay.textContent = Math.round(state.zoom * 100) + '%';
  els.scaleDisplay.textContent = `1m = ${Math.round(state.pixelsPerMeter)}px`;

  // 평수 표시: 수동 입력값만 표시, 미입력 시 "입력값 없음"
  if (els.pyeongDisplay) {
    const pyeongVal = parseFloat(document.getElementById('pyeongInput')?.value);
    if (pyeongVal > 0) {
      const areaM2 = pyeongVal * 3.3058;
      els.pyeongDisplay.textContent = `${pyeongVal.toFixed(1)}평 (${areaM2.toFixed(1)}㎡)`;
    } else {
      els.pyeongDisplay.textContent = '입력값 없음';
    }
  }
}

// ==================== CALIBRATION (SCALE CONFIG) FLOW ====================
// ==================== CALIBRATION (SCALE CONFIG) FLOW ====================

function getCalibrateCoords(e, canvas) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const canvasX = (e.clientX - rect.left) * scaleX;
  const canvasY = (e.clientY - rect.top) * scaleY;
  const imageX = (canvasX - state.calibratePanX) / state.calibrateZoom;
  const imageY = (canvasY - state.calibratePanY) / state.calibrateZoom;
  return { canvasX, canvasY, imageX, imageY, rect, scaleX, scaleY };
}

function getDistanceToSegment(p, a, b) {
  const l2 = (a.x - b.x)**2 + (a.y - b.y)**2;
  if (l2 === 0) return { dist: Math.sqrt((p.x - a.x)**2 + (p.y - a.y)**2), x: a.x, y: a.y, t: 0 };
  let t = ((p.x - a.x) * (b.x - a.x) + (p.y - a.y) * (b.y - a.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  const projX = a.x + t * (b.x - a.x);
  const projY = a.y + t * (b.y - a.y);
  return {
    dist: Math.sqrt((p.x - projX)**2 + (p.y - projY)**2),
    x: projX,
    y: projY,
    t: t
  };
}

function zoomCalibrateAtCenter(factor) {
  const cx = els.calibrateCanvas.width / 2;
  const cy = els.calibrateCanvas.height / 2;
  const imageX = (cx - state.calibratePanX) / state.calibrateZoom;
  const imageY = (cy - state.calibratePanY) / state.calibrateZoom;
  
  state.calibrateZoom = Math.max(0.2, Math.min(5.0, state.calibrateZoom * factor));
  state.calibratePanX = cx - imageX * state.calibrateZoom;
  state.calibratePanY = cy - imageY * state.calibrateZoom;
  
  updateCalibrateZoomText();
  renderCalibrationCanvas();
}

function updateCalibrateZoomText() {
  const el = document.getElementById('txtCalibrateZoom');
  if (el) {
    el.textContent = Math.round(state.calibrateZoom * 100) + '%';
  }
}

function startCalibrationFlow() {
  if (!state.uploadedImage) return;

  if (els.btnBackToCalibrate) {
    els.btnBackToCalibrate.style.display = 'none';
  }

  const modal = els.calibrateOverlay;
  const canvas = els.calibrateCanvas;

  state.calibrationPoints = [];
  state.calibrateMousePos = null;

  // Show modal first so layout is settled before measuring wrap dimensions
  modal.style.display = 'flex';

  // Measure the canvas-wrap after display to get correct dimensions
  const wrap = canvas.parentElement;
  const wrapW = wrap ? wrap.clientWidth : 800;
  const wrapH = wrap ? wrap.clientHeight : 600;

  // Set canvas size to match the visible wrap area (not the image size).
  // This ensures pan/zoom coordinates stay within canvas bounds at all zoom levels.
  canvas.width = wrapW;
  canvas.height = wrapH;

  // Set default reference distance to 0.9m
  if (els.referenceDistance) {
    els.referenceDistance.value = "0.9";
  }

  // 평수 입력 초기화
  const pyeongEl = document.getElementById('pyeongInput');
  if (pyeongEl) pyeongEl.value = '';
  const previewEl = document.getElementById('pyeongPreview');
  if (previewEl) previewEl.textContent = '';

  // 버튼 비활성화 (초기 상태)
  els.btnApplyCalibrate.disabled = true;

  if (els.calibrateStatus) {
    els.calibrateStatus.textContent = "기준선의 시작점을 마우스로 클릭해 주세요.";
  }

  // Initialize zoom and pan — fit image centered in the canvas/wrap
  const fitZoom = Math.min(wrapW / state.uploadedImage.width, wrapH / state.uploadedImage.height, 1.0);
  state.calibrateZoom = fitZoom;
  state.calibratePanX = (wrapW - state.uploadedImage.width * fitZoom) / 2;
  state.calibratePanY = (wrapH - state.uploadedImage.height * fitZoom) / 2;
  state.isCalibratePanning = false;
  updateCalibrateZoomText();
  renderCalibrationCanvas();
  
  // Panning drag tracking
  let clickStartX = 0;
  let clickStartY = 0;
  let panStartX = 0;
  let panStartY = 0;
  let isDragging = false;
  let mouseDownOnCanvas = false; // mousedown이 캔버스에서 발생했는지 추적

  canvas.onmousedown = (e) => {
    if (e.button !== 0) return;

    mouseDownOnCanvas = true;
    clickStartX = e.clientX;
    clickStartY = e.clientY;
    panStartX = state.calibratePanX;
    panStartY = state.calibratePanY;
    isDragging = false;

    canvas.style.cursor = 'crosshair';
  };

  canvas.onmousemove = (e) => {
    const { imageX, imageY } = getCalibrateCoords(e, canvas);

    // mouseDownOnCanvas 확인: 캔버스 외부에서 버튼을 누른 채 이동해온 경우 팬 방지
    if (e.buttons === 1 && mouseDownOnCanvas) {
      const dx = e.clientX - clickStartX;
      const dy = e.clientY - clickStartY;
      if (Math.hypot(dx, dy) > 5) {
        isDragging = true;
        state.isCalibratePanning = true;
        const rect = canvas.getBoundingClientRect();
        const sx = canvas.width / rect.width;
        const sy = canvas.height / rect.height;
        state.calibratePanX = panStartX + dx * sx;
        state.calibratePanY = panStartY + dy * sy;
        canvas.style.cursor = 'move';
      }
    } else if (e.buttons === 0) {
      state.isCalibratePanning = false;
    }

    if (state.calibrationPoints.length === 1) {
      let pt = { x: imageX, y: imageY };
      if (e.shiftKey) {
        pt = getSnappedPoint(state.calibrationPoints[0], pt, true);
      }
      state.calibrateMousePos = pt;
    }

    renderCalibrationCanvas();
  };

  canvas.onmouseup = (e) => {
    if (e.button !== 0) return;

    mouseDownOnCanvas = false;
    state.isCalibratePanning = false;
    canvas.style.cursor = 'crosshair';

    if (isDragging) {
      isDragging = false;
      return;
    }
    
    const { imageX, imageY } = getCalibrateCoords(e, canvas);
    let pt = { x: imageX, y: imageY };
    
    if (state.calibrationPoints.length === 0) {
      state.calibrationPoints.push(pt);
      state.calibrateMousePos = pt;
      if (els.calibrateStatus) {
        els.calibrateStatus.textContent = "기준선의 끝점을 마우스로 클릭해 주세요. (Shift 키를 누르면 수평/수직 정렬)";
      }
    } else if (state.calibrationPoints.length === 1) {
      if (e.shiftKey) {
        pt = getSnappedPoint(state.calibrationPoints[0], pt, true);
      }
      state.calibrationPoints.push(pt);
      state.calibrateMousePos = null;
      if (els.calibrateStatus) {
        els.calibrateStatus.textContent = "기준선이 설정되었습니다. 실제 길이를 입력하고 '보정 값 적용' 버튼을 눌러주세요.";
      }
      updateApplyButtonState();
    } else {
      state.calibrationPoints = [pt];
      state.calibrateMousePos = pt;
      if (els.calibrateStatus) {
        els.calibrateStatus.textContent = "기준선의 끝점을 마우스로 클릭해 주세요. (Shift 키를 누르면 수평/수직 정렬)";
      }
      updateApplyButtonState();
    }

    renderCalibrationCanvas();
  };
  
  canvas.onmouseleave = () => {
    state.isCalibratePanning = false;
    isDragging = false;
    mouseDownOnCanvas = false;
    canvas.style.cursor = 'default';
  };
  
  canvas.onwheel = (e) => {
    e.preventDefault();
    const { canvasX, canvasY, imageX, imageY } = getCalibrateCoords(e, canvas);
    
    const zoomIntensity = 0.08;
    const oldZoom = state.calibrateZoom;
    let newZoom;
    if (e.deltaY < 0) {
      newZoom = oldZoom * (1 + zoomIntensity);
    } else {
      newZoom = oldZoom / (1 + zoomIntensity);
    }
    
    state.calibrateZoom = Math.max(0.2, Math.min(5.0, newZoom));
    state.calibratePanX = canvasX - imageX * state.calibrateZoom;
    state.calibratePanY = canvasY - imageY * state.calibrateZoom;
    
    updateCalibrateZoomText();
    renderCalibrationCanvas();
  };
}

function renderCalibrationCanvas() {
  const canvas = els.calibrateCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const rect = canvas.getBoundingClientRect();
  const scaleX = w / rect.width;
  const drawScale = state.calibrateZoom * scaleX;
  
  ctx.clearRect(0, 0, w, h);
  
  ctx.save();
  ctx.translate(state.calibratePanX, state.calibratePanY);
  ctx.scale(state.calibrateZoom, state.calibrateZoom);
  
  ctx.drawImage(state.uploadedImage, 0, 0);
  
  if (state.calibrationPoints.length >= 1) {
    const p1 = state.calibrationPoints[0];
    
    ctx.fillStyle = '#0070f3';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2 / drawScale;
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, 6 / drawScale, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    if (state.calibrationPoints.length === 1 && state.calibrateMousePos) {
      const p2 = state.calibrateMousePos;
      
      ctx.strokeStyle = '#0070f3';
      ctx.lineWidth = 2 / drawScale;
      ctx.setLineDash([5 / drawScale, 5 / drawScale]);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.setLineDash([]);
      
      ctx.fillStyle = 'rgba(61, 105, 185, 0.6)';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5 / drawScale;
      ctx.beginPath();
      ctx.arc(p2.x, p2.y, 4 / drawScale, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      
      const distPx = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      drawDistanceText(ctx, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2, distPx, drawScale);
    }
  }
  
  if (state.calibrationPoints.length === 2) {
    const p1 = state.calibrationPoints[0];
    const p2 = state.calibrationPoints[1];
    
    ctx.strokeStyle = '#0070f3';
    ctx.lineWidth = 3 / drawScale;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    
    ctx.fillStyle = '#0070f3';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2 / drawScale;
    ctx.beginPath();
    ctx.arc(p2.x, p2.y, 6 / drawScale, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    const distPx = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    drawDistanceText(ctx, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2, distPx, drawScale);
  }
  
  ctx.restore();
}

function drawDistanceText(ctx, cx, cy, distPx, drawScale) {
  const text = `${Math.round(distPx)} px`;
  
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 3 / drawScale;
  ctx.font = `bold ${Math.max(10, 13 / drawScale)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.strokeText(text, cx, cy - 8 / drawScale);
  ctx.fillText(text, cx, cy - 8 / drawScale);
  ctx.restore();
}

// ── 보정 버튼 활성화 상태 관리 ──
function updateApplyButtonState() {
  const hasLine = state.calibrationPoints.length >= 2;
  els.btnApplyCalibrate.disabled = !hasLine;
}

// ── 평수 입력 → m² 미리보기 + 버튼 활성화 ──
const pyeongInputEl = document.getElementById('pyeongInput');
if (pyeongInputEl) {
  pyeongInputEl.addEventListener('input', () => {
    const pyeong = parseFloat(pyeongInputEl.value);
    // 보정 모달 내 미리보기
    const preview = document.getElementById('pyeongPreview');
    if (preview) {
      preview.textContent = (pyeong > 0) ? `≈ ${(pyeong * 3.3058).toFixed(1)} ㎡` : '';
    }
    // 좌측 패널 면적 표시 즉시 반영
    const display = els.pyeongDisplay;
    if (display) {
      display.textContent = (pyeong > 0)
        ? `${pyeong.toFixed(1)}평 (${(pyeong * 3.3058).toFixed(1)}㎡)`
        : '입력값 없음';
    }
    updateApplyButtonState();
  });
}


// ── 패널 정보 스크롤 버튼 ──
const infoPanelScroll = document.getElementById('infoPanelScroll');
document.getElementById('infoPrevBtn')?.addEventListener('click', () => {
  infoPanelScroll?.scrollBy({ left: -80, behavior: 'smooth' });
});
document.getElementById('infoNextBtn')?.addEventListener('click', () => {
  infoPanelScroll?.scrollBy({ left: 80, behavior: 'smooth' });
});

els.btnApplyCalibrate.addEventListener('click', () => {
  if (state.calibrationPoints.length < 2) {
    alert("도면 위에 기준선을 먼저 그려주세요 (두 점 클릭).");
    return;
  }

  const refDist = parseFloat(els.referenceDistance.value);
  if (isNaN(refDist) || refDist <= 0) {
    alert("올바른 기준선 길이를 입력해 주세요 (예: 0.9).");
    return;
  }
  
  const p1 = state.calibrationPoints[0];
  const p2 = state.calibrationPoints[1];
  const distPx = Math.hypot(p2.x - p1.x, p2.y - p1.y);
  
  state.pixelsPerMeter = distPx / refDist;
  
  els.calibrateOverlay.style.display = 'none';
  els.calibrateCanvas.onmousedown = null;
  els.calibrateCanvas.onmousemove = null;
  els.calibrateCanvas.onmouseup = null;
  els.calibrateCanvas.onmouseleave = null;
  els.calibrateCanvas.onwheel = null;
  
  updateZoomAndPan();
  recalculateAllZones();
  updateBackButtonVisibility();
  resetHistory({
    lights: [],
    zones: [],
    dimensions: []
  });
  renderAll();
});

els.btnCancelCalibrate.addEventListener('click', () => {
  els.calibrateOverlay.style.display = 'none';
  els.calibrateCanvas.onmousedown = null;
  els.calibrateCanvas.onmousemove = null;
  els.calibrateCanvas.onmouseup = null;
  els.calibrateCanvas.onmouseleave = null;
  els.calibrateCanvas.onwheel = null;
  updateBackButtonVisibility();
  if (!state.uploadedImage) {
    els.uploadOverlay.style.display = 'flex';
  } else {
    updateZoomAndPan();
    recalculateAllZones();
    renderAll();
  }
});

// ==================== WIDGET INTERACTIONS (MOUSE, ZOOM, PAN) ====================
function setupCanvasInteractions() {
  const layer = els.interactionLayer;
  
  // Wheel scroll Zoom handler
  els.canvasArea.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    const mouseX = e.clientX - els.canvasArea.getBoundingClientRect().left;
    const mouseY = e.clientY - els.canvasArea.getBoundingClientRect().top;
    
    const wheel = e.deltaY < 0 ? 1 : -1;
    const zoomFactor = Math.exp(wheel * zoomIntensity);
    
    // Zoom centered at cursor pos
    const newZoom = Math.min(Math.max(state.zoom * zoomFactor, 0.2), 4.0);
    
    state.panX = mouseX - (mouseX - state.panX) * (newZoom / state.zoom);
    state.panY = mouseY - (mouseY - state.panY) * (newZoom / state.zoom);
    state.zoom = newZoom;
    
    updateZoomAndPan();
    renderAll();
  });

  // Double click to edit zone
  layer.addEventListener('dblclick', (e) => {
    if (state.activeTool !== 'select') return;
    const pt = getOriginalCoords(e);
    const clickedZone = findZoneAt(pt.x, pt.y);
    if (clickedZone) {
      editZone(clickedZone);
    }
  });

  // Mouse pan triggers
  layer.addEventListener('mousedown', (e) => {
    // Right click or tool settings
    if (e.button === 2) {
      e.preventDefault();
      return;
    }

    // Universal drag-to-pan tracking (calibrate-style)
    state._mouseDownOnLayer = true;
    state._isDraggingCanvas = false;
    state._panDragStart = { x: e.clientX, y: e.clientY, panX: state.panX, panY: state.panY };

    const pt = getOriginalCoords(e);
    
    if (state.activeTool === 'select') {
      // Check if clicked a light dot
      const clickedLight = findLightAt(pt.x, pt.y);
      if (clickedLight) {
        if (e.shiftKey) {
          // toggle multiselect
          const idx = state.selectedLightIds.indexOf(clickedLight.id);
          if (idx > -1) state.selectedLightIds.splice(idx, 1);
          else state.selectedLightIds.push(clickedLight.id);
        } else {
          state.selectedLightIds = [clickedLight.id];
        }
        state.draggingLightId = clickedLight.id;
        state.dragOffsetX = pt.x - clickedLight.x;
        state.dragOffsetY = pt.y - clickedLight.y;
        
        state.selectedZoneId = null;
        state.selectedDimensionId = null;
        renderAll();
      } else {
        if (!e.shiftKey) {
          state.selectedLightIds = [];
        }
        
        // Check if clicked a dimension line
        const clickedDim = findDimensionAt(pt.x, pt.y);
        if (clickedDim) {
          state.selectedDimensionId = clickedDim.id;
          state.selectedZoneId = null;
          state.selectedLightIds = [];
          
          state.draggingDimensionId = clickedDim.id;
          state.dragOffsetX = pt.x;
          state.dragOffsetY = pt.y;
          renderAll();
        } else {
          // Check if clicked inside a zone
          const clickedZone = findZoneAt(pt.x, pt.y);
          if (clickedZone) {
            state.selectedZoneId = clickedZone.id;
            state.selectedDimensionId = null;
            state.selectedLightIds = [];
            
            state.draggingZoneId = clickedZone.id;
            state.dragOffsetX = pt.x;
            state.dragOffsetY = pt.y;
            renderAll();
          } else {
            // Clicked empty space
            state.selectedZoneId = null;
            state.selectedDimensionId = null;
            renderAll();
          }
        }
      }
    } else if (state.activeTool === 'place' && state.selectedFixtureId) {
      if (state.zones.length === 0) {
        alert("공간 추가를 먼저 진행해 주세요.");
        resetTools();
        setTimeout(() => {
          const btnDrawZonePolygon = document.getElementById('btnDrawZonePolygon');
          if (btnDrawZonePolygon) btnDrawZonePolygon.click();
        }, 50);
        return;
      }
      const spec = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
      if (spec && (spec.category === 'linebar' || spec.icon === 'line' || spec.id.includes('gridslot') || spec.category === 'multi')) {
        if (!state.isDrawingLinebar) {
          // FIRST CLICK: start drawing linebar
          state.isDrawingLinebar = true;
          state.linebarStart = { x: pt.x, y: pt.y };
          state.linebarEnd = { x: pt.x, y: pt.y };
        } else {
          // SECOND CLICK: finalize and place linebar
          const dx = state.linebarEnd.x - state.linebarStart.x;
          const dy = state.linebarEnd.y - state.linebarStart.y;
          const len = Math.sqrt(dx*dx + dy*dy);
          const specCur = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
          if (specCur) {
            let ex = state.linebarEnd.x;
            let ey = state.linebarEnd.y;
            
            let calculatedWatt = 0;
            let calculatedLumen = 0;
            
            if (specCur.id.includes('gridslot') || specCur.category === 'multi') {
              calculatedWatt = specCur.watt;
              calculatedLumen = specCur.lumen;
            } else {
              const maxLenPx = specCur.length ? (specCur.length / 1000) * state.pixelsPerMeter : Infinity;
              if (len > 0 && len > maxLenPx) {
                const scale = maxLenPx / len;
                ex = state.linebarStart.x + dx * scale;
                ey = state.linebarStart.y + dy * scale;
              }
              const lineLenPx = Math.sqrt((ex - state.linebarStart.x)**2 + (ey - state.linebarStart.y)**2);
              const lengthM = state.pixelsPerMeter > 0 ? (lineLenPx / state.pixelsPerMeter) : 0;
              calculatedWatt = Math.round(lengthM * specCur.watt);
              calculatedLumen = Math.round(lengthM * specCur.lumen);
            }
            
            const newLight = {
              id: state.nextLightId++,
              typeId: specCur.id,
              name: specCur.name,
              x: state.linebarStart.x,
              y: state.linebarStart.y,
              x2: ex,
              y2: ey,
              watt: calculatedWatt,
              lumen: calculatedLumen,
              color: specCur.color,
              size: specCur.size,
              price: specCur.price,
              rotation: 0
            };
            state.lights.push(newLight);
            recalculateAllZones();
            updateStats();
            saveStateToHistory();
          }
          state.isDrawingLinebar = false;
          state.linebarStart = null;
          state.linebarEnd = null;
          renderAll();
        }
      } else {
        // Use snapped position from ghostCursor if available
        const placePt = state.ghostCursor || pt;
        placeLightAt(placePt.x, placePt.y);
      }
    } else if (state.activeTool === 'draw-zone' || state.activeTool === 'draw-zone-polygon') {
      const lastPt = (state.isDrawingZone && state.zonePolygonPoints.length > 0)
        ? state.zonePolygonPoints[state.zonePolygonPoints.length - 1]
        : null;
      
      let targetPt = pt;
      if (state.isDrawingZone && state.zonePolygonPoints.length >= 3) {
        const start = state.zonePolygonPoints[0];
        const dist = Math.sqrt((start.x - pt.x)**2 + (start.y - pt.y)**2);
        if (dist < 15 / state.zoom) {
          targetPt = start;
        }
      }
      
      if (targetPt !== (state.zonePolygonPoints ? state.zonePolygonPoints[0] : null)) {
        targetPt = getSnappedPoint(lastPt, targetPt, e.shiftKey);
      }
      handleDrawZoneClick(targetPt.x, targetPt.y);
    } else if (state.activeTool === 'draw-zone-rect') {
      state.isDrawingZoneRect = true;
      state.zoneRectStart = { x: pt.x, y: pt.y };
      state.zoneRectEnd = { x: pt.x, y: pt.y };
    } else if (state.activeTool === 'measure') {
      const startPt = (state.measurePhase === 1) ? state.measureStart : null;
      const snapped = getSnappedPoint(startPt, pt, e.shiftKey);
      handleMeasureClick(snapped.x, snapped.y);
    }
  });

  layer.addEventListener('mousemove', (e) => {
    // Universal drag-to-pan (calibrate-style) — active when not dragging a light, zone, or dimension, or drawing a zone
    if (e.buttons === 1 && state._mouseDownOnLayer && !state.draggingLightId && !state.draggingZoneId && !state.draggingDimensionId && !state.isDrawingZoneRect &&
        state.activeTool !== 'draw-zone' && state.activeTool !== 'draw-zone-polygon') {
      const dx = e.clientX - state._panDragStart.x;
      const dy = e.clientY - state._panDragStart.y;
      if (Math.hypot(dx, dy) > 5) {
        state._isDraggingCanvas = true;
        state.panX = state._panDragStart.panX + dx;
        state.panY = state._panDragStart.panY + dy;
        layer.style.cursor = 'move';
        updateZoomAndPan();
        return;
      }
    }

    const pt = getOriginalCoords(e);
    state.ghostCursor = pt;
    state.snapGuides = [];

    // Place tool: compute snap for point fixtures (not linebar)
    if (state.activeTool === 'place' && state.selectedFixtureId && !state.isDrawingLinebar) {
      const spec = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
      if (spec && spec.category !== 'linebar' && spec.icon !== 'line') {
        const zone = state.zones.find(z => isPointInPolygon(pt, z.points));
        if (zone) {
          const zoneLights = state.lights.filter(l => isLightInPolygon(l, zone.points));
          const snap = getPlacementSnap(pt, zoneLights);
          state.ghostCursor = { x: snap.x, y: snap.y };
          state.snapGuides = snap.guides;
        }
      }
    }

    // Zone hover detection
    const hoveredZone = state.zones.find(z => z.visible !== false && isPointInPolygon(pt, z.points));
    const newHoveredZoneId = hoveredZone ? hoveredZone.id : null;
    if (newHoveredZoneId !== state.hoveredZoneId) {
      state.hoveredZoneId = newHoveredZoneId;
      if (state.uploadedImage) renderZoneLayer();
    }

    // Light hover tooltip
    const hoveredLight = findLightAt(pt.x, pt.y);
    if (hoveredLight) {
      const spec = fixtureDatabase.find(f => f.id === hoveredLight.typeId);
      if (spec) {
        els.lightTooltip.innerHTML = `<strong>${hoveredLight.name}</strong><br><span style="color:var(--text-dim);">${spec.model} | ${hoveredLight.watt}W | ${hoveredLight.lumen}lm | ${spec.beam}°</span>`;
        els.lightTooltip.style.display = 'block';
        const rect = els.canvasArea.getBoundingClientRect();
        els.lightTooltip.style.left = (e.clientX - rect.left + 15) + 'px';
        els.lightTooltip.style.top = (e.clientY - rect.top + 15) + 'px';
      }
    } else {
      els.lightTooltip.style.display = 'none';
    }
    
    if (state.isPanning) {
      state.panX = e.clientX - state.panStartX;
      state.panY = e.clientY - state.panStartY;
      updateZoomAndPan();
    } else if (state.draggingLightId) {
      const mainLight = state.lights.find(l => l.id === state.draggingLightId);
      if (mainLight) {
        const dx = pt.x - state.dragOffsetX - mainLight.x;
        const dy = pt.y - state.dragOffsetY - mainLight.y;
        
        // drag all selected
        state.selectedLightIds.forEach(id => {
          const l = state.lights.find(lt => lt.id === id);
          if (l) {
            l.x += dx;
            l.y += dy;
            if (l.x2 !== undefined && l.y2 !== undefined) {
              l.x2 += dx;
              l.y2 += dy;
            }
          }
        });
        
        recalculateAllZones();
        updateStats();
        renderAll();
      }
    } else if (state.draggingZoneId) {
      const zone = state.zones.find(z => z.id === state.draggingZoneId);
      if (zone) {
        const dx = pt.x - state.dragOffsetX;
        const dy = pt.y - state.dragOffsetY;
        
        // Move all points of the zone polygon
        zone.points.forEach(point => {
          point.x += dx;
          point.y += dy;
        });
        
        state.dragOffsetX = pt.x;
        state.dragOffsetY = pt.y;
        
        recalculateAllZones();
        updateStats();
        renderAll();
      }
    } else if (state.draggingDimensionId) {
      const dim = state.dimensions.find(d => d.id === state.draggingDimensionId);
      if (dim) {
        const dx = pt.x - state.dragOffsetX;
        const dy = pt.y - state.dragOffsetY;
        
        // Move start and end points of the dimension line
        dim.start.x += dx;
        dim.start.y += dy;
        dim.end.x += dx;
        dim.end.y += dy;
        
        state.dragOffsetX = pt.x;
        state.dragOffsetY = pt.y;
        
        renderAll();
      }
    } else if (state.activeTool === 'place' && state.isDrawingLinebar) {
      const specCur = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
      if (specCur && (specCur.id.includes('gridslot') || specCur.category === 'multi')) {
        // Force snap to horizontal/vertical for gridslots
        const snappedPt = getSnappedPoint(state.linebarStart, pt, true);
        const dx = snappedPt.x - state.linebarStart.x;
        const dy = snappedPt.y - state.linebarStart.y;
        
        // Exact length in pixels
        const lenM = (specCur.lengthMM || 120) / 1000;
        const lenPx = lenM * state.pixelsPerMeter;
        
        if (Math.abs(dx) >= Math.abs(dy)) {
          state.linebarEnd = {
            x: state.linebarStart.x + (dx >= 0 ? lenPx : -lenPx),
            y: state.linebarStart.y
          };
        } else {
          state.linebarEnd = {
            x: state.linebarStart.x,
            y: state.linebarStart.y + (dy >= 0 ? lenPx : -lenPx)
          };
        }
      } else {
        let snappedPt = getSnappedPoint(state.linebarStart, pt, e.shiftKey);
        // Clamp to max linebar length (spec.length mm -> meters -> pixels)
        if (specCur && specCur.length) {
          const maxLenPx = (specCur.length / 1000) * state.pixelsPerMeter;
          const dx = snappedPt.x - state.linebarStart.x;
          const dy = snappedPt.y - state.linebarStart.y;
          const len = Math.sqrt(dx*dx + dy*dy);
          if (len > maxLenPx && len > 0) {
            const scale = maxLenPx / len;
            snappedPt = { x: state.linebarStart.x + dx * scale, y: state.linebarStart.y + dy * scale };
          }
        }
        state.linebarEnd = snappedPt;
      }
      renderAll();
    } else if ((state.activeTool === 'draw-zone' || state.activeTool === 'draw-zone-polygon') && state.isDrawingZone) {
      const lastPt = state.zonePolygonPoints[state.zonePolygonPoints.length - 1];
      let targetPt = pt;
      if (state.zonePolygonPoints.length >= 3) {
        const start = state.zonePolygonPoints[0];
        const dist = Math.sqrt((start.x - pt.x)**2 + (start.y - pt.y)**2);
        if (dist < 15 / state.zoom) {
          targetPt = start;
        }
      }
      if (targetPt !== state.zonePolygonPoints[0]) {
        state.zoneDrawMouse = getSnappedPoint(lastPt, targetPt, e.shiftKey);
      } else {
        state.zoneDrawMouse = targetPt;
      }
      renderAll();
    } else if (state.activeTool === 'draw-zone-rect' && state.isDrawingZoneRect) {
      let endPt = pt;
      if (e.shiftKey) {
        const dx = pt.x - state.zoneRectStart.x;
        const dy = pt.y - state.zoneRectStart.y;
        const side = Math.max(Math.abs(dx), Math.abs(dy));
        endPt = {
          x: state.zoneRectStart.x + Math.sign(dx) * side,
          y: state.zoneRectStart.y + Math.sign(dy) * side
        };
      }
      state.zoneRectEnd = endPt;
      renderAll();
    } else if (state.activeTool === 'measure' && state.measurePhase === 1) {
      state.measureEnd = getSnappedPoint(state.measureStart, pt, e.shiftKey);
      renderAll();
    } else if (state.activeTool === 'place' || state.activeTool === 'select') {
      renderAll(); // draw hover guides or ghost lights
    }
  });

  window.addEventListener('mouseup', (e) => {
    const wasDraggingCanvas = state._isDraggingCanvas;
    const wasDraggingLight = state.draggingLightId !== null;
    const wasDraggingZone = state.draggingZoneId !== null;
    const wasDraggingDimension = state.draggingDimensionId !== null;
    
    state._mouseDownOnLayer = false;
    state._isDraggingCanvas = false;
    state.isPanning = false;
    state.draggingLightId = null;
    state.draggingZoneId = null;
    state.draggingDimensionId = null;
    
    if (wasDraggingLight || wasDraggingZone || wasDraggingDimension) {
      saveStateToHistory();
    }
    
    if (wasDraggingCanvas) {
      layer.style.cursor = '';
      return; // skip click-action processing (zone finalize, light placement, etc.)
    }
    // Linebar is now click-drag-click, so we do NOT place on mouseup.
    
    if (state.isDrawingZoneRect && state.zoneRectStart) {
      state.isDrawingZoneRect = false;
      const pt = getOriginalCoords(e);
      let endPt = state.zoneRectEnd || pt;
      if (e.shiftKey) {
        const dx = endPt.x - state.zoneRectStart.x;
        const dy = endPt.y - state.zoneRectStart.y;
        const side = Math.max(Math.abs(dx), Math.abs(dy));
        endPt = {
          x: state.zoneRectStart.x + Math.sign(dx) * side,
          y: state.zoneRectStart.y + Math.sign(dy) * side
        };
      }
      const start = state.zoneRectStart;
      const end = endPt;
      const minX = Math.min(start.x, end.x);
      const maxX = Math.max(start.x, end.x);
      const minY = Math.min(start.y, end.y);
      const maxY = Math.max(start.y, end.y);
      
      const width = maxX - minX;
      const height = maxY - minY;
      
      if (width > 10 && height > 10) {
        const points = [
          { x: minX, y: minY },
          { x: maxX, y: minY },
          { x: maxX, y: maxY },
          { x: minX, y: maxY }
        ];
        
        // Defer modal opening to let drawing preview clear cleanly
        setTimeout(() => {
          const areaM2 = (width * height) / (state.pixelsPerMeter * state.pixelsPerMeter);
          resetTools();
          openZoneSelectModal(points, areaM2, true);
          renderAll();
        }, 50);
      } else {
        resetTools();
        renderAll();
      }
    }
  });

  // Prevent default context menu for right click
  layer.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const pt = getOriginalCoords(e);
    const clickedLight = findLightAt(pt.x, pt.y);
    
    if (clickedLight) {
      // Rotate light 90 deg
      clickedLight.rotation = (clickedLight.rotation + 90) % 360;
      renderAll();
    }
  });

  // Hide tooltip when leaving canvas
  layer.addEventListener('mouseleave', () => {
    els.lightTooltip.style.display = 'none';
    if (state.hoveredZoneId !== null) {
      state.hoveredZoneId = null;
      if (state.uploadedImage) renderZoneLayer();
    }
  });
}

function getSnappedPoint(p1, p2, forceSnap = false) {
  if (!p1) return p2;
  if (!state.snapEnabled && !forceSnap) return p2;
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist === 0) return p2;

  // If shift key or forced snap is active
  if (forceSnap) {
    if (Math.abs(dx) >= Math.abs(dy)) {
      return { x: p2.x, y: p1.y }; // Snap to horizontal
    } else {
      return { x: p1.x, y: p2.y }; // Snap to vertical
    }
  }

  // Auto-snap threshold: 6 degrees (~0.105 rad) or 15 pixels
  const angle = Math.atan2(Math.abs(dy), Math.abs(dx)); // range [0, PI/2]
  const snapAngleThreshold = 6 * Math.PI / 180; // 6 degrees
  const snapPixelThreshold = 15; // pixels

  // Close to horizontal (angle close to 0)
  if (angle < snapAngleThreshold || Math.abs(dy) < snapPixelThreshold) {
    return { x: p2.x, y: p1.y };
  }
  // Close to vertical (angle close to PI/2)
  if ((Math.PI / 2 - angle) < snapAngleThreshold || Math.abs(dx) < snapPixelThreshold) {
    return { x: p1.x, y: p2.y };
  }

  return p2;
}

function getOriginalCoords(e) {
  const rect = els.interactionLayer.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  
  // Transform to natural pixel size based on zoom and pans
  const x = mouseX / state.zoom;
  const y = mouseY / state.zoom;
  return { x, y };
}

function distToSegment(p, v, w) {
  const l2 = (v.x - w.x)**2 + (v.y - w.y)**2;
  if (l2 === 0) return Math.sqrt((p.x - v.x)**2 + (p.y - v.y)**2);
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.sqrt((p.x - (v.x + t * (w.x - v.x)))**2 + (p.y - (v.y + t * (w.y - v.y)))**2);
}

function findLightAt(x, y) {
  return state.lights.find(l => {
    if (l.x2 !== undefined && l.y2 !== undefined) {
      return distToSegment({ x, y }, { x: l.x, y: l.y }, { x: l.x2, y: l.y2 }) <= 12;
    } else {
      const dx = l.x - x;
      const dy = l.y - y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      return dist <= Math.max(15, getFixtureRenderSize(l.size)); // 선택 클릭 영역은 최소 15px 반경 보장
    }
  });
}

function findDimensionAt(x, y) {
  return state.dimensions.find(dim => {
    return distToSegment({ x, y }, dim.start, dim.end) <= (10 / state.zoom);
  });
}

function findZoneAt(x, y) {
  for (let i = state.zones.length - 1; i >= 0; i--) {
    const zone = state.zones[i];
    if (isPointInPolygon({ x, y }, zone.points)) {
      return zone;
    }
  }
  return null;
}

// Place selected Downlight
function getPlacementSnap(pt, zoneLights) {
  if (!state.snapEnabled) return { x: pt.x, y: pt.y, guides: [] };
  const SNAP_DIST = 20 / state.zoom;
  const count = zoneLights.length;
  if (count === 0) return { x: pt.x, y: pt.y, guides: [] };

  let sx = pt.x, sy = pt.y;
  const guides = [];
  let snappedVert = false, snappedHoriz = false;

  // 2nd+ light: H/V alignment snap to any existing light in zone
  for (const light of zoneLights) {
    const dx = Math.abs(pt.x - light.x);
    const dy = Math.abs(pt.y - light.y);
    if (!snappedVert && dx < SNAP_DIST) {
      sx = light.x;
      snappedVert = true;
      guides.push({ type: 'v', x: light.x });
    }
    if (!snappedHoriz && dy < SNAP_DIST) {
      sy = light.y;
      snappedHoriz = true;
      guides.push({ type: 'h', y: light.y });
    }
  }

  // 3rd+ lights: equal spacing snap (based on light[0] → light[1] vector)
  if (count >= 2) {
    const l0 = zoneLights[0];
    const l1 = zoneLights[1];
    const spX = l1.x - l0.x;
    const spY = l1.y - l0.y;
    const spacing = Math.sqrt(spX * spX + spY * spY);
    if (spacing > 1) {
      const candidates = [];
      for (let n = 1; n <= 20; n++) {
        candidates.push({ x: l1.x + spX * n, y: l1.y + spY * n });
        candidates.push({ x: l0.x - spX * n, y: l0.y - spY * n });
      }
      const snapThresh = Math.max(SNAP_DIST * 2, spacing * 0.15);
      for (const cand of candidates) {
        const dist = Math.sqrt((pt.x - cand.x) ** 2 + (pt.y - cand.y) ** 2);
        if (dist < snapThresh) {
          sx = cand.x;
          sy = cand.y;
          snappedVert = true;
          snappedHoriz = true;
          guides.push({ type: 'spacing', x: cand.x, y: cand.y, spX, spY });
          break;
        }
      }
    }
  }

  return { x: sx, y: sy, guides };
}

function placeLightAt(x, y) {
  if (state.zones.length === 0) {
    alert("공간 추가를 먼저 진행해 주세요.");
    resetTools();
    setTimeout(() => {
      const btnDrawZonePolygon = document.getElementById('btnDrawZonePolygon');
      if (btnDrawZonePolygon) btnDrawZonePolygon.click();
    }, 50);
    return;
  }
  const spec = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
  if (!spec) return;

  const newLight = {
    id: state.nextLightId++,
    typeId: spec.id,
    name: spec.name,
    x: x,
    y: y,
    watt: spec.watt,
    lumen: spec.lumen,
    color: spec.color,
    size: spec.size,
    price: spec.price,
    rotation: 0
  };

  state.lights.push(newLight);
  recalculateAllZones();
  updateStats();
  saveStateToHistory();
  renderAll();
  
  // Keep placing mode enabled
}

// Drawing Zone Points
function handleDrawZoneClick(x, y) {
  if (!state.isDrawingZone) {
    state.isDrawingZone = true;
    state.zonePolygonPoints = [{x, y}];
  } else {
    // Check if clicked close to start point to close the polygon
    const start = state.zonePolygonPoints[0];
    const dist = Math.sqrt((start.x - x)**2 + (start.y - y)**2);
    
    if (dist < 15 / state.zoom && state.zonePolygonPoints.length >= 3) {
      // Close polygon and create new zone
      const pts = [...state.zonePolygonPoints];
      const areaM2 = calculatePolygonArea(pts) / (state.pixelsPerMeter * state.pixelsPerMeter);
      resetTools();
      setTimeout(() => {
        openZoneSelectModal(pts, areaM2, false);
        renderAll();
      }, 50);
    } else {
      state.zonePolygonPoints.push({x, y});
    }
  }
  renderAll();
}

// Measure tool click handlers
function handleMeasureClick(x, y) {
  if (state.measurePhase === 0) {
    state.measureStart = {x, y};
    state.measureEnd = {x, y};
    state.measurePhase = 1;
  } else if (state.measurePhase === 1) {
    state.measureEnd = {x, y};
    
    // Draw dimension
    const dx = state.measureEnd.x - state.measureStart.x;
    const dy = state.measureEnd.y - state.measureStart.y;
    const lengthM = Math.sqrt(dx * dx + dy * dy) / state.pixelsPerMeter;
    
    state.dimensions.push({
      id: state.nextDimId++,
      start: state.measureStart,
      end: state.measureEnd,
      label: lengthM.toFixed(2) + 'm'
    });
    
    resetTools();
    saveStateToHistory();
    renderAll();
  }
}

// Keyboard delete/nudge handlers
function handleKeyDown(e) {
  // Reset calibration points when in calibration mode
  if (els.calibrateOverlay && els.calibrateOverlay.style.display === 'flex') {
    if (e.key === 'Escape' || e.key === 'Delete' || e.key === 'Backspace') {
      state.calibrationPoints = [];
      if (els.calibrateStatus) {
        els.calibrateStatus.textContent = "기준선의 시작점을 마우스로 클릭해 주세요.";
      }
      renderCalibrationCanvas();
      e.preventDefault();
      return;
    }
  }


  if (els.switchInputOverlay && els.switchInputOverlay.classList.contains('visible')) {
    if (e.key === 'Escape') {
      finishZoneCreation(1);
      e.preventDefault();
      e.stopPropagation();
    }
    return;
  }
  if (els.zoneSelectOverlay && els.zoneSelectOverlay.classList.contains('visible')) {
    if (e.key === 'Escape') {
      closeZoneSelectModal();
      resetTools();
      renderAll();
      e.preventDefault();
      e.stopPropagation();
    }
    return;
  }
  if (e.key === 'Delete' || e.key === 'Backspace') {
    if ((state.activeTool === 'draw-zone' || state.activeTool === 'draw-zone-polygon') && state.isDrawingZone) {
      e.preventDefault();
      state.zonePolygonPoints.pop();
      if (state.zonePolygonPoints.length === 0) {
        resetTools();
      }
      renderAll();
      return;
    }
    
    let deletedSomething = false;
    if (state.selectedLightIds.length > 0) {
      state.lights = state.lights.filter(l => !state.selectedLightIds.includes(l.id));
      state.selectedLightIds = [];
      deletedSomething = true;
    } else if (state.selectedZoneId !== null) {
      const zoneToDelete = state.zones.find(z => z.id === state.selectedZoneId);
      if (zoneToDelete) {
        state.lights = state.lights.filter(l => !isLightInPolygon(l, zoneToDelete.points));
      }
      state.zones = state.zones.filter(z => z.id !== state.selectedZoneId);
      state.selectedZoneId = null;
      deletedSomething = true;
    } else if (state.selectedDimensionId !== null) {
      state.dimensions = state.dimensions.filter(d => d.id !== state.selectedDimensionId);
      state.selectedDimensionId = null;
      deletedSomething = true;
    }

    if (deletedSomething) {
      recalculateAllZones();
      updateStats();
      saveStateToHistory();
      renderAll();
    }
  } else if (e.key === 'Escape') {
    let deletedSomething = false;
    if (state.selectedLightIds.length > 0) {
      state.lights = state.lights.filter(l => !state.selectedLightIds.includes(l.id));
      state.selectedLightIds = [];
      deletedSomething = true;
    } else if (state.selectedZoneId !== null) {
      const zoneToDeleteEsc = state.zones.find(z => z.id === state.selectedZoneId);
      if (zoneToDeleteEsc) {
        state.lights = state.lights.filter(l => !isLightInPolygon(l, zoneToDeleteEsc.points));
      }
      state.zones = state.zones.filter(z => z.id !== state.selectedZoneId);
      state.selectedZoneId = null;
      deletedSomething = true;
    } else if (state.selectedDimensionId !== null) {
      state.dimensions = state.dimensions.filter(d => d.id !== state.selectedDimensionId);
      state.selectedDimensionId = null;
      deletedSomething = true;
    }
    
    if (deletedSomething) {
      recalculateAllZones();
      updateStats();
      saveStateToHistory();
      renderAll();
    } else {
      resetTools();
      renderAll();
    }
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    // nudge selection
    if (state.selectedLightIds.length > 0) {
      e.preventDefault();
      const nudge = e.shiftKey ? 10 : 1;
      let dx = 0, dy = 0;
      if (e.key === 'ArrowUp') dy = -nudge;
      if (e.key === 'ArrowDown') dy = nudge;
      if (e.key === 'ArrowLeft') dx = -nudge;
      if (e.key === 'ArrowRight') dx = nudge;
      
      state.selectedLightIds.forEach(id => {
        const l = state.lights.find(lt => lt.id === id);
        if (l) {
          l.x += dx;
          l.y += dy;
        }
      });
      recalculateAllZones();
      updateStats();
      renderAll();
    }
  } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    if (e.shiftKey) {
      redo();
    } else {
      undo();
    }
  } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
    e.preventDefault();
    redo();
  } else if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
    // duplicate selected lights
    if (state.selectedLightIds.length > 0) {
      e.preventDefault();
      const offset = 20;
      const newSelections = [];
      state.selectedLightIds.forEach(id => {
        const orig = state.lights.find(l => l.id === id);
        if (orig) {
          const newLight = {
            ...orig,
            id: state.nextLightId++,
            x: orig.x + offset,
            y: orig.y + offset
          };
          state.lights.push(newLight);
          newSelections.push(newLight.id);
        }
      });
      
      state.selectedLightIds = newSelections;
      recalculateAllZones();
      updateStats();
      saveStateToHistory();
      renderAll();
    }
  }
}

function handleKeyUp(e) {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    saveStateToHistory();
  }
}

// ==================== AREA & ILLUMINANCE (LUX) CALCULATION ====================
function calculatePolygonArea(pts) {
  // Shoelace formula
  let area = 0;
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += pts[i].x * pts[j].y;
    area -= pts[j].x * pts[i].y;
  }
  return Math.abs(area) / 2;
}

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

function isLightInPolygon(l, poly) {
  if (l.x2 !== undefined && l.y2 !== undefined) {
    const midpoint = {
      x: (l.x + l.x2) / 2,
      y: (l.y + l.y2) / 2
    };
    return isPointInPolygon(midpoint, poly);
  }
  return isPointInPolygon(l, poly);
}

function calculateRequiredSMPS(watt) {
  if (watt <= 0) return [];
  let smps = [];
  let w = watt;
  // 150W SMPS has 80% safe load limit of 120W
  while (w > 120) {
    smps.push(150);
    w -= 120;
  }
  if (w > 0) {
    // 36W (80% safe limit = 28.8W)
    if (w <= 28.8) {
      smps.push(36);
    }
    // 60W (80% safe limit = 48.0W)
    else if (w <= 48.0) {
      smps.push(60);
    }
    // 150W (80% safe limit = 120.0W)
    else {
      smps.push(150);
    }
  }
  return smps;
}

function generateNextZoneName(type) {
  let maxNum = 0;
  const regex = new RegExp(`^${type}(\\d*)$`);
  state.zones.forEach(z => {
    const match = z.name.trim().match(regex);
    if (match) {
      const numStr = match[1];
      const num = numStr ? parseInt(numStr, 10) : 1;
      if (num > maxNum) {
        maxNum = num;
      }
    }
  });
  return `${type}${maxNum + 1}`;
}

function editZone(zone) {
  state.editingZoneId = zone.id;
  state.tempZoneData = { points: zone.points, areaM2: zone.areaM2, isRect: false };
  
  els.zoneNameInput.value = zone.name;
  
  document.querySelectorAll('.zone-opt-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.zone-opt-btn').forEach(btn => {
    const type = btn.getAttribute('data-type');
    if (zone.name.startsWith(type)) {
      btn.classList.add('active');
    }
  });
  
  els.zoneSelectOverlay.style.display = 'flex';
  els.zoneSelectOverlay.classList.add('visible');
  
  setTimeout(() => {
    els.zoneNameInput.focus();
  }, 50);
}

function openZoneSelectModal(points, areaM2, isRect) {
  state.tempZoneData = { points, areaM2, isRect };
  
  // Reset input and button active states
  els.zoneNameInput.value = '';
  document.querySelectorAll('.zone-opt-btn').forEach(btn => btn.classList.remove('active'));
  
  els.zoneSelectOverlay.style.display = 'flex';
  els.zoneSelectOverlay.classList.add('visible');
  
  // Auto-focus the input box
  setTimeout(() => {
    els.zoneNameInput.focus();
  }, 50);
}

function closeZoneSelectModal() {
  els.zoneSelectOverlay.style.display = 'none';
  els.zoneSelectOverlay.classList.remove('visible');
  state.tempZoneData = null;
  state.editingZoneId = null;
}

function confirmZoneSelection() {
  const name = els.zoneNameInput.value.trim();
  if (!name) {
    alert("공간 이름을 입력하거나 종류를 선택해 주세요.");
    return;
  }
  
  if (state.tempZoneData) {
    const { points, areaM2 } = state.tempZoneData;
    state.pendingZoneData = { name, points, areaM2 };
    
    // Hide name modal
    els.zoneSelectOverlay.style.display = 'none';
    els.zoneSelectOverlay.classList.remove('visible');
    
    // Open switch modal
    openSwitchInputModal(name);
    
    // Pre-select the existing switchCount if editing
    if (state.editingZoneId !== null) {
      const zone = state.zones.find(z => z.id === state.editingZoneId);
      if (zone) {
        els.switchCountSelect.value = String(zone.switchCount || 1);
      }
    }
  }
}

function openSwitchInputModal(zoneName) {
  document.getElementById('switchInputMsg').textContent = `"${zoneName}" 공간의 스위치 구수를 입력해 주세요.`;
  els.switchCountSelect.value = "1";
  els.switchInputOverlay.style.display = 'flex';
  els.switchInputOverlay.classList.add('visible');
  
  setTimeout(() => {
    els.switchCountSelect.focus();
  }, 50);
}

function closeSwitchInputModal() {
  els.switchInputOverlay.style.display = 'none';
  els.switchInputOverlay.classList.remove('visible');
  state.pendingZoneData = null;
  state.tempZoneData = null;
  state.editingZoneId = null;
}

function finishZoneCreation(switchCount) {
  if (state.editingZoneId !== null) {
    const zone = state.zones.find(z => z.id === state.editingZoneId);
    if (zone && state.pendingZoneData) {
      zone.name = state.pendingZoneData.name;
      zone.switchCount = switchCount || 1;
      
      recalculateAllZones();
      updateStats();
      saveStateToHistory();
    }
    state.editingZoneId = null;
  } else if (state.pendingZoneData) {
    const { name, points, areaM2 } = state.pendingZoneData;
    state.zones.push({
      id: state.nextZoneId++,
      name: name,
      type: 'room',
      points: points,
      color: zoneColors[state.zones.length % zoneColors.length],
      areaM2: areaM2,
      averageLux: 0,
      visible: true,
      switchCount: switchCount || 1
    });
    
    recalculateAllZones();
    updateStats();
    saveStateToHistory();
  }
  
  closeSwitchInputModal();
  resetTools();
  renderAll();
}

function getTargetLumenPerPyung(zoneName) {
  const name = zoneName.trim();
  if (name.includes('주방') || name.includes('부엌')) return 1250;
  if (name.includes('메이크업룸')) return 1250;
  if (name.includes('거실')) return 1250;
  if (name.includes('화장실')) return 1250;
  if (name.includes('드레스룸')) return 600;
  if (name.includes('복도')) return 825;
  if (name.includes('침실')) return 825;
  if (name.includes('방')) return 1250;
  return 1250; // 기본값
}

function setupZoneSelectEvents() {
  // Option button click handler
  document.querySelectorAll('.zone-opt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.zone-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const type = btn.getAttribute('data-type');
      const autoName = generateNextZoneName(type);
      els.zoneNameInput.value = autoName;
    });
    
    // Double click applies the preset directly
    btn.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      const type = btn.getAttribute('data-type');
      const autoName = generateNextZoneName(type);
      els.zoneNameInput.value = autoName;
      confirmZoneSelection();
    });
  });

  // Cancel and Confirm button handlers
  els.btnCancelZoneSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    closeZoneSelectModal();
    resetTools();
    renderAll();
  });

  els.btnConfirmZoneSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    confirmZoneSelection();
  });

  // Enter key press in input
  els.zoneNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      confirmZoneSelection();
    }
  });
}

function recalculateAllZones() {
  state.zones.forEach(zone => {
    // Find all lights placed inside this zone
    const insideLights = state.lights.filter(l => isLightInPolygon(l, zone.points));
    
    // Sum total lumen & watt
    const totalLumen = insideLights.reduce((sum, l) => sum + l.lumen, 0);
    const totalWatt = insideLights.reduce((sum, l) => sum + l.watt, 0);
    
    zone.totalLumen = totalLumen;
    zone.totalWatt = totalWatt;
    
    // Calculate area
    zone.areaM2 = calculatePolygonArea(zone.points) / (state.pixelsPerMeter * state.pixelsPerMeter);
    
    // CU (utilization index) decreases with higher ceilings
    const heightFactor = Math.max(1.0 - (state.ceilingHeight - 2.4) * 0.15, 0.4);
    const cu = 0.65 * heightFactor;
    
    // Calculate Lux = (Total Lumen * CU) / Area
    if (zone.areaM2 > 0) {
      zone.averageLux = (totalLumen * cu) / zone.areaM2;
    } else {
      zone.averageLux = 0;
    }
    
    // Auto calculate SMPS & Controllers
    const effectiveWatt = totalWatt > 0 ? totalWatt : 1; // force at least 60W SMPS if totalWatt is 0
    zone.requiredSMPS = calculateRequiredSMPS(effectiveWatt);
    
    const uniqueCategories = [...new Set(insideLights.map(l => {
      const spec = fixtureDatabase.find(f => f.id === l.typeId);
      return spec ? spec.category : null;
    }).filter(Boolean))];
    
    let categoriesToDistribute = uniqueCategories;
    if (categoriesToDistribute.length === 0) {
      categoriesToDistribute = ['downlight']; // default to downlight if no lights are placed
    }
    
    const S = zone.switchCount || 1;
    const distributed = {};
    categoriesToDistribute.forEach(cat => { distributed[cat] = 0; });
    for (let i = 0; i < S; i++) {
      const cat = categoriesToDistribute[i % categoriesToDistribute.length];
      distributed[cat]++;
    }
    zone.requiredControllers = [];
    categoriesToDistribute.forEach(cat => {
      const qty = distributed[cat];
      if (qty > 0) {
        let name = '컨트롤러';
        if (name) {
          zone.requiredControllers.push({ name, qty });
        }
      }
    });
  });
  
  renderZonePanel();
  renderBOMTable();
}

function getLuxRating(lux) {
  if (lux < 150) return { label: '낮음', class: 'low' };
  if (lux < 300) return { label: '부족', class: 'adequate' };
  if (lux < 500) return { label: '적정', class: 'bright' };
  return { label: '밝음', class: 'bright' };
}

// ==================== STATISTICS & BOM GENERATION ====================
function updateStats() {
  // Area summation
  const totalArea = state.zones.reduce((sum, z) => sum + z.areaM2, 0);
  const totalPyung = totalArea * 0.3025;
  if (els.statArea) {
    els.statArea.innerHTML = totalArea > 0 
      ? `${totalArea.toFixed(1)}m² <span style="font-size:11px;color:var(--text-dim);">(${totalPyung.toFixed(1)}평)</span>`
      : '-';
  }
    
  // Lights count
  if (els.statCount) {
    els.statCount.textContent = state.lights.length;
  }
  
  // Power consumption (Watt)
  const totalWatt = state.lights.reduce((sum, l) => sum + l.watt, 0);
  if (els.statWatt) {
    els.statWatt.textContent = totalWatt + 'W';
  }
  
  let filteredLights = state.lights;
  if (state.bomFilterZoneId !== null) {
    const filterZone = state.zones.find(z => z.id === state.bomFilterZoneId);
    if (filterZone) {
      filteredLights = state.lights.filter(l => isLightInPolygon(l, filterZone.points));
    }
  }
  const filteredWatt = filteredLights.reduce((sum, l) => sum + l.watt, 0);
  els.bomSummaryText.textContent = `총 ${filteredLights.length}개 | ${filteredWatt}W`;
}

function renderZonePanel() {
  els.zoneList.innerHTML = '';
  if (state.zones.length === 0) {
    els.zoneList.innerHTML = '<div style="text-align:center; color:var(--text-dim); font-size:11px; padding:15px;">설정된 공간이 없습니다.</div>';
    return;
  }
  
  state.zones.forEach(zone => {
    if (zone.visible === undefined) zone.visible = true;
    if (zone.switchCount === undefined) zone.switchCount = 1;
    
    const pyeong = (zone.areaM2 || 0) * 0.3025;
    const lumenPerPyeong = pyeong > 0 ? (zone.totalLumen || 0) / pyeong : 0;
    
    const targetLumen = getTargetLumenPerPyung(zone.name);
    const maxLimit = Math.round(targetLumen * 1.2);
    
    let badgeText = '부족';
    let badgeClass = 'low';
    if (lumenPerPyeong >= maxLimit) {
      badgeText = '충분';
      badgeClass = 'bright';
    } else if (lumenPerPyeong >= targetLumen) {
      badgeText = '적당';
      badgeClass = 'adequate';
    }
    
    const percent = Math.min(100, Math.round((lumenPerPyeong / maxLimit) * 100));
    
    const eyeIcon = zone.visible
      ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
      : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;

    const item = document.createElement('div');
    item.className = 'zone-item';
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'stretch';
    item.style.gap = '8px';
    item.style.borderLeft = `4px solid ${zone.color}`;
    
    item.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div class="zone-item-left">
          <div>
            <div class="zone-name" style="display:flex; align-items:center; gap:6px;">
              <span>${zone.name}</span>
              <button class="zone-visible-toggleBtn" data-zone-id="${zone.id}" title="${zone.visible ? '숨기기' : '보이기'}" style="background:none; border:none; color:${zone.visible ? 'var(--accent)' : 'var(--text-dim)'}; cursor:pointer; display:inline-flex; align-items:center; padding: 2px;">
                ${eyeIcon}
              </button>
            </div>
            <div class="zone-meta">${zone.areaM2.toFixed(1)}m² (${pyeong.toFixed(1)}평)</div>
          </div>
        </div>
        
        <div style="text-align:right;">
          <div style="display:flex; align-items:center; justify-content:flex-end; gap:6px;">
            <div class="zone-lux-badge ${badgeClass}" style="display:inline-block;">${badgeText}</div>
            <div style="font-weight:700;">${(zone.totalLumen || 0).toLocaleString()} lm</div>
          </div>
          <div style="font-size:10px; color:var(--text-dim); margin-top:2px;">${lumenPerPyeong.toFixed(0)} / ${targetLumen} lm/평</div>
        </div>
      </div>
      
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 4px; font-size: 11px;">
        <div style="display: flex; align-items: center; gap: 4px; color: var(--text-dim);">
          <span>스위치:</span>
          <select class="zone-switch-select" style="width: 58px; height: 22px; padding: 0 4px; font-size: 11px; background-color: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 4px; color: var(--text);" data-zone-id="${zone.id}">
            <option value="1" ${zone.switchCount === 1 ? 'selected' : ''}>1구</option>
            <option value="2" ${zone.switchCount === 2 ? 'selected' : ''}>2구</option>
            <option value="3" ${zone.switchCount === 3 ? 'selected' : ''}>3구</option>
            <option value="4" ${zone.switchCount === 4 ? 'selected' : ''}>4구</option>
            <option value="5" ${zone.switchCount === 5 ? 'selected' : ''}>5구</option>
            <option value="6" ${zone.switchCount === 6 ? 'selected' : ''}>6구</option>
          </select>
        </div>
      </div>
    `;
    
    // Toggle visibility on eye icon click
    const toggleBtn = item.querySelector('.zone-visible-toggleBtn');
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      zone.visible = (zone.visible !== false) ? false : true;
      renderZonePanel();
      renderAll();
    });
    toggleBtn.addEventListener('dblclick', (e) => {
      e.stopPropagation();
    });

    const switchSelect = item.querySelector('.zone-switch-select');
    switchSelect.addEventListener('change', (e) => {
      e.stopPropagation();
      zone.switchCount = parseInt(e.target.value) || 1;
      recalculateAllZones();
      updateStats();
      renderAll();
    });

    // Add context menu or delete button on dblclick
    item.addEventListener('dblclick', () => {
      showConfirm("공간 삭제", `"${zone.name}" 공간 구획을 삭제하시겠습니까?`, () => {
        state.lights = state.lights.filter(l => !isLightInPolygon(l, zone.points));
        state.zones = state.zones.filter(z => z.id !== zone.id);
        recalculateAllZones();
        updateStats();
        renderAll();
      });
    });
    
    els.zoneList.appendChild(item);
  });
}

function renderBOMTable() {
  els.bomTableBody.innerHTML = '';
  
  // Validate bomFilterZoneId
  if (state.bomFilterZoneId !== null) {
    const zoneExists = state.zones.some(z => z.id === state.bomFilterZoneId);
    if (!zoneExists) {
      state.bomFilterZoneId = null;
    }
  }

  // Render BOM Filter Tags
  if (els.bomFilterTags) {
    els.bomFilterTags.innerHTML = '';
    
    // 1. "전체" tag
    const allTag = document.createElement('div');
    allTag.className = `bom-filter-tag${state.bomFilterZoneId === null ? ' active' : ''}`;
    allTag.textContent = '전체';
    allTag.addEventListener('click', () => {
      state.bomFilterZoneId = null;
      renderBOMTable();
      updateStats();
    });
    els.bomFilterTags.appendChild(allTag);
    
    // 2. Zone tags
    state.zones.forEach(zone => {
      const tag = document.createElement('div');
      tag.className = `bom-filter-tag${state.bomFilterZoneId === zone.id ? ' active' : ''}`;
      tag.textContent = zone.name;
      tag.addEventListener('click', () => {
        state.bomFilterZoneId = zone.id;
        renderBOMTable();
        updateStats();
      });
      els.bomFilterTags.appendChild(tag);
    });
  }
  
  // Filter lights by selected zone
  let filteredLights = state.lights;
  if (state.bomFilterZoneId !== null) {
    const filterZone = state.zones.find(z => z.id === state.bomFilterZoneId);
    if (filterZone) {
      filteredLights = state.lights.filter(l => isLightInPolygon(l, filterZone.points));
    }
  }

  // Group lights by typeId
  const groups = {};
  filteredLights.forEach(l => {
    if (!groups[l.typeId]) {
      const spec = fixtureDatabase.find(f => f.id === l.typeId);
      const isLine = spec && (spec.category === 'linebar' || spec.icon === 'line');
      const currentPrice = spec ? spec.price : (l.price || 0); // 항상 최신 가격테이블 기준
      groups[l.typeId] = {
        name: l.name,
        category: spec ? spec.category : '',
        watt: isLine ? 0 : l.watt,
        lumen: isLine ? 0 : l.lumen,
        price: currentPrice,
        qty: 0,
        isLinebar: isLine
      };
    }
    groups[l.typeId].qty++;
    if (groups[l.typeId].isLinebar) {
      groups[l.typeId].watt += l.watt;
      groups[l.typeId].lumen += l.lumen;
    }
  });
  
  // Filter zones for accessories display
  let filteredZones = state.zones;
  if (state.bomFilterZoneId !== null) {
    filteredZones = state.zones.filter(z => z.id === state.bomFilterZoneId);
  }
  
  const entries = Object.entries(groups);
  const hasLights = entries.length > 0;
  let hasAccessories = false;
  filteredZones.forEach(zone => {
    if ((zone.requiredSMPS && zone.requiredSMPS.length > 0) || (zone.requiredControllers && zone.requiredControllers.length > 0)) {
      hasAccessories = true;
    }
  });
  
  if (!hasLights && !hasAccessories) {
    els.bomTableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; color:var(--text-dim); padding:24px;">배치된 조명이 없습니다.</td>
      </tr>
    `;
    return;
  }
  
  let totalCost = 0;
  
  // 1. Render main lights
  entries.forEach(([typeId, g]) => {
    const cost = g.price * g.qty;
    totalCost += cost;
    
    function getFixtureTypeLabel(category) {
      if (category === 'downlight') return '매입 다운라이트';
      if (category === 'linebar') return '라인/마그네틱';
      if (category === 'multi') return '멀티매입등';
      if (category === 'smarthome') return '스마트홈 기기';
      if (category === 'etc') return '기타';
      return '조명';
    }
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${g.name}</strong></td>
      <td>${getFixtureTypeLabel(g.category)}</td>
      <td>${g.watt}W</td>
      <td>${g.lumen} lm</td>
      <td>${g.qty}개</td>
      <td><strong>₩${cost.toLocaleString()}</strong></td>
      <td>
        <button class="btn" style="height:28px; padding:0 8px; font-size:10px; background-color:var(--danger); border-color:var(--danger); color:#fff;" onclick="deleteBOMFixture('${typeId}')">삭제</button>
      </td>
    `;
    els.bomTableBody.appendChild(tr);
  });
  
  // 2. Render automatically calculated SMPS and Controllers per zone
  const getSMPSPrice = (cap) => {
    const c = parseInt(cap, 10);
    return c === 36 ? 24500 : (c === 60 ? 30100 : (c === 150 ? 44100 : 0));
  };

  filteredZones.forEach(zone => {
    // 2.1 SMPS
    if (zone.requiredSMPS && zone.requiredSMPS.length > 0) {
      const smpsCounts = {};
      zone.requiredSMPS.forEach(cap => {
        smpsCounts[cap] = (smpsCounts[cap] || 0) + 1;
      });
      
      Object.entries(smpsCounts).forEach(([cap, qty]) => {
        const smpsPrice = getSMPSPrice(cap);
        const smpsCost = smpsPrice * qty;
        totalCost += smpsCost;

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${zone.name} &gt; ${cap}W 안정기</strong></td>
          <td>안정기 (SMPS)</td>
          <td>${cap}W</td>
          <td>-</td>
          <td>${qty}개</td>
          <td><strong>₩${smpsCost.toLocaleString()}</strong></td>
          <td>
            <span style="font-size:11px;color:var(--text-dim);">자동 배정</span>
          </td>
        `;
        els.bomTableBody.appendChild(tr);
      });
    }
    
    // 2.2 Controllers
    if (zone.requiredControllers && zone.requiredControllers.length > 0) {
      zone.requiredControllers.forEach(ctrl => {
        const tr = document.createElement('tr');
        const name = typeof ctrl === 'string' ? ctrl : ctrl.name;
        const qty = typeof ctrl === 'string' ? 1 : ctrl.qty;
        const ctrlPrice = 35000;
        const ctrlCost = ctrlPrice * qty;
        totalCost += ctrlCost;
        
        tr.innerHTML = `
          <td><strong>${zone.name} &gt; ${name}</strong></td>
          <td>컨트롤러</td>
          <td>-</td>
          <td>-</td>
          <td>${qty}개</td>
          <td><strong>₩${ctrlCost.toLocaleString()}</strong></td>
          <td>
            <span style="font-size:11px;color:var(--text-dim);">자동 배정</span>
          </td>
        `;
        els.bomTableBody.appendChild(tr);
      });
    }
  });
  
  // 3. Render total cost row
  const totalTr = document.createElement('tr');
  totalTr.style.borderTop = '2px solid var(--border)';
  totalTr.innerHTML = `
    <td colspan="5" style="text-align:right; font-weight:700; font-size:13px;">총 예상 비용:</td>
    <td colspan="2" style="font-weight:800; font-size:14px; color:var(--accent);">₩${totalCost.toLocaleString()}</td>
  `;
  els.bomTableBody.appendChild(totalTr);
}

// Global scope helper for deleting lights of a certain type
window.deleteBOMFixture = function(typeId) {
  showConfirm("조명 삭제", "선택하신 모델의 모든 조명을 도면에서 삭제하시겠습니까?", () => {
    state.lights = state.lights.filter(l => l.typeId !== typeId);
    state.selectedLightIds = [];
    recalculateAllZones();
    updateStats();
    saveStateToHistory();
    renderAll();
  });
};

// ==================== CANVAS LAYERS RENDERING ====================
function getFixtureRenderSize(sizeMM) {
  // sizeMM = 실제 홀 직경(mm). pixelsPerMeter 기반으로 도면 비율에 맞게 렌더링
  if (state.pixelsPerMeter > 0 && sizeMM > 0) {
    const px = (sizeMM / 1000) * state.pixelsPerMeter;
    return Math.max(6, px); // 최소 크기를 6px로 낮추어 실제 축척에 맞춤
  }
  // 캘리브레이션 전 폴백: 이미지 대각선 기반
  if (!state.uploadedImage) return 15;
  const imgDiag = Math.sqrt(state.uploadedImage.width ** 2 + state.uploadedImage.height ** 2);
  return Math.max(12, imgDiag * 0.015);
}

function renderAll() {
  if (!state.uploadedImage) return;

  if (els.btnIllumToggle) {
    els.btnIllumToggle.classList.toggle('active', state.heatmapMode === 'zone');
  }

  renderFloorPlanLayer();
  renderHeatmapLayer();
  renderZoneLayer();
  renderGridLayer();
  renderLightsLayer();
  renderInteractionLayer();
}

function renderFloorPlanLayer() {
  const c = els.floorplanCanvas;
  const ctx = ctxs.floor;
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(state.uploadedImage, 0, 0);
}

// Draw zone illuminance overlays
function renderHeatmapLayer() {
  const c = els.lightOverlay;
  const ctx = ctxs.light;
  ctx.clearRect(0, 0, c.width, c.height);

  if (state.heatmapMode !== 'zone') return;

  ctx.save();
  state.zones.forEach(zone => {
    if (zone.visible === false) return;
    ctx.beginPath();
    ctx.moveTo(zone.points[0].x, zone.points[0].y);
    zone.points.slice(1).forEach(pt => ctx.lineTo(pt.x, pt.y));
    ctx.closePath();

    const zonePyeong = (zone.areaM2 || 0) * 0.3025;
    const zoneLumenPerPyeong = zonePyeong > 0 ? (zone.totalLumen || 0) / zonePyeong : 0;
    const zoneTarget = getTargetLumenPerPyung(zone.name);
    const zoneMax = Math.round(zoneTarget * 1.2);
    let fillColor = 'rgba(255, 59, 48, 0.15)'; // 부족 - red
    if (zoneLumenPerPyeong >= zoneMax) fillColor = 'rgba(52, 199, 89, 0.15)'; // 충분 - green
    else if (zoneLumenPerPyeong >= zoneTarget) fillColor = 'rgba(242, 162, 0, 0.15)'; // 적당 - yellow

    ctx.fillStyle = fillColor;
    ctx.fill();
  });
  ctx.restore();
}

function renderZoneLayer() {
  const c = els.zoneCanvas;
  const ctx = ctxs.zone;
  ctx.clearRect(0, 0, c.width, c.height);
  
  if (!state.showZones) return;

  ctx.save();
  state.zones.forEach(zone => {
    if (zone.visible === false) return;
    // Draw polygon borders
    ctx.beginPath();
    ctx.moveTo(zone.points[0].x, zone.points[0].y);
    zone.points.slice(1).forEach(pt => ctx.lineTo(pt.x, pt.y));
    ctx.closePath();
    const isSelected = state.selectedZoneId === zone.id;
    if (isSelected) {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 5;
      ctx.stroke();
      
      ctx.strokeStyle = zone.color;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    } else {
      ctx.strokeStyle = zone.color;
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
    // Hover: pill label ABOVE the zone (outside, above top edge)
    if (state.hoveredZoneId === zone.id) {
      const xs = zone.points.map(p => p.x);
      const ys = zone.points.map(p => p.y);
      const minX = Math.min(...xs), maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const cx = (minX + maxX) / 2;

      const pyeong = (zone.areaM2 || 0) * 0.3025;
      const label = `${zone.name}  ·  ${pyeong.toFixed(1)}평`;

      ctx.save();
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const textW = ctx.measureText(label).width;
      const padX = 10, padY = 5;
      const pillW = textW + padX * 2;
      const pillH = 22;
      const pillX = cx - pillW / 2;
      const pillY = minY - pillH - 6; // 6px gap above zone top edge
      const r = pillH / 2;

      // Pill background
      ctx.beginPath();
      ctx.moveTo(pillX + r, pillY);
      ctx.arcTo(pillX + pillW, pillY, pillX + pillW, pillY + pillH, r);
      ctx.arcTo(pillX + pillW, pillY + pillH, pillX, pillY + pillH, r);
      ctx.arcTo(pillX, pillY + pillH, pillX, pillY, r);
      ctx.arcTo(pillX, pillY, pillX + pillW, pillY, r);
      ctx.closePath();
      ctx.fillStyle = zone.color;
      ctx.globalAlpha = 0.92;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Label text
      ctx.fillStyle = '#fff';
      ctx.fillText(label, cx, pillY + pillH / 2);
      ctx.restore();
    }
  });
  ctx.restore();
}

function getPolygonCenter(pts) {
  let x = 0, y = 0;
  pts.forEach(p => { x += p.x; y += p.y; });
  return { x: x / pts.length, y: y / pts.length };
}

function renderGridLayer() {
  const c = els.gridCanvas;
  const ctx = ctxs.grid;
  ctx.clearRect(0, 0, c.width, c.height);

  // Dot grid — one dot per 50cm
  const spacing = state.pixelsPerMeter * 0.5;
  if (spacing < 4) return; // too dense at extreme zoom-out

  const dotR = 1.5;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';

  for (let x = 0; x <= c.width; x += spacing) {
    for (let y = 0; y <= c.height; y += spacing) {
      ctx.beginPath();
      ctx.arc(x, y, dotR, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function renderLightsLayer() {
  const c = els.lightOverlay;
  const ctx = ctxs.light;
  
  // Drawn alongside the lights layer
  ctx.save();
  
  // Dimensions
  if (state.showDimensions) {
    state.dimensions.forEach(dim => {
      const isSelected = state.selectedDimensionId === dim.id;
      if (isSelected) {
        ctx.strokeStyle = '#f2a200';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#f2a200';
      } else {
        ctx.strokeStyle = '#22cc22';
        ctx.lineWidth = 2;
        ctx.fillStyle = '#22cc22';
      }
      ctx.font = '11px sans-serif';
      
      // Draw line
      ctx.beginPath();
      ctx.moveTo(dim.start.x, dim.start.y);
      ctx.lineTo(dim.end.x, dim.end.y);
      ctx.stroke();
      
      // Draw ticks
      const angle = Math.atan2(dim.end.y - dim.start.y, dim.end.x - dim.start.x);
      drawTick(ctx, dim.start.x, dim.start.y, angle);
      drawTick(ctx, dim.end.x, dim.end.y, angle);
      
      // Draw text
      const mx = (dim.start.x + dim.end.x) / 2;
      const my = (dim.start.y + dim.end.y) / 2;
      ctx.textAlign = 'center';
      ctx.fillText(dim.label, mx, my - 6);
    });
  }

  // Placed downlights
  state.lights.forEach(l => {
    const isSelected = state.selectedLightIds.includes(l.id);
    
    if (l.x2 !== undefined && l.y2 !== undefined) {
      const spec = fixtureDatabase.find(f => f.id === l.typeId);
      if (spec && (spec.id.includes('gridslot') || spec.category === 'multi')) {
        // Draw gridslot as a rectangle
        const dx = l.x2 - l.x;
        const dy = l.y2 - l.y;
        const len = Math.sqrt(dx*dx + dy*dy);
        const wM = spec.widthMM ? (spec.widthMM / 1000) : 0.03;
        const wPx = wM * state.pixelsPerMeter;
        
        ctx.save();
        const angle = Math.atan2(dy, dx);
        
        // Draw selection glow
        if (isSelected) {
          ctx.save();
          ctx.translate(l.x, l.y);
          ctx.rotate(angle);
          ctx.fillStyle = 'rgba(242, 162, 0, 0.3)';
          ctx.fillRect(-6, -wPx/2 - 6, len + 12, wPx + 12);
          ctx.restore();
        }
        
        // Draw outer border (white)
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(angle);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 6;
        
        // Fill white rectangle
        ctx.fillRect(0, -wPx/2, len, wPx);
        ctx.shadowBlur = 0; // reset shadow
        
        // Stroke border
        ctx.strokeStyle = l.color;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(0, -wPx/2, len, wPx);
        
        // Fill inner colored rectangle/core representing heads
        const heads = spec.heads || 6;
        const headSize = wPx * 0.7;
        ctx.fillStyle = l.color;
        for (let i = 0; i < heads; i++) {
          const hx = (len / heads) * (i + 0.5);
          ctx.beginPath();
          ctx.arc(hx, 0, headSize / 2, 0, 2 * Math.PI);
          ctx.fill();
        }
        
        ctx.restore();
      } else {
        // 1. Draw selection outer glow for line bar
        if (isSelected) {
          ctx.beginPath();
          ctx.moveTo(l.x, l.y);
          ctx.lineTo(l.x2, l.y2);
          ctx.strokeStyle = 'rgba(242, 162, 0, 0.3)';
          ctx.lineWidth = 14;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
        
        // 2. Draw line bar (outer white border)
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x2, l.y2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 6;
        ctx.stroke();
        
        // 3. Draw inner colored core
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x2, l.y2);
        ctx.strokeStyle = l.color;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 0; // reset shadow
        ctx.stroke();
      }
    } else {
      // Draw selection outer glow
      const rs = getFixtureRenderSize(l.size);
      if (isSelected) {
        ctx.beginPath();
        ctx.arc(l.x, l.y, rs + 6, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(242, 162, 0, 0.3)';
        ctx.fill();
      }

      // Outer white rim
      ctx.beginPath();
      ctx.arc(l.x, l.y, rs / 2, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 6;
      ctx.fill();

      // Colored inner core
      ctx.beginPath();
      ctx.arc(l.x, l.y, rs / 2.5, 0, 2 * Math.PI);
      ctx.fillStyle = l.color;
      ctx.shadowBlur = 0;
      ctx.fill();
    }
  });
  ctx.restore();
}

function drawTick(ctx, x, y, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, -6);
  ctx.lineTo(0, 6);
  ctx.stroke();
  ctx.restore();
}

function renderInteractionLayer() {
  const c = els.interactionLayer;
  const ctx = ctxs.interaction;
  ctx.clearRect(0, 0, c.width, c.height);
  
  ctx.save();
  
  // 1. Ghost placement pointer
  if (state.activeTool === 'place' && state.isDrawingLinebar && state.linebarStart && state.linebarEnd) {
    ctx.globalAlpha = 0.8;
    const spec = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
    
    if (spec && (spec.id.includes('gridslot') || spec.category === 'multi')) {
      const dx = state.linebarEnd.x - state.linebarStart.x;
      const dy = state.linebarEnd.y - state.linebarStart.y;
      const len = Math.sqrt(dx*dx + dy*dy);
      const wM = spec.widthMM ? (spec.widthMM / 1000) : 0.03;
      const wPx = wM * state.pixelsPerMeter;
      const isHorizontal = Math.abs(dx) >= Math.abs(dy);
      const angle = Math.atan2(dy, dx);

      // H/V 가이드 라인 (십자선)
      ctx.save();
      ctx.setLineDash([6, 5]);
      ctx.lineWidth = 1;
      const sx = state.linebarStart.x, sy = state.linebarStart.y;
      // 수평 가이드
      ctx.strokeStyle = isHorizontal ? 'rgba(0,212,255,0.9)' : 'rgba(255,255,255,0.25)';
      ctx.beginPath(); ctx.moveTo(0, sy); ctx.lineTo(c.width, sy); ctx.stroke();
      // 수직 가이드
      ctx.strokeStyle = !isHorizontal ? 'rgba(0,212,255,0.9)' : 'rgba(255,255,255,0.25)';
      ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, c.height); ctx.stroke();
      ctx.setLineDash([]);
      // 앵커 점
      ctx.beginPath(); ctx.arc(sx, sy, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff'; ctx.fill();
      ctx.restore();

      // 방향 레이블
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = '#00d4ff';
      ctx.textAlign = 'left';
      ctx.fillText(isHorizontal ? '→ 수평' : '↓ 수직', sx + 8, sy - 8);
      ctx.restore();

      // 직사각형 프리뷰
      ctx.save();
      ctx.globalAlpha = 0.7;
      ctx.translate(state.linebarStart.x, state.linebarStart.y);
      ctx.rotate(angle);

      ctx.fillStyle = spec.color;
      ctx.fillRect(0, -wPx/2, len, wPx);

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(0, -wPx/2, len, wPx);

      const heads = spec.heads || 6;
      const headSize = wPx * 0.7;
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < heads; i++) {
        const hx = (len / heads) * (i + 0.5);
        ctx.beginPath();
        ctx.arc(hx, 0, headSize / 2, 0, 2 * Math.PI);
        ctx.fill();
      }
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = 1;
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      const midX = (state.linebarStart.x + state.linebarEnd.x) / 2;
      const midY = (state.linebarStart.y + state.linebarEnd.y) / 2;
      ctx.fillText(`${spec.lengthMM}×${spec.widthMM}mm`, midX, midY - 12);
      ctx.restore();
    } else {
      ctx.beginPath();
      ctx.moveTo(state.linebarStart.x, state.linebarStart.y);
      ctx.lineTo(state.linebarEnd.x, state.linebarEnd.y);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(state.linebarStart.x, state.linebarStart.y);
      ctx.lineTo(state.linebarEnd.x, state.linebarEnd.y);
      ctx.strokeStyle = spec ? spec.color : '#22cc22';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      // Draw start-point indicator dot
      ctx.beginPath();
      ctx.arc(state.linebarStart.x, state.linebarStart.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      
      // Draw real-time length label (in meters)
      const dxL = state.linebarEnd.x - state.linebarStart.x;
      const dyL = state.linebarEnd.y - state.linebarStart.y;
      const lenPx = Math.sqrt(dxL*dxL + dyL*dyL);
      const lenM = lenPx / state.pixelsPerMeter;
      const maxLenM = spec && spec.length ? spec.length / 1000 : null;
      const midX = (state.linebarStart.x + state.linebarEnd.x) / 2;
      const midY = (state.linebarStart.y + state.linebarEnd.y) / 2;
      ctx.globalAlpha = 1;
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = maxLenM && lenM >= maxLenM * 0.99 ? '#ff3b30' : '#ffffff';
      ctx.fillText(`${lenM.toFixed(2)}m${maxLenM ? ` / max ${maxLenM}m` : ''}`, midX, midY - 10);
    }
  } else if (state.activeTool === 'place' && state.ghostCursor && state.selectedFixtureId) {
    const spec = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
    if (spec) {
      if (spec.id.includes('gridslot') || spec.category === 'multi') {
        const lenM = (spec.lengthMM || 120) / 1000;
        const lenPx = lenM * state.pixelsPerMeter;
        const wM = spec.widthMM ? (spec.widthMM / 1000) : 0.03;
        const wPx = wM * state.pixelsPerMeter;
        
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.translate(state.ghostCursor.x, state.ghostCursor.y);
        ctx.fillStyle = spec.color;
        ctx.fillRect(-lenPx / 2, -wPx / 2, lenPx, wPx);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(-lenPx / 2, -wPx / 2, lenPx, wPx);
        ctx.restore();
      } else if (spec.category !== 'linebar' && spec.icon !== 'line') {
        // Draw snap guide lines
        if (state.snapGuides && state.snapGuides.length > 0) {
          ctx.save();
          ctx.setLineDash([8, 5]);
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = 0.75;
          const W = c.width;
          const H = c.height;
          for (const g of state.snapGuides) {
            if (g.type === 'v') {
              ctx.strokeStyle = '#00d4ff';
              ctx.beginPath();
              ctx.moveTo(g.x, 0);
              ctx.lineTo(g.x, H);
              ctx.stroke();
            } else if (g.type === 'h') {
              ctx.strokeStyle = '#00d4ff';
              ctx.beginPath();
              ctx.moveTo(0, g.y);
              ctx.lineTo(W, g.y);
              ctx.stroke();
            } else if (g.type === 'spacing') {
              ctx.strokeStyle = '#ffcc00';
              const len = Math.sqrt(g.spX * g.spX + g.spY * g.spY);
              if (len > 0) {
                const ux = g.spX / len, uy = g.spY / len;
                const ext = Math.max(W, H);
                ctx.beginPath();
                ctx.moveTo(g.x - ux * ext, g.y - uy * ext);
                ctx.lineTo(g.x + ux * ext, g.y + uy * ext);
                ctx.stroke();
              }
            }
          }
          ctx.restore();
        }

        // Draw ghost cursor dot
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(state.ghostCursor.x, state.ghostCursor.y, getFixtureRenderSize(spec.size) / 2, 0, 2 * Math.PI);
        ctx.fillStyle = spec.color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  }
  
  // 2. Zone drawing polyline
  if ((state.activeTool === 'draw-zone' || state.activeTool === 'draw-zone-polygon') && state.isDrawingZone && state.zonePolygonPoints.length > 0) {
    ctx.strokeStyle = '#f2a200';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(242, 162, 0, 0.1)';
    
    ctx.beginPath();
    ctx.moveTo(state.zonePolygonPoints[0].x, state.zonePolygonPoints[0].y);
    state.zonePolygonPoints.slice(1).forEach(pt => ctx.lineTo(pt.x, pt.y));
    
    if (state.zoneDrawMouse) {
      ctx.lineTo(state.zoneDrawMouse.x, state.zoneDrawMouse.y);
    }
    ctx.stroke();
    
    // Draw little points
    ctx.fillStyle = '#f2a200';
    state.zonePolygonPoints.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Realtime area display for polygon drawing
    if (state.zonePolygonPoints.length >= 2 && state.zoneDrawMouse) {
      const tempPts = [...state.zonePolygonPoints, state.zoneDrawMouse];
      const areaM2 = calculatePolygonArea(tempPts) / (state.pixelsPerMeter * state.pixelsPerMeter);
      const areaPyeong = areaM2 * 0.3025;
      
      ctx.fillStyle = '#f2a200';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(` ${areaM2.toFixed(1)}㎡ (${areaPyeong.toFixed(1)}평)`, state.zoneDrawMouse.x + 10, state.zoneDrawMouse.y + 4);
    }
  }

  // 2b. Zone drawing rectangle preview
  if (state.activeTool === 'draw-zone-rect' && state.isDrawingZoneRect && state.zoneRectStart && state.zoneRectEnd) {
    ctx.strokeStyle = '#f2a200';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(242, 162, 0, 0.15)';
    
    const x = Math.min(state.zoneRectStart.x, state.zoneRectEnd.x);
    const y = Math.min(state.zoneRectStart.y, state.zoneRectEnd.y);
    const w = Math.abs(state.zoneRectStart.x - state.zoneRectEnd.x);
    const h = Math.abs(state.zoneRectStart.y - state.zoneRectEnd.y);
    
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fill();
    ctx.stroke();
    
    // Draw start and end points
    ctx.fillStyle = '#f2a200';
    ctx.beginPath();
    ctx.arc(state.zoneRectStart.x, state.zoneRectStart.y, 4, 0, 2 * Math.PI);
    ctx.arc(state.zoneRectEnd.x, state.zoneRectEnd.y, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // Realtime area display
    const areaM2 = (w * h) / (state.pixelsPerMeter * state.pixelsPerMeter);
    const areaPyeong = areaM2 * 0.3025;
    ctx.fillStyle = '#f2a200';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${areaM2.toFixed(1)}㎡ (${areaPyeong.toFixed(1)}평)`, x + w / 2, y + h / 2 + 4);
  }

  // 3. Measure drawing temp lines
  if (state.activeTool === 'measure' && state.measurePhase === 1 && state.measureStart && state.measureEnd) {
    ctx.strokeStyle = '#22cc22';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(state.measureStart.x, state.measureStart.y);
    ctx.lineTo(state.measureEnd.x, state.measureEnd.y);
    ctx.stroke();
    
    // Temporary measurement text
    const dx = state.measureEnd.x - state.measureStart.x;
    const dy = state.measureEnd.y - state.measureStart.y;
    const lengthM = Math.sqrt(dx * dx + dy * dy) / state.pixelsPerMeter;
    
    ctx.fillStyle = '#22cc22';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(lengthM.toFixed(2) + 'm', (state.measureStart.x + state.measureEnd.x) / 2, (state.measureStart.y + state.measureEnd.y) / 2 - 6);
  }
  
  ctx.restore();
}

// ==================== FILE SAVE & LOAD LOGIC (JSON FORMAT) ====================
function saveProjectFile() {
  if (!state.uploadedImage) return;

  // Convert uploaded image to base64 so it can be saved in JSON
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = state.uploadedImage.width;
  tempCanvas.height = state.uploadedImage.height;
  tempCanvas.getContext('2d').drawImage(state.uploadedImage, 0, 0);
  const base64Image = tempCanvas.toDataURL('image/jpeg', 0.85);

  const projectData = {
    version: '1.0',
    pixelsPerMeter: state.pixelsPerMeter,
    ceilingHeight: state.ceilingHeight,
    imageBase64: base64Image,
    lights: state.lights,
    zones: state.zones,
    dimensions: state.dimensions,
    nextLightId: state.nextLightId,
    nextZoneId: state.nextZoneId,
    nextDimId: state.nextDimId
  };

  const jsonStr = JSON.stringify(projectData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `zibis_조명배치_${Date.now()}.zbs`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function loadProjectFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      // Clear previous project state before loading project data
      clearProjectState();
      loadProjectData(data);
    } catch (err) {
      alert("프로젝트 파일을 읽어오는 데 실패했습니다.");
    }
  };
  reader.readAsText(file);
}

function loadTemplateProject(url) {
  const container = document.querySelector('.template-box');
  if (container) {
    container.style.opacity = '0.5';
    container.style.pointerEvents = 'none';
  }

  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('네트워크 응답 오류');
      }
      return res.json();
    })
    .then(data => {
      clearProjectState();
      loadProjectData(data);
    })
    .catch(err => {
      alert("템플릿 프로젝트를 불러오는 데 실패했습니다: " + err.message);
    })
    .finally(() => {
      if (container) {
        container.style.opacity = '1';
        container.style.pointerEvents = 'auto';
      }
    });
}

function loadProjectData(data) {
  const img = new Image();
  img.onload = function() {
    state.uploadedImage = img;
    state.pixelsPerMeter = data.pixelsPerMeter || 50;
    state.ceilingHeight = data.ceilingHeight || 2.4;
    // 불러온 조명의 price를 fixtureDatabase 최신 단가로 갱신
    state.lights = (data.lights || []).map(l => {
      const spec = fixtureDatabase.find(f => f.id === l.typeId);
      return spec ? { ...l, price: spec.price } : l;
    });
    state.zones = data.zones || [];
    state.bomFilterZoneId = null;
    
    // Add default switch count if not present
    state.zones.forEach(z => {
      if (z.switchCount === undefined) z.switchCount = 1;
    });

    state.dimensions = data.dimensions || [];
    state.nextLightId = data.nextLightId || 1;
    state.nextZoneId = data.nextZoneId || 1;
    state.nextDimId = data.nextDimId || 1;

    if (els.ceilingHeightInput) els.ceilingHeightInput.value = state.ceilingHeight;
    if (els.lblCeilingHeight) els.lblCeilingHeight.textContent = state.ceilingHeight.toFixed(1);

    els.uploadOverlay.style.display = 'none';
    initCanvasDimensions(img.width, img.height);
    recalculateAllZones();
    updateStats();
    resetHistory({
      lights: JSON.parse(JSON.stringify(state.lights)),
      zones: JSON.parse(JSON.stringify(state.zones)),
      dimensions: JSON.parse(JSON.stringify(state.dimensions))
    });
    renderAll();
  };
  img.src = data.imageBase64;
}

// ==================== IMAGE EXPORT (PNG COMBINED RENDERING) ====================
// ==================== EXCEL REPORT EXPORT (COMBINED EXCELJS) ====================
async function exportToExcel() {
  if (!state.uploadedImage) return;

  // 1. Render everything onto a temporary output canvas at 100% scale
  const w = state.uploadedImage.width;
  const h = state.uploadedImage.height;
  
  const exportCanvas = document.createElement('canvas');
  exportCanvas.width = w;
  exportCanvas.height = h;
  const ctx = exportCanvas.getContext('2d');

  // Draw floor plan
  ctx.drawImage(state.uploadedImage, 0, 0);

  // Draw zones (without drop shadow, showing lumens & satisfaction status)
  if (state.showZones) {
    state.zones.forEach(zone => {
      if (zone.visible === false) return;
      ctx.beginPath();
      ctx.moveTo(zone.points[0].x, zone.points[0].y);
      zone.points.slice(1).forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.closePath();
      
      const pyeong = (zone.areaM2 || 0) * 0.3025;
      const lumenPerPyeong = pyeong > 0 ? (zone.totalLumen || 0) / pyeong : 0;
      const targetLumen = getTargetLumenPerPyung(zone.name);
      const maxLimit = Math.round(targetLumen * 1.2);
      
      let statusText = '부족';
      let fillColor = 'rgba(255, 59, 48, 0.15)'; // Red for low/부족
      if (lumenPerPyeong >= maxLimit) {
        statusText = '충분';
        fillColor = 'rgba(52, 199, 89, 0.15)'; // Green for 충분
      } else if (lumenPerPyeong >= targetLumen) {
        statusText = '적당';
        fillColor = 'rgba(242, 162, 0, 0.15)'; // Yellow for 적당
      }
      
      ctx.fillStyle = fillColor;
      ctx.fill();

      // Border
      ctx.strokeStyle = zone.color;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Labels
      const center = getPolygonCenter(zone.points);
      ctx.fillStyle = zone.color;
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      
      // Draw text without drop shadow
      ctx.fillText(zone.name, center.x, center.y - 4);
      ctx.fillText(`${(zone.totalLumen || 0).toLocaleString()} lm (${statusText})`, center.x, center.y + 12);
    });
  }

  // Draw grid (if selected)
  if (state.showGrid) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    const step = state.pixelsPerMeter;
    for (let x = 0; x < w; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }

  // Draw Dimensions
  if (state.showDimensions) {
    state.dimensions.forEach(dim => {
      ctx.strokeStyle = '#22cc22';
      ctx.lineWidth = 2;
      ctx.fillStyle = '#22cc22';
      ctx.font = '11px sans-serif';
      
      ctx.beginPath();
      ctx.moveTo(dim.start.x, dim.start.y);
      ctx.lineTo(dim.end.x, dim.end.y);
      ctx.stroke();
      
      const angle = Math.atan2(dim.end.y - dim.start.y, dim.end.x - dim.start.x);
      drawTick(ctx, dim.start.x, dim.start.y, angle);
      drawTick(ctx, dim.end.x, dim.end.y, angle);
      
      const mx = (dim.start.x + dim.end.x) / 2;
      const my = (dim.start.y + dim.end.y) / 2;
      ctx.textAlign = 'center';
      ctx.fillText(dim.label, mx, my - 6);
    });
  }

  // Draw Light dots
  state.lights.forEach(l => {
    if (l.x2 !== undefined && l.y2 !== undefined) {
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x2, l.y2);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x2, l.y2);
      ctx.strokeStyle = l.color;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();
    } else {
      const rs = getFixtureRenderSize(l.size);
      ctx.beginPath();
      ctx.arc(l.x, l.y, rs / 2, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(l.x, l.y, rs / 2.5, 0, 2 * Math.PI);
      ctx.fillStyle = l.color;
      ctx.fill();
    }
  });

  const base64Image = exportCanvas.toDataURL('image/png');

  // 2. Initialize ExcelJS Workbook
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('지비스 조명 설계 보고서');
  
  // Set sheet gridlines visible
  worksheet.views = [{ showGridLines: true }];
  
  // Set column widths
  worksheet.columns = [
    { key: 'A', width: 4 },
    { key: 'B', width: 16 }, // 공간 분류
    { key: 'C', width: 35 }, // 조명 모델 / 자재명
    { key: 'D', width: 18 }, // 구분 (타입)
    { key: 'E', width: 14 }, // 소비전력 (W)
    { key: 'F', width: 14 }, // 광량 (lm)
    { key: 'G', width: 12 }, // 배치 수량
    { key: 'H', width: 16 }  // 예상 금액
  ];
  
  // 3. Title Style & Merges
  worksheet.mergeCells('B2:H2');
  const titleCell = worksheet.getCell('B2');
  titleCell.value = 'ZIBIS 조명 설계 및 가견적서';
  titleCell.font = { name: 'Malgun Gothic', size: 16, bold: true, color: { argb: 'FF2D6ABF' } };
  titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
  worksheet.getRow(2).height = 40;
  
  const targetWidth = 640;
  const imageAspectRatio = w / h;
  const targetHeight = targetWidth / imageAspectRatio;

  // 4. Insert Image
  const imgId = workbook.addImage({
    base64: base64Image,
    extension: 'png'
  });
  worksheet.addImage(imgId, {
    tl: { col: 1, row: 3 },
    ext: { width: targetWidth, height: targetHeight }
  });
  
  const rowsNeeded = Math.ceil(targetHeight / 20);
  const tableStartRow = 3 + rowsNeeded + 2; // leave 2 blank rows
  
  // Set empty rows covering the image to reserve space
  for (let r = 3; r < tableStartRow - 1; r++) {
    worksheet.getRow(r).height = 20;
  }
  
  // 5. Gather All Products & Outside Lights data first
  const outsideLights = state.lights.filter(l => !state.zones.some(zone => isLightInPolygon(l, zone.points)));
  const allProducts = {};
  
  // 5.1 Accumulate lights
  state.lights.forEach(l => {
    if (!allProducts[l.typeId]) {
      const spec = fixtureDatabase.find(f => f.id === l.typeId);
      const catLabel = !spec ? '조명'
        : spec.category === 'downlight' ? '매입 다운라이트'
        : spec.category === 'linebar'   ? '라인/마그네틱'
        : spec.category === 'multi'     ? '멀티매입등'
        : spec.category === 'smarthome' ? '스마트홈 기기'
        : spec.category === 'etc'       ? '기타'
        : '조명';
      const currentPrice = spec ? spec.price : (l.price || 0); // 최신 가격테이블 기준
      allProducts[l.typeId] = {
        name: l.name,
        type: catLabel,
        color: spec ? spec.color : null,
        price: currentPrice,
        qty: 0,
        isLine: spec && (spec.category === 'linebar' || spec.icon === 'line'),
        totalWatt: 0,
        totalLumen: 0
      };
    }
    allProducts[l.typeId].qty++;
    if (allProducts[l.typeId].isLine) {
      allProducts[l.typeId].totalWatt += l.watt;
      allProducts[l.typeId].totalLumen += l.lumen;
    }
  });
  
  // 5.2 Accumulate SMPS & Controllers
  state.zones.forEach(zone => {
    const insideLights = state.lights.filter(l => isLightInPolygon(l, zone.points));
    if (insideLights.length === 0 && (!zone.requiredSMPS || zone.requiredSMPS.length === 0) && (!zone.requiredControllers || zone.requiredControllers.length === 0)) return;
    
    if (zone.requiredSMPS && zone.requiredSMPS.length > 0) {
      const smpsCounts = {};
      zone.requiredSMPS.forEach(cap => {
        smpsCounts[cap] = (smpsCounts[cap] || 0) + 1;
      });
      
      Object.entries(smpsCounts).forEach(([cap, qty]) => {
        const capNum = parseInt(cap, 10);
        const smpsId = `smps-${capNum}`;
        const smpsPrice = capNum === 36 ? 24500 : (capNum === 60 ? 30100 : (capNum === 150 ? 44100 : 0));
        if (!allProducts[smpsId]) {
          allProducts[smpsId] = {
            name: `컨버터 ${capNum}W IoT`,
            type: '안정기 (SMPS)',
            color: null,
            price: smpsPrice,
            qty: 0,
            isLine: false
          };
        }
        allProducts[smpsId].qty += qty;
      });
    }
    
    if (zone.requiredControllers && zone.requiredControllers.length > 0) {
      zone.requiredControllers.forEach(ctrl => {
        const ctrlName = typeof ctrl === 'string' ? ctrl : ctrl.name;
        const qty = typeof ctrl === 'string' ? 1 : ctrl.qty;
        const ctrlId = `controller-${ctrlName}`;
        if (!allProducts[ctrlId]) {
          allProducts[ctrlId] = {
            name: ctrlName,
            type: '컨트롤러',
            color: null,
            price: 35000,
            qty: 0,
            isLine: false
          };
        }
        allProducts[ctrlId].qty += qty;
      });
    }
  });

  // Helper to format cells
  function applyRowStyles(row, isItalic) {
    for (let c = 2; c <= 8; c++) {
      const cell = row.getCell(c);
      cell.font = { name: 'Malgun Gothic', size: 10, italic: isItalic };
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        left: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        right: { style: 'thin', color: { argb: 'FFE0E0E0' } }
      };
      if (c === 2 || c === 3) {
        cell.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
      } else if (c === 8) {
        cell.alignment = { vertical: 'middle', horizontal: 'right' };
        if (!isItalic) {
          cell.font = { name: 'Malgun Gothic', size: 10, bold: true };
        } else {
          cell.value = '포함';
          cell.font = { name: 'Malgun Gothic', size: 10, color: { argb: 'FF888888' } };
        }
      } else {
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      }
    }
  }

  // 6. Section 1: Product Summary Table (주문서용 - 제품별 총 주문 수량 합계)
  worksheet.mergeCells(`B${tableStartRow}:H${tableStartRow}`);
  const summaryTitle = worksheet.getCell(`B${tableStartRow}`);
  summaryTitle.value = '제품별 총 주문 수량 합계 (주문서용)';
  summaryTitle.font = { name: 'Malgun Gothic', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
  summaryTitle.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF2D6ABF' } // ZIBIS blue
  };
  summaryTitle.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
  worksheet.getRow(tableStartRow).height = 28;
  
  const summaryHeaders = ['제품 컬러', '제품명 / 자재명', '구분 (타입)', '단가 (원)', '총 주문 수량', '비고', '총 합계 금액'];
  const summaryHeaderRow = worksheet.getRow(tableStartRow + 1);
  summaryHeaderRow.height = 25;
  
  summaryHeaders.forEach((h, idx) => {
    const cell = summaryHeaderRow.getCell(idx + 2);
    cell.value = h;
    cell.font = { name: 'Malgun Gothic', size: 10, bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF2A2D3D' }
    };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.border = {
      top: { style: 'thin', color: { argb: 'FF44475A' } },
      left: { style: 'thin', color: { argb: 'FF44475A' } },
      bottom: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      right: { style: 'thin', color: { argb: 'FF44475A' } }
    };
  });
  
  let currentRowNum = tableStartRow + 2;
  let grandTotalCost = 0;
  
  Object.values(allProducts).forEach(p => {
    const rowCost = p.price * p.qty;
    grandTotalCost += rowCost;
    
    const row = worksheet.getRow(currentRowNum);
    row.height = 22;
    
    // Column B: Draw Color Swatch as a Dot
    const cellB = row.getCell(2);
    if (p.color) {
      cellB.value = '●';
    } else {
      cellB.value = '-';
    }
    
    row.getCell(3).value = p.name;
    row.getCell(4).value = p.type;
    row.getCell(5).value = p.price;
    row.getCell(5).numFmt = '#,##0';
    row.getCell(6).value = p.qty + '개';
    
    // Remarks
    let remarkVal = '-';
    if (p.isLine) {
      remarkVal = `총 ${(p.totalWatt / 10).toFixed(1)}m (${p.totalWatt}W, ${p.totalLumen} lm)`;
    } else if (p.price === 0) {
      remarkVal = '포함 자재';
    }
    row.getCell(7).value = remarkVal;
    
    row.getCell(8).value = rowCost;
    row.getCell(8).numFmt = '#,##0';
    
    for (let c = 2; c <= 8; c++) {
      const cell = row.getCell(c);
      if (c === 2 && p.color) {
        const cleanColor = p.color.replace('#', '');
        cell.font = { name: 'Malgun Gothic', size: 14, color: { argb: 'FF' + cleanColor } };
      } else if (c === 8) {
        cell.font = { name: 'Malgun Gothic', size: 10, bold: true };
      } else {
        cell.font = { name: 'Malgun Gothic', size: 10 };
      }
      
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        left: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        right: { style: 'thin', color: { argb: 'FFE0E0E0' } }
      };
      if (c === 3) {
        cell.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
      } else if (c === 8) {
        cell.alignment = { vertical: 'middle', horizontal: 'right' };
      } else {
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      }
    }
    currentRowNum++;
  });
  
  // Aggregate summary row for consolidated order
  const aggTotalRow = worksheet.getRow(currentRowNum);
  aggTotalRow.height = 30;
  worksheet.mergeCells(`B${currentRowNum}:G${currentRowNum}`);
  
  const aggLabelCell = aggTotalRow.getCell(2);
  aggLabelCell.value = '제품 주문 총 예상 합계:';
  aggLabelCell.font = { name: 'Malgun Gothic', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
  aggLabelCell.alignment = { vertical: 'middle', horizontal: 'right' };
  aggLabelCell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F2233' }
  };
  
  for (let col = 2; col <= 7; col++) {
    aggTotalRow.getCell(col).border = {
      top: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      bottom: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      left: col === 2 ? { style: 'thin', color: { argb: 'FF44475A' } } : undefined,
      right: col === 7 ? { style: 'thin', color: { argb: 'FF44475A' } } : undefined
    };
  }
  
  const aggValueCell = aggTotalRow.getCell(8);
  aggValueCell.value = grandTotalCost;
  aggValueCell.numFmt = '#,##0';
  aggValueCell.font = { name: 'Malgun Gothic', size: 12, bold: true, color: { argb: 'FF2D6ABF' } };
  aggValueCell.alignment = { vertical: 'middle', horizontal: 'right' };
  aggValueCell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F2233' }
  };
  aggValueCell.border = {
    top: { style: 'medium', color: { argb: 'FF2D6ABF' } },
    bottom: { style: 'medium', color: { argb: 'FF2D6ABF' } },
    right: { style: 'thin', color: { argb: 'FF44475A' } }
  };

  // 7. Section 2: Space BOM Table (선택된 조명 및 자동 산출 자재 목록)
  currentRowNum += 3; // Leave 2 blank rows
  
  worksheet.mergeCells(`B${currentRowNum}:H${currentRowNum}`);
  const bomTitle = worksheet.getCell(`B${currentRowNum}`);
  bomTitle.value = '선택된 조명 및 자동 산출 자재 목록 (BOM)';
  bomTitle.font = { name: 'Malgun Gothic', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
  bomTitle.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F2233' }
  };
  bomTitle.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
  worksheet.getRow(currentRowNum).height = 28;
  currentRowNum++;
  
  const bomHeaders = ['공간 분류', '조명 모델 / 자재명', '구분 (타입)', '소비전력 (W)', '광량 (lm)', '배치 수량', '예상 금액'];
  const bomHeaderRow = worksheet.getRow(currentRowNum);
  bomHeaderRow.height = 25;
  
  bomHeaders.forEach((h, idx) => {
    const cell = bomHeaderRow.getCell(idx + 2);
    cell.value = h;
    cell.font = { name: 'Malgun Gothic', size: 10, bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF2A2D3D' }
    };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.border = {
      top: { style: 'thin', color: { argb: 'FF44475A' } },
      left: { style: 'thin', color: { argb: 'FF44475A' } },
      bottom: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      right: { style: 'thin', color: { argb: 'FF44475A' } }
    };
  });
  currentRowNum++;
  
  let totalCost = 0;
  
  // Process lights & accessories space by space
  state.zones.forEach(zone => {
    const insideLights = state.lights.filter(l => isLightInPolygon(l, zone.points));
    if (insideLights.length === 0 && (!zone.requiredSMPS || zone.requiredSMPS.length === 0) && (!zone.requiredControllers || zone.requiredControllers.length === 0)) return;
    
    const startRow = currentRowNum;
    const groups = {};
    insideLights.forEach(l => {
      if (!groups[l.typeId]) {
        const spec = fixtureDatabase.find(f => f.id === l.typeId);
        const catLabel = !spec ? '조명'
          : spec.category === 'downlight' ? '매입 다운라이트'
          : spec.category === 'linebar'   ? '라인/마그네틱'
          : spec.category === 'multi'     ? '멀티매입등'
          : spec.category === 'smarthome' ? '스마트홈 기기'
          : spec.category === 'etc'       ? '기타'
          : '조명';
        const isLine = spec && (spec.category === 'linebar' || spec.icon === 'line');
        const specCurrent = fixtureDatabase.find(f => f.id === l.typeId);
        const currentPrice = specCurrent ? specCurrent.price : (l.price || 0); // 최신 가격테이블 기준
        groups[l.typeId] = {
          name: l.name,
          type: catLabel,
          watt: isLine ? 0 : l.watt,
          lumen: isLine ? 0 : l.lumen,
          price: currentPrice,
          qty: 0,
          isLinebar: isLine
        };
      }
      groups[l.typeId].qty++;
      if (groups[l.typeId].isLinebar) {
        groups[l.typeId].watt += l.watt;
        groups[l.typeId].lumen += l.lumen;
      }
    });

    // Write lights in this zone
    Object.values(groups).forEach(g => {
      const rowCost = g.price * g.qty;
      totalCost += rowCost;
      
      const row = worksheet.getRow(currentRowNum);
      row.height = 22;
      
      row.getCell(2).value = zone.name;
      row.getCell(3).value = g.name;
      row.getCell(4).value = g.type;
      row.getCell(5).value = g.watt ? g.watt + 'W' : '-';
      row.getCell(6).value = g.lumen ? g.lumen + ' lm' : '-';
      row.getCell(7).value = g.qty + '개';
      row.getCell(8).value = rowCost;
      row.getCell(8).numFmt = '#,##0';
      
      applyRowStyles(row, false);
      currentRowNum++;
    });
    
    // SMPS in this zone
    if (zone.requiredSMPS && zone.requiredSMPS.length > 0) {
      const smpsCounts = {};
      zone.requiredSMPS.forEach(cap => {
        smpsCounts[cap] = (smpsCounts[cap] || 0) + 1;
      });
      
      Object.entries(smpsCounts).forEach(([cap, qty]) => {
        const row = worksheet.getRow(currentRowNum);
        row.height = 22;
        
        const capNum = parseInt(cap, 10);
        const smpsPrice = capNum === 36 ? 24500 : (capNum === 60 ? 30100 : (capNum === 150 ? 44100 : 0));
        const smpsCost = smpsPrice * qty;
        totalCost += smpsCost;
        
        row.getCell(2).value = zone.name;
        row.getCell(3).value = `${cap}W 안정기`;
        row.getCell(4).value = '안정기 (SMPS)';
        row.getCell(5).value = cap + 'W';
        row.getCell(6).value = '-';
        row.getCell(7).value = qty + '개';
        row.getCell(8).value = smpsCost;
        row.getCell(8).numFmt = '#,##0';
        
        applyRowStyles(row, false);
        currentRowNum++;
      });
    }
    
    // Controllers in this zone
    if (zone.requiredControllers && zone.requiredControllers.length > 0) {
      zone.requiredControllers.forEach(ctrl => {
        const row = worksheet.getRow(currentRowNum);
        row.height = 22;
        
        const ctrlName = typeof ctrl === 'string' ? ctrl : ctrl.name;
        const qty = typeof ctrl === 'string' ? 1 : ctrl.qty;
        const ctrlPrice = 35000;
        const ctrlCost = ctrlPrice * qty;
        totalCost += ctrlCost;
        
        row.getCell(2).value = zone.name;
        row.getCell(3).value = ctrlName;
        row.getCell(4).value = '컨트롤러';
        row.getCell(5).value = '-';
        row.getCell(6).value = '-';
        row.getCell(7).value = `${qty}개`;
        row.getCell(8).value = ctrlCost;
        row.getCell(8).numFmt = '#,##0';
        
        applyRowStyles(row, false);
        currentRowNum++;
      });
    }
    
    // Merge Space cells vertically in Column B
    const endRow = currentRowNum - 1;
    if (endRow >= startRow) {
      worksheet.mergeCells(`B${startRow}:B${endRow}`);
      const mergedCell = worksheet.getCell(`B${startRow}`);
      mergedCell.value = zone.name;
      mergedCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  });
  
  // Process lights outside any zone
  if (outsideLights.length > 0) {
    const startRow = currentRowNum;
    const groups = {};
    outsideLights.forEach(l => {
      if (!groups[l.typeId]) {
        const spec = fixtureDatabase.find(f => f.id === l.typeId);
        const catLabel = !spec ? '조명'
          : spec.category === 'downlight' ? '매입 다운라이트'
          : spec.category === 'linebar'   ? '라인/마그네틱'
          : spec.category === 'multi'     ? '멀티매입등'
          : spec.category === 'smarthome' ? '스마트홈 기기'
          : spec.category === 'etc'       ? '기타'
          : '조명';
        const isLine = spec && (spec.category === 'linebar' || spec.icon === 'line');
        const specCurrent2 = fixtureDatabase.find(f => f.id === l.typeId);
        const currentPrice2 = specCurrent2 ? specCurrent2.price : (l.price || 0); // 최신 가격테이블 기준
        groups[l.typeId] = {
          name: l.name,
          type: catLabel,
          watt: isLine ? 0 : l.watt,
          lumen: isLine ? 0 : l.lumen,
          price: currentPrice2,
          qty: 0,
          isLinebar: isLine
        };
      }
      groups[l.typeId].qty++;
      if (groups[l.typeId].isLinebar) {
        groups[l.typeId].watt += l.watt;
        groups[l.typeId].lumen += l.lumen;
      }
    });

    Object.values(groups).forEach(g => {
      const rowCost = g.price * g.qty;
      totalCost += rowCost;

      const row = worksheet.getRow(currentRowNum);
      row.height = 22;

      row.getCell(2).value = '기타 (공간 외)';
      row.getCell(3).value = g.name;
      row.getCell(4).value = g.type;
      row.getCell(5).value = g.watt ? g.watt + 'W' : '-';
      row.getCell(6).value = g.lumen ? g.lumen + ' lm' : '-';
      row.getCell(7).value = g.qty + '개';
      row.getCell(8).value = rowCost;
      row.getCell(8).numFmt = '#,##0';
      
      applyRowStyles(row, false);
      currentRowNum++;
    });
    
    const endRow = currentRowNum - 1;
    if (endRow >= startRow) {
      worksheet.mergeCells(`B${startRow}:B${endRow}`);
      const mergedCell = worksheet.getCell(`B${startRow}`);
      mergedCell.value = '기타 (공간 외)';
      mergedCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
  }
  
  // Table 2 Total Summary Row (BOM 가견적 합계)
  const totalRow = worksheet.getRow(currentRowNum);
  totalRow.height = 30;
  worksheet.mergeCells(`B${currentRowNum}:G${currentRowNum}`);
  
  const labelCell = totalRow.getCell(2);
  labelCell.value = '최종 예상 가견적 합계:';
  labelCell.font = { name: 'Malgun Gothic', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
  labelCell.alignment = { vertical: 'middle', horizontal: 'right' };
  labelCell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F2233' }
  };
  
  for (let col = 2; col <= 7; col++) {
    totalRow.getCell(col).border = {
      top: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      bottom: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      left: col === 2 ? { style: 'thin', color: { argb: 'FF44475A' } } : undefined,
      right: col === 7 ? { style: 'thin', color: { argb: 'FF44475A' } } : undefined
    };
  }
  
  const valueCell = totalRow.getCell(8);
  valueCell.value = grandTotalCost; // 상단 제품 주문 총 예상 합계와 동일하게 통일
  valueCell.numFmt = '#,##0';
  valueCell.font = { name: 'Malgun Gothic', size: 12, bold: true, color: { argb: 'FF2D6ABF' } };
  valueCell.alignment = { vertical: 'middle', horizontal: 'right' };
  valueCell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F2233' }
  };
  valueCell.border = {
    top: { style: 'medium', color: { argb: 'FF2D6ABF' } },
    bottom: { style: 'medium', color: { argb: 'FF2D6ABF' } },
    right: { style: 'thin', color: { argb: 'FF44475A' } }
  };
  
  // 10. Download Excel workbook
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `지비스_조명_설계_가견적서_${Date.now()}.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


// ==================== UNDO / REDO HISTORY MANAGER ====================
const undoStack = [];
const redoStack = [];

function saveStateToHistory() {
  const snapshot = {
    lights: JSON.parse(JSON.stringify(state.lights)),
    zones: JSON.parse(JSON.stringify(state.zones)),
    dimensions: JSON.parse(JSON.stringify(state.dimensions))
  };
  
  if (undoStack.length > 0) {
    const prev = undoStack[undoStack.length - 1];
    if (JSON.stringify(prev) === JSON.stringify(snapshot)) {
      return;
    }
  }
  
  undoStack.push(snapshot);
  if (undoStack.length > 50) {
    undoStack.shift();
  }
  
  redoStack.length = 0;
  updateUndoRedoButtons();
}

function resetHistory(initialState) {
  undoStack.length = 0;
  redoStack.length = 0;
  if (initialState) {
    undoStack.push(initialState);
  } else {
    undoStack.push({
      lights: [],
      zones: [],
      dimensions: []
    });
  }
  updateUndoRedoButtons();
}

function updateUndoRedoButtons() {
  const btnUndo = document.getElementById('btnUndo');
  const btnRedo = document.getElementById('btnRedo');
  if (btnUndo) btnUndo.disabled = undoStack.length <= 1;
  if (btnRedo) btnRedo.disabled = redoStack.length === 0;
}

function undo() {
  if (undoStack.length <= 1) return;
  const current = undoStack.pop();
  redoStack.push(current);
  
  const prevState = undoStack[undoStack.length - 1];
  state.lights = JSON.parse(JSON.stringify(prevState.lights));
  state.zones = JSON.parse(JSON.stringify(prevState.zones));
  state.dimensions = JSON.parse(JSON.stringify(prevState.dimensions));
  
  recalculateAllZones();
  updateStats();
  renderAll();
  updateUndoRedoButtons();
}

function redo() {
  if (redoStack.length === 0) return;
  const nextState = redoStack.pop();
  undoStack.push(nextState);
  
  state.lights = JSON.parse(JSON.stringify(nextState.lights));
  state.zones = JSON.parse(JSON.stringify(nextState.zones));
  state.dimensions = JSON.parse(JSON.stringify(nextState.dimensions));
  
  recalculateAllZones();
  updateStats();
  renderAll();
  updateUndoRedoButtons();
}

function setupHistoryEventListeners() {
  const btnUndo = document.getElementById('btnUndo');
  const btnRedo = document.getElementById('btnRedo');
  if (btnUndo) btnUndo.addEventListener('click', undo);
  if (btnRedo) btnRedo.addEventListener('click', redo);
}

// Start App
init();
