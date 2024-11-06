import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OfferExpiresOn from '.'

const containers = document.querySelectorAll('.offer-expires-on');

Array.from(containers).forEach(container => {
  createRoot(container).render(
    <StrictMode>
      <OfferExpiresOn />
    </StrictMode>,
  );
});
