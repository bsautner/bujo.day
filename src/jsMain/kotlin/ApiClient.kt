import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*

val jsonClient = HttpClient {
    install(ContentNegotiation) {
        json()
    }
}

suspend fun postEntry(event: Event) {
    jsonClient.post(Event.path) {
        contentType(ContentType.Application.Json)
        setBody(event)
    }
}

suspend fun putEntry(event: Event) {

    jsonClient.put(Event.path) {
        contentType(ContentType.Application.Json)
        setBody(event)
    }
}

suspend fun getEntries() : List<Event> {
    return jsonClient.get("/events").body()
}

suspend fun deleteEntry(id: Long) {
    jsonClient.delete(Event.path) {
        parameter("id", id)
    }
}

suspend fun loadEvent(id: Long) : Event {
    val event =  jsonClient.get(Event.path) {
        parameter("id", id)
    }.body<Event>()
    WIP.id = event.id
    WIP.types.clear()
    WIP.types.addAll(event.eventTypes)
    return event
}

suspend fun getEventTypes() : List<EventType> {
    val response : List<EventType> =  jsonClient.get(EventType.path).body()
    val list = mutableListOf<EventType>()
    response.forEach {
        list.add(EventType(it.id, it.text, WIP.types.contains(it.id)))
    }
    return list

}

suspend fun addType(type: String) {
    jsonClient.post(EventType.path) {
        contentType(ContentType.Application.Json)
        setBody(type)
    }
}

suspend fun deleteTypes(list : List<Long>) {
    jsonClient.delete(EventType.path) {
        contentType(ContentType.Application.Json)
        setBody(list)
    }
}

