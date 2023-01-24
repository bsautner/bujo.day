package component

import Event
import EventType
import react.Props

external interface JournalProperties : Props {
    var types: List<EventType>
    var onTypeAdded: (String) -> Unit
    var onSaveEvent: () -> Unit
    var selectedEvent: Event
    var onNewEventClick: () -> Unit
    var onTimestampChanged: (Long) -> Unit
    var onTextChanged: (String) -> Unit
    var onCheckChange: (Long, Boolean) -> Unit
    var onTypesDeleted: () -> Unit
    var onDelete: (Long) -> Unit
    var events: List<Event>
    var onEventClick: (Event) -> Unit
    var onFilterEvents: (Long, Long) -> Unit
    var onExportEvents: (Long, Long) -> Unit

}