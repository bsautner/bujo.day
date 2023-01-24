package component

import csstype.ClassName
import kotlinx.browser.window
import react.FC
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.tr
import react.useState


val eventTypeComponent = FC<JournalProperties> { props ->
    var newEventTypeText by useState("")


    div {

        table {

            tr {
                div {
//                    className = ClassName("navbar navbar-light bg-light")

                    newButton {

                        onSubmit = {

                                if (newEventTypeText.isNotEmpty()) {

                                    props.onTypeAdded.invoke(newEventTypeText)
                                    newEventTypeText = ""

                                }

                        }
                    }
                    deleteButtonComponent {
                        onDelete = {
                            if (window.confirm("Are you sure you want to delete the checked labels? They will be removed from all entries!")) {
                                props.onTypesDeleted()

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

                            text = newEventTypeText
                            rows = 1
                            cols = 20
                            onChange = {
                                newEventTypeText = it
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

                                    props.onCheckChange(it.id, !it.selected)
                                    println(it.selected)

                            }
                        }

                    }
                }
            }


        }

    }

}