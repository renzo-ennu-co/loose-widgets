import ennuLogo from './assets/ennu-co-logo.png'
import './App.css'
import PotentialWeight from './widgets/PotentialWeight'

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
      </div>
    </>
  )
}

export default App
