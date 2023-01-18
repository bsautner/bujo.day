import csstype.AlignContent
import csstype.ClassName
import emotion.react.css
import org.w3c.dom.HTMLButtonElement
import react.FC
import react.Props
import react.dom.events.MouseEventHandler
import react.dom.html.ReactHTML.button

external interface ButtonProps : Props {
    var onSubmit: () -> Unit
    var text: String
    var disabled: Boolean
}

val buttonComponent = FC<ButtonProps> { props ->

    val clickHandler: MouseEventHandler<HTMLButtonElement> = {
       props.onSubmit()
    }

        button {
            className = ClassName("form-button")
            +props.text
            disabled = props.text.isBlank()
//            css {
//                alignContent = AlignContent.end
//            }
          //  className = "button"
            onClick = clickHandler
        }

}
