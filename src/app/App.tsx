import React from 'react';
import './styles/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App;