export interface PersonalInfo {
  name: string;
  role: string;
  shortBio: string;
  statusText: string;
  location: string;
  phone?: string;
  profileImage: string | null;
  resumeUrl: string;
}

export interface AboutInfo {
  currentStatus: string;
  academicLevel: string;
  college: string;
  degree: string;
  specialization: string;
  graduationYear: string;
  cgpa: string;
  interests: string[];
  careerGoal: string;
  detailedBio: string[];
  quickStats: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: Array<{
    name: string;
    level: string;
    isPrimary?: boolean;
  }>;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Data Analytics & ML' | 'Interactive';
  description: string;
  architectureHighlights: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl?: string;
  isPlaceholderLinks: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isPlaceholderPeriod: boolean;
  description: string;
  technologies: string[];
  projectAreas: Array<{
    title: string;
    description: string;
    repoUrl?: string;
  }>;
  certificateUrl: string;
  lorUrl: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  status: string;
  location: string;
  coursework: string[];
  isPlaceholder: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl: string;
  imageUrl?: string;
  cin?: string;
  isPlaceholder?: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedinUrl: string;
  githubUrl: string;
  messageText: string;
  isPlaceholderLinks: boolean;
}

/* =======================================================================
   PORTFOLIO DATA OBJECT
   ======================================================================= */

