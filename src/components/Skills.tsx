import React from 'react';
import { Smartphone, Cloud, Code, Database, Zap, Layers } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills = [
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Kotlin, Java, Jetpack Compose',
      color: 'bg-green-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'AWS Amplify ,S3 ,EC2',
      color: 'bg-blue-500'
    },
    {
      icon: Code,
      title: 'Competitive Programming',
      description: 'C++, Data Structures & Algorithms',
      color: 'bg-purple-500'
    },
    {
      icon: Database,
      title: 'Firebase',
      description: 'Firestore, Authentication, Storage',
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'App Optimization, Memory Management',
      color: 'bg-yellow-500'
    },
    {
      icon: Layers,
      title: 'Architecture',
      description: 'MVVM, Clean Architecture, Dependency Injection',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
            Skills & Expertise
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto transition-colors duration-300`}>
            Passionate about building robust Android applications and exploring cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-100 hover:border-gray-200'} animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${skill.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors duration-300`}>
                  <skill.icon className={`h-6 w-6 ${skill.color.replace('bg-', 'text-')}`} />
                </div>
                <div className="ml-4">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                    {skill.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;