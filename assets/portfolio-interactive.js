/**
 * ==========================================================================
 * Deepika V Portfolio - Core Interactive Engine
 * Strictly HTML5, CSS3, Vanilla JavaScript, Bootstrap 5.3
 * Verified Real Work: MindVault, Multi Vault, Campus Placement Management System,
 * Heart Disease Prediction, Code Debug Game, and Future Interns Internship.
 * ==========================================================================
 */

// --- VERIFIED PROJECTS DATA (EXACTLY 5 REAL SOFTWARE PROJECTS) ---
const DEEPIKA_PROJECTS = [
  {
    id: 1,
    title: "MindVault",
    subtitle: "Personal Knowledge Management System • PHP & MySQL",
    category: "Knowledge Management",
    spotlight: "Secure Knowledge Base",
    spotlightClass: "spotlight-featured",
    spotlightIcon: "bi-shield-lock-fill",
    date: "2026",
    bullets: [
      {
        icon: "bi-journal-bookmark-fill",
        title: "Knowledge Management",
        text: "A personal knowledge management application that allows users to capture, organize, search and manage their knowledge repository."
      },
      {
        icon: "bi-database-check",
        title: "PHP & MySQL Architecture",
        text: "Engineered structured relational MySQL database tables with optimized indexing and clean PHP backend scripts for persistent data storage."
      },
      {
        icon: "bi-shield-check",
        title: "Session Authentication",
        text: "Implemented secure user authentication with password hashing and session-based data isolation for individual user notes."
      },
      {
        icon: "bi-pencil-square",
        title: "Full CRUD Operations",
        text: "Enables instant note creation, editing, category organization, keyword searching, and deletion with input sanitization."
      }
    ],
    visualIcon: "bi-database-fill-check",
    visualText: "PHP Server Scripting • MySQL Relational Database • Session Authentication • Secure CRUD Operations",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/vdeepika292007-gif/MindVault",
    hasLiveDemo: false
  },
  {
    id: 2,
    title: "Multi Vault",
    subtitle: "Personal Knowledge Workspace • React, Node.js, Express & MongoDB",
    category: "Knowledge Management",
    spotlight: "Interactive Notes App",
    spotlightClass: "spotlight-interactive",
    spotlightIcon: "bi-diagram-3-fill",
    date: "2026",
    bullets: [
      {
        icon: "bi-journal-code",
        title: "Knowledge Management",
        text: "A knowledge management application featuring note management, search, tags, daily journaling, dashboard and knowledge graph functionality."
      },
      {
        icon: "bi-layout-sidebar-inset",
        title: "React & Vite SPA Frontend",
        text: "Obsidian-inspired dark UI with responsive sidebar navigation, fluid markdown rendering, and instant client-side route transitions."
      },
      {
        icon: "bi-hdd-network",
        title: "Node.js, Express & MongoDB REST API",
        text: "Decoupled backend architecture powered by Express.js with JWT authentication, bcryptjs encryption, and MongoDB / Mongoose schema validation."
      },
      {
        icon: "bi-share-fill",
        title: "Interactive Knowledge Graph & Journaling",
        text: "Visual SVG graph network mapping connections between ideas, related tags (#tag), and one-entry-per-day journaling with productivity analytics."
      }
    ],
    visualIcon: "bi-diagram-2-fill",
    visualText: "React SPA • Node.js & Express REST API • MongoDB / Mongoose • Interactive Knowledge Graph",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Vite"],
    githubUrl: "https://github.com/vdeepika292007-gif/Multi-Vault-New-Version",
    hasLiveDemo: false
  },
  {
    id: 3,
    title: "Campus Placement Management System",
    subtitle: "Institutional Placement Platform • Next.js, TypeScript, Prisma & PostgreSQL",
    category: "Full-Stack Web",
    spotlight: "Campus Infrastructure",
    spotlightClass: "spotlight-academic",
    spotlightIcon: "bi-building-check",
    date: "2026",
    bullets: [
      {
        icon: "bi-mortarboard-fill",
        title: "Placement Platform",
        text: "A placement management platform designed for college students and administrators to coordinate recruitment drives."
      },
      {
        icon: "bi-people-fill",
        title: "Admin & Student Roles",
        text: "Distinct permission tiers providing college placement officers and student candidates dedicated workflows and access control."
      },
      {
        icon: "bi-briefcase-fill",
        title: "Company & Drive Management",
        text: "Centralized scheduling and management of visiting recruiters, drive requirements, eligibility criteria, and job descriptions."
      },
      {
        icon: "bi-bell-fill",
        title: "Next.js, Prisma & PostgreSQL Architecture",
        text: "Architected with Next.js App Router, TypeScript, Prisma ORM with PostgreSQL persistence, real-time tracking, and role-based dashboards."
      }
    ],
    visualIcon: "bi-building-check",
    visualText: "Next.js App Router • TypeScript • Prisma ORM • PostgreSQL Database • Student & Admin RBAC",
    technologies: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/vdeepika292007-gif/campus-placement-management-system",
    hasLiveDemo: false
  },
  {
    id: 4,
    title: "Heart Disease Prediction",
    subtitle: "Cardiovascular Health Diagnostics • Scikit-Learn & Gaussian Naive Bayes",
    category: "Machine Learning",
    spotlight: "Predictive ML Model",
    spotlightClass: "spotlight-featured",
    spotlightIcon: "bi-heart-pulse-fill",
    date: "2026",
    bullets: [
      {
        icon: "bi-graph-up-arrow",
        title: "Predictive Machine Learning",
        text: "A Machine Learning project that uses health-related dataset features to predict the possibility of heart disease."
      },
      {
        icon: "bi-heart-pulse",
        title: "Biomarker Feature Analysis",
        text: "Evaluates clinical metrics including resting blood pressure, serum cholesterol, fasting blood sugar, max heart rate, and chest pain categories."
      },
      {
        icon: "bi-cpu-fill",
        title: "Gaussian Naive Bayes Model",
        text: "Trained a Gaussian Naive Bayes (GaussianNB) classification model in Scikit-Learn with LabelEncoder preprocessing and 80/20 train-test validation."
      },
      {
        icon: "bi-sliders2",
        title: "Flask Web App & Live Lab Simulator",
        text: "Packaged with a Flask web application (app.py) for patient inference, complemented by an in-browser interactive clinical risk calculator."
      }
    ],
    visualIcon: "bi-heart-pulse-fill",
    visualText: "Python ML Pipeline • Scikit-Learn GaussianNB • Pandas & NumPy • Flask Deployment • Live Lab Calculator",
    technologies: ["Python", "Scikit-Learn", "Gaussian Naive Bayes", "Pandas", "Flask"],
    githubUrl: "https://github.com/vdeepika292007-gif/heart-disease-prediction",
    hasLiveDemo: true,
    liveDemoTab: "pane-ml",
    liveDemoBtnText: "Launch ML Risk Calculator"
  },
  {
    id: 5,
    title: "Code Debug Game",
    subtitle: "Interactive Coding Practice Application & Socratic Debugging Arcade",
    category: "Interactive Practice",
    spotlight: "Playable Lab Arcade",
    spotlightClass: "spotlight-interactive",
    spotlightIcon: "bi-controller",
    date: "2026",
    bullets: [
      {
        icon: "bi-controller",
        title: "Interactive Coding Practice",
        text: "An interactive coding practice application where users can identify, inspect, and correct programming errors."
      },
      {
        icon: "bi-code-square",
        title: "Streamlit Frontend & Ace Editor",
        text: "Engineered with a custom Cyber Dark Streamlit frontend integrating the Ace interactive code editor, cybernetic gradients, and glowing accents."
      },
      {
        icon: "bi-robot",
        title: "AI-Powered Socratic Tutoring",
        text: "Integrates Google Gemini API (gemini-2.5-flash) providing progressive tiered hints, cryptic syntax clues, and conceptual explanations."
      },
      {
        icon: "bi-trophy-fill",
        title: "Progression & In-Browser Arcade",
        text: "Tracks student scoring, streak history, and player progression in SQLite (game_data.db), alongside an in-portfolio playable JavaScript arcade."
      }
    ],
    visualIcon: "bi-terminal-fill",
    visualText: "Python & Streamlit Frontend • Ace Code Editor • SQLite Persistence • In-Browser Live Arcade",
    technologies: ["Python", "Streamlit", "HTML5", "CSS3", "SQLite"],
    githubUrl: "https://github.com/vdeepika292007-gif/Code-Debug-Game",
    hasLiveDemo: true,
    liveDemoTab: "pane-game",
    liveDemoBtnText: "Play Debug Arcade"
  }
];

