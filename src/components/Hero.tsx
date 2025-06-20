import React from 'react';
import { ArrowRight, Github, Linkedin ,Mail ,FileText} from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, darkMode }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'} overflow-hidden transition-colors duration-300`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${darkMode ? 'bg-teal-900' : 'bg-teal-100'} rounded-full opacity-20 animate-pulse transition-colors duration-300`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} rounded-full opacity-20 animate-pulse delay-300 transition-colors duration-300`}></div>
        <div className={`absolute top-1/2 right-1/3 w-32 h-32 ${darkMode ? 'bg-green-900' : 'bg-green-100'} rounded-full opacity-20 animate-pulse delay-700 transition-colors duration-300`}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 transition-colors duration-300`}>
            Hi, I'm <span className="text-teal-600">Shubham</span>.
          </h1>
          
          <p className={`text-xl sm:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300`}>
            Passionate <span className="font-semibold text-teal-600">Computer Science student</span> specializing in <span className="font-semibold text-teal-600">Android development</span> and <span className="font-semibold text-teal-600">AI applications</span>
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Versus04"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <Github className={`h-6 w-6 ${darkMode ? 'text-white group-hover:text-teal-400' : 'text-gray-700 group-hover:text-teal-600'} transition-colors duration-200`} />
            </a>
            <a
              href="www.linkedin.com/in/shubham-bind-607404248"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </a>
            <a
  href="mailto:shubhambind2004@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group p-4 bg-red-600 hover:bg-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
>
  <Mail className="h-6 w-6 text-white" />
</a>
<a
  href="/Shubham_Bind_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
>
  <FileText className="h-5 w-5 text-white" />
  <span className="text-white font-medium">Resume</span>
</a>



          </div>
          
          <button
            onClick={() => onNavigate('projects')}
            className={`group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
              darkMode 
                ? 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white shadow-lg hover:shadow-teal-500/25' 
                : 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white shadow-lg hover:shadow-teal-500/25'
            }`}
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${darkMode ? 'border-gray-500' : 'border-gray-400'} rounded-full flex justify-center transition-colors duration-300`}>
          <div className={`w-1 h-3 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mt-2 animate-pulse transition-colors duration-300`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;