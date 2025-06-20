import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Moon, Sun, CheckCircle, Zap, Target } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === parseInt(id || '0'));
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
            Project Not Found
          </h1>
          <Link 
            to="/" 
            className={`inline-flex items-center ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'} font-medium transition-colors duration-200`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md z-50 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Shubham
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link 
                to="/" 
                className={`inline-flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium transition-colors duration-200`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} pt-24 pb-12 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 leading-tight transition-colors duration-300`}>
            {project.title}
          </h1>
          
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8 transition-colors duration-300`}>
            {project.description}
          </p>

          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-6 py-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-lg transition-colors duration-200 font-medium`}
            >
              <Github className="h-5 w-5 mr-2" />
              View Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-6 transition-colors duration-300`}>
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Tech Stack */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-6 transition-colors duration-300`}>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'} rounded-full text-sm font-medium border ${darkMode ? 'border-gray-600' : 'border-gray-200'} transition-colors duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-6 transition-colors duration-300`}>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center transition-colors duration-300`}>
                  <CheckCircle className="h-5 w-5 mr-2 text-teal-600" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start transition-colors duration-300`}>
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-6 transition-colors duration-300`}>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center transition-colors duration-300`}>
                  <Zap className="h-5 w-5 mr-2 text-orange-600" />
                  Challenges
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start transition-colors duration-300`}>
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-6 transition-colors duration-300`}>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center transition-colors duration-300`}>
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  Key Learnings
                </h3>
                <ul className="space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start transition-colors duration-300`}>
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className={`mt-16 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 transition-colors duration-300`}>
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map(relatedProject => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className={`group block ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg p-6 hover:shadow-md transition-all duration-300 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <span className="text-xs text-teal-600 font-medium">{relatedProject.category}</span>
                  <h4 className={`font-semibold ${darkMode ? 'text-white group-hover:text-teal-400' : 'text-gray-900 group-hover:text-teal-600'} mt-2 mb-2 transition-colors duration-200`}>
                    {relatedProject.title}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300 leading-relaxed`}>
                    {relatedProject.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;