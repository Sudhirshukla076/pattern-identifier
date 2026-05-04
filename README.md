# PatternID — DSA Pattern Identifier

> Instantly identify DSA patterns from any LeetCode-style problem. Built for FAANG interview prep.

![PatternID](https://img.shields.io/badge/AI-Powered-a78bfa?style=flat-square)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)

## Features

- Paste any problem → get the DSA pattern instantly
- Identifies primary + secondary patterns
- Difficulty estimation (Easy / Medium / Hard)
- Step-by-step approach
- Time & space complexity
- 3 similar problems to practice next
- Key insight one-liner

## Tech Stack

- **React 18** + **Vite 5**
- **Claude AI** (claude-sonnet-4) via Anthropic API
- Zero external UI libraries — pure CSS

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Sudhirshukla076/pattern-identifier.git
cd pattern-identifier

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Add your Anthropic API key to .env

# 4. Run
npm run dev
```

## Environment Variables

```
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

Get your API key at [console.anthropic.com](https://console.anthropic.com)

## Deploy

```bash
npm run build
# Deploy the /dist folder to Vercel, Netlify, or GitHub Pages
```

## License

MIT