export const portfolioData = {
  // 1. Personal Information
  personal: {
    name: "Deepika V",
    role: "Computer Science (Data Science) Student",
    shortBio:
      "3rd-year engineering student at JNNCE Shivamogga with a 9.29 CGPA. I build responsive web applications using HTML, CSS, JavaScript, and Bootstrap, and work with Python, SQL, and data analytics.",
    statusText: "Open for Internships & Projects",
    location: "Shivamogga, Karnataka, India",
    profileImage: null,
    resumeUrl: "./Deepika_V_Resume.pdf",
  } as PersonalInfo,

  // 2. About Me Section
  about: {
    currentStatus: "3rd Year Engineering Student (5th Semester)",
    academicLevel: "Undergraduate • 5th Semester",
    college: "Jawaharlal Nehru New College of Engineering (JNNCE)",
    degree: "Bachelor of Engineering (B.E.)",
    specialization: "Computer Science & Engineering (Data Science)",
    graduationYear: "2028",
    cgpa: "9.29 / 10.0",
    interests: [
      "Web Development",
      "Data Analytics",
      "Machine Learning",
      "SQL Databases",
      "Algorithmic Problem Solving",
    ],
    careerGoal:
      "To work as a software engineer or data analyst where I can write clean code, solve real problems, and learn from experienced engineers.",
    detailedBio: [
      "I am currently in my 5th semester studying Computer Science with a focus on Data Science at JNNCE Shivamogga (class of 2024–2028), holding a 9.29 CGPA.",
      "Alongside my coursework, I serve as Vice-chairperson for our college chapter of ISTE (Indian Society for Technical Education) and participate in TechForge. I also reached the college selection stage in Smart India Hackathon 2025 and participated in the Techzone AI Olympics.",
      "Recently, I completed a 1-month virtual internship in Data Science & Analytics at Future Interns, working on sales data analysis, customer churn tracking, and marketing conversions with Python and Power BI.",
    ],
    quickStats: [
      {
        value: "9.29",
        label: "CGPA",
        detail: "5th Semester",
      },
      {
        value: "2028",
        label: "Graduation",
        detail: "Class of 2028",
      },
      {
        value: "ISTE",
        label: "Vice-chair",
        detail: "Student Leadership",
      },
      {
        value: "1 Month",
        label: "Data Intern",
        detail: "Future Interns",
      },
    ],
  } as AboutInfo,

  // 3. Technical Skills
  skillsCategories: [
    {
      title: "Programming Languages",
      description: "Languages I use for writing logic, algorithms, and applications.",
      iconName: "Code2",
      skills: [
        { name: "Python", level: "Primary language for data & scripts", isPrimary: true },
        { name: "Java", level: "OOP & data structures", isPrimary: true },
        { name: "C", level: "Core foundation & algorithms", isPrimary: true },
        { name: "JavaScript", level: "Web apps & DOM scripting", isPrimary: true },
        { name: "TypeScript", level: "Typed frontend projects", isPrimary: true },
      ],
    },
    {
      title: "Web Development",
      description: "Building responsive web pages and interactive user interfaces.",
      iconName: "Layout",
      skills: [
        { name: "HTML5", level: "Semantic structure & forms", isPrimary: true },
        { name: "CSS3", level: "Flexbox, Grid & animations", isPrimary: true },
        { name: "JavaScript (ES6+)", level: "DOM manipulation & event handling", isPrimary: true },
        { name: "Bootstrap 5", level: "Responsive grid & components", isPrimary: true },
        { name: "Tailwind CSS", level: "Utility-first design", isPrimary: true },
      ],
    },
    {
      title: "Databases & Backend",
      description: "Storing and managing data with relational and document databases.",
      iconName: "Database",
      skills: [
        { name: "MySQL", level: "Tables, queries & constraints", isPrimary: true },
        { name: "PHP", level: "Backend scripting & sessions (MindVault)", isPrimary: true },
        { name: "PostgreSQL", level: "SQL queries & schemas" },
        { name: "MongoDB", level: "Document storage basics" },
      ],
    },
    {
      title: "Data Tools & Analysis",
      description: "Cleaning datasets, summarizing metrics, and generating reports.",
      iconName: "BarChart3",
      skills: [
        { name: "Pandas", level: "Data filtering & transformation", isPrimary: true },
        { name: "Matplotlib & Seaborn", level: "Charts & statistical plots", isPrimary: true },
        { name: "Power BI", level: "Dashboards & reporting", isPrimary: true },
        { name: "Excel", level: "Formulas & pivot tables", isPrimary: true },
        { name: "Scikit-Learn", level: "Classification & baseline models", isPrimary: true },
      ],
    },
  ] as SkillCategory[],

  skillsNote:
    "These are the tools and languages I actively use across my college coursework, side projects, and internship tasks.",

  // 4. Featured Projects
  projects: [
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction",
      subtitle: "Machine learning model to predict cardiac risk",
      category: "Data Analytics & ML",
      description:
        "A Python project that evaluates patient clinical metrics (age, blood pressure, cholesterol, heart rate) to predict heart disease risk.",
      architectureHighlights:
        "Uses Pandas for data cleaning, explores feature correlations, and trains classification models with Scikit-Learn.",
      keyFeatures: [
        "Data cleaning and handling of missing health indicators",
        "Feature correlation plots using Matplotlib and Seaborn",
        "Model evaluation using accuracy, precision, and recall metrics",
        "Interactive risk calculator simulated in this portfolio",
      ],
      technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/vdeepika292007-gif/heart-disease-prediction",
      demoUrl: "https://github.com/vdeepika292007-gif/heart-disease-prediction#readme",
      isPlaceholderLinks: false,
    },
    {
      id: "code-debug-game",
      title: "Code Debug Game",
      subtitle: "Gamified browser challenge to test debugging skills",
      category: "Interactive",
      description:
        "An interactive web game where players read buggy code snippets, choose the right fix, and verify it against test cases.",
      architectureHighlights:
        "Built with vanilla JavaScript and dynamic DOM updates, featuring instant test execution and a score counter.",
      keyFeatures: [
        "Hands-on debugging challenges across different concepts",
        "Instant pass/fail feedback on code fixes",
        "XP scoring system based on correct choices",
        "Playable demo integrated directly on the home page",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM API"],
      githubUrl: "https://github.com/vdeepika292007-gif/Code-Debug-Game",
      demoUrl: "https://github.com/vdeepika292007-gif/Code-Debug-Game#readme",
      isPlaceholderLinks: false,
    },
    {
      id: "campus-placement",
      title: "Campus Placement Management System",
      subtitle: "Web portal for student applications and recruitment drives",
      category: "Full-Stack",
      description:
        "A web application that simplifies college placement drives by allowing students to register and coordinators to manage applications.",
      architectureHighlights:
        "Frontend built in React with an Express backend and MySQL database for storing student records and company drive details.",
      keyFeatures: [
        "Student registration and application workflow",
        "Company drive listings with eligibility criteria",
        "Admin panel for checking student status and reports",
        "Relational MySQL tables for students and placements",
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "REST APIs"],
      githubUrl: "https://github.com/vdeepika292007-gif/campus-placement-management-system",
      demoUrl: "https://github.com/vdeepika292007-gif/campus-placement-management-system#readme",
      isPlaceholderLinks: false,
    },
    {
      id: "mind-vault",
      title: "MindVault",
      subtitle: "Personal note-taking web app with user authentication",
      category: "Full-Stack",
      description:
        "A secure personal knowledge app where users can create, organize, edit, and search their study notes and ideas.",
      architectureHighlights:
        "Built with PHP and MySQL, featuring password hashing, secure session management, and prepared SQL statements.",
      keyFeatures: [
        "User registration and login with session cookies",
        "Full CRUD operations for notes and folders",
        "Keyword search across note titles and content",
        "Relational schema preventing unauthorized note access",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/vdeepika292007-gif/MindVault",
      demoUrl: "https://github.com/vdeepika292007-gif/MindVault#readme",
      isPlaceholderLinks: false,
    },
    {
      id: "multi-vault",
      title: "Multi Vault",
      subtitle: "Modern note app with interconnected tag graphs",
      category: "Full-Stack",
      description:
        "A modern reimagining of MindVault built with React and TypeScript, adding tag filtering and a visual knowledge graph.",
      architectureHighlights:
        "Component-based architecture with client-side state management for connecting related notes through tags.",
      keyFeatures: [
        "Interactive graph linking related notes and tags",
        "Daily log editor with timestamping",
        "Fast client-side search and tag filtering",
        "Written in TypeScript with clean components",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/vdeepika292007-gif/Multi-Vault-New-Version",
      demoUrl: "https://github.com/vdeepika292007-gif/Multi-Vault-New-Version#readme",
      isPlaceholderLinks: false,
    },
  ] as Project[],

  // 5. Internship and Experience
  experience: [
    {
      id: "future-interns-da",
      role: "Data Science & Analytics Intern",
      company: "Future Interns",
      period: "Sep 2026 – Oct 2026",
      location: "Virtual / Remote",
      isPlaceholderPeriod: false,
      description:
        "Completed a 1-month internship (CIN: FIT/SEP26/DS23421) focused on practical data analysis using Python and Power BI across three core tasks:",
      technologies: ["Python", "Pandas", "Matplotlib", "Power BI", "Excel"],
      projectAreas: [
        {
          title: "1. Business Sales Analytics",
          description:
            "Analyzed sales records by product category and region to identify top revenue drivers and monthly trends.",
          repoUrl: "https://github.com/vdeepika292007-gif/future-interns-task-1-business-sales-analytics",
        },
        {
          title: "2. Customer Churn Analysis",
          description:
            "Explored customer demographics and usage metrics to identify reasons behind customer churn.",
          repoUrl: "https://github.com/vdeepika292007-gif/future_interns_ds_task2",
        },
        {
          title: "3. Marketing Conversion Analysis",
          description:
            "Evaluated campaign conversion rates and acquisition costs across promotional channels.",
          repoUrl: "https://github.com/vdeepika292007-gif/future_interns_ds_task3",
        },
      ],
      certificateUrl: "./certificates/future-interns-certificate.jpg",
      lorUrl: "./certificates/future-interns-lor.jpg",
    },
  ] as ExperienceItem[],

  // 6. Education
  education: [
    {
      institution: "Jawaharlal Nehru New College of Engineering (JNNCE), Shivamogga",
      degree: "Bachelor of Engineering (B.E.)",
      specialization: "Computer Science & Engineering (Data Science)",
      period: "2024 – 2028 (Currently in 5th Semester)",
      status: "5th Semester • 9.29 CGPA",
      location: "Shivamogga, Karnataka",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (Java/C++)",
        "Database Management Systems (DBMS)",
        "Basics of Data Analysis",
        "Artificial Intelligence & Machine Learning",
      ],
      isPlaceholder: false,
    },
    {
      institution: "PACE UM PU College, Shivamogga",
      degree: "Pre-University Course (PUC)",
      specialization: "Science (PCMB)",
      period: "2022 – 2024",
      status: "Score: 96.8% (Distinction)",
      location: "Shivamogga, Karnataka",
      coursework: ["Physics", "Chemistry", "Mathematics", "Biology"],
      isPlaceholder: false,
    },
    {
      institution: "Podar International School, Shivamogga",
      degree: "10th Standard (Secondary School)",
      specialization: "General Academics",
      period: "Completed 2022",
      status: "Score: 89.1%",
      location: "Shivamogga, Karnataka",
      coursework: ["Mathematics", "Science", "English", "Social Science"],
      isPlaceholder: false,
    },
  ] as EducationItem[],

  // 7. Certifications & Achievements
  certifications: [
    {
      id: "future-interns-cert",
      title: "Data Science & Analytics Internship Certificate",
      issuer: "Future Interns (CIN: FIT/SEP26/DS23421)",
      date: "Oct 2026",
      cin: "FIT/SEP26/DS23421",
      description:
        "Certificate of completion for the 1-month Data Science & Analytics internship (Sep 2026 – Oct 2026).",
      credentialUrl: "./certificates/future-interns-certificate.jpg",
      imageUrl: "./certificates/future-interns-certificate.jpg",
      isPlaceholder: false,
    },
    {
      id: "future-interns-lor",
      title: "Letter of Recommendation (LOR)",
      issuer: "Future Interns",
      date: "Oct 2026",
      cin: "FIT/SEP26/DS23421",
      description:
        "Recommendation letter from Sujan Kumar C (Program Coordinator) commending consistent performance and task completion.",
      credentialUrl: "./certificates/future-interns-lor.jpg",
      imageUrl: "./certificates/future-interns-lor.jpg",
      isPlaceholder: false,
    },
    {
      id: "smart-india-hackathon",
      title: "Smart India Hackathon 2025 (College Selection)",
      issuer: "JNNCE / SIH 2025",
      date: "2025",
      description:
        "Selected at college level for SmartLivestock, a smart farm monitoring project.",
      credentialUrl: "#",
      isPlaceholder: false,
    },
    {
      id: "techzone-ai-olympics",
      title: "Techzone Nationals 2K25 (AI Olympics)",
      issuer: "National-Level Competition",
      date: "2025",
      description:
        "Participated in machine learning challenges and problem-solving events.",
      credentialUrl: "#",
      isPlaceholder: false,
    },
  ] as CertificationItem[],

  // 8. Contact & Socials
  contact: {
    email: "vdeepika292007@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/deepikav8/",
    githubUrl: "https://github.com/vdeepika292007-gif",
    messageText:
      "If you would like to discuss an internship, collaboration, or project, please feel free to send me a message or connect on LinkedIn.",
    isPlaceholderLinks: false,
  } as ContactInfo,
};
