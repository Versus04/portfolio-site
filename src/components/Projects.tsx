import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Smartphone, Cloud, Code, Zap } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Android Development':
        return Smartphone;
      case 'Cloud Computing':
        return Cloud;
      case 'Algorithms':
        return Code;
      case 'AI & Health':
        return Zap;
      default:
        return Code;
    }
  };

  const getProjectColor = (category: string) => {
    switch (category) {
      case 'Android Development':
        return 'bg-green-500';
      case 'Cloud Computing':
        return 'bg-blue-500';
      case 'Algorithms':
        return 'bg-purple-500';
      case 'AI & Health':
        return 'bg-teal-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
            Featured Projects
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto transition-colors duration-300`}>
            A collection of my recent work in Android development and cloud technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getProjectIcon(project.category);
            const colorClass = getProjectColor(project.category);
            
            return (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className={`group ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up block border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colorClass} bg-opacity-10`}>
                      <IconComponent className={`h-8 w-8 ${colorClass.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white group-hover:text-teal-400' : 'text-gray-900 group-hover:text-teal-600'} mb-3 transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 transition-colors duration-300 leading-relaxed`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} rounded-full text-sm font-medium transition-colors duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className={`px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} rounded-full text-sm font-medium transition-colors duration-300`}>
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.github, '_blank');
                      }}
                      className={`flex items-center px-4 py-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-lg transition-colors duration-200 cursor-pointer`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </div>
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.live, '_blank');
                      }}
                      className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;