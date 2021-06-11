import {saveToken, saveUser } from "../utils/storage.js"

export async function doLogin(username, password){
    const url = "http://localhost:1337/auth/local";
    const data = JSON.stringify({identifier: username, password: password });
    const options = {
        method: "POST",
        body: data,
        headers:{
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(url , options);
        const json = await response.json();

        if (json.user) {

            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/";
        }


    }
    catch(error) {
        console.log(error)
    }
}