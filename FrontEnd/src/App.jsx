import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Product from "./pages/Product"
import Login from "./pages/Login"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        //Página de inicio
        <Route path="/" element={<Home />} />
        //Página de Login
        <Route path='/Login' element={<Login />} />
        //Página de productos "Tienda"
        <Route path="/Store" element={<Store />} />
        //Página de producto
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>)
}

export default App
