import { DifficultyBadge, Tag } from './PatternBadge'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <p style={{
        fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--text-muted)',
        marginBottom: '0.75rem',
      }}>
        {title}
      </p>
      {children}
    </div>
  )
}

function Card({ children, accent }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: `1px solid ${accent ? 'var(--accent-border)' : 'var(--border)'}`,
      borderRadius: '10px',
      padding: '1rem 1.25rem',
    }}>
      {children}
    </div>
  )
}

export default function ResultPanel({ result, onReset }) {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>

      {/* Back */}
      <button
        onClick={onReset}
        style={{
          fontSize: 13, color: 'var(--text-secondary)',
          background: 'none', border: 'none',
          cursor: 'pointer', marginBottom: '2rem',
          display: 'flex', alignItems: 'center', gap: 6,
          transition: 'color 0.15s',
        }}
        onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
        onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
      >
        ← Back
      </button>

      {/* Pattern Header */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: '1.5rem 1.75rem',
        marginBottom: '1.5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 180, height: 180, borderRadius: '50%',
          background: 'var(--accent-dim)', filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
              <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                {result.pattern}
              </h2>
              <DifficultyBadge difficulty={result.difficulty} />
            </div>
            {result.secondaryPatterns?.length > 0 && (
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {result.secondaryPatterns.map((p, i) => <Tag key={i}>+ {p}</Tag>)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div style={{
        background: 'var(--accent-dim)',
        border: '1px solid var(--accent-border)',
        borderLeft: '3px solid var(--accent)',
        borderRadius: '10px',
        padding: '1rem 1.25rem',
        marginBottom: '1.5rem',
        display: 'flex', gap: 12, alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>💡</span>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 }}>Key insight</p>
          <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.6 }}>{result.keyInsight}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Left col */}
        <div>
          <Section title="Why this pattern">
            <Card>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{result.why}</p>
            </Card>
          </Section>

          <Section title="Step-by-step approach">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {result.approach?.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: i === 0 ? 'var(--accent-dim)' : 'var(--bg-hover)',
                    border: `1px solid ${i === 0 ? 'var(--accent-border)' : 'var(--border)'}`,
                    color: i === 0 ? 'var(--accent)' : 'var(--text-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 600, fontFamily: 'var(--mono)', marginTop: 1,
                  }}>
                    {i + 1}
                  </span>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{step}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Right col */}
        <div>
          <Section title="Complexity">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[['Time', result.timeComplexity], ['Space', result.spaceComplexity]].map(([label, val]) => (
                <Card key={label}>
                  <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>{label} complexity</p>
                  <p style={{ fontSize: 22, fontWeight: 500, fontFamily: 'var(--mono)', color: 'var(--text-primary)' }}>{val}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Practice next">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {result.similarProblems?.map((p, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  transition: 'border-color 0.15s', cursor: 'default',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-focus)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <span style={{ fontSize: 13, color: 'var(--text-primary)' }}>{p}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--mono)' }}>#{i + 1}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* Analyze again */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button
          onClick={onReset}
          style={{
            padding: '10px 24px', borderRadius: 8,
            border: '1px solid var(--border)',
            background: 'transparent', color: 'var(--text-secondary)',
            fontSize: 14, cursor: 'pointer', transition: 'all 0.15s',
            fontFamily: 'var(--sans)',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--border-focus)'; e.target.style.color = 'var(--text-primary)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-secondary)' }}
        >
          Analyze another problem
        </button>
      </div>
    </div>
  )
}