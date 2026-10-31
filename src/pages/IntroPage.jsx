import React from 'react';
import Logo from '../components/Logo';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function IntroPage({ onStart }) {
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 60%, #fed7aa 100%)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}
    >
      {/* Drifting Clouds in Background */}
      <div
        className="animate-float-cloud"
        style={{
          position: 'absolute',
          top: '12%',
          left: '8%',
          opacity: 0.65,
          pointerEvents: 'none',
        }}
      >
        <svg width="180" height="90" viewBox="0 0 180 90" fill="#ffffff">
          <path d="M 20 60 Q 30 20 70 30 Q 100 10 130 35 Q 160 30 170 60 Q 150 85 20 80 Z" />
        </svg>
      </div>

      <div
        className="animate-float-cloud"
        style={{
          position: 'absolute',
          top: '22%',
          right: '10%',
          opacity: 0.55,
          animationDelay: '-6s',
          pointerEvents: 'none',
        }}
      >
        <svg width="220" height="110" viewBox="0 0 220 110" fill="#ffffff">
          <path d="M 30 75 Q 40 25 90 35 Q 130 15 170 45 Q 200 40 210 75 Q 190 105 30 100 Z" />
        </svg>
      </div>

      {/* Twinkling Decorative Stars */}
      <div
        style={{ position: 'absolute', top: '15%', right: '28%', pointerEvents: 'none' }}
        className="animate-twinkle"
      >
        <Sparkles size={28} color="#f59e0b" />
      </div>
      <div
        style={{ position: 'absolute', top: '35%', left: '16%', pointerEvents: 'none', animationDelay: '1.2s' }}
        className="animate-twinkle"
      >
        <Sparkles size={22} color="#f59e0b" />
      </div>
      <div
        style={{ position: 'absolute', bottom: '25%', right: '18%', pointerEvents: 'none', animationDelay: '0.6s' }}
        className="animate-twinkle"
      >
        <Sparkles size={26} color="#f43f5e" />
      </div>

      {/* Main Intro Card */}
      <div
        className="animate-pop-in"
        style={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          borderRadius: '36px',
          padding: '3.5rem 2.5rem',
          maxWidth: '560px',
          width: '100%',
          boxShadow: '0 24px 50px -12px rgba(14, 165, 233, 0.25)',
          border: '3px solid #ffffff',
        }}
      >
        {/* Animated Brand Logo */}
        <div style={{ marginBottom: '1.8rem', display: 'flex', justifyContent: 'center' }}>
          <Logo size="large" showTagline={true} />
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.15rem',
            color: 'var(--color-text-main)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}
        >
          Step inside a magical world of interactive storybooks, meet lovable animated characters, and solve fun spelling quests!
        </p>

        {/* Start Button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', alignItems: 'center' }}>
          <button
            type="button"
            onClick={onStart}
            className="btn-primary"
            style={{
              padding: '1rem 2.8rem',
              fontSize: '1.3rem',
              borderRadius: '9999px',
              boxShadow: '0 6px 20px rgba(2, 132, 199, 0.4)',
            }}
            aria-label="Start Your Adventure"
          >
            <span>Start Your Adventure</span>
            <ArrowRight size={24} />
          </button>

          {/* Quick Skip Link */}
          <button
            type="button"
            onClick={onStart}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0.4rem 0.8rem',
              borderRadius: '9999px',
            }}
          >
            Skip to Stories →
          </button>
        </div>
      </div>
    </main>
  );
}
