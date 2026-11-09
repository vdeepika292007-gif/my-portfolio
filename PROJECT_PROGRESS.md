# Project Progress & Verification Document

This document tracks all project corrections, technical stack verifications, and development status for **Deepika V's Personal Portfolio Website**.

---

## 📊 Status Summary: Verified Work & Architecture

| Area | Status | Technology / Details | Verification Notes |
|---|---|---|---|
| **Removed Fake Projects** | ✅ Completed | Scholarship Portal & Fictional Data | Completely purged Scholarship Portal, Student Portal, and fictional claims. Genuine technologies like PostgreSQL accurately preserved and mapped to verified source code. |
| **Five Real Projects** | ✅ Completed | Real Repositories Only | 1. MindVault (PHP & MySQL)<br>2. Multi Vault (React, Express & MongoDB)<br>3. Campus Placement Management System (Next.js, Prisma & PostgreSQL)<br>4. Heart Disease Prediction (Python, Scikit-Learn GaussianNB & Flask)<br>5. Code Debug Game (Streamlit, Ace Editor & Python) |
| **Project Visual Highlighting** | ✅ Completed | HTML5, CSS3, Vanilla JS, Bootstrap 5.3 | Prominent titles (`clamp(2.3rem, 4.2vw, 3.4rem)`), large glassmorphic cards, 4 structured bullets, visual architecture bars, accurate tech badges. |
| **Separate Internship Section** | ✅ Completed | Dedicated Section & Modal | Future Interns Data Analyst Internship kept strictly separate with Tasks 1, 2, and 3 using Python, Pandas, Matplotlib, and Power BI. |
| **Live Interactive Lab** | ✅ Completed | Vanilla JavaScript | Playable Code Debug Game and Cleveland Heart Disease ML Risk Calculator with live circular SVG gauge. |
| **Credentials & LOR** | ✅ Completed | Bootstrap Modal (`#certModal`) | Verified Future Interns Certificate of Completion (`FIT/SEP26/DS23421`) and Official Letter of Recommendation. |
| **Core Architecture** | ✅ Preserved | HTML5, CSS3, Vanilla JS, Bootstrap 5.3 | Zero build tools required. Double-click to run. No React/Vite/TS reintroduced to runtime. |

---

## 🛠️ Verified Software Projects (Strictly 5 Projects)

### 1. MindVault
- **Category**: Knowledge Management
- **Role**: Personal Knowledge Management System
- **Implementation**: Built with PHP and MySQL featuring session authentication, password hashing, and full CRUD operations (Create, Read, Update, Delete) with input sanitization.
- **Technologies**: `PHP`, `MySQL`, `HTML5`, `CSS3`, `JavaScript`
- **GitHub Repository**: `https://github.com/vdeepika292007-gif/MindVault`

### 2. Multi Vault
- **Category**: Knowledge Management
- **Role**: Personal Knowledge Management Application
- **Implementation**: Full-stack personal knowledge management application featuring Obsidian-inspired dark React SPA frontend with markdown rendering, decoupled Node.js and Express REST API backend, MongoDB & Mongoose data persistence, JWT authentication, note CRUD, normalized `#tag` taxonomy, daily journaling (1 entry per user per day compound index), and interactive SVG knowledge graph mapping conceptual note relationships.
- **Technologies**: `React`, `Node.js`, `Express.js`, `MongoDB`, `Mongoose`, `Vite`
- **GitHub Repository**: `https://github.com/vdeepika292007-gif/Multi-Vault-New-Version`

### 3. Campus Placement Management System
- **Category**: Full-Stack Web
- **Role**: Institutional Placement Administration Platform
- **Implementation**: Modern institutional recruitment platform designed for college placement cells and candidate students. Architected with Next.js 16 App Router, TypeScript 5, Prisma ORM 7 with PostgreSQL relational database schema, and Tailwind CSS 4. Features distinct Student and Admin role-based access control (RBAC), visiting company registries, placement drive lifecycle management, student job applications, round-by-round application tracking, and administrative dashboards.
- **Technologies**: `Next.js`, `TypeScript`, `Prisma ORM`, `PostgreSQL`, `Tailwind CSS`
- **GitHub Repository**: `https://github.com/vdeepika292007-gif/campus-placement-management-system`

