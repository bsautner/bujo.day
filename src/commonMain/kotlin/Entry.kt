
@kotlinx.serialization.Serializable
class Entry(val id: Long, val timestamp: Long, var value: String) {

    companion object {
        const val path = "/entry"
    }
}