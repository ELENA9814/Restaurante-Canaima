
function initMap() {
    var location = {lat: 40.416775, lng: -3.703790}; // Cambia las coordenadas según tu ubicación
    var map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
