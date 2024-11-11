import React, { createContext, useState, useContext, useEffect } from 'react';

const DadosContext = createContext();

export const useDados = () => {
  return useContext(DadosContext);
};

export const DadosProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('https://gympro.verkom.com.br:8443/user', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
            },
          });

          if (response.ok) {
            const userData = await response.json();
            setUsuario({ ...userData, token });
          } else {
            localStorage.removeItem('token');
            setUsuario(null);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setErro('Erro ao buscar dados do usuário');
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isCorsError = (error) => {
    return error.message.includes('CORS') || error.message.includes('Failed to fetch');
  };

  const login = async (username, password) => {
    try {
      const response = await fetch('https://gympro.verkom.com.br:8443/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`Erro no login: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      if (data && data.token) {
        localStorage.setItem('token', data.token);
        // Fetch user data after successful login
        const userResponse = await fetch('https://gympro.verkom.com.br:8443/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${data.token}`,
            'Accept': 'application/json',
          },
          credentials: 'include'
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUsuario({ ...userData, token: data.token });
        } else {
          throw new Error('Erro ao buscar dados do usuário após login');
        }

        setErro(null);
      } else {
        setErro('Resposta inválida do servidor');
      }
    } catch (error) {
      if (isCorsError(error)) {
        setErro('Erro de conexão com o servidor. Por favor, verifique se o CORS está configurado corretamente no backend.');
      } else {
        setErro(error.message || 'Erro na requisição');
      }
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
      erro, 
      logout,
      isSidebarOpen,
      toggleSidebar,
      loading
    }}>
      {children}
    </DadosContext.Provider>
  );
};