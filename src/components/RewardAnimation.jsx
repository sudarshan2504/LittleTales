import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Star, Sparkles } from 'lucide-react';

export default function RewardAnimation({ trigger = true }) {
  useEffect(() => {
    if (!trigger) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    try {
      // Gentle celebratory confetti burst
      const end = Date.now() + 1.8 * 1000;
      const colors = ['#38bdf8', '#facc15', '#f43f5e', '#86efac', '#c084fc'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    } catch (e) {
      console.warn('Confetti animation error', e);
    }
  }, [trigger]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        margin: '1rem 0',
      }}
      aria-hidden="true"
    >
      <Sparkles size={28} color="#f59e0b" className="animate-twinkle" />
      <Star size={36} fill="#fde047" color="#f59e0b" className="animate-bounce-short" />
      <Sparkles size={28} color="#f59e0b" className="animate-twinkle" />
    </div>
  );
}
