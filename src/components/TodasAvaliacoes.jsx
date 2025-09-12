import React, { useEffect, useState } from 'react';

function TodasAvaliacoes({ onVoltar, onVoltarLogin }) {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('avaliacoes') || '[]');
    setAvaliacoes(dados);
  }, []);

  return (
    <div className="form-card">
      <h2>Todas as Avaliações</h2>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <button onClick={onVoltar} >Voltar</button>
        <button onClick={onVoltarLogin} style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', fontWeight: 'bold', cursor: 'pointer' }}>Ir para Login</button>
      </div>
      {avaliacoes.length === 0 ? (
        <p>Nenhuma avaliação cadastrada.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {avaliacoes.map((a, idx) => (
            <li key={idx} style={{ marginBottom: 18, borderBottom: '1px solid #eee', paddingBottom: 12 }}>
              <strong>Empresa:</strong> {a.nomeEmpresa}<br />
              <strong>Produto:</strong> {a.produto}<br />
              <strong>Comentário:</strong> {a.avaliacao}<br />
              <strong>Nota:</strong> {a.nota} ★<br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodasAvaliacoes;
