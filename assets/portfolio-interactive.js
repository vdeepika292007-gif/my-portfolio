/**
 * ==========================================================================
 * Deepika V Portfolio - Core Interactive Engine
 * Orbital Atelier / Sunroom Design System
 * Strictly HTML5, CSS3, Vanilla JavaScript, Bootstrap 5.3
 * ==========================================================================
 */

// --- VERIFIED PROJECTS DATA (6 VERIFIED REPOSITORIES) ---
const DEEPIKA_PROJECTS = [
  {
    id: 1,
    title: "Heart Disease Prediction System",
    subtitle: "Machine Learning & Healthcare AI • Cleveland Clinical Dataset",
    category: "Machine Learning",
    spotlight: "Featured AI Project",
    spotlightClass: "spotlight-featured",
    spotlightIcon: "bi-stars",
    date: "2026",
    bullets: [
      {
        icon: "bi-graph-up-arrow",
        title: "Diagnostic Accuracy",
        text: "Trained Random Forest and Logistic Regression classifiers on 303 clinical records achieving 85.2% accuracy."
      },
      {
        icon: "bi-heart-pulse-fill",
        title: "Biomarker Assessment",
        text: "Evaluates 14 cardiovascular features: Resting BP, Serum Cholesterol, Thalassemia, ST Depression & Max Heart Rate."
      },
      {
        icon: "bi-cpu-fill",
        title: "Data Pipeline",
        text: "Implemented StandardScaler normalization, correlation heatmaps, ROC-AUC scoring (0.89), and Scikit-Learn pipelines."
      },
      {
        icon: "bi-sliders2",
        title: "Interactive Tool",
        text: "Integrated real-time clinical parameter calculation engine with live SVG circular gauge and risk zone classification."
      }
    ],
    visualIcon: "bi-diagram-3-fill",
    visualText: "Python ML Inference Pipeline • StandardScaler Normalization • Scikit-Learn Model Serialization",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Bootstrap 5"],
    githubUrl: "https://github.com/vdeepika292007-gif/heart-disease-prediction",
    hasLiveDemo: true,
    liveDemoTab: "lab-heart-tab",
    liveDemoBtnText: "Launch ML Risk Calculator"
  },
  {
    id: 2,
    title: "Code Debug Game Arcade",
    subtitle: "Interactive Web Application & Gamification • Vanilla JS & HTML5",
    category: "Interactive Game",
    spotlight: "Playable Lab",
    spotlightClass: "spotlight-interactive",
    spotlightIcon: "bi-controller",
    date: "2026",
    bullets: [
      {
        icon: "bi-controller",
        title: "Gamified Arcade",
        text: "Interactive browser-based coding game featuring real-time bug diagnosis, instant test runner, and XP scoring."
      },
      {
        icon: "bi-bug-fill",
        title: "Algorithmic Challenges",
        text: "Curated coding bug scenarios covering String Reversal, Array Deduplication, Fibonacci Sequences, and FIFO Queue Pipelines."
      },
      {
        icon: "bi-check2-circle",
        title: "Unit Test Runner",
        text: "Automatic test assertion engine verifying code solutions against edge cases and runtime exceptions."
      },
      {
        icon: "bi-trophy-fill",
        title: "Progress & Rewards",
        text: "Tracks player level tiers (Junior Debugger to Algo Master), answer streaks, scoring multipliers, and sound FX."
      }
    ],
    visualIcon: "bi-terminal-fill",
    visualText: "Sandboxed JavaScript Execution • Dynamic Test Runner • Real-Time XP & Level Progression System",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap 5", "Web Audio API"],
    githubUrl: "https://github.com/vdeepika292007-gif/Code-Debug-Game",
    hasLiveDemo: true,
    liveDemoTab: "lab-game-tab",
    liveDemoBtnText: "Play Debug Arcade"
  },
  {
    id: 3,
    title: "Scholarship Portal",
    subtitle: "Full-Stack Academic Platform & Verification Engine • Python & SQL",
    category: "Full-Stack Portal",
    spotlight: "Enterprise Architecture",
    spotlightClass: "spotlight-enterprise",
    spotlightIcon: "bi-mortarboard",
    date: "2026",
    bullets: [
      {
        icon: "bi-mortarboard-fill",
        title: "Application Lifecycle",
        text: "End-to-end digital scholarship application workflow supporting student submissions, tracking, and disbursements."
      },
      {
        icon: "bi-shield-check",
        title: "Automated Verification",
        text: "Multi-tier document verification engine validating eligibility criteria, income thresholds, and academic merit."
      },
      {
        icon: "bi-people-fill",
        title: "Role-Based Access",
        text: "Secure authentication matrix with distinct permission tiers for Students, College Faculty Reviewers, and System Admins."
      },
      {
        icon: "bi-database-check",
        title: "Data Architecture",
        text: "Relational database schema with optimized indexing, transaction safety, and clean RESTful API endpoints."
      }
    ],
    visualIcon: "bi-hdd-network-fill",
    visualText: "Relational Schema Architecture • Multi-Tier Role Access Control • Automated Eligibility Engine",
    technologies: ["Python", "Django/Flask", "Bootstrap 5", "SQLite/PostgreSQL", "REST APIs"],
    githubUrl: "https://github.com/vdeepika292007-gif/scholarship-portal",
    hasLiveDemo: false
  },
  {
    id: 4,
    title: "Student Portal",
    subtitle: "Campus Academic & Records Engine • JNNCE Student Management",
    category: "Campus Engine",
    spotlight: "Campus Infrastructure",
    spotlightClass: "spotlight-academic",
    spotlightIcon: "bi-mortarboard-fill",
    date: "2026",
    bullets: [
      {
        icon: "bi-bar-chart-fill",
        title: "Academic Metrics",
        text: "Real-time 9.29 CGPA tracker, semester credit calculators, and automated attendance threshold alerts."
      },
      {
        icon: "bi-journal-code",
        title: "Course Distribution",
        text: "Centralized repository for department syllabus modules, lab schedules, exam notices, and digital notes."
      },
      {
        icon: "bi-device-ssd",
        title: "Local Persistence",
        text: "Fast client-side data persistence with offline local caching and responsive Bootstrap 5 glassmorphism UI."
      },
      {
        icon: "bi-phone-fill",
        title: "Multi-Device Layout",
        text: "Cross-platform interface fully optimized for mobile smartphones, tablets, and high-DPI desktop viewports."
      }
    ],
    visualIcon: "bi-grid-1x2-fill",
    visualText: "Student Academic Records Engine • Automated Attendance Alerts • 9.29 CGPA Performance Tracker",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Responsive Web Design"],
    githubUrl: "https://github.com/vdeepika292007-gif/student-portal",
    hasLiveDemo: false
  },
  {
    id: 5,
    title: "My-Notes-App",
    subtitle: "Knowledge Management Vault & Productivity Suite • Markdown Engine",
    category: "Knowledge Vault",
    spotlight: "Productivity Suite",
    spotlightClass: "spotlight-interactive",
    spotlightIcon: "bi-journal-bookmark",
    date: "2026",
    bullets: [
      {
        icon: "bi-pencil-square",
        title: "Dual-Pane Editor",
        text: "Live Markdown editor featuring split-screen preview, syntax highlighting, and auto-formatting shortcuts."
      },
      {
        icon: "bi-search",
        title: "Sub-Millisecond Search",
        text: "High-performance instant search indexing note titles, Markdown bodies, and custom category tags."
      },
      {
        icon: "bi-tags-fill",
        title: "Taxonomy System",
        text: "Dynamic color-coded tagging organized by Machine Learning, Data Structures, Web Development, and College Notes."
      },
      {
        icon: "bi-cloud-check-fill",
        title: "Offline Reliability",
        text: "IndexedDB / LocalStorage synchronization guaranteeing zero data loss with instant local saves."
      }
    ],
    visualIcon: "bi-journal-richtext",
    visualText: "Live Markdown Compiler • High-Speed Fuzzy Search Index • Offline Client-Side Local Storage",
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap 5", "Markdown Parser", "LocalStorage"],
    githubUrl: "https://github.com/vdeepika292007-gif/my-notes-app",
    hasLiveDemo: false
  },
  {
    id: 6,
    title: "Sales Performance & Churn Analytics",
    subtitle: "Enterprise BI & Predictive Analytics • Future Interns Internship",
    category: "Data Analytics",
    spotlight: "Industry Internship Project",
    spotlightClass: "spotlight-featured",
    spotlightIcon: "bi-graph-up",
    date: "2026",
    bullets: [
      {
        icon: "bi-graph-up",
        title: "Sales Funnel Modeling",
        text: "Comprehensive exploratory data analysis examining multi-channel marketing campaigns and customer conversion funnels."
      },
      {
        icon: "bi-person-x-fill",
        title: "Churn Probability",
        text: "Built predictive classification models isolating key churn indicators to identify high-risk customer segments."
      },
      {
        icon: "bi-pie-chart-fill",
        title: "Visual Intelligence",
        text: "Generated enterprise BI visualizations and correlation heatmaps utilizing Python, Pandas, Seaborn, and Matplotlib."
      },
      {
        icon: "bi-briefcase-fill",
        title: "Business Recommendations",
        text: "Formulated targeted customer retention strategies that increased repeat purchase rates and marketing efficiency."
      }
    ],
    visualIcon: "bi-bar-chart-line-fill",
    visualText: "Future Interns Enterprise Analytics • Predictive Churn Classification • Strategic Retention Funnels",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Exploratory Data Analysis"],
    githubUrl: "https://github.com/vdeepika292007-gif/future-interns-task-1-business-sales-analytics",
    hasLiveDemo: false
  }
];

