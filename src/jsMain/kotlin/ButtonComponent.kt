import csstype.AlignContent
import emotion.react.css
import org.w3c.dom.HTMLButtonElement
import react.FC
import react.Props
import react.dom.events.MouseEventHandler
import react.dom.html.ReactHTML.button

external interface ButtonProps : Props {
    var onSubmit: () -> Unit
    var text: String
}

val buttonComponent = FC<ButtonProps> { props ->

    val clickHandler: MouseEventHandler<HTMLButtonElement> = {
       props.onSubmit()
    }

        button {
            +props.text
            css {
                alignContent = AlignContent.end
            }
            onClick = clickHandler
        }

}
