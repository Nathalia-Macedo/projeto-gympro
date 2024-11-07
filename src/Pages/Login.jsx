import React, { useState, useEffect } from 'react';
import { useDados } from '../Context/Dados'; // Importando o contexto
import logo from '../Assets/logo-full.png';
import './Login.css';

function Login() {
  const { login, erro } = useDados(); // Usando o contexto
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Usando useEffect para garantir que o erro seja exibido quando for alterado
  useEffect(() => {
    if (erro) {
      console.log('Erro:', erro); // Log para checar se o erro está sendo atualizado corretamente
    }
  }, [erro]); // Este useEffect será executado sempre que o estado 'erro' mudar

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativando o estado de loading
    await login(username, password); // Chamando a função de login do contexto
    setLoading(false); // Desativando o loading
  };

  return (
    <section className="LoginForms">
      <div className="conteiner">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>Entre na sua conta</span>
        </div>

        <form className='loginForm' onSubmit={handleLogin}>
          <div className="inputs">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {erro && <p style={{ color: 'red' }}>{erro}</p>} {/* Exibindo erro, se houver */}

          <div className="more">
            <div className="juntos">
              <div>
                <input type="checkbox" id="remember" />
                <span className='little'>Lembrar minha preferência</span>
              </div>
              <a href="">Esqueceu a Senha?</a>
            </div>
          </div>

          <div className="finale">
            <button type="submit" disabled={loading}>
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
            <div className="cadastrar">
              <p>
                Não tem uma conta? <a href="">Cadastre-se</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
