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
        "Start off the Stourbridge Canal with a wonder through the Buckpool Nature Reserve!",
      icon: "assets/images/stourbridge/buckpool-reserve.jpg",
    }, {
      title: "Locks Buckpool House",
      lat: "52.47951",
      lng: "-2.14963",
      description:
        "The keeper of the locks is located at the Buckppol House!",
      icon: "assets/images/stourbridge/buckpool-house.jpg",
    }, {
      title: "The Poplars",
      lat: "52.47781",
      lng: "-2.15222",
      description:
        "Just one of the beautiful views you get to see on the Stourbridge Canal!",
      icon: "assets/images/stourbridge/the-poplars.jpg",
    },  {
      title: "The Dock Pub",
      lat: "52.47731",
      lng: "-2.15361",
      description:
        "Take a break at one of the oldest pubs in the area; The Dock!",
      icon: "assets/images/stourbridge/the-dock-pub",
    },  {
      title: "The Dock Sign",
      lat: "52.47735",
      lng: "-2.15393",
      description:
        "Many directions to find new adventures!",
      icon: "assets/images/stourbridge/dock-sign.jpg",
    },  {
      title: "Glass Cone Boathouse",
      lat: "52.47731",
      lng: "-2.15361",
      description:
        "The place where all the new supplies would be shipped to and from the Glass Cone!",
      icon: "assets/images/stourbridge/boathouse.jpg",
    }, {
      title: "Glass Cone Museum",
      lat: "52.47721",
      lng: "-2.15476",
      description:
        "An amazing piece of history of the Black Country Canals, a must-see for tourists!",
      icon: "assets/images/stourbridge/glass-museum.jpg",
    }, {
      title: "Old Glass Warehouse",
      lat: "52.47635",
      lng: "-2.15677",
      description:
        "This is where the work was done by the most talented people of the Industrial Revolution!",
      icon: "assets/images/stourbridge/old-glass-warehouse.jpg",
    }, {
      title: "Ornament Dock",
      lat: "52.46988",
      lng: "-2.15801",
      description:
        "One local likes to show off some fun ornaments for daily walkers!",
      icon: "assets/images/stourbridge/ornament-dock",
    }, {
      title: "Wordsley Junction Bridge",
      lat: "52.47287",
      lng: "-2.16387",
      description:
        "The bridge takes us towards Stourbridge or Kinver. Depending on which direction you want to take!",
      icon: "assets/images/stourbridge/wordsley-junction.jpg",
    }, {
      title: "Stourbridge Tow Path",
      lat: "52.46988",
      lng: "-2.15801",
      description:
        "The final push before Stourbridge! Many boat owners like to gather around here for a pit-stop and fishing!",
      icon: "assets/images/stourbridge/tow-path.jpg",
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
}