// --- SEPARATE WORK EXPERIENCE & INTERNSHIP DATA ---
const DEEPIKA_INTERNSHIP = {
  company: "Future Interns",
  role: "Data Analyst Intern",
  type: "Virtual Internship in Data Science & Analytics",
  period: "September 2026 – October 2026",
  cin: "FIT/SEP26/DS23421",
  overview: "Completed a 1-month intensive data analytics internship delivering exploratory data analysis, business performance reports, customer retention modeling, and marketing conversion analytics.",
  technologies: ["Python", "Pandas", "Matplotlib", "Power BI"],
  tasks: [
    {
      num: "Task 01",
      badgeClass: "badge-task-sales",
      title: "Business Sales Performance Analysis",
      summary: "Comprehensive exploratory data analysis examining enterprise sales metrics, revenue distributions, regional trends, product category performances, and seasonal order volumes.",
      technologies: ["Python", "Pandas", "Matplotlib", "Power BI"],
      githubUrl: "https://github.com/vdeepika292007-gif/future-interns-task-1-business-sales-analytics"
    },
    {
      num: "Task 02",
      badgeClass: "badge-task-churn",
      title: "Customer Retention and Churn Analysis",
      summary: "Evaluated customer behavioral datasets to isolate key churn indicators, analyze retention drivers, examine customer lifetime engagement, and formulate actionable retention strategies.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/vdeepika292007-gif/future_interns_ds_task2"
    },
    {
      num: "Task 03",
      badgeClass: "badge-task-marketing",
      title: "Marketing Campaign Conversion Analysis",
      summary: "Evaluated multi-channel marketing campaigns and acquisition funnels, identifying optimal conversion channels, cohort response rates, and customer acquisition efficiency.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/vdeepika292007-gif/future_interns_ds_task3"
    }
  ]
};

