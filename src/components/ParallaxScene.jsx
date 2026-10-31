import React, { useState, useEffect, useRef } from 'react';
import EnvironmentArt from './EnvironmentArt';
import StoryCharacter from './CharacterArt';
import { Sparkles, Volume2 } from 'lucide-react';

/**
 * Advanced 2D Parallax Scene
 * Moves 6 distinct SVG environment and character layers at calibrated speed multipliers:
 * Layer 1 (Sky): 0.04
 * Layer 2 (Distant Mountains): 0.10
 * Layer 3 (Mid-distance Canopy/Cosmos): 0.22
 * Layer 4 (Ground Stage): 0.40
 * Layer 5 (Characters & Interactive Hotspots): 0.65
 * Layer 6 (Foreground Flora/Bubbles): 1.10
 *
 * Fully keyboard-accessible interactive hotspots with speech bubbles and feedback.
 */
export default function ParallaxScene({
  story,
  currentSceneIndex,
  onInteractionTrigger,
}) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [activeInteraction, setActiveInteraction] = useState(null);
  const [characterAction, setCharacterAction] = useState('idle');

  const currentScene = story.scenes[currentSceneIndex] || story.scenes[0];
  const theme = story.theme || 'forest';

  // Mouse move parallax calculation
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

    setOffset({
      x: xRatio * 60,
      y: yRatio * 35,
    });
  };

  // Touch move support for tablets and phones
  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (touch.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (touch.clientY - rect.top) / rect.height - 0.5;

    setOffset({
      x: Math.max(-30, Math.min(30, xRatio * 50)),
      y: Math.max(-20, Math.min(20, yRatio * 30)),
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  // Reset character action when scene changes
  useEffect(() => {
    setActiveInteraction(null);
    setCharacterAction('idle');
  }, [currentSceneIndex, story.id]);

  // Handle clicking or activating an interactive hotspot
  const triggerHotspot = (interaction) => {
    setActiveInteraction(interaction);
    setCharacterAction(interaction.action || 'hop');

    if (onInteractionTrigger) {
      onInteractionTrigger(interaction);
    }

    // Auto-dismiss speech bubble after 4.5 seconds
    setTimeout(() => {
      setActiveInteraction((prev) => (prev?.id === interaction.id ? null : prev));
    }, 4500);
  };

  return (
    <div
      ref={containerRef}
      className="parallax-stage"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      aria-label={`Interactive scene: ${currentScene.title}`}
      role="region"
      style={{
        position: 'relative',
        width: '100%',
        height: '480px',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 16px 40px -10px rgba(15, 23, 42, 0.16)',
        backgroundColor: '#0f172a',
      }}
    >
      {/* LAYER 1: Deep Sky & Celestial Bodies (0.04x) */}
      <div
        className="parallax-layer"
        style={{
          transform: `translate3d(${offset.x * 0.04}px, ${offset.y * 0.04}px, 0)`,
        }}
      >
        <EnvironmentArt theme={theme} layer={1} />
      </div>

      {/* LAYER 2: Distant Mountains & Cosmic Vistas (0.10x) */}
      <div
        className="parallax-layer"
        style={{
          transform: `translate3d(${offset.x * 0.1}px, ${offset.y * 0.1}px, 0)`,
        }}
      >
        <EnvironmentArt theme={theme} layer={2} />
      </div>

      {/* LAYER 3: Midground Forest Canopy / Asteroids / Reefs (0.22x) */}
      <div
        className="parallax-layer"
        style={{
          transform: `translate3d(${offset.x * 0.22}px, ${offset.y * 0.22}px, 0)`,
        }}
      >
        <EnvironmentArt theme={theme} layer={3} />
      </div>

      {/* LAYER 4: Ground Stage, Burrow, Platform, Seabed (0.40x) */}
      <div
        className="parallax-layer"
        style={{
          transform: `translate3d(${offset.x * 0.4}px, ${offset.y * 0.4}px, 0)`,
        }}
      >
        <EnvironmentArt theme={theme} layer={4} />
      </div>

      {/* LAYER 5: Main Character & Interactive Objects (0.65x) */}
      <div
        className="parallax-layer"
        style={{
          transform: `translate3d(${offset.x * 0.65}px, ${offset.y * 0.65}px, 0)`,
          pointerEvents: 'auto',
        }}
      >
        {/* Main Story Hero Character */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            cursor: 'pointer',
          }}
          onClick={() => {
            const charHotspot = currentScene.interactions?.find((i) => i.type === 'character') || {
              id: 'char-direct',
              label: story.character.name,
              speech: `Hi, I am ${story.character.name}! Keep exploring with me!`,
              action: 'hop',
            };
            triggerHotspot(charHotspot);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              const charHotspot = currentScene.interactions?.find((i) => i.type === 'character') || {
                id: 'char-direct',
                label: story.character.name,
                speech: `Hi, I am ${story.character.name}! Keep exploring with me!`,
                action: 'hop',
              };
              triggerHotspot(charHotspot);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Interact with ${story.character.name}`}
        >
          <StoryCharacter storyId={story.id} action={characterAction} size={190} />
        </div>

        {/* Scene Interactive Hotspots */}
        {currentScene.interactions?.map((item) => {
          const isActive = activeInteraction?.id === item.id;
          return (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 30,
              }}
            >
              <button
                type="button"
                className="interactive-hotspot"
                onClick={() => triggerHotspot(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    triggerHotspot(item);
                  }
                }}
                aria-label={`Interact with ${item.label}`}
                title={`Click to interact with ${item.label}`}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  border: '3px solid #38bdf8',
                  boxShadow: '0 4px 14px rgba(14, 165, 233, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  animation: 'gentleBreathe 3s ease-in-out infinite',
                }}
              >
                <Sparkles size={22} color="#0284c7" />
              </button>

              {/* Speech Bubble */}
              {isActive && (
                <div
                  className="speech-bubble"
                  role="status"
                  aria-live="polite"
                  style={{
                    position: 'absolute',
                    bottom: '62px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    minWidth: '200px',
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 700, color: '#0369a1', fontSize: '0.88rem' }}>
                    {item.label}
                  </p>
                  <p style={{ margin: '0.2rem 0 0 0', color: '#1e293b', fontSize: '0.92rem' }}>
                    "{item.speech}"
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* LAYER 6: Foreground Grass / Wildflowers / Bubbles (1.10x) */}
      <div
        className="parallax-layer"
        style={{
          transform: `translate3d(${offset.x * 1.1}px, ${offset.y * 1.1}px, 0)`,
          pointerEvents: 'none',
          zIndex: 40,
        }}
      >
        <EnvironmentArt theme={theme} layer={6} />
      </div>

      {/* Floating Scene Title Banner */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '20px',
          zIndex: 45,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          padding: '0.45rem 1.1rem',
          borderRadius: '9999px',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#22c55e',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: 'var(--color-text-dark)',
          }}
        >
          Scene {currentSceneIndex + 1}: {currentScene.title}
        </span>
      </div>

      {/* Interactive Helper Pill in Bottom Corner */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '20px',
          zIndex: 45,
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(6px)',
          color: '#ffffff',
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          pointerEvents: 'none',
        }}
      >
        <Sparkles size={14} color="#fde047" />
        <span>Tap characters & sparkles to interact!</span>
      </div>
    </div>
  );
}
