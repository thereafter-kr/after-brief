// ===== After Brief — app.js =====

// ===== PASSWORD GATE =====
(function() {
  const GATE_PW = 'thereafter2026';
  const gate = document.getElementById('gate');
  const gateInput = document.getElementById('gate-input');
  const gateBtn = document.getElementById('gate-btn');
  const gateError = document.getElementById('gate-error');

  document.body.classList.add('locked');

  function tryUnlock() {
    if (gateInput.value === GATE_PW) {
      gate.classList.add('hidden');
      document.body.classList.remove('locked');
    } else {
      gateError.textContent = '비밀번호가 올바르지 않습니다.';
      gateInput.value = '';
      gateInput.focus();
    }
  }

  gateBtn.addEventListener('click', tryUnlock);
  gateInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryUnlock();
  });
  gateInput.focus();
})();

// ===== INSIGHTS DATA (50개) =====
const INSIGHTS_DATA = {
  1: { name: '지울 수 없는 진심 (안성기의 손편지)', keywords: '#손편지 #진심' },
  2: { name: '셀프 환대 (최화정)', keywords: '#리추얼 #셀프환대' },
  3: { name: '로컬의 중력', keywords: '#결핍의미학 #목적지브랜드 #성심당' },
  4: { name: '지금 아니면 없다', keywords: '#긴박한경험 #시간제한 #자라' },
  5: { name: "먹는 곳이 아니라 '있는' 곳", keywords: '#체류형공간 #런던베이글뮤지엄' },
  6: { name: "평범한 것을 '뮤지엄'이라 부르는 순간", keywords: '#네이밍의힘 #경험격상' },
  7: { name: "매장이 아니라 '사건'", keywords: '#드롭컬처 #오픈런 #ZARA' },
  8: { name: '완벽한 기본', keywords: '#본질의완성 #유니클로 #장인정신' },
  9: { name: "옷장이 아니라 '유니폼'", keywords: '#보편성 #선택단순화 #유니클로' },
  10: { name: '보이지 않는 기술', keywords: '#숨겨진혁신 #유니클로' },
  11: { name: '계절을 파는 가게', keywords: '#기능이스타일 #에어리즘 #히트텍' },
  12: { name: '빠지는 것의 미학', keywords: '#극단적단순 #노로고 #미니멀' },
  13: { name: '못생긴 밑창의 역습', keywords: '#기능주의 #엔지니어링 #온' },
  14: { name: '주인공을 죽여도 세계는 산다', keywords: '#세계관 #유니버스 #주토피아' },
  15: { name: '선택지가 3개밖에 없는 마트', keywords: '#결정피로 #코스트코 #큐레이션' },
  16: { name: '메뉴가 3개밖에 없는 버거집', keywords: '#단순함 #인앤아웃 #집중' },
  17: { name: '안 하는 버거집', keywords: '#거부 #원칙 #인앤아웃' },
  18: { name: '시크릿 메뉴가 더 유명한 가게', keywords: '#숨김 #시크릿메뉴 #인앤아웃' },
  19: { name: '컨시어지가 있는 서점', keywords: '#맞춤서비스 #츠타야 #큐레이션' },
  20: { name: '50대만 오는 서점', keywords: '#선택과집중 #시니어 #츠타야' },
  21: { name: '3개의 법칙', keywords: '#결정피로 #선택축소 #심리학' },
  22: { name: '신발이 아니라 선수를 팝니다', keywords: '#꿈 #나이키 #스토리' },
  23: { name: "집도 아니고 회사도 아닌 곳", keywords: '#스타벅스 #제3의공간 #카테고리창조' },
  24: { name: '주방이 카운터 앞에 있습니다', keywords: '#오픈키친 #치폴레 #투명성' },
  25: { name: '종이봉투에 철학을 쓰는 식당', keywords: '#문화 #치폴레 #콘텐츠' },
  26: { name: '집주인이 고객보다 중요한 회사', keywords: '#공급중심 #에어비앤비 #역발상' },
  27: { name: '호텔이 아니라 경험을 팝니다', keywords: '#경험판매 #에어비앤비 #로컬' },
  28: { name: '영상 속 남자가 튀어나왔습니다', keywords: '#디지털소환 #온오프통합' },
  29: { name: '상 못 받았는데 가장 화제', keywords: '#기억승리 #화제성' },
  30: { name: '숫자가 아니라, 구름', keywords: '#감각의언어 #스펙을느낌으로 #온' },
  31: { name: '완벽하게 통역되자, 아무것도 통하지 않았습니다', keywords: '#AI통역 #기술의역설' },
  32: { name: '"나도 저래" - 네 글자로 끝나는 공감', keywords: '#나도저래 #평범의보편 #러브미' },
  33: { name: '물인데, 맥주캔', keywords: '#리퀴드데스 #정체성디자인 #포장의힘' },
  34: { name: '선생님이 아니라, 초록 올빼미', keywords: '#두올링고 #응원의교육' },
  35: { name: '새로운 게 아니라, 이미 하던 거', keywords: '#관찰의힘 #크래프트하인즈 #소비자가만든다' },
  36: { name: '잠만 자도 사게 됩니다 (MUJI Hotel)', keywords: '#무지호텔 #체험형쇼룸 #살아보는경험' },
  37: { name: '쓰레기가 20만원입니다 (FREITAG)', keywords: '#업사이클링 #유일무이 #프라이탁' },
  38: { name: '사지 마세요, 가 가장 잘 팔렸습니다 (Patagonia)', keywords: '#역설의브랜딩 #진정성 #파타고니아' },
  39: { name: '화면 밖으로 나왔습니다 (Netflix House)', keywords: '#넷플릭스하우스 #LBE #콘텐츠가공간이되는순간' },
  40: { name: '빈 종이 한 장이 13조 원입니다 (Notion)', keywords: '#노션 #락인전략 #빈캔버스' },
  41: { name: '10시간 29분 통화, 신발 한 켤레 (Zappos)', keywords: '#비효율의감동 #자포스 #매뉴얼없는콜센터' },
  42: { name: '카페가 있는 옷가게가 아닙니다 (ARKET)', keywords: '#노르딕라이프스타일 #SPA의진화 #아르켓' },
  43: { name: '비싼 가격이 콘텐츠입니다 (Erewhon)', keywords: '#가격이콘텐츠 #셀럽스무디 #에레원' },
  44: { name: '좌석을 없앴더니 3만 개가 됐습니다 (Luckin Coffee)', keywords: '#경험을뺀전략 #루이싱커피 #앱퍼스트' },
  45: { name: '백화점이 화성으로 갔습니다 (SKP-S)', keywords: '#세계관리테일 #젠틀몬스터 #비상업공간' },
  46: { name: '뭐가 들었는지 모릅니다. 그래서 삽니다 (POP MART)', keywords: '#블라인드박스 #팝마트 #불확실성이상품' },
  47: { name: '메뉴판이 없습니다 (% Arabica)', keywords: '#미니멀카페 #여백의디자인 #퍼센트아라비카' },
  48: { name: "차 의식을 없앤 찻집 (Tea'stone)", keywords: '#전통차MZ #티스톤 #역발상' },
  49: { name: 'IT 표준화로 3㎡에서도 품질 일관성 (Fisheye)', keywords: '#시스템화 #피쉬아이 #데이터표준화' },
  50: { name: '이벤트 시스템 (Moncler Genius)', keywords: '#몽클레르 #이벤트시스템 #반복구조' }
};

