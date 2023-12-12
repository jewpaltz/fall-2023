import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HomeView from './views/HomeView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouterView = () => <h1>RouterView</h1>

function App() {

  return (
    <>
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <div className="container">
        <progress className="progress is-small is-primary is-striped" max="100" v-if="session.loading">15%</progress>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/map" element={<div>Map</div>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
