import React from 'react'
import { ExternalLink, Github, Calendar, Users, Code, Database, Server } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Bookmart - Second Hand Book Selling Store",
      description: "A full-stack MERN-based online book marketplace where users can register, list, browse, filter, and purchase second-hand books. Includes secure authentication, CRUD operations, and a persistent shopping cart.",
  image: "/images/bookmart-fullstack.jpg",
      type: "Full-Stack MERN Application",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Context API", "Mongoose"],
      features: [
        "User authentication with JWT and bcrypt",
        "Add, update, and delete book listings",
        "Dynamic server-side filtering and search",
        "Persistent shopping cart stored in MongoDB",
        "Access control for book owners",
        "Secure REST API with Mongoose validation"
      ],
      liveUrl: "https://bookmart-demo.vercel.app",
      githubUrl: "https://github.com/MERNintaing-bugs/Book-Mart",
      status: "Completed",
      date: "2025"
    },
    {
      title: "Fertile minds UI/UX Design",
      description: "A modern and intuitive user interface design about fertilizer usage prediction in agriculture. Focused on enhancing user experience with clean layouts, easy navigation, and smooth user flows for their understanding in indian languages.",
      image: "/images/fertile-minds-ui.png",
      type: "UI/UX Design Project",
      technologies: ["Figma", "Prototyping", "Wireframing", "User Flow", "Responsive Design"],
      features: [
        " web application and mobile application both takes dynamic input values from users like “crop type” , ”temperature”, ”humidity”, ”soil\u00a0moisture” ,”soil\u00a0type” and nutrient values like “nitrogen” , ”Potassium” , ”phosphorous”",
        "For best user Experience, our Web app/Mobile app can run in multiple regional languages like Hindi, English, Telugu and also in many other languages.",
        "Interactive components and navigation flow"
      ],
      liveUrl: "https://www.figma.com/design/FHLGpGsciYtVEpZWfczMaj/Untitled?node-id=0-1&t=Czfu74f6ohh5YytE-1",
      status: "Completed",
      date: "2024"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'Planned':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my full-stack MERN applications and the technologies that power them
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Image */}
              {/** Use a larger image area for the Fertile minds project so the screenshot is more visible **/}
              <div className={project.title === 'Fertile minds UI/UX Design' ? 'relative h-80 bg-muted overflow-hidden' : 'relative h-48 bg-muted overflow-hidden'}>
                <a href={project.image} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback to icons if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                </a>
                <div className="absolute inset-0 flex items-center justify-center bg-muted" style={{display: 'none'}}>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <Database className="h-12 w-12" />
                    <Server className="h-12 w-12" />
                    <Code className="h-12 w-12" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.date}</span>
                    </div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-muted-foreground ml-3.5">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-border text-foreground text-sm font-medium rounded-md hover:bg-accent transition-colors duration-200"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/saiBharath14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <Github className="mr-2 h-5 w-5" />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects