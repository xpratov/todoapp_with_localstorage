import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Pratov from './assets/ui/pratov.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Pratov/>
  </StrictMode>,
)
