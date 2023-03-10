import io.ktor.util.date.*
import kotlinx.datetime.*

/**
 * https://github.com/Kotlin/kotlinx-datetime
 */
class Util {


    fun getDate(timestamp: Long) : String {
        val instantNow = Instant.fromEpochMilliseconds(timestamp)
        val d = instantNow.toLocalDateTime(TimeZone.currentSystemDefault()).date
        return "${d.year}-${appendZero(d.monthNumber)}-${appendZero(d.dayOfMonth)}"
    }
    fun getTimestamp(input: String) : Long {

        val s = input.split('-')
        val date =  LocalDateTime(s[0].toInt(), s[1].toInt(), s[2].toInt(), 0, 0, 0, 0)
        println(date.toString())
        return date.toInstant(TimeZone.currentSystemDefault()).toEpochMilliseconds()

    }

    fun getYesterday(): Long {
        val instantNow = Instant.fromEpochMilliseconds(getTimeMillis())
        return instantNow.toEpochMilliseconds() - MS_IN_DAY
    }


    private fun appendZero(s: Int) : String {
        return if (s.toString().length == 1) {
            "0$s"
        } else {
            "$s"
        }
    }

    companion object {
        const val MS_IN_DAY = 86400000
    }
}