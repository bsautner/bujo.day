import csstype.AlignContent
import csstype.ClassName
import csstype.Cursor.Companion.contextMenu
import csstype.VerticalAlign
import emotion.react.css
import io.ktor.util.date.*
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.hr
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.menu
import react.dom.html.ReactHTML.menuitem
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.th
import react.dom.html.ReactHTML.tr
import react.dom.html.ReactHTML.ul
import react.dom.html.TdAlign
import react.dom.html.TdVAlign
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
        className = ClassName("centered")

        table {
            className = ClassName("form-table")
            tr {
                className = ClassName("form-table-header")
                th {
                    className = ClassName("form-table-header")
                    label {
                        +"Label"
                    }
                    button {
                        +"X"
                        onClick = {
                            if (window.confirm("Are you sure you want to delete the checked labels? They will be removed from all entries!")) {
                                mainScope.launch {
                                    deleteTypes(WIP.types)
                                    WIP.types.clear()
                                    entries = getEntries()
                                    types = getEventTypes()
                                }
                            }
                            else {

                                println("nevermind!")
                            }
                        }
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
                                            if (newLabelText.isNotEmpty()) {
                                                addType(newLabelText)
                                                newLabelText = ""
                                                types = getEventTypes()
                                            }
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
                    align = TdAlign.right
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
                                            if (entryText.isNotBlank()) {
                                                val e = Event(entryId, WIP.timestamp, entryText, WIP.types)
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
            tr {
                td {
                    hr
                }
            }
            tr {
                td {

                }
            }


        }


    }

//    hr {}
//    div {
//        className = ClassName("centered")
//        h2 {
//            label {
//                +"Entries"
//            }
//        }
//    }

    div {
        className = ClassName("centered")
        table {
            this.className = ClassName("styled-table")
            entries.forEach { item ->
                tr {
                    td {
                        className = ClassName("styled-td")
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
                        className = ClassName("styled-td")

                        val d = Date(item.timestamp)
                        +d.toDateString()

                    }

                    td {
                        className = ClassName("styled-td")
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
                    td {
                        className = ClassName("styled-td")
                        ul {
                            item.eventTypes.forEach { type ->
                                types.find {
                                    it.id == type
                                }.let {


                                        ReactHTML.li {

                                                    label {
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