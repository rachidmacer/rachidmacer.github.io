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
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
}
