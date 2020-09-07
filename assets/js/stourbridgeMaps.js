function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      "lat": "52.4689",
      "lng": "-2.148731",
    },
  });

  var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  var markers = [{
      title: "Buckpool Nature Reserve",
      lat: "52.48121",
      lng: "-2.14528",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Locks Buckpool House",
      lat: "52.47951",
      lng: "-2.14963",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "The Dock",
      lat: "52.47731",
      lng: "-2.15361",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Glass Cone Museum",
      lat: "52.47721",
      lng: "-2.15476",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Old Glass Warehouse",
      lat: "52.47635",
      lng: "-2.15677",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Ornament Dock",
      lat: "52.46988",
      lng: "-2.15801",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Wordsley Junction Bridge",
      lat: "52.47287",
      lng: "-2.16387",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Stourbridge Tow Path",
      lat: "52.46988",
      lng: "-2.15801",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }];

   var mapOptions = {
    center: new google.maps.LatLng(
      parseFloat(markers[0].lat),
      parseFloat(markers[0].lng)
    ),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //Create and open InfoWindow.
  var infoWindow = new google.maps.InfoWindow();
  for (var i = 0; i < markers.length; i++) {
    var data = markers[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: data.title,
    });

    //Attach click event to the marker.
    (function (marker, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
        infoWindow.setContent(
          "<div style = 'width:200px;min-height:70px'>" + data.title + "</div>"
        );
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }

  //   var markerCluster = new MarkerClusterer(map, markers, {
  //     imagePath:
  //       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  //   });
}
