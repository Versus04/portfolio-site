import React from 'react';
import { Home, User, Code, BookOpen, Mail, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate, darkMode, toggleDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: User },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md z-50 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Shubham Kumar Bind
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === id 
                      ? 'text-teal-600' 
                      : darkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
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

            <div className="md:hidden flex space-x-4">
              {navItems.map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    activeSection === id 
                      ? 'text-teal-600 bg-teal-50' 
                      : darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;