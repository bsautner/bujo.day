import csstype.ClassName
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.tr
import react.useState

external interface EventTypeComponentProps : Props {
    var types: List<EventType>
    var onTypeAdded: () -> Unit
    var onCheckChange: (Long, Boolean) -> Unit
    var onTypesDeleted: () -> Unit

}

private val mainScope = MainScope()

val eventTypeComponent = FC<EventTypeComponentProps> { props ->
    var newLabelText by useState("")


    div {

        table {
            tr {
                td {
                    ReactHTML.label {
                        +"Labels"
                    }
                }
            }
            tr {
                div {
//                    className = ClassName("navbar navbar-light bg-light")

                    addButtonComponent {

                        onSubmit = {
                            mainScope.launch {
                                if (newLabelText.isNotEmpty()) {
                                    addType(newLabelText)
                                    newLabelText = ""
                                    props.onTypeAdded.invoke()
                                }
                            }
                        }
                    }
                    deleteButtonComponent {
                        onDelete = {
                            if (window.confirm("Are you sure you want to delete the checked labels? They will be removed from all entries!")) {
                                props.onTypesDeleted.invoke()

                            } else {

                                println("nevermind!")
                            }
                        }
                    }
                }
            }
            tr {
                td {
                    div {
                        className = ClassName("input-group")

                        inputComponent {

                            text = newLabelText
                            rows = 1
                            cols = 20
                            onChange = {
                                newLabelText = it
                            }

                        }


                    }
                }
            }
            tr {
                td {

                    props.types.forEach {

                        eventTypeCheckboxComponent {
                            text = it.text
                            selected = it.selected
                            onSubmit = {
                                mainScope.launch {

                                    props.onCheckChange(it.id, !it.selected)
                                    println(it.selected)
                                    //types = getEventTypes()
                                }
                            }
                        }

                    }
                }
            }


        }

    }

}