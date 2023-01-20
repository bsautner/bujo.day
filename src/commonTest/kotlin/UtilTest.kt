import kotlinx.datetime.Clock
import kotlin.test.Test

class UtilTest {


    @Test
    fun dateTest() {
        println(Util().getDate(Clock.System.now().toEpochMilliseconds()))
    }
}