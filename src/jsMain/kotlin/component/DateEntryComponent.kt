package component

import Util
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML

external interface DateProps : Props {
    var onTimestampChanged: (Long) -> Unit
    var timestamp: Long


}

val dateComponent = FC<DateProps> { props ->

    val changeHandler: ChangeEventHandler<HTMLInputElement> = {
        println(Util().getTimestamp(it.target.value))
        props.onTimestampChanged(Util().getTimestamp(it.target.value))

    }

    ReactHTML.input {

        type = InputType.date
        value = Util().getDate(props.timestamp)
        onChange = changeHandler
    }


}