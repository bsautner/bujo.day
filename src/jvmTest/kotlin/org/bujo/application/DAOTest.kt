package org.bujo.application

import Const.TEST_DB
import Event
import kotlinx.html.currentTimeMillis
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Assertions.fail
import org.junit.jupiter.api.Test
import java.util.*
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull

internal class DAOTest {

    val guid = "ABCD"
    val dao = DAO(TEST_DB, -1L, "ben",  "Secret_Password!@#$1234")


    @Test
    fun `test cascading deletes work `() {

        val newType = UUID.randomUUID().toString()
        val id = dao.insertType(guid, newType)
        val types = dao.getAllTypes(guid)
        val t = types.find {
            it.id == id
        }
        assertNotNull(t)
        assertEquals(t.text, newType)

        val eventId = dao.insertEvent(guid, Event(0, currentTimeMillis(), UUID.randomUUID().toString(), listOf(id)))
        val event = dao.getEvent(eventId)
        assertTrue(event.eventTypes.contains(id))
        dao.deleteType(id)

        val event2 = dao.getEvent(eventId)
        assertFalse(event2.eventTypes.contains(id))

        dao.deleteEvent(eventId)



        try {
            val event3 = dao.getEvent(eventId)
            fail("Failed to delete Event")
        }
        catch (e: IllegalStateException) {
            assertNotNull(e)
        }

    }

    @Test
    fun `test deleting an event deletes related types`() {
        val types = dao.getAllTypes(guid)
        val list  =  types.map { it.id  }

        val eventId = dao.insertEvent(guid, Event(0, currentTimeMillis(), UUID.randomUUID().toString(), list))

        val event = dao.getEvent(eventId)
        assertEquals(types.size, event.eventTypes.size)
        dao.deleteEvent(eventId)
        val shouldBeEmptyList = dao.getEventTypes(eventId)
        assertTrue(shouldBeEmptyList.isEmpty())
    }

    @Test
    fun `get version works`() {
        val version = dao.getSchemaVersion()
        assertNotNull(version)
    }



}