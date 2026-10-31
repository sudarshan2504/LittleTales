import React from 'react';
import Logo from './Logo';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer
      style={{
        marginTop: '5rem',
        backgroundColor: '#ffffff',
        borderTop: '2px solid #f1f5f9',
        padding: '3.5rem 0 2.5rem',
      }}
    >
      <div className="app-container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid #e2e8f0',
          }}
        >
          {/* Brand & mission */}
          <div style={{ maxWidth: '360px' }}>
            <Logo size="medium" showTagline={true} onClick={() => onNavigate('home')} />
            <p
              style={{
                marginTop: '1rem',
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              LittleTales is an interactive illustrated storybook platform crafted to inspire curiosity, spark imagination, and build joyful reading confidence in every child.
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: 'var(--color-text-dark)' }}>
                Explore
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: 0,
                    }}
                  >
                    <BookOpen size={16} color="#0284c7" />
                    Story Library
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('adventures')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: 0,
                    }}
                  >
                    <Sparkles size={16} color="#ea580c" />
                    My Adventures
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('parent-corner')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: 0,
                    }}
                  >
                    <Heart size={16} color="#e11d48" />
                    Parent Corner
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: 'var(--color-text-dark)' }}>
                Kid-Safe & Private
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '280px', lineHeight: 1.5 }}>
                100% Private. No trackers, no advertisements, and no data collection. All reading progress is saved strictly inside your local browser.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & message */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.88rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <span>© {new Date().getFullYear()} LittleTales. Made with love for young readers and explorers.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Keep reading, keep dreaming! <Sparkles size={16} color="#f59e0b" />
          </span>
        </div>
      </div>
    </footer>
  );
}
