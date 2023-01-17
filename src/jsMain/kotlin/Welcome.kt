import csstype.AlignItems
import csstype.Display
import csstype.JustifyContent
import csstype.px
import emotion.react.css
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.hr
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.time
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

    var entries by useState(emptyList<Event>())
    var types by useState(emptyList<EventType>())

    useEffectOnce {
        mainScope.launch {
            entries = getEntries()
            types = getEventTypes()


        }
    }



    div {
        css {
            padding = 5.px
            display = Display.flex
            alignItems = AlignItems.center
            justifyContent = JustifyContent.center
        }



        table {

            types.forEach {

                tr {
                    td {
                        selectableButtonComponent {
                            text = it.text
                            selected = it.selected
                            onSubmit = {
                                mainScope.launch {
                                    it.selected = ! it.selected
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



        inputComponent {
            onChange = {
                entryText = it
            }
            text = entryText
            WIP.text = text
        }


    }
    div {
        css {
            padding = 5.px
            display = Display.flex
            alignItems = AlignItems.end
            justifyContent = JustifyContent.center
        }

        table {
            tr {

                td {
                    input {
                        type = InputType.date

                        val d = formatJsDate(Date())
                        println(d)
                        value =d
                       // defaultValue = "11/04/1975"
                        onChange = {
                            println(it.timeStamp)
                            println(d)
                        }
                    }
                }

                td {
                    buttonComponent {
                        text = "Save"
                        onSubmit = {

                            mainScope.launch {
                                val e = Event(entryId, 0L, entryText, WIP.types)
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
                                WIP.reset()
                                types = getEventTypes()

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
            entries.forEach { item ->
                tr {
                    td {
                        deleteEntryButtonComponent {
                            id = item.id
                            onSubmit = {
                                println("callback $it")
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

                                entryText = item.value
                                entryId = item.id
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