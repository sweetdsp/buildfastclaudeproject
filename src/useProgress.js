import { useCallback, useState } from 'react'

const KEY = 'mathquest-progress'

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

// Progress lives only in the student's browser – no accounts needed.
export function useProgress() {
  const [data, setData] = useState(load)

  const record = useCallback((id, score, total) => {
    setData((prev) => {
      const best = Math.max(prev[id]?.score ?? 0, score)
      const next = { ...prev, [id]: { score: best, total } }
      try {
        localStorage.setItem(KEY, JSON.stringify(next))
      } catch {
        /* storage unavailable – keep in memory only */
      }
      return next
    })
  }, [])

  return { data, record }
}
