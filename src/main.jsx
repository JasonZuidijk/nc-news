import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<StrictMode>
    <App />
  </StrictMode>
</BrowserRouter>


)
