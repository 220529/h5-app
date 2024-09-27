import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/styles/index.less";
import "@/assets/rem";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
