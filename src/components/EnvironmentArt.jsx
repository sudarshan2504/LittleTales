import React from 'react';

/**
 * Multi-layer SVG Vector Environment Illustrations for each of the 6 story themes.
 * Each theme provides distinct Layers 1, 2, 3, 4, and 6 to produce genuine 2D parallax depth.
 */

/* =========================================================================
   1. FOREST THEME (The Lost Bunny)
   ========================================================================= */
export function ForestLayer1() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="forestSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="60%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#d9f99d" />
        </linearGradient>
      </defs>
      <rect width="1440" height="600" fill="url(#forestSky)" />
      {/* Sun */}
      <circle cx="280" cy="140" r="75" fill="#fef08a" opacity="0.85" filter="drop-shadow(0 0 40px #fef08a)" />
      {/* Drifting Clouds */}
      <path d="M 120 180 Q 150 140 200 150 Q 250 130 290 160 Q 320 170 330 190 Q 300 210 120 200 Z" fill="#ffffff" opacity="0.75" />
      <path d="M 920 120 Q 960 80 1020 90 Q 1070 70 1120 100 Q 1150 120 1160 140 Q 1120 160 920 150 Z" fill="#ffffff" opacity="0.65" />
    </svg>
  );
}

export function ForestLayer2() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Distant Mountain Ridges */}
      <path d="M 0 380 Q 240 260 480 340 Q 720 230 980 320 Q 1200 270 1440 360 L 1440 600 L 0 600 Z" fill="#86efac" opacity="0.5" />
      <path d="M 0 420 Q 320 310 640 370 Q 960 300 1240 380 L 1440 400 L 1440 600 L 0 600 Z" fill="#4ade80" opacity="0.45" />
    </svg>
  );
}

export function ForestLayer3() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Faraway Trees Canopy */}
      <g fill="#22c55e" opacity="0.7">
        <circle cx="160" cy="380" r="90" />
        <circle cx="280" cy="390" r="110" />
        <circle cx="420" cy="370" r="95" />
        <circle cx="760" cy="360" r="120" />
        <circle cx="920" cy="380" r="100" />
        <circle cx="1080" cy="360" r="130" />
        <circle cx="1280" cy="370" r="110" />
        <circle cx="1400" cy="390" r="90" />
      </g>
    </svg>
  );
}

export function ForestLayer4() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Rolling Mossy Hills & Cozy Burrow Oak Tree */}
      <path d="M 0 460 Q 380 410 740 450 Q 1120 400 1440 460 L 1440 600 L 0 600 Z" fill="#16a34a" />
      {/* Oak Tree Trunk with arched hollow door */}
      <path d="M 180 560 C 190 400 210 320 260 260 C 310 320 340 400 360 560 Z" fill="#78350f" />
      {/* Foliage */}
      <circle cx="260" cy="220" r="130" fill="#15803d" />
      <circle cx="200" cy="200" r="90" fill="#16a34a" />
      <circle cx="320" cy="210" r="100" fill="#22c55e" />
      {/* Hollow Doorway */}
      <path d="M 240 540 C 240 480 280 480 280 540 Z" fill="#451a03" />
      <circle cx="272" cy="510" r="3" fill="#fef08a" />
      {/* Winding Dirt Path */}
      <path d="M 260 540 Q 320 570 480 560 Q 720 550 960 570 T 1440 560" stroke="#d97706" strokeWidth="38" opacity="0.45" strokeLinecap="round" />
    </svg>
  );
}

export function ForestLayer6() {
  return (
    <svg className="w-full h-full pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Foreground Grass, Wildflowers & Ferns */}
      <path d="M 0 540 Q 220 530 460 550 Q 820 520 1140 545 Q 1320 535 1440 540 L 1440 600 L 0 600 Z" fill="#15803d" opacity="0.9" />
      {/* Fern Fronds Left */}
      <path d="M 30 600 Q 60 500 140 480 Q 90 530 50 600 Z" fill="#166534" />
      <path d="M 80 600 Q 120 510 180 490 Q 130 540 100 600 Z" fill="#15803d" />
      {/* Daisies */}
      <circle cx="380" cy="545" r="7" fill="#ffffff" />
      <circle cx="380" cy="545" r="3" fill="#fbbf24" />
      <circle cx="1120" cy="550" r="8" fill="#ffffff" />
      <circle cx="1120" cy="550" r="3.5" fill="#fbbf24" />
      <circle cx="1280" cy="540" r="6" fill="#f43f5e" />
      <circle cx="1280" cy="540" r="2.5" fill="#fef08a" />
    </svg>
  );
}

