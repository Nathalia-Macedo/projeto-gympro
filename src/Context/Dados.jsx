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
      // Se o token existir, você pode buscar o usuário com base no token ou, dependendo da sua aplicação, apenas restaurá-lo
      setUsuario({ token }); // Aqui você pode adicionar a lógica para buscar mais informações do usuário, se necessário
    }
  }, []);

  const login = async (username, password) => {
    console.log(username, password);
    try {
      const response = await fetch('http://gympro.verkom.com.br:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Adiciona este cabeçalho

        },
        body: JSON.stringify({ username, password })
      });
  
      const text = await response.text();
      console.log('Resposta do servidor:', text);
  
      if (!response.ok) {
        throw new Error(`Erro no login: ${response.status} - ${response.statusText}`);
      }
  
      let data;
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        setErro('Erro ao processar resposta do servidor');
        return;
      }
  
      if (data) {
        console.log(data);
        localStorage.setItem('token', data.token);
        setUsuario(data);
        setErro(null);
      } else {
        setErro('Resposta vazia do servidor');
      }
    } catch (error) {
      setErro(
        error.message.includes('Failed to fetch') 
        ? 'Erro de conexão com o servidor' 
        : error.message || 'Erro na requisição'
      );
    }
  };
  

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('token'); // Remover o token do localStorage ao fazer logout
  };

  return (
    <DadosContext.Provider value={{ usuario, login, erro, logout }}>
      {children}
    </DadosContext.Provider>
  );
};
