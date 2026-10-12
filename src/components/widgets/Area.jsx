import { useState } from 'react'

export default function Area() {
  const [w, setW] = useState(5)
  const [h, setH] = useState(3)
  const size = 28

  return (
    <div className="widget">
      <div className="grid-area" style={{ gridTemplateColumns: `repeat(${w}, ${size}px)` }}>
        {Array.from({ length: w * h }, (_, i) => <div key={i} className="sq" style={{ width: size, height: size }} />)}
      </div>
      <label>Width: <b>{w}</b>
        <input type="range" min="1" max="10" value={w} onChange={(e) => setW(+e.target.value)} />
      </label>
      <label>Height: <b>{h}</b>
        <input type="range" min="1" max="8" value={h} onChange={(e) => setH(+e.target.value)} />
      </label>
      <p className="readout">{w} × {h} = {w * h} square units</p>
    </div>
  )
}
