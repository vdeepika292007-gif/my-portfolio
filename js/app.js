/**
 * ==========================================================================
 * Deepika V - Personal Portfolio Website (Vanilla JavaScript)
 * Interactive Studio Edition
 * Inspired by: Sunroom — Orbital Atelier
 * Stack: HTML5, CSS3, Vanilla JS, Bootstrap 5.3 (Zero build tools)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initRoomLightingController();
  initMechanicalClock();
  initSoundController();
  initRoomJourneyHUD();
  initPaletteObserver();
  initHeartDiseaseSimulator();
  initCodeDebugGame();
  initSkillsFilter();
  initProjectsFilter();
  initContactForm();
  initScrollSpy();
});

/* ==========================================================================
   1. 3-MODE ROOM LIGHTING CONTROLLER (AUTO / LIGHT / DARK)
   ========================================================================== */
function initRoomLightingController() {
  const root = document.documentElement;
  const pillBtns = document.querySelectorAll('[data-lighting-mode]');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const clockBadge = document.getElementById('navbarClockTime');

  function getAutoLightingTheme() {
    const hours = new Date().getHours();
    // Daylight between 06:00 and 18:00
    return (hours >= 6 && hours < 18) ? 'light' : 'dark';
  }

  function getSavedMode() {
    return localStorage.getItem('portfolio-lighting-mode') || 'auto';
  }

  function applyLighting(mode) {
    let effectiveTheme = mode;
    if (mode === 'auto') {
      effectiveTheme = getAutoLightingTheme();
    }

    root.setAttribute('data-bs-theme', effectiveTheme);
    root.dataset.roomLighting = effectiveTheme;
    localStorage.setItem('portfolio-lighting-mode', mode);

    // Update Pill Buttons
    pillBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lighting-mode') === mode);
    });

    // Update legacy icon if present
    if (themeIcon) {
      if (effectiveTheme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill text-warning';
      } else {
        themeIcon.className = 'bi bi-moon-fill text-secondary';
      }
    }
  }

  // Bind Mode Buttons
  pillBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const mode = e.currentTarget.getAttribute('data-lighting-mode');
      applyLighting(mode);
      if (window.playTickSound) window.playTickSound(440, 0.04);
    });
  });

  // Legacy Toggle Button Support
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-bs-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyLighting(next);
      if (window.playTickSound) window.playTickSound(440, 0.04);
    });
  }

  // Periodic Auto-check (e.g. at sunset or when tab refocuses)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && getSavedMode() === 'auto') {
      applyLighting('auto');
    }
  });

  // Initial Load
  applyLighting(getSavedMode());
}

/* ==========================================================================
   2. MECHANICAL ANALOG CLOCK & LIVE TIMEZONE READOUT
   ========================================================================== */
function initMechanicalClock() {
  const hourHand = document.getElementById('clockHandHour');
  const minuteHand = document.getElementById('clockHandMinute');
  const secondHand = document.getElementById('clockHandSecond');
  const digitalReadout = document.getElementById('clockDigitalTime');
  const navbarClock = document.getElementById('navbarClockTime');

  // Detect local timezone abbreviation
  let tzAbbr = 'Local';
  try {
    const tzString = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const parts = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(new Date());
    const tzPart = parts.find(p => p.type === 'timeZoneName');
    if (tzPart) tzAbbr = tzPart.value;
    else tzAbbr = tzString.split('/').pop().replace(/_/g, ' ');
  } catch (e) {
    tzAbbr = 'Time';
  }

  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const millis = now.getMilliseconds();

    // High precision angles for smooth motion
    const secondAngle = (seconds + millis / 1000) * 6; // 360 / 60
    const minuteAngle = (minutes + seconds / 60) * 6;  // 360 / 60
    const hourAngle = ((hours % 12) + minutes / 60) * 30; // 360 / 12

    if (secondHand) secondHand.style.transform = `rotate(${secondAngle}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourAngle}deg)`;

    // Digital format: hh:mm:ss AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    const timeString = `${displayHours}:${displayMinutes}:${displaySeconds} ${ampm} ${tzAbbr}`;

    if (digitalReadout) digitalReadout.textContent = timeString;
    if (navbarClock) navbarClock.textContent = `${displayHours}:${displayMinutes} ${ampm} ${tzAbbr}`;

    requestAnimationFrame(updateClock);
  }

  requestAnimationFrame(updateClock);
}

