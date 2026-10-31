import React, { useEffect } from 'react';
import RewardAnimation from '../components/RewardAnimation';
import StoryCharacter from '../components/CharacterArt';
import { RotateCcw, BookOpen, Star, Award, Sparkles } from 'lucide-react';
import { recordStoryCompleted } from '../utils/storage';

export default function CompletionPage({
  story,
  score,
  totalQuestions,
  onReplay,
  onReturnToLibrary,
}) {
  // Save progress safely to LocalStorage on mount
  useEffect(() => {
    try {
      recordStoryCompleted(story.id, score, totalQuestions);
    } catch (e) {
      console.warn('Storage save error on completion', e);
    }
  }, [story.id, score, totalQuestions]);

  const isPerfect = score === totalQuestions;
  const isGood = score >= 3;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#fef9c3',
        backgroundImage: 'radial-gradient(#fde047 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1.25rem',
      }}
    >
      <div
        className="animate-pop-in"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '32px',
          padding: '3rem 2.5rem',
          maxWidth: '620px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 24px 60px -15px rgba(245, 158, 11, 0.25)',
          border: '3px solid #fef08a',
        }}
      >
        {/* Confetti & Star Reward Emitter */}
        <RewardAnimation trigger={true} />

        {/* Celebrating Character Animation */}
        <div style={{ marginBottom: '1.25rem' }}>
          <StoryCharacter storyId={story.id} action="celebrate" size={170} />
        </div>

        {/* Congratulatory Title */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            fontWeight: 700,
            color: 'var(--color-text-dark)',
            marginBottom: '0.5rem',
          }}
        >
          {isPerfect ? 'Fantastic Work!' : isGood ? 'Great Job!' : 'Super Effort!'}
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            color: '#0284c7',
            fontWeight: 600,
            marginBottom: '1.75rem',
          }}
        >
          You helped {story.character.name} complete the story!
        </p>

        {/* Real Score Box */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '2px solid #e2e8f0',
            borderRadius: '20px',
            padding: '1.5rem',
            marginBottom: '2rem',
            display: 'inline-block',
            minWidth: '260px',
          }}
        >
          <span
            style={{
              fontSize: '0.92rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 700,
              display: 'block',
              marginBottom: '0.35rem',
            }}
          >
            Spelling Quest Score
          </span>

          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 700,
              color: isPerfect ? '#16a34a' : '#d97706',
              lineHeight: 1.1,
            }}
          >
            {score} <span style={{ fontSize: '1.75rem', color: '#64748b', fontWeight: 500 }}>out of</span> {totalQuestions}
          </div>

          <p
            style={{
              marginTop: '0.5rem',
              fontSize: '0.95rem',
              color: 'var(--color-text-dark)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
            }}
          >
            {isPerfect
              ? '🌟 Perfect score on the first try! You are a master speller!'
              : isGood
              ? '✨ Well done! You solved every word quest!'
              : '🌱 Great learning practice! Play again to boost your score!'}
          </p>
        </div>

        {/* Achievement Badge Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#fef3c7',
            border: '1.5px solid #fde047',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            marginBottom: '2.5rem',
            color: '#b45309',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}
        >
          <Award size={20} color="#f59e0b" />
          <span>Badge Earned: {story.character.name}’s Reading Star</span>
        </div>

        {/* Replay & Library Actions */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={onReplay}
            className="btn-accent"
            style={{
              padding: '0.85rem 1.8rem',
              fontSize: '1.1rem',
            }}
            aria-label="Replay this story and improve score"
          >
            <RotateCcw size={20} />
            <span>Play Again</span>
          </button>

          <button
            type="button"
            onClick={onReturnToLibrary}
            className="btn-primary"
            style={{
              padding: '0.85rem 1.8rem',
              fontSize: '1.1rem',
            }}
            aria-label="Return to story library"
          >
            <BookOpen size={20} />
            <span>Story Library</span>
          </button>
        </div>
      </div>
    </div>
  );
}
