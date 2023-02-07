package org.bujo.web.html

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
