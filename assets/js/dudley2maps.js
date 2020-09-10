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
        "The Dudley No.2 Canal Path begins at the historical Blowers Green Pump House!",
      icon: "assets/images/dudley-2/blowers-green-pump.jpg",
    }, {
      title: "Dudley No.2 Canal Sign",
      lat: "52.49725",
      lng: "-2.09849",
      description:
        "This is the sign that welcomes you to the No.2 Path!",
      icon: "assets/images/dudley-2/dudley2-canal-sign.jpg",
    }, {
      title: "Canal History Plot",
      lat: "52.49631",
      lng: "-2.09642",
      description:
        "Read a little bit about the Black Country History on your journey!",
      icon: "assets/images/dudley-2/canal-history-plot.jpg"
    }, {
      title: "The Bumble Hole Man Sign",
      lat: "52.49192",
      lng: "-2.09871",
      description:
        "The Black Country Man points the way to the Bumble Hole!",
      icon: "assets/images/dudley-2/bumble-hole-man.jpg"
    }, {
      title: "The Coal Church Sign",
      lat: "52.49628",
      lng: "-2.09684",
      description:
        "History section about the St. Andrews Church",
      icon: "assets/images/dudley-2/coalition-sign.jpg"
    }, {
      title: "Brewins Tunnel Bridge",
      lat: "52.49192",
      lng: "-2.09871",
      description:
        "Brewin's Tunnel Bridge is on of the more impressive bridges to be built along the No.2 Path",
      icon: "assets/images/dudley-2/brewins-tunnel.jpg",
    }, {
      title: "Netherton Resevoir",
      lat: "52.48332",
      lng: "-2.09214",
      description:
        "The centre piece to the No.2 Path is the amazing Resevoir! A fantastic day trip filled with water activities for the family!",
      icon: "images/assets/dudley-2/netherton-resevoir.jpg",
    }, {
      title: "Chain History Sign",
      lat: "52.483",
      lng: "-2.09092",
      description:
        "Learn more about the history of Chain-Making!",
      icon: "assets/images/dudley-2/chain-history-sign.jpg"
    }, {
      title: "Astle's Bridge",
      lat: "52.48428",
      lng: "-2.08232",
      description:
        "The bridge is dedicated to a West Bromwich Albion FC legend, Jeff Astle!",
      icon: "assets/images/dudley-2/astles-bridge.jpg"
    }, {
      title: "Anchor Sign",
      lat: "52.48489",
      lng: "-2.07793",
      description:
        "A little dedication to the Anchor and Chain manufacturers of old!",
      icon: "assets/images/dudley-2/anchor-sign.jpg"
    }, {
      title: "Cooper Sign",
      lat: "52.48566",
      lng: "-2.07475",
      description:
        "The transporter, named as Cooper was the person you went to see when you nedded supplies moving!",
      icon: "assets/images/dudley-2/cooper-sign.jpg",
    }, {
      title: "The Bumble Hole",
      lat: "52.48947",
      lng: "-2.07331",
      description:
        "A magnificent outdoor, woodland area full of rich history and an integral part to what made the Black Country Canals so great!",
      icon: "assets/images/dudley-2/the-bumble-hole.jpg"
    }, {
      title: "Windmills End Pumping Station",
      lat: "52.49138",
      lng: "-2.06873",
      description:
        "A piece of history left for you to explore and filled with information about its importance to building the canals.",
      icon: "assets/images/dudley-2/windmill-pumping-station.jpg"
    }, {
      title: "Netherton Tunnel",
      lat: "52.49341",
      lng: "-2.06903",
      description:
        "Come see the last ever canal tunnel to be built in the UK! bring a torch!",
      icon: "assets/images/dudley-2/tunnel-netherton.jpg",
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
          "<div style = 'width:100%;min-height:30px;font-weight:bold;'>" + data.title + "</div>" + data.description 
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
