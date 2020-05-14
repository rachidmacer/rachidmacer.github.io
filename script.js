var x = document.getElementById("lat");
var y = document.getElementById("lon");
var z = x + "," + y;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geelocation.getCurrentPosition(showPosition);
  } else {
    lon.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    x.innerHTML = position.coords.latitude;
    y.innerHTML = position.coords.longitude;
}
