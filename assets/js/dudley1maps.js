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
        "The magnificent Nine (technically now 8) Locks, otherwise known as the Delph Locks is where the Dudley No.1 Path begins",
      icon: "assets/images/dudley-1/delph.jpg",
    }, {
      title: "The Waterfront",
      lat: "52.4871",
      lng: "-2.115651",
      description:
        "Amazing building, scenery and an array of pubs and events, the Waterfront is a beautiful place to enjoy!",
      icon: "assets/images/dudley-1/the-waterfront.jpg",
    }, {
      title: "Peartree Roving Bridge",
      lat: "52.49202",
      lng: "-2.10246",
      description:
        "Possibly one of the smallest bridges you will find, but a part of a beautiful walk.",
      icon: "assets/images/dudley-1/peartree.jpg",
    }, {
      title: "Canal Cottage",
      lat: "52.49786",
      lng: "-2.0989",
      description:
        "The Keeper of the locks!",
      icon: "assets/images/dudley-1/canal-cottage.jpg",
    }, {
      title: "Park Lane Viaduct",
      lat: "52.49854",
      lng: "-2.09926",
      description:
        "Amazing architecture! The bridges are a spectacle and should be admired!",
      icon: "assets/images/dudley-1/park-lane-viaduct.jpg",
    }, {
      title: "Canal Park",
      lat: "52.49913",
      lng: "-2.09997",
      description:
        "What a way to spend the day with your family or friends by coming for a picnic at the park!",
      icon: "assets/images/dudley-1/canal-park.jpg",
    }, {
      title: "Dudley Tunnel",
      lat: "52.50098",
      lng: "-2.10055",
      description:
        "The tunnel that can only be accessed by a boat travels underneath Dudley Town Centre, to see the limestone tunnel! a whole new world can be discovered here! A must see!",
      icon: "assets/images/dudley-1/tunnel-dudley.jpg",
    }, {
      title: "The Black Country Museum",
      lat: "52.52009",
      lng: "-2.07526",
      description:
        "If you're a Peaky Blinders fan, then this is possibly the most important place you could ever visit!",
      icon: "assets/images/dudley-1/bc-museum.jpg",
    }, {
      title: "The Fishing Ornament",
      lat: "52.51867",
      lng: "-2.07391",
      description:
        "A nice little find on the path! The locals alway like to show some humour along the way!",
      icon: "assets/images/dudley-1/fishing.jpg",
    }, {
      title: "The Old Rail Line",
      lat: "52.52197",
      lng: "-2.06357",
      description:
        "Another aged transportation system ran close to the original transportation system of the old black country!",
      icon: "assets/images/dudley-1/railway.jpg",
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