/* =========================================================================
   2. SAVANNA THEME (Leo the Little Lion)
   ========================================================================= */
export function SavannaLayer1() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="savannaSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
      </defs>
      <rect width="1440" height="600" fill="url(#savannaSky)" />
      <circle cx="1180" cy="180" r="85" fill="#fffbeb" opacity="0.9" filter="drop-shadow(0 0 45px #fef08a)" />
    </svg>
  );
}

export function SavannaLayer2() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Distant Purple Acacia Plateaus */}
      <polygon points="0,420 320,340 520,340 760,430 0,430" fill="#c084fc" opacity="0.3" />
      <polygon points="680,430 940,330 1180,330 1440,430 680,430" fill="#a855f7" opacity="0.35" />
    </svg>
  );
}

export function SavannaLayer3() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Baobab and Acacia Silhouettes */}
      <g fill="#7c2d12" opacity="0.55">
        {/* Acacia Left */}
        <path d="M 220 440 L 225 360 L 160 330 Q 230 310 290 330 L 235 360 L 240 440 Z" />
        <ellipse cx="225" cy="320" rx="75" ry="16" />
        {/* Baobab Right */}
        <rect x="1100" y="320" width="45" height="120" rx="14" />
        <ellipse cx="1122" cy="310" rx="80" ry="32" />
      </g>
    </svg>
  );
}

export function SavannaLayer4() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Savanna Plains & Rope Bridge Gorge */}
      <path d="M 0 450 Q 320 430 620 460 Q 820 490 1020 450 Q 1280 430 1440 450 L 1440 600 L 0 600 Z" fill="#d97706" />
      {/* Winding Turquoise River Gorge */}
      <path d="M 520 600 Q 640 520 700 460 Q 740 520 840 600 Z" fill="#06b6d4" />
      {/* Wooden Rope Bridge over the water */}
      <path d="M 480 480 Q 660 520 840 480" stroke="#78350f" strokeWidth="6" fill="none" />
      <path d="M 480 500 Q 660 540 840 500" stroke="#78350f" strokeWidth="6" fill="none" />
      {/* Bridge Planks */}
      {[510, 545, 580, 615, 650, 685, 720, 755, 790, 820].map((x, i) => (
        <line key={i} x1={x} y1={470 + Math.sin(i / 3) * 12} x2={x} y2={515 + Math.sin(i / 3) * 12} stroke="#b45309" strokeWidth="7" strokeLinecap="round" />
      ))}
    </svg>
  );
}

export function SavannaLayer6() {
  return (
    <svg className="w-full h-full pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Foreground Tall Golden Grass Blades */}
      <path d="M 0 540 Q 240 525 580 545 Q 920 515 1440 540 L 1440 600 L 0 600 Z" fill="#b45309" opacity="0.9" />
      <path d="M 60 600 Q 75 510 110 490 Q 95 540 80 600 Z" fill="#f59e0b" />
      <path d="M 1320 600 Q 1340 500 1380 480 Q 1350 540 1340 600 Z" fill="#f59e0b" />
    </svg>
  );
}

/* =========================================================================
   3. SPACE THEME (Mia Goes to Space)
   ========================================================================= */
export function SpaceLayer1() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <radialGradient id="spaceNebula" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="45%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#09090b" />
        </radialGradient>
      </defs>
      <rect width="1440" height="600" fill="url(#spaceNebula)" />
      {/* Distant Colorful Nebula Clouds */}
      <circle cx="400" cy="220" r="180" fill="#ec4899" opacity="0.15" filter="blur(40px)" />
      <circle cx="1080" cy="180" r="220" fill="#38bdf8" opacity="0.12" filter="blur(50px)" />
    </svg>
  );
}

export function SpaceLayer2() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Twinkling Starfield */}
      {[
        [80, 70, 2], [140, 150, 1.5], [220, 80, 3], [320, 190, 2], [420, 60, 2.5],
        [510, 130, 1.8], [610, 70, 3.2], [730, 160, 2], [820, 90, 2.5], [940, 170, 3],
        [1040, 60, 2], [1160, 130, 2.8], [1280, 80, 1.5], [1370, 150, 3],
        [200, 280, 2], [540, 260, 1.8], [880, 270, 3], [1220, 250, 2.2]
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#ffffff" opacity={0.6 + (i % 4) * 0.12} />
      ))}
      {/* Constellation Lines */}
      <path d="M 610 70 L 730 160 L 820 90 L 940 170" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
    </svg>
  );
}

