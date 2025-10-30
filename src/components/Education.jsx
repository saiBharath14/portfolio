import React from 'react'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in CSE-Data Science",
      institution: "Narasaraopeta engimeering college",
      location: "Narasaraopet",
      period: "2022 - 2026*",
      gpa: "7.8*",
      description: "Focused on software engineering, data structures, algorithms, and web development",
      relevantCourses: [
        "Data Structures and Algorithms",
        "Database Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Data Science Applications"
      ],
      achievements: [
        "Came as a Runner in UI/UX design Competetion conduction in our college By AlicesSoft",
        "Media Coordinator Of Techno Elite Club",
      ]
    },
   
    
  ]

  const certifications = [
    {
      name: "Web Development Fundamentals",
      issuer: "IBM-SkillsBuild",
      date: "August 13, 2025",
      credentialId: "7d200540-5357-41a5-a771-4af2e84ad734",
      description: "This credential earner demonstrates knowledge of web development fundamentals."
    },
    {
      name: "From Relational Model (SQL) to MongoDB's Document Model",
      issuer: "MongoDB",
      date: "July 8, 2025",
      credentialId: "b219e996-b317-417a-9126-222c721a27eb",
      description: "This digital credential validates your knowledge of converting from relational models to MongoDB's document model."
    },
    {
      name: "Artificial Intelligence Fundamentals",
      issuer: "IBM-SkillsBuild",
      date: "August 18, 2025",
      credentialId: "6dc33731-336d-4d78-b8da-c9e69405b9bd",
      description: "This credential earner demonstrates knowledge of artificial intelligence fundamentals."
    },
    
    {
      name: "JavaScript -Basic, Intermediate",
      issuer: "HackerRank",
      date: "July 07, 2025",
      certificateUrl: "https://www.hackerrank.com/certificates/iframe/d021d92995e1"
    },
    {
      name: "Node -Basic",
      issuer: "HackerRank",
      date: "July 08, 2025",
      certificateUrl: "https://www.hackerrank.com/certificates/iframe/675092de2aa6"
    }
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and professional certifications that validate my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex items-start text-muted-foreground mb-2">
                    <BookOpen className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{edu.period}</span>
                    {edu.gpa && <span className="ml-4">GPA: {edu.gpa}</span>}
                    {edu.duration && <span className="ml-4">Duration: {edu.duration}</span>}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {edu.description}
                </p>

                {/* Relevant Courses */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-foreground mb-2">Relevant Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
                        className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-sm text-muted-foreground">
                        <Award className="h-3 w-3 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Profile Photo */}
            <div className="flex flex-col items-center justify-center bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="relative mb-4">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                  <img 
                    src="/images/profile.jpg.jpeg" 
                    alt="Sai Bharath Kandimalla"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-primary/20 flex items-center justify-center text-primary text-4xl font-bold">SK</div>'
                    }}
                  />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-1">Sai Bharath Kandimalla</h4>
              <p className="text-sm text-muted-foreground text-center">
                Full-Stack Developer | MERN Stack Specialist
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-primary" />
              Professional Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {cert.issuer}
                      </p>
                      {cert.description && (
                        <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                          {cert.description}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center text-xs text-muted-foreground gap-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{cert.date}</span>
                        {cert.credentialId && (
                          <span className="ml-4">ID: {cert.credentialId}</span>
                        )}
                        {cert.certificateUrl && (
                          <a 
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 text-primary hover:underline"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="mt-8 bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Continuous Learning
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                I believe in continuous learning and staying updated with the latest technologies. 
                Here are some of my ongoing learning activities:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Regular participation in online coding challenges and hackathons</span>
                </li>
            
               
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Contributing to open-source projects and personal side projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education