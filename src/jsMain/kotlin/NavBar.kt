import csstype.ClassName
import kotlinx.browser.window
import react.FC
import react.Props
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.nav

external interface NavProps : Props

val navbar = FC<NavProps> {
    nav {
        className = ClassName("navbar navbar-expand-lg bg-body-tertiary")
        ReactHTML.div {
            className = ClassName("container-fluid")
            ReactHTML.a {
                className = ClassName("navbar-brand")
                +"BUJO!"
            }
            ReactHTML.div {
                className = ClassName("collapse navbar-collapse")
                id = "navbarText"

                ReactHTML.span {
                    className = ClassName("navbar-text ms-auto")
                    +"logout"
                    onClick = {
                        window.location.href = "http://0.0.0.0:8080/login"
                    }
                }
            }
        }

    }
}