// ===== STATE =====
let state = {
  projectInfo: {},
  modules: []
};

// ===== DOM =====
const loadBtn = document.getElementById('loadBtn');
const backBtn = document.getElementById('backBtn');
const exportClipboardBtn = document.getElementById('exportClipboard');
const exportJSONBtn = document.getElementById('exportJSON');

// ===== PARSE MATCH JSON =====
function parseMatchJSON(jsonStr) {
  try {
    const data = JSON.parse(jsonStr);
    state.projectInfo = {
      client: data.client || '',
      type: data.rfp?.type || '',
      industry: data.rfp?.industry || '',
      target: data.rfp?.target || '',
      objectives: data.rfp?.objectives || [],
      budget: data.rfp?.budget || '',
      keywords: data.rfp?.keywords || '',
      m5Story: data.recommendation?.m5 || '',
      m1Opening: data.recommendation?.m1 || '',
      m2Law: data.recommendation?.m2 || '',
      m3Insights: data.recommendation?.m3 || [],
      m4Concept: data.recommendation?.m4 || '',
      recipe: data.recommendation?.recipe || ''
    };
    generateDefaultSlides();
    return true;
  } catch (e) {
    alert('JSON 형식이 올바르지 않습니다.\n\n' + e.message);
    return false;
  }
}

