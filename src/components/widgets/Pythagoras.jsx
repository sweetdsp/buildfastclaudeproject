import { useState } from 'react'

export default function Pythagoras() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(4)
  const c = Math.sqrt(a * a + b * b)
  const s = 18
  const W = a * s, H = b * s

  return (
    <div className="widget">
      <svg viewBox={`-10 -10 ${W + 20} ${H + 20}`} className="tri" style={{ maxWidth: 360 }}>
        <polygon points={`0,${H} ${W},${H} 0,0`} fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
        <rect x="0" y={H - 10} width="10" height="10" fill="none" stroke="#1d4ed8" />
        <text x={W / 2} y={H + 8} textAnchor="middle" fontSize="10" fill="#1d4ed8">a = {a}</text>
        <text x="-4" y={H / 2} fontSize="10" fill="#1d4ed8" textAnchor="end">b = {b}</text>
        <text x={W / 2 + 4} y={H / 2 - 4} fontSize="10" fill="#d97706">c ≈ {c.toFixed(2)}</text>
      </svg>
      <label>a: <b>{a}</b>
        <input type="range" min="1" max="12" value={a} onChange={(e) => setA(+e.target.value)} />
      </label>
      <label>b: <b>{b}</b>
        <input type="range" min="1" max="12" value={b} onChange={(e) => setB(+e.target.value)} />
      </label>
      <p className="readout">{a}² + {b}² = {a * a} + {b * b} = {a * a + b * b} → c = √{a * a + b * b} ≈ {c.toFixed(2)}</p>
    </div>
  )
}
