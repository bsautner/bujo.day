package org.bujo.application

import Entry
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
    embeddedServer(Netty, port = 8082) {
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
            route("/entry") {
                get {
                    call.respond(DAO.getAllEntries())
                }
                post {

                    val entry = call.receive<Entry>()
                    DAO.insertEntry(entry.value)
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
                    val entry = call.receive<Entry>()
                    DAO.updateEntry(entry)
                    call.respond(HttpStatusCode.OK)
                }
            }
        }
    }.start(wait = true)
}