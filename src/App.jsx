import { useEffect, useState } from 'react'
import Home from './components/Home.jsx'
import ConceptPage from './components/ConceptPage.jsx'
import { concepts } from './data/concepts.js'
import { useProgress } from './useProgress.js'

const getRoute = () => window.location.hash.replace(/^#\/?/, '')

export default function App() {
  const [route, setRoute] = useState(getRoute())
  const progress = useProgress()

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const concept = concepts.find((c) => `concept/${c.id}` === route)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#/">
          <span className="logo">π</span> MathQuest
        </a>
        <span className="tagline">Learn math by watching, playing & practising</span>
      </header>
      <main>
        {concept ? (
          <ConceptPage concept={concept} progress={progress} />
        ) : (
          <Home progress={progress} />
        )}
      </main>
      <footer className="site-footer">MathQuest · free for everyone · no sign-up needed</footer>
    </>
  )
}
