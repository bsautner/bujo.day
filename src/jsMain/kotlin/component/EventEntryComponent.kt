package component

import csstype.ClassName
import react.FC
import react.dom.html.ReactHTML.div


val eventEntryComponent = FC<JournalProperties> { props ->

    div {
        className = ClassName("container")
        div {
            className = ClassName("col")
            div {
                className = ClassName("row")
                div {
                    className = ClassName("input-group")

                    div {
                        className = ClassName("col-auto")
                        dateComponent {
                            timestamp = props.selectedEvent.timestamp
                            onTimestampChanged = {
                                props.onTimestampChanged.invoke(it)
                            }
                        }
                    }

                    div {
                        className = ClassName("col-auto")
                        saveButtonComponent {
                            //text = "Save"

                            onSubmit = {


                                if (props.selectedEvent.value.isNotBlank()) {
                                    props.onSaveEvent()

                                }


                            }
                        }
                    }

                    div {
                        className = ClassName("col-auto")
                        newButton {

                            onSubmit = {
                                props.onNewEventClick.invoke()

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
}

