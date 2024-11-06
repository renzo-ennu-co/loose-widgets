import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InfoKeyValueCard from '.'

const container = document.getElementById('info-key-value-card-widget')!
const { key, value } = container.dataset;

createRoot(container).render(
  <StrictMode>
    <InfoKeyValueCard
      _key={key!}
      value={value!}
    />
  </StrictMode>,
)
