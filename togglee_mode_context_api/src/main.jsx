import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ToggleContextProvider } from "./contexts/ToggleContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleContextProvider>
    <App />
    </ToggleContextProvider>
  </React.StrictMode>
)
