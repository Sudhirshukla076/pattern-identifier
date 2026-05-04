import { useEffect, useState } from 'react'

const STEPS = [
  'Reading problem statement...',
  'Identifying constraints...',
  'Matching DSA patterns...',
  'Analyzing complexity...',
  'Generating insights...',
]

export default function Loader() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % STEPS.length), 900)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '5rem 2rem', gap: 24,
    }}>
      <div style={{ position: 'relative', width: 48, height: 48 }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          border: '2px solid var(--border)',
          borderTop: '2px solid var(--accent)',
          animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, minHeight: 22 }}>
          {STEPS[step]}
        </p>
      </div>
    </div>
  )
}