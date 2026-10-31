import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoryCharacter from '../components/CharacterArt';
import { Award, BookOpen, CheckCircle, RotateCcw, Trash2, Sparkles, Star } from 'lucide-react';
import { resetAllProgress } from '../utils/storage';

export default function AdventuresPage({
  stories,
  progress,
  onProgressUpdated,
  onSelectStory,
  onNavigate,
}) {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const completedSet = new Set(progress.completedStoryIds || []);
  const startedSet = new Set(progress.startedStoryIds || []);

  const totalStories = stories.length;
  const completedCount = completedSet.size;
  const startedCount = startedSet.size;
  const wordsSpelled = progress.totalWordsSpelled || 0;

  // Available badges definition
  const allBadges = [
    {
      id: 'first_steps',
      title: 'First Adventure',
      description: 'Began reading your first LittleTales adventure',
      icon: '🌱',
      earned: progress.badges?.includes('first_steps') || startedCount > 0,
    },
    {
      id: 'first_story',
      title: 'Story Finisher',
      description: 'Completed your very first illustrated storybook',
      icon: '📖',
      earned: progress.badges?.includes('first_story') || completedCount >= 1,
    },
    {
      id: 'story_explorer',
      title: 'Story Explorer',
      description: 'Completed 3 distinct magical adventures',
      icon: '🧭',
      earned: progress.badges?.includes('story_explorer') || completedCount >= 3,
    },
    {
      id: 'grand_master',
      title: 'Grand Storyteller',
      description: 'Completed all 6 storybooks in the library',
      icon: '👑',
      earned: progress.badges?.includes('grand_master') || completedCount >= 6,
    },
    {
      id: 'perfect_speller',
      title: 'Spelling Champ',
      description: 'Achieved a perfect 5/5 score on a spelling quest',
      icon: '⭐',
      earned: progress.badges?.includes('perfect_speller'),
    },
  ];

  const handleReset = () => {
    const cleared = resetAllProgress();
    onProgressUpdated(cleared);
    setShowConfirmReset(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fdfbf7' }}>
      <Header currentPage="adventures" onNavigate={onNavigate} progress={progress} />

      <main style={{ flexGrow: 1, padding: '3.5rem 0' }}>
        <div className="app-container" style={{ maxWidth: '960px' }}>
          {/* Page Heading */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#ffedd5',
                color: '#c2410c',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={16} />
              <span>Your Personal Reading Passport</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--color-text-dark)', marginBottom: '0.6rem' }}>
              My Adventures
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto' }}>
              See all the stories you've explored, check your spelling quest scores, and admire the achievement badges you've earned!
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '1.6rem',
                border: '2px solid #bae6fd',
                boxShadow: 'var(--shadow-card)',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#0284c7' }}>
                {startedCount} / {totalStories}
              </span>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-text-dark)', marginTop: '0.35rem' }}>
                Adventures Started
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '1.6rem',
                border: '2px solid #86efac',
                boxShadow: 'var(--shadow-card)',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#16a34a' }}>
                {completedCount} / {totalStories}
              </span>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-text-dark)', marginTop: '0.35rem' }}>
                Stories Completed
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '1.6rem',
                border: '2px solid #fde047',
                boxShadow: 'var(--shadow-card)',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#d97706' }}>
                {wordsSpelled}
              </span>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-text-dark)', marginTop: '0.35rem' }}>
                Words Spelled
              </p>
            </div>
          </div>

          {/* Achievement Badges Section */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.65rem', marginBottom: '1.25rem', color: 'var(--color-text-dark)' }}>
              Badges & Achievements
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {allBadges.map((badge) => (
                <div
                  key={badge.id}
                  style={{
                    backgroundColor: badge.earned ? '#ffffff' : '#f8fafc',
                    borderRadius: '20px',
                    padding: '1.4rem',
                    border: badge.earned ? '2px solid #fef08a' : '2px dashed #cbd5e1',
                    boxShadow: badge.earned ? '0 4px 14px rgba(245, 158, 11, 0.12)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    opacity: badge.earned ? 1 : 0.6,
                  }}
                >
                  <span style={{ fontSize: '2.2rem', flexShrink: 0 }}>{badge.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, color: badge.earned ? 'var(--color-text-dark)' : '#94a3b8' }}>
                      {badge.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', margin: '0.2rem 0 0 0' }}>
                      {badge.description}
                    </p>
                    {badge.earned && (
                      <span style={{ fontSize: '0.78rem', color: '#16a34a', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                        ✓ Unlocked
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stories Progress & Best Scores List */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.65rem', marginBottom: '1.25rem', color: 'var(--color-text-dark)' }}>
              Storybook Progress & Best Scores
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {stories.map((story) => {
                const isCompleted = completedSet.has(story.id);
                const scoreInfo = progress.storyScores?.[story.id];

                return (
                  <div
                    key={story.id}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '20px',
                      padding: '1.25rem 1.6rem',
                      border: '2px solid #f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '46px', height: '46px', flexShrink: 0 }}>
                        <StoryCharacter storyId={story.id} action="idle" size={46} />
                      </div>

                      <div>
                        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--color-text-dark)' }}>
                          {story.title}
                        </h3>
                        <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)' }}>
                          {story.category} • Character: {story.character.name}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      {isCompleted ? (
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#16a34a', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                            <CheckCircle size={18} />
                            Completed
                          </span>
                          <span style={{ fontSize: '0.85rem', color: '#d97706', fontWeight: 600 }}>
                            Best Score: {scoreInfo ? `${scoreInfo.bestScore} / ${scoreInfo.total}` : 'Complete'}
                          </span>
                        </div>
                      ) : (
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                          Not completed yet
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => onSelectStory(story)}
                        className="btn-secondary"
                        style={{
                          padding: '0.5rem 1.15rem',
                          fontSize: '0.92rem',
                        }}
                      >
                        {isCompleted ? 'Replay' : 'Start'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset Progress Danger Zone */}
          <div
            style={{
              borderTop: '2px dashed #cbd5e1',
              paddingTop: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              Want to start your reading adventure completely fresh?
            </p>

            <button
              type="button"
              onClick={() => setShowConfirmReset(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                border: '2px solid #fecaca',
                backgroundColor: '#fef2f2',
                color: '#dc2626',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Trash2 size={16} />
              <span>Reset Local Progress</span>
            </button>
          </div>
        </div>
      </main>

      {/* Confirmation Modal for Reset */}
      {showConfirmReset && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            className="animate-pop-in"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '2.5rem',
              maxWidth: '440px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
              border: '2px solid #e2e8f0',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}
            >
              <Trash2 size={28} />
            </div>

            <h3 id="reset-modal-title" style={{ fontSize: '1.4rem', color: 'var(--color-text-dark)', marginBottom: '0.65rem' }}>
              Reset Reading Progress?
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', lineHeight: 1.5, marginBottom: '2rem' }}>
              This will clear your completed stories, spelling scores, and badges from this device. Are you sure?
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setShowConfirmReset(false)}
                className="btn-secondary"
                style={{ padding: '0.65rem 1.4rem' }}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleReset}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
              >
                Yes, Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
