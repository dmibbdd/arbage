import { useEffect, useRef, useState } from "react"
import AmbientDecor from "./components/AmbientDecor"
import ProgressDots from "./components/ProgressDots"
import {
  FinalScene,
  FlowerScene,
  InvitationScene,
  MischiefScene,
  RevealScene,
} from "./scenes/StoryScenes"

const LAST_SCENE = 5

export default function App() {
  const [scene, setScene] = useState(1)
  const [leaving, setLeaving] = useState(false)
  const [locked, setLocked] = useState(false)
  const [reaction, setReaction] = useState(false)
  const [flowerStarted, setFlowerStarted] = useState(false)
  const [flowerReady, setFlowerReady] = useState(false)
  const transitionTimer = useRef<number | undefined>(undefined)
  const actionTimers = useRef<number[]>([])

  useEffect(() => {
    return () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current)
      actionTimers.current.forEach(window.clearTimeout)
    }
  }, [])

  const later = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay)
    actionTimers.current.push(timer)
  }

  const goTo = (nextScene: number, delay = 0) => {
    if (locked) return
    setLocked(true)

    const startTransition = () => {
      setLeaving(true)
      transitionTimer.current = window.setTimeout(() => {
        setScene(nextScene)
        setLeaving(false)
        setLocked(false)
        setReaction(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 420)
    }

    if (delay) later(startTransition, delay)
    else startTransition()
  }

  const handleMischief = () => {
    if (locked) return
    setReaction(true)
    goTo(3, 850)
  }

  const handleFlower = () => {
    if (locked || flowerStarted) return
    setLocked(true)
    setFlowerStarted(true)
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    later(
      () => {
        setFlowerReady(true)
        setLocked(false)
      },
      reducedMotion ? 350 : 4300,
    )
  }

  const resetStory = () => {
    if (locked) return
    setFlowerStarted(false)
    setFlowerReady(false)
    goTo(1)
  }

  const renderScene = () => {
    switch (scene) {
      case 1:
        return <InvitationScene onNext={() => goTo(2)} disabled={locked} />
      case 2:
        return (
          <MischiefScene
            onNext={handleMischief}
            disabled={locked}
            reaction={reaction}
          />
        )
      case 3:
        return (
          <FlowerScene
            started={flowerStarted}
            ready={flowerReady}
            disabled={locked}
            onBloom={handleFlower}
            onNext={() => goTo(4)}
          />
        )
      case 4:
        return <RevealScene onNext={() => goTo(5)} disabled={locked} />
      case 5:
        return <FinalScene onReset={resetStory} disabled={locked} />
      default:
        return null
    }
  }

  return (
    <main className={`app-shell scene-${scene}`} dir="rtl">
      <AmbientDecor scene={scene} />
      <ProgressDots current={scene} total={LAST_SCENE} />
      <div
        className={`scene-stage ${leaving ? "scene-stage--leaving" : ""}`}
        key={scene}
      >
        {renderScene()}
      </div>
      <p className="brand-mark" aria-hidden="true">
        یک قصهٔ کوچولو، فقط برای لبخند تو
      </p>
    </main>
  )
}
