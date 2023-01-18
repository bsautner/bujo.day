package org.bujo.application

import Event
import EventType
import java.sql.Connection
import java.sql.DriverManager
import java.util.*
import java.sql.*
object DAO {

    private lateinit var db: Connection
     val url = "44.205.141.49:3306"
 //   val url = "localhost:3306"

    init {
        println("initializing DAO")
        if (!this::db.isInitialized) {
            val connectionProps = Properties()
            connectionProps["user"] = "ben"
            connectionProps["password"] = "foo"
            db = DriverManager.getConnection("jdbc:mysql://$url/bujo", connectionProps)
        }

    }



    fun updateTypes(id: Long, types: List<Long>) {
        val d = """
            delete from table_event_type_matrix where table_events_fk = '$id'
        """.trimIndent()
        with (db.createStatement()) {
            execute(d)
        }
        types.forEach {
            val i = """
            insert into table_event_type_matrix (table_events_fk, table_event_type_fk) values($id, $it)
        """.trimIndent()
            with (db.createStatement()) {
                execute(i)
            }
        }

    }

    fun deleteEntry(id: Long) {
        val q = """
            delete from table_events where table_events_pk = $id
        """.trimIndent()
        with (db.createStatement()) {
            execute(q)
        }
        updateTypes(id, emptyList())
    }

    fun getAllEntries() : List<Event> {

        val q = """
           select * from table_events order by timestamp desc;
        """.trimIndent()
        val l = mutableListOf<Event>()
         with(db.createStatement()) {
             val rs = executeQuery(q)
             while (rs.next()) {
                 val ts = rs.getLong(rs.findColumn("timestamp"))
                 val id = rs.getLong(rs.findColumn("table_events_pk"))
                 val types = getEventTypes(id)
                 val typeIds = mutableListOf<Long>()
                 types.forEach {
                     typeIds.add(it.id)
                 }
                 l.add(Event(id, ts,  rs.getString(3), typeIds))
             }
         }
        return l
    }

    fun updateEntry(event: Event) {
        val q = """
            update table_events set text='${event.value}', timestamp=${event.timestamp} where table_events_pk = ${event.id}
        """.trimIndent()
        with (db.createStatement()) {
            execute(q)
        }
        updateTypes(event.id, event.eventTypes)

    }
    fun insertEntry(event: Event) {
        val q = """
            insert into table_events (text, timestamp)
            values (?, ?);
        """.trimIndent()
        val stmt = db.prepareStatement(q,  Statement.RETURN_GENERATED_KEYS)
        stmt.setString(1, event.value)
        stmt.setLong(2, event.timestamp)
        stmt.executeUpdate()


        stmt.generatedKeys.use {
            if (it.next()) {
                val id = it.getLong(1)
                println("Entry added with id: $id")
                updateTypes(id, event.eventTypes)

            }
        }
    }

    fun getAllTypes() : List<EventType> {

        val q = """
           select * from table_event_type order by name desc;
        """.trimIndent()
        val l = mutableListOf<EventType>()
        with(db.createStatement()) {
            val rs = executeQuery(q)
            while (rs.next()) {

                l.add(EventType(rs.getLong(rs.findColumn("table_event_type_pk")), rs.getString(rs.findColumn("name")), false))
            }
        }
        return l
    }

    private fun getEntryTypeById(typeId: Long) : EventType {
        val q = """
           select * from table_event_type where table_event_type_pk = $typeId;
        """.trimIndent()
        with(db.createStatement()) {
            val rs = executeQuery(q)
            rs.next()
            return EventType(rs.getLong(rs.findColumn("table_event_type_pk")), rs.getString(rs.findColumn("name")), false)
        }
    }

    private fun getEventTypes(eventID: Long) : List<EventType> {
        val q = """
            select * from table_event_type_matrix where table_events_fk = $eventID
        """.trimIndent()
        val list = mutableListOf<EventType>()
        with(db.createStatement()) {
            val rs = executeQuery(q)
            while (rs.next()) {
                list.add(getEntryTypeById(rs.getLong(rs.findColumn("table_event_type_fk"))))
            }
        }
        return list

    }

    fun getEvent(id: Long): Event {
        val q = """
           select * from table_events where table_events_pk = $id;
        """.trimIndent()

        with(db.createStatement()) {
            val rs = executeQuery(q)
            if (rs.next()) {
                val ts = rs.getLong(rs.findColumn("timestamp"))
                val id = rs.getLong(rs.findColumn("table_events_pk"))
                val types = getEventTypes(id)
                val typeIds = mutableListOf<Long>()
                types.forEach {
                    typeIds.add(it.id)
                }
                return Event(id, ts,  rs.getString(3), typeIds)
            }
            else {
                throw IllegalStateException()
            }
        }

    }

    fun addType(type: String) {
        val q = """
            insert into table_event_type (name)
            values (?);
        """.trimIndent()
        val stmt = db.prepareStatement(q,  Statement.RETURN_GENERATED_KEYS)
        stmt.setString(1, type)

        stmt.executeUpdate()


        stmt.generatedKeys.use {
            if (it.next()) {
                val id = it.getLong(1)
                println("type $type added with id: $id")

            }
        }
    }

    fun deleteTypes(types: List<Long>) {
        types.forEach {
            val q = """
                delete from table_event_type_matrix where table_event_type_fk = $it;
            """.trimIndent()
            with(db.createStatement()) {
                execute(q)
            }

            val q2 = """
                delete from table_event_type where table_event_type_pk = $it;
            """.trimIndent()
            with(db.createStatement()) {
                execute(q2)
            }
        }
    }

}