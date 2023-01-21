package org.bujo.application

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

    @Test
    fun `test cascading deletes work `() {

        val newType = UUID.randomUUID().toString()
        val id = DAO.insertType(guid, newType)
        val types = DAO.getAllTypes(guid)
        val t = types.find {
            it.id == id
        }
        assertNotNull(t)
        assertEquals(t.text, newType)

        val eventId = DAO.insertEvent(guid, Event(0, currentTimeMillis(), UUID.randomUUID().toString(), listOf(id)))
        val event = DAO.getEvent(eventId)
        assertTrue(event.eventTypes.contains(id))
        DAO.deleteType(id)

        val event2 = DAO.getEvent(eventId)
        assertFalse(event2.eventTypes.contains(id))

        DAO.deleteEvent(eventId)



        try {
            val event3 = DAO.getEvent(eventId)
            fail("Failed to delete Event")
        }
        catch (e: IllegalStateException) {
            assertNotNull(e)
        }

    }

    @Test
    fun `test deleting an event deletes related types`() {
        val types = DAO.getAllTypes(guid)
        val list  =  types.map { it.id  }

        val eventId = DAO.insertEvent(guid, Event(0, currentTimeMillis(), UUID.randomUUID().toString(), list))

        val event = DAO.getEvent(eventId)
        assertEquals(types.size, event.eventTypes.size)
        DAO.deleteEvent(eventId)
        val shouldBeEmptyList = DAO.getEventTypes(eventId)
        assertTrue(shouldBeEmptyList.isEmpty())
    }

}