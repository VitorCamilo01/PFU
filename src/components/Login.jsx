import React, { useState } from 'react';
import { maskCPF, maskCNPJ } from './InputMask.js';

function Login({ onLogin }) {
    const [identificador, setIdentificador] = useState('');
    const [senha, setSenha] = useState('');
    const [tipo, setTipo] = useState('email');
    const [erro, setErro] = useState('');

    const handleIdentificadorChange = (e) => {
        let value = e.target.value;
        if (tipo === 'cpf') value = maskCPF(value);
        if (tipo === 'cnpj') value = maskCNPJ(value);
        setIdentificador(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErro('');
        const sucesso = onLogin(identificador, senha);
        if (!sucesso) {
            setErro('Credenciais inválidas ou usuário não cadastrado.');
        }
    };

    return (
        <div className="form-card">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {erro && (
                  <div style={{ color: 'red', marginBottom: 8, textAlign: 'center' }}>{erro}</div>
                )}
                <div className="form-group">
                    <label>Login:</label>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                        <button type="button" onClick={() => { setTipo('email'); setIdentificador(''); setErro(''); }} style={{ background: tipo === 'email' ? '#1976d2' : '#eee', color: tipo === 'email' ? '#fff' : '#333', border: 'none', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer' }}>Email</button>
                        <button type="button" onClick={() => { setTipo('cpf'); setIdentificador(''); setErro(''); }} style={{ background: tipo === 'cpf' ? '#1976d2' : '#eee', color: tipo === 'cpf' ? '#fff' : '#333', border: 'none', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer' }}>CPF</button>
                        <button type="button" onClick={() => { setTipo('cnpj'); setIdentificador(''); setErro(''); }} style={{ background: tipo === 'cnpj' ? '#1976d2' : '#eee', color: tipo === 'cnpj' ? '#fff' : '#333', border: 'none', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer' }}>CNPJ</button>
                    </div>
                    <input
                        type={tipo === 'email' ? 'email' : 'text'}
                        value={identificador}
                        onChange={handleIdentificadorChange}
                        required
                        maxLength={tipo === 'cpf' ? 14 : tipo === 'cnpj' ? 18 : undefined}
                        placeholder={tipo === 'email' ? 'Digite seu email' : tipo === 'cpf' ? 'Digite seu CPF' : 'Digite seu CNPJ'}
                    />
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;