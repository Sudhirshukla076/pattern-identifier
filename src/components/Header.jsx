export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '0 2rem',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      background: 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#0f0f0f"/>
          <path d="M8 16 L14 10 L14 22 Z" fill="#a78bfa"/>
          <path d="M24 16 L18 10 L18 22 Z" fill="#a78bfa"/>
          <circle cx="16" cy="16" r="2.5" fill="#ffffff"/>
        </svg>
        <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>
          Pattern<span style={{ color: 'var(--accent)' }}>ID</span>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

        <a
          href="https://github.com/Sudhirshukla076/pattern-identifier"
          target="_blank"
          rel="noreferrer"
          style={{
            color: 'var(--text-secondary)', textDecoration: 'none',
            fontSize: 13, padding: '5px 12px',
            border: '1px solid var(--border)',
            borderRadius: 8, transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.target.style.color = 'var(--text-primary)'; e.target.style.borderColor = 'var(--border-focus)' }}
          onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.borderColor = 'var(--border)' }}
        >
          GitHub ↗
        </a>
      </div>
    </header>
  )
}