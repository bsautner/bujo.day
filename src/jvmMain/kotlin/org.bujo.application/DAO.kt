package org.bujo.application

import Event
import EventType
import User
import java.lang.RuntimeException
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException
import java.sql.Statement
import java.util.*
import kotlin.collections.set

class DAO(url: String, version: Long, private val user: String, private val password: String) {

    private lateinit var db: Connection
   // val url = "44.205.141.49:3306"
    //   val url = "localhost:3306"
  //  val url = "192.168.1.114:3306"

    init {
        println("initializing DAO $url")
        if (!this::db.isInitialized) {
            val connectionProps = Properties()
            connectionProps["user"] = user
            connectionProps["password"] = password
            connectionProps["autoReconnect"] = true
            val dbname = {
                if (version == -1L) {
                    "bujo"
                } else {
                    "bujo_v$version"
                }
            }
            db = DriverManager.getConnection("jdbc:mysql://$url/${dbname.invoke()}?autoReconnect=true", connectionProps)
        }

    }



    fun deleteEvent(id: Long) {
        val q = "delete from table_events where table_events_pk = ?"
        val stmt = db.prepareStatement(q)
        stmt.setLong(1, id)
        stmt.execute()
        updateTypes(id, emptyList())
    }

    fun getAllEntries(guid: String): List<Event> {

        val q = "select table_events_pk, timestamp, text from table_events where user_guid = ? order by timestamp desc;"

        val l = mutableListOf<Event>()

        val stmt = db.prepareStatement(q)
        stmt.setString(1, guid)
        val rs = stmt.executeQuery()

        while (rs.next()) {
            val ts = rs.getLong(rs.findColumn("timestamp"))
            val id = rs.getLong(rs.findColumn("table_events_pk"))
            val types = getEventTypes(id)
            val typeIds = mutableListOf<Long>()
            types.forEach {
                typeIds.add(it.id)
            }
            l.add(Event(id, ts, rs.getString(rs.findColumn("text")), typeIds))
        }

        return l
    }

    fun getFilteredEntries(guid: String, st: Long, et: Long): List<Event> {
        val q = "select table_events_pk, timestamp, text from table_events where user_guid = ? AND timestamp >= ? AND timestamp <= ? order by timestamp desc;"

        val l = mutableListOf<Event>()

        val stmt = db.prepareStatement(q)
        stmt.setString(1, guid)
        stmt.setLong(2, st)
        stmt.setLong(3, et)

        val rs = stmt.executeQuery()

        while (rs.next()) {
            val ts = rs.getLong(rs.findColumn("timestamp"))
            val id = rs.getLong(rs.findColumn("table_events_pk"))
            val types = getEventTypes(id)
            val typeIds = mutableListOf<Long>()
            types.forEach {
                typeIds.add(it.id)
            }
            l.add(Event(id, ts, rs.getString(rs.findColumn("text")), typeIds))
        }

        return l
    }

    fun updateEvent(event: Event) {
        val q =
            "update table_events set text='${event.value}', timestamp=${event.timestamp} where table_events_pk = ${event.id}"

        with(db.createStatement()) {
            execute(q)
        }
        updateTypes(event.id, event.eventTypes)

    }

    fun insertEvent(guid: String, event: Event): Long {
        val q = "insert into table_events (user_guid, text, timestamp) values (?, ?, ?);"

        val stmt = db.prepareStatement(q, Statement.RETURN_GENERATED_KEYS)
        stmt.setString(1, guid)
        stmt.setString(2, event.value)
        stmt.setLong(3, event.timestamp)
        stmt.executeUpdate()
        stmt.generatedKeys.use {
            if (it.next()) {
                val id = it.getLong(1)
                updateTypes(id, event.eventTypes)
                return id
            } else {
                throw SQLException("Failed to insert event")
            }
        }
    }

    fun getAllTypes(guid: String): List<EventType> {

        val q = "select * from table_event_type where user_guid = ? order by value asc;"
        val stmt = db.prepareStatement(q)
        stmt.setString(1, guid)

        val l = mutableListOf<EventType>()

        val rs = stmt.executeQuery()
            while (rs.next()) {

                l.add(
                    EventType(
                        rs.getLong(rs.findColumn("table_event_type_pk")),
                        rs.getString(rs.findColumn("value")),
                        false
                    )
                )
            }

        return l
    }

