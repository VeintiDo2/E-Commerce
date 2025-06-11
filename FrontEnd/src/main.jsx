import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ProductProvider } from './context/contextProduct.jsx';
import { UserProvider } from "./context/contextUser.jsx";

createRoot(document.getElementById('root')).render(
  <>
    <UserProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UserProvider>
  </>,
)