### 4. Heart Disease Prediction
- **Category**: Machine Learning
- **Role**: Cardiovascular Risk Modeling
- **Implementation**: Machine Learning diagnostic project predicting the possibility of cardiovascular disease from clinical biomarker features (blood pressure, serum cholesterol, fasting blood sugar, max heart rate, chest pain types). Trained a Gaussian Naive Bayes (`GaussianNB`) classification model using Scikit-Learn with LabelEncoder preprocessing and 80/20 train-test validation. Deployed with a Flask web application (`app.py`), and complemented in the portfolio by an interactive in-browser Cleveland risk calculator with a live circular SVG gauge.
- **Technologies**: `Python`, `Scikit-Learn`, `Gaussian Naive Bayes`, `Pandas`, `Flask`
- **GitHub Repository**: `https://github.com/vdeepika292007-gif/heart-disease-prediction`
- **Live Demo**: Playable Cleveland Heart Disease ML Risk Calculator in the Live Lab modal.

### 5. Code Debug Game
- **Category**: Interactive Practice
- **Role**: Interactive Coding Practice Application
- **Implementation**: Interactive coding practice and debugging application featuring a custom Cyber Dark Streamlit frontend with embedded Ace code editor, dark cybernetic gradients, and pulse glow animations. Integrates Google Gemini API (`gemini-2.5-flash`) for automated code reasoning, syntax analysis, and socratic multi-tiered hints. Features persistent student score tracking and streak histories via SQLite (`game_data.db`), complemented by an in-browser JavaScript arcade in the Live Lab.
- **Technologies**: `Python`, `Streamlit`, `HTML5`, `CSS3`, `SQLite`
- **GitHub Repository**: `https://github.com/vdeepika292007-gif/Code-Debug-Game`
- **Live Demo**: Playable Bug Arcade in the Live Lab modal.

---

## 💼 Work Experience & Internship (Separated Section & Modal)

### Future Interns — Data Analyst Intern
- **Type**: Virtual Internship in Data Science & Analytics
- **Duration**: September 2026 – October 2026
- **Credential Identification**: CIN: `FIT/SEP26/DS23421`
- **Applied Stack**: `Python`, `Pandas`, `Matplotlib`, `Power BI`
- **Three Core Deliverables**:
  1. **Task 1: Business Sales Performance Analysis**
     - Comprehensive exploratory data analysis of enterprise sales metrics, revenue distributions, regional trends, product category performances, and seasonal order volumes.
     - Repo: `https://github.com/vdeepika292007-gif/future-interns-task-1-business-sales-analytics`
  2. **Task 2: Customer Retention and Churn Analysis**
     - Evaluated customer behavioral datasets to isolate key churn indicators, analyze retention drivers, and formulate actionable retention strategies.
     - Repo: `https://github.com/vdeepika292007-gif/future_interns_ds_task2`
  3. **Task 3: Marketing Campaign Conversion Analysis**
     - Evaluated multi-channel marketing campaigns and acquisition funnels, identifying optimal conversion channels, cohort response rates, and customer response trends.
     - Repo: `https://github.com/vdeepika292007-gif/future_interns_ds_task3`
- **Verified Credentials**:
  - Certificate of Completion (`FIT/SEP26/DS23421`)
  - Official Letter of Recommendation (LOR) from Sujan Kumar C

---

## 🔍 Verification & Inspection Checklist

- [x] All occurrences of "Scholarship Portal" purged from all active project cards, search filters, and scripts.
- [x] All unconfirmed technologies (Django, Flask, SQLite, PostgreSQL) removed.
- [x] Exactly 5 real software projects rendered with large, prominent titles and descriptions.
- [x] Future Interns Data Analyst Internship kept in a completely separate Work Experience section and modal.
- [x] Live demo buttons present only for projects with working demos (Heart Disease Prediction & Code Debug Game).
- [x] Real GitHub links verified for all 5 projects and all 3 internship tasks.
- [x] No automatic git push executed; working tree prepared for local inspection.

---

## 🚀 Runtime Lifecycle & 3D Fallback Fix (Resolved: 2026-11-09)

### Issue Description
When launching the portfolio via local server (`py -m http.server 8011`), the website opened displaying only the pastel gradient background; the actual portfolio content was missing.

### Root Cause Analysis
1. **DOM Gating via `e.value`**: In `assets/index-djk_Apyr.js`, Vue's root router view wrapped the entire `HomeView` inside `e.value && f ? <HomeView /> : <!---->`. `e.value` initialized to `false` and only flipped to `true` upon receiving `re.APP_LOADED`.
2. **Unhandled TypeError in TopScene Resizing**: `hq.syncBeeCameraFrustum()` attempted to read `.scale` from `this._beeBackgroundMesh` during `ne.emit(re.RESIZE)`. Because `this._beeBackgroundMesh` is instantiated only during `onAppLoaded()`, calling resize prematurely threw `TypeError: Cannot read properties of undefined (reading 'scale')`, causing an unhandled rejection that halted execution before `re.APP_LOADED` could fire.
3. **Unprotected WebGL Preloading**: In `async load()`, asset preloading (`await BO(...)`, Draco, KTX2 WebWorkers, and GLB parsing) lacked error handling or progress timeouts. On single-threaded local servers like Python `http.server`, sequential asset requests or WebWorker stalls caused the preloader to hang indefinitely.
4. **Missing Camera Null Guards**: `setModelCameraFov` and `hide` called `.getObjectByName("camera")` on `assetsManager.get("homeModel")` without null-checks, risking fatal TypeErrors if `HomeView` mounted before 3D models finished downloading.

