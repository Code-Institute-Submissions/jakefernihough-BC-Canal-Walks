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
      title: "Blowers Green Pump House",
      lat: "52.49824",
      lng: "-2.09684",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Dudley No.2 Canal Sign",
      lat: "52.49725",
      lng: "-2.09849",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Canal History Plot",
      lat: "52.49631",
      lng: "-2.09642",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "The Bumble Hole Man Sign",
      lat: "52.49192",
      lng: "-2.09871",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Coalition Sign",
      lat: "52.49628",
      lng: "-2.09684",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Brewins Tunnel Bridge",
      lat: "52.49192",
      lng: "-2.09871",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Netherton Resevoir",
      lat: "52.48332",
      lng: "-2.09214",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Astle's Bridge",
      lat: "52.46613",
      lng: "-2.10152",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Illustration Sign",
      lat: "52.48489",
      lng: "-2.07793",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Cooper Sign",
      lat: "52.48566",
      lng: "-2.07475",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "The Bumble Hole",
      lat: "52.48947",
      lng: "-2.07331",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Windmills End Pumping Station",
      lat: "52.49138",
      lng: "-2.06873",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    }, {
      title: "Netherton Tunnel",
      lat: "52.49341",
      lng: "-2.06903",
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