/* ==========================================================================
   3. WEB AUDIO CONTROLLER (ANIMATED SOUND WAVES & ACOUSTIC TICKS)
   ========================================================================== */
function initSoundController() {
  const soundBtn = document.getElementById('soundToggleBtn');
  let audioCtx = null;
  let isSoundEnabled = localStorage.getItem('portfolio-sound-enabled') === 'true';

  function updateBtnUI() {
    if (soundBtn) {
      soundBtn.classList.toggle('active', isSoundEnabled);
      soundBtn.setAttribute('title', isSoundEnabled ? 'Sound is ON (Click to mute)' : 'Sound is OFF (Click to unmute)');
      soundBtn.setAttribute('aria-label', isSoundEnabled ? 'Mute acoustic audio feedback' : 'Enable acoustic audio feedback');
    }
  }

  // Synthesized acoustic click using native Web Audio API
  window.playTickSound = function(frequency = 520, duration = 0.035, type = 'sine') {
    if (!isSoundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // AudioContext fallback
    }
  };

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem('portfolio-sound-enabled', String(isSoundEnabled));
      updateBtnUI();
      if (isSoundEnabled) {
        window.playTickSound(680, 0.05);
      }
    });
  }

  // Play subtle feedback on primary button clicks
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, .nav-link, .btn, [role="button"]');
    if (target && isSoundEnabled && target !== soundBtn) {
      window.playTickSound(480, 0.03);
    }
  });

  updateBtnUI();
}

/* ==========================================================================
   4. SOFA-TO-TV TOUR JOURNEY HUD & SKIP CONTROLLER
   ========================================================================== */
function initRoomJourneyHUD() {
  const hud = document.getElementById('roomJourneyHud');
  const stageNum = document.getElementById('journeyStageNum');
  const stageTitle = document.getElementById('journeyStageTitle');
  const progressBar = document.getElementById('journeyProgressBar');
  const skipBtn = document.getElementById('journeySkipBtn');
  const heroSection = document.getElementById('hero');

  if (!hud || !heroSection) return;

  const stages = [
    { num: '01 / 04', title: 'The Studio — Orbital Atelier', threshold: 0.15 },
    { num: '02 / 04', title: 'Make Yourself Comfortable', threshold: 0.45 },
    { num: '03 / 04', title: 'Your View from the Sofa', threshold: 0.75 },
    { num: '04 / 04', title: 'Step Inside the Portfolio', threshold: 1.0 }
  ];

  function updateJourney() {
    const heroRect = heroSection.getBoundingClientRect();
    const heroHeight = heroSection.offsetHeight;
    const scrolled = -heroRect.top;
    const progress = Math.max(0, Math.min(1, scrolled / (heroHeight * 0.75)));

    // Update progress bar
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }

    // Determine current stage
    let currentStage = stages[0];
    for (let i = 0; i < stages.length; i++) {
      if (progress >= (stages[i - 1]?.threshold || 0) && progress <= stages[i].threshold) {
        currentStage = stages[i];
        break;
      }
    }
    if (progress >= 0.8) currentStage = stages[3];

    if (stageNum) stageNum.textContent = currentStage.num;
    if (stageTitle) stageTitle.textContent = currentStage.title;

    // Hide HUD once deep in content
    if (heroRect.bottom < 100) {
      hud.style.opacity = '0';
      hud.style.pointerEvents = 'none';
      hud.style.transform = 'translate(-50%, 20px)';
    } else {
      hud.style.opacity = '1';
      hud.style.pointerEvents = 'auto';
      hud.style.transform = 'translate(-50%, 0)';
    }
  }

  window.addEventListener('scroll', updateJourney, { passive: true });
  window.addEventListener('resize', updateJourney, { passive: true });

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(skipBtn.getAttribute('href') || '#interactive-lab');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  updateJourney();
}

