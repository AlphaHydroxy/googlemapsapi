var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords, onclick){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);

  google.maps.event.addListener(marker, 'click', onclick);
}

var contentString = '<div id = "content">' +
'<h1>Christie Park</h1>'+
'<p>Christie Park lies in the heart of the village of Alexandria near the A82.</p>' +
'<br/>'+
'<h3>Jia lost her frisbee here at the age of 16 :)</h3>'+
'</div>';

  MapWrapper.prototype.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
      var coords = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      this.addMarker(coords);
    }.bind(this));

  };

  MapWrapper.prototype.bounceMarkers = function(){
    this.markers.forEach(function(marker){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    })
  };

  MapWrapper.prototype.move = function(){
    var christiePark = {
      lat: 55.989661,
        lng: -4.587840
      };
      this.googleMap.setCenter(christiePark);

};

  
  // Add an Info Window to one of the markers on your map (see the Google Maps API documentation) with some information about the place it's marking.

  // Add a button below the map that says 'Take me to Chicago' (or another city) which moves the center of the map to be the co-ordinates of that city. Tip: look up the 'setCenter' method for Google Maps.

