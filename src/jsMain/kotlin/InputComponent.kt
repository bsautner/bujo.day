import org.w3c.dom.HTMLTextAreaElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.html.ReactHTML.textarea
import react.useState

external interface InputProps : Props {
    var onChange: (String) -> Unit
    var text : String


}

val inputComponent = FC<InputProps> { props ->

    val changeHandler: ChangeEventHandler<HTMLTextAreaElement> = {
        props.onChange(it.target.value)
        //text = it.target.value
        //println("change handler ${it.target.value}")

    }





    textarea {
        this.rows = 20
        this.cols = 50
        this.value = props.text
        onChange = changeHandler
    }




}