// --- INITIALIZATION ENTRY POINT ---
document.addEventListener("DOMContentLoaded", () => {
  initCleanNavigation();
  initIntroEnhancer();
  initProjectsEnhancer();
  initHeartDiseaseSimulator();
  initCodeDebugGame();
  initLoaderSafetyWatcher();
});

/**
 * Ensures the preloader overlay never traps the user if a WebGL animation halts.
 */
function initLoaderSafetyWatcher() {
  setTimeout(() => {
    const loader = document.querySelector(".loaderBlock");
    if (loader) {
      const style = window.getComputedStyle(loader);
      if (style.display !== "none" && style.opacity !== "0" && style.transform === "none") {
        console.info("[Deepika Portfolio] Loader safety watcher: smoothly transitioning preloader away.");
        loader.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease";
        loader.style.transform = "translateY(-100%)";
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        setTimeout(() => { loader.style.display = "none"; }, 700);
      }
    }
  }, 2800);
}

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
    <button type="button" class="nav-clean-btn" id="navBtnProjects">
      <i class="bi bi-code-slash text-info"></i>
      <span>Projects (5)</span>
    </button>
    <button type="button" class="nav-clean-btn" id="navBtnInternship">
      <i class="bi bi-briefcase-fill text-teal"></i>
      <span>Internship</span>
    </button>
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

  // Connect Projects smooth scroll
  const projBtn = actionsDiv.querySelector("#navBtnProjects");
  if (projBtn) {
    projBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const firstProject = document.querySelector(".projectBlock");
      if (firstProject) {
        firstProject.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Connect Internship modal trigger
  const internshipBtn = actionsDiv.querySelector("#navBtnInternship");
  if (internshipBtn) {
    internshipBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.bootstrap) {
        const internshipModalEl = document.getElementById("internshipModal");
        if (internshipModalEl) {
          const modal = bootstrap.Modal.getOrCreateInstance(internshipModalEl);
          modal.show();
        } else {
          // Scroll to internship block
          const internshipCard = document.getElementById("internship-experience-block");
          if (internshipCard) {
            internshipCard.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      }
    });
  }

  // Connect Certificates modal trigger
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

  // Connect Live Lab modal trigger
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

  // Insert cleanly into navbarBlock__right
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
 * 2. INTRO SECTION HERO CARD
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

  const topBlock = introBlock.querySelector(".introBlock__top");
  if (topBlock) topBlock.style.display = "none";

  const bottomContainer = introBlock.querySelector(".introBlock__bottom");
  if (!bottomContainer) return;

  const oldText = bottomContainer.querySelector(".bottom__text");
  if (oldText) oldText.style.display = "none";
  const oldStars = bottomContainer.querySelector(".bottom__stars");
  if (oldStars) oldStars.style.display = "none";
  const oldVideo = bottomContainer.querySelector(".bottom__video");
  if (oldVideo) oldVideo.style.display = "none";
  const oldHint = bottomContainer.querySelector(".bottom__showreelHint");
  if (oldHint) oldHint.style.display = "none";

  if (bottomContainer.querySelector(".deepika-intro-card")) return;

  const existingLegacy = bottomContainer.querySelector(".deepika-intro-content");
  if (existingLegacy) existingLegacy.remove();

  const cardDiv = document.createElement("div");
  cardDiv.className = "deepika-intro-card";
  cardDiv.innerHTML = `
    <!-- Top Pill Eyebrow -->
    <div class="intro-pill-badge">
      <i class="bi bi-sparkles"></i>
      <span>Engineering Tomorrow's Data Systems</span>
    </div>

    <!-- 1. UNIQUE TITLE -->
    <h1 class="deepika-intro-title">
      Deepika V
    </h1>

    <!-- 2. UNIQUE SUBTITLE -->
    <div class="deepika-intro-subtitle">
      <i class="bi bi-code-slash"></i>
      <span>Data Science &amp; Full-Stack Web Developer · Class of 2028</span>
    </div>

    <!-- 3. 2x2 Feature Grid -->
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
            Data Analyst Intern at <strong>Future Interns</strong>, delivering business sales analytics, customer churn analysis, and marketing campaign conversion funnels.
          </p>
        </div>
      </div>

      <!-- Item 4: Core Technical Repertoire -->
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
            Specialized in <strong>Python</strong>, <strong>Machine Learning (Scikit-Learn)</strong>, <strong>Pandas</strong>, <strong>PHP</strong>, <strong>MySQL</strong>, <strong>JavaScript (ES6+)</strong>, and <strong>Bootstrap 5.3</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Quick Action Buttons Row -->
    <div class="intro-card-actions">
      <a href="#projects" class="intro-btn-primary" id="exploreProjectsBtn">
        <span>Explore 5 Software Projects</span>
        <i class="bi bi-arrow-down-circle-fill"></i>
      </a>
      <a href="./Deepika_V_Resume.pdf" download="Deepika_V_Resume.pdf" class="intro-btn-secondary">
        <i class="bi bi-download"></i>
        <span>Download Resume PDF</span>
      </a>
    </div>
  `;

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
 * Displays ONLY the 5 verified software projects.
 * Dedicated Internship Showcase for Future Interns.
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
          <span>Verified Software Portfolio &amp; Machine Learning</span>
        </div>

        <!-- Heading -->
        <h2 class="deepika-section-heading">Featured Projects &amp; Software Solutions</h2>

        <!-- Lead Paragraph -->
        <p class="deepika-section-lead">
          Explore actual software applications and machine learning models engineered by <strong>Deepika V</strong> across Personal Knowledge Management, College Infrastructure, Predictive Healthcare AI, and Interactive Coding Practice.
        </p>

        <!-- Interactive Header Quick Stats & Action Pills -->
        <div class="deepika-header-stats">
          <span class="stat-pill stat-count">
            <i class="bi bi-folder-check text-primary"></i>
            <span>5 Verified Software Projects</span>
          </span>
          <button type="button" class="stat-pill stat-action" id="filterOnlyDemosBtn" title="Show only projects with live playable browser labs">
            <i class="bi bi-lightning-charge-fill"></i>
            <span>2 Live Interactive Labs</span>
          </button>
          <button type="button" class="stat-pill stat-action" id="headerInternshipBtn" title="View Future Interns Data Analyst Internship">
            <i class="bi bi-briefcase-fill text-teal"></i>
            <span>Future Interns Internship</span>
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
              placeholder="Search projects by name, keyword, or tech (e.g. Next.js, PostgreSQL, Prisma, React, Python, MindVault)..." 
              autocomplete="off"
              spellcheck="false"
            />
            <button type="button" id="clearSearchBtn" class="search-clear-btn" title="Clear search" style="display:none;">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>
          <div id="searchMatchStatus" class="search-match-status">
            <i class="bi bi-check-circle-fill text-success me-1"></i>
            <span>Showing all 5 projects</span>
          </div>
        </div>

        <!-- Category Filter Tabs Navigation -->
        <div class="deepika-filter-nav" role="tablist">
          <button type="button" class="deepika-filter-btn active" data-filter="all">
            <i class="bi bi-grid-fill"></i> All Projects (5)
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Knowledge Management">
            <i class="bi bi-journal-bookmark-fill text-primary"></i> Knowledge Management (2)
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Full-Stack Web">
            <i class="bi bi-building-check text-success"></i> Full-Stack Web (1)
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Machine Learning">
            <i class="bi bi-heart-pulse-fill text-danger"></i> Machine Learning (1)
          </button>
          <button type="button" class="deepika-filter-btn" data-filter="Interactive Practice">
            <i class="bi bi-controller text-info"></i> Interactive Practice (1)
          </button>
        </div>
      </div>
    `;

    // Connect header internship button
    const headerInternshipBtn = titleBlock.querySelector("#headerInternshipBtn");
    if (headerInternshipBtn) {
      headerInternshipBtn.addEventListener("click", () => {
        if (window.bootstrap) {
          const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("internshipModal"));
          modal.show();
        }
      });
    }

    // Connect Interactive Filter & Search Engine
    setupInteractiveFiltersAndSearch(titleBlock, projectBlocks);
  }

  // 2. Enhance each individual block
  projectBlocks.forEach((block, idx) => {
    if (idx < DEEPIKA_PROJECTS.length) {
      enhanceSingleProjectCard(block, idx);
    } else if (idx === DEEPIKA_PROJECTS.length) {
      enhanceInternshipBlock(block);
    } else {
      block.style.display = "none";
    }
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
      // If it's the internship block (idx === 5), keep visible unless searching for projects specifically
      if (idx >= DEEPIKA_PROJECTS.length) {
        if (idx === DEEPIKA_PROJECTS.length) {
          if (onlyDemosFilter) {
            block.style.display = "none";
          } else if (currentCategory !== "all" && !q) {
            block.style.display = "none";
          } else if (q && !("future interns data analyst internship sales churn marketing power bi python pandas".includes(q))) {
            block.style.display = "none";
          } else {
            block.style.display = "";
          }
        } else {
          block.style.display = "none";
        }
        return;
      }

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
        matchStatus.innerHTML = `<i class="bi bi-check-circle-fill text-success me-1"></i> <span>Showing all 5 projects</span>`;
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

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearchQuery = searchInput.value;
      applyFilter(false);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      resetAll();
      if (searchInput) searchInput.focus();
    });
  }

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

/**
 * Render Large, Attractive, Prominently Displayed Single Project Card
 */
function enhanceSingleProjectCard(block, idx) {
  const data = DEEPIKA_PROJECTS[idx];
  if (!data) return;

  const infoContainer = block.querySelector(".projectBlock__informations");
  if (!infoContainer) return;

  // Clear existing custom card if any to refresh
  const existingCard = infoContainer.querySelector(".deepika-project-card");
  if (existingCard) existingCard.remove();

  const card = document.createElement("div");
  card.className = "deepika-project-card";
  card.id = `project-card-${idx}`;

  const numFormatted = String(idx + 1).padStart(2, "0");
  const totalFormatted = String(DEEPIKA_PROJECTS.length).padStart(2, "0");

  const bulletsHtml = data.bullets.map(b => `
    <li class="deepika-bullet-item">
      <span class="deepika-bullet-icon"><i class="bi ${b.icon}"></i></span>
      <div>
        <strong class="deepika-bullet-strong">${b.title}:</strong>
        <span class="deepika-bullet-text">${b.text}</span>
      </div>
    </li>
  `).join("");

  const badgesHtml = data.technologies.map(tech => `
    <span class="deepika-tech-badge">
      <i class="bi bi-check2"></i> ${tech}
    </span>
  `).join("");

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

    <!-- 1. TITLE: LARGE, BOLD, PROMINENT DISPLAY -->
    <div class="deepika-card-title-wrap">
      <h3 class="deepika-card-title">${data.title}</h3>
    </div>

    <!-- 2. SUBTITLE: DOMAIN & ARCHITECTURE -->
    <div class="deepika-card-subtitle">
      <i class="bi bi-layers-fill text-teal"></i>
      <span>${data.subtitle}</span>
    </div>

    <!-- 3. BULLET POINTS -->
    <ul class="deepika-bullet-list">
      ${bulletsHtml}
    </ul>

    <!-- Technical Architecture Preview -->
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
 * DEDICATED SEPARATE WORK EXPERIENCE & INTERNSHIP SHOWCASE
 * Future Interns Data Analyst Internship & 3 Actual Tasks
 * ==========================================================================
 */
function enhanceInternshipBlock(block) {
  const infoContainer = block.querySelector(".projectBlock__informations");
  if (!infoContainer) return;

  const existingCard = infoContainer.querySelector(".deepika-internship-card");
  if (existingCard) existingCard.remove();

  const card = document.createElement("div");
  card.className = "deepika-internship-card";
  card.id = "internship-experience-block";

  const tasksHtml = DEEPIKA_INTERNSHIP.tasks.map(t => {
    const techBadges = t.technologies.map(tech => `
      <span class="deepika-tech-badge"><i class="bi bi-check2"></i> ${tech}</span>
    `).join("");

    return `
      <div class="internship-task-card">
        <div class="task-card-header">
          <span class="task-badge ${t.badgeClass}">${t.num}</span>
          <span class="task-category-label">Data Analytics Deliverable</span>
        </div>
        <h4 class="task-card-title">${t.title}</h4>
        <p class="task-card-desc">${t.summary}</p>
        <div class="task-card-tech">
          ${techBadges}
        </div>
        <a href="${t.githubUrl}" target="_blank" rel="noopener noreferrer" class="task-btn-github">
          <i class="bi bi-github"></i>
          <span>View Task Code</span>
          <i class="bi bi-box-arrow-up-right"></i>
        </a>
      </div>
    `;
  }).join("");

  const mainTechBadges = DEEPIKA_INTERNSHIP.technologies.map(tech => `
    <span class="deepika-tech-badge"><i class="bi bi-check2"></i> ${tech}</span>
  `).join("");

  card.innerHTML = `
    <!-- Top Metadata Eyebrow -->
    <div class="deepika-card-meta-row">
      <div class="deepika-meta-left">
        <span class="project-spotlight-pill spotlight-academic">
          <i class="bi bi-briefcase-fill"></i> Industry Work Experience
        </span>
        <span class="deepika-project-category">${DEEPIKA_INTERNSHIP.company}</span>
      </div>
      <div class="deepika-meta-right">
        <span class="deepika-project-year"><i class="bi bi-calendar3 me-1"></i> ${DEEPIKA_INTERNSHIP.period}</span>
      </div>
    </div>

    <!-- Title: Large, Bold, Prominent -->
    <div class="deepika-card-title-wrap">
      <h3 class="deepika-card-title">Data Science &amp; Analytics Internship</h3>
    </div>

    <!-- Subtitle: Organization & Role -->
    <div class="deepika-card-subtitle">
      <i class="bi bi-award-fill text-teal"></i>
      <span>Future Interns • Role: ${DEEPIKA_INTERNSHIP.role} • CIN: ${DEEPIKA_INTERNSHIP.cin}</span>
    </div>

    <!-- Overview Text -->
    <p class="internship-overview-text">
      ${DEEPIKA_INTERNSHIP.overview}
    </p>

    <!-- Technologies Used Row -->
    <div class="deepika-card-stack-wrap">
      <div class="deepika-stack-label">
        <i class="bi bi-stack"></i> Applied Analytics Stack (Python, Pandas, Matplotlib, Power BI)
      </div>
      <div class="deepika-badges-flex">
        ${mainTechBadges}
      </div>
    </div>

    <!-- 3 Actual Tasks Grid -->
    <div class="internship-tasks-container">
      <div class="internship-tasks-heading">
        <i class="bi bi-list-task text-teal"></i>
        <span>Three Internship Project Tasks &amp; Analysis Deliverables:</span>
      </div>
      <div class="internship-tasks-grid">
        ${tasksHtml}
      </div>
    </div>

    <!-- Action Buttons Row: View Certificate & LOR -->
    <div class="deepika-card-actions mt-4 pt-3 border-top border-secondary-subtle">
      <button type="button" class="deepika-btn-demo" id="internshipCertBtn">
        <i class="bi bi-award-fill text-warning"></i>
        <span>View Verified Certificate</span>
      </button>
      <button type="button" class="deepika-btn-demo" id="internshipLorBtn">
        <i class="bi bi-envelope-paper-heart text-info"></i>
        <span>View Letter of Recommendation (LOR)</span>
      </button>
    </div>
  `;

  // Connect Certificate and LOR buttons
  const certBtn = card.querySelector("#internshipCertBtn");
  if (certBtn) {
    certBtn.addEventListener("click", () => {
      if (window.bootstrap) {
        const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("certModal"));
        modal.show();
        const tabTrigger = document.getElementById("tab-cert");
        if (tabTrigger) {
          const tab = bootstrap.Tab.getOrCreateInstance(tabTrigger);
          tab.show();
        }
      }
    });
  }

  const lorBtn = card.querySelector("#internshipLorBtn");
  if (lorBtn) {
    lorBtn.addEventListener("click", () => {
      if (window.bootstrap) {
        const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("certModal"));
        modal.show();
        const tabTrigger = document.getElementById("tab-lor");
        if (tabTrigger) {
          const tab = bootstrap.Tab.getOrCreateInstance(tabTrigger);
          tab.show();
        }
      }
    });
  }

  infoContainer.appendChild(card);
}

/**
 * ==========================================================================
 * 4. CLEVELAND HEART DISEASE ML PREDICTOR
 * ==========================================================================
 */
function initHeartDiseaseSimulator() {
  const ageSlider = document.getElementById("modalAgeSlider");
  const bpSlider = document.getElementById("modalBpSlider");
  const cholSlider = document.getElementById("modalCholSlider");
  const hrSlider = document.getElementById("modalHrSlider");

  if (!ageSlider || !bpSlider || !cholSlider || !hrSlider) return;

  function update() {
    const age = Number(ageSlider.value);
    const bp = Number(bpSlider.value);
    const chol = Number(cholSlider.value);
    const hr = Number(hrSlider.value);

    const ageVal = document.getElementById("modalAgeVal");
    if (ageVal) ageVal.textContent = `${age} Yrs`;

    const bpVal = document.getElementById("modalBpVal");
    if (bpVal) bpVal.textContent = `${bp} mm Hg`;

    const cholVal = document.getElementById("modalCholVal");
    if (cholVal) cholVal.textContent = `${chol} mg/dL`;

    const hrVal = document.getElementById("modalHrVal");
    if (hrVal) hrVal.textContent = `${hr} bpm`;

    const risk = calculateRisk(age, bp, chol, hr);
    const pct = Math.min(99, Math.max(3, Math.round(risk * 100)));

    const riskPercent = document.getElementById("modalRiskPercent");
    if (riskPercent) riskPercent.textContent = `${pct}%`;

    const riskCircle = document.getElementById("modalRiskCircle");
    if (riskCircle) {
      const circumference = 251.2;
      const offset = circumference - (pct / 100) * circumference;
      riskCircle.style.strokeDashoffset = offset;

      const riskBadge = document.getElementById("modalRiskBadge");
      const riskRec = document.getElementById("modalRiskRecommendation");

      if (pct < 25) {
        riskCircle.style.stroke = "#2dd4bf";
        if (riskBadge) {
          riskBadge.className = "badge bg-success-subtle text-success border border-success-subtle px-3 py-1.5";
          riskBadge.textContent = "Low Cardiovascular Risk";
        }
        if (riskRec) {
          riskRec.textContent = "Parameters within favorable ranges. Continue regular physical activity and balanced diet.";
        }
      } else if (pct < 55) {
        riskCircle.style.stroke = "#fbbf24";
        if (riskBadge) {
          riskBadge.className = "badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-1.5";
          riskBadge.textContent = "Moderate Cardiovascular Risk";
        }
        if (riskRec) {
          riskRec.textContent = "Elevated indicators detected. Clinical lifestyle adjustments and follow-up consultation recommended.";
        }
      } else {
        riskCircle.style.stroke = "#f87171";
        if (riskBadge) {
          riskBadge.className = "badge bg-danger-subtle text-danger border border-danger-subtle px-3 py-1.5";
          riskBadge.textContent = "High Cardiovascular Risk Alert";
        }
        if (riskRec) {
          riskRec.textContent = "Significant risk probability flagged. Immediate diagnostic screening and cardiologist evaluation strongly advised.";
        }
      }
    }
  }

  [ageSlider, bpSlider, cholSlider, hrSlider].forEach(el => {
    el.addEventListener("input", update);
  });

  update();
}

function calculateRisk(age, bp, chol, hr) {
  let z = -4.2;
  z += (age - 25) * 0.045;
  z += (bp - 100) * 0.022;
  z += (chol - 150) * 0.012;
  z -= (hr - 80) * 0.015;

  const probability = 1 / (1 + Math.exp(-z));
  return probability;
}

/**
 * ==========================================================================
 * 5. CODE DEBUG GAME ARCADE
 * ==========================================================================
 */
const DEBUG_CHALLENGES = [
  {
    title: "Challenge 01: Palindrome String Normalization",
    type: "Algorithm & String Filtering",
    context: "The function fails when comparing mixed casing ('Racecar') or strings with punctuation ('A man, a plan, a canal: Panama').",
    buggyCode: `function isPalindrome(str) {\n  // BUG: Missing lowercase and punctuation filter!\n  const cleanStr = str;\n  const reversed = cleanStr.split('').reverse().join('');\n  return cleanStr === reversed;\n}`,
    options: [
      { text: "Change '===' to '=='", isCorrect: false },
      { text: "Normalize with: str.toLowerCase().replace(/[^a-z0-9]/g, '')", isCorrect: true },
      { text: "Use cleanStr.slice(0, cleanStr.length - 1)", isCorrect: false }
    ],
    explanation: "Palindromes require case-insensitive comparison and removal of non-alphanumeric punctuation before reversing.",
    xp: 250
  },
  {
    title: "Challenge 02: Array Element Frequency Counter",
    type: "Data Structures & Hash Map",
    context: "The counter returns NaN or misses the first occurrence because map[item] starts as undefined.",
    buggyCode: `function countFrequencies(arr) {\n  const freq = {};\n  for (let item of arr) {\n    // BUG: Missing default fallback for uninitialized keys\n    freq[item] = freq[item] + 1;\n  }\n  return freq;\n}`,
    options: [
      { text: "Initialize with: freq[item] = (freq[item] || 0) + 1;", isCorrect: true },
      { text: "Replace 'for...of' with 'for...in'", isCorrect: false },
      { text: "Set freq = new Array(arr.length);", isCorrect: false }
    ],
    explanation: "Accessing an uninitialized property returns undefined; adding 1 yields NaN. Using (freq[item] || 0) + 1 provides a safe 0 fallback.",
    xp: 300
  },
  {
    title: "Challenge 03: FIFO Queue Dequeue Mechanism",
    type: "FIFO Data Structure",
    context: "A queue must process the oldest incoming item first (FIFO). Currently it removes the newest item (LIFO stack behavior).",
    buggyCode: `function processQueue(queue) {\n  // BUG: LIFO pop() used instead of FIFO dequeue!\n  return queue.pop();\n}`,
    options: [
      { text: "Use queue.shift(); to remove from front", isCorrect: true },
      { text: "Use queue.unshift();", isCorrect: false },
      { text: "Use queue.slice(-1);", isCorrect: false }
    ],
    explanation: "Queues operate on First-In, First-Out (FIFO) semantics. Array.prototype.shift() removes and returns the first element from the front.",
    xp: 350
  }
];

let currentGameIdx = 0;
let totalScore = 0;
let streak = 0;

function initCodeDebugGame() {
  const container = document.getElementById("modalOptionsContainer");
  if (!container) return;

  loadChallenge();

  const nextBtn = document.getElementById("modalNextChallengeBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentGameIdx = (currentGameIdx + 1) % DEBUG_CHALLENGES.length;
      loadChallenge();
    });
  }
}

function loadChallenge() {
  const optionsContainer = document.getElementById("modalOptionsContainer");
  const codeContent = document.getElementById("modalCodeContent");
  const titleEl = document.getElementById("modalChallengeTitle");
  const contextEl = document.getElementById("modalBugContext");
  const feedbackEl = document.getElementById("modalGameFeedback");

  if (!optionsContainer || !codeContent || !titleEl) return;

  const challenge = DEBUG_CHALLENGES[currentGameIdx];
  if (!challenge) return;

  titleEl.textContent = challenge.title;
  if (contextEl) contextEl.textContent = challenge.context;
  if (feedbackEl) feedbackEl.innerHTML = "";

  codeContent.innerHTML = `<pre class="text-light font-monospace small mb-0"><code>${escapeHtml(challenge.buggyCode)}</code></pre>`;

  optionsContainer.innerHTML = challenge.options.map((opt, i) => `
    <button type="button" class="btn btn-sm btn-outline-secondary w-100 text-start font-monospace mb-2 py-2 px-3 debug-option-btn" data-opt-idx="${i}">
      <span class="badge bg-secondary me-2">${String.fromCharCode(65 + i)}</span>
      <span>${escapeHtml(opt.text)}</span>
    </button>
  `).join("");

  const optionBtns = optionsContainer.querySelectorAll(".debug-option-btn");
  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      handleOption(Number(btn.getAttribute("data-opt-idx")), btn);
    });
  });
}