/* ==========================================================================
   5. ROUTE / SECTION PALETTE SHIFTER (AURORA ATMOSPHERE)
   ========================================================================== */
function initPaletteObserver() {
  const root = document.documentElement;
  const sections = [
    { id: 'hero', palette: 'home' },
    { id: 'interactive-lab', palette: 'playground' },
    { id: 'about', palette: 'about' },
    { id: 'skills', palette: 'home' },
    { id: 'projects', palette: 'playground' },
    { id: 'experience', palette: 'about' },
    { id: 'education', palette: 'about' },
    { id: 'contact', palette: 'home' }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const match = sections.find(s => s.id === entry.target.id);
        if (match) {
          root.dataset.palette = match.palette;
        }
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });
}

/* ==========================================================================
   6. HEART DISEASE MACHINE LEARNING PREDICTOR
   ========================================================================== */
function initHeartDiseaseSimulator() {
  const ageSlider = document.getElementById('ageSlider');
  const bpSlider = document.getElementById('bpSlider');
  const cholSlider = document.getElementById('cholSlider');
  const hrSlider = document.getElementById('hrSlider');

  const ageVal = document.getElementById('ageVal');
  const bpVal = document.getElementById('bpVal');
  const cholVal = document.getElementById('cholVal');
  const hrVal = document.getElementById('hrVal');

  const bpZoneBadge = document.getElementById('bpZoneBadge');
  const cholZoneBadge = document.getElementById('cholZoneBadge');
  const targetMaxHr = document.getElementById('targetMaxHr');

  const riskPercentEl = document.getElementById('riskPercent');
  const riskCircleEl = document.getElementById('riskCircle');
  const riskBadgeEl = document.getElementById('riskBadge');
  const riskRecommendationEl = document.getElementById('riskRecommendation');

  const anginaBtn = document.getElementById('anginaBtn');
  let exerciseAngina = false;
  let chestPain = 'non-anginal';

  if (!ageSlider) return;

  function calculateRisk() {
    const age = Number(ageSlider.value);
    const bp = Number(bpSlider.value);
    const chol = Number(cholSlider.value);
    const hr = Number(hrSlider.value);

    // Update numeric labels
    if (ageVal) ageVal.textContent = `${age} Years`;
    if (bpVal) bpVal.textContent = `${bp} mm Hg`;
    if (cholVal) cholVal.textContent = `${chol} mg/dL`;
    if (hrVal) hrVal.textContent = `${hr} bpm`;
    if (targetMaxHr) targetMaxHr.textContent = `Max Est: ${220 - age} bpm`;

    // Clinical zones
    if (bpZoneBadge) {
      if (bp < 120) {
        bpZoneBadge.textContent = 'Optimal (<120)';
        bpZoneBadge.className = 'badge bg-success-subtle text-success border border-success-subtle font-mono';
      } else if (bp <= 129) {
        bpZoneBadge.textContent = 'Elevated (120-129)';
        bpZoneBadge.className = 'badge bg-warning-subtle text-warning-emphasis border border-warning-subtle font-mono';
      } else if (bp <= 139) {
        bpZoneBadge.textContent = 'Stage 1 HTN (130-139)';
        bpZoneBadge.className = 'badge bg-danger-subtle text-danger border border-danger-subtle font-mono';
      } else {
        bpZoneBadge.textContent = 'Stage 2 HTN (140+)';
        bpZoneBadge.className = 'badge bg-danger text-white font-mono';
      }
    }

    if (cholZoneBadge) {
      if (chol < 200) {
        cholZoneBadge.textContent = 'Desirable (<200)';
        cholZoneBadge.className = 'badge bg-success-subtle text-success border border-success-subtle font-mono';
      } else if (chol <= 239) {
        cholZoneBadge.textContent = 'Borderline (200-239)';
        cholZoneBadge.className = 'badge bg-warning-subtle text-warning-emphasis border border-warning-subtle font-mono';
      } else {
        cholZoneBadge.textContent = 'High Risk (240+)';
        cholZoneBadge.className = 'badge bg-danger text-white font-mono';
      }
    }

    // Logistic regression sigmoid formula
    let score = -4.5;
    score += (age - 30) * 0.055;
    score += (bp - 110) * 0.025;
    score += (chol - 180) * 0.018;
    score -= (hr - 120) * 0.022;

    if (chestPain === 'typical') score += 1.25;
    if (chestPain === 'asymptomatic') score += 1.85;
    if (chestPain === 'atypical') score += 0.45;
    if (exerciseAngina) score += 1.45;

    const prob = 1 / (1 + Math.exp(-score));
    const risk = Math.min(Math.max(Math.round(prob * 100), 3), 97);

    if (riskPercentEl) riskPercentEl.textContent = `${risk}%`;

    // Circular gauge animation (perimeter = 251.2 for r=40)
    if (riskCircleEl) {
      const offset = 251.2 - (251.2 * risk) / 100;
      riskCircleEl.style.strokeDashoffset = offset;
      if (risk < 30) riskCircleEl.style.stroke = '#10b981';
      else if (risk < 65) riskCircleEl.style.stroke = '#f59e0b';
      else riskCircleEl.style.stroke = '#f43f5e';
    }

    // Badge & Recommendation
    if (riskBadgeEl) {
      if (risk < 30) {
        riskBadgeEl.textContent = 'Low Cardiovascular Risk';
        riskBadgeEl.className = 'badge bg-success-subtle text-success border border-success-subtle px-3 py-2';
      } else if (risk < 65) {
        riskBadgeEl.textContent = 'Moderate Risk (Borderline)';
        riskBadgeEl.className = 'badge bg-warning-subtle text-warning-emphasis border border-warning-subtle px-3 py-2';
      } else {
        riskBadgeEl.textContent = 'High Clinical Risk';
        riskBadgeEl.className = 'badge bg-danger text-white px-3 py-2';
      }
    }

    if (riskRecommendationEl) {
      if (risk < 30) {
        riskRecommendationEl.textContent = 'Parameters within favorable ranges. Continue regular physical activity and a balanced diet.';
      } else if (risk < 65) {
        riskRecommendationEl.textContent = 'Borderline markers detected (cholesterol or elevated blood pressure). Routine monitoring and lifestyle adjustments advised.';
      } else {
        riskRecommendationEl.textContent = 'Elevated clinical risk detected. Comprehensive medical consultation (stress ECG, lipid management) is advised.';
      }
    }

    // Update SHAP Factor Bars
    const ageImpact = Math.max(0, Math.round((age - 30) * 0.55));
    const bpImpact = Math.max(0, Math.round((bp - 110) * 0.35));
    const cholImpact = Math.max(0, Math.round((chol - 180) * 0.22));
    const hrProt = Math.max(0, Math.round((hr - 120) * 0.28));

    updateBar('barAge', 'barAgeVal', `+${ageImpact}%`, ageImpact * 2.5, '#64748b');
    updateBar('barBp', 'barBpVal', `+${bpImpact}%`, bpImpact * 2.5, bp >= 130 ? '#f43f5e' : '#64748b');
    updateBar('barChol', 'barCholVal', `+${cholImpact}%`, cholImpact * 2.5, chol >= 220 ? '#f59e0b' : '#64748b');
    updateBar('barHr', 'barHrVal', `-${hrProt}% (Protective)`, hrProt * 2.5, '#10b981');
  }

  function updateBar(barId, valId, text, widthPercent, color) {
    const bar = document.getElementById(barId);
    const val = document.getElementById(valId);
    if (val) val.textContent = text;
    if (bar) {
      bar.style.width = `${Math.min(100, Math.max(5, widthPercent))}%`;
      bar.style.backgroundColor = color;
    }
  }

  // Slider event listeners
  [ageSlider, bpSlider, cholSlider, hrSlider].forEach(slider => {
    slider.addEventListener('input', calculateRisk);
  });

  // Chest pain buttons
  document.querySelectorAll('[data-cp]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-cp]').forEach(b => b.classList.remove('active', 'btn-dark', 'btn-light'));
      const target = e.currentTarget;
      target.classList.add('active');
      chestPain = target.getAttribute('data-cp');
      calculateRisk();
    });
  });

  // Angina Toggle
  if (anginaBtn) {
    anginaBtn.addEventListener('click', () => {
      exerciseAngina = !exerciseAngina;
      if (exerciseAngina) {
        anginaBtn.textContent = 'Present (+Angina)';
        anginaBtn.className = 'btn btn-sm btn-danger font-mono';
      } else {
        anginaBtn.textContent = 'Absent (No Pain)';
        anginaBtn.className = 'btn btn-sm btn-outline-secondary font-mono';
      }
      calculateRisk();
    });
  }

  // Preset Personas
  const personas = {
    athlete: { age: 26, bp: 112, chol: 168, hr: 185, cp: 'non-anginal', angina: false },
    worker: { age: 44, bp: 132, chol: 228, hr: 152, cp: 'atypical', angina: false },
    senior: { age: 64, bp: 158, chol: 280, hr: 122, cp: 'typical', angina: true },
    critical: { age: 68, bp: 172, chol: 315, hr: 108, cp: 'asymptomatic', angina: true },
  };

  document.querySelectorAll('[data-persona]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const p = personas[e.currentTarget.getAttribute('data-persona')];
      if (!p) return;
      ageSlider.value = p.age;
      bpSlider.value = p.bp;
      cholSlider.value = p.chol;
      hrSlider.value = p.hr;
      chestPain = p.cp;
      exerciseAngina = p.angina;

      // Update CP UI
      document.querySelectorAll('[data-cp]').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-cp') === p.cp);
      });

      // Update Angina UI
      if (anginaBtn) {
        if (p.angina) {
          anginaBtn.textContent = 'Present (+Angina)';
          anginaBtn.className = 'btn btn-sm btn-danger font-mono';
        } else {
          anginaBtn.textContent = 'Absent (No Pain)';
          anginaBtn.className = 'btn btn-sm btn-outline-secondary font-mono';
        }
      }

      calculateRisk();
    });
  });

  calculateRisk();
}

