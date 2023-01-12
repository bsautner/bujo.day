import csstype.AlignContent
import emotion.react.css
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLTextAreaElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.events.MouseEventHandler
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.textarea

external interface ButtonProps : Props {
    var onSubmit: (String) -> Unit
}

val buttonComponent = FC<ButtonProps> { props ->

    var entry = ""

    val clickHandler: MouseEventHandler<HTMLButtonElement> = {
        println("click")
        props.onSubmit(entry)
    }




        button {
            +"save"
            css {
                alignContent = AlignContent.end
            }
            onClick = clickHandler
        }






//    }
}