// --- INITIALIZATION ENTRY POINT ---
document.addEventListener("DOMContentLoaded", () => {
  initCleanNavigation();
  initIntroEnhancer();
  initProjectsEnhancer();
  initHeartDiseaseSimulator();
  initCodeDebugGame();
});

/**
 * ==========================================================================
 * 1. CLEAN TOP NAVIGATION INTEGRATION
 * Positions actions inside .navbarBlock__right to prevent left-side collisions
 * ==========================================================================
 */
function initCleanNavigation() {
  const navbar = document.querySelector(".navbarBlock");
  if (!navbar) return;

  if (document.querySelector(".navbar-clean-actions")) return;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "navbar-clean-actions";
  actionsDiv.innerHTML = `
    <button type="button" class="nav-clean-btn" id="navBtnCert">
      <i class="bi bi-award text-primary"></i>
      <span>Certificates</span>
    </button>
    <button type="button" class="nav-clean-btn" id="navBtnLab">
      <i class="bi bi-lightning-charge-fill text-warning"></i>
      <span>Live Lab</span>
    </button>
    <a href="./Deepika_V_Resume.pdf" download="Deepika_V_Resume.pdf" class="nav-clean-btn btn-nav-resume">
      <i class="bi bi-download"></i>
      <span>Resume</span>
    </a>
  `;

  const certBtn = actionsDiv.querySelector("#navBtnCert");
  if (certBtn) {
    certBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.bootstrap) {
        const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("certModal"));
        modal.show();
      }
    });
  }

  const labBtn = actionsDiv.querySelector("#navBtnLab");
  if (labBtn) {
    labBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.bootstrap) {
        const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("labModal"));
        modal.show();
      }
    });
  }

  // Insert cleanly into navbarBlock__right so it never collides with left title
  const rightContainer = navbar.querySelector(".navbarBlock__right");
  if (rightContainer) {
    rightContainer.insertBefore(actionsDiv, rightContainer.firstChild);
  } else {
    const links = navbar.querySelector(".navbarBlock__links") || navbar;
    links.appendChild(actionsDiv);
  }
}

