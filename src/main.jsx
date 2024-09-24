import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirstContextProvider from './contexts/FirstContext.jsx'

createRoot(document.getElementById('root')).render(
  <FirstContextProvider>
    <App />
  </FirstContextProvider>,
)
