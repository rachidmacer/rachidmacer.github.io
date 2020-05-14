var lat = document.getElementById("lat");
var lon = document.getElementById("lon")

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLongitudePosition);
    navigator.geelocation.getCurrentPosition(showLatitudePosition);
  } else {
    lon.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showLongitudePosition(lonPosition) {
  lon.innerHTML = lonPosition.coords.longitude;
}

function showLatitudePosition(latPosition) {
  lat.innerHTML = latPosition.coords.latitude
}