/**
 * ==========================================================================
 * 2. INTRO SECTION CENTERING & AURORA HERO CARD
 * Unique fonts ('Syne', 'Space Grotesk', 'Plus Jakarta Sans')
 * High-contrast deep indigo/violet colors matching the pastel background
 * ==========================================================================
 */
function initIntroEnhancer() {
  const introBlock = document.querySelector(".introBlock");
  if (!introBlock) {
    const observer = new MutationObserver(() => {
      if (document.querySelector(".introBlock")) {
        enhanceIntro();
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return;
  }
  enhanceIntro();
}

function enhanceIntro() {
  const introBlock = document.querySelector(".introBlock");
  if (!introBlock) return;

  // 1. Hide the old top baseline text that was overflowing/colliding
  const topBlock = introBlock.querySelector(".introBlock__top");
  if (topBlock) topBlock.style.display = "none";

  const bottomContainer = introBlock.querySelector(".introBlock__bottom");
  if (!bottomContainer) return;

  // 2. Hide old unformatted elements
  const oldText = bottomContainer.querySelector(".bottom__text");
  if (oldText) oldText.style.display = "none";
  const oldStars = bottomContainer.querySelector(".bottom__stars");
  if (oldStars) oldStars.style.display = "none";
  const oldVideo = bottomContainer.querySelector(".bottom__video");
  if (oldVideo) oldVideo.style.display = "none";
  const oldHint = bottomContainer.querySelector(".bottom__showreelHint");
  if (oldHint) oldHint.style.display = "none";

  // Prevent duplicate insertion
  if (bottomContainer.querySelector(".deepika-intro-card")) return;

  // Remove any legacy intro content if present
  const existingLegacy = bottomContainer.querySelector(".deepika-intro-content");
  if (existingLegacy) existingLegacy.remove();

  // 3. Render Centered Glassmorphic Aurora Hero Card
  const cardDiv = document.createElement("div");
  cardDiv.className = "deepika-intro-card";
  cardDiv.innerHTML = `
    <!-- Top Pill Eyebrow -->
    <div class="intro-pill-badge">
      <i class="bi bi-sparkles"></i>
      <span>Engineering Tomorrow's Data Systems</span>
    </div>

    <!-- 1. UNIQUE TITLE: Syne Display Font & Deep Indigo Gradient -->
    <h1 class="deepika-intro-title">
      Deepika V
    </h1>

    <!-- 2. UNIQUE SUBTITLE: Space Grotesk Font & Capsule Pill -->
    <div class="deepika-intro-subtitle">
      <i class="bi bi-code-slash"></i>
      <span>Data Science &amp; Full-Stack Web Developer · Class of 2028</span>
    </div>

    <!-- 3. UNIQUE BULLET POINTS: 2x2 Feature Grid with High Contrast -->
    <div class="deepika-intro-grid">
      <!-- Item 1: Academic Distinction -->
      <div class="deepika-intro-item item-academic">
        <div class="intro-item-icon icon-academic">
          <i class="bi bi-mortarboard-fill"></i>
        </div>
        <div class="intro-item-body">
          <div class="intro-item-header">
            <span class="intro-item-title">Academic Distinction</span>
            <span class="intro-tag tag-gold">9.29 CGPA</span>
          </div>
          <p class="intro-item-desc">
            3rd-year B.E. student in Computer Science &amp; Engineering (Data Science) at <strong>JNNCE Shivamogga</strong>, maintaining a top-tier academic standing.
          </p>
        </div>
      </div>

      <!-- Item 2: Student Leadership -->
      <div class="deepika-intro-item item-leadership">
        <div class="intro-item-icon icon-leadership">
          <i class="bi bi-award-fill"></i>
        </div>
        <div class="intro-item-body">
          <div class="intro-item-header">
            <span class="intro-item-title">Student Leadership</span>
            <span class="intro-tag tag-purple">Vice-Chairperson</span>
          </div>
          <p class="intro-item-desc">
            Elected <strong>Vice-Chairperson of the ISTE Student Chapter</strong> at JNNCE, orchestrating technical hackathons, workshops, and student mentorship seminars.
          </p>
        </div>
      </div>

      <!-- Item 3: Industry Internship -->
      <div class="deepika-intro-item item-internship">
        <div class="intro-item-icon icon-internship">
          <i class="bi bi-briefcase-fill"></i>
        </div>
        <div class="intro-item-body">
          <div class="intro-item-header">
            <span class="intro-item-title">Industry Internship</span>
            <span class="intro-tag tag-blue">Future Interns</span>
          </div>
          <p class="intro-item-desc">
            Data Science &amp; Analytics Intern at <strong>Future Interns</strong>, delivering business sales analytics, customer churn predictive models, and conversion funnels.
          </p>
        </div>
      </div>

      <!-- Item 4: Technical Repertoire -->
      <div class="deepika-intro-item item-tech">
        <div class="intro-item-icon icon-tech">
          <i class="bi bi-cpu-fill"></i>
        </div>
        <div class="intro-item-body">
          <div class="intro-item-header">
            <span class="intro-item-title">Core Technical Stack</span>
            <span class="intro-tag tag-teal">ML &amp; Web</span>
          </div>
          <p class="intro-item-desc">
            Specialized in <strong>Python</strong>, <strong>Machine Learning (Scikit-Learn)</strong>, <strong>Pandas</strong>, <strong>JavaScript (ES6+)</strong>, <strong>HTML5/CSS3</strong>, and <strong>Bootstrap 5.3</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Quick Action Buttons Row -->
    <div class="intro-card-actions">
      <a href="#projects" class="intro-btn-primary" id="exploreProjectsBtn">
        <span>Explore Selected Projects</span>
        <i class="bi bi-arrow-down-circle-fill"></i>
      </a>
      <a href="./Deepika_V_Resume.pdf" download="Deepika_V_Resume.pdf" class="intro-btn-secondary">
        <i class="bi bi-download"></i>
        <span>Download Resume PDF</span>
      </a>
    </div>
  `;

  // Attach smooth scroll handler for explore projects
  const exploreBtn = cardDiv.querySelector("#exploreProjectsBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const firstProject = document.querySelector(".projectBlock");
      if (firstProject) {
        firstProject.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  bottomContainer.appendChild(cardDiv);
}

/**
 * ==========================================================================
 * 3. PROJECTS SHOWCASE ENHANCER & INTERACTIVE SEARCH / FILTER ENGINE
 * Unique Fonts ('Syne', 'Space Grotesk', 'Plus Jakarta Sans')
 * High-Contrast Iridescent Midnight Indigo to Violet Palette
 * Instant Real-Time Search, Category Tabs, Live Demos Quick-Filter & Glowing Focus
 * ==========================================================================
 */
function initProjectsEnhancer() {
  const projectBlocks = document.querySelectorAll(".projectBlock");
  if (!projectBlocks || projectBlocks.length === 0) {
    const observer = new MutationObserver(() => {
      const blocks = document.querySelectorAll(".projectBlock");
      if (blocks && blocks.length > 0) {
        enhanceProjects();
        initIntroEnhancer();
        initCleanNavigation();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return;
  }
  enhanceProjects();

  // Persistent MutationObserver to guarantee header and cards persist if Vue re-renders
  const persistentObserver = new MutationObserver(() => {
    const titleBlock = document.querySelector(".projectBlock__title");
    if (titleBlock && !titleBlock.querySelector(".deepika-section-header")) {
      enhanceProjects();
    }
  });
  persistentObserver.observe(document.body, { childList: true, subtree: true });
}

function enhanceProjects() {
  const projectBlocks = document.querySelectorAll(".projectBlock");
  if (!projectBlocks || projectBlocks.length === 0) return;

  // 1. Enhance Section Header (above project 0)
  const titleBlock = document.querySelector(".projectBlock__title");
  if (titleBlock && !titleBlock.querySelector(".deepika-section-header")) {
    titleBlock.innerHTML = `
      <div class="deepika-section-header">
        <!-- Eyebrow Badge -->
        <div class="deepika-section-eyebrow">
          <i class="bi bi-sparkles"></i>
          <span>Featured Portfolio &amp; Technical Solutions</span>
        </div>

        <!-- Unique Gradient Heading -->
        <h2 class="deepika-section-heading">Featured Projects &amp; Software Solutions</h2>

        <!-- High-Contrast Slate Lead Paragraph -->
        <p class="deepika-section-lead">
          Explore production-grade technical solutions engineered by <strong>Deepika V</strong> across Machine Learning, Interactive Web Applications, Full-Stack Architecture, and Enterprise Data Analytics.
        </p>

        <!-- Interactive Header Quick Stats & Action Pills -->
        <div class="deepika-header-stats">
          <span class="stat-pill stat-count">
            <i class="bi bi-folder-check text-primary"></i>
            <span>6 Verified Repositories</span>
          </span>
          <button type="button" class="stat-pill stat-action" id="filterOnlyDemosBtn" title="Show only projects with live playable browser labs">
            <i class="bi bi-lightning-charge-fill"></i>
            <span>2 Live Interactive Demos</span>
          </button>
          <a href="https://github.com/vdeepika292007-gif" target="_blank" rel="noopener noreferrer" class="stat-pill stat-github">
            <i class="bi bi-github"></i>
            <span>@vdeepika292007-gif</span>
            <i class="bi bi-box-arrow-up-right ms-1" style="font-size:0.75rem;"></i>
          </a>
        </div>

        <!-- Interactive Real-Time Search Bar -->
        <div class="deepika-search-wrap">
          <div class="search-input-group">
            <i class="bi bi-search search-icon"></i>
            <input 
              type="text" 
              id="projectSearchInput" 
              class="deepika-search-input" 
              placeholder="Search projects by name, keyword, or tech (e.g. Python, ML, Scikit, Game, SQL)..." 
              autocomplete="off"
              spellcheck="false"
            />
            <button type="button" id="clearSearchBtn" class="search-clear-btn" title="Clear search" style="display:none;">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>
          <div id="searchMatchStatus" class="search-match-status">
            <i class="bi bi-check-circle-fill text-success me-1"></i>
            <span>Showing all 6 projects</span>
          </div>
        </div>

        <!-- Category Filter Tabs Navigation -->
        <div class="deepika-filter-nav" role="tablist">
          <button type="button" class="deepika-filter-btn active" data-filter="all">
            <i class="bi bi-grid-fill"></i> All Projects (6)
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Machine Learning">
            <i class="bi bi-stars text-warning"></i> Machine Learning
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Interactive Game">
            <i class="bi bi-controller text-info"></i> Interactive Game
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Full-Stack Portal">
            <i class="bi bi-mortarboard text-success"></i> Full-Stack Portal
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Campus Engine">
            <i class="bi bi-shield-check text-purple"></i> Campus Engine
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Knowledge Vault">
            <i class="bi bi-journal-bookmark text-primary"></i> Knowledge Vault
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Data Analytics">
            <i class="bi bi-graph-up-arrow text-danger"></i> Data Analytics
          </button>
        </div>
      </div>
    `;

    // Connect Interactive Filter & Search Engine
    setupInteractiveFiltersAndSearch(titleBlock, projectBlocks);
  }

  // 2. Enhance each individual project card
  projectBlocks.forEach((block, idx) => {
    enhanceSingleProjectCard(block, idx);
  });
}

function setupInteractiveFiltersAndSearch(titleBlock, projectBlocks) {
  let currentCategory = "all";
  let currentSearchQuery = "";
  let onlyDemosFilter = false;

  const searchInput = titleBlock.querySelector("#projectSearchInput");
  const clearBtn = titleBlock.querySelector("#clearSearchBtn");
  const matchStatus = titleBlock.querySelector("#searchMatchStatus");
  const filterBtns = titleBlock.querySelectorAll(".deepika-filter-btn");
  const demoOnlyBtn = titleBlock.querySelector("#filterOnlyDemosBtn");

  function applyFilter(shouldScroll = false) {
    const q = currentSearchQuery.trim().toLowerCase();
    let matchCount = 0;
    let firstMatchCard = null;

    projectBlocks.forEach((block, idx) => {
      const data = DEEPIKA_PROJECTS[idx];
      if (!data) return;

      let catMatch = true;
      if (onlyDemosFilter) {
        catMatch = data.hasLiveDemo === true;
      } else if (currentCategory !== "all") {
        catMatch = data.category.toLowerCase() === currentCategory.toLowerCase();
      }

      let searchMatch = true;
      if (q) {
        const textToSearch = [
          data.title,
          data.subtitle,
          data.category,
          data.spotlight,
          data.visualText,
          ...data.technologies,
          ...data.bullets.map(b => `${b.title} ${b.text}`)
        ].join(" ").toLowerCase();
        searchMatch = textToSearch.includes(q);
      }

      const isMatch = catMatch && searchMatch;
      const card = block.querySelector(".deepika-project-card");

      if (isMatch) {
        matchCount++;
        block.classList.remove("deepika-project-hidden");
        block.style.display = "";
        if (!firstMatchCard && card) firstMatchCard = card;
      } else {
        block.classList.add("deepika-project-hidden");
        block.style.display = "none";
      }
    });

    // Update clear button visibility
    if (clearBtn) {
      clearBtn.style.display = (q.length > 0 || onlyDemosFilter || currentCategory !== "all") ? "flex" : "none";
    }

    // Update match status counter
    if (matchStatus) {
      if (matchCount === DEEPIKA_PROJECTS.length && !q && !onlyDemosFilter && currentCategory === "all") {
        matchStatus.innerHTML = `<i class="bi bi-check-circle-fill text-success me-1"></i> <span>Showing all 6 projects</span>`;
        matchStatus.style.color = "#4338ca";
      } else if (matchCount > 0) {
        const parts = [];
        if (onlyDemosFilter) parts.push("Playable Labs Only");
        if (currentCategory !== "all") parts.push(`"${currentCategory}"`);
        if (q) parts.push(`"${q}"`);
        matchStatus.innerHTML = `<i class="bi bi-funnel-fill text-primary me-1"></i> <span>Showing ${matchCount} of ${DEEPIKA_PROJECTS.length} projects (${parts.join(" • ")})</span>`;
        matchStatus.style.color = "#4338ca";
      } else {
        matchStatus.innerHTML = `<i class="bi bi-exclamation-circle-fill text-danger me-1"></i> <span>No projects match your filter. <button type="button" id="btnResetSearchInline" class="btn btn-sm btn-link p-0 text-decoration-underline" style="color:#4f46e5;font-weight:700;font-size:inherit;">Reset filter</button></span>`;
        matchStatus.style.color = "#b91c1c";
        const resetInline = matchStatus.querySelector("#btnResetSearchInline");
        if (resetInline) {
          resetInline.addEventListener("click", resetAll);
        }
      }
    }

    // Scroll & pulse animation
    if (shouldScroll && firstMatchCard) {
      firstMatchCard.scrollIntoView({ behavior: "smooth", block: "center" });
      firstMatchCard.classList.add("project-card-highlight");
      setTimeout(() => {
        firstMatchCard.classList.remove("project-card-highlight");
      }, 1500);
    }
  }

  function resetAll() {
    currentCategory = "all";
    currentSearchQuery = "";
    onlyDemosFilter = false;
    if (searchInput) searchInput.value = "";
    filterBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-filter") === "all"));
    if (demoOnlyBtn) demoOnlyBtn.classList.remove("active");
    applyFilter(false);
  }

  // Live Search Input handler
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearchQuery = searchInput.value;
      applyFilter(false);
    });
  }

  // Clear button handler
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      resetAll();
      if (searchInput) searchInput.focus();
    });
  }

  // Category filter tabs handler
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      onlyDemosFilter = false;
      if (demoOnlyBtn) demoOnlyBtn.classList.remove("active");
      currentCategory = btn.getAttribute("data-filter");
      applyFilter(true);
    });
  });

  // "2 Live Interactive Demos" quick filter button
  if (demoOnlyBtn) {
    demoOnlyBtn.addEventListener("click", () => {
      onlyDemosFilter = !onlyDemosFilter;
      demoOnlyBtn.classList.toggle("active", onlyDemosFilter);
      if (onlyDemosFilter) {
        filterBtns.forEach(b => b.classList.remove("active"));
        currentCategory = "all";
      } else {
        const allBtn = titleBlock.querySelector('.deepika-filter-btn[data-filter="all"]');
        if (allBtn) allBtn.classList.add("active");
      }
      applyFilter(true);
    });
  }
}

