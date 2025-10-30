import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import InAction from './components/InAction'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      setDarkMode(true) // Default to dark mode
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const openCommandPalette = () => {
    setCommandPaletteOpen(true)
  }

  const closeCommandPalette = () => {
    setCommandPaletteOpen(false)
  }

  // Keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        openCommandPalette()
      }
      if (event.key === 'Escape') {
        closeCommandPalette()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        openCommandPalette={openCommandPalette}
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <InAction />
        <Education />
        <Contact />
      </main>
      
      <Footer />
      
      {commandPaletteOpen && (
        <CommandPalette 
          isOpen={commandPaletteOpen}
          onClose={closeCommandPalette}
        />
      )}
    </div>
  )
}

export default App