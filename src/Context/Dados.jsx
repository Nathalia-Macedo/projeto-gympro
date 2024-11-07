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
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const text = await response.text();  // Usando text() para ver o conteúdo bruto da resposta
      console.log('Resposta do servidor:', text); // Logando o conteúdo da resposta

      // Verificando se a resposta é ok
      if (!response.ok) {
        throw new Error('Erro no login');
      }

      // Se houver conteúdo, parse o JSON
      const data = text ? JSON.parse(text) : null;
      if (data) {
        console.log(data);  // Verifique os dados retornados (ex: { token: 'xyz' })
        
        // Armazenar o token no localStorage
        localStorage.setItem('token', data.token);

        // Armazenando o usuário no contexto
        setUsuario(data);
        setErro(null); // Resetando erro
      } else {
        setErro('Resposta vazia do servidor');
      }
    } catch (error) {
      setErro(error.message || 'Erro na requisição');
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
