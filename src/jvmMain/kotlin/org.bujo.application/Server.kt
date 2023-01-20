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

fun HTML.index() {
    head {
        title("BUJO!")
        link(rel = "stylesheet", type = "text/css", href = "/static/bootstrap5/css/bootstrap.css")
        link(rel = "stylesheet", type = "text/css", href = "/static/app.css")

//        link(rel = "stylesheet", type = "text/css", href = "/static/bootstrap/css/bootstrap-responsive.css")

        link(rel = "stylesheet", type = "text/css", href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
//
//        meta {
//            name = "theme-color"
//            content = "#712cf9"
//        }
    }
    body {
        div {
            id = "root"
        }

        script(src = "/static/bujo.js") {}
        script(src = "/static/bootstrap5/js/bootstrap.bundle.js") {}
    }
}

fun HTML.login() {
    head {
        title("BUJO!")
        link(rel = "stylesheet", type = "text/css", href = "/static/bootstrap5/css/bootstrap.css")
         link(rel = "stylesheet", type = "text/css", href = "/static/signin.css")
         link(rel = "stylesheet", type = "text/css", href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
        meta {
            name = "theme-color"
            content = "#7952b3"
        }
    }
    body(classes = "text-center") {

        div {
            id = "login"
        }

        script(src = "/static/bujo.js") {}
        script(src = "/static/bootstrap5/js/bootstrap.bundle.js") {}
    }
}


fun HTML.register() {
    head {
        title("BUJO!")
        link(rel = "stylesheet", type = "text/css", href = "/static/bootstrap5/css/bootstrap.css")
        link(rel = "stylesheet", type = "text/css", href = "/static/signin.css")
        link(rel = "stylesheet", type = "text/css", href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
        meta {
            name = "theme-color"
            content = "#7952b3"
        }
    }
    body(classes = "text-center") {

        div {
            id = "register"
        }

        script(src = "/static/bujo.js") {}
        script(src = "/static/bootstrap5/js/bootstrap.bundle.js") {}
    }
}

fun main() {
    println("Starting Up")
    embeddedServer(Netty, port = 8080, module = Application::applicationModule).start(wait = true)
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

        route("/login") {
            get {
                call.respondHtml(HttpStatusCode.OK, HTML::login)
            }
        }

        route("/register") {
            get {
                call.respondHtml(HttpStatusCode.OK, HTML::register)
            }
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
                DAO.insertEvent(event)

                call.respond(HttpStatusCode.OK)

            }
            delete {
                call.parameters["id"]?.let {
                    val id = it.toLong()
                    DAO.deleteEvent(id)
                    call.respond(HttpStatusCode.OK)
                }

            }
            put {
                println("PUT!")

                val event = call.receive<Event>()
                println(event.timestamp)
                DAO.updateEvent(event)
                call.respond(HttpStatusCode.OK)
            }
        }
        route(EventType.path) {
            get {
                call.respond(DAO.getAllTypes())

            }
            post {
                val type = call.receive<String>()
                DAO.insertType(type)
                call.respond(HttpStatusCode.OK)
            }
            delete {
                val types = call.receive<List<Long>>()
                DAO.deleteTypes(types)
                call.respond(HttpStatusCode.OK)
            }
        }
    }
}