import csstype.ClassName
import io.ktor.util.date.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.hr
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.th
import react.dom.html.ReactHTML.tr
import react.useEffectOnce
import react.useState
import kotlin.js.Date

external interface WelcomeProps : Props {
    var name: String
}

private val mainScope = MainScope()


val Welcome = FC<WelcomeProps> { _ ->
    var entryText by useState(WIP.text)
    var entryId by useState(WIP.id)
    var entryTimestamp by useState(WIP.timestamp)
    var newLabelText by useState("")

    var entries by useState(emptyList<Event>())
    var types by useState(emptyList<EventType>())

    useEffectOnce {
        mainScope.launch {
            entryTimestamp = getTimeMillis()
            println(entryTimestamp)
            entries = getEntries()
            types = getEventTypes()


        }
    }




    div {


        table {
            className = ClassName("form-table")
            tr {
                className = ClassName("form-table-header")
                th {
                    className = ClassName("form-table-header")
                    label {
                        +"Label"
                    }
                }
                th {
                    className = ClassName("form-table-header")
                    label {
                        +"Entry"
                    }
                }

            }
            tr {

                td {
                    className = ClassName("checkboxes")
                    table {
                        tr {
                            td {
                                inputComponent {

                                    text = newLabelText
                                    rows = 1
                                    cols = 20
                                    onChange = {
                                        newLabelText = it
                                    }
                                }
                            }
                            td {
                                buttonComponent {
                                    text = "+"
                                    onSubmit = {
                                        mainScope.launch {
                                            println(newLabelText)
                                            addType(newLabelText)
                                            newLabelText = ""
                                            types = getEventTypes()
                                        }

                                    }
                                }
                            }
                        }
                        types.forEach {

                            tr {
                                td {
                                    selectableButtonComponent {
                                        text = it.text
                                        selected = it.selected
                                        onSubmit = {
                                            mainScope.launch {
                                                it.selected = !it.selected
                                                println(it.selected)
                                                if (it.selected) {
                                                    WIP.types.add(it.id)
                                                } else {
                                                    WIP.types.remove(it.id)
                                                }
                                                types = getEventTypes()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                td {
                    inputComponent {
                        onChange = {
                            entryText = it
                        }
                        text = entryText
                        rows = 20
                        cols = 50
                        WIP.text = text
                    }

                }
            }
            tr {
                td {}
                td {
                    table {
                        tr {

                            td {

                                dateComponent {
                                    timestamp = entryTimestamp
                                    onChange = {
                                        WIP.timestamp = it
                                        entryTimestamp = it
                                    }
                                }

                            }

                            td {
                                buttonComponent {
                                    text = "Save"

                                    onSubmit = {

                                        mainScope.launch {
                                            val e = Event(entryId, WIP.timestamp, entryText, WIP.types)
                                            WIP.types.forEach {
                                                println("Got Type $it")
                                            }
                                            if (entryId == 0L) {
                                                postEntry(e)
                                                entryText = ""
                                            } else {
                                                putEntry(e)
                                            }

                                            entries = getEntries()

                                        }


                                    }
                                }
                            }
                            td {
                                buttonComponent {
                                    text = "New"
                                    onSubmit = {

                                        mainScope.launch {
                                            entryId = 0L
                                            entryText = ""
                                            entryTimestamp = getTimeMillis()
                                            WIP.reset()
                                            types = getEventTypes()

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

    hr {}
    div {
        h2 {
            label {
                +"Entries"
            }
        }
    }

    div {

        table {
            this.className = ClassName("styled-table")
            entries.forEach { item ->
                tr {
                    td {
                        deleteEntryButtonComponent {
                            id = item.id
                            onSubmit = {

                                mainScope.launch {
                                    deleteEntry(it)
                                    entries = getEntries()
                                    if (WIP.id == it) {
                                        WIP.reset()
                                        entryText = WIP.text
                                        entryId = WIP.id
                                        types = getEventTypes()
                                    }

                                }

                            }
                        }
                    }
                    td {
                        val d = Date(item.timestamp)
                        +d.toDateString()

                    }

                    td {

                        div {

                            +item.value
                        }
                        onClick = {
                            mainScope.launch {
                                WIP.text = item.value
                                WIP.id = item.id
                                WIP.timestamp = item.timestamp

                                entryText = item.value
                                entryId = item.id
                                entryTimestamp = item.timestamp
                                loadEvent(item.id)
                                types = getEventTypes()
                            }

                        }
                    }
                }
            }
        }


    }


}