    private fun getEntryTypeById(typeId: Long): EventType {
        val q = "select * from table_event_type where table_event_type_pk = ?"
        val stmt = db.prepareStatement(q)

        with(stmt) {
            setLong(1, typeId)
            val rs = executeQuery()
            if (rs.next()) {
                return EventType(
                    rs.getLong(rs.findColumn("table_event_type_pk")),
                    rs.getString(rs.findColumn("value")),
                    false
                )
            } else {
                throw SQLException("No event type with id: $typeId")
            }
        }
    }

    fun getEventTypes(eventID: Long): List<EventType> {
        val q = "select * from table_event_type_matrix where table_events_fk = ?;"
        val list = mutableListOf<EventType>()
        val stmt = db.prepareStatement(q)
        with(stmt) {
            setLong(1, eventID)
            val rs = executeQuery()
            while (rs.next()) {
                list.add(getEntryTypeById(rs.getLong(rs.findColumn("table_event_type_fk"))))
            }
        }
        return list
    }

    fun getEvent(eventId: Long): Event {
        val q = "select * from table_events where table_events_pk = ?;"
        val stmt = db.prepareStatement(q)
        stmt.setLong(1, eventId)


            val rs = stmt.executeQuery()
            if (rs.next()) {
                val ts = rs.getLong(rs.findColumn("timestamp"))
                val id = rs.getLong(rs.findColumn("table_events_pk"))
                val types = getEventTypes(id)
                val typeIds = mutableListOf<Long>()
                types.forEach {
                    typeIds.add(it.id)
                }
                return Event(id, ts, rs.getString(3), typeIds)
            } else {
                throw IllegalStateException()
            }


    }

    fun insertType(guid: String, type: String): Long {
        val q = "insert into table_event_type (user_guid, value) values (?, ?);"

        val stmt = db.prepareStatement(q, Statement.RETURN_GENERATED_KEYS)
        stmt.setString(1, guid)
        stmt.setString(2, type)

        stmt.executeUpdate()


        stmt.generatedKeys.use {
            if (it.next()) {
                return it.getLong(1)

            } else {
                throw SQLException("Failed to create event type $type")
            }
        }
    }

    fun deleteTypes(types: List<Long>) {
        types.forEach {
            deleteType(it)
        }
    }

    fun deleteType(id: Long) {
        val q = "delete from table_event_type_matrix where table_event_type_fk = ?;"
        val stmt = db.prepareStatement(q)
        stmt.setLong(1, id)
        stmt.execute()

        val q2 = "delete from table_event_type where table_event_type_pk = ?"
        val stmt2 = db.prepareStatement(q2)
        stmt2.setLong(1, id)
        stmt2.execute()
    }

    fun insertUser(user: User): String {

        val guid ={
            if (user.guid.isNullOrEmpty()) {
                UUID.randomUUID().toString()
            } else {
                user.guid
            }
        }
        val q = "insert into table_users (email, pass, guid) values (?, ?, ?)"
        val stmt = db.prepareStatement(q, Statement.RETURN_GENERATED_KEYS)
        stmt.setString(1, user.email)
        stmt.setString(2, user.password)
        stmt.setString(3, guid.invoke())

        stmt.executeUpdate()
        return guid.invoke()

    }

    fun getUserSession(email: String, password: String): String {
        val q = "select guid from table_users where (email = ? AND pass=?)"
        val stmt = db.prepareStatement(q, Statement.RETURN_GENERATED_KEYS)
        stmt.setString(1, email)
        stmt.setString(2, password)
        val rs = stmt.executeQuery()
        if (rs.next()) {
            return rs.getString(rs.findColumn("guid"))
        } else {
            throw SecurityException("User $email $password Not Found")
        }


    }


    private fun updateTypes(id: Long, types: List<Long>) {
        val d = "delete from table_event_type_matrix where table_events_fk = ?"
        val i = "insert into table_event_type_matrix (table_events_fk, table_event_type_fk) values(?, ?)"

        val deleteStmt = db.prepareStatement(d)
        deleteStmt.setLong(1, id)
        deleteStmt.execute()

        val insertStmt = db.prepareStatement(i)
        types.forEach {
            insertStmt.setLong(1, id)
            insertStmt.setLong(2, it)
            insertStmt.addBatch()
        }
        insertStmt.executeBatch()

    }


