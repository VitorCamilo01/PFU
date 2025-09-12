import React from 'react';
import icone from '../assets/icone.png';

function PromoSection() {
  return (
    <section className="promo-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', minHeight: '260px' }}>
      <img src={icone} alt="Logo" style={{ width: 260, height: 260, borderRadius: '24px', objectFit: 'cover', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }} />
      <div style={{ textAlign: 'left', maxWidth: 420 }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '16px', color: '#1976d2' }}>Centralize a Voz do Cliente</h1>
        <p style={{ fontSize: '1.15rem', color: '#333' }}>Nossa plataforma unifica feedbacks de diversas fontes, fornecendo informações para decisões estratégicas e melhoria contínua.</p>
      </div>
    </section>
  );
}

export default PromoSection;