/* ==========================================================================
   7. CODE DEBUG GAME (ANIMATED BUGGY MASCOT & LIVE TEST RUNNER)
   ========================================================================== */
function initCodeDebugGame() {
  const challenges = [
    {
      id: 1,
      title: 'Challenge 01: Palindrome String Normalization',
      language: 'JavaScript',
      difficulty: 'Easy',
      fileName: 'palindrome.js',
      bugDescription: 'Function fails on mixed casing ("Racecar") and punctuation ("A man, a plan: Panama").',
      hint: 'Palindromes must ignore case and non-alphanumeric punctuation before checking reverse equality.',
      buggyCodeRaw: '  const cleanStr = str; // Bug: No lowercase or regex filter!',
      patchedCodeRaw: "  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');",
      codeSnippet: `function isPalindrome(str) {\n  // Bug is in string normalization:\n  const cleanStr = str; // Missing lowercase & regex filter!\n  const reversed = cleanStr.split('').reverse().join('');\n  return cleanStr === reversed;\n}`,
      options: [
        { id: 'A', text: "Change '===' to '=='", isCorrect: false, feedback: "Incorrect. Strict equality is not the problem." },
        { id: 'B', text: "Normalize with: str.toLowerCase().replace(/[^a-z0-9]/g, '')", isCorrect: true, feedback: "Spot on! Lowercasing and stripping non-alphanumeric symbols fixes all test cases." },
        { id: 'C', text: "Use cleanStr.slice(0, cleanStr.length - 1)", isCorrect: false, feedback: "Incorrect. Slicing drops valid characters." }
      ],
      testCases: [
        { name: 'Test 1', input: '"Racecar"', expected: 'true', runMs: '1.2ms' },
        { name: 'Test 2', input: '"A man, a plan, a canal: Panama"', expected: 'true', runMs: '2.1ms' },
        { name: 'Test 3', input: '"hello world"', expected: 'false', runMs: '0.8ms' }
      ]
    },
    {
      id: 2,
      title: 'Challenge 02: Maximum Subarray Sum (Kadane)',
      language: 'Python',
      difficulty: 'Medium',
      fileName: 'kadane_max.py',
      bugDescription: 'Initial max_sum = 0 returns 0 on all-negative lists like [-3, -1, -5] instead of the maximum single element (-1).',
      hint: 'When all numbers in an array are negative, max_sum = 0 returns 0 which is not in the array! What should it initialize to?',
      buggyCodeRaw: '    max_sum = 0  # Bug: Initializing with 0 fails on negatives!',
      patchedCodeRaw: '    max_sum = nums[0]  # Correct: Starts with first element',
      codeSnippet: `def max_sub_array(nums):\n    max_sum = 0  # Bug: 0 is larger than negative numbers!\n    current_sum = 0\n    for x in nums:\n        current_sum = max(x, current_sum + x)\n        max_sum = max(max_sum, current_sum)\n    return max_sum`,
      options: [
        { id: 'A', text: "Remove max(x, current_sum + x)", isCorrect: false, feedback: "Incorrect. Kadane algorithm requires comparing starting fresh vs extending." },
        { id: 'B', text: "Initialize max_sum = nums[0] (or float('-inf'))", isCorrect: true, feedback: "Correct! Initializing with nums[0] correctly handles all-negative arrays." },
        { id: 'C', text: "Sort nums in descending order first", isCorrect: false, feedback: "Incorrect. Sorting destroys contiguous subarray order." }
      ],
      testCases: [
        { name: 'Test 1', input: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]', expected: '6', runMs: '1.4ms' },
        { name: 'Test 2', input: '[-3, -1, -5]', expected: '-1', runMs: '0.9ms' },
        { name: 'Test 3', input: '[5, 4, -1, 7, 8]', expected: '23', runMs: '1.1ms' }
      ]
    },
    {
      id: 3,
      title: 'Challenge 03: React State Immutability Bug',
      language: 'JavaScript / React',
      difficulty: 'Hard',
      fileName: 'UserList.jsx',
      bugDescription: 'Mutating array state in-place with userList.push() does not trigger component re-render.',
      hint: 'React state must be treated as immutable. Use the spread operator to create a new array reference.',
      buggyCodeRaw: '    userList.push(newUser); // Bug: Direct state mutation!',
      patchedCodeRaw: '    setUserList([...userList, newUser]); // Correct: New array reference',
      codeSnippet: `function addUser(newUser) {\n  // Bug: Direct mutation prevents re-render:\n  userList.push(newUser);\n  setUserList(userList);\n}`,
      options: [
        { id: 'A', text: "Call userList.concat() without setter", isCorrect: false, feedback: "Incorrect. Without setUserList, state doesn't update." },
        { id: 'B', text: "Use setUserList([...userList, newUser])", isCorrect: true, feedback: "Bingo! Spreading into a new array reference allows React to detect state changes." },
        { id: 'C', text: "Wrap inside setTimeout()", isCorrect: false, feedback: "Incorrect. Timing does not solve reference equality checks." }
      ],
      testCases: [
        { name: 'Test 1', input: 'addUser({ name: "Alex" })', expected: 'length === 1', runMs: '1.8ms' },
        { name: 'Test 2', input: 'Virtual DOM Diff', expected: 'Re-rendered', runMs: '2.4ms' },
        { name: 'Test 3', input: 'Prev State Identity', expected: 'prev !== next', runMs: '0.7ms' }
      ]
    }
  ];

  let currentIdx = 0;
  let viewMode = 'editor';
  let xp = 150;
  let streak = 1;

  const codeContent = document.getElementById('codeContent');
  const codeFileName = document.getElementById('codeFileName');
  const bugContext = document.getElementById('bugContext');
  const hintText = document.getElementById('hintText');
  const hintBox = document.getElementById('hintBox');
  const toggleHintBtn = document.getElementById('toggleHintBtn');
  const bugSpeech = document.getElementById('bugSpeech');
  const bugMascotBtn = document.getElementById('bugMascotBtn');
  const optionsContainer = document.getElementById('optionsContainer');
  const testResultsContainer = document.getElementById('testResultsContainer');
  const nextChallengeBtn = document.getElementById('nextChallengeBtn');
  const resetChallengeBtn = document.getElementById('resetChallengeBtn');
  const scoreBadge = document.getElementById('scoreBadge');
  const streakBadge = document.getElementById('streakBadge');
  const xpFloatingPopup = document.getElementById('xpFloatingPopup');

  if (!codeContent) return;

  function loadChallenge(index) {
    currentIdx = index;
    const c = challenges[currentIdx];

    document.getElementById('challengeTitle').textContent = c.title;
    document.getElementById('challengeMeta').textContent = `${c.language} • ${c.difficulty}`;
    if (codeFileName) codeFileName.textContent = c.fileName;
    if (bugContext) bugContext.textContent = c.bugDescription;
    if (hintText) hintText.textContent = c.hint;
    if (hintBox) hintBox.classList.add('d-none');

    if (bugSpeech) bugSpeech.textContent = "Hey! I broke this code! Can you spot my bug?";

    renderCode();

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      c.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline-secondary text-start w-100 p-3 mb-2 font-mono card-clean';
        btn.innerHTML = `<span class="badge bg-secondary me-2">${opt.id}</span> <span>${opt.text}</span>`;
        btn.addEventListener('click', () => handleSelectOption(opt));
        optionsContainer.appendChild(btn);
      });
    }

    renderTests('idle');
  }

  function renderCode() {
    const c = challenges[currentIdx];
    if (viewMode === 'editor') {
      codeContent.innerHTML = `<pre class="m-0 text-light font-mono"><code>${escapeHtml(c.codeSnippet)}</code></pre>`;
    } else {
      codeContent.innerHTML = `
        <div class="font-mono text-xs">
          <div class="text-secondary pb-1">@@ diff patch @@</div>
          <div class="p-2 rounded bg-danger-subtle text-danger border border-danger-subtle mb-1">
            <strong>-</strong> ${escapeHtml(c.buggyCodeRaw)}
          </div>
          <div class="p-2 rounded bg-success-subtle text-success border border-success-subtle">
            <strong>+</strong> ${escapeHtml(c.patchedCodeRaw)}
          </div>
        </div>
      `;
    }
  }

  function renderTests(status) {
    const c = challenges[currentIdx];
    if (!testResultsContainer) return;
    testResultsContainer.innerHTML = '';

    c.testCases.forEach((tc) => {
      const div = document.createElement('div');
      div.className = 'p-2 rounded border mb-1 d-flex align-items-center justify-content-between font-mono text-xs';

      if (status === 'pass') {
        div.className += ' bg-success-subtle text-success border-success-subtle';
        div.innerHTML = `<span>${tc.name}: ${escapeHtml(tc.input)}</span> <span class="badge bg-success">PASS (${tc.runMs})</span>`;
      } else if (status === 'fail') {
        div.className += ' bg-danger-subtle text-danger border-danger-subtle';
        div.innerHTML = `<span>${tc.name}: ${escapeHtml(tc.input)}</span> <span class="badge bg-danger">FAIL</span>`;
      } else if (status === 'running') {
        div.className += ' bg-info-subtle text-info border-info-subtle';
        div.innerHTML = `<span>${tc.name}: ${escapeHtml(tc.input)}</span> <span class="spinner-border spinner-border-sm"></span>`;
      } else {
        div.className += ' bg-body-tertiary text-secondary';
        div.innerHTML = `<span>${tc.name}: ${escapeHtml(tc.input)}</span> <span class="badge bg-secondary">Awaiting run</span>`;
      }
      testResultsContainer.appendChild(div);
    });
  }

  function handleSelectOption(opt) {
    renderTests('running');
    if (bugSpeech) bugSpeech.textContent = "Running automated test suite in sandbox...";

    setTimeout(() => {
      if (opt.isCorrect) {
        renderTests('pass');
        xp += 50;
        streak += 1;
        if (scoreBadge) scoreBadge.textContent = `XP: ${xp}`;
        if (streakBadge) streakBadge.textContent = `Streak: ${streak}x`;
        if (bugSpeech) bugSpeech.textContent = "Curse you, clever developer! You fixed my bug!";

        if (xpFloatingPopup) {
          xpFloatingPopup.classList.remove('d-none');
          xpFloatingPopup.classList.add('animate-float-xp');
          setTimeout(() => {
            xpFloatingPopup.classList.add('d-none');
            xpFloatingPopup.classList.remove('animate-float-xp');
          }, 1300);
        }
      } else {
        renderTests('fail');
        streak = 1;
        if (streakBadge) streakBadge.textContent = `Streak: ${streak}x`;
        if (bugSpeech) bugSpeech.textContent = "Haha! Nice try! Unit tests are still failing!";
      }
    }, 550);
  }

  if (bugMascotBtn) {
    bugMascotBtn.addEventListener('click', () => {
      const taunts = [
        "Ouch! Don't poke me, fix the bug!",
        `Hehe! Check challenge ${currentIdx + 1}!`,
        "I love breaking production code!",
        "Can you pass all 3 unit test assertions?"
      ];
      if (bugSpeech) {
        bugSpeech.textContent = taunts[Math.floor(Math.random() * taunts.length)];
      }
    });
  }

  if (toggleHintBtn) {
    toggleHintBtn.addEventListener('click', () => {
      if (hintBox) hintBox.classList.toggle('d-none');
    });
  }

  document.querySelectorAll('[data-code-view]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-code-view]').forEach(b => b.classList.remove('active', 'btn-secondary'));
      e.currentTarget.classList.add('active', 'btn-secondary');
      viewMode = e.currentTarget.getAttribute('data-code-view');
      renderCode();
    });
  });

  if (nextChallengeBtn) {
    nextChallengeBtn.addEventListener('click', () => {
      loadChallenge((currentIdx + 1) % challenges.length);
    });
  }

  if (resetChallengeBtn) {
    resetChallengeBtn.addEventListener('click', () => {
      loadChallenge(currentIdx);
    });
  }

  document.querySelectorAll('[data-challenge-idx]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number(e.currentTarget.getAttribute('data-challenge-idx'));
      loadChallenge(idx);
    });
  });

  loadChallenge(0);
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/* ==========================================================================
   8. SKILLS CATEGORY FILTER
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-teal', 'text-white'));
      const target = e.currentTarget;
      target.classList.add('active');

      const filter = target.getAttribute('data-skill-filter');
      skillCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   9. FEATURED PROJECTS FILTER
   ========================================================================== */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-teal', 'text-white'));
      const target = e.currentTarget;
      target.classList.add('active');

      const filter = target.getAttribute('data-project-filter');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   10. CONTACT FORM & ONE-CLICK EMAIL COPY
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailVal = "vdeepika292007@gmail.com";

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailVal);
      const original = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = '<i class="bi bi-check2 text-success"></i>';
      setTimeout(() => { copyEmailBtn.innerHTML = original; }, 2000);
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      const email = document.getElementById('formEmail').value;
      const subject = document.getElementById('formSubject').value || `Inquiry from ${name}`;
      const message = document.getElementById('formMessage').value;

      const body = encodeURIComponent(`Hi Deepika,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Deepika V Portfolio`);
      window.location.href = `mailto:${emailVal}?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  }
}

/* ==========================================================================
   11. SCROLL SPY & BACK TO TOP BUTTON
   ========================================================================== */
function initScrollSpy() {
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      if (backToTopBtn) backToTopBtn.classList.add('show');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
