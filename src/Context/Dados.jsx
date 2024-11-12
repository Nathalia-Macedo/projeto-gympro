import React, { createContext, useState, useContext, useEffect } from 'react';

const DadosContext = createContext();

export function DadosProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [usuario, setUsuario] = useState(null);
  const [erro,setErro] = useState("")
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
  const [planos, setPlanos] = useState([]);
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    fetchCargos();
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
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

  

  
  const fetchCargos = async () => {
    try {
      const response = await fetch('https://gympro.verkom.com.br:8443/cargos');
      if (!response.ok) {
        throw new Error('Failed to fetch cargos data');
      }
      const data = await response.json();
      setCargos(data);
    } catch (error) {
      console.error('Error fetching cargos data:', error);
    }
  };

  return (
    <DadosContext.Provider
      value={{
        theme,
        toggleTheme,
        isSidebarOpen,
        toggleSidebar,
        usuario,
        cardData,
        login,
        cargos,
        fetchCargos,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
}

export function useDados() {
  const context = useContext(DadosContext);
  if (!context) {
    throw new Error('useDados must be used within a DadosProvider');
  }
  return context;
}