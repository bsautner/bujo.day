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

suspend fun postEntry(entry: Entry) {
    jsonClient.post(Entry.path) {
        contentType(ContentType.Application.Json)
        setBody(entry)
    }
}

suspend fun putEntry(entry: Entry) {
    jsonClient.put(Entry.path) {
        contentType(ContentType.Application.Json)
        setBody(entry)
    }
}

suspend fun getEntries() : List<Entry> {
    return jsonClient.get(Entry.path).body()
}

suspend fun deleteEntry(id: Long) {
    jsonClient.delete(Entry.path) {
        parameter("id", id)
    }
}