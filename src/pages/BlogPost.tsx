import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));
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

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
            Post Not Found
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
              Shubham Kumar Bind
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 leading-tight transition-colors duration-300`}>
            {post.title}
          </h1>
          
          <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-6 transition-colors duration-300`}>
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-colors duration-300`}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-6 transition-colors duration-300`}>
            {post.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className={`mt-16 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-teal-600 font-bold text-xl">S</span>
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                Shubham
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                Android Developer | Cloud Enthusiast | Competitive Programmer
              </p>
              <div className="flex space-x-3 mt-2">
                <a href="https://github.com" className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'} transition-colors duration-200`}>
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'} transition-colors duration-200`}>
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:shubham@example.com" className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'} transition-colors duration-200`}>
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className={`mt-16 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 transition-colors duration-300`}>
            More Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className={`group block ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg p-6 hover:shadow-md transition-all duration-300 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                >
                  <span className="text-xs text-teal-600 font-medium">{relatedPost.category}</span>
                  <h4 className={`font-semibold ${darkMode ? 'text-white group-hover:text-teal-400' : 'text-gray-900 group-hover:text-teal-600'} mt-2 mb-2 transition-colors duration-200`}>
                    {relatedPost.title}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300 leading-relaxed`}>
                    {relatedPost.excerpt.substring(0, 120)}...
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;