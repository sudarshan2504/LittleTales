import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, HelpCircle, CheckCircle, ArrowRight, RefreshCw, Star } from 'lucide-react';

export default function SpellingQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswerCorrect,
  onNextQuestion,
  isLastQuestion,
}) {
  const [typedInput, setTypedInput] = useState('');
  const [hintLevel, setHintLevel] = useState(0); // 0 = no hints, 1 = clue, 2 = letter reveal
  const [status, setStatus] = useState('idle'); // 'idle' | 'correct' | 'incorrect'
  const [attempts, setAttempts] = useState(0);
  const inputRef = useRef(null);

  // Reset state on question change & auto-focus input
  useEffect(() => {
    setTypedInput('');
    setHintLevel(0);
    setStatus('idle');
    setAttempts(0);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [question.id]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!typedInput.trim()) return;

    const sanitizedAnswer = typedInput.trim().toLowerCase();
    const expected = question.answer.toLowerCase().trim();

    if (sanitizedAnswer === expected) {
      setStatus('correct');
      // Pass whether it was solved on first try without level 2 hints
      const earnedPoint = attempts === 0 && hintLevel < 2;
      onAnswerCorrect(earnedPoint);
    } else {
      setStatus('incorrect');
      setAttempts((prev) => prev + 1);
      // Auto-suggest hint 1 on mistake if not yet shown
      if (hintLevel === 0) {
        setHintLevel(1);
      }
    }
  };

  const handleRequestHint = () => {
    if (hintLevel < 2) {
      setHintLevel((prev) => prev + 1);
    }
  };

  // Replace the missing letter token in the sentence for display
  // e.g., "Pip is a little b _ n n y." -> when correct, highlight "bunny"
  const isCorrect = status === 'correct';

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '28px',
        padding: '2.5rem 2rem',
        maxWidth: '680px',
        margin: '0 auto',
        boxShadow: '0 18px 45px -10px rgba(14, 165, 233, 0.16)',
        border: '2px solid #bae6fd',
      }}
    >
      {/* Header Info */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: '#e0f2fe',
            color: '#0369a1',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.9rem',
            fontWeight: 700,
          }}
        >
          <Sparkles size={16} />
          Word Quest {questionNumber} of {totalQuestions}
        </div>

        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: 'var(--color-text-muted)',
          }}
        >
          Difficulty: {question.difficulty}
        </span>
      </div>

      {/* Main Sentence with Missing Letters */}
      <div
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '20px',
          padding: '1.8rem 1.5rem',
          textAlign: 'center',
          marginBottom: '2rem',
          border: isCorrect ? '2px solid #86efac' : '2px solid #e2e8f0',
          transition: 'all 0.3s ease',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.65rem',
            fontWeight: 600,
            color: 'var(--color-text-dark)',
            lineHeight: 1.5,
          }}
        >
          {isCorrect ? (
            // Reveal completed word in highlighted green
            <span>
              {question.sentence.split(new RegExp('([a-zA-Z\\s]*_[a-zA-Z\\s_]*)', 'i'))[0]}
              <strong
                style={{
                  color: '#16a34a',
                  backgroundColor: '#dcfce7',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '10px',
                  border: '1.5px solid #86efac',
                  display: 'inline-block',
                }}
              >
                {question.completedWord}
              </strong>
              {question.sentence.slice(question.sentence.indexOf('.') || question.sentence.length - 1)}
            </span>
          ) : (
            <span>{question.sentence}</span>
          )}
        </p>

        {isCorrect && (
          <p
            style={{
              marginTop: '0.6rem',
              color: '#15803d',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
            }}
          >
            <CheckCircle size={20} color="#16a34a" />
            Completed word: <strong style={{ textTransform: 'capitalize' }}>{question.completedWord}</strong>!
          </p>
        )}
      </div>

      {/* Actual Text Input Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center' }}>
          <label
            htmlFor="missing-letter-input"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--color-text-dark)',
            }}
          >
            Type the missing letter{question.answer.length > 1 ? 's' : ''}:
          </label>

          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              width: '100%',
              maxWidth: '380px',
              justifyContent: 'center',
            }}
          >
            <input
              id="missing-letter-input"
              ref={inputRef}
              type="text"
              value={typedInput}
              disabled={isCorrect}
              onChange={(e) => {
                setTypedInput(e.target.value);
                if (status === 'incorrect') setStatus('idle');
              }}
              maxLength={question.answer.length + 1}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
              placeholder="_"
              style={{
                width: '100px',
                height: '64px',
                textAlign: 'center',
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 700,
                borderRadius: '16px',
                border:
                  isCorrect
                    ? '3px solid #22c55e'
                    : status === 'incorrect'
                    ? '3px solid #f43f5e'
                    : '3px solid #38bdf8',
                backgroundColor: isCorrect ? '#f0fdf4' : '#ffffff',
                color: isCorrect ? '#166534' : 'var(--color-text-dark)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                outline: 'none',
              }}
              aria-label="Type missing letter"
              aria-invalid={status === 'incorrect'}
            />

            <button
              type="submit"
              disabled={!typedInput.trim() || isCorrect}
              className="btn-accent"
              style={{
                height: '64px',
                padding: '0 1.5rem',
                fontSize: '1.15rem',
              }}
            >
              Check
            </button>
          </div>
        </div>
      </form>

      {/* Friendly Feedback Messages */}
      {status === 'correct' && (
        <div
          role="alert"
          style={{
            padding: '1rem',
            backgroundColor: '#dcfce7',
            border: '2px solid #86efac',
            borderRadius: '16px',
            color: '#14532d',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.05rem',
            fontWeight: 600,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            animation: 'popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <Sparkles size={22} color="#16a34a" />
          <span>Wonderful work! You found the missing letter!</span>
        </div>
      )}

      {status === 'incorrect' && (
        <div
          role="alert"
          style={{
            padding: '1rem',
            backgroundColor: '#fee2e2',
            border: '2px solid #fca5a5',
            borderRadius: '16px',
            color: '#991b1b',
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: 600,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            animation: 'popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <RefreshCw size={18} color="#dc2626" />
          <span>Almost there! Try sounding out the word or check the hint below.</span>
        </div>
      )}

      {/* Hint Controls & Clue Display */}
      <div
        style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        {!isCorrect && (
          <button
            type="button"
            onClick={handleRequestHint}
            disabled={hintLevel >= 2}
            style={{
              background: 'none',
              border: 'none',
              color: hintLevel >= 2 ? '#94a3b8' : '#0284c7',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: hintLevel >= 2 ? 'default' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.8rem',
              borderRadius: '9999px',
            }}
          >
            <HelpCircle size={18} />
            {hintLevel === 0 ? 'Need a hint?' : hintLevel === 1 ? 'Show another hint?' : 'All hints revealed'}
          </button>
        )}

        {/* Level 1 Hint: Semantic Clue */}
        {hintLevel >= 1 && (
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: '#fffbeb',
              border: '1.5px solid #fde047',
              borderRadius: '14px',
              color: '#854d0e',
              fontSize: '0.92rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              textAlign: 'center',
              maxWidth: '520px',
            }}
          >
            💡 <strong>Clue:</strong> {question.hint1}
          </div>
        )}

        {/* Level 2 Hint: Letter Clue */}
        {hintLevel >= 2 && (
          <div
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: '#f3e8ff',
              border: '1.5px solid #d8b4fe',
              borderRadius: '14px',
              color: '#6b21a8',
              fontSize: '0.92rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              textAlign: 'center',
              maxWidth: '520px',
            }}
          >
            ✨ <strong>Helper:</strong> {question.hint2}
          </div>
        )}
      </div>

      {/* Next Question Navigation (Enabled only when correct!) */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          type="button"
          onClick={onNextQuestion}
          disabled={!isCorrect}
          className="btn-primary"
          style={{
            padding: '0.85rem 2.2rem',
            fontSize: '1.15rem',
            opacity: isCorrect ? 1 : 0.45,
            cursor: isCorrect ? 'pointer' : 'not-allowed',
          }}
          aria-label={isLastQuestion ? 'Complete spelling quest' : 'Go to next question'}
        >
          <span>{isLastQuestion ? 'See My Reward!' : 'Next Question'}</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
