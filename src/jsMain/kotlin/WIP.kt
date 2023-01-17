object WIP {

    var id = 0L
    var text = ""
    val types = mutableListOf<Long>()
    val timestamp = 0L

    fun reset() {
        id = 0L
        text = ""
        types.clear()
    }

}