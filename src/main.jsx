import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Skills from './components/Skills.jsx'
import Profile from './components/Profile.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Skills />
    <Profile />
    <Projects />
    <Footer />
  </StrictMode>,
)
