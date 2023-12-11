import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const NavBar = () => <h1>NavBar</h1>
const RouterView = () => <h1>RouterView</h1>

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <div className="container">
        <progress className="progress is-small is-primary is-striped" max="100" v-if="session.loading">15%</progress>
        <RouterView />
      </div>

    </>
  )
}

export default App