// ===== GENERATE DEFAULT SLIDES =====
function generateDefaultSlides() {
  const info = state.projectInfo;

  // M1: 오프닝 (3장)
  const m1Slides = [
    { message: `[타이틀] ${info.client || '프로젝트'} ${info.type || ''} 제안서` },
    { message: `[목차] 1. 배경과 목표 / 2. 관점과 문제정의 / 3. 인사이트 / 4. 컨셉과 실행` },
    { message: `[배경] ${info.industry || ''} 시장, ${info.target || ''} 타겟 대상 — ${info.m1Opening || ''}` }
  ];

  // M2: 관점 (5장)
  const objectives = info.objectives || [];
  const m2Slides = [];
  for (let i = 0; i < 4; i++) {
    if (i < objectives.length) {
      m2Slides.push({ message: `[관점 ${i + 1}] ${objectives[i]} — 문제정의와 방향성` });
    } else {
      m2Slides.push({ message: `[관점 ${i + 1}] (목적 추가 필요)` });
    }
  }
  m2Slides.push({ message: `[관점 요약] ${info.m2Law || ''} — 핵심 관점 종합` });

  // M3: 인사이트 (7장)
  const insightIds = info.m3Insights || [];
  const m3Slides = [];
  for (let i = 0; i < 7; i++) {
    if (i < insightIds.length) {
      const id = insightIds[i];
      const ins = INSIGHTS_DATA[id];
      if (ins) {
        m3Slides.push({ message: `[인사이트 #${String(id).padStart(2, '0')}] ${ins.name} ${ins.keywords}` });
      } else {
        m3Slides.push({ message: `[인사이트 #${String(id).padStart(2, '0')}] (데이터 없음)` });
      }
    } else {
      m3Slides.push({ message: `[인사이트] (추가 선택 필요)` });
    }
  }

  // M4: 컨셉 (5장)
  const keywordsText = info.keywords || '';
  const m4Slides = [
    { message: `[경험설계] ${info.m5Story || ''} — 스토리 패턴 기반 경험 설계` },
    { message: `[톤앤매너] 프로젝트 톤앤매너 정의` },
    { message: `[핵심 키워드] ${keywordsText || '핵심 키워드 정의'}` },
    { message: `[예산/실행] 예산 ${info.budget || '미정'} 기준 실행 계획` },
    { message: `[마무리] ${info.m4Concept || ''} — 컨셉 요약 및 마무리` }
  ];

  state.modules = [
    { name: 'M1 오프닝', slides: m1Slides },
    { name: 'M2 관점', slides: m2Slides },
    { name: 'M3 인사이트', slides: m3Slides },
    { name: 'M4 컨셉', slides: m4Slides }
  ];
}

// ===== COMPUTE SLIDE NUMBERS =====
function computeSlideNumbers() {
  const numbers = [];
  let num = 1;
  for (const mod of state.modules) {
    const modNums = [];
    for (let i = 0; i < mod.slides.length; i++) {
      modNums.push(num++);
    }
    numbers.push(modNums);
  }
  return numbers;
}

// ===== RENDER EDITOR =====
function renderEditor() {
  const info = state.projectInfo;

  // Summary bar
  document.getElementById('summaryBar').innerHTML = `
    <div class="sb-title">프로젝트 요약${info.client ? ' — ' + info.client : ''}</div>
    <div class="sb-info">
      <span>${info.type || '-'}</span>
      <span>${info.industry || '-'}</span>
      <span>${info.target || '-'}</span>
      ${(info.objectives || []).map(o => `<span>${o}</span>`).join('')}
      <span>${info.budget || '-'}</span>
    </div>
  `;

  // Module editor
  const numbers = computeSlideNumbers();
  const moduleClasses = ['m1', 'm2', 'm3', 'm4'];
  const editor = document.getElementById('moduleEditor');
  editor.innerHTML = '';

  state.modules.forEach((mod, mi) => {
    const block = document.createElement('div');
    block.className = 'module-block';

    const header = document.createElement('div');
    header.className = `module-header ${moduleClasses[mi] || ''}`;
    header.innerHTML = `
      <div class="module-name">${mod.name}</div>
      <div class="module-count">${mod.slides.length}장</div>
    `;
    block.appendChild(header);

    mod.slides.forEach((slide, si) => {
      const row = document.createElement('div');
      row.className = 'slide-row';

      const numEl = document.createElement('div');
      numEl.className = 'slide-num';
      numEl.textContent = String(numbers[mi][si]).padStart(2, '0');

      const textarea = document.createElement('textarea');
      textarea.className = 'slide-message';
      textarea.value = slide.message;
      textarea.rows = 1;
      textarea.dataset.module = mi;
      textarea.dataset.slide = si;

      // Auto-resize
      textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        state.modules[mi].slides[si].message = this.value;
      });

      const actions = document.createElement('div');
      actions.className = 'slide-actions';

      const addBtn = document.createElement('button');
      addBtn.className = 'slide-action-btn';
      addBtn.textContent = '+';
      addBtn.title = '아래에 슬라이드 추가';
      addBtn.addEventListener('click', () => addSlide(mi, si));

      const delBtn = document.createElement('button');
      delBtn.className = 'slide-action-btn delete';
      delBtn.textContent = '−';
      delBtn.title = '슬라이드 삭제';
      delBtn.addEventListener('click', () => deleteSlide(mi, si));

      actions.appendChild(addBtn);
      actions.appendChild(delBtn);

      row.appendChild(numEl);
      row.appendChild(textarea);
      row.appendChild(actions);
      block.appendChild(row);
    });

    editor.appendChild(block);
  });

  // Auto-resize all textareas
  requestAnimationFrame(() => {
    editor.querySelectorAll('.slide-message').forEach(ta => {
      ta.style.height = 'auto';
      ta.style.height = ta.scrollHeight + 'px';
    });
  });
}

// ===== ADD / DELETE SLIDE =====
function addSlide(moduleIndex, afterSlideIndex) {
  state.modules[moduleIndex].slides.splice(afterSlideIndex + 1, 0, {
    message: '(새 슬라이드)'
  });
  renderEditor();
}

function deleteSlide(moduleIndex, slideIndex) {
  if (state.modules[moduleIndex].slides.length <= 1) {
    alert('모듈에는 최소 1장의 슬라이드가 필요합니다.');
    return;
  }
  state.modules[moduleIndex].slides.splice(slideIndex, 1);
  renderEditor();
}

// ===== EXPORT: CLIPBOARD =====
function exportClipboard() {
  const numbers = computeSlideNumbers();
  const lines = ['[After Brief — 20슬라이드 메시지]', ''];

  if (state.projectInfo.client) {
    lines.push(`클라이언트: ${state.projectInfo.client}`);
  }
  lines.push(`RFP: ${state.projectInfo.type} / ${state.projectInfo.industry} / ${state.projectInfo.target} / ${(state.projectInfo.objectives || []).join(',')} / ${state.projectInfo.budget}`);
  lines.push('');

  state.modules.forEach((mod, mi) => {
    lines.push(`── ${mod.name} ──`);
    mod.slides.forEach((slide, si) => {
      const num = String(numbers[mi][si]).padStart(2, '0');
      lines.push(`${num}. ${slide.message}`);
    });
    lines.push('');
  });

  const totalSlides = state.modules.reduce((sum, m) => sum + m.slides.length, 0);
  lines.push(`총 ${totalSlides}장`);

  const text = lines.join('\n');
  navigator.clipboard.writeText(text).then(() => showToast('클립보드에 복사되었습니다'));
}

// ===== EXPORT: JSON =====
function exportJSON() {
  const numbers = computeSlideNumbers();
  const output = {
    projectInfo: state.projectInfo,
    modules: state.modules.map((mod, mi) => ({
      name: mod.name,
      slides: mod.slides.map((slide, si) => ({
        number: numbers[mi][si],
        message: slide.message
      }))
    })),
    totalSlides: state.modules.reduce((sum, m) => sum + m.slides.length, 0),
    exportedAt: new Date().toISOString()
  };

  const json = JSON.stringify(output, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `after-brief_${state.projectInfo.client || 'project'}_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('JSON 파일이 다운로드되었습니다');
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ===== EVENT LISTENERS =====
loadBtn.addEventListener('click', () => {
  const jsonStr = document.getElementById('jsonInput').value.trim();
  if (!jsonStr) {
    alert('JSON을 붙여넣어주세요.');
    return;
  }
  if (parseMatchJSON(jsonStr)) {
    renderEditor();
    document.getElementById('editorSection').classList.add('show');
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('editorSection').scrollIntoView({ behavior: 'smooth' });
  }
});

backBtn.addEventListener('click', () => {
  document.getElementById('editorSection').classList.remove('show');
  document.getElementById('inputSection').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

exportClipboardBtn.addEventListener('click', exportClipboard);
exportJSONBtn.addEventListener('click', exportJSON);
