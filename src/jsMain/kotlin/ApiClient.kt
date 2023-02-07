import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.browser.sessionStorage
import org.w3c.dom.get

val jsonClient = HttpClient {
    install(ContentNegotiation) {
        json()
    }
    val session = sessionStorage[User.SESSION_KEY]
    session?.let {
        this.defaultRequest {
            headers[User.SESSION_KEY] = it
        }
    }


}

suspend fun postEvent(event: Event) {
    jsonClient.post(Event.path) {
        contentType(ContentType.Application.Json)
        setBody(event)
    }
}

suspend fun putEvent(event: Event) {

    jsonClient.put(Event.path) {
        contentType(ContentType.Application.Json)
        setBody(event)
    }
}

suspend fun getEntries(): List<Event> {
    return jsonClient.get("/events").body()
}

suspend fun getFilteredEntries(st: Long, et: Long): List<Event> {
    return jsonClient.get("/events") {
        parameter(Const.ST, st)
        parameter(Const.ET, et)
    }.body()
}


suspend fun deleteEntry(id: Long) {
    jsonClient.delete(Event.path) {
        parameter("id", id)
    }
}

suspend fun loadEvent(id: Long): Event {
    val event = jsonClient.get(Event.path) {
        parameter("id", id)
    }.body<Event>()

    return event
}

suspend fun getEventTypes(selectedEvent: Event): List<EventType> {
    val response: List<EventType> = jsonClient.get(EventType.path).body()
    val list = mutableListOf<EventType>()
    response.forEach {
        list.add(EventType(it.id, it.text, selectedEvent.eventTypes.contains(it.id)))
    }
    return list

}

suspend fun addType(type: String) {
    jsonClient.post(EventType.path) {
        contentType(ContentType.Application.Json)
        setBody(type)
    }
}

suspend fun deleteTypes(list: List<Long>) {
    jsonClient.delete(EventType.path) {
        contentType(ContentType.Application.Json)
        setBody(list)
    }
}

suspend fun addUser(email: String, password: String) : String  {
    return jsonClient.post(User.path) {
        contentType(ContentType.Application.Json)
        setBody(User("", email, password))
    }.body()
}

suspend fun getUserSession(email: String, password: String) : String {
    return jsonClient.get(User.path) {
        headers["email"] = email
        headers["password"] = password
    }.body()
}