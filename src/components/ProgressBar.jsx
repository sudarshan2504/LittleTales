import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function ProgressBar({
  current,
  total,
  label = 'Progress',
  accentColor = '#0284c7',
}) {
  const percentage = Math.min(100, Math.max(0, Math.round((current / total) * 100)));

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.45rem',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.92rem',
          fontWeight: 600,
          color: 'var(--color-text-dark)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Star size={16} fill="#f59e0b" color="#f59e0b" />
          {label}
        </span>
        <span style={{ color: '#0369a1' }}>
          {current} of {total}
        </span>
      </div>

      <div
        style={{
          height: '14px',
          backgroundColor: '#e2e8f0',
          borderRadius: '9999px',
          overflow: 'hidden',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid #cbd5e1',
        }}
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${label}: ${current} of ${total}`}
      >
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, #38bdf8 0%, #0284c7 60%, #a855f7 100%)',
            borderRadius: '9999px',
            transition: 'width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: '0 0 10px rgba(14, 165, 233, 0.45)',
          }}
        />
      </div>
    </div>
  );
}
