var initialize = function(){
  var center = {lat: 55.857103, lng: -4.243951};
  var zoom = 15;
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, zoom);
  mainMap.addMarker(center);
  mainMap.addClickEvent();

  var button = document.querySelector("#bounce-button");
  button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var christiePark = {
    lat: 55.989661,
      lng: -4.587840
    };

    var contentString = '<div id = "content">' +
    '<h1>Christie Park</h1>'+
    '<p>Christie Park lies in the heart of the village of Alexandria near the A82.</p>' +
    '<br/>'+
    '<h3>Jia lost her frisbee here at the age of 16 :)</h3>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
  var parkButton = document.getElementById('park-button');
  var christieParkMarker = mainMap.addMarker(christiePark);

  google.maps.event.addListener(christieParkMarker, 'click',  function(){
    infowindow.open(mainMap, christieParkMarker);
  })
  parkButton.addEventListener('click', mainMap.move.bind(mainMap)); 
}


window.addEventListener("load", initialize);