"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Code, ExternalLink, Github, BookOpen, Lightbulb, Target } from "lucide-react"
import Link from "next/link"

interface SkillDetailModalProps {
  skill: any
  isOpen: boolean
  onClose: () => void
}

export function SkillDetailModal({ skill, isOpen, onClose }: SkillDetailModalProps) {
  if (!skill) return null

  const skillDetails: { [key: string]: any } = {
    Kotlin: {
      overview:
        "Kotlin is my primary programming language for Android development. I love its concise syntax, null safety, and seamless interoperability with Java.",
      codeExample: `// Kotlin data class with null safety
data class User(
    val id: String,
    val name: String,
    val email: String?
) {
    fun getDisplayName(): String {
        return name.takeIf { it.isNotBlank() } ?: "Anonymous"
    }
}

// Extension function
fun String.isValidEmail(): Boolean {
    return android.util.Patterns.EMAIL_ADDRESS.matcher(this).matches()
}

// Coroutines for async operations
suspend fun fetchUserData(userId: String): Result<User> {
    return try {
        val response = apiService.getUser(userId)
        Result.success(response.toUser())
    } catch (e: Exception) {
        Result.failure(e)
    }
}`,
      keyFeatures: [
        "Null Safety - Eliminates NullPointerException",
        "Concise Syntax - Less boilerplate code",
        "Coroutines - Built-in async programming",
        "Extension Functions - Extend existing classes",
        "Data Classes - Automatic equals, hashCode, toString",
      ],
      projectExamples: [
        {
          name: "LunarLens",
          usage: "Used Kotlin coroutines for NASA API calls and data classes for clean data modeling",
        },
        {
          name: "SnapScape",
          usage: "Leveraged extension functions for image processing and sealed classes for UI states",
        },
      ],
      learningPath: [
        "Started with Java background",
        "Learned Kotlin basics and syntax",
        "Mastered coroutines and flow",
        "Advanced features like DSLs and inline functions",
      ],
      resources: [
        { name: "Kotlin Official Documentation", url: "https://kotlinlang.org/docs/" },
        { name: "Kotlin Koans", url: "https://kotlinlang.org/docs/koans.html" },
      ],
    },
    "Jetpack Compose": {
      overview:
        "Jetpack Compose has revolutionized how I build Android UIs. The declarative approach makes UI development more intuitive and maintainable.",
      codeExample: `@Composable
fun UserProfileCard(
    user: User,
    onEditClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            AsyncImage(
                model = user.avatarUrl,
                contentDescription = "Profile picture",
                modifier = Modifier
                    .size(80.dp)
                    .clip(CircleShape)
            )
            
            Spacer(modifier = Modifier.height(8.dp))
            
            Text(
                text = user.name,
                style = MaterialTheme.typography.headlineSmall
            )
            
            Text(
                text = user.email,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            
            Button(
                onClick = onEditClick,
                modifier = Modifier.padding(top = 8.dp)
            ) {
                Text("Edit Profile")
            }
        }
    }
}`,
      keyFeatures: [
        "Declarative UI - Describe what UI should look like",
        "State Management - Automatic recomposition",
        "Material Design 3 - Built-in theming",
        "Animation Support - Easy animations",
        "Preview Support - See UI in Android Studio",
      ],
      projectExamples: [
        {
          name: "All Recent Projects",
          usage: "Built entire UI using Compose with custom components and animations",
        },
      ],
      learningPath: [
        "Started with traditional View system",
        "Learned Compose basics and state",
        "Mastered layouts and theming",
        "Advanced animations and custom components",
      ],
      resources: [
        { name: "Compose Documentation", url: "https://developer.android.com/jetpack/compose" },
        { name: "Compose Samples", url: "https://github.com/android/compose-samples" },
      ],
    },
    "MVVM Architecture": {
      overview:
        "MVVM (Model-View-ViewModel) is my go-to architecture pattern for Android apps. It provides clear separation of concerns and makes testing much easier.",
      codeExample: `// ViewModel
class UserProfileViewModel(
    private val userRepository: UserRepository
) : ViewModel() {
    
    private val _uiState = MutableStateFlow(UserProfileUiState())
    val uiState = _uiState.asStateFlow()
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true)
            
            userRepository.getUser(userId)
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
}

// UI State
data class UserProfileUiState(
    val user: User? = null,
    val isLoading: Boolean = false,
    val error: String? = null
)`,
      keyFeatures: [
        "Separation of Concerns - Clear layer boundaries",
        "Testability - Easy to unit test ViewModels",
        "Lifecycle Awareness - Survives configuration changes",
        "Data Binding - Reactive UI updates",
        "State Management - Centralized state handling",
      ],
      projectExamples: [
        {
          name: "LunarLens",
          usage: "Implemented MVVM with Repository pattern for NASA API data management",
        },
        {
          name: "SnapScape",
          usage: "Used MVVM with Paging 3 for infinite scrolling photo gallery",
        },
      ],
      learningPath: [
        "Started with basic MVC pattern",
        "Learned MVVM fundamentals",
        "Integrated with Repository pattern",
        "Advanced state management with Flow",
      ],
      resources: [
        { name: "Android Architecture Guide", url: "https://developer.android.com/topic/architecture" },
        { name: "MVVM Sample", url: "https://github.com/android/architecture-samples" },
      ],
    },
    Firebase: {
      overview:
        "Firebase is my preferred backend solution for rapid prototyping and production apps. It provides authentication, database, and hosting in one platform.",
      codeExample: `// Firebase Authentication
class AuthRepository {
    private val auth = FirebaseAuth.getInstance()
    
    suspend fun signInWithEmail(email: String, password: String): AuthResult {
        return try {
            val result = auth.signInWithEmailAndPassword(email, password).await()
            AuthResult.Success(result.user)
        } catch (e: Exception) {
            AuthResult.Error(e.message ?: "Authentication failed")
        }
    }
}

// Firestore Database
class UserRepository {
    private val db = FirebaseFirestore.getInstance()
    
    suspend fun saveUser(user: User): Result<Unit> {
        return try {
            db.collection("users")
                .document(user.id)
                .set(user)
                .await()
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    fun getUsersFlow(): Flow<List<User>> = callbackFlow {
        val listener = db.collection("users")
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }
                
                val users = snapshot?.documents?.mapNotNull { doc ->
                    doc.toObject<User>()
                } ?: emptyList()
                
                trySend(users)
            }
        
        awaitClose { listener.remove() }
    }
}`,
      keyFeatures: [
        "Authentication - Multiple sign-in methods",
        "Firestore - Real-time NoSQL database",
        "Cloud Storage - File storage and serving",
        "Cloud Functions - Serverless backend logic",
        "Analytics - User behavior tracking",
      ],
      projectExamples: [
        {
          name: "TuneUp",
          usage: "Used Firebase Auth for user management and Firestore for playlist storage",
        },
        {
          name: "Gemini Chatbot",
          usage: "Integrated Firebase for user sessions and chat history",
        },
      ],
      learningPath: [
        "Started with basic authentication",
        "Learned Firestore database operations",
        "Implemented real-time listeners",
        "Advanced security rules and cloud functions",
      ],
      resources: [
        { name: "Firebase Documentation", url: "https://firebase.google.com/docs" },
        { name: "Firebase Samples", url: "https://github.com/firebase/quickstart-android" },
      ],
    },
    "AWS Cloud": {
      overview:
        "AWS Cloud provides scalable infrastructure solutions. I'm certified in cloud architecture and enjoy working with various AWS services.",
      codeExample: `// AWS SDK for Android
class S3Repository {
    private val s3Client = AmazonS3ClientBuilder
        .standard()
        .withRegion(Regions.US_EAST_1)
        .build()
    
    suspend fun uploadImage(imageUri: Uri, fileName: String): String {
        return withContext(Dispatchers.IO) {
            try {
                val inputStream = context.contentResolver.openInputStream(imageUri)
                val request = PutObjectRequest(
                    BUCKET_NAME,
                    fileName,
                    inputStream,
                    ObjectMetadata()
                )
                
                s3Client.putObject(request)
                s3Client.getUrl(BUCKET_NAME, fileName).toString()
            } catch (e: Exception) {
                throw e
            }
        }
    }
}

// Lambda function integration
class ApiService {
    suspend fun processImage(imageUrl: String): ProcessingResult {
        val response = httpClient.post("https://api.gateway.url/process") {
            contentType(ContentType.Application.Json)
            setBody(ProcessImageRequest(imageUrl))
        }
        return response.body()
    }
}`,
      keyFeatures: [
        "EC2 - Scalable compute instances",
        "S3 - Object storage service",
        "Lambda - Serverless functions",
        "API Gateway - RESTful API management",
        "RDS - Managed relational databases",
      ],
      projectExamples: [
        {
          name: "Learning Projects",
          usage: "Built serverless backends using Lambda and API Gateway",
        },
      ],
      learningPath: [
        "AWS Academy Cloud Architecting course",
        "Hands-on with core services",
        "Serverless architecture patterns",
        "Cost optimization strategies",
      ],
      resources: [
        { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
        { name: "AWS Mobile SDK", url: "https://aws.amazon.com/mobile/sdk/" },
      ],
    },
  }

  const currentSkill = skillDetails[skill.name] || {
    overview: `${skill.name} is an important part of my development toolkit. I have ${skill.experience} of experience using it in various projects.`,
    codeExample: "// Code examples coming soon...",
    keyFeatures: ["Feature documentation in progress"],
    projectExamples: skill.projects.map((project: string) => ({ name: project, usage: "Implementation details" })),
    learningPath: ["Learning journey documentation in progress"],
    resources: [],
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            {skill.name}
            <Badge
              className={`ml-2 ${
                skill.level === "Expert"
                  ? "bg-green-100 text-green-800"
                  : skill.level === "Advanced"
                    ? "bg-blue-100 text-blue-800"
                    : skill.level === "Certified"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {skill.level}
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-base">{skill.description}</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  About {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">{currentSkill.overview}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {currentSkill.keyFeatures.map((feature: string, index: number) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Experience
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Duration:</span>
                        <Badge variant="outline">{skill.experience}</Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Projects:</span> {skill.projects.join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Code Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{currentSkill.codeExample}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <div className="grid gap-4">
              {currentSkill.projectExamples.map((project: any, index: number) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{project.usage}</p>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" variant="outline">
                        <Github className="h-3 w-3 mr-1" />
                        View Code
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learning Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentSkill.learningPath.map((step: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learning Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentSkill.resources.map((resource: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{resource.name}</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Visit
                        </Link>
                      </Button>
                    </div>
                  ))}
                  {currentSkill.resources.length === 0 && (
                    <p className="text-gray-500 text-center py-4">Resources coming soon...</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
