import React, { createContext, useState, useContext, useEffect } from 'react';

const DadosContext = createContext();

export const useDados = () => {
  return useContext(DadosContext);
};

export const DadosProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('light');
  const [cardData, setCardData] = useState([
    {
      title: 'Weekly Progress',
      value: '42%',
      type: 'progress',
      progress: 42
    },
    {
      title: 'Weekly Running',
      value: '42km',
      type: 'running',
      progress: 75
    },
    {
      title: 'Daily Cycling',
      value: '230 Km',
      type: 'cycling',
      progress: 85
    },
    {
      title: 'Morning Yoga',
      value: '18:34:21',
      type: 'yoga',
      progress: 60
    }
  ]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUsuario({ token });
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

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
        throw new Error(`Erro no registro: ${response.status} - ${response.statusText}`);
      }
  
    } catch (error) {
      setErro(error.message.includes('Failed to fetch') ? 'Erro de conexão com o servidor' : error.message || 'Erro na requisição');
    }
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('token');
  };

  return (
    <DadosContext.Provider value={{ 
      usuario, 
      login, 
      register, 
      erro, 
      logout,
      isSidebarOpen,
      toggleSidebar,
      theme,
      toggleTheme,
      cardData
    }}>
      {children}
    </DadosContext.Provider>
  );
};

export default DadosProvider;