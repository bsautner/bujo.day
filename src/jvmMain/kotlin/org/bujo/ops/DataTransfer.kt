package org.bujo.ops

import org.bujo.application.DAO

class DataTransfer {

    companion object {

        @JvmStatic
        fun main(args: Array<String>) {

            val source = "44.205.141.49:3306"
            //   val url = "localhost:3306"
            val target = "192.168.1.114:3306"

            val sourceDao = DAO(source, -1L, "ben", "foo")
            val version = sourceDao.getSchemaVersion() + 1
            val targetDao = DAO(target, version, "ben",  "Secret_Password!@#$1234")

            targetDao.transferUserTable()
            targetDao.transferEventTypeTable()
            targetDao.transferEventTable()
            targetDao.transferEventMatrixTable()

            val users = sourceDao.getAllUsers()
            users.forEach {
                targetDao.insertUser(it)
                val types = sourceDao.getAllTypes(it.guid)
                types.forEach {eventType ->
                    targetDao.insertEventTypeWithId(it, eventType)
                }
                val events = sourceDao.getAllEntries(it.guid)
                events.forEach {event ->
                    targetDao.insertEventWithId(it, event)

                }



            }
            targetDao.addEventTypePk()
            targetDao.addEventPk()




            println("Done!")
        }
    }

}