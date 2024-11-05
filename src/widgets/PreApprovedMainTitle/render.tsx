import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PreApprovedMainTitle from '.'

const container = document.getElementById('pre-approved-main-title-widget')!
const dataset = container.dataset;

createRoot(container).render(
  <StrictMode>
    <PreApprovedMainTitle name={dataset.title} />
  </StrictMode>,
)
