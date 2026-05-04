const DIFF_STYLES = {
  Easy:   { bg: 'var(--green-dim)',  color: 'var(--green)',  border: '#16a34a44' },
  Medium: { bg: 'var(--amber-dim)', color: 'var(--amber)', border: '#d9770644' },
  Hard:   { bg: 'var(--red-dim)',   color: 'var(--red)',   border: '#dc262644' },
}

export function DifficultyBadge({ difficulty }) {
  const s = DIFF_STYLES[difficulty] || DIFF_STYLES.Medium
  return (
    <span style={{
      fontSize: 12, fontWeight: 500,
      padding: '3px 10px', borderRadius: 99,
      background: s.bg, color: s.color,
      border: `1px solid ${s.border}`,
    }}>
      {difficulty}
    </span>
  )
}

export function Tag({ children }) {
  return (
    <span style={{
      fontSize: 12, padding: '4px 10px',
      borderRadius: 99,
      background: 'var(--bg-hover)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)',
    }}>
      {children}
    </span>
  )
}