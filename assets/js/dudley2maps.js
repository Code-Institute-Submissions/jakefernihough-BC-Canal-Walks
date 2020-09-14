function initMap() { //main map view
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      "lat": "52.49824",
      "lng": "2.09684",
    },
  });

      // markers
  var markers = [{
      title: "Blowers Green Pump House",
      lat: "52.49824",
      lng: "-2.09684",
      description:
        '<p>The Dudley No.2 Canal Path begins at the historical Blowers Green Pump House!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/blowers-green-pump.jpg"></img>',
    }, {
      title: "Dudley No.2 Canal Sign",
      lat: "52.49725",
      lng: "-2.09849",
      description:
        '<p>This is the sign that welcomes you to the No.2 Path!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/dudley2-canal-sign.jpg"></img>',
    }, {
      title: "Canal History Plot",
      lat: "52.49631",
      lng: "-2.09642",
      description:
        'Read a little bit about the Black Country History on your journey!  <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/canal-history-plot.jpg"></img>',
    }, {
      title: "The Bumble Hole Man Sign",
      lat: "52.49192",
      lng: "-2.09871",
      description:
        'The Black Country Man points the way to the Bumble Hole! <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/bumble-hole-man.jpg"></img>',
    }, {
      title: "The Coal Church Sign",
      lat: "52.49628",
      lng: "-2.09684",
      description:
        '<p>History section about the St. Andrews Church</p>  <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/coalition-sign.jpg"></img>',
    }, {
      title: "Brewins Tunnel Bridge",
      lat: "52.49192",
      lng: "-2.09871",
      description:
        'Brewins Tunnel Bridge is on of the more impressive bridges to be built along the No.2 Path  <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/brewins-tunnel.jpg"></img>',
    }, {
      title: "Netherton Resevoir",
      lat: "52.48332",
      lng: "-2.09214",
      description:
        '<p>The centre piece to the No.2 Path is the amazing Resevoir! A fantastic day trip filled with water activities for the family!</p>  <img style="width:100%;height:20%;float:left;" src="images/assets/dudley-2/netherton-resevoir.jpg"></img>',
    }, {
      title: "Chain History Sign",
      lat: "52.483",
      lng: "-2.09092",
      description:
        '<p>Learn more about the history of Chain-Making!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/chain-history-sign.jpg"></img>',
    }, {
      title: "Astle's Bridge",
      lat: "52.48428",
      lng: "-2.08232",
      description:
        '<p>The bridge is dedicated to a West Bromwich Albion FC legend, Jeff Astle!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/astles-bridge.jpg"></img>',
    }, {
      title: "Anchor Sign",
      lat: "52.48489",
      lng: "-2.07793",
      description:
        '<p>A little dedication to the Anchor and Chain manufacturers of old!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/anchor-sign.jpg"></img>',
    }, {
      title: "Cooper Sign",
      lat: "52.48566",
      lng: "-2.07475",
      description:
        '<p>The transporter, named as Cooper was the person you went to see when you nedded supplies moving!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/cooper-sign.jpg"></img>',
    }, {
      title: "The Bumble Hole",
      lat: "52.48947",
      lng: "-2.07331",
      description:
        '<p>A magnificent outdoor, woodland area full of rich history and an integral part to what made the Black Country Canals so great!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/the-bumble-hole.jpg"></img>',
    }, {
      title: "Windmills End Pumping Station",
      lat: "52.49138",
      lng: "-2.06873",
      description:
        '<p>A piece of history left for you to explore and filled with information about its importance to building the canals.</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/windmill-pumping-station.jpg"></img>',
    }, {
      title: "Netherton Tunnel",
      lat: "52.49341",
      lng: "-2.06903",
      description:
        '<p>Come see the last ever canal tunnel to be built in the UK! bring a torch!</p> <img style="width:100%;height:20%;float:left;" src="assets/images/dudley-2/tunnel-netherton.jpg"></img>',
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
          "<div style = 'width:100%;min-height:100%;'>" + "<div style = 'font-weight:bold;'>" + data.title + "</div>" + data.description + "</div>"
        );
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }
}