function handleOption(selectedIdx, clickedBtn) {
  const challenge = DEBUG_CHALLENGES[currentGameIdx];
  const isCorrect = challenge.options[selectedIdx].isCorrect;
  const feedback = document.getElementById("modalGameFeedback");
  const scoreBadge = document.getElementById("modalScoreBadge");

  const allBtns = document.querySelectorAll(".debug-option-btn");
  allBtns.forEach(b => (b.disabled = true));

  if (isCorrect) {
    clickedBtn.classList.remove("btn-outline-secondary");
    clickedBtn.classList.add("btn-success");
    streak += 1;
    totalScore += challenge.xp;

    if (scoreBadge) scoreBadge.textContent = `Score: ${totalScore} XP`;

    if (feedback) {
      feedback.innerHTML = `
        <div class="alert alert-success bg-opacity-10 border-success text-success p-2.5 rounded-3 small mt-2">
          <div class="fw-bold"><i class="bi bi-check-circle-fill me-1"></i> Bug Fixed! (+${challenge.xp} XP)</div>
          <div class="mt-1">${challenge.explanation}</div>
        </div>
      `;
    }
  } else {
    clickedBtn.classList.remove("btn-outline-secondary");
    clickedBtn.classList.add("btn-danger");
    streak = 0;

    challenge.options.forEach((opt, idx) => {
      if (opt.isCorrect && allBtns[idx]) {
        allBtns[idx].classList.remove("btn-outline-secondary");
        allBtns[idx].classList.add("btn-success");
      }
    });

    if (feedback) {
      feedback.innerHTML = `
        <div class="alert alert-danger bg-opacity-10 border-danger text-danger p-2.5 rounded-3 small mt-2">
          <div class="fw-bold"><i class="bi bi-x-circle-fill me-1"></i> Incorrect Patch</div>
          <div class="mt-1">${challenge.explanation}</div>
        </div>
      `;
    }
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
