import React from 'react';

/**
 * High-craft SVG Vector Character illustrations with animations
 * Pip (Bunny), Leo (Lion), Mia (Astronaut), Timo (Turtle), Ember (Dragon), Bubbles (Whale)
 */

export function PipCharacter({ action = 'idle', className = '', size = 200 }) {
  const isHopping = action === 'hop';
  const isLooking = action === 'look';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`character-svg pip-bunny ${isHopping ? 'animate-hop' : 'animate-gentle-breathe'} ${className}`}
      aria-label="Pip the Bunny"
      role="img"
    >
      <defs>
        <radialGradient id="pipEarPink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="100%" stopColor="#f43f5e" />
        </radialGradient>
        <linearGradient id="pipFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdfa" />
          <stop offset="100%" stopColor="#f5ebe0" />
        </linearGradient>
        <linearGradient id="pipBag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Fluffy Tail */}
      <circle cx="58" cy="148" r="16" fill="#f5ebe0" />
      <circle cx="56" cy="146" r="12" fill="#ffffff" />

      {/* Body */}
      <ellipse cx="100" cy="138" rx="38" ry="34" fill="url(#pipFur)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))" />

      {/* Little Blue Backpack */}
      <rect x="62" y="118" width="18" height="26" rx="6" fill="url(#pipBag)" />
      <circle cx="71" cy="130" r="3" fill="#fef08a" />
      <path d="M 72 118 Q 80 126 82 138" stroke="#0369a1" strokeWidth="2.5" fill="none" />

      {/* Feet */}
      <ellipse cx="80" cy="168" rx="14" ry="8" fill="#f5ebe0" />
      <ellipse cx="120" cy="168" rx="14" ry="8" fill="#f5ebe0" />
      <ellipse cx="80" cy="168" rx="8" ry="5" fill="#fed7aa" opacity="0.6" />
      <ellipse cx="120" cy="168" rx="8" ry="5" fill="#fed7aa" opacity="0.6" />

      {/* Paws */}
      <ellipse cx="82" cy="136" rx="8" ry="10" fill="#ffffff" transform="rotate(-15 82 136)" />
      <ellipse cx="118" cy="136" rx="8" ry="10" fill="#ffffff" transform="rotate(15 118 136)" />

      {/* Head */}
      <circle cx="100" cy="85" r="36" fill="url(#pipFur)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.08))" />

      {/* Left Ear */}
      <g className={isHopping ? 'animate-ear-wiggle-left' : ''}>
        <path d="M 80 60 C 65 15, 75 -5, 88 15 C 96 30, 92 50, 88 60 Z" fill="url(#pipFur)" />
        <path d="M 81 50 C 73 20, 78 8, 86 22 C 91 32, 89 44, 86 52 Z" fill="url(#pipEarPink)" opacity="0.85" />
      </g>

      {/* Right Ear */}
      <g className={isHopping ? 'animate-ear-wiggle-right' : ''}>
        <path d="M 120 60 C 135 15, 125 -5, 112 15 C 104 30, 108 50, 112 60 Z" fill="url(#pipFur)" />
        <path d="M 119 50 C 127 20, 122 8, 114 22 C 109 32, 111 44, 114 52 Z" fill="url(#pipEarPink)" opacity="0.85" />
      </g>

      {/* Cheeks */}
      <circle cx="78" cy="94" r="8" fill="#fca5a5" opacity="0.45" />
      <circle cx="122" cy="94" r="8" fill="#fca5a5" opacity="0.45" />

      {/* Eyes */}
      <g className="pip-eyes">
        <circle cx={isLooking ? 86 : 88} cy="82" r="6" fill="#1e293b" />
        <circle cx={isLooking ? 84 : 86} cy="80" r="2.2" fill="#ffffff" />
        <circle cx={isLooking ? 87 : 89} cy="83.5" r="1.2" fill="#ffffff" />

        <circle cx={isLooking ? 114 : 112} cy="82" r="6" fill="#1e293b" />
        <circle cx={isLooking ? 112 : 110} cy="80" r="2.2" fill="#ffffff" />
        <circle cx={isLooking ? 115 : 113} cy="83.5" r="1.2" fill="#ffffff" />
      </g>

      {/* Nose & Mouth */}
      <polygon points="97,90 103,90 100,94" fill="#f43f5e" rx="1" />
      <path d="M 96 94 Q 100 98 100 95 Q 100 98 104 94" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Whiskers */}
      <line x1="68" y1="91" x2="52" y2="88" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="68" y1="95" x2="50" y2="96" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="132" y1="91" x2="148" y2="88" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="132" y1="95" x2="150" y2="96" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LeoCharacter({ action = 'idle', className = '', size = 200 }) {
  const isRoaring = action === 'roar';
  const isCelebrating = action === 'celebrate';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`character-svg leo-lion ${isCelebrating ? 'animate-bounce-short' : 'animate-gentle-breathe'} ${className}`}
      aria-label="Leo the Lion"
      role="img"
    >
      <defs>
        <radialGradient id="leoMane" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </radialGradient>
        <linearGradient id="leoFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <path d="M 60 145 Q 35 155 30 130 Q 25 110 38 105" stroke="#facc15" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="38" cy="104" r="9" fill="#ea580c" />

      {/* Body */}
      <ellipse cx="100" cy="142" rx="36" ry="32" fill="url(#leoFur)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))" />

      {/* Belly */}
      <ellipse cx="100" cy="145" rx="22" ry="20" fill="#fef9c3" />

      {/* Legs & Paws */}
      <ellipse cx="76" cy="170" rx="14" ry="9" fill="#facc15" />
      <ellipse cx="124" cy="170" rx="14" ry="9" fill="#facc15" />
      <circle cx="72" cy="170" r="3" fill="#ea580c" opacity="0.3" />
      <circle cx="78" cy="172" r="3" fill="#ea580c" opacity="0.3" />
      <circle cx="120" cy="172" r="3" fill="#ea580c" opacity="0.3" />
      <circle cx="126" cy="170" r="3" fill="#ea580c" opacity="0.3" />

      {/* Mane Petals */}
      <g filter="drop-shadow(0 3px 6px rgba(0,0,0,0.12))">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <ellipse
            key={deg}
            cx="100"
            cy="82"
            rx="46"
            ry="40"
            fill="url(#leoMane)"
            transform={`rotate(${deg} 100 82)`}
            opacity="0.85"
          />
        ))}
      </g>

      {/* Head */}
      <circle cx="100" cy="82" r="32" fill="url(#leoFur)" />

      {/* Ears */}
      <circle cx="75" cy="58" r="12" fill="#facc15" />
      <circle cx="75" cy="58" r="7" fill="#fed7aa" />
      <circle cx="125" cy="58" r="12" fill="#facc15" />
      <circle cx="125" cy="58" r="7" fill="#fed7aa" />

      {/* Cheeks */}
      <circle cx="80" cy="92" r="7" fill="#f97316" opacity="0.35" />
      <circle cx="120" cy="92" r="7" fill="#f97316" opacity="0.35" />

      {/* Eyes */}
      <circle cx="88" cy="78" r="6" fill="#1e293b" />
      <circle cx="86" cy="76" r="2.2" fill="#ffffff" />
      <circle cx="112" cy="78" r="6" fill="#1e293b" />
      <circle cx="110" cy="76" r="2.2" fill="#ffffff" />

      {/* Snout & Nose */}
      <ellipse cx="100" cy="90" rx="14" ry="10" fill="#fef9c3" />
      <polygon points="95,85 105,85 100,90" fill="#78350f" rx="1" />

      {isRoaring ? (
        <ellipse cx="100" cy="95" rx="8" ry="6" fill="#991b1b" />
      ) : (
        <path d="M 96 91 Q 100 95 100 92 Q 100 95 104 91" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
      )}
    </svg>
  );
}

