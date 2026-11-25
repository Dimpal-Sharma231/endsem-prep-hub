# EndSem Prep Hub 🚀

### 🌐 [View the Live Website Here](https://your-deployment-url.vercel.app)

A modern, responsive, and interactive college exam preparation web application built for **SPPU Second Year (2024 Pattern)** students. **EndSem Prep Hub** organizes unit-wise important questions with concise, exam-oriented answers and lets students track their study progress across all 5 subjects right in the browser.

---

## Features

- **5 Core Subjects & 25 Units (230 Questions Total):**
  - **Foundation of Artificial Intelligence (`ai`)** — 5 units, 30 questions
  - **Digital Electronics and Logic Design (`deld`)** — 5 units, 50 questions
  - **Operating Systems (`os`)** — 5 units, 50 questions
  - **Universal Human Values (`uhv`)** — 5 units, 50 questions
  - **Digital Finance (`df`)** — 5 units, 50 questions
- **Expandable Exam-Ready Answers:** Click any question card to smoothly expand or collapse a concise, point-wise, university exam-ready answer underneath.
- **Interactive Progress Tracking (`LocalStorage`):** Check off completed questions to strike them through and mark them as **Done** (isolated from card expansion). All progress persists automatically in `localStorage` across refreshes and sessions.
- **Real-Time Progress Bars:** Live completion counters (`X/Y Questions Completed`) and percentage bars per unit, per subject, and across the entire syllabus.
- **Global Search (`Ctrl+K` / `Cmd+K`):** Instantly search across all 230 questions, answers, and unit syllabus topics and jump straight to the matching unit and highlighted question.
- **Dark Mode Default & Theme Toggle:** Designed with a deep slate dark theme for comfortable late-night studying, with a one-click light mode toggle in the header.
- **Mobile & Desktop Responsive:** Persistent subject sidebar on desktop and a slide-over navigation drawer on mobile devices.

---

## Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Persistence:** Browser `localStorage`

---

## Project Structure

```text
endsem-prep-hub/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── data.js                 # Combines and exports subjectsData
    ├── subjectsData/
    │   ├── ai.js               # Foundation of AI (30 Q&A)
    │   ├── deld.js             # DELD (50 Q&A)
    │   ├── os.js               # Operating Systems (50 Q&A)
    │   ├── uhv.js              # Universal Human Values (50 Q&A)
    │   └── df.js               # Digital Finance (50 Q&A)
    ├── hooks/
    │   ├── useProgress.js      # LocalStorage checklist state & stats
    │   └── useTheme.js         # Dark/Light theme persistence
    ├── utils/
    │   └── subjectIcons.js     # Lucide icon & accent color mappings
    ├── components/
    │   ├── Layout.jsx          # Responsive navbar, sidebar & drawer
    │   ├── ProgressBar.jsx     # Dynamic animated progress bar
    │   ├── QuestionItem.jsx    # Expandable Q&A card with checklist
    │   ├── SearchBar.jsx       # Global search with keyboard shortcut
    │   ├── SubjectCard.jsx     # Dashboard subject card
    │   └── UnitAccordion.jsx   # Collapsible unit section
    └── pages/
        ├── DashboardPage.jsx   # Home dashboard (/)
        ├── SubjectPage.jsx     # Subject overview & 5 units (/subject/:subjectId)
        └── UnitPage.jsx        # Dedicated unit view (/subject/:subjectId/unit/:unitId)
```

---

## Getting Started (Run Locally)

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation & Development Server

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd endsem-prep-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open the local URL shown in your terminal (typically `http://localhost:5173`) in your browser.

### Production Build

To generate an optimized production bundle in `dist/`:

```bash
npm run build
npm run preview
```
