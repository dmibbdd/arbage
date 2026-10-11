type ProgressDotsProps = {
  current: number
  total: number
}

export default function ProgressDots({ current, total }: ProgressDotsProps) {
  return (
    <nav className="progress-wrap" aria-label="میزان پیشرفت داستان">
      <span className="progress-label">
        قدم {current} از {total}
      </span>
      <ol className="progress-dots">
        {Array.from({ length: total }, (_, index) => {
          const step = index + 1
          return (
            <li
              key={step}
              className={
                step <= current ? "progress-dot is-active" : "progress-dot"
              }
              aria-current={step === current ? "step" : undefined}
            />
          )
        })}
      </ol>
    </nav>
  )
}
