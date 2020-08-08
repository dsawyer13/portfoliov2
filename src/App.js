import React, { useState } from 'react'
import './App.scss'
import Projects from './components/Projects'
import About from './components/About'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"



function App() {
  const [minimized, setMinimized] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const handleNav = (page) => {
    if (page === 'home') {
      setMinimized(false)
      setCurrentPage(page)
    } else {
      setMinimized(true)
      setCurrentPage(page)
    }
  }


  return (
    <div className="App">
      <nav role='navigation'>
        <p className='text--yellow' onClick={() => handleNav('home')}>Home</p>
        <p className='text--green' onClick={() => handleNav('projects')}>Projects</p>
        <p className='text--red' onClick={() => handleNav('about')}>About</p>
      </nav>
      {/* Make minimized a conditional style */}
      <motion.div 
        className={`text--home ${minimized ? 'minimized' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
        <div>
          <h1>Dylan Sawyer</h1>
          <h2>&#60;Web Developer&#8725;&#62;</h2>
        </div>
        <ul className='social-links'>
          <a href='https://github.com/dsawyer13' target='_blank' rel='noreferrer noopener'><FontAwesomeIcon icon={faGithub} /></a>
          <a href='https://www.linkedin.com/in/dylan-sawyer13' target='_blank' rel='noreferrer noopener'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='mailto:sawyer.dylan@aol.com'><FontAwesomeIcon icon={faEnvelope} /></a>
        </ul>
      </motion.div>
      {!minimized
        ? null
        : (currentPage === 'projects')
        ? <Projects />
        : <About />
      }
    </div>
  );
}

export default App;