export function SpaceLayer3() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Ringed Saturn */}
      <g transform="translate(1080, 160)">
        {/* Back Ring */}
        <ellipse cx="0" cy="0" rx="140" ry="32" fill="#fed7aa" opacity="0.75" transform="rotate(-18)" />
        {/* Planet Sphere */}
        <circle cx="0" cy="0" r="62" fill="#fbbf24" filter="drop-shadow(0 0 20px rgba(251,191,36,0.3))" />
        {/* Planet Stripes */}
        <path d="M -58 -10 Q 0 -2 58 -10 Q 0 4 -58 -10 Z" fill="#d97706" opacity="0.6" />
        <path d="M -54 15 Q 0 24 54 15 Q 0 30 -54 15 Z" fill="#ea580c" opacity="0.5" />
        {/* Front Ring */}
        <path d="M -135 44 C -60 70, 60 70, 135 44 C 60 55, -60 55, -135 44 Z" fill="#ffedd5" transform="rotate(-18)" />
      </g>
      {/* Distant Earth */}
      <circle cx="240" cy="190" r="38" fill="#0284c7" filter="drop-shadow(0 0 16px #38bdf8)" />
      <circle cx="232" cy="182" r="14" fill="#22c55e" opacity="0.8" />
      <circle cx="248" cy="198" r="10" fill="#22c55e" opacity="0.8" />
    </svg>
  );
}

export function SpaceLayer4() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Moon Crater Surface / Starship Observatory Deck */}
      <path d="M 0 460 Q 360 420 720 450 Q 1080 410 1440 460 L 1440 600 L 0 600 Z" fill="#334155" />
      {/* Craters */}
      <ellipse cx="260" cy="510" rx="55" ry="20" fill="#1e293b" />
      <ellipse cx="260" cy="510" rx="48" ry="16" fill="#0f172a" />
      <ellipse cx="880" cy="525" rx="70" ry="22" fill="#1e293b" />
      <ellipse cx="880" cy="525" rx="60" ry="17" fill="#0f172a" />
      {/* Space Station Observation Grid */}
      <line x1="0" y1="460" x2="1440" y2="460" stroke="#38bdf8" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}

export function SpaceLayer6() {
  return (
    <svg className="w-full h-full pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Foreground Floating Asteroid Bits & Energy Ring */}
      <polygon points="120,530 145,515 155,540 135,555" fill="#64748b" opacity="0.9" />
      <polygon points="1320,520 1350,505 1365,530 1340,545" fill="#64748b" opacity="0.9" />
    </svg>
  );
}

/* =========================================================================
   4. POND THEME (The Slow Turtle)
   ========================================================================= */
export function PondLayer1() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="pondSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="70%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
      </defs>
      <rect width="1440" height="600" fill="url(#pondSky)" />
      <circle cx="820" cy="130" r="70" fill="#fef08a" opacity="0.85" filter="drop-shadow(0 0 35px #fde047)" />
      {/* Fluffy clouds */}
      <path d="M 180 140 Q 220 110 260 125 Q 310 100 350 130 Q 380 145 370 160 Q 320 175 180 160 Z" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}

export function PondLayer2() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Distant Meadow Hills */}
      <path d="M 0 390 Q 340 300 700 360 Q 1060 280 1440 370 L 1440 600 L 0 600 Z" fill="#bef264" opacity="0.6" />
    </svg>
  );
}

export function PondLayer3() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Pond Shoreline, Reeds & Willows */}
      <g fill="#15803d" opacity="0.75">
        <path d="M 80 430 Q 95 320 120 280 Q 100 350 85 430 Z" />
        <path d="M 110 430 Q 130 310 150 270 Q 135 340 115 430 Z" />
        <path d="M 1320 430 Q 1335 320 1360 280 Q 1340 350 1325 430 Z" />
      </g>
    </svg>
  );
}

