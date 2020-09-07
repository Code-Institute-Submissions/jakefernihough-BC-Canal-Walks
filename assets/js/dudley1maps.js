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
      title: "Delph Locks",
      lat: "52.4777",
      lng: "-2.1191",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "The Waterfront",
      lat: "52.4871",
      lng: "-2.115651",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Canal Cottage",
      lat: "52.49786",
      lng: "-2.0989",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Park Lane Viaduct",
      lat: "52.49854",
      lng: "-2.09926",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Canal Park",
      lat: "52.49913",
      lng: "-2.09997",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Dudley Tunnel",
      lat: "52.50098",
      lng: "-2.10055",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "The Black Country Museum",
      lat: "52.51867",
      lng: "-2.07391",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "The Black Country Museum",
      lat: "52.52009",
      lng: "-2.07526",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "The Fishing Ornament",
      lat: "52.51867",
      lng: "-2.07391",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "The Old Rail Line",
      lat: "52.52197",
      lng: "-2.06357",
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
