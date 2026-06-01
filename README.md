# HRFlow — AI-powered Hiring Platform

> Hire smarter, not harder. AI resume analysis, candidate scoring, and a beautiful ATS — powered by Claude Sonnet.

![HRFlow](https://img.shields.io/badge/AI-Claude%20Sonnet-6C5CE7?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

---

## Features

- **AI Resume Analysis** — Upload PDF/DOCX, get scored candidate profiles via Claude
- **Candidate ATS** — Full applicant tracking with status pipeline
- **Job Management** — Post and manage open positions
- **Hiring Pipeline** — Kanban-style pipeline view
- **Dashboard Analytics** — Funnel, sources, weekly hiring chart
- **Dark / Light Mode** — Full theme support
- **i18n: DE / EN** — German & English, easily extendable
- **Login / Logout** — Auth screen with SSO placeholder

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | CSS Variables + Custom Design System |
| AI Backend | Anthropic Claude Sonnet (`claude-sonnet-4-20250514`) |
| Icons | Tabler Icons |
| Fonts | Syne + DM Sans (Google Fonts) |
| Build | Vite |
| Package Manager | npm |

---

## Getting Started

### 1. Clone

```bash
git clone https://github.com/yourname/hrflow.git
cd hrflow
```

### 2. Install

```bash
npm install
```

### 3. Environment

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
VITE_DEMO_EMAIL=demo@hrflow.ai
VITE_DEMO_PASSWORD=demo123
```

> ⚠️ **Important:** Never commit your real API key. Use environment variables or a backend proxy in production.

### 4. Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 5. Build

```bash
npm run build
```

---

## Project Structure

```
hrflow/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Login.tsx           # Login screen with theme + lang toggle
│   │   ├── Nav.tsx             # Top navigation bar
│   │   ├── Sidebar.tsx         # Left sidebar navigation
│   │   ├── Dashboard.tsx       # Dashboard with metrics & charts
│   │   ├── Candidates.tsx      # Candidate list + search
│   │   ├── AIAnalysis.tsx      # Resume upload + Claude analysis
│   │   ├── Jobs.tsx            # Job listings
│   │   ├── Pipeline.tsx        # Kanban hiring pipeline
│   │   └── UserMenu.tsx        # Dropdown: theme, lang, logout
│   ├── hooks/
│   │   ├── useTheme.ts         # Dark/light mode hook
│   │   └── useLang.ts          # i18n language hook
│   ├── i18n/
│   │   ├── de.ts               # German translations
│   │   └── en.ts               # English translations
│   ├── lib/
│   │   ├── claude.ts           # Anthropic API client
│   │   ├── types.ts            # Shared TypeScript types
│   │   └── data.ts             # Mock candidate/job data
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Design system / CSS variables
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## AI Integration (Claude)

The resume analysis feature calls the Anthropic API directly:

```typescript
// src/lib/claude.ts
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01',
    'anthropic-dangerous-direct-browser-access': 'true',
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `Analyze this resume and return JSON with: name, title, experience_years, match_score (0-100), skills (array of {name, score}), summary.
      
Resume text:
${resumeText}`
    }]
  })
});
```

> For production, route API calls through your backend to protect the API key.

---

## i18n

All UI strings live in `src/i18n/de.ts` and `src/i18n/en.ts`. Switch language at runtime:

```typescript
const { lang, setLang, t } = useLang();
t('nav-candidates') // → "Kandidaten" or "Candidates"
```

---

## Theming

CSS variables power both dark and light mode:

```css
:root {
  --bg0: #0A0A0F;
  --accent: #6C5CE7;
  --text: #FAFAFA;
  /* ... */
}

[data-theme="light"] {
  --bg0: #F0EFF8;
  --text: #1A1A2E;
  /* ... */
}
```

Toggle via `document.documentElement.setAttribute('data-theme', 'light')`.

---

## Demo Credentials

```
Email:    demo@hrflow.ai
Password: demo123
```

---

## Roadmap

- [ ] Real PDF parsing (pdf.js integration)
- [ ] Backend proxy for API key security
- [ ] PostgreSQL / Supabase persistence
- [ ] Email notifications (Resend)
- [ ] Multi-user / team support
- [ ] Export candidates to CSV/PDF
- [ ] Calendar integration for interviews

---

## License

MIT © 2025 HRFlow
