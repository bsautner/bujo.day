import csstype.AlignContent
import csstype.attr
import emotion.react.css
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLabelElement
import react.FC
import react.Props
import react.dom.aria.AriaPressed
import react.dom.aria.ariaPressed
import react.dom.events.ChangeEventHandler
import react.dom.events.MouseEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.useState

external interface SelectButtonProps : Props {
    var onSubmit: () -> Unit
    var text: String
    var selected : Boolean
 }

val selectableButtonComponent = FC<SelectButtonProps> { props ->

    val clickHandler: ChangeEventHandler<HTMLInputElement> = {
         props.onSubmit()
    }

//    button {
//        +props.text
//        onClick = clickHandler
//    }

    label {
      //  onClick = clickHandler
        input {
             type = InputType.checkbox
             id = props.text
             onChange = clickHandler
             checked = props.selected


        }
        +props.text
    }


}
