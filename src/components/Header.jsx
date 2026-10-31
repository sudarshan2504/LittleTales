import React, { useState } from 'react';
import Logo from './Logo';
import { BookOpen, Compass, ShieldCheck, Menu, X, Award } from 'lucide-react';

export default function Header({ currentPage, onNavigate, progress }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const completedCount = progress?.completedStoryIds?.length || 0;
  const wordsSpelled = progress?.totalWordsSpelled || 0;

  const handleNav = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(253, 251, 247, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid rgba(226, 232, 240, 0.8)',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
      }}
    >
      <div
        className="app-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Brand Logo */}
        <Logo size="small" onClick={() => handleNav('home')} />

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="desktop-nav"
        >
          <button
            onClick={() => handleNav('home')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.6rem 1.15rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 600,
              border: currentPage === 'home' ? '2px solid #bae6fd' : '2px solid transparent',
              backgroundColor: currentPage === 'home' ? '#e0f2fe' : 'transparent',
              color: currentPage === 'home' ? '#0369a1' : 'var(--color-text-main)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            <BookOpen size={18} />
            Home
          </button>

          <button
            onClick={() => handleNav('adventures')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.6rem 1.15rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 600,
              border: currentPage === 'adventures' ? '2px solid #fed7aa' : '2px solid transparent',
              backgroundColor: currentPage === 'adventures' ? '#ffedd5' : 'transparent',
              color: currentPage === 'adventures' ? '#ea580c' : 'var(--color-text-main)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            aria-current={currentPage === 'adventures' ? 'page' : undefined}
          >
            <Compass size={18} />
            My Adventures
          </button>

          <button
            onClick={() => handleNav('parent-corner')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.6rem 1.15rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 600,
              border: currentPage === 'parent-corner' ? '2px solid #e9d5ff' : '2px solid transparent',
              backgroundColor: currentPage === 'parent-corner' ? '#f3e8ff' : 'transparent',
              color: currentPage === 'parent-corner' ? '#9333ea' : 'var(--color-text-main)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            aria-current={currentPage === 'parent-corner' ? 'page' : undefined}
          >
            <ShieldCheck size={18} />
            Parent Corner
          </button>
        </nav>

        {/* Progress Badge (Desktop) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: '#ffffff',
            padding: '0.45rem 1rem',
            borderRadius: '9999px',
            border: '2px solid #fef08a',
            boxShadow: '0 2px 8px rgba(245, 158, 11, 0.15)',
          }}
          className="desktop-progress"
          title={`${completedCount} stories completed, ${wordsSpelled} words spelled`}
        >
          <Award size={20} color="#f59e0b" />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#b45309' }}>
            {completedCount} {completedCount === 1 ? 'Story' : 'Stories'} • {wordsSpelled} {wordsSpelled === 1 ? 'Word' : 'Words'}
          </span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            border: '2px solid #e2e8f0',
            backgroundColor: '#ffffff',
            color: 'var(--color-text-dark)',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '2px solid #e2e8f0',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
          }}
          aria-label="Mobile Navigation"
        >
          <button
            onClick={() => handleNav('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.85rem 1.25rem',
              borderRadius: '16px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontWeight: 600,
              border: 'none',
              backgroundColor: currentPage === 'home' ? '#e0f2fe' : '#f8fafc',
              color: currentPage === 'home' ? '#0284c7' : 'var(--color-text-main)',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <BookOpen size={20} color="#0284c7" />
            Home
          </button>

          <button
            onClick={() => handleNav('adventures')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.85rem 1.25rem',
              borderRadius: '16px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontWeight: 600,
              border: 'none',
              backgroundColor: currentPage === 'adventures' ? '#ffedd5' : '#f8fafc',
              color: currentPage === 'adventures' ? '#ea580c' : 'var(--color-text-main)',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <Compass size={20} color="#ea580c" />
            My Adventures
          </button>

          <button
            onClick={() => handleNav('parent-corner')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              width: '100%',
              padding: '0.85rem 1.25rem',
              borderRadius: '16px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              fontWeight: 600,
              border: 'none',
              backgroundColor: currentPage === 'parent-corner' ? '#f3e8ff' : '#f8fafc',
              color: currentPage === 'parent-corner' ? '#9333ea' : 'var(--color-text-main)',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <ShieldCheck size={20} color="#9333ea" />
            Parent Corner
          </button>

          {/* Progress summary badge in mobile menu */}
          <div
            style={{
              marginTop: '0.5rem',
              padding: '0.85rem',
              backgroundColor: '#fef9c3',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              justifyContent: 'center',
            }}
          >
            <Award size={20} color="#f59e0b" />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#b45309' }}>
              {completedCount} Stories Completed • {wordsSpelled} Words Spelled
            </span>
          </div>
        </nav>
      )}

      {/* Responsive media query helper for Header */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-progress { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