export function PondLayer4() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Calm Blue Pond Water with Lily Pads */}
      <path d="M 0 450 Q 360 420 720 440 Q 1080 410 1440 450 L 1440 600 L 0 600 Z" fill="#0ea5e9" />
      {/* Lily Pads */}
      <ellipse cx="240" cy="510" rx="60" ry="18" fill="#15803d" />
      <polygon points="240,510 275,502 270,516" fill="#0ea5e9" />
      {/* Pink Lotus Flower */}
      <circle cx="230" cy="502" r="12" fill="#f43f5e" />
      <circle cx="230" cy="502" r="6" fill="#fef08a" />

      <ellipse cx="940" cy="520" rx="75" ry="22" fill="#15803d" />
      <polygon points="940,520 985,510 980,528" fill="#0ea5e9" />

      {/* Water ripple arcs */}
      <path d="M 450 490 Q 520 500 590 490" stroke="#e0f2fe" strokeWidth="2.5" fill="none" opacity="0.7" />
      <path d="M 720 530 Q 800 542 880 530" stroke="#e0f2fe" strokeWidth="2.5" fill="none" opacity="0.7" />
    </svg>
  );
}

export function PondLayer6() {
  return (
    <svg className="w-full h-full pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Foreground Pond Shoreline Grass */}
      <path d="M 0 540 Q 320 520 680 545 Q 1040 520 1440 540 L 1440 600 L 0 600 Z" fill="#166534" opacity="0.9" />
      <ellipse cx="140" cy="560" rx="8" ry="4" fill="#fbbf24" />
      <ellipse cx="1260" cy="565" rx="8" ry="4" fill="#fbbf24" />
    </svg>
  );
}

/* =========================================================================
   5. FANTASY THEME (The Little Dragon)
   ========================================================================= */
export function FantasyLayer1() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="fantasySky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="50%" stopColor="#9333ea" />
          <stop offset="85%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>
      <rect width="1440" height="600" fill="url(#fantasySky)" />
      <circle cx="280" cy="150" r="65" fill="#fef08a" opacity="0.85" filter="drop-shadow(0 0 30px #f43f5e)" />
    </svg>
  );
}

export function FantasyLayer2() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Glowing Crystal Mountain Spikes */}
      <polygon points="120,440 240,240 360,440" fill="#a855f7" opacity="0.5" />
      <polygon points="320,440 480,210 640,440" fill="#7e22ce" opacity="0.45" />
      <polygon points="820,440 1020,180 1220,440" fill="#a855f7" opacity="0.5" />
    </svg>
  );
}

export function FantasyLayer3() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Mushroom Houses & Fairy Lanterns */}
      <g fill="#e11d48">
        <path d="M 180 390 C 180 320 280 320 280 390 Z" />
        <path d="M 1120 390 C 1120 310 1240 310 1240 390 Z" />
      </g>
      <circle cx="210" cy="350" r="12" fill="#ffffff" opacity="0.8" />
      <circle cx="250" cy="360" r="8" fill="#ffffff" opacity="0.8" />
      <circle cx="1160" cy="345" r="14" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}

export function FantasyLayer4() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Dragon Valley Terrace & Glowing Crystal Clusters */}
      <path d="M 0 450 Q 340 420 720 455 Q 1100 415 1440 450 L 1440 600 L 0 600 Z" fill="#6b21a8" />
      {/* Crystals */}
      <polygon points="380,470 395,410 410,470" fill="#38bdf8" filter="drop-shadow(0 0 8px #38bdf8)" />
      <polygon points="405,475 425,395 440,475" fill="#a855f7" filter="drop-shadow(0 0 10px #c084fc)" />
      <polygon points="980,480 1000,400 1020,480" fill="#f43f5e" filter="drop-shadow(0 0 10px #fb7185)" />
    </svg>
  );
}

export function FantasyLayer6() {
  return (
    <svg className="w-full h-full pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Foreground Luminescent Petals & Sparkle Mists */}
      <path d="M 0 540 Q 360 520 720 545 Q 1080 525 1440 540 L 1440 600 L 0 600 Z" fill="#581c87" opacity="0.9" />
      <circle cx="220" cy="520" r="4" fill="#fde047" opacity="0.8" filter="drop-shadow(0 0 6px #fde047)" />
      <circle cx="680" cy="510" r="5" fill="#f43f5e" opacity="0.8" filter="drop-shadow(0 0 6px #f43f5e)" />
      <circle cx="1180" cy="515" r="4" fill="#38bdf8" opacity="0.8" filter="drop-shadow(0 0 6px #38bdf8)" />
    </svg>
  );
}

/* =========================================================================
   6. OCEAN THEME (Ocean Adventure)
   ========================================================================= */
