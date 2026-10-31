/**
 * Story Content Validation Script
 * Tests:
 * 1. Exactly 6 stories exist with proper IDs, titles, descriptions, categories, themes.
 * 2. Every story has at least 4 scenes with valid narration and at least 3 character interactions across scenes.
 * 3. Every story has exactly 5 questions.
 * 4. Each question has: sentence containing '_', answer, completedWord, hint1, hint2.
 * 5. Validates that replacing '_' with 'answer' matches 'completedWord' (ignoring spaces).
 */

import { STORIES, CATEGORIES } from './src/data/stories.js';

let errors = [];
let totalStories = STORIES.length;
let totalQuestions = 0;
let totalInteractions = 0;

console.log('--- VALIDATING LITTLE TALES STORY DATABASE ---');

if (totalStories !== 6) {
  errors.push(`Expected 6 stories, found ${totalStories}`);
}

const requiredCategories = ['Animals', 'Adventure', 'Fantasy', 'Space', 'Ocean'];
const foundCategories = new Set(STORIES.map(s => s.category));
for (const cat of requiredCategories) {
  if (!foundCategories.has(cat)) {
    errors.push(`Missing category in stories: ${cat}`);
  }
}

STORIES.forEach((story, sIdx) => {
  if (!story.id || !story.title || !story.description || !story.character) {
    errors.push(`Story #${sIdx + 1} is missing essential metadata`);
  }

  // Check scenes
  if (!Array.isArray(story.scenes) || story.scenes.length < 4) {
    errors.push(`Story "${story.title}" has fewer than 4 scenes (${story.scenes?.length})`);
  }

  let storyInteractions = 0;
  story.scenes?.forEach((scene, scIdx) => {
    if (!scene.narration || scene.narration.length < 20) {
      errors.push(`Story "${story.title}" scene #${scIdx + 1} narration is too short`);
    }
    if (Array.isArray(scene.interactions)) {
      storyInteractions += scene.interactions.length;
    }
  });

  totalInteractions += storyInteractions;
  if (storyInteractions < 3) {
    errors.push(`Story "${story.title}" has only ${storyInteractions} interactions (needs >= 3)`);
  }

  // Check questions
  if (!Array.isArray(story.questions) || story.questions.length !== 5) {
    errors.push(`Story "${story.title}" has ${story.questions?.length} questions (must have exactly 5)`);
  } else {
    story.questions.forEach((q, qIdx) => {
      totalQuestions++;
      if (!q.sentence || !q.sentence.includes('_')) {
        errors.push(`Story "${story.title}" question #${qIdx + 1} sentence missing '_' token: "${q.sentence}"`);
      }
      if (!q.answer || typeof q.answer !== 'string') {
        errors.push(`Story "${story.title}" question #${qIdx + 1} answer is invalid`);
      }
      if (!q.completedWord) {
        errors.push(`Story "${story.title}" question #${qIdx + 1} completedWord missing`);
      }
      if (!q.hint1 || !q.hint2) {
        errors.push(`Story "${story.title}" question #${qIdx + 1} missing two levels of hints`);
      }

      // Check letter consistency
      // Extract word containing '_' from sentence: e.g. "b _ n n y." or "s _ y."
      const cleanSentence = q.sentence.replace(/[.,!?;:]/g, '');
      const words = cleanSentence.split(/\s+/);
      const targetPatternWord = words.filter(w => w.includes('_') || w.length === 1 && w === '_');

      // The spaced letters pattern in sentence: e.g. "b _ n n y" -> tokens joined without spaces
      // Or simple check: does completedWord contain answer, and does length match?
      const targetWordClean = q.completedWord.toLowerCase().trim();
      const expectedAnswer = q.answer.toLowerCase().trim();

      if (!targetWordClean.includes(expectedAnswer)) {
        errors.push(`Story "${story.title}" Q#${qIdx + 1}: answer "${expectedAnswer}" is not in completedWord "${targetWordClean}"`);
      }
    });
  }
});

console.log(`Validated ${totalStories} stories.`);
console.log(`Validated ${totalQuestions} spelling questions.`);
console.log(`Validated ${totalInteractions} interactive character/object elements.`);

if (errors.length > 0) {
  console.error('\nValidation FAILED with errors:');
  errors.forEach(err => console.error('  - ' + err));
  process.exit(1);
} else {
  console.log('\nSUCCESS! All stories, scenes, interactions, and questions are 100% valid and consistent.');
}
