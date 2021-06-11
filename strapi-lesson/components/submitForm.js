import {doLogin} from "./doLogin.js"

export function submitForm (event){
    event.preventDefault();

    const inputEmail = document.querySelector("#input-email");
    const inputPassword = document.querySelector("#input-password");

    const inputEmailValue = inputEmail.value;
    const inputpasswordValue = inputPassword.value;

    doLogin(inputEmailValue, inputpasswordValue)
}