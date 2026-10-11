export function BloomingFlower({ started }: { started: boolean }) {
  const outerPetals = Array.from({ length: 10 }, (_, index) => index * 36)
  const innerPetals = Array.from({ length: 8 }, (_, index) => index * 45 + 22.5)

  return (
    <div
      className={`flower-offering ${started ? "is-blooming" : ""}`}
      aria-hidden="true"
    >
      <div className="flower-depth">
        <svg className="bloom-flower" viewBox="0 0 320 470">
          <defs>
            <linearGradient id="stemShade" x1="0" x2="1">
              <stop offset="0" stopColor="#294B3B" />
              <stop offset="1" stopColor="#668064" />
            </linearGradient>
            <radialGradient id="petalShade" cx="50%" cy="75%" r="75%">
              <stop offset="0" stopColor="#F9D8DB" />
              <stop offset=".62" stopColor="#E992A5" />
              <stop offset="1" stopColor="#C75B76" />
            </radialGradient>
            <radialGradient id="flowerCore" cx="40%" cy="35%">
              <stop offset="0" stopColor="#FFE9A6" />
              <stop offset="1" stopColor="#D6954A" />
            </radialGradient>
            <filter
              id="flowerShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="9"
                floodColor="#7C3E50"
                floodOpacity=".2"
              />
            </filter>
          </defs>
          <g className="stem-group">
            <path
              className="flower-stem"
              d="M159 436C184 356 132 275 160 157"
              fill="none"
              stroke="url(#stemShade)"
              strokeLinecap="round"
              strokeWidth="10"
            />
            <path
              className="flower-leaf flower-leaf--left"
              d="M157 341C112 324 83 344 70 377C107 382 141 369 157 341Z"
              fill="#7F9A76"
            />
            <path
              className="flower-leaf flower-leaf--right"
              d="M166 292C205 261 239 271 257 297C225 317 190 316 166 292Z"
              fill="#A8B99A"
            />
          </g>
          <g className="flower-head" filter="url(#flowerShadow)">
            {outerPetals.map((rotation, index) => (
              <g transform={`rotate(${rotation} 160 139)`} key={rotation}>
                <ellipse
                  className="svg-petal svg-petal--outer"
                  style={{ "--petal-order": index } as React.CSSProperties}
                  cx="160"
                  cy="77"
                  rx="30"
                  ry="72"
                  fill="url(#petalShade)"
                />
              </g>
            ))}
            {innerPetals.map((rotation, index) => (
              <g transform={`rotate(${rotation} 160 139)`} key={rotation}>
                <ellipse
                  className="svg-petal svg-petal--inner"
                  style={{ "--petal-order": index + 5 } as React.CSSProperties}
                  cx="160"
                  cy="100"
                  rx="19"
                  ry="45"
                  fill="#F4B2BE"
                />
              </g>
            ))}
            <circle
              className="flower-center"
              cx="160"
              cy="139"
              r="31"
              fill="url(#flowerCore)"
            />
            {Array.from({ length: 12 }, (_, index) => {
              const angle = (index * Math.PI * 2) / 12
              return (
                <circle
                  className="flower-stamen"
                  key={index}
                  cx={160 + Math.cos(angle) * 19}
                  cy={139 + Math.sin(angle) * 19}
                  r="3.2"
                  fill="#9D6735"
                />
              )
            })}
          </g>
          <g className="seed-bud">
            <ellipse
              cx="159"
              cy="440"
              rx="24"
              ry="9"
              fill="#294B3B"
              opacity=".12"
            />
            <path
              d="M143 428C144 403 176 403 177 428C170 440 151 440 143 428Z"
              fill="#C75B76"
            />
          </g>
        </svg>
        <span className="sparkle sparkle--one">✦</span>
        <span className="sparkle sparkle--two">✧</span>
        <span className="sparkle sparkle--three">✦</span>
      </div>
    </div>
  )
}

