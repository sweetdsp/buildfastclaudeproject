import { useState } from 'react'

export default function VideoPlayer({ video, title }) {
  const [failed, setFailed] = useState(false)

  if (video?.youtube) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtube}`}
          title={title}
          allow="accelerometer; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (video?.src && !failed) {
    return (
      <div className="video">
        <video controls preload="metadata" onError={() => setFailed(true)} aria-label={title}>
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
    )
  }

  return (
    <div className="video placeholder">
      <div className="play">▶</div>
      <p><strong>Video coming soon</strong></p>
      <small>Add a video file at <code>public/videos/</code> or a YouTube ID in <code>src/data/concepts.js</code>.</small>
    </div>
  )
}
