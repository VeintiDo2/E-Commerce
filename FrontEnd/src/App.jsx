import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        //Página de inicio
        <Route path="/" element={<Home />} />
        //Página de productos "Tienda"
        <Route path="/Store" element={<Store />} />
      </Routes>
    </BrowserRouter>)
}

export default App