export function FlowerCharacter() {
  return (
    <svg
      className="flower-character"
      viewBox="0 0 180 190"
      aria-label="گل خندان و بازیگوش"
    >
      <path
        d="M92 178C94 144 90 121 88 99"
        fill="none"
        stroke="#668064"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M91 151C118 137 135 144 143 160C122 169 104 166 91 151Z"
        fill="#A8B99A"
      />
      {Array.from({ length: 8 }, (_, index) => (
        <ellipse
          key={index}
          cx="90"
          cy="63"
          rx="28"
          ry="49"
          fill={index % 2 ? "#E992A5" : "#F5C7CE"}
          transform={`rotate(${index * 45} 90 83)`}
        />
      ))}
      <circle cx="90" cy="83" r="35" fill="#F5C26B" />
      <ellipse
        className="character-eye"
        cx="78"
        cy="78"
        rx="4"
        ry="8"
        fill="#294B3B"
      />
      <ellipse
        className="character-eye character-eye--right"
        cx="103"
        cy="78"
        rx="4"
        ry="8"
        fill="#294B3B"
      />
      <path
        d="M76 94C84 103 96 104 105 94"
        fill="none"
        stroke="#8B4A45"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="67" cy="91" r="6" fill="#E992A5" opacity=".6" />
      <circle cx="113" cy="91" r="6" fill="#E992A5" opacity=".6" />
    </svg>
  )
}

function SimpleFlower({
  x,
  y,
  scale,
  color,
}: {
  x: number
  y: number
  scale: number
  color: string
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {Array.from({ length: 7 }, (_, index) => (
        <ellipse
          key={index}
          cx="0"
          cy="-24"
          rx="14"
          ry="27"
          fill={color}
          transform={`rotate(${index * 51.43})`}
        />
      ))}
      <circle r="14" fill="#F2C568" />
      <circle r="5" fill="#B87B38" opacity=".7" />
    </g>
  )
}

export function Bouquet() {
  return (
    <svg
      className="bouquet"
      viewBox="0 0 430 350"
      aria-label="دسته‌گل رنگارنگ برای تبریک روز دختر"
    >
      <defs>
        <filter id="bouquetShadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow
            dx="0"
            dy="14"
            stdDeviation="12"
            floodColor="#294B3B"
            floodOpacity=".16"
          />
        </filter>
      </defs>
      <g filter="url(#bouquetShadow)">
        <path
          d="M205 304C171 246 146 198 111 118M214 304C222 234 253 181 304 118M212 305C206 229 202 166 203 92"
          fill="none"
          stroke="#56745B"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M171 245C127 229 103 240 88 267C126 279 153 267 171 245Z"
          fill="#A8B99A"
        />
        <path
          d="M239 237C276 213 306 220 324 243C292 263 261 260 239 237Z"
          fill="#7F9A76"
        />
        <path
          d="M192 206C153 182 126 188 108 210C140 231 170 228 192 206Z"
          fill="#91A887"
        />
        <SimpleFlower x={110} y={105} scale={1.05} color="#F5C7CE" />
        <SimpleFlower x={306} y={112} scale={1.1} color="#E8DFF5" />
        <SimpleFlower x={203} y={78} scale={1.3} color="#E992A5" />
        <SimpleFlower x={153} y={163} scale={0.82} color="#F0AEB9" />
        <SimpleFlower x={263} y={169} scale={0.88} color="#D9C9F0" />
        <path
          d="M154 264C183 280 236 280 268 262L250 334H174L154 264Z"
          fill="#F1D9C5"
        />
        <path
          d="M158 269C190 286 229 286 265 267"
          fill="none"
          stroke="#C75B76"
          strokeWidth="9"
        />
        <path
          d="M212 280C190 293 187 314 194 329C211 319 219 302 212 280Z"
          fill="#C75B76"
        />
        <path
          d="M212 280C233 292 239 310 231 327C214 317 206 299 212 280Z"
          fill="#D97990"
        />
      </g>
    </svg>
  )
}
