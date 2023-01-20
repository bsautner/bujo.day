import kotlinx.browser.document
import react.create
import react.dom.client.createRoot

fun main() {
    val container = document.getElementById("root")
    container?.let {
        document.body!!.appendChild(it)
        val home = home.create { }
        createRoot(it).render(home)
    }

    val loginContainer = document.getElementById("login")
    loginContainer?.let {
        document.body!!.appendChild(it)
        val login = login.create { }
        createRoot(it).render(login)
    }


    val registerContainer = document.getElementById("register")
    registerContainer?.let {
        document.body!!.appendChild(it)
        val register = register.create { }
        createRoot(it).render(register)
    }

}