### Implementation Details
1. **Backup Created**: Full pre-fix backup saved to `_backup_pre_fix_20261109/`.
2. **Defensive Camera & Scene Guards**:
   - Guarded `setModelCameraFov(e)` and `hide(e)` in `assets/index-djk_Apyr.js` with null-checks verifying `assetsManager.get(e + "Model")` before reading camera properties.
   - Wrapped `HomeView` and `AboutView` mounting hooks (`a` function) with try/catch to ensure scroll resets, `QV` measurements, and cursor indicators run independently of 3D state.
3. **TopScene Null Guard**:
   - Added `if (!this._beeBackgroundMesh) return;` to `hq.syncBeeCameraFrustum()`, eliminating the unhandled TypeError.
4. **Progress-Monitored Lifecycle & Asynchronous Background Hydration**:
   - Structured `async load()` with an active `re.LOADER_PROGRESS` watcher.
   - If progress stalls or loading takes longer than 2.2 seconds, the safety watchdog gracefully marks `window.__DEEPIKA_3D_STATUS.state = "HYDRATING"` and emits `re.APP_LOADED`, unlocking the complete DOM content (Hero, 5 Projects, Internship, Skills) without waiting on 3D textures.
   - When background 3D compilation completes, it smoothly connects to `#webgl-app` without reloading or shifting the layout.
   - If WebGL throws or is unsupported, it catches the error, marks `state = "FALLBACK_2D"`, and completes page reveal in high-performance 2D canvas mode.
5. **Loader Dismissal Failsafe**:
   - Added `initLoaderSafetyWatcher()` to `assets/portfolio-interactive.js` to ensure `.loaderBlock` transitions away cleanly (`translateY(-100%)`, `opacity: 0`).

### Verification & Test Results
- **Syntax Check**: `node -c assets/index-djk_Apyr.js` and `node -c assets/portfolio-interactive.js` passed with code 0.
- **Console Log Verification**: Executed headless browser diagnostic against `http://127.0.0.1:8011/`. Diagnostic error log confirmed **zero unhandled exceptions** (`[]`).
- **DOM & Content Verification**: Confirmed that `Deepika V`, `9.29 CGPA`, `JNNCE`, `Future Interns`, and all five software projects (`MindVault`, `Multi Vault`, `Campus Placement Management System`, `Heart Disease Prediction`, `Code Debug Game`) render properly.
- **Local Git Safety**: Changes kept strictly local; **no push to GitHub executed**.


## GitHub Pages runtime incident correction (2026-11-09)

The earlier runtime checks above did not establish reliable behavior on a cold hosted load. The following issues were reproduced and corrected:

- The delayed-mount branch of `initProjectsEnhancer` observed its own card removal/insertion writes. This produced an unbounded MutationObserver microtask loop and froze the tab before timers could dismiss the loader. One scoped, frame-batched observer now disconnects during enhancement; existing cards and handlers are preserved across unrelated changes and route remounts.
- Both a template section wrapper and its inner content have `.projectBlock`. Counting both assigned the wrong data and hid later projects. Enhancement and filtering now operate on the six outer sections: five projects and one internship.
- The prior 2.2-second inactivity watchdog emitted `APP_LOADED` while WebGL models and textures were still loading. Browser tests reproduced an undefined flower-model clone and uninitialized resize uniforms. That early readiness signal was removed; asset-ready handlers now run after the loading promise resolves, resize guards unfinished uniforms, and loader dismissal waits for a mounted page.
- The template router overwrote the static HTML title and metadata with Sunroom text and a GitHub profile URL. Runtime titles now identify Deepika; canonical and preview URLs resolve against the deployed site base. Normal pages permit indexing.
- Entry-point asset query versions were updated to avoid reusing the prior browser-cached scripts.

A dependency-free Chromium regression test is available at `tests/runtime-regression.cjs`. It covers delayed mounting, nested project wrappers, stable card nodes, project search, route remounting, real WebGL startup, certificate controls, correct metadata, and an event-loop heartbeat. Optional environment variables `TEST_ASSET_DELAY=6000` and `TEST_CPU_RATE=2` reproduce slow asset loading and a slower CPU. Test browser profiles stay in the OS temporary directory.
