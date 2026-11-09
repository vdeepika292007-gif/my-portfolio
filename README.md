# Deepika V — Personal Portfolio Website

A fast, lightweight, and modern personal portfolio website built with pure **HTML5**, **CSS3**, **Vanilla JavaScript (ES6+)**, and **Bootstrap 5.3**.

Live Website: **[https://vdeepika292007-gif.github.io/my-portfolio/](https://vdeepika292007-gif.github.io/my-portfolio/)**

---

## 🚀 Key Highlights & Technology Stack

- **Zero Build Tools**: No Node.js, `npm`, Vite, TypeScript, or Tailwind dependencies required.
- **Pure Front-End Web Standards**:
  - **HTML5**: Semantic, accessible markup.
  - **CSS3**: Custom variables, responsive design, dark/light theme tokens, and animations (`css/style.css`).
  - **Bootstrap 5.3.3**: Grid system, layout utilities, modals, and responsive components via CDN.
  - **Vanilla JavaScript (ES6+)**: Pure client-side logic with zero external JS frameworks (`js/app.js`).
  - **Bootstrap Icons & Google Fonts**: Space Grotesk, DM Sans, and JetBrains Mono.
- **Double-Click & Run**: Works directly by opening `index.html` in any web browser or via static hosting.

---

## 🌟 Sections & Interactive Features

1. **Header & Navigation**:
   - Fixed responsive navbar with smooth scrolling to sections.
   - Dark & Light theme switcher with automatic preference persistence in `localStorage`.
   - Direct Resume download button.
2. **Hero Section**:
   - Monogram avatar badge, status indicator ("Available for internships & collaborations").
   - Academic headline: *Computer Science & Engineering (Data Science) Student at JNNCE Shivamogga, 5th Sem, 9.29 CGPA, Class of 2028*.
   - Quick CTAs to Interactive Playground, Projects, and Resume.
3. **Interactive Playground**:
   - **Heart Disease ML Risk Calculator**: Dynamic logistic regression probability calculation based on clinical metrics (Age, Blood Pressure, Cholesterol, Max Heart Rate, Chest Pain type, Exercise Angina) with circular SVG gauge, clinical zones, SHAP feature attributions, and one-click patient presets (Healthy vs. High Risk).
   - **Code Debug Game**: Interactive challenge runner with animated "Buggy" mascot, speech bubbles, real-time code vs. diff inspection, step-by-step test runner with latency timings, and floating XP points.
4. **About Me**:
   - Academic narrative, key metrics (9.29 CGPA, 5th Sem, Student Office Bearer as ISTE Vice-Chairperson, Class of 2028), and academic history.
5. **Technical Skills**:
   - Categorized by Languages, Web Development, Machine Learning & Data, Tools & Platforms, and Databases.
   - Dynamic tab filtering (*All*, *Languages*, *Web*, *Data & ML*, *Tools*).
6. **Featured Projects**:
   - 5 projects with category filters (*All*, *Data Science & ML*, *Full-Stack / Web*, *Interactive*):
     1. Heart Disease Prediction System (ML / Scikit-Learn)
     2. Code Debug Game (Interactive JavaScript / Web)
     3. Campus Placement Management System (Python / SQL / Web)
     4. MindVault (Personal Knowledge Base)
     5. Multi-Vault (Multi-category Secure Store)
   - Live repository and documentation links for each project.
7. **Experience**:
   - Data Science & Analytics Internship at **Future Interns** (Sep 2026 – Oct 2026).
   - Detailed breakdown of 3 projects:
     - Task 1: Business Sales Performance Analytics
     - Task 2: Customer Retention and Churn Modeling
     - Task 3: Marketing Campaign Conversion Analysis
8. **Education**:
   - **B.E. in Computer Science & Engineering (Data Science)** — Jawaharlal Nehru New College of Engineering (JNNCE), Shivamogga (2022–2026 / Class of 2028), CGPA: 9.29 / 10.0.
   - **Pre-University (12th / PUC)** — DVS Independent PU College (94.6%).
9. **Certifications & Credentials**:
   - Future Interns Certificate of Completion (CIN: `FIT/SEP26/DS23421`).
   - Future Interns Letter of Recommendation (LOR) from Sujan Kumar C.
   - One-click modal viewer to inspect credentials.
10. **Contact Section**:
    - Direct Email: `vdeepika292007@gmail.com` with one-click copy.
    - LinkedIn: `https://www.linkedin.com/in/deepikav8/`.
    - GitHub: `https://github.com/vdeepika292007-gif`.
    - Interactive direct email composer generating formatted `mailto:` links.

---

## 📂 Project Structure

```text
MyPortfolio/
├── index.html                           # Main entry point (Bootstrap 5.3 + semantic HTML5)
├── css/
│   └── style.css                        # Custom styling, CSS variables, dark/light theme, keyframes
├── js/
│   └── app.js                           # Vanilla JS (Theme switch, ML model, Debug Game, filters)
├── certificates/
│   ├── future-interns-certificate.jpg   # Future Interns Certificate of Completion
│   └── future-interns-lor.jpg           # Future Interns Letter of Recommendation
├── Deepika_V_Resume.pdf                 # Deepika V's Curriculum Vitae
├── favicon.svg                          # Custom DV monogram SVG favicon
├── README.md                            # Project documentation and deployment guide
└── PROJECT_PROGRESS.md                  # Detailed progress, architecture, and verification notes
```

---

## 💻 How to Run Locally

Because this project uses standard web technologies with zero build steps:

### Option 1: Direct File Opening
Double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Simple Python HTTP Server (Optional)
If you have Python installed:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🌐 How to Deploy to GitHub Pages

1. **Commit and Push Your Changes**:
   ```bash
   git add .
   git commit -m "Convert portfolio to HTML5, CSS3, Vanilla JS, and Bootstrap 5.3"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/vdeepika292007-gif/my-portfolio`.
   - Click on **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`.
     - **Branch**: Select `main` and folder `/ (root)`.
     - Click **Save**.

3. **Visit Your Live Website**:
   Your website will be published in 1–2 minutes at:
   **`https://vdeepika292007-gif.github.io/my-portfolio/`**

---

## 📄 License & Credits

- Designed and developed by **Deepika V**.
- Built with HTML5, CSS3, JavaScript (ES6+), and Bootstrap 5.3.
- Free for personal and portfolio use.
