import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import SpellingQuestion from '../components/SpellingQuestion';
import StoryCharacter from '../components/CharacterArt';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function SpellingGamePage({
  story,
  onCompleteGame,
  onBackToStory,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answersLog, setAnswersLog] = useState([]); // [{ questionId, earnedPoint }]

  const totalQuestions = story.questions.length;
  const currentQuestion = story.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const handleAnswerCorrect = (earnedPoint) => {
    if (earnedPoint) {
      setScore((prev) => prev + 1);
    }
    setAnswersLog((prev) => [
      ...prev,
      { questionId: currentQuestion.id, earnedPoint },
    ]);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Calculate final score accurately
      const finalScore = answersLog.filter((a) => a.earnedPoint).length;
      onCompleteGame(finalScore, totalQuestions);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f0f9ff',
        backgroundImage: 'radial-gradient(#bae6fd 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
        padding: '2rem 1rem 4rem',
      }}
    >
      <div className="app-container" style={{ maxWidth: '820px' }}>
        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
          }}
        >
          <button
            type="button"
            onClick={onBackToStory}
            className="btn-secondary"
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.92rem',
            }}
          >
            <ArrowLeft size={16} />
            <span>Return to Story</span>
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#ffffff',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              border: '2px solid #bae6fd',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              color: '#0369a1',
            }}
          >
            <Sparkles size={18} color="#0284c7" />
            <span>Score: {score} / {totalQuestions}</span>
          </div>
        </div>

        {/* Transition Encouragement Banner */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              marginBottom: '0.75rem',
              transform: 'scale(0.8)',
            }}
          >
            <StoryCharacter storyId={story.id} action="hop" size={130} />
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              color: 'var(--color-text-dark)',
              fontWeight: 700,
              marginBottom: '0.5rem',
            }}
          >
            You did it! Now help {story.character.name} complete the story!
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto' }}>
            Type the missing letters to complete each vocabulary word from your adventure.
          </p>
        </div>

        {/* Overall Spelling Progress Bar */}
        <div style={{ marginBottom: '2.5rem' }}>
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={totalQuestions}
            label="Spelling Quest Progress"
          />
        </div>

        {/* Missing-Letter Interactive Question Card */}
        <SpellingQuestion
          key={currentQuestion.id}
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          onAnswerCorrect={handleAnswerCorrect}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={isLastQuestion}
        />
      </div>
    </div>
  );
}
