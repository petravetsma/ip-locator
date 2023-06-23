import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Palette } from './Palette.tsx'
import { App } from 'App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Palette />
    <App />
  </React.StrictMode>,
)
