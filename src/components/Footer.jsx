import React from 'react'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/saiBharath14',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://www.linkedin.com/in/sai-bharath-kandimalla',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:saibharathkandimalla@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              sai bharath kandimalla
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              MERN Stack Developer passionate about creating scalable web applications 
              and delivering exceptional user experiences through clean, efficient code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-accent rounded-lg ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:saibharathkandimalla@gmail.com"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                saibharathkandimalla@gmail.com
              </a>
              <a
                href="tel:9393001909"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                9393001909
              </a>
              <p className="text-muted-foreground">
                
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-muted-foreground text-sm">
              <span>© {currentYear} sai bharath kandimalla. All rights reserved.</span>
            </div>
            
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using React and Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}

export default Footer