
$(function ($) {
    console.log("Mapa cargado");
    var map = L.map('contenedor_map', {
        center: [36.7125, -4.407],
        zoom: 13,
        zoomControl: false,
        attributionControl: false,
        zoomSnap: 1
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Agregar un control de zoom
    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    // Agregar un control de atribución
    L.control.attribution({
        position: 'bottomright'
    }).addTo(map);

    // Llamar a invalidateSize una vez que el mapa esté completamente cargado
    map.on('load', function () {
        map.invalidateSize();
    });

    function success(pos) {
        console.log("Latitud: " + pos.coords.latitude + " Longitud: " + pos.coords.longitude);
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const accuracy = pos.coords.accuracy;
        L.marker([lat, lng]).addTo(map);
        L.circle([lat, lng], { radius: accuracy }).addTo(map);
    }

    function error(err) {
        if (err.code === 1) {
            alert("Por favor, permita el acceso a la geolocalización.");
        } else {
            alert("No se puede obtener la ubicación actual.");
        }
    }

    $(document).ready(function () {
        navigator.geolocation.watchPosition(success, error);
    });
});

