import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Code, Smartphone, Cloud, Zap } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogProps {
  darkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
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

  return (
    <section id="blog" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
            Latest Blog Posts
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto transition-colors duration-300`}>
            Sharing insights on Android development, cloud computing, and competitive programming
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => {
            const IconComponent = getCategoryIcon(post.category);
            const colorClass = getCategoryColor(post.category);
            
            return (
              <article
                key={post.id}
                className={`group ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-100 hover:border-gray-200'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
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
                  
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white group-hover:text-teal-400' : 'text-gray-900 group-hover:text-teal-600'} mb-3 transition-colors duration-200`}>
                    {post.title}
                  </h3>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3 transition-colors duration-300 leading-relaxed`}>
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className={`inline-flex items-center ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'} font-medium transition-colors duration-200`}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-flex items-center px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
          >
            View All Posts
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;