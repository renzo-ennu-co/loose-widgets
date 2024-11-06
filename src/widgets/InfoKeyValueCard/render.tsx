import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InfoKeyValueCard from '.'

// Find all containers with a specific class name (e.g., `info-key-value-card-widget`)
const containers = document.querySelectorAll('.info-key-value-card-widget');

Array.from(containers).forEach(container => {
  const { key, value } = (container as HTMLElement).dataset;

  createRoot(container).render(
    <StrictMode>
      <InfoKeyValueCard
        _key={key!}
        value={value!}
      />
    </StrictMode>,
  );
});
