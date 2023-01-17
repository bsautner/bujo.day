
@kotlinx.serialization.Serializable
data class EventType(val id: Long, val text: String, var selected: Boolean) {


companion object {
    const val path = "/type"
}
}