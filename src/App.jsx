import './App.css'
import { Route, Routes, NavLink, useNavigate } from 'react-router'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import User from './pages/User'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsAuth(true)
    navigate('/admin')
  }

  return (
    <div className="container pt-5">
      <ul className="nav justify-content-center fs-5 mb-4">
        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/gallery">Gallery</NavLink></li>
        {isAuth ? <li className="nav-item"><NavLink className="nav-link" to="/admin">Admin</NavLink></li> : <button onClick={handleLogin} className="btn btn-outline-primary">Login</button>}
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/admin" element={<Admin isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
