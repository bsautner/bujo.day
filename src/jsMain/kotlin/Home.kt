
import component.entryListComponent
import component.journalForm
import io.ktor.util.date.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.useEffectOnce
import react.useState

external interface HomeProps : Props
private val mainScope = MainScope()

val home = FC<HomeProps> {
    var eventTypes by useState(emptyList<EventType>())
    var eventEntries by useState(emptyList<Event>())
    var event by useState(Event(0, getTimeMillis(), "", emptyList()))

    useEffectOnce {
        mainScope.launch {
            eventEntries = getEntries()
            eventTypes = getEventTypes(event)
        }
    }
    navbar {

    }
    journalForm {
        types = eventTypes
        selectedEvent = event
        onTypeAdded = {
            mainScope.launch {
                addType(it)
                eventTypes = getEventTypes(event)
            }

        }

        onTypesDeleted = {
            mainScope.launch {
                deleteTypes(event.eventTypes)
                val e = Event(event.id, event.timestamp, event.value, emptyList())
                event = e
                mainScope.launch {
                    eventTypes = getEventTypes(e)
                }
            }
        }

        onCheckChange = { id, checked ->
            println("on check changed $id $checked")
            val list = mutableListOf<Long>()
            list.addAll(event.eventTypes)
            if (checked) {
                list.add(id)
            } else {
                list.remove(id)
            }
            val e = Event(event.id, event.timestamp, event.value, list)
            event = e
            mainScope.launch {
                eventTypes = getEventTypes(e)
            }
        }

        onTextChanged = {
            event = Event(event.id, event.timestamp, it, event.eventTypes)
        }

        onTimestampChanged = {
            event = Event(event.id, it, event.value, event.eventTypes)

        }

        onSaveEvent = {
            mainScope.launch {
                if (selectedEvent.id == 0L) {
                    postEvent(selectedEvent)
                    // entryText = ""
                } else {
                    putEvent(selectedEvent)
                }
                eventEntries = getEntries()
                eventTypes = getEventTypes(event)
                val e = Event(0, getTimeMillis(), "", emptyList())
                event = e
                eventTypes = getEventTypes(e)
            }
        }
        onNewEventClick = {

            mainScope.launch {
                val e = Event(0, getTimeMillis(), "", emptyList())
                event = e
                eventTypes = getEventTypes(e)

            }

        }

    }
    entryListComponent {
        onDelete = {
            mainScope.launch {
                deleteEntry(it)
                eventEntries = getEntries()
            }
        }
        types = eventTypes
        events = eventEntries
        onEventClick = {
            mainScope.launch {
                event = it
                eventTypes = getEventTypes(it)
            }
        }
    }


}
