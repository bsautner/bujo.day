package component

import Util
import csstype.ClassName
import io.ktor.util.date.*
import react.FC
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.span
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.tbody
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.tr
import react.useState
import kotlin.js.Date


val entryListComponent = FC<JournalProperties> { props ->
        var startTime by useState(Util().getYesterday())
        var endTime by useState(getTimeMillis())

        table {
            this.className = ClassName("table-datepicker")
            tr {

                td{
                    this.className = ClassName("td-datepicker")
                    dateComponent {
                        timestamp =startTime
                        onTimestampChanged = {
                            startTime = it
                        }
                    }


                }
                td {
                    this.className = ClassName("td-datepicker")
                    dateComponent {

                        timestamp = endTime
                        onTimestampChanged = {
                            endTime = it
                        }
                    }
                }
                td {
                     filterButton {
                         onClick = {
                             props.onFilterEvents(startTime, endTime)
                         }
                     }
                }
                td {
                    markdownButton {
                        onClick = {
                            props.onExportEvents(startTime, endTime)
                        }
                    }
                }
            }
        }


    table {
        this.className = ClassName("table table-hover table-bordered styled-table")
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
                        span {
                            className = ClassName("text-nowrap")
                            val d = Date(item.timestamp)
                            +d.toDateString()

                        }

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