export function MiaCharacter({ action = 'idle', className = '', size = 200 }) {
  const isFloating = action === 'float';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`character-svg mia-astronaut ${isFloating ? 'animate-float-cosmic' : 'animate-gentle-breathe'} ${className}`}
      aria-label="Mia the Astronaut"
      role="img"
    >
      <defs>
        <linearGradient id="suitGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <radialGradient id="visorGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </radialGradient>
      </defs>

      {/* Rocket Backpack */}
      <rect x="68" y="98" width="64" height="42" rx="12" fill="#94a3b8" />
      <circle cx="82" cy="144" r="6" fill="#38bdf8" />
      <circle cx="118" cy="144" r="6" fill="#38bdf8" />

      {/* Thruster Plumes */}
      <path d="M 78 148 Q 82 165 82 175 Q 86 165 86 148 Z" fill="#38bdf8" opacity="0.8" />
      <path d="M 114 148 Q 118 165 118 175 Q 122 165 122 148 Z" fill="#38bdf8" opacity="0.8" />

      {/* Astronaut Body */}
      <rect x="74" y="96" width="52" height="50" rx="16" fill="url(#suitGrad)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))" />

      {/* Chest Mission Patch */}
      <rect x="86" y="106" width="28" height="18" rx="6" fill="#c084fc" />
      <polygon points="100,110 102,115 107,115 103,118 105,123 100,120 95,123 97,118 93,115 98,115" fill="#fef08a" />

      {/* Utility Belt */}
      <rect x="74" y="134" width="52" height="8" rx="4" fill="#a855f7" />
      <circle cx="100" cy="138" r="4" fill="#38bdf8" />

      {/* Puffy Astronaut Boots */}
      <rect x="76" y="146" width="18" height="24" rx="8" fill="#e2e8f0" />
      <rect x="72" y="164" width="24" height="10" rx="5" fill="#a855f7" />
      <rect x="106" y="146" width="18" height="24" rx="8" fill="#e2e8f0" />
      <rect x="104" y="164" width="24" height="10" rx="5" fill="#a855f7" />

      {/* Arms & Puffy Gloves */}
      <path d="M 74 104 Q 56 115 62 130" stroke="url(#suitGrad)" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="62" cy="130" r="9" fill="#c084fc" />
      <path d="M 126 104 Q 144 115 138 130" stroke="url(#suitGrad)" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="138" cy="130" r="9" fill="#c084fc" />

      {/* Helmet Outer */}
      <circle cx="100" cy="68" r="38" fill="url(#suitGrad)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.15))" />

      {/* Helmet Visor */}
      <ellipse cx="100" cy="68" rx="28" ry="24" fill="url(#visorGrad)" />

      {/* Translucent Face inside Visor */}
      <ellipse cx="100" cy="69" rx="16" ry="14" fill="#fde68a" opacity="0.8" />
      {/* Hair bang */}
      <path d="M 88 64 Q 100 58 112 64 Q 106 60 100 62 Q 94 60 88 64 Z" fill="#78350f" />
      {/* Eyes */}
      <circle cx="94" cy="68" r="2.5" fill="#1e293b" />
      <circle cx="106" cy="68" r="2.5" fill="#1e293b" />
      {/* Smile */}
      <path d="M 97 73 Q 100 76 103 73" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Visor Glare / Reflection */}
      <path d="M 82 56 Q 100 48 118 56 Q 100 52 82 56 Z" fill="#ffffff" opacity="0.6" />
      <circle cx="116" cy="72" r="3" fill="#ffffff" opacity="0.7" />
    </svg>
  );
}

