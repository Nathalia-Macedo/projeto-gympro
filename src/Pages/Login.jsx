// import React, { useState, useEffect } from 'react';
// import { useDados } from '../Context/Dados';
// import { useNavigate } from 'react-router-dom';
// import logo from '../Assets/logo-full.png';
// import './Login.css';

// function Login() {
//   const { login, erro, usuario } = useDados();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (usuario) {
//       navigate('/dashboard');
//     }
//   }, [usuario, navigate]);

//   useEffect(() => {
//     if (erro) {
//       console.log('Erro:', erro);
//     }
//   }, [erro]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     await login(username, password);
//     setLoading(false);
//   };

//   return (
//     <section className="LoginForms">
//       <div className="conteiner">
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//           <span>Entre na sua conta</span>
//         </div>

//         <form className='loginForm' onSubmit={handleLogin}>
//           <div className="inputs">
//             <label htmlFor="username">Usuário</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <label htmlFor="password">Senha</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {erro && <p style={{ color: 'red' }}>{erro}</p>}

//           <div className="more">
//             <div className="juntos">
//               <div>
//                 <input type="checkbox" id="remember" />
//                 <span className='little'>Lembrar minha preferência</span>
//               </div>
//               <a href="/forgot-password">Esqueceu a Senha?</a>
//             </div>
//           </div>

//           <div className="finale">
//             <button type="submit" disabled={loading}>
//               {loading ? 'Carregando...' : 'Entrar'}
//             </button>
//             <div className="cadastrar">
//               <p>
//                 Não tem uma conta? <a href="/register">Cadastre-se</a>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;
// components/Login.jsx
import React, { useState, useEffect } from 'react';
import { useDados } from '../Context/Dados';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo-full.png';
import './Login.css';

function Login() {
  const { login, erro, usuario, fetchUserInfo } = useDados();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario) {
      navigate('/dashboard');
    }
  }, [usuario, navigate]);

  useEffect(() => {
    if (erro) {
      console.log('Erro:', erro);
    }
  }, [erro]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(username, password);
    setLoading(false);
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

          {erro && <p style={{ color: 'red' }}>{erro}</p>}

          <div className="more">
            <div className="juntos">
              <div>
                <input type="checkbox" id="remember" />
                <span className='little'>Lembrar minha preferência</span>
              </div>
              <a href="/forgot-password">Esqueceu a Senha?</a>
            </div>
          </div>

          <div className="finale">
            <button type="submit" disabled={loading}>
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
            <div className="cadastrar">
              <p>
                Não tem uma conta? <a href="/register">Cadastre-se</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;