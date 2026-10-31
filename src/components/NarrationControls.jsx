import React, { useState, useEffect } from 'react';
import {
  isSpeechSynthesisSupported,
  speakSceneNarration,
  pauseNarration,
  resumeNarration,
  stopNarration,
} from '../utils/speech';
import { Volume2, VolumeX, Pause, Play, AlertCircle } from 'lucide-react';

export default function NarrationControls({ textToRead }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const supported = isSpeechSynthesisSupported();

  // Stop narration when text changes (e.g. moving to another scene) or unmounting
  useEffect(() => {
    stopNarration();
    setIsPlaying(false);
    setIsPaused(false);

    return () => {
      stopNarration();
    };
  }, [textToRead]);

  const handleStart = () => {
    if (!supported) return;

    setIsPlaying(true);
    setIsPaused(false);

    speakSceneNarration(textToRead, {
      onStart: () => {
        setIsPlaying(true);
        setIsPaused(false);
      },
      onEnd: () => {
        setIsPlaying(false);
        setIsPaused(false);
      },
      onError: () => {
        setIsPlaying(false);
        setIsPaused(false);
      },
    });
  };

  const handlePause = () => {
    if (!supported) return;
    pauseNarration();
    setIsPaused(true);
  };

  const handleResume = () => {
    if (!supported) return;
    resumeNarration();
    setIsPaused(false);
  };

  const handleStop = () => {
    if (!supported) return;
    stopNarration();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!supported) {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.45rem 0.95rem',
          backgroundColor: '#f1f5f9',
          borderRadius: '9999px',
          color: 'var(--color-text-muted)',
          fontSize: '0.88rem',
          fontFamily: 'var(--font-body)',
        }}
        title="Web Speech is not supported in this browser environment."
      >
        <VolumeX size={16} />
        <span>Audio narration preview (read on screen)</span>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#ffffff',
        padding: '0.35rem 0.6rem',
        borderRadius: '9999px',
        border: '2px solid #bae6fd',
        boxShadow: '0 2px 8px rgba(14, 165, 233, 0.12)',
      }}
      role="group"
      aria-label="Story Audio Narration Controls"
    >
      {!isPlaying ? (
        <button
          type="button"
          onClick={handleStart}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 1rem',
            borderRadius: '9999px',
            border: 'none',
            backgroundColor: '#0284c7',
            color: '#ffffff',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          aria-label="Read scene aloud"
        >
          <Volume2 size={18} />
          <span>Read to Me</span>
        </button>
      ) : (
        <>
          {isPaused ? (
            <button
              type="button"
              onClick={handleResume}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: '#16a34a',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              aria-label="Resume narration"
            >
              <Play size={16} />
              <span>Resume</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePause}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: '#f59e0b',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              aria-label="Pause narration"
            >
              <Pause size={16} />
              <span>Pause</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleStop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#f8fafc',
              color: '#475569',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
            aria-label="Stop narration"
          >
            <VolumeX size={16} />
            <span>Stop</span>
          </button>
        </>
      )}

      {/* Subtle pulse indicator when speaking */}
      {isPlaying && !isPaused && (
        <span
          style={{
            fontSize: '0.8rem',
            fontFamily: 'var(--font-heading)',
            color: '#0284c7',
            paddingRight: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#0284c7',
              animation: 'bounceShort 1s ease-in-out infinite',
            }}
          />
          Listening
        </span>
      )}
    </div>
  );
}
