import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { DadosProvider, useDados } from '../Context/Dados';
import Dashboard from '../Pages/DashBoard';
import Login from '../Pages/Login';

function PrivateRoute({ children }) {
  const { usuario, loading, erro } = useDados();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (erro) {
    return <div>Erro: {erro}. Redirecionando para o Dashboard para desenvolvimento.</div>;
  }

  if (!usuario) {
    // For development, allow access to dashboard even without authentication
    console.warn('Usuário não autenticado. Permitindo acesso ao Dashboard para desenvolvimento.');
    return children;
    // In production, uncomment the following line:
    // return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <DadosProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </DadosProvider>
  );
}

export default App;