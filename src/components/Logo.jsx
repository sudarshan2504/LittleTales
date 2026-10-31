import React from 'react';

/**
 * LittleTales Original Brand Logo
 * Features a magical open storybook with glowing pages, a twinkling golden star,
 * and whimsical, rounded typography.
 */
export default function Logo({ size = 'medium', showTagline = false, onClick }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const iconWidth = isLarge ? 84 : isSmall ? 40 : 54;
  const iconHeight = isLarge ? 84 : isSmall ? 40 : 54;
  const titleClass = isLarge ? 'text-4xl' : isSmall ? 'text-xl' : 'text-2xl';

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
      className={`logo-container flex items-center gap-3 ${onClick ? 'cursor-pointer' : ''}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '0.5rem' : '0.85rem',
        textDecoration: 'none',
      }}
      aria-label="LittleTales Home"
    >
      {/* SVG Open Storybook with Magic Star */}
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox="0 0 100 100"
        className="logo-mark"
        style={{
          filter: 'drop-shadow(0 4px 10px rgba(14, 165, 233, 0.25))',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bookCover" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="bookPages" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>

        {/* Book Outer Spine & Cover */}
        <path
          d="M 12 74 Q 50 82 50 78 Q 50 82 88 74 L 88 32 Q 50 40 50 36 Q 50 40 12 32 Z"
          fill="url(#bookCover)"
        />

        {/* Left Open Page */}
        <path
          d="M 15 32 Q 50 38 50 35 L 50 74 Q 50 77 15 71 Z"
          fill="url(#bookPages)"
          stroke="#e2e8f0"
          strokeWidth="1.5"
        />
        {/* Left Page Text Lines */}
        <line x1="22" y1="44" x2="42" y2="47" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="22" y1="52" x2="40" y2="55" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="22" y1="60" x2="36" y2="62" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />

        {/* Right Open Page */}
        <path
          d="M 50 35 Q 50 38 85 32 L 85 71 Q 50 77 50 74 Z"
          fill="url(#bookPages)"
          stroke="#e2e8f0"
          strokeWidth="1.5"
        />
        {/* Right Page Text Lines */}
        <line x1="58" y1="47" x2="78" y2="44" stroke="#fbcfe8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="58" y1="55" x2="76" y2="52" stroke="#fbcfe8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="58" y1="62" x2="72" y2="60" stroke="#fbcfe8" strokeWidth="2.5" strokeLinecap="round" />

        {/* Book Center Fold Ribbon */}
        <path d="M 50 34 L 50 84 Q 54 87 50 90 Q 46 87 50 84" stroke="#f43f5e" strokeWidth="3" fill="#f43f5e" strokeLinecap="round" />

        {/* Magical Glowing Star Rising from Center */}
        <g transform="translate(50, 22)">
          {/* Sparkle beams */}
          <line x1="0" y1="-14" x2="0" y2="14" stroke="#fde047" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <line x1="-14" y1="0" x2="14" y2="0" stroke="#fde047" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          {/* Main 5-point star */}
          <polygon
            points="0,-12 3.5,-3.5 12,0 3.5,3.5 0,12 -3.5,3.5 -12,0 -3.5,-3.5"
            fill="url(#starGlow)"
            filter="drop-shadow(0 0 6px #facc15)"
          />
          <circle cx="0" cy="0" r="3" fill="#ffffff" />
        </g>
      </svg>

      {/* Typography */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: isLarge ? '2.5rem' : isSmall ? '1.4rem' : '1.85rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 40%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Little<span style={{ color: '#f59e0b', WebkitTextFillColor: '#f59e0b' }}>Tales</span>
        </span>
        {showTagline && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: isLarge ? '1.05rem' : '0.85rem',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              marginTop: '0.15rem',
            }}
          >
            Little stories. Big adventures.
          </span>
        )}
      </div>
    </div>
  );
}
