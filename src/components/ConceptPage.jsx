import { concepts } from '../data/concepts.js'
import VideoPlayer from './VideoPlayer.jsx'
import Quiz from './Quiz.jsx'
import Fractions from './widgets/Fractions.jsx'
import NumberLine from './widgets/NumberLine.jsx'
import Area from './widgets/Area.jsx'
import Pythagoras from './widgets/Pythagoras.jsx'
import Linear from './widgets/Linear.jsx'

const widgets = { fractions: Fractions, numberline: NumberLine, area: Area, pythagoras: Pythagoras, linear: Linear }

export default function ConceptPage({ concept, progress }) {
  const Widget = widgets[concept.widget]
  const idx = concepts.indexOf(concept)
  const next = concepts[idx + 1]
  const best = progress.data[concept.id]

  return (
    <article className="concept">
      <a className="back" href="#/">← All concepts</a>
      <div className="meta">{concept.topic} · {concept.level}</div>
      <h1>{concept.emoji} {concept.title}</h1>

      <section className="panel">
        <h2>1 · Watch</h2>
        <VideoPlayer video={concept.video} title={concept.title} />
      </section>

      <section className="panel">
        <h2>2 · Key ideas</h2>
        <p className="lead">{concept.summary}</p>
        <ol className="steps">
          {concept.steps.map((s) => <li key={s}>{s}</li>)}
        </ol>
      </section>

      {Widget && (
        <section className="panel">
          <h2>3 · Try it yourself</h2>
          <Widget />
        </section>
      )}

      <section className="panel">
        <h2>4 · Practice {best && <span className="badge ok">Best: {best.score}/{best.total}</span>}</h2>
        <Quiz key={concept.id} questions={concept.quiz} onFinish={(s, t) => progress.record(concept.id, s, t)} />
      </section>

      {next && (
        <a className="btn next" href={`#/concept/${next.id}`}>Next: {next.title} →</a>
      )}
    </article>
  )
}
