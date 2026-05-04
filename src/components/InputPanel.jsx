import { useState } from 'react'

const EXAMPLES = [
  {
    label: 'Two Sum',
    text: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
  },
  {
    label: 'Max Subarray',
    text: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
  },
  {
    label: 'Word Search',
    text: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.',
  },
]

export default function InputPanel({ onAnalyze, loading }) {
  const [text, setText] = useState('')
  const [err, setErr] = useState('')

  const submit = () => {
    if (text.trim().length < 20) { setErr('Paste a full problem statement (at least 20 chars).'); return }
    setErr('')
    onAnalyze(text.trim())
  }

  const loadExample = (ex) => { setText(ex.text); setErr('') }

  return (
    <div>
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '4rem 1rem 3rem' }}>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600,
          letterSpacing: '-0.03em', lineHeight: 1.15,
          color: 'var(--text-primary)', marginBottom: '1rem',
        }}>
          Identify DSA patterns<br />
          <span style={{ color: 'var(--accent)' }}>instantly.</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
          Paste any LeetCode problem. Get the pattern, approach, complexity, and similar problems — all in seconds.
        </p>
      </div>

      {/* Input Card */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem 4rem' }}>
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          overflow: 'hidden',
        }}>
          {/* Toolbar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 14px',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--mono)' }}>
              problem.txt
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              {EXAMPLES.map(ex => (
                <button
                  key={ex.label}
                  onClick={() => loadExample(ex)}
                  style={{
                    fontSize: 11, padding: '3px 9px',
                    borderRadius: 6, border: '1px solid var(--border)',
                    background: 'transparent', color: 'var(--text-secondary)',
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.target.style.color = 'var(--text-primary)'; e.target.style.borderColor = 'var(--border-focus)' }}
                  onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.borderColor = 'var(--border)' }}
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <textarea
            value={text}
            onChange={e => { setText(e.target.value); setErr('') }}
            placeholder="Paste your LeetCode problem statement here..."
            rows={8}
            style={{
              width: '100%', border: 'none', outline: 'none',
              background: 'var(--bg-input)', color: 'var(--text-primary)',
              fontFamily: 'var(--sans)', fontSize: 14, lineHeight: 1.7,
              padding: '16px', resize: 'vertical',
            }}
          />

          {/* Footer */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 14px',
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-card)',
          }}>
            <span style={{ fontSize: 12, color: err ? 'var(--red)' : 'var(--text-muted)' }}>
              {err || `${text.length} characters`}
            </span>
            <button
              onClick={submit}
              disabled={loading}
              style={{
                padding: '8px 20px', borderRadius: 8, border: 'none',
                background: loading ? 'var(--border)' : 'var(--accent)',
                color: loading ? 'var(--text-muted)' : '#fff',
                fontWeight: 600, fontSize: 14, cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s', fontFamily: 'var(--sans)',
              }}
              onMouseEnter={e => { if (!loading) e.target.style.opacity = '0.85' }}
              onMouseLeave={e => { e.target.style.opacity = '1' }}
            >
              {loading ? 'Analyzing...' : 'Identify Pattern →'}
            </button>
          </div>
        </div>

        {/* Features row */}
        <div style={{
          display: 'flex', gap: 12, marginTop: 16,
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {['Pattern detection', 'Time & space complexity', 'Step-by-step approach', 'Similar problems'].map(f => (
            <div key={f} style={{
              fontSize: 12, color: 'var(--text-muted)',
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <span style={{ color: 'var(--accent)', fontSize: 10 }}>✦</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}