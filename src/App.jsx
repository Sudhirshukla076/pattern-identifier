import { useState } from 'react'
import Header from './components/Header'
import InputPanel from './components/InputPanel'
import ResultPanel from './components/ResultPanel'
import Loader from './components/Loader'
import { analyzePattern } from './lib/analyze'

export default function App() {
  const [state, setState] = useState('idle') // idle | loading | result | error
  const [result, setResult] = useState(null)
  const [errMsg, setErrMsg] = useState('')

  const analyze = async (problem) => {
    setState('loading')
    try {
      const data = await analyzePattern(problem)
      setResult(data)
      setState('result')
    } catch (e) {
      setErrMsg(e.message || 'Something went wrong.')
      setState('error')
    }
  }

  const reset = () => { setState('idle'); setResult(null); setErrMsg('') }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      {state === 'idle' && <InputPanel onAnalyze={analyze} loading={false} />}
      {state === 'loading' && <Loader />}
      {state === 'result' && <ResultPanel result={result} onReset={reset} />}
      {state === 'error' && (
        <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <p style={{ color: 'var(--red)', marginBottom: 16 }}>{errMsg}</p>
          <button onClick={reset} style={{
            padding: '8px 20px', borderRadius: 8,
            border: '1px solid var(--border)', background: 'transparent',
            color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'var(--sans)',
          }}>
          <footer
  style={{
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
    borderTop: "1px solid #ddd",
  }}
>
  Built with ❤️ by Sudhir Shukla
</footer>
      Try again</button>
        </div>
      )}
    </div>
  )
}