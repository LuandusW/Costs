import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Company from './Components/pages/Company'
import Contact from './Components/pages/Contact'
import Home from './Components/pages/Home'
import Newproject from './Components/pages/Newproject'
import Container from './Components/layout/Container'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'
import Projects from './Components/pages/Projects'
import Project from './Components/pages/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Project' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Newproject' element={<Newproject />} />
          <Route path='/Project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
