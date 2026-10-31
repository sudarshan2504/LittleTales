import React, { useState } from 'react';
import ParallaxScene from '../components/ParallaxScene';
import NarrationControls from '../components/NarrationControls';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Sparkles } from 'lucide-react';

export default function StoryReaderPage({
  story,
  onBackToLibrary,
  onFinishStory,
}) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  const totalScenes = story.scenes.length;
  const currentScene = story.scenes[currentSceneIndex];
  const isFirstScene = currentSceneIndex === 0;
  const isLastScene = currentSceneIndex === totalScenes - 1;

  const handleNext = () => {
    if (isLastScene) {
      onFinishStory();
    } else {
      setCurrentSceneIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstScene) {
      setCurrentSceneIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Reader Navigation Bar */}
      <header
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '2px solid #e2e8f0',
          padding: '0.85rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div
          className="app-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Back to Library Button */}
          <button
            type="button"
            onClick={onBackToLibrary}
            className="btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.95rem',
            }}
            aria-label="Back to story library"
          >
            <ArrowLeft size={18} />
            <span>Library</span>
          </button>

          {/* Story Title & Category */}
          <div style={{ textAlign: 'center' }}>
            <h1
              style={{
                fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)',
                fontWeight: 700,
                color: 'var(--color-text-dark)',
                margin: 0,
              }}
            >
              {story.title}
            </h1>
            <span
              style={{
                fontSize: '0.82rem',
                fontFamily: 'var(--font-heading)',
                color: '#0284c7',
                fontWeight: 600,
              }}
            >
              {story.category} • Character: {story.character.name}
            </span>
          </div>

          {/* Scene Dots / Step Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
            aria-label={`Scene ${currentSceneIndex + 1} of ${totalScenes}`}
          >
            {story.scenes.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSceneIndex(idx)}
                style={{
                  width: idx === currentSceneIndex ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '9999px',
                  backgroundColor: idx === currentSceneIndex ? '#0284c7' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  padding: 0,
                  minHeight: '24px',
                  minWidth: '10px',
                }}
                aria-label={`Jump to scene ${idx + 1}`}
                aria-current={idx === currentSceneIndex ? 'step' : undefined}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main Story Reader Stage */}
      <main style={{ flexGrow: 1, padding: '1.5rem 0 3rem' }}>
        <div className="app-container" style={{ maxWidth: '1080px' }}>
          {/* 2D Parallax Interactive Scene Canvas */}
          <div style={{ marginBottom: '1.5rem' }}>
            <ParallaxScene
              story={story}
              currentSceneIndex={currentSceneIndex}
            />
          </div>

          {/* Narration & Reading Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '2px solid #bae6fd',
              boxShadow: '0 8px 30px rgba(14, 165, 233, 0.12)',
              padding: '2rem 2.2rem',
              marginBottom: '2rem',
              position: 'relative',
            }}
          >
            {/* Audio Narration Control Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid #f1f5f9',
                paddingBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={22} color="#0284c7" />
                <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-dark)' }}>
                  {currentScene.title}
                </h2>
              </div>

              {/* Web Speech Narration Controller */}
              <NarrationControls textToRead={currentScene.narration} />
            </div>

            {/* Narration Text in Large Child-Friendly Typography */}
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.25rem, 2.8vw, 1.6rem)',
                fontWeight: 500,
                color: 'var(--color-text-main)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {currentScene.narration}
            </p>
          </div>

          {/* Scene Navigation Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={isFirstScene}
              className="btn-secondary"
              style={{
                opacity: isFirstScene ? 0.35 : 1,
                cursor: isFirstScene ? 'not-allowed' : 'pointer',
                padding: '0.85rem 1.6rem',
                fontSize: '1.05rem',
              }}
              aria-label="Previous scene"
            >
              <ChevronLeft size={22} />
              <span>Previous Scene</span>
            </button>

            {/* Scene Counter text */}
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
              }}
            >
              Scene {currentSceneIndex + 1} of {totalScenes}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="btn-primary"
              style={{
                padding: '0.85rem 1.8rem',
                fontSize: '1.05rem',
              }}
              aria-label={isLastScene ? 'Begin spelling challenge' : 'Next scene'}
            >
              <span>{isLastScene ? 'Start Spelling Quest!' : 'Next Scene'}</span>
              {isLastScene ? <Sparkles size={20} /> : <ChevronRight size={22} />}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
