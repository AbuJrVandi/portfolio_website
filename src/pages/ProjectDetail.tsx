import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Abu</span>
              <span className="text-white">Jr</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Content */}
      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-8"
            />
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{project.description}</p>
              <div className="flex justify-center gap-6">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg border border-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">About This Project</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 leading-relaxed text-lg">{project.longDescription || project.description}</p>
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Technical Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                  >
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
