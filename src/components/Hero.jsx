import React from 'react'
import { Download, Mail, Github, Linkedin, ArrowDown, ExternalLink } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6">
          <span className="text-lg text-muted-foreground">Hello, I'm</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          <span className="block">Node.js & React</span>
          <span className="block text-primary">Full-Stack Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Crafting Scalable APIs and UIs
        </p>

        {/* Professional Summary */}
        <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Passionate about building end-to-end solutions using the MERN stack. 
          I specialize in creating robust REST APIs with Node.js and Express.js, 
          connecting them seamlessly to modern React UIs. With expertise in MongoDB 
          for data management and modern deployment practices, I deliver scalable, 
          maintainable applications that drive business success.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="/resume.pdf"
            download="Sai-Bharath-Kandimalla-Resume.pdf"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Get Resume
          </a>
          
          <a
            href="mailto:saibharathkandimalla@gmail.com"
            className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Mail
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/saiBharath14"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-accent rounded-lg"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-bharath-kandimalla"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-accent rounded-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.credly.com/users/venkata-sai-bharath-kandimalla"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-accent rounded-lg"
            aria-label="Credly"
          >
            <ExternalLink className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero