import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      role: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      companyUrl: '#',
      location: 'San Francisco, CA',
      duration: 'Jan 2022 - Present',
      startDate: '2022-01',
      endDate: 'Present',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'TypeScript'],
      responsibilities: [
        'Lead development of microservices architecture serving 1M+ users',
        'Mentor junior developers and conduct code reviews',
        'Collaborate with product team to define technical requirements',
        'Optimize application performance and scalability'
      ],
      achievements: [
        'Reduced API response time by 40% through caching optimization',
        'Led migration to cloud infrastructure, reducing costs by 30%',
        'Implemented CI/CD pipeline, improving deployment frequency by 60%'
      ]
    },
    {
      id: '2',
      role: 'Full Stack Developer',
      company: 'StartupXYZ',
      companyUrl: '#',
      location: 'Remote',
      duration: 'Mar 2020 - Dec 2021',
      startDate: '2020-03',
      endDate: '2021-12',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Redis', 'Kubernetes'],
      responsibilities: [
        'Developed and maintained web applications for e-commerce platform',
        'Implemented real-time features using WebSocket technology',
        'Created RESTful APIs and integrated third-party services',
        'Participated in agile development process and sprint planning'
      ],
      achievements: [
        'Built payment processing system handling $2M+ in transactions',
        'Developed admin dashboard increasing operational efficiency by 50%',
        'Implemented automated testing, reducing bugs by 35%'
      ]
    },
    {
      id: '3',
      role: 'Frontend Developer',
      company: 'Digital Agency Pro',
      companyUrl: '#',
      location: 'New York, NY',
      duration: 'Jun 2018 - Feb 2020',
      startDate: '2018-06',
      endDate: '2020-02',
      technologies: ['React', 'JavaScript', 'SASS', 'Webpack', 'Git'],
      responsibilities: [
        'Developed responsive web applications for various clients',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Optimized web performance and accessibility standards',
        'Maintained and updated existing client websites'
      ],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved website loading speed by 60% through optimization',
        'Achieved 98% client satisfaction rate across all projects'
      ]
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Professional Experience</h1>
        <p className="text-muted-foreground text-lg">
          Building exceptional digital experiences across diverse industries
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative flex gap-8 mb-12">
            {/* Timeline Dot */}
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 portfolio-card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href={exp.companyUrl}
                      className="text-primary hover:text-primary-glow font-semibold transition-colors"
                    >
                      {exp.company}
                    </a>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-success mt-1.5">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-12 p-8 bg-gradient-card rounded-2xl border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-4">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
            <p className="text-sm text-muted-foreground">React, Vue.js, TypeScript, Tailwind CSS, Next.js</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Backend</h3>
            <p className="text-sm text-muted-foreground">Node.js, Express, Python, PostgreSQL, MongoDB</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Cloud & DevOps</h3>
            <p className="text-sm text-muted-foreground">AWS, Docker, Kubernetes, CI/CD, Redis</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Tools & Others</h3>
            <p className="text-sm text-muted-foreground">Git, Webpack, Jest, Figma, Agile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;