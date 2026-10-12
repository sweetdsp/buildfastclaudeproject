import { useState } from 'react'

export default function Fractions() {
  const [den, setDen] = useState(4)
  const [num, setNum] = useState(2)
  const n = Math.min(num, den)

  return (
    <div className="widget">
      <div className="frac-bar">
        {Array.from({ length: den }, (_, i) => (
          <button
            key={i}
            className={`slice ${i < n ? 'on' : ''}`}
            onClick={() => setNum(i < n && i === n - 1 ? i : i + 1)}
            aria-label={`slice ${i + 1}`}
          />
        ))}
      </div>
      <div className="big-frac">
        <span>{n}</span><hr /><span>{den}</span>
      </div>
      <label>Parts in the whole (denominator): <b>{den}</b>
        <input type="range" min="1" max="12" value={den} onChange={(e) => setDen(+e.target.value)} />
      </label>
      <p className="hint">Click the slices to shade them. Try 1/2, then 2/4, 4/8 – they fill the same amount!</p>
      <p className="readout">{n}/{den} = {(n / den).toFixed(2)} of the whole</p>
    </div>
  )
}
