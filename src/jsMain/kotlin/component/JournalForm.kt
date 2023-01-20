package component

import csstype.ClassName
import react.FC
import react.dom.html.ReactHTML.div


val journalForm = FC<JournalProperties> { props ->
    div {
        className = ClassName("container text-left div-padded")
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
                    onSaveEvent = props.onSaveEvent
                    selectedEvent = props.selectedEvent
                    onNewEventClick = props.onNewEventClick
                    onTimestampChanged = props.onTimestampChanged
                    onTextChanged = props.onTextChanged


                }
            }

        }
    }
}