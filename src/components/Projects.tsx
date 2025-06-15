import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <Link
    to={`/project/${project.id}`}
    className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  </Link>
);

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
