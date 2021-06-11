import { deleteHotel } from "./deleteHotel.js";

export function createList(hotels){
    const hotelsContainer = document.querySelector("#hotels-list");
    hotelsContainer.innerHTML = "";

    hotels.forEach(hotel => {
        hotelsContainer.innerHTML += `
            <li>${hotel.name} - ${hotel.isOpen} 
                <button type="button" class="delete-hotel" data-id=${hotel.id}>Delete</button>
            </li>
        `;
    });

    const deleteHotelButton = document.querySelectorAll(".delete-hotel");
    deleteHotelButton.forEach(button => {
        button.addEventListener("click", deleteHotel);
    });
}