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
        '<p>Start off the Stourbridge Canal with a wonder through the Buckpool Nature Reserve!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/buckpool-reserve.jpg"></img>',
    }, {
      title: "Locks Buckpool House",
      lat: "52.47951",
      lng: "-2.14963",
      description:
        '<p>The keeper of the locks is located at the Buckppol House!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/buckpool-house.jpg"></img>',
    }, {
      title: "The Poplars",
      lat: "52.47781",
      lng: "-2.15222",
      description:
        '<p>Just one of the beautiful views you get to see on the Stourbridge Canal!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/the-poplars.jpg"></img>',
    },  {
      title: "The Dock Pub",
      lat: "52.47731",
      lng: "-2.15361",
      description:
        '<p>Take a break at one of the oldest pubs in the area; The Dock!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/the-dock-pub"></img>',
    },  {
      title: "The Dock Sign",
      lat: "52.47735",
      lng: "-2.15393",
      description:
        '<p>Many directions to find new adventures!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/dock-sign.jpg"></img>',
    },  {
      title: "Glass Cone Boathouse",
      lat: "52.47731",
      lng: "-2.15361",
      description:
        '<p>The place where all the new supplies would be shipped to and from the Glass Cone!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/boathouse.jpg"></img>',
    }, {
      title: "Glass Cone Museum",
      lat: "52.47721",
      lng: "-2.15476",
      description:
        '<p>An amazing piece of history of the Black Country Canals, a must-see for tourists!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/glass-museum.jpg"></img>',
    }, {
      title: "Old Glass Warehouse",
      lat: "52.47635",
      lng: "-2.15677",
      description:
        '<p>This is where the work was done by the most talented people of the Industrial Revolution!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/old-glass-warehouse.jpg"></img>',
    }, {
      title: "Ornament Dock",
      lat: "52.46988",
      lng: "-2.15801",
      description:
        '<p>One local likes to show off some fun ornaments for daily walkers!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/ornament-dock"></img>',
    }, {
      title: "Wordsley Junction Bridge",
      lat: "52.47287",
      lng: "-2.16387",
      description:
        '<p>The bridge takes us towards Stourbridge or Kinver. Depending on which direction you want to take!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/wordsley-junction.jpg"></img>',
    }, {
      title: "Stourbridge Tow Path",
      lat: "52.46988",
      lng: "-2.15801",
      description:
        '<p>The final push before Stourbridge! Many boat owners like to gather around here for a pit-stop and fishing!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/stourbridge/tow-path.jpg"></img>',
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
        "<div style = 'width:100%;min-height:80px;'>" + "<div style = 'font-weight:bold;'>" + data.title + "</div>" + data.description + "</div>"
        );
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }
}
