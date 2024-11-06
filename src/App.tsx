import ennuLogo from './assets/ennu-co-logo.png'
import './App.css'
import PotentialWeight from './widgets/PotentialWeight'
import HowItWorks from './widgets/HowItWorks'
import PreApprovedMainTitle from './widgets/PreApprovedMainTitle'
import styled from 'styled-components'

const HowItWorksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PreApprovedMainTitleContainer = styled.div`
  width: 280px;
  @media (min-width: 600px) {
    width: 700px;
  }
`;

function App() {
  return (
    <>
      <div>
{/*         <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <a href="https://ennu.co" target="_blank">
          <img src={ennuLogo} className="logo ennu" alt="React logo" />
        </a>
      </div>
      <h1>Ennu Widgets</h1>
      <div className="div">
        <h2>Potential Weight Widget</h2>
        <PotentialWeight/>
        <h2>How It Works Widget</h2>
        <HowItWorksContainer>
          <HowItWorks/>
        </HowItWorksContainer>
        <h2>Pre Approved Main Title</h2>
        <PreApprovedMainTitleContainer>
          <PreApprovedMainTitle name='Renzo' widthForDesktop={700} widthForMobile={280} fontAdjustment={55}/>
        </PreApprovedMainTitleContainer>
      </div>
    </>
  )
}

export default App
