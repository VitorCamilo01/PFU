import React, { useState } from 'react';
import { maskCPF, maskCNPJ, maskCEP } from './InputMask.js';

function Cadastro({ onCadastro, onSwitchToLogin }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [nomeDono, setNomeDono] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [erroCep, setErroCep] = useState('');

  
  const handleCepChange = async (e) => {
    const value = maskCEP(e.target.value);
    setCep(value);
    setErroCep('');
    const cepNum = value.replace(/\D/g, '');
    if (cepNum.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepNum}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setEndereco(data.logradouro || '');
          setCidade(data.localidade || '');
          setEstado(data.uf || '');
        } else {
          setErroCep('CEP não encontrado.');
        }
      } catch {
        setErroCep('Erro ao buscar CEP. Tente novamente.');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuario = { nome, email, senha, cnpj, nomeDono, cpf, cep, endereco, cidade, estado };
    if (onCadastro) {
      onCadastro(usuario);
    } else {
      
      const empresas = JSON.parse(localStorage.getItem('empresas') || '[]');
      empresas.push(usuario);
      localStorage.setItem('empresas', JSON.stringify(empresas));
    }
  };

  return (
    <div className="form-card">
      <h2>Crie sua Conta</h2>
      <form onSubmit={handleSubmit}>
        {erroCep && (
          <div style={{ color: 'red', marginBottom: 8 }}>{erroCep}</div>
        )}
        <div className="form-row">
          <div className="form-group">
            <label>Razão Social da Empresa:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>CNPJ:</label>
            <input type="text" value={cnpj} onChange={(e) => setCnpj(maskCNPJ(e.target.value))} required maxLength={18} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Propietário da Empresa:</label>
            <input type="text" value={nomeDono} onChange={(e) => setNomeDono(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" value={cpf} onChange={(e) => setCpf(maskCPF(e.target.value))} required maxLength={14} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>CEP:</label>
            <input type="text" value={cep} onChange={handleCepChange} required maxLength={9} />
          </div>
          <div className="form-group">
            <label>Endereço:</label>
            <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Cidade:</label>
            <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Estado:</label>
            <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p className="switch-form-text">
        Já tem uma conta?{' '}
        <button onClick={onSwitchToLogin} className="link-button">
            Faça Login
        </button>
      </p>
    </div>
  );
}

export default Cadastro;