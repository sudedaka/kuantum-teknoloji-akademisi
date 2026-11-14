const stars = [
  [72, 90, 1.1],
  [138, 52, 0.7],
  [214, 118, 0.9],
  [296, 68, 0.6],
  [368, 140, 1.2],
  [462, 58, 0.7],
  [548, 122, 0.9],
  [642, 74, 1.1],
  [728, 132, 0.7],
  [814, 66, 0.9],
  [858, 168, 0.6],
  [96, 226, 0.8],
  [186, 280, 0.6],
  [762, 260, 0.8],
  [836, 320, 0.6],
  [52, 360, 0.9],
  [128, 430, 0.6],
  [782, 410, 0.7],
  [846, 470, 0.9],
  [252, 190, 0.6],
  [680, 196, 0.6],
]

export default function AiHologram() {
  return (
    <svg
      viewBox="0 0 900 620"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="Yapay zeka ve robotik temalı hologram görseli"
    >
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#04060e" />
          <stop offset="55%" stopColor="#070b19" />
          <stop offset="100%" stopColor="#0c0619" />
        </linearGradient>

        <radialGradient id="ai-cyan-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="ai-violet-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="ai-top-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.18" />
        </linearGradient>

        <linearGradient id="ai-left-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#0e7490" stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="ai-right-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="ai-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="100%" stopColor="#a5f3fc" stopOpacity="0.7" />
        </linearGradient>

        <linearGradient id="ai-bottom-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04060e" stopOpacity="0" />
          <stop offset="100%" stopColor="#04060e" stopOpacity="0.95" />
        </linearGradient>

        <filter id="ai-soft-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="ai-strong-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="900" height="620" fill="url(#ai-bg)" />

      <ellipse cx="450" cy="300" rx="360" ry="260" fill="url(#ai-violet-glow)" opacity="0.55" />
      <ellipse cx="450" cy="360" rx="300" ry="200" fill="url(#ai-cyan-glow)" opacity="0.7" />

      <g fill="#e0f2fe">
        {stars.map(([cx, cy, r], index) => (
          <circle key={index} cx={cx} cy={cy} r={r} opacity={0.35 + (index % 4) * 0.1} />
        ))}
      </g>

      <g opacity="0.24" stroke="#22d3ee" strokeWidth="0.8">
        {[-300, -150, 0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((x) => (
          <line key={`v-${x}`} x1="450" y1="300" x2={x} y2="620" />
        ))}
        {[330, 370, 420, 480, 550, 620].map((y) => {
          const half = (y - 300) * 3.2
          return <line key={`h-${y}`} x1={450 - half} y1={y} x2={450 + half} y2={y} />
        })}
      </g>

      <ellipse
        cx="450"
        cy="420"
        rx="290"
        ry="62"
        fill="none"
        stroke="#22d3ee"
        strokeOpacity="0.28"
        strokeWidth="1"
      />
      <ellipse
        cx="450"
        cy="420"
        rx="210"
        ry="42"
        fill="none"
        stroke="#a78bfa"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="10 12"
      />

      <rect x="449" y="24" width="2" height="126" fill="url(#ai-beam)" opacity="0.8" />
      <circle cx="450" cy="150" r="4" fill="#a5f3fc" filter="url(#ai-strong-glow)" />

      <g filter="url(#ai-soft-glow)">
        <polygon
          points="450,150 580,220 450,290 320,220"
          fill="url(#ai-top-face)"
          stroke="#a5f3fc"
          strokeOpacity="0.8"
          strokeWidth="1.2"
        />
        <polygon
          points="320,220 450,290 450,440 320,370"
          fill="url(#ai-left-face)"
          stroke="#67e8f9"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />
        <polygon
          points="580,220 450,290 450,440 580,370"
          fill="url(#ai-right-face)"
          stroke="#c4b5fd"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />
      </g>

      <g fill="none" stroke="#a5f3fc" strokeOpacity="0.5" strokeWidth="1">
        <polygon points="450,178 548,230 450,282 352,230" />
        <path d="M352 230 L450 282 L450 408 L352 356" />
        <path d="M548 230 L450 282 L450 408 L548 356" />
        <path d="M450 178 L450 150" />
        <path d="M352 230 L320 220 M548 230 L580 220" />
      </g>

      <text
        x="450"
        y="355"
        textAnchor="middle"
        fill="#cffafe"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="64"
        fontWeight="600"
        letterSpacing="8"
        filter="url(#ai-strong-glow)"
      >
        AI
      </text>

      <g opacity="0.55" fill="none" stroke="#c4b5fd" strokeWidth="1">
        <ellipse cx="450" cy="300" rx="215" ry="64" strokeDasharray="4 10" />
        <ellipse cx="450" cy="300" rx="170" ry="48" strokeDasharray="16 12" opacity="0.5" />
      </g>

      {/* Sol figür */}
      <g transform="translate(170 330)" fill="none" strokeLinecap="round">
        <circle cx="0" cy="-62" r="13" stroke="#67e8f9" strokeOpacity="0.7" strokeWidth="2" />
        <path
          d="M0 -48 C-18 -34 -20 -12 -16 18 L-12 58 M0 -48 C18 -34 20 -12 16 18 L12 58"
          stroke="#67e8f9"
          strokeOpacity="0.55"
          strokeWidth="2"
        />
        <path
          d="M-16 8 C-2 2 12 -4 38 -14 M16 8 C30 0 42 -6 56 -18"
          stroke="#a5f3fc"
          strokeOpacity="0.7"
          strokeWidth="2"
        />
        <path d="M-12 58 L-2 102 M12 58 L24 100" stroke="#67e8f9" strokeOpacity="0.45" strokeWidth="2" />
        <circle cx="56" cy="-18" r="3.5" fill="#a5f3fc" stroke="none" filter="url(#ai-soft-glow)" />
      </g>

      {/* Sağ figür */}
      <g transform="translate(736 340)" fill="none" strokeLinecap="round">
        <circle cx="0" cy="-58" r="13" stroke="#c4b5fd" strokeOpacity="0.7" strokeWidth="2" />
        <path
          d="M0 -44 C-18 -30 -20 -8 -16 22 L-12 62 M0 -44 C18 -30 20 -8 16 22 L12 62"
          stroke="#c4b5fd"
          strokeOpacity="0.55"
          strokeWidth="2"
        />
        <path
          d="M-16 12 C-30 4 -44 -4 -62 -18 M16 12 C2 4 -12 -4 -36 -16"
          stroke="#ddd6fe"
          strokeOpacity="0.65"
          strokeWidth="2"
        />
        <path d="M-12 62 L-2 104 M12 62 L24 102" stroke="#c4b5fd" strokeOpacity="0.45" strokeWidth="2" />
        <circle cx="-62" cy="-18" r="3.5" fill="#ddd6fe" stroke="none" filter="url(#ai-soft-glow)" />
      </g>

      <g opacity="0.65">
        <g transform="translate(196 178) rotate(-7)">
          <rect width="104" height="58" rx="6" fill="#0a1220" fillOpacity="0.8" stroke="#22d3ee" strokeOpacity="0.4" />
          <text x="14" y="24" fill="#a5f3fc" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
            MACHINE
          </text>
          <text x="14" y="40" fill="#67e8f9" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
            LEARNING
          </text>
        </g>

        <g transform="translate(608 156) rotate(6)">
          <rect width="116" height="58" rx="6" fill="#0a1220" fillOpacity="0.8" stroke="#a78bfa" strokeOpacity="0.4" />
          <text x="14" y="24" fill="#ddd6fe" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
            ROBOTICS
          </text>
          <text x="14" y="40" fill="#c4b5fd" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
            FUTURE
          </text>
        </g>

        <g transform="translate(252 238) rotate(4)">
          <rect width="82" height="42" rx="5" fill="#0a1220" fillOpacity="0.75" stroke="#22d3ee" strokeOpacity="0.3" />
          <text x="12" y="26" fill="#a5f3fc" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
            DATA
          </text>
        </g>

        <g transform="translate(596 254) rotate(-5)">
          <rect width="96" height="42" rx="5" fill="#0a1220" fillOpacity="0.75" stroke="#a78bfa" strokeOpacity="0.3" />
          <text x="12" y="26" fill="#ddd6fe" fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
            CODE
          </text>
        </g>
      </g>

      <g fill="none" stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="1">
        <path d="M196 206 L300 236 L330 252" />
        <path d="M608 214 L566 242 L540 258" />
        <path d="M300 290 L250 320 L206 320" />
        <path d="M600 320 L646 340 L700 340" />
      </g>

      <g fill="#67e8f9" opacity="0.7">
        <circle cx="300" cy="236" r="2.5" />
        <circle cx="566" cy="242" r="2.5" />
        <circle cx="206" cy="320" r="2" />
        <circle cx="700" cy="340" r="2" />
      </g>

      <rect y="500" width="900" height="120" fill="url(#ai-bottom-fade)" />
    </svg>
  )
}