export function OceanLayer1() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="oceanSunburst" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#0284c7" />
          <stop offset="80%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>
      <rect width="1440" height="600" fill="url(#oceanSunburst)" />
      {/* Sunlight Ray Columns */}
      <polygon points="280,0 360,0 420,600 300,600" fill="#ffffff" opacity="0.12" />
      <polygon points="620,0 720,0 840,600 700,600" fill="#ffffff" opacity="0.14" />
      <polygon points="1040,0 1120,0 1200,600 1100,600" fill="#ffffff" opacity="0.1" />
    </svg>
  );
}

export function OceanLayer2() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Distant Kelp Forest & Deep Trenches */}
      <path d="M 0 420 Q 340 340 700 400 Q 1060 320 1440 410 L 1440 600 L 0 600 Z" fill="#0369a1" opacity="0.45" />
    </svg>
  );
}

export function OceanLayer3() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Coral Reef Branches & Fish Schools */}
      <g fill="#ec4899" opacity="0.6">
        <path d="M 120 440 C 130 360 170 330 190 440 Z" />
        <path d="M 170 440 C 190 340 230 320 250 440 Z" />
        <path d="M 1240 440 C 1260 330 1310 320 1330 440 Z" />
      </g>
      {/* School of Tiny Yellow Fish */}
      {[
        [420, 260], [440, 250], [455, 270], [470, 255], [490, 265]
      ].map(([x, y], i) => (
        <polygon key={i} points={`${x},${y} ${x-12},${y-5} ${x-12},${y+5}`} fill="#fef08a" opacity="0.75" />
      ))}
    </svg>
  );
}

export function OceanLayer4() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Golden Sandy Seabed & Giant Pearl Clam */}
      <path d="M 0 470 Q 360 440 720 465 Q 1080 435 1440 470 L 1440 600 L 0 600 Z" fill="#0f766e" />
      {/* Clam */}
      <ellipse cx="1120" cy="510" rx="45" ry="24" fill="#cbd5e1" />
      <circle cx="1120" cy="505" r="14" fill="#ffffff" filter="drop-shadow(0 0 12px #ffffff)" />
    </svg>
  );
}

export function OceanLayer6() {
  return (
    <svg className="w-full h-full pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
      {/* Foreground Rising Bubbles */}
      {[
        [90, 480, 10], [140, 390, 6], [320, 450, 14], [480, 510, 8],
        [720, 430, 16], [980, 490, 11], [1160, 410, 7], [1320, 460, 12]
      ].map(([x, y, r], i) => (
        <g key={i} className="animate-bubble-rise">
          <circle cx={x} cy={y} r={r} fill="#bae6fd" opacity="0.5" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx={x - r / 3} cy={y - r / 3} r={r / 3} fill="#ffffff" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

export default function EnvironmentArt({ theme = 'forest', layer = 1 }) {
  switch (theme) {
    case 'savanna':
      if (layer === 1) return <SavannaLayer1 />;
      if (layer === 2) return <SavannaLayer2 />;
      if (layer === 3) return <SavannaLayer3 />;
      if (layer === 4) return <SavannaLayer4 />;
      return <SavannaLayer6 />;
    case 'space':
      if (layer === 1) return <SpaceLayer1 />;
      if (layer === 2) return <SpaceLayer2 />;
      if (layer === 3) return <SpaceLayer3 />;
      if (layer === 4) return <SpaceLayer4 />;
      return <SpaceLayer6 />;
    case 'pond':
      if (layer === 1) return <PondLayer1 />;
      if (layer === 2) return <PondLayer2 />;
      if (layer === 3) return <PondLayer3 />;
      if (layer === 4) return <PondLayer4 />;
      return <PondLayer6 />;
    case 'fantasy':
      if (layer === 1) return <FantasyLayer1 />;
      if (layer === 2) return <FantasyLayer2 />;
      if (layer === 3) return <FantasyLayer3 />;
      if (layer === 4) return <FantasyLayer4 />;
      return <FantasyLayer6 />;
    case 'ocean':
      if (layer === 1) return <OceanLayer1 />;
      if (layer === 2) return <OceanLayer2 />;
      if (layer === 3) return <OceanLayer3 />;
      if (layer === 4) return <OceanLayer4 />;
      return <OceanLayer6 />;
    case 'forest':
    default:
      if (layer === 1) return <ForestLayer1 />;
      if (layer === 2) return <ForestLayer2 />;
      if (layer === 3) return <ForestLayer3 />;
      if (layer === 4) return <ForestLayer4 />;
      return <ForestLayer6 />;
  }
}
