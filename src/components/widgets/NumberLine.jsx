import { useState } from 'react'

const MIN = -10, MAX = 10

export default function NumberLine() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(5)
  const [op, setOp] = useState('+')
  const result = op === '+' ? a + b : a - b
  const pct = (v) => ((Math.max(MIN, Math.min(MAX, v)) - MIN) / (MAX - MIN)) * 100

  return (
    <div className="widget">
      <div className="equation">
        <input type="number" min={MIN} max={MAX} value={a} onChange={(e) => setA(+e.target.value)} />
        <button className="btn small" onClick={() => setOp(op === '+' ? '−' : '+')}>{op}</button>
        <input type="number" min={0} max={MAX} value={b} onChange={(e) => setB(Math.abs(+e.target.value))} />
        <span>= <b>{result}</b></span>
      </div>
      <svg viewBox="0 0 100 24" className="nl">
        <line x1="0" y1="14" x2="100" y2="14" stroke="#1d4ed8" strokeWidth="0.6" />
        {Array.from({ length: MAX - MIN + 1 }, (_, i) => {
          const v = MIN + i
          return (
            <g key={v}>
              <line x1={pct(v)} x2={pct(v)} y1="12" y2="16" stroke="#1d4ed8" strokeWidth="0.3" />
              <text x={pct(v)} y="21" fontSize="2.6" textAnchor="middle" fill="#334">{v}</text>
            </g>
          )
        })}
        <path
          d={`M ${pct(a)} 13 Q ${(pct(a) + pct(result)) / 2} 3 ${pct(result)} 13`}
          fill="none" stroke="#f59e0b" strokeWidth="0.6" markerEnd="url(#ah)"
        />
        <defs>
          <marker id="ah" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 z" fill="#f59e0b" />
          </marker>
        </defs>
        <circle cx={pct(a)} cy="14" r="1.4" fill="#1d4ed8" />
        <circle cx={pct(result)} cy="14" r="1.6" fill="#f59e0b" />
      </svg>
      <p className="hint">Start at {a}, move {b} step{b === 1 ? '' : 's'} {op === '+' ? 'right' : 'left'}, land on {result}.</p>
    </div>
  )
}
