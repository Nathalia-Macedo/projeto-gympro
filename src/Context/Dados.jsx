// Dados.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const DadosContext = createContext();

export const useDados = () => {
  return useContext(DadosContext);
};

export const DadosProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState(null);

  // Verificar no localStorage se o usuário está logado
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUsuario({ token });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch('https://gympro.verkom.com.br:8443/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      const text = await response.text();
      if (!response.ok) {
        throw new Error(`Erro no login: ${response.status} - ${response.statusText}`);
      }

      let data;
      try {
        data = JSON.parse(text);
        console.log(data)
      } catch (parseError) {
        setErro('Erro ao processar resposta do servidor');
        return;
      }

      if (data) {
        localStorage.setItem('token', data.token);
        setUsuario(data);
        setErro(null);
      } else {
        setErro('Resposta vazia do servidor');
      }
    } catch (error) {
      setErro(error.message.includes('Failed to fetch') ? 'Erro de conexão com o servidor' : error.message || 'Erro na requisição');
    }
  };

  const register = async (username, password) => {
    try {
      console.log(username, password);
      
      const response = await fetch('https://gympro.verkom.com.br:8443/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password, role: 'USER' })
      });
      console.log(response)
      // Ignora o erro de CORS e valida apenas pelo status
      if (response.status === 200) {
        const data = await response.json();
        setUsuario(data);
        setErro(null);
        localStorage.setItem('token', data.token);
        console.log("Usuário registrado com sucesso!");
      } else if (response.status === 403) {
        setErro("Usuário já está cadastrado.");
        console.log("Erro: Usuário já está cadastrado.");
      } else {
        // Outros erros genéricos
        throw new Error(`Erro no registro: ${response.status} - ${response.statusText}`);
      }
  
    } catch (error) {
      // Trata erros de rede ou outros problemas com a requisição
      setErro(error.message.includes('Failed to fetch') ? 'Erro de conexão com o servidor' : error.message || 'Erro na requisição');
    }
  };
  

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('token');
  };

  return (
    <DadosContext.Provider value={{ usuario, login, register, erro, logout }}>
      {children}
    </DadosContext.Provider>
  );
};
