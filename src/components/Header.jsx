import React from 'react';

function Header({ onVerAvaliacoes }) {
  return (
    <header className="app-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '10px', position: 'relative' }}>
      <span style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#222', letterSpacing: '2px', marginRight: '32px' }}>FeedHub</span>
      <button
        style={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          fontWeight: 'bold',
          fontSize: '1em',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
        onClick={onVerAvaliacoes}
      >
        Ver Todas as Avaliações
      </button>
    </header>
  );
}

export default Header;