export function TimoCharacter({ action = 'idle', className = '', size = 200 }) {
  const isWalking = action === 'walk';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`character-svg timo-turtle ${isWalking ? 'animate-turtle-waddle' : 'animate-gentle-breathe'} ${className}`}
      aria-label="Timo the Turtle"
      role="img"
    >
      <defs>
        <radialGradient id="timoShell" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="70%" stopColor="#166534" />
          <stop offset="100%" stopColor="#14532d" />
        </radialGradient>
        <linearGradient id="timoSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <polygon points="52,135 34,142 54,146" fill="url(#timoSkin)" />

      {/* Back Legs */}
      <ellipse cx="68" cy="158" rx="14" ry="10" fill="url(#timoSkin)" transform="rotate(-15 68 158)" />
      <ellipse cx="132" cy="158" rx="14" ry="10" fill="url(#timoSkin)" transform="rotate(15 132 158)" />

      {/* Front Legs */}
      <ellipse cx="80" cy="164" rx="16" ry="11" fill="url(#timoSkin)" />
      <ellipse cx="140" cy="164" rx="16" ry="11" fill="url(#timoSkin)" />
      {/* Toe nails */}
      <circle cx="75" cy="170" r="2.5" fill="#fef08a" />
      <circle cx="82" cy="171" r="2.5" fill="#fef08a" />
      <circle cx="138" cy="171" r="2.5" fill="#fef08a" />
      <circle cx="145" cy="170" r="2.5" fill="#fef08a" />

      {/* Sturdy Turtle Shell Dome */}
      <ellipse cx="100" cy="125" rx="52" ry="40" fill="url(#timoShell)" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.15))" />
      {/* Shell Rim */}
      <ellipse cx="100" cy="148" rx="54" ry="14" fill="#a3e635" />

      {/* Shell Hexagonal Scutes Pattern */}
      <polygon points="100,98 116,108 116,126 100,136 84,126 84,108" fill="#ca8a04" opacity="0.85" stroke="#fef08a" strokeWidth="2.5" />
      <polygon points="68,114 80,122 80,138 68,144 56,138 56,122" fill="#ca8a04" opacity="0.7" stroke="#fef08a" strokeWidth="2" />
      <polygon points="132,114 144,122 144,138 132,144 120,138 120,122" fill="#ca8a04" opacity="0.7" stroke="#fef08a" strokeWidth="2" />

      {/* Neck & Head */}
      <path d="M 134 128 Q 155 125 158 105 Q 160 85 145 80 Q 128 75 124 95 Q 120 115 134 128 Z" fill="url(#timoSkin)" />

      {/* Yellow Bandana */}
      <path d="M 130 114 Q 142 120 150 112 Q 144 125 132 122 Z" fill="#fbbf24" />
      <circle cx="138" cy="120" r="3" fill="#d97706" />

      {/* Head Features */}
      <circle cx="144" cy="88" r="5" fill="#1e293b" />
      <circle cx="142" cy="86" r="2" fill="#ffffff" />
      {/* Rosy Cheek */}
      <circle cx="150" cy="95" r="5" fill="#f43f5e" opacity="0.35" />
      {/* Smile */}
      <path d="M 148 98 Q 155 102 158 97" stroke="#14532d" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function EmberCharacter({ action = 'idle', className = '', size = 200 }) {
  const isPuffing = action === 'puff' || action === 'sneeze';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`character-svg ember-dragon ${isPuffing ? 'animate-bounce-short' : 'animate-gentle-breathe'} ${className}`}
      aria-label="Ember the Dragon"
      role="img"
    >
      <defs>
        <linearGradient id="dragonSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
        <linearGradient id="dragonBelly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
        <linearGradient id="dragonWing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Tail with cute flame */}
      <path d="M 65 142 Q 35 150 28 128 Q 25 118 34 110" stroke="url(#dragonSkin)" strokeWidth="14" strokeLinecap="round" fill="none" />
      {/* Flame tip on tail */}
      <path d="M 32 108 Q 30 92 40 96 Q 44 86 48 98 Q 50 110 32 108 Z" fill="#fbbf24" />
      <path d="M 35 104 Q 35 96 40 98 Q 42 94 44 100 Q 45 106 35 104 Z" fill="#f43f5e" />

      {/* Left Wing behind body */}
      <g transform="rotate(-15 65 85)">
        <path d="M 68 88 Q 38 65 30 82 Q 44 88 40 102 Q 55 98 68 98 Z" fill="url(#dragonWing)" opacity="0.9" />
      </g>

      {/* Chubby Dragon Body */}
      <ellipse cx="100" cy="140" rx="36" ry="34" fill="url(#dragonSkin)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))" />

      {/* Yellow Segmented Belly Plates */}
      <ellipse cx="106" cy="144" rx="22" ry="24" fill="url(#dragonBelly)" />
      <line x1="88" y1="134" x2="124" y2="134" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
      <line x1="88" y1="144" x2="124" y2="144" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
      <line x1="90" y1="154" x2="122" y2="154" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />

      {/* Feet with cute white claws */}
      <ellipse cx="80" cy="168" rx="14" ry="9" fill="url(#dragonSkin)" />
      <ellipse cx="122" cy="168" rx="14" ry="9" fill="url(#dragonSkin)" />
      <circle cx="74" cy="170" r="2.5" fill="#ffffff" />
      <circle cx="80" cy="172" r="2.5" fill="#ffffff" />
      <circle cx="118" cy="172" r="2.5" fill="#ffffff" />
      <circle cx="124" cy="170" r="2.5" fill="#ffffff" />

      {/* Right Wing in front */}
      <g transform="rotate(10 120 105)">
        <path d="M 125 108 Q 155 78 165 98 Q 148 105 152 120 Q 138 116 125 120 Z" fill="url(#dragonWing)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
      </g>

      {/* Head */}
      <circle cx="100" cy="80" r="32" fill="url(#dragonSkin)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />

      {/* Curved Horns */}
      <path d="M 85 58 Q 78 35 68 40 Q 75 48 82 58 Z" fill="#fde047" />
      <path d="M 115 58 Q 122 35 132 40 Q 125 48 118 58 Z" fill="#fde047" />

      {/* Cheeks */}
      <circle cx="78" cy="90" r="7" fill="#fbbf24" opacity="0.6" />
      <circle cx="122" cy="90" r="7" fill="#fbbf24" opacity="0.6" />

      {/* Big Friendly Eyes */}
      <circle cx="88" cy="76" r="6.5" fill="#1e293b" />
      <circle cx="86" cy="73.5" r="2.5" fill="#ffffff" />
      <circle cx="112" cy="76" r="6.5" fill="#1e293b" />
      <circle cx="110" cy="73.5" r="2.5" fill="#ffffff" />

      {/* Snout with small nostrils */}
      <ellipse cx="100" cy="88" rx="15" ry="9" fill="#f43f5e" />
      <circle cx="95" cy="86" r="2" fill="#881337" />
      <circle cx="105" cy="86" r="2" fill="#881337" />
      <path d="M 96 92 Q 100 95 104 92" stroke="#881337" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Animated Sparkles from Snout */}
      {isPuffing && (
        <g className="animate-sparkle-stream">
          <circle cx="120" cy="80" r="4" fill="#fde047" />
          <circle cx="132" cy="72" r="6" fill="#f43f5e" />
          <circle cx="145" cy="65" r="5" fill="#c084fc" />
          <polygon points="135,55 138,62 145,62 140,66 142,73 135,69 128,73 130,66 125,62 132,62" fill="#fde047" />
        </g>
      )}
    </svg>
  );
}

