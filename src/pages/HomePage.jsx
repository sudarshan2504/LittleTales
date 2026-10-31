import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoryGrid from '../components/StoryGrid';
import StoryCharacter from '../components/CharacterArt';
import { BookOpen, Sparkles, Compass, ArrowDown } from 'lucide-react';

export default function HomePage({
  stories,
  onSelectStory,
  onNavigate,
  progress,
}) {
  const collectionRef = useRef(null);

  const scrollToStories = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentPage="home" onNavigate={onNavigate} progress={progress} />

      <main style={{ flexGrow: 1 }}>
        {/* HERO SECTION with Illustrated Landscape */}
        <section
          style={{
            position: 'relative',
            backgroundColor: '#fdfbf7',
            borderBottom: '2px solid #e2e8f0',
            overflow: 'hidden',
            padding: '3.5rem 0 0',
          }}
          aria-label="Welcome Hero"
        >
          <div className="app-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
            {/* Friendly Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#e0f2fe',
                color: '#0369a1',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                boxShadow: '0 2px 8px rgba(14, 165, 233, 0.15)',
              }}
            >
              <Sparkles size={18} color="#0284c7" />
              <span>Magical 2D Parallax Storybooks for Kids</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: 700,
                color: 'var(--color-text-dark)',
                maxWidth: '820px',
                margin: '0 auto 1.25rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Your Next Adventure <span style={{ color: '#0284c7' }}>Awaits!</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'var(--color-text-muted)',
                maxWidth: '620px',
                margin: '0 auto 2.2rem',
                lineHeight: 1.6,
              }}
            >
              Discover magical worlds, meet wonderful characters, and learn new words along the way.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={scrollToStories}
                className="btn-primary"
                style={{
                  padding: '0.9rem 2.2rem',
                  fontSize: '1.15rem',
                }}
              >
                <BookOpen size={20} />
                <span>Explore Stories</span>
                <ArrowDown size={18} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('adventures')}
                className="btn-secondary"
                style={{
                  padding: '0.9rem 1.8rem',
                  fontSize: '1.1rem',
                }}
              >
                <Compass size={20} color="#ea580c" />
                <span>My Adventures</span>
              </button>
            </div>
          </div>

          {/* Layered Illustrated Landscape at Bottom of Hero */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '240px',
              marginTop: '1.5rem',
              overflow: 'hidden',
            }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1440 240"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <defs>
                <linearGradient id="heroHillFar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#bae6fd" />
                  <stop offset="100%" stopColor="#7dd3fc" />
                </linearGradient>
                <linearGradient id="heroHillMid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#86efac" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
                <linearGradient id="heroHillFront" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
              </defs>

              {/* Far Rolling Hills */}
              <path d="M 0 140 Q 380 70 760 120 Q 1120 60 1440 130 L 1440 240 L 0 240 Z" fill="url(#heroHillFar)" opacity="0.65" />
              {/* Mid Green Hills */}
              <path d="M 0 170 Q 320 120 680 160 Q 1060 110 1440 165 L 1440 240 L 0 240 Z" fill="url(#heroHillMid)" opacity="0.8" />
              {/* Foreground Rolling Meadow */}
              <path d="M 0 195 Q 360 160 740 185 Q 1120 150 1440 190 L 1440 240 L 0 240 Z" fill="url(#heroHillFront)" />
            </svg>

            {/* Character Cameos standing happily on the hills */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '12%',
                transform: 'scale(0.65)',
                transformOrigin: 'bottom center',
              }}
            >
              <StoryCharacter storyId="lost-bunny" action="hop" size={160} />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%) scale(0.7)',
                transformOrigin: 'bottom center',
              }}
            >
              <StoryCharacter storyId="leo-lion" action="roar" size={170} />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '12%',
                transform: 'scale(0.65)',
                transformOrigin: 'bottom center',
              }}
            >
              <StoryCharacter storyId="mia-space" action="float" size={160} />
            </div>
          </div>
        </section>

        {/* STORYBOOK COLLECTION SECTION */}
        <div ref={collectionRef} className="app-container" style={{ padding: '3.5rem 0' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 1.5rem' }}>
            <h2
              id="story-collection-heading"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                fontWeight: 700,
                color: 'var(--color-text-dark)',
                marginBottom: '0.65rem',
              }}
            >
              Pick Your Storybook
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
              Select a magical adventure below. Read, explore scenes, interact with characters, and solve the missing-letter spelling quest!
            </p>
          </div>

          {/* Stories Grid with Category Filters */}
          <StoryGrid stories={stories} onSelectStory={onSelectStory} />
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
