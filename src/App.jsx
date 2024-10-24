import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotasList from './components/NotasList';
import NotaDetalle from './components/NotaDetalle';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NotasList />} />
          <Route path="/nota/:id" element={<NotaDetalle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
