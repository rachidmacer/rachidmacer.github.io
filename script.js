var lat = document.getElementById("lat");
var lon = document.getElementById("lon");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geelocation.getCurrentPosition(showPosition);
  } else {
    lon.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat.innerHTML = position.coords.latitude;
  lon.innerHTML = position.coords.longitude;
}
