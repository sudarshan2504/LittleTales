import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, BookOpen, Brain, Sparkles, Lock, Trash2, Heart } from 'lucide-react';
import { resetAllProgress } from '../utils/storage';

export default function ParentCornerPage({
  progress,
  onProgressUpdated,
  onNavigate,
}) {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleReset = () => {
    const cleared = resetAllProgress();
    onProgressUpdated(cleared);
    setShowConfirmReset(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fdfbf7' }}>
      <Header currentPage="parent-corner" onNavigate={onNavigate} progress={progress} />

      <main style={{ flexGrow: 1, padding: '3.5rem 0' }}>
        <div className="app-container" style={{ maxWidth: '840px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#f3e8ff',
                color: '#7e22ce',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '1rem',
              }}
            >
              <ShieldCheck size={18} color="#9333ea" />
              <span>For Parents & Educators</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: 'var(--color-text-dark)', marginBottom: '0.75rem' }}>
              Welcome to the Parent Corner
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
              A safe, peaceful, and educational digital reading companion designed to cultivate a lifelong love of stories, vocabulary, and confident spelling.
            </p>
          </div>

          {/* Educational Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3.5rem' }}>
            {/* Pillar 1: Purpose */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '2rem',
                border: '2px solid #e2e8f0',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#e0f2fe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0284c7',
                  }}
                >
                  <BookOpen size={24} />
                </div>
                <h2 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-text-dark)' }}>
                  Our Educational Purpose
                </h2>
              </div>
              <p style={{ color: 'var(--color-text-main)', lineHeight: 1.65, fontSize: '1rem' }}>
                LittleTales was created as an antidote to over-stimulating, ad-saturated games. We believe children learn language best when reading is paired with meaningful narrative context, multisensory visuals, and gentle positive reinforcement. Each story immerses young learners in a layered world where they explore alongside friendly protagonists.
              </p>
            </div>

            {/* Pillar 2: Vocabulary & Missing-Letter Pedagogy */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '2rem',
                border: '2px solid #e2e8f0',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#dcfce7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#16a34a',
                  }}
                >
                  <Brain size={24} />
                </div>
                <h2 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-text-dark)' }}>
                  How Missing-Letter Quests Work
                </h2>
              </div>
              <p style={{ color: 'var(--color-text-main)', lineHeight: 1.65, fontSize: '1rem', marginBottom: '1rem' }}>
                Instead of passive multiple-choice clicking, LittleTales requires active keyboard typing. This stimulates orthographic mapping—the mental process of connecting sounds to written letters.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.96rem' }}>
                <li><strong>Contextual Recall:</strong> Questions reuse words from the story the child just read.</li>
                <li><strong>Two-Level Hints:</strong> Level 1 offers a semantic comprehension clue; Level 2 offers phonemic guidance.</li>
                <li><strong>Non-Punitive Feedback:</strong> Mistakes are met with gentle encouragement, allowing children to sound out words without losing their place.</li>
              </ul>
            </div>

            {/* Pillar 3: Difficulty Levels */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '2rem',
                border: '2px solid #e2e8f0',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#fef3c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d97706',
                  }}
                >
                  <Sparkles size={24} />
                </div>
                <h2 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-text-dark)' }}>
                  Calibrated Difficulty Levels
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '16px', border: '1px solid #86efac' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#16a34a', margin: '0 0 0.4rem 0' }}>Easy</h3>
                  <p style={{ fontSize: '0.9rem', color: '#14532d', margin: 0, lineHeight: 1.5 }}>
                    Focuses on single missing vowels and familiar consonant sounds in short 3-to-6 letter words.
                  </p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#fffbeb', borderRadius: '16px', border: '1px solid #fde047' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#d97706', margin: '0 0 0.4rem 0' }}>Medium</h3>
                  <p style={{ fontSize: '0.9rem', color: '#78350f', margin: 0, lineHeight: 1.5 }}>
                    Explores compound words, blends, and theme-specific vocabulary like planets and magic.
                  </p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#faf5ff', borderRadius: '16px', border: '1px solid #d8b4fe' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#7c3aed', margin: '0 0 0.4rem 0' }}>Advanced</h3>
                  <p style={{ fontSize: '0.9rem', color: '#581c87', margin: 0, lineHeight: 1.5 }}>
                    Introduces multi-syllable terms, irregular spelling patterns, and descriptive nature vocabulary.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4: Child Privacy & Local Storage */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '2rem',
                border: '2px solid #e2e8f0',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#dc2626',
                  }}
                >
                  <Lock size={24} />
                </div>
                <h2 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-text-dark)' }}>
                  Privacy & Data Protection
                </h2>
              </div>
              <p style={{ color: 'var(--color-text-main)', lineHeight: 1.65, fontSize: '1rem', marginBottom: '1.5rem' }}>
                LittleTales strictly complies with children's privacy best practices. We do not collect names, email addresses, location, or telemetry. All reading progress, completed stories, and badges are stored <strong>strictly on your local device</strong> via standard browser LocalStorage.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                  Need to clear your child's stored progress?
                </span>
                <button
                  type="button"
                  onClick={() => setShowConfirmReset(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 1.15rem',
                    borderRadius: '9999px',
                    border: '1.5px solid #fecaca',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <Trash2 size={16} />
                  <span>Reset Progress Data</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Confirmation Modal for Reset */}
      {showConfirmReset && (
        <div
          role="dialog"
          aria-modal="true"
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
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-dark)', marginBottom: '0.65rem' }}>
              Confirm Data Reset
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem' }}>
              This will erase all locally saved stories, scores, and achievement badges on this device.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setShowConfirmReset(false)}
                className="btn-secondary"
                style={{ padding: '0.6rem 1.3rem' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleReset}
                style={{
                  padding: '0.6rem 1.3rem',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  cursor: 'pointer',
                }}
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