    fun transferUserTable() {
        val d = "drop table if exists table_users cascade;"
        val stmt = db.prepareStatement(d)
        stmt.execute()
        val c = """
           create table if not exists bujo.table_users
            (
                guid  varchar(36) not null
                    primary key,
                email varchar(50) not null,
                pass  varchar(50) not null,
                constraint email
                    unique (email),
                constraint guid
                    unique (guid)
            );
        """.trimIndent()
        val createStmt = db.prepareStatement(c)
        createStmt.execute()
    }

    fun getAllUsers(): List<User> {
        val q = "select guid, email, pass from table_users"

        val stmt = db.prepareStatement(q)
        val rs = stmt.executeQuery()
        val users = mutableListOf<User>()
        while (rs.next()) {
            users.add(User(rs.getString(rs.findColumn("guid")), rs.getString(rs.findColumn("email")),rs.getString(rs.findColumn("pass"))))
        }
        return users
        
        

    }

    fun transferEventTypeTable() {
        val d = "drop table if exists bujo.table_event_type cascade;"
        val stmt = db.prepareStatement(d)
        stmt.execute()

        val c = """
            create table if not exists bujo.table_event_type
            (
                table_event_type_pk bigint,
                user_guid           varchar(36) not null,
                value               varchar(50) not null
            );
        """.trimIndent()

        val createStmt = db.prepareStatement(c)
        createStmt.execute()
    }

    fun transferEventTable() {
        val d = "drop table if exists bujo.table_events cascade;"
        val stmt = db.prepareStatement(d)
        stmt.execute()

        val c = """
           create table if not exists bujo.table_events
            (
                table_events_pk bigint,
                user_guid       varchar(36) not null,
                timestamp       bigint      not null,
                text            text        not null
        
            );
        """.trimIndent()

        val createStmt = db.prepareStatement(c)
        createStmt.execute()
    }

    fun transferEventMatrixTable() {
        val d = "drop table if exists table_event_type_matrix cascade;"
        val stmt = db.prepareStatement(d)
        stmt.execute()

        val c = """
          create table if not exists bujo.table_event_type_matrix
        (
            table_events_fk            bigint not null,
            table_event_type_fk        bigint not null
        );
                """.trimIndent()

        val createStmt = db.prepareStatement(c)
        createStmt.execute()
    }

    fun insertEventTypeWithId(user: User, eventType: EventType) {
        val q = "insert into table_event_type (table_event_type_pk, user_guid, value) values (?, ?, ?);"

        val stmt = db.prepareStatement(q, Statement.RETURN_GENERATED_KEYS)
        stmt.setLong(1, eventType.id)
        stmt.setString(2, user.guid)
        stmt.setString(3, eventType.text)

        stmt.executeUpdate()
    }

    fun insertEventWithId(user: User, event: Event) {
        val q = "insert into table_events (table_events.table_events_pk, user_guid, table_events.timestamp, text) values (?, ?, ?, ?);"

        val stmt = db.prepareStatement(q, Statement.RETURN_GENERATED_KEYS)
        stmt.setLong(1, event.id)
        stmt.setString(2, user.guid)
        stmt.setLong(3, event.timestamp)
        stmt.setString(4, event.value)

        stmt.executeUpdate()

        event.eventTypes.forEach {matrix ->
             updateTypes(event.id, event.eventTypes)
        }


    }



    fun addEventTypePk() {
        val q = """
            alter table table_event_type
            add constraint table_event_type_pk
            primary key (table_event_type_pk);
        """.trimIndent()
        val createStmt = db.prepareStatement(q)
        createStmt.execute()

        val q2 = """
            alter table table_event_type
    modify table_event_type_pk bigint auto_increment;
        """.trimIndent()

        val createStmt2 = db.prepareStatement(q2)
        createStmt2.execute()
    }

    fun addEventPk() {
        val q = """
            alter table table_events
            add constraint table_events_pk
            primary key (table_events_pk);
        """.trimIndent()
        val createStmt = db.prepareStatement(q)
        createStmt.execute()

        val q2 = """
            alter table table_events
            modify table_events_pk bigint auto_increment;
        """.trimIndent()

        val createStmt2 = db.prepareStatement(q2)
        createStmt2.execute()
    }


    fun getSchemaVersion() : Long {
        val q = "select schema_version from schema_info"
        val stmt = db.prepareStatement(q)
        with (stmt) {
            val rs = executeQuery()
            if (rs.next()) {
                return rs.getLong(rs.findColumn("schema_version"))

            } else {
                throw RuntimeException("Missing Schema Version.")
            }
        }
    }




}