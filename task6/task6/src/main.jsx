import React from 'react'
import ReactDOM from 'react-dom/client'
import { AnimeProvider } from './components/UsingContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <AnimeProvider>
        <App />
        </AnimeProvider>
      </BrowserRouter>   
    </NextUIProvider>   
  </React.StrictMode>,
)