function enhanceSingleProjectCard(block, idx) {
  const data = DEEPIKA_PROJECTS[idx];
  if (!data) return;

  const infoContainer = block.querySelector(".projectBlock__informations");
  if (!infoContainer) return;

  if (infoContainer.querySelector(".deepika-project-card")) return;

  const card = document.createElement("div");
  card.className = "deepika-project-card";
  card.id = `project-card-${idx}`;

  const numFormatted = String(idx + 1).padStart(2, "0");
  const totalFormatted = String(DEEPIKA_PROJECTS.length).padStart(2, "0");

  // Generate 4 structured bullet points
  const bulletsHtml = data.bullets.map(b => `
    <li class="deepika-bullet-item">
      <span class="deepika-bullet-icon"><i class="bi ${b.icon}"></i></span>
      <div>
        <strong class="deepika-bullet-strong">${b.title}:</strong>
        <span class="deepika-bullet-text">${b.text}</span>
      </div>
    </li>
  `).join("");

  // Generate tech badges
  const badgesHtml = data.technologies.map(tech => `
    <span class="deepika-tech-badge">
      <i class="bi bi-check2"></i> ${tech}
    </span>
  `).join("");

  // Generate live demo button ONLY if real working demo exists
  const demoBtnHtml = data.hasLiveDemo ? `
    <button type="button" class="deepika-btn-demo" data-demo-tab="${data.liveDemoTab}">
      <i class="bi bi-play-circle-fill text-warning"></i>
      <span>${data.liveDemoBtnText}</span>
    </button>
  ` : "";

  card.innerHTML = `
    <!-- Card Top Metadata Row -->
    <div class="deepika-card-meta-row">
      <div class="deepika-meta-left">
        <span class="deepika-project-idx">${numFormatted} / ${totalFormatted}</span>
        <span class="deepika-project-category">${data.category}</span>
        <span class="project-spotlight-pill ${data.spotlightClass}">
          <i class="bi ${data.spotlightIcon}"></i> ${data.spotlight}
        </span>
      </div>
      <div class="deepika-meta-right">
        <span class="deepika-project-year"><i class="bi bi-calendar3 me-1"></i> ${data.date}</span>
      </div>
    </div>

    <!-- 1. TITLE: LARGE, BOLD, DOMINANT FOCUS -->
    <div class="deepika-card-title-wrap">
      <h3 class="deepika-card-title">${data.title}</h3>
    </div>

    <!-- 2. SUBTITLE: DOMAIN, ROLE & DATASET -->
    <div class="deepika-card-subtitle">
      <i class="bi bi-layers-fill text-teal"></i>
      <span>${data.subtitle}</span>
    </div>

    <!-- 3. BULLET POINTS: 4 STRUCTURED POINTS -->
    <ul class="deepika-bullet-list">
      ${bulletsHtml}
    </ul>

    <!-- Technical Architecture Preview / Relevant Visual -->
    <div class="deepika-card-visual">
      <i class="bi ${data.visualIcon}"></i>
      <span>${data.visualText}</span>
    </div>

    <!-- Tech Stack Badges Row -->
    <div class="deepika-card-stack-wrap">
      <div class="deepika-stack-label">
        <i class="bi bi-stack"></i> Technologies &amp; Methodologies
      </div>
      <div class="deepika-badges-flex">
        ${badgesHtml}
      </div>
    </div>

    <!-- Action Buttons Bar -->
    <div class="deepika-card-actions">
      <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="deepika-btn-github">
        <i class="bi bi-github"></i>
        <span>View GitHub Repository</span>
        <i class="bi bi-box-arrow-up-right"></i>
      </a>
      ${demoBtnHtml}
    </div>
  `;

  if (data.hasLiveDemo) {
    const demoBtn = card.querySelector(".deepika-btn-demo");
    if (demoBtn) {
      demoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const tabId = demoBtn.getAttribute("data-demo-tab");
        if (window.bootstrap) {
          const labModalEl = document.getElementById("labModal");
          const modal = bootstrap.Modal.getOrCreateInstance(labModalEl);
          modal.show();
          if (tabId) {
            const tabTrigger = labModalEl.querySelector(`[data-bs-target="#${tabId}"]`) || document.getElementById(tabId);
            if (tabTrigger) {
              const tab = bootstrap.Tab.getOrCreateInstance(tabTrigger);
              tab.show();
            }
          }
        }
      });
    }
  }

  infoContainer.appendChild(card);
}

