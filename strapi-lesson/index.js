import {createList} from "./components/createList.js"
import {addHotel} from "./components/addHotel.js"
import {submitForm} from "./components/submitForm.js"
import {baseUrl} from "./constants/baseUrl.js"

const addHotelButton = document.getElementById("add-hotel");
addHotelButton.addEventListener("click", addHotel);

export async function getHotels () {
    try {
        const response = await fetch(baseUrl);
        const json = await response.json();
        createList(json);
        
    }
    catch (error) {
        console.error(error);
    }
};
getHotels();

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", submitForm);




