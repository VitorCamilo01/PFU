import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import PromoSection from './components/PromoSection.jsx';
import Login from './components/Login.jsx';
import Cadastro from './components/Cadastro.jsx';
import CadastroCliente from './components/CadastroCliente.jsx';
import AvaliacaoCliente from './components/AvaliacaoCliente.jsx';
import Relatorio from './components/Relatorio.jsx';
import TodasAvaliacoes from './components/TodasAvaliacoes.jsx';

function App() {
  const [telaAvaliacoes, setTelaAvaliacoes] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [usuarioCadastrado, setUsuarioCadastrado] = useState(null);
  const [telaAuth, setTelaAuth] = useState('login');
  const [tipoCadastro, setTipoCadastro] = useState(null);
  const [tipoUsuario, setTipoUsuario] = useState(null);

  
  const salvarEmpresa = (empresa) => {
    const empresas = JSON.parse(localStorage.getItem('empresas') || '[]');
    empresas.push(empresa);
    localStorage.setItem('empresas', JSON.stringify(empresas));
  };
  const salvarCliente = (cliente) => {
    const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
  };
  const buscarUsuario = (identificador, senha) => {
    const empresas = JSON.parse(localStorage.getItem('empresas') || '[]');
    const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    const usuarioEmpresa = empresas.find(u => (u.email === identificador || u.cnpj === identificador) && u.senha === senha);
    if (usuarioEmpresa) return { ...usuarioEmpresa, tipo: 'empresa' };
    const usuarioCliente = clientes.find(u => (u.email === identificador || u.cpf === identificador) && u.senha === senha);
    if (usuarioCliente) return { ...usuarioCliente, tipo: 'cliente' };
    return null;
  };

  const handleLogin = (identificador, senha) => {
    const usuario = buscarUsuario(identificador, senha);
    if (usuario) {
      setUsuarioCadastrado(usuario);
      setTipoUsuario(usuario.tipo);
      setUsuarioLogado(true);
      return true;
    }
    return false;
  };

  
  const handleCadastroEmpresa = (usuario) => {
    salvarEmpresa(usuario);
    setTelaAuth('login');
  };
  
  const handleCadastroCliente = (usuario) => {
    salvarCliente(usuario);
    setTelaAuth('login');
  };

  return (
    <div className="app-container">
  <Header onVerAvaliacoes={() => setTelaAvaliacoes(true)} />
      <main className="main-content">
        <PromoSection />
        <div className="dynamic-content">
          {telaAvaliacoes ? (
            <TodasAvaliacoes onVoltar={() => setTelaAvaliacoes(false)} />
          ) : usuarioLogado ? (
            tipoUsuario === 'empresa' ? (
              <Relatorio />
            ) : (
              <AvaliacaoCliente cliente={usuarioCadastrado} />
            )
          ) : telaAuth === 'login' ? (
            <div>
              <Login onLogin={handleLogin} />
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <span style={{ fontSize: '1em', color: '#333', marginRight: '8px' }}>Não tem uma conta?</span>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '8px' }}>
                  <button className="link-button" style={{ fontWeight: 'bold', fontSize: '1.1em' }} onClick={() => { setTipoCadastro('empresa'); setTelaAuth('cadastro'); }}>Sou Empresa</button>
                  <button className="link-button" style={{ fontWeight: 'bold', fontSize: '1.1em' }} onClick={() => { setTipoCadastro('cliente'); setTelaAuth('cadastro'); }}>Sou Cliente</button>
                </div>
              </div>
            </div>
          ) : tipoCadastro === 'empresa' ? (
            <Cadastro
              onCadastro={handleCadastroEmpresa}
              onSwitchToLogin={() => setTelaAuth('login')}
            />
          ) : (
            <CadastroCliente
              onCadastro={handleCadastroCliente}
              onSwitchToLogin={() => setTelaAuth('login')}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;