/**
 * ==========================================================================
 * 4. CLEVELAND HEART DISEASE ML PREDICTOR
 * ==========================================================================
 */
function initHeartDiseaseSimulator() {
  const ageSlider = document.getElementById("sliderAge");
  const bpSlider = document.getElementById("sliderBp");
  const cholSlider = document.getElementById("sliderChol");
  const hrSlider = document.getElementById("sliderHr");
  const thalSelect = document.getElementById("selectThal");

  if (!ageSlider || !bpSlider || !cholSlider || !hrSlider || !thalSelect) return;

  function update() {
    const age = Number(ageSlider.value);
    const bp = Number(bpSlider.value);
    const chol = Number(cholSlider.value);
    const hr = Number(hrSlider.value);
    const thal = Number(thalSelect.value);

    document.getElementById("valAge").innerText = age;
    document.getElementById("valBp").innerText = bp + " mm Hg";
    document.getElementById("valChol").innerText = chol + " mg/dl";
    document.getElementById("valHr").innerText = hr + " bpm";

    const risk = calculateRisk(age, bp, chol, hr, thal);
    const pct = Math.min(100, Math.max(5, Math.round(risk * 100)));

    document.getElementById("gaugePercent").innerText = pct + "%";

    const circle = document.getElementById("gaugeCircle");
    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (pct / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;

    const badge = document.getElementById("riskBadge");
    if (pct < 35) {
      circle.style.stroke = "#34d399";
      badge.className = "risk-badge risk-low";
      badge.innerText = "Low Risk Profile";
    } else if (pct < 65) {
      circle.style.stroke = "#fbbf24";
      badge.className = "risk-badge risk-moderate";
      badge.innerText = "Moderate Risk Profile";
    } else {
      circle.style.stroke = "#f87171";
      badge.className = "risk-badge risk-high";
      badge.innerText = "High Risk Alert";
    }
  }

  [ageSlider, bpSlider, cholSlider, hrSlider, thalSelect].forEach(el => {
    el.addEventListener("input", update);
  });

  update();
}

function calculateRisk(age, bp, chol, hr, thal) {
  let score = 0;
  score += (age - 25) * 0.012;
  score += (bp - 90) * 0.004;
  score += (chol - 120) * 0.0025;
  score -= (hr - 70) * 0.0035;

  if (thal === 1) score += 0.28;
  if (thal === 2) score += 0.42;

  const probability = 1 / (1 + Math.exp(-(score - 0.75)));
  return probability;
}

/**
 * ==========================================================================
 * 5. CODE DEBUG GAME ARCADE
 * ==========================================================================
 */
const DEBUG_CHALLENGES = [
  {
    title: "1. String Reversal Bug",
    type: "Algorithm & String Manipulation",
    buggyCode: `function reverseString(str) {\n  // BUG: String method chaining order\n  return str.reverse().split('').join('');\n}`,
    options: [
      { text: "return str.split('').reverse().join('');", isCorrect: true },
      { text: "return str.join('').split('').reverse();", isCorrect: false },
      { text: "return str.split('').join('').reverse();", isCorrect: false }
    ],
    explanation: "Strings in JS do not possess a native .reverse() method; convert to an array using .split('') first.",
    xp: 250
  },
  {
    title: "2. Array Deduplication Bug",
    type: "Data Structures & Set",
    buggyCode: `function getUnique(arr) {\n  // BUG: Set conversion syntax\n  return new Set(arr);\n}`,
    options: [
      { text: "return [...new Set(arr)];", isCorrect: true },
      { text: "return Set.from(arr);", isCorrect: false },
      { text: "return arr.filter(new Set());", isCorrect: false }
    ],
    explanation: "new Set() creates a Set object; spread into an array [...new Set(arr)] to return a deduplicated array.",
    xp: 300
  },
  {
    title: "3. Fibonacci Memoization Bug",
    type: "Dynamic Programming",
    buggyCode: `function fib(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 2) return 1;\n  // BUG: Missing memo assignment\n  return fib(n - 1) + fib(n - 2);\n}`,
    options: [
      { text: "return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);", isCorrect: true },
      { text: "return memo[n] = fib(n - 1, memo) + fib(n - 2);", isCorrect: false },
      { text: "memo = fib(n - 1) + fib(n - 2); return memo;", isCorrect: false }
    ],
    explanation: "Both recursive calls must pass the memo cache forward to avoid exponential call overhead.",
    xp: 400
  },
  {
    title: "4. Queue Dequeue Bug",
    type: "FIFO Data Structure",
    buggyCode: `function processQueue(queue) {\n  // BUG: LIFO pop used instead of FIFO dequeue\n  return queue.pop();\n}`,
    options: [
      { text: "return queue.shift();", isCorrect: true },
      { text: "return queue.unshift();", isCorrect: false },
      { text: "return queue.slice(-1);", isCorrect: false }
    ],
    explanation: "Queues are First-In First-Out (FIFO); .shift() removes the first element from the front.",
    xp: 350
  }
];

let currentGameIdx = 0;
let totalScore = 0;
let streak = 0;

function initCodeDebugGame() {
  const container = document.getElementById("debugGameContainer");
  if (!container) return;

  loadChallenge();
}

function loadChallenge() {
  const container = document.getElementById("debugGameContainer");
  if (!container) return;

  const challenge = DEBUG_CHALLENGES[currentGameIdx];
  if (!challenge) {
    container.innerHTML = `
      <div class="text-center py-4">
        <i class="bi bi-trophy-fill text-warning fs-1 mb-3"></i>
        <h4 class="font-heading fw-bold text-white">All Debug Challenges Completed!</h4>
        <p class="text-secondary">Outstanding performance! Total Score: <strong class="text-teal">${totalScore} XP</strong></p>
        <button type="button" class="btn btn-outline-info rounded-pill px-4" id="restartGameBtn">Play Again</button>
      </div>
    `;
    const restart = container.querySelector("#restartGameBtn");
    if (restart) {
      restart.addEventListener("click", () => {
        currentGameIdx = 0;
        totalScore = 0;
        streak = 0;
        loadChallenge();
      });
    }
    return;
  }

  const optionsHtml = challenge.options.map((opt, i) => `
    <button type="button" class="debug-option-btn" data-opt-idx="${i}">
      <code>${escapeHtml(opt.text)}</code>
    </button>
  `).join("");

  container.innerHTML = `
    <div class="game-hud">
      <span class="game-stat text-secondary">
        Challenge: <span class="game-stat-val">${currentGameIdx + 1} / ${DEBUG_CHALLENGES.length}</span>
      </span>
      <span class="game-stat text-secondary">
        Streak: <span class="game-stat-val text-warning"><i class="bi bi-fire"></i> ${streak}x</span>
      </span>
      <span class="game-stat text-secondary">
        Score: <span class="game-stat-val text-teal">${totalScore} XP</span>
      </span>
    </div>

    <div class="mb-3">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <h6 class="font-heading fw-bold text-white mb-0">${challenge.title}</h6>
        <span class="badge bg-secondary font-monospace">${challenge.type}</span>
      </div>
      <p class="small text-secondary mb-2">Identify and select the correct fix for the highlighted bug:</p>
      <div class="code-box">
        <pre class="mb-0"><code>${escapeHtml(challenge.buggyCode)}</code></pre>
      </div>
    </div>

    <div class="options-group">
      <label class="small text-uppercase fw-bold text-teal mb-2 d-block">Select Correct Bug Fix:</label>
      ${optionsHtml}
    </div>

    <div id="debugFeedback" class="mt-3" style="display: none;"></div>
  `;

  const optionBtns = container.querySelectorAll(".debug-option-btn");
  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      handleOption(Number(btn.getAttribute("data-opt-idx")), btn);
    });
  });
}

