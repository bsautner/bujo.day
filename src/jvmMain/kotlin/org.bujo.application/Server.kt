package org.bujo.application

import Event
import EventType
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.html.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.compression.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.html.*
import java.time.format.DateTimeFormatter

fun HTML.index() {
    head {
        title("BUJO!")
        link(rel = "stylesheet", type = "text/css", href = "/static/app.css")
    }
    body {
        div {
            id = "root"
        }
        script(src = "/static/bujo.js") {}
    }
}

fun main() {
    println("Starting Up")
    embeddedServer(Netty, port = 8084, module = Application::applicationModule).start(wait = true)
}

fun Application.applicationModule() {
    install(ContentNegotiation) {
        json()
    }
    install(CORS) {
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
        allowMethod(HttpMethod.Delete)
        allowMethod(HttpMethod.Put)
        anyHost()
    }
    install(Compression) {
        gzip()
    }
    routing {
        get("/") {
            call.respondHtml(HttpStatusCode.OK, HTML::index)
        }
        static("/static") {
            resources()
        }

        route("/events") {
            get {
                call.respond(DAO.getAllEntries())
            }
        }

        route(Event.path) {
            get {
                call.parameters["id"]?.let {

                    val id = it.toLong()
                    val event = DAO.getEvent(id)
                    call.respond(event)
                }
            }
            post {

                println("POST!")
                val event = call.receive<Event>()
                DAO.insertEntry(event)

                call.respond(HttpStatusCode.OK)

            }
            delete {
                call.parameters["id"]?.let {
                    val id = it.toLong()
                    DAO.deleteEntry(id)
                    call.respond(HttpStatusCode.OK)
                }

            }
            put {
                println("PUT!")

                val event = call.receive<Event>()
                println(event.timestamp)
                DAO.updateEntry(event)
                call.respond(HttpStatusCode.OK)
            }
        }
        route(EventType.path) {
            get {
                call.respond(DAO.getAllTypes())

            }
        }
    }
}