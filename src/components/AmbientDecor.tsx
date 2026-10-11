const petals = [
  { x: "8%", delay: "-2s", duration: "11s" },
  { x: "19%", delay: "-7s", duration: "14s" },
  { x: "72%", delay: "-4s", duration: "12s" },
  { x: "88%", delay: "-9s", duration: "15s" },
  { x: "45%", delay: "-12s", duration: "17s" },
  { x: "61%", delay: "-1s", duration: "13s" },
]

export default function AmbientDecor({ scene }: { scene: number }) {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-blob ambient-blob--rose" />
      <div className="ambient-blob ambient-blob--sage" />
      <svg className="corner-flower corner-flower--top" viewBox="0 0 120 120">
        <path d="M112 8C84 31 71 60 70 105" />
        <path d="M78 51C48 47 33 30 28 12C52 10 72 22 78 51Z" />
        <path d="M70 74C91 62 109 64 118 70C108 87 91 94 70 89Z" />
        <circle cx="30" cy="15" r="5" />
      </svg>
      <svg
        className="corner-flower corner-flower--bottom"
        viewBox="0 0 120 120"
      >
        <path d="M10 115C25 75 50 50 94 30" />
        <path d="M45 69C19 65 8 48 6 31C28 31 43 45 45 69Z" />
        <path d="M70 45C68 20 81 7 98 3C101 23 91 39 70 45Z" />
        <circle cx="98" cy="27" r="7" />
      </svg>
      {petals
        .slice(0, scene === 3 || scene === 5 ? 6 : 4)
        .map((petal, index) => (
          <i
            className={`floating-petal floating-petal--${(index % 3) + 1}`}
            key={`${petal.x}-${index}`}
            style={
              {
                "--petal-x": petal.x,
                "--petal-delay": petal.delay,
                "--petal-duration": petal.duration,
              } as React.CSSProperties
            }
          />
        ))}
    </div>
  )
}