export function BubblesCharacter({ action = 'idle', className = '', size = 200 }) {
  const isSpouting = action === 'spout' || action === 'sing';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`character-svg bubbles-whale ${isSpouting ? 'animate-spout-bounce' : 'animate-gentle-breathe'} ${className}`}
      aria-label="Bubbles the Whale"
      role="img"
    >
      <defs>
        <linearGradient id="whaleBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="whaleBelly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>

      {/* Water Spout & Air Rings */}
      {isSpouting && (
        <g className="animate-spout">
          <path d="M 80 50 Q 80 20 65 10 Q 80 25 80 48 Z" fill="#bae6fd" />
          <path d="M 82 50 Q 85 12 100 8 Q 88 22 84 48 Z" fill="#7dd3fc" />
          <circle cx="62" cy="10" r="5" fill="#bae6fd" opacity="0.85" />
          <circle cx="102" cy="8" r="6" fill="#7dd3fc" opacity="0.85" />
          <ellipse cx="82" cy="24" rx="10" ry="3" fill="#e0f2fe" opacity="0.7" />
        </g>
      )}

      {/* Whale Tail Flukes */}
      <path d="M 148 118 Q 175 105 188 95 Q 182 118 168 126 Q 185 135 190 152 Q 170 142 148 132 Z" fill="url(#whaleBlue)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />

      {/* Whale Body Silhouette */}
      <path
        d="M 40 115 C 35 75, 95 62, 135 90 C 152 102, 160 118, 150 135 C 135 158, 70 162, 45 138 C 38 130, 42 120, 40 115 Z"
        fill="url(#whaleBlue)"
        filter="drop-shadow(0 6px 12px rgba(0,0,0,0.12))"
      />

      {/* White Underbelly */}
      <path
        d="M 50 128 C 65 148, 115 150, 142 134 C 132 146, 85 158, 50 128 Z"
        fill="url(#whaleBelly)"
      />
      {/* Belly Grooves */}
      <path d="M 72 138 Q 95 146 118 139" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M 78 144 Q 95 150 112 145" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Flipper */}
      <ellipse cx="85" cy="128" rx="16" ry="9" fill="#0284c7" transform="rotate(25 85 128)" />

      {/* Rosy Cheek */}
      <circle cx="62" cy="116" r="7" fill="#fb7185" opacity="0.4" />

      {/* Cheerful Whale Eye */}
      <circle cx="68" cy="104" r="5.5" fill="#1e293b" />
      <circle cx="66" cy="102" r="2.2" fill="#ffffff" />
      <circle cx="69" cy="105" r="1.2" fill="#ffffff" />

      {/* Smile */}
      <path d="M 50 114 Q 58 124 70 116" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function StoryCharacter({ storyId, action = 'idle', className = '', size = 200 }) {
  switch (storyId) {
    case 'lost-bunny':
      return <PipCharacter action={action} className={className} size={size} />;
    case 'leo-lion':
      return <LeoCharacter action={action} className={className} size={size} />;
    case 'mia-space':
      return <MiaCharacter action={action} className={className} size={size} />;
    case 'timo-turtle':
      return <TimoCharacter action={action} className={className} size={size} />;
    case 'ember-dragon':
      return <EmberCharacter action={action} className={className} size={size} />;
    case 'ocean-adventure':
      return <BubblesCharacter action={action} className={className} size={size} />;
    default:
      return <PipCharacter action={action} className={className} size={size} />;
  }
}
