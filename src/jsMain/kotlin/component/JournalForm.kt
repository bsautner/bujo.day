package component

import Event
import EventType
import component.eventEntryComponent
import component.eventTypeComponent
import csstype.ClassName
import react.FC
import react.Props
import react.dom.html.ReactHTML.div

external interface JournalFormProps : Props {

    var types: List<EventType>
    var onTypeAdded: () -> Unit
    var eventAddedCallback: () -> Unit
    var selectedEvent: Event
    var addEventCallback: () -> Unit
    var timestampChangedCallback: (Long) -> Unit
    var onTextChanged: (String) -> Unit
    var onCheckChange: (Long, Boolean) -> Unit
    var onTypesDeleted: () -> Unit
    var onDelete: (Long) -> Unit

}


val journalForm = FC<JournalFormProps> { props ->
    div {
        className = ClassName("container text-left")
        div {
            className = ClassName("row")


            div {
                className = ClassName("col-2")

                eventTypeComponent {
                    types = props.types
                    onTypeAdded = props.onTypeAdded
                    onCheckChange = props.onCheckChange
                    onTypesDeleted = props.onTypesDeleted
                }
            }
            div {
                className = ClassName("col-10")

                eventEntryComponent {
                    callback = props.eventAddedCallback
                    selectedEvent = props.selectedEvent
                    addEventCallback = props.addEventCallback
                    timestampChangedCallback = props.timestampChangedCallback
                    onTextChanged = props.onTextChanged


                }
            }

        }
    }
}