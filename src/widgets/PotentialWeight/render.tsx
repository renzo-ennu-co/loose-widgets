import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PotentialWeight from '.'

createRoot(document.getElementById('potential-weight-widget')!).render(
  <StrictMode>
    <PotentialWeight />
  </StrictMode>,
)
