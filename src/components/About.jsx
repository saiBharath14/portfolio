import React from 'react'
import { Code, Database, Server, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description: "Building robust REST APIs with Node.js and Express.js, implementing authentication, validation, and error handling."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development", 
      description: "Creating modern, responsive UIs with React, implementing state management, and ensuring optimal user experience."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "Designing and optimizing MongoDB schemas, implementing data relationships, and ensuring data integrity."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Full-Stack Integration",
      description: "Seamlessly connecting frontend and backend, implementing real-time features, and ensuring smooth data flow."
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated MERN Stack Developer with a passion for building scalable, 
              maintainable web applications. My journey in full-stack development has 
              equipped me with deep expertise in both frontend and backend technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              On the backend, I specialize in creating robust REST APIs using Node.js and 
              Express.js, implementing secure authentication systems, data validation, and 
              error handling. I have extensive experience with MongoDB for data management, 
              including schema design, indexing, and performance optimization.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              For the frontend, I excel at building modern, responsive user interfaces with 
              React. I implement state management solutions, create reusable components, and 
              ensure optimal performance across all devices. My focus is always on creating 
              intuitive user experiences that drive engagement and business success.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets me apart is my ability to seamlessly integrate frontend and backend 
              systems, ensuring smooth data flow and real-time functionality. I'm committed 
              to writing clean, maintainable code and following best practices in both 
              development and deployment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About