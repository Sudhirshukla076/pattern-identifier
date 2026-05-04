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
  const apiKey = import.meta.env.VITE_GROQ_API_KEY
  if (!apiKey) throw new Error('API key not set. Add VITE_GROQ_API_KEY to your .env file.')

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `Analyze this problem:\n\n${problem}` },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `API error ${res.status}`)
  }

  const data = await res.json()
  const text = data.choices?.[0]?.message?.content || ''
  const clean = text.replace(/```json|```/g, '').trim()
  return JSON.parse(clean)
}