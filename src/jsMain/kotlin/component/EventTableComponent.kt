package component

import Event
import EventType
import csstype.ClassName
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.h4
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.tbody
import react.dom.html.ReactHTML.td
import kotlin.js.Date

external interface EntryListComponentProps : Props {

    var itemSelectedCallback: (Event) -> Unit
    var entries: List<Event>
    var types: List<EventType>
    var onDelete: (Long) -> Unit

}

private val mainScope = MainScope()

val entryListComponent = FC<EntryListComponentProps> { props ->

    h4 {
        +"Entries"
    }
    table {
        this.className = ClassName("table table-hover table-bordered")
        tbody {
            props.entries.forEach { item ->
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
                            mainScope.launch {
                                props.itemSelectedCallback.invoke(item)
                            }
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