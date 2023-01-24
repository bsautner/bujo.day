package org.bujo.application

import Const
import Event
import EventType
import User
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

        route(User.path) {
            post {
                val user = call.receive<User>()
                println("adding user ${user.email}")
                val guid = DAO.insertUser(user)
                println(guid)
                call.respond(HttpStatusCode.OK, guid)
            }
            get {
                val email = call.request.headers.get("email")
                val password = call.request.headers.get("password")
                println("logging in with $email $password")
                val guid = password?.let { it1 -> email?.let { it2 -> DAO.getUserSession(it2, it1) } }
                if (guid != null) {
                    call.respond(HttpStatusCode.OK, guid)
                } else {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
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
                val guid = call.request.headers[User.SESSION_KEY]
                println("Session Detected $guid")
                guid?.let {
                    if (call.parameters.contains(Const.ST) && call.parameters.contains(Const.ET)) {
                        call.respond(DAO.getFilteredEntries(it, call.parameters[Const.ST]!!.toLong(), call.parameters[Const.ET]!!.toLong()))

                    } else {

                        call.respond(DAO.getAllEntries(it))

                    }
                }

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
                val guid = call.request.headers[User.SESSION_KEY]
                guid?.let {
                    DAO.insertEvent(it, event)

                    call.respond(HttpStatusCode.OK)
                }


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
                val guid = call.request.headers[User.SESSION_KEY]
                guid?.let {
                    call.respond(DAO.getAllTypes(it))
                }


            }
            post {
                val type = call.receive<String>()
                val guid = call.request.headers[User.SESSION_KEY]
                guid?.let {
                    DAO.insertType(guid, type)
                    call.respond(HttpStatusCode.OK)
                }

            }
            delete {
                val types = call.receive<List<Long>>()
                DAO.deleteTypes(types)
                call.respond(HttpStatusCode.OK)
            }
        }
        route("/export") {
            get {
                val guid = call.parameters[User.SESSION_KEY]
                println("Session Detected $guid")
                guid?.let {
                    if (call.parameters.contains(Const.ST) && call.parameters.contains(Const.ET)) {
                        call.response.headers.append("Content-Type","text/x-markdown")
                        val sb = java.lang.StringBuilder()
                        sb.append(":Y: Yesterday:\n")
                        val y = DAO.getFilteredEntries(it, call.parameters[Const.ST]!!.toLong(), call.parameters[Const.ET]!!.toLong())
                        y.forEach {event ->
                            sb.append("* ${event.value}\n")

                        }
                        call.respond(sb.toString())

                    } else {

                      call.respond(HttpStatusCode.NotFound)
                    }
                }
            }
        }
    }
}