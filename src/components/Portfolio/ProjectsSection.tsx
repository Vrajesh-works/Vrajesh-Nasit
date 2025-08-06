import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'fullstack' | 'frontend' | 'backend';
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'fullstack',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, historical data visualization, and customizable alerts.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'frontend',
    },
    {
      id: '4',
      title: 'API Gateway Service',
      description: 'A microservices API gateway with rate limiting, authentication, and load balancing capabilities built with Node.js.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Redis', 'Docker', 'Kubernetes'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'backend',
    },
    {
      id: '5',
      title: 'Social Media Mobile App',
      description: 'A cross-platform mobile app for social networking with real-time messaging, photo sharing, and social features.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'mobile',
    },
    {
      id: '6',
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics platform with interactive charts, real-time data processing, and customizable reporting.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'D3.js', 'Python', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'fullstack',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web Apps' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Featured Projects</h1>
        <p className="text-muted-foreground text-lg">
          Showcasing my latest work in web development, mobile apps, and more
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span>Filter by:</span>
        </div>
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeFilter === filter.id
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card">
            {/* Project Image */}
            <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm">
                {project.title} Preview
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href={project.githubUrl}
                  className="portfolio-button secondary flex-1 text-center"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  className="portfolio-button primary flex-1 text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 p-8 bg-gradient-card rounded-2xl border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-3">Have a Project in Mind?</h2>
        <p className="text-muted-foreground mb-6">
          I'm always excited to work on new challenges and bring ideas to life.
        </p>
        <button className="portfolio-button primary">
          <span>Let's Build Something Amazing</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;