import React, { useState } from 'react';

function AvaliacaoCliente({ onVoltarLogin }) {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [produto, setProduto] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [nota, setNota] = useState(5);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaAvaliacao = {
      nomeEmpresa,
      produto,
      avaliacao,
      nota,
    };
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes') || '[]');
    avaliacoes.push(novaAvaliacao);
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="form-card">
        <h2>Obrigado pela avaliação!</h2>
        <p>Sua opinião foi registrada.</p>
        <button onClick={onVoltarLogin} style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 20px', fontWeight: 'bold', cursor: 'pointer', marginTop: 16 }}>Ir para Login</button>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2>Avalie a Empresa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome da Empresa:</label>
          <input type="text" value={nomeEmpresa} onChange={e => setNomeEmpresa(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Produto Avaliado:</label>
          <input type="text" value={produto} onChange={e => setProduto(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Comentário:</label>
          <textarea value={avaliacao} onChange={e => setAvaliacao(e.target.value)} required rows={4} />
        </div>
        <div className="form-group">
          <label>Nota:</label>
          <div style={{ display: 'flex', gap: '5px', fontSize: '2rem', cursor: 'pointer' }}>
            {[1,2,3,4,5].map(n => (
              <span
                key={n}
                onClick={() => setNota(n)}
                style={{ color: n <= nota ? '#FFD700' : '#ccc', transition: 'color 0.2s' }}
                role="button"
                aria-label={`Dar nota ${n}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
  <button type="submit">Enviar Avaliação</button>
  <button type="button" onClick={onVoltarLogin} style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 20px', fontWeight: 'bold', cursor: 'pointer', marginLeft: 12, marginTop: 8 }}>Ir para Login</button>
      </form>
    </div>
  );
}

export default AvaliacaoCliente;
