export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
  features: string[];
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ECommerce Android App',
    description: 'A full-featured e-commerce application built with Kotlin and Jetpack Compose',
    fullDescription: `This comprehensive e-commerce application represents a modern approach to mobile shopping experiences. Built entirely with Kotlin and Jetpack Compose, it showcases the latest Android development practices and provides users with a seamless shopping journey.

The application features a clean, intuitive interface that makes browsing and purchasing products effortless. Users can explore various product categories, view detailed product information, manage their shopping cart, and complete secure transactions.

**Architecture and Design Patterns**

The app follows Clean Architecture principles with MVVM pattern implementation. This ensures separation of concerns, making the codebase maintainable and testable. The use of Dependency Injection with Hilt provides loose coupling between components.

**Key Technical Implementations**

The application leverages Room Database for local data persistence, ensuring offline functionality for previously viewed products and user preferences. Retrofit handles all network operations with proper error handling and retry mechanisms.

**User Experience Focus**

Special attention was paid to creating smooth animations and transitions throughout the app. The shopping cart updates with subtle animations, product images load with shimmer effects, and navigation between screens feels natural and responsive.

**Performance Optimizations**

Image loading is optimized using Coil with proper caching strategies. The app implements lazy loading for product lists and uses pagination to handle large datasets efficiently. Memory usage is carefully managed to prevent OOM errors on lower-end devices.`,
    image: 'https://images.pexels.com/photos/4039452/pexels-photo-4039452.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Retrofit', 'Hilt', 'Coil'],
    github: 'https://github.com/shubham/ecommerce-app',
    live: 'https://play.google.com/store/apps/details?id=com.shubham.ecommerce',
    category: 'Android Development',
    features: [
      'User authentication and profile management',
      'Product browsing with advanced filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment integration',
      'Order tracking and history',
      'Push notifications for offers and updates',
      'Offline mode for browsing',
      'Dark mode support'
    ],
    challenges: [
      'Implementing complex UI animations with Jetpack Compose',
      'Managing state across multiple screens efficiently',
      'Optimizing performance for large product catalogs',
      'Ensuring secure payment processing',
      'Handling offline scenarios gracefully'
    ],
    learnings: [
      'Advanced Jetpack Compose techniques for complex UIs',
      'State management best practices in modern Android',
      'Performance optimization strategies for data-heavy apps',
      'Security considerations for e-commerce applications',
      'User experience design for mobile commerce'
    ]
  },
  {
    id: 2,
    title: 'Cloud-Based Task Manager',
    description: 'Serverless task management system with real-time synchronization',
    fullDescription: `A sophisticated task management application that leverages serverless architecture to provide seamless synchronization across multiple devices. This project demonstrates the power of cloud-native development and modern Android architecture.

The application provides users with a comprehensive task management solution that works offline and syncs automatically when connected. Built with a serverless backend using AWS services, it ensures scalability and cost-effectiveness.

**Serverless Architecture**

The backend is built entirely on AWS serverless services. API Gateway handles all HTTP requests, Lambda functions process business logic, and DynamoDB stores all data. This architecture provides automatic scaling and eliminates server management overhead.

**Real-time Synchronization**

One of the key features is real-time synchronization across devices. Using WebSocket connections through API Gateway, changes made on one device are instantly reflected on all other connected devices. This creates a seamless multi-device experience.

**Android Implementation**

The Android app is built with modern architecture components including ViewModel, LiveData, and Room for local storage. The app works completely offline and queues changes for synchronization when connectivity is restored.

**Security and Authentication**

User authentication is handled through AWS Cognito, providing secure sign-up, sign-in, and user management. All API calls are authenticated using JWT tokens, ensuring data security and user privacy.

**Performance Considerations**

The app implements intelligent caching strategies to minimize network requests. Local data is prioritized for immediate response, while background sync ensures data consistency. Conflict resolution handles simultaneous edits gracefully.`,
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Android', 'Kotlin', 'WebSocket', 'Cognito'],
    github: 'https://github.com/shubham/cloud-task-manager',
    live: 'https://taskmanager.shubham.dev',
    category: 'Cloud Computing',
    features: [
      'Real-time task synchronization across devices',
      'Offline-first architecture with automatic sync',
      'Collaborative task sharing and assignment',
      'Smart notifications and reminders',
      'Advanced filtering and search capabilities',
      'Data export and backup functionality',
      'Multi-language support',
      'Customizable themes and layouts'
    ],
    challenges: [
      'Implementing real-time synchronization with conflict resolution',
      'Designing efficient offline-first architecture',
      'Managing serverless cold starts for optimal performance',
      'Handling complex data relationships in NoSQL database',
      'Ensuring data consistency across distributed systems'
    ],
    learnings: [
      'Serverless architecture patterns and best practices',
      'Real-time data synchronization techniques',
      'NoSQL database design and optimization',
      'WebSocket implementation for mobile applications',
      'Cloud security and authentication strategies'
    ]
  },
  {
    id: 3,
    title: 'Competitive Programming Tracker',
    description: 'Track your competitive programming progress across multiple platforms',
    fullDescription: `A comprehensive tracking application designed specifically for competitive programmers who want to monitor their progress across multiple coding platforms. This app aggregates data from various competitive programming websites and provides insightful analytics.

The application serves as a central hub for competitive programmers to track their submissions, contest performances, and skill development over time. It provides detailed analytics and visualizations to help users identify strengths and areas for improvement.

**Multi-Platform Integration**

The app integrates with major competitive programming platforms including Codeforces, AtCoder, CodeChef, and LeetCode. It automatically fetches user data through APIs and web scraping techniques, providing a unified view of programming activity.

**Advanced Analytics**

Users can view detailed statistics including problem-solving patterns, topic-wise performance, contest rating trends, and submission frequency. The app generates beautiful charts and graphs to visualize progress over time.

**Algorithm and Data Structure Tracking**

The application categorizes problems by algorithms and data structures, helping users identify which topics they need to focus on. It provides recommendations for practice problems based on current skill level and learning goals.

**Contest Preparation Features**

Special features for contest preparation include virtual contest simulation, problem recommendation engine, and performance prediction based on historical data. Users can set goals and track their progress toward achieving them.

**Community Features**

The app includes social features where users can compare their progress with friends, join study groups, and participate in challenges. This gamification aspect motivates consistent practice and improvement.`,
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['C++', 'Android', 'Firebase', 'Material Design', 'Charts Library', 'Web Scraping'],
    github: 'https://github.com/shubham/cp-tracker',
    live: 'https://cptracker.shubham.dev',
    category: 'Algorithms',
    features: [
      'Multi-platform data aggregation and synchronization',
      'Comprehensive analytics and progress visualization',
      'Topic-wise problem categorization and tracking',
      'Contest performance analysis and predictions',
      'Personalized problem recommendations',
      'Virtual contest simulation environment',
      'Social features and friend comparisons',
      'Goal setting and achievement tracking'
    ],
    challenges: [
      'Integrating with multiple APIs and handling rate limits',
      'Implementing efficient web scraping for platforms without APIs',
      'Designing complex data visualization for mobile screens',
      'Creating accurate problem difficulty and topic classification',
      'Handling large datasets and optimizing query performance'
    ],
    learnings: [
      'API integration and data aggregation techniques',
      'Advanced data visualization for mobile applications',
      'Web scraping strategies and best practices',
      'Algorithm analysis and problem classification methods',
      'Performance optimization for data-intensive applications'
    ]
  },
  {
    id: 4,
    title: 'Smart Fitness Tracker',
    description: 'AI-powered fitness tracking with personalized workout recommendations',
    fullDescription: `An intelligent fitness tracking application that leverages artificial intelligence to provide personalized workout recommendations and comprehensive health monitoring. This app represents the convergence of mobile development, AI, and health technology.

The application goes beyond simple step counting to provide users with intelligent insights about their fitness journey. Using machine learning algorithms, it analyzes user behavior, preferences, and progress to create personalized workout plans and nutrition recommendations.

**AI-Powered Recommendations**

The core feature of the app is its AI recommendation engine. Using TensorFlow Lite models running on-device, the app analyzes user workout patterns, performance metrics, and goals to suggest optimal exercises, rest periods, and progression strategies.

**Comprehensive Health Monitoring**

The app integrates with various sensors and wearable devices to track multiple health metrics including heart rate, sleep patterns, stress levels, and activity intensity. All data is processed locally to ensure privacy and security.

**Wear OS Integration**

A companion Wear OS app provides seamless workout tracking directly from the wrist. Users can start workouts, view real-time metrics, and receive coaching cues without needing to interact with their phone during exercise.

**Health Connect Integration**

The app leverages Android's Health Connect platform to aggregate health data from multiple sources, providing users with a comprehensive view of their health and fitness metrics in one place.

**Personalized Coaching**

Using natural language processing, the app provides personalized coaching messages and motivation based on user progress and goals. The AI coach adapts its communication style to match user preferences and responds to performance trends.`,
    image: 'https://images.pexels.com/photos/4048914/pexels-photo-4048914.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Kotlin', 'TensorFlow Lite', 'Health Connect', 'Wear OS', 'Room', 'Sensors API'],
    github: 'https://github.com/shubham/smart-fitness-tracker',
    live: 'https://fitnesstracker.shubham.dev',
    category: 'AI & Health',
    features: [
      'AI-powered personalized workout recommendations',
      'Comprehensive health and fitness metric tracking',
      'Wear OS companion app for seamless workout tracking',
      'Health Connect integration for unified health data',
      'Intelligent coaching and motivation system',
      'Sleep pattern analysis and optimization',
      'Nutrition tracking with AI-powered suggestions',
      'Social challenges and community features'
    ],
    challenges: [
      'Implementing on-device machine learning for real-time recommendations',
      'Optimizing battery usage for continuous health monitoring',
      'Ensuring data privacy and security for sensitive health information',
      'Creating accurate activity recognition algorithms',
      'Designing intuitive UI for complex health data visualization'
    ],
    learnings: [
      'On-device machine learning implementation with TensorFlow Lite',
      'Health data integration and privacy best practices',
      'Sensor data processing and activity recognition',
      'Wear OS development and cross-device synchronization',
      'AI model optimization for mobile deployment'
    ]
  }
];