import { deleteHotel } from "./deleteHotel.js";

export function createList(hotels){
    const hotelsContainer = document.querySelector("#hotels-list");
    hotelsContainer.innerHTML = "";

    hotels.forEach(hotel => {
        hotelsContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="font-weight-bold">${hotel.name}</div>
            ${hotel.isOpen}
            </div>
            <button type="button" class="delete-hotel btn btn-danger btn-sm" data-id="${hotel.id}">Delete</button>
            </li>
        `;
    });

    const deleteHotelButton = document.querySelectorAll(".delete-hotel");
    deleteHotelButton.forEach(button => {
        button.addEventListener("click", deleteHotel);
    });
}