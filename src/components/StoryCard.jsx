import React from 'react';
import StoryCharacter from './CharacterArt';
import { Clock, BookOpen, Star } from 'lucide-react';

export default function StoryCard({ story, onSelect }) {
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Animals':
        return { bg: '#dcfce7', text: '#15803d', border: '#86efac' };
      case 'Adventure':
        return { bg: '#ffedd5', text: '#c2410c', border: '#fdba74' };
      case 'Fantasy':
        return { bg: '#f3e8ff', text: '#7e22ce', border: '#d8b4fe' };
      case 'Space':
        return { bg: '#e0e7ff', text: '#3730a3', border: '#a5b4fc' };
      case 'Ocean':
        return { bg: '#e0f2fe', text: '#0369a1', border: '#7dd3fc' };
      default:
        return { bg: '#f1f5f9', text: '#334155', border: '#cbd5e1' };
    }
  };

  const getDifficultyBadge = (diff) => {
    switch (diff) {
      case 'Easy':
        return { color: '#16a34a', label: 'Easy' };
      case 'Medium':
        return { color: '#d97706', label: 'Medium' };
      case 'Advanced':
        return { color: '#7c3aed', label: 'Advanced' };
      default:
        return { color: '#16a34a', label: 'Easy' };
    }
  };

  const catStyle = getCategoryColor(story.category);
  const diffBadge = getDifficultyBadge(story.difficulty);

  return (
    <article
      className="story-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        border: '2px solid #e2e8f0',
        boxShadow: 'var(--shadow-card)',
        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
        height: '100%',
      }}
    >
      {/* Cover Illustrated Banner */}
      <div
        style={{
          height: '190px',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background:
            story.id === 'lost-bunny'
              ? 'linear-gradient(135deg, #dcfce7 0%, #bae6fd 100%)'
              : story.id === 'leo-lion'
              ? 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)'
              : story.id === 'mia-space'
              ? 'linear-gradient(135deg, #312e81 0%, #4c1d95 60%, #831843 100%)'
              : story.id === 'timo-turtle'
              ? 'linear-gradient(135deg, #ecfccb 0%, #bae6fd 100%)'
              : story.id === 'ember-dragon'
              ? 'linear-gradient(135deg, #ffe4e6 0%, #fed7aa 100%)'
              : 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
        }}
      >
        {/* Character Illustration */}
        <div style={{ transform: 'scale(0.85) translateY(10px)' }}>
          <StoryCharacter storyId={story.id} action="idle" size={170} />
        </div>

        {/* Category Pill Tag */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            backgroundColor: catStyle.bg,
            color: catStyle.text,
            border: `1.5px solid ${catStyle.border}`,
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.85rem',
            fontWeight: 700,
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
          }}
        >
          {story.category}
        </div>

        {/* Difficulty Pill */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            color: diffBadge.color,
            padding: '0.3rem 0.65rem',
            borderRadius: '9999px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.82rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
          }}
        >
          <Star size={13} fill={diffBadge.color} color={diffBadge.color} />
          {diffBadge.label}
        </div>
      </div>

      {/* Card Content Area */}
      <div
        style={{
          padding: '1.4rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: 'var(--color-text-dark)',
              marginBottom: '0.5rem',
            }}
          >
            {story.title}
          </h3>

          <p
            style={{
              fontSize: '0.94rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.5,
              marginBottom: '1rem',
            }}
          >
            {story.description}
          </p>
        </div>

        <div>
          {/* Metadata Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.75rem',
              marginBottom: '1.1rem',
              borderTop: '1px solid #f1f5f9',
              fontSize: '0.85rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={16} color="#0284c7" />
              {story.estimatedMinutes} mins
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <BookOpen size={16} color="#f59e0b" />
              {story.scenes.length} Scenes
            </span>
          </div>

          {/* Read Story Action Button */}
          <button
            type="button"
            onClick={() => onSelect(story)}
            className="btn-primary w-full"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              fontSize: '1.05rem',
            }}
            aria-label={`Read story: ${story.title}`}
          >
            <BookOpen size={18} />
            Read Story
          </button>
        </div>
      </div>
    </article>
  );
}
