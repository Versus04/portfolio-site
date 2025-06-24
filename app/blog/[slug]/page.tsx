import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, Share2, Code, Smartphone, Database } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Blog post metadata
const blogPosts = {
  "mastering-jetpack-compose": {
    title: "Mastering Jetpack Compose: Building Modern Android UIs",
    excerpt:
      "Learn how to leverage Jetpack Compose to create beautiful, performant user interfaces with less code and better maintainability.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "UI Development",
    tags: ["Jetpack Compose", "UI", "Kotlin"],
    icon: Smartphone,
  },
  "clean-architecture-android": {
    title: "Clean Architecture in Android: A Practical Guide",
    excerpt:
      "Implement clean architecture patterns in your Android apps for better testability, maintainability, and scalability.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Architecture",
    tags: ["Clean Architecture", "MVVM", "Best Practices"],
    icon: Code,
  },
  "firebase-integration-guide": {
    title: "Firebase Integration: From Setup to Production",
    excerpt:
      "Complete guide to integrating Firebase services in your Android app, including authentication, database, and cloud messaging.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Backend",
    tags: ["Firebase", "Authentication", "Database"],
    icon: Database,
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Alex Johnson`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
  }
}

// Blog post content components
function JetpackComposePost() {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Jetpack Compose has revolutionized how we build Android UIs. After working with it for over two years, I can
        confidently say it's one of the most exciting developments in Android development.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why I Love Jetpack Compose</h2>
      <p className="leading-relaxed mb-6">
        When I first started with Compose, I was skeptical. XML layouts had served me well for years. But after building
        my first real app with Compose, I was hooked. Here's why:
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Declarative UI is a Game Changer</h3>
      <p className="leading-relaxed mb-4">
        Instead of imperatively updating views, you describe what the UI should look like for any given state. This
        mental shift took me a few weeks to fully grasp, but once it clicked, everything became so much clearer.
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`@Composable
fun UserProfile(user: User) {
    Column(
        modifier = Modifier.padding(16.dp)
    ) {
        Text(
            text = user.name,
            style = MaterialTheme.typography.headlineMedium
        )
        Text(
            text = user.email,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
    }
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Less Boilerplate, More Focus</h3>
      <p className="leading-relaxed mb-4">
        Remember <code className="bg-gray-100 px-2 py-1 rounded text-sm">findViewById</code>? ViewBinding helped, but
        Compose eliminates the need entirely. You can focus on what matters - building great user experiences.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Powerful State Management</h3>
      <p className="leading-relaxed mb-4">
        State hoisting and remember make state management intuitive. I love how explicit everything is:
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`@Composable
fun Counter() {
    var count by remember { mutableStateOf(0) }
    
    Button(onClick = { count++ }) {
        Text("Count: $count")
    }
}`}</code>
      </pre>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Pitfalls I've Encountered</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Recomposition Performance</h3>
      <p className="leading-relaxed mb-4">
        Early on, I made the mistake of not thinking about recomposition. Here's what I learned:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">remember</code> for expensive calculations
        </li>
        <li>
          Leverage <code className="bg-gray-100 px-2 py-1 rounded text-sm">derivedStateOf</code> for computed values
        </li>
        <li>Be mindful of lambda recreations</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Side Effects Management</h3>
      <p className="leading-relaxed mb-4">
        Understanding when to use <code className="bg-gray-100 px-2 py-1 rounded text-sm">LaunchedEffect</code>,{" "}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">DisposableEffect</code>, and{" "}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">SideEffect</code> took some practice. Each has its
        place:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">LaunchedEffect</code> for coroutines tied to
          composition lifecycle
        </li>
        <li>
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">DisposableEffect</code> for cleanup operations
        </li>
        <li>
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">SideEffect</code> for non-Compose side effects
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">My Compose Development Workflow</h2>
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>
          <strong>Start with the UI structure</strong> - I sketch out the composable hierarchy first
        </li>
        <li>
          <strong>Add state management</strong> - Identify what state needs to be hoisted
        </li>
        <li>
          <strong>Handle user interactions</strong> - Add click handlers and input validation
        </li>
        <li>
          <strong>Polish with animations</strong> - Compose animations are surprisingly easy
        </li>
        <li>
          <strong>Test thoroughly</strong> - Compose testing tools are fantastic
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">Tips for Getting Started</h2>
      <p className="leading-relaxed mb-4">If you're just starting with Compose, here's my advice:</p>
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>
          <strong>Start small</strong> - Convert one screen at a time
        </li>
        <li>
          <strong>Think in composition</strong> - Break everything into small, reusable composables
        </li>
        <li>
          <strong>Embrace the mindset shift</strong> - Don't try to replicate View-based patterns
        </li>
        <li>
          <strong>Use the tooling</strong> - Android Studio's Compose preview is incredible
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">Looking Forward</h2>
      <p className="leading-relaxed mb-4">Compose is still evolving rapidly. I'm excited about:</p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Compose for Desktop and Web</li>
        <li>Better performance optimizations</li>
        <li>More Material 3 components</li>
        <li>Improved tooling and debugging</li>
      </ul>

      <p className="leading-relaxed mb-8">
        The future of Android UI development is bright, and Compose is leading the way.
      </p>

      <hr className="my-8 border-gray-200" />

      <p className="text-gray-600 italic">
        Have you started using Jetpack Compose in your projects? I'd love to hear about your experiences! Feel free to
        reach out on{" "}
        <a href="https://twitter.com" className="text-blue-600 hover:underline">
          Twitter
        </a>{" "}
        or{" "}
        <a href="https://linkedin.com" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
        .
      </p>
    </div>
  )
}

function CleanArchitecturePost() {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        After working on several large Android projects, I've learned that architecture decisions made early can make or
        break a project. Clean Architecture has been my go-to approach for building maintainable Android apps.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What is Clean Architecture?</h2>
      <p className="leading-relaxed mb-6">
        Clean Architecture, introduced by Uncle Bob, is about separating concerns and dependencies. In Android, this
        typically means organizing your code into layers:
      </p>
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>
          <strong>Presentation Layer</strong> (UI, ViewModels)
        </li>
        <li>
          <strong>Domain Layer</strong> (Use Cases, Entities)
        </li>
        <li>
          <strong>Data Layer</strong> (Repositories, Data Sources)
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why I Adopted Clean Architecture</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Problem I Faced</h3>
      <p className="leading-relaxed mb-4">
        Early in my career, I built an e-commerce app that became a nightmare to maintain. Business logic was scattered
        across Activities, network calls were made directly from UI components, and testing was nearly impossible.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Solution</h3>
      <p className="leading-relaxed mb-4">Clean Architecture solved these problems by:</p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <strong>Separating concerns</strong> - Each layer has a single responsibility
        </li>
        <li>
          <strong>Making testing easier</strong> - Dependencies can be easily mocked
        </li>
        <li>
          <strong>Improving maintainability</strong> - Changes in one layer don't affect others
        </li>
        <li>
          <strong>Enabling team collaboration</strong> - Different developers can work on different layers
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">My Android Clean Architecture Structure</h2>
      <p className="leading-relaxed mb-4">Here's how I typically structure my Android projects:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`app/
├── presentation/
│   ├── ui/
│   ├── viewmodel/
│   └── mapper/
├── domain/
│   ├── usecase/
│   ├── repository/
│   └── model/
└── data/
    ├── repository/
    ├── datasource/
    └── mapper/`}</code>
      </pre>

      <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Example</h2>
      <p className="leading-relaxed mb-4">Let me walk you through a practical example - a user profile feature:</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Domain Layer</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`// Entity
data class User(
    val id: String,
    val name: String,
    val email: String
)

// Repository Interface
interface UserRepository {
    suspend fun getUser(id: String): Result<User>
    suspend fun updateUser(user: User): Result<Unit>
}

// Use Case
class GetUserUseCase(
    private val userRepository: UserRepository
) {
    suspend operator fun invoke(userId: String): Result<User> {
        return userRepository.getUser(userId)
    }
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-3">Data Layer</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`// Repository Implementation
class UserRepositoryImpl(
    private val remoteDataSource: UserRemoteDataSource,
    private val localDataSource: UserLocalDataSource
) : UserRepository {
    
    override suspend fun getUser(id: String): Result<User> {
        return try {
            val user = remoteDataSource.getUser(id)
            localDataSource.saveUser(user)
            Result.success(user.toDomain())
        } catch (e: Exception) {
            localDataSource.getUser(id)?.let {
                Result.success(it.toDomain())
            } ?: Result.failure(e)
        }
    }
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-3">Presentation Layer</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`class UserProfileViewModel(
    private val getUserUseCase: GetUserUseCase
) : ViewModel() {
    
    private val _uiState = MutableStateFlow(UserProfileUiState())
    val uiState = _uiState.asStateFlow()
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true)
            
            getUserUseCase(userId)
                .onSuccess { user ->
                    _uiState.value = _uiState.value.copy(
                        user = user,
                        isLoading = false
                    )
                }
                .onFailure { error ->
                    _uiState.value = _uiState.value.copy(
                        error = error.message,
                        isLoading = false
                    )
                }
        }
    }
}`}</code>
      </pre>

      <h2 className="text-2xl font-bold mt-8 mb-4">Lessons Learned</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Don't Over-Engineer</h3>
      <p className="leading-relaxed mb-4">
        Early on, I created too many layers and abstractions. Start simple and add complexity only when needed.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Use Dependency Injection</h3>
      <p className="leading-relaxed mb-4">
        Hilt makes dependency injection in Android much easier. It's essential for Clean Architecture.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Testing Becomes a Breeze</h3>
      <p className="leading-relaxed mb-4">With proper separation, unit testing becomes straightforward:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`@Test
