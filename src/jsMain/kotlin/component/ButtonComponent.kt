package component

import csstype.ClassName
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.dom.events.MouseEventHandler
import react.dom.html.ReactHTML

external interface ButtonProps : Props {
    var onSubmit: () -> Unit

}

external interface AddButtonProps : Props {
    var onSubmit: () -> Unit

}

external interface DeleteButtonProps : Props {
    var onDelete: (Long) -> Unit
    var id: Long

}

val newButton = FC<AddButtonProps> { props ->

    val clickHandler: MouseEventHandler<HTMLElement> = {
        props.onSubmit()
    }

    ReactHTML.a {
        className = ClassName("btn")
        href = "#"
        ReactHTML.i {
            className = ClassName("fa fa-solid fa-plus fa-lg")
            onClick = clickHandler
        }
    }


}

val saveButtonComponent = FC<ButtonProps> { props ->

    val clickHandler: MouseEventHandler<HTMLElement> = {
        props.onSubmit()
    }

    ReactHTML.a {
        className = ClassName("btn")
        href = "#"
        ReactHTML.i {
            className = ClassName("fa fa-solid fa-save fa-lg")
            onClick = clickHandler
        }
    }


}


val deleteButtonComponent = FC<DeleteButtonProps> { props ->

    val clickHandler: MouseEventHandler<HTMLElement> = {
        props.onDelete(props.id)
    }

    ReactHTML.a {
        className = ClassName("btn")
        href = "#"
        ReactHTML.i {
            className = ClassName("fa fa-solid fa-trash fa-lg")
            onClick = clickHandler
        }
    }


}
