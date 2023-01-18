import io.ktor.util.date.*

object WIP {

    var id = 0L
    var text = ""
    val types = mutableListOf<Long>()
    var timestamp = getTimeMillis()

    fun reset() {
        timestamp = getTimeMillis()
        id = 0L
        text = ""
        types.clear()
    }

}