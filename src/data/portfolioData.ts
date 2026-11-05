/**
 * =======================================================================
 * Deepika V - Portfolio Data Configuration File
 * =======================================================================
 * 
 * Edit this file to customize:
 * 1. Your personal details, bio, and social links
 * 2. Education, college name, and degree specialization
 * 3. Technical skills and categorized tags
 * 4. Project details, GitHub links, and live demo URLs
 * 5. Experience, internship dates, and certificate links
 * 6. Certifications and achievements
 * 
 * All placeholders are marked with brackets like "[Your College Name]"
 * or have 'isPlaceholder: true' so you can quickly identify what to update.
 */

export interface PersonalInfo {
  name: string;
  role: string;
  shortBio: string;
  statusText: string;
  location: string;
  phone?: string;
  profileImage: string | null; // Set to null to use initials avatar, or put image path like '/profile.jpg'
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
    level: string; // e.g. "Intermediate", "Working Knowledge", "Learning"
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
    role: "Data Scientist • Data Science Undergraduate",
    shortBio:
      "Passionate Data Science student at Jawaharlal Nehru New College of Engineering, Shivamogga (9.4 CGPA). Possessing a strong foundation in data science concepts, algorithms, machine learning modeling, and analytical problem-solving.",
    statusText: "Open to Internships & Opportunities",
    location: "Shivamogga, Karnataka, India",
    phone: "+91 8217248630",
    profileImage: null,
    resumeUrl: "./Deepika_V_Resume.pdf",
  } as PersonalInfo,

  // 2. About Me Section
  about: {
    currentStatus: "Third-year engineering student (5th Semester)",
    academicLevel: "3rd Year Undergraduate • 5th Semester",
    college: "Jawaharlal Nehru New College of Engineering, Shivamogga",
    degree: "Bachelor of Engineering (B.E.)",
    specialization: "Computer Science & Engineering (Data Science)",
    graduationYear: "2028",
    cgpa: "9.4 / 10.0",
    interests: [
      "Data Science & Analytics",
      "Artificial Intelligence & Machine Learning",
      "Software Engineering",
      "Full-Stack Web Development",
      "Cybersecurity Awareness",
    ],
    careerGoal:
      "To gain practical industry exposure in data-driven methodologies, develop robust software solutions, and secure impactful roles in software development or data science.",
    detailedBio: [
      "I am a passionate Data Science engineering student at Jawaharlal Nehru New College of Engineering, Shivamogga (Class of 2024–2028), maintaining an exceptional 9.4 CGPA. I serve as the Vice-chairperson for the Indian Society for Technical Education (ISTE) and an active technical member of TechForge.",
      "My journey bridges core software development with data analytics—crafting responsive applications, running exploratory data analyses, and training machine learning models to solve practical challenges. I actively engage in hackathons including the Smart India Hackathon (college selection for SmartLivestock AI farm portal) and Techzone Nationals 2K25 (AI Olympics).",
      "I am eager to contribute to real-world engineering teams, collaborate with seasoned mentors, and apply data science to solve meaningful societal and business problems.",
    ],
    quickStats: [
      {
        value: "9.4",
        label: "Overall CGPA",
        detail: "Academic Excellence",
      },
      {
        value: "5th Sem",
        label: "Current Standing",
        detail: "B.E. CSE (Data Science)",
      },
      {
        value: "Vice Chair",
        label: "ISTE Core Member",
        detail: "Technical Leadership",
      },
      {
        value: "Data Intern",
        label: "Industry Experience",
        detail: "Completed at Future Interns",
      },
    ],
  } as AboutInfo,

  // 3. Technical Skills
  skillsCategories: [
    {
      title: "Programming Languages",
      description: "Core languages used for software development, logic building, and algorithms.",
      iconName: "Code2",
      skills: [
        { name: "Python", level: "Data Science & Projects", isPrimary: true },
        { name: "Java", level: "Core OOP Foundation", isPrimary: true },
        { name: "C", level: "Foundational Programming", isPrimary: true },
        { name: "JavaScript (ES6+)", level: "Web & Scripting", isPrimary: true },
        { name: "TypeScript", level: "Modern Frontend Stack", isPrimary: true },
      ],
    },
    {
      title: "Frontend Development",
      description: "Building responsive, modern, and accessible web user interfaces.",
      iconName: "Layout",
      skills: [
        { name: "HTML5", level: "Strong Foundation", isPrimary: true },
        { name: "CSS3 / Tailwind CSS", level: "Active Project Use", isPrimary: true },
        { name: "React", level: "Component Architecture", isPrimary: true },
      ],
    },
    {
      title: "Backend & Databases",
      description: "Data modeling, RESTful services, server-side logic, and storage.",
      iconName: "Database",
      skills: [
        { name: "Node.js", level: "Project Experience", isPrimary: true },
        { name: "PHP", level: "Project Experience (MindVault)", isPrimary: true },
        { name: "MySQL", level: "Relational Modeling", isPrimary: true },
        { name: "MongoDB", level: "NoSQL Working Knowledge" },
        { name: "PostgreSQL", level: "Relational Queries & Schemas" },
      ],
    },
    {
      title: "Data Analytics & Tools",
      description: "Data wrangling, exploratory analysis, visualization, and reporting.",
      iconName: "BarChart3",
      skills: [
        { name: "Python (Data Stack)", level: "Internship & Project Use", isPrimary: true },
        { name: "Pandas", level: "Data Cleaning & Wrangling", isPrimary: true },
        { name: "Matplotlib", level: "Statistical Visualizations", isPrimary: true },
        { name: "Power BI", level: "Interactive BI Dashboards", isPrimary: true },
        { name: "Microsoft Excel", level: "Formulas & Pivot Tables", isPrimary: true },
      ],
    },
  ] as SkillCategory[],

  skillsNote:
    "Note: These represent my current learning and project technologies. I focus on developing practical, foundational skills and continuously expanding my technical competence through hands-on practice.",

  // 4. Featured Projects
  projects: [
    {
      id: "mind-vault",
      title: "MindVault",
      subtitle: "Personal Knowledge Management System (PHP / MySQL)",
      category: "Full-Stack",
      description:
        "A personal knowledge management application that enables users to systematically capture, organize, search, and retrieve notes, thoughts, and ideas in a secure environment.",
      architectureHighlights:
        "Engineered with a PHP backend and relational MySQL schema, implementing robust user authentication, secure session handling, prepared statements for SQL injection prevention, and full data persistence.",
      keyFeatures: [
        "Secure user authentication with session management & password hashing",
        "Full CRUD operations for categorizing personal notes and documents",
        "Fast keyword search and topic-based filtering",
        "Structured MySQL schema ensuring referential data integrity",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Apache"],
      githubUrl: "https://github.com/vdeepika292007-gif/MindVault",
      demoUrl: "https://github.com/vdeepika292007-gif/MindVault#readme",
      isPlaceholderLinks: false,
    },
    {
      id: "multi-vault",
      title: "Multi Vault",
      subtitle: "Modern Knowledge Management & Graph Application",
      category: "Full-Stack",
      description:
        "A separate, modern architectural implementation of the MindVault concept, built to explore contemporary frontend and backend paradigms for deeply interconnected knowledge work.",
      architectureHighlights:
        "Architected with a component-driven frontend and decoupled API structure, featuring note organization, instant multi-tag queries, daily journaling workflows, and dynamic knowledge graph visualizations.",
      keyFeatures: [
        "Interactive knowledge graph connecting interrelated thoughts & tags",
        "Structured daily journaling system with automated date logging",
        "Multi-tag filtering and real-time client-side search",
        "Modular TypeScript/React component architecture",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Data Structures"],
      githubUrl: "https://github.com/vdeepika292007-gif/Multi-Vault-New-Version",
      demoUrl: "https://github.com/vdeepika292007-gif/Multi-Vault-New-Version#readme",
      isPlaceholderLinks: false,
    },
    {
      id: "campus-placement",
      title: "Campus Placement Management System",
      subtitle: "Web Portal for Recruitment Drives & Applications",
      category: "Full-Stack",
      description:
        "A centralized web application designed to streamline campus placement activities for students, department coordinators, and recruiting company administrators.",
      architectureHighlights:
        "Facilitates placement drive announcements, student application submissions, eligibility criteria filtering, and automated interview scheduling coordination.",
      keyFeatures: [
        "Student portal with profile and resume submission workflow",
        "Company placement drive listings with eligibility criteria checks",
        "Admin dashboard to track application statuses and placement statistics",
        "Structured relational data management for academic records",
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "REST APIs"],
      githubUrl: "https://github.com/vdeepika292007-gif/campus-placement-management-system",
      demoUrl: "https://github.com/vdeepika292007-gif/campus-placement-management-system#readme",
      isPlaceholderLinks: false,
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction",
      subtitle: "Machine Learning Risk Assessment Model",
      category: "Data Analytics & ML",
      description:
        "A predictive machine learning project focused on evaluating cardiovascular disease indicators from patient health and clinical metrics to aid early diagnosis.",
      architectureHighlights:
        "Utilizes Python and statistical learning libraries to perform data cleaning, handle missing values, analyze feature correlation, and train predictive classification models.",
      keyFeatures: [
        "Comprehensive Exploratory Data Analysis (EDA) on clinical health indicators",
        "Feature scaling, encoding, and correlation matrix visualizations",
        "Model evaluation comparing accuracy, precision, recall, and ROC-AUC curves",
        "Clear visualization of risk indicators using Matplotlib & Seaborn",
      ],
      technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter"],
      githubUrl: "https://github.com/vdeepika292007-gif/heart-disease-prediction",
      demoUrl: "https://github.com/vdeepika292007-gif/heart-disease-prediction#readme",
      isPlaceholderLinks: false,
    },
    {
      id: "code-debug-game",
      title: "Code Debug Game",
      subtitle: "Interactive Algorithmic Debugging Practice Platform",
      category: "Interactive",
      description:
        "An engaging, gamified web application designed to help developers and students practice spotting code bugs, understanding logic errors, and improving debugging intuition.",
      architectureHighlights:
        "Built with dynamic state management to render progressive coding challenges across different difficulty tiers, tracking time, attempts, and accuracy scores.",
      keyFeatures: [
        "Interactive challenge levels with real-time feedback on user fixes",
        "Hint mechanisms and syntax-highlighted code inspection",
        "Scoring system based on completion speed and minimal attempts",
        "Responsive game UI designed for accessible learning",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3 / Tailwind", "DOM API", "Game Logic"],
      githubUrl: "https://github.com/vdeepika292007-gif/Code-Debug-Game",
      demoUrl: "https://github.com/vdeepika292007-gif/Code-Debug-Game#readme",
      isPlaceholderLinks: false,
    },
  ] as Project[],

  // 5. Internship and Experience
  experience: [
    {
      id: "future-interns-da",
      role: "Data Science & Analytics Intern",
      company: "Future Interns",
      period: "September 2026 – October 2026",
      location: "Virtual / Remote Internship",
      isPlaceholderPeriod: false,
      description:
        "Completed a 1-month intensive internship program in Data Science & Analytics (CIN: FIT/SEP26/DS23421). Applied statistical methods, exploratory data analysis, and dashboard design to deliver actionable business intelligence across three core project initiatives:",
      technologies: ["Python", "Pandas", "Matplotlib", "Power BI", "Data Cleaning", "Data Visualization"],
      projectAreas: [
        {
          title: "Business Sales Performance Analysis",
          description:
            "Analyzed multi-dimensional sales datasets to track revenue trajectories, identify top revenue-generating product segments, evaluate regional patterns, and highlight seasonal sales spikes.",
          repoUrl: "https://github.com/vdeepika292007-gif/future-interns-task-1-business-sales-analytics",
        },
        {
          title: "Customer Retention and Churn Analysis",
          description:
            "Conducted behavioral and demographic analysis on customer cohorts to uncover primary drivers of churn, customer lifetime trends, and actionable retention intervention points.",
          repoUrl: "https://github.com/vdeepika292007-gif/future_interns_ds_task2",
        },
        {
          title: "Marketing Campaign Conversion Analysis",
          description:
            "Evaluated the conversion efficiency of promotional and marketing campaigns across channels, assessing cost-per-acquisition, engagement rates, and ROI metrics.",
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
      institution: "Jawaharlal Nehru New College of Engineering, Shivamogga",
      degree: "Bachelor of Engineering (B.E.)",
      specialization: "Computer Science & Engineering (Data Science)",
      period: "2024 – 2028 (Currently in 5th Semester)",
      status: "5th Semester • 9.4 CGPA",
      location: "Shivamogga, Karnataka, India",
      coursework: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "Basics of Data Analysis",
        "Database Management Systems (DBMS)",
        "Artificial Intelligence & Machine Learning",
        "Leadership: Vice-chairperson of ISTE",
        "Technical Club Member of TechForge",
      ],
      isPlaceholder: false,
    },
    {
      institution: "PACE UM PU College",
      degree: "Pre University Course (PUC)",
      specialization: "Science / PCMB",
      period: "2022 – 2024",
      status: "Grade: 96.8% (Distinction)",
      location: "Shivamogga, Karnataka, India",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology / Computer Science",
        "Academic Excellence",
      ],
      isPlaceholder: false,
    },
    {
      institution: "Podar International School",
      degree: "10th Grade Secondary Education",
      specialization: "General Academics",
      period: "2022",
      status: "Grade: 89.1%",
      location: "Shivamogga, Karnataka, India",
      coursework: [
        "Mathematics",
        "Science & Technology",
        "English",
        "Social Sciences",
        "Foundational Computing",
      ],
      isPlaceholder: false,
    },
  ] as EducationItem[],

  // 7. Certifications & Achievements
  certifications: [
    {
      id: "future-interns-cert",
      title: "Certificate of Completion — Data Science & Analytics",
      issuer: "Future Interns (CIN: FIT/SEP26/DS23421)",
      date: "16 October 2026",
      cin: "FIT/SEP26/DS23421",
      description:
        "Verified certificate awarded to Deepika V for completing the intensive internship in Data Science & Analytics (September 2026 – October 2026). Certified ISO 9001 & MSME registered.",
      credentialUrl: "./certificates/future-interns-certificate.jpg",
      imageUrl: "./certificates/future-interns-certificate.jpg",
      isPlaceholder: false,
    },
    {
      id: "future-interns-lor",
      title: "Letter of Recommendation (LOR)",
      issuer: "Future Interns (CIN: FIT/SEP26/DS23421)",
      date: "16 October 2026",
      cin: "FIT/SEP26/DS23421",
      description:
        "Official recommendation from Sujan Kumar C (Program Coordinator) recognizing Deepika V (JNNCE Shivamogga) for exemplary professionalism, consistency, and analytical execution.",
      credentialUrl: "./certificates/future-interns-lor.jpg",
      imageUrl: "./certificates/future-interns-lor.jpg",
      isPlaceholder: false,
    },
    {
      id: "smart-india-hackathon",
      title: "Smart India Hackathon 2025 — College Level Selection",
      issuer: "Ministry of Education / SIH 2025",
      date: "2025",
      description:
        "Selected at college level for ideating and developing SmartLivestock, an AI-based agricultural and livestock farm monitoring portal.",
      credentialUrl: "#",
      isPlaceholder: false,
    },
    {
      id: "techzone-ai-olympics",
      title: "Techzone Nationals 2K25 (AI Olympics)",
      issuer: "National-Level AI Competition",
      date: "2025",
      description:
        "National-level participant representing JNNCE in AI modeling, problem-solving heuristics, and machine learning challenges.",
      credentialUrl: "#",
      isPlaceholder: false,
    },
    {
      id: "bangalore-hackathon",
      title: "Bangalore Idea Hackathon & Cyber Safe Campus",
      issuer: "Idea Innovation & Cyber Safety",
      date: "2024–2025",
      description:
        "Participated in idea development, product pitching, MSME entrepreneurship awareness, and cybersecurity safety initiatives.",
      credentialUrl: "#",
      isPlaceholder: false,
    },
    {
      id: "udemy-datascience",
      title: "Data Analytics, Data Science & Machine Learning",
      issuer: "Udemy (Comprehensive Program)",
      date: "Ongoing",
      description:
        "Advanced professional course covering exploratory data analysis, predictive statistical models, and production machine learning pipelines.",
      credentialUrl: "#",
      isPlaceholder: false,
    },
  ] as CertificationItem[],

  // 8. Contact & Socials
  contact: {
    email: "vdeepika292007@gmail.com",
    phone: "+91 8217248630",
    linkedinUrl: "https://www.linkedin.com/in/deepikav8/",
    githubUrl: "https://github.com/vdeepika292007-gif",
    messageText:
      "I am actively seeking internship opportunities, collaborative coding projects, and conversations with fellow developers and analysts. Feel free to reach out via email, phone, or connect with me on LinkedIn!",
    isPlaceholderLinks: false,
  } as ContactInfo,
};
