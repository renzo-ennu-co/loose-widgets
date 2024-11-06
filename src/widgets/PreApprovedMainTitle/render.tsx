import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PreApprovedMainTitle from '.'

const container = document.getElementById('pre-approved-main-title-widget')!
const dataset = container.dataset;
const name = dataset.name;
const widthForDesktop = Number(dataset.widthForDesktop);
const widthForMobile = Number(dataset.widthForMobile);
const fontAdjustment = Number(dataset.fontAdjustment)

createRoot(container).render(
  <StrictMode>
    <PreApprovedMainTitle
      name={name}
      widthForDesktop={widthForDesktop}
      widthForMobile={widthForMobile}
      fontAdjustment={fontAdjustment}
    />
  </StrictMode>,
)
