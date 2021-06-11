import {getHotels} from "../index.js"
import {baseUrl} from "../constants/baseUrl.js"

export function addHotel(){
    const input = document.getElementById("input-name");
    const inputValue = input.value.trim();

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: inputValue,
            isOpen: true,
           
        }),
    })
        .then(response => response.json())
        .then(data =>{
            getHotels();
            console.log(data);
        });
}