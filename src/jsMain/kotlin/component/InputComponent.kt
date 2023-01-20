import org.w3c.dom.HTMLTextAreaElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.html.ReactHTML.textarea

external interface InputProps : Props {
    var onChange: (String) -> Unit
    var text: String
    var rows: Int
    var cols: Int


}

val inputComponent = FC<InputProps> { props ->

    val changeHandler: ChangeEventHandler<HTMLTextAreaElement> = {
        props.onChange(it.target.value)
    }





    textarea {
        this.rows = props.rows
        this.cols = props.cols
        this.value = props.text
        onChange = changeHandler
    }


}
