import { useState } from 'react'

export default function Quiz({ questions, onFinish }) {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = questions[i]

  const restart = () => {
    setI(0); setPicked(null); setScore(0); setFinished(false)
  }

  const next = () => {
    if (i + 1 < questions.length) {
      setI(i + 1)
      setPicked(null)
    } else {
      setFinished(true)
      onFinish(score, questions.length)
    }
  }

  const choose = (idx) => {
    if (picked !== null) return
    setPicked(idx)
    if (idx === q.answer) setScore((s) => s + 1)
  }

  if (finished) {
    const perfect = score === questions.length
    return (
      <div className="quiz-result">
        <div className="big">{perfect ? '🎉' : '💪'}</div>
        <h3>You scored {score} / {questions.length}</h3>
        <p>{perfect ? 'Concept mastered! Great work.' : 'Good effort – rewatch the video and try again.'}</p>
        <button className="btn" onClick={restart}>Try again</button>{' '}
        <a className="btn ghost" href="#/">More concepts</a>
      </div>
    )
  }

  return (
    <div>
      <div className="meta">Question {i + 1} of {questions.length}</div>
      <h3 className="question">{q.q}</h3>
      <div className="options">
        {q.options.map((o, idx) => {
          let cls = 'option'
          if (picked !== null) {
            if (idx === q.answer) cls += ' correct'
            else if (idx === picked) cls += ' wrong'
          }
          return (
            <button key={idx} className={cls} onClick={() => choose(idx)} disabled={picked !== null}>
              {o}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className={`feedback ${picked === q.answer ? 'ok' : 'no'}`}>
          <strong>{picked === q.answer ? 'Correct!' : 'Not quite.'}</strong> {q.why}
          <div><button className="btn" onClick={next}>{i + 1 < questions.length ? 'Next' : 'Finish'}</button></div>
        </div>
      )}
    </div>
  )
}