function handleOption(selectedIdx, clickedBtn) {
  const challenge = DEBUG_CHALLENGES[currentGameIdx];
  const isCorrect = challenge.options[selectedIdx].isCorrect;
  const feedback = document.getElementById("debugFeedback");

  const allBtns = document.querySelectorAll(".debug-option-btn");
  allBtns.forEach(b => (b.disabled = true));

  if (isCorrect) {
    clickedBtn.classList.add("correct");
    streak += 1;
    const earnedXp = challenge.xp * streak;
    totalScore += earnedXp;

    feedback.style.display = "block";
    feedback.innerHTML = `
      <div class="alert alert-success bg-opacity-10 border-success text-success p-3 rounded-3">
        <div class="fw-bold"><i class="bi bi-check-circle-fill me-2"></i>Bug Fixed! (+${earnedXp} XP)</div>
        <div class="small mt-1 text-light">${challenge.explanation}</div>
      </div>
      <button type="button" class="btn btn-sm btn-info rounded-pill px-3 mt-2" id="nextChallengeBtn">Next Challenge <i class="bi bi-arrow-right"></i></button>
    `;

    document.getElementById("nextChallengeBtn").addEventListener("click", () => {
      currentGameIdx += 1;
      loadChallenge();
    });
  } else {
    clickedBtn.classList.add("wrong");
    streak = 0;

    challenge.options.forEach((opt, idx) => {
      if (opt.isCorrect && allBtns[idx]) {
        allBtns[idx].classList.add("correct");
      }
    });

    feedback.style.display = "block";
    feedback.innerHTML = `
      <div class="alert alert-danger bg-opacity-10 border-danger text-danger p-3 rounded-3">
        <div class="fw-bold"><i class="bi bi-x-circle-fill me-2"></i>Syntax / Logic Error!</div>
        <div class="small mt-1 text-light">${challenge.explanation}</div>
      </div>
      <button type="button" class="btn btn-sm btn-outline-light rounded-pill px-3 mt-2" id="retryChallengeBtn">Try Next <i class="bi bi-arrow-right"></i></button>
    `;

    document.getElementById("retryChallengeBtn").addEventListener("click", () => {
      currentGameIdx += 1;
      loadChallenge();
    });
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
