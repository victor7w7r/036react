import './core/styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, toplevel/no-toplevel-side-effect
createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
