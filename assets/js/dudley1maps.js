function initMap() { //main map view
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      "lat": "52.4689",
      "lng": "-2.148731",
    },
  });

      // markers
  var markers = [{
      title: "Delph Locks",
      lat: "52.4777",
      lng: "-2.1191",
      description:
        '<p>The magnificent Nine Locks (technically now 8 locks) , otherwise known as the Delph Locks is where the Dudley No.1 Path begins.</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/delph.jpg"></img>',
    }, {
      title: "The Waterfront",
      lat: "52.4871",
      lng: "-2.115651",
      description:
        '<p>Amazing buildings, scenery and an array of pubs and events, the Waterfront is a beautiful place to enjoy!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/the-waterfront.jpg",></img>',
    }, {
      title: "Peartree Roving Bridge",
      lat: "52.49202",
      lng: "-2.10246",
      description:
        '<p>Possibly one of the smallest bridges you will find, but a part of a beautiful walk.</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/peartree.jpg"></img>',
    }, {
      title: "Canal Cottage",
      lat: "52.49786",
      lng: "-2.0989",
      description:
        '<p>The Keeper of the locks!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/canal-cottage.jpg"></img>',
    }, {
      title: "Park Lane Viaduct",
      lat: "52.49854",
      lng: "-2.09926",
      description:
        '<p>Amazing architecture! The bridges are a spectacle and should be admired!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/park-lane-viaduct.jpg"></img>',
    }, {
      title: "Canal Park",
      lat: "52.49913",
      lng: "-2.09997",
      description:
        '<p>What a way to spend the day with your family or friends by coming for a picnic at the park!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/canal-park.jpg"></img>',
    }, {
      title: "Dudley Tunnel",
      lat: "52.50098",
      lng: "-2.10055",
      description:
        '<p>The tunnel that can only be accessed by a boat travels underneath Dudley Town Centre, to see the limestone tunnel! a whole new world can be discovered here! A must see!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/tunnel-dudley.jpg"></img>',
    }, {
      title: "The Black Country Museum",
      lat: "52.52009",
      lng: "-2.07526",
      description:
        '<p>If you are a Peaky Blinders fan, then this is possibly the most important place you could ever visit!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/bc-museum.jpg"></img>',
    }, {
      title: "The Fishing Ornament",
      lat: "52.52545",
      lng: "-2.07237",
      description:
        '<p>A nice little find on the path! The locals alway like to show some humour along the way!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/fishing.jpg"></img>', 
    }, {
      title: "The Old Rail Line",
      lat: "52.52197",
      lng: "-2.06357",
      description:
        '<p>Another aged transportation system ran close to the original transportation system of the old black country!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-1/railline.jpg"></img>',
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
  //InfoWindow.
  var infoWindow = new google.maps.InfoWindow();
  for (var i = 0; i < markers.length; i++) {
    var data = markers[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: data.title,
    });

    //click event to the marker.
    (function (marker, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        infoWindow.setContent(
           "<div style = 'width:100%;min-height:80px;'>" + "<div style = 'font-weight:bold;'>" + data.title + "</div>" + data.description + "</div>" 
        );
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }
}
