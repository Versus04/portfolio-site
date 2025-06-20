import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
            Get In Touch
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto transition-colors duration-300`}>
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 transition-colors duration-300`}>
                Let's Connect
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 transition-colors duration-300`}>
                Whether you're looking to collaborate on a project, need Android development expertise, 
                or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-teal-100 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                    Email
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                    shubhambind2004@gmail.com
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className={`pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
              <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://github.com/Versus04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-lg transition-colors duration-200 transform hover:scale-105`}
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="www.linkedin.com/in/shubham-bind-607404248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:shubhambind2004@gmail.com"
                  className="p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
