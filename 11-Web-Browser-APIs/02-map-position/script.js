// https://leafletjs.com/      -> Geolocation marker on a map. It is library very easy to use.

// We will use CDN or we can download the files also.

// https://leafletjs.com/ --> Overview

const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);
// Now we watn to get our location and then change the marker coordinates to our location
navigator.geolocation.getCurrentPosition(function(pos){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    marker.setLatLng([lat, lng]).update(); // This is part of library
    map.setView([lat, lng], 13); // 13-> zoom
    marker.bindPopup(`<strong>Hello World</strong> <br> This is my location`); // If you click on marker you will see
})