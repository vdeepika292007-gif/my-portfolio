# Deepika V — Personal Portfolio Website

A modern, responsive personal developer portfolio website designed for **Deepika V**, a third-year engineering student, aspiring software developer, and data analyst.

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, featuring a dark theme, subtle violet accents, smooth scrolling, interactive project cards, and a centralized configuration file for updating information.

---

## 🌟 Key Features

- **Dark Theme with Violet Accents**: Modern aesthetic with glassmorphism, responsive typography, and glowing gradients.
- **Centralized Data File**: All personal details, project descriptions, skills, experience, and links are managed in a single file: [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).
- **Interactive Project Showcase**: Filter projects by categories (*All*, *Full-Stack*, *Data Analytics & ML*, *Interactive*), with architecture highlights, tech tags, and code/demo links.
- **Data Analyst Internship Spotlight**: Details the 3 core initiatives completed during the Future Interns internship:
  1. Business Sales Performance Analysis
  2. Customer Retention and Churn Analysis
  3. Marketing Campaign Conversion Analysis
- **Clear Placeholder Indicators**: No false or fabricated college names, links, or credentials. Any item requiring your personal input is styled with a distinct badge and opens an informative guide dialog when clicked.
- **Reliable Contact System**: Clean contact form that validates user input and triggers a pre-filled `mailto:` message or one-click copy draft—no fake submit buttons.
- **Resume & Profile Integration**: Includes a download button with a placeholder PDF and an elegant avatar placeholder ready for your photo.
- **Back-to-Top Navigation**: Smooth floating button and responsive mobile navigation drawer.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view your website with hot module replacement (instant preview as you edit).

### 4. Build for Production
```bash
npm run build
```
This generates an optimized static production bundle in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🛠️ How to Customize Your Information

You do **not** need to touch multiple component files. All your data lives in one single file:

📁 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

### 1. Replace Profile Photo
1. Save your photograph inside the `public/` folder as `profile.jpg` (or `.png`).
2. Open [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).
3. Find `portfolioData.personal` and change:
   ```ts
   profileImage: "./profile.jpg",
   ```

### 2. Replace Resume PDF
1. Place your actual resume PDF into the `public/` folder (e.g. `public/Deepika_V_Resume.pdf`).
2. In [`src/data/portfolioData.ts`](./src/data/portfolioData.ts), update:
   ```ts
   resumeUrl: "./Deepika_V_Resume.pdf",
   ```

### 3. Update College and Education Details
In [`src/data/portfolioData.ts`](./src/data/portfolioData.ts), locate `about` and `education`:
- Replace `[Your College / University Name]` with your actual college name.
- Replace `[Your Branch / Specialization]` with your branch (e.g., `Computer Science and Engineering`).
- Replace `[Your CGPA / Percentage]` with your academic score.

### 4. Update Project Repository & Demo Links
In [`src/data/portfolioData.ts`](./src/data/portfolioData.ts), find the `projects` array:
- Add your actual GitHub URLs to `githubUrl`.
- Add your live deployment URLs to `demoUrl`.
- Set `isPlaceholderLinks: false` when your links are live.

### 5. Update Contact Information
In [`src/data/portfolioData.ts`](./src/data/portfolioData.ts), find `contact`:
- `email`: replace with your active email (e.g. `deepika@gmail.com`).
- `linkedinUrl`: replace with your LinkedIn profile link.
- `githubUrl`: replace with your GitHub profile link.

---

## 🌐 Free Deployment Options

### Option A: GitHub Pages (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Deepika V Portfolio"
   ```
2. Create a repository on GitHub (e.g., `portfolio` or `deepika-portfolio`).
3. Link your local repository and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
5. Add this deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
6. Run `npm run deploy`. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
*(Note: `vite.config.ts` is already configured with `base: './'`, so your relative links will work out of the box!)*

### Option B: Vercel (Fastest & Simplest)
1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com/) with GitHub.
3. Click **"Add New Project"** and select your repository.
4. Leave settings as default (Framework Preset: **Vite**).
5. Click **Deploy**. Your portfolio is instantly live with a free `.vercel.app` domain and automatic SSL.

### Option C: Netlify
1. Run `npm run build` locally.
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder. Your portfolio is online in seconds!

---

## 📂 Project Structure

```
MyPortfolio/
├── public/
│   ├── favicon.svg             # Custom "DV" monogram SVG icon
│   └── resume-placeholder.pdf  # Placeholder resume file
├── src/
│   ├── components/
│   │   ├── About.tsx           # Bio, academic info, and key highlights
│   │   ├── BackToTop.tsx       # Floating smooth scroll-to-top button
│   │   ├── Certifications.tsx  # Future Interns certificate & LOR
│   │   ├── Contact.tsx         # Functional contact form & social channels
│   │   ├── Education.tsx       # Degree & relevant coursework
│   │   ├── Experience.tsx      # Future Interns Data Analyst internship
│   │   ├── Footer.tsx          # Copyright & quick links
│   │   ├── Hero.tsx            # Greeting, bio, CTAs, and avatar card
│   │   ├── Icons.tsx           # GitHub and LinkedIn SVG components
│   │   ├── Modal.tsx           # Placeholder guide modal dialog
│   │   ├── Navbar.tsx          # Responsive navbar with mobile drawer
│   │   └── Skills.tsx          # Categorized technical toolkit
│   ├── data/
│   │   └── portfolioData.ts    # ⭐ ALL PORTFOLIO CONTENT & PLACEHOLDERS
│   ├── App.tsx                 # Root component orchestrator
│   ├── index.css               # Tailwind CSS & custom animations
│   └── main.tsx                # Application entry point
├── index.html                  # HTML entry with metadata and Google Fonts
├── package.json                # Project dependencies and build scripts
├── tailwind.config.js          # Dark theme colors and styling rules
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration with relative base path
```

---

## 📄 License
This project is open-source and free to use for personal portfolio development.

