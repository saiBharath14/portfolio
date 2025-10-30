import React from 'react'
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Circle,
  Zap,
  Database as MongoIcon,
  GitBranch,
  Cloud
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End (UI)",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ]
    },
    {
      title: "Back-End (API)",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "Authentication/JWT", level: 85 },
        //{ name: "Socket.io", level: 75 },
        //{ name: "Middleware", level: 90 },
      ]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 85 },
        { name: "Data Modeling", level: 85 },
        { name: "Indexing", level: 80 },
        { name: "Aggregation", level: 75 },
        { name: "MongoDB Atlas", level: 85 },
      ]
    },
    {
      title: "Tools/DevOps",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 95 },
        { name: "Vercel", level: 85 },
        { name: "Netlify", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "Postman", level: 90 },
        //{ name: "Docker", level: 70 },
        { name: "Figma", level: 80 }
      ]
    }
  ]

  const techIcons = [
    { name: "React", icon: <Circle className="h-8 w-8" />, color: "text-blue-500" },
    { name: "Node.js", icon: <Zap className="h-8 w-8" />, color: "text-green-500" },
    { name: "MongoDB", icon: <MongoIcon className="h-8 w-8" />, color: "text-green-600" },
    { name: "Express", icon: <Server className="h-8 w-8" />, color: "text-gray-500" },
    { name: "Git", icon: <GitBranch className="h-8 w-8" />, color: "text-orange-500" },
    //{ name: "Cloud", icon: <Cloud className="h-8 w-8" />, color: "text-blue-400" }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {techIcons.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <div className={`${tech.color} mb-2`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RESTful API Design",
              "Data Science Applications",
              "Power Bi",
              "Version Control",
              "Code Review",
              "Documentation",
              "UI/UX Design",
              "Responsive Design"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-foreground transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills