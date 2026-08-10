// ==================== SUPABASE CONFIG ====================
const SUPABASE_URL = 'https://wezywuqfzyyylpxsfdgu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlenl3dXFmenl5eWxweHNmZGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNDMxOTgsImV4cCI6MjA5NzkxOTE5OH0.NwqsxnM95LvZQ8Omyc-j9_RsayT5KIJ7QABy2Df43so';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

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
  },
  {
    id: 'magnetic-rail',
    category: 'linebar',
    name: '마그네틱 레일',
    model: 'Magnetic-Rail',
    watt: 0,
    lumen: 0,
    beam: 120,
    color: '#0070f3',
    icon: 'line',
    size: 24,
    price: 0,
    image: ''
  }
];

function getDBConverterPrice(watt) {
  const w = parseInt(watt, 10);
  const match = fixtureDatabase.find(f => f.category === 'converter' && f.name.includes(`${w}W`));
  return match ? match.price : (w === 36 ? 24500 : (w === 60 ? 30100 : 44100)); // fallback
}

function getDBControllerPrice() {
  const match = fixtureDatabase.find(f => f.category === 'controller' || f.name.includes('컨트롤러'));
  return match ? match.price : 35000; // fallback
}

function getDBProductPrice(namePattern, defaultPrice) {
  const match = fixtureDatabase.find(f => f.name.includes(namePattern));
  return match ? match.price : defaultPrice;
}

function getDBConverterProdCd(watt) {
  const w = parseInt(watt, 10);
  const match = fixtureDatabase.find(f => f.category === 'converter' && f.name.includes(`${w}W`));
  return match ? (match.ecountProdCd || null) : null;
}

function getDBControllerProdCd() {
  const match = fixtureDatabase.find(f => f.category === 'controller' || f.name.includes('컨트롤러'));
  return match ? (match.ecountProdCd || null) : null;
}

function getDBProductProdCd(namePattern) {
  const match = fixtureDatabase.find(f => f.name.includes(namePattern));
  return match ? (match.ecountProdCd || null) : null;
}

function getMagneticRailBOM(lengthM) {
  const ceilL = Math.ceil(lengthM);
  if (ceilL <= 0) return [];
  
  // 2M 단위로만 계산 (올림)
  const n2 = Math.ceil(ceilL / 2);
  const totalRails = n2;
  const nConn = Math.max(0, totalRails - 1);
  
  const convPrice = getDBConverterPrice(150);
  const ctrlPrice = getDBControllerPrice();
  const powerLinePrice = getDBProductPrice('마그네틱 전원선', 16320);
  const connectorPrice = getDBProductPrice('마그네틱 연결선', 18720);
  const rail2mPrice = getDBProductPrice('마그네틱 레일 2M', 46560);

  return [
    { type: 'rail-2m', name: '마그네틱 레일 2M', price: rail2mPrice, ecountProdCd: getDBProductProdCd('마그네틱 레일 2M'), qty: n2, watt: 0, lumen: 0, typeLabel: '라인/마그네틱' },
    { type: 'magnetic-converter', name: '마그네틱 컨버터 150W (유니온)', price: convPrice, ecountProdCd: getDBConverterProdCd(150), qty: 1, watt: 0, lumen: 0, typeLabel: '안정기 (SMPS)' },
    { type: 'magnetic-controller', name: '마그네틱 컨트롤러', price: ctrlPrice, ecountProdCd: getDBControllerProdCd(), qty: 1, watt: 0, lumen: 0, typeLabel: '컨트롤러' },
    { type: 'magnetic-connector', name: '마그네틱 연결선', price: connectorPrice, ecountProdCd: getDBProductProdCd('마그네틱 연결선'), qty: nConn, watt: 0, lumen: 0, typeLabel: '부자재' },
    { type: 'magnetic-powerline', name: '마그네틱 전원선', price: powerLinePrice, ecountProdCd: getDBProductProdCd('마그네틱 전원선'), qty: 1, watt: 0, lumen: 0, typeLabel: '부자재' }
  ].filter(item => item.qty > 0);
}


// ==================== APP STATE ====================
const state = {
  // Upload & Calibration
  uploadedImage: null,
  activeQuoteId: null,
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
  lastReferenceDistance: null,

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
  activeProductLine: 'zibis_iot',
  selectedZoneId: null,
  selectedDimensionId: null,
  selectedControllerMarkId: null,
  requiredHub: false, // IoT 조명이 프로젝트에 1개라도 있으면 true (프로젝트 단위, 존 단위 아님)


  // Items Arrays
  lights: [],
  zones: [],
  dimensions: [],
  controllerMarkers: [], // IoT 컨트롤러 설치 위치 표시 (선택 사항, 가격/BOM에 영향 없는 순수 주석)

  tempZoneData: null,
  pendingZoneData: null,

  // Placed lights count ID
  nextLightId: 1,
  nextZoneId: 1,
  nextDimId: 1,
  nextControllerMarkId: 1,
  bomFilterZoneId: null,
  expandedBOMGroups: { 'magnetic-system': false },
  magneticRailToastShown: false,
  editingZoneId: null,
  vertexEditingZoneId: null,
  draggingVertexIdx: -1,
  vertexEditingInsideLightIds: [],
  
  // Dragging states
  selectedLightIds: [],
  draggingLightId: null,
  draggingZoneId: null,
  draggingDimensionId: null,
  dragOffsetX: 0,
  dragOffsetY: 0,
  
  // Snap & hover
  snapEnabled: false,
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
  heatmapOpacity: (localStorage.getItem('zibis_heatmap_opacity') !== null) ? parseFloat(localStorage.getItem('zibis_heatmap_opacity')) : 0.20,
  showZones: true,
  showDimensions: true
};

// ==================== DOM ELEMENTS ====================
const els = {
  appWrapper: document.getElementById('appWrapper'),
  uploadOverlay: document.getElementById('uploadOverlay'),
  placeGuideToast: document.getElementById('placeGuideToast'),
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
  topbar: document.querySelector('.topbar'),

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
  libraryTabs: document.getElementById('libraryTabs'),
  libraryTabIndicator: document.getElementById('libraryTabIndicator'),
  categoryPillsWrap: document.getElementById('categoryPillsWrap'),
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
  tabControllerMark: document.getElementById('tabControllerMark'),
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
  heatmapOpacitySlider: document.getElementById('heatmapOpacitySlider'),
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
  btnConfirmZoneSelect: document.getElementById('btnConfirmZoneSelect'),
  
  // Consultation Request Modal
  btnConsultation: document.getElementById('btnConsultation'),
  consultationOverlay: document.getElementById('consultationOverlay'),
  btnCloseConsultation: document.getElementById('btnCloseConsultation'),
  consultationFormView: document.getElementById('consultationFormView'),
  clientName: document.getElementById('clientName'),
  clientPhone: document.getElementById('clientPhone'),
  clientPhoneHint: document.getElementById('clientPhoneHint'),
  clientAddress: document.getElementById('clientAddress'),
  clientAddressHint: document.getElementById('clientAddressHint'),
  clientHopeDate: document.getElementById('clientHopeDate'),
  clientHopeDatePlaceholder: document.getElementById('clientHopeDatePlaceholder'),
  btnOpenDatePicker: document.getElementById('btnOpenDatePicker'),
  clientRemarks: document.getElementById('clientRemarks'),
  privacyConsent: document.getElementById('privacyConsent'),
  btnConsultSubmit: document.getElementById('btnConsultSubmit'),
  consultationSuccessView: document.getElementById('consultationSuccessView'),
  summaryName: document.getElementById('summaryName'),
  summaryPhone: document.getElementById('summaryPhone'),
  summaryAddress: document.getElementById('summaryAddress'),
  btnConsultSuccessClose: document.getElementById('btnConsultSuccessClose'),
  consultLoadingOverlay: document.getElementById('consultLoadingOverlay'),
  consultLoadingText: document.getElementById('consultLoadingText')
};

// Helper: 도면 화면 진입 전(업로드/스케일보정)에는 .topbar(회원가입/로그인 포함)를 숨김
function setTopbarVisible(show) {
  if (els.topbar) els.topbar.style.display = show ? 'flex' : 'none';
}

// Helper: 짧게 보였다가 자동으로 사라지는 확인 메시지 (예: 로그아웃 완료)
let toastHideTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastHideTimeout);
  toastHideTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Helper: dataURL을 Blob으로 변환
function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}

// Helper: 도면 레이어 병합 캡처
function captureMergedFloorplan() {
  const mainCanvas = els.floorplanCanvas;
  if (!mainCanvas) return null;
  const width = mainCanvas.width;
  const height = mainCanvas.height;
  
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  const tempCtx = tempCanvas.getContext('2d');
  
  // 1. 바탕 도면 그리기
  tempCtx.drawImage(els.floorplanCanvas, 0, 0);
  
  // 2. 조명 영역 그리기
  if (els.zoneCanvas) {
    tempCtx.drawImage(els.zoneCanvas, 0, 0);
  }
  
  // 3. 조명 기구 그리기
  if (els.lightOverlay) {
    tempCtx.drawImage(els.lightOverlay, 0, 0);
  }
  
  return tempCanvas.toDataURL('image/png');
}

// Helper: 개인정보 마스킹 처리
function maskClientInfo(type, val) {
  if (!val) return '';
  val = val.trim();
  if (type === 'name') {
    if (val.length <= 1) return val;
    if (val.length === 2) return val[0] + '*';
    if (val.length === 3) return val[0] + '*' + val[2];
    return val[0] + '*'.repeat(val.length - 2) + val[val.length - 1];
  }
  if (type === 'phone') {
    const digits = val.replace(/[^0-9]/g, '');
    if (digits.length === 10) {
      return digits.substring(0, 3) + '-***-' + digits.substring(6);
    }
    if (digits.length === 11) {
      return digits.substring(0, 3) + '-****-' + digits.substring(7);
    }
    return val;
  }
  if (type === 'address') {
    const parts = val.split(/\s+/);
    if (parts.length <= 2) {
      return parts.join(' ') + ' ****';
    }
    return parts.slice(0, 2).join(' ') + ' ****';
  }
  return val;
}

// Helper: uploadOverlay 표시 제어 (download-container 동기화 포함)
function setUploadOverlayVisible(show) {
  const downloadContainer = document.querySelector('.download-container');
  els.uploadOverlay.style.display = show ? 'flex' : 'none';
  if (downloadContainer) downloadContainer.style.display = show ? 'none' : 'flex';
  if (show) setTopbarVisible(false);
}

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

// 조명 라이브러리 라인(IoT/일반)별 카테고리 pill 목록
const CATEGORY_PILLS_BY_LINE = {
  zibis_iot: [
    { key: 'downlight', label: '다운라이트' },
    { key: 'direct', label: '메인등' },
    { key: 'multi', label: '멀티매입등' },
    { key: 'linebar', label: '라인/마그네틱' },
    { key: 'etc', label: '기타' }
  ],
  zibis_general: [
    { key: 'direct', label: '현관/베란다등' },
    { key: 'sensor', label: '센서등' }
  ],
  home_ludens: [
    { key: 'downlight', label: '다운라이트' },
    { key: 'multi', label: '멀티매입등' }
  ]
};

// ==================== SUPABASE PRODUCT LOADER ====================
function mapSupabaseProduct(p) {
  const CAT_MAP = {
    '다운라이트': 'downlight', '라인바': 'linebar', '멀티': 'multi',
    '방등/거실등': 'roomlight', '엣지등': 'roomlight',
    '메인등': 'direct', '직부등': 'direct', '센서': 'sensor',
    '컨버터': 'converter', '컨트롤러': 'controller', '레일스포트': 'etc'
  };
  // DB에 category 값 뒤에 개행/공백이 섞여 들어오는 경우가 있어 trim 후 매칭
  let cat = CAT_MAP[(p.category || '').trim()] || 'etc';
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
  } else if (cat === 'roomlight') {
    icon = 'rect';
    color = '#FF2D55';
  } else if (cat === 'direct') {
    icon = 'rect';
    color = '#007AFF'; // 직부등은 블루 컬러 고정
  } else if (cat === 'sensor') {
    icon = 'rect';
    color = '#5AC8FA'; // 센서 조명은 하늘색으로 구분
  } else if (cat === 'linebar') {
    if ((p.name && p.name.includes('마그네틱 레일')) || p.id === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57' || p.id === 'magnetic-rail') {
      icon = 'line';
      color = '#8B5A2B'; // Brown color for magnetic rail
    } else if (p.name && p.name.includes('등기구')) {
      icon = 'spot'; // Fixed-length modules are placed as points
      color = '#007AFF'; // Blue for magnetic fixtures
    } else {
      icon = 'line';
      color = '#4CD964';
    }
  } else if (cat === 'multi') { icon = 'multi'; color = '#7F00FF'; }
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
  } else if (p.name && p.name.includes('루핀')) {
    const match = p.name.match(/(\d+)구/);
    heads = match ? parseInt(match[1]) : 5;
    lengthMM = heads === 5 ? 148 : 281;
    widthMM = 44;
    length = lengthMM;
  }
  // Parse size_mm if available (e.g. "620×320×26.5" or "1220×200×26.5")
  if (p.size_mm) {
    const parts = p.size_mm.split(/[×xX*]/);
    if (parts.length >= 2) {
      lengthMM = parseFloat(parts[0]);
      widthMM = parseFloat(parts[1]);
      length = lengthMM;
    }
  }
  // 직부/센서 라인 중 이름에 "원형"이 포함된 제품은 사각 렉트가 아닌 지름 기준 원형으로 렌더링
  const isRound = (cat === 'direct' || cat === 'sensor') && p.name && p.name.includes('원형');
  // 라인바 전용 필드 (마그네틱 레일은 길이 제한 해제)
  if (cat === 'linebar') {
    const isMagnetic = (p.name && p.name.includes('마그네틱 레일')) || p.id === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57' || p.id === 'magnetic-rail';
    if (isMagnetic) {
      length = null;
      lengthMM = null;
      widthMM = 24;
    } else if (p.name && p.name.includes('등기구')) {
      const match = p.name.match(/L(\d+)/);
      const mm = match ? parseInt(match[1]) : 300;
      length = mm;
      lengthMM = mm;
      widthMM = 22;
    } else {
      length = 5000;
      lengthMM = 5000;
      widthMM = 10;
    }
  }

  return {
    id: p.id,
    category: cat,
    subCategory,
    name: p.name,
    model: null,
    ecountProdCd: p.ecount_prod_cd || null,
    productLine: p.product_line || 'zibis_iot',
    watt: p.watt,
    lumen: p.lumen,
    beam,
    color,
    icon,
    size: cutoutMM || (cat === 'downlight' ? 24 : 30),
    cutoutMM,
    inch: (cutoutMM === 55 || cutoutMM === 53) ? '2인치' : cutoutMM === 75 ? '3인치' : null,
    price: p.price,
    image: p.image_url,
    link: null,
    sizeMM: p.size_mm || null,
    heads,
    lengthMM,
    widthMM,
    length,
    isRound
  };
}

// ==================== APP INITIALIZATION ====================
function checkAndRestoreOauthTempProject() {
  const raw = sessionStorage.getItem('temp_project_oauth');
  if (!raw) return;
  sessionStorage.removeItem('temp_project_oauth'); // Clear immediately to prevent repeat restores
  
  try {
    const restored = JSON.parse(raw);
    state.pixelsPerMeter = restored.pixelsPerMeter;
    state.ceilingHeight = restored.ceilingHeight;
    state.lights = restored.lights || [];
    state.zones = restored.zones || [];
    state.dimensions = restored.dimensions || [];
    state.controllerMarkers = restored.controllerMarkers || [];
    state.nextLightId = restored.nextLightId || 1;
    state.nextZoneId = restored.nextZoneId || 1;
    state.nextDimId = restored.nextDimId || 1;
    state.nextControllerMarkId = restored.nextControllerMarkId || 1;
    state.activeQuoteId = restored.activeQuoteId || null;
    
    if (restored.imageBase64) {
      const img = new Image();
      img.onload = function() {
        state.uploadedImage = img;
        setUploadOverlayVisible(false);
        initCanvasDimensions(img.width, img.height);
        setTopbarVisible(true);
        recalculateAllZones();
        updateStats();
        renderAll();
        // Trigger auto-resume checking in case they just onboarded
        setTimeout(() => {
          if (window.pendingOnboardingAction === 'save') {
            saveProjectFile();
            window.pendingOnboardingAction = null;
          } else if (window.pendingOnboardingAction === 'export') {
            exportToExcel();
            window.pendingOnboardingAction = null;
          }
        }, 800);
      };
      img.src = restored.imageBase64;
    }
  } catch (e) {
    console.error('OAuth 임시 복구 에러:', e);
  }
}

async function init() {
  setupEventListeners();
  try {
    const { data, error } = await supabaseClient
      .from('products')
      .select('*')
      .eq('is_active', true)
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
  // 다운라이트 및 멀티매입등 배치 순서 조정
  fixtureDatabase.sort((a, b) => {
    const getOrder = (item) => {
      if (!item.name) return 999;
      const name = item.name;
      // 1. 다운라이트 순서
      if (name.includes('사이렌') && name.includes('집중') && name.includes('2인치')) return 1;
      if (name.includes('사이렌') && name.includes('확산') && name.includes('2인치')) return 2;
      if (name.includes('컷오프') && name.includes('2인치')) return 3;
      if (name.includes('컷오프') && name.includes('3인치')) return 4;
      
      // 2. 멀티매입등(그리드슬롯) 순서
      if (name.includes('그리드슬롯') && name.includes('6구') && name.includes('블랙')) return 51;
      if (name.includes('그리드슬롯') && name.includes('6구') && name.includes('화이트')) return 52;
      if (name.includes('그리드슬롯') && name.includes('12구') && name.includes('블랙')) return 53;
      if (name.includes('그리드슬롯') && name.includes('12구') && name.includes('화이트')) return 54;
      
      return 100;
    };
    return getOrder(a) - getOrder(b);
  });
  renderFixtureLibrary();
  checkAndRestoreOauthTempProject();
}

// Render the side library items
function renderFixtureLibrary() {
  els.fixtureList.innerHTML = '';
  
  let filtered;
  if (state.activeProductLine === 'home_ludens') {
    // 홈루덴스 탭: 이름에 [홈루덴스]가 포함된 제품만 추출 (productLine 무관하게)
    filtered = fixtureDatabase.filter(f => f.name && f.name.includes('[홈루덴스]'));
  } else {
    // 기존 탭(스마트/일반): [홈루덴스] 제품은 숨김
    filtered = fixtureDatabase.filter(f => f.productLine === state.activeProductLine && (!f.name || !f.name.includes('[홈루덴스]')));
  }

  filtered = state.activeCategory === 'all'
    ? filtered
    : filtered.filter(f => f.category === state.activeCategory);

  if (state.activeProductLine === 'zibis_iot' && state.activeCategory === 'downlight' && state.activeSubCategory !== 'all') {
    filtered = filtered.filter(f => f.subCategory === state.activeSubCategory);
  }

  // Filter out auto-assigned magnetic accessories and 2M/3M rails from display
  filtered = filtered.filter(f => {
    const isAccessory = f.name && (
      f.name.includes('마그네틱 전원선') || 
      f.name.includes('마그네틱 마감캡') || 
      f.name.includes('마그네틱 연결선') ||
      f.name.includes('마그네틱 컨버터') ||
      f.name.includes('마그네틱 컨트롤러') ||
      f.name.includes('마그네틱 레일 2M') ||
      f.name.includes('마그네틱 레일2M') ||
      f.name.includes('마그네틱 레일 3M') ||
      f.name.includes('마그네틱 레일3M') ||
      f.name === '허브'
    );
    return !isAccessory;
  });

  if (filtered.length === 0) {
    const emptyText = state.activeProductLine === 'zibis_general' ? '등록된 일반 조명이 없습니다.' : '해당 조건의 제품이 없습니다.';
    els.fixtureList.innerHTML = `<div class="fixture-list-empty">${emptyText}</div>`;
    return;
  }

  filtered.forEach(item => {
    const isMagneticOrFixture = item.id === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57' || item.id === 'magnetic-rail' || (item.name && item.name.includes('마그네틱'));
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
        <div class="fixture-name">${item.name.replace('[홈루덴스]', '').trim()}</div>
        <div class="fixture-specs">
          <span class="spec-color-dot" style="background-color: ${item.color};"></span>
          <span>${item.watt}W</span>
          ${item.lumen ? `<span>${item.lumen} lm</span>` : ''}
          ${(item.beam && !isMagneticOrFixture) ? `<span>${item.beam}°</span>` : ''}
          ${item.inch ? `<span>${item.inch}</span>` : ''}
          ${(item.category === 'linebar' && !isMagneticOrFixture) ? '<span>1m 기준</span>' : ((item.length && !isMagneticOrFixture && item.category !== 'direct' && item.category !== 'roomlight' && item.category !== 'sensor') ? `<span>${item.length/1000}m</span>` : '')}
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

  // Show guide banner for placement mode
  if (els.placeGuideToast) {
    els.placeGuideToast.style.display = 'flex';
  }
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
  state.selectedControllerMarkId = null;
  state.editingZoneId = null;
  state.draggingLightId = null;
  state.draggingZoneId = null;
  state.draggingDimensionId = null;
  
  if (els.canvasContainer) {
    els.canvasContainer.classList.remove('crosshair-cursor');
  }

  // Hide guide banner
  if (els.placeGuideToast) {
    els.placeGuideToast.style.display = 'none';
  }

  const zoneDrawHint = document.getElementById('zoneDrawHint');
  if (zoneDrawHint) zoneDrawHint.style.display = 'none';

  if (els.btnSelectMode) els.btnSelectMode.classList.add('active');
  if (els.tabAddZone) els.tabAddZone.classList.remove('active');
  els.tabMeasure.classList.remove('active');
  if (els.tabControllerMark) els.tabControllerMark.classList.remove('active');
  
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
  state.controllerMarkers = [];
  state.activeQuoteId = null;
  state.zoom = 1.0;
  state.panX = 0;
  state.panY = 0;
  state.bomFilterZoneId = null;
  state.selectedZoneId = null;
  state.selectedFixtureId = null;
  state.selectedDimensionId = null;
  state.selectedControllerMarkId = null;
  state.selectedLightIds = [];
  state.tempZoneData = null;
  state.pendingZoneData = null;
  state.nextLightId = 1;
  state.nextZoneId = 1;
  state.nextDimId = 1;
  state.nextControllerMarkId = 1;

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
  setupAuthEventListeners();
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

  // Library line tabs (IoT 조명 / 일반 조명)
  els.libraryTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.library-tab');
    if (!tab) return;
    const line = tab.getAttribute('data-line');
    if (line === state.activeProductLine) return;

    document.querySelectorAll('.library-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    const visibleTabs = Array.from(document.querySelectorAll('.library-tab')).filter(t => t.style.display !== 'none');
    const index = visibleTabs.indexOf(tab);
    if (els.libraryTabIndicator) {
      els.libraryTabIndicator.style.transform = `translateX(${index * 100}%)`;
    }
    
    state.activeProductLine = line;

    // 라인마다 카테고리 체계가 다르므로 전환 시 해당 라인의 카테고리 pill로 교체
    const pills = CATEGORY_PILLS_BY_LINE[line] || [];
    els.categoryPills.innerHTML = pills.map((p, i) =>
      `<div class="pill${i === 0 ? ' active' : ''}" data-category="${p.key}">${p.label}</div>`
    ).join('');
    state.activeCategory = pills[0] ? pills[0].key : 'all';
    state.activeSubCategory = 'all';
    els.subCategoryPillsWrap.style.display = (state.activeCategory === 'downlight' && state.activeProductLine !== 'home_ludens') ? 'block' : 'none';

    renderFixtureLibrary();
  });

  // Category selection pills
  els.categoryPills.addEventListener('click', (e) => {
    if (e.target.classList.contains('pill')) {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      state.activeCategory = e.target.getAttribute('data-category');
      
      // Handle sub-category display
      if (state.activeCategory === 'downlight' && state.activeProductLine !== 'home_ludens') {
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
      
      // 공간추가 다각형의 경우 디폴트로 스냅이 켜져있게 설정
      state.snapEnabled = true;
      const snapBtn = document.getElementById('snapToggleBtn');
      if (snapBtn) snapBtn.classList.add('active');
      
      state.onboardingDismissed = true;
      checkOnboardingTooltip();
      if (els.tabAddZone) els.tabAddZone.classList.add('active');
      els.btnDrawZonePolygon.classList.add('active');
      if (els.zonePopup) els.zonePopup.classList.remove('visible');
      if (els.lblAddZone) els.lblAddZone.textContent = "공간: 다각형";
      if (els.btnSelectMode) els.btnSelectMode.classList.remove('active');
      if (els.canvasContainer) els.canvasContainer.classList.add('crosshair-cursor');
      const zoneDrawHint = document.getElementById('zoneDrawHint');
      if (zoneDrawHint) zoneDrawHint.style.display = 'block';
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

  if (els.tabControllerMark) {
    els.tabControllerMark.addEventListener('click', () => {
      resetTools();
      state.activeTool = 'controller-mark';
      els.tabControllerMark.classList.add('active');
      if (els.btnSelectMode) els.btnSelectMode.classList.remove('active');
      if (els.canvasContainer) els.canvasContainer.classList.add('crosshair-cursor');
    });
  }

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


  // Heatmap Opacity Slider Event
  if (els.heatmapOpacitySlider) {
    els.heatmapOpacitySlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value) || 0;
      state.heatmapOpacity = val / 100;
      localStorage.setItem('zibis_heatmap_opacity', state.heatmapOpacity);
      updateSliderBackground(val);
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
  if (els.btnNewProject) {
    els.btnNewProject.addEventListener('click', () => {
      showConfirm("홈으로 이동", "현재 작성 중인 모든 데이터가 삭제됩니다. 계속하시겠습니까?", () => {
        clearProjectState();
        resetHistory();
        setUploadOverlayVisible(true);
        els.canvasContainer.style.display = 'none';
        els.canvasToolbar.style.display = 'none';
        updateStats();
        renderAll();
      });
    });
  }

  if (els.btnSaveProject) {
    els.btnSaveProject.addEventListener('click', () => {
      if (!authUser) {
        alert('파일을 저장하려면 회원가입이 필요합니다.');
        document.getElementById('signupOverlay').style.display = 'flex';
        return;
      }
      if (!authProfile || !authProfile.consent_agreed) {
        alert('저장하기 전에 추가 정보 입력과 이용 동의를 완료해 주세요.');
        window.pendingOnboardingAction = 'save';
        document.getElementById('onboardingOverlay').style.display = 'flex';
        return;
      }
      saveProjectFile();
    });
  }
  if (els.btnLoadProject) {
    els.btnLoadProject.addEventListener('click', () => {
      if (els.loadProjectInput) els.loadProjectInput.click();
    });
  }
  if (els.btnLoadProjectFirst) {
    els.btnLoadProjectFirst.addEventListener('click', () => {
      if (els.loadProjectInput) els.loadProjectInput.click();
    });
  }
  if (els.loadProjectInput) {
    els.loadProjectInput.addEventListener('change', loadProjectFile);
  }
  
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
  els.btnExport.addEventListener('click', () => {
    if (!authUser) {
      alert('견적서를 다운로드하려면 회원가입이 필요합니다.');
      document.getElementById('signupOverlay').style.display = 'flex';
      return;
    }
    if (!authProfile || !authProfile.consent_agreed) {
      alert('다운로드하기 전에 추가 정보 입력과 이용 동의를 완료해 주세요.');
      window.pendingOnboardingAction = 'export';
      document.getElementById('onboardingOverlay').style.display = 'flex';
      return;
    }
    exportToExcel();
  });

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
      
      setUploadOverlayVisible(true);
    });
  }

  // Consultation Request Modal Event Listeners
  let consultSubmitInFlight = false; // 제출 중 폴링(updateConsultSubmitBtnState)이 버튼을 재활성화하지 않도록 하는 가드

  // 연락처/주소 입력창의 우측 안내 텍스트: 값이 채워지면 숨기고, 비우면 다시 표시
  function updateConsultInputHint(inputEl, hintEl) {
    if (!inputEl || !hintEl) return;
    hintEl.style.display = inputEl.value.trim() ? 'none' : '';
  }
  if (els.clientPhone && els.clientPhoneHint) {
    els.clientPhone.addEventListener('input', () => updateConsultInputHint(els.clientPhone, els.clientPhoneHint));
  }
  if (els.clientAddress && els.clientAddressHint) {
    els.clientAddress.addEventListener('input', () => updateConsultInputHint(els.clientAddress, els.clientAddressHint));
  }

  // 희망 시공 예정일: 네이티브 date input의 값을 커스텀 플레이스홀더(YY.MM.DD)에 반영
  function updateConsultHopeDatePlaceholder() {
    const el = els.clientHopeDate;
    const label = els.clientHopeDatePlaceholder;
    if (!el || !label) return;
    if (el.value) {
      const [y, m, d] = el.value.split('-');
      label.textContent = `${y.slice(2)}.${m}.${d}`;
      label.classList.add('has-value');
    } else {
      label.textContent = '희망 시공 예정일 YY.MM.DD';
      label.classList.remove('has-value');
    }
  }
  if (els.clientHopeDate) {
    els.clientHopeDate.addEventListener('input', updateConsultHopeDatePlaceholder);
    els.clientHopeDate.addEventListener('change', updateConsultHopeDatePlaceholder);
  }
  if (els.btnOpenDatePicker && els.clientHopeDate) {
    els.btnOpenDatePicker.addEventListener('click', () => {
      if (typeof els.clientHopeDate.showPicker === 'function') {
        els.clientHopeDate.showPicker();
      } else {
        els.clientHopeDate.focus();
      }
    });
  }

  // 필수값(성함/연락처/주소/개인정보 동의)이 모두 채워지면 제출 버튼을 #036CC5로 활성화
  function updateConsultSubmitBtnState() {
    if (!els.btnConsultSubmit) return;
    if (consultSubmitInFlight) return; // 제출 처리 중에는 폴링이 disabled 상태를 되돌리지 않도록 방지
    const name = els.clientName ? els.clientName.value.trim() : '';
    const phoneDigits = els.clientPhone ? els.clientPhone.value.trim().replace(/[^0-9]/g, '') : '';
    const address = els.clientAddress ? els.clientAddress.value.trim() : '';
    const consent = els.privacyConsent ? els.privacyConsent.checked : false;
    const phoneValid = /^010\d{7,8}$/.test(phoneDigits);

    const isValid = !!(name && phoneValid && address && consent);
    if (isValid) {
      els.btnConsultSubmit.classList.add('active-btn');
      els.btnConsultSubmit.disabled = false;
    } else {
      els.btnConsultSubmit.classList.remove('active-btn');
      els.btnConsultSubmit.disabled = true;
    }
  }
  [els.clientName, els.clientPhone, els.clientAddress].forEach(el => {
    if (el) {
      el.addEventListener('input', updateConsultSubmitBtnState);
      el.addEventListener('change', updateConsultSubmitBtnState);
      el.addEventListener('blur', updateConsultSubmitBtnState);
    }
  });
  if (els.privacyConsent) els.privacyConsent.addEventListener('change', updateConsultSubmitBtnState);
  updateConsultSubmitBtnState();
  setInterval(updateConsultSubmitBtnState, 500);

  if (els.btnConsultation) {
    els.btnConsultation.addEventListener('click', () => {
      // 1. 비회원 회원가입 유도
      if (!authUser) {
        alert('견적 상담을 신청하려면 회원가입이 필요합니다.');
        document.getElementById('signupOverlay').style.display = 'flex';
        return;
      }
      // 2. 빈 도면 검사
      if (!state.lights || state.lights.length === 0) {
        alert("배치된 조명이 없는 빈 도면은 상담을 신청할 수 없습니다.");
        if (els.consultationOverlay) els.consultationOverlay.style.display = 'none';
        return;
      }

      // 3. 폼 초기화 및 열기
      if (els.clientName) els.clientName.value = '';
      if (els.clientPhone) els.clientPhone.value = '';
      if (els.clientAddress) els.clientAddress.value = '';
      if (els.clientHopeDate) els.clientHopeDate.value = '';
      if (els.clientRemarks) els.clientRemarks.value = '';
      if (els.privacyConsent) els.privacyConsent.checked = false;
      updateConsultHopeDatePlaceholder();
      updateConsultInputHint(els.clientPhone, els.clientPhoneHint);
      updateConsultInputHint(els.clientAddress, els.clientAddressHint);
      updateConsultSubmitBtnState();

      if (els.consultationFormView) els.consultationFormView.style.display = 'flex';
      if (els.consultationSuccessView) els.consultationSuccessView.style.display = 'none';
      if (els.consultationOverlay) els.consultationOverlay.style.display = 'flex';
    });
  }

  if (els.btnCloseConsultation) {
    els.btnCloseConsultation.addEventListener('click', () => {
      if (els.consultationOverlay) els.consultationOverlay.style.display = 'none';
    });
  }

  if (els.btnConsultSuccessClose) {
    els.btnConsultSuccessClose.addEventListener('click', () => {
      if (els.consultationOverlay) els.consultationOverlay.style.display = 'none';
    });
  }

  if (els.btnConsultSubmit) {
    els.btnConsultSubmit.addEventListener('click', async () => {
      const name = els.clientName.value.trim();
      const rawPhone = els.clientPhone.value.trim();
      const address = els.clientAddress.value.trim();
      const hopeDate = els.clientHopeDate.value;
      const remarks = els.clientRemarks.value.trim();

      // 1. 필수값 기입 여부 검사
      if (!name || !rawPhone || !address) {
        alert("성함, 연락처, 시공지 주소는 필수 입력 항목입니다.");
        return;
      }

      // 2. 연락처 정규식 밸리데이션 (010 번호 10~11자리 숫자 기입 제약)
      const phoneVal = rawPhone.replace(/[^0-9]/g, '');
      const phoneRegex = /^010\d{7,8}$/;
      if (!phoneRegex.test(phoneVal)) {
        alert("올바른 연락처(010으로 시작하는 10~11자리 숫자)를 입력해주세요.");
        return;
      }

      // 3. 개인정보 동의 체크 검사
      if (!els.privacyConsent || !els.privacyConsent.checked) {
        alert("개인정보 수집 및 이용에 동의해야 상담 신청이 가능합니다.");
        return;
      }

      // 버튼 로딩 상태 비활성화 및 로딩 오버레이 노출
      consultSubmitInFlight = true;
      const originalText = els.btnConsultSubmit.textContent;
      els.btnConsultSubmit.disabled = true;
      els.btnConsultSubmit.textContent = "상담 접수 중...";

      if (els.consultLoadingOverlay) {
        els.consultLoadingOverlay.style.display = 'flex';
      }

      try {
        // A. 도면 이미지 병합 캡처 및 스토리지 업로드
        if (els.consultLoadingText) {
          els.consultLoadingText.textContent = "도면 이미지를 캡처하여 업로드 중입니다...";
        }
        
        const capturedImageBase64 = captureMergedFloorplan();
        let imageUrl = null;
        
        if (capturedImageBase64) {
          const blob = dataURLtoBlob(capturedImageBase64);
          const storagePath = `consult_${Date.now()}_${Math.random().toString(36).substring(2, 9)}.png`;
          
          const { data: uploadData, error: uploadErr } = await supabaseClient.storage
            .from('consultation-images')
            .upload(storagePath, blob, {
              contentType: 'image/png',
              upsert: true
            });
            
          if (uploadErr) {
            console.error('Storage 업로드 실패:', uploadErr.message);
          } else {
            const { data: urlData } = supabaseClient.storage
              .from('consultation-images')
              .getPublicUrl(storagePath);
            imageUrl = urlData.publicUrl;
          }
        }

        // B. 임시 견적 데이터(quotes) 생성 (비회원/회원 공통)
        if (els.consultLoadingText) {
          els.consultLoadingText.textContent = "상담 신청 정보를 서버에 등록 중입니다...";
        }

        const projectName = name + " 고객님 견적 상담 도면";
        let base64Image = null;
        if (state.uploadedImage) {
          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = state.uploadedImage.width;
          tempCanvas.height = state.uploadedImage.height;
          tempCanvas.getContext('2d').drawImage(state.uploadedImage, 0, 0);
          base64Image = tempCanvas.toDataURL('image/jpeg', 0.85);
        }

        const lightsWithProductCode = state.lights.map(l => {
          const spec = fixtureDatabase.find(f => f.id === l.typeId);
          return { ...l, ecountProdCd: spec ? (spec.ecountProdCd || null) : null };
        });

        const projectData = {
          version: '1.0',
          pixelsPerMeter: state.pixelsPerMeter,
          ceilingHeight: state.ceilingHeight,
          imageBase64: base64Image,
          lights: lightsWithProductCode,
          zones: state.zones,
          dimensions: state.dimensions,
          controllerMarkers: state.controllerMarkers,
          nextLightId: state.nextLightId,
          nextZoneId: state.nextZoneId,
          nextDimId: state.nextDimId,
          nextControllerMarkId: state.nextControllerMarkId
        };

        const { data: quoteData, error: quoteErr } = await supabaseClient
          .from('quotes')
          .insert({
            user_id: authUser ? authUser.id : null,
            project_name: projectName,
            project_data: projectData
          })
          .select();

        let finalQuoteId = null;
        if (quoteErr) {
          console.error('상담용 임시 견적서 생성 실패:', quoteErr.message);
        } else if (quoteData && quoteData[0]) {
          finalQuoteId = quoteData[0].id;
        }

        // 설계 화면에서 미리 찍어둔 컨트롤러 위치를 정규화(0~1) 좌표로 변환해 상담 신청에 함께 전달
        const normalizedControllerMarkers = (state.uploadedImage && state.controllerMarkers.length > 0)
          ? state.controllerMarkers.map(m => ({
              x: m.x / state.uploadedImage.width,
              y: m.y / state.uploadedImage.height
            }))
          : [];

        // C. ConsultationRequest 테이블에 인서트
        const { data: consultData, error: consultErr } = await supabaseClient
          .from('ConsultationRequest')
          .insert({
            name: name,
            phone: phoneVal,
            address: address,
            hope_date: hopeDate || null,
            remarks: remarks || null,
            image_url: imageUrl,
            quote_id: finalQuoteId,
            status: '상담대기',
            user_id: authUser.id,
            controller_markers: normalizedControllerMarkers
          })
          .select();

        if (consultErr) {
          throw new Error(consultErr.message);
        }

        // D. 플로우 알림 전송 (Supabase Edge Function 호출)
        if (els.consultLoadingText) {
          els.consultLoadingText.textContent = "영업 담당자 단체방에 알림을 전송 중입니다...";
        }

        try {
          const edgeUrl = 'https://wezywuqfzyyylpxsfdgu.supabase.co/functions/v1/send-flow-notification';
          // Edge Function이 JWT 검증을 요구하므로 로그인 세션 토큰을 함께 전송
          const { data: { session } } = await supabaseClient.auth.getSession();
          const accessToken = session ? session.access_token : SUPABASE_ANON_KEY;
          const edgeResponse = await fetch(edgeUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
              'apikey': SUPABASE_ANON_KEY
            },
            body: JSON.stringify({
              name: name,
              phone: phoneVal,
              address: address,
              hopeDate: hopeDate || null,
              remarks: remarks || null,
              imageUrl: imageUrl,
              quoteId: finalQuoteId
            })
          });

          const edgeResult = await edgeResponse.json();
          if (!edgeResponse.ok || !edgeResult.success) {
            console.warn('Flow 알림 발송 실패(지연):', edgeResult.error);
          } else {
            console.log('Flow 알림 발송 성공:', edgeResult);
          }
        } catch (flowErr) {
          console.warn('Flow 알림 발송 중 통신 예외 발생:', flowErr);
        }

        // E. 성공 뷰 노출 및 정보 마스킹 표출
        if (els.summaryName) els.summaryName.textContent = maskClientInfo('name', name);
        if (els.summaryPhone) els.summaryPhone.textContent = maskClientInfo('phone', phoneVal);
        if (els.summaryAddress) els.summaryAddress.textContent = maskClientInfo('address', address);

        if (els.consultationFormView) els.consultationFormView.style.display = 'none';
        if (els.consultationSuccessView) els.consultationSuccessView.style.display = 'flex';

      } catch (err) {
        console.error('상담 신청 실패:', err);
        alert('상담 신청 처리 중 오류가 발생했습니다: ' + err.message);
      } finally {
        consultSubmitInFlight = false;
        els.btnConsultSubmit.textContent = originalText;
        if (els.consultLoadingOverlay) {
          els.consultLoadingOverlay.style.display = 'none';
        }
        updateConsultSubmitBtnState();
      }
    });
  }
}

// ==================== IMAGE FILE UPLOADING FLOW ====================
function handleUpload(file) {
  if (!file) return;

  const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name || '');
  const isImage = file.type.startsWith('image/');

  // Reject unsupported files on the start screen drop zone / selector
  if (!isImage && !isPdf) {
    alert("올바른 도면 파일(PNG, JPG, PDF)을 업로드해주세요.");
    return;
  }

  // Clear previous project state when uploading a new layout image
  clearProjectState();

  const finishUpload = (dataUrl) => {
    const img = new Image();
    img.onload = function() {
      state.uploadedImage = img;
      setUploadOverlayVisible(false);

      // Init canvas size
      initCanvasDimensions(img.width, img.height);

      // Open Calibration flow directly
      startCalibrationFlow();
    };
    img.onerror = function() {
      alert("도면 이미지를 불러오는 데 실패했습니다.");
    };
    img.src = dataUrl;
  };

  if (isPdf) {
    renderPdfToDataUrl(file).then(finishUpload).catch(err => {
      console.error('PDF 렌더링 실패:', err);
      alert("PDF 파일을 불러오는 데 실패했습니다. 파일이 손상되지 않았는지 확인해주세요.");
    });
    return;
  }

  // Handle image files
  const reader = new FileReader();
  reader.onload = function(e) {
    finishUpload(e.target.result);
  };
  reader.readAsDataURL(file);
}

// PDF 첫 페이지를 캔버스에 렌더링해 기존 이미지 업로드 파이프라인에 그대로 태울 data URL로 변환
async function renderPdfToDataUrl(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const page = await pdf.getPage(1);

  // 도면 정밀도를 위해 긴 변이 약 2400px가 되도록 스케일 조정
  const baseViewport = page.getViewport({ scale: 1 });
  const targetLongSide = 2400;
  const longSide = Math.max(baseViewport.width, baseViewport.height);
  const scale = Math.min(4, Math.max(1, targetLongSide / longSide));
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext('2d');
  // PDF는 배경이 투명할 수 있어 흰 배경을 먼저 채워둠
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvas.toDataURL('image/png');
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

  setTopbarVisible(false);

  if (els.btnBackToCalibrate) {
    els.btnBackToCalibrate.style.display = 'none';
  }

  const modal = els.calibrateOverlay;
  const canvas = els.calibrateCanvas;

  // 이미 적용된 기준선(2점)이 있으면 재진입 시에도 유지, 없으면 초기화
  if (state.calibrationPoints.length !== 2) {
    state.calibrationPoints = [];
  }
  state.calibrateMousePos = null;
  hideCalibrationPopup();

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

  // 기준선 길이: 이전에 적용한 값이 있으면 유지, 없으면 기본값 3000mm
  if (els.referenceDistance) {
    els.referenceDistance.value = state.lastReferenceDistance || "3000";
  }

  // 평수 입력 초기화
  const pyeongEl = document.getElementById('pyeongInput');
  if (pyeongEl) pyeongEl.value = '';
  const previewEl = document.getElementById('pyeongPreview');
  if (previewEl) previewEl.textContent = '';

  // 이미 그려진 기준선이 있으면 적용 버튼 활성화 + 안내 문구 갱신
  const hasExistingLine = state.calibrationPoints.length === 2;
  els.btnApplyCalibrate.disabled = !hasExistingLine;

  if (els.calibrateStatus) {
    els.calibrateStatus.textContent = hasExistingLine
      ? "기준선이 설정되었습니다. 실제 길이를 입력하고 '설정 완료' 버튼을 눌러주세요."
      : "기준선의 시작점을 마우스로 클릭해 주세요.";
  }
  const calibrateSnapHint = document.getElementById('calibrateSnapHint');
  if (calibrateSnapHint) calibrateSnapHint.style.display = 'none';

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
    
    const calibrateSnapHint = document.getElementById('calibrateSnapHint');

    if (state.calibrationPoints.length === 0) {
      hideCalibrationPopup();
      state.calibrationPoints.push(pt);
      state.calibrateMousePos = pt;
      if (els.calibrateStatus) {
        els.calibrateStatus.textContent = "기준선의 끝점을 마우스로 클릭해 주세요.";
      }
      if (calibrateSnapHint) calibrateSnapHint.style.display = 'block';
    } else if (state.calibrationPoints.length === 1) {
      if (e.shiftKey) {
        pt = getSnappedPoint(state.calibrationPoints[0], pt, true);
      }
      state.calibrationPoints.push(pt);
      state.calibrateMousePos = null;
      if (els.calibrateStatus) {
        els.calibrateStatus.textContent = "기준선이 설정되었습니다. 실제 길이를 입력하고 '설정 완료' 버튼을 눌러주세요.";
      }
      if (calibrateSnapHint) calibrateSnapHint.style.display = 'none';
      updateApplyButtonState();
      
      // 마우스(두 번째 포인트) 근처에 실제 길이 입력 팝업 띄우기
      showCalibrationPopup(pt);
    } else {
      hideCalibrationPopup();
      state.calibrationPoints = [pt];
      state.calibrateMousePos = pt;
      if (els.calibrateStatus) {
        els.calibrateStatus.textContent = "기준선의 끝점을 마우스로 클릭해 주세요.";
      }
      if (calibrateSnapHint) calibrateSnapHint.style.display = 'block';
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
    alert("올바른 기준선 길이를 입력해 주세요 (예: 3000).");
    return;
  }
  
  const p1 = state.calibrationPoints[0];
  const p2 = state.calibrationPoints[1];
  const distPx = Math.hypot(p2.x - p1.x, p2.y - p1.y);

  // refDist는 mm 단위이므로 m 단위로 변환 (예: 3000 -> 3.0)
  state.pixelsPerMeter = distPx / (refDist / 1000.0);
  state.lastReferenceDistance = refDist;

  hideCalibrationPopup();
  els.calibrateOverlay.style.display = 'none';
  els.calibrateCanvas.onmousedown = null;
  els.calibrateCanvas.onmousemove = null;
  els.calibrateCanvas.onmouseup = null;
  els.calibrateCanvas.onmouseleave = null;
  els.calibrateCanvas.onwheel = null;

  setTopbarVisible(true);
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
  hideCalibrationPopup();
  els.calibrateOverlay.style.display = 'none';
  els.calibrateCanvas.onmousedown = null;
  els.calibrateCanvas.onmousemove = null;
  els.calibrateCanvas.onmouseup = null;
  els.calibrateCanvas.onmouseleave = null;
  els.calibrateCanvas.onwheel = null;
  updateBackButtonVisibility();
  if (!state.uploadedImage) {
    setUploadOverlayVisible(true);
  } else {
    setTopbarVisible(true);
    updateZoomAndPan();
    recalculateAllZones();
    renderAll();
  }
});

// ── 마우스 근처 플로팅 캘리브레이션 팝업 함수 ──
function showCalibrationPopup(pt) {
  const popup = document.getElementById('calibrateInputPopup');
  const input = document.getElementById('popupRefDistance');
  if (!popup || !input) return;

  // 이미지 좌표 -> 캔버스 기준 CSS 좌표 변환
  const canvasX = pt.x * state.calibrateZoom + state.calibratePanX;
  const canvasY = pt.y * state.calibrateZoom + state.calibratePanY;

  const wrap = els.calibrateCanvas.parentElement;
  const wrapW = wrap ? wrap.clientWidth : 800;
  const wrapH = wrap ? wrap.clientHeight : 600;

  // 마우스 클릭(두 번째 점) 위치 가로 중앙 정렬 및 선 위에 배치 (팝업 크기: 가로 190px, 세로 약 68px)
  let left = canvasX - 95; 
  let top = canvasY - 85; // 선과 마우스 포인터 위로 떠 있도록 Y 오프셋 조정

  // 화면 경계 밖으로 벗어나는 것 방지
  if (left < 10) {
    left = 10;
  }
  if (left + 190 > wrapW) {
    left = wrapW - 200;
  }
  if (top < 10) {
    // 도면 상단 끝에 그려진 경우, 선을 가리지 않게 팝업을 아래쪽으로 노출
    top = canvasY + 25;
  }
  if (top + 70 > wrapH) {
    top = wrapH - 80;
  }

  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
  popup.style.display = 'block';

  // 우측 패널 입력란 값과 싱크
  input.value = els.referenceDistance.value;

  // 즉시 입력 필드 포커싱 및 텍스트 전체 선택
  setTimeout(() => {
    input.focus();
    input.select();
  }, 50);
}

function hideCalibrationPopup() {
  const popup = document.getElementById('calibrateInputPopup');
  if (popup) popup.style.display = 'none';
}

// 팝업 이벤트 리스너 등록
document.getElementById('popupRefDistance')?.addEventListener('input', (e) => {
  if (els.referenceDistance) {
    els.referenceDistance.value = e.target.value;
  }
});

document.getElementById('popupRefDistance')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('btnPopupApply')?.click();
  }
});

document.getElementById('btnPopupApply')?.addEventListener('click', () => {
  const val = parseFloat(document.getElementById('popupRefDistance')?.value);
  if (isNaN(val) || val <= 0) {
    alert("올바른 기준선 길이를 입력해 주세요 (예: 3000).");
    return;
  }
  if (els.referenceDistance) {
    els.referenceDistance.value = val;
  }
  state.lastReferenceDistance = val;
  hideCalibrationPopup();
  
  if (els.btnApplyCalibrate) {
    els.btnApplyCalibrate.disabled = false;
    els.btnApplyCalibrate.focus();
  }
  
  renderCalibrationCanvas();
});

// ==================== WIDGET INTERACTIONS (MOUSE, ZOOM, PAN) ====================
function setupCanvasInteractions() {
  const layer = els.interactionLayer;
  
  // Wheel scroll Zoom handler
  els.canvasArea.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomIntensity = 0.0015; // 자연스러운 줌 속도를 조절하는 감도 변수
    const mouseX = e.clientX - els.canvasArea.getBoundingClientRect().left;
    const mouseY = e.clientY - els.canvasArea.getBoundingClientRect().top;
    
    // 이진화(+1/-1) 대신 실제 스크롤 이동량(deltaY)을 반영하여 스크롤 속도에 맞추어 확대/축소
    const zoomFactor = Math.exp(-e.deltaY * zoomIntensity);
    
    // Zoom centered at cursor pos
    const newZoom = Math.min(Math.max(state.zoom * zoomFactor, 0.2), 4.0);
    
    state.panX = mouseX - (mouseX - state.panX) * (newZoom / state.zoom);
    state.panY = mouseY - (mouseY - state.panY) * (newZoom / state.zoom);
    state.zoom = newZoom;
    
    updateZoomAndPan();
    renderAll();
  }, { passive: false });

  // Double click to enter vertex editing mode
  layer.addEventListener('dblclick', (e) => {
    if (state.activeTool !== 'select') return;
    const pt = getOriginalCoords(e);
    const clickedZone = findZoneAt(pt.x, pt.y);
    if (clickedZone) {
      state.vertexEditingZoneId = clickedZone.id;
      state.draggingVertexIdx = -1;
      // Cache IDs of all lights currently inside the zone (either point light or line light ends)
      state.vertexEditingInsideLightIds = state.lights
        .filter(l => {
          const inStart = isPointInPolygon(l, clickedZone.points);
          const inEnd = l.x2 !== undefined && l.y2 !== undefined && isPointInPolygon({ x: l.x2, y: l.y2 }, clickedZone.points);
          return inStart || inEnd;
        })
        .map(l => l.id);
      state.selectedLightIds = [];
      state.selectedZoneId = null;
      state.selectedDimensionId = null;
      state.selectedControllerMarkId = null;
      renderAll();
    }
  });

  // Mouse pan and select triggers
  layer.addEventListener('mousedown', (e) => {
    // Right click or tool settings
    if (e.button === 2) {
      e.preventDefault();
      return;
    }

    const pt = getOriginalCoords(e);

    // 1. If vertex editing is active, check if user clicked a vertex handle of the editing zone
    if (state.vertexEditingZoneId !== null && state.activeTool === 'select') {
      const activeZone = state.zones.find(z => z.id === state.vertexEditingZoneId);
      if (activeZone) {
        const threshold = 12 / state.zoom; // 12px grab range
        let foundIdx = -1;
        for (let i = 0; i < activeZone.points.length; i++) {
          const v = activeZone.points[i];
          if (Math.hypot(v.x - pt.x, v.y - pt.y) < threshold) {
            foundIdx = i;
            break;
          }
        }
        if (foundIdx !== -1) {
          state.draggingVertexIdx = foundIdx;
          state._mouseDownOnLayer = true;
          state._isDraggingCanvas = false;
          renderAll();
          return; // Bypass standard dragging/selecting
        }
      }
    }

    // Universal drag-to-pan tracking (calibrate-style)
    state._mouseDownOnLayer = true;
    state._isDraggingCanvas = false;
    state._panDragStart = { x: e.clientX, y: e.clientY, panX: state.panX, panY: state.panY };
    
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
        state.selectedControllerMarkId = null;
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
          state.selectedControllerMarkId = null;

          state.draggingDimensionId = clickedDim.id;
          state.dragOffsetX = pt.x;
          state.dragOffsetY = pt.y;
          renderAll();
        } else {
          // Check if clicked a controller marker
          const clickedMarker = findControllerMarkerAt(pt.x, pt.y);
          if (clickedMarker) {
            state.selectedControllerMarkId = clickedMarker.id;
            state.selectedZoneId = null;
            state.selectedDimensionId = null;
            state.selectedLightIds = [];
            renderAll();
            return;
          }

          // Select 도구에서는 공간(zone)은 선택 대상에서 제외 — 제품(조명)만 선택 가능
          state.selectedZoneId = null;
          state.selectedDimensionId = null;
          state.selectedControllerMarkId = null;

          // Clicked outside active zone or handles: reset vertex editing mode
          if (state.vertexEditingZoneId !== null) {
            const activeZone = state.zones.find(z => z.id === state.vertexEditingZoneId);
            if (activeZone) {
              const inside = isPointInPolygon(pt, activeZone.points);
              if (!inside) {
                state.vertexEditingZoneId = null;
              }
            } else {
              state.vertexEditingZoneId = null;
            }
          }
          renderAll();
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
      
      // Verify start point is inside a zone
      const isInside = state.zones.some(z => isPointInPolygon(pt, z.points));
      if (!isInside) {
        alert("공간 구획 내부 영역에만 설치가 가능합니다.");
        return;
      }

      // 직사각형 메인등/직부등(원형·정사각형 제외)은 멀티매입등처럼 점 2개를 찍어 가로/세로로 배치.
      // 정사각형은 회전이 의미 없으므로 클릭 즉시 배치되는 기존 방식 유지.
      const isSquareDirect = spec && spec.category === 'direct' && spec.lengthMM && spec.widthMM && spec.lengthMM === spec.widthMM;
      const isDirectRotate = spec && spec.category === 'direct' && !spec.isRound && !isSquareDirect;

      if (isDirectRotate) {
        if (!state.isDrawingLinebar) {
          // FIRST CLICK: fix position
          state.isDrawingLinebar = true;
          state.linebarStart = { x: pt.x, y: pt.y };
          state.linebarEnd = { x: pt.x, y: pt.y };
        } else {
          // SECOND CLICK: fix direction only (실치수 고정, 회전만 결정)
          const specCur = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
          if (specCur) {
            const dx = state.linebarEnd.x - state.linebarStart.x;
            const dy = state.linebarEnd.y - state.linebarStart.y;
            const rotation = Math.atan2(dy, dx);
            const newLight = {
              id: state.nextLightId++,
              typeId: specCur.id,
              name: specCur.name,
              x: state.linebarStart.x,
              y: state.linebarStart.y,
              watt: specCur.watt,
              lumen: specCur.lumen,
              color: specCur.color,
              size: specCur.size,
              price: specCur.price,
              rotation
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
      } else if (spec && (((spec.category === 'linebar' && !spec.name.includes('등기구')) || spec.icon === 'line' || spec.id.includes('gridslot') || spec.category === 'multi'))) {
        if (!state.isDrawingLinebar) {
          // FIRST CLICK: start drawing linebar
          state.isDrawingLinebar = true;
          state.linebarStart = { x: pt.x, y: pt.y };
          state.linebarEnd = { x: pt.x, y: pt.y };
        } else {
          // SECOND CLICK: finalize and place linebar
          const endInside = state.zones.some(z => isPointInPolygon({ x: state.linebarEnd.x, y: state.linebarEnd.y }, z.points));
          if (!endInside) {
            alert("공간 구획 내부 영역에만 설치가 가능합니다.");
            return;
          }
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
            
            const isOverlap = state.lights.some(l => {
              if (l.x2 !== undefined && l.y2 !== undefined) {
                const dStart = Math.sqrt((l.x - state.linebarStart.x)**2 + (l.y - state.linebarStart.y)**2);
                const dEnd = Math.sqrt((l.x2 - ex)**2 + (l.y2 - ey)**2);
                const dStartRev = Math.sqrt((l.x - ex)**2 + (l.y - state.linebarStart.y)**2);
                const dEndRev = Math.sqrt((l.x2 - state.linebarStart.x)**2 + (l.y2 - ey)**2);
                return (dStart < 5 && dEnd < 5) || (dStartRev < 5 && dEndRev < 5);
              }
              return false;
            });
            
            if (!isOverlap) {
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
    } else if (state.activeTool === 'controller-mark') {
      // 클릭: 새 핀 추가 / 기존 핀 클릭: 삭제 (가격에 영향 없는 순수 설치위치 주석)
      const hitRadius = 12 / state.zoom;
      const hitIdx = state.controllerMarkers.findIndex(m => {
        const dx = m.x - pt.x, dy = m.y - pt.y;
        return Math.sqrt(dx * dx + dy * dy) <= hitRadius;
      });
      if (hitIdx !== -1) {
        state.controllerMarkers.splice(hitIdx, 1);
      } else {
        state.controllerMarkers.push({ id: state.nextControllerMarkId++, x: pt.x, y: pt.y });
      }
      saveStateToHistory();
      renderAll();
    }
  });

  layer.addEventListener('mousemove', (e) => {
    const pt = getOriginalCoords(e);

    // 1. If vertex editing is active and dragging a vertex, update coordinate
    if (state.vertexEditingZoneId !== null && state.draggingVertexIdx !== -1) {
      const activeZone = state.zones.find(z => z.id === state.vertexEditingZoneId);
      if (activeZone) {
        const targetPt = pt;
        
        // Check if rectangle (axis-aligned, 4 points)
        const isRect = activeZone.points.length === 4 && activeZone.isRect !== false;
        if (isRect) {
          const i = state.draggingVertexIdx;
          if (i === 0) {
            activeZone.points[0].x = targetPt.x;
            activeZone.points[0].y = targetPt.y;
            activeZone.points[3].x = targetPt.x;
            activeZone.points[1].y = targetPt.y;
          } else if (i === 1) {
            activeZone.points[1].x = targetPt.x;
            activeZone.points[1].y = targetPt.y;
            activeZone.points[2].x = targetPt.x;
            activeZone.points[0].y = targetPt.y;
          } else if (i === 2) {
            activeZone.points[2].x = targetPt.x;
            activeZone.points[2].y = targetPt.y;
            activeZone.points[1].x = targetPt.x;
            activeZone.points[3].y = targetPt.y;
          } else if (i === 3) {
            activeZone.points[3].x = targetPt.x;
            activeZone.points[3].y = targetPt.y;
            activeZone.points[0].x = targetPt.x;
            activeZone.points[2].y = targetPt.y;
          }
        } else {
          // Free polygon
          activeZone.points[state.draggingVertexIdx].x = targetPt.x;
          activeZone.points[state.draggingVertexIdx].y = targetPt.y;
        }

        // Clamp associated lights to the updated boundary
        if (state.vertexEditingInsideLightIds && state.vertexEditingInsideLightIds.length > 0) {
          state.lights.forEach(l => {
            if (state.vertexEditingInsideLightIds.includes(l.id)) {
              if (l.x2 === undefined || l.y2 === undefined) {
                // Point light
                const lPt = { x: l.x, y: l.y };
                if (!isPointInPolygon(lPt, activeZone.points)) {
                  const clamped = clampPointToPolygon(lPt, activeZone.points);
                  l.x = clamped.x;
                  l.y = clamped.y;
                }
              } else {
                // Linebar light
                const startPt = { x: l.x, y: l.y };
                const endPt = { x: l.x2, y: l.y2 };
                if (!isPointInPolygon(startPt, activeZone.points)) {
                  const clampedStart = clampPointToPolygon(startPt, activeZone.points);
                  l.x = clampedStart.x;
                  l.y = clampedStart.y;
                }
                if (!isPointInPolygon(endPt, activeZone.points)) {
                  const clampedEnd = clampPointToPolygon(endPt, activeZone.points);
                  l.x2 = clampedEnd.x;
                  l.y2 = clampedEnd.y;
                }
              }
            }
          });
        }

        // Recalculate area
        activeZone.areaM2 = calculatePolygonArea(activeZone.points) / (state.pixelsPerMeter * state.pixelsPerMeter);
        
        recalculateAllZones();
        updateStats();
        renderAll();
        return; // Bypass normal hover/drag processing
      }
    }

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

    state.ghostCursor = pt;
    state.snapGuides = [];

    // Place tool: compute snap for point fixtures (not linebar)
    if (state.activeTool === 'place' && state.selectedFixtureId && !state.isDrawingLinebar) {
      const spec = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
      if (spec) {
        const isMagneticModule = spec.category === 'linebar' && spec.name.includes('등기구');
        if (isMagneticModule) {
          let nearestRail = null;
          let minDistance = Infinity;
          
          for (const l of state.lights) {
            if (l.typeId === 'magnetic-rail' || l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57') {
              const dist = distToSegment(pt, { x: l.x, y: l.y }, { x: l.x2, y: l.y2 });
              if (dist < minDistance) {
                minDistance = dist;
                nearestRail = l;
              }
            }
          }
          
          if (nearestRail && minDistance <= 30) {
            const p1 = { x: nearestRail.x, y: nearestRail.y };
            const p2 = { x: nearestRail.x2, y: nearestRail.y2 };
            const A = pt.x - p1.x;
            const B = pt.y - p1.y;
            const C = p2.x - p1.x;
            const D = p2.y - p1.y;
            const lenSq = C * C + D * D;
            let param = lenSq !== 0 ? (A * C + B * D) / lenSq : 0;
            param = Math.max(0, Math.min(1, param));
            
            state.ghostCursor = {
              x: p1.x + param * C,
              y: p1.y + param * D
            };
            state.ghostCursorRotation = Math.atan2(D, C);
            state.ghostCursorOnRail = true;
          } else {
            state.ghostCursor = pt;
            state.ghostCursorRotation = 0;
            state.ghostCursorOnRail = false;
          }
        } else if (spec.category !== 'linebar' && spec.icon !== 'line') {
          const zone = state.zones.find(z => isPointInPolygon(pt, z.points));
          if (zone) {
            const zoneLights = state.lights.filter(l => isLightInPolygon(l, zone.points));
            const snap = getPlacementSnap(pt, zoneLights, e.shiftKey);
            state.ghostCursor = { x: snap.x, y: snap.y };
            state.snapGuides = snap.guides;
          }
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
        const imgHTML = spec.image
          ? `<img src="${spec.image}" style="width:36px; height:36px; object-fit:contain; border-radius:4px; margin-right:8px; border:1px solid var(--border); background:#fff;">`
          : '';
        els.lightTooltip.innerHTML = `
          <div style="display:flex; align-items:center;">
            ${imgHTML}
            <div>
              <strong style="font-size:12px; color:var(--text);">${hoveredLight.name}</strong><br>
              <span style="font-size:10px; color:var(--text-dim);">${spec.model || ''} | ${hoveredLight.watt}W${hoveredLight.lumen ? ` | ${hoveredLight.lumen}lm` : ''}${spec.beam ? ` | ${spec.beam}°` : ''}</span>
            </div>
          </div>
        `;
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
        
        // drag all selected (restricting magnetic module fixtures to slide along the nearest rail)
        state.selectedLightIds.forEach(id => {
          const l = state.lights.find(lt => lt.id === id);
          if (l) {
            const spec = fixtureDatabase.find(f => f.id === l.typeId);
            const isMagneticModule = spec && spec.category === 'linebar' && spec.name.includes('등기구');
            
            if (isMagneticModule) {
              let nearestRail = null;
              let minDistance = Infinity;
              const dragPt = { x: pt.x - state.dragOffsetX, y: pt.y - state.dragOffsetY };
              
              for (const r of state.lights) {
                if (r.typeId === 'magnetic-rail' || r.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57') {
                  const dist = distToSegment(dragPt, { x: r.x, y: r.y }, { x: r.x2, y: r.y2 });
                  if (dist < minDistance) {
                    minDistance = dist;
                    nearestRail = r;
                  }
                }
              }
              
              if (nearestRail && minDistance <= 30) {
                const p1 = { x: nearestRail.x, y: nearestRail.y };
                const p2 = { x: nearestRail.x2, y: nearestRail.y2 };
                const A = dragPt.x - p1.x;
                const B = dragPt.y - p1.y;
                const C = p2.x - p1.x;
                const D = p2.y - p1.y;
                const lenSq = C * C + D * D;
                let param = lenSq !== 0 ? (A * C + B * D) / lenSq : 0;
                param = Math.max(0, Math.min(1, param));
                
                l.x = p1.x + param * C;
                l.y = p1.y + param * D;
                l.rotation = Math.atan2(D, C);
              }
            } else {
              l.x += dx;
              l.y += dy;
              if (l.x2 !== undefined && l.y2 !== undefined) {
                l.x2 += dx;
                l.y2 += dy;
              }
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
        
        // 구획 이동 전에 현재 구획 영역 내에 있는 조명들을 먼저 필터링
        const insideLights = state.lights.filter(l => isLightInPolygon(l, zone.points));
        
        // Move all points of the zone polygon
        zone.points.forEach(point => {
          point.x += dx;
          point.y += dy;
        });
        
        // 구획 내의 조명들도 구획의 이동량(dx, dy)만큼 동시 이동
        insideLights.forEach(l => {
          l.x += dx;
          l.y += dy;
          if (l.x2 !== undefined && l.y2 !== undefined) {
            l.x2 += dx;
            l.y2 += dy;
          }
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
      if (specCur && specCur.category === 'direct') {
        // 직부등(유닛/주방등): 수평/수직 방향으로만 스냅 (자유 회전 불가)
        const rawDx = pt.x - state.linebarStart.x;
        const rawDy = pt.y - state.linebarStart.y;
        if (Math.abs(rawDx) >= Math.abs(rawDy)) {
          state.linebarEnd = { x: pt.x, y: state.linebarStart.y };
        } else {
          state.linebarEnd = { x: state.linebarStart.x, y: pt.y };
        }
      } else if (specCur && (specCur.id.includes('gridslot') || specCur.category === 'multi')) {
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
    const wasDraggingVertex = state.draggingVertexIdx !== -1;
    
    state._mouseDownOnLayer = false;
    state._isDraggingCanvas = false;
    state.isPanning = false;
    state.draggingLightId = null;
    state.draggingZoneId = null;
    state.draggingDimensionId = null;
    state.draggingVertexIdx = -1;
    
    if (wasDraggingLight || wasDraggingZone || wasDraggingDimension || wasDraggingVertex) {
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
  // If snap is disabled and shift key is not pressed, just return the point
  if (!state.snapEnabled && !forceSnap) {
    state.snapGuides = [];
    return p2;
  }

  let snapX = p2.x;
  let snapY = p2.y;
  const guides = [];

  const threshold = 15 / state.zoom;
  let snappedX = false;
  let snappedY = false;

  // 1. Point-to-point horizontal/vertical alignment snap (Snaps to any existing vertex in zones)
  if (state.snapEnabled) {
    // Gather all candidate points (zone vertices and active polygon vertices)
    const candidates = [];
    state.zones.forEach(z => {
      if (z.points) candidates.push(...z.points);
    });
    if (state.zonePolygonPoints) {
      candidates.push(...state.zonePolygonPoints);
    }

    for (const cp of candidates) {
      // Don't snap to the exact same position
      if (Math.hypot(p2.x - cp.x, p2.y - cp.y) < 0.1) continue;

      // Check vertical alignment (align X)
      if (!snappedX && Math.abs(p2.x - cp.x) < threshold) {
        snapX = cp.x;
        snappedX = true;
        guides.push({ type: 'v', x: cp.x });
      }
      // Check horizontal alignment (align Y)
      if (!snappedY && Math.abs(p2.y - cp.y) < threshold) {
        snapY = cp.y;
        snappedY = true;
        guides.push({ type: 'h', y: cp.y });
      }
    }
  }

  // 2. Force snap (Shift key) relative to previous point p1
  if (forceSnap && p1) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    if (Math.abs(dx) >= Math.abs(dy)) {
      snapY = p1.y; // horizontal line
      guides.push({ type: 'h', y: p1.y });
    } else {
      snapX = p1.x; // vertical line
      guides.push({ type: 'v', x: p1.x });
    }
  }

  state.snapGuides = guides;
  return { x: snapX, y: snapY };
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

function getClosestPointOnSegment(p, v, w) {
  const l2 = (v.x - w.x)**2 + (v.y - w.y)**2;
  if (l2 === 0) return { x: v.x, y: v.y };
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return {
    x: v.x + t * (w.x - v.x),
    y: v.y + t * (w.y - v.y)
  };
}

function clampPointToPolygon(p, polygonPoints) {
  let minDistance = Infinity;
  let closestPt = { x: p.x, y: p.y };
  let bestSegIndex = -1;

  for (let i = 0; i < polygonPoints.length; i++) {
    const v = polygonPoints[i];
    const w = polygonPoints[(i + 1) % polygonPoints.length];
    const dist = distToSegment(p, v, w);
    if (dist < minDistance) {
      minDistance = dist;
      bestSegIndex = i;
      closestPt = getClosestPointOnSegment(p, v, w);
    }
  }

  if (bestSegIndex !== -1) {
    const v = polygonPoints[bestSegIndex];
    const w = polygonPoints[(bestSegIndex + 1) % polygonPoints.length];
    
    const dx = w.x - v.x;
    const dy = w.y - v.y;
    const len = Math.hypot(dx, dy);
    
    if (len > 0) {
      const nx = -dy / len;
      const ny = dx / len;
      
      // Try offset 15px inside
      const testPt = {
        x: closestPt.x + nx * 15,
        y: closestPt.y + ny * 15
      };
      
      if (isPointInPolygon(testPt, polygonPoints)) {
        return testPt;
      } else {
        return {
          x: closestPt.x - nx * 15,
          y: closestPt.y - ny * 15
        };
      }
    }
  }

  return closestPt;
}

function detectOverlappingLights() {
  // Reset warnings
  state.lights.forEach(l => l.isWarning = false);
  
  // Overlap checking: only warn when 2 or more lights are strictly stacked/overlapping (distance < 2)
  state.zones.forEach(zone => {
    const zoneLights = state.lights.filter(l => {
      if (l.x2 === undefined || l.y2 === undefined) {
        return isLightInPolygon(l, zone.points);
      }
      return false;
    });
    
    for (let i = 0; i < zoneLights.length; i++) {
      for (let j = i + 1; j < zoneLights.length; j++) {
        const l1 = zoneLights[i];
        const l2 = zoneLights[j];
        const dist = Math.hypot(l1.x - l2.x, l1.y - l2.y);
        if (dist < 2) {
          l1.isWarning = true;
          l2.isWarning = true;
        }
      }
    }
  });
}

function findLightAt(x, y) {
  // 1. Prioritize point lights (fixtures placed on rails)
  const pointLight = state.lights.slice().reverse().find(l => {
    if (l.x2 === undefined || l.y2 === undefined) {
      const dx = l.x - x;
      const dy = l.y - y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      return dist <= Math.max(15, getFixtureRenderSize(l.size));
    }
    return false;
  });
  if (pointLight) return pointLight;

  // 2. Fallback to line lights (rails)
  return state.lights.slice().reverse().find(l => {
    if (l.x2 !== undefined && l.y2 !== undefined) {
      return distToSegment({ x, y }, { x: l.x, y: l.y }, { x: l.x2, y: l.y2 }) <= 12;
    }
    return false;
  });
}

function findDimensionAt(x, y) {
  return state.dimensions.find(dim => {
    return distToSegment({ x, y }, dim.start, dim.end) <= (10 / state.zoom);
  });
}

function findControllerMarkerAt(x, y) {
  const hitRadius = 12 / state.zoom;
  return state.controllerMarkers.slice().reverse().find(m => {
    const dx = m.x - x, dy = m.y - y;
    return Math.sqrt(dx * dx + dy * dy) <= hitRadius;
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
function getPlacementSnap(pt, zoneLights, forceSnap = false) {
  if (!state.snapEnabled && !forceSnap) return { x: pt.x, y: pt.y, guides: [] };
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
  
  // Verify click point is inside a zone
  const isInside = state.zones.some(z => isPointInPolygon({ x, y }, z.points));
  if (!isInside) {
    alert("공간 구획 내부 영역에만 설치가 가능합니다.");
    return;
  }

  const spec = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
  if (!spec) return;

  const isMagneticModule = spec.category === 'linebar' && spec.name.includes('등기구');
  let finalX = x;
  let finalY = y;
  let rotation = 0;

  if (isMagneticModule) {
    let placedOnRail = false;
    let targetRail = null;
    
    for (const l of state.lights) {
      if (l.typeId === 'magnetic-rail' || l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57') {
        const dist = distToSegment({ x, y }, { x: l.x, y: l.y }, { x: l.x2, y: l.y2 });
        if (dist <= 15) { // 15px snap tolerance
          placedOnRail = true;
          targetRail = l;
          break;
        }
      }
    }
    
    if (!placedOnRail) {
      alert("마그네틱 레일에 설치해 주세요.");
      return;
    }
    
    if (targetRail) {
      const p = { x, y };
      const p1 = { x: targetRail.x, y: targetRail.y };
      const p2 = { x: targetRail.x2, y: targetRail.y2 };
      
      const A = p.x - p1.x;
      const B = p.y - p1.y;
      const C = p2.x - p1.x;
      const D = p2.y - p1.y;
      
      const dot = A * C + B * D;
      const lenSq = C * C + D * D;
      let param = lenSq !== 0 ? (dot / lenSq) : 0;
      param = Math.max(0, Math.min(1, param));
      
      finalX = p1.x + param * C;
      finalY = p1.y + param * D;
      rotation = Math.atan2(D, C);
    }
  }

  const isOverlap = state.lights.some(l => {
    if (l.x2 === undefined && l.y2 === undefined) {
      const dx = l.x - finalX;
      const dy = l.y - finalY;
      return Math.sqrt(dx*dx + dy*dy) < 5;
    }
    return false;
  });
  if (isOverlap) return;

  const newLight = {
    id: state.nextLightId++,
    typeId: spec.id,
    name: spec.name,
    x: finalX,
    y: finalY,
    watt: spec.watt,
    lumen: spec.lumen,
    color: spec.color,
    size: spec.size,
    price: spec.price,
    rotation: rotation
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
  // Exit or delete zone during vertex editing mode
  if (state.vertexEditingZoneId !== null) {
    if (e.key === 'Escape' || e.key === 'Enter') {
      state.vertexEditingZoneId = null;
      renderAll();
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      e.stopPropagation();
      const zoneId = state.vertexEditingZoneId;
      const zoneToDelete = state.zones.find(z => z.id === zoneId);
      if (zoneToDelete) {
        showConfirm("공간 삭제", `"${zoneToDelete.name}" 공간 구획을 삭제하시겠습니까?`, () => {
          state.lights = state.lights.filter(l => !isLightInPolygon(l, zoneToDelete.points));
          state.zones = state.zones.filter(z => z.id !== zoneId);
          state.vertexEditingZoneId = null;
          recalculateAllZones();
          updateStats();
          renderAll();
          saveStateToHistory();
        });
      }
      return;
    }
  }

  // Reset calibration points when in calibration mode
  if (els.calibrateOverlay && els.calibrateOverlay.style.display === 'flex') {
    if (e.key === 'Escape' || e.key === 'Delete' || e.key === 'Backspace') {
      state.calibrationPoints = [];
      if (els.calibrateStatus) {
        els.calibrateStatus.textContent = "기준선의 시작점을 마우스로 클릭해 주세요.";
      }
      const calibrateSnapHint = document.getElementById('calibrateSnapHint');
      if (calibrateSnapHint) calibrateSnapHint.style.display = 'none';
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
      const targetLights = state.lights.filter(l => state.selectedLightIds.includes(l.id));
      deleteRelatedLights(targetLights);
      const targetIds = targetLights.map(l => l.id);
      state.lights = state.lights.filter(l => !targetIds.includes(l.id));
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
    } else if (state.selectedControllerMarkId !== null) {
      state.controllerMarkers = state.controllerMarkers.filter(m => m.id !== state.selectedControllerMarkId);
      state.selectedControllerMarkId = null;
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
      const targetLights = state.lights.filter(l => state.selectedLightIds.includes(l.id));
      deleteRelatedLights(targetLights);
      const targetIds = targetLights.map(l => l.id);
      state.lights = state.lights.filter(l => !targetIds.includes(l.id));
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
    } else if (state.selectedControllerMarkId !== null) {
      state.controllerMarkers = state.controllerMarkers.filter(m => m.id !== state.selectedControllerMarkId);
      state.selectedControllerMarkId = null;
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

function resetZoneSelectModal() {
  const d1 = document.getElementById('zoneSelectDepth1');
  const d2 = document.getElementById('zoneSelectDepth2');
  if (d1) d1.classList.add('active');
  if (d2) d2.classList.remove('active');

  // Reset selected card
  document.querySelectorAll('.zone-type-card').forEach(c => c.classList.remove('selected'));
  state.selectedTargetLumen = null;
  state.selectedZoneType = null;

  // Reset tags, input, and submit button state
  const tagsContainer = document.getElementById('zoneSuggestTags');
  if (tagsContainer) tagsContainer.innerHTML = '';
  els.zoneNameInput.value = '';
  
  updateSubmitButtonState();
}

function updateSubmitButtonState() {
  const submitBtn = els.btnConfirmZoneSelect;
  if (!submitBtn) return;
  
  if (els.zoneNameInput.value.trim().length > 0) {
    submitBtn.classList.add('ready-to-submit');
  } else {
    submitBtn.classList.remove('ready-to-submit');
  }
}

function renderSuggestTags(zoneType) {
  const tagsContainer = document.getElementById('zoneSuggestTags');
  if (!tagsContainer) return;
  
  tagsContainer.innerHTML = '';
  
  const cozyTags = ['안방/침실', '거실 (휴식용)', '복도'];
  const focusTags = ['주방/부엌', '거실 (작업용)', '서재', '공부방', '화장실', '드레스룸'];
  const tags = zoneType === 'cozy' ? cozyTags : focusTags;
  
  tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'zone-tag-btn';
    btn.textContent = tag;
    btn.type = 'button';
    
    // Check if input value equals tag text to activate it
    if (els.zoneNameInput.value === tag) {
      btn.classList.add('active');
    }
    
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.zone-tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Auto-populate
      const typeForName = tag.split(' ')[0].split('/')[0]; // Simplify name for serial counter
      const autoName = generateNextZoneName(typeForName);
      els.zoneNameInput.value = autoName;
      els.zoneNameInput.focus();
      
      updateSubmitButtonState();
    });
    
    tagsContainer.appendChild(btn);
  });
}

function editZone(zone) {
  state.editingZoneId = zone.id;
  state.tempZoneData = { points: zone.points, areaM2: zone.areaM2, isRect: false };
  
  resetZoneSelectModal();
  els.zoneNameInput.value = zone.name;

  // Set the embedded switch count select box
  const switchSelect = document.getElementById('zoneSwitchCountSelect');
  if (switchSelect) {
    switchSelect.value = String(zone.switchCount || 1);
  }

  // Pre-select Cozy/Focus card depending on targetLumen
  const targetLumen = zone.targetLumen || getTargetLumenPerPyung(zone);
  state.selectedTargetLumen = targetLumen;
  
  if (targetLumen === 700) {
    const cozyCard = document.getElementById('cardCozy');
    if (cozyCard) cozyCard.classList.add('selected');
    state.selectedZoneType = 'cozy';
  } else {
    const focusCard = document.getElementById('cardFocus');
    if (focusCard) focusCard.classList.add('selected');
    state.selectedZoneType = 'focus';
  }
  
  // Transition to Depth 2 directly during editing since we have value
  const d1 = document.getElementById('zoneSelectDepth1');
  const d2 = document.getElementById('zoneSelectDepth2');
  if (d1) d1.classList.remove('active');
  if (d2) d2.classList.add('active');
  renderSuggestTags(state.selectedZoneType);
  updateSubmitButtonState();
  
  els.zoneSelectOverlay.style.display = 'flex';
  els.zoneSelectOverlay.classList.add('visible');
  
  setTimeout(() => {
    els.zoneNameInput.focus();
  }, 50);
}

function openZoneSelectModal(points, areaM2, isRect) {
  state.tempZoneData = { points, areaM2, isRect };
  resetZoneSelectModal();

  // Reset embedded switch count
  const switchSelect = document.getElementById('zoneSwitchCountSelect');
  if (switchSelect) {
    switchSelect.value = "1";
  }
  
  els.zoneSelectOverlay.style.display = 'flex';
  els.zoneSelectOverlay.classList.add('visible');
}

function closeZoneSelectModal() {
  els.zoneSelectOverlay.style.display = 'none';
  els.zoneSelectOverlay.classList.remove('visible');
  state.tempZoneData = null;
  state.editingZoneId = null;
  state.selectedTargetLumen = null;
  state.selectedZoneType = null;
}

function confirmZoneSelection() {
  const name = els.zoneNameInput.value.trim();
  if (!name) {
    alert("공간 이름을 입력하거나 추천 태그를 선택해 주세요.");
    return;
  }
  
  // Read embedded switch count
  const switchSelect = document.getElementById('zoneSwitchCountSelect');
  const switchCount = switchSelect ? parseInt(switchSelect.value, 10) : 1;
  
  if (state.tempZoneData) {
    const { points, areaM2 } = state.tempZoneData;
    state.pendingZoneData = { name, points, areaM2 };
    
    // Hide modal
    els.zoneSelectOverlay.style.display = 'none';
    els.zoneSelectOverlay.classList.remove('visible');
    
    // Bypass the old 3depth modal and create zone instantly
    finishZoneCreation(switchCount);
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
      zone.targetLumen = state.selectedTargetLumen || zone.targetLumen || 1250;
      
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
      switchCount: switchCount || 1,
      targetLumen: state.selectedTargetLumen || 1250
    });
    
    recalculateAllZones();
    updateStats();
    saveStateToHistory();
  }
  
  closeSwitchInputModal();
  resetTools();
  renderAll();
}

function getTargetLumenPerPyung(zone) {
  // If input is an object representing a zone, check its targetLumen attribute first
  if (zone && typeof zone === 'object' && zone.targetLumen) {
    return zone.targetLumen;
  }
  
  // Fallback to text parsing (handles legacy state and string inputs)
  const name = typeof zone === 'string' ? zone.trim() : (zone?.name || '').trim();
  if (name.includes('주방') || name.includes('부엌')) return 1250;
  if (name.includes('메이크업룸')) return 1250;
  if (name.includes('거실')) return 1250;
  if (name.includes('화장실')) return 1250;
  if (name.includes('드레스룸')) return 600;
  if (name.includes('복도')) return 825;
  if (name.includes('침실')) return 825;
  if (name.includes('방')) return 1250;
  return 1250; // default value
}

function setupZoneSelectEvents() {
  // Cozy/Focus selection cards handler
  const cozyCard = document.getElementById('cardCozy');
  const focusCard = document.getElementById('cardFocus');
  const d1 = document.getElementById('zoneSelectDepth1');
  const d2 = document.getElementById('zoneSelectDepth2');

  const selectCard = (type, targetLumen) => {
    state.selectedZoneType = type;
    state.selectedTargetLumen = targetLumen;
    
    cozyCard.classList.remove('selected');
    focusCard.classList.remove('selected');
    
    if (type === 'cozy') cozyCard.classList.add('selected');
    else focusCard.classList.add('selected');
    
    // Transition to Depth 2
    if (d1 && d2) {
      d1.classList.remove('active');
      d2.classList.add('active');
    }
    
    // Generate recommended tags for Depth 2
    renderSuggestTags(type);
    updateSubmitButtonState();
    
    setTimeout(() => {
      els.zoneNameInput.focus();
    }, 150);
  };

  if (cozyCard) {
    cozyCard.addEventListener('click', (e) => {
      e.stopPropagation();
      selectCard('cozy', 700);
    });
  }

  if (focusCard) {
    focusCard.addEventListener('click', (e) => {
      e.stopPropagation();
      selectCard('focus', 1250);
    });
  }

  // Back to Depth 1 button (Figma arrow type)
  const btnBack = document.getElementById('btnBackToDepth1');
  if (btnBack) {
    btnBack.addEventListener('click', (e) => {
      e.stopPropagation();
      if (d1 && d2) {
        d2.classList.remove('active');
        d1.classList.add('active');
      }
    });
  }

  // Cancel and Close buttons (X button)
  const btnClose = document.getElementById('btnCloseZoneSelect');
  if (btnClose) {
    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeZoneSelectModal();
      resetTools();
      renderAll();
    });
  }

  // Confirm button handler
  els.btnConfirmZoneSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    confirmZoneSelection();
  });

  // Track manual text typing to update the submit button visual state
  els.zoneNameInput.addEventListener('input', () => {
    updateSubmitButtonState();
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
    
    // Auto calculate SMPS & Controllers (Exception: exclude magnetic rails & fixtures as their BOM contains their own converter/controller)
    const iotLights = insideLights.filter(l => {
      const spec = fixtureDatabase.find(f => f.id === l.typeId);
      const isMagnetic = spec && (spec.id === 'magnetic-rail' || spec.id === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57' || (spec.name && spec.name.includes('마그네틱')));
      return spec && spec.productLine === 'zibis_iot' && !isMagnetic;
    });

    if (iotLights.length === 0) {
      zone.requiredSMPS = [];
      zone.requiredControllers = [];
    } else {
      const iotWatt = iotLights.reduce((sum, l) => sum + l.watt, 0);
      const effectiveWatt = iotWatt > 0 ? iotWatt : 1; // IoT 조명은 있는데 watt 합이 0인 예외 상황 대비
      zone.requiredSMPS = calculateRequiredSMPS(effectiveWatt);

      const uniqueCategories = [...new Set(iotLights.map(l => {
        const spec = fixtureDatabase.find(f => f.id === l.typeId);
        return spec ? spec.category : null;
      }).filter(Boolean))];

      let categoriesToDistribute = uniqueCategories;
      if (categoriesToDistribute.length === 0) {
        categoriesToDistribute = ['downlight']; // IoT 조명은 있는데 카테고리 매칭이 안 된 예외 상황 대비
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
    }
  });

  // IoT 조명이 프로젝트 전체에 1개라도 설치되면 허브 1개 자동 추가 (존 단위가 아닌 프로젝트 단위)
  state.requiredHub = state.lights.some(l => {
    const spec = fixtureDatabase.find(f => f.id === l.typeId);
    return spec && spec.productLine === 'zibis_iot';
  });

  // Detect overlapping lights across all zones
  detectOverlappingLights();

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
        <div style="display: flex; gap: 4px; align-items: center;">
          <button class="zone-edit-btn" data-zone-id="${zone.id}" title="공간 편집" style="background:none; border:none; color:var(--text-dim); cursor:pointer; display:inline-flex; align-items:center; padding:2px; border-radius:4px; transition: color 0.15s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
          <button class="zone-delete-btn" data-zone-id="${zone.id}" title="공간 삭제" style="background:none; border:none; color:var(--text-dim); cursor:pointer; display:inline-flex; align-items:center; padding:2px; border-radius:4px; transition: color 0.15s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
              <path d="M10 11v6"/>
              <path d="M14 11v6"/>
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
            </svg>
          </button>
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

    const editBtn = item.querySelector('.zone-edit-btn');
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      editZone(zone);
    });

    const deleteBtn = item.querySelector('.zone-delete-btn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showConfirm("공간 삭제", `"${zone.name}" 공간 구획을 삭제하시겠습니까?`, () => {
        state.lights = state.lights.filter(l => !isLightInPolygon(l, zone.points));
        state.zones = state.zones.filter(z => z.id !== zone.id);
        recalculateAllZones();
        updateStats();
        renderAll();
        saveStateToHistory();
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
    const isMagRail = l.typeId === 'magnetic-rail' || l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57';
    if (isMagRail) {
      const dx = l.x2 - l.x;
      const dy = l.y2 - l.y;
      const lenPx = Math.sqrt(dx*dx + dy*dy);
      const lenM = state.pixelsPerMeter > 0 ? (lenPx / state.pixelsPerMeter) : 0;
      
      const subItems = getMagneticRailBOM(lenM);
      subItems.forEach(item => {
        const subId = item.type;
        if (!groups[subId]) {
          groups[subId] = {
            name: item.name,
            category: 'linebar',
            watt: 0,
            lumen: 0,
            price: item.price,
            qty: 0,
            isLinebar: true
          };
        }
        groups[subId].qty += item.qty;
      });
    } else {
      if (!groups[l.typeId]) {
        const spec = fixtureDatabase.find(f => f.id === l.typeId);
        const isLine = spec && (spec.category === 'linebar' || spec.icon === 'line');
        const currentPrice = spec ? spec.price : (l.price || 0); // 항상 최신 가격테이블 기준
        groups[l.typeId] = {
          name: l.name,
          category: spec ? spec.category : '',
          productLine: spec ? spec.productLine : null,
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
  
  // Group keys for magnetic rail system
  const groupKeys = ['rail-2m', 'magnetic-converter', 'magnetic-controller', 'magnetic-connector', 'magnetic-powerline'];
  
  // Check if magnetic system is active in BOM
  const hasMagneticSystem = groupKeys.some(key => groups[key] && groups[key].qty > 0);
  
  // Show / hide magnetic rail toast
  const toast = document.getElementById('bomToastMessage');
  if (toast) {
    if (hasMagneticSystem && !state.magneticRailToastShown) {
      toast.style.display = 'flex';
    } else {
      toast.style.display = 'none';
    }
  }

  // Calculate magnetic system group totals if active
  let magneticGroupTotalCost = 0;
  let magneticGroupTotalWatt = 0;
  let magneticGroupTotalLumen = 0;
  let magneticGroupRailQty = 0;
  
  if (hasMagneticSystem) {
    groupKeys.forEach(key => {
      const item = groups[key];
      if (item) {
        magneticGroupTotalCost += item.price * item.qty;
        magneticGroupTotalWatt += item.watt;
        magneticGroupTotalLumen += item.lumen;
        if (key === 'rail-2m') {
          magneticGroupRailQty = item.qty;
        }
      }
    });
    totalCost += magneticGroupTotalCost;
  }

  // Helper for type labels (direct/sensor는 라인에 따라 명칭이 다름)
  function getFixtureTypeLabel(category, productLine) {
    if (category === 'downlight') return '매입 다운라이트';
    if (category === 'linebar') return '라인/마그네틱';
    if (category === 'multi') return '멀티매입등';
    if (category === 'roomlight') return '방등/거실등';
    if (category === 'direct') return productLine === 'zibis_general' ? '현관/베란다등' : '메인등';
    if (category === 'sensor') return '센서등';
    if (category === 'smarthome') return '스마트홈 기기';
    if (category === 'etc') return '기타';
    return '조명';
  }

  // 1. Render Group (Magnetic System) if active
  if (hasMagneticSystem) {
    const isExpanded = state.expandedBOMGroups && state.expandedBOMGroups['magnetic-system'];
    const groupTr = document.createElement('tr');
    groupTr.style.backgroundColor = 'rgba(0, 112, 243, 0.04)';
    groupTr.style.borderLeft = '3px solid var(--accent)';
    groupTr.innerHTML = `
      <td>
        <div style="display:flex; align-items:center; gap:8px; cursor:pointer; user-select:none;" onclick="toggleBOMGroup('magnetic-system')">
          <span style="font-size:10px; color:var(--accent); transition: transform 0.15s ease; display:inline-block; transform: ${isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'};">▶</span>
          <strong>마그네틱 레일 시스템 (부자재 포함)</strong>
        </div>
      </td>
      <td>라인/마그네틱</td>
      <td>${magneticGroupTotalWatt > 0 ? magneticGroupTotalWatt + 'W' : '-'}</td>
      <td>${magneticGroupTotalLumen > 0 ? magneticGroupTotalLumen + ' lm' : '-'}</td>
      <td>레일 ${magneticGroupRailQty}개 + 부자재</td>
      <td><strong>₩${magneticGroupTotalCost.toLocaleString()}</strong></td>
      <td>
        <button class="btn" style="height:28px; padding:0 8px; font-size:10px; background-color:var(--danger); border-color:var(--danger); color:#fff;" onclick="deleteBOMFixture('rail-2m')">삭제</button>
      </td>
    `;
    els.bomTableBody.appendChild(groupTr);
    
    // If expanded, render sub-items
    if (isExpanded) {
      groupKeys.forEach(key => {
        const g = groups[key];
        if (g && g.qty > 0) {
          const cost = g.price * g.qty;
          const subTr = document.createElement('tr');
          subTr.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
          subTr.style.borderLeft = '3px solid var(--accent)';
          subTr.style.opacity = '0.85';
          subTr.innerHTML = `
            <td style="padding-left: 28px; color: var(--text-dim);">
              <span style="color: var(--accent); margin-right: 6px; font-weight: bold;">└</span> ${g.name}
            </td>
            <td style="color: var(--text-dim); font-size: 12px;">부자재</td>
            <td style="color: var(--text-dim); font-size: 12px;">${g.watt > 0 ? g.watt + 'W' : '-'}</td>
            <td style="color: var(--text-dim); font-size: 12px;">${g.lumen > 0 ? g.lumen + ' lm' : '-'}</td>
            <td style="color: var(--text-dim); font-size: 12px;">${g.qty}개</td>
            <td style="color: var(--text-dim); font-size: 12px;">₩${cost.toLocaleString()}</td>
            <td>
              <span style="font-size:11px;color:var(--text-dim);">자동 배정</span>
            </td>
          `;
          els.bomTableBody.appendChild(subTr);
        }
      });
    }
  }

  // 2. Render other main lights (excluding group items)
  entries.forEach(([typeId, g]) => {
    if (groupKeys.includes(typeId)) return; // Skip group items as they are rendered above
    
    const cost = g.price * g.qty;
    totalCost += cost;
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${g.name}</strong></td>
      <td>${getFixtureTypeLabel(g.category, g.productLine)}</td>
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
    return getDBConverterPrice(cap);
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
        const ctrlPrice = getDBControllerPrice();
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

  // 2.3 허브 (프로젝트 전체에 IoT 조명이 1개라도 있으면 1개, 존 필터가 "전체"일 때만 노출)
  if (state.bomFilterZoneId === null && state.requiredHub) {
    const hubPrice = getDBProductPrice('허브', 200000);
    totalCost += hubPrice;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>허브</strong></td>
      <td>허브</td>
      <td>-</td>
      <td>-</td>
      <td>1개</td>
      <td><strong>₩${hubPrice.toLocaleString()}</strong></td>
      <td>
        <span style="font-size:11px;color:var(--text-dim);">자동 배정</span>
      </td>
    `;
    els.bomTableBody.appendChild(tr);
  }

  // 3. Render total cost row
  const totalTr = document.createElement('tr');
  totalTr.style.borderTop = '2px solid var(--border)';
  if (authUser) {
    totalTr.innerHTML = `
      <td colspan="5" style="text-align:right; font-weight:700; font-size:13px;">총 예상 비용:</td>
      <td colspan="2" style="font-weight:800; font-size:14px; color:var(--accent);">₩${totalCost.toLocaleString()}</td>
    `;
  } else {
    totalTr.innerHTML = `
      <td colspan="5" style="text-align:right; font-weight:700; font-size:13px;">총 예상 비용:</td>
      <td colspan="2">
        <button id="btnBomSignupGate" style="background:var(--accent); color:#fff; border:none; border-radius:6px; padding:6px 12px; font-size:11px; font-weight:700; cursor:pointer; white-space:nowrap;">회원가입하고 확인하기</button>
      </td>
    `;
  }
  els.bomTableBody.appendChild(totalTr);

  if (!authUser) {
    const btnBomSignupGate = document.getElementById('btnBomSignupGate');
    const signupOverlay = document.getElementById('signupOverlay');
    if (btnBomSignupGate && signupOverlay) {
      btnBomSignupGate.onclick = () => { signupOverlay.style.display = 'flex'; };
    }
  }
}

function deleteRelatedLights(lightsToDelete) {
  const rails = lightsToDelete.filter(l => l.typeId === 'magnetic-rail' || l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57');
  if (rails.length > 0) {
    const remainingLights = state.lights.filter(l => !lightsToDelete.some(dl => dl.id === l.id));
    const modulesToDelete = remainingLights.filter(l => {
      const spec = fixtureDatabase.find(f => f.id === l.typeId);
      const isMagneticModule = spec && spec.category === 'linebar' && spec.name.includes('등기구');
      if (isMagneticModule) {
        return rails.some(r => {
          const dist = distToSegment(l, { x: r.x, y: r.y }, { x: r.x2, y: r.y2 });
          return dist <= 15;
        });
      }
      return false;
    });
    lightsToDelete.push(...modulesToDelete);
  }
}

// Global scope helper for deleting lights of a certain type
window.deleteBOMFixture = function(typeId) {
  showConfirm("조명 삭제", "선택하신 모델의 모든 조명을 도면에서 삭제하시겠습니까?", () => {
    let targetLights = [];
    if (typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57' || typeId === 'magnetic-rail' || typeId === 'rail-2m' || typeId === 'rail-3m') {
      targetLights = state.lights.filter(l => l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57' || l.typeId === 'magnetic-rail');
    } else {
      targetLights = state.lights.filter(l => l.typeId === typeId);
    }
    
    deleteRelatedLights(targetLights);
    const targetIds = targetLights.map(l => l.id);
    state.lights = state.lights.filter(l => !targetIds.includes(l.id));
    
    state.selectedLightIds = [];
    recalculateAllZones();
    updateStats();
    saveStateToHistory();
    renderAll();
  });
};

window.toggleBOMGroup = function(groupId) {
  state.expandedBOMGroups = state.expandedBOMGroups || {};
  state.expandedBOMGroups[groupId] = !state.expandedBOMGroups[groupId];
  renderBOMTable();
};

window.dismissBOMToast = function() {
  state.magneticRailToastShown = true;
  const toast = document.getElementById('bomToastMessage');
  if (toast) toast.style.display = 'none';
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

function updateSliderBackground(val) {
  if (els.heatmapOpacitySlider) {
    const percent = (val / 50) * 100;
    els.heatmapOpacitySlider.style.background = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${percent}%, rgba(255, 255, 255, 0.15) ${percent}%, rgba(255, 255, 255, 0.15) 100%)`;
  }
}

function renderAll() {
  if (!state.uploadedImage) return;

  if (els.heatmapOpacitySlider) {
    const val = Math.round(state.heatmapOpacity * 100);
    els.heatmapOpacitySlider.value = val;
    updateSliderBackground(val);
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
    
    // Use state.heatmapOpacity dynamically
    const op = state.heatmapOpacity;
    let fillColor = `rgba(255, 59, 48, ${op})`; // 부족 - red
    if (zoneLumenPerPyeong >= zoneMax) fillColor = `rgba(52, 199, 89, ${op})`; // 충분 - green
    else if (zoneLumenPerPyeong >= zoneTarget) fillColor = `rgba(242, 162, 0, ${op})`; // 적당 - yellow

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

    // Draw vertex handles for active editing mode
    if (state.vertexEditingZoneId === zone.id) {
      zone.points.forEach((pt, idx) => {
        ctx.save();
        ctx.beginPath();
        const isDraggingThis = state.draggingVertexIdx === idx;
        const radius = isDraggingThis ? 8 : 6;
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = isDraggingThis ? '#ffffff' : '#007ce4';
        ctx.lineWidth = isDraggingThis ? 3 : 2;
        ctx.stroke();
        ctx.restore();
      });
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
        const isMagnetic = l.typeId === 'magnetic-rail' || l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57';
        const outerW = isMagnetic ? 5 : 8;
        const innerW = isMagnetic ? 2.5 : 4;
        
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x2, l.y2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = outerW;
        ctx.lineCap = 'round';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 6;
        ctx.stroke();
        
        // 3. Draw inner colored core
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x2, l.y2);
        ctx.strokeStyle = l.color;
        ctx.lineWidth = innerW;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 0; // reset shadow
        ctx.stroke();
      }
    } else {
      const spec = fixtureDatabase.find(f => f.id === l.typeId);
      const isMagneticModule = spec && spec.category === 'linebar' && spec.name.includes('등기구') && /L\d+/.test(spec.name);
      const isRoomLight = spec && spec.category === 'roomlight';
      const isDirectLight = spec && (spec.category === 'direct' || spec.category === 'sensor');

      if (isMagneticModule) {
        const lenPx = state.pixelsPerMeter > 0 ? ((spec.length || 300) / 1000) * state.pixelsPerMeter : 15;
        const wPx = state.pixelsPerMeter > 0 ? (22 / 1000) * state.pixelsPerMeter : 4;
        
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.rotation || 0);
        
        // Selection glow
        if (isSelected) {
          ctx.beginPath();
          ctx.rect(-lenPx / 2 - 3, -wPx / 2 - 3, lenPx + 6, wPx + 6);
          ctx.fillStyle = 'rgba(242, 162, 0, 0.3)';
          ctx.fill();
        }
        
        // Body (blue)
        ctx.beginPath();
        ctx.rect(-lenPx / 2, -wPx / 2, lenPx, wPx);
        ctx.fillStyle = l.color || '#007AFF';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        
        // Emitting core (white)
        ctx.beginPath();
        ctx.rect(-lenPx / 2 + 2, -wPx / 2 + 1.5, lenPx - 4, wPx - 3);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        ctx.restore();
      } else if (isRoomLight) {
        // Draw flat panel room light to scale
        const wM = spec.widthMM ? (spec.widthMM / 1000) : 0.62;
        const hM = spec.lengthMM ? (spec.lengthMM / 1000) : 0.62;
        const wPx = wM * state.pixelsPerMeter;
        const hPx = hM * state.pixelsPerMeter;
        
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.rotation || 0);
        
        // Draw selection glow
        if (isSelected) {
          ctx.beginPath();
          ctx.rect(-hPx / 2 - 4, -wPx / 2 - 4, hPx + 8, wPx + 8);
          ctx.fillStyle = 'rgba(242, 162, 0, 0.3)';
          ctx.fill();
        }
        
        // Outer body (white panel with colored border and shadow)
        ctx.beginPath();
        ctx.rect(-hPx / 2, -wPx / 2, hPx, wPx);
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = l.color || '#FF2D55';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        ctx.stroke();
        
        // Diffuser core
        ctx.beginPath();
        ctx.rect(-hPx / 2 + 4, -wPx / 2 + 4, hPx - 8, wPx - 8);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
        
        // Inner frame
        ctx.strokeStyle = 'rgba(0,0,0,0.06)';
        ctx.lineWidth = 1;
        ctx.strokeRect(-hPx / 2 + 8, -wPx / 2 + 8, hPx - 16, wPx - 16);
        
        ctx.restore();
      } else if (isDirectLight) {
        // 직부등 (방등/유닛/주방등): 실제 사이즈 고정 + 블루 컬러 렉트, 회전값 반영
        const wM = spec.widthMM ? (spec.widthMM / 1000) : 0.32;
        const hM = spec.lengthMM ? (spec.lengthMM / 1000) : 0.62;
        const wPx = wM * state.pixelsPerMeter;
        const hPx = hM * state.pixelsPerMeter;

        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.rotation || 0);

        if (spec.isRound) {
          // 원형 직부/센서 조명: 지름 기준 원형 렌더링
          const radiusPx = hPx / 2;
          if (isSelected) {
            ctx.beginPath();
            ctx.arc(0, 0, radiusPx + 4, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(242, 162, 0, 0.3)';
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(0, 0, radiusPx, 0, 2 * Math.PI);
          ctx.fillStyle = l.color || '#007AFF';
          ctx.shadowColor = 'rgba(0,0,0,0.4)';
          ctx.shadowBlur = 5;
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(0, 0, radiusPx - 4, 0, 2 * Math.PI);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.fill();
        } else {
          if (isSelected) {
            ctx.beginPath();
            ctx.rect(-hPx / 2 - 4, -wPx / 2 - 4, hPx + 8, wPx + 8);
            ctx.fillStyle = 'rgba(242, 162, 0, 0.3)';
            ctx.fill();
          }

          // Body (blue, 지정 컬러 고정)
          ctx.beginPath();
          ctx.rect(-hPx / 2, -wPx / 2, hPx, wPx);
          ctx.fillStyle = l.color || '#007AFF';
          ctx.shadowColor = 'rgba(0,0,0,0.4)';
          ctx.shadowBlur = 5;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Diffuser core (밝은 안쪽 패널)
          ctx.beginPath();
          ctx.rect(-hPx / 2 + 4, -wPx / 2 + 4, hPx - 8, wPx - 8);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
          ctx.fill();
        }

        ctx.restore();
      } else {
        // Draw selection outer glow
        // Draw selection outer glow or warning glow
        const rs = getFixtureRenderSize(l.size);
        if (l.isWarning) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(l.x, l.y, rs + 8, 0, 2 * Math.PI);
          ctx.fillStyle = 'rgba(255, 59, 48, 0.25)'; // Red Warning Aura
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 59, 48, 0.7)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.restore();
        } else if (isSelected) {
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

  // 컨트롤러 설치 위치 표시 (선택 사항, BOM/가격에 영향 없는 주석)
  // interactionLayer에 그리는 이유: captureMergedFloorplan()이 이 레이어는 포함하지 않으므로
  // 상담 신청 시 캡처되는 도면 사진에 마커가 영구적으로 찍혀버리는 걸 방지
  if (state.controllerMarkers && state.controllerMarkers.length > 0) {
    state.controllerMarkers.forEach(m => {
      const isSelected = state.selectedControllerMarkId === m.id;
      if (isSelected) {
        ctx.beginPath();
        ctx.arc(m.x, m.y, 16, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(242, 162, 0, 0.3)';
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(m.x, m.y, 11, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(m.x, m.y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = '#10b981';
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('C', m.x, m.y + 0.5);
    });
    ctx.textBaseline = 'alphabetic';
  }

  // 1. Ghost placement pointer
  if (state.activeTool === 'place' && state.isDrawingLinebar && state.linebarStart && state.linebarEnd) {
    ctx.globalAlpha = 0.8;
    const spec = fixtureDatabase.find(f => f.id === state.selectedFixtureId);
    
    if (spec && spec.category === 'direct') {
      // 직부등(유닛/주방등): 실제 사이즈 고정 렉트 + 회전 프리뷰
      const dx = state.linebarEnd.x - state.linebarStart.x;
      const dy = state.linebarEnd.y - state.linebarStart.y;
      const angle = Math.atan2(dy, dx);
      const lenM = (spec.lengthMM || 620) / 1000;
      const wM = (spec.widthMM || 320) / 1000;
      const lenPx = lenM * state.pixelsPerMeter;
      const wPx = wM * state.pixelsPerMeter;

      ctx.save();
      ctx.translate(state.linebarStart.x, state.linebarStart.y);
      ctx.rotate(angle);

      ctx.fillStyle = spec.color;
      ctx.fillRect(-lenPx / 2, -wPx / 2, lenPx, wPx);

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-lenPx / 2, -wPx / 2, lenPx, wPx);

      // 방향 화살표 (중심 -> 진행 방향)
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(lenPx / 2 - 6, 0);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = 1;
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`${spec.lengthMM}×${spec.widthMM}mm`, state.linebarStart.x, state.linebarStart.y - wPx / 2 - 10);
      ctx.restore();

      // 앵커 점
      ctx.beginPath();
      ctx.arc(state.linebarStart.x, state.linebarStart.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    } else if (spec && (spec.id.includes('gridslot') || spec.category === 'multi')) {
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
      const isMagnetic = state.selectedFixtureId === 'magnetic-rail' || state.selectedFixtureId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57';
      const outerW = isMagnetic ? 5 : 8;
      const innerW = isMagnetic ? 2.5 : 4;

      ctx.beginPath();
      ctx.moveTo(state.linebarStart.x, state.linebarStart.y);
      ctx.lineTo(state.linebarEnd.x, state.linebarEnd.y);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = outerW;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(state.linebarStart.x, state.linebarStart.y);
      ctx.lineTo(state.linebarEnd.x, state.linebarEnd.y);
      ctx.strokeStyle = spec ? spec.color : '#22cc22';
      ctx.lineWidth = innerW;
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
      } else if (spec.category === 'linebar' && spec.name.includes('등기구')) {
        const isModule = /L\d+/.test(spec.name);
        
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.translate(state.ghostCursor.x, state.ghostCursor.y);
        ctx.rotate(state.ghostCursorRotation || 0);
        
        if (isModule) {
          const lenPx = state.pixelsPerMeter > 0 ? ((spec.length || 300) / 1000) * state.pixelsPerMeter : 15;
          const wPx = state.pixelsPerMeter > 0 ? (22 / 1000) * state.pixelsPerMeter : 4;
          ctx.beginPath();
          ctx.rect(-lenPx / 2, -wPx / 2, lenPx, wPx);
          ctx.fillStyle = state.ghostCursorOnRail ? (spec.color || '#007AFF') : 'rgba(255, 59, 48, 0.7)';
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          const rs = getFixtureRenderSize(spec.size || 30);
          ctx.beginPath();
          ctx.arc(0, 0, rs / 2, 0, 2 * Math.PI);
          ctx.fillStyle = state.ghostCursorOnRail ? (spec.color || '#007AFF') : 'rgba(255, 59, 48, 0.7)';
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
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

  // Draw snap guide lines for all drawing tools
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
      }
    }
    ctx.restore();
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
    controllerMarkers: state.controllerMarkers,
    nextLightId: state.nextLightId,
    nextZoneId: state.nextZoneId,
    nextDimId: state.nextDimId,
    nextControllerMarkId: state.nextControllerMarkId
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
    // 불러온 조명의 name/price/typeId를 fixtureDatabase 최신 정보로 갱신
    state.lights = (data.lights || []).map(l => {
      let spec = fixtureDatabase.find(f => f.id === l.typeId);
      if (!spec && l.name) {
        spec = fixtureDatabase.find(f => f.name === l.name);
      }
      // 카탈로그 개편(예: 색상별 품목 분리)으로 이름이 완전히 일치하지 않는 경우를 대비한 보조 매칭.
      // fixtureDatabase는 init()에서 이미 정렬되어 있어 동일 접두사 후보 중 항상 같은 항목이 결정적으로 선택된다.
      if (!spec && l.name) {
        spec = fixtureDatabase.find(f => f.name && f.name.startsWith(l.name));
      }
      return spec ? { ...l, typeId: spec.id, name: spec.name, price: spec.price } : l;
    });
    state.zones = data.zones || [];
    state.bomFilterZoneId = null;
    
    // Add default switch count if not present
    state.zones.forEach(z => {
      if (z.switchCount === undefined) z.switchCount = 1;
    });

    state.dimensions = data.dimensions || [];
    state.controllerMarkers = data.controllerMarkers || [];
    state.nextLightId = data.nextLightId || 1;
    state.nextZoneId = data.nextZoneId || 1;
    state.nextDimId = data.nextDimId || 1;
    state.nextControllerMarkId = data.nextControllerMarkId || 1;

    if (els.ceilingHeightInput) els.ceilingHeightInput.value = state.ceilingHeight;
    if (els.lblCeilingHeight) els.lblCeilingHeight.textContent = state.ceilingHeight.toFixed(1);

    setUploadOverlayVisible(false);
    initCanvasDimensions(img.width, img.height);
    setTopbarVisible(true);
    recalculateAllZones();
    updateStats();
    resetHistory({
      lights: JSON.parse(JSON.stringify(state.lights)),
      zones: JSON.parse(JSON.stringify(state.zones)),
      dimensions: JSON.parse(JSON.stringify(state.dimensions)),
      controllerMarkers: JSON.parse(JSON.stringify(state.controllerMarkers))
    });
    renderAll();
  };
  img.src = data.imageBase64;
}

// ==================== IMAGE EXPORT (PNG COMBINED RENDERING) ====================
// ==================== EXCEL REPORT EXPORT (COMBINED EXCELJS) ====================
async function exportToExcel() {
  if (!state.uploadedImage) return;

  let projectName = '나의 조명 설계';
  if (authUser) {
    const userInput = prompt('저장할 프로젝트/견적 이름을 입력해주세요:', '나의 조명 설계');
    if (userInput === null) return; // Cancel if user hits cancel
    projectName = userInput.trim() || '나의 조명 설계';
  }

  // 합계 행(B:H 병합 셀)의 행 번호 — 로컬 다운로드본에서 품번 열(C)을 지울 때 이 행들은 건드리지 않기 위함
  // (병합 셀의 비-마스터 셀 값을 지우면 마스터 셀 값까지 같이 사라지는 문제가 있었음)
  const totalRowNumbers = [];

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
    { key: 'C', width: 18 }, // 품번 (이카운트 ERP)
    { key: 'D', width: 35 }, // 조명 모델 / 자재명
    { key: 'E', width: 18 }, // 구분 (타입)
    { key: 'F', width: 14 }, // 소비전력 (W)
    { key: 'G', width: 14 }, // 총 와트수
    { key: 'H', width: 12 }, // 배치 수량
    { key: 'I', width: 16 }  // 예상 금액
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
    if (l.typeId === 'magnetic-rail' || l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57') {
      const dx = l.x2 - l.x;
      const dy = l.y2 - l.y;
      const lenPx = Math.sqrt(dx*dx + dy*dy);
      const lenM = state.pixelsPerMeter > 0 ? (lenPx / state.pixelsPerMeter) : 0;
      
      const subItems = getMagneticRailBOM(lenM);
      subItems.forEach(item => {
        const subId = item.type;
        if (!allProducts[subId]) {
          allProducts[subId] = {
            name: item.name,
            type: item.typeLabel,
            color: null,
            price: item.price,
            ecountProdCd: item.ecountProdCd || null,
            qty: 0,
            isLine: true,
            totalWatt: 0,
            totalLumen: 0
          };
        }
        allProducts[subId].qty += item.qty;
      });
    } else {
      if (!allProducts[l.typeId]) {
        const spec = fixtureDatabase.find(f => f.id === l.typeId);
        const catLabel = !spec ? '조명'
          : spec.category === 'downlight' ? '매입 다운라이트'
          : spec.category === 'linebar'   ? '라인/마그네틱'
          : spec.category === 'multi'     ? '멀티매입등'
          : spec.category === 'roomlight' ? '방등/거실등'
          : spec.category === 'direct'    ? (spec.productLine === 'zibis_general' ? '현관/베란다등' : '메인등')
          : spec.category === 'sensor'    ? '센서등'
          : spec.category === 'smarthome' ? '스마트홈 기기'
          : spec.category === 'etc'       ? '기타'
          : '조명';
        const currentPrice = spec ? spec.price : (l.price || 0); // 최신 가격테이블 기준
        allProducts[l.typeId] = {
          name: l.name,
          type: catLabel,
          color: spec ? spec.color : null,
          price: currentPrice,
          ecountProdCd: spec ? (spec.ecountProdCd || null) : null,
          qty: 0,
          isLine: spec && (spec.category === 'linebar' || spec.icon === 'line'),
          totalWatt: 0,
          totalLumen: 0,
          totalLengthM: 0
        };
      }
      allProducts[l.typeId].qty++;
      if (allProducts[l.typeId].isLine) {
        allProducts[l.typeId].totalWatt += l.watt;
        allProducts[l.typeId].totalLumen += l.lumen;
        if (l.x2 !== undefined && l.y2 !== undefined && state.pixelsPerMeter > 0) {
          allProducts[l.typeId].totalLengthM += Math.sqrt((l.x2 - l.x) ** 2 + (l.y2 - l.y) ** 2) / state.pixelsPerMeter;
        }
      }
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
        const smpsPrice = getDBConverterPrice(capNum);
        if (!allProducts[smpsId]) {
          allProducts[smpsId] = {
            name: `컨버터 ${capNum}W IoT`,
            type: '안정기 (SMPS)',
            color: null,
            price: smpsPrice,
            ecountProdCd: getDBConverterProdCd(capNum),
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
            price: getDBControllerPrice(),
            ecountProdCd: getDBControllerProdCd(),
            qty: 0,
            isLine: false
          };
        }
        allProducts[ctrlId].qty += qty;
      });
    }
  });

  // 5.3 허브 (프로젝트 전체에 IoT 조명이 1개라도 있으면 1개, 존 단위 아님)
  if (state.requiredHub) {
    allProducts['hub'] = {
      name: '허브',
      type: '허브',
      color: null,
      price: getDBProductPrice('허브', 200000),
      ecountProdCd: getDBProductProdCd('허브'),
      qty: 1,
      isLine: false
    };
  }

  // Helper to format cells
  function applyRowStyles(row, isItalic) {
    for (let c = 2; c <= 9; c++) {
      const cell = row.getCell(c);
      cell.font = { name: 'Malgun Gothic', size: 10, italic: isItalic };
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        left: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        right: { style: 'thin', color: { argb: 'FFE0E0E0' } }
      };
      if (c === 2 || c === 4) {
        cell.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
      } else if (c === 9) {
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
  worksheet.mergeCells(`B${tableStartRow}:I${tableStartRow}`);
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
  
  const summaryHeaders = ['제품 컬러', '품번', '제품명 / 자재명', '구분 (타입)', '단가 (원)', '총 주문 수량', '비고', '총 합계 금액'];
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
    
    row.getCell(3).value = p.ecountProdCd || '-';
    row.getCell(4).value = p.name;
    row.getCell(5).value = p.type;
    row.getCell(6).value = p.price;
    row.getCell(6).numFmt = '#,##0';
    row.getCell(7).value = p.qty;

    // Remarks
    let remarkVal = '-';
    if (p.isLine) {
      remarkVal = `총 ${(p.totalLengthM || 0).toFixed(1)}m (${p.totalWatt}W, ${p.totalLumen} lm)`;
    } else if (p.price === 0) {
      remarkVal = '포함 자재';
    }
    row.getCell(8).value = remarkVal;

    row.getCell(9).value = rowCost;
    row.getCell(9).numFmt = '#,##0';

    for (let c = 2; c <= 9; c++) {
      const cell = row.getCell(c);
      if (c === 2 && p.color) {
        const cleanColor = p.color.replace('#', '');
        cell.font = { name: 'Malgun Gothic', size: 14, color: { argb: 'FF' + cleanColor } };
      } else if (c === 9) {
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
      if (c === 4) {
        cell.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
      } else if (c === 9) {
        cell.alignment = { vertical: 'middle', horizontal: 'right' };
      } else {
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      }
    }
    currentRowNum++;
  });
  
  // Aggregate summary row for consolidated order
  totalRowNumbers.push(currentRowNum);
  const aggTotalRow = worksheet.getRow(currentRowNum);
  aggTotalRow.height = 30;
  worksheet.mergeCells(`B${currentRowNum}:H${currentRowNum}`);

  const aggLabelCell = aggTotalRow.getCell(2);
  aggLabelCell.value = '제품 주문 총 예상 합계:';
  aggLabelCell.font = { name: 'Malgun Gothic', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
  aggLabelCell.alignment = { vertical: 'middle', horizontal: 'right' };
  aggLabelCell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F2233' }
  };

  for (let col = 2; col <= 8; col++) {
    aggTotalRow.getCell(col).border = {
      top: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      bottom: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      left: col === 2 ? { style: 'thin', color: { argb: 'FF44475A' } } : undefined,
      right: col === 8 ? { style: 'thin', color: { argb: 'FF44475A' } } : undefined
    };
  }

  // 총 합계 금액 열(I)에 제품 주문 총 예상 합계 값을 배치
  const aggValueCell = aggTotalRow.getCell(9);
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
    left: { style: 'thin', color: { argb: 'FF44475A' } },
    right: { style: 'thin', color: { argb: 'FF44475A' } }
  };

  // 7. Section 2: Space BOM Table (선택된 조명 및 자동 산출 자재 목록)
  currentRowNum += 3; // Leave 2 blank rows
  
  worksheet.mergeCells(`B${currentRowNum}:I${currentRowNum}`);
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
  
  const bomHeaders = ['공간 분류', '품번', '조명 모델 / 자재명', '구분 (타입)', '소비전력 (W)', '총 와트수', '배치 수량', '예상 금액'];
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
      if (l.typeId === 'magnetic-rail' || l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57') {
        const dx = l.x2 - l.x;
        const dy = l.y2 - l.y;
        const lenPx = Math.sqrt(dx*dx + dy*dy);
        const lenM = state.pixelsPerMeter > 0 ? (lenPx / state.pixelsPerMeter) : 0;
        
        const subItems = getMagneticRailBOM(lenM);
        subItems.forEach(item => {
          const subId = item.type;
          if (!groups[subId]) {
            groups[subId] = {
              name: item.name,
              type: '라인/마그네틱',
              watt: 0,
              lumen: 0,
              price: item.price,
              ecountProdCd: item.ecountProdCd || null,
              qty: 0,
              isLinebar: true
            };
          }
          groups[subId].qty += item.qty;
        });
      } else {
        if (!groups[l.typeId]) {
          const spec = fixtureDatabase.find(f => f.id === l.typeId);
          const catLabel = !spec ? '조명'
            : spec.category === 'downlight' ? '매입 다운라이트'
            : spec.category === 'linebar'   ? '라인/마그네틱'
            : spec.category === 'multi'     ? '멀티매입등'
            : spec.category === 'roomlight' ? '방등/거실등'
            : spec.category === 'direct'    ? (spec.productLine === 'zibis_general' ? '현관/베란다등' : '메인등')
            : spec.category === 'sensor'    ? '센서등'
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
            ecountProdCd: spec ? (spec.ecountProdCd || null) : null,
            qty: 0,
            isLinebar: isLine
          };
        }
        groups[l.typeId].qty++;
        if (groups[l.typeId].isLinebar) {
          groups[l.typeId].watt += l.watt;
          groups[l.typeId].lumen += l.lumen;
        }
      }
    });

    // Write lights in this zone
    Object.values(groups).forEach(g => {
      const rowCost = g.price * g.qty;
      totalCost += rowCost;

      const row = worksheet.getRow(currentRowNum);
      row.height = 22;

      row.getCell(2).value = zone.name;
      row.getCell(3).value = g.ecountProdCd || '-';
      row.getCell(4).value = g.name;
      row.getCell(5).value = g.type;
      row.getCell(6).value = g.watt ? g.watt + 'W' : '-';
      row.getCell(7).value = g.watt ? (g.watt * g.qty) + 'W' : '-';
      row.getCell(8).value = g.qty;
      row.getCell(9).value = rowCost;
      row.getCell(9).numFmt = '#,##0';

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
        const smpsPrice = getDBConverterPrice(capNum);
        const smpsCost = smpsPrice * qty;
        totalCost += smpsCost;

        row.getCell(2).value = zone.name;
        row.getCell(3).value = getDBConverterProdCd(capNum) || '-';
        row.getCell(4).value = `${cap}W 안정기`;
        row.getCell(5).value = '안정기 (SMPS)';
        row.getCell(6).value = cap + 'W';
        row.getCell(7).value = '-';
        row.getCell(8).value = qty;
        row.getCell(9).value = smpsCost;
        row.getCell(9).numFmt = '#,##0';

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
        const ctrlPrice = getDBControllerPrice();
        const ctrlCost = ctrlPrice * qty;
        totalCost += ctrlCost;

        row.getCell(2).value = zone.name;
        row.getCell(3).value = getDBControllerProdCd() || '-';
        row.getCell(4).value = ctrlName;
        row.getCell(5).value = '컨트롤러';
        row.getCell(6).value = '-';
        row.getCell(7).value = '-';
        row.getCell(8).value = qty;
        row.getCell(9).value = ctrlCost;
        row.getCell(9).numFmt = '#,##0';

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

  // 허브 (프로젝트 전체에 IoT 조명이 1개라도 있으면 1개, 존 단위 아님)
  if (state.requiredHub) {
    const hubPrice = getDBProductPrice('허브', 200000);
    totalCost += hubPrice;

    const row = worksheet.getRow(currentRowNum);
    row.height = 22;

    row.getCell(2).value = '전체';
    row.getCell(3).value = getDBProductProdCd('허브') || '-';
    row.getCell(4).value = '허브';
    row.getCell(5).value = '허브';
    row.getCell(6).value = '-';
    row.getCell(7).value = '-';
    row.getCell(8).value = 1;
    row.getCell(9).value = hubPrice;
    row.getCell(9).numFmt = '#,##0';

    applyRowStyles(row, false);
    currentRowNum++;
  }

  // Process lights outside any zone
  if (outsideLights.length > 0) {
    const startRow = currentRowNum;
    const groups = {};
    outsideLights.forEach(l => {
      if (l.typeId === 'magnetic-rail' || l.typeId === 'fe1f7195-3630-49c0-8cda-f5ea732cfe57') {
        const dx = l.x2 - l.x;
        const dy = l.y2 - l.y;
        const lenPx = Math.sqrt(dx*dx + dy*dy);
        const lenM = state.pixelsPerMeter > 0 ? (lenPx / state.pixelsPerMeter) : 0;
        
        const subItems = getMagneticRailBOM(lenM);
        subItems.forEach(item => {
          const subId = item.type;
          if (!groups[subId]) {
            groups[subId] = {
              name: item.name,
              type: '라인/마그네틱',
              watt: 0,
              lumen: 0,
              price: item.price,
              ecountProdCd: item.ecountProdCd || null,
              qty: 0,
              isLinebar: true
            };
          }
          groups[subId].qty += item.qty;
        });
      } else {
        if (!groups[l.typeId]) {
          const spec = fixtureDatabase.find(f => f.id === l.typeId);
          const catLabel = !spec ? '조명'
            : spec.category === 'downlight' ? '매입 다운라이트'
            : spec.category === 'linebar'   ? '라인/마그네틱'
            : spec.category === 'multi'     ? '멀티매입등'
            : spec.category === 'roomlight' ? '방등/거실등'
            : spec.category === 'direct'    ? (spec.productLine === 'zibis_general' ? '현관/베란다등' : '메인등')
            : spec.category === 'sensor'    ? '센서등'
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
            ecountProdCd: spec ? (spec.ecountProdCd || null) : null,
            qty: 0,
            isLinebar: isLine
          };
        }
        groups[l.typeId].qty++;
        if (groups[l.typeId].isLinebar) {
          groups[l.typeId].watt += l.watt;
          groups[l.typeId].lumen += l.lumen;
        }
      }
    });

    Object.values(groups).forEach(g => {
      const rowCost = g.price * g.qty;
      totalCost += rowCost;

      const row = worksheet.getRow(currentRowNum);
      row.height = 22;

      row.getCell(2).value = '기타 (공간 외)';
      row.getCell(3).value = g.ecountProdCd || '-';
      row.getCell(4).value = g.name;
      row.getCell(5).value = g.type;
      row.getCell(6).value = g.watt ? g.watt + 'W' : '-';
      row.getCell(7).value = g.watt ? (g.watt * g.qty) + 'W' : '-';
      row.getCell(8).value = g.qty;
      row.getCell(9).value = rowCost;
      row.getCell(9).numFmt = '#,##0';

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
  totalRowNumbers.push(currentRowNum);
  const totalRow = worksheet.getRow(currentRowNum);
  totalRow.height = 30;
  worksheet.mergeCells(`B${currentRowNum}:H${currentRowNum}`);

  const labelCell = totalRow.getCell(2);
  labelCell.value = '최종 예상 가견적 합계:';
  labelCell.font = { name: 'Malgun Gothic', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
  labelCell.alignment = { vertical: 'middle', horizontal: 'right' };
  labelCell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F2233' }
  };

  for (let col = 2; col <= 8; col++) {
    totalRow.getCell(col).border = {
      top: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      bottom: { style: 'medium', color: { argb: 'FF2D6ABF' } },
      left: col === 2 ? { style: 'thin', color: { argb: 'FF44475A' } } : undefined,
      right: col === 8 ? { style: 'thin', color: { argb: 'FF44475A' } } : undefined
    };
  }

  // 총 합계 금액 열(I)에 최종 예상 가견적 합계 값을 배치
  const valueCell = totalRow.getCell(9);
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
    left: { style: 'thin', color: { argb: 'FF44475A' } },
    right: { style: 'thin', color: { argb: 'FF44475A' } }
  };
  
  // 10. Generate the full workbook (품번 포함) — 서버 저장용
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  // 10.1 어드민 계정은 품번을 그대로 노출하고, 일반 사용자는 로컬 다운로드본에서 품번(3번째 열)을 제거
  const isAdminDownload = authProfile && authProfile.role === 'admin';
  let downloadBlob = blob;
  if (!isAdminDownload) {
    const localWorkbook = new ExcelJS.Workbook();
    await localWorkbook.xlsx.load(buffer);
    const localWorksheet = localWorkbook.worksheets[0];
    localWorksheet.eachRow((row) => {
      if (totalRowNumbers.includes(row.number)) return; // B:H 병합된 합계 행은 건드리지 않음 (마스터 셀 값 손상 방지)
      try {
        row.getCell(3).value = null;
      } catch (e) {
        // 병합 셀 등 값 설정이 막히는 경우 무시
      }
    });
    localWorksheet.getColumn(3).width = 0;
    localWorksheet.getColumn(3).hidden = true;
    const localBuffer = await localWorkbook.xlsx.writeBuffer();
    downloadBlob = new Blob([localBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  }

  // 10.2 Download Excel workbook (관리자는 품번 포함, 일반 사용자는 미포함)
  const url = URL.createObjectURL(downloadBlob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `${projectName}_지비스_가견적서_${Date.now()}.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Auto-save quote to Supabase
  if (authUser) {
    try {
      // 1. Upload Excel file to Supabase Storage bucket 'estimates'
      const fileSafeName = projectName.replace(/[^a-zA-Z0-9가-힣-_]/g, '_');
      const storagePath = `${authUser.id}/${Date.now()}_${fileSafeName}.xlsx`;
      
      const { data: uploadData, error: uploadErr } = await supabaseClient.storage
        .from('estimates')
        .upload(storagePath, blob, {
          contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          upsert: true
        });

      let excelUrl = null;
      if (uploadErr) {
        console.error('Supabase 스토리지 업로드 실패:', uploadErr.message);
      } else {
        const { data: urlData } = supabaseClient.storage
          .from('estimates')
          .getPublicUrl(storagePath);
        excelUrl = urlData.publicUrl;
      }

      // 2. Prepare base64 image and project data
      let base64Image = null;
      if (state.uploadedImage) {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = state.uploadedImage.width;
        tempCanvas.height = state.uploadedImage.height;
        tempCanvas.getContext('2d').drawImage(state.uploadedImage, 0, 0);
        base64Image = tempCanvas.toDataURL('image/jpeg', 0.85);
      }

      // 이카운트 ERP 품번 매칭용: 저장 시점 fixtureDatabase 기준으로 각 조명에 품번(ecountProdCd)을 스냅샷으로 포함
      const lightsWithProductCode = state.lights.map(l => {
        const spec = fixtureDatabase.find(f => f.id === l.typeId);
        return { ...l, ecountProdCd: spec ? (spec.ecountProdCd || null) : null };
      });

      const projectData = {
        version: '1.0',
        pixelsPerMeter: state.pixelsPerMeter,
        ceilingHeight: state.ceilingHeight,
        imageBase64: base64Image,
        lights: lightsWithProductCode,
        zones: state.zones,
        dimensions: state.dimensions,
        controllerMarkers: state.controllerMarkers,
        nextLightId: state.nextLightId,
        nextZoneId: state.nextZoneId,
        nextDimId: state.nextDimId,
        nextControllerMarkId: state.nextControllerMarkId
      };

      // 3. Insert or Update metadata and excel_url in quotes table
      let query;
      if (state.activeQuoteId) {
        query = supabaseClient
          .from('quotes')
          .update({
            project_name: projectName,
            project_data: projectData,
            excel_url: excelUrl
          })
          .eq('id', state.activeQuoteId)
          .select();
      } else {
        query = supabaseClient
          .from('quotes')
          .insert({
            user_id: authUser.id,
            project_name: projectName,
            project_data: projectData,
            excel_url: excelUrl
          })
          .select();
      }

      const { data, error } = await query;

      if (error) {
        console.error('Supabase 견적 자동 저장 실패:', error.message);
        alert('견적서 파일 다운로드는 완료되었으나, 서버 자동 저장에 실패했습니다: ' + error.message);
      } else {
        console.log('Supabase 견적 자동 저장 성공:', data);
        if (data && data[0]) {
          state.activeQuoteId = data[0].id; // Keep track of the active quote ID
        }
        loadMyEstimatesList();
      }
    } catch (e) {
      console.warn('Supabase 견적 자동 저장 에러:', e);
    }
  }
}


// ==================== UNDO / REDO HISTORY MANAGER ====================
const undoStack = [];
const redoStack = [];

function saveStateToHistory() {
  const snapshot = {
    lights: JSON.parse(JSON.stringify(state.lights)),
    zones: JSON.parse(JSON.stringify(state.zones)),
    dimensions: JSON.parse(JSON.stringify(state.dimensions)),
    controllerMarkers: JSON.parse(JSON.stringify(state.controllerMarkers))
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
      dimensions: [],
      controllerMarkers: []
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
  state.controllerMarkers = JSON.parse(JSON.stringify(prevState.controllerMarkers || []));

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
  state.controllerMarkers = JSON.parse(JSON.stringify(nextState.controllerMarkers || []));

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

// ==================== AUTHENTICATION WORKFLOWS ====================
let authUser = null;
let authProfile = null;

function setupAuthEventListeners() {
  // Modal Overlays
  const signupOverlay = document.getElementById('signupOverlay');
  const loginOverlay = document.getElementById('loginOverlay');
  const forgotPasswordOverlay = document.getElementById('forgotPasswordOverlay');
  const onboardingOverlay = document.getElementById('onboardingOverlay');
  const profileEditOverlay = document.getElementById('profileEditOverlay');
  const changePasswordOverlay = document.getElementById('changePasswordOverlay');
  const myEstimatesOverlay = document.getElementById('myEstimatesOverlay');
  const myConsultationsOverlay = document.getElementById('myConsultationsOverlay');
  const controllerMarkOverlay = document.getElementById('controllerMarkOverlay');
  const feedbackOverlay = document.getElementById('feedbackOverlay');

  // 견적 통합 드롭다운 (다운로드 / 상담하기 / 상담내역)
  const btnQuoteDownloadDirect = document.getElementById('btnQuoteDownloadDirect');
  const btnQuoteDropdownToggle = document.getElementById('btnQuoteDropdownToggle');
  const quoteDropdown = document.getElementById('quoteDropdown');
  const btnMenuQuoteConsult = document.getElementById('btnMenuQuoteConsult');
  const btnMenuQuoteHistory = document.getElementById('btnMenuQuoteHistory');

  // Header Links
  const btnHeaderSignup = document.getElementById('btnHeaderSignup');
  const btnHeaderLogin = document.getElementById('btnHeaderLogin');
  const btnProfileMenu = document.getElementById('btnProfileMenu');
  const profileDropdown = document.getElementById('profileDropdown');

  // Close Buttons
  const btnCloseSignup = document.getElementById('btnCloseSignup');
  const btnCloseLogin = document.getElementById('btnCloseLogin');
  const btnCloseForgotPassword = document.getElementById('btnCloseForgotPassword');
  const btnCloseProfileEdit = document.getElementById('btnCloseProfileEdit');
  const btnCloseChangePassword = document.getElementById('btnCloseChangePassword');
  const btnCloseMyEstimates = document.getElementById('btnCloseMyEstimates');
  const btnCloseMyConsultations = document.getElementById('btnCloseMyConsultations');
  const btnCloseControllerMark = document.getElementById('btnCloseControllerMark');
  const btnCloseFeedback = document.getElementById('btnCloseFeedback');

  // Modal Transitions
  const linkToLogin = document.getElementById('linkToLogin');
  const linkToSignup = document.getElementById('linkToSignup');
  const linkToForgotPassword = document.getElementById('linkToForgotPassword');
  const linkBackToLogin = document.getElementById('linkBackToLogin');

  // Password Toggles
  setupPasswordToggle('btnToggleSignupPassword', 'signupPassword');
  setupPasswordToggle('btnToggleSignupPasswordConfirm', 'signupPasswordConfirm');
  setupPasswordToggle('btnToggleLoginPassword', 'loginPassword');
  setupPasswordToggle('btnToggleChangePasswordCurrent', 'changePasswordCurrent');
  setupPasswordToggle('btnToggleChangePasswordNew', 'changePasswordNew');
  setupPasswordToggle('btnToggleChangePasswordConfirm', 'changePasswordConfirm');

  // Info Tooltip
  const btnDownloadInfo = document.getElementById('btnDownloadInfo');
  const downloadTooltip = document.getElementById('downloadTooltip');
  if (btnDownloadInfo && downloadTooltip) {
    btnDownloadInfo.onclick = (e) => {
      e.stopPropagation();
      const isVisible = downloadTooltip.style.display === 'block';
      downloadTooltip.style.display = isVisible ? 'none' : 'block';
    };
  }

  // Hamburger Menu Dialog
  const btnHamburgerMenu = document.getElementById('btnHamburgerMenu');
  const hamburgerDropdown = document.getElementById('hamburgerDropdown');
  
  const hamburgerSvg = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  `;
  const closeSvg = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;

  if (btnHamburgerMenu && hamburgerDropdown) {
    btnHamburgerMenu.onclick = (e) => {
      e.stopPropagation();
      const isVisible = hamburgerDropdown.style.display === 'flex';
      if (isVisible) {
        hamburgerDropdown.style.display = 'none';
        btnHamburgerMenu.innerHTML = hamburgerSvg;
      } else {
        hamburgerDropdown.style.display = 'flex';
        btnHamburgerMenu.innerHTML = closeSvg;
      }
    };
  }

  // Hamburger Item Clicks
  const btnMenuHome = document.getElementById('btnMenuHome');
  const btnMenuCalibrate = document.getElementById('btnMenuCalibrate');
  const btnMenuSaveFile = document.getElementById('btnMenuSaveFile');
  const btnMenuOpenFile = document.getElementById('btnMenuOpenFile');
  const btnMenuDownloadEstimate = document.getElementById('btnMenuDownloadEstimate');

  if (btnMenuHome) {
    btnMenuHome.onclick = () => {
      hamburgerDropdown.style.display = 'none';
      if (btnHamburgerMenu) btnHamburgerMenu.innerHTML = hamburgerSvg;
      showConfirm("홈으로 이동", "현재 작성 중인 모든 데이터가 삭제됩니다. 계속하시겠습니까?", () => {
        clearProjectState();
        resetHistory();
        setUploadOverlayVisible(true);
        els.canvasContainer.style.display = 'none';
        els.canvasToolbar.style.display = 'none';
        updateStats();
        renderAll();
      });
    };
  }
  if (btnMenuCalibrate) {
    btnMenuCalibrate.onclick = () => {
      hamburgerDropdown.style.display = 'none';
      if (btnHamburgerMenu) btnHamburgerMenu.innerHTML = hamburgerSvg;
      startCalibrationFlow();
    };
  }
  if (btnMenuSaveFile) {
    btnMenuSaveFile.onclick = () => {
      hamburgerDropdown.style.display = 'none';
      if (btnHamburgerMenu) btnHamburgerMenu.innerHTML = hamburgerSvg;
      if (!authUser) {
        alert('파일을 저장하려면 회원가입이 필요합니다.');
        document.getElementById('signupOverlay').style.display = 'flex';
        return;
      }
      if (!authProfile || !authProfile.consent_agreed) {
        alert('저장하기 전에 추가 정보 입력과 이용 동의를 완료해 주세요.');
        window.pendingOnboardingAction = 'save';
        document.getElementById('onboardingOverlay').style.display = 'flex';
        return;
      }
      saveProjectFile();
    };
  }
  if (btnMenuOpenFile) {
    btnMenuOpenFile.onclick = () => {
      hamburgerDropdown.style.display = 'none';
      if (btnHamburgerMenu) btnHamburgerMenu.innerHTML = hamburgerSvg;
      if (els.loadProjectInput) els.loadProjectInput.click();
    };
  }
  if (btnMenuDownloadEstimate) {
    btnMenuDownloadEstimate.onclick = () => {
      hamburgerDropdown.style.display = 'none';
      if (btnHamburgerMenu) btnHamburgerMenu.innerHTML = hamburgerSvg;
      const btnExp = document.getElementById('btnExport');
      if (btnExp) btnExp.click();
    };
  }

  // Document Click (dismiss dropdown/tooltip)
  document.addEventListener('click', (e) => {
    if (downloadTooltip && !downloadTooltip.contains(e.target) && e.target !== btnDownloadInfo) {
      downloadTooltip.style.display = 'none';
    }
    if (profileDropdown && !profileDropdown.contains(e.target) && !e.target.closest('#btnProfileMenu')) {
      profileDropdown.style.display = 'none';
    }
    if (quoteDropdown && !quoteDropdown.contains(e.target) && !e.target.closest('#btnQuoteDropdownToggle')) {
      quoteDropdown.style.display = 'none';
      if (btnQuoteDropdownToggle) btnQuoteDropdownToggle.classList.remove('open');
    }
    if (hamburgerDropdown && !hamburgerDropdown.contains(e.target) && !e.target.closest('#btnHamburgerMenu')) {
      hamburgerDropdown.style.display = 'none';
      if (btnHamburgerMenu) btnHamburgerMenu.innerHTML = hamburgerSvg;
    }
  });

  // Modal Show Handlers
  if (btnHeaderSignup) btnHeaderSignup.onclick = () => signupOverlay.style.display = 'flex';
  if (btnHeaderLogin) btnHeaderLogin.onclick = () => loginOverlay.style.display = 'flex';
  if (btnProfileMenu) btnProfileMenu.onclick = (e) => {
    e.stopPropagation();
    profileDropdown.style.display = profileDropdown.style.display === 'flex' ? 'none' : 'flex';
  };

  // 견적 다운로드(왼쪽, 즉시 실행) / 드롭다운 토글(오른쪽, 화살표 방향 전환)
  if (btnQuoteDownloadDirect) btnQuoteDownloadDirect.onclick = () => {
    const btnExp = document.getElementById('btnExport');
    if (btnExp) btnExp.click();
  };
  if (btnQuoteDropdownToggle) btnQuoteDropdownToggle.onclick = (e) => {
    e.stopPropagation();
    const willOpen = quoteDropdown.style.display !== 'flex';
    quoteDropdown.style.display = willOpen ? 'flex' : 'none';
    btnQuoteDropdownToggle.classList.toggle('open', willOpen);
  };
  if (btnMenuQuoteConsult) btnMenuQuoteConsult.onclick = () => {
    quoteDropdown.style.display = 'none';
    if (btnQuoteDropdownToggle) btnQuoteDropdownToggle.classList.remove('open');
    const btnConsult = document.getElementById('btnConsultation');
    if (btnConsult) btnConsult.click();
  };
  if (btnMenuQuoteHistory) btnMenuQuoteHistory.onclick = () => {
    quoteDropdown.style.display = 'none';
    if (btnQuoteDropdownToggle) btnQuoteDropdownToggle.classList.remove('open');
    myConsultationsOverlay.style.display = 'flex';
    loadMyConsultations();
  };

  // Close Modal Handlers
  if (btnCloseSignup) btnCloseSignup.onclick = () => {
    signupOverlay.style.display = 'none';
    if (signupNameInput) signupNameInput.value = '';
    if (signupCompanyInput) signupCompanyInput.value = '';
    if (signupEmailInput) signupEmailInput.value = '';
    if (signupPasswordInput) signupPasswordInput.value = '';
    if (signupPasswordConfirmInput) signupPasswordConfirmInput.value = '';
    if (signupConsentCheckbox) signupConsentCheckbox.checked = false;
    updateSignupSubmitBtnState();
  };
  if (btnCloseLogin) btnCloseLogin.onclick = () => loginOverlay.style.display = 'none';
  if (btnCloseForgotPassword) btnCloseForgotPassword.onclick = () => forgotPasswordOverlay.style.display = 'none';
  if (btnCloseProfileEdit) btnCloseProfileEdit.onclick = () => profileEditOverlay.style.display = 'none';
  if (btnCloseChangePassword) btnCloseChangePassword.onclick = () => changePasswordOverlay.style.display = 'none';
  if (btnCloseMyEstimates) btnCloseMyEstimates.onclick = () => myEstimatesOverlay.style.display = 'none';
  if (btnCloseMyConsultations) btnCloseMyConsultations.onclick = () => myConsultationsOverlay.style.display = 'none';
  if (btnCloseControllerMark) btnCloseControllerMark.onclick = () => closeControllerMarkModal();
  const btnControllerMarkClear = document.getElementById('btnControllerMarkClear');
  const btnControllerMarkSave = document.getElementById('btnControllerMarkSave');
  if (btnControllerMarkClear) btnControllerMarkClear.onclick = () => {
    controllerMarkState.markers = [];
    renderControllerMarkPins();
  };
  if (btnControllerMarkSave) btnControllerMarkSave.onclick = () => saveControllerMarkers();
  if (btnCloseFeedback) btnCloseFeedback.onclick = () => feedbackOverlay.style.display = 'none';
  
  const btnCloseOnboarding = document.getElementById('btnCloseOnboarding');
  if (btnCloseOnboarding) btnCloseOnboarding.onclick = () => document.getElementById('onboardingOverlay').style.display = 'none';

  const btnCloseConfirm = document.getElementById('btnCloseConfirm');
  const btnCloseZoneSelect = document.getElementById('btnCloseZoneSelect');
  const btnCloseSwitchInput = document.getElementById('btnCloseSwitchInput');
  if (btnCloseConfirm) btnCloseConfirm.onclick = () => document.getElementById('confirmOverlay').style.display = 'none';
  if (btnCloseZoneSelect) btnCloseZoneSelect.onclick = () => document.getElementById('zoneSelectOverlay').style.display = 'none';
  if (btnCloseSwitchInput) btnCloseSwitchInput.onclick = () => document.getElementById('switchInputOverlay').style.display = 'none';

  // Toggle between screens
  if (linkToLogin) linkToLogin.onclick = () => {
    signupOverlay.style.display = 'none';
    loginOverlay.style.display = 'flex';
  };
  if (linkToSignup) linkToSignup.onclick = () => {
    loginOverlay.style.display = 'none';
    signupOverlay.style.display = 'flex';
  };
  if (linkToForgotPassword) linkToForgotPassword.onclick = () => {
    loginOverlay.style.display = 'none';
    forgotPasswordOverlay.style.display = 'flex';
  };
  if (linkBackToLogin) linkBackToLogin.onclick = () => {
    forgotPasswordOverlay.style.display = 'none';
    loginOverlay.style.display = 'flex';
  };

  // Dropdown Menu Actions
  const btnMenuProfile = document.getElementById('btnMenuProfile');
  const btnMenuEstimates = document.getElementById('btnMenuEstimates');
  const btnMenuFeedback = document.getElementById('btnMenuFeedback');
  const btnMenuLogout = document.getElementById('btnMenuLogout');

  if (btnMenuProfile) btnMenuProfile.onclick = () => {
    profileDropdown.style.display = 'none';
    if (authUser) {
      document.getElementById('profileEditEmail').value = authUser.email;
      document.getElementById('profileEditName').value = (authProfile && authProfile.contact_name) ? authProfile.contact_name : '';
      document.getElementById('profileEditCompany').value = (authProfile && authProfile.company_name) ? authProfile.company_name : '';
      
      const provider = authUser.app_metadata?.provider || (authUser.identities && authUser.identities[0]?.provider) || 'email';
      const iconContainer = document.getElementById('profileEditHeaderIcon');
      const badge = document.getElementById('profileEditBadge');
      const title = document.getElementById('profileEditTitle');
      const subtitle = document.getElementById('profileEditSubtitle');
      const resetLink = document.getElementById('profileEditResetPasswordLinkContainer');
      
      if (provider === 'google') {
        iconContainer.innerHTML = `
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style="display:block;">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
        `;
        badge.innerText = 'Google 계정 연동';
        title.innerText = '소셜 로그인 회원입니다.';
        subtitle.innerText = '이메일은 Google 계정에서 관리되며 직접 수정할 수 없습니다.';
        subtitle.style.display = 'block';
        resetLink.style.display = 'none';
      } else {
        iconContainer.innerHTML = `<img src="img/email.png" width="30" height="24" alt="Email Logo" style="display:block;">`;
        badge.innerText = 'Email 가입 회원';
        title.innerText = 'Email 가입 회원입니다.';
        subtitle.style.display = 'none';
        resetLink.style.display = 'block';
      }

      updateProfileEditSubmitBtnState();
      profileEditOverlay.style.display = 'flex';
    }
  };

  if (btnMenuEstimates) btnMenuEstimates.onclick = () => {
    profileDropdown.style.display = 'none';
    myEstimatesOverlay.style.display = 'flex';
    loadMyEstimatesList();
  };

  if (btnMenuFeedback) btnMenuFeedback.onclick = () => {
    profileDropdown.style.display = 'none';
    feedbackOverlay.style.display = 'flex';
    document.getElementById('feedbackListView').style.display = 'none';
    document.getElementById('feedbackWriteView').style.display = 'flex';
  };

  if (btnMenuLogout) btnMenuLogout.onclick = async () => {
    profileDropdown.style.display = 'none';
    const { error } = await supabaseClient.auth.signOut();
    if (error) alert('로그아웃 에러: ' + error.message);
    else showToast('정상적으로 로그아웃되었습니다.');
  };

  // Signup Submit
  const btnSignupSubmit = document.getElementById('btnSignupSubmit');
  
  const signupNameInput = document.getElementById('signupName');
  const signupCompanyInput = document.getElementById('signupCompany');
  const signupEmailInput = document.getElementById('signupEmail');
  const signupPasswordInput = document.getElementById('signupPassword');
  const signupPasswordConfirmInput = document.getElementById('signupPasswordConfirm');
  const signupConsentCheckbox = document.getElementById('signupConsent');

  function updateSignupSubmitBtnState() {
    if (!btnSignupSubmit) return;
    const name = signupNameInput ? signupNameInput.value.trim() : '';
    const company = signupCompanyInput ? signupCompanyInput.value.trim() : '';
    const email = signupEmailInput ? signupEmailInput.value.trim() : '';
    const password = signupPasswordInput ? signupPasswordInput.value : '';
    const passwordConfirm = signupPasswordConfirmInput ? signupPasswordConfirmInput.value : '';
    const consent = signupConsentCheckbox ? signupConsentCheckbox.checked : false;

    const isValid = name && company && email && password && (password === passwordConfirm) && password.length >= 8 && consent;
    if (isValid) {
      btnSignupSubmit.classList.add('active-btn');
      btnSignupSubmit.disabled = false;
    } else {
      btnSignupSubmit.classList.remove('active-btn');
      btnSignupSubmit.disabled = true;
    }
  }

  [signupNameInput, signupCompanyInput, signupEmailInput, signupPasswordInput, signupPasswordConfirmInput].forEach(el => {
    if (el) {
      // 'input' alone misses some browser/password-manager autofills, so also watch 'change' and 'blur'
      el.addEventListener('input', updateSignupSubmitBtnState);
      el.addEventListener('change', updateSignupSubmitBtnState);
      el.addEventListener('blur', updateSignupSubmitBtnState);
    }
  });
  if (signupConsentCheckbox) {
    signupConsentCheckbox.addEventListener('change', updateSignupSubmitBtnState);
  }
  // Initialize state, and keep re-checking periodically: browser/password-manager autofill doesn't
  // always fire input/change/blur, so polling is the only reliable way to catch it.
  updateSignupSubmitBtnState();
  setInterval(updateSignupSubmitBtnState, 500);

  if (btnSignupSubmit) btnSignupSubmit.onclick = async () => {
    const name = document.getElementById('signupName').value.trim();
    const company = document.getElementById('signupCompany').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const passwordConfirm = document.getElementById('signupPasswordConfirm').value;
    const consent = document.getElementById('signupConsent').checked;

    if (!name || !company || !email || !password) {
      alert('모든 필수 항목을 입력해 주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (password.length < 8) {
      alert('비밀번호는 8자리 이상이어야 합니다.');
      return;
    }
    if (!consent) {
      alert('약관 동의가 필요합니다.');
      return;
    }

    btnSignupSubmit.disabled = true;
    btnSignupSubmit.innerText = '가입 중...';

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          contact_name: name,
          company_name: company
        }
      }
    });

    if (error) {
      alert('회원가입 실패: ' + error.message);
      btnSignupSubmit.disabled = false;
      btnSignupSubmit.innerText = '회원가입';
      return;
    }

    if (data.user) {
      // Upsert profile
      const { error: profileError } = await supabaseClient.from('profiles').upsert({
        id: data.user.id,
        contact_name: name,
        company_name: company,
        consent_agreed: true
      });
      if (!profileError) {
        // onAuthStateChange's own profile fetch can race ahead of this upsert and
        // capture a stale/empty profile, so update the in-memory copy directly too.
        authProfile = { contact_name: name, company_name: company, consent_agreed: true };
        updateAuthUI(authUser, authProfile);
      }
      alert('회원가입이 완료되었습니다. 이메일 인증이 필요한 경우 이메일을 확인해 주세요.');
      signupOverlay.style.display = 'none';
    }
    btnSignupSubmit.disabled = false;
    btnSignupSubmit.innerText = '회원가입';
  };

  // Login Submit
  const btnLoginSubmit = document.getElementById('btnLoginSubmit');
  
  const loginEmailInput = document.getElementById('loginEmail');
  const loginPasswordInput = document.getElementById('loginPassword');

  function updateLoginSubmitBtnState() {
    if (!btnLoginSubmit) return;
    const email = loginEmailInput ? loginEmailInput.value.trim() : '';
    const password = loginPasswordInput ? loginPasswordInput.value : '';

    const isValid = email && password;
    if (isValid) {
      btnLoginSubmit.classList.add('active-btn');
      btnLoginSubmit.disabled = false;
    } else {
      btnLoginSubmit.classList.remove('active-btn');
      btnLoginSubmit.disabled = true;
    }
  }

  [loginEmailInput, loginPasswordInput].forEach(el => {
    if (el) el.addEventListener('input', updateLoginSubmitBtnState);
  });
  // Initialize state
  setTimeout(updateLoginSubmitBtnState, 100);

  if (btnLoginSubmit) btnLoginSubmit.onclick = async () => {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해 주세요.');
      return;
    }

    btnLoginSubmit.disabled = true;
    btnLoginSubmit.innerText = '로그인 중...';

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert('로그인 실패: ' + error.message);
      btnLoginSubmit.disabled = false;
      btnLoginSubmit.innerText = '로그인';
      return;
    }

    loginOverlay.style.display = 'none';
    btnLoginSubmit.disabled = false;
    btnLoginSubmit.innerText = '로그인';
  };

  // Google Authentication Trigger
  const triggerGoogleAuth = async () => {
    // Save current design state to sessionStorage before redirecting for OAuth
    try {
      let base64Image = null;
      if (state.uploadedImage) {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = state.uploadedImage.width;
        tempCanvas.height = state.uploadedImage.height;
        tempCanvas.getContext('2d').drawImage(state.uploadedImage, 0, 0);
        base64Image = tempCanvas.toDataURL('image/jpeg', 0.85);
      }
      const tempState = {
        pixelsPerMeter: state.pixelsPerMeter,
        ceilingHeight: state.ceilingHeight,
        imageBase64: base64Image,
        lights: state.lights,
        zones: state.zones,
        dimensions: state.dimensions,
        controllerMarkers: state.controllerMarkers,
        nextLightId: state.nextLightId,
        nextZoneId: state.nextZoneId,
        nextDimId: state.nextDimId,
        nextControllerMarkId: state.nextControllerMarkId,
        activeQuoteId: state.activeQuoteId
      };
      sessionStorage.setItem('temp_project_oauth', JSON.stringify(tempState));
    } catch (e) {
      console.warn('OAuth 전 임시 저장 실패:', e);
    }

    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + window.location.pathname
      }
    });
    if (error) alert('Google 로그인 실패: ' + error.message);
  };

  const btnGoogleSignup = document.getElementById('btnGoogleSignup');
  const btnGoogleLoginAction = document.getElementById('btnGoogleLoginAction');
  if (btnGoogleSignup) btnGoogleSignup.onclick = triggerGoogleAuth;
  if (btnGoogleLoginAction) btnGoogleLoginAction.onclick = triggerGoogleAuth;

  // Forgot Password Submit
  const btnForgotPasswordSubmit = document.getElementById('btnForgotPasswordSubmit');
  const forgotPasswordEmailInput = document.getElementById('forgotPasswordEmail');

  function updateForgotPasswordSubmitBtnState() {
    if (!btnForgotPasswordSubmit) return;
    const email = forgotPasswordEmailInput ? forgotPasswordEmailInput.value.trim() : '';
    const isValid = email !== '';
    if (isValid) {
      btnForgotPasswordSubmit.classList.add('active-btn');
      btnForgotPasswordSubmit.disabled = false;
    } else {
      btnForgotPasswordSubmit.classList.remove('active-btn');
      btnForgotPasswordSubmit.disabled = true;
    }
  }

  if (forgotPasswordEmailInput) {
    forgotPasswordEmailInput.addEventListener('input', updateForgotPasswordSubmitBtnState);
  }
  // Initialize state
  setTimeout(updateForgotPasswordSubmitBtnState, 100);

  if (btnForgotPasswordSubmit) btnForgotPasswordSubmit.onclick = async () => {
    const email = document.getElementById('forgotPasswordEmail').value.trim();
    if (!email) {
      alert('이메일을 입력해 주세요.');
      return;
    }

    btnForgotPasswordSubmit.disabled = true;
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + window.location.pathname + '#reset-password'
    });

    if (error) {
      alert('링크 전송 실패: ' + error.message);
    } else {
      alert('비밀번호 재설정 이메일이 발송되었습니다.');
      forgotPasswordOverlay.style.display = 'none';
    }
    btnForgotPasswordSubmit.disabled = false;
  };

  // Onboarding Submit (Google OAuth users without full_name/company)
  const btnOnboardingSubmit = document.getElementById('btnOnboardingSubmit');
  const onboardingNameInput = document.getElementById('onboardingName');
  const onboardingCompanyInput = document.getElementById('onboardingCompany');
  const onboardingConsentInput = document.getElementById('onboardingConsent');

  function updateOnboardingSubmitBtnState() {
    if (!btnOnboardingSubmit) return;
    const name = onboardingNameInput ? onboardingNameInput.value.trim() : '';
    const company = onboardingCompanyInput ? onboardingCompanyInput.value.trim() : '';
    const consent = onboardingConsentInput ? onboardingConsentInput.checked : false;

    const isValid = name && company && consent;
    if (isValid) {
      btnOnboardingSubmit.classList.add('active-btn');
      btnOnboardingSubmit.disabled = false;
    } else {
      btnOnboardingSubmit.classList.remove('active-btn');
      btnOnboardingSubmit.disabled = true;
    }
  }

  [onboardingNameInput, onboardingCompanyInput].forEach(el => {
    if (el) el.addEventListener('input', updateOnboardingSubmitBtnState);
  });
  if (onboardingConsentInput) {
    onboardingConsentInput.addEventListener('change', updateOnboardingSubmitBtnState);
  }
  // Initialize state
  setTimeout(updateOnboardingSubmitBtnState, 100);

  if (btnOnboardingSubmit) btnOnboardingSubmit.onclick = async () => {
    const name = onboardingNameInput.value.trim();
    const company = onboardingCompanyInput.value.trim();

    btnOnboardingSubmit.disabled = true;
    const { error } = await supabaseClient.from('profiles').upsert({
      id: authUser.id,
      contact_name: name,
      company_name: company,
      consent_agreed: true
    });

    if (error) {
      alert('정보 저장 실패: ' + error.message);
      btnOnboardingSubmit.disabled = false;
    } else {
      authProfile = { contact_name: name, company_name: company, consent_agreed: true };
      onboardingOverlay.style.display = 'none';
      updateAuthUI(authUser, authProfile);
      
      // Auto-resume pending actions
      if (window.pendingOnboardingAction === 'save') {
        saveProjectFile();
      } else if (window.pendingOnboardingAction === 'export') {
        exportToExcel();
      }
      window.pendingOnboardingAction = null;
    }
  };

  // Profile Edit Save & Input Verification
  const btnProfileEditSave = document.getElementById('btnProfileEditSave');
  const profileEditName = document.getElementById('profileEditName');
  const profileEditCompany = document.getElementById('profileEditCompany');

  function updateProfileEditSubmitBtnState() {
    if (!btnProfileEditSave) return;
    const name = profileEditName ? profileEditName.value.trim() : '';
    const company = profileEditCompany ? profileEditCompany.value.trim() : '';
    const isValid = name && company;

    if (isValid) {
      btnProfileEditSave.classList.add('active-btn');
      btnProfileEditSave.disabled = false;
    } else {
      btnProfileEditSave.classList.remove('active-btn');
      btnProfileEditSave.disabled = true;
    }
  }

  [profileEditName, profileEditCompany].forEach(el => {
    if (el) el.addEventListener('input', updateProfileEditSubmitBtnState);
  });

  if (btnProfileEditSave) btnProfileEditSave.onclick = async () => {
    const name = profileEditName.value.trim();
    const company = profileEditCompany.value.trim();

    btnProfileEditSave.disabled = true;
    const { error } = await supabaseClient.from('profiles').upsert({
      id: authUser.id,
      contact_name: name,
      company_name: company
    });

    if (error) {
      alert('수정 실패: ' + error.message);
      btnProfileEditSave.disabled = false;
    } else {
      if (!authProfile) authProfile = {};
      authProfile.contact_name = name;
      authProfile.company_name = company;
      alert('회원 정보가 수정되었습니다.');
      profileEditOverlay.style.display = 'none';
      updateAuthUI(authUser, authProfile);
    }
  };

  // Change Password Action inside Profile Edit Modal (Email users only)
  const linkProfileEditChangePassword = document.getElementById('linkProfileEditChangePassword');
  if (linkProfileEditChangePassword) {
    linkProfileEditChangePassword.onclick = () => {
      document.getElementById('changePasswordCurrent').value = '';
      document.getElementById('changePasswordNew').value = '';
      document.getElementById('changePasswordConfirm').value = '';
      profileEditOverlay.style.display = 'none';
      changePasswordOverlay.style.display = 'flex';
    };
  }

  const btnChangePasswordSubmit = document.getElementById('btnChangePasswordSubmit');
  if (btnChangePasswordSubmit) {
    btnChangePasswordSubmit.onclick = async () => {
      if (!authUser || !authUser.email) return;
      const currentPassword = document.getElementById('changePasswordCurrent').value;
      const newPassword = document.getElementById('changePasswordNew').value;
      const newPasswordConfirm = document.getElementById('changePasswordConfirm').value;

      if (!currentPassword || !newPassword || !newPasswordConfirm) {
        alert('모든 항목을 입력해 주세요.');
        return;
      }
      if (newPassword !== newPasswordConfirm) {
        alert('새로운 비밀번호가 일치하지 않습니다.');
        return;
      }
      if (newPassword.length < 8) {
        alert('비밀번호는 8자리 이상이어야 합니다.');
        return;
      }

      btnChangePasswordSubmit.disabled = true;
      btnChangePasswordSubmit.innerText = '변경 중...';

      const { error: verifyError } = await supabaseClient.auth.signInWithPassword({
        email: authUser.email,
        password: currentPassword
      });
      if (verifyError) {
        alert('현재 비밀번호가 일치하지 않습니다.');
        btnChangePasswordSubmit.disabled = false;
        btnChangePasswordSubmit.innerText = '변경하기';
        return;
      }

      const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
      btnChangePasswordSubmit.disabled = false;
      btnChangePasswordSubmit.innerText = '변경하기';

      if (error) {
        alert('비밀번호 변경 실패: ' + error.message);
      } else {
        alert('비밀번호가 변경되었습니다.');
        changePasswordOverlay.style.display = 'none';
      }
    };
  }

  // Feedback Submit & Input Verification
  const btnFeedbackSubmit = document.getElementById('btnFeedbackSubmit');
  const feedbackContent = document.getElementById('feedbackContent');

  function updateFeedbackSubmitBtnState() {
    if (!btnFeedbackSubmit) return;
    const content = feedbackContent ? feedbackContent.value.trim() : '';
    const isValid = content.length > 0;

    if (isValid) {
      btnFeedbackSubmit.classList.add('active-btn');
      btnFeedbackSubmit.disabled = false;
    } else {
      btnFeedbackSubmit.classList.remove('active-btn');
      btnFeedbackSubmit.disabled = true;
    }
  }

  if (feedbackContent) {
    feedbackContent.addEventListener('input', updateFeedbackSubmitBtnState);
  }
  // Initialize state
  setTimeout(updateFeedbackSubmitBtnState, 100);

  if (btnFeedbackSubmit) btnFeedbackSubmit.onclick = async () => {
    const content = feedbackContent.value.trim();

    btnFeedbackSubmit.disabled = true;
    const { error } = await supabaseClient.from('feedbacks').insert({
      user_id: authUser.id,
      title: '지비스 플래너 개선 의견',
      content
    });

    if (error) {
      alert('의견 제출 실패: ' + error.message);
      btnFeedbackSubmit.disabled = false;
    } else {
      alert('소중한 의견이 등록되었습니다.');
      feedbackContent.value = '';
      updateFeedbackSubmitBtnState();
      loadFeedbackHistory();
    }
  };

  // Toggle between feedback write view and my-feedback list view
  const linkViewMyFeedback = document.getElementById('linkViewMyFeedback');
  const btnBackToFeedbackWrite = document.getElementById('btnBackToFeedbackWrite');
  const feedbackWriteView = document.getElementById('feedbackWriteView');
  const feedbackListView = document.getElementById('feedbackListView');
  if (linkViewMyFeedback) {
    linkViewMyFeedback.onclick = () => {
      feedbackWriteView.style.display = 'none';
      feedbackListView.style.display = 'flex';
      loadFeedbackHistory();
    };
  }
  if (btnBackToFeedbackWrite) {
    btnBackToFeedbackWrite.onclick = () => {
      feedbackListView.style.display = 'none';
      feedbackWriteView.style.display = 'flex';
    };
  }

  // Listen to Auth State Changes
  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if (session && session.user) {
      authUser = session.user;
      // Fetch profile
      const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single();

      authProfile = data;
      updateAuthUI(authUser, authProfile);

      if (error || !data || !data.consent_agreed) {
        // Pre-populate onboarding fields in the background
        document.getElementById('onboardingName').value = data?.contact_name || authUser.user_metadata?.full_name || '';
        document.getElementById('onboardingCompany').value = data?.company_name || '';
      }
    } else {
      authUser = null;
      authProfile = null;
      updateAuthUI(null, null);
    }
  });
}

function setupPasswordToggle(btnId, inputId) {
  const btn = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  
  const svgOpen = `<svg viewBox="0 0 21.5 15.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:18px; height:18px; display:block;"><path d="M10.75 0.75C4.38636 0.75 0.75 7.75 0.75 7.75C0.75 7.75 4.38636 14.75 10.75 14.75C17.1136 14.75 20.75 7.75 20.75 7.75C20.75 7.75 17.1136 0.75 10.75 0.75Z"/><path d="M10.75 10.75C12.4069 10.75 13.75 9.40685 13.75 7.75C13.75 6.09315 12.4069 4.75 10.75 4.75C9.09315 4.75 7.75 6.09315 7.75 7.75C7.75 9.40685 9.09315 10.75 10.75 10.75Z"/></svg>`;
  const svgClosed = `<svg viewBox="0 0 21.5 19.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:18px; height:18px; display:block;"><path d="M18.75 12.5835C20.0582 11.0817 20.75 9.75 20.75 9.75C20.75 9.75 17.1136 2.75 10.75 2.75C10.4088 2.75 10.0754 2.77013 9.75 2.80822C9.40778 2.84828 9.0744 2.90822 8.75 2.98552M10.75 6.75C11.1006 6.75 11.4372 6.81015 11.75 6.92071C12.6024 7.22199 13.278 7.89759 13.5793 8.75C13.6898 9.06278 13.75 9.39936 13.75 9.75M1.75 0.75L19.75 18.75M10.75 12.75C10.3994 12.75 10.0628 12.6898 9.74999 12.5793C8.89758 12.278 8.22198 11.6024 7.9207 10.75C7.86386 10.5892 7.82034 10.4221 7.79147 10.25M2.89701 6.75C2.58877 7.09451 2.31234 7.43241 2.06864 7.75C1.20286 8.87824 0.75 9.75 0.75 9.75C0.75 9.75 4.38636 16.75 10.75 16.75C11.0912 16.75 11.4246 16.7299 11.75 16.6918"/></svg>`;

  if (btn && input) {
    btn.innerHTML = svgClosed;
    btn.onclick = () => {
      if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = svgOpen;
      } else {
        input.type = 'password';
        btn.innerHTML = svgClosed;
      }
    };
  }
}

function updateAuthUI(user, profile) {
  const tabHomeLudens = document.getElementById('tabHomeLudens');
  if (tabHomeLudens) {
    if (profile && profile.company_name === '홈루덴스') {
      tabHomeLudens.style.display = 'flex';
      if (els.libraryTabIndicator) els.libraryTabIndicator.style.width = '33.333%';
      
      // 홈루덴스 사용자 로그인 시, 기본적으로 홈루덴스 탭을 선택하여 indicator 위치 및 제품 렌더링 동기화
      if (state.activeProductLine !== 'home_ludens') {
        tabHomeLudens.click();
      } else {
        // 이미 선택된 상태라면 indicator 위치만 재계산
        const index = Array.from(document.querySelectorAll('.library-tab')).filter(t => t.style.display !== 'none').indexOf(tabHomeLudens);
        if (els.libraryTabIndicator) els.libraryTabIndicator.style.transform = `translateX(${index * 100}%)`;
      }
    } else {
      tabHomeLudens.style.display = 'none';
      if (els.libraryTabIndicator) els.libraryTabIndicator.style.width = '50%';
      
      // 홈루덴스 탭이 선택된 상태에서 로그아웃/권한 변경 시 IoT 탭으로 이동
      if (state.activeProductLine === 'home_ludens') {
        const iotTab = document.querySelector('.library-tab[data-line="zibis_iot"]');
        if (iotTab) iotTab.click();
      } else {
        // 홈루덴스 탭이 사라지면서 나머지 탭들의 indicator 위치 재계산
        const currentTab = document.querySelector(`.library-tab[data-line="${state.activeProductLine}"]`);
        if (currentTab) {
          const index = Array.from(document.querySelectorAll('.library-tab')).filter(t => t.style.display !== 'none').indexOf(currentTab);
          if (els.libraryTabIndicator) els.libraryTabIndicator.style.transform = `translateX(${index * 100}%)`;
        }
      }
    }
  }
  const headerAuthLinks = document.getElementById('headerAuthLinks');
  const profileMenuContainer = document.getElementById('profileMenuContainer');
  if (user) {
    if (headerAuthLinks) headerAuthLinks.style.display = 'none';
    if (profileMenuContainer) profileMenuContainer.style.display = 'flex';
  } else {
    if (headerAuthLinks) headerAuthLinks.style.display = 'flex';
    if (profileMenuContainer) profileMenuContainer.style.display = 'none';
  }

  // btnConsultation 자체는 "견적" 드롭다운에서 위임 호출하는 숨김 버튼이라 항상 display:none 유지
  // 견적 상담하기/상담내역은 로그인한 모든 회원에게 노출 (테스트 계정 제한 해제)
  const canSeeConsultation = !!user;
  const btnMenuQuoteConsult = document.getElementById('btnMenuQuoteConsult');
  const btnMenuQuoteHistory = document.getElementById('btnMenuQuoteHistory');
  if (btnMenuQuoteConsult) btnMenuQuoteConsult.style.display = canSeeConsultation ? 'flex' : 'none';
  if (btnMenuQuoteHistory) btnMenuQuoteHistory.style.display = canSeeConsultation ? 'flex' : 'none';

  // 비회원은 드롭다운 토글 없이 견적 다운로드 버튼만 노출
  const quoteMenuWrap = document.getElementById('quoteMenuWrap');
  if (quoteMenuWrap) quoteMenuWrap.classList.toggle('guest-mode', !user);
}

// Load My Estimates List
async function loadMyEstimatesList() {
  const listContainer = document.getElementById('estimatesListContainer');
  if (!listContainer) return;

  listContainer.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-dim);">견적서 로드 중...</div>';

  if (!authUser) return;

  const { data, error } = await supabaseClient
    .from('quotes')
    .select('id, project_name, created_at, excel_url')
    .eq('user_id', authUser.id)
    .order('created_at', { ascending: false });

  if (error) {
    listContainer.innerHTML = '<div style="text-align:center; padding:20px; color:#ff453a;">로드 오류: ' + error.message + '</div>';
    return;
  }

  if (!data || data.length === 0) {
    listContainer.innerHTML = '<div class="empty-estimates-msg" style="text-align: center; color: var(--text-dim); padding: 40px 0; font-size: 13px;">저장된 견적서가 없습니다.</div>';
    return;
  }

  listContainer.innerHTML = '';
  data.forEach(item => {
    const el = document.createElement('div');
    el.className = 'estimate-item';
    const dateStr = new Date(item.created_at).toLocaleString();

    el.innerHTML = `
      <div class="estimate-info">
        <div class="estimate-name">${item.project_name || '이름 없음'}</div>
        <div class="estimate-date">${dateStr}</div>
      </div>
      <div class="estimate-actions">
        <button class="btn-est-action load" data-id="${item.id}">불러오기</button>
        ${item.excel_url ? `<button class="btn-est-action excel-dl" onclick="window.open('${item.excel_url}', '_blank')">엑셀</button>` : ''}
        <button class="btn-est-action delete" data-id="${item.id}">삭제</button>
      </div>
    `;

    // Load action
    el.querySelector('.load').onclick = async () => {
      const confirmLoad = confirm('현재 작업 중인 도면이 덮어씌워집니다. 불러오시겠습니까?');
      if (!confirmLoad) return;
      
      const { data: quote, error: getErr } = await supabaseClient
        .from('quotes')
        .select('project_data')
        .eq('id', item.id)
        .single();
        
      if (getErr || !quote) {
        alert('도면 정보를 불러오지 못했습니다.');
        return;
      }

      if (quote.project_data) {
        // Restore project data
        const restored = quote.project_data;
        if (restored.lights) state.lights = restored.lights;
        if (restored.zones) state.zones = restored.zones;
        if (restored.dimensions) state.dimensions = restored.dimensions;
        if (restored.ceilingHeight) state.ceilingHeight = restored.ceilingHeight;
        
        state.activeQuoteId = item.id; // Remember this quote for overwriting
        recalculateAllZones();
        updateStats();
        renderAll();
        alert('도면을 성공적으로 불러왔습니다.');
        document.getElementById('myEstimatesOverlay').style.display = 'none';
      }
    };

    // Delete action
    el.querySelector('.delete').onclick = async () => {
      const confirmDel = confirm('견적서를 삭제하시겠습니까?');
      if (!confirmDel) return;

      const { error: delErr } = await supabaseClient
        .from('quotes')
        .delete()
        .eq('id', item.id);

      if (delErr) {
        alert('삭제 실패: ' + delErr.message);
      } else {
        loadMyEstimatesList();
      }
    };

    listContainer.appendChild(el);
  });
}

// Load My Consultation Requests (견적 상담내역)
function getConsultStatusBadge(status) {
  if (status === '상담대기') return { cls: 'waiting', label: '상담대기' };
  if (status === '취소') return { cls: 'cancelled', label: '취소됨' };
  if (status === '견적 발송') return { cls: 'sent', label: '견적 발송' };
  if (status === '발주 확정') return { cls: 'confirmed', label: '발주 확정' };
  return { cls: 'done', label: '상담완료' };
}

async function loadMyConsultations() {
  const listContainer = document.getElementById('consultationsListContainer');
  if (!listContainer) return;

  listContainer.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-dim);">상담내역 로드 중...</div>';

  if (!authUser) return;

  const { data, error } = await supabaseClient
    .from('ConsultationRequest')
    .select('id, address, hope_date, status, created_at, image_url, controller_markers, controller_confirmed, final_quote_excel_url, final_floorplan_url')
    .eq('user_id', authUser.id)
    .order('created_at', { ascending: false });

  if (error) {
    listContainer.innerHTML = '<div style="text-align:center; padding:20px; color:#ff453a;">로드 오류: ' + error.message + '</div>';
    return;
  }

  if (!data || data.length === 0) {
    listContainer.innerHTML = '<div class="empty-estimates-msg" style="text-align: center; color: var(--text-dim); padding: 40px 0; font-size: 13px;">신청한 상담 내역이 없습니다.</div>';
    return;
  }

  listContainer.innerHTML = '';
  data.forEach(item => {
    const el = document.createElement('div');
    el.className = 'estimate-item';
    const dateStr = new Date(item.created_at).toLocaleString();
    const badge = getConsultStatusBadge(item.status);
    const canCancel = item.status === '상담대기';
    const markerCount = (item.controller_markers || []).length;
    const markLabel = item.controller_confirmed ? '컨트롤러 확인완료'
      : markerCount > 0 ? `컨트롤러 위치 수정 (${markerCount})`
      : '컨트롤러 위치 표시';
    const hasFinalQuote = !!item.final_quote_excel_url;
    const canOrder = item.status === '견적 발송';

    el.innerHTML = `
      <div class="estimate-info">
        <div class="estimate-name">${item.address || '주소 미입력'}</div>
        <div class="estimate-date">${dateStr}${item.hope_date ? ' · 희망 시공일 ' + item.hope_date : ''}</div>
      </div>
      <div class="estimate-actions">
        <span class="consult-status-badge ${badge.cls}">${badge.label}</span>
        ${hasFinalQuote ? `<button class="btn-est-action excel-dl" data-quote-dl="${item.id}">견적서 다운로드</button>` : ''}
        ${item.image_url ? `<button class="btn-est-action load" data-mark-id="${item.id}">${markLabel}</button>` : ''}
        ${canOrder ? `<button class="btn-est-action order" data-order-id="${item.id}">발주하기</button>` : ''}
        ${canCancel ? `<button class="btn-est-action delete" data-id="${item.id}">취소</button>` : ''}
      </div>
    `;

    const markBtn = el.querySelector('[data-mark-id]');
    if (markBtn) {
      markBtn.onclick = () => openControllerMarkModal(item);
    }

    const dlBtn = el.querySelector('[data-quote-dl]');
    if (dlBtn) {
      dlBtn.onclick = () => downloadFinalQuote(item);
    }

    const orderBtn = el.querySelector('[data-order-id]');
    if (orderBtn) {
      orderBtn.onclick = async () => {
        const confirmOrder = confirm('최종 견적서를 확인하셨나요? 발주를 확정하시겠습니까?\n발주 확정 후에는 되돌릴 수 없습니다.');
        if (!confirmOrder) return;

        const { error: orderErr } = await supabaseClient
          .from('ConsultationRequest')
          .update({ status: '발주 확정' })
          .eq('id', item.id);

        if (orderErr) {
          alert('발주 확정 실패: ' + orderErr.message);
        } else {
          loadMyConsultations();
        }
      };
    }

    if (canCancel) {
      el.querySelector('.delete').onclick = async () => {
        const confirmCancel = confirm('상담 신청을 취소하시겠습니까?');
        if (!confirmCancel) return;

        const { error: cancelErr } = await supabaseClient
          .from('ConsultationRequest')
          .update({ status: '취소' })
          .eq('id', item.id);

        if (cancelErr) {
          alert('취소 실패: ' + cancelErr.message);
        } else {
          loadMyConsultations();
        }
      };
    }

    listContainer.appendChild(el);
  });
}

async function downloadFinalQuote(item) {
  if (!item.final_quote_excel_url) return;

  const { data: excelSigned, error: excelErr } = await supabaseClient.storage
    .from('consultation-quotes')
    .createSignedUrl(item.final_quote_excel_url, 300);
  if (excelErr || !excelSigned) {
    alert('견적서 다운로드 링크 생성에 실패했습니다: ' + (excelErr ? excelErr.message : ''));
    return;
  }
  window.open(excelSigned.signedUrl, '_blank');

  if (item.final_floorplan_url) {
    const { data: fpSigned } = await supabaseClient.storage
      .from('consultation-quotes')
      .createSignedUrl(item.final_floorplan_url, 300);
    if (fpSigned) {
      window.open(fpSigned.signedUrl, '_blank');
    }
  }
}

// ==================== CONTROLLER MARKING (컨트롤러 위치 표시) ====================
const controllerMarkState = {
  requestId: null,
  markers: [] // [{ x, y }] normalized 0~1 relative to the floor plan image
};

function openControllerMarkModal(item) {
  controllerMarkState.requestId = item.id;
  controllerMarkState.markers = (item.controller_markers || []).map(m => ({ x: m.x, y: m.y }));

  const overlay = document.getElementById('controllerMarkOverlay');
  const img = document.getElementById('controllerMarkImg');
  img.src = item.image_url;
  overlay.style.display = 'flex';
  renderControllerMarkPins();

  const wrap = document.getElementById('controllerMarkCanvasWrap');
  wrap.onclick = (e) => {
    if (e.target.closest('.controller-mark-pin')) return; // 핀 클릭은 별도 핸들러(삭제)에서 처리
    const rect = img.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    if (x < 0 || x > 1 || y < 0 || y > 1) return;
    controllerMarkState.markers.push({ x, y });
    renderControllerMarkPins();
  };
}

function closeControllerMarkModal() {
  document.getElementById('controllerMarkOverlay').style.display = 'none';
  controllerMarkState.requestId = null;
  controllerMarkState.markers = [];
}

function renderControllerMarkPins() {
  const pinsContainer = document.getElementById('controllerMarkPins');
  pinsContainer.innerHTML = '';
  controllerMarkState.markers.forEach((m, idx) => {
    const pin = document.createElement('div');
    pin.className = 'controller-mark-pin';
    pin.style.left = (m.x * 100) + '%';
    pin.style.top = (m.y * 100) + '%';
    pin.textContent = idx + 1;
    pin.title = '클릭해서 삭제';
    pin.onclick = (e) => {
      e.stopPropagation();
      controllerMarkState.markers.splice(idx, 1);
      renderControllerMarkPins();
    };
    pinsContainer.appendChild(pin);
  });
  document.getElementById('controllerMarkCount').textContent = `${controllerMarkState.markers.length}개 표시됨`;
}

async function saveControllerMarkers() {
  if (!controllerMarkState.requestId) return;

  const { error } = await supabaseClient
    .from('ConsultationRequest')
    .update({
      controller_markers: controllerMarkState.markers,
      controller_confirmed: false // 마킹이 바뀌면 담당자가 다시 확인해야 하므로 재확인 대기 상태로 되돌림
    })
    .eq('id', controllerMarkState.requestId);

  if (error) {
    alert('저장 실패: ' + error.message);
    return;
  }

  closeControllerMarkModal();
  loadMyConsultations();
}

// Load Feedback History
async function loadFeedbackHistory() {
  const listContainer = document.getElementById('feedbackList');
  if (!listContainer) return;

  listContainer.innerHTML = '<div style="text-align:center; padding:10px; color:var(--text-dim);">로드 중...</div>';

  if (!authUser) return;

  const { data, error } = await supabaseClient
    .from('feedbacks')
    .select('title, content, created_at')
    .eq('user_id', authUser.id)
    .order('created_at', { ascending: false });

  if (error) {
    listContainer.innerHTML = '<div style="text-align:center; padding:10px; color:#ff453a;">오류: ' + error.message + '</div>';
    return;
  }

  if (!data || data.length === 0) {
    listContainer.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-dim);">제출한 피드백이 없습니다.</div>';
    return;
  }

  listContainer.innerHTML = '';
  data.forEach(item => {
    const el = document.createElement('div');
    el.className = 'feedback-item';
    const dateStr = new Date(item.created_at).toLocaleDateString();

    el.innerHTML = `
      <div class="feedback-item-header">
        <span class="feedback-item-title">${item.title}</span>
        <span class="feedback-item-date">${dateStr}</span>
      </div>
      <div class="feedback-item-content">${item.content}</div>
    `;
    listContainer.appendChild(el);
  });
}


// Start App
init();
