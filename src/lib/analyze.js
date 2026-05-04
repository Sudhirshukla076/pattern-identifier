const SYSTEM_PROMPT = `You are a DSA expert helping candidates prepare for FAANG interviews.
Analyze the given coding problem and respond ONLY with a valid JSON object.
No markdown, no backticks, no explanation outside the JSON.

JSON format:
{
  "pattern": "primary pattern name",
  "secondaryPatterns": ["optional secondary pattern"],
  "difficulty": "Easy" | "Medium" | "Hard",
  "why": "2-3 sentence explanation of why this pattern fits",
  "approach": ["step 1", "step 2", "step 3", "step 4"],
  "timeComplexity": "O(...)",
  "spaceComplexity": "O(...)",
  "similarProblems": ["Problem 1", "Problem 2", "Problem 3"],
  "keyInsight": "One-liner key insight to crack this problem",
  "patternTag": "one of: sliding-window | two-pointers | binary-search | bfs | dfs | dynamic-programming | backtracking | greedy | heap | trie | union-find | monotonic-stack | divide-conquer | graph | bit-manipulation | prefix-sum | hash-map | other"
}`

export async function analyzePattern(problem) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  if (!apiKey) throw new Error('API key not set. Add VITE_GEMINI_API_KEY to your .env file.')

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ parts: [{ text: `Analyze this problem:\n\n${problem}` }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 1000 },
      }),
    }
  )

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `API error ${res.status}`)
  }

  const data = await res.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
  const clean = text.replace(/```json|```/g, '').trim()
  return JSON.parse(clean)
}