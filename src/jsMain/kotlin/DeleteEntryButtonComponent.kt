import csstype.AlignContent
import emotion.react.css
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLTextAreaElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.events.MouseEventHandler
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.textarea
import react.useState

external interface DeleteButtonProps : Props {
    var onSubmit: (Long) -> Unit
    var id : Long
}

val deleteEntryButtonComponent = FC<DeleteButtonProps> { props ->
    val entryId by useState(props.id)

    val clickHandler: MouseEventHandler<HTMLButtonElement> = {
        println("click id $entryId")
        props.onSubmit(props.id)
        //props.onSubmit(entry)
    }




        button {
            +"X"
            css {
                alignContent = AlignContent.end
            }
            onClick = clickHandler
        }






//    }
}
