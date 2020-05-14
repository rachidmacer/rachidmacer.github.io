var lat = document.getElementById("lat");
var lon = document.getElementById("lon");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geelocation.getCurrentPosition(showLatitudePosition);
    navigator.geolocation.getCurrentPosition(showLongitudePosition);
  } else {
    lon.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showLatitudePosition(latPosition) {
  lat.innerHTML = latPosition.coords.latitude;
}

function showLongitudePosition(lonPosition) {
  lon.innerHTML = lonPosition.coords.longitude;
}
