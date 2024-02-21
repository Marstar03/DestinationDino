import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./styles.css"
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='188439985736-erkenloa7p2egsas8ff05scnnmjuf7ot.apps.googleusercontent.com'>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  </GoogleOAuthProvider>
)
