import React, { useState, useEffect } from 'react';
import { STORIES } from './data/stories';
import { getProgress, recordStoryStarted } from './utils/storage';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import StoryReaderPage from './pages/StoryReaderPage';
import SpellingGamePage from './pages/SpellingGamePage';
import CompletionPage from './pages/CompletionPage';
import AdventuresPage from './pages/AdventuresPage';
import ParentCornerPage from './pages/ParentCornerPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('intro'); // 'intro' | 'home' | 'reader' | 'spelling' | 'completion' | 'adventures' | 'parent-corner'
  const [selectedStory, setSelectedStory] = useState(null);
  const [lastScore, setLastScore] = useState({ score: 0, total: 5 });
  const [progress, setProgress] = useState(() => getProgress());

  // Keep progress refreshed from storage
  useEffect(() => {
    try {
      const current = getProgress();
      setProgress(current);
    } catch (e) {
      console.warn('Storage sync error', e);
    }
  }, [currentPage]);

  // Handle selecting a story to read
  const handleSelectStory = (story) => {
    setSelectedStory(story);
    const updated = recordStoryStarted(story.id);
    setProgress(updated);
    setCurrentPage('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle finishing story scenes -> go to spelling quest
  const handleFinishStory = () => {
    setCurrentPage('spelling');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle completing spelling quest -> go to rewards screen
  const handleCompleteSpelling = (score, total) => {
    setLastScore({ score, total });
    setCurrentPage('completion');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle replaying the current story
  const handleReplayStory = () => {
    if (selectedStory) {
      setCurrentPage('reader');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
    }
  };

  // Navigation router
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render view depending on currentPage state
  return (
    <div className="littletales-app">
      {currentPage === 'intro' && (
        <IntroPage onStart={() => setCurrentPage('home')} />
      )}

      {currentPage === 'home' && (
        <HomePage
          stories={STORIES}
          onSelectStory={handleSelectStory}
          onNavigate={handleNavigate}
          progress={progress}
        />
      )}

      {currentPage === 'reader' && selectedStory && (
        <StoryReaderPage
          key={selectedStory.id}
          story={selectedStory}
          onBackToLibrary={() => setCurrentPage('home')}
          onFinishStory={handleFinishStory}
        />
      )}

      {currentPage === 'spelling' && selectedStory && (
        <SpellingGamePage
          key={`${selectedStory.id}-spelling`}
          story={selectedStory}
          onCompleteGame={handleCompleteSpelling}
          onBackToStory={() => setCurrentPage('reader')}
        />
      )}

      {currentPage === 'completion' && selectedStory && (
        <CompletionPage
          key={`${selectedStory.id}-completion`}
          story={selectedStory}
          score={lastScore.score}
          totalQuestions={lastScore.total}
          onReplay={handleReplayStory}
          onReturnToLibrary={() => setCurrentPage('home')}
        />
      )}

      {currentPage === 'adventures' && (
        <AdventuresPage
          stories={STORIES}
          progress={progress}
          onProgressUpdated={(newProg) => setProgress(newProg)}
          onSelectStory={handleSelectStory}
          onNavigate={handleNavigate}
        />
      )}

      {currentPage === 'parent-corner' && (
        <ParentCornerPage
          progress={progress}
          onProgressUpdated={(newProg) => setProgress(newProg)}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
