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
import org.bujo.web.html.index
import org.bujo.web.html.login
import org.bujo.web.html.register



fun main() {
    println("Starting Up")
    embeddedServer(Netty, port = 8080, module = Application::applicationModule).start(wait = true)
}

fun Application.applicationModule() {

    val dao = DAO("192.168.1.114:3306", -1L, "ben",  "Secret_Password!@#$1234")

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
                val guid = dao.insertUser(user)
                println(guid)
                call.respond(HttpStatusCode.OK, guid)
            }
            get {
                val email = call.request.headers.get("email")
                val password = call.request.headers.get("password")
                println("logging in with $email $password")
                val guid = password?.let { it1 -> email?.let { it2 -> dao.getUserSession(it2, it1) } }
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
                        call.respond(dao.getFilteredEntries(it, call.parameters[Const.ST]!!.toLong(), call.parameters[Const.ET]!!.toLong()))

                    } else {

                        call.respond(dao.getAllEntries(it))

                    }
                }

            }
        }

        route(Event.path) {
            get {
                call.parameters["id"]?.let {

                    val id = it.toLong()
                    val event = dao.getEvent(id)
                    call.respond(event)
                }
            }
            post {

                println("POST!")
                val event = call.receive<Event>()
                val guid = call.request.headers[User.SESSION_KEY]
                guid?.let {
                    dao.insertEvent(it, event)

                    call.respond(HttpStatusCode.OK)
                }


            }
            delete {
                call.parameters["id"]?.let {
                    val id = it.toLong()
                    dao.deleteEvent(id)
                    call.respond(HttpStatusCode.OK)
                }

            }
            put {
                println("PUT!")

                val event = call.receive<Event>()
                println(event.timestamp)
                dao.updateEvent(event)
                call.respond(HttpStatusCode.OK)
            }
        }
        route(EventType.path) {
            get {
                val guid = call.request.headers[User.SESSION_KEY]
                guid?.let {
                    call.respond(dao.getAllTypes(it))
                }


            }
            post {
                val type = call.receive<String>()
                val guid = call.request.headers[User.SESSION_KEY]
                guid?.let {
                    dao.insertType(guid, type)
                    call.respond(HttpStatusCode.OK)
                }

            }
            delete {
                val types = call.receive<List<Long>>()
                dao.deleteTypes(types)
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
                        val y = dao.getFilteredEntries(it, call.parameters[Const.ST]!!.toLong(), call.parameters[Const.ET]!!.toLong())
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