import kotlinx.serialization.Serializable

@Serializable
data class User(val email: String, val password: String) {
   companion object {
       const val path: String = "/user"
       const val SESSION_KEY = "SESSION_KEY"
   }
}
