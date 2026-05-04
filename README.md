# PatternID — DSA Pattern Identifier

> Paste any coding problem. Instantly get the DSA pattern, approach, complexity, and similar problems to practice.

![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## What it does

PatternID helps you stop guessing and start recognizing patterns in coding problems — a critical skill for technical interviews at top companies.

Paste any LeetCode-style problem and get:

- **Pattern** — primary and secondary DSA pattern (e.g. Sliding Window, BFS, DP)
- **Difficulty** — Easy / Medium / Hard estimate
- **Key insight** — the one thing you need to crack it
- **Step-by-step approach** — how to think through the solution
- **Time & space complexity** — what to aim for
- **Similar problems** — 3 problems to practice next

---

## Demo

![PatternID Demo](https://raw.githubusercontent.com/Sudhirshukla076/pattern-identifier/main/public/favicon.svg)

Live: [pattern-identifier.vercel.app](https://pattern-identifier-sage.vercel.app/)

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 |
| Build tool | Vite 5 |
| Styling | Pure CSS with CSS variables |
| AI | Groq API (LLaMA 3.3 70B) |
| Deployment | Vercel |

Zero external UI libraries — built from scratch.

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Sudhirshukla076/pattern-identifier.git
cd pattern-identifier

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Add your API key to .env (see below)

# 4. Start dev server
npm run dev
```

## Environment Variables

Create a `.env` file in the root folder:

```
VITE_GROQ_API_KEY=your_api_key_here
```

Get a free API key at [console.groq.com](https://console.groq.com) — no credit card required.

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Top navigation bar
│   ├── InputPanel.jsx    # Problem input + hero section
│   ├── ResultPanel.jsx   # Analysis results display
│   ├── PatternBadge.jsx  # Difficulty + tag badges
│   └── Loader.jsx        # Animated loading state
├── lib/
│   └── analyze.js        # API integration logic
├── App.jsx               # Root component + state management
└── index.css             # Global styles + CSS variables
```

---

## Deployment

```bash
npm run build
# Deploy the /dist folder to Vercel or Netlify
```

For Vercel: add `VITE_GEMINI_API_KEY` in your project's Environment Variables settings before deploying.

---

## License

MIT © [Sudhir Shukla](https://github.com/Sudhirshukla076)
