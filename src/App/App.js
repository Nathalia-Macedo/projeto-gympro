// App.jsx
import React from 'react';
import { DadosProvider } from '../Context/Dados';
import Login from '../Pages/Login';
const App = () => {
  return (
    <DadosProvider>
      <Login />
    </DadosProvider>
  );
};

export default App;
