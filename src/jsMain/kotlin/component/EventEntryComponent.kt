import component.dateComponent
import csstype.ClassName
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div

external interface EventEntryComponentProps : Props {

    var callback: () -> Unit
    var addEventCallback: () -> Unit
    var timestampChangedCallback: (Long) -> Unit
    var selectedEvent: Event
    var onTextChanged: (String) -> Unit


}

private val mainScope = MainScope()

val eventEntryComponent = FC<EventEntryComponentProps> { props ->

    div {
        className = ClassName("container")
        div {
            className = ClassName("col")
            div {
                className = ClassName("row")
                div {
                    className = ClassName("col")
                    ReactHTML.label {
                        +"Entry"
                    }
                }
                div {
                    className = ClassName("col")
                    dateComponent {
                        timestamp = props.selectedEvent.timestamp
                        onChange = {
                            props.timestampChangedCallback.invoke(it)
                        }
                    }
                }
                div {
                    className = ClassName("col")
                    saveButtonComponent {
                        //text = "Save"

                        onSubmit = {

                            mainScope.launch {
                                if (props.selectedEvent.value.isNotBlank()) {

                                    if (props.selectedEvent.id == 0L) {
                                        postEntry(props.selectedEvent)
                                        // entryText = ""
                                    } else {
                                        putEntry(props.selectedEvent)
                                    }

                                    props.callback.invoke()
                                }
                            }


                        }
                    }
                }
                div {
                    className = ClassName("col")
                    addButtonComponent {

                        onSubmit = {
                            props.addEventCallback.invoke()

                        }
                    }
                }
            }
        }

        div {
            className = ClassName("row")
            inputComponent {
                onChange = {
                    props.onTextChanged.invoke(it)
                }
                text = props.selectedEvent.value
                rows = 20
                cols = 50

            }
        }


    }
}