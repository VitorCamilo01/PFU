import React from 'react';
import relatorioImg from '../assets/Relatorio.jpeg';

function Relatorio({ onVoltarLogin }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px' }}>
      <img
        src={relatorioImg}
        alt="Relatório"
        style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 4px 16px rgba(60,80,180,0.10)', marginBottom: '24px' }}
      />
      <button onClick={onVoltarLogin} style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 20px', fontWeight: 'bold', cursor: 'pointer' }}>Ir para Login</button>
    </div>
  );
}

export default Relatorio;