package component

import csstype.ClassName
import react.FC
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.h4
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.tbody
import react.dom.html.ReactHTML.td
import kotlin.js.Date


val entryListComponent = FC<JournalProperties> { props ->

    h4 {
        +"Entries"
    }
    table {
        this.className = ClassName("table table-hover table-bordered")
        tbody {
            props.events.forEach { item ->
                ReactHTML.tr {
                    ReactHTML.td {
                        // className = ClassName("styled-td")
                        deleteButtonComponent {
                            id = item.id
                            onDelete = props.onDelete

                        }
                    }
                    td {
                        // className = ClassName("styled-td")

                        val d = Date(item.timestamp)
                        +d.toDateString()

                    }

                    td {
                        //className = ClassName("styled-td")
                        ReactHTML.div {

                            +item.value
                        }
                        onClick = {
                            props.onEventClick.invoke(item)
                        }
                    }
                    ReactHTML.td {
                        // className = ClassName("styled-td")
                        ReactHTML.ul {
                            item.eventTypes.forEach { type ->
                                props.types.find {
                                    it.id == type
                                }.let {


                                    ReactHTML.li {

                                        ReactHTML.label {
                                            val e = it?.text ?: ""
                                            +e
                                        }
                                    }

                                }


                            }
                        }
                    }

                }
            }
        }
    }
}