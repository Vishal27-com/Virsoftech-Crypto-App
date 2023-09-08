import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CryptoContextProvider } from './Context/CryptoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoContextProvider>
    <App />
    </CryptoContextProvider>
  </React.StrictMode>,
)
