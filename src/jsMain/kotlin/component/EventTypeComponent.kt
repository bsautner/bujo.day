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
    var newLabelText by useState("")


    div {

        table {

            tr {
                div {
//                    className = ClassName("navbar navbar-light bg-light")

                    newButton {

                        onSubmit = {

                                if (newLabelText.isNotEmpty()) {

                                    props.onTypeAdded.invoke(newLabelText)
                                    newLabelText = ""

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