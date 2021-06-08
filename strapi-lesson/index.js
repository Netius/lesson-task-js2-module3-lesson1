const baseUrl = "http://localhost:1337/hotels/";

(async function () {
    try {
        const response = await fetch(baseUrl);
        const json = await response.json();
        createList(json);
    }
    catch (error) {
        console.error(error);
    }
})();

const hotelsContainer = document.querySelector("#hotels-list");

const createList = (hotels) => {
    hotels.forEach(hotel => {
        hotelsContainer.innerHTML += `
            <li>${hotel.name} - ${hotel.isOpen}</li>
        `;
    });
}