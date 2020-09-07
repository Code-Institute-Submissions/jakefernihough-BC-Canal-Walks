       function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11,
                center: {
                    lat: 52.533333,
                    lng: -2.033333
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 52.46890,
                lng: -2.148731
            }, {
                lat: 52.51867,
                lng: -2.07391
            }, {
                lat: 52.49341,
                lng: -2.06903
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }