

import csstype.ClassName
import kotlinx.browser.sessionStorage
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.events.ChangeEventHandler
import react.dom.html.InputType
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.main
import react.useState

external interface RegisterProps : Props
private val mainScope = MainScope()

val register = FC<RegisterProps> {

        var email by useState("")
        var password by useState("")
        var confirmPassword by useState("")



    val changeEmailHandler: ChangeEventHandler<HTMLInputElement> = {
        email = it.target.value
    }
    val changePasswordHandler: ChangeEventHandler<HTMLInputElement> = {
        password = it.target.value
    }
    val changeConfirmPasswordHandler: ChangeEventHandler<HTMLInputElement> = {
        confirmPassword = it.target.value
    }

        main {
            className = ClassName("form-signin")

//        form {


            div {
                className = ClassName("form-floating")
                input {
                    className = ClassName("form-control")
                    placeholder = "name@example.com"
                    type = InputType.email
                    id = "floatingInput"
                    value = email
                    onChange = changeEmailHandler

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
                    value = password
                    onChange = changePasswordHandler
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
                    id = "floatingConfirmPassword"
                    value = confirmPassword
                    onChange = changeConfirmPasswordHandler
                }
                label {
                    +"Confirm Password"
                    htmlFor = "floatingConfirmPassword"
                }
            }
            button {
                +"Create Account"
                className = ClassName("w-100 btn btn-lg btn-primary")
                onClick = {
                   // if (password == confirmPassword && password.length > 8 && email.length > 8) {
                        mainScope.launch {
                            val guid = addUser(email, password)
                            println(guid)
                            sessionStorage.setItem(User.SESSION_KEY, guid )
                            window.location.href = "http://0.0.0.0:8080"
                        }


                }
            }
            a {
                +"Already Registered? Login!"
                href = "./login"

            }


        }


}