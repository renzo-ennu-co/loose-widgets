import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HowItWorks from '.'

createRoot(document.getElementById('how-it-works-widget')!).render(
  <StrictMode>
    <HowItWorks />
  </StrictMode>,
)
