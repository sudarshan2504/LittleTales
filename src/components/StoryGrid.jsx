import React, { useState } from 'react';
import StoryCard from './StoryCard';
import { CATEGORIES } from '../data/stories';
import { Sparkles } from 'lucide-react';

export default function StoryGrid({ stories, onSelectStory }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStories =
    selectedCategory === 'All'
      ? stories
      : stories.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section aria-labelledby="story-collection-heading" style={{ margin: '3.5rem 0' }}>
      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '2.5rem',
        }}
        role="tablist"
        aria-label="Story categories"
      >
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                border: isSelected ? '2px solid #0284c7' : '2px solid #e2e8f0',
                backgroundColor: isSelected ? '#0284c7' : '#ffffff',
                color: isSelected ? '#ffffff' : 'var(--color-text-main)',
                cursor: 'pointer',
                boxShadow: isSelected
                  ? '0 4px 14px rgba(2, 132, 199, 0.35)'
                  : '0 2px 6px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {cat === 'All' ? '🌟 All Stories' : cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Story Cards */}
      <div
        className="story-grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {filteredStories.map((story) => (
          <StoryCard key={story.id} story={story} onSelect={onSelectStory} />
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '2px dashed #cbd5e1',
          }}
        >
          <Sparkles size={36} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
          <h4 style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)' }}>No stories found</h4>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
            Try selecting "All Stories" to explore all available adventures!
          </p>
        </div>
      )}
    </section>
  );
}
