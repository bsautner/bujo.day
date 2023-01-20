import csstype.ClassName
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.nav

val navbar = {
    nav {
        className = ClassName("navbar navbar-expand-lg bg-body-tertiary")
        ReactHTML.div {
            className = csstype.ClassName("container-fluid")
            react.dom.html.ReactHTML.a {
                className = csstype.ClassName("navbar-brand")
                +"BUJO!"
            }
            react.dom.html.ReactHTML.div {
                className = csstype.ClassName("collapse navbar-collapse")
                id = "navbarText"

                react.dom.html.ReactHTML.span {
                    className = csstype.ClassName("navbar-text ms-auto")
                    +"logout"
                }
            }
        }

    }