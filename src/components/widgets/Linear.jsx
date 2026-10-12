import { useState } from 'react'

export default function Linear() {
  const [m, setM] = useState(1)
  const [b, setB] = useState(2)
  const R = 10, S = 14
  const X = (v) => (v + R) * S
  const Y = (v) => (R - v) * S
  const x1 = -R, x2 = R

  return (
    <div className="widget">
      <svg viewBox={`0 0 ${2 * R * S} ${2 * R * S}`} className="graph">
        <clipPath id="plot"><rect width={2 * R * S} height={2 * R * S} /></clipPath>
        {Array.from({ length: 2 * R + 1 }, (_, i) => (
          <g key={i} stroke="#dbeafe">
            <line x1={i * S} x2={i * S} y1="0" y2={2 * R * S} />
            <line y1={i * S} y2={i * S} x1="0" x2={2 * R * S} />
          </g>
        ))}
        <line x1={X(0)} x2={X(0)} y1="0" y2={2 * R * S} stroke="#1e3a8a" />
        <line y1={Y(0)} y2={Y(0)} x1="0" x2={2 * R * S} stroke="#1e3a8a" />
        <line x1={X(x1)} y1={Y(m * x1 + b)} x2={X(x2)} y2={Y(m * x2 + b)} stroke="#2563eb" strokeWidth="3" clipPath="url(#plot)" />
        {Math.abs(b) <= R && <circle cx={X(0)} cy={Y(b)} r="5" fill="#f59e0b" />}
      </svg>
      <p className="readout">y = {m}x {b < 0 ? '−' : '+'} {Math.abs(b)}</p>
      <label>Slope m: <b>{m}</b>
        <input type="range" min="-5" max="5" step="0.5" value={m} onChange={(e) => setM(+e.target.value)} />
      </label>
      <label>Intercept b: <b>{b}</b>
        <input type="range" min="-8" max="8" value={b} onChange={(e) => setB(+e.target.value)} />
      </label>
      <p className="hint">The orange dot is the y-intercept. Steeper slope = steeper line.</p>
    </div>
  )
}
