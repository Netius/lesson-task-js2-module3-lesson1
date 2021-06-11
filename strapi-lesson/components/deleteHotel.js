import {baseUrl} from "../constants/baseUrl.js"
import { getHotels } from "../index.js";

export function deleteHotel(event){
    const hotelId = event.target.dataset.id;

    fetch(baseUrl + hotelId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            getHotels();
            console.log(data)
        });
}