fun \`when user exists, should return user\`() = runTest {
    // Given
    val expectedUser = User("1", "John", "john@example.com")
    coEvery { userRepository.getUser("1") } returns Result.success(expectedUser)
    
    // When
    val result = getUserUseCase("1")
    
    // Then
    assertEquals(Result.success(expectedUser), result)
}`}</code>
      </pre>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h2>
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>
          <strong>Mixing layers</strong> - Keep domain logic out of ViewModels
        </li>
        <li>
          <strong>Ignoring the dependency rule</strong> - Inner layers shouldn't know about outer layers
        </li>
        <li>
          <strong>Creating god classes</strong> - Keep use cases focused on single responsibilities
        </li>
        <li>
          <strong>Forgetting about mappers</strong> - Don't let data models leak into the domain
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">Tools That Help</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          <strong>Hilt</strong> for dependency injection
        </li>
        <li>
          <strong>Room</strong> for local data persistence
        </li>
        <li>
          <strong>Retrofit</strong> for network calls
        </li>
        <li>
          <strong>Mockk</strong> for testing
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Is It Worth It?</h2>
      <p className="leading-relaxed mb-4">
        Absolutely. While there's initial overhead, the benefits compound over time:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Easier to add new features</li>
        <li>Simpler to fix bugs</li>
        <li>Better test coverage</li>
        <li>Improved team productivity</li>
      </ul>

      <p className="leading-relaxed mb-8">
        Clean Architecture has made me a better Android developer, and I believe it can do the same for you.
      </p>

      <hr className="my-8 border-gray-200" />

      <p className="text-gray-600 italic">
        What's your experience with Clean Architecture in Android? Have you found other patterns that work well? I'd
        love to discuss this further - reach out anytime!
      </p>
    </div>
  )
}

