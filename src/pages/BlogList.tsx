import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ArrowLeft, Code, Smartphone, Cloud, Zap, Moon, Sun } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogList: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Android Development':
        return Smartphone;
      case 'Cloud Computing':
        return Cloud;
      case 'Performance':
        return Zap;
      case 'Algorithms':
        return Code;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Android Development':
        return 'bg-green-500';
      case 'Cloud Computing':
        return 'bg-blue-500';
      case 'Performance':
        return 'bg-yellow-500';
      case 'Algorithms':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 leading-tight transition-colors duration-300`}>
            All Blog Posts
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-colors duration-300`}>
            Explore all my articles on Android development, cloud computing, and competitive programming
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => {
            const IconComponent = getCategoryIcon(post.category);
            const colorClass = getCategoryColor(post.category);
            
            return (
              <article
                key={post.id}
                className={`group ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-100 hover:border-gray-200'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colorClass} bg-opacity-10`}>
                      <IconComponent className={`h-6 w-6 ${colorClass.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3 transition-colors duration-300`}>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white group-hover:text-teal-400' : 'text-gray-900 group-hover:text-teal-600'} mb-3 transition-colors duration-200 leading-tight`}>
                    {post.title}
                  </h3>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm leading-relaxed transition-colors duration-300`}>
                    {post.excerpt.substring(0, 120)}...
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className={`inline-flex items-center ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'} font-medium transition-colors duration-200 text-sm`}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;