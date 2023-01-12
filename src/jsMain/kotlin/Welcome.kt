import csstype.*
import react.FC
import react.Props
import emotion.react.css
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.hr
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.tr
import react.useEffectOnce
import react.useState
import kotlin.js.Date

external interface WelcomeProps : Props {
    var name: String
}
private val mainScope = MainScope()

val Welcome = FC<WelcomeProps> { props ->
    var entryText by useState("")
    var entryId by useState(0L)

    var entries by useState(emptyList<Entry>())
    useEffectOnce {
        mainScope.launch {
            entries = getEntries()
        }
    }



    div {
        css {
            padding = 5.px
            display = Display.flex
            alignItems = AlignItems.center
            justifyContent = JustifyContent.center
        }


       inputComponent {
            onChange = {
                entryText = it
            }
            text = entryText
        }


    }
    div {
        css {
            padding = 5.px
            display = Display.flex
            alignItems = AlignItems.end
            justifyContent = JustifyContent.center
        }

        buttonComponent {
            onSubmit = {

                mainScope.launch {
                    val e = Entry(entryId, 0L, entryText)
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
                    td{
                        deleteEntryButtonComponent {
                            id = item.id
                            onSubmit = {
                                println("callback $it")
                                mainScope.launch {
                                   deleteEntry(it)
                                    entries = getEntries()
                                }

                            }
                        }
                    }
                    td {
                        val d = Date(item.timestamp)
                        +d.toDateString()

                    }

                    td {
                        +item.value
                        onClick = {
                            println(item.value)
                            entryText = item.value
                            entryId = item.id
                        }
                    }
                }
            }
        }


    }




}