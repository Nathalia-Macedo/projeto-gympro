// App.jsx
import React from 'react';
import { DadosProvider } from '../Context/Dados';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import RegisterPage from '../Pages/Cadastro';

const App = () => {
  return (
    <DadosProvider>
      <Router>
        <Routes>
          <Route path="/cadastrar" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </DadosProvider>
  );
};

export default App;