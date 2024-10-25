import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotasList from './components/NotasList';
import NotaDetalle from './components/NotaDetalle';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NotasList />} />
          <Route path="/notes/:id" element={<NotaDetalle />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
