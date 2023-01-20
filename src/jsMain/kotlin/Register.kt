

import csstype.ClassName
import kotlinx.coroutines.MainScope
import react.FC
import react.Props
import react.dom.html.InputType
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.main

external interface RegisterProps : Props
private val mainScope = MainScope()

val register = FC<RegisterProps> {


        main {
            className = ClassName("form-signin")

        form {


            div {
                className = ClassName("form-floating")
                input {
                    className = ClassName("form-control")
                    placeholder = "name@example.com"
                    type = InputType.email
                    id = "floatingInput"
                }
                label {
                    +"Email Address"
                    htmlFor = "floatingInput"
                }
            }

            div {
                className = ClassName("form-floating")
                input {
                    className = ClassName("form-control")

                    type = InputType.password
                    id = "floatingPassword"
                }
                label {
                    +"Password"
                    htmlFor = "floatingPassword"
                }
            }
            div {
                className = ClassName("form-floating")
                input {
                    className = ClassName("form-control")

                    type = InputType.password
                    id = "floatingPassword"
                }
                label {
                    +"Confirm Password"
                    htmlFor = "floatingPassword"
                }
            }
            button {
                +"Create Account"
                className = ClassName("w-100 btn btn-lg btn-primary")
            }
            a {
                +"Already Registered? Login!"
                href = "./login"

            }


        }

    }
}