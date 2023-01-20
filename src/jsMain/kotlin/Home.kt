import csstype.ClassName
import kotlinx.coroutines.MainScope
import react.Props
import react.dom.html.ReactHTML

external interface MainProps : Props {
    var name: String
}

private val mainScope = MainScope()


nav {
    className = ClassName("navbar navbar-expand-lg bg-body-tertiary")
    ReactHTML.div {
        className = ClassName("container-fluid")
        ReactHTML.a {
            className = csstype.ClassName("navbar-brand")
            +"BUJO!"
        }
    }

}