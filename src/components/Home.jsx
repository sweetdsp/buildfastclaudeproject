import { useState } from 'react'
import { concepts, topics } from '../data/concepts.js'

export default function Home({ progress }) {
  const [topic, setTopic] = useState('All')
  const list = concepts.filter((c) => topic === 'All' || c.topic === topic)
  const done = concepts.filter((c) => progress.data[c.id]?.score === progress.data[c.id]?.total && progress.data[c.id]).length

  return (
    <>
      <section className="hero">
        <h1>Make math make sense.</h1>
        <p>Every concept comes with a short video, a hands-on demo and a quick quiz.</p>
        <div className="hero-progress">
          {done} of {concepts.length} concepts mastered
          <div className="bar"><div style={{ width: `${(done / concepts.length) * 100}%` }} /></div>
        </div>
      </section>

      <div className="chips" role="tablist">
        {['All', ...topics].map((t) => (
          <button key={t} className={`chip ${t === topic ? 'active' : ''}`} onClick={() => setTopic(t)}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid">
        {list.map((c) => {
          const p = progress.data[c.id]
          const mastered = p && p.score === p.total
          return (
            <a key={c.id} className="card" href={`#/concept/${c.id}`}>
              <div className="card-emoji">{c.emoji}</div>
              <div className="meta">{c.topic} · {c.level}</div>
              <h3>{c.title}</h3>
              <p>{c.summary}</p>
              <div className="card-foot">
                <span>▶ {c.minutes} min video</span>
                {mastered ? <span className="badge ok">✓ Mastered</span> : p ? <span className="badge">{p.score}/{p.total}</span> : null}
              </div>
            </a>
          )
        })}
      </div>
    </>
  )
}
