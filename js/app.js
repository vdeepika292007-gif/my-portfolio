/**
 * ==========================================================================
 * Deepika V - Portfolio (Vanilla JavaScript)
 * Interactive Controllers: Theme Switcher, Heart Disease ML Simulator,
 * Code Debug Game with Animated Buggy Mascot, Filters, and Modals.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeartDiseaseSimulator();
  initCodeDebugGame();
  initSkillsFilter();
  initProjectsFilter();
  initContactForm();
  initScrollSpy();
});

/* ==========================================================================
   1. DARK / LIGHT THEME TOGGLE
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill text-warning';
      } else {
        themeIcon.className = 'bi bi-moon-fill text-secondary';
      }
    }
  }

  // Initial theme
  applyTheme(getPreferredTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-bs-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
}

/* ==========================================================================
   2. HEART DISEASE MACHINE LEARNING PREDICTOR
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

    // Update labels
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
   3. CODE DEBUG GAME (ANIMATED BUGGY MASCOT & LIVE TEST RUNNER)
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
      language: 'TypeScript',
      difficulty: 'Medium',
      fileName: 'todo_state.tsx',
      bugDescription: 'Direct array mutation (todos.push) prevents React from detecting state change, so UI never re-renders.',
      hint: 'React state must be treated as immutable. You should never modify an array in place with .push()!',
      buggyCodeRaw: '  todos.push(newItem); // Bug: Mutating state directly!',
      patchedCodeRaw: '  setTodos([...todos, newItem]); // Correct: Immutable copy',
      codeSnippet: `function addTodo(newItem) {\n  // Direct mutation bug:\n  todos.push(newItem); // React state reference unchanged!\n  setTodos(todos);\n}`,
      options: [
        { id: 'A', text: "Use todos.concat() without calling setTodos", isCorrect: false, feedback: "Incorrect. State must always be updated through setter." },
        { id: 'B', text: "Create a new array: setTodos([...todos, newItem])", isCorrect: true, feedback: "Perfect! Spread operator creates a fresh array reference, prompting React to re-render." },
        { id: 'C', text: "Change newItem to a string before pushing", isCorrect: false, feedback: "Incorrect. Data type is not the re-render issue." }
      ],
      testCases: [
        { name: 'Test 1', input: 'addTodo("Study Data Structures")', expected: 'rerendered: true', runMs: '3.2ms' },
        { name: 'Test 2', input: 'todos.length checks', expected: 'length + 1', runMs: '1.0ms' },
        { name: 'Test 3', input: 'State reference equality', expected: 'prev !== next', runMs: '0.7ms' }
      ]
    }
  ];

  let currentIdx = 0;
  let score = 150;
  let streak = 1;
  let viewMode = 'editor';

  const bugMascotBtn = document.getElementById('bugMascotBtn');
  const bugSpeech = document.getElementById('bugSpeech');
  const codeContent = document.getElementById('codeContent');
  const codeFileName = document.getElementById('codeFileName');
  const bugContext = document.getElementById('bugContext');
  const hintText = document.getElementById('hintText');
  const hintBox = document.getElementById('hintBox');
  const toggleHintBtn = document.getElementById('toggleHintBtn');
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

    // Update titles and files
    document.getElementById('challengeTitle').textContent = c.title;
    document.getElementById('challengeMeta').textContent = `${c.language} • ${c.difficulty}`;
    if (codeFileName) codeFileName.textContent = c.fileName;
    if (bugContext) bugContext.textContent = c.bugDescription;
    if (hintText) hintText.textContent = c.hint;
    if (hintBox) hintBox.classList.add('d-none');

    // Bug speech reset
    if (bugSpeech) bugSpeech.textContent = "Hey! I broke this code! Can you spot my bug?";

    // Render code according to view mode
    renderCode();

    // Render options
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

    // Render tests in ready state
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
        div.className += ' bg-body text-secondary border-secondary-subtle';
        div.innerHTML = `<span>${tc.name}: ${escapeHtml(tc.input)}</span> <span>➜ ${escapeHtml(tc.expected)}</span>`;
      }

      testResultsContainer.appendChild(div);
    });
  }

  function handleSelectOption(opt) {
    renderTests('running');

    setTimeout(() => {
      if (opt.isCorrect) {
        renderTests('pass');
        score += 50;
        streak += 1;
        if (scoreBadge) scoreBadge.textContent = `XP: ${score}`;
        if (streakBadge) streakBadge.textContent = `Streak: ${streak}x`;
        if (bugSpeech) bugSpeech.textContent = "Aargh! You squashed me! All tests passed! 🎉";

        // Show floating XP
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
    }, 600);
  }

  // Bug click reaction
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

  // Hint toggle
  if (toggleHintBtn) {
    toggleHintBtn.addEventListener('click', () => {
      if (hintBox) hintBox.classList.toggle('d-none');
    });
  }

  // View mode toggles
  document.querySelectorAll('[data-code-view]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-code-view]').forEach(b => b.classList.remove('active', 'btn-secondary'));
      e.currentTarget.classList.add('active', 'btn-secondary');
      viewMode = e.currentTarget.getAttribute('data-code-view');
      renderCode();
    });
  });

  // Next Challenge
  if (nextChallengeBtn) {
    nextChallengeBtn.addEventListener('click', () => {
      loadChallenge((currentIdx + 1) % challenges.length);
    });
  }

  // Reset
  if (resetChallengeBtn) {
    resetChallengeBtn.addEventListener('click', () => {
      loadChallenge(currentIdx);
    });
  }

  // Level selector buttons
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
   4. SKILLS FILTER
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-dark', 'btn-light'));
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
   5. PROJECTS FILTER
   ========================================================================== */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-dark', 'btn-light'));
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
   6. CONTACT FORM & EMAIL COPY
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
   7. SCROLL SPY & BACK TO TOP
   ========================================================================== */
function initScrollSpy() {
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      if (backToTopBtn) backToTopBtn.classList.add('show');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('show');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
