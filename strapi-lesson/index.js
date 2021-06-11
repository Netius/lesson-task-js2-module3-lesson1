import {createList} from "./components/createList.js"
import {addHotel} from "./components/addHotel.js"
import {baseUrl} from "./constants/baseUrl.js"

const hotelsContainer = document.querySelector("#hotels-list");

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


