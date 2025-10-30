import React, { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight, Hash, User, Briefcase, Code, Mail, Github, Linkedin, Trophy } from 'lucide-react'

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const resultsRef = useRef(null)

  const commands = [
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn more about my background and expertise',
      icon: <User className="h-4 w-4" />,
      action: () => scrollToSection('#about')
    },
    {
      id: 'skills',
      title: 'Skills & Tools',
      description: 'View my technical skills and technologies',
      icon: <Code className="h-4 w-4" />,
      action: () => scrollToSection('#skills')
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'See my professional work history',
      icon: <Briefcase className="h-4 w-4" />,
      action: () => scrollToSection('#experience')
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Browse my portfolio projects',
      icon: <Hash className="h-4 w-4" />,
      action: () => scrollToSection('#projects')
    },
    {
      id: 'in-action',
      title: 'In Action',
      description: 'View my competition highlights and achievements',
      icon: <Trophy className="h-4 w-4" />,
      action: () => scrollToSection('#in-action')
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with me',
      icon: <Mail className="h-4 w-4" />,
      action: () => scrollToSection('#contact')
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      description: 'View my GitHub repositories',
      icon: <Github className="h-4 w-4" />,
      action: () => window.open('https://github.com/saiBharath14', '_blank')
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      description: 'Connect with me on LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
      action: () => window.open('https://www.linkedin.com/in/sai-bharath-kandimalla', '_blank')
    },
    {
      id: 'email',
      title: 'Send Email',
      description: 'Open email client to contact me',
      icon: <Mail className="h-4 w-4" />,
      action: () => window.open('mailto:saibharathkandimalla@gmail.com', '_blank')
    }
  ]

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(query.toLowerCase()) ||
    command.description.toLowerCase().includes(query.toLowerCase())
  )

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  const handleKeyDown = (e) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
        }
        break
      case 'Escape':
        onClose()
        break
    }
  }

  const handleCommandClick = (command) => {
    command.action()
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filteredCommands])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 command-palette-overlay">
      <div className="flex items-start justify-center min-h-screen pt-16 px-4">
        <div className="w-full max-w-2xl bg-card border border-border rounded-lg shadow-2xl command-palette-enter">
          {/* Header */}
          <div className="flex items-center px-4 py-3 border-b border-border">
            <Search className="h-5 w-5 text-muted-foreground mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search commands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto" ref={resultsRef}>
            {filteredCommands.length === 0 ? (
              <div className="px-4 py-8 text-center text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-2" />
                <p>No commands found</p>
              </div>
            ) : (
              <div className="py-2">
                {filteredCommands.map((command, index) => (
                  <button
                    key={command.id}
                    onClick={() => handleCommandClick(command)}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-accent transition-colors ${
                      index === selectedIndex ? 'bg-accent' : ''
                    }`}
                  >
                    <div className="text-muted-foreground mr-3">
                      {command.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground truncate">
                        {command.title}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {command.description}
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-border bg-muted/30">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex space-x-4">
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs mr-1">↑↓</kbd>
                  to navigate
                </span>
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs mr-1">↵</kbd>
                  to select
                </span>
                <span className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs mr-1">esc</kbd>
                  to close
                </span>
              </div>
              <span>⌘K to open</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette