import './App.css'
import { Route, Routes, NavLink } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';


function App() {
  return (
    <div className="container pt-5">
      <div>
        <ul className="nav justify-content-center fs-5 mb-4">
          <li className="nav-item"><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to={'/about'}>About</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to={'/contact'}>Contact</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to={'/gallery'}>Gallery</NavLink></li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App
