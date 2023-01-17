
@kotlinx.serialization.Serializable
class Event(val id: Long, val timestamp: Long, var value: String, val eventTypes: List<Long>) {

    companion object {
        const val path = "/entry"
    }
}