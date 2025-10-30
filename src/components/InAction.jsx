import React from 'react'
import { Camera, Trophy, Calendar, MapPin, Award, ExternalLink } from 'lucide-react'

const InAction = () => {
  const competitions = [
  
    {
      title: "Design Venture - 2025",
      date: "march 21 (24hrs hackathon)",
      location: "VVIT, Nambur, Andhra Pradesh",
      position: "Third Place",
      description: "Designed a project called 'trip scheduler' in 24hrs using Figma",
      image: "/images/design-venture-2025.jpg.jpeg",
      technologies: ["UI/UX", "Design thinking","Figma"],
      certificate: "https://www.linkedin.com/posts/sai-bharath-kandimalla_designventure-teamwork-uiux-activity-7310685500875460610-pv9L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENnBYwBKCM2SNpGkOtiZAyDdOpnKA2q8Kc",
      team: "Co-founder & Developer"
    },
    {
      title: "IDE Bootcamp 2024 Edition-2",
      date: "September 23rd to September 27th (2025)",
      location: "Gitam - Vizag, Andhra Pradesh",
      description: "Participated in a 6-week bootcamp on Innovation, Design, and Entrepreneurship.",
      image: "/images/ide-bootcamp-2024.jpg",
      technologies: ["Design Thinking", "Prototyping", "Navigation market minds"],
      certificate: "https://www.linkedin.com/posts/sai-bharath-kandimalla_wadhwani-ministryofeducation-idebootcamp24-activity-7246098218848026624-ost8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENnBYwBKCM2SNpGkOtiZAyDdOpnKA2q8Kc",
      team: "Aprendiza"
    }
  ]

  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "2+ Competitions",
      description: "Participated in various tech competitions"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Multiple Awards",
      description: "Won prizes and recognition"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Documented Journey",
      description: "Captured moments and learnings"
    }
  ]

  return (
    <section id="in-action" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Competition highlights and achievements showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        {/* Achievements Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-primary mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Competition Timeline */}
        <div className="space-y-20">
          {competitions.map((competition, index) => (
            <div 
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Competition Image */}
              <div className="w-full">
                <div className="relative group overflow-hidden rounded-lg bg-muted">
                  <img 
                    src={competition.image} 
                    alt={competition.title}
                    loading="lazy"
                    className="w-full h-full aspect-video object-cover"
                    onError={(e) => {
                      // Fallback to icons if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="aspect-video flex items-center justify-center bg-muted" style={{display: 'none'}}>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <Camera className="h-16 w-16" />
                      <Trophy className="h-16 w-16" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={competition.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>

              {/* Competition Details */}
              <div className="w-full">
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {competition.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{competition.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{competition.location}</span>
                      </div>
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                        {competition.position}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {competition.description}
                  </p>

                  {/* Team Info */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-foreground">Team: </span>
                    <span className="text-sm text-muted-foreground">{competition.team}</span>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {competition.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={competition.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating on a project or competition?
          </p>
          <a
            href="mailto:saibharathkandimalla@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  )
}

export default InAction
