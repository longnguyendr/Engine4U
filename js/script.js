var map;
var marker;

onDeviceReady();
//document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  navigator.geolocation.getCurrentPosition(test);
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  var marker = new google.maps.Marker({
     position: {lat: -34.397, lng: 150.644},
     map: map
   });

   var geocoder = new google.maps.Geocoder();

 document.getElementById('submit').addEventListener('click', function() {
   geocodeAddress(geocoder, map);
 });
}

function test(position) {
  var place = {lat: position.coords.latitude, lng: position.coords.longitude}
  map.setCenter(place);
  marker = new google.maps.Marker({
     position: place,
     map: map
   });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
        marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
