function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 52.533333,
            lng: -2.033333
        }
    });

    // 52.456890 - lat -2.148731 - lng - Stourbridge.

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.5233, lng: -2.0789 },
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            labels: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}