import React, { useState } from 'react';
import { maskCPF } from './InputMask.js';

function CadastroCliente({ onCadastro, onSwitchToLogin }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onCadastro) {
      onCadastro({ nome, cpf, email, senha });
    }
  };

  return (
    <div className="form-card">
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" value={cpf} onChange={e => setCpf(maskCPF(e.target.value))} maxLength={14} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p className="switch-form-text">
        Já tem uma conta?{' '}
        <button onClick={onSwitchToLogin} className="link-button">Faça Login</button>
      </p>
    </div>
  );
}


export default CadastroCliente;
