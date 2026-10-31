/**
 * LittleTales Comprehensive Automated Logic & Integration Verification
 * Tests the entire business logic, data models, state progression,
 * scoring algorithms, badge unlocking, and storage resilience.
 */

import { STORIES, CATEGORIES } from './src/data/stories.js';
import {
  getProgress,
  saveProgress,
  recordStoryStarted,
  recordStoryCompleted,
  resetAllProgress,
} from './src/utils/storage.js';
import fs from 'fs';

console.log('================================================================');
console.log('       LITTLETALES COMPREHENSIVE INTEGRATION SUITE');
console.log('================================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failCount++;
  }
}

// -----------------------------------------------------------------------------
// 1. STORY DATABASE INTEGRITY
// -----------------------------------------------------------------------------
console.log('[TEST 1] Story Database & Content Integrity');
assert(STORIES.length === 6, 'Exactly 6 storybooks exist');

const expectedIds = ['lost-bunny', 'leo-lion', 'mia-space', 'timo-turtle', 'ember-dragon', 'ocean-adventure'];
expectedIds.forEach(id => {
  const story = STORIES.find(s => s.id === id);
  assert(!!story, `Story with ID "${id}" exists`);
  assert(story?.scenes?.length >= 4, `Story "${id}" has at least 4 scenes`);
  assert(story?.questions?.length === 5, `Story "${id}" has exactly 5 spelling questions`);
});

// -----------------------------------------------------------------------------
// 2. CATEGORY FILTERS ACCURACY
// -----------------------------------------------------------------------------
console.log('\n[TEST 2] Category Filtering Logic');
const filterCounts = {
  'All': STORIES.length,
  'Animals': STORIES.filter(s => s.category === 'Animals').length,
  'Adventure': STORIES.filter(s => s.category === 'Adventure').length,
  'Fantasy': STORIES.filter(s => s.category === 'Fantasy').length,
  'Space': STORIES.filter(s => s.category === 'Space').length,
  'Ocean': STORIES.filter(s => s.category === 'Ocean').length,
};

assert(filterCounts['All'] === 6, 'All filter returns 6 stories');
assert(filterCounts['Animals'] === 2, 'Animals filter returns 2 stories (Pip, Timo)');
assert(filterCounts['Adventure'] === 1, 'Adventure filter returns 1 story (Leo)');
assert(filterCounts['Space'] === 1, 'Space filter returns 1 story (Mia)');
assert(filterCounts['Fantasy'] === 1, 'Fantasy filter returns 1 story (Ember)');
assert(filterCounts['Ocean'] === 1, 'Ocean filter returns 1 story (Bubbles)');

// -----------------------------------------------------------------------------
// 3. SPELLING QUESTION CONSISTENCY & HINTS
// -----------------------------------------------------------------------------
console.log('\n[TEST 3] Spelling Question Consistency & Multi-Level Hints');
STORIES.forEach(story => {
  story.questions.forEach((q, idx) => {
    // Sentence must have '_'
    assert(q.sentence.includes('_'), `Story "${story.id}" Q${idx + 1} has placeholder '_'`);
    // answer must be in completedWord
    const cleanWord = q.completedWord.toLowerCase();
    const cleanAns = q.answer.toLowerCase();
    assert(cleanWord.includes(cleanAns), `Story "${story.id}" Q${idx + 1} answer "${cleanAns}" matches completedWord "${cleanWord}"`);
    // 2 levels of hints
    assert(!!q.hint1 && q.hint1.length > 5, `Story "${story.id}" Q${idx + 1} has Level 1 semantic hint`);
    assert(!!q.hint2 && q.hint2.length > 5, `Story "${story.id}" Q${idx + 1} has Level 2 letter hint`);
  });
});

// -----------------------------------------------------------------------------
// 4. STORAGE & PROGRESS LIFECYCLE (Reset, Started, Completed, Badges)
// -----------------------------------------------------------------------------
console.log('\n[TEST 4] Storage State Management, Accuracy & Badges');
// Reset state first
const fresh = resetAllProgress();
assert(fresh.startedStoryIds.length === 0, 'Reset clears started stories');
assert(fresh.completedStoryIds.length === 0, 'Reset clears completed stories');

// Start story 1
const afterStart = recordStoryStarted('lost-bunny');
assert(afterStart.startedStoryIds.includes('lost-bunny'), 'Starting story records to startedStoryIds');

// Complete story 1 with imperfect score 4/5 (testing intentional error!)
const afterComp1 = recordStoryCompleted('lost-bunny', 4, 5);
assert(afterComp1.completedStoryIds.includes('lost-bunny'), 'Completed story records to completedStoryIds');
assert(afterComp1.storyScores['lost-bunny'].bestScore === 4, 'Score reflects real score 4 out of 5 (not perfect!)');
assert(afterComp1.badges.includes('first_story'), 'Earns "first_story" badge');
assert(!afterComp1.badges.includes('perfect_speller'), 'Did not falsely award "perfect_speller" for 4/5 score');

// Complete story 2 with perfect score 5/5
const afterComp2 = recordStoryCompleted('leo-lion', 5, 5);
assert(afterComp2.badges.includes('perfect_speller'), 'Awards "perfect_speller" badge on 5/5 score');

// Complete remaining stories to test grand master badge
recordStoryCompleted('mia-space', 5, 5);
recordStoryCompleted('timo-turtle', 5, 5);
recordStoryCompleted('ember-dragon', 5, 5);
const finalProg = recordStoryCompleted('ocean-adventure', 5, 5);
assert(finalProg.completedStoryIds.length === 6, 'All 6 stories completed');
assert(finalProg.badges.includes('grand_master'), 'Awards "grand_master" badge on completing all 6 stories');

// -----------------------------------------------------------------------------
// 5. CSS TOKENS & ACCESSIBILITY SPECIFICATIONS
// -----------------------------------------------------------------------------
console.log('\n[TEST 5] CSS Design System, Touch Targets & Reduced Motion');
const cssContent = fs.readFileSync('./src/index.css', 'utf-8');
assert(cssContent.includes('min-height: 44px'), 'Touch targets enforce >= 44px minimum height');
assert(cssContent.includes('min-width: 44px'), 'Touch targets enforce >= 44px minimum width');
assert(cssContent.includes(':focus-visible'), 'Visible focus ring styling is implemented');
assert(cssContent.includes('prefers-reduced-motion: reduce'), 'prefers-reduced-motion media query is implemented');
assert(cssContent.includes('Fredoka'), 'Fredoka font family configured in design system');
assert(cssContent.includes('Nunito'), 'Nunito font family configured in design system');

// -----------------------------------------------------------------------------
// SUMMARY
// -----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`TOTAL TESTS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log('================================================================');

if (failCount > 0) {
  process.exit(1);
}
