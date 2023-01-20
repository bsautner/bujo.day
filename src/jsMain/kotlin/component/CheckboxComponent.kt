package component

import csstype.ClassName
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label

external interface SelectButtonProps : Props {
    var onSubmit: () -> Unit
    var text: String
    var selected: Boolean
}

val eventTypeCheckboxComponent = FC<SelectButtonProps> { props ->

    val clickHandler: ChangeEventHandler<HTMLInputElement> = {
        props.onSubmit()
    }

    ReactHTML.div {
        className = ClassName("form-check")
        input {
            className = ClassName("form-check-input")
            type = InputType.checkbox
            id = props.text
            onChange = clickHandler
            checked = props.selected
        }

        label {
            className = ClassName("form-check-label")
            //  onClick = clickHandler
            +props.text
        }
    }


}
