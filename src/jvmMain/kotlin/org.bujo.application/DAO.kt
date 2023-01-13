package org.bujo.application

import Entry
import java.sql.Connection
import java.sql.DriverManager
import java.util.*

object DAO {

    private lateinit var db: Connection
  //  val url = "44.205.141.49:3306"
    val url = "localhost:3306"

    init {
        println("initializing DAO")
        if (!this::db.isInitialized) {
            val connectionProps = Properties()
            connectionProps["user"] = "ben"
            connectionProps["password"] = "foo"
            db = DriverManager.getConnection("jdbc:mysql://$url/bujo", connectionProps)
        }

    }

    fun insertEntry(entry: String) {
        val q = """
            insert into table_events (text)
            values ('$entry');
        """.trimIndent()
        with(db.createStatement()) {
            execute(q)
        }
    }

    fun deleteEntry(id: Long) {
        val q = """
            delete from table_events where table_events_pk = $id
        """.trimIndent()
        with (db.createStatement()) {
            execute(q)
        }
    }

    fun getAllEntries() : List<Entry> {

        val q = """
           select * from table_events order by timestamp desc;
        """.trimIndent()
        val l = mutableListOf<Entry>()
         with(db.createStatement()) {
             val rs = executeQuery(q)
             while (rs.next()) {
                 val ts = rs.getTimestamp(rs.findColumn("timestamp"))
                 l.add(Entry(rs.getLong(rs.findColumn("table_events_pk")), ts.time,  rs.getString(3)))
             }
         }
        return l
    }

    fun updateEntry(entry: Entry) {
        val q = """
            update table_events set text='${entry.value}' where table_events_pk = ${entry.id}
        """.trimIndent()
        with (db.createStatement()) {
            execute(q)
        }
    }
}