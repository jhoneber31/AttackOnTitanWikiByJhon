import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter } from 'react-router-dom'
import { AttackOnTitanApp } from './AttackOnTitanApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode>
      
    </React.StrictMode> */}
    <AttackOnTitanApp/>
  </BrowserRouter>
  
)
