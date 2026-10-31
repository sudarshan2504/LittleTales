/**
 * LocalStorage wrapper with graceful in-memory fallback for private browsing
 * or restricted storage environments.
 */

const STORAGE_KEY = 'littletales_progress_v1';

const defaultProgress = {
  startedStoryIds: [],
  completedStoryIds: [],
  storyScores: {}, // { [storyId]: { bestScore: number, total: number, lastDate: string } }
  badges: [],
  totalWordsSpelled: 0,
  lastPlayedStoryId: null,
};

// In-memory fallback if LocalStorage is disabled or unavailable
let memoryStore = null;

function isLocalStorageAvailable() {
  try {
    const testKey = '__storage_test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export function getProgress() {
  if (isLocalStorageAvailable()) {
    try {
      const data = window.localStorage.getItem(STORAGE_KEY);
      if (data) {
        return { ...defaultProgress, ...JSON.parse(data) };
      }
    } catch (e) {
      console.warn('Could not read from localStorage, using memory store', e);
    }
  }
  return memoryStore || { ...defaultProgress };
}

export function saveProgress(progress) {
  const updated = { ...defaultProgress, ...progress };
  memoryStore = updated;

  if (isLocalStorageAvailable()) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not write to localStorage', e);
    }
  }
  return updated;
}

export function recordStoryStarted(storyId) {
  const current = getProgress();
  const started = new Set(current.startedStoryIds);
  started.add(storyId);

  const updated = {
    ...current,
    startedStoryIds: Array.from(started),
    lastPlayedStoryId: storyId,
  };
  return saveProgress(updated);
}

export function recordStoryCompleted(storyId, score, totalQuestions) {
  const current = getProgress();
  const completed = new Set(current.completedStoryIds);
  completed.add(storyId);

  const prevBest = current.storyScores[storyId]?.bestScore || 0;
  const bestScore = Math.max(prevBest, score);

  const newScores = {
    ...current.storyScores,
    [storyId]: {
      bestScore,
      total: totalQuestions,
      lastDate: new Date().toISOString(),
    },
  };

  // Determine badges earned
  const badges = new Set(current.badges);
  badges.add('first_steps'); // Started an adventure
  if (completed.size >= 1) badges.add('first_story'); // Completed 1 story
  if (completed.size >= 3) badges.add('story_explorer'); // Completed 3 stories
  if (completed.size >= 6) badges.add('grand_master'); // Completed all 6 stories
  if (score === totalQuestions) badges.add('perfect_speller'); // Got 100% on a spelling quest

  const updated = {
    ...current,
    completedStoryIds: Array.from(completed),
    storyScores: newScores,
    totalWordsSpelled: current.totalWordsSpelled + score,
    badges: Array.from(badges),
    lastPlayedStoryId: storyId,
  };

  return saveProgress(updated);
}

export function resetAllProgress() {
  memoryStore = { ...defaultProgress };
  if (isLocalStorageAvailable()) {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Could not remove from localStorage', e);
    }
  }
  return { ...defaultProgress };
}