function FirebasePost() {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Firebase has been my go-to backend solution for Android apps for the past few years. It's incredibly powerful,
        but there are definitely some gotchas I wish I knew when starting out.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Firebase?</h2>
      <p className="leading-relaxed mb-4">
        When I was building my first startup's Android app, I needed to move fast. Firebase allowed me to:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Get authentication working in hours, not days</li>
        <li>Store and sync data without managing servers</li>
        <li>Send push notifications without complex infrastructure</li>
        <li>Scale automatically as users grew</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">My Firebase Integration Journey</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">Setting Up Firebase (The Right Way)</h3>
      <p className="leading-relaxed mb-4">
        Most tutorials show the basic setup, but here's what I do for production apps:
      </p>
      <ol className="list-decimal ml-6 mb-6 space-y-2">
        <li>
          <strong>Create separate projects</strong> for dev/staging/prod
        </li>
        <li>
          <strong>Use different package names</strong> for each environment
        </li>
        <li>
          <strong>Set up proper security rules</strong> from day one
        </li>
        <li>
          <strong>Configure analytics</strong> with custom events
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-6 mb-3">Authentication: Beyond the Basics</h3>
      <p className="leading-relaxed mb-4">Firebase Auth is great, but here are some patterns I've learned:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`class AuthRepository(
    private val firebaseAuth: FirebaseAuth
) {
    fun signInWithEmail(email: String, password: String): Flow<AuthResult> = flow {
        emit(AuthResult.Loading)
        try {
            val result = firebaseAuth.signInWithEmailAndPassword(email, password).await()
            emit(AuthResult.Success(result.user))
        } catch (e: Exception) {
            emit(AuthResult.Error(e.message ?: "Authentication failed"))
        }
    }
    
    fun getCurrentUser(): FirebaseUser? = firebaseAuth.currentUser
    
    fun signOut() = firebaseAuth.signOut()
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-3">Firestore: Data Modeling Tips</h3>
      <p className="leading-relaxed mb-4">
        I've made plenty of mistakes with Firestore data modeling. Here's what I've learned:
      </p>

      <h4 className="text-lg font-medium mt-4 mb-2">1. Think About Queries First</h4>
      <p className="leading-relaxed mb-4">Design your data structure around how you'll query it:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`// Good: Easy to query user's posts
/users/{userId}/posts/{postId}

// Bad: Hard to get all posts by a user
/posts/{postId} with userId field`}</code>
      </pre>

      <h4 className="text-lg font-medium mt-4 mb-2">2. Denormalize When Necessary</h4>
      <p className="leading-relaxed mb-4">Unlike SQL, denormalization is often the right choice:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`// Store user info in posts for easy display
data class Post(
    val id: String,
    val content: String,
    val authorId: String,
    val authorName: String, // Denormalized
    val authorAvatar: String // Denormalized
)`}</code>
      </pre>

      <h2 className="text-2xl font-bold mt-8 mb-4">Security Rules: Don't Skip This!</h2>
      <p className="leading-relaxed mb-4">I learned this the hard way - always set up proper security rules:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Posts are readable by all, writable by owner
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == resource.data.authorId;
    }
  }
}`}</code>
      </pre>

      <h2 className="text-2xl font-bold mt-8 mb-4">Performance Optimization Tips</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Use Offline Persistence</h3>
      <p className="leading-relaxed mb-4">Enable offline persistence for better UX:</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className="text-sm">{`FirebaseFirestore.getInstance().apply {
    firestoreSettings = firestoreSettings.toBuilder()
        .setPersistenceEnabled(true)
        .build()
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Optimize Queries</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Use compound indexes for complex queries</li>
        <li>
          Limit query results with <code className="bg-gray-100 px-2 py-1 rounded text-sm">.limit()</code>
        </li>
        <li>Use pagination for large datasets</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Production Checklist</h2>
      <p className="leading-relaxed mb-4">Before going live, I always check:</p>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Security rules are properly configured</li>
        <li>Analytics events are tracking correctly</li>
        <li>Push notifications work on different devices</li>
        <li>Offline functionality is tested</li>
        <li>Billing alerts are set up</li>
        <li>Backup strategy is in place</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Final Thoughts</h2>
      <p className="leading-relaxed mb-4">
        Firebase has enabled me to build and ship apps faster than ever before. While there's a learning curve, the
        productivity gains are enormous.
      </p>
      <p className="leading-relaxed mb-8">
        The key is to start simple and gradually add complexity. Don't try to use every Firebase service at once - pick
        what you need and master it first.
      </p>

      <hr className="my-8 border-gray-200" />

      <p className="text-gray-600 italic">
        What's been your experience with Firebase? Any tips or gotchas you'd like to share? I'm always learning new ways
        to use these tools effectively!
      </p>
    </div>
  )
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "UI Development": "bg-blue-100 text-blue-800",
      Architecture: "bg-green-100 text-green-800",
      Backend: "bg-purple-100 text-purple-800",
      Programming: "bg-orange-100 text-orange-800",
      Performance: "bg-red-100 text-red-800",
      Design: "bg-pink-100 text-pink-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  // Render the appropriate blog post content
  const renderContent = () => {
    switch (params.slug) {
      case "mastering-jetpack-compose":
        return <JetpackComposePost />
      case "clean-architecture-android":
        return <CleanArchitecturePost />
      case "firebase-integration-guide":
        return <FirebasePost />
      default:
        return <div>Content not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      <main className="container px-4 md:px-6 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>

            <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <div className="font-semibold">Alex Johnson</div>
                  <div className="text-sm text-gray-600">Android Developer</div>
                </div>
              </div>

              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          {renderContent()}

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mt-12 bg-gray-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    I'm a passionate Android developer with 5+ years of experience building mobile apps that users love.
                    When I'm not coding, you'll find me exploring new Android libraries, contributing to open source, or
                    sharing what I've learned with the developer community.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Link href="/contact">Get in touch</Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Link href="/projects">View my work</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>

      <Footer />
    </div>
  )
}
