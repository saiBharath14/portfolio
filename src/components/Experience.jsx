import React from 'react'
import { Calendar, MapPin, Building2, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Infosys Springboard",
      location: "Remote",
      period: "",
      description: [
        "Developed an interactive ChatGPT-style chatbot using Streamlit with a modern, intuitive interface",
        "Integrated local large language models (Phi-3, Mistral, LLaMA2) using Ollama for offline, high-performance inference",
        "Implemented OCR functionality with Tesseract to extract and process text from uploaded images.",
        "Designed a modular architecture supporting multi-session chat management and persistent conversation history.",
        "Optimized response handling and model switching for seamless user experience across different LLMs.",
        "Deployed the application locally for efficient and secure testing of various open-source LLMs."
      ],
      technologies: ["Streamlit", "Ollama", "Phi-3", "Mistral", "LLaMA2", "Tesseract OCR", "Python",  "Git"]

    },
    {
      title: "MERN Full Stack with AI Intern",
      company: "Council for Skills and Competencies (CSC India) under APSCHE, in collaboration with Datavalley Inc",
      location: "Remote",
      period: "May 12, 2025 – June 30, 2025",
      description: [
        "Developed a full-stack web application BookMart, a platform for buying and selling second-hand books integrated with AI-powered recommendations.",
        "Built an interactive React.js frontend connected to a Node.js + Express.js backend and MongoDB for efficient data handling.",
        "Implemented secure user authentication, dynamic routing, and RESTful APIs for smooth end-to-end functionality.",
        "Collaborated in an agile environment, focusing on scalability, UI/UX optimization, and clean code practices.",
        "Successfully deployed the application for testing and performance evaluation."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "AI APIs", "Git", "Render"]
    },
    
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey in full-stack development and the projects that shaped my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-start text-muted-foreground mb-2">
                        <Building2 className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      {exp.period && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together?
          </p>
          <a
            href="mailto:saibharathkandimalla@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience